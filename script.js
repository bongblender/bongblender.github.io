let nav = document.getElementById("Nav")
let tab_button = document.getElementById("tab-button")
let tab_close =document.getElementById("tab-close")
let side_nav = document.getElementById("tab-for-mobile")
let lets_talk = document.getElementsByClassName("lets-talk")


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
    // console.log(lets_talk.scrollY);
})

var state = 0
function tabClose() {
    side_nav.classList.add("mo-tab-close");
    side_nav.classList.remove("mo-tab-out");
    tab_button.classList.add("tab-button-strait")
    tab_button.classList.remove("tab-button-rotate")
    state = 0;
}
function tabOpen(params) {
    side_nav.classList.add("mo-tab-out");
    side_nav.classList.remove("mo-tab-close");
    tab_button.classList.add("tab-button-rotate")
    tab_button.classList.remove("tab-button-strait")
    state = 1;
}

// close on clicking on emty space
document.addEventListener("click", function(e){
    console.log(e.target.id);
    if (e.target.id === 'open-close') {
        if (state === 0){
            tabOpen()
        }else if(state === 1){
            tabClose()
        }
    }else{
        tabClose()
    }
});