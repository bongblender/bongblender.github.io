let nav = document.getElementById("Nav")
let tab_button = document.getElementById("tab-button")
let tab_close =document.getElementById("tab-close")
let side_nav = document.getElementById("tab-for-mobile")


window.addEventListener("scroll", () => {
    var y = window.scrollY
    if (y > 80) {
        nav.classList.add("nav-min")
        nav.classList.remove("nav-max")
    }
    else {
        nav.classList.add("nav-max")
        nav.classList.remove("nav-min")
    }
    console.log(y);
})

var state = 0
tab_button.addEventListener("click", () => {
    if (state === 0) {
        side_nav.classList.add("mo-tab-out");
        side_nav.classList.remove("mo-tab-close");
        state = 1;
    }else if (state === 1) {
        side_nav.classList.add("mo-tab-close");
        side_nav.classList.remove("mo-tab-out");
        state = 0;
    } else {
        log("error");
    }
    
})
tab_close.addEventListener("click", () => {
    side_nav.classList.add("mo-tab-close");
    side_nav.classList.remove("mo-tab-out");
    state = 0;
})