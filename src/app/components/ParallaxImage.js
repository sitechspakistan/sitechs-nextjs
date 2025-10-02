"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxImage({ src, alt = "", speed = 0.4, className = "" }) {
  const imgRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    // Kill old ScrollTriggers when route changes
    ScrollTrigger.getAll().forEach((st) => st.kill());

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => (1 - speed) * window.innerHeight,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      });
    }, el);

    // Force refresh after setup
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [pathname, speed]); // re-run on every route change

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      data-speed={speed}
    />
  );
}