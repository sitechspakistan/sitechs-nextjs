import React from 'react'

const credibility = [
    { title: 'Upwork Top Rated', sub: 'Agency badge, top 3% of talent' },
    { title: '5+ Years', sub: 'Building AI & web systems' },
    { title: '50+ Automations Built', sub: 'For US small & mid-size businesses' },
    { title: 'US Hours + Global Team', sub: 'Always-on delivery coverage' },
]

const TrustBar = () => {
    return (
        <section className='trust_bar bg-white'>
            <div className='container container-1320'>
                <div className='trust_bar_row'>
                    {credibility.map((item) => (
                        <div className='trust_bar_item' key={item.title}>
                            <div className='trust_bar_title'>{item.title}</div>
                            <div className='trust_bar_sub'>{item.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrustBar
