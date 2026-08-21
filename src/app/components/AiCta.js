import Link from 'next/link'
import React from 'react'

const AiCta = () => {
    return (
        <section className='ai_cta pb-50 bg-white'>
            <div className='container container-1320'>
                <div className='text-center'>
                    <h2>Ready to Automate and Grow Your Business?</h2>
                    <p>Let's discover automation opportunities and build a system that works for you 24/7.</p>
                    <Link href={"/start-a-project"}>Get Your Free Audit →</Link>
                </div>
            </div>
        </section>
    )
}

export default AiCta