"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";

const servicesData = [
    {
        id: 1,
        image: "/assets/images/services/web.png",
        title: "Web Development",
        description: "We build fast, secure, and scalable web apps using frameworks like React, Next.js...",
        href: "/services/web-development",
    },
    {
        id: 2,
        image: "/assets/images/services/ai.png",
        title: "AI",
        description: "We create smart AI systems that automate tasks and improve decision...",
        href: "/services/ai-automation",
    },
    {
        id: 3,
        image: "/assets/images/services/tools.png",
        title: "Automation Tools",
        description: "We develop automation tools that simplify workflows and eliminate...",
        href: "/services/automation-tools",
    },
    {
        id: 4,
        image: "/assets/images/services/app.png",
        title: "App Development",
        description: "We develop mobile apps that are fast, scalable, and visually polished. From...",
        href: "/services/app-development",
    },
    {
        id: 5,
        image: "/assets/images/services/ex.png",
        title: "Chrome Extensions",
        description: "We build lightweight, intuitive Chrome extensions that boost productivity and f...",
        href: "/services/chrome-extensions",
    },
    {
        id: 6,
        image: "/assets/images/services/aim.png",
        title: "UI/UX",
        description: "We design experiences that blend creativity and purpose. Using Figma,...",
        href: "/services/ui-ux",
    },
];

// Re-usable Service Card Component
function ServiceCard({ image, title, description, href }) {
    return (
        <div className="col-lg-4 d-flex mb-3">
            <div className="services_box_changes h-100 w-100">
                <div className="services_image">
                    <Image
                        src={image}
                        width={180}
                        height={180}
                        alt={title}
                    />
                </div>
                <div className="services_content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Link href={href}>View Details ↗</Link>
                </div>
            </div>
        </div>
    );
}

function ServicesInfo() {
    return (
        <div className="sv-service-area project-panel-area-2 bg-white pt-0 pt-lg-80 pb-lg-80">
            <div className="container">
            </div>
            <div className="container container-1320 p-0">
                <div className="row mx-2 py-2">
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                            href={service.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesInfo;