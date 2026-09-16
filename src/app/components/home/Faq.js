"use client";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import FaqAccordion from "../shared/FaqAccordion";
import { faqData } from "../../../data/home";

export default function Faq() {
  const [ref, revealed] = useRevealOnScroll();

  return (
    <section id="faq" className="faq-section">
      <div ref={ref} className={`faq-grid reveal${revealed ? " is-visible" : ""}`}>
        <div className="faq-intro">
          <div className="eyebrow">06 — FAQ</div>
          <h2 className="faq-title">Before you ask.</h2>
          <p className="faq-desc">
            Still unsure where automation fits? Ask on the call — we will tell you if it does not.
          </p>
        </div>
        <FaqAccordion items={faqData} defaultOpenIndex={-1} />
      </div>
    </section>
  );
}
