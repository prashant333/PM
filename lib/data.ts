import {
  Search,
  FlaskConical,
  TrendingUp,
  ListChecks,
  Rocket,
  Repeat,
  Settings2,
  BarChart3,
  Code2,
  Star,
  type LucideIcon,
} from "lucide-react";

export const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Impact", href: "#impact" },
];

export const heroMetrics = [
  { value: "6+ Yrs", label: "Industry Experience" },
  { value: "3+", label: "Global Launches" },
  { value: "10k+ Tasks", label: "AI Orchestration Engine" },
];

export const marqueeItems = [
  "EV PLATFORM",
  "OPERATIONS & MAINTENANCE",
  "FLEET MANAGEMENT",
  "AI OPERATIONS",
  "SAAS",
  "FINTECH",
  "PRODUCT STRATEGY",
  "MIDDLEWARE",
];

export const journeyPillars = [
  { title: "Impact", label: "Driven Results" },
  { title: "Data", label: "Informed Pivot" },
  { title: "Scale", label: "Focused Dev" },
];

export const timeline = [
  {
    title: "Leadership & Vision",
    desc: "Setting product direction and aligning cross-functional teams toward measurable business outcomes.",
    featured: true,
  },
  {
    title: "PM Growth & Strategy",
    desc: "Scaling EV infrastructure SaaS from 0 to 1 with a focus on operational reliability.",
    featured: false,
  },
  {
    title: "PM Transition",
    desc: "Bridging the critical gap between ops-heavy processes and engineering velocity.",
    featured: false,
  },
  {
    title: "Data Engineering",
    desc: "Building scalable data pipelines, optimizing data workflows, and transforming raw data into actionable business insights.",
    featured: false,
  },
];

export type FrameworkStep = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const framework: FrameworkStep[] = [
  {
    icon: Search,
    title: "Understand Customer Problems",
    desc: "Deep-dive user research to uncover latent needs and friction points before sketching a single screen or writing a line of code.",
  },
  {
    icon: FlaskConical,
    title: "Validate Assumptions",
    desc: "Rapid prototyping and rigorous A/B testing to ensure we're solving the right problem for the right audience correctly.",
  },
  {
    icon: TrendingUp,
    title: "Quantify Business Impact",
    desc: "Ensuring every feature and pivot maps directly to established North Star metrics and project-specific ROI targets.",
  },
  {
    icon: ListChecks,
    title: "Prioritize Ruthlessly",
    desc: "Managing engineering effort vs. user impact using RICE, KANO, and MoSCoW models.",
  },
  {
    icon: Rocket,
    title: "Launch Quickly",
    desc: "Agile execution focusing on high-quality MVP delivery to gather real-world usage data as early in the cycle as possible.",
  },
  {
    icon: Repeat,
    title: "Analyze and Iterate",
    desc: "Continuous feedback loops to refine the product post-launch and quantitative usage analytics.",
  },
];

export type Initiative = {
  tag: string;
  title: string;
  desc: string;
  chips: string[];
  cta: string;
  tone: string;
  /** Path to a screenshot in /public. Falls back to the gradient placeholder if omitted. */
  image?: string;
};

export const initiatives: Initiative[] = [
  {
    tag: "Mobility Infrastructure",
    title: "EV Charging Management",
    desc: "Redesigning the charger visibility and management layer for large-scale logistics fleets, reducing operational downtime by 40% through real-time telemetry.",
    chips: ["Fleet Visibility", "Operational Efficiency"],
    cta: "Read Case Study",
    tone: "from-sky-900/40 via-surface-container to-surface-container",
    image: "/images/initiatives/screen1.png",
  },
  {
    tag: "SaaS & Fintech",
    title: "Strategic Revenue Management",
    desc: "Developing a custom solution to automate complex firmware error handling for distributed assets, recapturing previously lost revenue streams.",
    chips: ["Revenue Ops", "Error Handling"],
    cta: "Read Case Study",
    tone: "from-emerald-900/30 via-surface-container to-surface-container",
    image: "/images/initiatives/revenue.png",
  },
];

export const featuredInitiative = {
  tag: "Logistics & Middleware",
  title: "Ops & Maintenance Visibility",
  desc: "A high-performance middleware solution providing real-time visibility into operational bottlenecks for decentralized, global maintenance teams.",
  chips: ["Middleware", "Real-time Data"],
  cta: "Full Case Study",
  image: "/images/initiatives/ops1.png",
};

export type ToolkitGroup = {
  icon: LucideIcon;
  label: string;
  items: string[];
};

export const toolkit: ToolkitGroup[] = [
  {
    icon: Settings2,
    label: "Management",
    items: ["Agile/Scrum", "Jira/Asana", "Product Discovery"],
  },
  {
    icon: BarChart3,
    label: "Analytics",
    items: ["SQL", "MongoDB", "Mixpanel"],
  },
  {
    icon: Code2,
    label: "Technical",
    items: ["API Integration", "Python", "AI Evaluation"],
  },
  {
    icon: Star,
    label: "Leadership",
    items: ["Stakeholder Management", "GTM Strategy", "Roadmap"],
  },
];

export const writing = [
  {
    kind: "Article",
    readTime: "8 min read",
    title: "How EV Infrastructure Scales: A Product Perspective",
    desc: "Exploring the bottlenecks in global fleet electrification and how specialized middleware can bridge the gap between hardware and software.",
    tone: "from-indigo-900/40 via-surface-container to-surface-container",
  },
  {
    kind: "Insights",
    readTime: "8 min read",
    title: "AI Evaluation Workflows: Beyond the Hype Cycle",
    desc: "Setting up structured, evidence-based evaluation programs for LLMs in high-stakes operational environments.",
    tone: "from-orange-900/30 via-surface-container to-surface-container",
  },
];

export const footerColumns = [
  {
    heading: "Connect",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter / X", href: "#" },
    ],
  },
  {
    heading: "Content",
    links: [
      { label: "Medium", href: "#" },
      { label: "Substack", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Archive", href: "#" },
    ],
  },
];
