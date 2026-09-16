export const heroChips = ["Lead response 2 days → 11 min", "Figma → Next.js", "Shipped 2025"];

export const facts = [
  { label: "Timeline", value: "3 weeks typical" },
  { label: "From", value: "$4,800 fixed" },
  { label: "Deliverable", value: "Figma + system" },
  { label: "Revisions", value: "2 rounds per phase" },
];

export const strip = [...Array(2)].flatMap(() => [
  "UX & information architecture",
  "Design systems",
  "Landing pages",
  "Brand application",
  "Prototyping",
  "Conversion design",
]);

export const problemStats = [
  { value: "11 min", label: "Lead reply, was 2 days" },
  { value: "+38%", label: "Enquiry conversion" },
];

export const problems = [
  { n: "01", bad: "Homepage speaks to everyone", good: "One audience, one decision, one path through the page" },
  { n: "02", bad: "Proof buried three clicks deep", good: "Results and client names placed where the doubt appears" },
  { n: "03", bad: "Eight-field contact form", good: "One question that earns the right to ask the next" },
  { n: "04", bad: "Design handed over as pictures", good: "A component system with every state documented" },
];

export const included = [
  { n: "01", title: "Positioning & page architecture", body: "What each page has to prove, in what order, before any visual work starts." },
  { n: "02", title: "Visual direction", body: "Two directions explored properly, one taken forward — type, colour, imagery and tone." },
  { n: "03", title: "Full page design", body: "Every page designed for desktop and mobile, including empty, error and loading states." },
  { n: "04", title: "Component library", body: "Buttons, cards, forms and navigation documented with variants and behaviour." },
  { n: "05", title: "Copy direction", body: "Headline intent and message hierarchy written per section, ready for your writer or ours." },
  { n: "06", title: "Developer handoff", body: "Annotated specs, tokens, assets and a recorded walkthrough so nothing is guessed." },
];

export const phases = [
  {
    n: "Phase 01",
    title: "Audit & positioning",
    body: "We review the current site, your analytics and your sales calls to find where the argument breaks down.",
    items: ["Heuristic audit", "Analytics review", "Message hierarchy"],
    out: "Output: positioning brief",
  },
  {
    n: "Phase 02",
    title: "Architecture & wireframes",
    body: "Page-by-page structure in low fidelity, so we argue about order and emphasis before pixels.",
    items: ["Sitemap", "Section-level wireframes", "Content requirements"],
    out: "Output: approved structure",
  },
  {
    n: "Phase 03",
    title: "Visual direction",
    body: "Two directions on the real hero and one inner page. You pick one; we do not design by committee after this.",
    items: ["Two concepts", "Type and colour system", "Imagery direction"],
    out: "Output: signed direction",
  },
  {
    n: "Phase 04",
    title: "Full design",
    body: "All pages designed out, desktop and mobile, with motion notes for anything that moves.",
    items: ["Desktop and mobile", "States and edge cases", "Motion notes"],
    out: "Output: complete design",
  },
  {
    n: "Phase 05",
    title: "System & handoff",
    body: "The components extracted, documented and walked through with whoever builds it.",
    items: ["Component library", "Tokens and assets", "Recorded walkthrough"],
    out: "Output: build-ready system",
  },
];

export const work = [
  {
    title: "Hiller Media Group",
    year: "2025",
    img: "/assets/images/work/hiller-media-group.jpg",
    float: 0.02,
    body: "Creator-economy agency site rebuilt around a single campaign CTA. Enquiry conversion up 38% in one quarter.",
  },
  {
    title: "Creative Triplet",
    year: "2025",
    img: "/assets/images/work/creative-triplet.webp",
    float: -0.02,
    body: "Brand site and AI intake designed together, so the page and the agent behind it tell the same story.",
  },
];

export const packages = [
  {
    name: "Landing Page",
    price: "$2.4k",
    unit: "fixed",
    popular: false,
    for: "One page that has to carry a campaign or a launch.",
    items: ["Positioning and structure", "Desktop and mobile design", "Copy direction", "Developer handoff"],
    cta: "Scope a page",
  },
  {
    name: "Marketing Site",
    price: "$4.8k",
    unit: "from",
    popular: true,
    for: "Five to eight pages, plus the system that keeps them consistent.",
    items: [
      "Everything in Landing Page",
      "Up to 8 pages designed",
      "Component library documented",
      "Two rounds per phase",
      "Recorded walkthrough",
    ],
    cta: "Scope a site",
  },
  {
    name: "Product & App UI",
    price: "$9k",
    unit: "from",
    popular: false,
    for: "Dashboards and product interfaces where states matter more than pages.",
    items: ["Flows and IA", "Full UI kit with variants", "Empty, error and loading states", "Prototype for user testing", "Ongoing design support"],
    cta: "Talk product",
  },
];

export const faqData = [
  {
    q: "Do you write the copy too?",
    a: "We write copy direction for every section — the argument, the headline intent and the proof each block needs. If you want finished long-form copy we bring in a writer we trust, quoted separately.",
  },
  {
    q: "Can you work with our existing brand?",
    a: "Yes, and most clients want that. We work inside your logo, palette and type unless something is actively hurting legibility or conversion — then we say so and show the alternative.",
  },
  {
    q: "What do we actually receive at the end?",
    a: "A Figma file with desktop and mobile designs for every page, a documented component library with states, copy direction, and a walkthrough recording for your developers. You own all of it.",
  },
  {
    q: "Do you build it as well?",
    a: "Usually. Most clients continue into a Next.js build with us, which is faster because the same team designed the system. If you have in-house developers, the handoff is built for them.",
  },
  {
    q: "How many rounds of revisions?",
    a: "Two structured rounds per phase, which is enough because direction is approved before pages and pages before the system. Extra rounds are billed hourly and rarely needed.",
  },
  {
    q: "How long until we see something?",
    a: "Direction concepts land in week one. Full page designs by the end of week two. Component system and handoff in week three, on a typical marketing site.",
  },
];

export const nextUp = [
  { href: "/services/ai-automations", n: "Service 01", title: "AI Automations", tag: "The systems that run the work behind the interface." },
  { href: "/services/website-development", n: "Service 03", title: "Website Development", tag: "The Next.js build that turns this design into a site." },
  { href: "/services/chrome-extensions", n: "Service 04", title: "Chrome Extensions", tag: "Automation inside the tools your team already uses." },
];
