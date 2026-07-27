import React from "react";
import "./Hero.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  const trackClick = (label) => {
    // TODO: wire this up to your analytics/tracking service
    console.log("Tracked:", label);
  };

  return (
    <header className="hero_back">
      <div className="container">
        <nav className="row hero_nav" aria-label="Main navigation">
          <div className="col-md-3 col-4">
            <img
              src="public/images/logo.svg"
              className="img-fluid"
              alt="Prabhu logo"
            />
          </div>
          <div className="col-lg-5 d-none d-lg-block"></div>
          <div className="col-lg-4 col-8">
            <div className="nav_item">
              <a href="#about_section" onClick={() => trackClick('Nav About Click')}>
                <p>About</p>
              </a>
              <a href="#skills" onClick={() => trackClick('Nav Skills Click')}>
                <p>Skills</p>
              </a>
              <a href="#Portfolio" onClick={() => trackClick('Nav Cause Study Click')}>
                <p>Cause Study</p>
              </a>
              <a href="#contact" onClick={() => trackClick('Nav Contact Click')}>
                <p>Contact</p>
              </a>
            </div>
          </div>
        </nav>

        {/* <div className="gradients" aria-hidden="true"></div> */}

        <div className="postion">
          <h5 id="hero_heading">JAVA FULL STACK DEVELOPER</h5>
        </div>

        <div className="row hero_next">
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
                  
                  <a href="#Portfolio"
                    rel="noopener"
                    onClick={() => trackClick('Cause Study Button Click')}
                  >
                    <p>Cause Study</p></a>               
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 order-3 order-lg-2">
            <img
              src="public/images/robo.png"
              className="img-fluid robo"
              alt="3D robot illustration"
            />
          </div>

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