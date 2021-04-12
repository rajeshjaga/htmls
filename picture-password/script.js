const password = document.getElementById("password");
const backImg = document.getElementById("image");

password.addEventListener("input", removeblur);

function removeblur(e) {
  var theLength = e.target.value.length;
  backImg.style.filter = `blur(${20 - theLength * 2}px)`;
}
