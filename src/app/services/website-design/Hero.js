"use client";

import { useParallax } from "../../hooks/useParallax";
import useMagnetic from "../../hooks/useMagnetic";
import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import HeroFacts from "../../components/services/HeroFacts";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { heroChips, facts } from "../../../data/services/websiteDesign";

export default function Hero() {
  const glowRef = useParallax(0.12);
  const magnetic = useMagnetic();

  return (
    <section className="svc-hero">
      <div className="svc-hero__glow" ref={glowRef} />
      <div className="svc-hero__inner">
        <ServiceBreadcrumb title="Website Design" serviceNumber="02" />

        <div className="svc-hero__grid">
          <div>
            <h1 className="svc-hero__title">
              <span className="svc-hero__title-line">Website</span>
              <span className="svc-hero__title-line">design that</span>
              <span className="svc-hero__title-line">
                <span className="accent-italic">argues for you.</span>
              </span>
            </h1>
            <p className="svc-hero__body">
              Most sites describe a company. Yours has to move someone from curious to convinced. We design the page
              around that decision — then hand over a component system your developers can build without inventing
              anything.
            </p>
            <div className="svc-hero__actions">
              <a
                href="#contact"
                className="btn btn--primary"
                onMouseMove={magnetic.onMouseMove}
                onMouseLeave={magnetic.onMouseLeave}
              >
                Get a design quote
              </a>
              <a href="#work" className="btn btn--outline">
                See recent work
              </a>
            </div>
          </div>

          <BeforeAfterSlider />
        </div>

        <div className="svc-hero__chips">
          {heroChips.map((chip) => (
            <span className="svc-hero__chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>

        <HeroFacts facts={facts} />
      </div>
    </section>
  );
}
