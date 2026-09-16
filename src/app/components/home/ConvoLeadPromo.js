"use client";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import useMagnetic from "../../hooks/useMagnetic";
import { convoStats } from "../../../data/home";

export default function ConvoLeadPromo() {
  const [ref, revealed] = useRevealOnScroll();
  const magnetic = useMagnetic();

  return (
    <section id="convolead" className="convolead-section">
      <div className="convolead-section__inner">
        <div className="convolead-glow" />
        <div ref={ref} className={`convolead-grid reveal reveal--up${revealed ? " is-visible" : ""}`}>
          <div>
            <div className="convolead-badge">
              <span className="convolead-badge-dot" />A product by Sitechs
            </div>
            <img src="/assets/images/convolead-logo.png" alt="ConvoLead" className="convolead-logo" />
            <p className="convolead-desc">
              The chatbot that stops treating your website like a contact form. It answers, qualifies and books —
              while your competitors reply on Monday.
            </p>
            <div className="convolead-stats">
              {convoStats.map((cs) => (
                <div className="convolead-stat" key={cs.label}>
                  <div className="convolead-stat__value">{cs.value}</div>
                  <div className="convolead-stat__label">{cs.label}</div>
                </div>
              ))}
            </div>
            <div className="convolead-actions">
              <a
                href="#convolead"
                className="convolead-btn--primary"
                onMouseMove={magnetic.onMouseMove}
                onMouseLeave={magnetic.onMouseLeave}
              >
                Book a demo
              </a>
              <a href="#convolead" className="convolead-btn--outline">
                Start free trial
              </a>
            </div>
            <div className="convolead-tag">convolead.ai — separate product, same studio</div>
          </div>

          <div className="convolead-media">
            <div className="convolead-window">
              <div className="convolead-window__head">
                <span className="convolead-window__dot" />
                ConvoLead reel
              </div>
              <div className="convolead-window__body">
                <div className="convolead-play">▶</div>
                <span className="convolead-window__caption">Drop the ConvoLead reel here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
