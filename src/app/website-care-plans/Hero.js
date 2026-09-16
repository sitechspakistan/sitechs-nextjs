"use client";

import { useParallax } from "../hooks/useParallax";
import useMagnetic from "../hooks/useMagnetic";
import { heroNotes } from "../../data/carePlans";

export default function Hero() {
  const glowRef = useParallax(0.12);
  const magnetic = useMagnetic();

  return (
    <section className="cp-hero">
      <div className="svc-hero__glow" ref={glowRef} />
      <div className="cp-hero__inner">
        <div className="cp-hero__eyebrow">
          <span />
          Website care plans
          <span />
        </div>
        <h1 className="cp-hero__title">
          A growth system,
          <br />
          <span className="accent-italic">not a static asset.</span>
        </h1>
        <p className="cp-hero__body">
          Ongoing WordPress, Shopify and custom development support, so your site stays fast, secure and optimised
          for conversions every month — not just the week it launched.
        </p>
        <div className="svc-hero__actions" style={{ justifyContent: "center" }}>
          <a
            href="#plans"
            className="btn btn--primary"
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
          >
            See the plans
          </a>
          <a href="#fit" className="btn btn--outline">
            Is this for us?
          </a>
        </div>
        <div className="cp-hero__notes">
          {heroNotes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
