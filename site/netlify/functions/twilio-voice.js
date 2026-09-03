const SHEET =
  "https://script.google.com/macros/s/AKfycbwJSMuBGzGcuQen6hIpaRBbwSRCBsTJ5xWjzjel4qxza8H7RIohkENEn9q-M1ptDVcv6g/exec";
const FORWARD_TO = "+61432149176";

function collectParams(event) {
  const params = { ...(event.queryStringParameters || {}) };
  if (event.body) {
    const raw = event.isBase64Encoded
      ? Buffer.from(event.body, "base64").toString("utf8")
      : event.body;
    try {
      const body = new URLSearchParams(raw);
      for (const [k, v] of body.entries()) params[k] = v;
    } catch (_) {}
  }
  return params;
}

exports.handler = async (event) => {
  const p = collectParams(event);
  const from = p.From || p.phone || "";
  const sid = p.CallSid || "";
  const status = p.CallStatus || "ringing";

  if (sid || from) {
    const u = new URL(SHEET);
    u.searchParams.set("source", "inbound_call");
    u.searchParams.set("lead_type", "call_now");
    u.searchParams.set("gtm_event", "inbound_twilio");
    u.searchParams.set("genuine", "unknown");
    u.searchParams.set("phone", from);
    u.searchParams.set("CallSid", sid);
    u.searchParams.set("From", from);
    u.searchParams.set("CallStatus", status);
    u.searchParams.set("dedupe_key", sid || from);
    u.searchParams.set("outcome_notes", "twilio inbound " + status + " " + sid);
    try {
      await fetch(u.toString(), { method: "GET", redirect: "follow" });
    } catch (_) {}
  }

  const twiml =
    '<?xml version="1.0" encoding="UTF-8"?><Response><Dial>' +
    FORWARD_TO +
    "</Dial></Response>";
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/xml" },
    body: twiml,
  };
};
