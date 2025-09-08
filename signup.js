const _0x48e0ba = _0xace1;
(function (_0x1b2826, _0x55efae) {
  const _0x1a9f41 = _0xace1,
    _0x5dfb91 = _0x1b2826();
  while (!![]) {
    try {
      const _0x4d4eb4 =
        (-parseInt(_0x1a9f41(0x1c0)) / 0x1) *
          (-parseInt(_0x1a9f41(0x1c2)) / 0x2) +
        parseInt(_0x1a9f41(0x1e3)) / 0x3 +
        (parseInt(_0x1a9f41(0x1c9)) / 0x4) *
          (-parseInt(_0x1a9f41(0x1df)) / 0x5) +
        (parseInt(_0x1a9f41(0x1d7)) / 0x6) *
          (-parseInt(_0x1a9f41(0x1bd)) / 0x7) +
        (-parseInt(_0x1a9f41(0x1bc)) / 0x8) *
          (parseInt(_0x1a9f41(0x1dc)) / 0x9) +
        -parseInt(_0x1a9f41(0x1d8)) / 0xa +
        (-parseInt(_0x1a9f41(0x1bb)) / 0xb) *
          (-parseInt(_0x1a9f41(0x1bf)) / 0xc);
      if (_0x4d4eb4 === _0x55efae) break;
      else _0x5dfb91["push"](_0x5dfb91["shift"]());
    } catch (_0x13df9c) {
      _0x5dfb91["push"](_0x5dfb91["shift"]());
    }
  }
})(_0x3eb1, 0xcadc2);
const themeToggle = document[_0x48e0ba(0x1d4)](_0x48e0ba(0x1e0));
themeToggle &&
  themeToggle[_0x48e0ba(0x1c7)](_0x48e0ba(0x1c1), () => {
    const _0xff4d7f = _0x48e0ba,
      _0x4e3404 =
        document[_0xff4d7f(0x1e6)][_0xff4d7f(0x1cb)](_0xff4d7f(0x1d3)) ===
        "dark";
    _0x4e3404
      ? (document[_0xff4d7f(0x1e6)][_0xff4d7f(0x1d5)](_0xff4d7f(0x1d3)),
        (themeToggle[_0xff4d7f(0x1dd)] = "🌙"),
        localStorage["setItem"](_0xff4d7f(0x1de), _0xff4d7f(0x1db)))
      : (document[_0xff4d7f(0x1e6)]["setAttribute"](
          _0xff4d7f(0x1d3),
          _0xff4d7f(0x1ce)
        ),
        (themeToggle[_0xff4d7f(0x1dd)] = "☀️"),
        localStorage[_0xff4d7f(0x1ba)](_0xff4d7f(0x1de), "dark"));
  });
function _0xace1(_0x3bbeb6, _0x25b81d) {
  const _0x3eb1da = _0x3eb1();
  return (
    (_0xace1 = function (_0xace10f, _0x56df97) {
      _0xace10f = _0xace10f - 0x1b6;
      let _0x21540c = _0x3eb1da[_0xace10f];
      return _0x21540c;
    }),
    _0xace1(_0x3bbeb6, _0x25b81d)
  );
}
const signupForm = document[_0x48e0ba(0x1d4)]("signupForm"),
  messageElement = document[_0x48e0ba(0x1d4)]("message");
function _0x3eb1() {
  const _0x772eb0 = [
    "72oRDeSx",
    "click",
    "10484edxXhb",
    "username",
    "className",
    "location",
    "preventDefault",
    "addEventListener",
    "success",
    "132GkzQbv",
    "style",
    "getAttribute",
    "innerHTML",
    "true",
    "dark",
    "length",
    "POST",
    "https://backendroutes-lcpt.onrender.com/signup",
    "email",
    "data-theme",
    "getElementById",
    "removeAttribute",
    "message",
    "2742BKIuCK",
    "8058920LdvKny",
    "application/json",
    "json",
    "light",
    "5283YOZObD",
    "textContent",
    "theme",
    "203960dgfiSC",
    "themeToggle",
    "href",
    "display",
    "314595gVBMAn",
    "Something\x20went\x20wrong",
    "terms-overlay",
    "documentElement",
    "https://google.com",
    "flex",
    "none",
    "value",
    "setItem",
    "22YcLHwM",
    "19568VNdjGi",
    "9457apJgkl",
    "error",
    "27323172ONvBwp",
  ];
  _0x3eb1 = function () {
    return _0x772eb0;
  };
  return _0x3eb1();
}
(messageElement[_0x48e0ba(0x1cc)] = ""),
  signupForm[_0x48e0ba(0x1c7)]("submit", async function (_0x4ac00a) {
    const _0x186cc6 = _0x48e0ba;
    _0x4ac00a[_0x186cc6(0x1c6)]();
    const _0x547d05 = document[_0x186cc6(0x1d4)](_0x186cc6(0x1c3))[
        _0x186cc6(0x1b9)
      ],
      _0x593a9e = document["getElementById"]("password")[_0x186cc6(0x1b9)],
      _0x80ebf = document["getElementById"](_0x186cc6(0x1d2))[_0x186cc6(0x1b9)];
    if (!_0x547d05 || !_0x593a9e) {
      showMessage(
        "Please\x20fill\x20in\x20all\x20fields.",
        _0x186cc6(0x1be),
        messageElement
      );
      return;
    }
    if (_0x593a9e[_0x186cc6(0x1cf)] < 0x6) {
      showMessage(
        "Password\x20must\x20be\x20at\x20least\x206\x20characters.",
        _0x186cc6(0x1be),
        messageElement
      );
      return;
    }
    try {
      const _0x560b9b = await fetch(_0x186cc6(0x1d1), {
          method: _0x186cc6(0x1d0),
          headers: { "Content-Type": _0x186cc6(0x1d9) },
          body: JSON["stringify"]({
            name: _0x547d05,
            password: _0x593a9e,
            email: _0x80ebf,
          }),
        }),
        _0x5794d2 = await _0x560b9b[_0x186cc6(0x1da)]();
      _0x560b9b["ok"]
        ? (showMessage(
            _0x5794d2[_0x186cc6(0x1d6)],
            _0x186cc6(0x1c8),
            messageElement
          ),
          setTimeout(() => {
            const _0x2aeed0 = _0x186cc6;
            document["getElementById"](_0x2aeed0(0x1e5))[_0x2aeed0(0x1ca)][
              _0x2aeed0(0x1e2)
            ] = _0x2aeed0(0x1b7);
          }, 0x3e8),
          document[_0x186cc6(0x1d4)]("accept-terms")[_0x186cc6(0x1c7)](
            _0x186cc6(0x1c1),
            () => {
              const _0x58f17e = _0x186cc6;
              localStorage[_0x58f17e(0x1ba)]("acceptedTerms", _0x58f17e(0x1cd)),
                (document[_0x58f17e(0x1d4)](_0x58f17e(0x1e5))[_0x58f17e(0x1ca)][
                  _0x58f17e(0x1e2)
                ] = _0x58f17e(0x1b8)),
                showMessage("", "", messageElement),
                setTimeout(() => {});
            }
          ),
          document[_0x186cc6(0x1d4)]("decline-terms")["addEventListener"](
            _0x186cc6(0x1c1),
            () => {
              const _0xfd75b3 = _0x186cc6;
              window[_0xfd75b3(0x1c5)][_0xfd75b3(0x1e1)] = _0xfd75b3(0x1b6);
            }
          ),
          signupForm["reset"]())
        : showMessage(_0x5794d2[_0x186cc6(0x1be)], "error", messageElement);
    } catch (_0xcdcf0f) {
      showMessage(_0x186cc6(0x1e4), _0x186cc6(0x1be), messageElement);
    }
  });
function showMessage(_0x290c1b, _0x28dbb8, _0x54205e) {
  const _0x3b1c7b = _0x48e0ba;
  (_0x54205e[_0x3b1c7b(0x1dd)] = _0x290c1b),
    (_0x54205e[_0x3b1c7b(0x1c4)] = _0x28dbb8);
}
