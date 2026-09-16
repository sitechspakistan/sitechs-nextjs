export const heroNotes = ["Fixed scope, fixed price", "Weekly working demos", "Live in 2–4 weeks"];

export const strip = [...Array(2)].flatMap(() => [
  "AI automations",
  "Website design",
  "Website development",
  "Chrome extensions",
  "12 years shipping",
  "235 products",
]);

export const bandData = [
  {
    id: "s1",
    n: "01",
    title: "AI Automations",
    flagship: true,
    dark: true,
    count: 60,
    countLabel: "Automations in production",
    body: "We find the decisions your team repeats — qualifying, chasing, filing, reporting — and hand them to agents that run day and night. Built on your data, inside your tools, with guardrails and a human in the loop wherever it matters.",
    stack: ["OpenAI", "LangChain", "n8n", "Make", "Zapier", "Pinecone", "Python"],
    foot: "Pilot live in 2–4 weeks",
    slot: "automation dashboard mockup",
    promise: "Twenty hours a week, back on your side of the ledger.",
    href: "/services/ai-automations",
  },
  {
    id: "s2",
    n: "02",
    title: "Website Design",
    flagship: false,
    dark: false,
    count: 140,
    countLabel: "Interfaces designed",
    body: "We design the page architecture around the decision your visitor is actually making, then build it out as a component system — brand, type scale, states and edge cases included, so nothing is invented during development.",
    stack: ["Figma", "Design systems", "UX & IA", "Copy direction", "Prototyping"],
    foot: "Design sprint from 3 weeks",
    slot: "website design mockup",
    promise: "A site that argues for you, not just one that looks current.",
    href: "/services/website-design",
  },
  {
    id: "s3",
    n: "03",
    title: "Website Development",
    flagship: false,
    dark: true,
    count: 235,
    countLabel: "Products shipped",
    body: "Next.js builds that are typed, tested and measurable — wired into your CMS, your CRM and the automation layer behind them. Performance budgets are set before we write code, not apologised for afterwards.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Headless CMS", "Vercel"],
    foot: "Build from 6 weeks",
    slot: "next.js build mockup",
    promise: "Fast on launch day and still fast a year later.",
    href: "/services/website-development",
  },
  {
    id: "s4",
    n: "04",
    title: "Chrome Extensions",
    flagship: false,
    dark: false,
    count: 18,
    countLabel: "Extensions released",
    body: "The fastest way to deliver automation is inside the tool your team already has open. We build extensions that capture, enrich and file data where the work happens — internal tools, or public releases on the Web Store.",
    stack: ["Manifest V3", "React", "TypeScript", "Web Store", "APIs"],
    foot: "Ship in 3–5 weeks",
    slot: "chrome extension mockup",
    promise: "An hour a day back, per seat, without training anyone.",
    href: "/services/chrome-extensions",
  },
];

export const steps = [
  {
    n: "Week 01",
    title: "Discovery",
    body: "We sit with the work: which steps repeat, who owns them, what each one costs you per month.",
    items: ["Workflow shadowing", "Time-cost model", "Tooling audit"],
    out: "Output: opportunity map",
  },
  {
    n: "Week 02",
    title: "Strategy",
    body: "A prioritised plan — what an agent handles, what a human keeps, and what each is worth.",
    items: ["Automation spec", "Success metrics", "Fixed price and scope"],
    out: "Output: signed spec",
  },
  {
    n: "Week 03",
    title: "Build",
    body: "Pipelines, agents and the interface layer built in parallel, with a working demo every Friday.",
    items: ["Agents and integrations", "Design and front-end", "Weekly demo and revision"],
    out: "Output: working pilot",
  },
  {
    n: "Week 04",
    title: "Launch & tune",
    body: "Guardrails, monitoring and iteration against real throughput — then a documented handover.",
    items: ["Monitoring and alerts", "Human-in-the-loop checks", "Docs and training"],
    out: "Output: live system",
  },
];

export const faqData = [
  {
    q: "Which service should I start with?",
    a: "Almost always AI Automations. It is the one that pays for itself, and it tells us what the interface layer actually needs to do. Design or development first only makes sense when you have a launch date driving it.",
  },
  {
    q: "Can I hire you for just design, or just development?",
    a: "Yes. Plenty of clients bring us in for a website design or a Next.js build alone. We will still point out the two or three automations we noticed on the way through — no obligation.",
  },
  {
    q: "How fast can you ship something real?",
    a: "An automation pilot goes live in two to four weeks. A full design and build runs six to ten weeks depending on scope and content readiness. You see working software every week, not status decks.",
  },
  {
    q: "Do you work with our existing tools, or replace them?",
    a: "We work with them. Your CRM, help desk, sheets and accounting stack stay where they are — automation sits between them. We only recommend replacing a tool when it is the thing blocking the automation.",
  },
  {
    q: "Is our data safe with AI in the loop?",
    a: "We scope data access to what the task needs, keep records in your own infrastructure where possible, and put a human approval step on anything customer-facing or financial until you trust the output.",
  },
  {
    q: "What happens after launch?",
    a: "Automations get monitoring, guardrails and a monthly tuning window. Websites get a care plan or a clean documented handoff, whichever you prefer.",
  },
];
