// Theme toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    }
  });
}
// Login form
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const messageEl = document.getElementById("loginMessage");

      try {
        const res = await fetch(
          "https://backendroutes-lcpt.onrender.com/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: username, password }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          // Show the error returned by the server
          messageEl.textContent = data.error || "Login failed.";
          messageEl.className = "error";
          return;
        }

        // Store tokens in sessionStorage
        sessionStorage.setItem("accessToken", data.accessToken);
        sessionStorage.setItem("refreshToken", data.refreshToken);

        messageEl.textContent = "Login successful! Redirecting...";
        messageEl.className = "success";

        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1000);
      } catch (err) {
        messageEl.textContent = "Login failed. Check username/password.";
        messageEl.className = "error";
        console.error(err);
      }
    });
  }
});

// Helper function to show messages
function showMessage(text, type, element) {
  element.textContent = text;
  element.className = type;
}
