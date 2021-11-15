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
          justifyContent: "center"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
          children: [followingsData.length, " following ", followersData ? followersData.length : 0, " followers"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiZm9sbG93ZXJzTGltaXQiLCJzZXRmb2xsb3dlcnNMaW1pdCIsImZvbGxvd2luZ3NMaW1pdCIsInNldGZvbGxvd2luZ3NMaW1pdCIsInVzZVNXUiIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlcnNFcnJvciIsImVycm9yIiwiZm9sbG93aW5nc0RhdGEiLCJmb2xsb3dpbmdzRXJyb3IiLCJ1c2VFZmZlY3QiLCJpZCIsImFsZXJ0IiwicHVzaCIsImxvYWRNb3JlRm9sbG93aW5ncyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93ZXJzIiwiY29uc29sZSIsIm9uQ2xpY2tFZGl0UHJvZmlsZSIsImxvZyIsIm5pY2tuYW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImVtYWlsIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUF5Q0MsSUFBekMsQ0FBOEMsVUFBQ0MsTUFBRDtBQUFBLFdBQVVBLE1BQU0sQ0FBQ0MsSUFBakI7QUFBQSxHQUE5QyxDQUFUO0FB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QUFNLEVBQUMsaUNBQW5CO0FBQTRCLFlBQUksRUFBRUosYUFBbEM7QUFBaUQsbUJBQVcsRUFBRVksaUJBQTlEO0FBQWlGLGVBQU8sRUFBRSxDQUFDWixhQUFELElBQWtCLENBQUNDO0FBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkE7QUFBQSxrQkFESjtBQTJCSCxDQWpFRDs7R0FBTWhCLE87VUFDYUUscUQsRUFDRUUsdUQsRUFDRkMsdUQsRUFLeUNTLDJDLEVBQ0VBLDJDOzs7S0FUeERkLE87O0FBa0ZTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjBhYzJmZTUxOTNkZjJlMjJmMmI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBEZXNrdG9wTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0Rlc2t0b3BMYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRm9sbG93TGlzdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBBdmF0YXIsIEltYWdlLCBCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlfSkudGhlbigocmVzdWx0KT0+cmVzdWx0LmRhdGEpO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbIGZvbGxvd2Vyc0xpbWl0LCBzZXRmb2xsb3dlcnNMaW1pdCBdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCBbIGZvbGxvd2luZ3NMaW1pdCwgc2V0Zm9sbG93aW5nc0xpbWl0IF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIC8vZGF0YeyZgCBlcnJvcuqwgCDrkZjri6Qg7JeG7Jy866m0IOuhnOuUqeykkVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogZm9sbG93ZXJzRGF0YSAsIGVycm9yOiBmb2xsb3dlcnNFcnJvciB9ID0gdXNlU1dSKGBodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9sb2FkRm9sbG93ZXJzP2xpbWl0PSR7Zm9sbG93ZXJzTGltaXR9YCwgZmV0Y2hlcik7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2luZ3NEYXRhICwgZXJyb3I6IGZvbGxvd2luZ3NFcnJvciB9ID0gdXNlU1dSKGBodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9sb2FkRm9sbG93aW5ncz9saW1pdD0ke2ZvbGxvd2luZ3NMaW1pdH1gLCBmZXRjaGVyKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfroZzqt7jsnbgg7ZW07KO87IS47JqUJyk7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZT8uaWRdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2luZ3MgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldGZvbGxvd2luZ3NMaW1pdCgocHJldik9PnByZXYrMyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dlcnMgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldGZvbGxvd2Vyc0xpbWl0KChwcmV2KT0+cHJldiszKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgcmV0dXJuICfrgrQg7KCV67O0IOuhnOuUqeykkSAuLi4nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoZm9sbG93ZXJzRXJyb3IgfHwgZm9sbG93aW5nc0Vycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihmb2xsb3dlcnNFcnJvciB8fCBmb2xsb3dpbmdzRXJyb3IpO1xyXG4gICAgICAgIHJldHVybiA8ZGl2Pu2MlOuhnOyeiS/tjJTroZzsm4wg66Gc65SpIOykkSDsl5Drn6zqsIAg67Cc7IOd7ZWp64uI64ukLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrRWRpdFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e21lLm5pY2tuYW1lfTwvdGl0bGU+ICAgIFxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPERlc2t0b3BMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgbWFyZ2luOlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17PEltYWdlIHNyYz1cImh0dHBzOi8vam9lc2NobW9lLmlvL2FwaS92MS9yYW5kb21cIi8+fSBzaXplPXsxMjh9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e21lLm5pY2tuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZS5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2hhcGU9XCJyb3VuZFwiIG9uQ2xpY2s9e29uQ2xpY2tFZGl0UHJvZmlsZX0+RWRpdCBwcm9maWxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxwPntmb2xsb3dpbmdzRGF0YS5sZW5ndGh9IGZvbGxvd2luZyB7Zm9sbG93ZXJzRGF0YT8gZm9sbG93ZXJzRGF0YS5sZW5ndGggOiAwfSBmb2xsb3dlcnM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxOaWNrbmFtZUVkaXRGb3JtIC8+XHJcbiAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiSDrqqnroZ1cIiBkYXRhPXtmb2xsb3dpbmdzRGF0YX0gb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93aW5nc30gbG9hZGluZz17IWZvbGxvd2luZ3NEYXRhICYmICFmb2xsb3dpbmdzRXJyb3J9Lz5cclxuICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMIOuqqeuhnVwiIGRhdGE9e2ZvbGxvd2Vyc0RhdGF9IG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2Vyc30gbG9hZGluZz17IWZvbGxvd2Vyc0RhdGEgJiYgIWZvbGxvd2Vyc0Vycm9yfS8+XHJcbiAgICAgICAgPC9EZXNrdG9wTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KT0+e1xyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXE/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTsgLy9SRVFVRVNU6rCAIFNVQ0NFU1PqsIAg65Cg65WM6rmM7KeAIOq4sOuLpOugpOykgOuLpC5cclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwic291cmNlUm9vdCI6IiJ9