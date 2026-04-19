const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// =================
// Tema
// =================
function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  rootHtml.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");

  const icon = toggleTheme.querySelector("i");
  icon.className = currentTheme === "dark" ? "bi bi-moon-stars" : "bi bi-sun";
}

if (toggleTheme) toggleTheme.addEventListener("click", changeTheme);

// =================
// Accordion
// =================
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("active");
  });
});

// =================
// Nav ativo ao clicar
// =================
menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// =================
// Header encolhe ao rolar
// =================
const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive: true });
}

// =================
// Cursor trailer otimizado
// =================
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
    trailer.style.top = currentY + "px";

    requestAnimationFrame(animateTrailer);
  }

  animateTrailer();
}

// =================
// Highlight seção ativa no menu
// =================
const sections = document.querySelectorAll("section[id], main[id]");
const allMenuLinks = document.querySelectorAll(".menu__link");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      allMenuLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${id}`
        );
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));

// =================
// Staggered reveal tecnologias
// =================
document.querySelectorAll(".technologies__item").forEach((item, i) => {
  item.classList.add("reveal");
  item.style.transitionDelay = `${i * 0.08}s`;
});

// =================
// Staggered reveal projetos
// =================
document.querySelectorAll(".project__card").forEach((card, i) => {
  card.classList.add("reveal");
  card.style.transitionDelay = `${i * 0.12}s`;
});
// =================
// Scroll Reveal moderno
// =================

const reveals = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-up"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }

    });
  },
  {
    threshold: 0.15
  }
);

reveals.forEach((el) => observer.observe(el));