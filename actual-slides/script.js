const slider = document.querySelector(".slide-container"),
  slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.addEventListener("drag", (e) => drag(e));
  slide.addEventListener("dragstart", (e) => dragStart(e));
  slide.addEventListener("dragend", (e) => dragEnd(e));
  slide.addEventListener("mousemove", (e) => mousemoving(e));
});

function drag(event) {
  console.log(window.mouse.pageX);
}
function dragStart(event) {
  console.log("dragstart");
}
function dragEnd(event) {
  console.log("dragend");
}
