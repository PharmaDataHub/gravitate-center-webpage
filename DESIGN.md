# Design rationale

## Concept: focus, not filter

The visual identity comes from Gravitate-Health's central idea: bring the relevant information into **focus** without hiding the rest. The hero illustration shows a medicine leaflet with one line highlighted in amber and every other line still visible. The communities that make trustworthy information possible (patients and carers, clinicians, pharmacists, researchers, industry, standards bodies) orbit the same centre. The concentric "focus" mark in the logo, the faint orbit lines in page headers and the amber highlight all come from this one idea. None of the graphics are decorative science imagery.

The tone is editorial rather than SaaS: a serif display face (Newsreader), a civic, highly legible sans for text (Public Sans, originally designed for public-sector services), ruled lists instead of card grids, numbered sections, generous whitespace, and almost square corners (3px radius). There are no pill badges, carousels, autoplay, pop-ups or scroll hijacking.

## The 2+1 palette

| Role | Token | Hex | Used for |
| --- | --- | --- | --- |
| Primary deep blue | `--blue-deep` | `#102A43` | Headings, navigation, footer, strong bands (legacy, CTA, conversation) |
| Secondary blue | `--blue` | `#2563EB` | Links, default buttons, icons, illustration lines |
| Accent amber | `--amber` | `#F2B544` | Primary CTA ("Explore a partnership"), eyebrow rules, the "focus" highlight, active-nav underline, skip link |
| Neutrals | `--white`, `--mist` | `#FFFFFF`, `#F5F8FC` | Backgrounds |

Tonal variations (`--blue-dark`, `--blue-light`, `--blue-tint`, `--blue-line`, `--amber-dark`, `--amber-tint`, etc.) are tints and shades of the three core colours only, defined in `src/styles/global.css`.

Blue dominates and amber is rationed. It appears on one button per view and as thin rules, so it reliably marks "this is the next step". Amber is never used as a section background. Text on amber is always deep blue.

### Contrast (WCAG 2.2, computed)

| Pair | Ratio |
| --- | --- |
| Body text `#2B3A4A` on white / mist | 11.62 / 10.91 |
| Headings `#102A43` on white / mist | 14.64 / 13.75 |
| Muted text `#52606D` on white / mist | 6.46 / 6.06 |
| Link `#2563EB` on white / mist | 5.17 / 4.85 |
| White on blue button / hover | 5.17 / 6.70 |
| Deep blue on amber button / hover | 8.00 / 6.54 |
| Body text `#E6EDF6` on deep blue | 12.42 |
| Muted `#B8C6D8` on deep blue | 8.44 |
| Light-blue link `#9CBCF7` on deep blue | 7.63 |
| Amber on deep blue (numerals, focus ring) | 8.00 |

Every text pair meets AA (4.5:1); most meet AAA. `#2563EB` is never used for text on deep blue (2.8:1). `--blue-light` is used there instead.

## Page structure and the partnership journey

Each page answers one of the questions a prospective partner arrives with, and each ends by pointing to the next step.

1. **Home: "What is this, and is it for me?"** The hero states what Gravitate does and who benefits, with **Explore a partnership** (amber) and **Discover our mission**. Then: why it exists → four focus areas → a table of *who contributes what* (so each audience finds itself) → a short legacy band → the latest updates (proof of activity) → a closing invitation.
2. **About: "Can I trust them?"** Mission and vision, the need (with a sourced statistic), values, an honest account of the Gravitate-Health relationship (including the statement that former project partners are not automatically Gravitate partners), and how collaboration delivers the mission.
3. **Our focus: "What would we actually work on?"** Each area pairs plain-language explanations and examples with two clearly labelled boxes, *What already exists* and *What Gravitate aims to do*, to keep ambitions separate from results.
4. **Collaborate: "What would it mean for my organisation?"** For each of the five audiences: what they could bring, and what's in it for them. Then potential activities, a five-point checklist for a first conversation, and the contact action (an honest pending state until an inbox is confirmed), followed by partnership principles.
5. **Updates: "Is anything happening?"** An editorial ruled list with category filters (plain links, no JavaScript) and RSS. Each article ends with a CTA matched to its category.

## Mobile

Mobile layouts are composed rather than squeezed. The menu becomes a full-width panel with large serif links and its own CTA. The hero puts the headline and actions first and the illustration after them. Sticky side-headings on desktop become stacked headings. Grids become ruled single-column lists. Hero buttons go full-width at phone sizes. Navigation, buttons and filter links have touch targets at least 44px tall. Inline links in running text are exempt under WCAG 2.5.8. No horizontal overflow was found at 320, 375 or 768px.

## Motion

Only two animations: the hero text fades up, and the illustration's highlight "focuses in". Both are wrapped in `prefers-reduced-motion: no-preference`, and all content is visible without them.
