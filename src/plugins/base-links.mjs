/**
 * Sätteri (Astro's Markdown processor) HAST plugin.
 *
 * Prefixes root-relative links and images in Markdown with the site base path,
 * so an editor can write [About us](/about/) and it works on a repository
 * subpath as well as on a custom domain.
 *
 * @param {string} base
 * @returns {import('satteri').HastPluginDefinition}
 */
export function baseLinksPlugin(base = '/') {
  const prefix = base.replace(/\/+$/, '');

  /** @param {string} value */
  const rewrite = (value) => {
    if (!prefix || !value.startsWith('/') || value.startsWith('//')) return value;
    if (value === prefix || value.startsWith(`${prefix}/`)) return value;
    return `${prefix}${value}`;
  };

  return {
    name: 'base-links',
    element: {
      filter: ['a', 'img'],
      visit(node, ctx) {
        const key = node.tagName === 'a' ? 'href' : 'src';
        const value = node.properties?.[key];
        if (typeof value !== 'string') return;
        const next = rewrite(value);
        if (next !== value) ctx.setProperty(node, key, next);
      },
    },
  };
}
