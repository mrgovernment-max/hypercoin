// Server data variable
let serverData = null;

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

// Function to fetch server data
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
  const userStatus = document.getElementById("user-status");
  if (userStatus) {
    if (data && data.efficiency && data.hashRate) {
      userStatus.textContent = "Premium";
      userStatus.className = "user-status status-premium";
    } else {
      userStatus.textContent = "Free";
      userStatus.className = "user-status status-free";
    }
  }
}

function redirectToLogin() {
  // Implement your login redirect logic here
  window.location.href = "login.html";
}

// Call it once immediately
fetchServerData();

// Mining efficiency display
document.addEventListener("DOMContentLoaded", () => {
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
