document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const formButton = document.getElementById("submit");
  formButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(name.value);
    name.value = "";
  });
});
