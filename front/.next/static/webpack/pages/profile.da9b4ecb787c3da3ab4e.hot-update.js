webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/DesktopLayout */ "./components/layout/DesktopLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();














var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};

var Profile = function Profile() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      followersLimit = _useState[0],
      setfollowersLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      followingsLimit = _useState2[0],
      setfollowingsLimit = _useState2[1]; //data와 error가 둘다 없으면 로딩중


  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])("http://localhost:3065/user/loadFollowers?limit=".concat(followersLimit), fetcher),
      followersData = _useSWR.data,
      followersError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])("http://localhost:3065/user/loadFollowings?limit=".concat(followingsLimit), fetcher),
      followingsData = _useSWR2.data,
      followingsError = _useSWR2.error;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      alert('로그인 해주세요');
      return router.push('/');
    }
  }, [me === null || me === void 0 ? void 0 : me.id]);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setfollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setfollowersLimit(function (prev) {
      return prev + 3;
    });
  }, []);

  if (!me) {
    return '내 정보 로딩중 ...';
  }

  if (followersError || followingsError) {
    console.error(followersError || followingsError);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: "\uD314\uB85C\uC789/\uD314\uB85C\uC6CC \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 16
    }, _this);
  }

  var onClickEditProfile = function onClickEditProfile() {
    console.log('done');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: me.nickname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        style: {
          display: "flex",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
          src: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Image"], {
            src: "https://joeschmoe.io/api/v1/random"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 30
          }, _this),
          size: 128
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          style: {
            marginLeft: "30px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
            children: me.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: me.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Button, {
          type: "text",
          shape: "round",
          style: {
            display: "block",
            margin: "10px 0",
            height: "50px",
            fontSize: "20px"
          },
          onClick: onClickEditProfile,
          children: "\xA0Edit profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        style: {
          margin: "30px 20px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
          children: [followingsData.length, " following ", followersData ? followersData.length : 0, " followers"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        header: "\uD314\uB85C\uC789 \uBAA9\uB85D",
        data: followingsData,
        onClickMore: loadMoreFollowings,
        loading: !followingsData && !followingsError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
        data: followersData,
        onClickMore: loadMoreFollowers,
        loading: !followersData && !followersError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Profile, "an/t76XKhwJ8pDqypVlubD7bXFg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_6__["default"], swr__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = Profile;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiZm9sbG93ZXJzTGltaXQiLCJzZXRmb2xsb3dlcnNMaW1pdCIsImZvbGxvd2luZ3NMaW1pdCIsInNldGZvbGxvd2luZ3NMaW1pdCIsInVzZVNXUiIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlcnNFcnJvciIsImVycm9yIiwiZm9sbG93aW5nc0RhdGEiLCJmb2xsb3dpbmdzRXJyb3IiLCJ1c2VFZmZlY3QiLCJpZCIsImFsZXJ0IiwicHVzaCIsImxvYWRNb3JlRm9sbG93aW5ncyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93ZXJzIiwiY29uc29sZSIsIm9uQ2xpY2tFZGl0UHJvZmlsZSIsImxvZyIsIm5pY2tuYW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiZW1haWwiLCJtYXJnaW4iLCJoZWlnaHQiLCJmb250U2l6ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxTQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZTtBQUFFRyxtQkFBZSxFQUFFO0FBQW5CLEdBQWYsRUFBeUNDLElBQXpDLENBQThDLFVBQUNDLE1BQUQ7QUFBQSxXQUFVQSxNQUFNLENBQUNDLElBQWpCO0FB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QkFBOUQ7QUFBaUYsZUFBTyxFQUFFLENBQUNaLGFBQUQsSUFBa0IsQ0FBQ0M7QUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKQTtBQUFBLGtCQURKO0FBeUJILENBL0REOztHQUFNaEIsTztVQUNhRSxxRCxFQUNFRSx1RCxFQUNGQyx1RCxFQUt5Q1MsMkMsRUFDRUEsMkM7OztLQVR4RGQsTzs7QUFnRlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZGE5YjRlY2I3ODdjM2RhM2FiNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IERlc2t0b3BMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IEF2YXRhciwgSW1hZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZX0pLnRoZW4oKHJlc3VsdCk9PnJlc3VsdC5kYXRhKTtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgWyBmb2xsb3dlcnNMaW1pdCwgc2V0Zm9sbG93ZXJzTGltaXQgXSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgWyBmb2xsb3dpbmdzTGltaXQsIHNldGZvbGxvd2luZ3NMaW1pdCBdID0gdXNlU3RhdGUoMyk7XHJcbiAgICAvL2RhdGHsmYAgZXJyb3LqsIAg65GY64ukIOyXhuycvOuptCDroZzrlKnspJFcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEgLCBlcnJvcjogZm9sbG93ZXJzRXJyb3IgfSA9IHVzZVNXUihgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9hZEZvbGxvd2Vycz9saW1pdD0ke2ZvbGxvd2Vyc0xpbWl0fWAsIGZldGNoZXIpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dpbmdzRGF0YSAsIGVycm9yOiBmb2xsb3dpbmdzRXJyb3IgfSA9IHVzZVNXUihgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9hZEZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCwgZmV0Y2hlcik7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmICghKG1lICYmIG1lLmlkKSkge1xyXG4gICAgICAgICAgICBhbGVydCgn66Gc6re47J24IO2VtOyjvOyEuOyalCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWU/LmlkXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dpbmdzID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRmb2xsb3dpbmdzTGltaXQoKHByZXYpPT5wcmV2KzMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb3JlRm9sbG93ZXJzID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRmb2xsb3dlcnNMaW1pdCgocHJldik9PnByZXYrMyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKCFtZSkge1xyXG4gICAgICAgIHJldHVybiAn64K0IOygleuztCDroZzrlKnspJEgLi4uJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGZvbGxvd2Vyc0Vycm9yIHx8IGZvbGxvd2luZ3NFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZm9sbG93ZXJzRXJyb3IgfHwgZm9sbG93aW5nc0Vycm9yKTtcclxuICAgICAgICByZXR1cm4gPGRpdj7tjJTroZzsnokv7YyU66Gc7JuMIOuhnOuUqSDspJEg7JeQ65+s6rCAIOuwnOyDne2VqeuLiOuLpC48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0VkaXRQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb25lJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnttZS5uaWNrbmFtZX08L3RpdGxlPiAgICBcclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxEZXNrdG9wTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17PEltYWdlIHNyYz1cImh0dHBzOi8vam9lc2NobW9lLmlvL2FwaS92MS9yYW5kb21cIi8+fSBzaXplPXsxMjh9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjMwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57bWUubmlja25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bWUuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCAwXCIsIGhlaWdodDogXCI1MHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IG9uQ2xpY2s9e29uQ2xpY2tFZGl0UHJvZmlsZX0+Jm5ic3A7RWRpdCBwcm9maWxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiBcIjMwcHggMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8cD57Zm9sbG93aW5nc0RhdGEubGVuZ3RofSBmb2xsb3dpbmcge2ZvbGxvd2Vyc0RhdGE/IGZvbGxvd2Vyc0RhdGEubGVuZ3RoIDogMH0gZm9sbG93ZXJzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8Tmlja25hbWVFZGl0Rm9ybSAvPlxyXG4gICAgICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnokg66qp66GdXCIgZGF0YT17Zm9sbG93aW5nc0RhdGF9IG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2luZ3N9IGxvYWRpbmc9eyFmb2xsb3dpbmdzRGF0YSAmJiAhZm9sbG93aW5nc0Vycm9yfS8+XHJcbiAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjCDrqqnroZ1cIiBkYXRhPXtmb2xsb3dlcnNEYXRhfSBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dlcnN9IGxvYWRpbmc9eyFmb2xsb3dlcnNEYXRhICYmICFmb2xsb3dlcnNFcnJvcn0vPlxyXG4gICAgICAgIDwvRGVza3RvcExheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCk9PntcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7IC8vUkVRVUVTVOqwgCBTVUNDRVNT6rCAIOuQoOuVjOq5jOyngCDquLDri6TroKTspIDri6QuXHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==