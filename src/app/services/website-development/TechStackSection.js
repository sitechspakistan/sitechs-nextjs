"use client";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { stack } from "../../../data/services/websiteDevelopment";

function StackCell({ cell, index }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className={`stack-cell reveal reveal--up${revealed ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <h3 className="stack-cell__title">{cell.title}</h3>
      <div className="stack-cell__items">
        {cell.items.map((item) => (
          <div className="stack-cell__item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section id="stack" className="stack-section">
      <div className="eyebrow">03 — The stack</div>
      <h2 className="stack-title">Boring tools, chosen on purpose.</h2>
      <p className="stack-intro">
        Everything here is widely known, well documented and hireable for — so you are never locked to us.
      </p>
      <div className="stack-grid">
        {stack.map((cell, i) => (
          <StackCell cell={cell} index={i} key={cell.title} />
        ))}
      </div>
    </section>
  );
}
