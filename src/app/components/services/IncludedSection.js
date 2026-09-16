"use client";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";

function Card({ item, index }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className={`included-card reveal reveal--up${revealed ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="included-card__n">{item.n}</span>
      <h3 className="included-card__title">{item.title}</h3>
      <p className="included-card__body">{item.body}</p>
    </div>
  );
}

export default function IncludedSection({ eyebrowNum, eyebrowLabel, title, intro, items, id }) {
  return (
    <section className="included-section" id={id}>
      <div className="included-header">
        <div>
          <div className="eyebrow">
            {eyebrowNum} — {eyebrowLabel}
          </div>
          <h2 className="included-title">{title}</h2>
        </div>
        {intro && <p className="included-intro">{intro}</p>}
      </div>
      <div className="included-grid">
        {items.map((item, i) => (
          <Card item={item} index={i} key={item.title} />
        ))}
      </div>
    </section>
  );
}
