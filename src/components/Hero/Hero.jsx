import React, { useState } from "react";
import "./Hero.css";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const trackClick = (label) => {
    // TODO: wire this up to your analytics/tracking service
    console.log("Tracked:", label);
  };

  const handleNavClick = (label) => {
    trackClick(label);
    setMenuOpen(false);
  };

  return (
    <header className="hero_back">
      <div className="container">
        {/* ---------- Navbar ---------- */}
        <nav className="row hero_nav" aria-label="Main navigation">
          <div className="col-md-3 col-4">
            <img
              src="/images/logo.svg"
              className="img-fluid"
              alt="Prabhu logo"
            />
          </div>
          <div className="col-lg-5 d-none d-lg-block"></div>

          <div className="col-lg-4 col-8 nav_right_wrap">
            {/* Desktop / large-screen nav links */}
            <div className="nav_item d-none d-lg-flex">
              <a href="#about_section" onClick={() => trackClick("Nav About Click")}>
                <p>About</p>
              </a>
              <a href="#skills" onClick={() => trackClick("Nav Skills Click")}>
                <p>Skills</p>
              </a>
              <a href="#Portfolio" onClick={() => trackClick("Nav Cause Study Click")}>
                <p>Cause Study</p>
              </a>
              <a href="#contact" onClick={() => trackClick("Nav Contact Click")}>
                <p>Contact</p>
              </a>
            </div>

            {/* Mobile hamburger toggle */}
            <button
              className={`nav_toggle d-lg-none ${menuOpen ? "active" : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Overlay backdrop (mobile only, shown when menu is open) */}
        <div
          className={`nav_overlay ${menuOpen ? "show" : ""}`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Slide-in mobile nav panel */}
        <div className={`nav_mobile_panel ${menuOpen ? "open" : ""}`}>
          <button
            className="nav_panel_close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <div className="nav_item_mobile">
            <a href="#about_section" onClick={() => handleNavClick("Nav About Click")}>
              <p>About</p>
            </a>
            <a href="#skills" onClick={() => handleNavClick("Nav Skills Click")}>
              <p>Skills</p>
            </a>
            <a href="#Portfolio" onClick={() => handleNavClick("Nav Cause Study Click")}>
              <p>Cause Study</p>
            </a>
            <a href="#contact" onClick={() => handleNavClick("Nav Contact Click")}>
              <p>Contact</p>
            </a>
          </div>
        </div>

        {/* ---------- Main Heading ---------- */}
        <div className="postion">
          <h5 id="hero_heading">JAVA FULL STACK DEVELOPER</h5>
        </div>

        {/* ---------- Content Row ---------- */}
        <div className="row hero_next">
          {/* Left: Name / Bio / Button */}
          <div className="col-lg-4 order-1">
            <div className="hero_details">
              <div className="hero_name">
                <h6>Prabu G</h6>
                <p>
                  Java Full Stack Developer with 3+ years of experience building scalable
                  web applications using Java, Spring Boot, and Angular/React. I design
                  and develop robust backend systems and responsive front-end interfaces,
                  delivering end-to-end solutions for enterprise applications.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="pro_butn mt-1">
                  <a
                    href="#Portfolio"
                    rel="noopener"
                    onClick={() => trackClick("Cause Study Button Click")}
                  >
                    <p>Cause Study</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Robot Image */}
          <div className="col-lg-4 order-3 order-lg-2">
            <img
              src="/images/robo.png"
              className="img-fluid robo"
              alt="3D robot illustration"
            />
          </div>

          {/* Right: Tagline */}
          <div className="col-lg-4 order-2 order-lg-3 d-none d-lg-block">
            <div className="d-flex align-items-center justify-content-center">
              <div className="hero_smtit">
                <p>A Creative</p>
                <h6 id="heading">DEVELOPER</h6>
                <h5>Software Engineer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
