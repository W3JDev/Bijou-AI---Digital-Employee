/**
 * Bijou AI — Test Email Sender
 * Sends all 3 system emails to a test address.
 *
 * Usage:
 *   $env:RESEND_API_KEY="re_xxxxx"; node scripts/send-test-emails.mjs
 *
 * Or with a custom recipient:
 *   $env:RESEND_API_KEY="re_xxxxx"; $env:TEST_EMAIL="you@example.com"; node scripts/send-test-emails.mjs
 */

import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || "Bijou AI <hello@mybijou.xyz>";
const TEST_TO = process.env.TEST_EMAIL || "w3jdev@gmail.com";

const LOGO_URL = "https://mybijou.xyz/brand/logo.png";
const QR_URL = "https://mybijou.xyz/brand/qr.png";

if (!RESEND_API_KEY) {
  console.error(
    "❌  RESEND_API_KEY not set. Run: $env:RESEND_API_KEY='re_xxxx'",
  );
  process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

// ─── Shared template wrapper ───────────────────────────────────────────────
function emailBase(headerContent, bodyContent) {
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
          <div style="display:inline-flex;align-items:center;gap:6px;">
            <span style="font-size:24px;font-weight:900;color:#d4af37;letter-spacing:-0.5px;">Bijou</span><span style="font-size:24px;font-weight:900;color:#ffffff;">AI</span>
          </div>
          <p style="margin:6px 0 0;font-size:11px;color:#6ee7b7;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Your Digital Employee · by W3J</p>
          ${headerContent}
        </td></tr>

        <!-- BODY -->
        <tr><td style="background:#0f172a;padding:40px;">
          ${bodyContent}

          <!-- RESOURCES BOX -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #1e3a5f;border-radius:14px;overflow:hidden;margin-bottom:32px;">
            <tr><td style="background:#0a1628;padding:20px 24px;border-bottom:1px solid #1e3a5f;">
              <p style="margin:0;font-size:13px;font-weight:700;color:#6366f1;text-transform:uppercase;letter-spacing:1px;">📦 Your Bijou Resources</p>
            </td></tr>
            <tr><td style="padding:20px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="40" style="vertical-align:top;padding-top:2px;"><span style="font-size:20px;">🚀</span></td>
                  <td style="padding-bottom:16px;">
                    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#fff;">Create Your Account</p>
                    <p style="margin:0 0 6px;font-size:13px;color:#94a3b8;">14-day free trial, no credit card required</p>
                    <a href="https://app.mybijou.xyz/signup" style="color:#10b981;font-size:13px;font-weight:600;text-decoration:none;">app.mybijou.xyz/signup →</a>
                  </td>
                </tr>
                <tr>
                  <td width="40" style="vertical-align:top;padding-top:2px;"><span style="font-size:20px;">📖</span></td>
                  <td style="padding-bottom:16px;">
                    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#fff;">User Guide</p>
                    <p style="margin:0 0 6px;font-size:13px;color:#94a3b8;">Step-by-step onboarding &amp; setup walkthrough</p>
                    <a href="https://app.mybijou.xyz/static/user-guide.html" style="color:#10b981;font-size:13px;font-weight:600;text-decoration:none;">View User Guide →</a>
                  </td>
                </tr>
                <tr>
                  <td width="40" style="vertical-align:top;padding-top:2px;"><span style="font-size:20px;">📊</span></td>
                  <td>
                    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#fff;">Sales Presentation</p>
                    <p style="margin:0 0 6px;font-size:13px;color:#94a3b8;">See exactly how Bijou AI works for your business</p>
                    <a href="https://app.mybijou.xyz/static/sales-presentation.html" style="color:#10b981;font-size:13px;font-weight:600;text-decoration:none;">View Slide Deck →</a>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>

          <!-- SUPPORT -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #1e293b;padding-top:24px;">
            <tr><td align="center">
              <p style="margin:0 0 10px;font-size:13px;color:#64748b;font-weight:600;">Need help? We're always here:</p>
              <p style="margin:0 0 6px;font-size:13px;color:#94a3b8;">
                📧 <a href="mailto:support@mybijou.xyz" style="color:#10b981;text-decoration:none;">support@mybijou.xyz</a>
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
          <p style="margin:0 0 8px;font-size:11px;color:#334155;">
            <a href="https://linkedin.com/company/mybijou" style="color:#6366f1;text-decoration:none;">LinkedIn</a>
            &nbsp;·&nbsp;
            <a href="https://instagram.com/mybijouai" style="color:#6366f1;text-decoration:none;">Instagram</a>
            &nbsp;·&nbsp;
            <a href="https://x.com/meetbijou" style="color:#6366f1;text-decoration:none;">X (Twitter)</a>
          </p>
          <p style="margin:0;font-size:10px;color:#1e293b;">
            You received this because you submitted your details at mybijou.xyz
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Email 1: Lead Confirmation ────────────────────────────────────────────
function buildConfirmationEmail(firstName) {
  const header = `<p style="margin:16px 0 0;font-size:13px;color:#a7f3d0;">Interest confirmed ✓</p>`;
  const body = `
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#fff;">
      Fuyoh, we got your details! 🎉
    </h2>
    <p style="margin:0 0 24px;font-size:15px;color:#94a3b8;line-height:1.7;">
      Hi <strong style="color:#e2e8f0;">${firstName}</strong>, thank you for your interest in Bijou AI!<br/>
      Our team will reach out within <strong style="color:#10b981;">24 hours</strong> to discuss how we can automate your business.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1628;border:1px solid #1e3a5f;border-radius:14px;padding:0;margin-bottom:28px;overflow:hidden;">
      <tr><td style="padding:20px 24px;border-bottom:1px solid #1e3a5f;">
        <p style="margin:0;font-size:13px;font-weight:700;color:#6366f1;text-transform:uppercase;letter-spacing:1px;">⚡ What happens next?</p>
      </td></tr>
      <tr><td style="padding:20px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td width="32" style="vertical-align:top;padding-top:1px;"><span style="display:inline-block;background:#064e3b;color:#10b981;border-radius:50%;width:22px;height:22px;text-align:center;line-height:22px;font-size:11px;font-weight:800;">1</span></td>
              <td style="padding-bottom:14px;font-size:13px;color:#94a3b8;line-height:1.5;">Our team reviews your details and prepares a personalised demo for your industry</td></tr>
          <tr><td width="32" style="vertical-align:top;padding-top:1px;"><span style="display:inline-block;background:#064e3b;color:#10b981;border-radius:50%;width:22px;height:22px;text-align:center;line-height:22px;font-size:11px;font-weight:800;">2</span></td>
              <td style="padding-bottom:14px;font-size:13px;color:#94a3b8;line-height:1.5;">We WhatsApp you to schedule a quick 15-minute walkthrough</td></tr>
          <tr><td width="32" style="vertical-align:top;padding-top:1px;"><span style="display:inline-block;background:#064e3b;color:#10b981;border-radius:50%;width:22px;height:22px;text-align:center;line-height:22px;font-size:11px;font-weight:800;">3</span></td>
              <td style="font-size:13px;color:#94a3b8;line-height:1.5;">You decide if Bijou is right for you — zero pressure, boss!</td></tr>
        </table>
      </td></tr>
    </table>

    <div style="text-align:center;margin-bottom:28px;">
      <a href="https://app.mybijou.xyz/signup" style="display:inline-block;background:linear-gradient(135deg,#4f46e5,#6366f1);color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 36px;border-radius:12px;">
        Start Free Trial →
      </a>
      <p style="margin:10px 0 0;font-size:11px;color:#475569;">14-day free trial · No credit card · Cancel anytime</p>
    </div>

    <!-- QR CODE -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
      <tr><td align="center">
        <p style="margin:0 0 10px;font-size:12px;color:#64748b;">Scan to visit mybijou.xyz on your phone:</p>
        <img src="${QR_URL}" alt="mybijou.xyz QR Code" width="110" height="110" style="display:block;margin:0 auto;border-radius:10px;" />
      </td></tr>
    </table>
  `;
  return emailBase(header, body);
}

// ─── Email 2: Slide Deck / Resources ──────────────────────────────────────
function buildSlideDeckerEmail(firstName) {
  const header = `<p style="margin:16px 0 0;font-size:13px;color:#a7f3d0;">Resources sent ✓</p>`;
  const body = `
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#fff;">
      Your Bijou AI resources are here! 📦
    </h2>
    <p style="margin:0 0 28px;font-size:15px;color:#94a3b8;line-height:1.7;">
      Hi <strong style="color:#e2e8f0;">${firstName}</strong>, everything you need to explore Bijou AI is below. Take your time, and feel free to reach out if you have any questions, boss!
    </p>
  `;
  return emailBase(header, body);
}

// ─── Email 3: Owner Notification (plain HTML) ─────────────────────────────
function buildOwnerNotification(name, email, phone, company, source) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#e5e7eb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0f172a;border-radius:16px;overflow:hidden;border:1px solid #1e293b;">
        <tr><td style="background:linear-gradient(135deg,#052e16,#064e3b,#065f46);padding:28px 40px;text-align:center;">
          <img src="${LOGO_URL}" alt="Bijou AI" width="44" height="44" style="display:block;margin:0 auto 12px;border-radius:8px;" />
          <div><span style="font-size:22px;font-weight:900;color:#d4af37;">Bijou</span><span style="font-size:22px;font-weight:900;color:#fff;">AI</span></div>
          <p style="margin:6px 0 0;font-size:11px;color:#6ee7b7;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Lead Alert · Internal</p>
          <p style="margin:14px 0 0;font-size:20px;font-weight:800;color:#fff;">🎯 New Lead!</p>
          <p style="margin:6px 0 0;font-size:13px;color:#a7f3d0;">${new Date().toLocaleString("en-MY", { timeZone: "Asia/Kuala_Lumpur" })} MYT</p>
        </td></tr>
        <tr><td style="padding:32px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${[
              ["Name", name],
              ["Email", email],
              ["Phone", phone || "N/A"],
              ["Company", company || "N/A"],
              ["Source", source],
            ]
              .map(
                ([label, value]) => `
            <tr>
              <td width="110" style="padding:10px 0;font-size:13px;color:#64748b;font-weight:700;vertical-align:top;">${label}</td>
              <td style="padding:10px 0;font-size:14px;color:#e2e8f0;border-bottom:1px solid #1e293b;">${value}</td>
            </tr>`,
              )
              .join("")}
          </table>
          <div style="margin-top:28px;text-align:center;">
            <a href="https://supabase.com/dashboard" style="display:inline-block;background:linear-gradient(135deg,#10b981,#059669);color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 32px;border-radius:10px;">
              View in Supabase →
            </a>
          </div>
        </td></tr>
        <tr><td style="padding:16px 40px;text-align:center;border-top:1px solid #1e293b;">
          <p style="margin:0;font-size:11px;color:#334155;">Bijou AI Lead System · mybijou.xyz</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Send all three ────────────────────────────────────────────────────────
async function sendAll() {
  console.log(`\n📧 Sending 3 test emails to: ${TEST_TO}\n`);

  const tests = [
    {
      label: "1. Lead Confirmation Email",
      subject: "[TEST] Your Bijou AI details are confirmed! 🤖",
      html: buildConfirmationEmail("Jewel"),
    },
    {
      label: "2. Slide Deck / Resources Email",
      subject: "[TEST] Your Bijou AI resources are here! 📦",
      html: buildSlideDeckerEmail("Jewel"),
    },
    {
      label: "3. Owner New-Lead Notification",
      subject: "[TEST] 🎯 New Lead: Jewel (W3J Dev)",
      html: buildOwnerNotification(
        "Jewel (Test)",
        TEST_TO,
        "+60174106981",
        "W3J Dev",
        "hero_form",
      ),
    },
  ];

  for (const test of tests) {
    try {
      const { data, error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: TEST_TO,
        subject: test.subject,
        html: test.html,
      });

      if (error) {
        console.error(`❌  ${test.label} FAILED:`, error.message);
      } else {
        console.log(`✅  ${test.label} — sent (id: ${data?.id})`);
      }
    } catch (err) {
      console.error(`❌  ${test.label} ERROR:`, err.message);
    }

    // Small delay between sends
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log("\n🎉 Done! Check your inbox.\n");
}

sendAll();
