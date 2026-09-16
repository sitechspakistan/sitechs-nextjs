"use client";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";

function Row({ row, index }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className={`problem-row reveal${revealed ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <span className="problem-row__n">{row.n}</span>
      <span className="problem-row__bad">{row.bad}</span>
      <span className="problem-row__arrow">→</span>
      <span className="problem-row__good">{row.good}</span>
    </div>
  );
}

export default function ProblemSection({
  eyebrowNum,
  eyebrowLabel,
  title,
  accentSubhead,
  body,
  stats,
  leftLabel,
  rightLabel,
  rows,
}) {
  const [headRef, headRevealed] = useRevealOnScroll();

  return (
    <section className="problem-section theme-light">
      <div className="problem-section__inner">
        <div ref={headRef} className={`reveal reveal--up${headRevealed ? " is-visible" : ""}`}>
          <div className="eyebrow">
            {eyebrowNum} — {eyebrowLabel}
          </div>
          <h2 className="problem-title">{title}</h2>
          <p className="problem-accent accent-italic">{accentSubhead}</p>
          <p className="problem-body">{body}</p>
          <div className="problem-stats">
            {stats.map((s) => (
              <div className="problem-stat" key={s.label}>
                <div className="problem-stat__value">{s.value}</div>
                <div className="problem-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="problem-table">
          <div className="problem-table__head">
            <span>{leftLabel}</span>
            <span>{rightLabel}</span>
          </div>
          {rows.map((row, i) => (
            <Row row={row} index={i} key={row.n} />
          ))}
        </div>
      </div>
    </section>
  );
}
