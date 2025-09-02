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

// Signup
const signupForm = document.getElementById("signupForm");
const messageElement = document.getElementById("message");

signupForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  // Simple validation
  if (!username || !password) {
    showMessage("Please fill in all fields.", "error", messageElement);
    return;
  }

  // Password length validation
  if (password.length < 6) {
    showMessage(
      "Password must be at least 6 characters.",
      "error",
      messageElement
    );
    return;
  }

  try {
    const res = await fetch("https://backendroutes-lcpt.onrender.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: username, password, email }),
    });

    const data = await res.json();

    if (res.ok) {
      showMessage(data.message, "success", messageElement);
      signupForm.reset();
    } else {
      showMessage(data.error, "error", messageElement);
    }
  } catch (err) {
    showMessage("Something went wrong", "error", messageElement);
  }
});

// Helper function to show messages
function showMessage(text, type, element) {
  element.textContent = text;
  element.className = type;
}
