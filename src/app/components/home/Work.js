"use client";

import Image from "next/image";
import Link from "next/link";
import { useDrift } from "../../hooks/useParallax";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { workData } from "../../../data/home";

function WorkCard({ w }) {
  const driftRef = useDrift(w.drift);
  const [revealRef, revealed] = useRevealOnScroll();

  return (
    <div className="work-card__drift" ref={driftRef} style={{ marginTop: w.offset }}>
      <div
        ref={revealRef}
        className={`reveal reveal--up${revealed ? " is-visible" : ""}`}
      >
        <div className="work-card__media">
          <Image
            src={w.img}
            alt={w.title}
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
            className="work-card__image"
          />
          <div className="work-card__metric">{w.metric}</div>
        </div>
        <div className="work-card__meta">
          <span className="work-card__n">{w.n}</span>
          <h3 className="work-card__title">{w.title}</h3>
        </div>
        <p className="work-card__result">{w.result}</p>
        <div className="work-card__chips">
          {w.chips.map((chip) => (
            <span className="work-card__chip" key={chip}>
              {chip}
            </span>
          ))}
          <span className="work-card__year">{w.year}</span>
        </div>
        <Link href={w.href} className="work-card__link">
          Read the case study <span>↗</span>
        </Link>
      </div>
    </div>
  );
}

export default function Work() {
  const [headRef, headRevealed] = useRevealOnScroll();

  return (
    <section id="work" className="work-section theme-light">
      <div className="work-section__inner">
        <div ref={headRef} className={`work-header reveal${headRevealed ? " is-visible" : ""}`}>
          <div>
            <div className="eyebrow">01 — Selected work</div>
            <h2 className="work-title">
              Featured
              <br />
              <span className="accent-italic">work</span>
            </h2>
          </div>
          <Link href="/case-studies" className="work-all-link">
            All case studies ↗
          </Link>
        </div>

        <div className="work-grid">
          {workData.map((w) => (
            <WorkCard w={w} key={w.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
