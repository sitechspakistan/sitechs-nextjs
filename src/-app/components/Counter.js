"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Reusable counter component
function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    let frameId;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            requestAnimationFrame(step);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [end, duration]);

  return <i ref={ref}>{count}</i>;
}

export default function Counter() {
  return (
    <div className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center">
      <div className="img-marq slide-funfact-overlay">
        <div className="middle-shadow">
          <span></span>
        </div>
        <div className="slide-img-left">
          <div className="box">
            <img src="/assets/images/counter/1.jpg" alt="" />
            <img src="/assets/images/counter/2.jpg" alt="" />
            <img src="/assets/images/counter/3.jpg" alt="" />
            <img src="/assets/images/counter/4.jpg" alt="" />
            <img src="/assets/images/counter/5.jpg" alt="" />
            <img src="/assets/images/counter/6.jpg" alt="" />
            <img src="/assets/images/counter/7.jpg" alt="" />
            <img src="/assets/images/counter/8.jpg" alt="" />
            <img src="/assets/images/counter/9.jpg" alt="" />
          </div>
          <div className="box">
            <img src="/assets/images/counter/1.jpg" alt="" />
            <img src="/assets/images/counter/2.jpg" alt="" />
            <img src="/assets/images/counter/3.jpg" alt="" />
            <img src="/assets/images/counter/4.jpg" alt="" />
            <img src="/assets/images/counter/5.jpg" alt="" />
            <img src="/assets/images/counter/6.jpg" alt="" />
            <img src="/assets/images/counter/7.jpg" alt="" />
            <img src="/assets/images/counter/8.jpg" alt="" />
            <img src="/assets/images/counter/9.jpg" alt="" />
          </div>
        </div>
        <div className="slide-img-right">
          <div className="box">
            <img src="/assets/images/counter/1.jpg" alt="" />
            <img src="/assets/images/counter/2.jpg" alt="" />
            <img src="/assets/images/counter/3.jpg" alt="" />
            <img src="/assets/images/counter/4.jpg" alt="" />
            <img src="/assets/images/counter/5.jpg" alt="" />
            <img src="/assets/images/counter/6.jpg" alt="" />
            <img src="/assets/images/counter/7.jpg" alt="" />
            <img src="/assets/images/counter/8.jpg" alt="" />
            <img src="/assets/images/counter/9.jpg" alt="" />
          </div>
          <div className="box">
            <img src="/assets/images/counter/1.jpg" alt="" />
            <img src="/assets/images/counter/2.jpg" alt="" />
            <img src="/assets/images/counter/3.jpg" alt="" />
            <img src="/assets/images/counter/4.jpg" alt="" />
            <img src="/assets/images/counter/5.jpg" alt="" />
            <img src="/assets/images/counter/6.jpg" alt="" />
            <img src="/assets/images/counter/7.jpg" alt="" />
            <img src="/assets/images/counter/8.jpg" alt="" />
            <img src="/assets/images/counter/9.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="slide-funfact-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4>
                    <AnimatedCounter end={235} duration={2000} />+
                  </h4>
                  <span>Projects Finished</span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4>
                    <AnimatedCounter end={12} duration={2000} />+
                  </h4>
                  <span>Years of Experience</span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4>
                    <AnimatedCounter end={140} duration={2000} />+
                  </h4>
                  <span>Clients Worldwide</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="text-center">
                  <Link href="/case-studies" className="tp-btn-border-lg text-white border-white mt-5">View Our Case Studies</Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}