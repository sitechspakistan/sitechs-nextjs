export const facts = [
  { label: "Projects shipped", value: "235 and counting" },
  { label: "Automations live", value: "60+ in production" },
  { label: "Studio age", value: "5 years" },
  { label: "Where", value: "Karachi, global clients" },
];

export const strip = [...Array(2)].flatMap(() => [
  "AI automation",
  "Website development",
  "Website design",
  "Branding",
  "Chrome extensions",
  "Shipped, not concepted",
]);

export const featured = {
  slug: "whatsapp-crm-bot",
  eyebrow: "Featured case study",
  title: "WhatsApp CRM Bot",
  subtitle: "WhatsApp AI automation, wired straight into the CRM.",
  body: "A client came to us with one question: can my CRM talk on WhatsApp? Their customers wanted to raise invoices and check orders without logging in to anything. Now they message an agent, and it is done.",
  tags: ["WhatsApp API", "AI agent", "CRM integration"],
  stats: [
    { value: "70%", label: "Faster response times" },
    { value: "Zero", label: "Repetitive team logins" },
  ],
};

export const beforeAfter = {
  caption: "Creative Triplet — website redesign",
  meta: "Design + build, 2025",
};

export const filterNames = ["All", "AI Automation", "Website Development", "Branding"];

// Curated card copy per case study, matching the source design's archive grid.
export const cards = [
  { slug: "ai-calling-agent-service-agency", body: "A service agency was calling every lead by hand from a spreadsheet. The agent now calls, qualifies and books straight into the calendar.", metric: "Bookings up 3×" },
  { slug: "ai-email-automation", body: "A Google Sheet of enquiries, an AI triage step, and a drafted reply in Gmail before anyone opens their laptop.", metric: "Replies in minutes" },
  { slug: "hiller-media-group", body: "Creator-economy agency site rebuilt around a single campaign CTA, with a CMS the team runs themselves.", metric: "+38% enquiries" },
  { slug: "whatsapp-crm-bot", body: "Customers raise invoices and check orders by messaging an agent on WhatsApp — no CRM login anywhere.", metric: "70% faster replies" },
  { slug: "vezyon-dashboard", body: "A centralised platform for employee attendance, shifts and HR operations, replacing four spreadsheets.", metric: "One source of truth" },
  { slug: "upfeeds", body: "A custom tool that simplifies Upwork job filtering, so the team reviews the right briefs instead of all of them.", metric: "Hours back weekly" },
  { slug: "custom-patch-hats-store", body: "A fully functional storefront for custom patch hats, built for configuration-heavy products.", metric: "Commerce, live" },
  { slug: "creative-triplet", body: "High-end animated explainer agency whose site had to carry the craft. Designed and built end to end.", metric: "Design + build" },
  { slug: "eventshub-dubai", body: "A brand identity that captures the energy and grandeur of Dubai's events scene without the cliché skyline.", metric: "Identity system" },
  { slug: "inizio-solutions", body: "A professional, high-performance website for a consultancy that sells on credibility first.", metric: "Sub-second LCP" },
  { slug: "yfi-brand-logo", body: "A brand identity that felt warm, trustworthy and deeply human for a sensitive category.", metric: "Identity system" },
  { slug: "yfi-website", body: "A warm, faith-filled online presence for a growing community — built on the identity above.", metric: "Brand to build" },
];
