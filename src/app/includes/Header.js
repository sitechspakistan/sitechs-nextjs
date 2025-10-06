"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const openOffcanvas = () => setIsOffcanvasOpen(true);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Offcanvas Area */}
      <div className={`tp-offcanvas-area${isOffcanvasOpen ? " opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="/" onClick={closeOffcanvas}>
                <img src="/assets/images/logo.png" alt="Sitechs" className="logo-1" />
                <img src="/assets/images/logo.png" alt="Sitechs" className="logo-2" />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button className="tp-offcanvas-close-btn" onClick={closeOffcanvas}>
                <svg
                  width="37"
                  height="38"
                  viewBox="0 0 37 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.19141 9.80762L27.5762 28.1924"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.19141 28.1924L27.5762 9.80761"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="tp-offcanvas-main">
            <div className="tp-main-menu-mobile d-xl-none">
              <nav className="tp-main-menu-content">
                <ul>
                  <li>
                    <Link href="/ai-automations" onClick={closeOffcanvas}>
                      AI Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-development" onClick={closeOffcanvas}>
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/logo-branding" onClick={closeOffcanvas}>
                      Logo / Branding
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" onClick={closeOffcanvas}>
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>
              <ul>
                <li>
                  <a href="tel:+92 342 3543100">+92 342 3543100</a>
                </li>
                <li>
                  <a href="mailto:hello@sitechs.co">hello@sitechs.co</a>
                </li>
                <li>
                  <a href="#">Karachi, Pakistan</a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a href="#">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 1.5H4.75C2.95507 1.5 1.5 2.95507 1.5 4.75V11.25C1.5 13.0449 2.95507 14.5 4.75 14.5H11.25C13.0449 14.5 14.5 13.0449 14.5 11.25V4.75C14.5 2.95507 13.0449 1.5 11.25 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6016 7.5907C10.6818 8.13166 10.5894 8.68414 10.3375 9.16955C10.0856 9.65497 9.68711 10.0486 9.19862 10.2945C8.71014 10.5404 8.15656 10.6259 7.61663 10.5391C7.0767 10.4522 6.57791 10.1972 6.19121 9.81055C5.80451 9.42385 5.54959 8.92506 5.46271 8.38513C5.37583 7.8452 5.46141 7.29163 5.70728 6.80314C5.95315 6.31465 6.34679 5.91613 6.83221 5.66425C7.31763 5.41238 7.87011 5.31998 8.41107 5.4002C8.96287 5.48202 9.47372 5.73915 9.86817 6.1336C10.2626 6.52804 10.5197 7.0389 10.6016 7.5907Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.5742 4.42578H11.5842"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.50589 12.7494C4.57662 16.336 9.16278 17.5648 12.7494 15.4941C14.2113 14.65 15.2816 13.388 15.8962 11.9461C16.7895 9.85066 16.7208 7.37526 15.4941 5.25063C14.2674 3.12599 12.1581 1.82872 9.89669 1.55462C8.34063 1.366 6.71259 1.66183 5.25063 2.50589C1.66403 4.57662 0.435172 9.16278 2.50589 12.7494Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12.7127 15.4292C12.7127 15.4292 12.0086 10.4867 10.5011 7.87559C8.99362 5.26451 5.28935 2.57155 5.28935 2.57155M5.68449 15.6124C6.79553 12.2606 12.34 8.54524 16.3975 9.43537M12.311 2.4082C11.1953 5.72344 5.75732 9.38453 1.71875 8.58915"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`body-overlay${isOffcanvasOpen ? " opened" : ""}`}
        onClick={closeOffcanvas}
      ></div>

      {/* Header */}
      <header>
        <div
          id="header-sticky"
          className={`tp-header-3-area mt-35 z-index-5 ${
            isSticky ? "header-sticky" : ""
          }`}
        >
          <div className="container container-1740">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo tp-header-3-logo">
                  <Link className="logo-1" href="/">
                    <img src="/assets/images/logo.png" alt="Sitechs" />
                  </Link>
                  <Link className="logo-2" href="/">
                    <img src="/assets/images/logo.png" alt="Sitechs" />
                  </Link>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 d-none d-xl-block">
                <div className="tp-header-3-menu-wrap text-center">
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                    <div className="tp-header-3-menu header-main-menu">
                      <nav className="tp-main-menu-content">
                        <ul>
                          <li>
                            <Link href="/ai-automations">AI Automation</Link>
                          </li>
                          <li>
                            <Link href="/web-development">Web Development</Link>
                          </li>
                          <li>
                            <Link href="/logo-branding">Logo / Branding</Link>
                          </li>
                          <li>
                            <Link href="/case-studies">Case Studies</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-3-btn d-flex align-items-center ml-30">
                    <a
                      className="tp-btn-border-sm d-none tp-btn-black-2 d-sm-block"
                      href="https://calendar.app.google/Mog659g7KdYzSkga7"
                      target="_blank"
                    >
                      Book a Call
                    </a>
                    <button
                      className="ml-20 d-xl-none tp-header-3-bar tp-offcanvas-open-btn"
                      onClick={openOffcanvas}
                    >
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}