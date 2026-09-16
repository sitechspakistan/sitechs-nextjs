import Link from "next/link";
import { notFound } from "next/navigation";
import blogData from "../../../data/blogdata.json";
import CtaBand from "../../components/services/CtaBand";

export function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return { title: "Blog | Sitechs" };

  return {
    title: post.seo?.title || `${post.title} | Sitechs`,
    description: post.seo?.description || post.summary,
    alternates: post.seo?.canonical ? { canonical: post.seo.canonical } : undefined,
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.summary,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

function readTime(html) {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogData.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="svc-page">
      <section className="cs-hero blog-post-hero">
        <div className="blog-post-hero__inner">
          <div className="svc-breadcrumb" style={{ justifyContent: "center" }}>
            <Link href="/blog">Blog</Link>
          </div>
          <h1 className="blog-post-hero__title">{post.title}</h1>
          <div className="blog-post-hero__meta">
            <span>{post.date}</span>
            <span>{readTime(post.content)}</span>
            <span>By Sitechs Studio</span>
          </div>
        </div>
      </section>

      <section className="blog-article theme-light">
        <div className="blog-article__inner">
          <p className="blog-article__excerpt">{post.summary}</p>
          <div className="blog-article__rule" />
          <div
            className="blog-article__body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="blog-article__footer">
            <Link href="/blog" className="cs-foot-nav__back">
              ← All articles
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="blog-related">
          <div className="blog-related__header">
            <h2 className="blog-related__title">Keep reading</h2>
            <Link href="/blog" className="svc-work-link">
              All articles ↗
            </Link>
          </div>
          <div className="next-service-grid">
            {related.map((p) => (
              <Link href={`/blog/${p.slug}`} className="next-service-card" key={p.slug}>
                <span className="next-service-card__n">Insights</span>
                <span className="next-service-card__title">{p.title}</span>
                <span className="next-service-card__tag">{p.summary}</span>
                <span className="next-service-card__link">Read ↗</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBand
        badgeText="Free, 30 minutes, no deck"
        title="Rather talk than read?"
        body="Bring the problem behind the search. We will tell you what we would do first, and what it costs."
        primaryLabel="Start a project"
        primaryHref="/start-a-project"
      />
    </main>
  );
}
