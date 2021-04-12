//hello
const userInput = document.querySelector(".username-input");
const passInput = document.querySelector(".password-input");
const passPlaceHolder = document.querySelector(".passHolder");
const userPlaceHolder = document.querySelector(".userHolder");
const check = document.querySelector("#check");
const checkBox = document.querySelector('.check');


//some functions

userInput.addEventListener("focus", () => {
    userPlaceHolder.classList.add("placeholder-Style");
})
userPlaceHolder.addEventListener("blur", () => {
    userPlaceHolder.classList.add("placeholder");

});
passInput.addEventListener("focus", () => {
    passPlaceHolder.classList.add("placeholder-Style");
})
passPlaceHolder.addEventListener("blur", () => {
    passPlaceHolder.classList.add("placeholder");

});

function focussing() {
    if (userInput.focus == true) {
        console.log(true)
    }
};

function checking() {
    if (check.checked == true) { check.checked = false; return true; } else { check.checked = true; return false };
}
checkBox.addEventListener('click', () => {
    checking();
});

function checking() {
    if (check.checked == true) { check.checked = false; return true; } else { check.checked = true; return false };
}
check.addEventListener('click', () => {
    checking();
});