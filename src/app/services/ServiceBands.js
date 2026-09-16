"use client";

import Link from "next/link";
import useCountUp from "../hooks/useCountUp";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { useParallax } from "../hooks/useParallax";
import { bandData } from "../../data/services/index";

function Band({ band, index }) {
  const [countRef, count] = useCountUp(band.count);
  const [revealRef, revealed] = useRevealOnScroll();
  const floatRef = useParallax(index % 2 ? -0.03 : 0.03);
  const flip = index % 2 === 1;

  return (
    <section id={band.id} className={`service-band${band.dark ? " theme-dark-band" : " theme-light-band"}`}>
      <div className="service-band__inner">
        <div className="service-band__header">
          <span className="service-band__n">{band.n}</span>
          <h2 className="service-band__title">{band.title}</h2>
          {band.flagship && <span className="service-band__badge">Flagship</span>}
          <span className="service-band__rule" />
        </div>

        <div ref={revealRef} className={`service-band__grid reveal${revealed ? " is-visible" : ""}`}>
          <div className="service-band__card" style={{ order: flip ? 2 : 1 }}>
            <div className="service-band__count-row">
              <span ref={countRef} className="service-band__count">
                {count}+
              </span>
              <span className="service-band__count-arrow">↗</span>
            </div>
            <div className="service-band__count-label">{band.countLabel}</div>
            <p className="service-band__body">{band.body}</p>
            <div className="service-band__stack">
              {band.stack.map((s) => (
                <span className="service-band__stack-item" key={s}>
                  <span className="service-band__stack-dot" />
                  {s}
                </span>
              ))}
            </div>
            <div className="service-band__footer">
              <span className="service-band__foot">{band.foot}</span>
              <Link href={band.href} className="service-band__arrow-link" aria-label={`View ${band.title}`}>
                ↗
              </Link>
            </div>
          </div>

          <div className="service-band__image" style={{ order: flip ? 1 : 2 }} ref={floatRef}>
            <span className="service-band__slot">{band.slot}</span>
            <span className="service-band__promise accent-italic">{band.promise}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServiceBands() {
  return (
    <>
      {bandData.map((band, i) => (
        <Band band={band} index={i} key={band.id} />
      ))}
    </>
  );
}
