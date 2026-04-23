import ServicesForm from "./ServicesForm";

export default function ServiceDetailHero({ heading, description }) {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb service_hero fix">
      <div className="container container-1480">
        <div className="row">
          <div className="col-lg-7">
            <h1>{heading}</h1>
            <p>{description}</p>
          </div>
          <div className="col-lg-5">
            <ServicesForm />
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
