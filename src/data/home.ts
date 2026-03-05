import type { ArticleItem, EventItem, FAQItem, LevelData, Timeline } from "@/lib/types";

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
    text: "We aim to build a world free of barriers and privilege, where compassion and fairness open the door for everyone to rise and realize their potential. By helping people grow and encouraging them to uplift others, we create a community that thrives together.",
  },
  mission: {
    title: "MISSION",
    text: "A community that rises beyond borders, syllabus limits, and gatekeepers, where curiosity and generosity guide how we learn and grow. By breaking down barriers and removing limits, we create a space where everyone can connect, collaborate, and grow without boundaries.",
  },
};

export const whyPurple = {
  quote: "Purple isn't just a colour for us, it represents what happens when two worlds meet.",
  duality: [
    {
      id: "01",
      text: "Red symbolizes the youth: energetic, passionate, curious, and ready to create change.",
    },
    {
      id: "02",
      text: "Blue symbolizes experienced professionals: steady, knowledgeable, and capable of unlocking new possibilities.",
    },
  ],
  gap: {
    title: "WE AIM TO BRIDGE THAT GAP.",
    description:
      "Today, a gap exists between these two groups. There's no bridge, no shared space where they can learn from each other.",
  },
  deepDive: [
    "A place where young minds can prove that change is possible and necessary.",
    "A place where experts can guide, inspire, and open doors to new opportunities.",
    "A place where everyone can be themselves, grow together, and lift each other up.",
  ],
  outcome:
    "When red and blue come together, they create purple—a symbol of collaboration, balance, and the future we want to build.",
  thought:
    'And that thought every person has felt at least once: "If only there was a place where I could learn, connect, and be understood"',
  final: "We're here to make that place real.",
};

export const levels: LevelData[] = [
  {
    id: 1,
    title: "Beyond Borders",
    slug: "borders",
    description:
      "Once, the Earth was a single piece of connected land. We want the world of opportunity to feel that way too. We can’t literally push continents and stick them together, but we can remove the barriers that separate people. Beyond Borders means enabling global access to the best talent, markets, and opportunities. It’s about creating a space where purposeful people can connect, collaborate, and grow without limits, without boundaries.",
    link: "https://ai-compassion.com",
  },
  {
    id: 2,
    title: "Beyond Gatekeepers",
    slug: "gatekeepers",
    description:
      "Gatekeeping is a big no. We don’t hold opportunities for ourselves, we share them. We want to give everyone the chance to showcase their best selves, grow their skills, and reach their full potential. By lifting others up, we create a community where growth, learning, and success are open, fair, and accessible to all.",
    link: "https://beyondport80.com",
  },
  {
    id: 3,
    title: "Beyond Syllabus",
    slug: "syllabus",
    description:
      "We should start treating the syllabus like a starting point and not a cage. It's a guide, not a rulebook. Real growth begins when curious minds explore outside the lines, experiment, and discover what truly inspires them. Those who step off the conventional path aren’t rebels, they’re pioneers. And instead of holding them back, we uplift and support them as they learn, grow, and create their own way forward.",
    link: "https://beyondsyllabus.in",
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
  {
    question: "How can I contribute?",
    answer:
      "You can contribute by joining our community, participating in our events, sharing your ideas, and helping us create a space where everyone can grow and succeed.",
  },
];

export const events: EventItem[] = [
  {
    image: "/images/flow.png",
    title: "Enter the Flow",
    description: "A journey through the waters, finding rhythm in community movement.",
  },
  {
    image: "/images/saddle.jpg",
    title: "Saddle Up",
    description: "A journey through the waters, finding rhythm in community movement.",
  },
  {
    image: "/images/p80-1.jpg",
    title: "Port:80",
    description: "Deep growth and shared learning amidst the mist of the Western Ghats.",
  },
  {
    image: "/images/hkbr.jpg",
    title: "Hacktoberfest",
    description: "Building open source culture in the heart of the capital city.",
  },
  {
    image: "/images/aic.jpg",
    title: "AI+Compassion",
    description: "Elevating human compassion above the clouds, a collective peak experience.",
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
    description: "Redefining leadership as a continuous cycle of empowerment and shared knowledge.",
    date: "DEC 2025",
  },
];

export const timeline: Timeline[] = [
  {
    year: "JUN 2025",
    title: "Perumte",
    description: "It started with a simple question: Can we create a space without gatekeepers?",
  },
  {
    year: "JUL 2025",
    title: "Formed TPM",
    description:
      "People from different backgrounds started sharing their learning journeys beyond borders.",
  },
  {
    year: "AUG 2025",
    title: "Launch at beyond faya port:80",
    description:
      "Our first collective projects broke the syllabus limits and opened new doors for everyone.",
  },
  {
    year: "SEP 2025",
    title: "Verticals syllabus and gatekeepers kickstart",
    description: "Every contribution became a seed for someone else's growth, completing the loop.",
  },
  {
    year: "DEC 2025",
    title: "ai+compassion",
    description: "Every contribution became a seed for someone else's growth, completing the loop.",
  },
  {
    year: "FEB 2026",
    title: "Tricult",
    description: "Every contribution became a seed for someone else's growth, completing the loop.",
  },
];

export const manifesto = {
  description: "A declaration of our purpose, our power, and the future we are building.",
  sections: [
    {
      id: "01",
      title: "THE MANIFESTORS",
      text: "We are the Manifestors of Change. Not waiting for the future, but building it with courage, code, creativity, and clarity.",
      highlight: "courage, code, creativity, and clarity.",
    },
    {
      id: "02",
      title: "THE PRODUCERS",
      text: "We are not consumers of culture; we are producers of purpose. We hold the key to ecosystems that empower, not limit.",
      highlight: "we are producers of purpose.",
    },
  ],
  statements: {
    bold: [
      { top: "IN ACCESS,", bottom: "NOT GATEKEEPING." },
      { top: "IN BOLD VISIONS,", bottom: "NOT TEMPLATES." },
    ],
    reclaim:
      "We are here to reclaim the narrative. To give confidence to the curious, networks to the bold, and direction to the determined.",
    movement: {
      badge: "The Movement",
      title: "This is The Purple Movement.",
      description:
        "A wave of youth power, purpose, and possibility. A signal that change is not coming—it's already here.",
    },
    footer: [
      { text: "We are the", highlight: "energy." },
      { text: "We are the", highlight: "strategy." },
      { text: "We are the", highlight: "spark." },
    ],
    startsNow: "AND IT STARTS NOW",
  },
};

export const cta = {
  title1: "YOUR JOURNEY",
  title2: "BEGINS",
  title3: "HERE.",
  description:
    "You've sparked the start of a borderless, collaborative journey. Ideas will grow, connections will flourish, and together, we'll turn ambition into real impact.",
  statement: "TOGETHER, WE ARE THE PURPLE MOVEMENT.",
  buttonText: "JOIN US",
};

export const contact = {
  title: "GOT",
  highlight: "QUESTIONS",
  description: "A movement is built on dialogue. Drop your spark below and let's evolve together.",
  placeholder: "Type your question or spark...",
  buttonText: "SUBMIT",
  submittingText: "TRANSMITTING...",
};
