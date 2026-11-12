---
# ─────────────────────────────────────────────────────────────────────────
# Gravitate update template. Copy into src/content/updates/<your-slug>.md
# (or run `npm run new:update -- "Your title"`). Full guide: CONTENT_GUIDE.md
# Lines starting with # are comments and can be deleted.
# ─────────────────────────────────────────────────────────────────────────

# Required. Plain, specific headline (5–120 characters).
title: 'Your headline here'

# Required. One or two sentences shown in listings, search results and social
# previews (30–240 characters).
description: 'A one-sentence summary of what this update is about and why it matters.'

# Required. Publication date, YYYY-MM-DD. Updates dated in the future stay
# hidden until that date (the site rebuilds daily).
pubDate: 2026-01-31

# Required. One of: News, Insights, Events, Opportunities
category: News

# true = hidden from the live site. Set to false when ready to publish.
draft: true

# Optional. Name of the author, as it should appear on the page.
# author: Firstname Lastname

# Optional. Date of a significant correction or change, YYYY-MM-DD.
# updatedDate: 2026-02-15

# Optional cover image. Put the file in src/assets/updates/<your-slug>/ and
# reference it relative to this file. imageAlt is then REQUIRED: describe what
# the image shows (at least 10 characters).
# image: ../../assets/updates/your-slug/cover.jpg
# imageAlt: Describe the image for someone who cannot see it.

# Optional, for Events. The event date is separate from the publication date.
# event:
#   start: 2026-03-10
#   end: 2026-03-11
#   location: Lisbon, Portugal
#   online: false
#   registrationUrl: https://example.org/register

# Optional. Sources to credit at the end of the article.
# sources:
#   - title: Name of the source
#     url: https://example.org/page
---

Start with the most important point in one or two short sentences.

## A clear subheading

Write in plain English. Keep paragraphs short. Explain technical terms the
first time you use them.

- Use bullet points for lists.
- Link to pages on this site with a leading slash, e.g. [Collaborate](/collaborate/).

End with what the reader can do next, if anything.
