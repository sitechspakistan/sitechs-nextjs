export const chatData = [
  { who: "them", text: "Hi, do you have any 2-bedroom units available for October?" },
  {
    who: "us",
    text: "Hi! Yes — we have two left on the third floor. Both are open-plan. Want me to check pricing and send a live tour?",
  },
  { who: "them", text: "Yes please, Saturday afternoon works." },
  {
    who: "us",
    text: "Booked — Sat 2:00 PM with our leasing agent. Confirmation sent to your email, and I'll follow up the morning of.",
  },
];

export const miniStats = [
  { value: "13s", label: "Avg. reply time" },
  { value: "24/7", label: "Coverage" },
  { value: "60+", label: "Automations live" },
];

export const heroChips = ["Your data, your tenancy", "Human in the loop", "Pilot in 2–4 weeks"];

export const facts = [
  { label: "First workflow", value: "Live in 2–4 weeks" },
  { label: "From", value: "$1,500 fixed" },
  { label: "Deliverable", value: "Running system + docs" },
  { label: "Support", value: "30 days included" },
];

export const strip = [...Array(2)].flatMap(() => [
  "AI agents",
  "Chatbots",
  "Workflow automation",
  "CRM automation",
  "Document processing",
  "Data & reporting",
]);

export const problemStats = [
  { value: "70%", label: "Faster response times" },
  { value: "60+", label: "Automations in production" },
];

export const problems = [
  { n: "01", bad: "Repetitive tasks eating whole days", good: "The repeatable share runs unattended, overnight included" },
  { n: "02", bad: "Leads going cold before the follow-up", good: "Qualified and answered in seconds, at any hour" },
  { n: "03", bad: "Data scattered across four disconnected tools", good: "One flow of record, synced both ways" },
  { n: "04", bad: "Approvals waiting on someone's inbox", good: "Routed, chased and escalated automatically" },
  { n: "05", bad: "Manual entry introducing quiet errors", good: "Validated writes with an audit trail per action" },
  { n: "06", bad: "No visibility until month end", good: "Live dashboards and reports that build themselves" },
];

export const builds = [
  { n: "01", title: "AI agents", body: "Agents that converse, decide and take action inside your systems — not just answer questions." },
  { n: "02", title: "AI chatbots", body: "24/7 support, lead qualification and customer engagement on your site, WhatsApp or inbox." },
  { n: "03", title: "Workflow automation", body: "Approvals, notifications and data sync across the tools your team already works in." },
  { n: "04", title: "CRM automation", body: "Follow-ups, email sequences and customer journeys that run without anyone remembering to." },
  { n: "05", title: "Document processing", body: "Extract, analyse and organise data from invoices, contracts and forms of any shape." },
  { n: "06", title: "Data & reporting", body: "Real-time dashboards and automated reports that answer questions instead of counting rows." },
];

export const featuredCase = {
  eyebrowNum: "03",
  eyebrow: "Featured automation",
  title: "WhatsApp CRM bot: from manual logins to one-line commands.",
  before:
    "The sales team logged into the CRM by hand for every task — creating invoices, checking payments, adding notes. Follow-ups slipped through the cracks.",
  after:
    'They message a WhatsApp-based AI agent directly: "Invoice Nayy Raas, create an invoice for order #1234" — and it is done. No login required.',
  stats: [
    { value: "70%", label: "Faster response times" },
    { value: "Zero", label: "Repetitive logins needed" },
    { value: "24/7", label: "Customer self-service" },
  ],
  href: "/case-studies/whatsapp-crm-bot",
};

export const phases = [
  {
    n: "Step 01",
    title: "Discovery call",
    body: "We map your business and the tasks that hurt, then say plainly which of them automation pays back on.",
    items: [],
    out: "Output: opportunity map",
  },
  {
    n: "Step 02",
    title: "Workflow audit",
    body: "We watch the current process end to end and time it, so the business case is measured rather than assumed.",
    items: [],
    out: "Output: costed baseline",
  },
  {
    n: "Step 03",
    title: "Solution design",
    body: "The architecture, the models, the guardrails and the human checkpoints — agreed before anything is built.",
    items: [],
    out: "Output: signed design",
  },
  {
    n: "Step 04",
    title: "Development & integration",
    body: "Built and wired into your existing tools, with staging credentials so nothing touches live data early.",
    items: [],
    out: "Output: working pilot",
  },
  {
    n: "Step 05",
    title: "Testing & launch",
    body: "Run in parallel with the manual process until the numbers agree, then switched over.",
    items: [],
    out: "Output: live automation",
  },
  {
    n: "Step 06",
    title: "Ongoing optimisation",
    body: "Monitoring, prompt and model updates, and new workflows added as the obvious ones prove out.",
    items: [],
    out: "Output: compounding returns",
  },
];

export const sliders = {
  people: { label: "Employees involved in manual work", min: 1, max: 50, step: 1, defaultValue: 10 },
  hours: { label: "Hours wasted per week (each)", min: 1, max: 30, step: 1, defaultValue: 10 },
  rate: { label: "Average hourly cost", min: 5, max: 120, step: 5, defaultValue: 25 },
};

export const packages = [
  {
    name: "Starter Build",
    price: "$1,500 – $3,000",
    unit: "One-time",
    popular: false,
    for: "One business automation, done right.",
    items: ["1 automation workflow", "Integration with your tools", "1–2 week delivery", "30 days of support included"],
    cta: "Get started",
  },
  {
    name: "Growth Build + Care",
    price: "$3,000 – $8,000",
    unit: "+ $800 – $1,200 / month",
    popular: true,
    for: "Multi-step systems, monitored monthly.",
    items: [
      "3–5 automations, fully connected",
      "Integration across CRM, email and ops",
      "Monthly monitoring and optimisation",
      "Priority support channel",
    ],
    cta: "Book a call",
  },
  {
    name: "Scale / Custom",
    price: "Custom quote",
    unit: "Scoped after the audit",
    popular: false,
    for: "Multi-department, company-wide rollout.",
    items: [
      "Multiple AI agents and orchestration",
      "Custom integrations and API work",
      "Dedicated automation strategist",
      "SLA-backed support",
    ],
    cta: "Talk to us",
  },
];

export const faqData = [
  {
    q: "Where does our data go?",
    a: "Into your systems, and nowhere else by default. We run models through business-tier APIs with training disabled, and where policy requires it we deploy in your own cloud account so nothing leaves your tenancy.",
  },
  {
    q: "What if the AI gets something wrong?",
    a: "Every workflow has a confidence threshold and an escalation path. Below it, the task lands in a human review queue instead of acting — and every action is logged so you can see exactly what happened and why.",
  },
  {
    q: "Do we need to replace our current tools?",
    a: "No. We build around the CRM, inbox, spreadsheets and portals you already use. Replacing the stack is a much bigger project and almost never the thing that pays back first.",
  },
  {
    q: "How quickly do we see something working?",
    a: "The first workflow is usually live in two to four weeks. We deliberately start with one painful, well-bounded task so you can judge the result before committing to more.",
  },
  {
    q: "What does it cost to run?",
    a: "Model and infrastructure usage is typically $50 to $400 a month depending on volume, billed to your accounts directly so you see the real number. Our care plan is separate and optional.",
  },
  {
    q: "Who maintains it after launch?",
    a: "You can, and we document it so that is realistic. Most clients keep us on the Growth care plan for monitoring, model updates and monthly optimisation instead.",
  },
];

export const nextUp = [
  { href: "/services/website-design", n: "Service 02", title: "Website Design", tag: "The argument your site makes before the agent takes over." },
  { href: "/services/website-development", n: "Service 03", title: "Website Development", tag: "The Next.js build these systems plug into." },
  { href: "/services/chrome-extensions", n: "Service 04", title: "Chrome Extensions", tag: "Automation inside the tools your team already uses." },
];
