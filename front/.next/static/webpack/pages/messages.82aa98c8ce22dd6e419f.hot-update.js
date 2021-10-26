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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          style: {
            flexGrow: "1"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
            style: {
              margin: "0"
            },
            children: "\xA0\xA0Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["PlusOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
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
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJib3JkZXJCb3R0b20iLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtYXJnaW4iLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFFZixzQkFDSTtBQUFBLDRCQUVBO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBOEIsV0FBSyxFQUFFO0FBQUNDLGNBQU0sRUFBRSxNQUFUO0FBQWlCQyxvQkFBWSxFQUFFLG9CQUEvQjtBQUFxREMsZUFBTyxFQUFFO0FBQTlELE9BQXJDO0FBQUEsNkJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRSxPQUFYO0FBQW9CRCxpQkFBTyxFQUFDLE1BQTVCO0FBQW9DRSxvQkFBVSxFQUFFO0FBQWhELFNBQVo7QUFBQSxnQ0FDSTtBQUFLLGVBQUssRUFBRTtBQUFDQyxvQkFBUSxFQUFDO0FBQVYsV0FBWjtBQUFBLGlDQUNJO0FBQUksaUJBQUssRUFBRTtBQUFDQyxvQkFBTSxFQUFDO0FBQVIsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUFBLGlDQUNJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQSxlQWFBO0FBQUssV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBQztBQUFQLE9BQVo7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQXZCRDs7S0FBTVIsSTtBQXlCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuODJhYTk4YzhjZTIyZGQ2ZTQxOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuY29uc3QgUm9vbSA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVRpdGxlXCIgc3R5bGU9e3toZWlnaHQ6IFwiNTBweFwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjRUZFRUY1XCIsIGRpc3BsYXk6IFwiZmxleFwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXhXaWR0aDogXCI2MDBweFwiLCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleEdyb3c6XCIxXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW46XCIwXCJ9fT4mbmJzcDsmbmJzcDtNZXNzYWdlczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsdXNPdXRsaW5lZC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tjbGVhcjpcImJvdGhcIn19PlxyXG4gICAgICAgIDxoMT5TZW5kIGEgbWVzc2FnZSwgZ2V0IGEgbWVzc2FnZTwvaDE+XHJcbiAgICAgICAgPHA+RGlyZWN0IE1lc3NhZ2VzIGFyZSBwcml2YXRlIGNvbnZlcnNhdGlvbnMgYmV0d2VlbiB5b3UgYW5kIG90aGVyIHBlb3BsZSBvbiBUd2l0dGVyLiBTaGFyZSBUd2VldHMsIG1lZGlhLCBhbmQgbW9yZSE8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==