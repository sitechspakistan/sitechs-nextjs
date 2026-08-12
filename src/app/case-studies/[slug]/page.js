import CaseStudyData from "@/data/caseStudies.js";


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = CaseStudyData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project does not exist.",
    };
  }

  return {
    title: project.seo?.metaTitle || `${project.title} | Case Studies`,
    description: project.seo?.metaDescription || project.description?.slice(0, 150),

    openGraph: {
      title: project.seo?.metaTitle || project.title,
      description: project.seo?.metaDescription || project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
        },
      ],
    },

    alternates: {
      canonical: `https://www.webefytoday.com/case-studies/${slug}`,
    },
    // icons: {
    //   icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    // },
  };
}

const renderContent = (content) => {
  if (!content) return null;
  const arr = Array.isArray(content) ? content : [content];

  return arr.map((item, i) => {
    if (typeof item === "string") {
      return <p key={i} className="text-secondary effectFade fadeUp">{item}</p>;
    }
    if (item?.type === "list") {
      return (
        <ul key={i} className="text-secondary effectFade fadeUp">
          {item.items.map((li, j) => <li key={j}>{li}</li>)}
        </ul>
      );
    }
    return null;
  });
};

export default async function Page({ params }) {
  const { slug } = await params;

  const project = CaseStudyData.find(
    (item) => item.slug === (slug)
  );

  if (!project) {
    return <h1>No Project Found</h1>;
  }

  return (
    <>
      <div id="works" className="section-work-single box-white flat-spacing pt-80">
        <div className="container">
          <div className="row mb-32">
            <h2 className="heading fw-semibold mb-32 effectFade fadeUp text-center text-white pt-4 pb-0">{project.title}</h2>

            <div className="col-12">
              <div className="wrap-image mb-30 effectFade fadeZoom text-center">
                <img src={project.image} alt="" />
              </div>
              <p className="text-secondary effectFade fadeUp">
                {project.description}
              </p>
            </div>
          </div>
          <div className="row mb-30 " >
            <div className="col-md-8 md-mb-24">
              <div className="text-body-1 fw-semibold text-secondary mb-15 effectFade fadeUp">
                DELIVERABLES
              </div>
              <div className="list-tags effectFade fadeUp">
                {project.deliverables?.map((item, i) => (
                  <a key={i} href="#" className="tags-item fw-semibold">{item}</a>
                ))}
              </div>
            </div>

          </div>
          <div className="row mb-60">
            <div className="col-12">
              <h2 className="heading fw-semibold mb-20 effectFade fadeUp">Our Solution</h2>
              {renderContent(project.solution)}
            </div>
          </div>
          <div className="row mb-60">
            <div className="col-12">
              <h2 className="heading fw-semibold mb-20 effectFade fadeUp">Results</h2>
              {renderContent(project.result)}
            </div>
          </div>

        </div>
      </div>

      {/* <ContactForm /> */}
    </>
  );
}


// export async function generateMetadata({ params }) {
//   const { slug } = params;

//   const caseStudy = caseStudies.find(
//     (item) => item.slug === slug
//   );

//   return {
//     title: caseStudy
//       ? `${caseStudy.title} | Case Study | Sitechs`
//       : "Case Study | Sitechs",

//     description:
//       caseStudy?.short_description || "Case Study | Sitechs",

//     alternates: {
//       canonical: `https://sitechs.co/case-studies/${slug}`,
//     },

//     openGraph: {
//       title: caseStudy?.title || "Case Study | Sitechs",
//       description: caseStudy?.short_description || "",
//       images: [
//         {
//           url: caseStudy?.image
//             ? `/assets/images/case-studies/${caseStudy.image}`
//             : "",
//         },
//       ],
//     },
//   };
// }

// export default function CaseStudyDetail({ params }) {

//   const { slug } = params;

//   // ✅ JSON se match
//   const caseStudy = caseStudies.find(
//     (item) => item.slug === slug
//   );

//   if (!caseStudy) {
//     return (
//       <div className="text-center py-10">
//         Case study not found
//       </div>
//     );
//   }
//   const currentIndex = caseStudies.findIndex(
//     (item) => item.slug === slug
//   );

//   const prevCase = caseStudies[currentIndex - 1];
//   const nextCase = caseStudies[currentIndex + 1];

//   return (
//     <div className="project-details-1-area project-details-1-pt pb-100">
//       <div className="container container-1740 p-10">

//         <div className="row g-0">

//           {/* LEFT IMAGES */}
//           <div className="col-xl-7">
//             <div className="project-details-1-left">

//               <div className="project-details-1-thumb mb-10">
//                 <img
//                   src={`/assets/images/case-studies/${caseStudy.image}`}
//                   alt={caseStudy.title}
//                 />
//               </div>
//               {/* <div className="project-details-1-thumb mb-10">
//                 <img
//                   src={`/assets/images/case-study/${caseStudy.prop}`}
//                   alt={caseStudy.title}
//                 />
//               </div>
//               <div className="project-details-1-thumb mb-10">
//                 <img
//                   src={`/assets/images/case-study/${caseStudy.prop2}`}
//                   alt={caseStudy.title}
//                 />
//               </div> */}
//               {caseStudy.images && caseStudy.images.map((img, index) => (
//                 <div className="project-details-1-thumb mb-10" key={index}>
//                   <img
//                     src={`/assets/images/case-study/${img}`}
//                     alt={`${caseStudy.title}-${index}`}
//                   />
//                 </div>
//               ))}
//             </div>

//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="col-xl-5">
//             <div className="project-details-1-right-wrap">

//               <div className="project-details-1-right p-relative">

//                 <div className="project-details-1-title-box">
//                   <span className="project-details-1-subtitle">
//                     Case Study
//                   </span>

//                   <h4 className="project-details-1-title">
//                     {caseStudy.title}
//                   </h4>

//                   <p>{caseStudy.short_description}</p>
//                 </div>

//                 <div className="project-details-1-info-wrap">

//                   <div className="project-details-1-info">
//                     <span>Client</span>
//                     <h4>{caseStudy.clients}</h4>
//                   </div>

//                   <div className="project-details-1-info">
//                     <span>Date</span>
//                     <h4>{caseStudy.date}</h4>
//                   </div>

//                   <div className="project-details-1-info">
//                     <span>Services</span>
//                     <h4>{caseStudy.service}</h4>
//                   </div>

//                   <div className="project-details-1-info">
//                     <span>Deliverables</span>
//                     <h4>{caseStudy.deliverables}</h4>
//                   </div>

//                   {/* MARKDOWN CONTENT */}
//                   <div className="project-details-1-info">
//                     <span className="text-dark fs-3 fw-600">Our Solution</span>
//                     <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                       {caseStudy.our_solution}
//                     </ReactMarkdown>
//                   </div>
//                   <div className="project-details-1-info">
//                     <span className="text-dark fs-4 fw-600">Results</span>
//                     <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                       {caseStudy.results}
//                     </ReactMarkdown>
//                   </div>

//                 </div>

//               </div>

//             </div>
//             <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
//               <a
//                 className="project-details-1-prev"
//                 href={prevCase ? `/case-studies/${prevCase.slug}` : "#"}
//               >
//                 <i className="fa-sharp fa-regular fa-arrow-left"></i>
//                 <span>Prev</span>
//               </a>

//               <a
//                 className="project-details-1-next"
//                 href={nextCase ? `/case-studies/${nextCase.slug}` : "#"}
//               >
//                 <span>Next</span>
//                 <i className="fa-sharp fa-regular fa-arrow-right"></i>
//               </a>
//             </div>
//           </div>


//         </div>

//       </div>
//     </div>
//   );
// }


// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const res = await fetch(`https://cms.sitechs.co/case-studies?slug=${slug}`);
//   const data = await res.json();
//   const caseStudy = data?.[0];

//   return {
//     title: caseStudy
//       ? `${caseStudy.title} | Case Study | Sitechs`
//       : "Case Study | Sitechs",
//     description: caseStudy?.short_description || "Case Study | Sitechs",
//     alternates: {
//       canonical: `https://sitechs.co/case-studies/${slug}`,
//     },
//     openGraph: {
//       title: caseStudy?.title || "Case Study | Sitechs",
//       description: caseStudy?.short_description || "Case Study | Sitechs",
//       images: [
//         {
//           url: `https://cms.sitechs.co${caseStudy?.gallery?.[0]?.url}`,
//         },
//       ],
//     }
//   };
// }

// export default async function CaseStudyDetail({ params }) {
//     const { slug } = await params;

//     const res = await fetch(`https://cms.sitechs.co/case-studies?slug=${slug}`);
//     const data = await res.json();
//     const caseStudy = data?.[0];

//     if (!caseStudy) {
//       return <div className="text-center py-10">Case study not found</div>;
//     }

//     return (
//       <>
//         <div className="project-details-1-area project-details-1-pt pb-100">
//           <div className="container container-1740 p-10">
//             <div className="row g-0">
//               <div className="col-xl-7">
//                 <div className="project-details-1-left">
//                   {caseStudy.gallery?.map((img) => (
//                     <div className="project-details-1-thumb mb-10" key={img.id}>
//                       <img
//                         src={`https://cms.sitechs.co${img.url}`}
//                         alt={caseStudy.title}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="col-xl-5">
//                 <div className="project-details-1-right-wrap">
//                   <div className="project-details-1-right p-relative">
//                     <div className="project-details-1-title-box">
//                       <span className="project-details-1-subtitle">Case Study</span>
//                       <h4 className="project-details-1-title">{caseStudy.title}</h4>
//                       <p>{caseStudy.short_description}</p>
//                     </div>

//                     <div className="project-details-1-info-wrap">
//                       <div className="project-details-1-info">
//                         <span>Client</span>
//                         <h4>{caseStudy.client_name}</h4>
//                       </div>

//                       <div className="project-details-1-info">
//                         <span>Date</span>
//                         <h4>{new Date(caseStudy.project_date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h4>
//                       </div>

//                       <div className="project-details-1-info">
//                         <span>Services</span>
//                         <h4>{caseStudy.service}</h4>
//                       </div>

//                       <div className="project-details-1-info">
//                         <span>Deliverables</span>
//                         <h4>{caseStudy.deliverables}</h4>
//                       </div>

//                       <div className="project-details-1-info">
//                           <ReactMarkdown
//                             remarkPlugins={[remarkGfm]}
//                             rehypePlugins={[rehypeRaw]}
//                             components={{
//                               img: ({ node, ...props }) => (
//                                 <img
//                                   {...props}
//                                   className="my-6 rounded-xl"
//                                   src={`https://cms.sitechs.co${props.src}`}
//                                   alt={props.alt || ""}
//                                 />
//                               ),
//                               blockquote: ({ node, ...props }) => (
//                                 <blockquote className="text-dark ml-20" {...props} />
//                               )
//                             }}
//                           >
//                             {caseStudy.our_solution}
//                           </ReactMarkdown>
//                         </div>

//                       {/* <p>{caseStudy.result}</p> */}
//                     </div>
//                   </div>

//                   <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
//                     <a className="project-details-1-prev" href="#">
//                       <i className="fa-sharp fa-regular fa-arrow-left"></i>
//                       <span>Prev</span>
//                     </a>
//                     <a className="project-details-1-next" href="#">
//                       <span>Next</span>
//                       <i className="fa-sharp fa-regular fa-arrow-right"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
