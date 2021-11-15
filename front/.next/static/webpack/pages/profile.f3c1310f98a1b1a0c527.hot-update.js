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
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
            src: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Image"], {
              src: "https://joeschmoe.io/api/v1/random"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 34
            }, _this),
            size: 128
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            style: {
              display: "inline-block"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
              children: me.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
              children: me.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          shape: "round",
          onClick: onClickEditProfile,
          children: "Edit profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        style: {
          display: "flex",
          margin: "20px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
          children: [followingsData ? followingsData.length : 0, " Following ", followersData ? followersData.length : 0, " Followers"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        header: "\uD314\uB85C\uC789 \uBAA9\uB85D",
        data: followingsData,
        onClickMore: loadMoreFollowings,
        loading: !followingsData && !followingsError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
        data: followersData,
        onClickMore: loadMoreFollowers,
        loading: !followersData && !followersError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiZm9sbG93ZXJzTGltaXQiLCJzZXRmb2xsb3dlcnNMaW1pdCIsImZvbGxvd2luZ3NMaW1pdCIsInNldGZvbGxvd2luZ3NMaW1pdCIsInVzZVNXUiIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlcnNFcnJvciIsImVycm9yIiwiZm9sbG93aW5nc0RhdGEiLCJmb2xsb3dpbmdzRXJyb3IiLCJ1c2VFZmZlY3QiLCJpZCIsImFsZXJ0IiwicHVzaCIsImxvYWRNb3JlRm9sbG93aW5ncyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93ZXJzIiwiY29uc29sZSIsIm9uQ2xpY2tFZGl0UHJvZmlsZSIsImxvZyIsIm5pY2tuYW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImVtYWlsIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUF5Q0MsSUFBekMsQ0FBOEMsVUFBQ0MsTUFBRDtBQUFBLFdBQVVBLE1BQU0sQ0FBQ0MsSUFBakI7QUFBQSxHQUE5QyxDQUFUO0FB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QWtCSSxzRUFBQyw4REFBRDtBQUFZLGNBQU0sRUFBQyxpQ0FBbkI7QUFBNEIsWUFBSSxFQUFFSixhQUFsQztBQUFpRCxtQkFBVyxFQUFFWSxpQkFBOUQ7QUFBaUYsZUFBTyxFQUFFLENBQUNaLGFBQUQsSUFBa0IsQ0FBQ0M7QUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKQTtBQUFBLGtCQURKO0FBMkJILENBakVEOztHQUFNaEIsTztVQUNhRSxxRCxFQUNFRSx1RCxFQUNGQyx1RCxFQUt5Q1MsMkMsRUFDRUEsMkM7OztLQVR4RGQsTzs7QUFrRlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZjNjMTMxMGY5OGExYjFhMGM1MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IERlc2t0b3BMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IEF2YXRhciwgSW1hZ2UsIEJ1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWV9KS50aGVuKChyZXN1bHQpPT5yZXN1bHQuZGF0YSk7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFsgZm9sbG93ZXJzTGltaXQsIHNldGZvbGxvd2Vyc0xpbWl0IF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIGNvbnN0IFsgZm9sbG93aW5nc0xpbWl0LCBzZXRmb2xsb3dpbmdzTGltaXQgXSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgLy9kYXRh7JmAIGVycm9y6rCAIOuRmOuLpCDsl4bsnLzrqbQg66Gc65Sp7KSRXHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dlcnNEYXRhICwgZXJyb3I6IGZvbGxvd2Vyc0Vycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2xvYWRGb2xsb3dlcnM/bGltaXQ9JHtmb2xsb3dlcnNMaW1pdH1gLCBmZXRjaGVyKTtcclxuICAgIGNvbnN0IHsgZGF0YTogZm9sbG93aW5nc0RhdGEgLCBlcnJvcjogZm9sbG93aW5nc0Vycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2xvYWRGb2xsb3dpbmdzP2xpbWl0PSR7Zm9sbG93aW5nc0xpbWl0fWAsIGZldGNoZXIpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ+uhnOq3uOyduCDtlbTso7zshLjsmpQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lPy5pZF0pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb3JlRm9sbG93aW5ncyA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0Zm9sbG93aW5nc0xpbWl0KChwcmV2KT0+cHJldiszKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2VycyA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0Zm9sbG93ZXJzTGltaXQoKHByZXYpPT5wcmV2KzMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmICghbWUpIHtcclxuICAgICAgICByZXR1cm4gJ+uCtCDsoJXrs7Qg66Gc65Sp7KSRIC4uLic7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChmb2xsb3dlcnNFcnJvciB8fCBmb2xsb3dpbmdzRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGZvbGxvd2Vyc0Vycm9yIHx8IGZvbGxvd2luZ3NFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+7YyU66Gc7J6JL+2MlOuhnOybjCDroZzrlKkg7KSRIOyXkOufrOqwgCDrsJzsg53tlanri4jri6QuPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tFZGl0UHJvZmlsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57bWUubmlja25hbWV9PC90aXRsZT4gICAgXHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8RGVza3RvcExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBtYXJnaW46XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXs8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9qb2VzY2htb2UuaW8vYXBpL3YxL3JhbmRvbVwiLz59IHNpemU9ezEyOH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57bWUubmlja25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21lLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaGFwZT1cInJvdW5kXCIgb25DbGljaz17b25DbGlja0VkaXRQcm9maWxlfT5FZGl0IHByb2ZpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBtYXJnaW46XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxwPntmb2xsb3dpbmdzRGF0YT8gZm9sbG93aW5nc0RhdGEubGVuZ3RoOiAwfSBGb2xsb3dpbmcge2ZvbGxvd2Vyc0RhdGE/IGZvbGxvd2Vyc0RhdGEubGVuZ3RoIDogMH0gRm9sbG93ZXJzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8Tmlja25hbWVFZGl0Rm9ybSAvPlxyXG4gICAgICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnokg66qp66GdXCIgZGF0YT17Zm9sbG93aW5nc0RhdGF9IG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2luZ3N9IGxvYWRpbmc9eyFmb2xsb3dpbmdzRGF0YSAmJiAhZm9sbG93aW5nc0Vycm9yfS8+XHJcbiAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjCDrqqnroZ1cIiBkYXRhPXtmb2xsb3dlcnNEYXRhfSBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dlcnN9IGxvYWRpbmc9eyFmb2xsb3dlcnNEYXRhICYmICFmb2xsb3dlcnNFcnJvcn0vPlxyXG4gICAgICAgIDwvRGVza3RvcExheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCk9PntcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7IC8vUkVRVUVTVOqwgCBTVUNDRVNT6rCAIOuQoOuVjOq5jOyngCDquLDri6TroKTspIDri6QuXHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==