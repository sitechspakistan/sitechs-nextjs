'use client';
import Link from "next/link";
import useGsapReveal from "../hooks/useGsapReveal";

export default function CaseStudies() {
    useGsapReveal();
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
                    <div className="col-xl-6 grid-item-2">
                        <div className="pm-project-masonary-item p-relative">
                        <div className="fix"><img src="/assets/images/case-studies/1.jpg" alt="" /></div>
                        <div className="pm-project-masonary-content">
                            <span className="pm-project-masonary-subtitle">Website</span>
                            <h4 className="pm-project-masonary-title"><Link href="/case-studies/followup-agent">HMG</Link></h4>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6 grid-item-2">
                        <div className="pm-project-masonary-item p-relative">
                        <div className="fix"><img src="/assets/images/case-studies/2.jpg" alt="" /></div>
                        <div className="pm-project-masonary-content">
                            <span className="pm-project-masonary-subtitle">Portal</span>
                            <h4 className="pm-project-masonary-title"><Link href="/case-studies/followup-agent">HR System</Link></h4>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6 grid-item-2">
                        <div className="pm-project-masonary-item p-relative">
                        <div className="fix"><img src="/assets/images/case-studies/3.jpg" alt="" /></div>
                        <div className="pm-project-masonary-content">
                            <span className="pm-project-masonary-subtitle">Ai Automation</span>
                            <h4 className="pm-project-masonary-title"><Link href="/case-studies/followup-agent">Follow-up System</Link></h4>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6 grid-item-2">
                        <div className="pm-project-masonary-item p-relative">
                        <div className="fix"><img src="/assets/images/case-studies/4.jpg" alt="" /></div>
                        <div className="pm-project-masonary-content">
                            <span className="pm-project-masonary-subtitle">Portal</span>
                            <h4 className="pm-project-masonary-title"><Link href="/case-studies/followup-agent">UPFeeds</Link></h4>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sv-big-text-area pt-80 pb-80">
            <div className="container container-1530">
                <div className="sv-small-text-box d-flex justify-content-between">
                    <span>DIGITAL DESIGN EXPERIENCE</span>
                    <span>Sitechs</span>
                </div>
                <div className="sv-big-text-box">
                    <h4 className="sv-big-text tp-char-animation"><a href="contact.html">Get in Touch</a></h4>
                </div>
            </div>
        </div>
        </>
    );
}