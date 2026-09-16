import Link from "next/link";
import blogData from "../../data/blogdata.json";
import CtaBand from "../components/services/CtaBand";

export const metadata = {
  title: "Blog | Sitechs",
  description: "What we learn shipping automations and websites — written for the person paying for them, not for search engines.",
};

function readTime(html) {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export default function BlogIndexPage() {
  const posts = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="svc-page">
      <section className="svc-index-hero">
        <div className="svc-index-hero__inner">
          <div className="svc-index-hero__eyebrow">
            <span className="svc-index-hero__eyebrow-line" />
            Blog
            <span className="svc-index-hero__eyebrow-line" />
          </div>
          <h1 className="svc-index-hero__title">
            Notes on
            <br />
            <span className="accent-italic">building the work.</span>
          </h1>
          <p className="svc-index-hero__body">
            What we learn shipping automations and websites — written for the person paying for them, not for search
            engines.
          </p>
        </div>
      </section>

      <section className="blog-index-section">
        <div className="blog-index-grid">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
              <div className="blog-card__meta">
                <span className="blog-card__tag">Insights</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
              <div className="blog-card__title">{post.title}</div>
              <p className="blog-card__summary">{post.summary}</p>
              <div className="blog-card__footer">
                <span className="blog-card__read">{readTime(post.content)}</span>
                <span className="blog-card__cta">Read ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
