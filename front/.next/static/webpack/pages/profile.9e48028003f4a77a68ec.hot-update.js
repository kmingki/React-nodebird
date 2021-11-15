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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "text",
          shape: "round",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiZm9sbG93ZXJzTGltaXQiLCJzZXRmb2xsb3dlcnNMaW1pdCIsImZvbGxvd2luZ3NMaW1pdCIsInNldGZvbGxvd2luZ3NMaW1pdCIsInVzZVNXUiIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlcnNFcnJvciIsImVycm9yIiwiZm9sbG93aW5nc0RhdGEiLCJmb2xsb3dpbmdzRXJyb3IiLCJ1c2VFZmZlY3QiLCJpZCIsImFsZXJ0IiwicHVzaCIsImxvYWRNb3JlRm9sbG93aW5ncyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93ZXJzIiwiY29uc29sZSIsIm9uQ2xpY2tFZGl0UHJvZmlsZSIsImxvZyIsIm5pY2tuYW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiZW1haWwiLCJtYXJnaW4iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWU7QUFBRUcsbUJBQWUsRUFBRTtBQUFuQixHQUFmLEVBQXlDQyxJQUF6QyxDQUE4QyxVQUFDQyxNQUFEO0FBQUEsV0FBVUEsTUFBTSxDQUFDQyxJQUFqQjtBQUFBLEdBQTlDLENBQVQ7QUFBQSxD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aEIsTztVQUNhRSxxRCxFQUNFRSx1RCxFQUNGQyx1RCxFQUt5Q1MsMkMsRUFDRUEsMkM7OztLQVR4RGQsTzs7QUFnRlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuOWU0ODAyODAwM2Y0YTc3YTY4ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IERlc2t0b3BMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IEF2YXRhciwgSW1hZ2UsIEJ1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWV9KS50aGVuKChyZXN1bHQpPT5yZXN1bHQuZGF0YSk7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFsgZm9sbG93ZXJzTGltaXQsIHNldGZvbGxvd2Vyc0xpbWl0IF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIGNvbnN0IFsgZm9sbG93aW5nc0xpbWl0LCBzZXRmb2xsb3dpbmdzTGltaXQgXSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgLy9kYXRh7JmAIGVycm9y6rCAIOuRmOuLpCDsl4bsnLzrqbQg66Gc65Sp7KSRXHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dlcnNEYXRhICwgZXJyb3I6IGZvbGxvd2Vyc0Vycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2xvYWRGb2xsb3dlcnM/bGltaXQ9JHtmb2xsb3dlcnNMaW1pdH1gLCBmZXRjaGVyKTtcclxuICAgIGNvbnN0IHsgZGF0YTogZm9sbG93aW5nc0RhdGEgLCBlcnJvcjogZm9sbG93aW5nc0Vycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2xvYWRGb2xsb3dpbmdzP2xpbWl0PSR7Zm9sbG93aW5nc0xpbWl0fWAsIGZldGNoZXIpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ+uhnOq3uOyduCDtlbTso7zshLjsmpQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lPy5pZF0pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb3JlRm9sbG93aW5ncyA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0Zm9sbG93aW5nc0xpbWl0KChwcmV2KT0+cHJldiszKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2VycyA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0Zm9sbG93ZXJzTGltaXQoKHByZXYpPT5wcmV2KzMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmICghbWUpIHtcclxuICAgICAgICByZXR1cm4gJ+uCtCDsoJXrs7Qg66Gc65Sp7KSRIC4uLic7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChmb2xsb3dlcnNFcnJvciB8fCBmb2xsb3dpbmdzRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGZvbGxvd2Vyc0Vycm9yIHx8IGZvbGxvd2luZ3NFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+7YyU66Gc7J6JL+2MlOuhnOybjCDroZzrlKkg7KSRIOyXkOufrOqwgCDrsJzsg53tlanri4jri6QuPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tFZGl0UHJvZmlsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57bWUubmlja25hbWV9PC90aXRsZT4gICAgXHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8RGVza3RvcExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9ezxJbWFnZSBzcmM9XCJodHRwczovL2pvZXNjaG1vZS5pby9hcGkvdjEvcmFuZG9tXCIvPn0gc2l6ZT17MTI4fS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDogXCIzMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e21lLm5pY2tuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e21lLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBvbkNsaWNrPXtvbkNsaWNrRWRpdFByb2ZpbGV9PiZuYnNwO0VkaXQgcHJvZmlsZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogXCIzMHB4IDIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPHA+e2ZvbGxvd2luZ3NEYXRhLmxlbmd0aH0gZm9sbG93aW5nIHtmb2xsb3dlcnNEYXRhPyBmb2xsb3dlcnNEYXRhLmxlbmd0aCA6IDB9IGZvbGxvd2VyczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPE5pY2tuYW1lRWRpdEZvcm0gLz5cclxuICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JIOuqqeuhnVwiIGRhdGE9e2ZvbGxvd2luZ3NEYXRhfSBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dpbmdzfSBsb2FkaW5nPXshZm9sbG93aW5nc0RhdGEgJiYgIWZvbGxvd2luZ3NFcnJvcn0vPlxyXG4gICAgICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsm4wg66qp66GdXCIgZGF0YT17Zm9sbG93ZXJzRGF0YX0gb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93ZXJzfSBsb2FkaW5nPXshZm9sbG93ZXJzRGF0YSAmJiAhZm9sbG93ZXJzRXJyb3J9Lz5cclxuICAgICAgICA8L0Rlc2t0b3BMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpPT57XHJcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcT8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpOyAvL1JFUVVFU1TqsIAgU1VDQ0VTU+qwgCDrkKDrlYzquYzsp4Ag6riw64uk66Ck7KSA64ukLlxyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=