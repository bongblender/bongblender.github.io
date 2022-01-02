
var button = document.getElementById("ham-button");


// side-nav manu control...
var state = 1;
button.addEventListener("click", function () {
    if (state === 1) {
        document.querySelector(".side-nav").style.display = "flex";
        state = state - 1;
    }else if (state === 0) {
        document.querySelector(".side-nav").style.display = "none";
        state = state + 1;
    }
})