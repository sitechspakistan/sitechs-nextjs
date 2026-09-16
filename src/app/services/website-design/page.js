import Hero from "./Hero";
import Marquee from "../../components/services/Marquee";
import ProblemSection from "../../components/services/ProblemSection";
import IncludedSection from "../../components/services/IncludedSection";
import ProcessTimeline from "../../components/services/ProcessTimeline";
import WorkSection from "../../components/services/WorkSection";
import PackagesPricing from "../../components/services/PackagesPricing";
import FaqSection from "../../components/services/FaqSection";
import NextServiceCards from "../../components/services/NextServiceCards";
import CtaBand from "../../components/services/CtaBand";
import {
  strip,
  problemStats,
  problems,
  included,
  phases,
  work,
  packages,
  faqData,
  nextUp,
} from "../../../data/services/websiteDesign";

export const metadata = {
  title: "Website Design | Sitechs",
  description:
    "Conversion-led website design as a system — page architecture, visual direction and a component library your developers build from without guesswork.",
};

export default function WebsiteDesignPage() {
  return (
    <main className="svc-page">
      <Hero />
      <Marquee items={strip} />
      <ProblemSection
        eyebrowNum="01"
        eyebrowLabel="Why redesign"
        title="You do not need a prettier site."
        accentSubhead="You need one that answers the objection before it is spoken."
        body="Redesigns fail for boring reasons: the homepage tries to speak to everyone, the proof sits three clicks deep, and the form asks for eight fields before earning one. None of that is a taste problem."
        stats={problemStats}
        leftLabel="What we usually find"
        rightLabel="What we design instead"
        rows={problems}
      />
      <IncludedSection
        eyebrowNum="02"
        eyebrowLabel="What's included"
        title="Everything a developer needs, nothing they have to guess."
        intro="One engagement covers strategy, design and the system that keeps it consistent after we leave."
        items={included}
      />
      <ProcessTimeline
        eyebrowNum="03"
        eyebrowLabel="How the design runs"
        title="Five phases, three"
        accent="weeks."
        intro="You approve direction before we build pages, and pages before we build the system — so nothing large is ever a surprise."
        steps={phases}
      />
      <WorkSection eyebrowNum="04" eyebrowLabel="Recent design work" title="Designed, then built." items={work} />
      <PackagesPricing
        eyebrowNum="05"
        eyebrowLabel="Ways in"
        title="Fixed price before we start."
        intro="Scope agreed in writing. If it grows we quote the change — never a surprise invoice."
        packages={packages}
      />
      <FaqSection
        eyebrowNum="06"
        eyebrowLabel="FAQ"
        title="Design questions."
        intro="Anything not covered here, ask on the call — we answer scope and price questions directly."
        faqData={faqData}
      />
      <NextServiceCards items={nextUp} />
      <CtaBand
        badgeText="Free, 30 minutes, no deck"
        title="Show us the page that is not converting."
        body="We will walk through it live and tell you what we would change first, whether or not you hire us."
        primaryLabel="Book a design review"
      />
    </main>
  );
}
