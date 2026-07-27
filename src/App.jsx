import { React, useEffect, useRef } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/about/Abount';
import Career  from './components/Career/Career'
import WorkProcess from './components/work-process/Work_process';
import ContactUs from './components/ContactUs/ContactUs'



const FALLBACK_MS = 5000;

function Home() {

  // const fallbackTimer = useRef(null);
  // const clockInterval = useRef(null);
  // const rafId = useRef(null);
  // const progressValue = useRef(0);
  // const targetValue = useRef(0);
  // const realLoadDone = useRef(false);
  // const revealed = useRef(false);

  // const preventScroll = (e) => e.preventDefault();

  // useEffect(() => {
  //   // Scroll to top on every mount
  //   window.scrollTo({ top: 0, behavior: "instant" });

  //   if (typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined") {
  //     window.gsap.registerPlugin(window.ScrollTrigger);
  //   }

  //   requestAnimationFrame(() => startLoader());

  //   return () => {
  //     if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
  //     if (clockInterval.current) clearInterval(clockInterval.current);
  //     if (rafId.current !== null) cancelAnimationFrame(rafId.current);
  //     unlockScroll();
  //     if (typeof window.ScrollTrigger !== "undefined") {
  //       window.ScrollTrigger.getAll().forEach((t) => t.kill());
  //     }
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // // ─────────────────────────────────────────────
  // //  LOADER
  // // ─────────────────────────────────────────────

  // const startLoader = () => {
  //   const loader = document.getElementById("site-loader");
  //   if (!loader) {
  //     requestAnimationFrame(() => initAllAnimations());
  //     return;
  //   }

  //   document.body.classList.add("loading");
  //   lockScroll();

  //   startClock();
  //   trackRealProgress();
  //   runProgressLoop();

  //   fallbackTimer.current = setTimeout(() => revealSite(), FALLBACK_MS);
  // };

  // const lockScroll = () => {
  //   window.addEventListener("wheel", preventScroll, { passive: false });
  //   window.addEventListener("touchmove", preventScroll, { passive: false });
  // };

  // const unlockScroll = () => {
  //   window.removeEventListener("wheel", preventScroll);
  //   window.removeEventListener("touchmove", preventScroll);
  // };

  // const startClock = () => {
  //   const timeEl = document.getElementById("ldrTime");
  //   if (!timeEl) return;

  //   const update = () => {
  //     const now = new Date();
  //     const hh = String(now.getHours()).padStart(2, "0");
  //     const mm = String(now.getMinutes()).padStart(2, "0");
  //     const ss = String(now.getSeconds()).padStart(2, "0");
  //     const hour12 = now.getHours() % 12 || 12;
  //     const ampm = now.getHours() >= 12 ? "PM" : "AM";
  //     const mm12 = String(now.getMinutes()).padStart(2, "0");
  //     timeEl.textContent = `Local time: ${hh}:${mm}:${ss} (${hour12}:${mm12} ${ampm})`;
  //   };

  //   update();
  //   clockInterval.current = setInterval(update, 1000);
  // };

  // const trackRealProgress = () => {
  //   const images = Array.from(document.images);
  //   const total = Math.max(images.length, 1);
  //   let loaded = 0;

  //   const onAssetLoad = () => {
  //     loaded++;
  //     targetValue.current = Math.max(targetValue.current, (loaded / total) * 92);
  //   };

  //   if (images.length === 0) {
  //     targetValue.current = Math.max(targetValue.current, 92);
  //   } else {
  //     images.forEach((img) => {
  //       if (img.complete) {
  //         onAssetLoad();
  //       } else {
  //         img.addEventListener("load", onAssetLoad, { once: true });
  //         img.addEventListener("error", onAssetLoad, { once: true });
  //       }
  //     });
  //   }

  //   window.addEventListener(
  //     "load",
  //     () => {
  //       realLoadDone.current = true;
  //       targetValue.current = 100;
  //     },
  //     { once: true }
  //   );
  // };

  // const runProgressLoop = () => {
  //   const step = () => {
  //     progressValue.current += (targetValue.current - progressValue.current) * 0.08;

  //     const displayPct = realLoadDone.current
  //       ? Math.max(progressValue.current, 99.5)
  //       : progressValue.current;

  //     renderLoaderUI(displayPct);

  //     if (realLoadDone.current && progressValue.current >= 99.5) {
  //       renderLoaderUI(100);
  //       revealSite();
  //       return;
  //     }

  //     rafId.current = requestAnimationFrame(step);
  //   };

  //   rafId.current = requestAnimationFrame(step);
  // };

  // const renderLoaderUI = (rawPct) => {
  //   const pct = Math.min(100, Math.max(0, Math.round(rawPct)));

  //   const pctEl = document.getElementById("ldrPercent");
  //   if (pctEl) pctEl.textContent = String(pct).padStart(2, "0");

  //   const ringEl = document.getElementById("ldrRingProgress");
  //   if (ringEl) {
  //     ringEl.setAttribute("stroke-dashoffset", String(100 - pct));
  //   }
  // };

  // const revealSite = () => {
  //   if (revealed.current) return;
  //   revealed.current = true;

  //   if (fallbackTimer.current) {
  //     clearTimeout(fallbackTimer.current);
  //     fallbackTimer.current = null;
  //   }
  //   if (clockInterval.current) {
  //     clearInterval(clockInterval.current);
  //     clockInterval.current = null;
  //   }
  //   if (rafId.current !== null) {
  //     cancelAnimationFrame(rafId.current);
  //     rafId.current = null;
  //   }

  //   unlockScroll();
  //   document.body.classList.remove("loading");

  //   const loader = document.getElementById("site-loader");
  //   if (!loader) {
  //     initAllAnimations();
  //     return;
  //   }

  //   loader.classList.add("sl-hidden");
  //   setTimeout(() => {
  //     loader.style.display = "none";
  //     initAllAnimations();
  //   }, 700);
  // };

  // // ─────────────────────────────────────────────
  // //  ANIMATIONS
  // // ─────────────────────────────────────────────

  // const initAllAnimations = () => {
  //   const run = (fnName) => {
  //     const fn = window[fnName];
  //     if (typeof fn === "function") {
  //       try {
  //         fn();
  //       } catch (e) {
  //         console.error(`[Home] ${fnName}:`, e);
  //       }
  //     } else {
  //       console.warn(`[Home] "${fnName}" not found — check index.html <script> tags.`);
  //     }
  //   };

  //   [
  //     "text",
  //     "timer",
  //     "heroheading",
  //     "parallax",
  //     "sward",
  //     "about",
  //     "title",
  //     "what",
  //     "about_text",
  //     "careerLine",
  //     "horizontals",
  //     "gradientes",
  //     "toolsSlider",
  //     "skillsFilter",
  //     "projectCardsReveal",
  //     "socialAsideVisibility",
  //   ].forEach(run);

  //   if (typeof window.ScrollTrigger !== "undefined") window.ScrollTrigger.refresh();

  //   if (typeof document !== "undefined" && document.fonts?.ready) {
  //     document.fonts.ready.then(() => {
  //       if (typeof window.ScrollTrigger !== "undefined") window.ScrollTrigger.refresh();
  //     });
  //   }
  // };

  return (
    <>
      {/* SITE LOADER OVERLAY — radar/HUD style */}


      {/* FIXED UI ELEMENTS  (social sidebar · bg decorations · resume) */}
      {/* <aside className="d-none d-lg-block" aria-label="Social links">
        <div className="social_icons">
               <a 
            href="https://github.com/Abilash1114"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            onClick={() => trackClick('GitHub Icon Click')}
          >
            <img src="public/images/git.svg" className="img-fluid" alt="GitHub" />
          </a>
               <a 
            href="https://www.linkedin.com/in/abilash-r/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            onClick={() => trackClick('LinkedIn Icon Click')}
          >
            <img src="public/images/lin.svg" className="img-fluid" alt="LinkedIn" />
          </a>
               <a 
            href="https://www.behance.net/abilashravi4702"
            target="_blank"
            rel="noopener"
            aria-label="Behance"
            onClick={() => trackClick('Behance Icon Click')}
          >
            <img src="public/images/lin1.svg" className="img-fluid" alt="Behance" />
          </a>
              <a 
            href="tel:+916383891982"
            aria-label="WhatsApp"
            onClick={() => trackClick('Phone Icon Click')}
          >
            <img src="public/images/wh.svg" className="img-fluid" alt="Phone" />
          </a>
        </div>
      </aside>

      <div className="top_left" aria-hidden="true">
        <img src="public/images/top.svg" className="img-fluid" alt="" />
      </div>
      <div className="top_right" aria-hidden="true">
        <img src="public/images/top.svg" className="img-fluid" alt="" />
      </div>

      <div className="resume">
        <div className="resume_outsaid">
          <a 
            href="public/images/resume-1.pdf"
            download="Abilash_Resume.pdf"
            onClick={() => trackClick('Resume Click')}
          >
            <p style={{ margin: '0px' }}>
              Resume
              <img src="public/images/resume.svg" className="img-fluid" alt="download" />
            </p>
          </a>
        </div>
      </div> */}

      {/* CHILD COMPONENTS */}
      <Hero />
      <About />
      <WorkProcess/>
      <Career/>
      <ContactUs/>

    </>
  );
};

export default Home;