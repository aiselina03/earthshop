const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const menushow = document.querySelector(".menushow");

bars.addEventListener("click", function () {
    bars.classList.add("d-none")
    menushow.classList.remove("d-none")
    xmark.classList.remove("d-none")
})

xmark.addEventListener("click", function () {
    menushow.classList.add("d-none")
    xmark.classList.add("d-none")
    bars.classList.remove("d-none")
})