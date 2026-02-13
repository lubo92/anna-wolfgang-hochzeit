// Main JavaScript - Moderne Scroll-Effekte

// Smooth Scroll für Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Moderne Scroll Reveal Animationen mit Intersection Observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    } else {
      // Entferne "revealed" wenn Element aus Viewport verschwindet
      // Damit Animation beim Zurückscrollen wieder triggert
      entry.target.classList.remove('revealed');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
});

// Alle Elemente mit Scroll-Reveal Klassen beobachten
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll(
    '.scroll-reveal, .scroll-reveal-fade, .scroll-reveal-scale, .scroll-reveal-left, .scroll-reveal-right, .timeline-item'
  );
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
  
  // Parallax Effekt für Hero Images (subtil)
  const parallaxElements = document.querySelectorAll('.parallax-slow');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(el => {
      const speed = 0.3; // Langsamer, eleganter Effekt
      const yPos = -(scrolled * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  });
});

// Countdown bis zur Hochzeit (optional)
function updateCountdown() {
  const weddingDate = new Date('2026-08-22T15:00:00');
  const now = new Date();
  const diff = weddingDate - now;
  
  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
      countdownEl.innerHTML = `
        <div style="display: flex; gap: 2rem; justify-content: center; font-size: 1.2rem;">
          <div><strong>${days}</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">Tage</span></div>
          <div><strong>${hours}</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">Stunden</span></div>
          <div><strong>${minutes}</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">Minuten</span></div>
        </div>
      `;
    }
  }
}

// Countdown aktualisieren (falls Element existiert)
if (document.getElementById('countdown')) {
  updateCountdown();
  setInterval(updateCountdown, 60000); // Update jede Minute
}

// Mobile Navigation Toggle (falls benötigt)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
