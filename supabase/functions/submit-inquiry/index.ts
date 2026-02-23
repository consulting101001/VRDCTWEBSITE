import { serve } from "https://deno.land/std/http/server.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const INQUIRY_TO_EMAIL = Deno.env.get("INQUIRY_TO_EMAIL")!;
const INQUIRY_FROM_EMAIL = Deno.env.get("INQUIRY_FROM_EMAIL")!;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders() });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const body = await req.json();

    const {
      inquiry_type,
      full_name,
      email,
      phone,
      practice_area,
      subject,
      message,
      preferred_contact_method,
      consent_privacy,
      source_page,
    } = body ?? {};

    if (!inquiry_type || !["contact", "consultation"].includes(inquiry_type)) {
      return jsonResponse({ error: "Invalid inquiry type" }, 400);
    }
    if (!full_name || typeof full_name !== "string") {
      return jsonResponse({ error: "Full name is required" }, 400);
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return jsonResponse({ error: "Valid email is required" }, 400);
    }
    if (!message || typeof message !== "string") {
      return jsonResponse({ error: "Message is required" }, 400);
    }
    if (consent_privacy !== true) {
      return jsonResponse({ error: "Privacy consent is required" }, 400);
    }

    const inquiryPayload = {
      inquiry_type,
      full_name: full_name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      practice_area: practice_area?.trim() || null,
      subject: subject?.trim() || null,
      message: message.trim(),
      preferred_contact_method: preferred_contact_method?.trim() || null,
      consent_privacy: true,
      source_page: source_page || null,
      user_agent: req.headers.get("user-agent") || null,
      status: "new",
    };

    const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Prefer": "return=representation",
      },
      body: JSON.stringify(inquiryPayload),
    });

    if (!dbRes.ok) {
      const dbErr = await dbRes.text();
      console.error("DB insert failed:", dbErr);
      return jsonResponse({ error: "Failed to save inquiry" }, 500);
    }

    const inserted = await dbRes.json();
    const record = inserted?.[0];

    const emailHtml = `
      <h2>New ${escapeHtml(inquiry_type)} Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(full_name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
      <p><strong>Practice Area:</strong> ${escapeHtml(practice_area || "-")}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject || "-")}</p>
      <p><strong>Preferred Contact:</strong> ${escapeHtml(preferred_contact_method || "-")}</p>
      <p><strong>Source Page:</strong> ${escapeHtml(source_page || "-")}</p>
      <p><strong>Inquiry ID:</strong> ${escapeHtml(record?.id || "-")}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: INQUIRY_FROM_EMAIL,
        to: [INQUIRY_TO_EMAIL],
        reply_to: email,
        subject: `Verdicta ${inquiry_type === "consultation" ? "Consultation" : "Contact"} Inquiry — ${full_name}`,
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const resendErr = await resendRes.text();
      console.error("Resend failed:", resendErr);
      return jsonResponse({
        success: true,
        warning: "Inquiry saved, but email notification failed.",
        inquiry_id: record?.id ?? null,
      }, 200);
    }

    return jsonResponse({
      success: true,
      message: "Inquiry submitted successfully.",
      inquiry_id: record?.id ?? null,
    }, 200);

  } catch (err) {
    console.error("submit-inquiry error:", err);
    return jsonResponse({ error: "Internal server error" }, 500);
  }
});

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(),
    },
  });
}

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}