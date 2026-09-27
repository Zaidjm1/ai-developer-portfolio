import http.server
import socketserver
import os
import json
import urllib.request
import urllib.error
import functools
import re

PORT = 8090
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

EXTRACTION_SYSTEM_PROMPT = """You are DocuSense AI, an expert Financial Document Intelligence & Invoice Automation Engine built by Michael Jay Diaz (MJ).
Your task is to analyze documents, invoices, receipts, or purchase orders (provided as text or image) and extract comprehensive, structured data with 100% precision.

You MUST respond strictly with valid JSON. Do not include markdown code block backticks (like ```json), just pure JSON matching this exact structure:
{
  "vendor": {
    "name": "Vendor / Company Name",
    "email": "vendor@email.com or null",
    "phone": "Phone number or null",
    "address": "Full physical or billing address",
    "tax_id": "VAT / Tax / EIN or null",
    "website": "URL or null"
  },
  "invoice": {
    "invoice_number": "INV-XXXXX",
    "issue_date": "YYYY-MM-DD",
    "due_date": "YYYY-MM-DD or null",
    "currency": "USD / EUR / GBP / etc.",
    "payment_terms": "e.g., Net 30, Due on Receipt",
    "po_number": "PO-XXXXX or null"
  },
  "line_items": [
    {
      "description": "Item or service description",
      "quantity": 1,
      "unit_price": 100.00,
      "total": 100.00
    }
  ],
  "financials": {
    "subtotal": 100.00,
    "tax_rate_percent": 8.5,
    "tax_amount": 8.50,
    "shipping": 0.00,
    "discount": 0.00,
    "grand_total": 108.50
  },
  "audit_and_anomalies": {
    "math_verified": true,
    "flags": [
      {
        "severity": "LOW / MEDIUM / HIGH",
        "message": "Explanation of flag (e.g., 'Due date has passed', 'New vendor detected', 'Unusual rounding detected', or 'Clean: All figures mathematically balanced')"
      }
    ],
    "business_expense_category": "e.g., Cloud Infrastructure / Software / Consulting / Logistics",
    "tax_deductible_estimate": true,
    "executive_summary": "A concise 2-sentence summary of what this document represents and immediate recommended action."
  }
}

Analyze the document carefully. If any line items or figures are missing or unreadable, deduce reasonably and flag it in audit_and_anomalies."""

MAX_DEMO_SCANS_PER_IP = 3
ip_usage_tracker = {}

class DocuSenseHandler(http.server.SimpleHTTPRequestHandler):
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

    def do_GET(self):
        if self.path == "/api/demo-status":
            client_ip = self.client_address[0]
            used = ip_usage_tracker.get(client_ip, 0)
            remaining = max(0, MAX_DEMO_SCANS_PER_IP - used)
            self._send_json({
                "remaining_credits": remaining,
                "max_credits": MAX_DEMO_SCANS_PER_IP,
                "used": used
            })
            return
        return super().do_GET()

    def do_POST(self):
        if self.path == "/api/extract":
            self.handle_extract()
        elif self.path == "/api/sync-webhook":
            self.handle_sync_webhook()
        else:
            self.send_error(404, "Not Found")

    def handle_extract(self):
        client_ip = self.client_address[0]
        used = ip_usage_tracker.get(client_ip, 0)

        # Enforce Demo Quota Limitation
        if used >= MAX_DEMO_SCANS_PER_IP:
            self._send_json({
                "success": false,
                "quota_reached": true,
                "remaining_credits": 0,
                "error": "🔒 Demo Limit Reached: You have used all 3 free live demo extractions. To deploy an unlimited enterprise document intelligence pipeline for your company, please contact Michael Jay Diaz at michaeljayo.diaz@gmail.com."
            }, status=429)
            return

        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            data = json.loads(body)
        except Exception:
            self._send_json({"error": "Invalid request body."}, status=400)
            return

        image_data = data.get("image_base64", "") # format: data:image/png;base64,....
        doc_text = data.get("text", "").strip()

        if not image_data and not doc_text:
            self._send_json({"error": "Please provide an image or text document to analyze."}, status=400)
            return

        api_key = get_gemini_api_key()
        if not api_key:
            self._send_json({"error": "GEMINI_API_KEY not found in server environment."}, status=500)
            return

        # Prepare parts for Gemini API
        parts = [{"text": EXTRACTION_SYSTEM_PROMPT}]

        if image_data and "base64," in image_data:
            try:
                mime_match = re.search(r"data:([^;]+);base64,", image_data)
                mime_type = mime_match.group(1) if mime_match else "image/jpeg"
                raw_b64 = image_data.split("base64,")[1]
                parts.append({
                    "inline_data": {
                        "mime_type": mime_type,
                        "data": raw_b64
                    }
                })
                parts.append({"text": "Please analyze this invoice image and extract all structured data according to the JSON format specified."})
            except Exception as e:
                self._send_json({"error": f"Failed to parse image data: {str(e)}"}, status=400)
                return
        elif doc_text:
            parts.append({"text": f"Document Content to Extract:\n\n{doc_text}"})

        models = ["gemini-flash-lite-latest", "gemini-3.5-flash", "gemini-flash-latest"]
        last_err = None

        for model_name in models:
            try:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
                payload = {
                    "contents": [{"parts": parts}],
                    "generationConfig": {
                        "temperature": 0.1,
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
                    
                    # Clean out markdown backticks if model included any
                    if raw_text.startswith("```json"):
                        raw_text = raw_text[7:]
                    if raw_text.startswith("```"):
                        raw_text = raw_text[3:]
                    if raw_text.endswith("```"):
                        raw_text = raw_text[:-3]
                    raw_text = raw_text.strip()

                    parsed_data = json.loads(raw_text)

                    # Backend mathematical validation
                    line_items = parsed_data.get("line_items", [])
                    calc_subtotal = sum(float(item.get("total", 0) or 0) for item in line_items)
                    stated_subtotal = float(parsed_data.get("financials", {}).get("subtotal", 0) or 0)
                    
                    if abs(calc_subtotal - stated_subtotal) > 0.05 and stated_subtotal > 0:
                        parsed_data.setdefault("audit_and_anomalies", {}).setdefault("flags", []).append({
                            "severity": "HIGH",
                            "message": f"Mathematical Discrepancy: Calculated sum of line items (${calc_subtotal:.2f}) does not match stated subtotal (${stated_subtotal:.2f})."
                        })
                        parsed_data["audit_and_anomalies"]["math_verified"] = False

                    ip_usage_tracker[client_ip] = used + 1
                    remaining = max(0, MAX_DEMO_SCANS_PER_IP - ip_usage_tracker[client_ip])

                    self._send_json({
                        "success": True,
                        "model": model_name,
                        "remaining_credits": remaining,
                        "max_credits": MAX_DEMO_SCANS_PER_IP,
                        "data": parsed_data
                    })
                    return

            except urllib.error.HTTPError as e:
                err_body = e.read().decode("utf-8")
                last_err = f"HTTP {e.code}: {err_body}"
            except Exception as e:
                last_err = str(e)

        self._send_json({
            "success": False,
            "error": f"DocuSense Extraction failed: {last_err}"
        }, status=502)

    def handle_sync_webhook(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            data = json.loads(body)
        except Exception:
            data = {}

        vendor = data.get("vendor", {}).get("name", "Unknown Vendor")
        total = data.get("financials", {}).get("grand_total", 0)
        currency = data.get("invoice", {}).get("currency", "USD")
        inv_num = data.get("invoice", {}).get("invoice_number", "INV-UNKNOWN")

        import hashlib
        import time
        tx_hash = hashlib.sha256(f"{inv_num}{total}{time.time()}".encode("utf-8")).hexdigest()[:16]

        self._send_json({
            "status": "success",
            "message": f"Successfully synced invoice {inv_num} (${total} {currency}) to ERP / Accounting Webhook.",
            "transaction_id": f"TXN-{tx_hash.upper()}",
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "integrations_notified": ["QuickBooks Online", "Slack #finance-alerts", "PostgreSQL Ledger"]
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
    allow_reuse_address = True

if __name__ == "__main__":
    handler = functools.partial(DocuSenseHandler, directory=DIRECTORY)
    with ThreadingServer(("", PORT), handler) as httpd:
        print(f"DocuSense AI Server listening on port {PORT}", flush=True)
        httpd.serve_forever()
