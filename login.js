const _0x108cdd = _0xd0dc;
(function (_0x39f925, _0x2f8128) {
  const _0x3ad57f = _0xd0dc,
    _0x3f4fce = _0x39f925();
  while (!![]) {
    try {
      const _0x5a32dd =
        -parseInt(_0x3ad57f(0x76)) / 0x1 +
        (parseInt(_0x3ad57f(0x89)) / 0x2) * (-parseInt(_0x3ad57f(0x80)) / 0x3) +
        parseInt(_0x3ad57f(0x83)) / 0x4 +
        -parseInt(_0x3ad57f(0x8f)) / 0x5 +
        parseInt(_0x3ad57f(0x94)) / 0x6 +
        parseInt(_0x3ad57f(0x9a)) / 0x7 +
        parseInt(_0x3ad57f(0x95)) / 0x8;
      if (_0x5a32dd === _0x2f8128) break;
      else _0x3f4fce["push"](_0x3f4fce["shift"]());
    } catch (_0x51b62e) {
      _0x3f4fce["push"](_0x3f4fce["shift"]());
    }
  }
})(_0xf4e5, 0x70f17);
const themeToggle = document[_0x108cdd(0x85)]("themeToggle");
function _0xf4e5() {
  const _0x52dfce = [
    "63506SOWDPa",
    "username",
    "location",
    "submit",
    "success",
    "click",
    "2087235dQNbni",
    "error",
    "documentElement",
    "stringify",
    "json",
    "2446530CxGMgD",
    "7784080UNPwfH",
    "Login\x20successful!\x20Redirecting...",
    "loginMessage",
    "addEventListener",
    "https://backendroutes-lcpt.onrender.com/login",
    "1662010zXGmqD",
    "setItem",
    "184132SLNrEM",
    "accessToken",
    "dark",
    "textContent",
    "setAttribute",
    "className",
    "dashboard.html",
    "DOMContentLoaded",
    "value",
    "loginForm",
    "87VnibBf",
    "href",
    "refreshToken",
    "1467344LDRips",
    "data-theme",
    "getElementById",
    "theme",
    "password",
    "Login\x20failed.",
  ];
  _0xf4e5 = function () {
    return _0x52dfce;
  };
  return _0xf4e5();
}
themeToggle &&
  themeToggle[_0x108cdd(0x98)](_0x108cdd(0x8e), () => {
    const _0x2b0b98 = _0x108cdd,
      _0x8a03f8 =
        document[_0x2b0b98(0x91)]["getAttribute"](_0x2b0b98(0x84)) === "dark";
    _0x8a03f8
      ? (document[_0x2b0b98(0x91)]["removeAttribute"](_0x2b0b98(0x84)),
        (themeToggle[_0x2b0b98(0x79)] = "🌙"),
        localStorage[_0x2b0b98(0x9b)](_0x2b0b98(0x86), "light"))
      : (document[_0x2b0b98(0x91)][_0x2b0b98(0x7a)](
          _0x2b0b98(0x84),
          _0x2b0b98(0x78)
        ),
        (themeToggle[_0x2b0b98(0x79)] = "☀️"),
        localStorage[_0x2b0b98(0x9b)](_0x2b0b98(0x86), _0x2b0b98(0x78)));
  });
document[_0x108cdd(0x98)](_0x108cdd(0x7d), () => {
  const _0x2516e1 = _0x108cdd,
    _0x2c0088 = document[_0x2516e1(0x85)](_0x2516e1(0x97));
  if (_0x2c0088) _0x2c0088[_0x2516e1(0x79)] = "";
  const _0x51366b = document[_0x2516e1(0x85)](_0x2516e1(0x7f));
  _0x51366b &&
    _0x51366b[_0x2516e1(0x98)](_0x2516e1(0x8c), async (_0x5df462) => {
      const _0x38cc98 = _0x2516e1;
      _0x5df462["preventDefault"]();
      const _0x3f729b = document["getElementById"](_0x38cc98(0x8a))[
          _0x38cc98(0x7e)
        ],
        _0x579ca7 = document[_0x38cc98(0x85)](_0x38cc98(0x87))[_0x38cc98(0x7e)];
      try {
        const _0x54db83 = await fetch(_0x38cc98(0x99), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON[_0x38cc98(0x92)]({
              name: _0x3f729b,
              password: _0x579ca7,
            }),
          }),
          _0x39df23 = await _0x54db83[_0x38cc98(0x93)]();
        if (!_0x54db83["ok"]) {
          showMessage(
            _0x39df23[_0x38cc98(0x90)] || _0x38cc98(0x88),
            _0x38cc98(0x90),
            _0x2c0088
          );
          return;
        }
        sessionStorage[_0x38cc98(0x9b)](
          _0x38cc98(0x77),
          _0x39df23[_0x38cc98(0x77)]
        ),
          sessionStorage["setItem"](
            _0x38cc98(0x82),
            _0x39df23[_0x38cc98(0x82)]
          ),
          showMessage(_0x38cc98(0x96), _0x38cc98(0x8d), _0x2c0088),
          (_0x2c0088[_0x38cc98(0x7b)] = _0x38cc98(0x8d)),
          setTimeout(() => {
            const _0x177111 = _0x38cc98;
            window[_0x177111(0x8b)][_0x177111(0x81)] = _0x177111(0x7c);
          }, 0x640);
      } catch (_0x269979) {
        (_0x2c0088[_0x38cc98(0x79)] =
          "Login\x20failed.\x20Check\x20username/password."),
          (_0x2c0088["className"] = "error"),
          console[_0x38cc98(0x90)](_0x269979);
      }
    });
});
function _0xd0dc(_0x819b7c, _0x1e3057) {
  const _0xf4e5cf = _0xf4e5();
  return (
    (_0xd0dc = function (_0xd0dcdf, _0x9785e) {
      _0xd0dcdf = _0xd0dcdf - 0x76;
      let _0x4ed156 = _0xf4e5cf[_0xd0dcdf];
      return _0x4ed156;
    }),
    _0xd0dc(_0x819b7c, _0x1e3057)
  );
}
function showMessage(_0x25fed7, _0x864623, _0x189191, _0x100f89 = 0x5dc) {
  const _0x352d9e = _0x108cdd;
  (_0x189191[_0x352d9e(0x79)] = _0x25fed7),
    (_0x189191[_0x352d9e(0x7b)] = _0x864623),
    setTimeout(() => {
      const _0x2762f7 = _0x352d9e;
      (_0x189191["textContent"] = ""), (_0x189191[_0x2762f7(0x7b)] = "");
    }, _0x100f89);
}
