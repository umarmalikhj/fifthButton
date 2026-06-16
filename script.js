const hamBurger = document.getElementById("hamBurger");
const actionLinks = document.querySelector(".actionLinks");

hamBurger.addEventListener("click", () => {
    actionLinks.classList.toggle("show");
})