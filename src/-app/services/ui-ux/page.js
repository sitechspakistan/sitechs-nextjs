import ServiceDetailHero from "@/app/components/ServiceDetailHero";
import Component from "./component";
import ServiceTechnology from "@/app/components/ServiceTechnology";
import Industries from "@/app/components/Industries";
import Process from "@/app/components/Process";
import Faqs from "@/app/components/Faqs";

export const metadata = {
  title: "UI/UX Services | Sitechs",
  description:
    "Create exceptional user experiences with our UI/UX design services. We help startups and businesses build intuitive, engaging, and visually appealing interfaces.",
  alternates: {
    canonical: "https://sitechs.co/services/ui-ux",
  },
};
const brandingTechnologies = [
  {
    title: "Figma",
    description:
      "Real-time collaborative design and prototyping that keeps teams aligned and ships ideas faster.",
    image: "/assets/images/techs/figma.png",
    link: "#",
    categories: [],
  },
  {
    title: "Adobe XD",
    description:
      "Pixel-accurate visual design and asset production for polished brand and marketing materials.",
    image: "/assets/images/techs/Adobe-XD.webp",
    link: "#",
    categories: [],
  },
  {
    title: "Framer",
    description:
      "Interactive prototypes and motion-first design that turn concepts into testable experiences.",
    image: "/assets/images/techs/framer.jpeg",
    link: "#",
    categories: [],
  },
  {
    title: "Adobe Illustrator",
    description:
      "Industry-standard vector design tool for logos, icons, and scalable brand assets.",
    image: "/assets/images/techs/ai.webp",
    link: "#",
    categories: [],
  },
  {
    title: "Adobe Photoshop",
    description:
      "Advanced image editing and compositing for high-quality visuals and marketing creatives.",
    image: "/assets/images/techs/photoshop.webp",
    link: "#",
    categories: [],
  },
  {
    title: "Canva",
    description:
      "Quick and accessible design tool for creating social media graphics and marketing assets.",
    image: "/assets/images/techs/canva.png",
    link: "#",
    categories: [],
  },
];

export default function LogoBranding() {
  return (
    <>
      <ServiceDetailHero
        heading="UI/UX"
        description={
          <>
            We design experiences that blend creativity and purpose.
            <br /> Using Figma, Adobe Creative Cloud, and Framer, Adobe
            Illustrator, <br />
            Adobe Photoshop, and Canva, we craft responsive,
            <br />
            consistent, and engaging interfaces where every screen
            <br /> feels intentional and smooth.
          </>
        }
      />
      <ServiceTechnology data={brandingTechnologies} />
      <Industries />
      <Process />
      <Faqs />
    </>
  );
}
