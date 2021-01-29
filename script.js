barba.init({
  sync: true,
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});

const tl = gsap.timeline();

tl.to(".postAnimation", { duration: 0, display: "none" })
  .from(".introHey", {
    rotation: -12,
    y: "100vh",
    duration: 1,
  })
  .from(".introWhat", { rotation: -12, y: "100vh", duration: 1, delay: 0.2 })
  .to(".introText", {
    rotation: 12,
    y: "-50vh",
    opacity: 0,
    duration: 1,
    delay: 0.8,
  })
  .to(".postAnimation", { duration: 0, display: "block", opacity: 0 })
  .from(".postAnimation", { opacity: 0 })
  .from("header", { opacity: 0, y: -300, duration: 0.8 })
  .from("footer", { opacity: 0, duration: 0.8 })
  .from(".infoContainer", { duration: 1, y: 100, opacity: 0, stagger: 0.2 })
  .to("introAnimation", { display: "none" });
