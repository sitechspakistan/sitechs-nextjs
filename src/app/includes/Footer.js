import Link from "next/link";

export default function Footer() {
  return (
    <>    
    <footer className="">
        <div className="tp-footer-2-area black-bg pt-100 pb-20">
            <div className="container container-1740">
                <div className="row">
                    <div className="col-xl-5 col-lg-4 col-md-6 mb-50">
                        <div className="tp-footer-2-widget footer-col-2-1">
                        <div className="tp-footer-2-widget-logo">
                            <Link href="/"><img src="/assets/images/logo-white.png" alt="Sitechs" /></Link>
                        </div>
                        <div className="tp-footer-2-widget-text">
                            <p>Sitechs is a full-service software company specializing in AI automations, web, and mobile development. We partner with startups and enterprises to design, build, and scale digital solutions.
                            </p>                         
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                        <div className="tp-footer-2-widget footer-col-2-2">
                        <div className="tp-footer-2-widget-menu">
                            <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><a href="about-us.html">About</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="blog-details.html">Blog</a></li>
                                <li><a href="portfolio-details-1.html">Portfolio</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
                        <div className="tp-footer-2-widget footer-col-2-3">
                        <h4 className="tp-footer-2-widget-title">Office</h4>
                        <div className="tp-footer-2-contact-item">
                            <span><a href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu" target="_blank">740 NEW SOUTH HEAD RD, TRIPLE BAY SWFW 3108, NEW YORK</a></span>
                        </div>
                        <div className="tp-footer-2-contact-item">
                            <span><a href="tel:+725214456">P: + 725 214 456</a></span>
                        </div>
                        <div className="tp-footer-2-contact-item">
                            <span><a href="mailto:contact@liko.com">E: contact@sitechs.com</a></span>
                        </div>
                        </div>
                    </div>                     
                </div>
            </div>
        </div>

        <div className="tp-copyright-2-area tp-copyright-2-bdr-top black-bg">
            <div className="container container-1740">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5">
                        <div className="tp-copyright-2-left text-center text-lg-start">
                        <p>All rights reserved — Sitechs © 2025</p>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="tp-copyright-2-social text-center text-lg-end">
                        <a className="mb-10" href="#">Linkedin</a>
                        <a className="mb-10" href="#">Twitter</a>
                        <a className="mb-10" href="#">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}