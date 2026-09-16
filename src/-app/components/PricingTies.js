import Link from 'next/link'
import React from 'react'

const pricingTiers = [
    {
        name: 'Starter Build',
        tagline: 'One focused automation, done right',
        price: '$1,500–$3,000',
        featured: false,
        features: [
            '1 automation workflow (e.g. lead follow-up or CRM sync)',
            'Integration with 1-2 tools',
            '1-3 week delivery',
            '30 days of support included',
        ],
        cta: 'Get Started',
        href: '/start-a-project',
    },
    {
        name: 'Growth Build + Care',
        tagline: 'Multi-step systems, monitored monthly',
        price: '$3,000–$8,000',
        priceNote: '+ $500–$1,200/mo',
        featured: true,
        features: [
            'AI agents, chatbots & multi-step workflows',
            'Integration across CRM, email & calendar',
            'Monthly monitoring & optimization',
            'Priority support channel',
        ],
        cta: 'Book a Call',
        href: 'https://calendly.com/webefytoday/meeting',
        external: true,
    },
    {
        name: 'Scale / Custom',
        tagline: 'Multi-department, complex AI systems',
        price: 'Custom Quote',
        featured: false,
        features: [
            'Multiple AI agents & advanced workflows',
            'Custom integrations & API work',
            'Dedicated automation strategist',
            'SLA-backed support',
        ],
        cta: 'Talk to Us',
        href: '/start-a-project',
    },
]

const PricingTiers = () => {
    return (
        <section className='pricing_tiers bg-white pb-50' id='pricing'>
            <div className='container'>
                <div className='text-center'>
                    <span className='section-kicker'>Investment</span>
                    <h2>Pricing That Scales With You</h2>
                    <p>A ballpark before we talk — every project gets a custom quote after your free audit.</p>
                </div>

                <div className='pricing_grid'>
                    {pricingTiers.map((tier) => (
                        <div className={`pricing_card ${tier.featured ? 'pricing_card--featured' : ''}`} key={tier.name}>
                            {tier.featured && <span className='pricing_badge'>Most Popular</span>}
                            <h4>{tier.name}</h4>
                            <p className='pricing_tagline'>{tier.tagline}</p>
                            <div className='pricing_price'>
                                {tier.price}
                                {tier.priceNote && <span className='pricing_price_note'> {tier.priceNote}</span>}
                            </div>
                            <div className='pricing_features'>
                                {tier.features.map((f) => (
                                    <div className='pricing_feature' key={f}>
                                        <span>•</span><span>{f}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href={tier.href}
                                target={tier.external ? 'blank' : undefined}
                                className={`pricing_cta ${tier.featured ? 'pricing_cta--featured' : ''}`}
                            >
                                {tier.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingTiers
