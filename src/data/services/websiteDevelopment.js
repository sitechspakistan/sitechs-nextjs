export const logData = [
  { text: "next build — 24 routes prerendered", ms: "18.4s" },
  { text: "typecheck — 0 errors", ms: "3.1s" },
  { text: "lighthouse ci — budget met", ms: "9.7s" },
  { text: "cms schema synced — 6 models", ms: "1.2s" },
  { text: "deployed to production", ms: "42s" },
];

export const typeTarget = "sitechs deploy --prod";

export const vitals = [
  { label: "Performance", value: "99" },
  { label: "LCP", value: "0.9s" },
  { label: "CLS", value: "0.00" },
  { label: "Accessibility", value: "100" },
];

export const heroChips = ["Repo in your GitHub", "Figma → production", "Care plan available"];

export const facts = [
  { label: "Timeline", value: "4 weeks typical" },
  { label: "From", value: "$3,200 fixed" },
  { label: "Deliverable", value: "Repo + CMS + docs" },
  { label: "After launch", value: "30 days included" },
];

export const strip = [...Array(2)].flatMap(() => [
  "Next.js & TypeScript",
  "Headless CMS",
  "Shopify",
  "API integrations",
  "Performance budgets",
  "Analytics & tracking",
]);

export const problemStats = [
  { value: "0.9s", label: "Median LCP, was 4.2s" },
  { value: "0", label: "Plugin licences to renew" },
];

export const problems = [
  { n: "01", bad: "Four-second hero on mobile", good: "A performance budget enforced in CI on every merge" },
  { n: "02", bad: "Fourteen plugins holding it together", good: "A typed codebase with dependencies you can audit" },
  { n: "03", bad: "Every copy change needs a developer", good: "Block-based CMS your marketers publish from" },
  { n: "04", bad: "No one knows how it was deployed", good: "Documented pipeline, immutable deploys, one-click rollback" },
];

export const included = [
  { n: "01", title: "Front-end build", body: "Every page built to the design, pixel-checked at three breakpoints, with real states not happy paths." },
  { n: "02", title: "CMS modelling", body: "Content modelled as blocks your team composes, with previews and role-based publishing." },
  { n: "03", title: "Integrations", body: "CRM, payments, booking, email and whatever else the funnel needs, tested end to end." },
  { n: "04", title: "Performance & SEO", body: "Budgets in CI, image pipeline, metadata, schema and redirects mapped from the old site." },
  { n: "05", title: "Analytics & tracking", body: "Events defined with you so the numbers answer questions instead of counting pageviews." },
  { n: "06", title: "Handover & 30 days", body: "Docs, a recorded walkthrough, and a month of fixes after launch at no extra cost." },
];

export const stack = [
  { title: "Front end", items: ["Next.js (App Router)", "TypeScript", "Tailwind or CSS modules", "Motion for interaction"] },
  { title: "Content", items: ["Sanity / Payload", "Shopify for commerce", "Preview + draft workflows", "Structured, block-based"] },
  { title: "Infrastructure", items: ["Vercel or Cloudflare", "GitHub Actions CI", "Lighthouse budgets", "Immutable rollbacks"] },
  { title: "Data & integrations", items: ["Postgres / Supabase", "Stripe, HubSpot, Cal.com", "REST and webhook APIs", "GA4 + server events"] },
];

export const phases = [
  {
    n: "Phase 01",
    title: "Technical planning",
    body: "We read the designs, agree the content model and write down every integration before a line of code.",
    items: ["Content model", "Integration list", "Performance budget"],
    out: "Output: build plan",
  },
  {
    n: "Phase 02",
    title: "Foundations",
    body: "Repository, pipeline, design tokens and the component library built from the design system.",
    items: ["Repo and CI", "Tokens and components", "Staging URL"],
    out: "Output: live staging",
  },
  {
    n: "Phase 03",
    title: "Pages & content",
    body: "Pages assembled from components and wired to the CMS, so your team can start loading real content early.",
    items: ["All pages built", "CMS wired", "Editor training"],
    out: "Output: editable site",
  },
  {
    n: "Phase 04",
    title: "Integrations & QA",
    body: "Forms, payments and tracking connected, then tested across browsers, devices and screen readers.",
    items: ["Integrations live", "Cross-browser QA", "Accessibility pass"],
    out: "Output: release candidate",
  },
  {
    n: "Phase 05",
    title: "Launch & handover",
    body: "DNS, redirects and monitoring in place, then a walkthrough with whoever keeps it running.",
    items: ["Redirect map", "Monitoring", "Recorded walkthrough"],
    out: "Output: live site + docs",
  },
];

export const work = [
  {
    title: "Hiller Media Group",
    year: "2025",
    img: "/assets/images/work/hiller-media-group.jpg",
    float: 0.02,
    body: "Next.js rebuild with a block CMS. Mobile LCP from 4.2s to 0.9s, and the team now publishes campaigns without us.",
  },
  {
    title: "Creative Triplet",
    year: "2025",
    img: "/assets/images/work/creative-triplet.webp",
    float: -0.02,
    body: "Marketing site plus an AI intake endpoint, deployed on one pipeline so the page and the agent ship together.",
  },
];

export const packages = [
  {
    name: "Landing Build",
    price: "$3.2k",
    unit: "fixed",
    popular: false,
    for: "One page, built fast, wired to your CRM.",
    items: ["Single page from your design", "Form and CRM integration", "Analytics events", "Deployed to your hosting"],
    cta: "Scope a page",
  },
  {
    name: "Marketing Site",
    price: "$7.5k",
    unit: "from",
    popular: true,
    for: "Five to eight pages with a CMS your team actually uses.",
    items: ["Everything in Landing Build", "Up to 8 pages", "Headless CMS modelling", "SEO, redirects and schema", "30 days of post-launch fixes"],
    cta: "Scope a build",
  },
  {
    name: "Web App",
    price: "$14k",
    unit: "from",
    popular: false,
    for: "Authenticated products, dashboards and internal tools.",
    items: ["Auth, roles and permissions", "Database and API design", "Payments and billing", "Automated tests in CI", "Ongoing engineering retainer"],
    cta: "Talk product",
  },
];

export const addon = {
  name: "Care plan",
  price: "$480/mo",
  body: "Dependency updates, uptime and Core Web Vitals monitoring, four hours of changes a month, and a human who answers within a day.",
  cta: "Add care plan",
};

export const faqData = [
  {
    q: "What do you build with?",
    a: "Next.js and TypeScript on Vercel for most marketing sites and products, with a headless CMS your team edits directly. Shopify for commerce, Webflow only when the client explicitly wants to own it in Webflow.",
  },
  {
    q: "Can you build from someone else's design?",
    a: "Yes. We ask for the Figma file and a short handoff call. If the file has no component system we quote a small pass to build one first — it is cheaper than discovering the gaps mid-build.",
  },
  {
    q: "Who owns the code and the hosting?",
    a: "You do, from the first commit. The repository sits in your GitHub organisation and hosting is under your account — we work inside your infrastructure, never hold it hostage.",
  },
  {
    q: "Will our team be able to edit content?",
    a: "That is the point of the CMS work. Every page is modelled as blocks your marketers can add, reorder and publish without a developer, with previews before anything goes live.",
  },
  {
    q: "How do you keep it fast after launch?",
    a: "Performance budgets run in CI, so a merge that slows the site down fails before it ships. The care plan adds monthly Core Web Vitals reporting on real user data.",
  },
  {
    q: "What happens if something breaks at 2am?",
    a: "Care-plan clients get an emergency channel and we roll back to the previous deployment in minutes — every deploy is immutable and reversible.",
  },
];

export const nextUp = [
  { href: "/services/ai-automations", n: "Service 01", title: "AI Automations", tag: "The systems that run the work behind the interface." },
  { href: "/services/website-design", n: "Service 02", title: "Website Design", tag: "The argument and the system this build is made from." },
  { href: "/services/chrome-extensions", n: "Service 04", title: "Chrome Extensions", tag: "Automation inside the tools your team already uses." },
];
