import React from 'react'
import { ClipboardEdit, FileText, Boxes, Wrench, Rocket, Headphones, ArrowRight } from 'lucide-react'

const defaultSteps = [
    { number: 1, title: "Discovery Call", desc: "We understand your business and challenges.", color: "#4A90D9", bg: "#EAF3FC", Icon: ClipboardEdit },
    { number: 2, title: "Workflow Audit", desc: "We analyze your current process in detail.", color: "#D94FA0", bg: "#FCEAF5", Icon: FileText },
    { number: 3, title: "Solution Design", desc: "We design the right AI automation for you.", color: "#7B5BD9", bg: "#F1EAFC", Icon: Boxes },
    { number: 4, title: "Development & Integration", desc: "We build and integrate with your existing tools.", color: "#E85D3D", bg: "#FDEDE8", Icon: Wrench },
    { number: 5, title: "Testing & Launch", desc: "We test thoroughly and launch your solution.", color: "#2ECC71", bg: "#E9FBF1", Icon: Rocket },
    { number: 6, title: "Ongoing Support", desc: "We monitor, optimize and support continuously.", color: "#4A90D9", bg: "#EAF3FC", Icon: Headphones },
]

const AiProcess = ({ steps = defaultSteps }) => {
    return (
        <section className='bg-white ai_process'>
            <div className="container container-1320 pt-50 pb-50">
                <div className="text-center mb-lg-5 mb-0">
                    <span>The Process</span>
                    <h2 >How It Works</h2>
                    <p>A clear, six-step path from first call to ongoing optimization.</p>
                </div>

                <div className="process-wrap">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            <div className="process-card">
                                <div className="step-icon-wrap">
                                    <div className="step-icon" style={{ background: step.bg }}>
                                        {step.image ? (
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                width={22}
                                                height={22}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        ) : (
                                            <step.Icon size={22} color={step.color} strokeWidth={2} />
                                        )}
                                    </div>
                                    <div className="step-number" style={{ background: step.color }}>
                                        {step.number}
                                    </div>
                                </div>
                                <h5>{step.title}</h5>
                                <p>{step.desc}</p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="process-connector">
                                    <span className="dash-line"></span>
                                    <ArrowRight size={16} color="#707070" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AiProcess