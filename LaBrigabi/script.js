// ===== Interseção: anima fade-in dos cards de produto
document.addEventListener('DOMContentLoaded', () => {
  const produtos = document.querySelectorAll('.produto-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  produtos.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
});

// ===== Smooth scroll para links âncora (header e footer)
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (target){
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// ===== Zoom leve ao clicar na foto
document.addEventListener('click', (e) => {
  const foto = e.target.closest('.produto-foto');
  if (!foto) return;
  const zoomContainer = foto.closest('.produto-zoom');
  document.querySelectorAll('.produto-zoom.zoom').forEach(el => {
    if (el !== zoomContainer) el.classList.remove('zoom');
  });
  zoomContainer.classList.toggle('zoom');
});

// ===== Filtro de categorias
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.produto-item');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter; // all, morango, doces, ovos, bolos
      items.forEach(card => {
        const cat = card.dataset.cat;
        const show = (filter === 'all') || (filter === cat);
        card.style.display = show ? '' : 'none';
      });
    });
  });
});

// ===== Sidebar responsiva
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('.sidebar-toggle');
  const closeBtn = document.querySelector('.sidebar-close');
  const overlay = document.querySelector('.sidebar-overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (toggle) toggle.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) closeSidebar();
  });
});

// ===== Validação simples do formulário (feedback)
document.addEventListener('submit', (e) => {
  const form = e.target.closest('.order-form');
  if (!form) return;

  const nome = form.querySelector('#nome');
  const email = form.querySelector('#email');

  if (!nome.value.trim() || !email.validity.valid){
    e.preventDefault();
    alert('Por favor, preencha seu nome e um e-mail válido. 😊');
  }
});
