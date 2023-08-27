// Light effect for header
const textContainer = document.querySelector('.text-container');
const shadowText = document.getElementById('shadow-text');
const shadow = document.createElement('h1');
shadow.id = 'shadow';
shadow.textContent = shadowText.textContent;

shadowText.parentElement.appendChild(shadow);

const maxDistance = 6;

document.addEventListener('mousemove', (event) => {
  const containerRect = textContainer.getBoundingClientRect();
  const offsetX = (containerRect.left + containerRect.width / 2 - event.clientX) * (maxDistance / containerRect.width);
  const offsetY = (containerRect.top + containerRect.height / 2 - event.clientY) * (maxDistance / containerRect.height);

  const clampedOffsetX = Math.max(-maxDistance, Math.min(maxDistance, offsetX));
  const clampedOffsetY = Math.max(-maxDistance, Math.min(maxDistance, offsetY));

  shadow.style.transform = `translate(${clampedOffsetX}px, ${clampedOffsetY}px)`;
});




// Hamburger
hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  navLinks.classList.toggle("active");
});


// Aside / Nyhetsbrev
function toggleForm() {
  const newsletterForm = document.querySelector("form");
  newsletterForm.classList.toggle("show");
}











