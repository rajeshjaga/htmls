let cusor = document.querySelector(".cursor");
let navli = document.querySelectorAll("li");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  cusor.style.top = e.pageY + "px";
  cusor.style.left = e.pageX + "px";
}
navli.forEach((links) => {
  links.addEventListener("mouseover", () => {
    cusor.classList.add("linkgrow");
    links.classList.add("hoverlink");
  });
  links.addEventListener("mouseleave", () => {
    cusor.classList.remove("linkgrow");
    links.classList.remove("hoverlink");
  });
});
