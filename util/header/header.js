const header = document.getElementById("mainHeader");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll < lastScroll) {
        header.classList.add("show");
    } else {
        header.classList.remove("show");
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener("mousemove", (e) => {
    if (e.clientY < 50) {
        header.classList.add("show");
    }
});