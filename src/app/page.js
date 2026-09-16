import Hero from "./components/home/Hero";
import KineticStrip from "./components/home/KineticStrip";
import ClientLogos from "./components/home/ClientLogos";
import Work from "./components/home/Work";
import Services from "./components/home/Services";
import Stats from "./components/home/Stats";
import Process from "./components/home/Process";
import EngagementPlans from "./components/home/EngagementPlans";
import ConvoLeadPromo from "./components/home/ConvoLeadPromo";
import Testimonials from "./components/home/Testimonials";
import Faq from "./components/home/Faq";
import ClosingCta from "./components/home/ClosingCta";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <KineticStrip />
      <ClientLogos />
      <Work />
      <Services />
      <Stats />
      <Process />
      <EngagementPlans />
      <ConvoLeadPromo />
      <Testimonials />
      <Faq />
      <ClosingCta />
    </main>
  );
}
