export type SkillLevel = 'Comfortable With' | 'Working Knowledge' | 'Currently Exploring';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  icon?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for problem solving, systems, and algorithms.",
    skills: [
      { name: "Python", level: "Comfortable With", description: "AI/ML scripting, automation, backend data logic" },
      { name: "Java", level: "Comfortable With", description: "Object-oriented software, Spring Boot backend" },
      { name: "C", level: "Comfortable With", description: "Core data structures, procedural fundamentals" },
      { name: "C++", level: "Working Knowledge", description: "Competitive problem solving and algorithms" },
      { name: "JavaScript", level: "Comfortable With", description: "Modern ES6+, async programming, frontend interactions" },
      { name: "TypeScript", level: "Working Knowledge", description: "Type-safe application engineering and interfaces" },
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      { name: "React", level: "Comfortable With", description: "Component-driven architecture and hooks" },
      { name: "HTML5", level: "Comfortable With", description: "Semantic, accessible structural web markup" },
      { name: "CSS3", level: "Comfortable With", description: "Responsive layouts, Flexbox, Grid, keyframe animations" },
      { name: "Tailwind CSS", level: "Comfortable With", description: "Utility-first design systems and rapid styling" },
      { name: "Vite", level: "Comfortable With", description: "Modern, blazing-fast frontend bundling" },
      { name: "Three.js", level: "Currently Exploring", description: "3D graphics, viewports, meshes, and lighting" },
      { name: "React Three Fiber", level: "Currently Exploring", description: "Declarative 3D scenes inside React applications" },
    ]
  },
  {
    id: "backend",
    title: "Backend & Databases",
    description: "Server architecture, persistent storage, and API services.",
    skills: [
      { name: "Node.js", level: "Comfortable With", description: "Event-driven runtime for server logic" },
      { name: "Express.js", level: "Comfortable With", description: "RESTful routing, middleware, and backend APIs" },
      { name: "Spring Boot", level: "Working Knowledge", description: "Enterprise Java microservices and MVC patterns" },
      { name: "MySQL", level: "Comfortable With", description: "Relational database schema design and SQL queries" },
      { name: "MongoDB", level: "Working Knowledge", description: "NoSQL document storage for dynamic data models" },
      { name: "REST APIs", level: "Comfortable With", description: "Clean client-server contract integration" },
    ]
  },
  {
    id: "ai-ml",
    title: "AI/ML & Data",
    description: "Intelligent systems, models, perception, and data flows.",
    skills: [
      { name: "Artificial Intelligence", level: "Working Knowledge", description: "Intelligent agent logic and automated reasoning" },
      { name: "Machine Learning", level: "Working Knowledge", description: "Model training, supervised learning, data pipelines" },
      { name: "Computer Vision", level: "Working Knowledge", description: "Object detection, video feeds, spatial inspection" },
      { name: "Speech Recognition", level: "Currently Exploring", description: "Audio transcription and acoustic feature extraction" },
      { name: "Natural Language Processing", level: "Currently Exploring", description: "Contextual semantic parsing and text workflows" },
      { name: "Retrieval-Augmented Generation", level: "Currently Exploring", description: "Document-grounded contextual reasoning (RAG)" },
      { name: "Data Monitoring", level: "Working Knowledge", description: "Metric tracking, industrial sensors, time-series telemetry" },
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Development environments, cloud workflows, and DevOps.",
    skills: [
      { name: "Git", level: "Comfortable With", description: "Version control, branching, and commit discipline" },
      { name: "GitHub", level: "Comfortable With", description: "Remote repositories, collaboration, CI workflows" },
      { name: "VS Code", level: "Comfortable With", description: "Primary IDE, extensions, debugging setup" },
      { name: "Docker", level: "Working Knowledge", description: "Containerization and reproducible runtime envs" },
      { name: "Google Cloud", level: "Currently Exploring", description: "Cloud computing and hosting infrastructure" },
      { name: "Cloud Run", level: "Currently Exploring", description: "Serverless container deployment" },
      { name: "ImageKit", level: "Working Knowledge", description: "Real-time image optimization and media delivery" },
      { name: "InfluxDB", level: "Currently Exploring", description: "High-throughput time-series metrics database" },
    ]
  }
];
