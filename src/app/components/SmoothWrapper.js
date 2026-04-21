// "use client";

// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// let ScrollSmoother;
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// export default function SmoothWrapper({ children }) {
//   useEffect(() => {
//     (async () => {
//       const smootherModule = await import(
//         "../../../public/assets/js/gsap-scroll-smoother.js"
//       );

//       ScrollSmoother = smootherModule.default || smootherModule;
//       gsap.registerPlugin(ScrollSmoother);

//       const wrapper = document.querySelector("#smooth-wrapper");
//       const content = document.querySelector("#smooth-content");

//       if (wrapper && content) {
//         ScrollSmoother.create({
//           wrapper: "#smooth-wrapper",
//           content: "#smooth-content",
//           smooth: 2,
//           effects: true,
//           smoothTouch: 0.1,
//           normalizeScroll: false,
//           ignoreMobileResize: true,
//         });
//       }
//     })();
//   }, []);

//   return (
//     <div id="smooth-wrapper">
//       <div id="smooth-content">{children}</div>
//     </div>
//   );
// }