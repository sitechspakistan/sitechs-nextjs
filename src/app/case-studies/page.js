import Hero from "./Hero";
import FeaturedCase from "./FeaturedCase";
import BeforeAfterSection from "./BeforeAfterSection";
import ArchiveSection from "./ArchiveSection";
import Marquee from "../components/services/Marquee";
import CtaBand from "../components/services/CtaBand";
import { strip } from "../../data/work";

export const metadata = {
  title: "Work | Sitechs",
  description: "Automations in production, sites rebuilt, brands put to work — every project shipped, with the number it moved.",
};

export default function WorkPage() {
  return (
    <main className="svc-page">
      <Hero />
      <Marquee items={strip} />
      <FeaturedCase />
      <BeforeAfterSection />
      <ArchiveSection />
      <CtaBand
        badgeText="Free, 30 minutes, no deck"
        title="Your project, next in this list."
        body="Tell us what is slow, ugly or manual. We will tell you what we would do first and what it costs."
        primaryLabel="Start a project"
        primaryHref="/start-a-project"
      />
    </main>
  );
}
