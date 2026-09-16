"use client";

import { useEffect, useState } from "react";

// Tracks whether the page has scrolled past the nav threshold, plus overall
// scroll progress (0-100) for a top progress bar.
export default function useScrollProgress(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setScrolled(y > threshold);
      setProgress(Math.min(100, (y / max) * 100));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold]);

  return { scrolled, progress };
}
