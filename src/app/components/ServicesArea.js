"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function ServicesArea() {
  //   useEffect(() => {
  //     const mm = gsap.matchMedia();

  //     mm.add("(min-width: 991px)", () => {
  //       const sections = gsap.utils.toArray(".project-panel-2");

  //       sections.forEach((section) => {
  //         gsap.to(section, {
  //           scrollTrigger: {
  //             trigger: section,
  //             pin: true,
  //             scrub: 1,
  //             start: "top top",
  //             end: "bottom 100%",
  //             endTrigger: ".project-panel-area-2",
  //             pinSpacing: false,
  //             markers: false,
  //           },
  //         });
  //       });
  //     });

  //     return () => {
  //       mm.revert();
  //       ScrollTrigger.getAll().forEach((st) => st.kill());
  //     };
  //   }, []);

  return (
    <div className="sv-service-area project-panel-area-2 bg-black pt-80 pb-80">
      <div className="container ">
        <h2 className="text-white text-center">What We do</h2>
      </div>
      <div className="container container-1480 p-0">
        <div className="row mx-2 py-2">
          <div className="col-lg-4">
            <div className="services_box">

              <div className="services_image">
                <Image
                  src="/assets/images/services/web.png"
                  width={180}
                  height={180}
                  alt="web-development"
                />
              </div>

              <div className="services_content">
                <h3>Web Development</h3>
                <p>
                  We build fast, secure, and scalable web apps using frameworks like React, Next.js...
                </p>
                <Link href="/services/web-development">View Details ↗</Link>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="services_box">

              <div className="services_image">
                <Image
                  src="/assets/images/services/ai.png"
                  width={180}
                  height={180}
                  alt="web-development"
                />
              </div>

              <div className="services_content">
                <h3>AI</h3>
                <p>
                  We create smart AI systems that automate tasks and improve decision...
                </p>
                <Link href="#">View Details ↗</Link>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="services_box">

              <div className="services_image">
                <Image
                  src="/assets/images/services/tools.png"
                  width={180}
                  height={180}
                  alt="web-development"
                />
              </div>

              <div className="services_content">
                <h3>Automation Tools</h3>
                <p>
                  We develop automation tools that simplify workflows and eliminate...
                </p>
                <Link href="#">View Details ↗</Link>
              </div>

            </div>
          </div>

          <div className="col-lg-4">
            <div className="services_box">

              <div className="services_image">
                <Image
                  src="/assets/images/services/app.png"
                  width={180}
                  height={180}
                  alt="web-development"
                />
              </div>

              <div className="services_content">
                <h3>App Development</h3>
                <p>
                  We develop mobile apps that are fast, scalable, and visually polished. From...
                </p>
                <Link href="#">View Details ↗</Link>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="services_box">

              <div className="services_image">
                <Image
                  src="/assets/images/services/ex.png"
                  width={180}
                  height={180}
                  alt="web-development"
                />
              </div>

              <div className="services_content">
                <h3>Chrome Extensions</h3>
                <p>
                  We build lightweight, intuitive Chrome extensions that boost productivity and f...
                </p>
                <Link href="#">View Details ↗</Link>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="services_box">

              <div className="services_image">
                <Image
                  src="/assets/images/services/aim.png"
                  width={180}
                  height={180}
                  alt="web-development"
                />
              </div>

              <div className="services_content">
                <h3>UI/UX</h3>
                <p>
                  We design experiences that blend creativity and purpose. Using Figma,...
                </p>
                <Link href="#">View Details ↗</Link>
              </div>

            </div>
          </div>
        </div>
        {/* Service Item 1
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
                      <p>Automate repetitive tasks and streamline workflows with smart AI solutions tailored to your business needs.</p>
                      <p>Save time, cut costs, and boost productivity using AI-driven automation that learns, adapts, and scales with you.</p>
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

        Service Item 2
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
                      <p>We build fast, responsive, and conversion-driven websites that bring your digital presence to life beautifully.</p>
                      <p>From landing pages to full-scale platforms, we craft seamless web experiences that engage and convert visitors.</p>
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

        Service Item 3
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
                      <p>Your brand deserves to stand out. We design unique logos that tell your story and leave a lasting impression.</p>
                      <p>Build a strong visual identity with modern, memorable branding that connects with your audience instantly.</p>
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
        </div> */}
      </div>
    </div>
  );
}