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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var contentStyle = {
  border: '1px solid #E0E0E0',
  height: '450px',
  width: '500px',
  margin: 'auto',
  marginTop: '100px',
  background: 'white'
};

var Home = function Home(props) {
  _s();

  var number = props.number,
      increment = props.increment,
      decrement = props.decrement;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      logInError = _useSelector.logInError; // connect() 대신 useSelector 사용


  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOG_IN_REQUEST"],
      data: {
        email: email,
        password: password
      }
    });
  }, [email, password]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (logInError) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].info(logInError);
    }
  }, [logInError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (me && me.id) {
      router.push('/main');
    }
  }, [me, me === null || me === void 0 ? void 0 : me.id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    style: contentStyle,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
      style: {
        textAlign: 'center',
        margin: '50px 0',
        fontFamily: 'Righteous, cursive',
        fontSize: '50px'
      },
      children: "Chatter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "loginForm",
      style: {
        width: '300px',
        margin: '10px auto'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onFinish: onSubmitForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            name: "user-email",
            type: "email",
            placeholder: "\uC774\uBA54\uC77C",
            size: "large",
            style: {
              width: '300px',
              margin: '10px auto'
            },
            value: email,
            onChange: onChangeEmail,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
            name: "user-password",
            type: "password",
            placeholder: "\uBE44\uBC00\uBC88\uD638",
            size: "large",
            style: {
              width: '300px',
              margin: '10px auto'
            },
            value: password,
            onChange: onChangePassword,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          htmlType: "submit",
          style: {
            width: '300px',
            margin: '10px auto'
          },
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/findPassWord",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              style: {
                textAlign: 'center'
              },
              children: "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 38
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(Home, "pRPbkekHg7hKRscbpuqiUB7rtJ0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY29udGVudFN0eWxlIiwiYm9yZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kIiwiSG9tZSIsInByb3BzIiwibnVtYmVyIiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2dJbkVycm9yIiwidXNlSW5wdXQiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJMT0dfSU5fUkVRVUVTVCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJtZXNzYWdlIiwiaW5mbyIsImlkIiwicHVzaCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxRQUFNLEVBQUUsbUJBRFc7QUFFbkJDLFFBQU0sRUFBRSxPQUZXO0FBR25CQyxPQUFLLEVBQUUsT0FIWTtBQUluQkMsUUFBTSxFQUFFLE1BSlc7QUFLbkJDLFdBQVMsRUFBRSxPQUxRO0FBTW5CQyxZQUFVLEVBQUU7QUFOTyxDQUFyQjs7QUFTQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNkQyxNQURjLEdBQ21CRCxLQURuQixDQUNkQyxNQURjO0FBQUEsTUFDTkMsU0FETSxHQUNtQkYsS0FEbkIsQ0FDTkUsU0FETTtBQUFBLE1BQ0tDLFNBREwsR0FDbUJILEtBRG5CLENBQ0tHLFNBREw7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QUFBLGlCQWJGLGVBMEJFLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsa0JBQVEsRUFBQyxRQUFoQztBQUF5QyxlQUFLLEVBQUU7QUFBRXRCLGlCQUFLLEVBQUUsT0FBVDtBQUFrQkMsa0JBQU0sRUFBRTtBQUExQixXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkYsZUEyQkUscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsZUFBWDtBQUFBLGlDQUEyQjtBQUFBLG1DQUFHO0FBQUcsbUJBQUssRUFBRTtBQUFFZ0MseUJBQVMsRUFBRTtBQUFiLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JGLDZFQThCRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQXBFRDs7R0FBTTdCLEk7VUFFYU0sdUQsRUFDRkUscUQsRUFDWUMsdUQsRUFDSUssdUQsRUFDTUEsdUQ7OztLQU5qQ2QsSTtBQXNFU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzE5NGNlOTFhYzFmODNkYjNmYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMT0dfSU5fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgY29udGVudFN0eWxlID0ge1xyXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjRTBFMEUwJyxcclxuICBoZWlnaHQ6ICc0NTBweCcsXHJcbiAgd2lkdGg6ICc1MDBweCcsXHJcbiAgbWFyZ2luOiAnYXV0bycsXHJcbiAgbWFyZ2luVG9wOiAnMTAwcHgnLFxyXG4gIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbn07XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBudW1iZXIsIGluY3JlbWVudCwgZGVjcmVtZW50IH0gPSBwcm9wcztcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBtZSwgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTsgLy8gY29ubmVjdCgpIOuMgOyLoCB1c2VTZWxlY3RvciDsgqzsmqlcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgZW1haWwsIHBhc3N3b3JkIH0sXHJcbiAgICB9KTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9nSW5FcnJvcikge1xyXG4gICAgICBtZXNzYWdlLmluZm8obG9nSW5FcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtZSAmJiBtZS5pZCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL21haW4nKTtcclxuICAgIH1cclxuICB9LCBbbWUsIG1lPy5pZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17Y29udGVudFN0eWxlfT5cclxuICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzUwcHggMCcsIGZvbnRGYW1pbHk6ICdSaWdodGVvdXMsIGN1cnNpdmUnLCBmb250U2l6ZTogJzUwcHgnIH19PkNoYXR0ZXI8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkZvcm1cIiBzdHlsZT17eyB3aWR0aDogJzMwMHB4JywgbWFyZ2luOiAnMTBweCBhdXRvJyB9fT5cclxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066mU7J28XCJcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnLCBtYXJnaW46ICcxMHB4IGF1dG8nIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnLCBtYXJnaW46ICcxMHB4IGF1dG8nIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyB3aWR0aDogJzMwMHB4JywgbWFyZ2luOiAnMTBweCBhdXRvJyB9fT7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmluZFBhc3NXb3JkXCI+PGE+PHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT7ruYTrsIDrsojtmLjrpbwg7J6K7Jy87IWo64KY7JqUPzwvcD48L2E+PC9MaW5rPlxyXG5cclxuICAgICAgICAgIOqzhOygleydtCDsl4bsnLzsi6DqsIDsmpQ/Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+XHJcblxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==