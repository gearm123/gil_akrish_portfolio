/**
 * Site content for Gil Akrish portfolio.
 */

export type Project = {
  id: string
  title: string
  summary: string
  vibe: string
  tags: string[]
  href: string
  year?: string
}

export type Capability = {
  id: string
  title: string
  description: string
}

export type ExperienceRole = {
  title: string
  type?: string
  dates: string
  location?: string
  bullets: string[]
  skills?: string[]
}

export type ExperienceEntry = {
  id: string
  company: string
  tenure?: string
  roles: ExperienceRole[]
}

export type EducationEntry = {
  id: string
  school: string
  degree: string
  dates?: string
  grade?: string
  honors?: string
  details?: string[]
  skills?: string[]
}

export const site = {
  name: 'Gil Akrish',
  tagline:
    'Software engineer focused on mobile systems, secure product integrations, and modern web frontends.',
  intro:
    'From Android tooling and shipped mobile apps to React client work — building reliable software across the stack.',
  email: 'hello@gilakrish.com', // PLACEHOLDER
  location: 'Tel Aviv District, Israel',
  links: {
    github: 'https://github.com/gearm123',
    linkedin: 'https://www.linkedin.com/in/gil-akrish-621b1b160/',
  },
}

/** Side projects & builds — lighter tone than experience */
export const projects: Project[] = [
  {
    id: 'ai-movie-studio',
    title: 'AI Movie Studio',
    vibe: 'Lights, camera, prompts',
    summary:
      'A TypeScript frontend playground for an AI movie studio — experimenting with generative workflows in a product-shaped UI.',
    tags: ['TypeScript', 'React', 'AI'],
    href: 'https://github.com/gearm123/ai_movie_studio_frontend',
    year: '2026',
  },
  {
    id: 'tovi-frontend',
    title: 'ProperTLV / Tovi',
    vibe: 'Tel Aviv, listed',
    summary:
      'Full React frontend for a Tel Aviv real-estate company — listings, admin tooling, and SEO migration from WordPress.',
    tags: ['TypeScript', 'React', 'SEO', 'Netlify'],
    href: 'https://github.com/gearm123/tovi_frontend_realestate',
    year: '2026',
  },
  {
    id: 'whacky-game',
    title: 'Whacky Game',
    vibe: 'Click. Laugh. Repeat.',
    summary:
      'An online interactive game with its own JavaScript backend — built for the fun of shipping something people can play.',
    tags: ['JavaScript', 'Game', 'Full-stack'],
    href: 'https://github.com/gearm123/whacky-game',
    year: '2026',
  },
  {
    id: 'buffalo-money-send',
    title: 'Buffalo Money Send',
    vibe: 'Money, meet the web',
    summary:
      'Cross-border money-send product work — TypeScript frontend (Pat Money Transfer) paired with a dedicated money-send backend.',
    tags: ['TypeScript', 'Fintech', 'Full-stack'],
    href: 'https://github.com/gearm123/PatMoneyTransfer',
    year: '2026',
  },
  {
    id: 'eli-hahomo',
    title: 'Eli Hahomo',
    vibe: 'Sleep, sorted',
    summary:
      'Web presence for Eli Hahomo — a bed and mattress company run by Eli Hahomo. Built to present the brand and products clearly online.',
    tags: ['TypeScript', 'React', 'Retail'],
    href: 'https://github.com/gearm123/Eli_Hahomo',
    year: '2026',
  },
  {
    id: 'easy-nadlan',
    title: 'Easy Nadlan',
    vibe: 'CRM in progress',
    summary:
      'A real-estate CRM system currently in progress — tooling to help manage property workflows as the product takes shape.',
    tags: ['TypeScript', 'React', 'CRM'],
    href: 'https://github.com/gearm123/easy_nadlan',
    year: '2026',
  },
]

export const experience: ExperienceEntry[] = [
  {
    id: 'freelance',
    company: 'Freelance',
    tenure: 'Apr 2026 – Present',
    roles: [
      {
        title: 'Web Developer',
        type: 'Part-time · Self-employed',
        dates: 'Apr 2026 – Present',
        location: 'Tel Aviv District, Israel · Remote',
        bullets: [
          'Developing a React frontend with a Render-hosted backend for a Tel Aviv real-estate company.',
          'Shipping and hosting on Netlify, including production deployment workflows.',
        ],
        skills: ['React.js', 'Netlify'],
      },
    ],
  },
  {
    id: 'comsigntrust',
    company: 'ComSignTrust',
    tenure: '2 yrs 4 mos',
    roles: [
      {
        title: 'Cryptographer & Mobile Developer',
        type: 'Full-time',
        dates: 'Jan 2024 – Apr 2026',
        location: 'Israel · Hybrid',
        bullets: [
          'Developed and maintained mobile apps in Kotlin (Android) and Swift (iOS), including releases to Google Play and the Apple App Store.',
          'Built npm package libraries integrating company backend APIs and authentication flows.',
          'Implemented OAuth-based authentication and secure API communication layers.',
          'Developed React applications, including integrations with Google Docs and Zoom.',
        ],
        skills: ['Kotlin', 'Swift', 'React', 'OAuth'],
      },
    ],
  },
  {
    id: 'applitools',
    company: 'Applitools',
    tenure: '1 yr 7 mos',
    roles: [
      {
        title: 'Senior Android Developer',
        type: 'Full-time',
        dates: 'Dec 2021 – Jun 2023',
        location: 'Ramat Gan, Tel Aviv District, Israel',
        bullets: [
          'Reverse engineered Android UI architecture to analyze framework-level view rendering and interaction mechanisms.',
          'Developed tooling to inject code into APKs at the SMALI bytecode level without recompilation.',
          'Built internal instrumentation tools for analyzing and replicating Android UI behavior in automated testing environments.',
        ],
        skills: ['Smali', 'Android SDK'],
      },
    ],
  },
  {
    id: 'mobile-group',
    company: 'Mobile Group Ltd.',
    tenure: '3 yrs 2 mos',
    roles: [
      {
        title: 'Software Development Team Lead',
        type: 'Full-time',
        dates: 'Aug 2020 – Dec 2021',
        location: 'Israel',
        bullets: [
          'Led development of Android applications and embedded device software.',
          'Managed the development team and coordinated architecture and implementation decisions.',
        ],
        skills: ['Android', 'AT commands', 'Embedded'],
      },
      {
        title: 'Software Developer',
        type: 'Full-time',
        dates: 'Nov 2018 – Aug 2020',
        location: 'Israel',
        bullets: [
          'Android system and application development for production products.',
          'C development including drivers, Android kernel changes, and Teensyduino work.',
        ],
        skills: ['Android', 'C', 'Kernel'],
      },
    ],
  },
  {
    id: 'bar-ilan',
    company: 'Bar-Ilan University',
    tenure: 'Teaching roles',
    roles: [
      {
        title: 'Teaching Assistant',
        dates: 'Oct 2018 – Oct 2019',
        location: 'Ramat Gan',
        bullets: [
          'Teaching assistant for Software Engineering and Assembly Language.',
        ],
        skills: ['Software Engineering', 'Assembly'],
      },
      {
        title: 'Assembly Language Tutor',
        dates: 'Oct 2017 – Dec 2017',
        location: 'Ramat Gan',
        bullets: ['Tutor for assembly 8086 language.'],
        skills: ['Assembly 8086'],
      },
    ],
  },
]

export const education: EducationEntry[] = [
  {
    id: 'tau',
    school: 'Tel Aviv University',
    degree: 'M.Sc., Electrical and Electronics Engineering',
    grade: 'GPA 91',
    details: [
      'Thesis accepted with minor revisions to Histopathology: Deep learning–based segmentation of oral cavity squamous cell carcinoma in histopathology images.',
    ],
  },
  {
    id: 'biu',
    school: 'Bar-Ilan University',
    degree: 'Bachelor of Science (B.Sc.), Computer Engineering',
    dates: '2015 – 2019',
    grade: '92',
    honors: 'Graduated with Honors',
    details: [
      'Focus areas: computer architecture, algorithms, and systems programming.',
    ],
    skills: ['Computer Architecture'],
  },
]

export const capabilities: Capability[] = [
  {
    id: 'mobile',
    title: 'Mobile apps',
    description:
      'Android and iOS development in Kotlin and Swift — including store releases, system-level work, and production maintenance.',
  },
  {
    id: 'secure-integrations',
    title: 'Secure integrations',
    description:
      'OAuth, authenticated API layers, and npm libraries that connect products to backend services safely.',
  },
  {
    id: 'web-frontends',
    title: 'Web frontends',
    description:
      'React applications for client products and platform integrations, from real-estate sites to Docs and Zoom workflows.',
  },
  {
    id: 'systems-tooling',
    title: 'Systems & tooling',
    description:
      'Deep Android UI analysis, SMALI-level tooling, embedded software, and instrumentation for testing environments.',
  },
]

export const approach = {
  title: 'How I work',
  body: 'I take ownership from architecture through shipping — whether that means leading a mobile team, reverse-engineering a framework to build better tools, or delivering a client frontend end to end. Clear decisions, secure defaults, and software that holds up in production.',
}
