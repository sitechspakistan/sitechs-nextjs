import Hero from "./Hero";
import FeaturedCase from "./FeaturedCase";
import SavingsCalculator from "./SavingsCalculator";
import Marquee from "../../components/services/Marquee";
import ProblemSection from "../../components/services/ProblemSection";
import IncludedSection from "../../components/services/IncludedSection";
import ProcessTimeline from "../../components/services/ProcessTimeline";
import PackagesPricing from "../../components/services/PackagesPricing";
import FaqSection from "../../components/services/FaqSection";
import NextServiceCards from "../../components/services/NextServiceCards";
import CtaBand from "../../components/services/CtaBand";
import {
  strip,
  problemStats,
  problems,
  builds,
  phases,
  packages,
  faqData,
  nextUp,
} from "../../../data/services/aiAutomations";

export const metadata = {
  title: "AI Automations | Sitechs",
  description:
    "AI agents, chatbots and workflow automation that take the repeatable share of your team's work — built on your data, inside your tools.",
};

export default function AiAutomationsPage() {
  return (
    <main className="svc-page">
      <Hero />
      <Marquee items={strip} />
      <ProblemSection
        eyebrowNum="01"
        eyebrowLabel="Why automate"
        title="Your team is the bottleneck by design."
        accentSubhead="Not because they are slow — because they are the only ones who can act."
        body="Leads go cold overnight. Approvals wait for someone to open their laptop. Data is retyped between four systems that never agreed to talk. None of that needs a bigger headcount."
        stats={problemStats}
        leftLabel="The friction we find"
        rightLabel="What the system does instead"
        rows={problems}
      />
      <IncludedSection
        eyebrowNum="02"
        eyebrowLabel="What we build"
        title="Six systems, built to your business."
        intro="Purpose-built automation, not a template workflow with your logo on it."
        items={builds}
      />
      <FeaturedCase />
      <ProcessTimeline
        eyebrowNum="04"
        eyebrowLabel="How it works"
        title="Six steps, pilot live in"
        accent="weeks."
        intro="One workflow goes live before we scope the next, so value arrives before the invoice does."
        steps={phases}
      />
      <SavingsCalculator />
      <PackagesPricing
        eyebrowNum="06"
        eyebrowLabel="Investment"
        title="Pricing that scales with you."
        intro="A ballpark before we talk. Every project gets a custom quote after the free audit."
        packages={packages}
      />
      <FaqSection
        eyebrowNum="07"
        eyebrowLabel="FAQ"
        title="Automation questions."
        intro="Anything not covered here, ask on the audit call — data and security questions especially."
        faqData={faqData}
      />
      <NextServiceCards items={nextUp} />
      <CtaBand
        id="audit"
        badgeText="Free audit, 30 minutes, no deck"
        title="Tell us the task nobody wants to do."
        body="We will map where automation pays off first, what it would cost and what it would save — whether or not you hire us."
        primaryLabel="Get your free audit"
        primaryHref="#audit"
      />
    </main>
  );
}
