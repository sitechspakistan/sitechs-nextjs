import React from 'react'

const aiAgents = [
    {
        id: 1,
        iconClass: "fa-solid fa-phone",
        title: "AI Voice Agent",
        description: "Handles calls like a human",
        features: [
            "Answers calls 24/7",
            "Understands and responds naturally",
            "Books, reschedules, or cancels",
            "Calendar & CRM integration",
        ],
        isPurple: false,
    },
    {
        id: 2,
        iconClass: "fa-brands fa-whatsapp",
        title: "AI WhatsApp Agent",
        description: "Books appointments on WhatsApp",
        features: [
            "Instant replies 24/7",
            "Natural conversations",
            "Shares availability & links",
            "Reminders & follow-ups",
        ],
        isPurple: false,
    },
    {
        id: 3,
        iconClass: "fa-solid fa-comment",
        title: "AI Chatbot",
        description: "Captures & converts on your website",
        features: [
            "Engages visitors instantly",
            "Answers questions",
            "Books appointments",
            "Works 24/7",
        ],
        isPurple: true,
    },
];

function AiAgent() {
    return (
        <section className='ai-agent'>
            <div className='container-fluid bg-white'>
                <div className='container container-1320 text-center pt-40 pb-40'>
                    <h2>Multiple Ai Agents. One Goal: More Booking.</h2>

                    <div className='row pt-4'>
                        {aiAgents.map((agent) => (
                            <div
                                className='col-lg-4'
                                key={agent.id}
                                id={agent.isPurple ? 'purple-box' : undefined}
                            >
                                <div className='ai-main-box'>
                                    <div className='row'>
                                        <div className='col-lg-3'>
                                            <div className='icon'>
                                                <i className={agent.iconClass}></i>
                                            </div>
                                        </div>
                                        <div className='col-lg-9'>
                                            <div className='content'>
                                                <h4>{agent.title}</h4>
                                                <p>{agent.description}</p>
                                                <ul className='list-text type-check'>
                                                    {agent.features.map((feature, index) => (
                                                        <li key={index}>
                                                            <i className="fa-solid fa-check"></i>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AiAgent