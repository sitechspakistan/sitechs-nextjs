"use client";

import { useEffect, useRef, useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

function Step({ step, index, setStepRef }) {
  const [ref, revealed] = useRevealOnScroll();

  return (
    <div
      ref={(el) => {
        ref.current = el;
        setStepRef(index, el);
      }}
      className={`svc-process__step reveal reveal--up${revealed ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="svc-process__step-dot">
        <span />
      </span>
      <div className="svc-process__step-head">
        <span className="svc-process__step-n">{step.n}</span>
        <h3 className="svc-process__step-title">{step.title}</h3>
      </div>
      <p className="svc-process__step-body">{step.body}</p>
      {step.items?.length > 0 && (
        <div className="svc-process__step-tags">
          {step.items.map((tag) => (
            <span className="svc-process__step-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="svc-process__step-out">
        <span />
        {step.out}
      </div>
    </div>
  );
}

export default function ProcessTimeline({ eyebrowNum, eyebrowLabel, title, accent, intro, steps }) {
  const stepRefs = useRef([]);
  const [active, setActive] = useState(0);

  const setStepRef = (i, el) => {
    stepRefs.current[i] = el;
  };

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      let idx = 0;
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        if (el.getBoundingClientRect().top < vh * 0.55) idx = i;
      });
      setActive(idx);
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
  }, [steps.length]);

  const pct = ((active + 1) / steps.length) * 100;

  return (
    <section id="process" className="svc-process theme-light">
      <div className="svc-process__inner">
        <div className="svc-process__grid">
          <div className="svc-process__intro">
            <div className="eyebrow">
              {eyebrowNum} — {eyebrowLabel}
            </div>
            <h2 className="svc-process__title">
              {title} <span className="accent-italic">{accent}</span>
            </h2>
            <p className="svc-process__body">{intro}</p>
            <div className="svc-process__counter-row">
              <span className="svc-process__counter">{String(active + 1).padStart(2, "0")}</span>
              <span className="svc-process__counter-total">of {String(steps.length).padStart(2, "0")}</span>
              <div className="svc-process__progress-line">
                <div className="svc-process__progress-line-fill" style={{ width: `${pct}%` }} />
              </div>
            </div>
          </div>

          <div className="svc-process__timeline">
            <div className="svc-process__rail-track" />
            <div className="svc-process__rail-fill" style={{ height: `${pct}%` }} />
            {steps.map((step, i) => (
              <Step step={step} index={i} key={step.n} setStepRef={setStepRef} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
