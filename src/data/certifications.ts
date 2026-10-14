export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string; // Placeholder URL
  status: 'Verified' | 'Completed' | 'In Progress';
  category: 'AI & Machine Learning' | 'Software & Web' | 'Cloud & Systems' | 'Core Engineering';
  skills: string[];
  description: string;
}

export const certificationsData: Certification[] = [
  {
    id: "cert-ai-foundations",
    title: "Foundations of AI & Machine Learning",
    issuer: "Online Learning / Authorized Provider", // Editable
    issueDate: "2025",
    credentialId: "AI-ML-8921-VERIFIED", // Editable
    credentialUrl: "https://example.com/certificate-verify", // Placeholder
    status: "Completed",
    category: "AI & Machine Learning",
    skills: ["Supervised Learning", "Model Evaluation", "Python", "Data Preprocessing"],
    description: "Core curriculum covering machine learning paradigms, model validation methods, regression, classification, and statistical foundations."
  },
  {
    id: "cert-fullstack-dev",
    title: "Modern Full-Stack Web Development",
    issuer: "Technical Learning Platform", // Editable
    issueDate: "2025",
    credentialId: "FS-DEV-4412-VERIFIED", // Editable
    credentialUrl: "https://example.com/certificate-verify",
    status: "Completed",
    category: "Software & Web",
    skills: ["React", "Node.js", "REST APIs", "Modern JavaScript", "Component Architecture"],
    description: "Hands-on engineering covering modern frontend frameworks, state management, asynchronous REST APIs, and responsive design systems."
  },
  {
    id: "cert-cloud-foundations",
    title: "Cloud Computing & Containerization Basics",
    issuer: "Cloud Learning Academy", // Editable
    issueDate: "2025 / 2026",
    credentialId: "CLOUD-CT-3189", // Editable
    credentialUrl: "https://example.com/certificate-verify",
    status: "In Progress",
    category: "Cloud & Systems",
    skills: ["Docker", "Google Cloud", "Microservices", "Container Deployment"],
    description: "Study of container workflows with Docker, microservices orchestration, and serverless hosting on cloud platforms."
  },
  {
    id: "cert-dsa-java",
    title: "Data Structures & Algorithmic Problem Solving",
    issuer: "Computer Science Curriculum / Online Platform", // Editable
    issueDate: "2024 - 2025",
    credentialId: "DSA-JAVA-1092", // Editable
    credentialUrl: "https://example.com/certificate-verify",
    status: "Completed",
    category: "Core Engineering",
    skills: ["Java", "Trees & Graphs", "Dynamic Programming", "Time Complexity Optimization"],
    description: "Rigorous exploration of linear and non-linear data structures, searching/sorting algorithms, and asymptotic space-time analysis."
  }
];
