import ServiceDetailHero from "@/app/components/ServiceDetailHero";
import ServiceTechnology from "@/app/components/ServiceTechnology";
import Industries from "@/app/components/Industries";
import Process from "@/app/components/Process";
import Faqs from "@/app/components/Faqs";

export const metadata = {
    title: "Chrome Extension | Sitechs",
    description:
        "Accelerate your business with Sitechs AI automation solutions. We build custom AI agents and workflows that streamline operations, enhance customer experiences, and boost productivity for startups and enterprises.",
    alternates: {
        canonical: "https://sitechs.co/ai-automations",
    },
};

const chrome = [
    {
        id: 1,
        image: "/assets/images/techs/i-5.png",
        title: "JavaScript",
        description: "Powers the core logic and user interactions of each extension.",
        link: "#",
        category: "language",
    },
    {
        id: 2,
        image: "/assets/images/techs/react.webp",
        title: "React",
        description: "Builds responsive, dynamic UIs with reusable components.",
        link: "#",
        category: "framework",
    },
    {
        id: 3,
        image: "/assets/images/techs/google.png",
        title: "Manifest V3",
        description: "Ensures modern, secure, and efficient Chrome extension architecture.",
        link: "#",
        category: "architecture",
    },
    {
        id: 4,
        image: "/assets/images/techs/chrome.png",
        title: "Chrome API",
        description: "Integrates with browser features for tabs, storage, and background tasks.",
        link: "#",
        category: "api",
    },
    {
        id: 5,
        image: "/assets/images/techs/typescript.png",
        title: "TypeScript",
        description: "Adds type safety and cleaner structure to large-scale codebases.",
        link: "#",
        category: "language",
    },
    {
        id: 6,
        image: "/assets/images/techs/tail.jpeg",
        title: "TailwindCSS",
        description: "Delivers fast, consistent styling with minimal custom CSS.",
        link: "#",
        category: "styling",
    },
];


export default function ChromeExtension() {
    return (
        <>
            <ServiceDetailHero
                heading="Chrome Extensions"
                description={
                    <>
                        We build lightweight, intuitive Chrome extensions that boost
                        <br />
                        productivity and fit naturally into users’ workflows. Each one is
                        <br />
                        crafted for speed, security, and a smooth, seamless
                        <br />
                        experience.
                    </>
                }
            />
            <ServiceTechnology data={chrome} />
            <Industries />
            <Process />
            <Faqs />
        </>
    );
}
