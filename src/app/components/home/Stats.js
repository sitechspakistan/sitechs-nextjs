"use client";

import useCountUp from "../../hooks/useCountUp";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { statsData } from "../../../data/home";

function Stat({ s }) {
  const [ref, value] = useCountUp(s.to);
  return (
    <div>
      <div ref={ref} className="stat__value">
        {value}
        {s.suffix}
      </div>
      <div className="stat__label">{s.label}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, revealed] = useRevealOnScroll();

  return (
    <section className="stats-section">
      <div ref={ref} className={`stats-grid reveal reveal--up${revealed ? " is-visible" : ""}`}>
        {statsData.map((s) => (
          <Stat s={s} key={s.label} />
        ))}
      </div>
    </section>
  );
}
