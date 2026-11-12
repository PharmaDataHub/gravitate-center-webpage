import type { APIContext } from 'astro';
import { absoluteUrl } from '../lib/url';

export function GET(context: APIContext) {
  const body = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap-index.xml', context.site)}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
