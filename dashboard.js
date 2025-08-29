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

// Simulate mining status updates
setInterval(() => {
  const hashRateElement = document.querySelector(".stat-value:nth-child(2)");
  const currentHashRate = parseFloat(hashRateElement.textContent);
  const randomChange = (Math.random() * 10 - 5) / 100; // -5% to +5%
  const newHashRate = currentHashRate * (1 + randomChange);
  hashRateElement.textContent = newHashRate.toFixed(1) + " MH/s";
}, 10000);
