"use client";

import { useEffect, useRef, useState } from "react";

const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export default function BeforeAfterSlider() {
  const stageRef = useRef(null);
  const draggingRef = useRef(false);
  const [cmp, setCmpState] = useState(50);

  const setCmpFromEvent = (e) => {
    const rect = stageRef.current.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setCmpState(Math.min(96, Math.max(4, pct)));
  };

  const onPointerDown = (e) => {
    stageRef.current.setPointerCapture(e.pointerId);
    draggingRef.current = true;
    setCmpFromEvent(e);
  };

  const onPointerMove = (e) => {
    if (draggingRef.current) setCmpFromEvent(e);
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  useEffect(() => {
    const demoT = setTimeout(() => {
      if (draggingRef.current) return;
      const start = performance.now();
      const duration = 1700;
      const tick = (now) => {
        if (draggingRef.current) return;
        const p = Math.min(1, (now - start) / duration);
        setCmpState(50 + Math.sin(ease(p) * Math.PI) * 26);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, 1400);
    return () => clearTimeout(demoT);
  }, []);

  const cmpPct = `${cmp.toFixed(2)}%`;
  const cmpInner = `${(10000 / Math.max(1, cmp)).toFixed(2)}%`;

  return (
    <div className="ba-slider">
      <div className="ba-slider__chrome">
        <span className="ba-slider__dot" />
        <span className="ba-slider__dot" />
        <span className="ba-slider__dot" />
        <span className="ba-slider__label">creativetriplet.com — redesign</span>
        <span className="ba-slider__hint">Drag to compare</span>
      </div>
      <div
        ref={stageRef}
        className="ba-slider__stage"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <img
          src="/assets/images/before-after/ct-after.png"
          alt="Creative Triplet website — after redesign"
          className="ba-slider__after"
          draggable={false}
        />
        <div className="ba-slider__before-wrap" style={{ width: cmpPct }}>
          <img
            src="/assets/images/before-after/ct-before.png"
            alt="Creative Triplet website — before redesign"
            className="ba-slider__before"
            style={{ width: cmpInner }}
            draggable={false}
          />
        </div>
        <div className="ba-slider__handle" style={{ left: cmpPct }}>
          <span className="ba-slider__handle-dot">⇄</span>
        </div>
        <span className="ba-slider__pill ba-slider__pill--before">Before</span>
        <span className="ba-slider__pill ba-slider__pill--after">After</span>
      </div>
    </div>
  );
}
