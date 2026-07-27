gsap.registerPlugin(ScrollTrigger, SplitText);

function about_text() {
  const split = new SplitText(".about_me", { type: "words" });

  gsap.set(split.words, { y: 20, opacity: 0 });

  gsap.to(split.words, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.02,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about_me",
      start: "top 100%",
      end: "bottom bottom",
      scrub: 1,
    },
  });
}

// expose it so React can call it
window.about_text = about_text;