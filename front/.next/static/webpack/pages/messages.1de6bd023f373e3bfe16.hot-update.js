webpackHotUpdate_N_E("pages/messages",{

/***/ "./pages/messages.js":
/*!***************************!*\
  !*** ./pages/messages.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Room */ "./components/Room.js");
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chat */ "./components/Chat.js");
/* harmony import */ var _components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/DesktopLayout */ "./components/layout/DesktopLayout.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\messages.js",
    _this = undefined,
    _s = $RefreshSig$();







var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__["default"].connect('http://localhost:3065/room', {
  withCredentials: true
});
/*
// client-side
const io = require("socket.io-client");
const socket = io("https://api.example.com", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});
*/

var Messages = function Messages() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      room = _useState[0],
      setRoom = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_Room__WEBPACK_IMPORTED_MODULE_1__["default"], {
      height: document.documentElement.clientHeight,
      socket: socket,
      setRoom: setRoom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 30
    }, _this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_Chat__WEBPACK_IMPORTED_MODULE_2__["default"], {
      room: room
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
};

_s(Messages, "93ouRa9LPWk4ETl4zxyQwfRFcDQ=");

_c = Messages;
/* harmony default export */ __webpack_exports__["default"] = (Messages);

var _c;

$RefreshReg$(_c, "Messages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVzc2FnZXMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJjb25uZWN0Iiwid2l0aENyZWRlbnRpYWxzIiwiTWVzc2FnZXMiLCJ1c2VTdGF0ZSIsInJvb20iLCJzZXRSb29tIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHdEQUFFLENBQUNDLE9BQUgsQ0FBVyw0QkFBWCxFQUF5QztBQUNwREMsaUJBQWUsRUFBRTtBQURtQyxDQUF6QyxDQUFmO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLElBQUQsQ0FEZDtBQUFBLE1BQ1pDLElBRFk7QUFBQSxNQUNOQyxPQURNOztBQUduQixzQkFDSSxxRUFBQyx3RUFBRDtBQUFlLFFBQUksZUFBRSxxRUFBQyx3REFBRDtBQUFNLFlBQU0sRUFBRUMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUF2QztBQUFxRCxZQUFNLEVBQUVWLE1BQTdEO0FBQXFFLGFBQU8sRUFBRU87QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFyQjtBQUFBLDJCQUNJLHFFQUFDLHdEQUFEO0FBQU0sVUFBSSxFQUFFRDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQVJEOztHQUFNRixROztLQUFBQSxRO0FBV1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2VzLjFkZTZiZDAyM2YzNzNlM2JmZTE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb29tIGZyb20gJy4uL2NvbXBvbmVudHMvUm9vbSc7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdCc7XHJcblxyXG5pbXBvcnQgRGVza3RvcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9EZXNrdG9wTGF5b3V0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdDozMDY1L3Jvb20nLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbn0pO1xyXG5cclxuLypcclxuLy8gY2xpZW50LXNpZGVcclxuY29uc3QgaW8gPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTtcclxuY29uc3Qgc29ja2V0ID0gaW8oXCJodHRwczovL2FwaS5leGFtcGxlLmNvbVwiLCB7XHJcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIGV4dHJhSGVhZGVyczoge1xyXG4gICAgXCJteS1jdXN0b20taGVhZGVyXCI6IFwiYWJjZFwiXHJcbiAgfVxyXG59KTtcclxuKi8gXHJcblxyXG5jb25zdCBNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtyb29tLCBzZXRSb29tIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPERlc2t0b3BMYXlvdXQgU2lkZT17PFJvb20gaGVpZ2h0PXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0fSBzb2NrZXQ9e3NvY2tldH0gc2V0Um9vbT17c2V0Um9vbX0vPn0+XHJcbiAgICAgICAgICAgIDxDaGF0IHJvb209e3Jvb219Lz5cclxuICAgICAgICA8L0Rlc2t0b3BMYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==