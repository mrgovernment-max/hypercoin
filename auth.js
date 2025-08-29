// Get elements for dashboard

async function dashboardAuth() {
  let token = sessionStorage.getItem("accessToken");
  if (!token) return redirectToLogin();

  let res = await fetchDashboard(token);

  if (res.status === 401) {
    // Try refresh token
    const refreshed = await requestToken();
    if (!refreshed) return redirectToLogin();

    token = sessionStorage.getItem("accessToken");
    res = await fetchDashboard(token);
  }

  if (!res.ok) return redirectToLogin();

  const data = await res.json();
  console.log("Dashboard data:", data);
  const usernameDisplay = document.getElementById("username");
  const userAvatar = document.getElementById("user-avatar");

  //display name
  usernameDisplay
    ? (usernameDisplay.textContent = data.username)
    : (usernameDisplay.textContent = "Guest");

  //display avatar
  userAvatar.textContent = data.username.slice(0, 2);
}

async function fetchDashboard(token) {
  try {
    return await fetch("https://backendroutes-lcpt.onrender.com/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.error("Error fetching dashboard:", err);
  }
}

async function requestToken() {
  const refreshToken = sessionStorage.getItem("refreshToken");
  if (!refreshToken) return false;

  try {
    const res = await fetch("https://backendroutes-lcpt.onrender.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: refreshToken }),
    });
    if (!res.ok) return false;

    const data = await res.json();
    sessionStorage.setItem("accessToken", data.accessToken);
    console.log("Access token refreshed");
    return true;
  } catch (err) {
    console.error("Token refresh failed:", err);
    return false;
  }
}

function redirectToLogin() {
  sessionStorage.clear();
  window.location.href = "login.html";
}

// Run authentication once DOM is loaded
document.addEventListener("DOMContentLoaded", dashboardAuth);
