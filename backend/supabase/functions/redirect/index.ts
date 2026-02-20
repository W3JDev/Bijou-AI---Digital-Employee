import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

declare const Deno: any;

Deno.serve(async (req: any) => {
  const url = new URL(req.url)
  // Assumes URL pattern: https://project.supabase.co/functions/v1/redirect?slug=xyz
  // Or proxied via: https://bijou.ai/l/xyz
  const slug = url.searchParams.get('slug') ?? url.pathname.split('/').pop()

  if (!slug) return new Response('Not Found', { status: 404 })

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  )

  // 1. Find the link
  const { data: link } = await supabase
    .from('short_links')
    .select('id, destination_url')
    .eq('slug', slug)
    .single()

  if (!link) return new Response('Link not found', { status: 404 })

  // 2. Log Analytics (Async)
  // We don't await this to speed up the redirect
  const userAgent = req.headers.get('user-agent')
  const ip = req.headers.get('x-forwarded-for')
  
  supabase.rpc('increment_click_count', { row_id: link.id })
  supabase.from('link_clicks').insert({
    link_id: link.id,
    user_agent: userAgent,
    ip_address: ip
  })

  // 3. Redirect User
  return Response.redirect(link.destination_url, 301)
})