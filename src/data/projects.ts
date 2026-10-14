export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype' | 'Concept' | 'Learning Project';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryGroup: 'AI & Computer Vision' | 'Industrial AI & Systems' | 'Full-Stack & Web' | 'Mobile & Automation';
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  myContribution: string;
  currentStatus: ProjectStatus;
  isFlagship: boolean;
  technologies: string[];
  tags: string[];
  achievement?: string;
  achievementDate?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  keyFeatures?: string[];
  architectureNotes?: string;
  interactivePreviewType?: 'radar' | 'waveform' | 'telemetry';
}

export const projectsData: Project[] = [
  {
    id: "video-analytics-perimeter-security",
    title: "AI-Based Video Analytics for Perimeter Security",
    category: "AI / Computer Vision / Security",
    categoryGroup: "AI & Computer Vision",
    shortDescription: "An intelligent AI video analytics system designed to monitor perimeter zones, identify unauthorized intrusions, and provide real-time alert signals.",
    fullDescription: "Built during an intense 30-hour national hackathon, this perimeter security solution leverages computer vision pipelines to analyze surveillance video streams in real time. It detects perimeter violations, tracks boundary interactions, and flags suspicious spatial activity to support proactive physical security.",
    problemSolved: "Traditional perimeter security relies on manual human surveillance or basic motion sensors that trigger frequent false alarms and cause severe operator fatigue.",
    myContribution: "Led the computer vision architecture, conceptualized event detection logic, structured video stream ingestion, and coordinated the hackathon presentation and live defense.",
    currentStatus: "Prototype",
    isFlagship: true,
    achievement: "First Place Winner at Kongu Engineering College 30-Hour Hackathon",
    achievementDate: "6–7 March 2026",
    technologies: ["Python", "OpenCV", "Computer Vision", "Deep Learning", "Video Stream Processing"],
    tags: ["AI", "Computer Vision", "Video Analytics", "Security", "Hackathon Winner"],
    githubUrl: "https://github.com/", // Placeholder
    liveDemoUrl: "", // Placeholder
    keyFeatures: [
      "Real-time perimeter boundary zone definition and violation detection",
      "Automated event flagging to minimize operator inspection workload",
      "Intelligent video stream filtering reducing false positives",
      "Event timestamping and visual incident logging"
    ],
    architectureNotes: "Designed around a modular video ingestion pipeline that processes frame sequences, performs spatial boundary checks, and outputs structured alert events.",
    interactivePreviewType: 'radar'
  },
  {
    id: "sana-ai",
    title: "Sana AI",
    category: "AI Assistant / Voice Technology / Productivity",
    categoryGroup: "AI & Computer Vision",
    shortDescription: "An AI assistant concept focused on voice-driven interactions, contextual responses, speech recognition, and proactive reminder scheduling.",
    fullDescription: "Sana AI is an intelligent assistant designed to streamline daily scheduling and productivity through natural voice commands and contextual dialogue. The system explores speech-to-text processing, conversational context management, and voice-call workflows.",
    problemSolved: "Fragmented productivity tools require manual screen interactions and constant context switching, slowing down busy individuals.",
    myContribution: "Designed the assistant interaction workflow, engineered speech recognition prototypes, structured prompt-response mechanics, and designed call automation flows.",
    currentStatus: "In Progress",
    isFlagship: true,
    technologies: ["Python", "Speech Recognition", "Text-to-Speech", "NLP", "FastAPI", "React"],
    tags: ["AI Assistant", "Voice Tech", "Speech Recognition", "NLP", "In Progress"],
    githubUrl: "https://github.com/",
    liveDemoUrl: "",
    keyFeatures: [
      "Voice-based reminder creation and dynamic scheduling",
      "Speech-to-text and text-to-speech conversational loop",
      "Contextual dialogue responses for daily tasks",
      "Voice-call workflow exploration (In Progress)",
      "Multilingual interaction support (In Progress)"
    ],
    architectureNotes: "Speech input is routed through an acoustic parsing engine, mapped to user intent vectors, and resolved by conversational logic with voice synthesized feedback.",
    interactivePreviewType: 'waveform'
  },
  {
    id: "cattle-monitoring-system",
    title: "AI-Based Cattle Monitoring System",
    category: "AI / Computer Vision / Smart Agriculture",
    categoryGroup: "AI & Computer Vision",
    shortDescription: "An AI-based computer vision monitoring concept designed to support livestock observation, behavior tracking, and health anomaly insights.",
    fullDescription: "An intelligent smart-agriculture initiative aimed at automated livestock monitoring. By leveraging computer vision models on camera feeds, the system observes cattle movement patterns, tracks herd presence, and assists farmers in identifying early indicators of distress or physical abnormality.",
    problemSolved: "Manual livestock observation across expansive farms is labor-intensive, making early disease detection and continuous animal welfare tracking difficult.",
    myContribution: "Formulated the livestock tracking architecture, researched object detection models for animal posture recognition, and developed the conceptual data pipeline.",
    currentStatus: "Concept",
    isFlagship: true,
    technologies: ["Python", "Computer Vision", "Object Detection", "Smart Agriculture", "Data Pipelines"],
    tags: ["AI/ML", "Computer Vision", "Smart Agriculture", "Monitoring", "Precision Farming"],
    githubUrl: "https://github.com/",
    liveDemoUrl: "",
    keyFeatures: [
      "Automated animal detection and spatial presence tracking",
      "Behavioral posture observation to flag unusual rest patterns",
      "Non-intrusive camera-based monitoring without wearable tags",
      "Aggregated herd health summary insights"
    ],
    architectureNotes: "Camera frames feed into a spatial detection model that extracts bounding coordinates and posture heuristics, logged to a central farm management dashboard."
  },
  {
    id: "industrial-fault-monitoring",
    title: "Real-Time Industrial Fault Monitoring and Diagnostic Framework",
    category: "Industrial AI / Monitoring / Diagnostics",
    categoryGroup: "Industrial AI & Systems",
    shortDescription: "A real-time industrial monitoring framework designed to analyze equipment telemetry, detect anomalous behavior, and accelerate fault diagnostics.",
    fullDescription: "An intelligent diagnostic system built to continuously process industrial machinery telemetry, vibration readings, and sensor metrics. The framework spots deviations from operational baselines, categorizing fault signatures to prevent unexpected equipment downtime.",
    problemSolved: "Industrial machinery breakdowns cause catastrophic production stoppages and expensive emergency repairs when early fault signatures go unnoticed.",
    myContribution: "Researched sensor telemetry analysis techniques, modeled baseline metric distributions, and designed alert trigger workflows for machine diagnostic reports.",
    currentStatus: "Prototype",
    isFlagship: true,
    technologies: ["Python", "Time-Series Data", "Anomaly Detection", "Telemetry APIs", "Data Visualization"],
    tags: ["Industrial AI", "Fault Detection", "Real-Time Monitoring", "Diagnostics", "IoT"],
    githubUrl: "https://github.com/",
    liveDemoUrl: "",
    keyFeatures: [
      "Continuous sensor telemetry stream ingestion and baseline tracking",
      "Early anomaly detection alerting operators before catastrophic failure",
      "Diagnostic classification of abnormal mechanical signatures",
      "Structured health status metrics for preventive maintenance"
    ],
    architectureNotes: "Telemetry feeds are processed in sliding time windows against calculated statistical thresholds to generate severity-ranked diagnostic alerts.",
    interactivePreviewType: 'telemetry'
  },
  {
    id: "alumni-management-system",
    title: "Alumni Management System",
    category: "Full-Stack Development / Education Technology",
    categoryGroup: "Full-Stack & Web",
    shortDescription: "A secure web portal facilitating networking, career updates, and institutional interaction between students, alumni, and administrators.",
    fullDescription: "An institutional platform designed to bridge the gap between current students and graduated alumni. Features role-based access control, profile directories, career mentorship postings, and administrative event coordination.",
    problemSolved: "Educational institutions lack organized, secure platforms to maintain active alumni ties, track career milestones, and enable student mentorship.",
    myContribution: "Built frontend React views, integrated Spring Boot REST endpoints, implemented JWT-based authentication flows, and structured MySQL relational tables.",
    currentStatus: "Completed",
    isFlagship: true,
    technologies: ["React", "Spring Boot", "MySQL", "JWT", "REST API", "Swagger"],
    tags: ["Full Stack", "Spring Boot", "React", "MySQL", "Authentication"],
    githubUrl: "https://github.com/",
    liveDemoUrl: "",
    keyFeatures: [
      "Role-based authentication (Student, Alumni, Admin) secured with JWT",
      "Searchable alumni directory with filtering by graduation year and company",
      "Interactive profile updates and career milestone sharing",
      "RESTful API integration documented with Swagger UI"
    ],
    architectureNotes: "Decoupled React frontend communicating via JSON REST APIs with a Spring Boot enterprise backend backed by a normalized MySQL schema."
  },
  {
    id: "dailynk",
    title: "DaiLynk",
    category: "Mobile Application / Marketplace / Digital Platform",
    categoryGroup: "Mobile & Automation",
    shortDescription: "A dynamic mobile marketplace platform connecting local sellers and customers with frictionless product discovery and wallet rewards.",
    fullDescription: "DaiLynk is a mobile-first digital platform concept engineered to empower neighborhood commerce. It allows verified sellers to showcase their inventory while providing shoppers with phone-based authentication, interactive listings, and cashback wallet incentives.",
    problemSolved: "Local merchants lack accessible, low-friction digital storefronts to compete with massive e-commerce conglomerates.",
    myContribution: "Structured user flow blueprints, designed seller onboarding workflows, and formulated mobile application API contracts.",
    currentStatus: "In Progress",
    isFlagship: false,
    technologies: ["Mobile UI", "REST APIs", "Cloud Backend", "Authentication", "Wallet Architecture"],
    tags: ["Mobile App", "Marketplace", "Digital Platform", "In Progress"],
    githubUrl: "https://github.com/",
    liveDemoUrl: "",
    keyFeatures: [
      "Phone-based OTP authentication for frictionless customer access",
      "Dedicated merchant dashboard for product catalog management",
      "Integrated wallet cashback reward mechanisms",
      "Scalable backend API structure prepared for cloud deployment"
    ],
    architectureNotes: "Designed for cloud-native deployment with stateless microservice endpoints managing customer profiles, transactions, and merchant catalogs."
  },
  {
    id: "printpod-kiosk",
    title: "PrintPod / Smart Printing Kiosk",
    category: "Hardware + Software / Computer Vision / Automation",
    categoryGroup: "AI & Computer Vision",
    shortDescription: "An automated self-service kiosk concept combining document printing, scanning, and AI-assisted passport photo capture and enhancement.",
    fullDescription: "PrintPod explores an unattended kiosk solution for essential document services. Combining hardware camera integration with computer vision (YOLO / MediaPipe / Real-ESRGAN), it automates background removal, photo alignment, and high-resolution document processing.",
    problemSolved: "Document and passport printing at traditional photo studios requires long waits, manual editing, and high service fees.",
    myContribution: "Researched AI image enhancement algorithms (Real-ESRGAN), designed the camera alignment pipeline, and drafted the self-service user interface flow.",
    currentStatus: "Concept",
    isFlagship: false,
    technologies: ["YOLO", "MediaPipe", "Real-ESRGAN", "Computer Vision", "Python", "Automation"],
    tags: ["Hardware + Software", "Computer Vision", "Automation", "Concept", "Smart Kiosk"],
    githubUrl: "https://github.com/",
    liveDemoUrl: "",
    keyFeatures: [
      "AI-guided facial positioning and automated background neutralization",
      "Super-resolution enhancement for crisp passport photo outputs",
      "Integrated document scanning and multi-page photocopy workflow",
      "Touchscreen-friendly kiosk navigation UI concept"
    ],
    architectureNotes: "Camera input is fed into MediaPipe for face landmark validation, processed through Real-ESRGAN for resolution upscaling, and sent to printer spoolers."
  },
  {
    id: "paper-mill-dashboard",
    title: "Paper Mill AI Monitoring Dashboard",
    category: "Industrial Monitoring / AI Dashboard / Data Engineering",
    categoryGroup: "Industrial AI & Systems",
    shortDescription: "An industrial telemetry dashboard concept monitoring multi-stage paper production machinery with time-series operational insights.",
    fullDescription: "A specialized operational dashboard designed for paper manufacturing facilities. Tracks performance telemetry across key machine units (Pulper, Digester, Screening, Fourdrinier, Dryer Cylinders, Calender) using time-series storage and contextual documentation retrieval.",
    problemSolved: "Complex continuous-process mills produce vast sensor streams that are difficult to synthesize in real time during mechanical drift.",
    myContribution: "Architected dashboard visualization views for all 6 core paper-mill stages, designed InfluxDB time-series schemas, and conceptualized RAG documentation lookups.",
    currentStatus: "Concept",
    isFlagship: false,
    technologies: ["InfluxDB", "RAG", "Data Dashboards", "Time-Series Telemetry", "Industrial AI"],
    tags: ["Industrial Monitoring", "AI Dashboard", "Data Engineering", "Concept", "InfluxDB"],
    githubUrl: "https://github.com/",
    liveDemoUrl: "",
    keyFeatures: [
      "Six-stage machine telemetry monitoring (Pulper, Digester, Screening, Fourdrinier, Dryer, Calender)",
      "High-throughput time-series metric tracking via InfluxDB data models",
      "RAG-assisted equipment troubleshooting manual query interface",
      "Critical temperature, moisture, and vibration threshold alerts"
    ],
    architectureNotes: "Sensor telemetry logs into InfluxDB buckets while an LLM RAG engine indexes machine service manuals for rapid fault troubleshooting."
  },
  {
    id: "whatsapp-status-saver",
    title: "WhatsApp Status Saver",
    category: "Mobile Application / Flutter",
    categoryGroup: "Mobile & Automation",
    shortDescription: "A streamlined mobile utility application built to view, organize, and save temporary status photos and videos with a clean user experience.",
    fullDescription: "A mobile utility that accesses cached media folders on Android devices, allowing users to preview, save, and share WhatsApp status stories before they expire. Built using Flutter for smooth animations and native file system interactions.",
    problemSolved: "Users frequently lose access to meaningful status updates shared by contacts after the 24-hour expiration window.",
    myContribution: "Engineered local Android storage permissions, implemented media grid view with preview modals, and handled local file export operations.",
    currentStatus: "Learning Project",
    isFlagship: false,
    technologies: ["Flutter", "Dart", "Android Storage APIs", "Mobile UI"],
    tags: ["Flutter", "Dart", "Mobile App", "Android", "Learning Project"],
    githubUrl: "https://github.com/",
    liveDemoUrl: "",
    keyFeatures: [
      "Clean photo and video media grid with fast caching",
      "Full-screen media preview with video playback controls",
      "One-tap save to native device gallery storage",
      "Built with Flutter for high frame-rate responsiveness"
    ],
    architectureNotes: "Interacts with Android scoped storage directory trees, filtering media files by extension and loading them into an asynchronous Flutter cache."
  }
];
