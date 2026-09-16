"use client";
import Link from "next/link";
import useGsapReveal from "../hooks/useGsapReveal";
import { Clock, ClipboardCheck, Sparkles } from 'lucide-react';

export default function AiBookingHero() {
    useGsapReveal();
    return (
        <div className="tp-hero-3-area tp-hero-3-ptb hero-bg fix bg-hero" id="ai-hero">
            <div className="container container-1320">
                <div className="row ">
                    <div className="col-xl-6 text-lg-start text-center">
                        <span className="tp-section-subtitle-3">
                            <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M12 0C12 3.0432 9.53292 5.5102 6.48975 5.5102C6.48975 2.46701 8.95677 0 12 0Z"
                                        fill="currentcolor" />
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M0.0231934 0.0231209C3.06639 0.0231209 5.5334 2.49015 5.5334 5.53333C2.4902 5.53333 0.0231934 3.0663 0.0231934 0.0231209Z"
                                        fill="currentcolor" />
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M6.48975 6.4898C9.53294 6.4898 12 8.95682 12 12C8.95675 12 6.48975 9.53297 6.48975 6.4898Z"
                                        fill="currentcolor" />
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M5.5102 6.48981C5.5102 9.533 3.04318 12 0 12C0 8.95681 2.46703 6.48981 5.5102 6.48981Z"
                                        fill="currentcolor" />
                                </svg>
                            </span>
                            Ai Automation For Bookings & Appointments With Sitechs
                        </span>
                        <div className="tp-hero-3-content-box p-relative">
                            <h4 className="tp-hero-3-title ">
                                AI Agents That Book <br className="d-none d-md-block" /> Appointments for You. While You Focus
                                <span className="text-warning"> on What Matters</span>
                                {/* <span className="tp-reveal-line">digital agency</span> */}
                            </h4>
                            <span className="tp-hero-3-category tp_reveal_anim">Our AI agents handle calls, chats, and messages 24/7 to book, reschedule, and manage appointments automatically. Never miss a booking again.</span>
                            <Link className="sitechs-btn-1" href="/chat-with-us">
                                Book A demo
                            </Link>
                            <a className="sitechs-btn-1 upwork-btn" href="https://www.upwork.com/agencies/1863602840810539543/" target="_blank">
                                Start A Project
                            </a>
                        </div>
                        <div className="d-flex align-items-center gap-4 pt-4">
                            <div className="d-flex align-items-center gap-2">
                                <Clock size={20} color="#000000" />
                                <span className="hero-ai-foot">24/7 Availability</span>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <ClipboardCheck size={20} color="#000" />
                                <span className="hero-ai-foot">No Missed Bookings</span>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <Sparkles size={20} color="#000" />
                                <span className="hero-ai-foot">Fully Automated</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 text-center">
                        <img src="/assets/images/ai-booking/ai-hero-right.png"></img>
                    </div>
                </div>
            </div>
        </div>

    );
}
