"use client";
import Link from "next/link";
import { useState } from "react";
import { LayoutGrid, Globe, Bot, PenTool, ArrowRight } from "lucide-react";
import portfolioData from "@/data/caseStudies.js";

const categories = [
    { label: "All Projects", icon: LayoutGrid },
    { label: "Website Development", icon: Globe },
    { label: "AI Automation", icon: Bot },
    { label: "Branding", icon: PenTool },
];

const categoryStyle = {
    "Website Development": { color: "#6c34fa", bg: "rgba(108, 52, 250, 0.1)" },
    "AI Automation": { color: "#e14392", bg: "rgba(225, 67, 146, 0.1)" },
    Branding: { color: "#2ac6f8", bg: "rgba(42, 198, 248, 0.12)" },
};

function getExcerpt(description, maxLen = 100) {
    const raw = Array.isArray(description) ? description[0] : description;
    const text = typeof raw === "string" ? raw.trim() : "";
    if (text.length <= maxLen) return text;
    const truncated = text.slice(0, maxLen);
    const lastSpace = truncated.lastIndexOf(" ");
    return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLen)}…`;
}

export default function PortfolioWeb() {
    const [filter, setFilter] = useState("All Projects");

    const filteredItems =
        filter === "All Projects"
            ? portfolioData
            : portfolioData.filter((item) => item.category.includes(filter));

    return (
        <section className="portfolio-section">
            <div className="container container-1320">
                <h2 className="portfolio-heading text-center">More Case Studies</h2>

                <div className="portfolio-filters-new">
                    {categories.map(({ label, icon: Icon }) => (
                        <button
                            key={label}
                            onClick={() => setFilter(label)}
                            className={filter === label ? "active" : ""}
                        >
                            <Icon size={16} strokeWidth={2.2} />
                            {label}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid-new">
                    {filteredItems.map((item) => {
                        const category = item.category[0];
                        const style = categoryStyle[category] || categoryStyle["Website Development"];

                        return (
                            <Link
                                href={`/case-studies/${item.slug}/`}
                                key={item.slug}
                                className="portfolio-card-new"
                            >
                                <div className="pc-image">
                                    <img src={item.image} alt={item.title} />
                                </div>

                                <div className="pc-body">
                                    <span
                                        className="pc-category"
                                        style={{ color: style.color, background: style.bg }}
                                    >
                                        {category}
                                    </span>

                                    <h3 className="pc-title">{item.title}</h3>
                                    <p className="pc-desc">{getExcerpt(item.description)}</p>

                                    <span className="pc-link">
                                        View Case Study
                                        <ArrowRight size={15} strokeWidth={2.4} />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
