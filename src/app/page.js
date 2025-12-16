import Hero from "./components/Hero";
import AboutArea from "./components/AboutArea";
import ServicesArea from "./components/ServicesArea";
import ClientsArea from "./components/ClientsArea";
import Counter from "./components/Counter";
import Testimonials from "./components/Testimonials";
import TechSec from "./components/TechSec";

export default function Home() {
  return (
    <>                  
        <Hero />
        <AboutArea />
        <ServicesArea />
        <ClientsArea />
        {/* <CaseStudies /> */}
        <Counter />
        <TechSec />
        <Testimonials />
    </>
  );
}
