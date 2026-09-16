"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

function initReveal(selector, defaults, lineClass) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    const duration = el.getAttribute("data-duration") || defaults.duration;
    const onScroll = el.getAttribute("data-on-scroll") || defaults.onScroll;
    const stagger = el.getAttribute("data-stagger") || defaults.stagger;
    const delay = el.getAttribute("data-delay") || defaults.delay;

    if (typeof window !== "undefined" && window.SplitText) {
      if (el.split) el.split.revert(); // cleanup old instance
      el.split = new window.SplitText(el, {
        type: "lines,words,chars",
        linesClass: lineClass,
      });
    }

    const chars = el.split?.chars || el;

    if (onScroll == 1) {
      gsap.from(chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
        duration,
        delay,
        ease: "circ.out",
        y: 200,
        stagger,
        opacity: 0,
      });
    } else {
      gsap.from(chars, {
        duration,
        delay,
        ease: "circ.out",
        y: 200,
        stagger,
        opacity: 0,
      });
    }
  });
}

function initCharAnimation() {
  const elements = document.querySelectorAll(".tp-char-animation");

  elements.forEach((el) => {
    if (typeof window !== "undefined" && window.SplitText) {
      if (el.split) el.split.revert();
      el.split = new window.SplitText(el, { type: "chars,words" });

      gsap.set(el, { perspective: 300 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      tl.from(el.split.chars, {
        duration: 1,
        delay: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    }
  });
}

function initTitleAnimation() {
  const elements = document.querySelectorAll(".tp_title_anim");

  elements.forEach((el) => {
    if (typeof window !== "undefined" && window.SplitText) {
      if (el.split) el.split.revert();
      el.split = new window.SplitText(el, { type: "words,lines" });

      gsap.set(el, { perspective: 400 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      tl.from(el.split.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    }
  });
}

export default function useGsapReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // clear old triggers on route change
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // run split animations
    initReveal(".tp_reveal_anim", {
      duration: 1.5,
      onScroll: 1,
      stagger: 0.02,
      delay: 0.05,
    }, "tp-reveal-line");

    initReveal(".tp_reveal_anim-2", {
      duration: 2,
      onScroll: 1,
      stagger: 0.05,
      delay: 0.1,
    }, "tp-reveal-line-2");

    // run your extra animations
    initCharAnimation();
    initTitleAnimation();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [pathname]); // re-run on route change
}