function ToggleNavvbar() {
    document.querySelector(".main-menu").classList.toggle("show");
}

document.querySelector(".menu-btn").addEventListener("click", ToggleNavvbar);
