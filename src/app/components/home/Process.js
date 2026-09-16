"use client";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { stepsData } from "../../../data/home";

export default function Process() {
  const [headRef, headRevealed] = useRevealOnScroll();

  return (
    <section className="process-section">
      <div ref={headRef} className={`reveal reveal--up${headRevealed ? " is-visible" : ""}`}>
        <div className="eyebrow">03 — How we work</div>
        <h2 className="process-title">
          Four weeks, audit to <span className="accent-italic">running system.</span>
        </h2>
      </div>
      <div className="process-grid">
        {stepsData.map((step) => (
          <ProcessCard step={step} key={step.n} />
        ))}
      </div>
    </section>
  );
}

function ProcessCard({ step }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div ref={ref} className={`process-card reveal reveal--up${revealed ? " is-visible" : ""}`}>
      <div className="process-card__n">{step.n}</div>
      <h3 className="process-card__title">{step.title}</h3>
      <p className="process-card__body">{step.body}</p>
      <div className="process-card__out">{step.out}</div>
    </div>
  );
}
