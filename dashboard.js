// Get elements for dashboard

async function dashboardAuth() {
  let token = sessionStorage.getItem("accessToken");
  if (!token);

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
  const profile_user = document.getElementById("profile-user");
  profile_user.textContent = data.username;

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

dashboardAuth();

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
    return redirectToLogin();
  }
}

// Hamburger menu functionality
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

function hideonClick() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

// Theme toggle functionality
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

// Server data variable
let serverData = null;

// Function to fetch server data
async function fetchServerData() {
  const token = sessionStorage.getItem("accessToken");

  // Check if the token exists
  if (!token) {
    console.log("No access token found. Redirecting to login.");
    dashboardAuth();
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
      dashboardAuth();
      return;
    }

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    serverData = await res.json();

    // Update UI to show premium status
    updatePremiumStatusUI(serverData);
  } catch (err) {
    serverData = null;
  }
}

// Call it once immediately
fetchServerData();

function updatePremiumStatusUI(data) {
  console.log(data);
  const userStatus = document.getElementById("user-status");
  const configure = document.getElementById("configure-plan");
  const profile_usertype = document.getElementById("profile-usertype");
  if (userStatus) {
    if (data && data.efficiency && data.hashRate)
      switch (data.usertype) {
        case "Professional":
          userStatus.textContent = data.usertype;
          userStatus.className = "user-status status-premium";
          configure.textContent = "Change Plan";
          profile_usertype.textContent = data.usertype;
          break;

        case "free":
          userStatus.textContent = data.usertype;
          userStatus.className = "user-status status-free";
          configure.textContent = "configure";
          profile_usertype.textContent = data.usertype;
          break;
        default:
          userStatus.textContent = data.usertype;
          userStatus.className = "user-status status-free";
          configure.textContent = "configure";
          profile_usertype.textContent = data.usertype;
      }

    {
    }
  }
}

function redirectToLogin() {
  // Implement your login redirect logic here
  window.location.href = "login.html";
}

// Mining efficiency display
document.addEventListener("DOMContentLoaded", () => {
  dashboardAuth();
  const hyper_efficiency = document.getElementById("mining-info");
  const bar = document.getElementById("progress-bar");

  function updateHyperEfficiency() {
    let randomNumber = (Math.random() * 99 + 1).toFixed(2);

    bar.style.width = randomNumber + "%";
    hyper_efficiency.innerHTML = randomNumber + "%";

    if (!updateHyperEfficiency.prev) updateHyperEfficiency.prev = randomNumber;
    if (randomNumber > updateHyperEfficiency.prev) {
      hyper_efficiency.style.color = "green";
    } else if (randomNumber < updateHyperEfficiency.prev) {
      hyper_efficiency.style.color = "red";
    }
    updateHyperEfficiency.prev = randomNumber;
  }

  updateHyperEfficiency();
  setInterval(updateHyperEfficiency, 5000);
});

// Investment and hash rate updates
let numberofinv = 0;
let prev = 0;
let highest = localStorage.getItem("highest");
highest = highest ? Number(highest) : 0;

function addtoinv() {
  const balancesig = document.getElementById("balancesig");
  const balanceChange = document.getElementById("balance-change");
  const balanceValue = document.getElementById("balance-value");
  const dailyhigh = document.getElementById("dailyhigh");

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

  balanceValue.textContent = (4.75 + numberofinv / 100).toFixed(2) + " HPC";
  dailyhigh.textContent = highest.toFixed(2) + "%";

  // Update change indicator
  const change = numberofinv - prev;
  if (balanceChange) {
    balanceChange.textContent =
      (change >= 0 ? "+" : "") + change.toFixed(2) + "%";
    balanceChange.style.color =
      change > 0 ? "green" : change < 0 ? "red" : "gray";
  }

  balancesig.style.color =
    numberofinv > prev ? "green" : numberofinv < prev ? "red" : "gray";

  localStorage.setItem("highest", highest);
}

// Hash rate updates
let numberofhash = 0;
let prevhash = 0;
let highesthash = localStorage.getItem("highesthash");
highesthash = highesthash ? Number(highesthash) : 0;

function addtohash() {
  const hashsig = document.getElementById("hashsig");
  const hashChange = document.getElementById("hash-change");
  const hashValue = document.getElementById("hash-value");
  const dailyhighhash = document.getElementById("dailyhighhash");

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

  hashValue.textContent = (245 + numberofhash).toFixed(0) + " MH/s";
  dailyhighhash.textContent = highesthash.toFixed(0);

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

const avatar_controls = document.getElementById("avatar-controls");
const user_avatar = document.getElementById("user-avatar-img");

// On page load, set avatar from localStorage if exists
const savedAvatar = localStorage.getItem("avatar");
if (savedAvatar) {
  user_avatar.src = savedAvatar;
}

// When user selects a new avatar
avatar_controls.addEventListener("change", function () {
  dashboardAuth();
  const avatarimg = this.value; // selected avatar URL
  user_avatar.src = avatarimg; // update image
  localStorage.setItem("avatar", avatarimg); // save to localStorage
  console.log("Selected avatar URL:", avatarimg);
});
