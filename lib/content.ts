import {
  Workflow,
  Bot,
  GitBranch,
  ShieldCheck,
  Zap,
  Boxes,
  LineChart,
  Plug,
  Braces,
  Radar,
  Clock,
  Users,
  Sparkles,
  Layers,
  Building2,
  ShoppingCart,
  HeartPulse,
  Banknote,
} from "lucide-react";
import type {
  BentoFeature,
  FaqItem,
  Logo,
  MegaMenuGroup,
  PricingTier,
  Stat,
  TeamMember,
  Testimonial,
  TimelineStep,
  UseCase,
} from "@/types";

export const megaMenu: MegaMenuGroup[] = [
  {
    label: "Platform",
    items: [
      {
        label: "Agent Builder",
        href: "/features",
        description: "Compose autonomous agents with a visual canvas.",
        icon: Bot,
      },
      {
        label: "Workflow Engine",
        href: "/features",
        description: "Branching logic that runs across every tool.",
        icon: Workflow,
      },
      {
        label: "Integrations",
        href: "/features",
        description: "300+ native connectors and a typed SDK.",
        icon: Plug,
      },
    ],
  },
  {
    label: "Capabilities",
    items: [
      {
        label: "Observability",
        href: "/features",
        description: "Trace every decision an agent makes.",
        icon: Radar,
      },
      {
        label: "Governance",
        href: "/features",
        description: "Approvals, audit logs, and role-based access.",
        icon: ShieldCheck,
      },
      {
        label: "Analytics",
        href: "/features",
        description: "Measure time saved and ROI in real time.",
        icon: LineChart,
      },
    ],
  },
];

export const logos: Logo[] = [
  { name: "Northwind" },
  { name: "Quanta" },
  { name: "Lumen" },
  { name: "Apex Labs" },
  { name: "Cobalt" },
  { name: "Vertex" },
  { name: "Monarch" },
  { name: "Helio" },
];

export const bentoFeatures: BentoFeature[] = [
  {
    title: "Visual agent builder",
    description:
      "Drag, connect, and ship autonomous agents on an infinite canvas. No glue code, no brittle scripts.",
    icon: Boxes,
    span: "lg",
    accent: "var(--brand-via)",
  },
  {
    title: "Runs where you work",
    description:
      "Native connectors for Slack, Salesforce, Notion, GitHub, and 300 more.",
    icon: Plug,
    span: "sm",
    accent: "var(--brand-to)",
  },
  {
    title: "Typed SDK",
    description: "Drop into TypeScript when you need full control.",
    icon: Braces,
    span: "sm",
    accent: "var(--brand-from)",
  },
  {
    title: "Explainable by default",
    description:
      "Every agent decision is traced, versioned, and replayable, so you always know why.",
    icon: Radar,
    span: "md",
    accent: "var(--brand-via)",
  },
  {
    title: "Enterprise governance",
    description:
      "SOC 2 Type II, SSO, granular permissions, and human-in-the-loop approvals.",
    icon: ShieldCheck,
    span: "md",
    accent: "var(--brand-to)",
  },
];

export const stats: Stat[] = [
  { value: 12, suffix: "M+", prefix: "", label: "Tasks automated monthly" },
  { value: 68, suffix: "%", prefix: "", label: "Average reduction in busywork" },
  { value: 4.2, suffix: "h", prefix: "", label: "Saved per employee weekly" },
  { value: 99.99, suffix: "%", prefix: "", label: "Platform uptime" },
];

export const timeline: TimelineStep[] = [
  {
    step: "01",
    title: "Connect your stack",
    description:
      "Authenticate the tools your team already uses. NeuroFlow maps your data model in minutes, not months.",
    icon: Plug,
  },
  {
    step: "02",
    title: "Describe the outcome",
    description:
      "Write a goal in plain language. Agents propose a workflow, ask clarifying questions, and draft the logic.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Review and approve",
    description:
      "Inspect each step, set guardrails, and decide where a human sign-off is required before anything ships.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Run and improve",
    description:
      "Agents execute around the clock, learn from every run, and surface optimizations you can accept in one click.",
    icon: LineChart,
  },
];

export const useCases: UseCase[] = [
  {
    title: "Operations",
    description:
      "Automate onboarding, procurement, and internal requests end to end.",
    icon: Building2,
    metric: "9.4x",
    metricLabel: "faster cycle time",
  },
  {
    title: "Revenue",
    description:
      "Enrich leads, route deals, and keep every CRM record accurate on its own.",
    icon: Banknote,
    metric: "+31%",
    metricLabel: "pipeline velocity",
  },
  {
    title: "Support",
    description:
      "Resolve tier-one tickets instantly and escalate the rest with full context.",
    icon: HeartPulse,
    metric: "72%",
    metricLabel: "auto-resolved",
  },
  {
    title: "Commerce",
    description:
      "Sync inventory, reconcile orders, and flag anomalies before they cost you.",
    icon: ShoppingCart,
    metric: "$2.1M",
    metricLabel: "recovered annually",
  },
];

export const featureHighlights = [
  {
    title: "Agentic orchestration",
    description:
      "Chain reasoning, tools, and approvals into workflows that adapt to real-world edge cases without breaking.",
    icon: Workflow,
  },
  {
    title: "Parallel execution",
    description:
      "Fan out thousands of concurrent runs with automatic retries, backoff, and idempotency built in.",
    icon: Zap,
  },
  {
    title: "Version everything",
    description:
      "Branch, diff, and roll back workflows like code. Ship changes with confidence and a full history.",
    icon: GitBranch,
  },
  {
    title: "Composable blocks",
    description:
      "Reuse triggers, actions, and sub-agents across your organization from a shared, governed library.",
    icon: Layers,
  },
  {
    title: "Real-time observability",
    description:
      "Watch live traces, latency, and cost per run. Alert on drift before it reaches your customers.",
    icon: Radar,
  },
  {
    title: "Human in the loop",
    description:
      "Insert approvals anywhere. Agents pause, request a decision, and continue the moment you respond.",
    icon: Users,
  },
] as const;

export const pricing: PricingTier[] = [
  {
    name: "Starter",
    tagline: "For individuals automating their first workflows.",
    monthly: 0,
    yearly: 0,
    features: [
      "3 active agents",
      "1,000 runs / month",
      "50+ core integrations",
      "Community support",
      "7-day run history",
    ],
    highlighted: false,
    cta: "Start for free",
  },
  {
    name: "Growth",
    tagline: "For teams scaling automation across departments.",
    monthly: 49,
    yearly: 39,
    features: [
      "Unlimited agents",
      "50,000 runs / month",
      "300+ integrations",
      "Priority support",
      "Advanced observability",
      "Role-based access",
    ],
    highlighted: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    tagline: "For organizations with security and scale requirements.",
    monthly: -1,
    yearly: -1,
    features: [
      "Everything in Growth",
      "Unlimited runs",
      "SSO & SCIM",
      "SOC 2 & HIPAA",
      "Dedicated success manager",
      "99.99% uptime SLA",
    ],
    highlighted: false,
    cta: "Talk to sales",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We retired four internal tools in a quarter. NeuroFlow now runs the operational glue that used to eat two full-time roles.",
    author: "Dana Whitfield",
    role: "VP of Operations",
    company: "Northwind",
    initials: "DW",
  },
  {
    quote:
      "The observability is unreal. I can trace exactly why an agent made a call, which made our security team comfortable in days.",
    author: "Marcus Lee",
    role: "Head of Platform",
    company: "Quanta",
    initials: "ML",
  },
  {
    quote:
      "Our revenue ops team ships automations without filing engineering tickets. Pipeline velocity is up over thirty percent.",
    author: "Priya Nadar",
    role: "Director of RevOps",
    company: "Lumen",
    initials: "PN",
  },
  {
    quote:
      "Onboarding used to take three weeks of manual coordination. It is now a single workflow that runs itself overnight.",
    author: "Tom Alvarez",
    role: "Chief of Staff",
    company: "Apex Labs",
    initials: "TA",
  },
  {
    quote:
      "NeuroFlow feels like hiring a tireless ops engineer that never sleeps and documents every decision it makes.",
    author: "Sofia Berg",
    role: "COO",
    company: "Cobalt",
    initials: "SB",
  },
  {
    quote:
      "The typed SDK meant our engineers trusted it immediately. We moved critical billing flows over without a second thought.",
    author: "Jamal Osei",
    role: "Staff Engineer",
    company: "Vertex",
    initials: "JO",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How is NeuroFlow different from a traditional automation tool?",
    answer:
      "Legacy tools follow rigid if-this-then-that rules. NeuroFlow agents reason about goals, handle ambiguity, adapt to edge cases, and explain every decision, so you automate the work that used to require a person.",
  },
  {
    question: "Do I need engineers to get started?",
    answer:
      "No. Most workflows are built entirely on the visual canvas. When you need deeper control, engineers can drop into our typed TypeScript SDK, but it is never a requirement.",
  },
  {
    question: "How do you keep our data secure?",
    answer:
      "We are SOC 2 Type II certified with SSO, SCIM, granular role-based access, encryption in transit and at rest, and configurable data residency. Human approvals can gate any sensitive action.",
  },
  {
    question: "What happens when an agent is unsure?",
    answer:
      "You define guardrails and approval points. When an agent hits low confidence or a sensitive step, it pauses, requests a human decision with full context, and resumes instantly once you respond.",
  },
  {
    question: "Which tools can NeuroFlow connect to?",
    answer:
      "Over 300 native integrations including Slack, Salesforce, HubSpot, Notion, GitHub, Snowflake, and Stripe, plus a universal HTTP block and webhooks for anything else.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Yes. The Starter plan is free forever, and every paid plan includes a 14-day trial with full access. No credit card is required to begin.",
  },
];

export const team: TeamMember[] = [
  { name: "Elena Marsh", role: "Co-founder & CEO", initials: "EM" },
  { name: "David Okonkwo", role: "Co-founder & CTO", initials: "DO" },
  { name: "Aiko Tanaka", role: "VP of Product", initials: "AT" },
  { name: "Rafael Costa", role: "VP of Engineering", initials: "RC" },
  { name: "Nadia Rahman", role: "Head of Design", initials: "NR" },
  { name: "Liam Foster", role: "Head of Research", initials: "LF" },
];

export const companyValues = [
  {
    title: "Autonomy with accountability",
    description:
      "We build systems that act on their own but can always explain why. Trust is the product.",
    icon: ShieldCheck,
  },
  {
    title: "Speed as a feature",
    description:
      "Every interaction should feel instant. We treat latency as a bug, not a constraint.",
    icon: Zap,
  },
  {
    title: "Craft over shortcuts",
    description:
      "Details compound. We sweat the interface, the docs, and the edge cases most teams skip.",
    icon: Sparkles,
  },
  {
    title: "Customer obsession",
    description:
      "We measure success by hours returned to our customers, not features shipped.",
    icon: Clock,
  },
] as const;
