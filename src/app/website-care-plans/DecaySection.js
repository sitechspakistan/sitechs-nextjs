"use client";

import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { decay } from "../../data/carePlans";

function DecayCard({ item, index }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className={`decay-card reveal reveal--up${revealed ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="decay-card__n">{item.n}</div>
      <div className="decay-card__title">{item.title}</div>
      <p className="decay-card__body">{item.body}</p>
    </div>
  );
}

export default function DecaySection() {
  const [headRef, headRevealed] = useRevealOnScroll();
  const [introRef, introRevealed] = useRevealOnScroll();

  return (
    <section className="problem-section theme-light">
      <div className="problem-section__inner">
        <div ref={headRef} className={`reveal reveal--up${headRevealed ? " is-visible" : ""}`}>
          <div className="eyebrow">01 — Why sites stop performing</div>
          <div className="cp-decay__head">
            <h2 className="problem-title">Launch day is the high point.</h2>
            <p className="problem-accent accent-italic">Then, quietly, everything starts sliding backwards.</p>
          </div>
        </div>

        <div ref={introRef} className={`cp-decay__intro reveal reveal--up${introRevealed ? " is-visible" : ""}`}>
          <p className="problem-body" style={{ margin: 0 }}>
            A website is not a one-time project. Without ongoing care it slows down, breaks after updates, and
            starts costing you business in ways nobody is watching for.
          </p>
          <div className="problem-stats" style={{ marginTop: 0 }}>
            <div className="problem-stat">
              <div className="problem-stat__value">5</div>
              <div className="problem-stat__label">Ways a site decays</div>
            </div>
            <div className="problem-stat">
              <div className="problem-stat__value">0</div>
              <div className="problem-stat__label">Of them announce themselves</div>
            </div>
          </div>
        </div>

        <div className="cp-decay__grid">
          {decay.map((item, i) => (
            <DecayCard item={item} index={i} key={item.n} />
          ))}
        </div>
      </div>
    </section>
  );
}
