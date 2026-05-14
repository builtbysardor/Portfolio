import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  { id: "about",   title: "About",    link: null },
  { id: "work",    title: "Work",     link: null },
  { id: "contact", title: "Contact",  link: null },
  {
    id: "source-code",
    title: "GitHub",
    link: "https://github.com/builtbysardor",
  },
] as const;

// Services
export const SERVICES = [
  { title: "Full-Stack Developer", icon: web },
  { title: "DevOps Engineer",      icon: mobile },
  { title: "Cybersecurity Builder",icon: backend },
  { title: "Open Source Creator",  icon: creator },
] as const;

// Technologies
export const TECHNOLOGIES = [
  { name: "HTML 5",       icon: html },
  { name: "CSS 3",        icon: css },
  { name: "JavaScript",   icon: javascript },
  { name: "TypeScript",   icon: typescript },
  { name: "React JS",     icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS",      icon: nodejs },
  { name: "MongoDB",      icon: mongodb },
  { name: "Three JS",     icon: threejs },
  { name: "git",          icon: git },
  { name: "figma",        icon: figma },
  { name: "docker",       icon: docker },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Full-Stack Developer",
    company_name: "Freelance",
    icon: web,
    iconBg: "#1a1a2e",
    date: "Jan 2023 - 2026",
    points: [
      "Building production-grade web applications using Next.js, FastAPI and TypeScript.",
      "Designing RESTful APIs and real-time systems with WebSockets.",
      "Deploying and managing applications on Linux servers with Docker & Nginx.",
      "Delivering responsive, high-performance UIs for real clients.",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Self-directed",
    icon: mobile,
    iconBg: "#16213e",
    date: "Jun 2023 - 2026",
    points: [
      "Built InfraWatch — a full Prometheus + Grafana + Docker monitoring stack.",
      "Automated CI/CD pipelines and container orchestration workflows.",
      "Managed Linux servers, Nginx reverse proxies and SSL configurations.",
      "Created open-source DevOps tooling used by the community.",
    ],
  },
  {
    title: "Cybersecurity Researcher",
    company_name: "Independent",
    icon: backend,
    iconBg: "#0f3460",
    date: "Sep 2023 - 2026",
    points: [
      "Developed SentinelLog — real-time SOC dashboard detecting SSH brute-force, SQLi, DDoS attacks.",
      "Built PhishGuard AI — 100% local ML-based phishing email detector with Naive Bayes + FastAPI.",
      "Created Antivirus Pro with VirusTotal & MetaDefender API integrations.",
      "Researching threat intelligence and automated IP-blocking systems.",
    ],
  },
  {
    title: "Open Source Creator",
    company_name: "GitHub · builtbysardor",
    icon: creator,
    iconBg: "#1a1a2e",
    date: "2023 - 2026",
    points: [
      "Maintaining 20+ open-source repositories on GitHub.",
      "Building developer tools, security utilities and full-stack templates.",
      "Contributing to community projects and writing technical documentation.",
      "Growing a developer brand focused on practical, production-ready software.",
    ],
  },
] as const;

// Testimonials — placeholder (update with real ones when available)
export const TESTIMONIALS = [
  {
    testimonial:
      "Sardor built our monitoring dashboard in record time. Clean code, great communication, real professional.",
    name: "Alex K.",
    designation: "CTO",
    company: "TechStartup",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "His cybersecurity tool caught threats we didn't even know existed. Impressive work for someone so young.",
    name: "Maria S.",
    designation: "Security Lead",
    company: "DevOps Co.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "The full-stack app Sardor delivered was exactly what we needed — fast, scalable and well-documented.",
    name: "James T.",
    designation: "Founder",
    company: "WebAgency",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Nexus Pro",
    description:
      "Real-time infrastructure monitoring dashboard. Visualizes CPU, RAM, disk, network, service status and alert management — all in one view.",
    tags: [
      { name: "Next.js",    color: "blue-text-gradient" },
      { name: "WebSockets", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/builtbysardor/nexus-pro",
    live_site_link: "https://github.com/builtbysardor/nexus-pro",
  },
  {
    name: "SentinelLog v2",
    description:
      "Real-time SOC dashboard with FastAPI + WebSockets. Detects SSH brute-force, SQL injection, DDoS and more. Auto-blocks IPs scoring 85+ threat.",
    tags: [
      { name: "FastAPI",    color: "blue-text-gradient" },
      { name: "Python",     color: "green-text-gradient" },
      { name: "WebSockets", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/builtbysardor/sentinellog-real-time-threat",
    live_site_link: "https://github.com/builtbysardor/sentinellog-real-time-threat",
  },
  {
    name: "InfraWatch",
    description:
      "Production-ready monitoring stack with Prometheus + Grafana + Node Exporter + Docker Compose. One command to launch a full observability platform.",
    tags: [
      { name: "Prometheus", color: "blue-text-gradient" },
      { name: "Grafana",    color: "green-text-gradient" },
      { name: "Docker",     color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/builtbysardor/infrawatch-monitoring-stack",
    live_site_link: "https://github.com/builtbysardor/infrawatch-monitoring-stack",
  },
  {
    name: "PhishGuard AI",
    description:
      "100% local ML-based phishing email detector. Naive Bayes classifier + FastAPI. Your emails never leave your device. Zero cloud dependencies.",
    tags: [
      { name: "Python",     color: "blue-text-gradient" },
      { name: "FastAPI",    color: "green-text-gradient" },
      { name: "ML",         color: "pink-text-gradient" },
    ],
    image: project4,
    source_code_link: "https://github.com/builtbysardor",
    live_site_link: "https://github.com/builtbysardor",
  },
  {
    name: "Antivirus Pro",
    description:
      "Enterprise cybersecurity dashboard with 360° radar scanning, VirusTotal & MetaDefender API integration, and heuristic threat analysis engine.",
    tags: [
      { name: "Python",     color: "blue-text-gradient" },
      { name: "VirusTotal", color: "green-text-gradient" },
      { name: "FastAPI",    color: "pink-text-gradient" },
    ],
    image: project5,
    source_code_link: "https://github.com/builtbysardor/Antivirus-pro-",
    live_site_link: "https://github.com/builtbysardor/Antivirus-pro-",
  },
  {
    name: "KriptoVault",
    description:
      "Localizing cipher tool — a secure, offline encryption/decryption vault supporting multiple classical and modern cipher algorithms.",
    tags: [
      { name: "Python",     color: "blue-text-gradient" },
      { name: "FastAPI",    color: "green-text-gradient" },
      { name: "Crypto",     color: "pink-text-gradient" },
    ],
    image: project6,
    source_code_link: "https://github.com/builtbysardor/localizing-cipher-tool",
    live_site_link: "https://github.com/builtbysardor/localizing-cipher-tool",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/builtbysardor",
  },
] as const;
