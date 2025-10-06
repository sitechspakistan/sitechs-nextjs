export default async function CaseStudyDetail({ params }) {
    const { slug } = params;
  
    const res = await fetch(`https://cms.sitechs.co/case-studies?slug=${slug}`);
    const data = await res.json();
    const caseStudy = data?.[0];
  
    if (!caseStudy) {
      return <div className="text-center py-10">Case study not found</div>;
    }
  
    return (
      <>
        <div className="project-details-1-area project-details-1-pt pb-100">
          <div className="container container-1740 p-10">
            <div className="row g-0">
              <div className="col-xl-7">
                <div className="project-details-1-left">
                  {caseStudy.gallery?.map((img) => (
                    <div className="project-details-1-thumb mb-10" key={img.id}>
                      <img
                        src={`https://cms.sitechs.co${img.url}`}
                        alt={caseStudy.title}
                      />
                    </div>
                  ))}
                </div>
              </div>
  
              <div className="col-xl-5">
                <div className="project-details-1-right-wrap">
                  <div className="project-details-1-right p-relative">
                    <div className="project-details-1-title-box">
                      <span className="project-details-1-subtitle">Case Study</span>
                      <h4 className="project-details-1-title">{caseStudy.title}</h4>
                      <p>{caseStudy.short_description}</p>
                    </div>
  
                    <div className="project-details-1-info-wrap">
                      <div className="project-details-1-info">
                        <span>Client</span>
                        <h4>{caseStudy.client_name}</h4>
                      </div>
  
                      <div className="project-details-1-info">
                        <span>Date</span>
                        <h4>{new Date(caseStudy.project_date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h4>
                      </div>
  
                      <div className="project-details-1-info">
                        <span>Services</span>
                        <h4>{caseStudy.service}</h4>
                      </div>
  
                      <div className="project-details-1-info">
                        <span>Deliverables</span>
                        <h4>{caseStudy.deliverables}</h4>
                      </div>
  
                      <div className="project-details-1-info">
                        <span>Our Solution</span>

                        {(() => {
                            const lines = caseStudy.our_solution.split("\n").filter(l => l.trim() !== "");
                            const headingLine = lines.find(line => line.startsWith("####"));
                            const heading = headingLine ? headingLine.replace(/^####\s*/, "") : "";
                            const listItems = lines
                            .filter(line => line.startsWith("-"))
                            .map(line => line.replace(/^-+\s*/, ""));

                            return (
                            <>
                                {heading && <h4>{heading}</h4>}
                                {listItems.length > 0 && (
                                <ul>
                                    {listItems.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                )}
                            </>
                            );
                        })()}
                        </div>
  
                      <p>{caseStudy.result}</p>
                    </div>
                  </div>
  
                  <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                    <a className="project-details-1-prev" href="#">
                      <i className="fa-sharp fa-regular fa-arrow-left"></i>
                      <span>Prev</span>
                    </a>
                    <a className="project-details-1-next" href="#">
                      <span>Next</span>
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }