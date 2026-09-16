export const navLinks = [
  { href: "/case-studies", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/website-care-plans", label: "Care Plans" },
  { href: "/blog", label: "Blog" },
];

export const industryPlaceholders = [
  "dental clinic",
  "law firm",
  "e-commerce",
  "real estate",
  "logistics",
  "SaaS",
  "recruiting",
  "hospitality",
  "construction",
  "your industry",
];

export const industryMap = [
  {
    keys: ["dental", "dentist", "clinic", "medical", "doctor", "health", "hospital"],
    label: "dental clinics",
    eta: "Most go live in 2–4 weeks",
    lead: "Here is what we would automate first for a dental clinic. Pick the one that hurts most.",
    ideas: [
      { title: "No-show recall agent", body: "Texts patients who miss or cancel, offers the next open slot and books it into your practice software.", foot: "~3 weeks · saves 6 hrs/wk" },
      { title: "New-patient intake", body: "Forms, insurance details and history collected and verified before they walk in, filed to the right chart.", foot: "~3 weeks · saves 8 hrs/wk" },
      { title: "Treatment follow-up", body: "Unaccepted treatment plans followed up on a schedule, with answers to the usual cost questions.", foot: "~2 weeks · lifts case acceptance" },
    ],
  },
  {
    keys: ["law", "legal", "attorney", "lawyer", "firm"],
    label: "law firms",
    eta: "Most go live in 3–4 weeks",
    lead: "Here is what we would automate first for a law firm. Pick the one that hurts most.",
    ideas: [
      { title: "Enquiry screening agent", body: "Every enquiry screened against your matter criteria and conflict-checked, then scheduled or politely declined.", foot: "~4 weeks · saves 10 hrs/wk" },
      { title: "Document intake & summary", body: "Client documents read, classified and summarised into the matter file with key dates extracted.", foot: "~4 weeks · saves 7 hrs/wk" },
      { title: "Billing chase", body: "Unbilled time flagged weekly and invoices followed up automatically until paid.", foot: "~2 weeks · faster collection" },
    ],
  },
  {
    keys: ["ecommerce", "e-commerce", "shop", "store", "retail", "shopify", "brand", "dtc"],
    label: "e-commerce brands",
    eta: "Most go live in 2–4 weeks",
    lead: "Here is what we would automate first for an e-commerce brand. Pick the one that hurts most.",
    ideas: [
      { title: "Support & WISMO agent", body: "Order status, returns and shipping questions answered from your live data — humans see only exceptions.", foot: "~3 weeks · deflects 70% of tickets" },
      { title: "Returns triage", body: "Return requests assessed against policy, approved or escalated, labels issued without a human.", foot: "~3 weeks · saves 6 hrs/wk" },
      { title: "Win-back sequences", body: "Browse and cart behaviour turned into timed, personal follow-ups that sound like your brand.", foot: "~2 weeks · lifts repeat rate" },
    ],
  },
  {
    keys: ["real estate", "realtor", "property", "realty", "broker", "mortgage", "loan"],
    label: "real estate teams",
    eta: "Most go live in 2–3 weeks",
    lead: "Here is what we would automate first for a real estate team. Pick the one that hurts most.",
    ideas: [
      { title: "Instant lead response", body: "Portal enquiries enriched, scored and answered in minutes, then routed to the agent who covers that area.", foot: "~2 weeks · first to reply, always" },
      { title: "Viewing scheduler", body: "Availability negotiated with buyer and vendor, confirmed in both calendars, reminders handled.", foot: "~3 weeks · saves 8 hrs/wk" },
      { title: "Nurture for cold leads", body: "Old enquiries revived with listings that actually match what they asked for months ago.", foot: "~2 weeks · reactivates dead lists" },
    ],
  },
  {
    keys: ["logistics", "freight", "shipping", "transport", "trucking", "supply"],
    label: "logistics operators",
    eta: "Most go live in 3–4 weeks",
    lead: "Here is what we would automate first for a logistics operator. Pick the one that hurts most.",
    ideas: [
      { title: "Document processing", body: "Bills of lading, PODs and invoices read, matched to the load and filed — nobody retypes a number.", foot: "~4 weeks · saves 12 hrs/wk" },
      { title: "Status update agent", body: "Customer 'where is my load' questions answered from your TMS, around the clock.", foot: "~3 weeks · deflects 60% of calls" },
      { title: "Exception alerts", body: "Delays, detention and missing paperwork flagged to the right person before the customer notices.", foot: "~2 weeks · fewer claims" },
    ],
  },
  {
    keys: ["saas", "software", "startup", "app", "tech", "product"],
    label: "SaaS teams",
    eta: "Most go live in 2–3 weeks",
    lead: "Here is what we would automate first for a SaaS team. Pick the one that hurts most.",
    ideas: [
      { title: "Trial-to-paid nudges", body: "Usage signals trigger the right message at the right moment, so sales only sees real buyers.", foot: "~3 weeks · lifts conversion" },
      { title: "Support deflection", body: "Docs, changelog and past tickets turned into an agent that answers first and escalates cleanly.", foot: "~3 weeks · deflects 50% of tickets" },
      { title: "Churn-risk watch", body: "Usage drops detected early and routed to CS with the context needed to save the account.", foot: "~2 weeks · earlier saves" },
    ],
  },
  {
    keys: ["recruit", "staffing", "hr", "hiring", "talent", "agency"],
    label: "recruiting agencies",
    eta: "Most go live in 2–3 weeks",
    lead: "Here is what we would automate first for a recruiting agency. Pick the one that hurts most.",
    ideas: [
      { title: "Application screening", body: "Every CV parsed, matched to the brief and shortlisted with written reasoning you can defend.", foot: "~3 weeks · saves 12 hrs/wk" },
      { title: "Candidate re-engagement", body: "Your existing database mined for matches whenever a new brief lands.", foot: "~2 weeks · placements from old data" },
      { title: "Interview coordination", body: "Slots negotiated between client and candidate, confirmed, reminded and rescheduled automatically.", foot: "~2 weeks · saves 7 hrs/wk" },
    ],
  },
  {
    keys: ["restaurant", "cafe", "hospitality", "hotel", "travel", "tour", "booking"],
    label: "hospitality and travel",
    eta: "Most go live in 2–3 weeks",
    lead: "Here is what we would automate first for a hospitality or travel business. Pick the one that hurts most.",
    ideas: [
      { title: "Enquiry & quoting agent", body: "Availability questions and quotes answered day or night, in the guest's language.", foot: "~3 weeks · books while you sleep" },
      { title: "Review generation", body: "Timed, personal review requests after checkout, with unhappy guests routed to you first.", foot: "~2 weeks · more 5-star volume" },
      { title: "Upsell sequences", body: "Pre-arrival offers matched to booking type — rooms, tables, tours, transfers.", foot: "~2 weeks · lifts spend per guest" },
    ],
  },
  {
    keys: ["construction", "contractor", "trades", "manufactur", "field"],
    label: "construction firms",
    eta: "Most go live in 3–4 weeks",
    lead: "Here is what we would automate first for a construction firm. Pick the one that hurts most.",
    ideas: [
      { title: "Quote assembly", body: "Site notes and supplier prices pulled into a consistent estimate, ready for your sign-off the same day.", foot: "~4 weeks · quotes out 5x faster" },
      { title: "Site report capture", body: "Photos and voice notes from the field turned into structured daily reports clients can read.", foot: "~3 weeks · saves 6 hrs/wk" },
      { title: "Subcontractor comms", body: "Schedules, variations and document requests chased automatically until answered.", foot: "~3 weeks · fewer delays" },
    ],
  },
];

export const genericPlan = {
  label: "your operation",
  eta: "Most go live in 2–4 weeks",
  lead: "Tell us your industry above for a tailored set — or start from the three that fit almost every business.",
  ideas: [
    { title: "Instant enquiry response", body: "Every enquiry enriched, answered and routed within minutes, on any channel, at any hour.", foot: "~2 weeks · first to reply, always" },
    { title: "Inbox & ticket triage", body: "Incoming mail read, categorised, answered where it is routine and escalated where it is not.", foot: "~3 weeks · saves 8 hrs/wk" },
    { title: "Reporting that writes itself", body: "Numbers pulled from your tools into the report you currently rebuild by hand every week.", foot: "~2 weeks · saves 6 hrs/wk" },
  ],
};

export const ownIdea = {
  title: "I already know what to automate",
  body: "Have something specific in mind? Describe it and we will tell you what it takes to build.",
  foot: "Tell us in one line",
};

export const clientLogos = [
  { src: "/assets/images/clients/1.png", name: "Creative Triplet" },
  { src: "/assets/images/clients/2.png", name: "Your Friend Infertility" },
  { src: "/assets/images/clients/3.png", name: "EventsHub" },
  { src: "/assets/images/clients/4.png", name: "My Story" },
  { src: "/assets/images/clients/5.png", name: "Relentless Triggers" },
  { src: "/assets/images/clients/6.png", name: "Crafty Words" },
  { src: "/assets/images/clients/7.png", name: "Mortgage Loan Originators" },
  { src: "/assets/images/clients/8.png", name: "Chica Travelista" },
  { src: "/assets/images/clients/9.png", name: "Travelista Travels" },
];

export const workData = [
  { img: "/assets/images/work/creative-triplet.webp", title: "Creative Triplet", href: "/case-studies/creative-triplet", year: "2025", metric: "2 days → 11 min", result: "Agent-driven intake replaced a manual lead queue: enquiries are scored, routed and answered before a human opens the inbox.", chips: ["AI automation", "Website"] },
  { img: "/assets/images/work/hiller-media-group.jpg", title: "Hiller Media Group", href: "/case-studies/hiller-media-group", year: "2025", metric: "+38% enquiry conversion", result: "Creator-economy agency site rebuilt around one campaign CTA, with enquiry routing automated end to end.", chips: ["Website design", "Next.js"] },
  { img: "/assets/images/work/vezuon-hr.jpg", title: "Vezuon HR", href: "/case-studies/vezyon-dashboard", year: "2024", metric: "21 staff, zero spreadsheets", result: "Attendance, applications and shift data pulled into one dashboard that fetches from the device log automatically.", chips: ["Dashboard", "Automation"] },
  { img: "/assets/images/work/upfeeds.jpg", title: "UpFeeds", href: "/case-studies/upfeeds", year: "2024", metric: "1 hr/day per agent", result: "Keyword-driven job feeds with an in-browser tool that captures, filters and files opportunities as they appear.", chips: ["Extension", "Automation"] },
].map((w, i) => ({
  ...w,
  n: String(i + 1).padStart(2, "0"),
  plate: i % 2 ? "#E4DFD6" : "#E9E5DC",
  offset: i % 2 ? "56px" : "0px",
  drift: i % 2 ? -0.045 : 0.03,
}));

export const servicesData = [
  { num: "01", title: "AI Automations", href: "/services/ai-automations", flagship: true, body: "Cut 20+ hours of manual operations a week. AI agents and pipelines for lead qualification, support triage, document processing and reporting that writes itself.", points: ["AI agents & assistants", "Workflow automation", "RAG & internal search"] },
  { num: "02", title: "Website Design", href: "/services/website-design", flagship: false, body: "Conversion-led design and UX as one system — brand, page architecture and a component library your developers build from without guesswork.", points: ["UX & IA", "Design systems", "Landing pages"] },
  { num: "03", title: "Website Development", href: "/services/website-development", flagship: false, body: "Next.js builds that ship fast and stay fast: typed, tested, accessible and wired straight into the automation layer behind them.", points: ["Next.js & headless CMS", "Performance budgets", "CRM integration"] },
  { num: "04", title: "Chrome Extensions", href: "/services/chrome-extensions", flagship: false, body: "Put automation inside the tools your team already lives in, so nobody has to learn a new dashboard to get the benefit.", points: ["Internal tools", "Data capture", "Web Store release"] },
];

export const statsData = [
  { to: 235, suffix: "+", label: "Products shipped" },
  { to: 12, suffix: "+", label: "Years in business" },
  { to: 140, suffix: "+", label: "Clients worldwide" },
  { to: 14, suffix: "", label: "Countries served" },
];

export const stepsData = [
  { n: "Week 01", title: "Discovery", body: "We audit your workflows and time-cost every manual step worth removing.", out: "Output: opportunity map" },
  { n: "Week 02", title: "Strategy", body: "A prioritised plan: what an agent handles, what a human keeps, what it is worth.", out: "Output: automation spec" },
  { n: "Week 03", title: "Build & automate", body: "Pipelines, agents and the interface layer built in parallel, demoed weekly.", out: "Output: working pilot" },
  { n: "Week 04", title: "Launch & tune", body: "Monitoring, guardrails and iteration against real throughput data.", out: "Output: live system" },
];

export const plansData = [
  { name: "Starter Care", price: "$299", unit: "/ month", popular: false, for: "Keeps your website stable, secure and quietly looked after.", items: ["Updates & security patching", "Bug fixes", "Daily backups", "Basic support"], cta: "Get started" },
  { name: "Growth Optimization", price: "$299–$599", unit: "/ month", popular: true, for: "For improving performance and conversions every month.", items: ["Everything in Starter", "Monthly development hours", "Landing page updates", "Speed optimization", "Conversion improvements"], cta: "Get started" },
  { name: "Agency Partner", price: "$800–$2,000+", unit: "/ month", popular: false, for: "For agencies and scaling businesses that need a development partner.", items: ["Dedicated developer hours", "Priority support", "Custom development", "Funnel improvements", "White-label support option"], cta: "Get started" },
];

export const convoStats = [
  { value: "< 10s", label: "First reply, any hour" },
  { value: "3×", label: "More booked calls" },
  { value: "24/7", label: "Never off, never rude" },
];

export const quotesData = [
  { text: "Response time went from two days to eleven minutes. Nobody on my team touches it.", name: "Creative Triplet", role: "Chief Executive Officer", initials: "CT" },
  { text: "They automated our reporting, then designed the dashboard around it. Two roles went back to real work.", name: "Relentless Triggers", role: "Founder", initials: "RT" },
  { text: "The extension they shipped saves each agent an hour a day. Twelve years of experience shows in the details.", name: "EventsHub", role: "Head of Operations", initials: "EH" },
];

export const faqData = [
  { q: "Where does AI automation actually fit in my business?", a: "Anywhere a person repeats a decision with rules behind it: qualifying leads, triaging tickets, reading documents, building reports. On the audit call we time-cost those steps and tell you which are worth automating — and which are not." },
  { q: "How fast can you ship something real?", a: "An automation pilot goes live in two to four weeks. A full design and build runs six to ten weeks depending on scope and content readiness. You see working software every week, not status decks." },
  { q: "Do you work with startups or established companies?", a: "Both. Roughly half our work is founder-led teams under twenty people; the rest are established companies replacing manual back-office processes." },
  { q: "Can you take over an existing site or system?", a: "Yes. We audit what exists, keep what earns its place, and rebuild the rest — usually in Next.js, with your content migrated." },
  { q: "What happens after launch?", a: "Automations get monitoring, guardrails and a monthly tuning window. Sites get a support retainer or a clean documented handoff, whichever you prefer." },
];

export const stripItems = [...Array(2)].flatMap(() => [
  "AI automations",
  "Website design",
  "Website development",
  "Chrome extensions",
  "12 years shipping",
  "235 products",
]);

export const ctaStripItems = [...Array(2)].flatMap(() => [
  "Book a call",
  "Free automation audit",
  "Fixed scope",
  "Weekly demos",
  "Ship in 4 weeks",
]);
