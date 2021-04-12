const images = document.querySelectorAll('.img-container img');
const main = document.querySelector(".main-content");
const mainDescription = document.querySelector(".main-content p");
const mainImages = document.querySelector(".main-content img");
images.forEach(image => {
    image.addEventListener("click", () => {
        main.classList.add("open");
        mainImages.src = image.alt;
        mainDescription.innerHTML = image.getAttribute("data-examples");
    })
})
main.addEventListener("click", (e) => {
    if (e.target.classList.contains("main-content")) {
        main.classList.remove("open");
    }
})