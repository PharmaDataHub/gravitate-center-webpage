/**
 * Builds a base-aware URL for an internal page or asset.
 * Always use this for internal links: `href={url('/about/')}`.
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (/^[a-z]+:|^\/\/|^#/i.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Absolute URL (for canonical links, social metadata and feeds). */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(url(path), site).href;
}

/** True when `path` matches the current page or one of its children. */
export function isCurrent(path: string, currentPathname: string): boolean {
  const target = url(path);
  if (path === '/') return currentPathname === target;
  return currentPathname.startsWith(target);
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
