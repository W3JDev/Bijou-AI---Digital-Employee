// BIJOU AI - Lead Capture API Endpoint
// Handles secure lead capture with Supabase storage and Resend email notifications

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize services
const supabase = createClient(
  process.env.VITE_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

// CORS headers for security
const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.VITE_PUBLIC_SITE_URL || 'https://mybijou.xyz',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

// Industry mapping for lead scoring
const INDUSTRY_MAPPING = {
  'real_estate': 'Real Estate',
  'insurance': 'Insurance', 
  'automotive': 'Automotive',
  'retail': 'Retail & E-commerce',
  'hospitality': 'Hospitality & Tourism',
  'financial': 'Financial Services',
  'healthcare': 'Healthcare',
  'education': 'Education',
  'technology': 'Technology',
  'other': 'Other'
};

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract lead data from request
    const {
      name,
      email,
      phone,
      company,
      industry,
      source = 'website',
      utm_source,
      utm_medium,
      utm_campaign,
      marketing_consent = false,
      referrer
    } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        error: 'Name and email are required',
        code: 'MISSING_REQUIRED_FIELDS'
      });
    }

    // Email validation
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Please provide a valid email address',
        code: 'INVALID_EMAIL'
      });
    }

    // Extract request metadata
    const forwardedFor = req.headers['x-forwarded-for'];
    const ip_address = forwardedFor ? forwardedFor.split(',')[0] : req.connection?.remoteAddress;
    const user_agent = req.headers['user-agent'];
    
    // Simple device detection
    const isMobile = /Mobile|Android|iPhone|iPad/i.test(user_agent || '');
    const device_type = isMobile ? 'mobile' : 'desktop';

    // Prepare lead data
    const leadData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone ? phone.trim() : null,
      company: company ? company.trim() : null,
      industry: industry && INDUSTRY_MAPPING[industry] ? INDUSTRY_MAPPING[industry] : null,
      source,
      utm_source,
      utm_medium, 
      utm_campaign,
      referrer,
      marketing_consent,
      pdpa_consent: true, // Default PDPA compliance for Malaysian market
      ip_address,
      user_agent,
      device_type,
      status: 'new'
    };

    // Check for existing lead
    const { data: existingLead, error: checkError } = await supabase
      .from('leads')
      .select('id, email, created_at')
      .eq('email', leadData.email)
      .single();

    let leadRecord;

    if (existingLead && !checkError) {
      // Update existing lead with new information
      const { data: updatedLead, error: updateError } = await supabase
        .from('leads')
        .update({
          ...leadData,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingLead.id)
        .select()
        .single();

      if (updateError) throw updateError;
      leadRecord = updatedLead;
      
    } else {
      // Create new lead
      const { data: newLead, error: insertError } = await supabase
        .from('leads')
        .insert([leadData])
        .select()
        .single();

      if (insertError) throw insertError;
      leadRecord = newLead;
    }

    // Calculate lead score
    const { data: scoredLead, error: scoreError } = await supabase
      .rpc('calculate_lead_score', { lead_data: leadRecord });

    if (!scoreError && scoredLead !== null) {
      await supabase
        .from('leads')
        .update({ lead_score: scoredLead })
        .eq('id', leadRecord.id);
    }

    // Send email notifications (parallel processing)
    const emailPromises = [];

    // 1. Welcome email to lead
    if (leadData.marketing_consent) {
      emailPromises.push(
        resend.emails.send({
          from: process.env.EMAIL_FROM || 'Bijou AI <hello@mybijou.xyz>',
          to: [leadData.email],
          subject: 'Walao! Welcome to Bijou AI family! 🎉',
          html: `
            <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #050816; color: #e5e5e5; padding: 20px; border-radius: 12px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #10b981, #34d399); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #050816; margin-bottom: 15px;">B</div>
                <h1 style="color: #10b981; margin: 0; font-size: 24px;">Swee! You're In! 🇲🇾</h1>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Hello <strong>${leadData.name}</strong>!</p>
              
              <p style="line-height: 1.6; margin-bottom: 20px;">Terima kasih for joining the Bijou AI family! We're excited to help you stop losing those late-night WhatsApp leads once and for all.</p>
              
              <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #10b981; margin: 0 0 10px 0; font-size: 18px;">What's Next?</h3>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                  <li>Our team will review your inquiry within 24 hours</li>
                  <li>Book a demo to see Bijou in action: <a href="https://cal.com/getbijou" style="color: #10b981;">cal.com/getbijou</a></li>
                  <li>Questions? WhatsApp us: <a href="https://wa.me/60174106981" style="color: #10b981;">+60 17-410 6981</a></li>
                </ul>
              </div>
              
              <p style="line-height: 1.6; color: #9ca3af; font-size: 14px; margin-top: 30px; border-top: 1px solid #374151; padding-top: 20px;">
                Best regards,<br>
                The Bijou AI Team 🤖<br>
                <a href="https://mybijou.xyz" style="color: #10b981; text-decoration: none;">mybijou.xyz</a>
              </p>
            </div>
          `,
        })
      );
    }

    // 2. Internal notification to team
    emailPromises.push(
      resend.emails.send({
        from: process.env.EMAIL_FROM || 'Bijou AI <hello@mybijou.xyz>',
        to: [process.env.EMAIL_NOTIFY || 'jewel@mybijou.xyz'],
        subject: `🎯 New Lead: ${leadData.name} from ${leadData.source}`,
        html: `
          <div style="font-family: 'Inter', sans-serif; max-width: 700px; margin: 0 auto; background: #f9fafb; padding: 25px; border-radius: 12px;">
            <div style="background: #10b981; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="margin: 0; font-size: 22px;">🎯 New Lead Alert</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Lead Score: <strong>${scoredLead || 0}/100</strong></p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <h3 style="color: #374151; margin: 0 0 15px 0;">Lead Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 8px 0; font-weight: 600; color: #6b7280; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #111827;">${leadData.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Email:</td>
                  <td style="padding: 8px 0; color: #111827;"><a href="mailto:${leadData.email}" style="color: #10b981;">${leadData.email}</a></td>
                </tr>
                ${leadData.phone ? `
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Phone:</td>
                  <td style="padding: 8px 0; color: #111827;"><a href="tel:${leadData.phone}" style="color: #10b981;">${leadData.phone}</a></td>
                </tr>` : ''}
                ${leadData.company ? `
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Company:</td>
                  <td style="padding: 8px 0; color: #111827;">${leadData.company}</td>
                </tr>` : ''}
                ${leadData.industry ? `
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Industry:</td>
                  <td style="padding: 8px 0; color: #111827;">${leadData.industry}</td>
                </tr>` : ''}
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Source:</td>
                  <td style="padding: 8px 0; color: #111827;"><span style="background: #dcfce7; color: #166534; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${leadData.source}</span></td>
                </tr>
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Device:</td>
                  <td style="padding: 8px 0; color: #111827;">${device_type} (${ip_address})</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Consent:</td>
                  <td style="padding: 8px 0; color: #111827;">Marketing: ${leadData.marketing_consent ? '✅' : '❌'} | PDPA: ✅</td>
                </tr>
              </table>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px;">
              <p style="margin: 0; color: #0c4a6e; font-size: 14px;">
                <strong>Action Required:</strong> Follow up within 24 hours for optimal conversion.
              </p>
            </div>
          </div>
        `,
      })
    );

    // Wait for emails to send (but don't fail the API if emails fail)
    try {
      await Promise.all(emailPromises);
      console.log('✅ Email notifications sent successfully');
    } catch (emailError) {
      console.error('⚠️ Email sending failed:', emailError);
      // Continue - email failure shouldn't break lead capture
    }

    // Set CORS headers
    Object.keys(corsHeaders).forEach(key => {
      res.setHeader(key, corsHeaders[key]);
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Lead captured successfully',
      leadId: leadRecord.id,
      leadScore: scoredLead || 0,
      isNewLead: !existingLead
    });

  } catch (error) {
    console.error('❌ Lead capture error:', error);
    
    // Set CORS headers even on error
    Object.keys(corsHeaders).forEach(key => {
      res.setHeader(key, corsHeaders[key]);
    });

    return res.status(500).json({
      error: 'Lead capture failed',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      code: 'INTERNAL_ERROR'
    });
  }
}