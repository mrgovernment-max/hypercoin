const _0x5c90f4 = _0xcb76;
(function (_0x14b254, _0x5f262a) {
  const _0x1edbb1 = _0xcb76,
    _0x2f8810 = _0x14b254();
  while (!![]) {
    try {
      const _0x34ae7d =
        (parseInt(_0x1edbb1(0x207)) / 0x1) *
          (parseInt(_0x1edbb1(0x18e)) / 0x2) +
        parseInt(_0x1edbb1(0x1c3)) / 0x3 +
        (parseInt(_0x1edbb1(0x1d0)) / 0x4) *
          (-parseInt(_0x1edbb1(0x22a)) / 0x5) +
        -parseInt(_0x1edbb1(0x190)) / 0x6 +
        parseInt(_0x1edbb1(0x219)) / 0x7 +
        (-parseInt(_0x1edbb1(0x1ae)) / 0x8) *
          (parseInt(_0x1edbb1(0x1be)) / 0x9) +
        (-parseInt(_0x1edbb1(0x22c)) / 0xa) *
          (-parseInt(_0x1edbb1(0x194)) / 0xb);
      if (_0x34ae7d === _0x5f262a) break;
      else _0x2f8810["push"](_0x2f8810["shift"]());
    } catch (_0x161740) {
      _0x2f8810["push"](_0x2f8810["shift"]());
    }
  }
})(_0x222f, 0x31436);
async function dashboardAuth() {
  const _0x14434f = _0xcb76;
  let _0xb6d6d6 = cryptoServiveqwertypoiu[_0x14434f(0x20b)](_0x14434f(0x245));
  !_0xb6d6d6 && redirectToLogin();
  let _0x523e55 = await fetchDashboard(_0xb6d6d6);
  _0x523e55["status"] === 0x191 &&
    (await requestToken(),
    (_0xb6d6d6 = cryptoServiveqwertypoiu["getItem"](_0x14434f(0x245))),
    (_0x523e55 = await fetchDashboard(_0xb6d6d6)));
  if (!_0x523e55["ok"]) return redirectToLogin();
  getNotSeenMessages();
  const _0x5b8133 = await _0x523e55[_0x14434f(0x1b5)](),
    _0x2860a9 = document[_0x14434f(0x167)](_0x14434f(0x1d8)),
    _0x567fb7 = document[_0x14434f(0x167)](_0x14434f(0x20a)),
    _0x36c973 = document[_0x14434f(0x167)](_0x14434f(0x253)),
    _0x1616be = document[_0x14434f(0x167)]("usernamee"),
    _0x20d320 = document[_0x14434f(0x167)](_0x14434f(0x1e9));
  if (_0x36c973)
    _0x36c973["textContent"] = _0x5b8133[_0x14434f(0x242)] || _0x14434f(0x24f);
  if (_0x1616be) _0x1616be[_0x14434f(0x22d)] = _0x5b8133["username"] || "Guest";
  if (_0x20d320)
    _0x20d320["textContent"] = _0x5b8133[_0x14434f(0x242)]
      ? _0x5b8133["username"]["slice"](0x0, 0x2)
      : "G";
  if (_0x567fb7)
    _0x567fb7[_0x14434f(0x1f8)] = _0x5b8133[_0x14434f(0x242)]
      ? _0x5b8133[_0x14434f(0x242)][_0x14434f(0x251)](0x0, 0x2)
      : "G";
  if (_0x2860a9)
    _0x2860a9[_0x14434f(0x1f8)] =
      _0x14434f(0x18c) + _0x5b8133[_0x14434f(0x242)] + _0x14434f(0x1ce);
}
(window[_0x5c90f4(0x1b3)] = dashboardAuth),
  document["addEventListener"](_0x5c90f4(0x182), function () {
    dashboardAuth(), setTimeout(initMiningStats, 0x3e8);
  });
async function fetchDashboard(_0x41f130) {
  const _0x379da5 = _0x5c90f4;
  try {
    return await fetch(_0x379da5(0x24e), {
      method: _0x379da5(0x1ad),
      headers: {
        "Content-Type": "application/json",
        Authorization: _0x379da5(0x175) + _0x41f130,
      },
    });
  } catch (_0x3ca2bb) {
    return (
      console[_0x379da5(0x201)](_0x379da5(0x172), _0x3ca2bb),
      redirectToLogin(),
      { ok: ![] }
    );
  }
}
async function requestToken() {
  const _0x41e60b = _0x5c90f4,
    _0x2af79b = cryptoServiveqwertypoiu[_0x41e60b(0x20b)]("refreshToken");
  if (!_0x2af79b) return redirectToLogin(), ![];
  try {
    const _0x462171 = await fetch(_0x41e60b(0x1f5), {
      method: _0x41e60b(0x1c8),
      headers: { "Content-Type": _0x41e60b(0x231) },
      body: JSON["stringify"]({ token: _0x2af79b }),
    });
    if (!_0x462171["ok"]) return redirectToLogin(), ![];
    const _0x2660bc = await _0x462171["json"]();
    return (
      cryptoServiveqwertypoiu[_0x41e60b(0x1bf)](
        _0x41e60b(0x245),
        _0x2660bc[_0x41e60b(0x245)]
      ),
      !![]
    );
  } catch (_0x291751) {
    return (
      console["error"](_0x41e60b(0x1c5), _0x291751), redirectToLogin(), ![]
    );
  }
}
const menuToggle = document[_0x5c90f4(0x167)](_0x5c90f4(0x24c)),
  sidebar = document[_0x5c90f4(0x167)](_0x5c90f4(0x1b6)),
  overlay = document[_0x5c90f4(0x167)](_0x5c90f4(0x1af));
menuToggle &&
  sidebar &&
  overlay &&
  (menuToggle[_0x5c90f4(0x16d)](_0x5c90f4(0x195), () => {
    const _0x4753ba = _0x5c90f4;
    sidebar[_0x4753ba(0x238)][_0x4753ba(0x1eb)](_0x4753ba(0x23d)),
      overlay[_0x4753ba(0x238)][_0x4753ba(0x1eb)](_0x4753ba(0x23d));
  }),
  overlay[_0x5c90f4(0x16d)](_0x5c90f4(0x195), () => {
    const _0x31c6eb = _0x5c90f4;
    sidebar[_0x31c6eb(0x238)][_0x31c6eb(0x197)](_0x31c6eb(0x23d)),
      overlay["classList"][_0x31c6eb(0x197)](_0x31c6eb(0x23d));
  }));
function hideonClick() {
  const _0x57c770 = _0x5c90f4,
    _0x213d8a = document[_0x57c770(0x167)]("sidebar"),
    _0x1092cc = document["getElementById"](_0x57c770(0x1af));
  _0x213d8a &&
    _0x1092cc &&
    (_0x213d8a[_0x57c770(0x238)][_0x57c770(0x197)](_0x57c770(0x23d)),
    _0x1092cc["classList"][_0x57c770(0x197)](_0x57c770(0x23d)));
}
const themeToggle = document["getElementById"](_0x5c90f4(0x1c7));
if (themeToggle) {
  const currentTheme = localStorage[_0x5c90f4(0x20b)](_0x5c90f4(0x249));
  currentTheme === _0x5c90f4(0x254) &&
    (document["documentElement"][_0x5c90f4(0x1a8)](
      _0x5c90f4(0x1fc),
      _0x5c90f4(0x254)
    ),
    (themeToggle[_0x5c90f4(0x22d)] = "☀️")),
    themeToggle[_0x5c90f4(0x16d)](_0x5c90f4(0x195), () => {
      const _0x2fed4b = _0x5c90f4;
      !document["documentElement"][_0x2fed4b(0x1db)]("data-theme")
        ? (document[_0x2fed4b(0x1c9)][_0x2fed4b(0x1a8)](
            _0x2fed4b(0x1fc),
            "dark"
          ),
          (themeToggle[_0x2fed4b(0x22d)] = "☀️"),
          localStorage[_0x2fed4b(0x1bf)](_0x2fed4b(0x249), "dark"))
        : (document[_0x2fed4b(0x1c9)]["removeAttribute"](_0x2fed4b(0x1fc)),
          (themeToggle[_0x2fed4b(0x22d)] = "🌙"),
          localStorage[_0x2fed4b(0x1bf)](_0x2fed4b(0x249), _0x2fed4b(0x191)));
    });
}
let serverData = null;
async function fetchServerData() {
  const _0x583bf5 = _0x5c90f4;
  await dashboardAuth();
  const _0x2c3f04 = cryptoServiveqwertypoiu[_0x583bf5(0x20b)]("accessToken");
  if (!_0x2c3f04) return redirectToLogin(), null;
  try {
    const _0x5916e3 = await fetch(_0x583bf5(0x1a0), {
      method: _0x583bf5(0x1ad),
      headers: { Authorization: _0x583bf5(0x175) + _0x2c3f04 },
    });
    if (_0x5916e3[_0x583bf5(0x20c)] === 0x191) return dashboardAuth(), null;
    if (!_0x5916e3["ok"])
      return (
        console[_0x583bf5(0x201)](
          _0x583bf5(0x1b1),
          _0x5916e3[_0x583bf5(0x20c)]
        ),
        null
      );
    return (
      (serverData = await _0x5916e3[_0x583bf5(0x1b5)]()),
      getNotSeenMessages(),
      updatePremiumStatusUI(serverData),
      serverData
    );
  } catch (_0x53eab4) {
    return (
      console[_0x583bf5(0x201)](_0x583bf5(0x1ac), _0x53eab4),
      (serverData = null),
      null
    );
  }
}
window[_0x5c90f4(0x1b3)] = function () {
  fetchServerData();
};
function updatePremiumStatusUI(_0x2f3c8d) {
  const _0x4e24b3 = _0x5c90f4;
  if (!_0x2f3c8d) {
    console[_0x4e24b3(0x201)](_0x4e24b3(0x1d4));
    return;
  }
  dashboardAuth();
  const _0x328678 = document[_0x4e24b3(0x167)](_0x4e24b3(0x1b7)),
    _0x28e399 = document["getElementById"](_0x4e24b3(0x226)),
    _0x47da9d = document[_0x4e24b3(0x167)](_0x4e24b3(0x1d2)),
    _0x391446 = document["getElementById"](_0x4e24b3(0x1ec)),
    _0x55fc0a = document[_0x4e24b3(0x167)](_0x4e24b3(0x23f)),
    _0x5eddcb = document[_0x4e24b3(0x167)](_0x4e24b3(0x1b9)),
    _0x36847f = document["getElementById"](_0x4e24b3(0x16c)),
    _0x28efa3 = document[_0x4e24b3(0x167)](_0x4e24b3(0x1ff)),
    _0x1886af = document["getElementById"](_0x4e24b3(0x19f)),
    _0x2edda0 = document["getElementById"](_0x4e24b3(0x23a)),
    _0x24d2b3 = document[_0x4e24b3(0x167)]("withdraw"),
    _0x1f9b1e = document[_0x4e24b3(0x167)](_0x4e24b3(0x1e0)),
    _0x2b3b39 = document[_0x4e24b3(0x167)](_0x4e24b3(0x224)),
    _0x378ad4 = document[_0x4e24b3(0x167)]("mining-info"),
    _0x5b89e6 = document[_0x4e24b3(0x167)](_0x4e24b3(0x180));
  let _0x342634 = (Math["random"]() * 0x63 + 0x1)[_0x4e24b3(0x1c1)](0x2);
  if (_0x5b89e6)
    _0x5b89e6[_0x4e24b3(0x222)][_0x4e24b3(0x1a7)] = _0x342634 + "%";
  if (_0x2b3b39) _0x2b3b39[_0x4e24b3(0x1f8)] = _0x342634 + "%";
  if (_0x2f3c8d && _0x2f3c8d["usertype"]) {
    if (_0x2f3c8d[_0x4e24b3(0x1ca)] !== _0x4e24b3(0x19a)) {
      if (_0x342634 >= 0x2d) {
        if (_0x5b89e6)
          _0x5b89e6[_0x4e24b3(0x222)][_0x4e24b3(0x1a7)] = _0x342634 + "%";
        if (_0x2b3b39) _0x2b3b39["innerHTML"] = _0x342634 + "%";
      } else {
        if (_0x5b89e6)
          _0x5b89e6[_0x4e24b3(0x222)][_0x4e24b3(0x1a7)] = _0x4e24b3(0x237);
        if (_0x2b3b39) _0x2b3b39[_0x4e24b3(0x1f8)] = _0x4e24b3(0x16e);
      }
      if (_0x378ad4) _0x378ad4[_0x4e24b3(0x1f8)] = _0x4e24b3(0x170);
      if (_0x28e399) _0x28e399[_0x4e24b3(0x22d)] = _0x4e24b3(0x22f);
      if (_0x47da9d)
        _0x47da9d[_0x4e24b3(0x1f8)] =
          _0x4e24b3(0x18a) + _0x2f3c8d[_0x4e24b3(0x1ca)] + _0x4e24b3(0x19d);
      if (_0x391446) _0x391446[_0x4e24b3(0x1f8)] = "";
      if (_0x24d2b3) _0x24d2b3[_0x4e24b3(0x1f8)] = _0x4e24b3(0x232);
      if (_0x55fc0a) _0x55fc0a[_0x4e24b3(0x1f8)] = _0x4e24b3(0x16b);
      if (_0x1886af) _0x1886af["style"][_0x4e24b3(0x181)] = "flex";
      if (_0x5eddcb) _0x5eddcb["className"] = _0x4e24b3(0x1b8);
      _0x36847f &&
        _0x36847f["addEventListener"](_0x4e24b3(0x195), () => {
          const _0x3acfdc = _0x4e24b3;
          (_0x36847f[_0x3acfdc(0x222)][_0x3acfdc(0x215)] =
            "softFloat\x202s\x20ease-in-out\x20infinite"),
            (_0x36847f[_0x3acfdc(0x1f8)] = _0x3acfdc(0x18d));
        });
      _0x28efa3 &&
        ((_0x28efa3[_0x4e24b3(0x1f8)] = _0x4e24b3(0x206)),
        _0x28efa3[_0x4e24b3(0x16d)](_0x4e24b3(0x195), () => {
          const _0x1ab1d1 = _0x4e24b3;
          (_0x36847f[_0x1ab1d1(0x222)][_0x1ab1d1(0x215)] = _0x1ab1d1(0x1f1)),
            (_0x36847f[_0x1ab1d1(0x1f8)] = _0x1ab1d1(0x1f6));
        }));
      if (_0x328678)
        _0x328678["innerHTML"] =
          _0x4e24b3(0x1a2) + _0x2f3c8d[_0x4e24b3(0x1ca)] + _0x4e24b3(0x1a3);
    } else {
      if (_0x378ad4) _0x378ad4[_0x4e24b3(0x1f8)] = _0x4e24b3(0x199);
      if (_0x28e399)
        _0x28efa3[_0x4e24b3(0x222)][_0x4e24b3(0x181)] = _0x4e24b3(0x1f2);
      if (_0x36847f) _0x36847f["style"][_0x4e24b3(0x181)] = _0x4e24b3(0x1f1);
      if (_0x28efa3) _0x28e399[_0x4e24b3(0x1f8)] = _0x4e24b3(0x22f);
      if (_0x47da9d) _0x47da9d[_0x4e24b3(0x22d)] = _0x2f3c8d["usertype"];
      if (_0x55fc0a) _0x55fc0a[_0x4e24b3(0x1f8)] = _0x4e24b3(0x1c0);
      if (_0x2edda0) _0x2edda0[_0x4e24b3(0x222)][_0x4e24b3(0x181)] = "none";
      if (_0x1f9b1e) _0x1f9b1e["style"]["display"] = "none";
      if (_0x24d2b3) _0x24d2b3["style"][_0x4e24b3(0x181)] = _0x4e24b3(0x1f1);
      if (_0x391446) _0x391446[_0x4e24b3(0x1f8)] = _0x4e24b3(0x192);
    }
  }
}
const startInv = document[_0x5c90f4(0x167)](_0x5c90f4(0x16c)),
  stoptInv = document["getElementById"]("stop-inv");
function _0xcb76(_0x16f0e9, _0x312c08) {
  const _0x222f1c = _0x222f();
  return (
    (_0xcb76 = function (_0xcb7609, _0x1b8d43) {
      _0xcb7609 = _0xcb7609 - 0x166;
      let _0xeb6fb5 = _0x222f1c[_0xcb7609];
      return _0xeb6fb5;
    }),
    _0xcb76(_0x16f0e9, _0x312c08)
  );
}
startInv["addEventListener"](_0x5c90f4(0x195), async function activateUser() {
  const _0x15fb07 = _0x5c90f4;
  await dashboardAuth();
  const _0x588ff1 = cryptoServiveqwertypoiu[_0x15fb07(0x20b)](_0x15fb07(0x245));
  await fetch(_0x15fb07(0x1f9), {
    method: "POST",
    headers: { "Content-Type": _0x15fb07(0x231) },
    body: JSON[_0x15fb07(0x1cf)]({ token: _0x588ff1 }),
  });
}),
  stoptInv[_0x5c90f4(0x16d)]("click", async function deactivateUser() {
    const _0x5bbf08 = _0x5c90f4;
    await dashboardAuth();
    const _0x22b5ef = cryptoServiveqwertypoiu[_0x5bbf08(0x20b)](
      _0x5bbf08(0x245)
    );
    await fetch(_0x5bbf08(0x1d6), {
      method: _0x5bbf08(0x1c8),
      headers: { "Content-Type": _0x5bbf08(0x231) },
      body: JSON[_0x5bbf08(0x1cf)]({ token: _0x22b5ef }),
    }),
      localStorage[_0x5bbf08(0x217)](_0x5bbf08(0x173));
  });
var cryptoServiveqwertypoiu = sessionStorage;
async function checkuserState() {
  const _0x521436 = _0x5c90f4;
  await dashboardAuth();
  const _0x2a2bab = cryptoServiveqwertypoiu[_0x521436(0x20b)](_0x521436(0x245)),
    _0x3217c0 = await fetch(_0x521436(0x1a5), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON[_0x521436(0x1cf)]({ token: _0x2a2bab }),
    }),
    _0x38bd8c = await _0x3217c0[_0x521436(0x1b5)](),
    _0x64e983 = _0x38bd8c[_0x521436(0x186)][_0x521436(0x1d7)];
  _0x64e983 === _0x521436(0x23d)
    ? ((startInv[_0x521436(0x1f8)] = _0x521436(0x18d)),
      (stoptInv[_0x521436(0x1f8)] = _0x521436(0x206)))
    : (startInv[_0x521436(0x1f8)] = _0x521436(0x1f6));
}
checkuserState();
function redirectToLogin() {
  const _0x294df0 = _0x5c90f4;
  window["location"][_0x294df0(0x189)] = _0x294df0(0x20e);
}
let currentHashRate = 0x0,
  prevHashRate = 0x0,
  highestHashRate =
    parseFloat(localStorage[_0x5c90f4(0x20b)](_0x5c90f4(0x1b4))) || 0x0,
  currentBalance = 0x0,
  prevBalance = 0x0,
  highestBalance =
    parseFloat(localStorage[_0x5c90f4(0x20b)]("highestBalance")) || 0x0;
const BALANCE_API_URL = _0x5c90f4(0x17c);
async function fetchBalanceFromAPI() {
  const _0x4f81ec = _0x5c90f4,
    _0x4274d5 = cryptoServiveqwertypoiu[_0x4f81ec(0x20b)]("accessToken");
  if (!_0x4274d5)
    return console[_0x4f81ec(0x201)](_0x4f81ec(0x184)), currentBalance;
  try {
    const _0x3de4b6 = await fetch(BALANCE_API_URL, {
      method: _0x4f81ec(0x1c8),
      headers: { "Content-Type": _0x4f81ec(0x231) },
      body: JSON["stringify"]({ token: _0x4274d5 }),
    });
    if (!_0x3de4b6["ok"])
      throw new Error(_0x4f81ec(0x1fb) + _0x3de4b6["status"]);
    const _0x28cb79 = await _0x3de4b6[_0x4f81ec(0x1b5)]();
    if (_0x28cb79[_0x4f81ec(0x1a1)] === undefined)
      throw new Error(
        "hpcbalance\x20field\x20missing\x20from\x20API\x20response"
      );
    return parseFloat(_0x28cb79[_0x4f81ec(0x1a1)]);
  } catch (_0x517aba) {
    return (
      console[_0x4f81ec(0x201)]("Error\x20fetching\x20balance:", _0x517aba),
      currentBalance
    );
  }
}
async function updateMiningStats() {
  const _0x2958f0 = _0x5c90f4,
    _0x5ad98d = document[_0x2958f0(0x167)]("hash-value"),
    _0x12d1b8 = document["getElementById"](_0x2958f0(0x1f7)),
    _0x50e6fb = document[_0x2958f0(0x167)]("dailyhighhash"),
    _0x513de8 = document[_0x2958f0(0x167)](_0x2958f0(0x244)),
    _0x363996 = _0x513de8 ? _0x513de8[_0x2958f0(0x168)]("i") : null,
    _0x35ed0e = document[_0x2958f0(0x167)](_0x2958f0(0x1e6)),
    _0x36d625 = document[_0x2958f0(0x167)](_0x2958f0(0x17b)),
    _0x5982d5 = document[_0x2958f0(0x167)](_0x2958f0(0x21d)),
    _0x3bb429 = document[_0x2958f0(0x167)]("balancesig"),
    _0x31d2ae = _0x3bb429 ? _0x3bb429[_0x2958f0(0x168)]("i") : null;
  (prevHashRate = currentHashRate),
    (prevBalance = currentBalance),
    (currentHashRate = 0x32 + (Math["random"]() * 0x28 - 0x14));
  currentHashRate > highestHashRate &&
    ((highestHashRate = currentHashRate),
    localStorage["setItem"](_0x2958f0(0x1b4), highestHashRate));
  try {
    const _0x358333 = await fetchBalanceFromAPI();
    (currentBalance = _0x358333),
      currentBalance > highestBalance &&
        ((highestBalance = currentBalance),
        localStorage[_0x2958f0(0x1bf)](_0x2958f0(0x16a), highestBalance));
  } catch (_0x4a989b) {
    console[_0x2958f0(0x201)](_0x2958f0(0x1aa), _0x4a989b);
  }
  const _0x219bca = currentBalance - prevBalance,
    _0x290e40 = prevBalance > 0x0 ? (_0x219bca / prevBalance) * 0x64 : 0x0;
  if (_0x5ad98d)
    _0x5ad98d[_0x2958f0(0x22d)] =
      Math["round"](currentHashRate) + _0x2958f0(0x23e);
  if (_0x50e6fb)
    _0x50e6fb[_0x2958f0(0x22d)] =
      Math[_0x2958f0(0x233)](highestHashRate) + _0x2958f0(0x23e);
  if (_0x35ed0e)
    _0x35ed0e[_0x2958f0(0x22d)] =
      currentBalance[_0x2958f0(0x1c1)](0x2) + "\x20$";
  if (_0x5982d5) _0x5982d5[_0x2958f0(0x22d)] = _0x2958f0(0x24d);
  const _0x3c61c2 = currentHashRate - prevHashRate;
  _0x12d1b8 &&
    ((_0x12d1b8[_0x2958f0(0x22d)] =
      (_0x3c61c2 >= 0x0 ? "+" : "") +
      Math[_0x2958f0(0x233)](_0x3c61c2) +
      "\x20MH/s"),
    (_0x12d1b8[_0x2958f0(0x222)][_0x2958f0(0x1d3)] =
      _0x3c61c2 > 0x0
        ? _0x2958f0(0x1c4)
        : _0x3c61c2 < 0x0
        ? _0x2958f0(0x22e)
        : _0x2958f0(0x211))),
    _0x36d625 &&
      ((_0x36d625[_0x2958f0(0x22d)] =
        (_0x219bca >= 0x0 ? "+" : "") + _0x290e40[_0x2958f0(0x1c1)](0x2) + "%"),
      (_0x36d625[_0x2958f0(0x222)][_0x2958f0(0x1d3)] =
        _0x219bca > 0x0 ? _0x2958f0(0x1c4) : _0x219bca < 0x0 ? "red" : "gray")),
    _0x513de8 &&
      _0x363996 &&
      ((_0x363996[_0x2958f0(0x239)] =
        _0x3c61c2 > 0x0
          ? "fas\x20fa-arrow-up"
          : _0x3c61c2 < 0x0
          ? _0x2958f0(0x1b0)
          : _0x2958f0(0x1df)),
      (_0x513de8[_0x2958f0(0x222)][_0x2958f0(0x1d3)] =
        _0x3c61c2 > 0x0
          ? _0x2958f0(0x1c4)
          : _0x3c61c2 < 0x0
          ? _0x2958f0(0x22e)
          : _0x2958f0(0x211))),
    _0x3bb429 &&
      _0x31d2ae &&
      ((_0x31d2ae[_0x2958f0(0x239)] =
        _0x219bca > 0x0
          ? _0x2958f0(0x202)
          : _0x219bca < 0x0
          ? _0x2958f0(0x1b0)
          : _0x2958f0(0x1df)),
      (_0x3bb429["style"][_0x2958f0(0x1d3)] =
        _0x219bca > 0x0
          ? "green"
          : _0x219bca < 0x0
          ? _0x2958f0(0x22e)
          : _0x2958f0(0x211))),
    dashboardAuth();
}
function initMiningStats() {
  const _0x4753d9 = _0x5c90f4;
  (highestHashRate =
    parseFloat(localStorage[_0x4753d9(0x20b)](_0x4753d9(0x1b4))) || 0x0),
    (highestBalance =
      parseFloat(localStorage[_0x4753d9(0x20b)](_0x4753d9(0x16a))) || 0x0);
}
async function activeUsers() {
  const _0x5cf111 = _0x5c90f4,
    _0xab02cf = document[_0x5cf111(0x167)](_0x5cf111(0x16f)),
    _0x3e6a13 = await fetch(_0x5cf111(0x177)),
    _0x3b0088 = await _0x3e6a13[_0x5cf111(0x1b5)](),
    _0x57d8c2 = _0x3b0088[_0x5cf111(0x196)];
  _0xab02cf["innerHTML"] = _0x57d8c2;
  const _0x5268ee = 0xc8 - parseFloat(_0x57d8c2[_0x5cf111(0x200)]("\x20")[0x0]),
    _0x516282 = document["getElementById"](_0x5cf111(0x23c));
  _0x516282[_0x5cf111(0x1f8)] = _0x5268ee;
}
activeUsers(),
  initMiningStats(),
  setInterval(updateMiningStats, 0x1388),
  updateMiningStats(),
  document[_0x5c90f4(0x16d)](_0x5c90f4(0x182), function () {
    const _0x492cf3 = _0x5c90f4,
      _0x75fc2 = document[_0x492cf3(0x167)](_0x492cf3(0x229)),
      _0x11a926 = document[_0x492cf3(0x167)](_0x492cf3(0x1de));
    _0x75fc2[_0x492cf3(0x16d)](_0x492cf3(0x24b), async function () {
      const _0x35d11f = _0x492cf3;
      dashboardAuth();
      const _0x411039 = cryptoServiveqwertypoiu["getItem"]("accessToken"),
        _0x3612ed = this["value"];
      _0x11a926["src"] = _0x3612ed;
      try {
        const _0x299f9e = await fetch(
            "https://backendroutes-lcpt.onrender.com/postav",
            {
              method: _0x35d11f(0x20d),
              headers: { "Content-Type": "application/json" },
              body: JSON[_0x35d11f(0x1cf)]({
                token: _0x411039,
                uavatar: _0x3612ed,
              }),
            }
          ),
          _0x51d541 = await _0x299f9e["json"](),
          _0x52940d = _0x51d541[_0x35d11f(0x186)];
      } catch (_0x543523) {
        console[_0x35d11f(0x21a)](_0x543523);
      }
    });
    async function _0x19cd1f() {
      const _0x127be = _0x492cf3,
        _0x3edbe9 = cryptoServiveqwertypoiu["getItem"](_0x127be(0x245)),
        _0x537d82 = document[_0x127be(0x167)](_0x127be(0x1de));
      try {
        const _0x1b1349 = await fetch(
            "https://backendroutes-lcpt.onrender.com/getav",
            {
              method: "post",
              headers: { "Content-Type": _0x127be(0x231) },
              body: JSON["stringify"]({ token: _0x3edbe9 }),
            }
          ),
          _0x5306bc = await _0x1b1349[_0x127be(0x1b5)](),
          _0x3d4499 = _0x5306bc[_0x127be(0x223)];
        _0x537d82[_0x127be(0x1cd)] = _0x3d4499;
      } catch (_0x2e13bb) {
        console[_0x127be(0x21a)](_0x2e13bb);
      }
    }
    _0x19cd1f();
    const _0x4035d3 = document["getElementById"](_0x492cf3(0x1f0)),
      _0x2816d6 = document[_0x492cf3(0x167)]("change-password"),
      _0x26750e = document[_0x492cf3(0x167)](_0x492cf3(0x179)),
      _0x56465c = document[_0x492cf3(0x167)](_0x492cf3(0x225));
    _0x4035d3 &&
      _0x4035d3[_0x492cf3(0x16d)](_0x492cf3(0x195), async () => {
        const _0x11060b = _0x492cf3;
        (_0x2816d6[_0x11060b(0x222)][_0x11060b(0x181)] = _0x11060b(0x1bd)),
          _0x2816d6["addEventListener"](_0x11060b(0x195), async () => {
            const _0x40edc6 = _0x11060b;
            if (_0x2816d6[_0x40edc6(0x222)]["display"] === _0x40edc6(0x1bd)) {
              const _0x24ed3c = cryptoServiveqwertypoiu["getItem"](
                _0x40edc6(0x245)
              );
              if (!_0x24ed3c) {
                console[_0x40edc6(0x201)](_0x40edc6(0x178)),
                  alert(_0x40edc6(0x1b2));
                return;
              }
              try {
                const _0x2fb98b = await fetch(_0x40edc6(0x1c2), {
                    method: _0x40edc6(0x1c8),
                    headers: { "Content-Type": _0x40edc6(0x231) },
                    body: JSON[_0x40edc6(0x1cf)]({ token: _0x24ed3c }),
                  }),
                  _0x3b84a0 = await _0x2fb98b[_0x40edc6(0x1b5)]();
                if (_0x2fb98b["ok"]) {
                } else console["error"](_0x40edc6(0x169), _0x3b84a0["error"]);
              } catch (_0x243044) {
                console[_0x40edc6(0x201)](_0x40edc6(0x185), _0x243044);
              }
              (_0x26750e[_0x40edc6(0x222)][_0x40edc6(0x181)] =
                _0x40edc6(0x1bd)),
                (_0x2816d6[_0x40edc6(0x1f8)] = _0x40edc6(0x187)),
                _0x26750e[_0x40edc6(0x16d)](_0x40edc6(0x1a9), () => {
                  const _0x3363b1 = _0x40edc6;
                  (_0x56465c[_0x3363b1(0x222)][_0x3363b1(0x181)] =
                    _0x3363b1(0x1bd)),
                    (_0x56465c[_0x3363b1(0x1f8)] = _0x3363b1(0x1c6)),
                    (_0x4035d3[_0x3363b1(0x1f8)] = _0x3363b1(0x19c));
                });
            }
          });
      });
  });
async function verifyCode() {
  const _0x688b53 = _0x5c90f4,
    _0x437fd6 = cryptoServiveqwertypoiu["getItem"]("accessToken"),
    _0x247a78 = document[_0x688b53(0x167)]("psInput")[_0x688b53(0x205)],
    _0x5d6cdc = document[_0x688b53(0x167)]("reset-container"),
    _0x3a7008 = document[_0x688b53(0x167)](_0x688b53(0x225)),
    _0x21ceaf = document["getElementById"](_0x688b53(0x214));
  try {
    const _0x124379 = await fetch(_0x688b53(0x17a), {
        method: _0x688b53(0x1c8),
        headers: { "Content-Type": _0x688b53(0x231) },
        body: JSON[_0x688b53(0x1cf)]({ token: _0x437fd6, ucode: _0x247a78 }),
      }),
      _0x2bd524 = await _0x124379[_0x688b53(0x1b5)](),
      _0xb0ee3c = _0x2bd524["message"];
    _0xb0ee3c === _0x688b53(0x1e4) &&
      ((_0x5d6cdc["style"]["display"] = "flex"),
      (_0x21ceaf[_0x688b53(0x222)][_0x688b53(0x181)] = _0x688b53(0x1f1)));
    _0xb0ee3c === _0x688b53(0x240)
      ? (_0x3a7008["innerHTML"] = _0x688b53(0x240))
      : [];
    _0xb0ee3c === _0x688b53(0x23b) &&
      ((_0x3a7008[_0x688b53(0x1f8)] = _0x688b53(0x216)),
      setTimeout(() => {
        const _0x5adf4e = _0x688b53;
        window["location"][_0x5adf4e(0x21f)]();
      }, 0x7d0));
    if (_0x124379["ok"]) {
    } else
      console[_0x688b53(0x201)](_0x688b53(0x169), _0x2bd524[_0x688b53(0x201)]);
  } catch (_0x4fe8af) {
    console["error"]("Request\x20failed:", _0x4fe8af);
  }
}
const confirmBtn = document[_0x5c90f4(0x167)](_0x5c90f4(0x21c));
confirmBtn[_0x5c90f4(0x16d)](_0x5c90f4(0x195), async (_0x728f26) => {
  const _0x57c21f = _0x5c90f4;
  _0x728f26[_0x57c21f(0x241)]();
  const _0x527b5e = document["getElementById"](_0x57c21f(0x1e3))[
      _0x57c21f(0x205)
    ],
    _0x25c7e3 = cryptoServiveqwertypoiu[_0x57c21f(0x20b)](_0x57c21f(0x245));
  try {
    const _0x340ac9 = await fetch(_0x57c21f(0x230), {
        method: _0x57c21f(0x1c8),
        headers: { "Content-Type": _0x57c21f(0x231) },
        body: JSON[_0x57c21f(0x1cf)]({ token: _0x25c7e3, confirm: _0x527b5e }),
      }),
      _0xa49b6a = await _0x340ac9[_0x57c21f(0x1b5)]();
    _0x340ac9["ok"]
      ? (alert(_0x57c21f(0x193)),
        (window[_0x57c21f(0x17d)]["href"] = _0x57c21f(0x20e)))
      : alert(
          _0xa49b6a[_0x57c21f(0x201)] || "Failed\x20to\x20update\x20password"
        );
  } catch (_0x27cbdd) {
    console[_0x57c21f(0x201)](_0x27cbdd), alert(_0x57c21f(0x1ed));
  }
});
function _0x222f() {
  const _0x1d02b1 = [
    "https://backendroutes-lcpt.onrender.com/activeusers",
    "No\x20access\x20token\x20found",
    "psInput",
    "https://backendroutes-lcpt.onrender.com/verifyReset",
    "balance-change",
    "https://backendroutes-lcpt.onrender.com/balance",
    "location",
    "stop-l-msg",
    "take_profit",
    "progress-bar",
    "display",
    "DOMContentLoaded",
    "stop-l-balance",
    "No\x20refresh\x20token\x20found\x20in\x20cryptoServiveqwertypoiu",
    "Request\x20failed:",
    "message",
    "Input\x20the\x20reset\x20code\x20sent\x20to\x20your\x20registered\x20mail",
    "https://backendroutes-lcpt.onrender.com/deleteUsermsg",
    "href",
    "\x20<i\x20class=\x22fa-solid\x20fa-circle\x22\x20style=\x22color:\x20#63E6BE;margin-right:6px;\x22></i>\x20\x20",
    "opacity",
    "\x0a\x20\x20<span>\x0a\x20\x20\x20",
    "Investment\x20is\x20Active",
    "756294kfJikK",
    "fontSize",
    "2112636suRzgu",
    "light",
    "<span\x20style=\x27color:#ff9800\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x27fa-solid\x20fa-circle\x27\x20style=\x27color:\x20#FFD43B;\x20margin-right:6px;\x27></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20style=\x27color:\x20#FFD43B\x27\x20target=\x27_blank\x27\x20href=\x27redirect.html\x27>Deposite</a>\x20\x20funds\x20into\x20account<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20start\x20investing\x20and\x20use\x20other\x20features\x0a\x20\x20\x20\x20\x20\x20\x20\x20</span>",
    "Password\x20updated\x20successfully!",
    "33KUdUuG",
    "click",
    "activeUsers",
    "remove",
    "\x20<i\x20class=\x22fa-solid\x20fa-check\x22></i>\x20\x20",
    "Investment\x20is\x20inactive\x20Deposite\x20Funds\x20into\x20Your\x20Account\x20to\x20Start\x20Investing\x20<br>\x20Current\x20HPC\x20efficiency\x20:",
    "Free",
    "refreshToken",
    "Please\x20refresh\x20the\x20page\x20to\x20start\x20a\x20new\x20password\x20reset\x20request.\x20",
    "\x20<i\x20class=\x22fa-solid\x20fa-circle\x22\x20style=\x22color:\x20#63E6BE;margin-left:6px;\x22></i>",
    "\x20USD",
    "balanace-control",
    "https://backendroutes-lcpt.onrender.com/getUserStats",
    "hpcbalance",
    "\x20<i\x20class=\x22fa-solid\x20fa-circle\x22\x20style=\x22color:\x20#63E6BE;\x20margin-right:6px;\x22></i>\x20",
    "\x20Investor",
    "check-btn",
    "https://backendroutes-lcpt.onrender.com/checkuserstate",
    "transaction-positive",
    "width",
    "setAttribute",
    "focus",
    "Failed\x20to\x20update\x20balance\x20from\x20API:",
    "confirmed",
    "Error\x20fetching\x20server\x20data:",
    "GET",
    "8VBEFjg",
    "overlay",
    "fas\x20fa-arrow-down",
    "Failed\x20to\x20fetch\x20user\x20stats:",
    "Please\x20log\x20in\x20first",
    "onload",
    "highestHashRate",
    "json",
    "sidebar",
    "user-role",
    "mining-status\x20status-active",
    "mining-status",
    "padStart",
    "\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20",
    "block",
    "2343717apStVJ",
    "setItem",
    "Investment\x20Disabled",
    "toFixed",
    "https://backendroutes-lcpt.onrender.com/resetpass",
    "862170ahglnI",
    "green",
    "Token\x20refresh\x20failed:",
    "Verify\x20Code",
    "themeToggle",
    "POST",
    "documentElement",
    "usertype",
    "#fff",
    "appendChild",
    "src",
    "\x27s<BR>\x0a\x20\x20</span>DASHBOARD\x0a",
    "stringify",
    "52alZCUv",
    "status-badge\x20",
    "profile-usertype",
    "color",
    "No\x20data\x20provided\x20to\x20updatePremiumStatusUI",
    "take-p-msg",
    "https://backendroutes-lcpt.onrender.com/deactivateuser",
    "mining_state",
    "page-title",
    "getUTCHours",
    "en-US",
    "getAttribute",
    "✅\x20Transactions\x20fetched:",
    "closest",
    "user-avatar-img",
    "fas\x20fa-minus",
    "stop-l-div",
    "amount",
    "notseen",
    "new-password",
    "Valid\x20code",
    "toLocaleDateString",
    "balance-value",
    "status-failed",
    "user-msg-p",
    "user-avatarr",
    "numeric",
    "toggle",
    "rec",
    "An\x20error\x20occurred.\x20Try\x20again.",
    "createElement",
    "toUpperCase",
    "forgot-password",
    "none",
    "\x20none",
    "withdrawal",
    "10px",
    "https://backendroutes-lcpt.onrender.com/token",
    "Resume\x20Investing",
    "hash-change",
    "innerHTML",
    "https://backendroutes-lcpt.onrender.com/activateuser",
    "status-pending",
    "API\x20request\x20failed\x20with\x20status:\x20",
    "data-theme",
    "notification-btn",
    "⚠️\x20No\x20access\x20token\x20found.\x20Cannot\x20fetch\x20transactions.",
    "stop-inv",
    "split",
    "error",
    "fas\x20fa-arrow-up",
    "https://backendroutes-lcpt.onrender.com/transactions",
    "forEach",
    "value",
    "Pause\x20Investment",
    "1UrmChG",
    "interactions",
    "https://backendroutes-lcpt.onrender.com/stoploss",
    "user-avatar",
    "getItem",
    "status",
    "post",
    "login.html",
    "created_at",
    "take-p-balance",
    "gray",
    "notification-overlay",
    "getUTCFullYear",
    "recovery-actions",
    "animation",
    "Code\x20Expired\x20Roloading\x20Page\x20....",
    "removeItem",
    "getUTCMinutes",
    "2181788DbMawi",
    "log",
    "pending",
    "confirm-password",
    "dailyhigh",
    "stop-l",
    "reload",
    "https://backendroutes-lcpt.onrender.com/getusermsg",
    "notification-msg",
    "style",
    "avatar",
    "miningeff",
    "vinput",
    "configure-plan",
    "type",
    "https://backendroutes-lcpt.onrender.com/takeprofit",
    "avatar-controls",
    "130735TzvGUO",
    "charAt",
    "589970qhVaCj",
    "textContent",
    "red",
    "Deposite\x20Funds",
    "https://backendroutes-lcpt.onrender.com/confirm",
    "application/json",
    "Withdraw\x20Funds",
    "round",
    "notification-badge",
    "stop_loss",
    "span",
    "45%",
    "classList",
    "className",
    "take-p-div",
    "Code\x20Expired",
    "offline-users",
    "active",
    "\x20MH/s",
    "miningState",
    "Invalid\x20code",
    "preventDefault",
    "username",
    "getUTCDate",
    "hashsig",
    "accessToken",
    "Server\x20returned\x20",
    "https://backendroutes-lcpt.onrender.com/getNotSeenMessages",
    "take-p",
    "theme",
    "short",
    "change",
    "menuToggle",
    "1\x20HPC\x20=\x201.5\x20USD",
    "https://backendroutes-lcpt.onrender.com/dashboard",
    "Guest",
    "Failed\x20to\x20delete\x20message",
    "slice",
    "getUTCMonth",
    "profile-user",
    "dark",
    "https://backendroutes-lcpt.onrender.com/checkUsermsg",
    "add",
    "getElementById",
    "querySelector",
    "Error:",
    "highestBalance",
    "\x20Investment\x20Enabled\x20",
    "start-inv",
    "addEventListener",
    "50%",
    "active-users",
    "Investmenst\x20is\x20active\x20.\x20Current\x20efficiency\x20is\x20around\x20:",
    ",\x20this)\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:50px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:30px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20red;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x200.2s\x20ease-in-out;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🗑\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20",
    "Error\x20fetching\x20dashboard:",
    "activate",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x200.2s\x20ease-in-out;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa-solid\x20fa-check-double\x22\x20style=\x22color:\x20#ededed;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20",
    "Bearer\x20",
    "\x20\x20<span\x20style=\x22margin:0\x205px;\x22>\x20at\x20</span>\x20<span\x20style=\x22color\x20:yellow;\x20margin-left:5px;\x22>\x20",
  ];
  _0x222f = function () {
    return _0x1d02b1;
  };
  return _0x222f();
}
const logOut = document[_0x5c90f4(0x167)]("logout-btn");
logOut[_0x5c90f4(0x16d)](_0x5c90f4(0x195), () => {
  const _0x3d3c49 = _0x5c90f4;
  [_0x3d3c49(0x245), _0x3d3c49(0x19b)][_0x3d3c49(0x204)]((_0xa7fdb5) =>
    cryptoServiveqwertypoiu[_0x3d3c49(0x217)](_0xa7fdb5)
  ),
    window["location"][_0x3d3c49(0x21f)]();
});
const take_p = document["getElementById"](_0x5c90f4(0x248));
take_p[_0x5c90f4(0x16d)](_0x5c90f4(0x195), async () => {
  const _0x12dada = _0x5c90f4,
    _0x29c26c = parseFloat(
      document[_0x12dada(0x167)](_0x12dada(0x210))[_0x12dada(0x205)]
    )[_0x12dada(0x1c1)](0x2);
  if (isNaN(_0x29c26c)) return;
  let _0xa7d309 = document[_0x12dada(0x167)](_0x12dada(0x210));
  const _0x20d2e8 = document["getElementById"](_0x12dada(0x1d5));
  _0x20d2e8[_0x12dada(0x222)][_0x12dada(0x181)] = _0x12dada(0x1bd);
  const _0x1ddf03 = cryptoServiveqwertypoiu["getItem"](_0x12dada(0x245));
  try {
    const _0x4edd23 = await fetch(_0x12dada(0x228), {
      method: _0x12dada(0x1c8),
      headers: { "Content-Type": _0x12dada(0x231) },
      body: JSON[_0x12dada(0x1cf)]({
        token: _0x1ddf03,
        takepbalance: _0x29c26c,
      }),
    });
    if (_0x4edd23["ok"]) {
      const _0x2a9bfd = await _0x4edd23[_0x12dada(0x1b5)]();
      (_0x20d2e8[_0x12dada(0x1f8)] =
        _0x12dada(0x198) + _0x2a9bfd[_0x12dada(0x186)]),
        setTimeout(() => {
          const _0x3d2378 = _0x12dada;
          (_0x20d2e8[_0x3d2378(0x1f8)] = ""),
            (_0x20d2e8[_0x3d2378(0x222)][_0x3d2378(0x181)] = _0x3d2378(0x1f1)),
            (_0xa7d309[_0x3d2378(0x205)] = "");
        }, 0x7d0),
        getUsermsg(),
        getNotSeenMessages();
    }
  } catch (_0x236a5b) {
    _0x236a5b && console[_0x12dada(0x21a)](_0x236a5b);
  }
});
const stop_l = document[_0x5c90f4(0x167)](_0x5c90f4(0x21e));
stop_l[_0x5c90f4(0x16d)](_0x5c90f4(0x195), async () => {
  const _0x1b5e22 = _0x5c90f4,
    _0x2673a5 = parseFloat(
      document["getElementById"](_0x1b5e22(0x183))[_0x1b5e22(0x205)]
    )[_0x1b5e22(0x1c1)](0x2);
  if (isNaN(_0x2673a5)) return;
  const _0x2aefd9 = cryptoServiveqwertypoiu[_0x1b5e22(0x20b)](_0x1b5e22(0x245));
  let _0x541aa6 = document[_0x1b5e22(0x167)]("stop-l-balance");
  const _0x388429 = document["getElementById"](_0x1b5e22(0x17e));
  _0x388429[_0x1b5e22(0x222)][_0x1b5e22(0x181)] = _0x1b5e22(0x1bd);
  try {
    const _0x1e4468 = await fetch(_0x1b5e22(0x209), {
      method: _0x1b5e22(0x1c8),
      headers: { "Content-Type": _0x1b5e22(0x231) },
      body: JSON[_0x1b5e22(0x1cf)]({
        token: _0x2aefd9,
        stoplbalance: _0x2673a5,
      }),
    });
    if (_0x1e4468["ok"]) {
      const _0x32dda8 = await _0x1e4468[_0x1b5e22(0x1b5)]();
      (_0x388429["innerHTML"] = _0x1b5e22(0x198) + _0x32dda8["message"]),
        setTimeout(() => {
          const _0x241200 = _0x1b5e22;
          (_0x388429[_0x241200(0x1f8)] = ""),
            (_0x388429[_0x241200(0x222)][_0x241200(0x181)] = _0x241200(0x1f1)),
            (_0x541aa6[_0x241200(0x205)] = "");
        }, 0x7d0),
        getUsermsg(),
        getNotSeenMessages();
    }
  } catch (_0x52f4ff) {
    _0x52f4ff && console[_0x1b5e22(0x21a)](_0x52f4ff);
  }
});
const notificationb = document[_0x5c90f4(0x167)](_0x5c90f4(0x1fd)),
  notification_msg = document["getElementById"](_0x5c90f4(0x221)),
  notification_overlay = document[_0x5c90f4(0x167)](_0x5c90f4(0x212));
notificationb[_0x5c90f4(0x16d)]("click", () => {
  const _0x35a6b1 = _0x5c90f4;
  notification_overlay[_0x35a6b1(0x238)][_0x35a6b1(0x166)]("active"),
    notification_msg["classList"][_0x35a6b1(0x166)](_0x35a6b1(0x23d));
}),
  notification_overlay[_0x5c90f4(0x16d)](_0x5c90f4(0x195), () => {
    const _0x477a79 = _0x5c90f4;
    (notification_overlay["style"][_0x477a79(0x18b)] = "0"),
      (notification_msg[_0x477a79(0x222)][_0x477a79(0x18b)] = "0"),
      setTimeout(() => {
        const _0x200c18 = _0x477a79;
        notification_overlay[_0x200c18(0x238)][_0x200c18(0x197)](
          _0x200c18(0x23d)
        ),
          notification_msg[_0x200c18(0x238)][_0x200c18(0x197)](
            _0x200c18(0x23d)
          ),
          (notification_overlay[_0x200c18(0x222)][_0x200c18(0x18b)] = ""),
          (notification_msg[_0x200c18(0x222)]["opacity"] = "");
      }, 0x258);
  });
async function getUsermsg() {
  const _0x1b728f = _0x5c90f4,
    _0x12ef20 = cryptoServiveqwertypoiu[_0x1b728f(0x20b)](_0x1b728f(0x245));
  try {
    const _0x56d4fb = await fetch(_0x1b728f(0x220), {
        method: _0x1b728f(0x1c8),
        headers: { "Content-Type": _0x1b728f(0x231) },
        body: JSON[_0x1b728f(0x1cf)]({ token: _0x12ef20 }),
      }),
      _0x2a91f1 = await _0x56d4fb[_0x1b728f(0x1b5)](),
      _0x29379c = document[_0x1b728f(0x167)](_0x1b728f(0x221));
    (_0x29379c[_0x1b728f(0x1f8)] = ""),
      _0x2a91f1[_0x1b728f(0x204)]((_0x39fae6) => {
        const _0xa5bb80 = _0x1b728f,
          _0x1f58ae = new Date(_0x39fae6[_0xa5bb80(0x20f)]),
          _0x260b5b = _0x1f58ae[_0xa5bb80(0x213)](),
          _0x43f071 = String(_0x1f58ae[_0xa5bb80(0x252)]())["padStart"](
            0x2,
            "0"
          ),
          _0x22d563 = String(_0x1f58ae[_0xa5bb80(0x243)]())[_0xa5bb80(0x1ba)](
            0x2,
            "0"
          ),
          _0x72ee4d = String(_0x1f58ae[_0xa5bb80(0x1d9)]())[_0xa5bb80(0x1ba)](
            0x2,
            "0"
          ),
          _0x4d31b0 = String(_0x1f58ae[_0xa5bb80(0x218)]())[_0xa5bb80(0x1ba)](
            0x2,
            "0"
          ),
          _0xde9a4a =
            "\x20" +
            _0x43f071 +
            "-" +
            _0x22d563 +
            "-" +
            _0x260b5b +
            "\x20" +
            _0x72ee4d +
            ":" +
            _0x4d31b0;
        let _0xdb4b6d = _0xa5bb80(0x1cb);
        if (_0x39fae6[_0xa5bb80(0x227)] === _0xa5bb80(0x17f))
          _0xdb4b6d = _0xa5bb80(0x1c4);
        if (_0x39fae6["type"] === _0xa5bb80(0x235))
          _0xdb4b6d = _0xa5bb80(0x22e);
        const _0x4f7d58 = document[_0xa5bb80(0x1ee)]("p");
        (_0x4f7d58["id"] = _0xa5bb80(0x1e8)),
          (_0x4f7d58["style"][_0xa5bb80(0x1d3)] = _0xdb4b6d),
          (_0x4f7d58["style"][_0xa5bb80(0x18f)] = "14px"),
          (_0x4f7d58[_0xa5bb80(0x222)]["marginBottom"] = _0xa5bb80(0x1f4)),
          (_0x4f7d58[_0xa5bb80(0x1f8)] =
            _0xa5bb80(0x1bc) +
            _0x39fae6["message"] +
            _0xa5bb80(0x176) +
            _0xde9a4a +
            _0xa5bb80(0x1bb) +
            (_0x39fae6[_0xa5bb80(0x208)] === _0xa5bb80(0x1e2)
              ? "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22check-btn\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22" +
                _0x39fae6["id"] +
                "\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22checkUsermsg(" +
                _0x39fae6["id"] +
                _0xa5bb80(0x174)
              : "") +
            "\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<button\x0a\x20\x20\x20\x20\x20\x20\x20\x20class\x20=\x20\x22del-msg\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22deleteUsermsg(" +
            _0x39fae6["id"] +
            _0xa5bb80(0x171)),
          _0x29379c[_0xa5bb80(0x1cc)](_0x4f7d58);
      }),
      console["log"](_0x2a91f1);
  } catch (_0xa4c8f2) {
    _0xa4c8f2 && console[_0x1b728f(0x21a)](_0xa4c8f2);
  }
}
document["addEventListener"](_0x5c90f4(0x182), () => {
  getUsermsg();
});
async function checkUsermsg(_0x44ad56) {
  const _0x2aaeb3 = _0x5c90f4,
    _0x320061 = document[_0x2aaeb3(0x167)](_0x2aaeb3(0x1a4)),
    _0x13d26b = await fetch(_0x2aaeb3(0x255), {
      method: _0x2aaeb3(0x1c8),
      headers: { "Content-Type": _0x2aaeb3(0x231) },
      body: JSON["stringify"]({ id: _0x44ad56 }),
    });
  if (_0x13d26b["ok"]) {
    getNotSeenMessages();
    const _0x20f0b6 = document[_0x2aaeb3(0x167)]("" + _0x44ad56);
    _0x20f0b6[_0x2aaeb3(0x222)][_0x2aaeb3(0x181)] = _0x2aaeb3(0x1f1);
  }
}
async function deleteUsermsg(_0x395d5e, _0x593fee) {
  const _0x89e297 = _0x5c90f4,
    _0x56f710 = await fetch(_0x89e297(0x188), {
      method: _0x89e297(0x1c8),
      headers: { "Content-Type": _0x89e297(0x231) },
      body: JSON["stringify"]({ id: _0x395d5e }),
    });
  _0x56f710["ok"]
    ? (getNotSeenMessages(),
      _0x593fee[_0x89e297(0x1dd)]("p")[_0x89e297(0x197)]())
    : console[_0x89e297(0x201)](_0x89e297(0x250));
}
async function getNotSeenMessages() {
  const _0x2d257f = _0x5c90f4,
    _0x4fdd3f = document[_0x2d257f(0x167)](_0x2d257f(0x234)),
    _0xf74d3e = cryptoServiveqwertypoiu[_0x2d257f(0x20b)]("accessToken"),
    _0x2c0713 = await fetch(_0x2d257f(0x247), {
      method: _0x2d257f(0x1c8),
      headers: { "Content-Type": _0x2d257f(0x231) },
      body: JSON[_0x2d257f(0x1cf)]({ token: _0xf74d3e }),
    }),
    _0x465858 = await _0x2c0713[_0x2d257f(0x1b5)](),
    _0xe63f7e = _0x465858["number"];
  _0xe63f7e
    ? (_0x4fdd3f[_0x2d257f(0x1f8)] = _0xe63f7e)
    : (_0x4fdd3f[_0x2d257f(0x1f8)] = 0x0);
}
getNotSeenMessages();
async function loadTransactions() {
  const _0xaf5a2b = _0x5c90f4;
  try {
    const _0x320258 = sessionStorage["getItem"](_0xaf5a2b(0x245));
    if (!_0x320258) {
      console["warn"](_0xaf5a2b(0x1fe));
      return;
    }
    const _0x4f7ec3 = await fetch(_0xaf5a2b(0x203), {
      method: _0xaf5a2b(0x1ad),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer\x20" + _0x320258,
      },
    });
    if (!_0x4f7ec3["ok"])
      throw new Error(_0xaf5a2b(0x246) + _0x4f7ec3[_0xaf5a2b(0x20c)]);
    const _0x422b83 = await _0x4f7ec3["json"]();
    console[_0xaf5a2b(0x21a)](_0xaf5a2b(0x1dc), _0x422b83);
    const _0x295beb = document[_0xaf5a2b(0x168)]("#transactions\x20tbody");
    (_0x295beb[_0xaf5a2b(0x1f8)] = ""),
      _0x422b83[_0xaf5a2b(0x204)]((_0x47ad24) => {
        const _0xb28cbb = _0xaf5a2b,
          _0x4900c5 = document[_0xb28cbb(0x1ee)]("tr"),
          _0x33db3d = document[_0xb28cbb(0x1ee)]("td"),
          _0x3637bc = new Date(_0x47ad24[_0xb28cbb(0x20f)]);
        (_0x33db3d[_0xb28cbb(0x22d)] = _0x3637bc[_0xb28cbb(0x1e5)](
          _0xb28cbb(0x1da),
          {
            month: _0xb28cbb(0x24a),
            day: _0xb28cbb(0x1ea),
            year: _0xb28cbb(0x1ea),
          }
        )),
          _0x4900c5[_0xb28cbb(0x1cc)](_0x33db3d);
        const _0x507779 = document[_0xb28cbb(0x1ee)]("td");
        (_0x507779[_0xb28cbb(0x22d)] = _0x47ad24["type"]),
          _0x4900c5[_0xb28cbb(0x1cc)](_0x507779);
        const _0x35a764 = document[_0xb28cbb(0x1ee)]("td");
        (_0x35a764[_0xb28cbb(0x22d)] =
          (_0x47ad24[_0xb28cbb(0x227)] === _0xb28cbb(0x1f3) ? "-" : "+") +
          _0x47ad24[_0xb28cbb(0x1e1)] +
          _0xb28cbb(0x19e)),
          (_0x35a764[_0xb28cbb(0x239)] =
            _0x47ad24["type"] === _0xb28cbb(0x1f3)
              ? _0xb28cbb(0x1a6)
              : "transaction-positive"),
          _0x4900c5[_0xb28cbb(0x1cc)](_0x35a764);
        const _0x3f7641 = document["createElement"]("td"),
          _0x5c4608 = document["createElement"](_0xb28cbb(0x236));
        (_0x5c4608["className"] =
          _0xb28cbb(0x1d1) +
          (_0x47ad24[_0xb28cbb(0x20c)] === _0xb28cbb(0x21b)
            ? _0xb28cbb(0x1fa)
            : _0x47ad24[_0xb28cbb(0x20c)] === _0xb28cbb(0x1ab)
            ? "status-completed"
            : _0xb28cbb(0x1e7))),
          (_0x5c4608[_0xb28cbb(0x22d)] =
            _0x47ad24["status"][_0xb28cbb(0x22b)](0x0)[_0xb28cbb(0x1ef)]() +
            _0x47ad24[_0xb28cbb(0x20c)][_0xb28cbb(0x251)](0x1)),
          _0x3f7641[_0xb28cbb(0x1cc)](_0x5c4608),
          _0x4900c5[_0xb28cbb(0x1cc)](_0x3f7641),
          _0x295beb[_0xb28cbb(0x1cc)](_0x4900c5);
      });
  } catch (_0x2a8061) {
    console[_0xaf5a2b(0x201)](
      "❌\x20Error\x20fetching\x20transactions:",
      _0x2a8061
    );
  }
}
window[_0x5c90f4(0x16d)]("DOMContentLoaded", loadTransactions);
