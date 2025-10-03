"use client";

import Link from "next/link";
import useGsapReveal from "../hooks/useGsapReveal";
import ParallaxImage from "../components/ParallaxImage";

export default function Component() {
  useGsapReveal();

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <h4 className="sv-hero-title tp-char-animation">AI Automation</h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-12 col-xl-12">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  Automate your workflows with Sitechs. We create AI-powered
                  solutions that save time, cut costs, and let you focus on
                  growing your business.
                </p>
                <p className="tp_title_anim">
                  Explore our work and see how AI can transform your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <ParallaxImage
                  src="/assets/images/ai-img.jpg"
                  alt="AI Automation"
                  speed={0.4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">
                  AI automation helps streamline business processes, reduce
                  manual effort, and create intelligent workflows tailored to
                  your needs.
                </p>
                <p>
                  From customer support to operations, Sitechs develops custom
                  AI solutions to give your business a competitive edge.
                </p>
              </div>

              <div className="service-details__fea-list">
                <ul>
                  <li>End-to-end AI workflow automation</li>
                  <li>Integration with existing tools</li>
                  <li>Custom AI model development</li>
                  <li>Scalable solutions for startups & enterprises</li>
                </ul>
              </div>

              <div className="service-details__left-text">
                <p>
                  We don’t just build solutions—we partner with you to optimize
                  and scale. Let’s design the future of your business with AI.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                <Link href="/ai-automations" className="active">
                  AI Automation
                </Link>
                <Link href="/web-development">Web Development</Link>
                <Link href="/logo-branding">Logo / Branding</Link>
              </div>
              <div className="service-details__right-text-box">
                <h4>AI Automation</h4>
                <p className="mb-20">
                  Future-proof your business with custom AI solutions that scale
                  with you.
                </p>
                <Link
                  href="/contact"
                  className="tp-btn-white background-black"
                >
                  Let’s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}