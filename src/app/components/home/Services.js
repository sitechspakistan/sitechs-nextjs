"use client";

import Link from "next/link";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { servicesData } from "../../../data/home";

function ServiceItem({ svc }) {
  const [ref, revealed] = useRevealOnScroll();
  return (
    <div ref={ref} className={`service-item reveal reveal--up${revealed ? " is-visible" : ""}`}>
      <div className="service-item__head">
        <span className="service-item__num">{svc.num}</span>
        <h3 className="service-item__title">{svc.title}</h3>
        {svc.flagship && <span className="service-item__badge">Flagship</span>}
      </div>
      <p className="service-item__body">{svc.body}</p>
      <div className="service-item__points">
        {svc.points.map((p) => (
          <span className="service-item__point" key={p}>
            {p}
          </span>
        ))}
      </div>
      <Link href={svc.href} className="service-item__link">
        Learn more ↗
      </Link>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-grid">
        <div className="services-intro">
          <div className="eyebrow">02 — What we do</div>
          <h2 className="services-title">
            Four services. <span className="accent-italic">One flagship.</span>
          </h2>
          <p className="services-desc">
            AI automation leads every engagement. Design, development and extensions are how it reaches your team.
          </p>
          <a href="#contact" className="services-link">
            Scope a project ↗
          </a>
        </div>
        <div>
          {servicesData.map((svc) => (
            <ServiceItem svc={svc} key={svc.num} />
          ))}
        </div>
      </div>
    </section>
  );
}
