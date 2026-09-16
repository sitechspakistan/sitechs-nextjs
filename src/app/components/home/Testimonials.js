"use client";

import { useEffect, useRef, useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { quotesData } from "../../../data/home";

export default function Testimonials() {
  const [q, setQ] = useState(0);
  const autoRef = useRef(null);
  const [headRef, headRevealed] = useRevealOnScroll();
  const [gridRef, gridRevealed] = useRevealOnScroll();

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setQ((v) => (v + 1) % quotesData.length);
    }, 7000);
    return () => clearInterval(autoRef.current);
  }, []);

  const goTo = (i) => {
    clearInterval(autoRef.current);
    setQ(i);
  };

  const prev = () => goTo((q + quotesData.length - 1) % quotesData.length);
  const next = () => goTo((q + 1) % quotesData.length);

  const quote = quotesData[q];

  return (
    <section className="testimonials-section theme-light">
      <div className="testimonials-section__inner">
        <div ref={headRef} className={`testimonials-header reveal${headRevealed ? " is-visible" : ""}`}>
          <div className="eyebrow">05 — Client voices</div>
          <div className="testimonials-nav">
            <span className="testimonials-index">
              {q + 1} / {quotesData.length}
            </span>
            <button type="button" className="testimonials-arrow" aria-label="Previous testimonial" onClick={prev}>
              ←
            </button>
            <button type="button" className="testimonials-arrow" aria-label="Next testimonial" onClick={next}>
              →
            </button>
          </div>
        </div>

        <div ref={gridRef} className={`testimonials-grid reveal${gridRevealed ? " is-visible" : ""}`}>
          <div className="testimonial-quote">
            <div className="testimonial-mark">&ldquo;</div>
            <blockquote className="testimonial-text">{quote.text}</blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{quote.initials}</div>
              <div>
                <div className="testimonial-name">{quote.name}</div>
                <div className="testimonial-role">{quote.role}</div>
              </div>
            </div>
          </div>

          <div className="testimonials-list">
            {quotesData.map((item, i) => (
              <button
                type="button"
                key={item.name}
                onClick={() => goTo(i)}
                className={`testimonial-item${i === q ? " testimonial-item--active" : ""}`}
              >
                <span className="testimonial-item__n">{String(i + 1).padStart(2, "0")}</span>
                <span className="testimonial-item__body">
                  <span className="testimonial-item__name">{item.name}</span>
                  <span className="testimonial-item__snippet">{item.role}</span>
                </span>
              </button>
            ))}
            <div className="testimonials-footnote">
              <span className="testimonials-footnote-line" />
              140+ clients, 14 countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
