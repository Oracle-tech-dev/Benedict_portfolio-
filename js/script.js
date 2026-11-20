/* =================================
   1. MOBILE NAVIGATION
================================= */

// Select the menu button
const menuToggle = document.getElementById("menu-toggle");

// Select the navigation menu
const navMenu = document.getElementById("nav-menu");

// Listen for clicks on the menu button
menuToggle.addEventListener("click", function () {
  // Toggle the active class
  navMenu.classList.toggle("active");

  // Check whether the menu is open
  const isOpen = navMenu.classList.contains("active");

  // Update accessibility information
  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );

  // Change the menu icon
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a link
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Open navigation menu");

    menuToggle.textContent = "☰";
  });
});

/* =================================
   2. TYPING ANIMATION
================================= */

const typingText = document.getElementById("typing-text");

const words = ["Software Developer", "Problem Solver", "Technology Enthusiast"];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (deleting) {
    characterIndex--;
  } else {
    characterIndex++;
  }

  typingText.textContent = currentWord.substring(0, characterIndex);

  let delay = deleting ? 60 : 100;

  if (!deleting && characterIndex === currentWord.length) {
    deleting = true;
    delay = 1500;
  } else if (deleting && characterIndex === 0) {
    deleting = false;

    wordIndex = (wordIndex + 1) % words.length;

    delay = 400;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();

/* =================================
   3. DYNAMIC FOOTER YEAR
================================= */

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();
