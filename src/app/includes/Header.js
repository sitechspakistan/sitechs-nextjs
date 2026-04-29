"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const openOffcanvas = () => setIsOffcanvasOpen(true);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrolled(true); // scroll down
      } else {
        setScrolled(false); // scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY >= 20);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      {/* Offcanvas Area */}
      <div className={`tp-offcanvas-area ${isOffcanvasOpen ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="/" onClick={closeOffcanvas}>
                <img
                  src="/assets/images/logo.png"
                  alt="Sitechs"
                  className="logo-1"
                />
                <img
                  src="/assets/images/logo.png"
                  alt="Sitechs"
                  className="logo-2"
                />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={closeOffcanvas}
              >
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
            <div className="tp-main-menu-mobile  d-lg-none">
              <nav className="tp-main-menu-content ">
                <ul>
                  <li>
                    <Link href="/blog" onClick={closeOffcanvas}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" onClick={closeOffcanvas}>
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link href="/case-studies" onClick={closeOffcanvas}>
                      Case Studies
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact-us" onClick={closeOffcanvas}>
                      Contact Us
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
                  <a href="mailto:info@sitechs.co">info@sitechs.co</a>
                </li>
                <li>
                  <a href="#">B-238, Block 6 Gulshan-e-Iqbal, Karachi.</a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>

              <ul className="hero-socials">
                <div className="tp-footer-3-social pt-10 justify-content-center">
                  <li>
                    <Link href="https://x.com/officialsitechs" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/Sitechsofficial/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/sitechs.official/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/sitechsofficial"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </div>
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
      <header className={`tf-header header2 ${scrolled && "header-scrolled"}`}>
        <div className="header-inner">
          {/* Header Logo */}
          <Link href="/" className="logo-site">
            <img src="/assets/images/logo.png" alt="Sitechs" />{" "}
          </Link>

          {/* Navigation */}
          <div
            className={`box-navigation ${scrolled ? "nav-hide" : "nav-show"}  d-none d-lg-flex`}
          >
            <ul className="nav-menu-main d-none d-lg-flex">
              <li className="menu-item">
                <Link href="/blog" className="item-link link1">
                  Blog
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/services" className="item-link link1">
                  Services
                </Link>
              </li>

              <li className="menu-item">
                <Link href="/case-studies" className="item-link link1">
                  Case Studies
                </Link>
              </li>

              {/* <li className="menu-item">
              <Link href="/blog" className="item-link link1">
                Blog
              </Link>
            </li> */}
            </ul>
          </div>

          {/* Buttons */}
          <div className="header-actions d-none d-lg-flex">
            <Link
              href="/contact-us"
              className={`tf-btn tp-btn-border-sm  ${scrolled ? "btn-hide" : "btn-show"}`}
            >
              Contact Us
            </Link>

            <Link
              href="/contact-us"
              className={`tf-btn tp-btn-border-sm  ${scrolled ? "btn-show" : "btn-hide"}`}
            >
              Contact Us
            </Link>

            <Link
              href="https://calendar.app.google/Mog659g7KdYzSkga7"
              target="_blank"
              className={`tf-btn tp-btn-border-sm btn-dark ${scrolled ? "btn-show" : "btn-hide"}`}
            >
              Book a Call
            </Link>
          </div>
          <button
            className="tp-hamburger-btn d-lg-none"
            onClick={openOffcanvas}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H21"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 18H21"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
