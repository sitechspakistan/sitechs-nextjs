import ServiceDetailHero from "@/app/components/ServiceDetailHero";
import Component from "./component";
import ServiceTechnology from "@/app/components/ServiceTechnology";
import Industries from "@/app/components/Industries";
import Process from "@/app/components/Process";
import Faqs from "@/app/components/Faqs";

export const metadata = {
  title: "AI Automation & Intelligent Agent Development Company | Sitechs",
  description:
    "Accelerate your business with Sitechs AI automation solutions. We build custom AI agents and workflows that streamline operations, enhance customer experiences, and boost productivity for startups and enterprises.",
  alternates: {
    canonical: "https://sitechs.co/ai-automations",
  },
};

const aiTechnologies = [
  {
    title: "OpenAI API",
    description:
      "Powering intelligent systems that understand, generate, and respond like humans.",
    image: "/assets/images/i-7.png",
    link: "#",
    categories: [],
  },
  {
    title: "FastAPI",
    description:
      "Delivers high-performance AI backends with speed, clarity, and precision.",
    image: "/assets/images/fastapi.png",
    link: "#",
    categories: [],
  },
  {
    title: "LangChain",
    description:
      "Connects AI models with data and logic to make smarter, context-aware decisions.",
    image: "/assets/images/langchain.png",
    link: "#",
    categories: [],
  },
  {
    title: "Pinecone",
    description:
      "Enables lightning-fast vector search for personalization and intelligent recommendations.",
    image: "/assets/images/.png",
    link: "#",
    categories: [],
  },
  {
    title: "AWS",
    description:
      "Runs our AI infrastructure securely at scale, with consistent speed and uptime.",
    image: "/assets/images/i-8.png",
    link: "#",
    categories: [],
  },
];

export default function AiAutomations() {
  return (
    <>
      <ServiceDetailHero
        heading="AI Automations"
        description={
          <>
            We create smart AI systems that automate tasks
            <br />
            and improve decision-making. From chatbots to recommendation
            engines,
            <br />
            we turn complex ideas into practical, human-centered AI solutions.
            <br />
            We build fast, secure, and scalable web apps
          </>
        }
      />
      <ServiceTechnology data={aiTechnologies} />
      <Industries />
      <Process />
      <Faqs />
    </>
  );
}
