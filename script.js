// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ===== Contact Form Validation =====
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  // If everything is valid
  if (isValid) {
    successMsg.textContent = "Your message has been sent successfully!";
    form.reset();
  }
});
