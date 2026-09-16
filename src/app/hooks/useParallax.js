"use client";

import { useEffect, useRef } from "react";

// Moves an element by scrollY * speed (simple background parallax).
export function useParallax(speed) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;

    const update = () => {
      ticking = false;
      el.style.transform = `translate3d(0, ${(window.scrollY * speed).toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}

// Drifts an element based on its own distance from viewport center —
// used for the staggered "float" effect on the work grid cards.
export function useDrift(factor) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;

    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -300 || r.top > vh + 300) return;
      const offset = (r.top + r.height / 2 - vh / 2) * factor;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
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
  }, [factor]);

  return ref;
}
