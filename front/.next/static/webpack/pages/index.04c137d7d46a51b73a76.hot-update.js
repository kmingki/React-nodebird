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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var Home = function Home() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (me && me.id) {}
  }, [me, me.id]);
  var contentStyle = {
    border: "1px solid #E0E0E0",
    height: "450px",
    width: "500px",
    margin: "auto",
    marginTop: "100px",
    background: "white"
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    style: contentStyle,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
      style: {
        textAlign: "center",
        margin: "50px 0",
        fontFamily: "Playfair Display, serif",
        fontSize: "50px"
      },
      children: "Chatter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "loginForm",
      style: {
        width: "300px",
        margin: "10px auto"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onFinish: onSubmitForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
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
            lineNumber: 44,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
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
            lineNumber: 55,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          htmlType: "submit",
          style: {
            width: "300px",
            margin: "10px auto"
          },
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/findPassWord",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              style: {
                textAlign: "center"
              },
              children: "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 51
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 48
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this), "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 42
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, _this);
};

_s(Home, "pEno48EjEeSg96Ca0gn1+Krt43w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwiZGlzcGF0Y2giLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJkYXRhIiwidXNlRWZmZWN0IiwiaWQiLCJjb250ZW50U3R5bGUiLCJib3JkZXIiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJmb250RmFtaWx5IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxxQkFFQUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQUZYO0FBQUEsTUFFUEMsRUFGTyxnQkFFUEEsRUFGTzs7QUFBQSxrQkFHZ0JDLCtEQUFRLENBQUMsRUFBRCxDQUh4QjtBQUFBO0FBQUEsTUFHUkMsS0FIUTtBQUFBLE1BR0RDLGFBSEM7O0FBQUEsbUJBSXNCRiwrREFBUSxDQUFDLEVBQUQsQ0FKOUI7QUFBQTtBQUFBLE1BSVJHLFFBSlE7QUFBQSxNQUlFQyxnQkFKRjs7QUFNZixNQUFNQyxZQUFZLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ25DQyxZQUFRLENBQUM7QUFDTEMsVUFBSSxFQUFFQyw2REFERDtBQUVMQyxVQUFJLEVBQUU7QUFBRVQsYUFBSyxFQUFMQSxLQUFGO0FBQVNFLGdCQUFRLEVBQVJBO0FBQVQ7QUFGRCxLQUFELENBQVI7QUFJRCxH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QTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0NILENBckVEOztHQUFNekIsSTtVQUVhQyx1RCxFQUNnQkksdUQsRUFDTUEsdUQ7OztLQUpuQ0wsSTtBQXlFU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDRjMTM3ZDdkNDZhNTFiNzNhNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTE9HX0lOX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogeyBlbWFpbCwgcGFzc3dvcmQgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAobWUgJiYgbWUuaWQpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lLCBtZS5pZF0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250ZW50U3R5bGUgPSB7IFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI0UwRTBFMFwiLCBcclxuICAgICAgICBoZWlnaHQ6IFwiNDUwcHhcIiwgXHJcbiAgICAgICAgd2lkdGg6IFwiNTAwcHhcIiwgXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIiwgXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwMHB4XCIsIFxyXG4gICAgICAgIGJhY2tncm91bmQ6XCJ3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17Y29udGVudFN0eWxlfT5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiNTBweCAwXCIsIGZvbnRGYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheSwgc2VyaWZcIiwgZm9udFNpemU6IFwiNTBweFwifX0+Q2hhdHRlcjwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiIHN0eWxlPXt7d2lkdGg6XCIzMDBweFwiLCBtYXJnaW46XCIxMHB4IGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlci1lbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIzMDBweFwiLCBtYXJnaW46XCIxMHB4IGF1dG9cIn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoIDogXCIzMDBweFwiLCBtYXJnaW46IFwiMTBweCBhdXRvXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7d2lkdGggOiBcIjMwMHB4XCIsIG1hcmdpbjogXCIxMHB4IGF1dG9cIn19PuuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmluZFBhc3NXb3JkXCI+PGE+PHAgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT7ruYTrsIDrsojtmLjrpbwg7J6K7Jy87IWo64KY7JqUPzwvcD48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIOqzhOygleydtCDsl4bsnLzsi6DqsIDsmpQ/Jm5ic3A7Jm5ic3A7ICBcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=