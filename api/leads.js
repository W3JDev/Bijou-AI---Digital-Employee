// BIJOU AI - Lead Capture API Endpoint
// Saves lead to Supabase + sends confirmation email via Resend

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Map any incoming source to a valid DB source value
const VALID_SOURCES = [
  "hero_form",
  "cal_booking",
  "waitlist",
  "whatsapp_cta",
  "website",
  "referral",
];
function normaliseSource(raw) {
  if (!raw) return "website";
  const s = raw.toLowerCase();
  if (VALID_SOURCES.includes(s)) return s;
  if (s.includes("hero")) return "hero_form";
  if (s.includes("wait")) return "waitlist";
  if (s.includes("whats")) return "whatsapp_cta";
  if (s.includes("cal")) return "cal_booking";
  if (s.includes("referral")) return "referral";
  return "website";
}

function buildConfirmationEmail(name, company) {
  const displayName = name || company || "Boss";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We got your details!</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#e5e7eb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#064e3b,#065f46);border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;">
          <div style="font-size:36px;margin-bottom:12px;">🤖</div>
          <h1 style="margin:0;font-size:28px;font-weight:800;color:#fff;letter-spacing:-0.5px;">Bijou AI</h1>
          <p style="margin:8px 0 0;font-size:14px;color:#6ee7b7;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Your Digital Employee</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#111827;padding:40px;">
          <h2 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#fff;">
            We got your details, ${displayName}! 🎉
          </h2>
          <p style="margin:0 0 24px;font-size:16px;color:#9ca3af;line-height:1.6;">
            Fuyoh, thank you for your interest in Bijou AI! Our team has received your details and we'll be reaching out to you within <strong style="color:#10b981;">24 hours</strong> to discuss how we can automate your business.
          </p>

          <div style="background:#0a0a0a;border:1px solid #1f2937;border-radius:12px;padding:24px;margin-bottom:32px;">
            <h3 style="margin:0 0 16px;font-size:16px;font-weight:700;color:#10b981;">What happens next?</h3>
            <div style="display:flex;align-items:flex-start;margin-bottom:14px;">
              <span style="background:#064e3b;color:#10b981;border-radius:50%;width:24px;height:24px;display:inline-block;text-align:center;line-height:24px;font-size:12px;font-weight:700;flex-shrink:0;margin-right:12px;">1</span>
              <p style="margin:0;font-size:14px;color:#9ca3af;line-height:1.5;">Our team reviews your details and prepares a personalised demo for your industry</p>
            </div>
            <div style="display:flex;align-items:flex-start;margin-bottom:14px;">
              <span style="background:#064e3b;color:#10b981;border-radius:50%;width:24px;height:24px;display:inline-block;text-align:center;line-height:24px;font-size:12px;font-weight:700;flex-shrink:0;margin-right:12px;">2</span>
              <p style="margin:0;font-size:14px;color:#9ca3af;line-height:1.5;">We WhatsApp you to schedule a quick 15-minute walkthrough</p>
            </div>
            <div style="display:flex;align-items:flex-start;">
              <span style="background:#064e3b;color:#10b981;border-radius:50%;width:24px;height:24px;display:inline-block;text-align:center;line-height:24px;font-size:12px;font-weight:700;flex-shrink:0;margin-right:12px;">3</span>
              <p style="margin:0;font-size:14px;color:#9ca3af;line-height:1.5;">You decide if Bijou is right for your business — zero pressure, boss!</p>
            </div>
          </div>

          <!-- CTA -->
          <div style="text-align:center;margin-bottom:32px;">
            <p style="margin:0 0 16px;font-size:14px;color:#6b7280;">Ready to get started right now? Create your account here:</p>
            <a href="https://app.mybijou.xyz/signup" style="display:inline-block;background:linear-gradient(135deg,#10b981,#059669);color:#fff;text-decoration:none;font-weight:700;font-size:16px;padding:16px 40px;border-radius:12px;box-shadow:0 0 30px rgba(16,185,129,0.3);">
              Create My Bijou Account →
            </a>
            <p style="margin:12px 0 0;font-size:12px;color:#4b5563;">14-day free trial • No credit card required • Cancel anytime</p>
          </div>

          <!-- Questions -->
          <div style="border-top:1px solid #1f2937;padding-top:24px;text-align:center;">
            <p style="margin:0 0 12px;font-size:14px;color:#9ca3af;">Got questions? We're on WhatsApp 24/7:</p>
            <a href="https://wa.me/60174106981" style="color:#10b981;text-decoration:none;font-weight:600;font-size:14px;">+60 17-410 6981</a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#0a0a0a;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;border-top:1px solid #1f2937;">
          <p style="margin:0 0 8px;font-size:12px;color:#4b5563;">
            Bijou AI Sdn Bhd • Kuala Lumpur, Malaysia
          </p>
          <p style="margin:0;font-size:12px;color:#374151;">
            You're receiving this because you submitted your details at <a href="https://mybijou.xyz" style="color:#10b981;text-decoration:none;">mybijou.xyz</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Max-Age", "86400");

  if (req.method === "OPTIONS") return res.status(200).json({ ok: true });
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST", "OPTIONS"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone = "",
      company = "",
      industry = "",
      source = "website",
      marketing_consent = false,
    } = req.body;

    // Validation
    if (!email) {
      return res
        .status(400)
        .json({ error: "Email is required", code: "MISSING_EMAIL" });
    }
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({
          error: "Please provide a valid email address",
          code: "INVALID_EMAIL",
        });
    }
    if (!name && !company) {
      return res
        .status(400)
        .json({ error: "Name or company is required", code: "MISSING_NAME" });
    }

    const leadData = {
      name: (name || company).trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim() || null,
      company: company.trim() || null,
      industry: industry || null,
      source: normaliseSource(source),
      marketing_consent: Boolean(marketing_consent),
      status: "new",
      lead_score: 30,
    };

    // ── 1. Save to Supabase ──────────────────────────────────────────────────
    let leadId = null;
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { data, error } = await supabase
          .from("leads")
          .insert(leadData)
          .select("id")
          .single();

        if (error) {
          // Duplicate email - still send email, just don't crash
          if (error.code === "23505") {
            console.warn("Duplicate lead email:", email);
          } else {
            console.error("Supabase insert error:", error);
          }
        } else {
          leadId = data?.id;
          console.log("✅ Lead saved:", leadId);
        }
      } catch (dbErr) {
        console.error("Supabase error (non-fatal):", dbErr);
      }
    } else {
      console.warn(
        "⚠️  SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set — skipping DB save",
      );
    }

    // ── 2. Send confirmation email via Resend ────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: "Bijou AI <hello@mybijou.xyz>",
          to: leadData.email,
          subject: `We got your details, ${leadData.name.split(" ")[0]}! 🤖`,
          html: buildConfirmationEmail(leadData.name, leadData.company),
        });
        console.log("✅ Confirmation email sent to:", leadData.email);

        // Mark email sent in DB
        if (leadId && supabaseUrl && supabaseKey) {
          const supabase = createClient(supabaseUrl, supabaseKey);
          await supabase
            .from("leads")
            .update({ email_sent_at: new Date().toISOString() })
            .eq("id", leadId);
        }
      } catch (emailErr) {
        console.error("Resend error (non-fatal):", emailErr);
      }
    } else {
      console.warn("⚠️  RESEND_API_KEY not set — skipping confirmation email");
    }

    // ── 3. Notify owner via WhatsApp (non-blocking) ──────────────────────────
    try {
      const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://mybijou.xyz";
      await fetch(`${baseUrl}/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "60174106981@s.whatsapp.net",
          message: `🎯 NEW LEAD!\n\nName: ${leadData.name}\nEmail: ${leadData.email}\nPhone: ${leadData.phone || "N/A"}\nCompany: ${leadData.company || "N/A"}\nSource: ${leadData.source}\n\nCheck Supabase dashboard for full details.`,
        }),
      });
    } catch (notifErr) {
      console.warn("WhatsApp notification skipped:", notifErr.message);
    }

    return res.status(200).json({
      success: true,
      message: "Thank you! Check your email for confirmation.",
      leadId: leadId || "temp-" + Date.now(),
      isNewLead: true,
    });
  } catch (error) {
    console.error("❌ Lead capture error:", error);
    return res.status(500).json({
      error: "Server error occurred",
      message: "Please try again in a moment",
      code: "INTERNAL_ERROR",
    });
  }
}
