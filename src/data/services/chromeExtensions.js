export const stepData = [
  { text: "Page read — 9 fields", ms: "40ms" },
  { text: "Enriched from Clearbit", ms: "310ms" },
  { text: "Deduped against CRM", ms: "120ms" },
  { text: "Written to HubSpot", ms: "260ms" },
];

export const miniStats = [
  { value: "3 wks", label: "Typical build" },
  { value: "1 click", label: "Instead of 9 fields" },
  { value: "18", label: "Extensions shipped" },
];

export const heroChips = ["Manifest V3", "Private or public", "Source in your repo"];

export const facts = [
  { label: "Timeline", value: "3 weeks typical" },
  { label: "From", value: "$2,600 fixed" },
  { label: "Deliverable", value: "Repo + packaged build" },
  { label: "Distribution", value: "Private or Web Store" },
];

export const strip = [...Array(2)].flatMap(() => [
  "Manifest V3",
  "Internal distribution",
  "Web Store listing",
  "Scraping & capture",
  "CRM sync",
  "Workflow overlays",
]);

export const problemStats = [
  { value: "1 hr", label: "Saved per seat, per day" },
  { value: "18", label: "Extensions released" },
];

export const problems = [
  { n: "01", bad: "Copying nine fields into the CRM", good: "One click on the page they were already reading" },
  { n: "02", bad: "A spreadsheet that never gets updated", good: "Capture written straight to the system of record" },
  { n: "03", bad: "Training people to open another tool", good: "The workflow appears in the tab they already use" },
  { n: "04", bad: "Shadow scripts pasted into the console", good: "A reviewed, versioned extension IT can approve" },
];

export const included = [
  { n: "01", title: "Workflow mapping", body: "We watch the actual clicks, then decide what the extension should take over and what it must leave alone." },
  { n: "02", title: "Popup & overlay UI", body: "Designed to the same standard as a product surface — states, errors and keyboard access included." },
  { n: "03", title: "Capture & enrichment", body: "Reading the page reliably, enriching from your data or third-party APIs, deduping before it writes." },
  { n: "04", title: "Backend & auth", body: "A small service so API keys never live in the browser, with per-user access logged." },
  { n: "05", title: "Permissions & review", body: "Narrow scopes, written justification, listing assets, and we handle Web Store submission." },
  { n: "06", title: "Rollout & updates", body: "Workspace policy install or public listing, plus the update channel so fixes land silently." },
];

export const uses = [
  { label: "Capture", title: "Prospect and lead capture", body: "Pull a profile, company or listing off the page, enrich it and file it in the CRM without a tab switch.", note: "Most requested" },
  { label: "Overlay", title: "Context inside someone else's app", body: "Show your internal data — pricing, stock, account history — on top of the portal your team works in.", note: "No vendor API needed" },
  { label: "Automate", title: "Repetitive form filling", body: "Multi-step submissions on supplier or government portals, driven from your own records.", note: "Hours back per week" },
  { label: "Monitor", title: "Watch and alert", body: "Track pages that change — prices, tenders, compliance notices — and push alerts into Slack or email.", note: "Runs in the background" },
];

export const phases = [
  {
    n: "Phase 01",
    title: "Workflow discovery",
    body: "A screen-share of the real task, timed. We come back with what is automatable and what is not worth it.",
    items: ["Task walkthrough", "Feasibility on the host page", "Permission scope"],
    out: "Output: scoped brief",
  },
  {
    n: "Phase 02",
    title: "Prototype on the real page",
    body: "A rough unpacked build running against your actual target site, so the hard part is proven in week one.",
    items: ["Unpacked build", "Selector strategy", "Data contract"],
    out: "Output: working proof",
  },
  {
    n: "Phase 03",
    title: "UI & backend",
    body: "Popup, overlay and options built out, backend and auth wired, real records written.",
    items: ["Popup and overlay", "Auth and API", "Error states"],
    out: "Output: feature-complete",
  },
  {
    n: "Phase 04",
    title: "Hardening & review prep",
    body: "Edge cases, rate limits and failure handling, then the permission rationale and listing assets.",
    items: ["Edge-case QA", "Permission rationale", "Listing assets"],
    out: "Output: submission pack",
  },
  {
    n: "Phase 05",
    title: "Rollout",
    body: "Published privately through Workspace policy or publicly to the Web Store, with update channel live.",
    items: ["Distribution set up", "Team walkthrough", "Update channel"],
    out: "Output: installed on every laptop",
  },
];

export const packages = [
  {
    name: "Single Task",
    price: "$2.6k",
    unit: "fixed",
    popular: false,
    for: "One job done well — capture, fill or alert.",
    items: ["One workflow automated", "Popup UI", "Private distribution", "Source in your repo"],
    cta: "Scope a task",
  },
  {
    name: "Team Extension",
    price: "$5.4k",
    unit: "from",
    popular: true,
    for: "Several workflows, real auth, rolled out to a whole team.",
    items: ["Up to 3 workflows", "Overlay and popup UI", "Backend and per-user auth", "Workspace policy rollout", "30 days of fixes"],
    cta: "Scope an extension",
  },
  {
    name: "Web Store Product",
    price: "$11k",
    unit: "from",
    popular: false,
    for: "A public extension you sell or give away at scale.",
    items: ["Onboarding and settings", "Billing and licence checks", "Listing, assets and review", "Analytics and crash reporting", "Ongoing release support"],
    cta: "Talk product",
  },
];

export const addon = {
  name: "Maintenance",
  price: "$320/mo",
  body: "Chrome ships every four weeks and host pages change without warning. We watch for breakage, keep the manifest current and handle re-review when policies move.",
  cta: "Add maintenance",
};

export const faqData = [
  {
    q: "Does it have to go on the Chrome Web Store?",
    a: "No. Internal tools are usually distributed privately through Google Workspace policy, so only your domain gets it and updates roll out silently. Public listing is an option, not a requirement.",
  },
  {
    q: "How long does Web Store review take?",
    a: "Usually two to five working days for a first submission, longer if you request broad host permissions. We write the listing and justification with review in mind, which is what keeps it short.",
  },
  {
    q: "What about permissions and security review?",
    a: "We request the narrowest permissions that do the job, document why each one exists, and keep credentials out of the extension itself. Most security teams sign off on the permission rationale document without a second pass.",
  },
  {
    q: "Will it break when the host site changes?",
    a: "Sometimes — that is the nature of working inside someone else's page. We build selectors defensively and the maintenance plan covers detection and repair, usually before your team notices.",
  },
  {
    q: "Does it work in Edge, Brave and Arc?",
    a: "Yes. They all run Chromium extensions from the same codebase. Firefox and Safari need a separate packaging pass, which we quote if you need them.",
  },
  {
    q: "Can it talk to our internal systems?",
    a: "That is the common case. The extension talks to a small backend we host or you host, so API keys never sit in the browser and access is logged per user.",
  },
];

export const nextUp = [
  { href: "/services/ai-automations", n: "Service 01", title: "AI Automations", tag: "The agents that act on what the extension captures." },
  { href: "/services/website-design", n: "Service 02", title: "Website Design", tag: "The argument your site has to make before any of this." },
  { href: "/services/website-development", n: "Service 03", title: "Website Development", tag: "The Next.js build behind the interface." },
];
