
export interface PersonalData {
  name: string;
  shortName: string;
  initials: string;
  email: string;
  degree: string;
  college: string;
  collegeShort: string;
  location: string;
  expectedGraduation: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  mainPositioning: string;
  mainTagline: string;
  supportingStatement: string;
  aboutBio: string;
  interests: string[];
  heroBadges: string[];
}

export const personalData: PersonalData = {
  name: "Pranavi S",
  shortName: "Pranavi",
  initials: "PS",
  email: "pranavisenthil7@gmail.com",
  degree: "B.Tech Computer Science & Design",
  college: "Sri Krishna College of Engineering and Technology, Coimbatore",
  collegeShort: "SKCET, Coimbatore",
  location: "Coimbatore, Tamil Nadu, India",
  expectedGraduation: "2028",
  githubUrl: "https://github.com/", // Placeholder: Update with your GitHub profile URL
  linkedinUrl: "https://linkedin.com/in/", // Placeholder: Update with your LinkedIn profile URL
  resumeUrl: "/assets/resume.pdf",
  mainPositioning: "Computer Science & Design Student · Developer · Builder",
  mainTagline: "I like turning difficult ideas into things people can actually use.",
  supportingStatement: "I build, experiment, learn, and turn ideas into working software.",
  aboutBio: "I’m Pranavi S, a Computer Science & Design student at Sri Krishna College of Engineering and Technology in Coimbatore. I love the space where code, thoughtful design, and machine intelligence meet. From training computer vision models to building full-stack web applications and competing in 30-hour hackathons, I learn best by getting my hands dirty and creating things people can actually use.",
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Development",
    "Creative Development",
    "Automation",
    "Product Building",
    "Startup Innovation",
    "Human-centered technology"
  ],
  heroBadges: [
    "AI/ML Enthusiast",
    "Full-Stack Developer",
    "Hackathon Winner",
    "Creative Builder"
  ]
};
