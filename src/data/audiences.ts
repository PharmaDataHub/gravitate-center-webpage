/** Partner audiences, shown on the home page and the Collaborate page. */
export type Audience = {
  id: string;
  name: string;
  /** One line for the home page: what this partner can contribute. */
  contribute: string;
  /** What this partner could bring (Collaborate page). */
  offer: string[];
  /** Why collaboration is worth it for this partner (Collaborate page). */
  value: string;
};

export const audiences: Audience[] = [
  {
    id: 'patients',
    name: 'Patient organisations and communities',
    contribute:
      'Lived experience, priorities and honest feedback that keep the work grounded in what people really need.',
    offer: [
      'Insight into the questions people actually have about their medicines',
      'Participation in co-design and testing',
      'Routes to reach people who are often left out',
    ],
    value:
      'A direct say in how medicines information is designed, and a shared platform to raise the issues your community cares about.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare organisations and professionals',
    contribute:
      'Clinical and pharmacy know-how, and real settings where better information can be tried and improved.',
    offer: [
      'Clinical and pharmaceutical expertise',
      'Implementation settings and workflows',
      'Insight into conversations between professionals and patients',
    ],
    value:
      'Information that supports, rather than complicates, your conversations with patients, shaped with your practical constraints in mind.',
  },
  {
    id: 'research',
    name: 'Universities and research institutions',
    contribute:
      'Research and evaluation methods that show what works, for whom, and why.',
    offer: [
      'Study design and evaluation methods',
      'Health literacy, human factors and informatics research',
      'Independent analysis and open publication',
    ],
    value:
      'Access to a network of practitioners and communities for relevant questions, and real-world settings for research that matters.',
  },
  {
    id: 'industry',
    name: 'The pharmaceutical industry and digital health companies',
    contribute:
      'Technical and product expertise, and experience of producing and delivering approved information at scale.',
    offer: [
      'Experience of producing approved product information',
      'Engineering and product design capacity',
      'Real implementation challenges to learn from',
    ],
    value:
      'A neutral, pre-competitive space to solve shared problems, align on standards and learn from patients and professionals directly.',
  },
  {
    id: 'standards',
    name: 'Standards organisations, public bodies and policymakers',
    contribute:
      'Standards, policy perspective and public-interest leadership that let good practice spread.',
    offer: [
      'Standards development and governance experience',
      'Policy and regulatory perspective',
      'Convening power across countries and sectors',
    ],
    value:
      'Evidence and implementation feedback from a broad community, to inform standards and policy that work in practice.',
  },
];
