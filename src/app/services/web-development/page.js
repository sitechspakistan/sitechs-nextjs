import ServiceDetailHero from "@/app/components/ServiceDetailHero";
import Component from "./component";
import ServiceTechnology from "@/app/components/ServiceTechnology";
import Industries from "@/app/components/Industries";
import Process from "@/app/components/Process";
import Faqs from "@/app/components/Faqs";

export const metadata = {
  title: "Web Development Services | Sitechs",
  description:
    "Sitechs crafts high-converting websites tailored for startups and businesses. From sleek designs to scalable web platforms, we deliver performance-driven digital experiences that grow your brand.",
  alternates: {
    canonical: "https://sitechs.co/services/web-development",
  },
};

const technologies = [
  {
    title: "React.js",
    description:
      "Builds interactive, component-driven user interfaces that are easy to maintain and scale.",
    image: "/assets/images/react.png",
    link: "service.html",
    categories: [], // empty (kyunki pehle nahi thi)
  },
  {
    title: "Next.js",
    description:
      "Delivers fast, SEO-friendly web apps with server rendering and simple deployment workflows.",
    image: "/assets/images/nextjs.png",
    link: "#",
    categories: [],
  },
  {
    title: "Laravel",
    description:
      "Provides elegant PHP backend tooling for APIs, authentication, and rapid feature development.",
    image: "/assets/images/lara.png",
    link: "#",
    categories: ["Creative", "Digital strategy", "MVP"],
  },
  {
    title: "Django",
    description:
      "A secure, batteries-included Python framework great for fast, reliable web applications.",
    image: "/assets/images/i-3.png",
    link: "#",
    categories: ["Creative", "Digital strategy", "MVP"],
  },
];

export default function WebDevelopment() {
  return (
    <>
      <ServiceDetailHero
        heading={<>
          Web<br /> Development
        </>
        }
        description={
          <>
            We build fast, secure, and scalable web apps
            <br />
            using frameworks like React, Next.js, Nest.js, Vue.js, and Angular.
            <br />
            From websites to SaaS platforms, we focus on performance
            <br />
            and clean, maintainable code.
          </>
        }
      />
      <ServiceTechnology data={technologies} />
      <Industries />
      <Process />
      <Faqs />
    </>
  );
}
