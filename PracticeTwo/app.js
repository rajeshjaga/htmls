const menu = document.querySelector(".menu");
const bar = document.querySelectorAll(".bar");

menu.addEventListener("click", () => {

    bar.forEach(e => e.classList.toggle("change"));
});


//accordion



const accordion = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");
accordion.forEach(e => {
    e.addEventListener("click", () => {
        var attributes = e.getAttribute("data-data");
        panel.forEach(e => {
            if (attributes === e.classList[1]) {
                e.classList.toggle("display");
            }
        })
    })
})


//tab
// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabContent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tabLinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();





//tab using foreach

const tab = document.querySelectorAll(".tabLinks");
tab.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("active");
        var info = e.getAttribute("data-class");
        const infoDOM = document.querySelector(`.${info}`)
        infoDOM.classList.toggle("play");
    });
});




//nav bar
const navbar = document.querySelector("nav.topNav");
const nav = document.querySelector(".fa")
nav.addEventListener("click", () => {
    console.log("nav")
    if (nav.className === "topNav") {
        navbar.classList.add("responsive");

    } else {
        navbar.classList.remove("responsive");
    }
})