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

/////addd to investments

let numberofinv = 0;
let prev = 0;

// Retrieve highest from localStorage or start at 0
let highest = localStorage.getItem("highest");
highest = highest ? Number(highest) : 0;

function addtoinv() {
  const balancesig = document.getElementById("balancesig");
  const dailyhigh = document.getElementById("dailyhigh");

  prev = numberofinv; // store old value

  // random decimal
  let numberofinvestment = Math.random() * 32 - 10;
  numberofinv += numberofinvestment - 2; // accumulate value

  // update highest if current value is bigger
  if (numberofinv > highest) highest = numberofinv;

  // update DOM
  balancesig.textContent = numberofinv.toFixed(2) + "% ";
  dailyhigh.textContent = highest.toFixed(2) + "% ";

  // color based on up/down
  if (numberofinv > prev) {
    balancesig.style.color = "green"; // higher
  } else if (numberofinv < prev) {
    balancesig.style.color = "red"; // lower
  } else {
    balancesig.style.color = "gray"; // no change
  }

  // store highest in localStorage
  localStorage.setItem("highest", highest);
}

// run every 2 seconds
setInterval(addtoinv, 2000);

/////addd to hash rates

let numberofhash = 0;
let prevhash = 0;

// Retrieve highest from localStorage or start at 0
let highesthash = localStorage.getItem("highesthash");
highesthash = highesthash ? Number(highesthash) : 0;

function addtohash() {
  const hashsig = document.getElementById("hashsig");
  const dailyhighhash = document.getElementById("dailyhighhash");

  prevhash = numberofhash; // store old value

  // random decimal
  let numberofinvhash = Math.random() * 29 - 6;
  numberofhash += numberofinvhash - 2; // accumulate value

  // update highesthash if current value is bigger
  if (numberofhash > highesthash) highesthash = numberofhash;

  // update DOM
  hashsig.textContent = numberofinvhash.toFixed(2) + "% ";
  dailyhighhash.textContent = highesthash.toFixed(2) + "% ";

  // color based on up/down
  if (numberofinv > prev) {
    hashsig.style.color = "green"; // higher
  } else if (numberofinv < prev) {
    hashsig.style.color = "red"; // lower
  } else {
    hashsig.style.color = "green"; // no change
  }

  // store highesthash in localStorage
  localStorage.setItem("highesthash", highesthash);
}

setInterval(addtohash, 1500);

// Run authentication once DOM is loaded
document.addEventListener("DOMContentLoaded", dashboardAuth);
