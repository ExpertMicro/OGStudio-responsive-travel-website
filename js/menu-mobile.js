const btn = document.querySelector(".btn--menu"),
    btnIcon = document.querySelector(".menu-icon"),
    nav = document.querySelector(".navigation__list"),
    navItems = document.querySelectorAll(".navigation__list__item"),
    backdrop = document.querySelector(".backdrop");
function toggleMenu() {
    nav.classList.toggle("navigation__list--hidden"),
    backdrop.classList.toggle("backdrop--hidden"),
    document.body.classList.toggle("disable-scroll"),
    nav.classList.contains("navigation__list--hidden") ? ((btnIcon.src = "/icon-hamburger.1ccc51ff.svg"), btn.setAttribute("aria-expanded", "false")) : ((btnIcon.src = "/icon-close.c7c2480f.svg"), btn.setAttribute("aria-expanded", "true")),
      navItems.forEach((e, t) => {
        e.style.animation ? (e.style.animation = "") : (e.style.animation = `fadeInLeftNav .4s ease backwards ${t / 7 + 0.2}s`);
      });
}
btn.addEventListener("click", toggleMenu), backdrop.addEventListener("click", toggleMenu);