import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <img src="/assets/images/logo/sitechs-logo-light.svg" alt="Sitechs" className="site-footer__logo" />
          <p className="site-footer__tagline">
            AI automation and digital product studio. Karachi, working globally.
          </p>
        </div>

        <div>
          <div className="site-footer__heading">Studio</div>
          <div className="site-footer__links">
            <Link href="/case-studies">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/#engage">Engagements</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        <div>
          <div className="site-footer__heading">Office</div>
          <div className="site-footer__office">
            B-238, Block 6
            <br />
            Gulshan-e-Iqbal, Karachi
            <br />
            +92 342 3543100
            <br />
            info@sitechs.co
          </div>
        </div>

        <div>
          <div className="site-footer__heading">Elsewhere</div>
          <div className="site-footer__links">
            <a href="https://www.linkedin.com/company/sitechsofficial" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="#contact">Behance</a>
            <a href="#contact">Dribbble</a>
            <a href="#contact">Upwork</a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom-wrap">
        <div className="site-footer__bottom">
          <span>© Sitechs 2026. All rights reserved.</span>
          <span className="site-footer__bottom-tag">Accepting Q4 builds</span>
        </div>
      </div>
    </footer>
  );
}
