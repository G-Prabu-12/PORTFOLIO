import { useEffect, useRef } from "react";

import "./Work_process.css";
import "remixicon/fonts/remixicon.css"; // for ri-search-line etc. icons
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


const steps = [
  {
    number: "01",
    icon: "ri-search-line",
    title: "Discover",
    description:
      "Understanding business requirements, system constraints, and end-user needs before writing a single line of code.",
  },
  {
    number: "02",
    icon: "ri-bar-chart-2-line",
    title: "Plan & Architect",
    description:
      "Designing scalable system architecture, database schemas, and API contracts aligned with project goals.",
  },
  {
    number: "03",
    icon: "ri-server-line",
    title: "Backend Development",
    description:
      "Building robust, secure backend services with Java, Spring Boot, and RESTful APIs.",
  },
  {
    number: "04",
    icon: "ri-layout-4-line",
    title: "Frontend Development",
    description:
      "Creating responsive, dynamic user interfaces using Angular and React connected seamlessly to backend APIs.",
  },
  {
    number: "05",
    icon: "ri-database-2-line",
    title: "Integration & Testing",
    description:
      "Integrating frontend and backend, writing unit/integration tests, and ensuring data flows correctly end-to-end.",
  },
  {
    number: "06",
    icon: "ri-rocket-line",
    title: "Deploy & Optimize",
    description:
      "Deploying applications, monitoring performance, and continuously optimizing based on real-world usage and feedback.",
  },
];

function WorkProcess() {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
    const timelineRef = useRef(null);


    return (
 
        <section className="work-process" aria-label="My work process">
            <canvas className="wp-canvas" aria-hidden="true"></canvas>

            <div className="container wp-content">
                <div className="main_title">
                    <p className="section-eyebrow">My Approach</p>
                    <h6>
                        My Work <span>Process</span>
                    </h6>
                </div>


           


                <div className="wp-timeline" ref={timelineRef}>
                    {steps.map((step) => (
                        <div className="wp-row" key={step.number}>
                            <div className="wp-row__marker">
                                <span className="wp-num">{step.number}</span>
                                <span className="wp-dot" aria-hidden="true"></span>
                            </div>
                            <div className="wp-row__card">
                                <div className="wp-icon">
                                    <i className={step.icon}></i>
                                </div>
                                <h4 className="wp-row__title">{step.title}</h4>
                                <p className="wp-row__desc">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="wp-footer-line" aria-hidden="true">
                    <span></span>
                    <span className="wp-footer-dot"></span>
                    <span></span>
                </div>
            </div>
        </section>
    );
}

export default WorkProcess;