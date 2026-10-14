export type BuildingStatus = 'Building' | 'Exploring' | 'Learning' | 'Improving';

export interface CurrentlyBuildingItem {
  id: string;
  title: string;
  category: string;
  status: BuildingStatus;
  description: string;
  techFocus: string[];
  progressPercent?: number; // Optional indicator
}

export const currentlyBuildingData: CurrentlyBuildingItem[] = [
  {
    id: "dsa-problem-solving",
    title: "Data Structures & Algorithmic Problem Solving",
    category: "Core Problem Solving",
    status: "Improving",
    description: "Deepening algorithmic efficiency, dynamic programming, graph traversals, and competitive problem-solving patterns.",
    techFocus: ["Java", "C++", "LeetCode", "Algorithm Optimization"]
  },
  {
    id: "voice-enabled-ai",
    title: "Voice-Enabled AI Workflows & Assistants",
    category: "AI / Audio Tech",
    status: "Building",
    description: "Architecting Sana AI's voice-activated reminder pipelines, speech-to-text inference, and natural speech synthesis flows.",
    techFocus: ["Python", "Speech Recognition", "TTS Models", "FastAPI"]
  },
  {
    id: "3d-web-experiences",
    title: "Interactive 3D Web & Creative Development",
    category: "Creative Frontend",
    status: "Exploring",
    description: "Experimenting with Three.js, React Three Fiber, custom shaders, and particle dynamics for high-engagement web visuals.",
    techFocus: ["Three.js", "React Three Fiber", "GLSL Shaders", "WebGL"]
  },
  {
    id: "fullstack-apps",
    title: "Enterprise Full-Stack Architecture",
    category: "Full-Stack Web",
    status: "Building",
    description: "Refining end-to-end architectures connecting React TypeScript interfaces with robust Spring Boot and Node.js microservices.",
    techFocus: ["React", "TypeScript", "Spring Boot", "MySQL", "Docker"]
  },
  {
    id: "ai-powered-apps",
    title: "Context-Aware & RAG AI Systems",
    category: "AI / ML",
    status: "Exploring",
    description: "Investigating retrieval-augmented generation (RAG) pipelines for grounding AI models with private technical documentation.",
    techFocus: ["RAG Pipelines", "Vector Databases", "Embeddings", "Python"]
  },
  {
    id: "startup-products",
    title: "DreamSync Digital Products & Client Solutions",
    category: "Startup Builder",
    status: "Building",
    description: "Developing production-ready web platforms, branding systems, and tailored digital experiences for early-stage ventures.",
    techFocus: ["UI/UX Systems", "Modern Web Frameworks", "Conversion Design"]
  }
];
