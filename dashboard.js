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

  const userAvatar = document.getElementById("user-avatar");

  const usernameDisplayy = document.getElementById("usernamee");
  const userAvatarr = document.getElementById("user-avatarr");

  //display name
  usernameDisplayy
    ? (usernameDisplayy.textContent = data.username)
    : (usernameDisplayy.textContent = "Guest");

  //display avatar
  userAvatarr.textContent = data.username.slice(0, 2);

  //display avatar
  userAvatar.innerHTML = data.username.slice(0, 2);
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

  return serverData;
}
fetchDashboard();
window.onload = fetchServerData;

function updatePremiumStatusUI(data) {
  dashboardAuth();
  const userStatus = document.getElementById("profile-user");
  const userRole = document.getElementById("user-role");
  const configure = document.getElementById("configure-plan");
  const profile_usertype = document.getElementById("profile-usertype");
  const rec = document.getElementById("rec");
  const miningState = document.getElementById("miningState");
  const mining_status = document.getElementById("mining-status");

  // Mining efficiency bar display

  const hyper_efficiency = document.getElementById("miningeff");
  const miningInfo = document.getElementById("mining-info");
  const bar = document.getElementById("progress-bar");

  let randomNumber = (Math.random() * 99 + 1).toFixed(2);

  bar.style.width = randomNumber + "%";
  hyper_efficiency.innerHTML = randomNumber + "%";

  if (userStatus) {
    if (data && data.efficiency && data.hashRate)
      switch (data.usertype) {
        case "Professional":
          //  premium users bars up or !< 45
          if (randomNumber >= 45) {
            bar.style.width = randomNumber + "%";
            hyper_efficiency.innerHTML = randomNumber + "%";
          } else {
            bar.style.width = 45 + "%";
            hyper_efficiency.innerHTML = 50 + "%";
          }
          miningInfo.innerHTML = ` Your mining rig is active and generating HyperCoin consistently. Current efficiency is running at its peak `;
          userStatus.textContent = data.usertype;
          configure.textContent = "Change Plan";
          profile_usertype.innerHTML = `  ${data.usertype} <i class="fa-solid fa-circle" style="color: #63E6BE;margin-left:6px;"></i>`;
          rec.innerHTML = "";
          miningState.innerHTML = "Mining Enabled";
          mining_status.className = " mining-status status-active";
          userRole.innerHTML = ` <i class="fa-solid fa-circle" style="color: #63E6BE; margin-right:6px;"></i> ${data.usertype} Miner`;
          break;

        case "Free":
          setInterval(fetchServerData, 10000);
          miningInfo.innerHTML = `Mining is inactive upgrade to one of our plans to enable hypercoin rigs for more consistent and effective mining efficiency`;
          userStatus.textContent = data.usertype;
          configure.textContent = "configure";
          profile_usertype.textContent = data.usertype;
          miningState.innerHTML = `Mining Disabled`;
          rec.innerHTML = `<span style='color:#ff9800'> <i class='fa-solid fa-circle' style='color: #FFD43B; margin-right:6px;'></i>  <a style='color: #FFD43B' href='configure.html'>upgrade</a> to one of our plans  <br> to start mining and earning with as little at $4.99 </span>`;
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

// Initialize variables
let currentHashRate = 0;
let prevHashRate = 0;
let highestHashRate = parseFloat(localStorage.getItem("highestHashRate")) || 0;

let currentBalance =
  parseFloat(localStorage.getItem("currentBalance")) ||
  (serverData && serverData.usertype === "Professional" ? 5.0 : 2.0);
let prevBalance = 0;
let highestBalance = parseFloat(localStorage.getItem("highestBalance")) || 0;

function updateMiningStats() {
  // Get DOM elements
  const hashValue = document.getElementById("hash-value");
  const hashChange = document.getElementById("hash-change");
  const dailyHighHash = document.getElementById("dailyhighhash");
  const hashSig = document.getElementById("hashsig");
  const hashArrowIcon = hashSig ? hashSig.querySelector("i") : null;

  const balanceValue = document.getElementById("balance-value");
  const balanceChange = document.getElementById("balance-change");
  const dailyHigh = document.getElementById("dailyhigh");
  const balanceSig = document.getElementById("balancesig");
  const balanceArrowIcon = balanceSig ? balanceSig.querySelector("i") : null;

  // Store previous values
  prevHashRate = currentHashRate;
  prevBalance = currentBalance;

  // Generate new hash rate based on user type
  if (serverData && serverData.usertype === "Professional") {
    currentHashRate = 100 + (Math.random() * 50 - 25); // 75-125 MH/s
  } else {
    currentHashRate = 30 + (Math.random() * 40 - 20); // 10-50 MH/s
  }

  // Update highest hash rate
  if (currentHashRate > highestHashRate) {
    highestHashRate = currentHashRate;
    localStorage.setItem("highestHashRate", highestHashRate);
  }

  // Calculate balance contribution (20 MH/s = £1 per hour)
  const hashContribution = currentHashRate / 20 / 3600;
  const marketFluctuation = 1 + (Math.random() * 0.02 - 0.01);
  currentBalance += hashContribution * marketFluctuation;

  // Keep balances in target ranges
  if (serverData && serverData.usertype === "Professional") {
    if (currentBalance > 6.5) currentBalance -= 0.02;
    if (currentBalance < 3.5) currentBalance += 0.02;
  } else {
    if (currentBalance > 3.0) currentBalance -= 0.01;
    if (currentBalance < 1.0) currentBalance += 0.01;
  }

  // Ensure non-negative and update highest balance
  currentBalance = Math.max(0, currentBalance);
  if (currentBalance > highestBalance) {
    highestBalance = currentBalance;
    localStorage.setItem("highestBalance", highestBalance);
  }

  localStorage.setItem("currentBalance", currentBalance);

  // Update UI elements
  if (hashValue) hashValue.textContent = Math.round(currentHashRate) + " MH/s";
  if (dailyHighHash)
    dailyHighHash.textContent = Math.round(highestHashRate) + " MH/s";
  if (balanceValue) balanceValue.textContent = "£" + currentBalance.toFixed(2);
  if (dailyHigh) dailyHigh.textContent = "£" + highestBalance.toFixed(2);

  // Update change indicators
  const hashChangeValue = currentHashRate - prevHashRate;
  const balanceChangeValue = currentBalance - prevBalance;
  const changePercent =
    prevBalance > 0 ? (balanceChangeValue / prevBalance) * 100 : 0;

  if (hashChange) {
    hashChange.textContent =
      (hashChangeValue >= 0 ? "+" : "") + Math.round(hashChangeValue) + " MH/s";
    hashChange.style.color =
      hashChangeValue > 0 ? "green" : hashChangeValue < 0 ? "red" : "gray";
  }

  if (balanceChange) {
    balanceChange.textContent =
      (balanceChangeValue >= 0 ? "+" : "") + changePercent.toFixed(2) + "%";
    balanceChange.style.color =
      balanceChangeValue > 0
        ? "green"
        : balanceChangeValue < 0
        ? "red"
        : "gray";
  }

  // Update arrows
  if (hashSig && hashArrowIcon) {
    hashArrowIcon.className =
      hashChangeValue > 0
        ? "fas fa-arrow-up"
        : hashChangeValue < 0
        ? "fas fa-arrow-down"
        : "fas fa-minus";
    hashSig.style.color =
      hashChangeValue > 0 ? "green" : hashChangeValue < 0 ? "red" : "gray";
  }

  if (balanceSig && balanceArrowIcon) {
    balanceArrowIcon.className =
      balanceChangeValue > 0
        ? "fas fa-arrow-up"
        : balanceChangeValue < 0
        ? "fas fa-arrow-down"
        : "fas fa-minus";
    balanceSig.style.color =
      balanceChangeValue > 0
        ? "green"
        : balanceChangeValue < 0
        ? "red"
        : "gray";
  }
}

// Update every 2 seconds
setInterval(updateMiningStats, 2000);
updateMiningStats();
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

/// Get the forgot password button
const changeps = document.getElementById("forgot-password");

// Add click event listener
changeps.addEventListener("click", async () => {
  const token = sessionStorage.getItem("accessToken");
  console.log(token);

  if (!token) {
    console.error("No access token found");
    alert("Please log in first");
    return;
  }

  try {
    const res = await fetch(
      "https://backendroutes-lcpt.onrender.com/resetpass",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      const codeSentmsg = data.message;
      console.log(codeSentmsg);
      alert("Password reset code sent to your email");
    } else {
      console.error("Error:", data.error);
      alert("Error: " + data.error);
    }
  } catch (err) {
    console.error("Request failed:", err);
    alert("Failed to send reset code. Please try again.");
  }
});
