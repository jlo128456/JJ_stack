export const services = [
  { id: "web", icon: "◈", title: "Web Applications", desc: "Custom React, Next.js & full-stack web apps built for scale." },
  { id: "mobile", icon: "◇", title: "Mobile Development", desc: "Cross-platform mobile apps with React Native & Flutter." },
  { id: "python", icon: "◎", title: "Python Development", desc: "Automation, scripting, data processing & backend solutions with Python." },
  { id: "api", icon: "◆", title: "API & Backend", desc: "Robust REST/GraphQL APIs, microservices & cloud architecture." },
  { id: "ui", icon: "△", title: "UI/UX Design", desc: "Pixel-perfect interfaces with intuitive user experiences." },
  { id: "db", icon: "▣", title: "Database Design", desc: "Schema design, optimization & migration across SQL/NoSQL." },
  { id: "devops", icon: "⬡", title: "DevOps & Deploy", desc: "CI/CD pipelines, Docker, AWS/GCP infrastructure setup." },
];

export const projects = [
  { name: "Web app", type: "Job Management CRM", url: "https://padigital.com.au", image: "/pa-digital.png" },
  { name: "Python CRM with demo web replica", type: "Python CRM — Work orders, customers, inventory & invoicing.", url: "https://smartlinkappdemo.streamlit.app/", image: "/pa-crm.png" },
  { name: "JJ Stack", type: "Company Website", url: "https://jjstack.com.au", image: "/jj-stak.png" },
  { name: "Scout Sign-In", type: "Professional attendance tracking", url: "https://jlo128456.github.io/scout_signin_app/", image: "/scout_signin.png" },
];

/* ─── Starter design templates a customer can pick as a jumping-off point ─── */
export const designTemplates = [
  {
    id: "minimal",
    name: "Minimal",
    tagline: "Clean, light, lots of whitespace",
    layout: "centered",
    bg: "#ffffff",
    surface: "#f4f4f5",
    text: "#111318",
    muted: "#6b7280",
    accent: "#111318",
    font: "'DM Sans', sans-serif",
  },
  {
    id: "bold",
    name: "Bold Dark",
    tagline: "High-contrast dark theme, punchy accent",
    layout: "split",
    bg: "#0b0b0f",
    surface: "#16161d",
    text: "#ffffff",
    muted: "#9aa3b2",
    accent: "#c9a227",
    font: "'Syne', sans-serif",
  },
  {
    id: "corporate",
    name: "Corporate",
    tagline: "Structured, trustworthy, blue palette",
    layout: "grid",
    bg: "#f4f7fb",
    surface: "#ffffff",
    text: "#132039",
    muted: "#5b6b85",
    accent: "#1a5fb4",
    font: "'DM Sans', sans-serif",
  },
  {
    id: "creative",
    name: "Creative",
    tagline: "Gradient backgrounds, playful shapes",
    layout: "asymmetric",
    bg: "linear-gradient(135deg,#ff6b6b 0%,#7b2ff7 100%)",
    surface: "#ffffff1a",
    text: "#ffffff",
    muted: "#ffffffcc",
    accent: "#ffffff",
    font: "'Syne', sans-serif",
  },
];