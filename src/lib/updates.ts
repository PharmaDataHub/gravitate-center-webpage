import { getCollection, type CollectionEntry } from 'astro:content';
import type { UpdateCategory } from '../config/site';
import { slugify } from './url';

export type Update = CollectionEntry<'updates'>;

/**
 * Whether an update is visible.
 * Production builds exclude drafts and anything dated in the future.
 * The dev server shows everything (with a "draft"/"scheduled" label) so editors can preview.
 */
export function isPublished(entry: Update, now = new Date()): boolean {
  return !entry.data.draft && entry.data.pubDate.getTime() <= now.getTime();
}

export async function getUpdates(): Promise<Update[]> {
  const all = await getCollection('updates', (entry) =>
    import.meta.env.PROD ? isPublished(entry) : true,
  );
  return all.sort(
    (a, b) =>
      b.data.pubDate.getTime() - a.data.pubDate.getTime() || a.data.title.localeCompare(b.data.title),
  );
}

export async function getLatestUpdates(count = 3): Promise<Update[]> {
  return (await getUpdates()).slice(0, count);
}

export function categorySlug(category: UpdateCategory): string {
  return slugify(category);
}

export function relatedUpdates(current: Update, all: Update[], count = 3): Update[] {
  const others = all.filter((entry) => entry.id !== current.id);
  const same = others.filter((entry) => entry.data.category === current.data.category);
  const rest = others.filter((entry) => entry.data.category !== current.data.category);
  return [...same, ...rest].slice(0, count);
}

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatDate(date: Date): string {
  return dateFormat.format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function formatEventDates(start: Date, end?: Date): string {
  if (!end || isoDate(start) === isoDate(end)) return formatDate(start);
  return dateFormat.formatRange(start, end);
}
