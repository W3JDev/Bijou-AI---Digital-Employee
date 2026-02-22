// BIJOU AI - Onboarding Signup API Proxy
// Proxies requests to the production Bijou AI onboarding system

export default async function handler(req, res) {
  // Set CORS headers first
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { business_name, email, phone } = req.body;
    
    // Basic validation
    if (!business_name || !email) {
      return res.status(400).json({ 
        error: 'Business name and email are required',
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

    // Proxy request to production onboarding system
    const response = await fetch('https://bijou-production.fly.dev/api/onboarding/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        business_name: business_name.trim(),
        email: email.toLowerCase().trim(),
        phone: phone ? phone.trim() : ''
      })
    });

    const result = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(result);
    }

    return res.status(200).json(result);

  } catch (error) {
    console.error('❌ Onboarding signup proxy error:', error);
    
    return res.status(500).json({
      error: 'Server error occurred',
      message: 'Please try again in a moment',
      code: 'INTERNAL_ERROR'
    });
  }
}