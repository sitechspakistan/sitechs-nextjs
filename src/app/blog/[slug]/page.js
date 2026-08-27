import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ParallaxImage from "@/app/components/ParallaxImage";
import blogData from "@/data/blogdata.json";

// ✅ SEO Metadata from Strapi fields
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog | Sitechs",
      description:
        "Explore insights, AI automation, and web development trends from Sitechs.",
    };
  }

  return {
    title: blog.seo.title || `${blog.title} | Sitechs`,
    description: blog.seo.description || blog.summary,

    openGraph: {
      title: blog.seo.title || blog.title,
      description:
        blog.meta_description || blog.seo.description || blog.summary,
      images: [
        {
          url: `${blog.image}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2>Blog not found</h2>
        <p>The article you’re looking for doesn’t exist.</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // ✅ Schema.org JSON-LD for BlogPosting
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sitechs.co/blog/${slug}`,
    },
    headline: blog.Title,
    description:
      blog.meta_description ||
      blog.content?.slice(0, 155).replace(/\n/g, " ") ||
      "",
    image: `https://cms.sitechs.co${blog.imagemage?.url}`,
    author: {
      "@type": "Organization",
      name: "Sitechs",
      url: "https://sitechs.co",
    },
    publisher: {
      "@type": "Organization",
      name: "Sitechs",
      logo: {
        "@type": "ImageObject",
        url: "https://sitechs.co/assets/images/logo.png",
      },
    },
    datePublished: blog.date,
    dateModified: blog.updatedAt || blog.published_at,
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero Section */}
      <div className="blog-details-area blog-details-without-sidebar">
        <div className="blog-details-without-sidebar p-relative d-flex align-items-end pt-170 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="blog-details-content z-index-5">
                  <span className="blog-details-meta text-black">
                    {formatDate(blog.date)}
                  </span>
                  <h1 className="blog-details-title tp-text-black tp-char-animation">
                    {blog.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container container-1800">
          <div className="blog-details-thumb-wrap">
            <div className="row">
              <div className="col-xl-12">
                <div className="blog-details-thumb">
                  <ParallaxImage
                    src={`${blog.image}`}
                    alt={blog.title}
                    speed=".8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="postbox__wrapper prose prose-lg max-w-none">
                <article className="blog-content">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      img: ({ node, ...props }) => (
                        <img
                          {...props}
                          className="my-6 rounded-xl"
                          src={`https://cms.sitechs.co${props.src}`}
                          alt={props.alt || ""}
                        />
                      ),
                      h1: ({ node, ...props }) => (
                        <h1
                          className="text-3xl font-bold mt-8 mb-4"
                          {...props}
                        />
                      ),

                      h2: ({ node, ...props }) => (
                        <h2
                          className="text-2xl font-semibold mt-6 mb-3"
                          {...props}
                        />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="leading-relaxed mb-4" {...props} />
                      ),
                    }}
                  >
                    {blog.content}
                  </ReactMarkdown>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      {/* <div className="blog-details-realated-area grey-bg-2 pt-90 pb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="blog-details-realated-title-box text-center mb-50">
                <h3 className="blog-details-realated-title">Latest posts</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {da.map((item) => (
              <div className="col-xl-4 col-lg-6 col-md-6 mb-50" key={item.id}>
                <div className="tp-blog-item">
                  <div className="tp-blog-thumb fix p-relative">
                    <img
                      src={`https://cms.sitechs.co${
                        item.Image?.formats?.medium?.url || item.Image?.url
                      }`}
                      alt={item.Title}
                    />
                    <div className="tp-blog-meta">
                      <span>{formatDate(item.published_at)}</span>
                    </div>
                  </div>
                  <div className="tp-blog-content">
                    <h4 className="tp-blog-title-sm">
                      <Link href={`/blog/${item.Slug}`}>{item.Title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}
