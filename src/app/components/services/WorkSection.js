"use client";

import Image from "next/image";
import Link from "next/link";
import { useDrift } from "../../hooks/useParallax";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

function WorkCard({ item }) {
  const driftRef = useDrift(item.float);
  const [ref, revealed] = useRevealOnScroll();

  return (
    <div ref={driftRef}>
      <div ref={ref} className={`svc-work-card reveal reveal--up${revealed ? " is-visible" : ""}`}>
        <div className="svc-work-card__media">
          <Image
            src={item.img}
            alt={item.title}
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
            className="svc-work-card__image"
          />
        </div>
        <div className="svc-work-card__meta">
          <h3 className="svc-work-card__title">{item.title}</h3>
          <span className="svc-work-card__year">{item.year}</span>
        </div>
        <p className="svc-work-card__body">{item.body}</p>
      </div>
    </div>
  );
}

export default function WorkSection({ eyebrowNum, eyebrowLabel, title, items }) {
  return (
    <section id="work" className="svc-work-section">
      <div className="svc-work-header">
        <div>
          <div className="eyebrow">
            {eyebrowNum} — {eyebrowLabel}
          </div>
          <h2 className="svc-work-title">{title}</h2>
        </div>
        <Link href="/case-studies" className="svc-work-link">
          All case studies ↗
        </Link>
      </div>
      <div className="svc-work-grid">
        {items.map((item) => (
          <WorkCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}
