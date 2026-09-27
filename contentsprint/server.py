import http.server
import socketserver
import os
import json
import urllib.request
import urllib.error
import functools

PORT = 8094
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

MAX_DEMO_CAMPAIGNS_PER_IP = 5
ip_campaign_tracker = {}

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

CAMPAIGN_SYSTEM_PROMPT = """You are ContentSprint AI, an elite Growth Marketing & Creative Ad Strategy Engine engineered by Michael Jay Diaz (MJ).
Your objective is to transform any product concept, business value proposition, or marketing brief into an ultra-high-converting, multi-channel marketing campaign kit.

You MUST respond strictly with valid JSON. Do not include markdown code block backticks (like ```json), just pure valid JSON matching this exact structure:
{
  "campaign_overview": {
    "campaign_name": "Punchy creative campaign title",
    "primary_angle": "Core emotional or logical hook",
    "target_persona_summary": "1-sentence description of the ideal buyer"
  },
  "meta_ads": {
    "headline": "Scroll-stopping headline (under 40 chars)",
    "primary_text": "High-converting ad copy with an intriguing hook, emotional pain points, clear solution, and urgency (2-3 paragraphs with emojis).",
    "cta_button": "Get Started / Claim Offer / Book Now",
    "suggested_visual_concept": "Description of the best-performing image or video creative for this ad"
  },
  "google_search_ads": {
    "headlines": [
      "Headline 1 (Max 30 chars)",
      "Headline 2 (Max 30 chars)",
      "Headline 3 (Max 30 chars)"
    ],
    "descriptions": [
      "Description 1 (Max 90 chars detailing value and urgency)",
      "Description 2 (Max 90 chars with strong call to action and proof)"
    ]
  },
  "tiktok_reels_script": {
    "hook_0_to_3s": "High-energy pattern-interrupt hook (visual action + spoken text)",
    "body_3_to_20s": [
      "Point 1: Agitate the frustrating status quo",
      "Point 2: Introduce the breakthrough product",
      "Point 3: Quick demonstration of the tangible result"
    ],
    "cta_20_to_30s": "Clear single call-to-action to link in bio / visit site"
  },
  "linkedin_carousel": [
    {
      "slide": 1,
      "title": "Title Slide: The Bold Contrarian Hook",
      "body": "Brief provocative statement that compels the user to swipe.",
      "visual_tag": "HOOK SLIDE"
    },
    {
      "slide": 2,
      "title": "Slide 2: The Silent Mistake",
      "body": "Explain why 90% of companies or customers struggle with this problem.",
      "visual_tag": "THE PROBLEM"
    },
    {
      "slide": 3,
      "title": "Slide 3: The Framework",
      "body": "Break down the exact 3-step solution or formula.",
      "visual_tag": "THE SHIFT"
    },
    {
      "slide": 4,
      "title": "Slide 4: Real Proof / Metrics",
      "body": "Quantified result (e.g. 5x faster, 40% cost reduction, zero downtime).",
      "visual_tag": "THE RESULTS"
    },
    {
      "slide": 5,
      "title": "Slide 5: Actionable Next Step",
      "body": "Summary takeaway + comment below or visit link to get the full guide.",
      "visual_tag": "CALL TO ACTION"
    }
  ],
  "visual_prompts": {
    "midjourney_prompt": "Photorealistic prompt with lighting, camera angle, and aspect ratio --ar 16:9",
    "ad_mockup_headline": "Punchy 4-word hero title for visual banner",
    "ad_mockup_sub": "1-line subtext for visual banner",
    "recommended_color_palette": "e.g., Electric Cyan & Deep Obsidian with Coral Accent"
  }
}"""

class ContentSprintHandler(http.server.SimpleHTTPRequestHandler):
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
            used = ip_campaign_tracker.get(client_ip, 0)
            remaining = max(0, MAX_DEMO_CAMPAIGNS_PER_IP - used)
            self._send_json({
                "remaining_credits": remaining,
                "max_credits": MAX_DEMO_CAMPAIGNS_PER_IP,
                "used": used
            })
            return
        return super().do_GET()

    def do_POST(self):
        if self.path == "/api/generate-campaign":
            self.handle_generate()
        else:
            self.send_error(404, "Not Found")

    def handle_generate(self):
        client_ip = self.client_address[0]
        used = ip_campaign_tracker.get(client_ip, 0)

        if used >= MAX_DEMO_CAMPAIGNS_PER_IP:
            self._send_json({
                "success": False,
                "quota_reached": True,
                "remaining_credits": 0,
                "error": "🔒 Demo Limit Reached: You have used your 5 free live marketing campaign runs. To deploy ContentSprint AI for your marketing team or agency, contact Michael Jay Diaz at michaeljayo.diaz@gmail.com."
            }, status=429)
            return

        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            data = json.loads(body)
            product_name = (data.get("product_name") or data.get("brand_name") or "").strip()
            target_audience = (data.get("target_audience") or data.get("audience") or "").strip()
            value_prop = (data.get("value_prop") or data.get("unique_angle") or "").strip()
            tone = (data.get("tone") or data.get("category") or "High Energy & Direct Response").strip()
        except Exception:
            self._send_json({"error": "Invalid request payload."}, status=400)
            return

        if not product_name or not value_prop:
            self._send_json({"error": "Product Name and Core Value Proposition are required."}, status=400)
            return

        api_key = get_gemini_api_key()
        if not api_key:
            self._send_json({"error": "GEMINI_API_KEY missing in server environment."}, status=500)
            return

        user_prompt = f"""Generate a full multi-channel ad and marketing campaign for:
Product Name: {product_name}
Target Audience: {target_audience or 'High-intent modern buyers'}
Core Value Proposition & Differentiators: {value_prop}
Brand Voice & Tone: {tone}

Generate all components with creative excellence according to the JSON schema."""

        models = ["gemini-flash-lite-latest", "gemini-3.5-flash", "gemini-flash-latest"]
        last_err = None

        for model_name in models:
            try:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
                payload = {
                    "contents": [
                        {
                            "parts": [
                                {"text": CAMPAIGN_SYSTEM_PROMPT},
                                {"text": user_prompt}
                            ]
                        }
                    ],
                    "generationConfig": {
                        "temperature": 0.35,
                        "maxOutputTokens": 2048,
                        "responseMimeType": "application/json"
                    }
                }

                req = urllib.request.Request(
                    url,
                    data=json.dumps(payload).encode("utf-8"),
                    headers={"Content-Type": "application/json"},
                    method="POST"
                )

                with urllib.request.urlopen(req, timeout=30) as response:
                    res_body = response.read().decode("utf-8")
                    res_json = json.loads(res_body)
                    raw_text = res_json["candidates"][0]["content"]["parts"][0]["text"].strip()

                    if raw_text.startswith("```json"):
                        raw_text = raw_text[7:]
                    if raw_text.startswith("```"):
                        raw_text = raw_text[3:]
                    if raw_text.endswith("```"):
                        raw_text = raw_text[:-3]
                    raw_text = raw_text.strip()

                    parsed_campaign = json.loads(raw_text)

                    ip_campaign_tracker[client_ip] = used + 1
                    remaining = max(0, MAX_DEMO_CAMPAIGNS_PER_IP - ip_campaign_tracker[client_ip])

                    self._send_json({
                        "success": True,
                        "model": model_name,
                        "remaining_credits": remaining,
                        "max_credits": MAX_DEMO_CAMPAIGNS_PER_IP,
                        "data": parsed_campaign,
                        "campaign": parsed_campaign
                    })
                    return

            except urllib.error.HTTPError as e:
                err_body = e.read().decode("utf-8")
                last_err = f"HTTP {e.code}: {err_body}"
            except Exception as e:
                last_err = str(e)

        self._send_json({
            "success": False,
            "error": f"ContentSprint generation failed: {last_err}"
        }, status=502)

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
    handler = functools.partial(ContentSprintHandler, directory=DIRECTORY)
    with ThreadingServer(("", PORT), handler) as httpd:
        print(f"ContentSprint AI Server listening on port {PORT}", flush=True)
        httpd.serve_forever()
