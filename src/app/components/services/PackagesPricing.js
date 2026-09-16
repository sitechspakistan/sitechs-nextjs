"use client";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";

function Card({ pkg, index, ctaHref }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className={`pricing-card${pkg.popular ? " pricing-card--popular" : ""} reveal reveal--up${revealed ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="pricing-card__head">
        <h3 className="pricing-card__name">{pkg.name}</h3>
        {pkg.popular && <span className="pricing-card__badge">Most picked</span>}
      </div>
      <div className="pricing-card__price">
        {pkg.price}
        <span className="pricing-card__unit"> {pkg.unit}</span>
      </div>
      <p className="pricing-card__for">{pkg.for}</p>
      <div className="pricing-card__items">
        {pkg.items.map((it) => (
          <div className="pricing-card__item" key={it}>
            — {it}
          </div>
        ))}
      </div>
      <a
        href={ctaHref}
        className={`pricing-card__cta${pkg.popular ? " pricing-card__cta--filled" : " pricing-card__cta--outline"}`}
      >
        {pkg.cta}
      </a>
    </div>
  );
}

export default function PackagesPricing({ eyebrowNum, eyebrowLabel, title, intro, packages, addon, ctaHref = "#contact" }) {
  return (
    <section id="plans" className="pricing-section">
      <div className="pricing-header">
        <div>
          <div className="eyebrow">
            {eyebrowNum} — {eyebrowLabel}
          </div>
          <h2 className="pricing-title">{title}</h2>
        </div>
        {intro && <p className="pricing-intro">{intro}</p>}
      </div>

      <div className="pricing-grid">
        {packages.map((pkg, i) => (
          <Card pkg={pkg} index={i} key={pkg.name} ctaHref={ctaHref} />
        ))}
      </div>

      {addon && (
        <div className="pricing-addon">
          <div>
            <div className="pricing-addon__name">
              {addon.name} — <span className="pricing-addon__price">{addon.price}</span>
            </div>
            <p className="pricing-addon__body">{addon.body}</p>
          </div>
          <a href={ctaHref} className="pricing-addon__cta">
            {addon.cta}
          </a>
        </div>
      )}
    </section>
  );
}
