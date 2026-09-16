"use client";

import { useRef, useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import useMagnetic from "../../hooks/useMagnetic";
import { ctaStripItems } from "../../../data/home";

export default function ClosingCta() {
  const [ref, revealed] = useRevealOnScroll();
  const magnetic = useMagnetic();
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("info@sitechs.co").catch(() => {});
    }
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="closing-cta">
      <div className="closing-cta__inner">
        <div ref={ref} className={`closing-cta__content reveal reveal--up${revealed ? " is-visible" : ""}`}>
          <div className="closing-cta__badge">
            <span className="closing-cta__badge-dot" />
            Idea → running system
          </div>
          <h2 className="closing-cta__title">Find the 20 hours a week your team is losing.</h2>
          <p className="closing-cta__desc">
            Tell us where the time goes and we will come back with the three processes worth automating first.
          </p>
          <div className="closing-cta__actions">
            <a
              href="/start-a-project"
              className="closing-cta__btn"
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
            >
              Book a free automation audit
            </a>
            <button type="button" className="closing-cta__copy" onClick={copyEmail}>
              {copied ? "copied" : "info@sitechs.co"}
            </button>
          </div>
          <div className="closing-cta__note">30 minutes · no deck · no obligation</div>
        </div>
      </div>
      <div className="closing-cta__strip">
        <div className="closing-cta__strip-track">
          {ctaStripItems.map((item, i) => (
            <div className="closing-cta__strip-item" key={`${item}-${i}`}>
              {item}
              <span style={{ fontSize: 10 }}>◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
