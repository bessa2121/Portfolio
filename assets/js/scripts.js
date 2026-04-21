/* ============================================================
   scripts.js — Portfólio Davi Tavares
   ============================================================ */

/* ── Cursor glow ─────────────────────────────────────────── */
(function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;
  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let cx = mx, cy = my;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animGlow() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    requestAnimationFrame(animGlow);
  }
  animGlow();
})();

/* ── Animated canvas background ─────────────────────────── */
(function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = [
    'rgba(88,166,255,',
    'rgba(163,113,247,',
    'rgba(88,166,255,',
    'rgba(163,113,247,',
    'rgba(97,218,251,',
  ];

  const particles = Array.from({ length: 65 }, () => ({
    x:     Math.random() * 1920,
    y:     Math.random() * 1080,
    r:     Math.random() * 1.4 + 0.3,
    vx:    (Math.random() - 0.5) * 0.12,
    vy:    (Math.random() - 0.5) * 0.12,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha: Math.random() * 0.35 + 0.08,
  }));

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections first
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130) {
          const op = 0.045 * (1 - dist / 130);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(88,166,255,${op})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
    });

    requestAnimationFrame(drawFrame);
  }
  drawFrame();
})();

/* ── Header scroll effect ─────────────────────────────────── */
(function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
})();

/* ── Reveal on scroll ────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 75);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ── Active nav on scroll ────────────────────────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('main[id], section[id]');
  const navLinks = document.querySelectorAll('[data-nav]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => {
          l.classList.toggle('active', l.dataset.nav === id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
})();

/* ── Accordion ────────────────────────────────────────────── */
function toggleAccordion(btn) {
  const item   = btn.closest('.accordion-item');
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
  // Open clicked (unless it was already open)
  if (!isOpen) item.classList.add('open');
}

/* ── Typed text effect (hero subtitle) ─────────────────────── */
(function initTyped() {
  const el = document.getElementById('hero-typed');
  if (!el) return;
  const texts = [
    '// Back-end Developer',
    '// Java & Spring Boot',
    '// Microsserviços & REST',
    '// São Paulo, SP',
  ];
  let ti = 0, ci = 0, deleting = false;
  const speed = { type: 60, delete: 35, pause: 1800 };

  function tick() {
    const current = texts[ti];
    if (!deleting) {
      el.textContent = current.slice(0, ++ci);
      if (ci === current.length) {
        deleting = true;
        setTimeout(tick, speed.pause);
        return;
      }
    } else {
      el.textContent = current.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        ti = (ti + 1) % texts.length;
      }
    }
    setTimeout(tick, deleting ? speed.delete : speed.type);
  }
  tick();
})();
