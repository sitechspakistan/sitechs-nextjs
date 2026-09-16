"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useScrollProgress from "../hooks/useScrollProgress";
import useMagnetic from "../hooks/useMagnetic";
import { navLinks } from "../../data/home";

export default function Header() {
  const { scrolled, progress } = useScrollProgress();
  const magnetic = useMagnetic();
  const pathname = usePathname();
  const [clock, setClock] = useState("--:--:--");
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => href !== "#faq" && href !== "/" && pathname.startsWith(href);

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Karachi",
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="site-header__progress">
        <div className="site-header__progress-bar" style={{ width: `${progress.toFixed(2)}%` }} />
      </div>

      <div className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
        <div className="site-header__shell">
          <div className="site-header__inner">
            <Link href="/#top" className="site-header__logo">
              <img src="/assets/images/logo/sitechs-logo-light.svg" alt="Sitechs" />
            </Link>

            <nav className="site-header__nav">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`site-header__nav-link${isActive(l.href) ? " site-header__nav-link--active" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="site-header__spacer" />

            <div className="site-header__clock">
              <span className="site-header__clock-dot" />
              {clock} PKT
            </div>

            <Link href="/start-a-project" className="site-header__call">
              Book a call
            </Link>

            <Link
              href="/start-a-project"
              className="site-header__cta"
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
            >
              <span>Start a project</span>
              <span className="site-header__cta-icon">↗</span>
            </Link>

            <button
              type="button"
              className="site-header__burger"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="mobile-nav__overlay" onClick={() => setMenuOpen(false)} />
          <div className="mobile-nav__panel">
            <div className="mobile-nav__head">
              <img src="/assets/images/logo/sitechs-logo-light.svg" alt="Sitechs" />
              <button
                type="button"
                className="mobile-nav__close"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="mobile-nav__links">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="mobile-nav__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              href="/start-a-project"
              className="mobile-nav__cta"
              onClick={() => setMenuOpen(false)}
            >
              Start a project
            </Link>
          </div>
        </>
      )}
    </>
  );
}
