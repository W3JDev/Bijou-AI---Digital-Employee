// BIJOU AI - Send WhatsApp Notification API Proxy
// Proxies WhatsApp notifications to the production system

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
    const { to, message } = req.body;
    
    // Basic validation
    if (!to || !message) {
      return res.status(400).json({ 
        error: 'To and message are required',
        code: 'MISSING_REQUIRED_FIELDS'
      });
    }

    // Proxy request to production WhatsApp system
    const response = await fetch('https://bijou-production.fly.dev/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        message
      })
    });

    const result = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(result);
    }

    return res.status(200).json(result);

  } catch (error) {
    console.error('❌ WhatsApp send proxy error:', error);
    
    return res.status(500).json({
      error: 'Server error occurred',
      message: 'Please try again in a moment',
      code: 'INTERNAL_ERROR'
    });
  }
}