// === script.js (Interactive Hamburger Menu) ===

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// Optional: Close menu when clicking outside (mobile UX improvement)
document.addEventListener("click", function (e) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isClickInside = icon?.contains(e.target) || menu?.contains(e.target);

  if (!isClickInside && menu?.classList.contains("open")) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

