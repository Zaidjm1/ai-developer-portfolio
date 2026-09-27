import http.server
import socketserver
import os
import json
import urllib.request
import urllib.error
import functools

PORT = 8088
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

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

SYSTEM_INSTRUCTION = """You are the AI Project Estimator for Michael Jay Diaz (MJ), an AI-assisted Full-Stack Developer and Automation Specialist.

CRITICAL OBJECTIVE & REALISM CHECKS:
1. Michael's actual engineering scope includes: Full-Stack Web Applications (React, Next.js, Node.js, Python, Supabase, PostgreSQL), E-Commerce Websites (Shopify / Stripe), SaaS MVPs, Custom Workflow Automations (APIs, Webhooks, OCR, CRM sync), Generative Media & Image Pipelines, and Mobile PWAs.
2. STRICT REALITY CHECK: If a user asks for something outside of software development, absurd, or physically impossible (e.g., 'rocket science project', 'aerospace engineering', 'quantum computing hardware', 'building an OS kernel from scratch', 'time machine', 'nuclear fusion', 'self-driving vehicle hardware'):
   - You MUST call it out immediately with honest realism.
   - State that this is outside the scope of software development and requires years of specialized institutional R&D and aerospace/hardware teams, not a software developer sprint. NEVER estimate a few days for impossible or multi-year physical engineering projects!
3. REALISTIC ESTIMATION BENCHMARKS for legitimate software & growth projects:
   - Simple Landing Page: 1 – 2 Business Days
   - AI SEO, GEO (Generative Engine Optimization) & AEO Setup: 2 – 3 Business Days (Knowledge Graph, Entity Schema.org markup, Perplexity / ChatGPT / Claude AI search citability audit, and semantic Q&A answer clusters).
   - Executive AI Ghostwriting & Thought Leadership Sprint: 2 – 4 Business Days (Voice calibration, 10-article founder LinkedIn/Substack sprint, viral hook engineering, and multi-channel publication pipeline).
   - Photorealistic Generative Visual Production: 2 – 3 Business Days (Custom AI studio pipelines for fashion/apparel modeling, executive headshots, commercial product mockups, and architectural hospitality ads).
   - Custom Workflow Automation / OCR / Scraper: 2 – 4 Business Days
   - AI Generative Media Pipeline: 2 – 4 Business Days
   - Full-Stack SaaS MVP / Client Portal: 4 – 7 Business Days
   - E-Commerce Website (Storefront, Cart, Stripe Checkout, Order Admin): 5 – 8 Business Days
   - Complex Multi-Tenant Platform / Cross-Platform App: 2 – 4 Weeks
4. INTERNAL WORKING CAPACITY: Michael operates on focused daily development sprints (accelerated by state-of-the-art AI pair-programming). DO NOT disclose his daily working hours to the user. Present all turnaround strictly as professional business days or weeks.
5. Tone & Structure:
   - Use clean Markdown with headers and bullet points.
   - Give a clear 'Estimated Delivery Timeline'.
   - Provide a realistic 'Sprint Milestone Breakdown'.
   - Include recommended tech stack.
   - End with a prompt to contact Michael at michaeljayo.diaz@gmail.com."""

class PortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        # SECURITY PROTECTION: Strictly block public access to .env, server scripts, config files, or hidden files
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

    def do_POST(self):
        if self.path == "/api/estimate":
            try:
                content_length = int(self.headers.get("Content-Length", 0))
                body = self.rfile.read(content_length).decode("utf-8")
                data = json.loads(body)
                prompt = data.get("prompt", "").strip()
            except Exception:
                prompt = ""

            if not prompt:
                self._send_json({"error": "Prompt cannot be empty."}, status=400)
                return

            api_key = get_gemini_api_key()

            if not api_key:
                fallback_msg = (
                    "⚠️ **Live Gemini API Key Not Configured Yet**\n\n"
                    "To enable real-time generative estimation, please paste your Gemini API key into the `.env` file in the project folder:\n"
                    "```env\nGEMINI_API_KEY=your_gemini_api_key_here\n```\n"
                    "Get a free API key at [Google AI Studio](https://aistudio.google.com/app/apikey)."
                )
                self._send_json({
                    "response": fallback_msg,
                    "reasoning": "Missing GEMINI_API_KEY in environment or .env file."
                })
                return

            # Call real Gemini API (using active models for this key, prioritized by verified low latency)
            models = ["gemini-flash-lite-latest", "gemini-3.5-flash", "gemini-flash-latest"]
            last_err = None

            for model_name in models:
                try:
                    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
                    payload = {
                        "system_instruction": {
                            "parts": [{"text": SYSTEM_INSTRUCTION}]
                        },
                        "contents": [
                            {
                                "parts": [{"text": f"User Project Inquiry: {prompt}"}]
                            }
                        ],
                        "generationConfig": {
                            "temperature": 0.2,
                            "maxOutputTokens": 800
                        }
                    }
                    
                    req = urllib.request.Request(
                        url,
                        data=json.dumps(payload).encode("utf-8"),
                        headers={"Content-Type": "application/json"},
                        method="POST"
                    )

                    with urllib.request.urlopen(req, timeout=25) as response:
                        res_body = response.read().decode("utf-8")
                        res_json = json.loads(res_body)
                        text = res_json["candidates"][0]["content"]["parts"][0]["text"]
                        
                        self._send_json({
                            "response": text,
                            "reasoning": f"Live {model_name} AI Inference · Evaluated against realistic engineering benchmarks."
                        })
                        return

                except urllib.error.HTTPError as e:
                    err_body = e.read().decode("utf-8")
                    # Sanitize error to avoid leaking any key or internal URL details
                    last_err = f"API Service Unavailable (HTTP {e.code})"
                except Exception as e:
                    last_err = "Request timed out or connection error"

            # If API call had an issue, return a clean message without exposing credentials
            self._send_json({
                "response": f"❌ **Estimation Service Notice**: {last_err}. Please try again in a few moments.",
                "reasoning": "The AI model service is temporarily busy. Retry shortly."
            })
        else:
            self.send_error(404, "Not Found")

    def _send_json(self, data, status=200):
        res_bytes = json.dumps(data).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(res_bytes)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(res_bytes)

class ThreadingServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True

if __name__ == "__main__":
    handler = functools.partial(PortfolioHandler, directory=DIRECTORY)
    with ThreadingServer(("", PORT), handler) as httpd:
        print(f"Server listening on port {PORT}", flush=True)
        httpd.serve_forever()

