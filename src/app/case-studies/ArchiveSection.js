"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import caseStudies from "../../data/caseStudies";
import { filterNames, cards as cardCopy } from "../../data/work";

function useMergedCards() {
  return useMemo(
    () =>
      cardCopy
        .map((c) => {
          const cs = caseStudies.find((item) => item.slug === c.slug);
          if (!cs) return null;
          const tag = Array.isArray(cs.category) ? cs.category[0] : cs.category;
          return { ...c, title: cs.title, tag, image: cs.image };
        })
        .filter(Boolean),
    []
  );
}

export default function ArchiveSection() {
  const cases = useMergedCards();
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? cases : cases.filter((c) => c.tag === filter);

  return (
    <section id="all" className="work-archive">
      <div className="work-archive__header">
        <div>
          <div className="eyebrow">The archive</div>
          <h2 className="work-archive__title">More case studies.</h2>
        </div>
        <div className="work-archive__filters">
          {filterNames.map((name) => {
            const count = name === "All" ? cases.length : cases.filter((c) => c.tag === name).length;
            return (
              <button
                type="button"
                key={name}
                onClick={() => setFilter(name)}
                className={`work-filter${filter === name ? " work-filter--active" : ""}`}
              >
                {name} <span>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="work-archive__grid">
        {filtered.map((c) => {
          const isBranding = c.tag === "Branding";
          return (
            <Link href={`/case-studies/${c.slug}`} className="work-archive-card" key={c.slug}>
              <div className={`work-archive-card__media${isBranding ? " work-archive-card__media--branding" : ""}`}>
                {c.image && (
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 720px) 100vw, 33vw"
                    style={{ objectFit: isBranding ? "contain" : "cover" }}
                  />
                )}
                <span className="work-archive-card__tag">{c.tag}</span>
              </div>
              <div className="work-archive-card__body">
                <div className="work-archive-card__title">{c.title}</div>
                <p className="work-archive-card__desc">{c.body}</p>
                <div className="work-archive-card__footer">
                  <span className="work-archive-card__metric">{c.metric}</span>
                  <span className="work-archive-card__view">View ↗</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
