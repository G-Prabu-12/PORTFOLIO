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

    // const renderer = useRef(null);
    // const scene = useRef(null);
    // const camera = useRef(null);
    // const stars = useRef(null);
    // const shapes = useRef([]);
    // const clock = useRef(new THREE.Clock());
    // const rafId = useRef(0);
    // const scrollTriggerInstances = useRef([]);
    // const intersectionObserver = useRef(null);
    // const isIntersecting = useRef(true);

    // useEffect(() => {
    //     if (typeof THREE === "undefined") return;

    //     initScene();
    //     buildStarfield();
    //     buildFloatingShapes();
    //     window.addEventListener("resize", onResize);
    //     setupVisibilityGate();
    //     animate();

    //     setupScrollAnimations();

    //     return () => {
    //         window.removeEventListener("resize", onResize);
    //         intersectionObserver.current?.disconnect();
    //         cancelAnimationFrame(rafId.current);
    //         scrollTriggerInstances.current.forEach((t) => t?.kill());

    //         shapes.current.forEach((shape) => {
    //             shape.geometry.dispose();
    //             shape.material.dispose();
    //         });

    //         if (stars.current) {
    //             stars.current.geometry.dispose();
    //             stars.current.material.dispose();
    //         }

    //         renderer.current?.dispose();
    //     };
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // // ─────────────────────────────────────────────
    // //  THREE.JS — ambient decorative background
    // // ─────────────────────────────────────────────

    // const initScene = () => {
    //     const canvas = canvasRef.current;
    //     const host = sectionRef.current;

    //     scene.current = new THREE.Scene();

    //     camera.current = new THREE.PerspectiveCamera(
    //         50,
    //         host.clientWidth / host.clientHeight,
    //         0.1,
    //         100
    //     );
    //     camera.current.position.set(0, 0, 20);

    //     renderer.current = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    //     renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //     renderer.current.setSize(host.clientWidth, host.clientHeight);
    // };

    // /** Same particle-field technique as Gallery3d's buildStarfield(). */
    // const buildStarfield = () => {
    //     const COUNT = 250;
    //     const positions = new Float32Array(COUNT * 3);

    //     for (let i = 0; i < COUNT; i++) {
    //         positions[i * 3] = (Math.random() - 0.5) * 40;
    //         positions[i * 3 + 1] = (Math.random() - 0.5) * 24;
    //         positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    //     }

    //     const geometry = new THREE.BufferGeometry();
    //     geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    //     const material = new THREE.PointsMaterial({
    //         color: 0x0bdfbb,
    //         size: 0.07,
    //         transparent: true,
    //         opacity: 0.45,
    //         depthWrite: false,
    //         blending: THREE.AdditiveBlending,
    //     });

    //     stars.current = new THREE.Points(geometry, material);
    //     scene.current.add(stars.current);
    // };

    // /** Scattered slowly-rotating wireframe polyhedra — the "floating geometry" look. */
    // const buildFloatingShapes = () => {
    //     const geometries = [
    //         new THREE.IcosahedronGeometry(2.2, 0),
    //         new THREE.TetrahedronGeometry(1.8, 0),
    //         new THREE.OctahedronGeometry(1.6, 0),
    //         new THREE.IcosahedronGeometry(1.4, 0),
    //     ];

    //     const positions = [
    //         [-13, 6, -6],
    //         [13, -5, -8],
    //         [-11, -7, -4],
    //         [12, 7, -5],
    //     ];

    //     geometries.forEach((geometry, i) => {
    //         const edges = new THREE.EdgesGeometry(geometry);
    //         const material = new THREE.LineBasicMaterial({
    //             color: 0x0bdfbb,
    //             transparent: true,
    //             opacity: 0.18,
    //         });
    //         const shape = new THREE.LineSegments(edges, material);
    //         shape.position.set(...positions[i]);
    //         shape.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    //         shapes.current.push(shape);
    //         scene.current.add(shape);
    //         geometry.dispose(); // only EdgesGeometry is kept/rendered
    //     });
    // };

    // const animate = () => {
    //     if (!isIntersecting.current) return; // IntersectionObserver restarts this loop when back in view.

    //     rafId.current = requestAnimationFrame(animate);

    //     const delta = clock.current.getDelta();

    //     shapes.current.forEach((shape, i) => {
    //         shape.rotation.x += delta * 0.04 * (i % 2 === 0 ? 1 : -1);
    //         shape.rotation.y += delta * 0.06;
    //     });

    //     if (stars.current) {
    //         stars.current.rotation.y += delta * 0.01;
    //     }

    //     renderer.current.render(scene.current, camera.current);
    // };

    // const onResize = () => {
    //     const host = sectionRef.current;
    //     camera.current.aspect = host.clientWidth / host.clientHeight;
    //     camera.current.updateProjectionMatrix();
    //     renderer.current.setSize(host.clientWidth, host.clientHeight);
    // };

    // /** Pauses the render loop while the section is scrolled off-screen. */
    // const setupVisibilityGate = () => {
    //     if (typeof IntersectionObserver === "undefined") return;

    //     intersectionObserver.current = new IntersectionObserver(
    //         ([entry]) => {
    //             const wasIntersecting = isIntersecting.current;
    //             isIntersecting.current = entry.isIntersecting;

    //             if (isIntersecting.current && !wasIntersecting) {
    //                 animate();
    //             }
    //         },
    //         { threshold: 0 }
    //     );
    //     intersectionObserver.current.observe(sectionRef.current);
    // };

    // // ─────────────────────────────────────────────
    // //  GSAP — scroll-drawn line + per-row reveal
    // // ─────────────────────────────────────────────

    // const setupScrollAnimations = () => {
    //     const gsap = window.gsap;
    //     const ScrollTrigger = window.ScrollTrigger;
    //     if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    //     gsap.registerPlugin(ScrollTrigger);

    //     const timeline = timelineRef.current;

    //     gsap.utils.toArray(".wp-row", timeline).forEach((row) => {
    //         const tween = gsap.fromTo(
    //             row,
    //             { opacity: 0, y: 24 },
    //             {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 0.6,
    //                 ease: "power2.out",
    //                 scrollTrigger: {
    //                     trigger: row,
    //                     start: "top 88%",
    //                     end: "bottom 60%",
    //                     toggleActions: "play none none reverse",
    //                 },
    //             }
    //         );
    //         scrollTriggerInstances.current.push(tween.scrollTrigger);
    //     });
    // };

    return (
        // <section className="work-process" ref={sectionRef} aria-label="My work process">
        //     <canvas ref={canvasRef} className="wp-canvas" aria-hidden="true"></canvas>

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