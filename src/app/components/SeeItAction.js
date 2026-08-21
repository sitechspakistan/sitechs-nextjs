import React from 'react'

const chatMessages = [
    { from: 'user', text: 'Hi, do you have any 2-bed units available for October?' },
    { from: 'bot', text: 'Hi! Yes — we have 3 two-bedroom units opening Oct 1. Want me to check pricing and schedule a tour?' },
    { from: 'user', text: 'Yes please, Saturday afternoon works' },
    { from: 'bot', text: "Booked — Sat 2:00 PM with our leasing agent. Confirmation sent to your email. Anything else?" },
]

const SeeItInAction = () => {
    return (
        <section className='see_action bg-white'>
            <div className='container'>
                <div className='text-center'>
                    <span className='section-kicker'>See It In Action</span>
                    <h2>What Your AI Agent Could Sound Like</h2>
                    <p>A live-style preview of an after-hours lead response agent — the kind of 24/7 coverage we build into client accounts.</p>
                </div>

                <div className='chat_mock'>
                    <div className='chat_mock_header'>
                        <span className='chat_mock_avatar'></span>
                        <div>
                            <div className='chat_mock_name'>Sitechs AI Agent</div>
                            <div className='chat_mock_status'><i></i>Online now</div>
                        </div>
                    </div>
                    <div className='chat_mock_body'>
                        {chatMessages.map((m, i) => (
                            <div className={`chat_bubble chat_bubble--${m.from}`} key={i}>{m.text}</div>
                        ))}
                        <div className='chat_typing'>
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
                <p className='chat_mock_caption'>Average response time: under 10 seconds — 24/7, even outside business hours.</p>
            </div>
        </section>
    )
}

export default SeeItInAction
