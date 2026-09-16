"use client";

import { useRef, useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import useMagnetic from "../../hooks/useMagnetic";

export default function CtaBand({ id = "contact", badgeText, title, body, primaryLabel, primaryHref = "#contact" }) {
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
    <section id={id} className="svc-cta">
      <div className="svc-cta__inner">
        <div ref={ref} className={`svc-cta__content reveal reveal--up${revealed ? " is-visible" : ""}`}>
          <div className="svc-cta__badge">
            <span className="svc-cta__badge-dot" />
            {badgeText}
          </div>
          <h2 className="svc-cta__title">{title}</h2>
          <p className="svc-cta__body">{body}</p>
          <div className="svc-cta__actions">
            <a
              href={primaryHref}
              className="svc-cta__btn"
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
            >
              {primaryLabel}
            </a>
            <button type="button" className="svc-cta__copy" onClick={copyEmail}>
              {copied ? "copied" : "info@sitechs.co — copy"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
