import ServiceDetailHero from "@/app/components/ServiceDetailHero";
import ServiceTechnology from "@/app/components/ServiceTechnology";
import Industries from "@/app/components/Industries";
import Process from "@/app/components/Process";
import Faqs from "@/app/components/Faqs";

export const metadata = {
    title: "App Development | Sitechs",
    description:
        "Accelerate your business with Sitechs AI automation solutions. We build custom AI agents and workflows that streamline operations, enhance customer experiences, and boost productivity for startups and enterprises.",
    alternates: {
        canonical: "https://sitechs.co/ai-automations",
    },
};

const appdevelopment = [
    {
        id: 1,
        image: "/assets/images/techs/flutter.jpeg",
        title: "Flutter",
        description: "Builds high-performance apps that look and feel native on every platform.",
        link: "#",
        category: []
    },
    {
        id: 2,
        image: "/assets/images/techs/react.webp",
        title: "React Native",
        description: "Delivers cross-platform apps with a single, maintainable codebase and native speed.",
        link: "#",
        category: []
    },
    {
        id: 3,
        image: "/assets/images/techs/firebase.webp",
        title: "Firebase",
        description: "Powers real-time features, analytics, and authentication without heavy backend setup.",
        link: "#",
        category: []
    },
    {
        id: 4,
        image: "/assets/images/techs/amplify.jpeg",
        title: "AWS Amplify",
        description: "Manages scalable cloud storage, APIs, and hosting for production-ready mobile apps.",
        link: "#",
        category: []
    },
];


export default function AppDevlopment() {
    return (
        <>
            <ServiceDetailHero
                heading="App Development"
                description={
                    <>
                        We develop mobile apps that are fast, scalable, and visually
                        <br />
                        polished. From early prototypes to production-ready builds,
                        <br />
                        we ensure smooth experiences and maintainable codebases.
                    </>
                }
            />
            <ServiceTechnology data={appdevelopment} />
            <Industries />
            <Process />
            <Faqs />
        </>
    );
}
