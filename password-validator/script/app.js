const eye = document.querySelector(".eye");
const valid = document.querySelector(".valid");
let open = false;
let token = false;
valid.addEventListener('click', () => {
    const scale = document.documentElement;
    const Password = document.getElementById("password");
    const arrow = document.getElementById("next");
    const check = document.getElementById("check");
    const times = document.getElementById("times");
    arrow.classList.add("hide");
    check.classList.add("hide");
    times.classList.add("hide");
    if (open) {
        scale.style.setProperty('--scale', "scaleX(0)");
        scale.style.setProperty('--opacity', 0);
        scale.style.setProperty('--color', "dodgerblue");
        arrow.classList.remove("hide");
    } else {
        if (Password.value == "password") {
            valid.dataset.content = "Correct password";
            scale.style.setProperty("--color", "lightseagreen");
            check.classList.remove("hide");
        } else {
            valid.dataset.content = "Invalid Password";
            scale.style.setProperty("--color", "tomato");
            times.classList.remove("hide");
        }
        scale.style.setProperty("--scale", "scaleX(1)");
        scale.style.setProperty("--opacity", 1);
    };
    open = !open;
});
eye.addEventListener("click", () => {
    const pass = document.getElementById("password");
    const closeEye = document.getElementById("closeEye");
    const openEye = document.getElementById("openEye");
    closeEye.classList.toggle('hide')
    openEye.classList.toggle('hide')

    if (token) {
        pass.setAttribute("type", "password");
    } else {
        pass.setAttribute("type", "text");

    }
    token = !token;
})