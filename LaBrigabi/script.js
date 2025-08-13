// Anima fade-in nos produtos toda vez que entram na tela ao rolar
document.addEventListener('DOMContentLoaded', () => {
    const produtos = document.querySelectorAll('.produto-item');

    // Define o estado inicial
    produtos.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s, transform 0.7s';
    });

    // Cria o observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, i * 80);
            } else {
                // Reseta o estado quando sai da tela
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(30px)';
            }
        });
    }, { threshold: 0.15 });

    // Efeito de zoom ao clicar na foto do produto
    document.querySelectorAll('.produto-foto').forEach(foto => {
        foto.addEventListener('click', function (e) {
            const zoomContainer = this.closest('.produto-zoom');
            // Remove o zoom de qualquer outro
            document.querySelectorAll('.produto-zoom.zoom').forEach(el => {
                if (el !== zoomContainer) el.classList.remove('zoom');
            });
            // Alterna o zoom no contêiner
            zoomContainer.classList.toggle('zoom');
        });
    });

    produtos.forEach(el => observer.observe(el));

    // Rolagem suave para navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Sidebar responsiva
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.sidebar-toggle');
    const closeBtn = document.querySelector('.sidebar-close');
    const overlay = document.querySelector('.sidebar-overlay');

    function openSidebar() {
        sidebar.classList.add('open');
        if (overlay) overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
        sidebar.classList.remove('open');
        if (overlay) overlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    if (toggle) toggle.addEventListener('click', openSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Fecha sidebar ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 900) closeSidebar();
    });
});