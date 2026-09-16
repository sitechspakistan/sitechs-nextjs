import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import caseStudies from "../../../data/caseStudies";
import CaseStudyBody from "./CaseStudyBody";
import CtaBand from "../../components/services/CtaBand";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Case Study | Sitechs" };

  return {
    title: cs.seo?.metaTitle || `${cs.title} | Sitechs`,
    description: cs.seo?.metaDescription,
    openGraph: {
      title: cs.seo?.metaTitle || cs.title,
      description: cs.seo?.metaDescription,
      images: [{ url: cs.image, width: 1200, height: 800, alt: cs.title }],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const description = Array.isArray(cs.description) ? cs.description.join(" ") : cs.description;
  const category = Array.isArray(cs.category) ? cs.category : [cs.category].filter(Boolean);
  const deliverables = (Array.isArray(cs.deliverables) ? cs.deliverables : [cs.deliverables]).flat().filter(Boolean);

  return (
    <main className="svc-page">
      <section className="cs-hero">
        <div className="cs-hero__inner">
          <div className="cs-hero__copy">
            <div className="svc-breadcrumb">
              <Link href="/case-studies">Case studies</Link>
              <span>/</span>
              {category.map((c) => (
                <span className="svc-breadcrumb__current" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <h1 className="cs-hero__title">{cs.title}</h1>
            <p className="cs-hero__desc">{description}</p>
            <div className="svc-hero__actions">
              <Link href="/start-a-project" className="btn btn--primary">
                Start a project
              </Link>
              <Link href="/case-studies" className="btn btn--outline">
                All case studies
              </Link>
            </div>
          </div>
          <div className="cs-hero__media">
            <Image src={cs.image} alt={cs.title} fill sizes="(max-width: 720px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {deliverables.length > 0 && (
        <div className="cs-deliverables">
          <div className="eyebrow">Deliverables</div>
          <div className="cs-deliverables__list">
            {deliverables.map((d) => (
              <span className="cs-deliverables__pill" key={d}>
                {d}
              </span>
            ))}
          </div>
        </div>
      )}

      <section className="cs-content theme-light">
        <div className="cs-content__inner">
          <CaseStudyBody heading="Our Solution" list={cs.solution} />
          <CaseStudyBody heading="Results" list={cs.result} />
        </div>
      </section>

      <div className="cs-foot-nav">
        <Link href="/case-studies" className="cs-foot-nav__back">
          ← All case studies
        </Link>
        <Link href="/start-a-project" className="btn btn--outline">
          Start a project ↗
        </Link>
      </div>

      <CtaBand
        badgeText="Free, 30 minutes, no deck"
        title="Let us build intelligent things."
        body="Tell us the task nobody wants to do. We will map where automation pays off first and what it would save."
        primaryLabel="Start a project"
        primaryHref="/start-a-project"
      />
    </main>
  );
}
