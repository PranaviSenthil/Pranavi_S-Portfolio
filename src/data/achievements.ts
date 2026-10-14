export interface Achievement {
  id: string;
  title: string;
  category: 'Hackathon' | 'Competition' | 'Ideathon' | 'Leadership';
  position: string;
  event: string;
  organization: string;
  date: string;
  description: string;
  projectAssociated?: string;
  highlights: string[];
  badgeColor?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "kongu-hackathon-1st",
    title: "1st Place — 30-Hour National Hackathon",
    category: "Hackathon",
    position: "First Place Winner",
    event: "30-Hour Engineering Hackathon",
    organization: "Kongu Engineering College",
    date: "6–7 March 2026",
    description: "Secured first prize after developing and pitching an end-to-end AI-Based Video Analytics system for Perimeter Security over 30 continuous hours of rapid prototyping and competitive technical defense.",
    projectAssociated: "AI-Based Video Analytics for Perimeter Security",
    highlights: [
      "Built real-time video stream ingestion and violation detection pipeline under 30-hour deadline",
      "Demonstrated live prototype handling boundary intrusion simulations",
      "Awarded top honors among competing engineering institutions"
    ],
    badgeColor: "emerald"
  },
  {
    id: "cybernexus-debugging-1st",
    title: "1st Place — Technical Code Debugging",
    category: "Competition",
    position: "First Place Winner",
    event: "CyberNexus / Cybernext X2K25 Debugging Competition",
    organization: "Technical Symposium",
    date: "2025",
    description: "Demonstrated rapid problem isolation, root-cause analysis, and syntax/logical debugging under strict time constraints across complex algorithmic codebases.",
    highlights: [
      "Diagnosed edge-case logical bugs and memory leaks under tight countdown timers",
      "Secured 1st rank with fastest completion speed and optimal code fixes"
    ],
    badgeColor: "cyan"
  },
  {
    id: "business-ideathon-1st",
    title: "1st Place — Business Ideathon",
    category: "Ideathon",
    position: "First Place Winner",
    event: "Business Innovation Ideathon", // Editable
    organization: "Institutional Innovation Council", // Editable
    date: "2025 / 2026", // Editable
    description: "Recognized with first place for formulating a viable technology-driven business concept, defining market product-fit, financial models, and delivering an executive pitch.",
    highlights: [
      "Structured product-market fit and customer persona validation",
      "Formulated technological feasibility and commercialization roadmap"
    ],
    badgeColor: "violet"
  },
  {
    id: "csd-association-secretary",
    title: "Secretary — Computer Science & Design Association",
    category: "Leadership",
    position: "Department Association Secretary",
    event: "Department Leadership & Governance",
    organization: "Sri Krishna College of Engineering and Technology",
    date: "Active Tenure",
    description: "Appointed as the Association Secretary for Computer Science & Design. Directing student initiatives, technical symposia, hackathons, and fostering developer community growth.",
    highlights: [
      "Spearheaded technical event coordination, ideathons, and hackathons",
      "Collaborated across faculty and student teams for high-impact workshops",
      "Mentored peers in creative technology and collaborative software engineering"
    ],
    badgeColor: "amber"
  }
];
