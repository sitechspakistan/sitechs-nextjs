"use client";

import Link from "next/link";
import Image from "next/image";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import caseStudies from "../../data/caseStudies";
import { featured } from "../../data/work";

export default function FeaturedCase() {
  const [ref, revealed] = useRevealOnScroll();
  const cs = caseStudies.find((c) => c.slug === featured.slug);

  return (
    <section className="work-featured">
      <div
        ref={ref}
        className={`work-featured__card reveal reveal--up${revealed ? " is-visible" : ""}`}
      >
        <div className="work-featured__copy">
          <div className="eyebrow" style={{ color: "var(--c-accent)" }}>
            {featured.eyebrow}
          </div>
          <h2 className="work-featured__title">{featured.title}</h2>
          <div className="work-featured__subtitle accent-italic">{featured.subtitle}</div>
          <p className="work-featured__body">{featured.body}</p>
          <div className="work-featured__tags">
            {featured.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="work-featured__footer">
            {featured.stats.map((s) => (
              <div className="work-featured__stat" key={s.label}>
                <div className="work-featured__stat-value">{s.value}</div>
                <div className="work-featured__stat-label">{s.label}</div>
              </div>
            ))}
            <Link href={`/case-studies/${featured.slug}`} className="work-featured__link">
              View case study ↗
            </Link>
          </div>
        </div>
        <div className="work-featured__media">
          {cs && <Image src={cs.image} alt={featured.title} fill sizes="(max-width: 720px) 100vw, 50vw" />}
        </div>
      </div>
    </section>
  );
}
