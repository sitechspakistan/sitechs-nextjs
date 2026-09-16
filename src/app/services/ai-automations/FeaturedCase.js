"use client";

import Link from "next/link";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { featuredCase } from "../../../data/services/aiAutomations";

export default function FeaturedCase() {
  const [ref, revealed] = useRevealOnScroll();

  return (
    <section className="featured-case">
      <div
        ref={ref}
        className={`featured-case__card reveal reveal--up${revealed ? " is-visible" : ""}`}
      >
        <div className="eyebrow" style={{ color: "var(--c-accent)" }}>
          {featuredCase.eyebrowNum} — {featuredCase.eyebrow}
        </div>
        <h2 className="featured-case__title">{featuredCase.title}</h2>
        <div className="featured-case__panels">
          <div className="featured-case__panel">
            <div className="featured-case__panel-label">Before</div>
            <p>{featuredCase.before}</p>
          </div>
          <div className="featured-case__panel featured-case__panel--after">
            <div className="featured-case__panel-label">After</div>
            <p>{featuredCase.after}</p>
          </div>
        </div>
        <div className="featured-case__footer">
          <div className="featured-case__stats">
            {featuredCase.stats.map((s) => (
              <div className="featured-case__stat" key={s.label}>
                <div className="featured-case__stat-value">{s.value}</div>
                <div className="featured-case__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <Link href={featuredCase.href} className="featured-case__link">
            View full case study ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
