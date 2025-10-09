'use client';
import Link from "next/link";
import useGsapReveal from "../hooks/useGsapReveal";
import { useEffect, useState } from "react";

export default function Component() {
  useGsapReveal();
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    fetch("https://cms.sitechs.co/case-studies")
      .then(res => res.json())
      .then(data => setCaseStudies(data))
      .catch(err => console.error("Error fetching case studies:", err));
  }, []);

  return (
    <>
      <div className="tm-hero-area tm-hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tm-hero-content">
                <span className="tm-hero-subtitle">Our Work</span>
                <h4 className="tm-hero-title tp-char-animation">Case Studies</h4>
              </div>
              <div className="tm-hero-text tp_title_anim">
                <p>
                  We are a diverse team that works as fancies attention to
                  details, enjoys beers on Friday nights and aspires to design
                  the dent in the universe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pm-project-masonary-area">
        <div className="container container-1800">
          <div className="row gx-0 grid-2">
            {caseStudies.map((item) => (
              <div className="col-xl-6 grid-item-2" key={item.id}>
                <div className="pm-project-masonary-item p-relative">
                  <div className="fix">
                    <img
                      src={`https://cms.sitechs.co${item.gallery?.[0]?.url}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="pm-project-masonary-content">
                    <span className="pm-project-masonary-subtitle">{item.service}</span>
                    <h4 className="pm-project-masonary-title">
                      <Link href={`/case-studies/${item.slug}`}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="sv-big-text-area pt-80 pb-80">
        <div className="container container-1530">
          <div className="sv-small-text-box d-flex justify-content-between">
            <span>DIGITAL DESIGN EXPERIENCE</span>
            <span>Sitechs</span>
          </div>
          <div className="sv-big-text-box">
            <h4 className="sv-big-text tp-char-animation">
              <Link href="/chat-with-us">Get in Touch</Link>
            </h4>
          </div>
        </div>
      </div> */}
    </>
  );
}