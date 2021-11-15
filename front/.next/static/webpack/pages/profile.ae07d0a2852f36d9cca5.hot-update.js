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
          shape: "round",
          onClick: onClickEditProfile,
          style: {
            left: "0"
          },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiZm9sbG93ZXJzTGltaXQiLCJzZXRmb2xsb3dlcnNMaW1pdCIsImZvbGxvd2luZ3NMaW1pdCIsInNldGZvbGxvd2luZ3NMaW1pdCIsInVzZVNXUiIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlcnNFcnJvciIsImVycm9yIiwiZm9sbG93aW5nc0RhdGEiLCJmb2xsb3dpbmdzRXJyb3IiLCJ1c2VFZmZlY3QiLCJpZCIsImFsZXJ0IiwicHVzaCIsImxvYWRNb3JlRm9sbG93aW5ncyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93ZXJzIiwiY29uc29sZSIsIm9uQ2xpY2tFZGl0UHJvZmlsZSIsImxvZyIsIm5pY2tuYW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiZW1haWwiLCJsZWZ0IiwibWFyZ2luIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUF5Q0MsSUFBekMsQ0FBOEMsVUFBQ0MsTUFBRDtBQUFBLFdBQVVBLE1BQU0sQ0FBQ0MsSUFBakI7QUFBQSxHQUE5QyxDQUFU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O0FBQUEsa0JBREo7QUF5QkgsQ0EvREQ7O0dBQU1oQixPO1VBQ2FFLHFELEVBQ0VFLHVELEVBQ0ZDLHVELEVBS3lDUywyQyxFQUNFQSwyQzs7O0tBVHhEZCxPOztBQWdGU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5hZTA3ZDBhMjg1MmYzNmQ5Y2NhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgRGVza3RvcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9EZXNrdG9wTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTmlja25hbWVFZGl0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm0nO1xyXG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgQXZhdGFyLCBJbWFnZSwgQnV0dG9ufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZX0pLnRoZW4oKHJlc3VsdCk9PnJlc3VsdC5kYXRhKTtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgWyBmb2xsb3dlcnNMaW1pdCwgc2V0Zm9sbG93ZXJzTGltaXQgXSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgWyBmb2xsb3dpbmdzTGltaXQsIHNldGZvbGxvd2luZ3NMaW1pdCBdID0gdXNlU3RhdGUoMyk7XHJcbiAgICAvL2RhdGHsmYAgZXJyb3LqsIAg65GY64ukIOyXhuycvOuptCDroZzrlKnspJFcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEgLCBlcnJvcjogZm9sbG93ZXJzRXJyb3IgfSA9IHVzZVNXUihgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9hZEZvbGxvd2Vycz9saW1pdD0ke2ZvbGxvd2Vyc0xpbWl0fWAsIGZldGNoZXIpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dpbmdzRGF0YSAsIGVycm9yOiBmb2xsb3dpbmdzRXJyb3IgfSA9IHVzZVNXUihgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9hZEZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCwgZmV0Y2hlcik7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmICghKG1lICYmIG1lLmlkKSkge1xyXG4gICAgICAgICAgICBhbGVydCgn66Gc6re47J24IO2VtOyjvOyEuOyalCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWU/LmlkXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dpbmdzID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRmb2xsb3dpbmdzTGltaXQoKHByZXYpPT5wcmV2KzMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb3JlRm9sbG93ZXJzID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRmb2xsb3dlcnNMaW1pdCgocHJldik9PnByZXYrMyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKCFtZSkge1xyXG4gICAgICAgIHJldHVybiAn64K0IOygleuztCDroZzrlKnspJEgLi4uJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGZvbGxvd2Vyc0Vycm9yIHx8IGZvbGxvd2luZ3NFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZm9sbG93ZXJzRXJyb3IgfHwgZm9sbG93aW5nc0Vycm9yKTtcclxuICAgICAgICByZXR1cm4gPGRpdj7tjJTroZzsnokv7YyU66Gc7JuMIOuhnOuUqSDspJEg7JeQ65+s6rCAIOuwnOyDne2VqeuLiOuLpC48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0VkaXRQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb25lJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnttZS5uaWNrbmFtZX08L3RpdGxlPiAgICBcclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxEZXNrdG9wTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17PEltYWdlIHNyYz1cImh0dHBzOi8vam9lc2NobW9lLmlvL2FwaS92MS9yYW5kb21cIi8+fSBzaXplPXsxMjh9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjMwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57bWUubmlja25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bWUuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNoYXBlPVwicm91bmRcIiBvbkNsaWNrPXtvbkNsaWNrRWRpdFByb2ZpbGV9IHN0eWxlPXt7bGVmdDogXCIwXCJ9fT4mbmJzcDtFZGl0IHByb2ZpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46IFwiMzBweCAyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxwPntmb2xsb3dpbmdzRGF0YS5sZW5ndGh9IGZvbGxvd2luZyB7Zm9sbG93ZXJzRGF0YT8gZm9sbG93ZXJzRGF0YS5sZW5ndGggOiAwfSBmb2xsb3dlcnM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxOaWNrbmFtZUVkaXRGb3JtIC8+XHJcbiAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiSDrqqnroZ1cIiBkYXRhPXtmb2xsb3dpbmdzRGF0YX0gb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93aW5nc30gbG9hZGluZz17IWZvbGxvd2luZ3NEYXRhICYmICFmb2xsb3dpbmdzRXJyb3J9Lz5cclxuICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMIOuqqeuhnVwiIGRhdGE9e2ZvbGxvd2Vyc0RhdGF9IG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2Vyc30gbG9hZGluZz17IWZvbGxvd2Vyc0RhdGEgJiYgIWZvbGxvd2Vyc0Vycm9yfS8+XHJcbiAgICAgICAgPC9EZXNrdG9wTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KT0+e1xyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXE/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTsgLy9SRVFVRVNU6rCAIFNVQ0NFU1PqsIAg65Cg65WM6rmM7KeAIOq4sOuLpOugpOykgOuLpC5cclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwic291cmNlUm9vdCI6IiJ9