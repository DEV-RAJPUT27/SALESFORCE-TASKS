document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("responseMessage").innerText = "Thanks for reaching out! I'll get back to you soon.";
});
