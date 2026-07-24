import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "agentic-workflows-2026",
    title: "Agentic workflows are eating operations",
    excerpt:
      "The shift from rule-based automation to reasoning agents is the biggest change to how work gets done since the spreadsheet.",
    category: "Perspective",
    date: "2026-07-14",
    readingTime: "6 min read",
    author: "Elena Marsh",
    content: [
      "For two decades, automation meant rules. If a form was submitted, send an email. If a deal closed, update a field. It worked, until the real world showed up with its endless exceptions.",
      "Agentic workflows flip the model. Instead of enumerating every branch, you describe an outcome and let an agent reason toward it, asking for help when it is unsure. The result is automation that survives contact with reality.",
      "This is not about replacing people. It is about removing the coordination tax, the thousand tiny handoffs that turn a one-hour task into a three-day saga. When agents handle the glue, teams get their attention back.",
      "The teams winning with this shift share one trait: they treat agents like colleagues with clear guardrails, not black boxes. Observability and approvals are not features you bolt on later. They are the foundation of trust.",
    ],
  },
  {
    slug: "designing-for-trust",
    title: "Designing autonomous systems people actually trust",
    excerpt:
      "Trust is not a marketing word. It is an interface decision, a latency budget, and an audit log.",
    category: "Design",
    date: "2026-06-28",
    readingTime: "5 min read",
    author: "Nadia Rahman",
    content: [
      "When software starts making decisions on its own, the interface stops being a control panel and becomes a relationship. Every trace, every approval, every explanation is a moment where trust is earned or lost.",
      "We designed NeuroFlow around a simple rule: nothing an agent does should ever be a surprise. You can see what it is about to do, why, and stop it before it happens.",
      "Good defaults matter more than options. Most teams never touch an advanced setting, so the safe path has to be the obvious one. We spend an unreasonable amount of time on the first five minutes.",
    ],
  },
  {
    slug: "scaling-to-millions-of-runs",
    title: "How we scaled to twelve million runs a month",
    excerpt:
      "A look under the hood at the execution engine that keeps agents fast, cheap, and reliable at scale.",
    category: "Engineering",
    date: "2026-06-09",
    readingTime: "8 min read",
    author: "Rafael Costa",
    content: [
      "Running one agent is easy. Running twelve million concurrent runs without dropping a task, blowing a budget, or leaking state is a different problem entirely.",
      "Our engine treats every step as an idempotent, replayable event. If a node fails, we retry with exponential backoff. If the whole run crashes, we resume from the last durable checkpoint. Nothing runs twice by accident.",
      "Cost is a first-class metric. Every run reports its token spend and latency, and we surface it live so teams can optimize before the invoice, not after.",
    ],
  },
  {
    slug: "human-in-the-loop-patterns",
    title: "Five human-in-the-loop patterns that work",
    excerpt:
      "Autonomy is a spectrum. These are the approval patterns our best customers use to stay in control.",
    category: "Playbook",
    date: "2026-05-22",
    readingTime: "7 min read",
    author: "Aiko Tanaka",
    content: [
      "The teams that get the most from automation are not the ones who automate everything. They are the ones who know exactly where a human belongs.",
      "Pattern one: confidence gating. Let agents act freely above a confidence threshold and escalate below it. Pattern two: value gating. Any action above a dollar amount needs a signature.",
      "The rest are variations on the same idea, put the human at the decision that matters and get out of the way everywhere else.",
    ],
  },
  {
    slug: "the-integration-first-mindset",
    title: "Why we built integrations before intelligence",
    excerpt:
      "An agent is only as useful as the tools it can reach. Here is why we obsessed over connectors first.",
    category: "Perspective",
    date: "2026-05-03",
    readingTime: "4 min read",
    author: "David Okonkwo",
    content: [
      "A brilliant agent trapped in a sandbox is a demo. A capable agent wired into your real tools is a platform. We chose the second from day one.",
      "That meant building three hundred connectors before we let ourselves ship advanced reasoning. Unglamorous work, but it is the difference between a toy and a system of record.",
    ],
  },
  {
    slug: "measuring-automation-roi",
    title: "A practical framework for measuring automation ROI",
    excerpt:
      "Hours saved is a start. Here is how to build a number your CFO will actually believe.",
    category: "Playbook",
    date: "2026-04-18",
    readingTime: "6 min read",
    author: "Elena Marsh",
    content: [
      "Every automation vendor promises to save you time. Few give you a defensible way to prove it. That gap is where budgets go to die.",
      "Start with baseline cycle time and touch count per workflow. Multiply the delta by a loaded hourly cost. Then subtract the platform cost and the human review time you kept. What remains is real.",
      "The honest number is almost always smaller than the pitch and far more persuasive than the pitch, because you can defend every line of it.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
