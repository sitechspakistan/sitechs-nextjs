"use client";

import { useEffect, useRef, useState } from "react";

// Animates a number up from 0 to `target` once its element enters view.
export default function useCountUp(target, duration = 1100) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (done.current) return;
      done.current = true;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return [ref, value];
}
