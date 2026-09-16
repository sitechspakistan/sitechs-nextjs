"use client";

import Link from "next/link";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

function Card({ item, index }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <Link
      ref={ref}
      href={item.href}
      className={`next-service-card reveal reveal--up${revealed ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <span className="next-service-card__n">{item.n}</span>
      <h3 className="next-service-card__title">{item.title}</h3>
      <p className="next-service-card__tag">{item.tag}</p>
      <span className="next-service-card__link">View service ↗</span>
    </Link>
  );
}

export default function NextServiceCards({ items }) {
  return (
    <section className="next-service-section">
      <div className="next-service-grid">
        {items.map((item, i) => (
          <Card item={item} index={i} key={item.href} />
        ))}
      </div>
    </section>
  );
}
