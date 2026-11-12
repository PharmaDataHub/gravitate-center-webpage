/**
 * Checks internal links and assets in the built site (dist/).
 * Run after `npm run build`: `npm run check:links`.
 * Reads BASE_PATH the same way astro.config.mjs does.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const base = (process.env.BASE_PATH || '/gravitate-center-webpage').replace(/\/+$/, '');

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

async function exists(path) {
  try {
    return await stat(path);
  } catch {
    return null;
  }
}

async function resolveTarget(pathname) {
  if (base && pathname !== base && !pathname.startsWith(`${base}/`)) return { ok: false, reason: 'missing base path' };
  const rel = decodeURIComponent(pathname.slice(base.length)) || '/';
  const file = join(dist, rel);
  const info = await exists(file);
  if (info?.isFile()) return { ok: true };
  if (info?.isDirectory() && (await exists(join(file, 'index.html')))) {
    return rel.endsWith('/') ? { ok: true } : { ok: false, reason: 'missing trailing slash' };
  }
  return { ok: false, reason: 'not found' };
}

const problems = [];
let checked = 0;
for await (const file of walk(dist)) {
  if (!['.html', '.xml', '.txt'].includes(extname(file))) continue;
  const html = await readFile(file, 'utf8');
  const refs = [...html.matchAll(/(?:href|src|srcset)="([^"]+)"/g)].flatMap((m) =>
    m[1].split(',').map((part) => part.trim().split(/\s+/)[0]),
  );
  const locs = [...html.matchAll(/<(?:loc|link)>([^<]+)<\/(?:loc|link)>/g)].map((m) => new URL(m[1]).pathname);
  for (const ref of [...refs, ...locs]) {
    if (!ref || /^(https?:|mailto:|#|data:)/.test(ref) || ref.startsWith('//')) continue;
    const pathname = ref.split('#')[0].split('?')[0];
    if (!pathname.startsWith('/')) {
      problems.push(`${file.replace(dist, '')}: relative URL ${ref}`);
      continue;
    }
    checked++;
    const result = await resolveTarget(pathname);
    if (!result.ok) problems.push(`${file.replace(dist, '')}: ${ref} (${result.reason})`);
  }
}

if (problems.length) {
  console.error(`✗ ${problems.length} broken internal reference(s):\n  ${[...new Set(problems)].join('\n  ')}`);
  process.exit(1);
}
console.log(`✓ ${checked} internal references checked, none broken (base: "${base || '/'}").`);
