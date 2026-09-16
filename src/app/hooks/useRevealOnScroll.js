"use client";

import { useEffect, useRef, useState } from "react";

// Fades/slides an element in the first time it scrolls into view.
export default function useRevealOnScroll() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
      setRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, revealed];
}
