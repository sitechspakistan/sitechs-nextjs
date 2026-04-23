'use client';
// 'use client';
// import Link from "next/link";
// import useGsapReveal from "../hooks/useGsapReveal";
// import { useEffect, useState } from "react";

// export default function Component() {
//   useGsapReveal();
//   const [caseStudies, setCaseStudies] = useState([]);

//   useEffect(() => {
//     fetch("https://cms.sitechs.co/case-studies")
//       .then(res => res.json())
//       .then(data => setCaseStudies(data))
//       .catch(err => console.error("Error fetching case studies:", err));
//   }, []);

//   return (
//     <>
//       <div className="tm-hero-area tm-hero-ptb">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="tm-hero-content">
//                 <span className="tm-hero-subtitle">Our Work</span>
//                 <h4 className="tm-hero-title tp-char-animation">Case Studies</h4>
//               </div>
//               <div className="tm-hero-text tp_title_anim">
//                 <p>
//                   We are a diverse team that works as fancies attention to
//                   details, enjoys beers on Friday nights and aspires to design
//                   the dent in the universe.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="pm-project-masonary-area">
//         <div className="container container-1800">
//           <div className="row gx-0 grid-2">
//             {caseStudies.map((item) => (
//               <div className="col-xl-6 grid-item-2" key={item.id}>
//                 <div className="pm-project-masonary-item p-relative">
//                   <div className="fix">
//                     <img
//                       src={`https://cms.sitechs.co${item.gallery?.[0]?.url}`}
//                       alt={item.title}
//                     />
//                   </div>
//                   <div className="pm-project-masonary-content">
//                     <span className="pm-project-masonary-subtitle">{item.service}</span>
//                     <h4 className="pm-project-masonary-title">
//                       <Link href={`/case-studies/${item.slug}`}>{item.title}</Link>
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div> */}


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
//     </>
//   );
// }


import { useState } from "react";
import Link from "next/link";
import caseStudies from "@/data/caseStudies.json";

export default function Component() {

  // ✅ FIX 1: proper naming
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "AI Automation",
    "Web Development",
    "Logo & Branding"
  ];

  // ✅ FIX 2: correct filter logic (no includes)
  const filteredData =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* HERO SECTION */}
      <div className="tm-hero-area pt-180 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">

              <div className="tm-hero-content">
                {/* <span className="tm-hero-subtitle">Our Work</span> */}
                <h4 className="tm-hero-title tp-char-animation">
                  Case Studies
                </h4>
              </div>

              <div className="tm-hero-text tp_title_anim ">
                <p>
                  We are a diverse team that works as fancies attention to details,<br />
                  enjoys beers on Friday nights and aspires to design the dent in the universe.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CASE STUDIES SECTION */}
      <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
        <div className="container">

          {/* FILTER BUTTONS */}
          <div className="row justify-content-center">
            <div className="col-xl-8">

              <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-40">

                {categories.map((cat, index) => (
                  <div key={cat} className="d-flex align-items-center">

                    {/* FILTER BUTTON */}
                    <button
                      onClick={() => setActiveFilter(cat)}
                      className={activeFilter === cat ? "active" : ""}
                    >
                      {cat}
                    </button>

                    {/* separator */}
                    {index < categories.length - 1 && (
                      <span className="filter-separator mx-2">/</span>
                    )}

                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* GRID */}
          <div className="row justify-content-between align-items-center pt-50">

            {/* GRID */}
            <div className="col-lg-12 case-masonry-grid">
              {filteredData.map((item) => (
                <div className="case-masonry-item" key={item.id}>

                  <Link href={`/case-studies/${item.slug}`} className="case-card">

                    <div className="case-card-image-wrapper">
                      <img
                        src={`/assets/images/thumbnail/${item.thumb}`}
                        alt={item.title}
                      />
                    </div>

                    <div className="case-card-info">
                      <h4 className="case-card-title">{item.title}</h4>
                      <span className="case-card-service">{item.service}</span>
                    </div>

                  </Link>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}