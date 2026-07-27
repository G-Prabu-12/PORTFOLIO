import React from "react";
import './Career.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function CareerPath() {
    return (
        <section className="career" style={{ overflow: "hidden" }}>
            <div className="container">
                <div className="main_title">
                    <p className="section-eyebrow">Career Path</p>
                    <h6>
                        My Education &amp;<span> Experience</span>
                    </h6>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                    <div className="starimage sword-area">
                        <div className="sword-area__inner">
                            <img
                                src="public/images/bu.png"
                                className="img-fluid"
                                alt=""
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>

                <div className="row my_careeor">
                    <div id="starContainer" aria-hidden="true">
                        <div id="star">
                            <div className="half">
                                <div id="topLeft" className="starQuarter"></div>
                                <div id="topRight" className="starQuarter"></div>
                            </div>
                            <div className="half">
                                <div id="bottomLeft" className="starQuarter"></div>
                                <div id="bottomRight" className="starQuarter"></div>
                            </div>
                        </div>
                    </div>

                    {/* Entry 1: Bachelor's */}
                    {/* <div className="col-lg-12 d-flex align-items-start justify-content-between myes"></div> */}
                    <div className="col-lg-12 d-flex align-items-start justify-content-between myes">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-start justify-content-between">
                                <div className="bach_name">
                                    <h6>
                                        BE - ECE
                                    </h6>
                                    <p>Gnanamani College of Technology</p>
                                </div>
                                <p className="year year--indent">2019–2023</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ex_detailss">
                                <p>
                                    Built a strong foundation in Electronics and Communication Engineering (ECE), developing analytical thinking and problem-solving skills through circuit design, embedded systems, digital electronics, and project-based learning. Alongside my core engineering studies, I started learning basic programming languages, which helped me understand programming fundamentals and sparked my interest in software development and technology.
                                </p>
                            </div>
                        </div>
                    </div>



                    {/* Entry 3: Current role */}
                    <div className="col-lg-12 d-flex align-items-start justify-content-between myes">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-start justify-content-between">
                                <div className="bach_name">
                                    <h6 className="bach_name__nowrap">
                                        JRK Consulting
                                        <br />
                                        Services
                                        <br />
                                        Pvt Ltd, Chennai
                                    </h6>
                                    <p>Developer</p>
                                </div>
                                <p className="year">2023-2026</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ex_detailss">
                                <p>
                                    Selected through a campus interview in 2023 March to join JRK Consulting
                                    Services Pvt. Ltd. Began my career as a Support Engineer, gaining hands-on
                                    experience in application support and troubleshooting. Through continuous
                                    learning and consistent performance, I mastered Core Java, Spring Boot,
                                    Spring MVC, MS SQL Server, MySQL, Angular, React, JavaScript, and
                                    TypeScript, which enabled my transition to a Developer role. Contributed
                                    to enterprise application development until June 30, 2026, when I
                                    resigned to pursue greater career growth and new technical challenges.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Entry 2: Current role */}
                    <div className="col-lg-12 d-flex align-items-start justify-content-between myes">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-start justify-content-between">
                                <div className="bach_name">
                                    <h6 className="bach_name__nowrap">
                                        TVS Electronics Limited ,
                                        <br />
                                        Chennai
                                    </h6>
                                    <p>Java Full Stack Developer</p>
                                </div>
                                <p className="year">Now</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ex_detailss">
                                <p>
                                    Joined <b>TVS Electronics Limited</b> as a <b>Java Full Stack Developer</b>, where I am currently contributing to the development and maintenance of enterprise web applications. Working extensively with **Java, Spring Boot, Angular, MongoDB, and MySQL**, I build scalable, secure, and high-performance solutions while collaborating with cross-functional teams. By consistently delivering quality work, enhancing my technical expertise, and taking ownership of key development tasks, I continue to demonstrate strong performance and contribute to the organization's success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerPath;
