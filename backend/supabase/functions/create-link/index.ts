import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { nanoid } from 'https://esm.sh/nanoid@4'

declare const Deno: any;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req: any) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { phone, message, email } = await req.json()
    if (!phone) throw new Error('Phone number is required')

    // 1. Construct standard WhatsApp URL
    const cleanPhone = phone.replace(/\D/g, '')
    const longUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message || '')}`

    // 2. Generate a unique short slug (5 chars)
    const slug = nanoid(5)

    // 3. Save to Database
    const { data, error } = await supabase
      .from('short_links')
      .insert([
        { slug, destination_url: longUrl, owner_email: email }
      ])
      .select()
      .single()

    if (error) throw error

    return new Response(
      JSON.stringify({ 
        shortLink: `https://mybijou.xyz/l/${slug}`,
        originalUrl: longUrl,
        trackingId: data.id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})