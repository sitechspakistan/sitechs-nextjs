import Hero from "./Hero";
import ServiceBands from "./ServiceBands";
import Marquee from "../components/services/Marquee";
import ProcessTimeline from "../components/services/ProcessTimeline";
import FaqSection from "../components/services/FaqSection";
import CtaBand from "../components/services/CtaBand";
import { strip, steps, faqData } from "../../data/services/index";

export const metadata = {
  title: "Services | Sitechs",
  description:
    "Four services, one operating system: AI automations, website design, website development and Chrome extensions.",
};

export default function ServicesPage() {
  return (
    <main className="svc-page">
      <Hero />
      <Marquee items={strip} />
      <ServiceBands />
      <ProcessTimeline
        eyebrowNum="05"
        eyebrowLabel="Our process"
        title="Audit to running"
        accent="system."
        intro="Four weeks. No discovery theatre, no status decks — you see the real thing running every Friday, from week one."
        steps={steps}
      />
      <FaqSection
        eyebrowNum="08"
        eyebrowLabel="FAQ"
        title="Before you ask."
        intro="Not sure which service you need? Describe the problem on a call — we will tell you which one it is, or that you do not need us."
        faqData={faqData}
      />
      <CtaBand
        badgeText="Free, 30 minutes, no deck"
        title="Tell us where the time goes."
        body="We will come back with the three processes worth automating first, what each is worth, and what it takes to build."
        primaryLabel="Book a free audit"
      />
    </main>
  );
}
