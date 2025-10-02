"use client";
import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesArea() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 991px)", () => {
      const sections = gsap.utils.toArray(".project-panel-2");

      sections.forEach((section) => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: "top top",
            end: "bottom 100%",
            endTrigger: ".project-panel-area-2",
            pinSpacing: false,
            markers: false,
          },
        });
      });
    });

    return () => {
      mm.revert(); // cleanup on unmount or route change
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {/* Service Item 1 */}
        <div className="sv-service-item project-panel-2">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-6">
              <div className="sv-service-thumb">
                <img src="/assets/images/ai.jpg" alt="AI Automation" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sv-service-content-wrap d-flex align-items-center">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>01</i>
                    </span>
                    <h4 className="sv-service-title">AI Automation</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>
                        We create your graphic designs according to your budget
                        and your needs. Reveal your brand image and capture your
                        audience.
                      </p>
                      <p>
                        We create your graphic designs according to your budget
                        and your needs. Reveal your brand image and capture your
                        audience.
                      </p>
                    </div>
                    <div className="sv-service-btn">
                      <Link className="sitechs-btn-1" href="/ai-automations">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 2 */}
        <div className="sv-service-item project-panel-2">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-6">
              <div className="sv-service-thumb">
                <img src="/assets/images/web.jpg" alt="Web Development" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sv-service-content-wrap d-flex align-items-center">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>02</i>
                    </span>
                    <h4 className="sv-service-title">Web Development</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>
                        We create your graphic designs according to your budget
                        and your needs. Reveal your brand image and capture your
                        audience.
                      </p>
                      <p>
                        We create your graphic designs according to your budget
                        and your needs. Reveal your brand image and capture your
                        audience.
                      </p>
                    </div>
                    <div className="sv-service-btn">
                      <Link className="sitechs-btn-1" href="/web-development">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 3 */}
        <div className="sv-service-item project-panel-2">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-6">
              <div className="sv-service-thumb">
                <img src="/assets/images/logo.jpg" alt="Logo & Branding" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sv-service-content-wrap d-flex align-items-center">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>03</i>
                    </span>
                    <h4 className="sv-service-title">Logo and Branding</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>
                        We create your graphic designs according to your budget
                        and your needs. Reveal your brand image and capture your
                        audience.
                      </p>
                      <p>
                        We create your graphic designs according to your budget
                        and your needs. Reveal your brand image and capture your
                        audience.
                      </p>
                    </div>
                    <div className="sv-service-btn">
                      <Link className="sitechs-btn-1" href="/logo-branding">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}