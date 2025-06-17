// Añadir escudos flotando de forma suave con animación JS (opcional extra)
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".background");

  for (let i = 0; i < 20; i++) {
    const shield = document.createElement("img");
    shield.src = "escudo.png";
    shield.classList.add("floating-shield");

    // Posiciones aleatorias
    shield.style.left = `${Math.random() * 100}%`;
    shield.style.top = `${Math.random() * 100}%`;
    shield.style.width = `${30 + Math.random() * 50}px`;

    // Animación flotante individual
    shield.style.animationDuration = `${20 + Math.random() * 20}s`;
    container.appendChild(shield);
  }
});
