"use client";

import { useRef, useState } from "react";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { nextSteps, trust } from "../../data/startProject";

export default function Sidebar() {
  const [ref, revealed] = useRevealOnScroll();
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
    <div ref={ref} className={`sap-sidebar reveal reveal--up${revealed ? " is-visible" : ""}`}>
      <div className="eyebrow">Prefer to talk</div>
      <button type="button" className="sap-sidebar__contact" onClick={copyEmail}>
        <div className="sap-sidebar__contact-value">info@sitechs.co</div>
        <div className="sap-sidebar__contact-label">{copied ? "copied" : "click to copy"}</div>
      </button>
      <div className="sap-sidebar__phone">
        <div className="sap-sidebar__contact-value">+92 342 3543100</div>
        <div className="sap-sidebar__contact-label sap-sidebar__contact-label--muted">Phone &amp; WhatsApp</div>
      </div>

      <div className="sap-sidebar__rule" />

      <div className="eyebrow">What happens next</div>
      <div className="sap-sidebar__steps">
        {nextSteps.map((step) => (
          <div className="sap-sidebar__step" key={step.n}>
            <span className="sap-sidebar__step-n">{step.n}</span>
            <div>
              <div className="sap-sidebar__step-title">{step.title}</div>
              <div className="sap-sidebar__step-body">{step.body}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="sap-sidebar__rule" />

      <div className="sap-sidebar__trust">
        {trust.map((t) => (
          <div key={t.label}>
            <div className="sap-sidebar__trust-value">{t.value}</div>
            <div className="sap-sidebar__trust-label">{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
