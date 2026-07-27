import React from 'react';
import "./Abount.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function About() {
 return (
    <section id="about_section" className="about_section">
      <div className="container">
        {/* Mobile role switcher */}
        <div className="col-lg-4 d-block d-lg-none">
          <div className="d-flex align-items-center justify-content-center">
            <div className="hero_smtit mb-5">
              <p>A Creative</p>
              <h6 id="heading-mobile">DEVELOPER</h6>
              <h5>DESIGNER</h5>
            </div>
          </div>
        </div>
        <div className="main_title">
          <p className="section-eyebrow">About Me</p>
          <h6>
            My Creative<span> Identity</span>
          </h6>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-10">
            <p className="about_me">
                I'm Prabu G, a Java Full Stack Developer with hands-on experience building
                scalable, high-performance web applications. I work across the full
                development lifecycle — from designing robust backend systems with Java,
                Spring Boot, and REST APIs, to building responsive, user-friendly interfaces
                on the frontend. My process is rooted in clean, maintainable code and
                efficient database design, ensuring applications perform reliably under
                real-world load.
                <br /><br />
                On the backend, I work with Java, Spring Boot, Hibernate, and SQL/NoSQL
                databases. On the frontend, I build with Angular and React, along with
                HTML, CSS, and JavaScript, to deliver seamless, dynamic user experiences
                across different project needs. This full-stack expertise lets me bridge
                the gap between design and functionality — debugging issues across the
                entire stack rather than just one layer. I also focus on writing secure,
                well-tested code that follows industry best practices for scalability
                and maintainability.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <div className="pro_butn">
                <a href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEdbnIw5jS92TEkmEmbAfkg%3D%3D"
                  target="_blank"
                  rel="noopener"
                >
                  <p>Hire Me</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default About;