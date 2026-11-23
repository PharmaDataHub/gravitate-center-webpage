# Design rationale

## Concept: focus, not filter

The visual identity comes from Gravitate-Health's central idea: bring the relevant information into **focus** without hiding the rest. The hero illustration shows a medicine leaflet with one line highlighted in orange and every other line still visible. The communities that make trustworthy information possible (patients and carers, clinicians, pharmacists, researchers, industry, standards bodies) orbit the same centre. The concentric "focus" mark in the logo, the faint orbit lines in page headers and the orange highlight all come from this one idea. None of the graphics are decorative science imagery.

The tone is editorial rather than SaaS: a serif display face (Newsreader), a civic, highly legible sans for text (Public Sans, originally designed for public-sector services), ruled lists instead of card grids, numbered sections, generous whitespace, and almost square corners (3px radius). There are no pill badges, carousels, autoplay, pop-ups or scroll hijacking.

## The 2+1 palette

Derived from the Gravitate Center slide template (blue and orange variant). The template's blue `#238CBD` falls below 4.5:1 for normal text on white, so text and buttons use an AA-safe shade of it, and the template blue itself is kept for graphics. The template's title orange (`#FD5427`) read as too harsh on screen, so the accent is the softer coral from the logo's heart.

| Role | Token | Hex | Used for |
| --- | --- | --- | --- |
| Primary deep blue | `--blue-deep` | `#08263A` | Headings, navigation, footer, strong bands (legacy, CTA, conversation) |
| Secondary blue | `--blue` | `#1A6F9B` | Links, default buttons, icons (AA-safe shade of the template blue) |
| Accent orange (coral) | `--orange` | `#F17A63` | Primary CTA ("Explore a partnership"), eyebrow rules, the "focus" highlight, active-nav underline, skip link |
| Template blue | `--blue-brand` | `#238CBD` | Illustration lines and dots only, never text |
| Neutrals | `--white`, `--mist` | `#FFFFFF`, `#F3F8FB` | Backgrounds |

Tonal variations (`--blue-dark`, `--blue-light`, `--blue-tint`, `--blue-line`, `--orange-dark`, `--orange-light`, `--orange-tint`, etc.) are tints and shades of the core colours only, defined in `src/styles/global.css`. The orange hover is lighter, not darker, so deep-blue text on it keeps its contrast. The coral is only 2.7:1 on white, so the active-nav and active-filter underlines (the only cue for that state) use `--orange-dark` `#D9553B` (3.7:1 on mist); elsewhere orange rules are decorative.

Blue dominates and orange is rationed. It appears on one button per view and as thin rules, so it reliably marks "this is the next step". Orange is never used as a section background. Text on orange is always deep blue; white on orange fails AA (2.7:1).

### Contrast (WCAG 2.2, computed)

| Pair | Ratio |
| --- | --- |
| Body text `#253744` on white / mist | 12.29 / 11.49 |
| Headings `#08263A` on white / mist | 15.57 / 14.56 |
| Muted text `#4D5F6B` on white / mist | 6.64 / 6.20 |
| Link `#1A6F9B` on white / mist | 5.54 / 5.18 |
| White on blue button / hover | 5.54 / 7.51 |
| Deep blue on orange button / hover | 5.71 / 6.92 |
| Body text `#E4EEF4` on deep blue | 13.22 |
| Muted `#B3C7D4` on deep blue | 8.92 |
| Light-blue link `#8CCBEA` on deep blue | 8.78 |
| Orange on deep blue (numerals, footer link hover, focus ring) | 5.71 |
| Active-state underline `#D9553B` on white / mist (non-text, 3:1) | 3.95 / 3.69 |
| Template blue graphics on white (non-text, 3:1) | 3.78 |

Every text pair meets AA (4.5:1). `#1A6F9B` is never used for text on deep blue (2.8:1). `--blue-light` is used there instead.

## Page structure and the partnership journey

Each page answers one of the questions a prospective partner arrives with, and each ends by pointing to the next step.

1. **Home: "What is this, and is it for me?"** The hero states what Gravitate does and who benefits, with **Explore a partnership** (orange) and **Discover our mission**. Then: why it exists → four focus areas → a table of *who contributes what* (so each audience finds itself) → a short legacy band → the latest updates (proof of activity) → a closing invitation.
2. **About: "Can I trust them?"** Mission and vision, the need (with a sourced statistic), values, an honest account of the Gravitate-Health relationship (including the statement that former project partners are not automatically Gravitate partners), and how collaboration delivers the mission.
3. **Our focus: "What would we actually work on?"** Each area pairs plain-language explanations and examples with two clearly labelled boxes, *What already exists* and *What Gravitate aims to do*, to keep ambitions separate from results.
4. **Collaborate: "What would it mean for my organisation?"** For each of the five audiences: what they could bring, and what's in it for them. Then potential activities, a five-point checklist for a first conversation, and the contact action (an honest pending state until an inbox is confirmed), followed by partnership principles.
5. **Updates: "Is anything happening?"** An editorial ruled list with category filters (plain links, no JavaScript) and RSS. Each article ends with a CTA matched to its category.

## Mobile

Mobile layouts are composed rather than squeezed. The menu becomes a full-width panel with large serif links and its own CTA. The hero puts the headline and actions first and the illustration after them. Sticky side-headings on desktop become stacked headings. Grids become ruled single-column lists. Hero buttons go full-width at phone sizes. Navigation, buttons and filter links have touch targets at least 44px tall. Inline links in running text are exempt under WCAG 2.5.8. No horizontal overflow was found at 320, 375 or 768px.

## Motion

Only two animations: the hero text fades up, and the illustration's highlight "focuses in". Both are wrapped in `prefers-reduced-motion: no-preference`, and all content is visible without them.
