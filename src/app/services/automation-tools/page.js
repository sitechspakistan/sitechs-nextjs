import ServiceDetailHero from "@/app/components/ServiceDetailHero";
import ServiceTechnology from "@/app/components/ServiceTechnology";
import Industries from "@/app/components/Industries";
import Process from "@/app/components/Process";
import Faqs from "@/app/components/Faqs";

export const metadata = {
    title: "Automation Tools | Sitechs",
    description:
        "Accelerate your business with Sitechs AI automation solutions. We build custom AI agents and workflows that streamline operations, enhance customer experiences, and boost productivity for startups and enterprises.",
    alternates: {
        canonical: "https://sitechs.co/ai-automations",
    },
};

const automationtool = [
    {
        id: 1,
        image: "/assets/images/i-1.png",
        title: "Node.js",
        description: "Handles fast, event-driven automation scripts that scale with ease.",
        link: "#",
        category: []
    },
    {
        id: 2,
        image: "/assets/images/techs/django.png",
        title: "Python",
        description: "Runs powerful automation workflows with rich libraries and simple logic.",
        link: "#",
        category: []
    },
    {
        id: 3,
        image: "/assets/images/techs/selenium.jpeg",
        title: "Selenium",
        description: "Automates browser testing and repetitive web interactions with precision.",
        link: "#",
        category: []
    },
    {
        id: 4,
        image: "/assets/images/techs/puppeteer.png",
        title: "Puppeteer",
        description: "Controls headless Chrome for data extraction, testing, and task automation.",
        link: "#",
        category: []
    },
];

export default function AutomationTool() {
    return (
        <>
            <ServiceDetailHero
                heading={
                    <>
                        Automations<br /> Tools
                    </>
                }
                description={
                    <>
                        We develop automation tools that simplify workflows and
                        <br />
                        eliminate repetitive tasks. Our solutions integrate seamlessly
                        <br />
                        with existing systems, boosting productivity and freeing teams
                        <br />
                        to focus on high-impact work.
                    </>
                }
            />
            <ServiceTechnology data={automationtool} />
            <Industries />
            <Process />
            <Faqs />
        </>
    );
}
