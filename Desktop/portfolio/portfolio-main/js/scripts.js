"use strict";

/* Menu Toggle */
const menuToggler = document.getElementById("menuToggler");
const menu = document.getElementById("menu");

menuToggler.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuToggler.textContent = menu.classList.contains("open") ? "×" : "≡";
});

/* Typing Effect */
const text = ["Dhrutik Vala.", "a Developer.", "a Problem Solver."];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = text[i];

  document.querySelector(".typing").textContent =
    deleting ? current.substring(0, j--) : current.substring(0, j++);

  if (!deleting && j === current.length) {
    deleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}

if (document.querySelector(".typing")) type();

/* Particles */
if (window.particlesJS) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      size: { value: 3 },
      move: { speed: 2 },
      line_linked: { enable: true }
    }
  });
}

/* Theme Toggle */
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});