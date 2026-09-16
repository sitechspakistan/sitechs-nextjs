"use client";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { uses } from "../../../data/services/chromeExtensions";

function UseCase({ item, index }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className={`use-case reveal reveal--up${revealed ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <span className="use-case__label">{item.label}</span>
      <h3 className="use-case__title">{item.title}</h3>
      <p className="use-case__body">{item.body}</p>
      <span className="use-case__note">{item.note}</span>
    </div>
  );
}

export default function UseCasesSection() {
  return (
    <section id="uses" className="use-cases-section">
      <div className="eyebrow">03 — What teams build</div>
      <h2 className="use-cases-title">Four shapes, over and over.</h2>
      <p className="use-cases-intro">Most briefs land in one of these. If yours does not, the discovery call is free either way.</p>
      <div className="use-cases-grid">
        {uses.map((item, i) => (
          <UseCase item={item} index={i} key={item.title} />
        ))}
      </div>
    </section>
  );
}
