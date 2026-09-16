import Hero from "./Hero";
import UseCasesSection from "./UseCasesSection";
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
  included,
  phases,
  packages,
  addon,
  faqData,
  nextUp,
} from "../../../data/services/chromeExtensions";

export const metadata = {
  title: "Chrome Extensions | Sitechs",
  description:
    "Manifest V3 Chrome extensions that capture, enrich and file data where your team already works — private or published on the Web Store.",
};

export default function ChromeExtensionsPage() {
  return (
    <main className="svc-page">
      <Hero />
      <Marquee items={strip} />
      <ProblemSection
        eyebrowNum="01"
        eyebrowLabel="Why an extension"
        title="Nobody opens the tool you bought."
        accentSubhead="So put the workflow where their cursor already is."
        body="Every internal portal, dashboard and CRM loses the same battle: the work happens in a browser tab somewhere else, and the data gets copied across by hand — or not at all."
        stats={problemStats}
        leftLabel="How the work runs today"
        rightLabel="What the extension does"
        rows={problems}
      />
      <IncludedSection
        eyebrowNum="02"
        eyebrowLabel="What's included"
        title="Built, reviewed, and rolled out."
        intro="Including the parts teams forget: permissions, review submission and how it reaches every laptop."
        items={included}
      />
      <UseCasesSection />
      <ProcessTimeline
        eyebrowNum="04"
        eyebrowLabel="How the build runs"
        title="Five phases, three"
        accent="weeks."
        intro="You load an unpacked build on day four and use it against real pages while we are still writing it."
        steps={phases}
      />
      <PackagesPricing
        eyebrowNum="05"
        eyebrowLabel="Ways in"
        title="Fixed price before we start."
        intro="Scope agreed in writing, source in your repository, Web Store listing under your developer account."
        packages={packages}
        addon={addon}
      />
      <FaqSection
        eyebrowNum="06"
        eyebrowLabel="FAQ"
        title="Extension questions."
        intro="Anything not covered here, ask on the call — permissions and review questions especially."
        faqData={faqData}
      />
      <NextServiceCards items={nextUp} />
      <CtaBand
        badgeText="Free, 30 minutes, no deck"
        title="Show us the tab your team lives in."
        body="Walk us through the copy-paste that happens fifty times a day and we will tell you what an extension could take off their hands."
        primaryLabel="Book a workflow review"
      />
    </main>
  );
}
