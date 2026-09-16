"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapFade() {
  useEffect(() => {
    // Fade bottom
    if (document.querySelectorAll(".tp_fade_bottom").length > 0) {
      gsap.set(".tp_fade_bottom", { y: 100, opacity: 0 });
      gsap.utils.toArray(".tp_fade_bottom").forEach((item) => {
        gsap.to(item, {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: item,
            start: "top center+=400",
          },
        });
      });
    }

    // Fade top
    if (document.querySelectorAll(".tp_fade_top").length > 0) {
      gsap.set(".tp_fade_top", { y: -100, opacity: 0 });
      gsap.utils.toArray(".tp_fade_top").forEach((item) => {
        gsap.to(item, {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 2.5,
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
          },
        });
      });
    }

    // Fade left
    if (document.querySelectorAll(".tp_fade_left").length > 0) {
      gsap.set(".tp_fade_left", { x: -100, opacity: 0 });
      gsap.utils.toArray(".tp_fade_left").forEach((item) => {
        gsap.to(item, {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 2.5,
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
          },
        });
      });
    }

    // Fade right
    if (document.querySelectorAll(".tp_fade_right").length > 0) {
      gsap.set(".tp_fade_right", { x: 100, opacity: 0 });
      gsap.utils.toArray(".tp_fade_right").forEach((item) => {
        gsap.to(item, {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 2.5,
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
          },
        });
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
}