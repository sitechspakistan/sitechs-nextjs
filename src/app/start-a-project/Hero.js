"use client";

import { useParallax } from "../hooks/useParallax";
import { heroNotes } from "../../data/startProject";

export default function Hero() {
  const glowRef = useParallax(0.12);

  return (
    <section className="cp-hero">
      <div className="svc-hero__glow" ref={glowRef} />
      <div className="cp-hero__inner">
        <div className="cp-hero__eyebrow">
          <span />
          Start a project
          <span />
        </div>
        <h1 className="cp-hero__title">
          Tell us what
          <br />
          <span className="accent-italic">is not working.</span>
        </h1>
        <p className="cp-hero__body">
          One form, two minutes. You get a real reply from the person who would run the work — not a sequence, not a
          sales call disguised as a discovery call.
        </p>
        <div className="cp-hero__notes">
          {heroNotes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
