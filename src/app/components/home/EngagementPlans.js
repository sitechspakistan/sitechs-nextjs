"use client";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { plansData } from "../../../data/home";

function PlanCard({ p }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div ref={ref} className={`plan-card reveal reveal--up${revealed ? " is-visible" : ""}`}>
      <div className="plan-card__head">
        <h3 className="plan-card__name">{p.name}</h3>
        {p.popular && <span className="plan-card__badge">Most picked</span>}
      </div>
      <div className="plan-card__price">
        {p.price}
        <span className="plan-card__unit"> {p.unit}</span>
      </div>
      <p className="plan-card__for">{p.for}</p>
      <div className="plan-card__items">
        {p.items.map((it) => (
          <div className="plan-card__item" key={it}>
            <span className="plan-card__check">✓</span>
            {it}
          </div>
        ))}
      </div>
      <a href="#contact" className="plan-card__cta">
        {p.cta}
      </a>
    </div>
  );
}

export default function EngagementPlans() {
  const [headRef, headRevealed] = useRevealOnScroll();

  return (
    <section id="engage" className="plans-section theme-light">
      <div className="plans-section__inner">
        <div ref={headRef} className={`plans-header reveal reveal--up${headRevealed ? " is-visible" : ""}`}>
          <div>
            <div className="eyebrow">04 — Care &amp; growth plans</div>
            <h2 className="plans-title">Website care &amp; growth plans</h2>
          </div>
          <p className="plans-desc">
            Flexible monthly plans that keep your website secure, fast and growing. Cancel or change any month.
          </p>
        </div>
        <div className="plans-grid">
          {plansData.map((p) => (
            <PlanCard p={p} key={p.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
