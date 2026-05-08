const searchInput = document.getElementById("search");

if (searchInput) {

searchInput.addEventListener("keyup", function() {

let value = searchInput.value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

let text = card.textContent.toLowerCase();

if (text.includes(value)) {
card.style.display = "block";
} else {
card.style.display = "none";
}

});

});

}

function toggleInfo(btn) {

let infoText = btn.nextElementSibling;

if (infoText.style.display === "block") {
infoText.style.display = "none";
} else {
infoText.style.display = "block";
}

}

const form = document.getElementById("appForm");

if (form) {

form.addEventListener("submit", function(e) {

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

let message = document.getElementById("message");

if (name === "" || email === "") {
message.textContent = "Please fill in all fields.";
} else {
message.textContent = "Application sent successfully!";
}

});

}
document.getElementById("appForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const select = document.querySelector("select");
  const residence = select.value;
  const message = document.getElementById("message");

  message.style.color = "";
  message.textContent = "";

  if (name === "") {
    showError("Please enter your full name.");
    document.getElementById("name").focus();
    return;
  }

  if (name.length < 3) {
    showError("Full name must be at least 3 characters.");
    document.getElementById("name").focus();
    return;
  }

  if (!/^[a-zA-Z\s'-]+$/.test(name)) {
    showError("Full name can only contain letters, spaces, hyphens, and apostrophes.");
    document.getElementById("name").focus();
    return;
  }

  if (email === "") {
    showError("Please enter your student email.");
    document.getElementById("email").focus();
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError("Please enter a valid email address.");
    document.getElementById("email").focus();
    return;
  }

  if (residence === "Select Residence") {
    showError("Please select a residence unit.");
    select.focus();
    return;
  }

  showSuccess(
    "Application submitted! Thank you, " + name +
    ". You applied for " + residence +
    ". We'll contact you at " + email + "."
  );

  document.getElementById("appForm").reset();
});

function showError(msg) {
  const message = document.getElementById("message");
  message.textContent = "⚠️ " + msg;
  message.style.color = "#c0392b";
  message.style.fontWeight = "bold";
}

function showSuccess(msg) {
  const message = document.getElementById("message");
  message.textContent = "✅ " + msg;
  message.style.color = "#27ae60";
  message.style.fontWeight = "bold";
}