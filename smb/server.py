import http.server
import socketserver
import socket
import threading
import os
import json
import urllib.request
import urllib.error
import functools
import time
import hashlib

PORT = 8092
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

MAX_DEMO_CHATS_PER_IP = 5
ip_chat_tracker = {}

def get_gemini_api_key():
    key = os.environ.get("GEMINI_API_KEY", "").strip()
    if key:
        return key

    env_path = os.path.join(DIRECTORY, ".env")
    if os.path.exists(env_path):
        try:
            with open(env_path, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if line.startswith("GEMINI_API_KEY="):
                        val = line.split("=", 1)[1].strip().strip('"').strip("'")
                        if val:
                            return val
        except Exception:
            pass
    return ""

SYSTEM_PROMPTS = {
    "wellness": """You are Ava, the 24/7 AI Patient Concierge for 'Lumina Aesthetic & Wellness Clinic' (a premium small-business medical spa and dental aesthetics clinic).
Business Details:
- Hours: Mon-Fri 8:00 AM - 7:00 PM, Sat 9:00 AM - 4:00 PM, Closed Sunday.
- Services: Teeth Whitening ($299), Invisalign Consultation (Free), HydraFacial ($185), Botox & Fillers ($12/unit), Full Smile Makeover ($2,500+).
- Insurance: PPO Dental plans accepted; CareCredit 0% financing available for cosmetic treatments.
- Location: 450 Grand Avenue, Suite 300 (Complimentary Valet Parking).
Guidelines: Warm, empathetic, professional, and helpful. Always encourage booking a free 15-minute consultation. If the user asks something outside clinic services, politely redirect to wellness treatments.""",

    "contractor": """You are Jack, the 24/7 Dispatch & Service Coordinator for 'ProCraft Home Services & HVAC' (licensed, insured residential contracting, plumbing & HVAC specialists).
Business Details:
- Hours: 24/7 Emergency Dispatch available; Standard Office Hours: Mon-Sat 7:00 AM - 6:00 PM.
- Services: Emergency Pipe Repair ($180 service fee), AC Tune-up & Maintenance ($99 special), Heat Pump Installation ($3,800 - $6,500), Water Heater Replacement ($1,250+), Bathroom Remodel ($8,000+).
- Guarantee: 100% Satisfaction Guarantee, 5-Year Labor Warranty on all installations.
- Emergency: Guaranteed 60-minute arrival for active leaks or heating outages in winter.
Guidelines: Direct, reassuring, capable, and urgent when emergencies are mentioned. Encourage scheduling a free on-site estimate or immediate technician dispatch.""",

    "legal": """You are Sophia, the Client Intake Specialist for 'Vanguard Legal & Wealth Advisory' (boutique business law, estate planning, and tax strategy firm).
Business Details:
- Hours: Mon-Fri 8:30 AM - 5:30 PM.
- Services: Business Formation & LLC ($850), Comprehensive Family Trust & Estate Plan ($1,950), Contract Review & Risk Audit ($450), Fractional General Counsel ($1,500/mo).
- Consultation: Initial 20-minute strategy discovery call is complimentary.
- Privacy: All discussions protected by attorney-client privilege.
Guidelines: Polished, confidential, analytical, and courteous. Frame answers with professional legal diligence while clearly inviting the prospect to reserve a discovery session."""
}

class SMBHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        clean_path = self.path.split("?")[0].lower()
        blocked_extensions = (".env", ".py", ".pyc", ".json", ".key", ".pem", ".log")
        if (
            clean_path.startswith("/.")
            or "/." in clean_path
            or any(clean_path.endswith(ext) for ext in blocked_extensions)
            or "__pycache__" in clean_path
        ):
            self.send_error(403, "Access Denied: Protected resource.")
            return None
        return super().send_head()

    def do_GET(self):
        if self.path == "/api/demo-status":
            client_ip = self.client_address[0]
            used = ip_chat_tracker.get(client_ip, 0)
            remaining = max(0, MAX_DEMO_CHATS_PER_IP - used)
            self._send_json({
                "remaining_credits": remaining,
                "max_credits": MAX_DEMO_CHATS_PER_IP,
                "used": used
            })
            return
        return super().do_GET()

    def do_POST(self):
        if self.path == "/api/smb-chat":
            self.handle_chat()
        elif self.path == "/api/book-appointment":
            self.handle_booking()
        else:
            self.send_error(404, "Not Found")

    def handle_chat(self):
        client_ip = self.client_address[0]
        used = ip_chat_tracker.get(client_ip, 0)

        if used >= MAX_DEMO_CHATS_PER_IP:
            self._send_json({
                "success": False,
                "quota_reached": True,
                "remaining_credits": 0,
                "response": "🔒 Demo Limit Reached: You have tested the 5 free AI customer interactions. To install this 24/7 AI Receptionist on your business website, please contact Michael Jay Diaz at michaeljayo.diaz@gmail.com."
            }, status=429)
            return

        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            data = json.loads(body)
            message = data.get("message", "").strip()
            industry = data.get("industry", "wellness").lower()
        except Exception:
            self._send_json({"error": "Invalid request body."}, status=400)
            return

        if not message:
            self._send_json({"error": "Message cannot be empty."}, status=400)
            return

        api_key = get_gemini_api_key()
        if not api_key:
            self._send_json({"error": "GEMINI_API_KEY missing in server environment."}, status=500)
            return

        system_instruction = SYSTEM_PROMPTS.get(industry, SYSTEM_PROMPTS["wellness"])
        models = ["gemini-flash-lite-latest", "gemini-3.5-flash", "gemini-flash-latest"]
        last_err = None

        for model_name in models:
            try:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
                payload = {
                    "system_instruction": {"parts": [{"text": system_instruction}]},
                    "contents": [{"parts": [{"text": message}]}],
                    "generationConfig": {
                        "temperature": 0.4,
                        "maxOutputTokens": 400
                    }
                }

                req = urllib.request.Request(
                    url,
                    data=json.dumps(payload).encode("utf-8"),
                    headers={"Content-Type": "application/json"},
                    method="POST"
                )

                with urllib.request.urlopen(req, timeout=20) as response:
                    res_body = response.read().decode("utf-8")
                    res_json = json.loads(res_body)
                    reply = res_json["candidates"][0]["content"]["parts"][0]["text"].strip()

                    ip_chat_tracker[client_ip] = used + 1
                    remaining = max(0, MAX_DEMO_CHATS_PER_IP - ip_chat_tracker[client_ip])

                    self._send_json({
                        "success": True,
                        "response": reply,
                        "remaining_credits": remaining,
                        "max_credits": MAX_DEMO_CHATS_PER_IP
                    })
                    return

            except urllib.error.HTTPError as e:
                err_body = e.read().decode("utf-8")
                last_err = f"HTTP {e.code}: {err_body}"
            except Exception as e:
                last_err = str(e)

        self._send_json({
            "success": False,
            "response": "⚠️ Service temporarily busy. Please contact our front desk directly at (555) 234-8900."
        }, status=502)

    def handle_booking(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            data = json.loads(body)
        except Exception:
            data = {}

        name = data.get("name", "Valued Client")
        service = data.get("service", "General Consultation")
        date = data.get("date", "Tomorrow")
        time_slot = data.get("time", "10:00 AM")
        email = data.get("email", "client@example.com")
        phone = data.get("phone", "(555) 000-0000")

        booking_id = f"BK-{hashlib.sha256(f'{name}{service}{time.time()}'.encode('utf-8')).hexdigest()[:8].upper()}"

        self._send_json({
            "status": "confirmed",
            "booking_id": booking_id,
            "message": f"Appointment successfully scheduled for {name}!",
            "summary": {
                "service": service,
                "datetime": f"{date} at {time_slot}",
                "contact": f"{email} · {phone}",
                "calendar_sync": "Google Calendar & Apple iCal sync dispatched",
                "sms_confirmation": f"SMS reminder scheduled to {phone}"
            }
        })

    def _send_json(self, data, status=200):
        res_bytes = json.dumps(data, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(res_bytes)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(res_bytes)

class ThreadingServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = False

if __name__ == "__main__":
    handler = functools.partial(SMBHandler, directory=DIRECTORY)
    with ThreadingServer(("", PORT), handler) as httpd:
        print(f"SMB Showcase Server listening on port {PORT}", flush=True)
        httpd.serve_forever()
