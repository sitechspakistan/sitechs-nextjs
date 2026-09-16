"use client";

import { useParallax } from "../../hooks/useParallax";
import useMagnetic from "../../hooks/useMagnetic";
import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import HeroFacts from "../../components/services/HeroFacts";
import DeployConsole from "./DeployConsole";
import { heroChips, facts } from "../../../data/services/websiteDevelopment";

export default function Hero() {
  const glowRef = useParallax(0.12);
  const magnetic = useMagnetic();

  return (
    <section className="svc-hero">
      <div className="svc-hero__glow" ref={glowRef} />
      <div className="svc-hero__inner">
        <ServiceBreadcrumb title="Website Development" serviceNumber="03" />

        <div className="svc-hero__grid">
          <div>
            <h1 className="svc-hero__title">
              <span className="svc-hero__title-line">Builds that</span>
              <span className="svc-hero__title-line">stay fast</span>
              <span className="svc-hero__title-line">
                <span className="accent-italic">after launch day.</span>
              </span>
            </h1>
            <p className="svc-hero__body">
              We build in Next.js and TypeScript against a performance budget, wire the CMS so your team can edit
              without us, and hand over a repository your future developers will thank you for.
            </p>
            <div className="svc-hero__actions">
              <a
                href="#contact"
                className="btn btn--primary"
                onMouseMove={magnetic.onMouseMove}
                onMouseLeave={magnetic.onMouseLeave}
              >
                Get a build quote
              </a>
              <a href="#stack" className="btn btn--outline">
                See the stack
              </a>
            </div>
          </div>

          <DeployConsole />
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
