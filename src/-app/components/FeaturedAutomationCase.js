import Link from 'next/link'
import React from 'react'

const stats = [
    { value: '70%', label: 'Faster response times' },
    { value: 'Zero', label: 'Repetitive team workload' },
    { value: '24/7', label: 'Customer self-service' },
]

const FeaturedAutomationCase = () => {
    return (
        <section className='featured_automation'>
            <div className='container'>
                <span className='section-kicker section-kicker--dark'>Featured Automation</span>
                <h2>WhatsApp CRM Bot: From Manual Logins to One-Line Commands</h2>

                <div className='featured_automation_grid'>
                    <div className='featured_automation_card'>
                        <p className='featured_automation_label featured_automation_label--before'>Before</p>
                        <p>The client&apos;s team had to log into their CRM manually for every task — creating invoices, checking payments, adding notes. Follow-ups slipped through the cracks.</p>
                    </div>
                    <div className='featured_automation_card'>
                        <p className='featured_automation_label featured_automation_label--after'>After</p>
                        <p>We built Zoop, a WhatsApp-based AI agent wired directly into their CRM. Type &ldquo;Hey Zoop, create an invoice for order #1204&rdquo; and it&apos;s done — no login required.</p>
                    </div>
                </div>

                <div className='featured_automation_stats'>
                    {stats.map((s) => (
                        <div key={s.label}>
                            <div className='featured_automation_stat_value'>{s.value}</div>
                            <div className='featured_automation_stat_label'>{s.label}</div>
                        </div>
                    ))}
                </div>

                <div className='text-center'>
                    <Link href='/case-studies/whatsapp-crm-bot/' className='featured_automation_btn'>
                        View Full Case Study →
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FeaturedAutomationCase
