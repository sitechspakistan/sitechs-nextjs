import Hero from "./Hero";
import DecaySection from "./DecaySection";
import ShiftSection from "./ShiftSection";
import FitSection from "./FitSection";
import HowItWorksSection from "./HowItWorksSection";
import Marquee from "../components/services/Marquee";
import PackagesPricing from "../components/services/PackagesPricing";
import FaqSection from "../components/services/FaqSection";
import CtaBand from "../components/services/CtaBand";
import { strip, packages, faqData } from "../../data/carePlans";

export const metadata = {
  title: "Website Care Plans | Sitechs",
  description:
    "Ongoing WordPress, Shopify and custom development support, so your site stays fast, secure and optimised for conversions every month.",
};

export default function WebsiteCarePlansPage() {
  return (
    <main className="svc-page">
      <Hero />
      <Marquee items={strip} />
      <DecaySection />
      <ShiftSection />
      <PackagesPricing
        eyebrowNum="03"
        eyebrowLabel="Care & growth plans"
        title="Three plans, one direction."
        intro="Flexible monthly plans designed to keep your website secure, fast and growing. Move up or down as the work changes."
        packages={packages}
        ctaHref="#contact"
      />
      <FitSection />
      <HowItWorksSection />
      <FaqSection
        eyebrowNum="05"
        eyebrowLabel="FAQ"
        title="Care plan questions."
        intro="Anything not covered here, ask on the call — we answer scope and commitment questions directly."
        faqData={faqData}
      />
      <CtaBand
        badgeText="Free, 30 minutes, no deck"
        title="Let us look after it from here."
        body="Send us the URL. We will audit it live, tell you what is decaying and which plan actually fits — or that you do not need one yet."
        primaryLabel="Start a care plan"
        primaryHref="#plans"
      />
    </main>
  );
}
