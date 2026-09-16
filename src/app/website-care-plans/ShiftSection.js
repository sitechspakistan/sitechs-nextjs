"use client";

import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { shifts } from "../../data/carePlans";

function ShiftRow({ shift, index }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className={`shift-row reveal${revealed ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="shift-row__old">{shift.old}</div>
      <div className="shift-row__new">
        <span>→</span>
        {shift.new}
      </div>
    </div>
  );
}

export default function ShiftSection() {
  const [headRef, headRevealed] = useRevealOnScroll();

  return (
    <section className="shift-section">
      <div ref={headRef} className={`shift-header reveal${headRevealed ? " is-visible" : ""}`}>
        <div>
          <div className="eyebrow">02 — The shift</div>
          <h2 className="shift-title">We are not a maintenance company.</h2>
        </div>
        <p className="shift-intro">
          We build continuous improvement systems for your website. Keeping it alive is the floor, not the offer.
        </p>
      </div>
      <div className="shift-table">
        <div className="shift-table__head">
          <span>Old thinking</span>
          <span>New thinking</span>
        </div>
        {shifts.map((shift, i) => (
          <ShiftRow shift={shift} index={i} key={shift.old} />
        ))}
      </div>
    </section>
  );
}
