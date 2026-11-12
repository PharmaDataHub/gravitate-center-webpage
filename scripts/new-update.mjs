#!/usr/bin/env node
/**
 * Scaffolds a new draft update from templates/update.md.
 *
 *   npm run new:update -- "My headline" [--category=Events] [--date=2026-12-01]
 *
 * Without a title, it asks for one interactively.
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout, argv, exit } from 'node:process';

const categories = ['News', 'Insights', 'Events', 'Opportunities'];
const root = new URL('../', import.meta.url);

const args = argv.slice(2);
const flags = Object.fromEntries(
  args.filter((a) => a.startsWith('--')).map((a) => a.slice(2).split('=')),
);
let title = args.filter((a) => !a.startsWith('--')).join(' ').trim();
let category = flags.category ?? '';

if (!title || !category) {
  const rl = createInterface({ input: stdin, output: stdout });
  if (!title) title = (await rl.question('Headline: ')).trim();
  if (!category) {
    const answer = (await rl.question(`Category (${categories.join(', ')}) [News]: `)).trim();
    category = answer || 'News';
  }
  rl.close();
}

category = categories.find((c) => c.toLowerCase() === category.toLowerCase()) ?? '';
if (!title) {
  console.error('A headline is required.');
  exit(1);
}
if (!category) {
  console.error(`Category must be one of: ${categories.join(', ')}`);
  exit(1);
}

const date = flags.date ?? new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error('--date must be YYYY-MM-DD');
  exit(1);
}

const slug = title
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .slice(0, 70)
  .replace(/-+$/, '');

const target = new URL(`src/content/updates/${slug}.md`, root);
try {
  await access(target);
  console.error(`An update already exists at src/content/updates/${slug}.md`);
  exit(1);
} catch {
  // File does not exist: good.
}

const yamlString = (value) => `'${value.replace(/'/g, "''")}'`;
const template = await readFile(new URL('templates/update.md', root), 'utf8');
const content = template
  .replace(/^title: .*$/m, `title: ${yamlString(title)}`)
  .replace(/^pubDate: .*$/m, `pubDate: ${date}`)
  .replace(/^category: .*$/m, `category: ${category}`)
  .replace(/^draft: .*$/m, 'draft: true')
  .replaceAll('your-slug', slug);

await mkdir(new URL('src/content/updates/', root), { recursive: true });
await writeFile(target, content);

console.log(`Created draft: src/content/updates/${slug}.md`);
console.log(`Preview it with \`npm run dev\` at /updates/${slug}/`);
console.log('Set `draft: false` when it is ready to publish.');
