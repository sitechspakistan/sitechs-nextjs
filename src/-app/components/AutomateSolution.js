import React from 'react'

const automationData = [
    {
        id: 1,
        icon: 'fa-solid fa-circle-plus',
        iconBg: '#e7f0ff',
        iconColor: '#3b82f6',
        title: 'Repetitive Tasks',
        desc: 'Your team wastes hours on manual, repetitive work.'
    },
    {
        id: 2,
        icon: 'fa-regular fa-clock',
        iconBg: '#fdece0',
        iconColor: '#f97316',
        title: 'Missed Opportunities',
        desc: 'Leads go cold and follow-ups get delayed.'
    },
    {
        id: 3,
        icon: 'fa-solid fa-code-branch',
        iconBg: '#f1e9fd',
        iconColor: '#8b5cf6',
        title: 'Disconnected Tools',
        desc: 'Data is scattered across multiple apps and systems.'
    },
    {
        id: 4,
        icon: 'fa-solid fa-triangle-exclamation',
        iconBg: '#e2f8ef',
        iconColor: '#10b981',
        title: 'Slow Processes',
        desc: 'Approvals and workflows are manual and slow.'
    },
    {
        id: 5,
        icon: 'fa-regular fa-face-frown',
        iconBg: '#fde8ef',
        iconColor: '#ec4899',
        title: 'Human Errors',
        desc: 'Manual tasks lead to errors and data inconsistencies.'
    },
    {
        id: 6,
        icon: 'fa-solid fa-chart-column',
        iconBg: '#e0f1fd',
        iconColor: '#0ea5e9',
        title: 'No Real-Time Insights',
        desc: 'Lack of visibility and analytics affects decisions.'
    },
]

const AutomateSolution = () => {
    return (
        <section className='auto_solution bg-white pt-50 pb-50'>
            <div className='container container-1320'>
                <div className='text-center'>
                    <span>Why Automate</span>
                    <h2>We Solve Problems That Slow Your Business</h2>
                    <p>The friction that keeps teams from moving faster and where automation earns its keep.</p>
                </div>

                <div className='row'>
                    {automationData.map((item) => (
                        <div className='col-lg-4 col-md-6' key={item.id}>
                            <div className='solution_card'>
                                <div className='icon_box'>
                                    <i className={item.icon} style={{ color: item.iconColor, fontSize: '22px', background: item.iconBg }}></i>
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AutomateSolution