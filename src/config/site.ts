/**
 * Central site configuration.
 *
 * Edit this file to change navigation, contact details and organisation
 * metadata. Only add facts that have been confirmed; see CONTENT_REVIEW.md.
 */

export const site = {
  name: 'Gravitate',
  /** Used in <title> tags: "Page title · Gravitate". */
  titleSuffix: 'Gravitate',
  tagline: 'Trusted health information, shaped with the people who use it.',
  description:
    'Gravitate is a mission-driven centre bringing patients, health professionals, researchers, industry and standards bodies together to make medicines information understandable, connected and trustworthy.',
  locale: 'en',
  ogLocale: 'en_GB',
};

/**
 * Contact details.
 *
 * LAUNCH BLOCKER: no contact address has been confirmed yet. While `email`
 * is null the site shows an honest "contact details coming soon" state
 * instead of a form or a guessed address. Set it to a verified, monitored
 * mailbox to enable "Email us" links across the site.
 */
export const contact: {
  email: string | null;
  partnershipSubject: string;
  generalSubject: string;
} = {
  email: null,
  partnershipSubject: 'Partnership enquiry – Gravitate',
  generalSubject: 'Enquiry – Gravitate',
};

export type NavItem = { label: string; href: string };

/** Main navigation. `href` values are site-relative; the base path is added automatically. */
export const mainNav: NavItem[] = [
  { label: 'About', href: '/about/' },
  { label: 'Our focus', href: '/our-focus/' },
  { label: 'Collaborate', href: '/collaborate/' },
  { label: 'Updates', href: '/updates/' },
];

export const footerNav: NavItem[] = [
  { label: 'Home', href: '/' },
  ...mainNav,
  { label: 'Privacy', href: '/privacy/' },
  { label: 'RSS feed', href: '/rss.xml' },
];

/** The original EU-funded project. Facts verified against CORDIS (grant agreement 945334). */
export const legacy = {
  name: 'Gravitate-Health',
  url: 'https://www.gravitatehealth.eu/',
  cordisUrl: 'https://cordis.europa.eu/project/id/945334',
  period: '2020–2026',
};

/** Categories available for updates. Keep in sync with CONTENT_GUIDE.md. */
export const updateCategories = ['News', 'Insights', 'Events', 'Opportunities'] as const;
export type UpdateCategory = (typeof updateCategories)[number];

export const categoryDescriptions: Record<UpdateCategory, string> = {
  News: 'Announcements and developments from Gravitate.',
  Insights: 'Explainers and perspectives on health information, ePI and co-design.',
  Events: 'Workshops, meetings and gatherings, online and in person.',
  Opportunities: 'Calls for collaborators, consultations and ways to take part.',
};
