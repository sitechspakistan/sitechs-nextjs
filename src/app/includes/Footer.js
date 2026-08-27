import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="tp-footer-2-area black-bg pt-50 pb-20">
          <div className="container container-1320">
            <div className="row">
              <div className="col-xl-5 col-lg-4 col-md-6">
                <div className="tp-footer-2-widget footer-col-2-1">
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <img src="/assets/images/logo-white.png" alt="Sitechs" />
                    </Link>
                  </div>
                  <div className="tp-footer-2-widget-text">
                    <p>
                      Sitechs is a full-service software company specializing in
                      AI automations, web, and branding. We partner with
                      startups and enterprises to design, build, and scale
                      digital solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="tp-footer-2-widget footer-col-2-2">
                  <div className="tp-footer-2-widget-menu">
                    <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      {/* <li><a href="#">About</a></li> */}
                      <li>
                        <a href="/contact-us">Contact</a>
                      </li>
                      <li>
                        <Link href="/blog">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/case-studies">Portfolio</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-6">
                <div className="tp-footer-2-widget footer-col-2-3">
                  <h4 className="tp-footer-2-widget-title">Office</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a href="https://www.google.com/maps/" target="_blank">
                        <i className="fa fa-location-arrow"></i> B-238, Block 6
                        Gulshan-e-Iqbal, Karachi.
                      </a>
                    </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a href="tel:+923423543100">
                        <i className="fa fa-phone"></i> +92 342 3543100
                      </a>
                    </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a href="mailto:info@sitechs.co">
                        <i className="fa fa-envelope"></i> info@sitechs.co
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-copyright-2-area tp-copyright-2-bdr-top black-bg">
          <div className="container container-1740">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="text-center">
                  <p className="text-white">
                    &copy; Sitechs 2026. All Rights Reserved.
                  </p>
                </div>
              </div>
              {/* <div className="col-xl-8 col-lg-7">
                        <div className="tp-copyright-2-social text-center text-lg-end">
                        <a className="mb-10" href="https://www.linkedin.com/company/sitechsofficial" target="_blank">Linkedin</a>
                        <a className="mb-10" href="https://www.facebook.com/Sitechsofficial/" target="_blank">Facebook</a>
                        <a className="mb-10" href="https://www.instagram.com/sitechs.official/" target="_blank">Instagram</a>
                        </div>
                    </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
