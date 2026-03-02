import type {
  FAQItem,
  EventItem,
  ArticleItem,
  Timeline,
  Gallery,
  LevelData,
} from "@/lib/types";

export const hero = {
  badge: "The Collective Rise",
  title1: "We Are the",
  title2: "Purple Movement",
  subtext:
    "Where purposeful people gather to explore, tackle issues, and create meaningful change. A community without barriers, where your skills matter and open new possibilities.",
};

export const vision = {
  vision: {
    title: "VISION",
    text: "We aim to build a world free of barriers and privilege, where compassion and fairness open the door for everyone to rise and realize their potential.",
  },
  mission: {
    title: "MISSION",
    text: "A community that rises beyond borders, syllabus limits, and gatekeepers, where curiosity and generosity guide how we learn and grow.",
  },
  statement:
    "Together, we create an open cycle of shared learning, mutual support, and lifelong empowerment because REAL PROGRESS BEGINS WITH GENEROSITY.",
};

export const whyPurple = {
  quote: "Purple isn't just a colour. It is a bridge between worlds.",
  duality: [
    {
      id: "01",
      label: "RED",
      title: "The Energy",
      text: "Symbolizes the youth: energetic, passionate, curious, and unapologetically ready to create change.",
    },
    {
      id: "02",
      label: "BLUE",
      title: "The Steady",
      text: "Symbolizes professionals: steady, knowledgeable, and capable of unlocking doors previously bolted shut.",
    },
  ],
  deepDive: [
    "Prove change is necessary",
    "Inspire & open doors",
    "Lift each other up",
  ],
};

export const gallery: Gallery[] = [
  { src: "/images/p80-1.jpg", alt: "Faces of the Movement" },
  { src: "/images/p80-2.jpg", alt: "Collective Rise" },
  { src: "/images/p80-3.jpg", alt: "The Spark" },
  { src: "/images/p80-4.jpg", alt: "Shared Space" },
  { src: "/images/p80-5.jpg", alt: "Community Core" },
  { src: "/images/saddle.jpg", alt: "Outdoor Community Gathering" },
  { src: "/images/saddle2.jpg", alt: "Collective Engagement" },
  { src: "/images/hkbr.jpg", alt: "Movement Discussion" },
  { src: "/images/aic.jpg", alt: "Purposeful Collaboration" },
  { src: "/images/flow.png", alt: "The Energy Flow" },
];

export const levels: LevelData[] = [
  {
    id: 3,
    title: "Beyond Syllabus",
    slug: "syllabus",
    description:
      "Learning is a starting point, not a rulebook. Real growth happens outside the lines and prescribed paths.",
  },
  {
    id: 2,
    title: "Beyond Gatekeepers",
    slug: "gatekeepers",
    description:
      "We don't hold opportunities; we share them. Ensuring success is open, fair, and accessible to every dreamer.",
  },
  {
    id: 1,
    title: "Beyond Borders",
    slug: "borders",
    description:
      "Removing the artificial barriers that separate talent from opportunity. Connecting the world through purpose.",
  },
];

export const FAQs: FAQItem[] = [
  {
    question: "What is The Purple Movement?",
    answer:
      "The Purple Movement is where curious, purpose-driven people come together to explore big ideas, solve real problems, and spark meaningful change. A barrier-free community where your skills actually matter.",
  },
  {
    question: "Who can join?",
    answer:
      "If you're driven by purpose, you belong here. No limitations. A place to connect and grow alongside others on the same path.",
  },
  {
    question: "What does 'Beyond Syllabus' mean?",
    answer:
      "Beyond Syllabus is where learning stops being boring. It is about picking up real skills, trying new things, and exploring what actually excites you, not just what is written in textbooks.",
  },
  {
    question: "What does 'Beyond Gatekeepers' mean?",
    answer:
      "Beyond Gatekeepers gives everyone a real chance to grow. By lifting each other up, we create a space where anyone with purpose can connect, contribute, and move forward without limitations.",
  },
  {
    question: "What does 'Beyond Borders' mean?",
    answer:
      "Beyond Borders is all about breaking limits. It helps people connect, share ideas, and access opportunities without being held back by geography, systems, or labels.",
  },
];

export const events: EventItem[] = [
  {
    image: "/images/flow.png",
    title: "Kochi Creative Meet",
    description:
      "Exploring the intersections of traditional Kerala art and modern digital expressions.",
    size: "md:col-span-2 md:row-span-2",
    tag: "Art & Tech",
  },
  {
    image: "/images/saddle.jpg",
    title: "Alleppey Backwaters Pulse",
    description:
      "A journey through the waters, finding rhythm in community movement.",
    size: "md:col-span-1 md:row-span-1",
    tag: "Community",
  },
  {
    image: "/images/p80-1.jpg",
    title: "Wayanad Tech Retreat",
    description:
      "Deep growth and shared learning amidst the mist of the Western Ghats.",
    size: "md:col-span-1 md:row-span-2",
    tag: "Growth",
  },
  {
    image: "/images/hkbr.jpg",
    title: "Trivandrum Open Loop",
    description:
      "Building open source culture in the heart of the capital city.",
    size: "md:col-span-1 md:row-span-1",
    tag: "Open Source",
  },
  {
    image: "/images/aic.jpg",
    title: "Munnar Mindscape",
    description:
      "Elevating human compassion above the clouds, a collective peak experience.",
    size: "md:col-span-2 md:row-span-1",
    tag: "Impact",
  },
];

export const articles: ArticleItem[] = [
  {
    title: "The Architecture of Fairness",
    source: "Beyond Borders Journal",
    category: "Philosophy",
    link: "#",
    description:
      "Exploring how decentralized systems can foster genuine human generosity and collective rise.",
    date: "MAR 2026",
  },
  {
    title: "Learning Without Limits",
    source: "Curiosity Collective",
    category: "Learning",
    link: "#",
    description:
      "A guide to breaking free from the conventional syllabus mindset and embracing curiosity.",
    date: "FEB 2026",
  },
  {
    title: "The Power of Many",
    source: "Impact Weekly",
    category: "Community",
    link: "#",
    description:
      "Case studies on collective growth and mutual support networks within the Kerala ecosystem.",
    date: "JAN 2026",
  },
  {
    title: "Mentorship as a Loop",
    source: "Generosity Lab",
    category: "Impact",
    link: "#",
    description:
      "Redefining leadership as a continuous cycle of empowerment and shared knowledge.",
    date: "DEC 2025",
  },
];

export const timeline: Timeline[] = [
  {
    year: "DISCOVERY",
    title: "The Spark",
    description:
      "It started with a simple question: Can we create a space without gatekeepers?",
    status: "ORIGIN",
  },
  {
    year: "CURIOSITY",
    title: "First Connections",
    description:
      "People from different backgrounds started sharing their learning journeys beyond borders.",
    status: "STIRRING",
  },
  {
    year: "PARTICIPATION",
    title: "Rising Together",
    description:
      "Our first collective projects broke the syllabus limits and opened new doors for everyone.",
    status: "FLOW",
  },
  {
    year: "CONTRIBUTION",
    title: "Shared Progress",
    description:
      "Every contribution became a seed for someone else's growth, completing the loop.",
    status: "PEAK",
  },
];

export const manifesto = {
  description:
    "A declaration of our purpose, our power, and the future we are building.",
  sections: [
    {
      id: "01",
      title: "THE MANIFESTORS",
      text: "We are the Manifestors of Change. Not waiting for the future, but building it with courage, code, creativity, and clarity.",
    },
    {
      id: "02",
      title: "THE PRODUCERS",
      text: "We are not consumers of culture; we are producers of purpose. We hold the key to ecosystems that empower, not limit.",
    },
  ],
  statements: {
    bold: ["IN ACCESS, NOT GATEKEEPING.", "IN BOLD VISIONS, NOT TEMPLATES."],
    footer: ["We are the energy.", "We are the strategy.", "We are the spark."],
  },
};

export const cta = {
  title1: "YOUR JOURNEY",
  title2: "BEGINS",
  title3: "HERE.",
  description:
    "You've sparked the start of a borderless, collaborative journey. Ideas will grow, connections will flourish, and together, we'll turn ambition into real impact.",
  statement: "TOGETHER, WE ARE THE PURPLE MOVEMENT.",
  buttonText: "JOIN THE SPARKS",
};

export const contact = {
  title: "GOT",
  highlight: "INPUT",
  description:
    "A movement is built on dialogue. Drop your spark below and let's evolve together.",
  placeholder: "Type your question or spark...",
  buttonText: "SUBMIT SPARK",
  submittingText: "TRANSMITTING...",
};
