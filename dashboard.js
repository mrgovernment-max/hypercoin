// Get elements for dashboard
async function dashboardAuth() {
  let token = sessionStorage.getItem("accessToken");
  if (!token) {
    redirectToLogin();
  }

  let res = await fetchDashboard(token);

  if (res.status === 401) {
    // Try refresh token
    await requestToken();

    token = sessionStorage.getItem("accessToken");

    res = await fetchDashboard(token);
  }

  if (!res.ok) return redirectToLogin();

  const data = await res.json();
  const page_title = document.getElementById("page-title");
  const userAvatar = document.getElementById("user-avatar");
  const profileUser = document.getElementById("profile-user");
  const usernameDisplayy = document.getElementById("usernamee");
  const userAvatarr = document.getElementById("user-avatarr");

  if (profileUser) profileUser.textContent = data.username || "Guest";
  if (usernameDisplayy) usernameDisplayy.textContent = data.username || "Guest";
  if (userAvatarr)
    userAvatarr.textContent = data.username ? data.username.slice(0, 2) : "G";
  if (userAvatar)
    userAvatar.innerHTML = data.username ? data.username.slice(0, 2) : "G";
  if (page_title)
    page_title.innerHTML = `${data.username.toUpperCase()}'s Vault `;
}

window.onload = dashboardAuth;

// Call dashboardAuth on load
document.addEventListener("DOMContentLoaded", function () {
  dashboardAuth();

  // Initialize mining stats after a short delay to ensure auth is complete
  setTimeout(initMiningStats, 1000);
});

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
    redirectToLogin();
    return { ok: false }; // Return a mock response object
  }
}

async function requestToken() {
  const refreshToken = sessionStorage.getItem("refreshToken");
  if (!refreshToken) {
    redirectToLogin();
    return false;
  }

  try {
    const res = await fetch("https://backendroutes-lcpt.onrender.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: refreshToken }),
    });
    if (!res.ok) {
      redirectToLogin();
      return false;
    }

    const data = await res.json();
    sessionStorage.setItem("accessToken", data.accessToken);
    return true;
  } catch (err) {
    console.error("Token refresh failed:", err);
    redirectToLogin();
    return false;
  }
}

// Hamburger menu functionality
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if (menuToggle && sidebar && overlay) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
}

function hideonClick() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar && overlay) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
}

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
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
}

// Server data variable
let serverData = null;

// Function to fetch server data
async function fetchServerData() {
  await dashboardAuth();
  const token = sessionStorage.getItem("accessToken");

  // Check if the token exists
  if (!token) {
    redirectToLogin();
    return null;
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
      dashboardAuth();
      return null;
    }

    if (!res.ok) {
      console.error("Failed to fetch user stats:", res.status);
      return null;
    }

    serverData = await res.json();

    // Update UI to show premium status
    updatePremiumStatusUI(serverData);
    return serverData;
  } catch (err) {
    console.error("Error fetching server data:", err);
    serverData = null;
    return null;
  }
}

// Call fetchServerData on window load
window.onload = function () {
  fetchServerData();
};

function updatePremiumStatusUI(data) {
  if (!data) {
    console.error("No data provided to updatePremiumStatusUI");
    return;
  }

  dashboardAuth();

  const userRole = document.getElementById("user-role");
  const configure = document.getElementById("configure-plan");
  const profile_usertype = document.getElementById("profile-usertype");
  const rec = document.getElementById("rec");
  const miningState = document.getElementById("miningState");
  const mining_status = document.getElementById("mining-status");
  const startInv = document.getElementById("start-inv");
  const stoptInv = document.getElementById("stop-inv");

  // Mining efficiency bar display
  const hyper_efficiency = document.getElementById("miningeff");
  const miningInfo = document.getElementById("mining-info");
  const bar = document.getElementById("progress-bar");

  let randomNumber = (Math.random() * 99 + 1).toFixed(2);

  if (bar) bar.style.width = randomNumber + "%";
  if (hyper_efficiency) hyper_efficiency.innerHTML = randomNumber + "%";

  if (data && data.usertype) {
    if (data.usertype !== "Free") {
      // Premium / Professional / any non-free user
      if (randomNumber >= 45) {
        if (bar) bar.style.width = randomNumber + "%";
        if (hyper_efficiency) hyper_efficiency.innerHTML = randomNumber + "%";
      } else {
        if (bar) bar.style.width = "45%";
        if (hyper_efficiency) hyper_efficiency.innerHTML = "50%";
      }

      if (miningInfo)
        miningInfo.innerHTML = `Investmenst is active  Current efficiency is around :`;
      if (configure) configure.textContent = "Deposite Funds";
      if (profile_usertype)
        profile_usertype.innerHTML = ` <i class="fa-solid fa-circle" style="color: #63E6BE;margin-right:6px;"></i>  ${data.usertype} <i class="fa-solid fa-circle" style="color: #63E6BE;margin-left:6px;"></i>`;
      if (rec) rec.innerHTML = "";
      if (miningState) miningState.innerHTML = " Investment Enabled ";
      if (mining_status)
        mining_status.className = "mining-status status-active";
      if (startInv) {
        startInv.addEventListener("click", () => {
          startInv.innerHTML = "Investment is Active";
        });
      }

      if (stoptInv) {
        stoptInv.innerHTML = "Pause Investment";
        stoptInv.addEventListener("click", () => {
          startInv.innerHTML = "Resume Investing";
        });
      }
      if (userRole)
        userRole.innerHTML = ` <i class="fa-solid fa-circle" style="color: #63E6BE; margin-right:6px;"></i> ${data.usertype} Investor`;
    } else {
      // Free users
      if (miningInfo)
        miningInfo.innerHTML = `Investment is inactive Depoite Funds into Your Account to Start Investing <br> Current HPC efficiency :`;
      if (configure) configure.style.display = " none";
      if (startInv) startInv.style.display = "none";
      if (stoptInv) stoptInv.innerHTML = "Deposite Funds";
      if (profile_usertype) profile_usertype.textContent = data.usertype;
      if (miningState) miningState.innerHTML = `Investment Disabled`;
      if (rec)
        rec.innerHTML = `<span style='color:#ff9800'>
          <i class='fa-solid fa-circle' style='color: #FFD43B; margin-right:6px;'></i>
          <a style='color: #FFD43B' target='_blank' href='features.html#calculator'>Deposite</a>  funds into account<br>
          to start investing and earning
        </span>`;
    }
  }
}

////////USER  AND DEACTIVATE

const startInv = document.getElementById("start-inv");
const stoptInv = document.getElementById("stop-inv");

startInv.addEventListener("click", async function activateUser() {
  await dashboardAuth();
  const token = sessionStorage.getItem("accessToken");
  await fetch("https://backendroutes-lcpt.onrender.com/activateuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
});

stoptInv.addEventListener("click", async function deactivateUser() {
  await dashboardAuth();
  const token = sessionStorage.getItem("accessToken");
  await fetch("https://backendroutes-lcpt.onrender.com/deactivateuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  localStorage.removeItem("activate");
});

async function checkuserState() {
  await dashboardAuth();
  const token = sessionStorage.getItem("accessToken");
  const res = await fetch(
    "https://backendroutes-lcpt.onrender.com/checkuserstate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    }
  );
  const data = await res.json();
  const mining_state = data.message.mining_state;
  if (mining_state === "active") {
    startInv.innerHTML = "Investment is Active";
    stoptInv.innerHTML = "Pause Investment";
  } else {
    startInv.innerHTML = "Resume Investing";
  }
}

checkuserState();

function redirectToLogin() {
  window.location.href = "login.html";
}

// Initialize variables
let currentHashRate = 0;
let prevHashRate = 0;
let highestHashRate = parseFloat(localStorage.getItem("highestHashRate")) || 0;

let currentBalance = 0;
let prevBalance = 0;
let highestBalance = parseFloat(localStorage.getItem("highestBalance")) || 0;

// API endpoint URL
const BALANCE_API_URL = "https://backendroutes-lcpt.onrender.com/balance";

// Function to fetch balance from API - USE REFRESH TOKEN
async function fetchBalanceFromAPI() {
  const token = sessionStorage.getItem("accessToken"); // Use refresh token here

  // Check if token exists
  if (!token) {
    console.error("No refresh token found in sessionStorage");
    return currentBalance;
  }

  try {
    const response = await fetch(BALANCE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();

    // Check if hpcbalance exists in response
    if (data.hpcbalance === undefined) {
      throw new Error("hpcbalance field missing from API response");
    }

    return parseFloat(data.hpcbalance);
  } catch (error) {
    console.error("Error fetching balance:", error);
    return currentBalance; // Return current balance if API fails
  }
}

// Function to update mining stats with API balance
async function updateMiningStats() {
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

  currentHashRate = 50 + (Math.random() * 40 - 20); // Default hash rate

  // Update highest hash rate
  if (currentHashRate > highestHashRate) {
    highestHashRate = currentHashRate;
    localStorage.setItem("highestHashRate", highestHashRate);
  }

  // Fetch balance from API instead of calculating it
  try {
    const newBalance = await fetchBalanceFromAPI();

    // Update current balance with API response
    currentBalance = newBalance;

    // Update highest balance if current balance is higher
    if (currentBalance > highestBalance) {
      highestBalance = currentBalance;
      localStorage.setItem("highestBalance", highestBalance);
    }
  } catch (error) {
    console.error("Failed to update balance from API:", error);
    // Keep using the current balance if API call fails
  }

  // Calculate balance change for indicators
  const balanceChangeValue = currentBalance - prevBalance;
  const changePercent =
    prevBalance > 0 ? (balanceChangeValue / prevBalance) * 100 : 0;

  // Update UI elements
  if (hashValue) hashValue.textContent = Math.round(currentHashRate) + " MH/s";
  if (dailyHighHash)
    dailyHighHash.textContent = Math.round(highestHashRate) + " MH/s";
  if (balanceValue)
    balanceValue.textContent = currentBalance.toFixed(2) + " HPC";
  if (dailyHigh) dailyHigh.textContent = "1 HPC = 1.5 USD";

  // Update change indicators
  const hashChangeValue = currentHashRate - prevHashRate;

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

  dashboardAuth();
}

// Initialize and start updating
function initMiningStats() {
  // Load highest values from localStorage
  highestHashRate = parseFloat(localStorage.getItem("highestHashRate")) || 0;
  highestBalance = parseFloat(localStorage.getItem("highestBalance")) || 0;
}

async function activeUsers() {
  const activeUsers = document.getElementById("active-users");
  const res = await fetch(
    "https://backendroutes-lcpt.onrender.com/activeusers"
  );

  const data = await res.json();
  const active = data.activeUsers;
  activeUsers.innerHTML = active;
  const offline = 200 - parseFloat(active.split(" ")[0]);
  const offlineUsers = document.getElementById("offline-users");
  offlineUsers.innerHTML = offline;
}

activeUsers();

initMiningStats();

// Start regular updates
setInterval(updateMiningStats, 3000); // Update every 5 seconds
updateMiningStats(); // Initial update

// Avatar controls
document.addEventListener("DOMContentLoaded", function () {
  const avatar_controls = document.getElementById("avatar-controls");
  const user_avatar = document.getElementById("user-avatar-img");

  // When user selects a new avatar
  avatar_controls.addEventListener("change", async function () {
    dashboardAuth();
    const token = sessionStorage.getItem("accessToken");
    const avatarimg = this.value; // selected avatar URL
    user_avatar.src = avatarimg; // update image

    try {
      const res = await fetch(
        "https://backendroutes-lcpt.onrender.com/postav",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, uavatar: avatarimg }),
        }
      );
      const data = await res.json();
      const msg = data.message;
    } catch (err) {
      console.log(err);
    }
  });

  async function getAvr() {
    const token = sessionStorage.getItem("accessToken");
    const user_avatar = document.getElementById("user-avatar-img");
    try {
      const res = await fetch("https://backendroutes-lcpt.onrender.com/getav", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      const msg = data.avatar;
      user_avatar.src = msg;
    } catch (err) {
      console.log(err);
    }
  }

  getAvr();

  // Forgot password button
  const changeps = document.getElementById("forgot-password");
  if (changeps) {
    changeps.addEventListener("click", async () => {
      const token = sessionStorage.getItem("accessToken");

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
  }
});

const logOut = document.getElementById("logout-btn");
logOut.addEventListener("click", () => {
  ["accessToken", "refreshToken"].forEach((key) =>
    sessionStorage.removeItem(key)
  );
  window.location.reload();
});
