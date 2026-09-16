"use client";

import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { steps } from "../../data/carePlans";

function StepCard({ step, index }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className={`how-card reveal reveal--up${revealed ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="how-card__n">{step.n}</div>
      <div className="how-card__title">{step.title}</div>
      <p className="how-card__body">{step.body}</p>
    </div>
  );
}

export default function HowItWorksSection() {
  const [headRef, headRevealed] = useRevealOnScroll();

  return (
    <section className="how-section theme-light">
      <div className="how-section__inner">
        <div ref={headRef} className={`how-header reveal${headRevealed ? " is-visible" : ""}`}>
          <div>
            <div className="eyebrow">04 — How it works</div>
            <h2 className="how-title">Three steps, then it just runs.</h2>
          </div>
          <p className="how-intro">
            No onboarding project, no discovery deck. You pick a plan and the first improvements land that month.
          </p>
        </div>
        <div className="how-grid">
          {steps.map((step, i) => (
            <StepCard step={step} index={i} key={step.n} />
          ))}
        </div>
      </div>
    </section>
  );
}
