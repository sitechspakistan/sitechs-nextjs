"use client";
import Link from "next/link";
import useGsapReveal from "../hooks/useGsapReveal";

export default function Hero() {
  useGsapReveal();
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb hero-bg fix">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
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
                        <span className="tp-reveal-line">AI-Driven Development
                            Company</span>
                        {/* <span className="tp-reveal-line">digital agency</span> */}
                    </h4>
                    <span className="tp-hero-3-category tp_reveal_anim">Where Your Search Ends, Innovation Begins</span>
                    <div className="tp-hero-3-buttons">
                        <Link className="sitechs-btn-1" href="/chat-with-us">
                            Let's Talk                     
                        </Link>
                        <ul className="hero-socials">
                            <li><a href="https://www.facebook.com/Sitechsofficial/" target="_blank"><img src="/assets/images/fb.png" alt="Facebook" /></a></li>
                            <li><a href="https://www.instagram.com/sitechs.official/" target="_blank"><img src="/assets/images/instagram.png" alt="Instagram" /></a></li>
                            <li><a href="https://www.linkedin.com/company/sitechsofficial" target="_blank"><img src="/assets/images/linkedin.png" alt="Linkedin" /></a></li>
                            <li><a href="https://x.com/officialsitechs" target="_blank"><img src="/assets/images/x.png" alt="X" /></a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}