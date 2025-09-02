// Inicializar animaciones AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Botón menú móvil
document.getElementById('menu-button').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
  feather.replace();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Cerrar menú móvil si está abierto
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});

// Reemplazar iconos feather
feather.replace();
