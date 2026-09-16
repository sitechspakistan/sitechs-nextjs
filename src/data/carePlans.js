export const heroNotes = ["Monthly, cancel any time", "WordPress · Shopify · custom", "Reported, not invisible"];

export const strip = [...Array(2)].flatMap(() => [
  "Updates & security",
  "Performance budgets",
  "Conversion improvements",
  "Backups & monitoring",
  "Development hours",
  "Monthly reporting",
]);

export const decay = [
  { n: "01", title: "Breaks after updates", body: "Platform and dependency updates ship weekly. Something eventually gives, usually unannounced." },
  { n: "02", title: "No ongoing optimisation", body: "Nothing gets faster on its own. Pages accumulate weight until the site is slower than the day it launched." },
  { n: "03", title: "Slow pages, fewer conversions", body: "Every extra second costs enquiries. The traffic still arrives; fewer of them stay long enough to act." },
  { n: "04", title: "Small bugs, lost revenue", body: "A broken form or checkout step can run for weeks before anyone notices it is not just a quiet month." },
  { n: "05", title: "No improvement system", body: "Without someone owning it, the site never gets better — it only ever gets patched." },
];

export const shifts = [
  { old: "Maintenance", new: "A growth system" },
  { old: "Fixing bugs", new: "Improving performance" },
  { old: "One-time development", new: "Ongoing optimisation" },
];

export const packages = [
  {
    name: "Starter Care Plan",
    price: "$299",
    unit: "/ month",
    popular: false,
    for: "Perfect for keeping your website stable and secure.",
    items: ["Updates and security", "Bug fixes", "Backups", "Basic support"],
    cta: "Get started",
  },
  {
    name: "Growth Optimization Plan",
    price: "$299 – $599",
    unit: "/ month",
    popular: true,
    for: "For improving performance and conversions every month.",
    items: [
      "Everything in Starter",
      "Monthly development hours",
      "Landing page updates",
      "Speed optimization",
      "Conversion improvements",
    ],
    cta: "Get started",
  },
  {
    name: "Agency Partner Plan",
    price: "$800 – $2000+",
    unit: "/ month",
    popular: false,
    for: "For agencies and scaling businesses that need a development partner.",
    items: ["Dedicated developer hours", "Priority support", "Custom development", "Funnel improvements", "White-label support option"],
    cta: "Get started",
  },
];

export const forList = [
  "Agencies managing multiple clients",
  "Startups scaling fast",
  "SaaS companies",
  "Ecommerce brands",
  "Businesses with active traffic",
];

export const notForList = ["One-time cheap fixes", "Lowest-price seekers", "Short-term only projects", "Businesses with no growth mindset"];

export const steps = [
  { n: "1", title: "Choose a plan", body: "Select the plan that fits your website and business needs. Change tier later as the work changes." },
  { n: "2", title: "Onboarding", body: "We review your website, understand priorities and set a roadmap for the first ninety days." },
  { n: "3", title: "Ongoing support", body: "We handle updates, fixes and improvements every month, so you can focus on growth." },
];

export const faqData = [
  {
    q: "What actually happens each month?",
    a: "Updates and security patches, backups verified, performance checked against a budget, and the development hours in your plan spent on agreed improvements. You get a short report showing what changed and what it moved.",
  },
  {
    q: "Are we locked into a contract?",
    a: "No. Plans are monthly and you can cancel or change tier with 30 days' notice. The code and hosting are yours throughout, so leaving is never an unwind project.",
  },
  {
    q: "Do unused hours roll over?",
    a: "One month, yes — so a quiet month funds a busier one. Beyond that they expire, because the point of a care plan is continuous work rather than banked credit.",
  },
  {
    q: "What if we need something bigger than the plan?",
    a: "We quote it separately as a project. The plan keeps running underneath, and we never quietly bill extra hours against it without asking first.",
  },
  {
    q: "Do you work on sites you did not build?",
    a: "Often. We start with a technical audit — if the codebase needs stabilising before ongoing care makes sense, we will say so and quote that first rather than charge you monthly to firefight.",
  },
  {
    q: "Which platforms do you support?",
    a: "WordPress, Shopify and custom builds in Next.js or similar. If your stack is something else, ask — we will tell you honestly whether we are the right team for it.",
  },
];
