import FaqAccordion from "../shared/FaqAccordion";

export default function FaqSection({ eyebrowNum, eyebrowLabel, title, intro, faqData, defaultOpenIndex = 0 }) {
  return (
    <section id="faq" className="svc-faq-section">
      <div className="svc-faq-grid">
        <div className="svc-faq-intro">
          <div className="eyebrow">
            {eyebrowNum} — {eyebrowLabel}
          </div>
          <h2 className="svc-faq-title">{title}</h2>
          <p className="svc-faq-desc">{intro}</p>
        </div>
        <FaqAccordion items={faqData} defaultOpenIndex={defaultOpenIndex} />
      </div>
    </section>
  );
}
