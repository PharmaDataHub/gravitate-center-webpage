# Content review: items awaiting confirmation

This list tracks facts and launch details that need confirmation before or after public launch. Public pages avoid placeholders: where a fact was unverified, the content was left out or written conservatively.

Research date: 12 November 2026.

## Launch blockers

| # | Item | Where | Current state |
| --- | --- | --- | --- |
| 1 | **Contact email**: a verified, monitored mailbox for partnership enquiries | `src/config/site.ts` → `contact.email` | `null`. Collaborate page and CTAs show "Contact details are on their way". Setting the email turns on `mailto:` links with a pre-filled subject and body, and adds an "If you email us" paragraph to the privacy page. |
| 2 | **Organisational identity**: legal name, legal form and registered country of the body behind Gravitate | Footer, privacy page, structured data | The site uses "Gravitate" and "centre" only. It makes no claim of NGO, charity, foundation or association status. The footer reads "© 2026 Gravitate". |
| 3 | **Approval of public copy** by the people responsible for Gravitate, especially mission, vision, values and "Our relationship to Gravitate-Health" | `/about/`, `/`, `/our-focus/` | Drafted from the brief and public Gravitate-Health sources. |
| 4 | **Repository settings**: Pages source set to GitHub Actions; decision on custom domain | GitHub settings | Not changed. Nothing has been pushed or deployed. |

## Facts to confirm

| Item | Used on | Basis | Notes |
| --- | --- | --- | --- |
| Gravitate-Health ran 1 Nov 2020 – 30 Jun 2026 and is closed | Home, About, footer, News update | [CORDIS 945334](https://cordis.europa.eu/project/id/945334) ("project closed", end 30 June 2026); [IHI factsheet](https://www.ihi.europa.eu/projects-results/project-factsheets/gravitate-health) | The project site earlier described a 60-month duration and one secondary source gave Oct 2025. CORDIS is treated as authoritative. |
| Funded through IMI2, grant agreement 945334; public–private partnership | About, News update | CORDIS, IHI factsheet | Funding amounts deliberately omitted. |
| Coordinated by the University of Oslo, Pfizer as industry lead | **Not used** on public pages | CORDIS, project site | Omitted to avoid implying these organisations are Gravitate partners. |
| G-lens "focus (but not conceal or filter)" approved information | Home, About, Insights article | IHI factsheet wording | |
| Personas: three end-user groups, six personas | Our focus (co-design) | IHI factsheet | |
| Health literacy research among patient groups | Our focus (health literacy) | CORDIS results list (IBD health-literacy study, 2025) | Phrased generally. |
| Open-source components, Open E2E ePI community, evaluation framework | Our focus | Project website | The final white paper and platform status are not confirmed; no claims of completion beyond "built and tested". |
| OECD: ~200,000 premature deaths/year in Europe linked to poor adherence | About ("The need") | Cited in IHI factsheet | Attributed to the factsheet. Confirm the team is comfortable citing it. |
| EU ePI common standard based on HL7 FHIR | Our focus, ePI article | EMA ePI page | EMA's page could not be fetched during research (rate-limited). Re-check wording and add any current go-live dates if wanted. |
| "HL7®" and "FHIR®" trademarks | Our focus | HL7 trademark policy | Registered marks used descriptively; confirm attribution needs. |

## Deliberately omitted (add only when confirmed)

- Governance, board, team members, advisors.
- Partners, members, funders, endorsements and logos. **Former Gravitate-Health partners are not listed as Gravitate partners.**
- Membership scheme, donations, fees.
- Impact statistics, testimonials, clinical outcomes.
- Social media accounts, newsletter, postal address.
- Organisation structured data beyond `WebSite` (add `Organization` with legal name, logo and contact once confirmed).
- A legal privacy policy. `/privacy/` describes only what the website technically does. Once a controller is confirmed, have it reviewed (GDPR controller identity, contact, rights).

## Editorial content

| File | Status | Notes |
| --- | --- | --- |
| `gravitate-health-concludes.md` | Published (News, 12 Nov 2026) | Grounded in CORDIS/IHI; sources listed. States Gravitate is "at an early stage". |
| `focus-not-filter.md` | Published (Insights, 11 Nov 2026) | Explainer of the G-lens principle; cover is a custom diagram. |
| `what-is-epi.md` | Published (Insights, 10 Nov 2026) | General explainer; no claims about Gravitate's activities. |
| `example-co-design-workshop.md` | **Illustrative draft** | Never publish. Delete when real content exists. |
| `example-call-for-collaborators.md` | **Illustrative draft** | Never publish. Delete when real content exists. |

Publication dates for the three published updates are placeholders for the launch date. Adjust them so they don't predate the site going live.

## Brand

- The wordmark and "focus" mark (`src/components/Logo.astro`, `public/favicon.svg`) are **provisional**. Replace them if an approved logo exists.
- The social sharing image `public/social-card.png` is generated from `scripts/art/social-card.svg`. Regenerate it if the tagline or logo changes (`rsvg-convert -w 1200 -h 630 scripts/art/social-card.svg -o public/social-card.png`).
- Tagline: "Trusted health information, shaped with the people who use it." Confirm or replace in `src/config/site.ts`.
