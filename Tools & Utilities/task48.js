const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;
const img = document.getElementById("themeImage");

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    toggleBtn.textContent = "Switch to Light Mode";
    img.src = "dark mode.png";
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    toggleBtn.textContent = "Switch to Dark Mode";
    img.src = "light mode.png";
  }
});
