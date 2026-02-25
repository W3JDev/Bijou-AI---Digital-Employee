// BIJOU AI - Slide Deck Resource Access API
// User submits email → receives slide deck + user guide + onboarding link instantly

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const LOGO_URL =
  "https://w3jdev.github.io/bijou-ai-assets/assets/logos/bijouai-logo-transparent.png";

function buildResourcesEmail(name) {
  const firstName = (name || "Boss").split(" ")[0];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#e5e7eb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- HEADER -->
        <tr><td style="background:linear-gradient(135deg,#052e16,#064e3b,#065f46);border-radius:16px 16px 0 0;padding:36px 40px 28px;text-align:center;">
          <img src="${LOGO_URL}" alt="Bijou AI" width="52" height="52" style="display:block;margin:0 auto 14px;border-radius:10px;" />
          <div>
            <span style="font-size:24px;font-weight:900;color:#d4af37;letter-spacing:-0.5px;">Bijou</span><span style="font-size:24px;font-weight:900;color:#ffffff;">AI</span>
          </div>
          <p style="margin:6px 0 0;font-size:11px;color:#6ee7b7;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Your Digital Employee · by W3J</p>
          <p style="margin:16px 0 0;font-size:13px;color:#a7f3d0;">Resources sent ✓</p>
        </td></tr>

        <!-- BODY -->
        <tr><td style="background:#0f172a;padding:40px;">
          <h2 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#fff;">
            Your Bijou AI resources are here! 📦
          </h2>
          <p style="margin:0 0 28px;font-size:15px;color:#94a3b8;line-height:1.7;">
            Hi <strong style="color:#e2e8f0;">${firstName}</strong>, everything you need to explore Bijou AI is below. Take your time, and feel free to reach out if you have any questions, boss!
          </p>

          <!-- RESOURCE CARDS -->
          <!-- Card 1: Slide Deck -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1628;border:1px solid #1e3a5f;border-radius:14px;margin-bottom:16px;overflow:hidden;">
            <tr><td style="padding:24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48" style="vertical-align:middle;padding-right:16px;">
                    <div style="width:44px;height:44px;background:linear-gradient(135deg,#1e40af,#3b82f6);border-radius:12px;text-align:center;line-height:44px;font-size:22px;">📊</div>
                  </td>
                  <td>
                    <p style="margin:0 0 4px;font-size:15px;font-weight:800;color:#fff;">Sales Presentation</p>
                    <p style="margin:0 0 12px;font-size:13px;color:#64748b;line-height:1.5;">See exactly how Bijou AI works, pricing, case studies, and ROI breakdown</p>
                    <a href="https://app.mybijou.xyz/static/sales-presentation.html" style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#fff;text-decoration:none;font-weight:700;font-size:13px;padding:10px 20px;border-radius:8px;">
                      Open Slide Deck →
                    </a>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>

          <!-- Card 2: User Guide -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1628;border:1px solid #1e3a5f;border-radius:14px;margin-bottom:16px;overflow:hidden;">
            <tr><td style="padding:24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48" style="vertical-align:middle;padding-right:16px;">
                    <div style="width:44px;height:44px;background:linear-gradient(135deg,#065f46,#10b981);border-radius:12px;text-align:center;line-height:44px;font-size:22px;">📖</div>
                  </td>
                  <td>
                    <p style="margin:0 0 4px;font-size:15px;font-weight:800;color:#fff;">User Guide</p>
                    <p style="margin:0 0 12px;font-size:13px;color:#64748b;line-height:1.5;">Step-by-step walkthrough of setting up your Bijou AI digital employee</p>
                    <a href="https://app.mybijou.xyz/static/user-guide.html" style="display:inline-block;background:linear-gradient(135deg,#065f46,#10b981);color:#fff;text-decoration:none;font-weight:700;font-size:13px;padding:10px 20px;border-radius:8px;">
                      Read User Guide →
                    </a>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>

          <!-- Card 3: Create Account -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1628;border:1px solid #d4af3740;border-radius:14px;margin-bottom:28px;overflow:hidden;">
            <tr><td style="padding:24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48" style="vertical-align:middle;padding-right:16px;">
                    <div style="width:44px;height:44px;background:linear-gradient(135deg,#78350f,#d4af37);border-radius:12px;text-align:center;line-height:44px;font-size:22px;">🚀</div>
                  </td>
                  <td>
                    <p style="margin:0 0 4px;font-size:15px;font-weight:800;color:#fff;">Start Free Trial</p>
                    <p style="margin:0 0 12px;font-size:13px;color:#64748b;line-height:1.5;">14 days free, no credit card needed. Set up in under 5 minutes</p>
                    <a href="https://app.mybijou.xyz/signup" style="display:inline-block;background:linear-gradient(135deg,#b45309,#d4af37);color:#000;text-decoration:none;font-weight:800;font-size:13px;padding:10px 20px;border-radius:8px;">
                      Create My Account →
                    </a>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>

          <!-- SUPPORT -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #1e293b;padding-top:0;">
            <tr><td style="padding-top:24px;text-align:center;">
              <p style="margin:0 0 10px;font-size:13px;color:#64748b;font-weight:600;">Questions? We're always here:</p>
              <p style="margin:0;font-size:13px;color:#94a3b8;">
                📧 <a href="mailto:hello@mybijou.xyz" style="color:#10b981;text-decoration:none;">hello@mybijou.xyz</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                💬 <a href="https://wa.me/60174106981" style="color:#10b981;text-decoration:none;">+60 17-410 6981</a>
              </p>
            </td></tr>
          </table>
        </td></tr>

        <!-- FOOTER -->
        <tr><td style="background:#020617;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border-top:1px solid #0f172a;">
          <p style="margin:0 0 6px;font-size:11px;color:#334155;">
            <strong style="color:#475569;">Bijou AI</strong> is a product of <strong style="color:#475569;">W3J Sdn Bhd</strong> &nbsp;·&nbsp; Kuala Lumpur, Malaysia
          </p>
          <p style="margin:0 0 6px;font-size:11px;color:#334155;">
            <a href="https://mybijou.xyz" style="color:#10b981;text-decoration:none;">mybijou.xyz</a>
            &nbsp;·&nbsp;
            <a href="https://w3j.my" style="color:#10b981;text-decoration:none;">w3j.my</a>
          </p>
          <p style="margin:0;font-size:10px;color:#1e293b;">
            You received this because you requested resources at mybijou.xyz
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
    const { email, name = "" } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ error: "Please provide a valid email address" });
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanName = name.trim() || "Boss";

    // ── 1. Save to Supabase as a lead (non-blocking) ─────────────────────────
    const supabaseUrl =
      process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        await supabase.from("leads").upsert(
          {
            name: cleanName,
            email: cleanEmail,
            source: "website",
            status: "new",
            lead_score: 20,
            marketing_consent: false,
          },
          { onConflict: "email", ignoreDuplicates: true },
        );
      } catch (dbErr) {
        console.warn("Supabase upsert (non-fatal):", dbErr.message);
      }
    }

    // ── 2. Send resources email ───────────────────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.warn("RESEND_API_KEY not set");
      return res
        .status(200)
        .json({ success: true, message: "Resources sent!" });
    }

    const resend = new Resend(resendKey);
    const emailFrom = process.env.EMAIL_FROM || "Bijou AI <hello@mybijou.xyz>";

    await resend.emails.send({
      from: emailFrom,
      to: cleanEmail,
      subject: "Your Bijou AI Resources — Slide Deck, User Guide & More 📦",
      html: buildResourcesEmail(cleanName),
    });
    console.log("✅ Resources email sent to:", cleanEmail);

    // Notify owner
    const notifyEmail = process.env.EMAIL_NOTIFY;
    if (notifyEmail) {
      resend.emails
        .send({
          from: emailFrom,
          to: notifyEmail,
          subject: `📊 Slide Deck Request: ${cleanEmail}`,
          html: `<p><strong>Email:</strong> ${cleanEmail}</p><p><strong>Name:</strong> ${cleanName}</p><p><strong>Time:</strong> ${new Date().toLocaleString("en-MY", { timeZone: "Asia/Kuala_Lumpur" })} MYT</p>`,
        })
        .catch(() => {});
    }

    return res.status(200).json({
      success: true,
      message: "Resources sent! Check your inbox.",
    });
  } catch (error) {
    console.error("❌ Slide deck endpoint error:", error);
    return res.status(500).json({
      error: "Server error occurred",
      message: "Please try again in a moment",
    });
  }
}
