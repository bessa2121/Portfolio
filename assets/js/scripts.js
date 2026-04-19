const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// Tema
function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  rootHtml.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  const icon = toggleTheme.querySelector("i");
  icon.className = currentTheme === "dark" ? "bi bi-moon-stars" : "bi bi-sun";
}
if (toggleTheme) toggleTheme.addEventListener("click", changeTheme);

// Accordion
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("active");
  });
});

// Nav ativo
menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Header encolhe ao rolar
const header = document.querySelector(".header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive: true });
}

// Cursor trailer — rápido e preciso com requestAnimationFrame
if (window.innerWidth > 768) {
  const trailer = document.createElement("div");
  trailer.className = "cursor-trailer";
  document.body.appendChild(trailer);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  const speed = 0.18;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function animateTrailer() {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;
    trailer.style.left = currentX + "px";
    trailer.style.top  = currentY + "px";
    requestAnimationFrame(animateTrailer);
  }

  animateTrailer();
}