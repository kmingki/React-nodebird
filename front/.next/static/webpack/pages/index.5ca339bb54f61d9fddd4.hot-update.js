webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home() {
  _s();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput3, 2),
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    style: contentStyle,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
      style: {
        textAlign: "center",
        margin: "30px 0"
      },
      children: "Chatter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "loginForm",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onFinish: onSubmitForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
            name: "user-email",
            type: "email",
            placeholder: "\uC774\uBA54\uC77C",
            size: "large",
            border: "false",
            style: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
              width: "300px",
              margin: "auto"
            }, "margin", "15px 0"),
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
            name: "user-password",
            type: "password",
            placeholder: "\uBE44\uBC00\uBC88\uD638",
            size: "large",
            border: "false",
            style: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
              width: "300px",
              margin: "auto"
            }, "margin", "15px 0"),
            value: password,
            onChange: onChangePassword,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "primary",
          htmlType: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 45
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 42
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
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
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXRGb3JtIiwiY29udGVudFN0eWxlIiwiYm9yZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFFZ0JDLCtEQUFRLENBQUMsRUFBRCxDQUZ4QjtBQUFBO0FBQUEsTUFFUkMsS0FGUTtBQUFBLE1BRURDLGFBRkM7O0FBQUEsbUJBR3NCRiwrREFBUSxDQUFDLEVBQUQsQ0FIOUI7QUFBQTtBQUFBLE1BR1JHLFFBSFE7QUFBQSxNQUdFQyxnQkFIRjs7QUFLZixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNLENBRTFCLENBRkQ7O0FBSUEsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxVQUFNLEVBQUUsbUJBRFM7QUFFakJDLFVBQU0sRUFBRSxPQUZTO0FBR2pCQyxTQUFLLEVBQUUsT0FIVTtBQUlqQkMsVUFBTSxFQUFFLE1BSlM7QUFLakJDLGFBQVMsRUFBRSxPQUxNO0FBTWpCQyxjQUFVLEVBQUM7QUFOTSxHQUFyQjtBQVNBLHNCQUNJO0FBQUssU0FBSyxFQUFFTixZQUFaO0FBQUEsNEJBQ0k7QUFBSSxXQUFLLEVBQUU7QUFBQ08saUJBQVMsRUFBRSxRQUFaO0FBQXNCSCxjQUFNLEVBQUU7QUFBOUIsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBR0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNJLHFFQUFDLHlDQUFEO0FBQU0sZ0JBQVEsRUFBRUwsWUFBaEI7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJLHFFQUFDLDBDQUFEO0FBQ0EsZ0JBQUksRUFBQyxZQURMO0FBRUEsZ0JBQUksRUFBQyxPQUZMO0FBR0EsdUJBQVcsRUFBQyxvQkFIWjtBQUlBLGdCQUFJLEVBQUMsT0FKTDtBQUtBLGtCQUFNLEVBQUMsT0FMUDtBQU1BLGlCQUFLO0FBQUdJLG1CQUFLLEVBQUcsT0FBWDtBQUFvQkMsb0JBQU0sRUFBRTtBQUE1Qix5QkFBNEMsUUFBNUMsQ0FOTDtBQU9BLGlCQUFLLEVBQUVULEtBUFA7QUFRQSxvQkFBUSxFQUFFQyxhQVJWO0FBU0Esb0JBQVE7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQWFJO0FBQUEsaUNBQ0kscUVBQUMsMENBQUQ7QUFDSSxnQkFBSSxFQUFDLGVBRFQ7QUFFSSxnQkFBSSxFQUFDLFVBRlQ7QUFHSSx1QkFBVyxFQUFDLDBCQUhoQjtBQUlJLGdCQUFJLEVBQUMsT0FKVDtBQUtJLGtCQUFNLEVBQUMsT0FMWDtBQU1JLGlCQUFLO0FBQUdPLG1CQUFLLEVBQUcsT0FBWDtBQUFvQkMsb0JBQU0sRUFBRTtBQUE1Qix5QkFBNEMsUUFBNUMsQ0FOVDtBQU9JLGlCQUFLLEVBQUVQLFFBUFg7QUFRSSxvQkFBUSxFQUFFQyxnQkFSZDtBQVNJLG9CQUFRO0FBVFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkosZUEwQkkscUVBQUMsMkNBQUQ7QUFBUSxjQUFJLEVBQUMsU0FBYjtBQUF1QixrQkFBUSxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCSixlQTJCSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQXFCO0FBQUEsbUNBQUcscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNDSCxDQXhERDs7R0FBTUwsSTtVQUU2QkMsdUQsRUFDTUEsdUQ7OztLQUhuQ0QsSTtBQTREU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWNhMzM5YmI1NGY2MWQ5ZmRkZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50U3R5bGUgPSB7IFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI0UwRTBFMFwiLCBcclxuICAgICAgICBoZWlnaHQ6IFwiNDUwcHhcIiwgXHJcbiAgICAgICAgd2lkdGg6IFwiNTAwcHhcIiwgXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIiwgXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwMHB4XCIsIFxyXG4gICAgICAgIGJhY2tncm91bmQ6XCJ3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17Y29udGVudFN0eWxlfT5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiMzBweCAwXCJ9fT5DaGF0dGVyPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5Gb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066mU7J28XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aCA6IFwiMzAwcHhcIiwgbWFyZ2luOiBcImF1dG9cIiwgbWFyZ2luOiBcIjE1cHggMFwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoIDogXCIzMDBweFwiLCBtYXJnaW46IFwiYXV0b1wiLCBtYXJnaW46IFwiMTVweCAwXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiID7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPjxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==