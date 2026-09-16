"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ParallaxImage({ src, alt = "", speed = 0.4, className = "" }) {
  const imgRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const yPos = (scrollTop - rect.top) * speed * 0.5;
          el.style.transform = `translate3d(0, ${yPos}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call to set position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, speed]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        transition: "transform 0.1s linear",
        willChange: "transform",
      }}
      data-speed={speed}
    />
  );
}