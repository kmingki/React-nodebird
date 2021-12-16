webpackHotUpdate_N_E("pages/messages",{

/***/ "./pages/messages.js":
/*!***************************!*\
  !*** ./pages/messages.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Room */ "./components/Room.js");
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Chat */ "./components/Chat.js");
/* harmony import */ var _components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/DesktopLayout */ "./components/layout/DesktopLayout.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\messages.js",
    _this = undefined,
    _s = $RefreshSig$();







var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__["default"].connect('http://localhost:3065/room', {
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

  var _useState = useState(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      roomId = _useState2[0],
      setRoomId = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Room__WEBPACK_IMPORTED_MODULE_2__["default"], {
      height: document.documentElement.clientHeight,
      socket: socket,
      setRoomId: setRoomId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 30
    }, _this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Chat__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s(Messages, "XqA0LtwOMmCSMm6t93bwx6axufc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVzc2FnZXMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJjb25uZWN0Iiwid2l0aENyZWRlbnRpYWxzIiwiTWVzc2FnZXMiLCJ1c2VTdGF0ZSIsInJvb21JZCIsInNldFJvb21JZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyx3REFBRSxDQUFDQyxPQUFILENBQVcsNEJBQVgsRUFBeUM7QUFDcERDLGlCQUFlLEVBQUU7QUFEbUMsQ0FBekMsQ0FBZjtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsUUFBUSxFQURsQjtBQUFBO0FBQUEsTUFDWkMsTUFEWTtBQUFBLE1BQ0pDLFNBREk7O0FBR25CLHNCQUNJLHFFQUFDLHdFQUFEO0FBQWUsUUFBSSxlQUFFLHFFQUFDLHdEQUFEO0FBQU0sWUFBTSxFQUFFQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQXZDO0FBQXFELFlBQU0sRUFBRVYsTUFBN0Q7QUFBcUUsZUFBUyxFQUFFTztBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXJCO0FBQUEsMkJBQ0kscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBUkQ7O0dBQU1ILFE7O0tBQUFBLFE7QUFXU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuZmMxOTcxZmMyNTUzODhiMGM0MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb29tIGZyb20gJy4uL2NvbXBvbmVudHMvUm9vbSc7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdCc7XHJcbmltcG9ydCBEZXNrdG9wTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0Rlc2t0b3BMYXlvdXQnO1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwOi8vbG9jYWxob3N0OjMwNjUvcm9vbScsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxufSk7XHJcblxyXG4vKlxyXG4vLyBjbGllbnQtc2lkZVxyXG5jb25zdCBpbyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xyXG5jb25zdCBzb2NrZXQgPSBpbyhcImh0dHBzOi8vYXBpLmV4YW1wbGUuY29tXCIsIHtcclxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgZXh0cmFIZWFkZXJzOiB7XHJcbiAgICBcIm15LWN1c3RvbS1oZWFkZXJcIjogXCJhYmNkXCJcclxuICB9XHJcbn0pO1xyXG4qLyBcclxuXHJcbmNvbnN0IE1lc3NhZ2VzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Jvb21JZCwgc2V0Um9vbUlkIF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8RGVza3RvcExheW91dCBTaWRlPXs8Um9vbSBoZWlnaHQ9e2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHR9IHNvY2tldD17c29ja2V0fSBzZXRSb29tSWQ9e3NldFJvb21JZH0vPn0+XHJcbiAgICAgICAgICAgIDxDaGF0IC8+XHJcbiAgICAgICAgPC9EZXNrdG9wTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzOyJdLCJzb3VyY2VSb290IjoiIn0=