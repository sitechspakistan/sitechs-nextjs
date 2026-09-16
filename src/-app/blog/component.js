"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import blogData from "@/data/blogdata.json";

export default function Component() {
  if (!blogData.length) {
    return <div className="text-center py-10">Loading blogs...</div>;
  }

  // Sort blogs by date (latest first)
  // const sortedBlogs = blogs.sort(
  //   (a, b) => new Date(b.published_at) - new Date(a.published_at),
  // );

  // // Latest blog for banner
  // const latestBlog = sortedBlogs[0];
  // const otherBlogs = sortedBlogs;

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
      <h4 className="tp-blog-standard-title tp-char-animation pt-150 text-center text-black">
        {"Blogs"}
      </h4>
      {/* <div className="tp-blog-standard-area pt-120">
        <div className="container container-1500">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-blog-standard-thumb-box p-relative">
                <img
                  data-speed=".8"
                  src={`https://cms.sitechs.co${latestBlog.Image?.url}`}
                  alt={latestBlog.Title}
                />
                <div className="tp-blog-standard-title-box d-none d-sm-block"></div>
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
      </div> */}

      {/* Other Blogs Grid */}
      <div className="blog-details-realated-area pt-80 pb-80">
        <div className="container">
          <div className="row">
            {blogData.map((blog, index) => (
              <div className="col-xl-4 col-lg-6 col-md-6 mb-50" key={index}>
                <div className="tp-blog-item">
                  <div className="tp-blog-thumb fix p-relative">
                    <img src={`${blog.image}`} alt={blog.title} />
                    <div className="tp-blog-meta">
                      <span>{formatDate(blog.date)}</span>
                    </div>
                  </div>
                  <div className="tp-blog-content">
                    <h4 className="tp-blog-title-sm">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
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
