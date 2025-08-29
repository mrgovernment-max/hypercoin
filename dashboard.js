// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");

// Check for saved theme preference
const currentTheme = localStorage.getItem("theme");

// Apply the theme if previously set
if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀️";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  if (!document.documentElement.getAttribute("data-theme")) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  function hyperEfficiency() {
    const hyper_efficiency = document.getElementById("mining-info");
    let randomNumber = (Math.random() * 99 + 1).toFixed(2);

    hyper_efficiency.innerHTML = randomNumber + "%";

    if (!hyperEfficiency.prev) hyperEfficiency.prev = randomNumber;
    if (randomNumber > hyperEfficiency.prev) {
      hyper_efficiency.style.color = "green";
    } else if (randomNumber < hyperEfficiency.prev) {
      hyper_efficiency.style.color = "red";
    }
    hyperEfficiency.prev = randomNumber;
  }

  setInterval(hyperEfficiency, 2000);
});
