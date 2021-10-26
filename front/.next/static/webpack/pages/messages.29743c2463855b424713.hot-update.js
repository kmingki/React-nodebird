webpackHotUpdate_N_E("pages/messages",{

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\components\\Room.js",
    _this = undefined;





var Room = function Room() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "messageTitle",
      style: {
        height: "50px",
        borderBottom: "solid thin #EFEEF5",
        display: "flex"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          maxWidth: "600px",
          display: "flex",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
          style: {
            flexGrow: "1",
            margin: "0"
          },
          children: "\xA0\xA0Messages"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["PlusOutlined"], {
          style: {
            justifyContent: "center",
            alignItems: "center"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        clear: "both"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "Send a message, get a message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, _this);
};

_c = Room;
/* harmony default export */ __webpack_exports__["default"] = (Room);

var _c;

$RefreshReg$(_c, "Room");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJib3JkZXJCb3R0b20iLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUVmLHNCQUNJO0FBQUEsNEJBRUE7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUE4QixXQUFLLEVBQUU7QUFBQ0MsY0FBTSxFQUFFLE1BQVQ7QUFBaUJDLG9CQUFZLEVBQUUsb0JBQS9CO0FBQXFEQyxlQUFPLEVBQUU7QUFBOUQsT0FBckM7QUFBQSw2QkFDSTtBQUFLLGFBQUssRUFBRTtBQUFDQyxrQkFBUSxFQUFFLE9BQVg7QUFBb0JELGlCQUFPLEVBQUMsTUFBNUI7QUFBb0NFLG9CQUFVLEVBQUU7QUFBaEQsU0FBWjtBQUFBLGdDQUNJO0FBQUksZUFBSyxFQUFFO0FBQUNDLG9CQUFRLEVBQUMsR0FBVjtBQUFlQyxrQkFBTSxFQUFDO0FBQXRCLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyw4REFBRDtBQUFjLGVBQUssRUFBRTtBQUFDQywwQkFBYyxFQUFDLFFBQWhCO0FBQTBCSCxzQkFBVSxFQUFDO0FBQXJDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBLGVBU0E7QUFBSyxXQUFLLEVBQUU7QUFBQ0ksYUFBSyxFQUFDO0FBQVAsT0FBWjtBQUFBLDhCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBbkJEOztLQUFNVCxJO0FBcUJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlcy4yOTc0M2MyNDYzODU1YjQyNDcxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5jb25zdCBSb29tID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlVGl0bGVcIiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21heFdpZHRoOiBcIjYwMHB4XCIsIGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e2ZsZXhHcm93OlwiMVwiLCBtYXJnaW46XCIwXCJ9fT4mbmJzcDsmbmJzcDtNZXNzYWdlczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8UGx1c091dGxpbmVkIHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYWxpZ25JdGVtczpcImNlbnRlclwifX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2NsZWFyOlwiYm90aFwifX0+XHJcbiAgICAgICAgPGgxPlNlbmQgYSBtZXNzYWdlLCBnZXQgYSBtZXNzYWdlPC9oMT5cclxuICAgICAgICA8cD5EaXJlY3QgTWVzc2FnZXMgYXJlIHByaXZhdGUgY29udmVyc2F0aW9ucyBiZXR3ZWVuIHlvdSBhbmQgb3RoZXIgcGVvcGxlIG9uIFR3aXR0ZXIuIFNoYXJlIFR3ZWV0cywgbWVkaWEsIGFuZCBtb3JlITwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9