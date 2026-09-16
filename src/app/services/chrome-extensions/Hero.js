"use client";

import { useParallax } from "../../hooks/useParallax";
import useMagnetic from "../../hooks/useMagnetic";
import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import HeroFacts from "../../components/services/HeroFacts";
import ExtensionDemo from "./ExtensionDemo";
import { heroChips, facts } from "../../../data/services/chromeExtensions";

export default function Hero() {
  const glowRef = useParallax(0.12);
  const magnetic = useMagnetic();

  return (
    <section className="svc-hero">
      <div className="svc-hero__glow" ref={glowRef} />
      <div className="svc-hero__inner">
        <ServiceBreadcrumb title="Chrome Extensions" serviceNumber="04" />

        <div className="svc-hero__grid">
          <div>
            <h1 className="svc-hero__title">
              <span className="svc-hero__title-line">Automation</span>
              <span className="svc-hero__title-line">inside the tab</span>
              <span className="svc-hero__title-line">
                <span className="accent-italic">already open.</span>
              </span>
            </h1>
            <p className="svc-hero__body">
              No new tool to adopt, no training deck. We build Manifest V3 extensions that capture, enrich and file
              data where your team already works — internally distributed, or published on the Web Store.
            </p>
            <div className="svc-hero__actions">
              <a
                href="#contact"
                className="btn btn--primary"
                onMouseMove={magnetic.onMouseMove}
                onMouseLeave={magnetic.onMouseLeave}
              >
                Get an extension quote
              </a>
              <a href="#uses" className="btn btn--outline">
                See what teams build
              </a>
            </div>
          </div>

          <ExtensionDemo />
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
