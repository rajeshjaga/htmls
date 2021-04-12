new fullpage("#pages", {
  autoScrolling: true,
  navigation: true,
});
const head = document.querySelector("h1");
const load = head.addEventListener("click", () => {
  const tl = new TimelineMax();
  tl.to("h1", 1, { y: -100 }, { y: 0 }, "+=.5");
});
