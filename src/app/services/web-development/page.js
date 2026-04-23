import ServiceDetailHero from "@/app/components/ServiceDetailHero";
import Component from "./component";
import ServiceTechnology from "@/app/components/ServiceTechnology";
import Industries from "@/app/components/Industries";
import Process from "@/app/components/Process";
import Faqs from "@/app/components/Faqs";

export const metadata = {
  title: "Custom Website Design & Development Agency | Sitechs",
  description: "Sitechs crafts high-converting websites tailored for startups and businesses. From sleek designs to scalable web platforms, we deliver performance-driven digital experiences that grow your brand.",
  alternates: {
    canonical: "https://sitechs.co/web-development",
  },
};

export default function WebDevelopment() {
  return (
    <>
      <ServiceDetailHero />
      <ServiceTechnology />
      <Industries />
      <Process />
      <Faqs />
    </>
  );
}