"use client";

import { useParallax } from "../hooks/useParallax";
import useMagnetic from "../hooks/useMagnetic";
import { heroNotes } from "../../data/services/index";

export default function Hero() {
  const glowRef = useParallax(0.12);
  const magnetic = useMagnetic();

  return (
    <section className="svc-index-hero">
      <div className="svc-hero__glow" ref={glowRef} />
      <div className="svc-index-hero__inner">
        <div className="svc-index-hero__eyebrow">
          <span className="svc-index-hero__eyebrow-line" />
          Our services
          <span className="svc-index-hero__eyebrow-line" />
        </div>
        <h1 className="svc-index-hero__title">
          Four services,
          <br />
          <span className="accent-italic">one operating system.</span>
        </h1>
        <p className="svc-index-hero__body">
          AI automation runs the work behind the scenes. Design, development and Chrome extensions are how your team
          and your customers actually touch it. We do all four, so nothing falls between the handoffs.
        </p>
        <div className="svc-hero__actions" style={{ justifyContent: "center" }}>
          <a
            href="#contact"
            className="btn btn--primary"
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
          >
            Book a free audit
          </a>
          <a href="#s1" className="btn btn--outline">
            See what we build
          </a>
        </div>
        <div className="svc-index-hero__notes">
          {heroNotes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
