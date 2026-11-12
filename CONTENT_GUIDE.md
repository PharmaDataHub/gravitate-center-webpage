# Content guide: managing updates

Updates (news, insights, events, opportunities) are Markdown files in **`src/content/updates/`**. One file is one update; the file name becomes the web address:

`src/content/updates/new-co-design-panel.md` → `/updates/new-co-design-panel/`

You never need to edit page code. The listing, homepage, category pages, RSS feed and sitemap update automatically.

## Fields (frontmatter)

The block between the `---` lines at the top of each file. The build checks it and stops with a clear message if something is wrong, so a broken update can never go live.

| Field | Required | Example | Notes |
| --- | --- | --- | --- |
| `title` | yes | `'Our first co-design workshop'` | 5–120 characters. Use quotes if it contains a colon. |
| `description` | yes | `'A short summary…'` | 30–240 characters. Shown in listings and link previews. |
| `pubDate` | yes | `2026-12-01` | Publication date. A future date keeps the update hidden until then. |
| `category` | yes | `News` | One of `News`, `Insights`, `Events`, `Opportunities`. |
| `draft` | no | `true` | `true` hides it from the live site. Defaults to `false`. |
| `author` | no | `Firstname Lastname` | |
| `updatedDate` | no | `2026-12-05` | Add when you make a significant correction. |
| `image` | no | `../../assets/updates/my-slug/cover.jpg` | Path relative to the Markdown file. |
| `imageAlt` | if `image` | `'Two people reviewing a printed leaflet'` | Required with an image. Describe what it shows. |
| `event.start` | no | `2027-02-20` | **Event date**, separate from `pubDate`. |
| `event.end` | no | `2027-02-21` | |
| `event.location` | no | `Lisbon, Portugal` | |
| `event.online` | no | `true` | |
| `event.registrationUrl` | no | `https://…` | Shows a "Register" button. |
| `sources` | no | list of `title` + `url` | Listed under the article as "Sources". |

The full template with comments is in [`templates/update.md`](templates/update.md).

## Add an update in GitHub's web editor

1. Open the repository on GitHub and go to `src/content/updates/`.
2. Click **Add file → Create new file**.
3. Name it with lowercase words and hyphens, ending in `.md`, e.g. `call-for-reviewers.md`.
4. Paste the contents of [`templates/update.md`](templates/update.md) and fill in the fields. Keep `draft: true` for now.
5. Write the article below the second `---` (see **Writing tips** below).
6. Click **Commit changes…**. For review, choose **Create a new branch and start a pull request**. The pull request runs the same checks as the live build. A red ✗ means a field needs fixing; open **Details** to see which one.

## Preview locally (optional)

```sh
npm ci
npm run new:update -- "Your headline" --category=Insights   # creates a draft from the template
npm run dev
```

Open the address shown (e.g. `http://localhost:4321/gravitate-center-webpage/updates/`). Drafts and scheduled posts **are** shown on the local preview with a yellow label. They are never shown on the live site.

## Add images

1. Create a folder named after the update: `src/assets/updates/<file-name-without-.md>/`.
   On GitHub: in `src/assets/updates/`, choose **Add file → Upload files** and type the folder name before the file name.
2. Upload a JPG or PNG, ideally at least 1600 px wide. The site resizes and compresses it automatically.
3. In the frontmatter:
   ```yaml
   image: ../../assets/updates/call-for-reviewers/cover.jpg
   imageAlt: 'A pharmacist explaining a medicine leaflet to an older woman at a counter'
   ```
4. For an image inside the article text, use `![Alt text describing the image](../../assets/updates/call-for-reviewers/diagram.png)`.

Alt text should say what the image shows and why it matters, in one sentence. Do not start with "Image of".

Only use photos you have the rights to, and **never use stock photos in a way that implies the people pictured are Gravitate staff or partners.**

## Publish a draft

Change `draft: true` to `draft: false`, check `pubDate`, and commit to `main` (or merge the pull request). The site rebuilds automatically in a few minutes.

To schedule: set `draft: false` and a future `pubDate`. A daily rebuild publishes it on that date.

## Correct a published update

Edit the file and commit. For a significant correction, add `updatedDate:` with today's date, and consider a short note at the end of the article saying what changed. Do not rename the file, because that changes the web address and breaks links.

## Remove an update

- **Hide temporarily:** set `draft: true`.
- **Remove permanently:** delete the file (on GitHub: open it, **⋯ → Delete file**), and delete its image folder in `src/assets/updates/`.

Its address will then show the "page not found" page.

## Writing tips

- Lead with the point. Short paragraphs, plain English, explain acronyms the first time.
- Use `##` for subheadings (the title is already the main heading).
- Link to pages on this site with a leading slash: `[Collaborate](/collaborate/)`. The site adds the correct base address automatically.
- Do not name organisations as Gravitate partners, quote people, or state results unless confirmed in writing. When in doubt, check [CONTENT_REVIEW.md](CONTENT_REVIEW.md).
- Credit sources using the `sources` field.

## Example files

`example-co-design-workshop.md` and `example-call-for-collaborators.md` are **illustrative drafts** that show the Events and Opportunities layouts. They must stay `draft: true`. Delete them once real content exists.

## Other editable content

- Navigation, contact email, organisation details: `src/config/site.ts`
- Focus areas and partner descriptions: `src/data/focus.ts`, `src/data/audiences.ts`
- Other page text: `src/pages/*.astro` (plain text between the tags; ask a developer if unsure)
