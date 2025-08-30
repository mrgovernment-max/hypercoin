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

function updatePremiumStatusUI(data) {
  const premiumStatus = document.getElementById("premium-status");
  if (premiumStatus) {
    if (data && data.efficiency && data.hashRate) {
      premiumStatus.textContent = "Premium User";
      premiumStatus.style.color = "#10b981"; // Green for premium
      premiumStatus.innerHTML = '<i class="fas fa-crown"></i> Premium User';
    } else {
      premiumStatus.textContent = "Free User";
      premiumStatus.style.color = "#6b7280"; // Gray for free
      premiumStatus.innerHTML = '<i class="fas fa-user"></i> Free User';
    }
  }
}

function redirectToLogin() {
  // Implement your login redirect logic here
  window.location.href = "login.html";
}

// Call it once immediately
fetchServerData();

///// add to investments
let numberofinv = 0;
let prev = 0;
let highest = localStorage.getItem("highest");
highest = highest ? Number(highest) : 0;

function addtoinv() {
  const balancesig = document.getElementById("balancesig");
  const dailyhigh = document.getElementById("dailyhigh");
  const investmentChange = document.getElementById("investment-change");

  prev = numberofinv;

  let numberofinvestment;

  if (serverData && serverData.efficiency) {
    // Premium users get the server data (good values)
    numberofinvestment = parseFloat(serverData.efficiency);
  } else {
    // Non-premium users get low/negative random values
    numberofinvestment = Math.random() * 5 - 2.5; // Range: -2.5 to +2.5
  }

  numberofinv = numberofinvestment;

  if (numberofinv > highest) highest = numberofinv;

  balancesig.textContent = numberofinv.toFixed(2) + "% ";
  dailyhigh.textContent = highest.toFixed(2) + "% ";

  // Update change indicator
  const change = numberofinv - prev;
  if (investmentChange) {
    investmentChange.textContent =
      (change >= 0 ? "+" : "") + change.toFixed(2) + "%";
    investmentChange.style.color =
      change > 0 ? "green" : change < 0 ? "red" : "gray";
  }

  balancesig.style.color =
    numberofinv > prev ? "green" : numberofinv < prev ? "red" : "gray";

  localStorage.setItem("highest", highest);
}

///// add to hash rates
let numberofhash = 0;
let prevhash = 0;
let highesthash = localStorage.getItem("highesthash");
highesthash = highesthash ? Number(highesthash) : 0;

function addtohash() {
  const hashsig = document.getElementById("hashsig");
  const dailyhighhash = document.getElementById("dailyhighhash");
  const hashChange = document.getElementById("hash-change");

  prevhash = numberofhash;

  let numberofinvhash;

  if (serverData && serverData.hashRate) {
    // Premium users get the server data (good values)
    numberofinvhash = parseFloat(serverData.hashRate);
  } else {
    // Non-premium users get low/negative random values
    numberofinvhash = Math.random() * 300 - 100; // Range: -100 to +200
  }

  numberofhash = numberofinvhash;

  if (numberofhash > highesthash) highesthash = numberofhash;

  hashsig.textContent = numberofhash.toFixed(0) + " H/s";
  dailyhighhash.textContent = highesthash.toFixed(0) + " H/s";

  // Update change indicator
  const change = numberofhash - prevhash;
  if (hashChange) {
    hashChange.textContent = (change >= 0 ? "+" : "") + change.toFixed(0);
    hashChange.style.color = change > 0 ? "green" : change < 0 ? "red" : "gray";
  }

  hashsig.style.color =
    numberofhash > prevhash
      ? "green"
      : numberofhash < prevhash
      ? "red"
      : "gray";

  localStorage.setItem("highesthash", highesthash);
}

// Start updating the values
setInterval(addtoinv, 2000);
setInterval(addtohash, 2000);

// Initial update
addtoinv();
addtohash();
setInterval(addtohash, 1500);
