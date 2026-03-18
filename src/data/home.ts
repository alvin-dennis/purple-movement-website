import type { Topic } from "@/components/ui/radialflow";
import type {
  ArticleItem,
  EventItem,
  FAQItem,
  GalleryData,
  LevelData,
  Timeline,
} from "@/lib/types";

export const hero = {
  badge: "The Collective Rise",
  title1: "We Are the",
  title2: "Purple Movement",
  subtext:
    "Where purposeful people gather to explore, tackle issues, and create meaningful change. A community without barriers, where your skills matter and open new possibilities.",
};

export const heroflow: Topic[] = [
  {
    id: "1",
    name: "Beyond Borders",
    position: { x: 20, y: 30 },
    color: "#DE3B3D",
    highlighted: true,
  },
  {
    id: "2",
    name: "Beyond Gatekeepers",
    position: { x: 80, y: 40 },
    color: "#0061CE",
    highlighted: true,
  },
  {
    id: "3",
    name: "Beyond Syllabus",
    position: { x: 30, y: 70 },
    color: "#DE3B3D",
    highlighted: true,
  },
  {
    id: "4",
    name: "Collective Rise",
    position: { x: 70, y: 80 },
    color: "#DE3B3D",
    highlighted: true,
  },
  {
    id: "5",
    name: "Purposeful People",
    position: { x: 40, y: 15 },
    color: "#0061CE",
    highlighted: true,
  },
  {
    id: "6",
    name: "Beyond Limits",
    position: { x: 70, y: 15 },
    color: "#0061CE",
    highlighted: true,
  },
];

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

export const gallery: GalleryData = {
  left: [
    { src: "/images/aic.webp", alt: "Company 1" },
    { src: "/images/aic.webp", alt: "Company 2" },
    { src: "/images/aic.webp", alt: "Company 3" },
    { src: "/images/aic.webp", alt: "Company 4" },
    { src: "/images/aic.webp", alt: "Company 5" },
    { src: "/images/aic.webp", alt: "Company 6" },
    { src: "/images/aic.webp", alt: "Company 7" },
    { src: "/images/aic.webp", alt: "Company 8" },
    { src: "/images/aic.webp", alt: "Company 9" },
    { src: "/images/aic.webp", alt: "Company 10" },
  ],
  right: [
    { src: "/images/aic.webp", alt: "Company 1" },
    { src: "/images/aic.webp", alt: "Company 2" },
    { src: "/images/aic.webp", alt: "Company 3" },
    { src: "/images/aic.webp", alt: "Company 4" },
    { src: "/images/aic.webp", alt: "Company 5" },
    { src: "/images/aic.webp", alt: "Company 6" },
    { src: "/images/aic.webp", alt: "Company 7" },
    { src: "/images/aic.webp", alt: "Company 8" },
    { src: "/images/aic.webp", alt: "Company 9" },
    { src: "/images/aic.webp", alt: "Company 10" },
  ],
};

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
    image: "/images/flow.webp",
    title: "Enter the Flow",
    description:
      "A sprint-mode UI/UX competition where speed meets creativity. The fastest teams delivering high-quality designs earn recognition.",
  },
  {
    image: "/images/saddle.webp",
    title: "Saddle Up",
    description:
      "A bi-weekly initiative designed to upskill individuals from all backgrounds through collaborative learning and hands-on sessions.",
  },
  {
    image: "/images/p80-1.webp",
    title: "Port:80",
    description:
      "Monthly meetups across multiple domains starting from grassroots college communities, led by alumni, industry experts, students, and faculty.",
  },
  {
    image: "/images/hkbr.webp",
    title: "Hacktoberfest",
    description:
      "An annual October event encouraging people to explore open source, where knowledge is freely built, shared, and contributed.",
  },
  {
    image: "/images/aic.webp",
    title: "AI+Compassion",
    description:
      "A global initiative promoting responsible AI use. A worldwide relay on October 2nd connected participants across 5+ regions.",
  },
];

export const articles: ArticleItem[] = [
  {
    title: "The Purple Manifesto: The Rise of the Unchained Individual",
    source: "Medium",
    category: "Philosophy",
    link: "https://medium.com/@deepusnath/the-purple-manifesto-the-rise-of-the-unchained-individual-490810a4a67f",
    date: "NOV 2025",
  },
  {
    title: "The First Battle Is With Yourself",
    source: "Medium",
    category: "Personal Growth",
    link: "https://medium.com/@deepusnath/the-first-battle-is-with-yourself-become-the-unchained-individual-c8fbaccfec41",
    date: "DEC 2025",
  },
  {
    title: "Twelve Years of Consistent Learning: Inside the Legacy of FAYA:80",
    source: "Republic World",
    category: "Community",
    link: "https://www.republicworld.com/initiatives/twelve-years-of-consistent-learning-inside-the-legacy-of-faya80",
    date: "2025",
  },
  {
    title: "The Future of Learning Isn’t Taught — It’s Built",
    source: "Mid-Day",
    category: "Education",
    link: "https://www.mid-day.com/buzzfeed/article/the-future-of-learning-isnt-taught-its-built-deepu-s-naths-ecosystem-revolution-6335",
    date: "JUN 2025",
  },
];

export const timeline: Timeline[] = [
  {
    year: "FEB 2025",
    title: "Permute",
    description:
      "An offline gathering of industry professionals and students that sparked a crucial question: Can we create a space without gatekeepers? The question became the seed for everything that followed.",
  },
  {
    year: "JUL 2025",
    title: "Formation of TPM",
    description:
      "The Purple Movement was formed to unite people who understand the realities of the present, built on core principles: beyond borders, beyond gatekeepers, and beyond syllabus-driven limitations.",
  },
  {
    year: "AUG 2025",
    title: "Launched at Beyond Port:80",
    description:
      "Emerging from Faya:80 to Beyond:80, the initiative took its first major step toward implementing the idea of a learning ecosystem beyond gatekeepers.",
  },
  {
    year: "SEP 2025",
    title: "Kickstart of WikiSyllabus and Port:80s",
    description:
      "Colleges across different districts of Kerala began collaborating to bring meaningful change. Initiatives included an AI platform to analyze syllabi and monthly open forums for discussion and learning.",
  },
  {
    year: "DEC 2025",
    title: "AI + Compassion",
    description:
      "While many know how to use AI, responsible use remains a challenge. This initiative encourages reflection on ethical AI and the responsibility that comes with powerful technology.",
  },
  {
    year: "FEB 2026",
    title: "Tricult",
    description:
      "A three-day cultural carnival bringing together music, art, food, gaming, fashion, and community. Designed for creators and culture enthusiasts, it focuses on genuine connections and immersive experiences.",
  },
];

export const manifesto = {
  description: "A declaration of our purpose, our power, and the future we are building.",
  sections: [
    {
      id: "01",
      title: "THE MANIFESTORS",
      text: "We are the Manifestors of Change. Not waiting for the future, but building it—with courage, code, creativity, and clarity.",
      highlight: "courage, code, creativity, and clarity.",
    },
    {
      id: "02",
      title: "THE PRODUCERS",
      text: "We are the voice of a generation that refuses to settle. Not consumers of culture; Producers of purpose. We break barriers, not just for ourselves, but for every young mind daring to dream.",
      highlight: "producers of purpose.",
    },
  ],
  statements: {
    bold: [
      { top: "IN ACCESS,", bottom: "NOT GATEKEEPING." },
      { top: "IN BOLD VISIONS,", bottom: "NOT TEMPLATES." },
    ],
    reclaim:
      "We are here to reclaim the narrative—To give confidence to the curious, Networks to the bold, And direction to the determined.",
    movement: {
      badge: "The Movement",
      title: "This is The Purple Movement.",
      description:
        "A wave of youth power, purpose, and possibility. A signal that change is not coming—it's already here.",
    },
    notSidelines: {
      text: "This movement is not for the sidelines. It’s for the doers, the builders, the ones who say,",
      highlight: "“Why not us?”",
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
