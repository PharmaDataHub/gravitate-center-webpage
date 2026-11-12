# Gravitate website

Static website for **Gravitate**, a mission-driven centre for trustworthy health information that grows out of the Gravitate-Health project.

Built with [Astro](https://astro.build) 7 and TypeScript. It deploys to GitHub Pages and has no server, database, cookies or tracking.

| Document | Purpose |
| --- | --- |
| [CONTENT_GUIDE.md](CONTENT_GUIDE.md) | How editors add, publish, correct and remove updates |
| [CONTENT_REVIEW.md](CONTENT_REVIEW.md) | Facts and launch details awaiting confirmation (**read before launch**) |
| [DESIGN.md](DESIGN.md) | Design rationale: palette, structure, partnership journey, contrast table |

## Quick start

Requires Node.js 22.23.4 or later (`.nvmrc` pins 24).

```sh
npm ci               # install exactly what package-lock.json specifies
npm run dev          # http://localhost:4321/gravitate-center-webpage/ (shows drafts)
npm run build        # type-check (astro check) + production build into dist/
npm run check:links  # verify every internal link and asset in dist/
npm run preview      # serve dist/ locally
npm run new:update -- "Headline" --category=News   # scaffold a draft update
```

## Project structure

```
src/
  config/site.ts          Navigation, contact details, organisation metadata  ← edit here
  content.config.ts       Schema for updates (validated at build time)
  content/updates/        One Markdown file per update                        ← editors work here
  assets/updates/<slug>/  Images for updates (optimised automatically)
  data/                   Focus areas and partner audiences (page copy)
  components/ layouts/    Reusable UI
  pages/                  Routes: /, /about/, /our-focus/, /collaborate/, /updates/,
                          /updates/<slug>/, /updates/category/<category>/, /privacy/,
                          /404, /rss.xml, /robots.txt
  plugins/base-links.mjs  Makes root-relative links in Markdown base-path aware
  styles/global.css       Design tokens and base styles
templates/update.md       Template for new updates (outside the published collection)
scripts/                  new-update scaffolder, link checker, source art for images
public/                   Files copied as-is (favicon, social card)
```

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` type-checks, builds, checks links and deploys on every push to `main`. It also:

- runs on pull requests (build and checks only, no deploy);
- rebuilds daily at 05:15 UTC so updates with a future `pubDate` go live on their date;
- can be run manually from the **Actions** tab.

### One-time repository settings

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Check the `github-pages` environment allows deployments from `main` (Settings → Environments).
3. Push to `main`, or run the workflow manually.

The site will be served at `https://pharmadatahub.github.io/gravitate-center-webpage/`.

### Repository subpath vs custom domain

`astro.config.mjs` reads two optional environment variables:

| Variable | Default | Custom domain |
| --- | --- | --- |
| `SITE_URL` | `https://pharmadatahub.github.io` | `https://www.your-domain.org` |
| `BASE_PATH` | `/gravitate-center-webpage` | `/` |

To move to a custom domain:

1. Add repository **variables** (Settings → Secrets and variables → Actions → Variables): `SITE_URL` and `BASE_PATH=/`.
2. Configure the domain under **Settings → Pages → Custom domain** and set up DNS as GitHub describes. With the Actions source, GitHub stores the domain in the Pages settings; a `public/CNAME` file is not required. (No CNAME exists in this repository; do not overwrite one if it is added later.)
3. Re-run the workflow.

Every internal link uses the `url()` helper (`src/lib/url.ts`) and Markdown links are rewritten by `src/plugins/base-links.mjs`, so no page code changes are needed. Both configurations were tested with `npm run check:links`.

URLs always end with a slash (`trailingSlash: 'always'`, `build.format: 'directory'`), so `/about/` is served from `about/index.html` and direct navigation to nested pages works on GitHub Pages. GitHub Pages serves `404.html` for unknown paths.

## Technical notes

- **Updates**: drafts and future-dated posts are excluded from production routes, listings, the homepage, category pages, RSS and sitemap (`src/lib/updates.ts`). The dev server shows them with a label so editors can preview.
- **Fonts**: Newsreader and Public Sans, downloaded at build time by Astro's Fonts API and served from the site itself (no runtime requests to Google).
- **Images**: images referenced from updates are resized and converted to WebP at build time, with explicit dimensions.
- **JavaScript**: only the mobile menu uses client-side JavaScript; without it, navigation remains fully usable.
- **Markdown**: Astro 7's default Sätteri processor, configured in `astro.config.mjs`.
- **Contact**: no form exists, because GitHub Pages has no backend. Set `contact.email` in `src/config/site.ts` to enable email links; until then the site shows an honest "contact details coming soon" state.

### Optional: a browser-based editor

The default editorial workflow is Markdown through GitHub's web editor, which needs nothing extra. If non-technical editors later need a form-based editor, a Git-based CMS such as Decap CMS or Pages CMS could sit on top of the same `src/content/updates/` folder. Both need an authentication setup (e.g. a GitHub OAuth app) and should be evaluated separately. Neither is a dependency of this site.
