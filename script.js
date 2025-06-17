// script.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buttons a");

  buttons.forEach((btn, index) => {
    btn.style.opacity = 0;
    btn.style.transform = "translateY(20px)";
    setTimeout(() => {
      btn.style.transition = "all 0.6s ease";
      btn.style.opacity = 1;
      btn.style.transform = "translateY(0)";
    }, index * 200);
  });
});
