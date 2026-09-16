"use client";

import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { forList, notForList } from "../../data/carePlans";

export default function FitSection() {
  const [ref, revealed] = useRevealOnScroll();

  return (
    <section id="fit" className="fit-section">
      <div ref={ref} className={`fit-grid reveal reveal--up${revealed ? " is-visible" : ""}`}>
        <div className="fit-panel fit-panel--yes">
          <div className="fit-panel__label">Who this is for</div>
          <div className="fit-panel__list">
            {forList.map((x) => (
              <div className="fit-panel__item" key={x}>
                <span>✓</span>
                {x}
              </div>
            ))}
          </div>
        </div>
        <div className="fit-panel fit-panel--no">
          <div className="fit-panel__label">Who this is not for</div>
          <div className="fit-panel__list">
            {notForList.map((x) => (
              <div className="fit-panel__item" key={x}>
                <span>✕</span>
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
