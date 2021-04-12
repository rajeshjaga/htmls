const counterValue = document.querySelector(".counter");



function increase() {
    counterValue.innerHTML++;
    if (counterValue.innerHTML < 0) {
        counterValue.style.color = "red";
    } else if (counterValue.innerHTML > 0) {
        counterValue.style.color = "green";

    } else {
        counterValue.style.color = '#1c1c1c';
    }

};

function decrease() {
    counterValue.innerHTML--;
    if (counterValue.innerHTML < 0) {
        counterValue.style.color = "red";
    } else if (counterValue.innerHTML > 0) {
        counterValue.style.color = "green";

    } else {
        counterValue.style.color = '#1c1c1c';
    }


}

function reset() {
    counterValue.innerHTML = 0;
    if (counterValue.innerHTML < 0) {
        counterValue.style.color = "red";
    } else if (counterValue.innerHTML > 0) {
        counterValue.style.color = "green";

    } else {
        counterValue.style.color = '#1c1c1c';
    }

}