"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Component() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("https://cms.sitechs.co/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  if (!blogs.length) {
    return <div className="text-center py-10">Loading blogs...</div>;
  }

  // Sort blogs by date (latest first)
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  );

  // Latest blog for banner
  const latestBlog = sortedBlogs[0];
  const otherBlogs = sortedBlogs;

  // Helper for date formatting
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Top Featured Blog */}
      <div className="tp-blog-standard-area pt-120">
        <div className="container container-1500">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-blog-standard-thumb-box p-relative">
                <img
                  data-speed=".8"
                  src={`https://cms.sitechs.co${latestBlog.Image?.url}`}
                  alt={latestBlog.Title}
                />
                <div className="tp-blog-standard-title-box d-none d-sm-block">
                  <h4 className="tp-blog-standard-title tp-char-animation">
                    {latestBlog.Title}
                  </h4>
                </div>
                <div className="tp-blog-standard-meta d-none d-sm-block">
                  <span>
                    {formatDate(latestBlog.published_at).split(" ")[0]} <br />
                    {formatDate(latestBlog.published_at).split(" ")[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Blogs Grid */}
      <div className="blog-details-realated-area pt-120 pb-70">
        <div className="container">
          <div className="row">
            {otherBlogs.map((blog) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 mb-50"
                key={blog.id}
              >
                <div className="tp-blog-item">
                  <div className="tp-blog-thumb fix p-relative">
                    <img
                      src={`https://cms.sitechs.co${blog.Image?.formats?.medium?.url || blog.Image?.url}`}
                      alt={blog.Title}
                    />
                    <div className="tp-blog-meta">
                      <span>{formatDate(blog.published_at)}</span>
                    </div>
                  </div>
                  <div className="tp-blog-content">
                    <h4 className="tp-blog-title-sm">
                      <Link href={`/blog/${blog.Slug}`}>{blog.Title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}