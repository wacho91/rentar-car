const menuBtn = document.querySelector("menu-btn");
const navLinks = document.querySelector("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2500,
});