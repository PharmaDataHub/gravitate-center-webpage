import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../config/site';
import { getUpdates, isPublished } from '../lib/updates';
import { url } from '../lib/url';

export async function GET(context: APIContext) {
  // Feeds only ever contain published updates, even on the dev server.
  const updates = (await getUpdates()).filter((entry) => isPublished(entry));

  return rss({
    title: `${site.name} updates`,
    description: site.description,
    site: new URL(url('/'), context.site),
    trailingSlash: true,
    items: updates.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: url(`/updates/${entry.id}/`),
      categories: [entry.data.category],
      ...(entry.data.author && { author: entry.data.author }),
    })),
    customData: `<language>${site.locale}</language>`,
  });
}
