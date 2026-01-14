// Qantas Virtual – Main JavaScript

console.log("Qantas Virtual website loaded");

// Hover animation for event cards
document.addEventListener("DOMContentLoaded", () => {
  const events = document.querySelectorAll(".event");

  events.forEach(event => {
    event.addEventListener("mouseenter", () => {
      event.style.backgroundColor = "#f4f4f4";
      event.style.transition = "0.3s";
    });

    event.addEventListener("mouseleave", () => {
      event.style.backgroundColor = "transparent";
    });
  });
});
