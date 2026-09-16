"use client";

import { useState } from "react";

export default function FaqAccordion({ items, defaultOpenIndex = -1 }) {
  const [open, setOpen] = useState(defaultOpenIndex);

  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <div className="faq-item" key={f.q}>
          <button
            type="button"
            className="faq-question"
            onClick={() => setOpen((v) => (v === i ? -1 : i))}
            aria-expanded={open === i}
          >
            <span className="faq-q-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="faq-q-text">{f.q}</span>
            <span className="faq-sign">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <p className="faq-answer">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
