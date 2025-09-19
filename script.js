// Inicializar animaciones AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});
document.getElementById("contactForm").addEventListener("submit", function(e){
  const consent = document.getElementById("consent");
  if (!consent.checked) {
    e.preventDefault();
    alert("Debes aceptar el Aviso de Privacidad para enviar el formulario.");
  }
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

// ==============================
// Manejo seguro de formulario (Formsubmit)
// ==============================
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  // Validación básica
  if (!name || !email || !message) {
    formMessage.textContent = "⚠️ Por favor completa todos los campos.";
    formMessage.className = "text-red-500 text-sm mt-4";
    return;
  }

  // Validar email con expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = "⚠️ Ingresa un correo válido.";
    formMessage.className = "text-red-500 text-sm mt-4";
    return;
  }

  // Enviar datos a Formsubmit
  try {
    const response = await fetch(e.target.action, {
      method: "POST",
      body: new FormData(e.target),
    });

    if (response.ok) {
      // Redirigir a página de gracias
      window.location.href = "gracias.html";
    } else {
      formMessage.textContent = "❌ Hubo un problema al enviar. Intenta de nuevo.";
      formMessage.className = "text-red-500 text-sm mt-4";
    }
  } catch (error) {
    formMessage.textContent = "❌ Error de conexión. Revisa tu internet.";
    formMessage.className = "text-red-500 text-sm mt-4";
  }
});
