"use client";

import { useParallax } from "../../hooks/useParallax";
import useMagnetic from "../../hooks/useMagnetic";
import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import HeroFacts from "../../components/services/HeroFacts";
import ChatDemo from "./ChatDemo";
import { heroChips, facts, miniStats } from "../../../data/services/aiAutomations";

export default function Hero() {
  const glowRef = useParallax(0.12);
  const magnetic = useMagnetic();

  return (
    <section className="svc-hero">
      <div className="svc-hero__glow" ref={glowRef} />
      <div className="svc-hero__inner">
        <ServiceBreadcrumb title="AI Automations" serviceNumber="01" flagship />

        <div className="svc-hero__grid">
          <div>
            <h1 className="svc-hero__title">
              <span className="svc-hero__title-line">Work smarter.</span>
              <span className="svc-hero__title-line">Scale</span>
              <span className="svc-hero__title-line">
                <span className="accent-italic">without hiring.</span>
              </span>
            </h1>
            <p className="svc-hero__body">
              We find the decisions your team repeats — qualifying, chasing, filing, reporting — and hand them to AI
              systems that run day and night. Built on your data, inside your tools, with a human in the loop
              wherever it matters.
            </p>
            <div className="svc-hero__actions">
              <a
                href="#audit"
                className="btn btn--primary"
                onMouseMove={magnetic.onMouseMove}
                onMouseLeave={magnetic.onMouseLeave}
              >
                Get a free automation audit
              </a>
              <a href="#savings" className="btn btn--outline">
                Calculate your savings
              </a>
            </div>
          </div>

          <div>
            <ChatDemo />
            <div className="svc-hero__mini-stats">
              {miniStats.map((s) => (
                <div className="svc-hero__mini-stat" key={s.label}>
                  <div className="svc-hero__mini-stat-value">{s.value}</div>
                  <div className="svc-hero__mini-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
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
