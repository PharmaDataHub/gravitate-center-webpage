/**
 * Areas of focus, shown on the home page and the Our focus page.
 * `ambition` describes what Gravitate wants to do; `foundation` describes what
 * already exists (from Gravitate-Health or the wider field). Keep the two separate.
 */
export type FocusArea = {
  id: string;
  icon: 'literacy' | 'connected' | 'codesign' | 'learning';
  title: string;
  summary: string;
  intro: string;
  examples: string[];
  foundation: string;
  ambition: string;
};

export const focusAreas: FocusArea[] = [
  {
    id: 'health-literacy',
    icon: 'literacy',
    title: 'Health literacy and accessible medicines information',
    summary:
      'Helping people find and understand the approved information about their medicines, whatever their reading level, language or circumstances.',
    intro:
      'Health literacy is the ability to find, understand and use health information to make decisions. It depends on the person, but just as much on how the information is written, organised and delivered. A package leaflet can be accurate and still be very hard to use when you are unwell, worried or caring for someone else.',
    examples: [
      'Bringing the sections that matter most for a particular person to the top, while keeping everything else one step away, never hidden.',
      'Testing wording, layout and formats (text, audio, visual) with people who have different levels of health literacy.',
      'Sharing practical guidance on plain language for people who write and review medicines information.',
    ],
    foundation:
      'Gravitate-Health developed the idea of a “lens” that focuses approved information on what is relevant to the reader without concealing or filtering any of it, and studied health literacy among patient groups.',
    ambition:
      'Gravitate wants to keep improving how approved information is presented, and to make what works openly available to the organisations that produce and deliver it.',
  },
  {
    id: 'connected-information',
    icon: 'connected',
    title: 'Connected information, ePI and interoperability',
    summary:
      'Making trusted medicines information digital, structured and able to work across the apps and systems people already use.',
    intro:
      'Electronic product information (ePI) is the approved information for a medicine published in a structured digital format, rather than as a printed leaflet or a PDF. Interoperability means different systems can exchange that information and understand it in the same way. Together they make it possible to keep information up to date and connect it, with permission, to a person’s own health context.',
    examples: [
      'An app that notices a medicine has a warning relevant to pregnancy and brings that section into view for someone who is pregnant.',
      'Pharmacy and hospital systems drawing on the same current version of a leaflet, instead of out-of-date copies.',
      'Feedback from real implementations shaping open standards such as HL7® FHIR® ePI.',
    ],
    foundation:
      'In Europe, regulators and the HL7 community have developed a common ePI standard based on HL7 FHIR. Gravitate-Health built and tested open-source components and worked with an open community on preparing ePI that digital tools can use.',
    ambition:
      'Gravitate aims to be a neutral place where people implementing ePI and related standards can compare experience, test ideas openly and feed lessons back into standards work.',
  },
  {
    id: 'co-design',
    icon: 'codesign',
    title: 'Co-design and community engagement',
    summary:
      'Designing with patients, carers and professionals from the very start, not asking for their opinion at the end.',
    intro:
      'Co-design means the people who will use something help to shape it: defining the problem, testing early ideas and deciding what “good” looks like. For health information this matters, because what feels clear to an expert can be confusing to a patient, and what a patient needs most can be invisible to a system designer.',
    examples: [
      'Workshops where patient organisations and clinicians review a prototype together.',
      'Personas, short descriptions of typical users and their needs, that teams can share and refine.',
      'Paying attention to people who are often left out: older people, people with low digital confidence, and speakers of other languages.',
    ],
    foundation:
      'Gravitate-Health developed a set of user personas, three groups of end users and six personas, as a shared reference for design work.',
    ambition:
      'Gravitate wants co-design to be the normal way of working, with fair and well-supported involvement for patient and community representatives.',
  },
  {
    id: 'shared-learning',
    icon: 'learning',
    title: 'Shared learning, evaluation and implementation',
    summary:
      'Finding out what actually helps people, and sharing what we learn so others can build on it.',
    intro:
      'Good intentions are not evidence. To know whether better information leads to better understanding, safer use of medicines or more confidence, it has to be evaluated carefully and honestly. What we learn should be shared, including what did not work.',
    examples: [
      'Agreeing common ways to measure understanding and usability across studies.',
      'Learning from pilots in real care settings: what helped, what got in the way, and why.',
      'Open publications, explainers and events that turn findings into practical guidance.',
    ],
    foundation:
      'Gravitate-Health set out an evaluation framework for testing its tools and explored whether clearer information could support adherence and safer medication use.',
    ambition:
      'Gravitate plans to bring partners together around shared evaluation and implementation learning. We will report results only when the evidence supports them.',
  },
];
