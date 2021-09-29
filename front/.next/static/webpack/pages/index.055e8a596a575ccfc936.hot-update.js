webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home() {
  _s();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var onSubmitForm = function onSubmitForm() {};

  var contentStyle = {
    border: "1px solid #E0E0E0",
    height: "450px",
    width: "500px",
    margin: "auto",
    marginTop: "100px",
    background: "white"
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    style: contentStyle,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
      style: {
        textAlign: "center",
        margin: "30px 0"
      },
      children: "Chatter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "loginForm",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onFinish: onSubmitForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          style: {
            width: "300px",
            margin: "10px auto"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            name: "user-email",
            type: "email",
            placeholder: "\uC774\uBA54\uC77C",
            size: "large",
            style: {
              width: "300px",
              margin: "10px auto"
            },
            value: email,
            onChange: onChangeEmail,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          style: {
            width: "300px",
            margin: "10px auto"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
            name: "user-password",
            type: "password",
            placeholder: "\uBE44\uBC00\uBC88\uD638",
            size: "large",
            style: {
              width: "300px",
              margin: "10px auto"
            },
            value: password,
            onChange: onChangePassword,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          htmlType: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 45
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 42
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(Home, "jGybLa7LDc/XNxA+PTM/fXqrSXU=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXRGb3JtIiwiY29udGVudFN0eWxlIiwiYm9yZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBRWdCQywrREFBUSxDQUFDLEVBQUQsQ0FGeEI7QUFBQTtBQUFBLE1BRVJDLEtBRlE7QUFBQSxNQUVEQyxhQUZDOztBQUFBLG1CQUdzQkYsK0RBQVEsQ0FBQyxFQUFELENBSDlCO0FBQUE7QUFBQSxNQUdSRyxRQUhRO0FBQUEsTUFHRUMsZ0JBSEY7O0FBS2YsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTSxDQUUxQixDQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsVUFBTSxFQUFFLG1CQURTO0FBRWpCQyxVQUFNLEVBQUUsT0FGUztBQUdqQkMsU0FBSyxFQUFFLE9BSFU7QUFJakJDLFVBQU0sRUFBRSxNQUpTO0FBS2pCQyxhQUFTLEVBQUUsT0FMTTtBQU1qQkMsY0FBVSxFQUFDO0FBTk0sR0FBckI7QUFTQSxzQkFDSTtBQUFLLFNBQUssRUFBRU4sWUFBWjtBQUFBLDRCQUNJO0FBQUksV0FBSyxFQUFFO0FBQUNPLGlCQUFTLEVBQUUsUUFBWjtBQUFzQkgsY0FBTSxFQUFFO0FBQTlCLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUdJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDSSxxRUFBQyx5Q0FBRDtBQUFNLGdCQUFRLEVBQUVMLFlBQWhCO0FBQUEsZ0NBQ0k7QUFBSyxlQUFLLEVBQUU7QUFBQ0ksaUJBQUssRUFBQyxPQUFQO0FBQWdCQyxrQkFBTSxFQUFDO0FBQXZCLFdBQVo7QUFBQSxpQ0FDSSxxRUFBQywwQ0FBRDtBQUNBLGdCQUFJLEVBQUMsWUFETDtBQUVBLGdCQUFJLEVBQUMsT0FGTDtBQUdBLHVCQUFXLEVBQUMsb0JBSFo7QUFJQSxnQkFBSSxFQUFDLE9BSkw7QUFLQSxpQkFBSyxFQUFFO0FBQUNELG1CQUFLLEVBQUMsT0FBUDtBQUFnQkMsb0JBQU0sRUFBQztBQUF2QixhQUxQO0FBTUEsaUJBQUssRUFBRVQsS0FOUDtBQU9BLG9CQUFRLEVBQUVDLGFBUFY7QUFRQSxvQkFBUTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBWUk7QUFBSyxlQUFLLEVBQUU7QUFBQ08saUJBQUssRUFBQyxPQUFQO0FBQWdCQyxrQkFBTSxFQUFDO0FBQXZCLFdBQVo7QUFBQSxpQ0FDSSxxRUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDSSxnQkFBSSxFQUFDLGVBRFQ7QUFFSSxnQkFBSSxFQUFDLFVBRlQ7QUFHSSx1QkFBVyxFQUFDLDBCQUhoQjtBQUlJLGdCQUFJLEVBQUMsT0FKVDtBQUtJLGlCQUFLLEVBQUU7QUFBQ0QsbUJBQUssRUFBRyxPQUFUO0FBQWtCQyxvQkFBTSxFQUFFO0FBQTFCLGFBTFg7QUFNSSxpQkFBSyxFQUFFUCxRQU5YO0FBT0ksb0JBQVEsRUFBRUMsZ0JBUGQ7QUFRSSxvQkFBUTtBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpKLGVBd0JJLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsa0JBQVEsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4QkosZUF5QkkscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBLGlDQUFxQjtBQUFBLG1DQUFHLHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQ0gsQ0F0REQ7O0dBQU1MLEk7VUFFNkJDLHVELEVBQ01BLHVEOzs7S0FIbkNELEk7QUEwRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA1NWU4YTU5NmE1NzVjY2ZjOTM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIFxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29udGVudFN0eWxlID0geyBcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFMEUwRTBcIiwgXHJcbiAgICAgICAgaGVpZ2h0OiBcIjQ1MHB4XCIsIFxyXG4gICAgICAgIHdpZHRoOiBcIjUwMHB4XCIsIFxyXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCIsIFxyXG4gICAgICAgIG1hcmdpblRvcDogXCIxMDBweFwiLCBcclxuICAgICAgICBiYWNrZ3JvdW5kOlwid2hpdGVcIlxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2NvbnRlbnRTdHlsZX0+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjMwcHggMFwifX0+Q2hhdHRlcjwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiID5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjMwMHB4XCIsIG1hcmdpbjpcIjEwcHggYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXItZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMzAwcHhcIiwgbWFyZ2luOlwiMTBweCBhdXRvXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjMwMHB4XCIsIG1hcmdpbjpcIjEwcHggYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aCA6IFwiMzAwcHhcIiwgbWFyZ2luOiBcIjEwcHggYXV0b1wifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiA+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT48QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=