"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const waitImagesLoaded = (root) =>
      new Promise((resolve) => {
        const imgs = Array.from(root.querySelectorAll("img"));
        if (!imgs.length) return resolve();
        let remaining = imgs.length;
        imgs.forEach((img) => {
          const done = () => {
            remaining--;
            if (remaining === 0) resolve();
          };
          if (img.complete) done();
          else {
            img.addEventListener("load", done, { once: true });
            img.addEventListener("error", done, { once: true });
          }
        });
      });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", async () => {
      const ctx = gsap.context(() => {
        let tl, st;

        const init = async () => {
          await waitImagesLoaded(container);

          // Get full scrollable width
          const totalScrollWidth = container.scrollWidth;
          const viewportWidth = window.innerWidth;
          const horizontalDistance = totalScrollWidth - viewportWidth;

          if (horizontalDistance <= 0) return;

          // Reset transform before measuring
          gsap.set(container, { x: 0 });

          // Create timeline
          tl = gsap.timeline({
            defaults: { ease: "none" },
          });

          tl.to(container, {
            x: -horizontalDistance,
            ease: "none",
          });

          // Create scroll trigger
          st = ScrollTrigger.create({
            animation: tl,
            trigger: section,
            start: "top top",
            end: () => `+=${totalScrollWidth}`, // increased slightly to stop bounce
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });
        };

        init();

        const onResize = () => {
          if (st) st.kill();
          if (tl) tl.kill();
          gsap.set(container, { clearProps: "transform" });
          init();
        };

        window.addEventListener("resize", onResize);

        return () => {
          window.removeEventListener("resize", onResize);
          if (st) st.kill();
          if (tl) tl.kill();
          gsap.set(container, { clearProps: "transform" });
        };
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="tp-project-2-area tpproject pt-100 pb-100">
      <div className="panels p-relative fix">
        <div ref={containerRef} className="panels-container d-flex">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <div key={n} className="panel">
              <div className="tp-project-2-item p-relative">
                <div className="tp-project-2-thumb">
                  <img src={`/assets/img/home-02/project/project-${n}.jpg`} alt="" />
                </div>
                <div className="tp-project-2-content">
                  <span>{n % 2 === 0 ? "Branding" : "Concept"}</span>
                  <h4 className="tp-project-2-title-sm">
                    <a href="#">Project {n}</a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}