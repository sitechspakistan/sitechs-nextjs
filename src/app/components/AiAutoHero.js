import ServicesForm from "./ServicesForm";
import { Clock, DollarSign, ChartNoAxesColumn } from 'lucide-react';
import Link from 'next/link';
const heroFeatures = [
    { id: 1, iconClass: Clock, spanText: "Save Time" },
    { id: 2, iconClass: DollarSign, spanText: "Reduce Costs" },
    { id: 3, iconClass: ChartNoAxesColumn, spanText: "Scale Effortlessly" },
];

export default function AiAutoHero() {
    return (
        <div className="tp-hero-3-area tp-hero-3-ptb fix bg-hero">
            <div className="container container-1480">
                <div className="row">
                    <div className="col-lg-6">
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
                            AI Automation
                        </span>
                        <h1 className="service_detail_heading ">Work Smarter. <br /> Scale Faster.</h1>
                        <p className="service_detail_para">We build AI-powered systems that automate repetitive tasks, reduce manual work, and help your business grow 24/7 so you can focus on what truly matters.</p>


                        <div>
                            <Link href="#calculator" className="tf-btn tp-btn-border-sm">
                                See How It Works
                            </Link>
                        </div>


                        <div className="d-flex gap-3 py-3 city-icons">
                            {heroFeatures.map((item) => (
                                <div className="d-flex align-items-center gap-2" key={item.id}>
                                    <item.iconClass id="city-icon" />
                                    <span className="whitespace-nowrap">{item.spanText}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="service_form">
                            <div className="row">
                                <form
                                    className="form-contact effectFade fadeUp"
                                >
                                    <h4 className="heading fw-semibold pt-2 pb-2 mb-0">
                                        Get Your Free AI Automation Audit
                                    </h4>
                                    <p className="text effectFade fadeUp pb-4">
                                        Tell us about your business we'll map the automation opportunities.
                                    </p>



                                    <div className="row">
                                        <div className="col-lg-6 col-6">
                                            <fieldset className="mb-21">
                                                <label className="fw-semibold text-body-3 mb-20">
                                                    Full Name*
                                                </label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6 col-6">
                                            <fieldset className="mb-21">
                                                <label className="fw-semibold text-body-3 mb-20">
                                                    Work Email*
                                                </label>
                                                <input
                                                    name="email"
                                                    type="email"

                                                    placeholder="Enter the e-mail"
                                                    required
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6 col-6">
                                            <fieldset className="mb-21">
                                                <label className="fw-semibold text-body-3 mb-20">
                                                    Website IP / URL
                                                </label>
                                                <input
                                                    name="text"
                                                    type="text"

                                                    placeholder="https://yourwebsite.com"
                                                    required
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6 col-6">
                                            <fieldset className="mb-21">
                                                <label className="fw-semibold text-body-3 mb-20">
                                                    Company Name*
                                                </label>
                                                <input
                                                    name="text"
                                                    type="text"

                                                    placeholder="Acme Inc."
                                                    required
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset className="mb-21">
                                                <label className="fw-semibold text-body-3 mb-20">
                                                    Company Size
                                                </label>
                                                <select
                                                    name="service"
                                                    className="contact-select"

                                                >
                                                    <option value="">Select Size</option>
                                                    <option value="1-10">
                                                        1-10
                                                    </option>
                                                    <option value="11-50">11-50</option>
                                                    <option value="51-200">51-200</option>
                                                    <option value="200">200+</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset className="mb-21">
                                                <label className="fw-semibold text-body-3 mb-20">
                                                    What do you want to automate?
                                                </label>
                                                <select
                                                    name="service"
                                                    className="contact-select"

                                                >
                                                    <option value="">Select an Option</option>
                                                    <option value="lead generation">
                                                        Lead Generation
                                                    </option>
                                                    <option value="customer-support">Customer Support</option>
                                                    <option value="internal-operation">Internal operations</option>
                                                    <option value="reporting-data">Reporting & Data</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset className="mb-21">
                                                <label className="fw-semibold text-body-3 mb-20">
                                                    Estimated Budget
                                                </label>
                                                <select
                                                    name="service"
                                                    className="contact-select"

                                                >
                                                    <option value="">Select Budget Range</option>
                                                    <option value="$2000">
                                                        Under $2000
                                                    </option>
                                                    <option value="$2000-$5000">$2000-$5000</option>
                                                    <option value="$5000-$15000">$5000-$15000</option>
                                                    <option value="$15000">$15000+</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                        <fieldset className="mb-18">
                                            <label className="fw-semibold text-body-3 mb-20">
                                                Describe your biggest challenge*
                                            </label>
                                            <textarea
                                                name="message"

                                                placeholder="E.g. We spend too much time on manual data entry..."
                                            ></textarea>
                                        </fieldset>
                                    </div>

                                    <button
                                        type="submit"
                                        className="tf-btn tp-btn-border-sm btn-dark w-100">
                                        Get My Free Audit

                                    </button>

                                    {/* <div className="city-icons-two d-flex gap-5 mx-auto justify-content-center pt-3 text-gray-500">
                                                {trustPoints.map((item) => (
                                                    <div className="d-flex align-items-center gap-1 city-icon-two" key={item.id}>
                                                        <item.icon className="w-4 h-4" />
                                                        <span>{item.text}</span>
                                                    </div>
                                                ))}
                                            </div> */}
                                    <div className='text-center pt-2'>
                                        <span className='text-center fs-lg-6'>No spam. No obligation. We respect your privacy.</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-12">
                        <div className="tp-hero-3-content-box text-center p-relative">
                            <div className="floating-logo">
                                <img className="i-1" src="assets/images/i-1.png" alt="*" />
                                <img className="i-2" src="assets/images/i-2.png" alt="*" />
                                <img className="i-3" src="assets/images/i-3.png" alt="*" />
                                <img className="i-4" src="assets/images/i-4.png" alt="*" />
                                <img className="i-5" src="assets/images/i-5.png" alt="*" />
                                <img className="i-6" src="assets/images/i-6.png" alt="*" />
                                <img className="i-7" src="assets/images/i-7.png" alt="*" />
                                <img className="i-8" src="assets/images/i-8.png" alt="*" />
                            </div>
                            <h4 className="tp-hero-3-title tp_reveal_anim">
                                <span className="tp-reveal-line">Convert more, Work less
                                    Scale smarter</span>
                                {/* <span className="tp-reveal-line">digital agency</span> */}
                    {/* </h4>
                            <span className="tp-hero-3-category tp_reveal_anim">Where Your Search Ends, Innovation Begins</span>
                            <LinK className="sitechs-btn-1" href="/chat-with-us">
                                Let's Talk
                            </Link>
                            <a className="sitechs-btn-1 upwork-btn" href="https://www.upwork.com/agencies/1863602840810539543/" target="_blank">
                                Hire Us on <img src="/assets/images/upwork.png" alt="Sitechs - Upwork" />
                            </a>
                            <ul className="hero-socials">
                                <li><a href="https://www.facebook.com/Sitechsofficial/" target="_blank"><img src="/assets/images/fb.png" alt="Facebook" /></a></li>
                                <li><a href="https://www.instagram.com/sitechs.official/" target="_blank"><img src="/assets/images/instagram.png" alt="Instagram" /></a></li>
                                <li><a href="https://www.linkedin.com/company/sitechsofficial" target="_blank"><img src="/assets/images/linkedin.png" alt="Linkedin" /></a></li>
                                <li><a href="https://x.com/officialsitechs" target="_blank"><img src="/assets/images/x.png" alt="X" /></a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
