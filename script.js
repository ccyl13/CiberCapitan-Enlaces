document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  function createShield() {
    const shield = document.createElement("img");
    shield.src = "escudo.png"; // Asegúrate de que escudo.png esté en el mismo directorio
    shield.className = "floating-shield";
    shield.style.left = Math.random() * 100 + "vw";
    shield.style.top = "-100px";
    shield.style.opacity = Math.random() * 0.2 + 0.05;
    shield.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.6 + 0.4})`;
    shield.style.animationDuration = `${Math.random() * 10 + 10}s`;
    body.appendChild(shield);

    shield.addEventListener("animationend", () => {
      shield.remove();
      createShield(); // Crear uno nuevo tras finalizar
    });
  }

  for (let i = 0; i < 15; i++) {
    createShield();
  }
});
