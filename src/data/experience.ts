export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  duration: string;
  status: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "cube-ai-solutions",
    role: "AI/ML Intern",
    company: "CubeAISolutions Tech Pvt Ltd",
    companyUrl: "", // Editable placeholder
    location: "Remote",
    type: "Internship",
    startDate: "13 March 2026",
    endDate: "June 2026",
    duration: "3 months",
    status: "Upcoming / Active",
    current: true,
    description: "Engaging in hands-on artificial intelligence and machine learning engineering tasks, collaborating remotely on production-focused initiatives.",
    responsibilities: [
      "Worked on AI/ML-related tasks and data processing routines",
      "Assisted with project development and model testing pipelines",
      "Explored practical machine-learning workflows and algorithmic implementations",
      "Contributed to assigned technical activities and sprint deliverables"
    ],
    skills: ["AI/ML Workflows", "Python", "Data Processing", "Model Evaluation", "Remote Collaboration"]
  }
];
