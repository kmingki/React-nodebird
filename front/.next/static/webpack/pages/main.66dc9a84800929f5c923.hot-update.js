webpackHotUpdate_N_E("pages/main",{

/***/ "./components/layout/Menu.js":
/*!***********************************!*\
  !*** ./components/layout/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\Menu.js",
    _this = undefined,
    _s = $RefreshSig$();








var Menu = function Menu() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var onClickHome = function onClickHome() {
    return router.push('/main');
  };

  var onClickSearch = function onClickSearch() {
    return router.push('/search');
  };

  var onClickMessages = function onClickMessages() {
    return router.push('/message/main');
  };

  var onClickNotification = function onClickNotification() {
    return router.push('/notification');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HomeOutlined"], {
        style: {
          color: '#2C2C2C',
          fontSize: '23px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 48
      }, _this),
      onClick: onClickHome
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], {
        style: {
          color: '#2C2C2C',
          fontSize: '23px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 48
      }, _this),
      onClick: onClickSearch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MailOutlined"], {
        style: {
          color: '#2C2C2C',
          fontSize: '23px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 48
      }, _this),
      onClick: onClickMessages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StarOutlined"], {
        style: {
          color: '#2C2C2C',
          fontSize: '23px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 48
      }, _this),
      onClick: onClickNotification
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Menu, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyJdLCJuYW1lcyI6WyJNZW51Iiwicm91dGVyIiwidXNlUm91dGVyIiwib25DbGlja0hvbWUiLCJwdXNoIiwib25DbGlja1NlYXJjaCIsIm9uQ2xpY2tNZXNzYWdlcyIsIm9uQ2xpY2tOb3RpZmljYXRpb24iLCJjb2xvciIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUYsTUFBTSxDQUFDRyxJQUFQLENBQVksT0FBWixDQUFOO0FBQUEsR0FBcEI7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFdBQU1KLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFNBQVosQ0FBTjtBQUFBLEdBQXRCOztBQUNBLE1BQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxXQUFNTCxNQUFNLENBQUNHLElBQVAsQ0FBWSxlQUFaLENBQU47QUFBQSxHQUF4Qjs7QUFDQSxNQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCO0FBQUEsV0FBTU4sTUFBTSxDQUFDRyxJQUFQLENBQVksZUFBWixDQUFOO0FBQUEsR0FBNUI7O0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywyQ0FBRDtBQUFRLFVBQUksRUFBQyxNQUFiO0FBQW9CLFdBQUssRUFBQyxRQUExQjtBQUFtQyxVQUFJLGVBQUUscUVBQUMsOERBQUQ7QUFBYyxhQUFLLEVBQUU7QUFBRUksZUFBSyxFQUFFLFNBQVQ7QUFBb0JDLGtCQUFRLEVBQUU7QUFBOUI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6QztBQUEwRyxhQUFPLEVBQUVOO0FBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLDJDQUFEO0FBQVEsVUFBSSxFQUFDLE1BQWI7QUFBb0IsV0FBSyxFQUFDLFFBQTFCO0FBQW1DLFVBQUksZUFBRSxxRUFBQyxnRUFBRDtBQUFnQixhQUFLLEVBQUU7QUFBRUssZUFBSyxFQUFFLFNBQVQ7QUFBb0JDLGtCQUFRLEVBQUU7QUFBOUI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6QztBQUE0RyxhQUFPLEVBQUVKO0FBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLHFFQUFDLDJDQUFEO0FBQVEsVUFBSSxFQUFDLE1BQWI7QUFBb0IsV0FBSyxFQUFDLFFBQTFCO0FBQW1DLFVBQUksZUFBRSxxRUFBQyw4REFBRDtBQUFjLGFBQUssRUFBRTtBQUFFRyxlQUFLLEVBQUUsU0FBVDtBQUFvQkMsa0JBQVEsRUFBRTtBQUE5QjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXpDO0FBQTBHLGFBQU8sRUFBRUg7QUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUscUVBQUMsMkNBQUQ7QUFBUSxVQUFJLEVBQUMsTUFBYjtBQUFvQixXQUFLLEVBQUMsUUFBMUI7QUFBbUMsVUFBSSxlQUFFLHFFQUFDLDhEQUFEO0FBQWMsYUFBSyxFQUFFO0FBQUVFLGVBQUssRUFBRSxTQUFUO0FBQW9CQyxrQkFBUSxFQUFFO0FBQTlCO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBekM7QUFBMEcsYUFBTyxFQUFFRjtBQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQVFELENBaEJEOztHQUFNUCxJO1VBQ1dFLHFEOzs7S0FEWEYsSTtBQWtCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi42NmRjOWE4NDgwMDkyOWY1YzkyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBIb21lT3V0bGluZWQsIFNlYXJjaE91dGxpbmVkLCBNYWlsT3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tIb21lID0gKCkgPT4gcm91dGVyLnB1c2goJy9tYWluJyk7XHJcbiAgY29uc3Qgb25DbGlja1NlYXJjaCA9ICgpID0+IHJvdXRlci5wdXNoKCcvc2VhcmNoJyk7XHJcbiAgY29uc3Qgb25DbGlja01lc3NhZ2VzID0gKCkgPT4gcm91dGVyLnB1c2goJy9tZXNzYWdlL21haW4nKTtcclxuICBjb25zdCBvbkNsaWNrTm90aWZpY2F0aW9uID0gKCkgPT4gcm91dGVyLnB1c2goJy9ub3RpZmljYXRpb24nKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIGljb249ezxIb21lT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMkMyQzJDJywgZm9udFNpemU6ICcyM3B4JyB9fSAvPn0gb25DbGljaz17b25DbGlja0hvbWV9IC8+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIGljb249ezxTZWFyY2hPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMyQzJDMkMnLCBmb250U2l6ZTogJzIzcHgnIH19IC8+fSBvbkNsaWNrPXtvbkNsaWNrU2VhcmNofSAvPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBpY29uPXs8TWFpbE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzJDMkMyQycsIGZvbnRTaXplOiAnMjNweCcgfX0gLz59IG9uQ2xpY2s9e29uQ2xpY2tNZXNzYWdlc30gLz5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PFN0YXJPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMyQzJDMkMnLCBmb250U2l6ZTogJzIzcHgnIH19IC8+fSBvbkNsaWNrPXtvbkNsaWNrTm90aWZpY2F0aW9ufSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=