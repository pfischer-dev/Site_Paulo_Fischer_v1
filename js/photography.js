const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#main-menu");
const menuIcon = document.querySelector("#menu-icon");
const menuLabel = document.querySelector("#menu-label");

menuToggle.addEventListener("click", () => {
    const menuAberto = menu.classList.toggle("hidden");

    menuToggle.setAttribute("aria-expanded", !menuAberto);

    menuIcon.textContent = menuAberto ? "☰" : "x";
    menuLabel.textContent = menuAberto ? "MENU" : "FECHAR";
});