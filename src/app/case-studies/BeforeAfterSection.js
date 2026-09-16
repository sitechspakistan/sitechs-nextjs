"use client";

import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BeforeAfterCompare from "./BeforeAfterCompare";
import { beforeAfter } from "../../data/work";

export default function BeforeAfterSection() {
  const [headRef, headRevealed] = useRevealOnScroll();
  const [mediaRef, mediaRevealed] = useRevealOnScroll();

  return (
    <section className="work-ba-section theme-light">
      <div className="work-ba-section__inner">
        <div ref={headRef} className={`reveal reveal--up${headRevealed ? " is-visible" : ""}`}>
          <div className="eyebrow">Transformation in action</div>
          <div className="work-ba__head">
            <h2 className="problem-title">Before and after.</h2>
            <p className="problem-accent accent-italic">Drag the handle — same company, same week.</p>
          </div>
        </div>

        <div
          ref={mediaRef}
          className={`reveal reveal--up${mediaRevealed ? " is-visible" : ""}`}
          style={{ marginTop: 34 }}
        >
          <BeforeAfterCompare />
        </div>

        <div className="work-ba__caption">
          <span>{beforeAfter.caption}</span>
          <span className="work-ba__caption-meta">{beforeAfter.meta}</span>
        </div>
      </div>
    </section>
  );
}
