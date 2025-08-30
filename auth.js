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
  const usernameDisplayy = document.getElementById("usernamee");
  const userAvatarr = document.getElementById("user-avatarr");

  //display name
  usernameDisplayy
    ? (usernameDisplayy.textContent = data.username)
    : (usernameDisplayy.textContent = "Guest");

  //display avatar
  userAvatarr.textContent = data.username.slice(0, 2);

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
//// Assume somewhere at login / fetch you stored server values in localStorage or a global var
// Example: server sends { investments: 15.3, hash: 7.8 }
let serverData = null;

async function fetchServerData() {
  const token = sessionStorage.getItem("accessToken");
  console.log("Token:", token);

  // Check if the token exists
  if (!token) {
    console.log("No access token found. Redirecting to login.");
    redirectToLogin();
    return;
  }

  try {
    const res = await fetch(
      "https://backendroutes-lcpt.onrender.com/getUserStats",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Check for 401 status specifically
    if (res.status === 401) {
      console.log("Unauthorized request. Redirecting to login.");
      redirectToLogin();
      return;
    }

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    serverData = await res.json();
    console.log("Server data:", serverData);

    // Update UI to show premium status
    updatePremiumStatusUI(serverData);
  } catch (err) {
    console.log(
      "Error fetching server data, fallback to random low numbers",
      err
    );
    serverData = null;
  }
}

function redirectToLogin() {
  // Implement your login redirect logic here
  window.location.href = "login.html";
}
