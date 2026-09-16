import React from 'react'

const aiSolutionsData = [
    {
        id: 1,
        icon: 'fa-solid fa-user-group',
        iconBg: '#f1e9fd',
        iconColor: '#8b5cf6',
        title: 'AI Agents',
        desc: 'Intelligent agents that converse, decide, and take actions.'
    },
    {
        id: 2,
        icon: 'fa-regular fa-comment',
        iconBg: '#e2f8ef',
        iconColor: '#10b981',
        title: 'AI Chatbots',
        desc: '24/7 support, lead qualification & customer engagement.'
    },
    {
        id: 3,
        icon: 'fa-solid fa-diagram-project',
        iconBg: '#e0f1fd',
        iconColor: '#3b82f6',
        title: 'Workflow Automation',
        desc: 'Automate approvals, notifications, data sync and more.'
    },
    {
        id: 4,
        icon: 'fa-solid fa-chart-line',
        iconBg: '#fde8ef',
        iconColor: '#ec4899',
        title: 'CRM Automation',
        desc: 'Automate follow-ups, email sequences and customer journeys.'
    },
    {
        id: 5,
        icon: 'fa-solid fa-file-lines',
        iconBg: '#fdece0',
        iconColor: '#f97316',
        title: 'Document Processing',
        desc: 'Extract, analyze and organize data from any document.'
    },
    {
        id: 6,
        icon: 'fa-solid fa-chart-column',
        iconBg: '#e0f1fd',
        iconColor: '#0ea5e9',
        title: 'Data & Reporting',
        desc: 'Real-time dashboards and automated reports that drive insight.'
    },
]

const AiSolutions = () => {
    return (
        <section className='ai_solution bg-white pt-50 pb-50'>
            <div className='container container-1320'>
                <div className='text-center'>
                    <span>What We Build</span>
                    <h2>AI Solutions We Build</h2>
                    <p>Purpose-built automation systems tailored to how your business actually runs.</p>
                </div>

                <div className='row'>
                    {aiSolutionsData.map((item) => (
                        <div className='col-lg-4 col-md-6' key={item.id}>
                            <div className='solution_card'>
                                <div className='icon_box'>
                                    <i className={item.icon} style={{ color: item.iconColor, background: item.iconBg }}></i>
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className='text-center'>
                    <button className='btn_explore'>Explore All Solutions →</button>
                </div> */}
            </div>
        </section>
    )
}

export default AiSolutions