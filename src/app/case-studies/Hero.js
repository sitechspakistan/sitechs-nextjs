"use client";

import { useParallax } from "../hooks/useParallax";
import HeroFacts from "../components/services/HeroFacts";
import { facts } from "../../data/work";

export default function Hero() {
  const glowRef = useParallax(0.12);

  return (
    <section className="svc-hero">
      <div className="svc-hero__glow" ref={glowRef} />
      <div className="svc-hero__inner">
        <div className="svc-breadcrumb">
          <span className="svc-breadcrumb__current">Work</span>
          <span className="svc-breadcrumb__rule" />
          <span>12 selected case studies</span>
        </div>

        <div className="work-hero__grid">
          <h1 className="work-hero__title">
            Case
            <br />
            <span className="accent-italic">studies.</span>
          </h1>
          <p className="work-hero__body">
            Automations in production, sites rebuilt, brands put to work. Every project below shipped — with the
            number it moved, not the mood board it came from.
          </p>
        </div>

        <HeroFacts facts={facts} />
      </div>
    </section>
  );
}
