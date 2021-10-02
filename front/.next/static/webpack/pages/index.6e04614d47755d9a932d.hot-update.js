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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


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

  var onSubmitForm = useCallback(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOG_IN_REQUEST"],
      data: {
        email: email,
        password: password
      }
    });
  }, [email, password]);
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
        margin: "50px 0",
        fontFamily: "Playfair Display, serif",
        fontSize: "50px"
      },
      children: "Chatter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "loginForm",
      style: {
        width: "300px",
        margin: "10px auto"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onFinish: onSubmitForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
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
            lineNumber: 35,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
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
            lineNumber: 46,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          htmlType: "submit",
          style: {
            width: "300px",
            margin: "10px auto"
          },
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/findPassWord",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
              style: {
                textAlign: "center"
              },
              children: "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 51
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 48
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, _this), "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 42
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this);
};

_s(Home, "lJhzqXIt2kstSR0Rsh5bgmysQ/0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJkaXNwYXRjaCIsInR5cGUiLCJMT0dfSU5fUkVRVUVTVCIsImRhdGEiLCJjb250ZW50U3R5bGUiLCJib3JkZXIiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJmb250RmFtaWx5IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFFZ0JDLCtEQUFRLENBQUMsRUFBRCxDQUZ4QjtBQUFBO0FBQUEsTUFFUkMsS0FGUTtBQUFBLE1BRURDLGFBRkM7O0FBQUEsbUJBR3NCRiwrREFBUSxDQUFDLEVBQUQsQ0FIOUI7QUFBQTtBQUFBLE1BR1JHLFFBSFE7QUFBQSxNQUdFQyxnQkFIRjs7QUFLZixNQUFNQyxZQUFZLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ25DQyxZQUFRLENBQUM7QUFDTEMsVUFBSSxFQUFFQyw2REFERDtBQUVMQyxVQUFJLEVBQUU7QUFBRVQsYUFBSyxFQUFMQSxLQUFGO0FBQVNFLGdCQUFRLEVBQVJBO0FBQVQ7QUFGRCxLQUFELENBQVI7QUFJRCxHQUw2QixFQUszQixDQUFDRixLQUFELEVBQVFFLFFBQVIsQ0FMMkIsQ0FBaEM7QUFPQSxNQUFNUSxZQUFZLEdBQUc7QUFDakJDLFVBQU0sRUFBRSxtQkFEUztBQUVqQkMsVUFBTSxFQUFFLE9BRlM7QUFHakJDLFNBQUssRUFBRSxPQUhVO0FBSWpCQyxVQUFNLEVBQUUsTUFKUztBQUtqQkMsYUFBUyxFQUFFLE9BTE07QUFNakJDLGNBQVUsRUFBQztBQU5NLEdBQXJCO0FBU0Esc0JBQ0k7QUFBSyxTQUFLLEVBQUVOLFlBQVo7QUFBQSw0QkFDSTtBQUFJLFdBQUssRUFBRTtBQUFDTyxpQkFBUyxFQUFFLFFBQVo7QUFBc0JILGNBQU0sRUFBRSxRQUE5QjtBQUF3Q0ksa0JBQVUsRUFBRSx5QkFBcEQ7QUFBK0VDLGdCQUFRLEVBQUU7QUFBekYsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBR0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFLLEVBQUU7QUFBQ04sYUFBSyxFQUFDLE9BQVA7QUFBZ0JDLGNBQU0sRUFBQztBQUF2QixPQUFsQztBQUFBLDZCQUNJLHFFQUFDLHlDQUFEO0FBQU0sZ0JBQVEsRUFBRVYsWUFBaEI7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJLHFFQUFDLDBDQUFEO0FBQ0EsZ0JBQUksRUFBQyxZQURMO0FBRUEsZ0JBQUksRUFBQyxPQUZMO0FBR0EsdUJBQVcsRUFBQyxvQkFIWjtBQUlBLGdCQUFJLEVBQUMsT0FKTDtBQUtBLGlCQUFLLEVBQUU7QUFBQ1MsbUJBQUssRUFBQyxPQUFQO0FBQWdCQyxvQkFBTSxFQUFDO0FBQXZCLGFBTFA7QUFNQSxpQkFBSyxFQUFFZCxLQU5QO0FBT0Esb0JBQVEsRUFBRUMsYUFQVjtBQVFBLG9CQUFRO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFZSTtBQUFBLGlDQUNJLHFFQUFDLDBDQUFELENBQU8sUUFBUDtBQUNJLGdCQUFJLEVBQUMsZUFEVDtBQUVJLGdCQUFJLEVBQUMsVUFGVDtBQUdJLHVCQUFXLEVBQUMsMEJBSGhCO0FBSUksZ0JBQUksRUFBQyxPQUpUO0FBS0ksaUJBQUssRUFBRTtBQUFDWSxtQkFBSyxFQUFHLE9BQVQ7QUFBa0JDLG9CQUFNLEVBQUU7QUFBMUIsYUFMWDtBQU1JLGlCQUFLLEVBQUVaLFFBTlg7QUFPSSxvQkFBUSxFQUFFQyxnQkFQZDtBQVFJLG9CQUFRO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkosZUF3QkkscUVBQUMsMkNBQUQ7QUFBUSxjQUFJLEVBQUMsU0FBYjtBQUF1QixrQkFBUSxFQUFDLFFBQWhDO0FBQXlDLGVBQUssRUFBRTtBQUFDVSxpQkFBSyxFQUFHLE9BQVQ7QUFBa0JDLGtCQUFNLEVBQUU7QUFBMUIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJKLGVBeUJJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLGVBQVg7QUFBQSxpQ0FBMkI7QUFBQSxtQ0FBRztBQUFHLG1CQUFLLEVBQUU7QUFBQ0cseUJBQVMsRUFBRTtBQUFaLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJKLDZFQTZCSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdDSCxDQTdERDs7R0FBTW5CLEk7VUFFNkJDLHVELEVBQ01BLHVEOzs7S0FIbkNELEk7QUFpRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZlMDQ2MTRkNDc3NTVkOWE5MzJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIFxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgZW1haWwsIHBhc3N3b3JkIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50U3R5bGUgPSB7IFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI0UwRTBFMFwiLCBcclxuICAgICAgICBoZWlnaHQ6IFwiNDUwcHhcIiwgXHJcbiAgICAgICAgd2lkdGg6IFwiNTAwcHhcIiwgXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIiwgXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwMHB4XCIsIFxyXG4gICAgICAgIGJhY2tncm91bmQ6XCJ3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17Y29udGVudFN0eWxlfT5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiNTBweCAwXCIsIGZvbnRGYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheSwgc2VyaWZcIiwgZm9udFNpemU6IFwiNTBweFwifX0+Q2hhdHRlcjwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiIHN0eWxlPXt7d2lkdGg6XCIzMDBweFwiLCBtYXJnaW46XCIxMHB4IGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlci1lbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIzMDBweFwiLCBtYXJnaW46XCIxMHB4IGF1dG9cIn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoIDogXCIzMDBweFwiLCBtYXJnaW46IFwiMTBweCBhdXRvXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7d2lkdGggOiBcIjMwMHB4XCIsIG1hcmdpbjogXCIxMHB4IGF1dG9cIn19PuuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmluZFBhc3NXb3JkXCI+PGE+PHAgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT7ruYTrsIDrsojtmLjrpbwg7J6K7Jy87IWo64KY7JqUPzwvcD48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIOqzhOygleydtCDsl4bsnLzsi6DqsIDsmpQ/Jm5ic3A7Jm5ic3A7ICBcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=