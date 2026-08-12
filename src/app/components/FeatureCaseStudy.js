import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function FeaturedCaseStudy() {
    const tags = ["WhatsApp API", "AI Agent", "CRM Integration"];

    const stats = [
        { value: "70%", label: "Faster Response Times" },
        { value: "Zero", label: "Repetitive Team Work" },
    ];

    return (

        <section className="featured-case-study">
            <div className="container container-1320">
                <div className="fcs-card">
                    <div className="fcs-grid">
                        <div className="fcs-content">
                            <div className="fcs-badge">
                                <Home size={14} strokeWidth={2.5} />
                                <span>Featured Case Study</span>
                            </div>

                            <h2 className="fcs-title">WhatsApp CRM Bot</h2>
                            <p className="fcs-subtitle">WhatsApp AI Automation &amp; CRM Integration</p>

                            <p className="fcs-desc">
                                A client approached Sitechs with a unique idea: can
                                my CRM talk on WhatsApp? They wanted their customers to
                                perform tasks directly from WhatsApp instead of logging
                                into the CRM every time.
                            </p>

                            <ul className="fcs-tags">
                                {tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>

                            <div className="fcs-stats">
                                {stats.map((stat) => (
                                    <div className="fcs-stat" key={stat.label}>
                                        <span className="fcs-stat-value">{stat.value}</span>
                                        <span className="fcs-stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/case-studies/whatsapp-crm-bot/" className="fcs-btn">
                                View Case Study
                                <ArrowRight size={16} strokeWidth={2.5} />
                            </Link>
                        </div>

                        <div className="fcs-visual">
                            <div className="fcs-image-frame">
                                <img
                                    src="/assets/images/case-studies/5.jpg"
                                    alt="WhatsApp CRM Bot — Zoop AI Agent interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
