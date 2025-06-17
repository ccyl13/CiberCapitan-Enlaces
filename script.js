// script.js

// Animación para los escudos que flotan de manera aleatoria
document.addEventListener("DOMContentLoaded", () => {
  const shields = document.querySelectorAll(".shield");

  shields.forEach(shield => {
    animateShield(shield);
  });

  function animateShield(shield) {
    const duration = Math.random() * 5 + 5; // entre 5 y 10 segundos
    const delay = Math.random() * 5;
    const startX = Math.random() * 100;
    const endX = Math.random() * 100;
    const startY = Math.random() * 100;
    const endY = Math.random() * 100;

    shield.animate([
      { transform: `translate(${startX}vw, ${startY}vh)`, opacity: 0.4 },
      { transform: `translate(${endX}vw, ${endY}vh)`, opacity: 0.7 },
      { transform: `translate(${startX}vw, ${startY}vh)`, opacity: 0.4 }
    ], {
      duration: duration * 1000,
      iterations: Infinity,
      delay: delay * 1000
    });
  }
});

// Efecto suave al cargar la página
window.onload = () => {
  document.querySelector(".main-content").classList.add("visible");
};
