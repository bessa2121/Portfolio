const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})
// ================= FORMULÁRIO DE CONTATO =================

class FormSubmit {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFormData() {
    const data = {};
    this.form.querySelectorAll("[name]").forEach((field) => {
      data[field.name] = field.value;
    });
    return data;
  }

  async handleSubmit(event) {
    event.preventDefault();

    const button = this.form.querySelector("[data-button]");
    button.disabled = true;
    button.innerText = "Enviando...";

    try {
      const response = await fetch(this.form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormData()),
      });

      if (response.ok) {
        this.form.innerHTML =
          "<h2 class='success'>✅ Mensagem enviada com sucesso!</h2>";
      } else {
        throw new Error();
      }
    } catch (error) {
      this.form.innerHTML =
        "<h2 class='error'>❌ Erro ao enviar. Tente novamente.</h2>";
    }
  }

  init() {
    if (this.form) {
      this.form.addEventListener("submit", this.handleSubmit);
    }
  }
}

new FormSubmit("[data-form]").init();
