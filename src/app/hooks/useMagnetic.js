"use client";

// Mouse-follow "magnetic" transform for CTA buttons.
export default function useMagnetic() {
  const onMouseMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.16;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.24;
    el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
  };

  const onMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0,0)";
  };

  return { onMouseMove, onMouseLeave };
}
