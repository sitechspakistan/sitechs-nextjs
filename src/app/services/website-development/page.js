import Hero from "./Hero";
import TechStackSection from "./TechStackSection";
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
  addon,
  faqData,
  nextUp,
} from "../../../data/services/websiteDevelopment";

export const metadata = {
  title: "Website Development | Sitechs",
  description:
    "Next.js builds that are typed, tested and measurable — wired into your CMS, your CRM and the automation layer behind them.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="svc-page">
      <Hero />
      <Marquee items={strip} />
      <ProblemSection
        eyebrowNum="01"
        eyebrowLabel="Why the build matters"
        title="A design is a promise."
        accentSubhead="The build is whether you keep it."
        body="Good designs die in the build: a four-second hero, a CMS nobody can use, a plugin stack that breaks on update. Fixing that later costs more than building it right once."
        stats={problemStats}
        leftLabel="What we inherit"
        rightLabel="What we build instead"
        rows={problems}
      />
      <IncludedSection
        eyebrowNum="02"
        eyebrowLabel="What's included"
        title="Shipped, measured, and yours to keep."
        intro="One engagement covers the build, the CMS, the integrations and the month after launch."
        items={included}
      />
      <TechStackSection />
      <ProcessTimeline
        eyebrowNum="04"
        eyebrowLabel="How the build runs"
        title="Five phases, four"
        accent="weeks."
        intro="You get a staging URL in week one and it never goes dark — every merge is visible the day it lands."
        steps={phases}
      />
      <WorkSection eyebrowNum="05" eyebrowLabel="Recent builds" title="Live, and still fast." items={work} />
      <PackagesPricing
        eyebrowNum="06"
        eyebrowLabel="Ways in"
        title="Fixed price before we start."
        intro="Scope agreed in writing, repository yours from day one. New scope is quoted, never invoiced quietly."
        packages={packages}
        addon={addon}
      />
      <FaqSection
        eyebrowNum="07"
        eyebrowLabel="FAQ"
        title="Build questions."
        intro="Anything not covered here, ask on the call — we answer stack and hosting questions directly."
        faqData={faqData}
      />
      <NextServiceCards items={nextUp} />
      <CtaBand
        badgeText="Free, 30 minutes, no deck"
        title="Send us the site that is slow."
        body="We will run it live, show you what is costing you seconds, and tell you what we would fix first — rebuild or not."
        primaryLabel="Book a build review"
      />
    </main>
  );
}
