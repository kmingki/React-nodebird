webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\pages\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();












var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "signup__ErrorMessage",
  componentId: "sc-1oeks01-0"
})(["color:red;"]);
_c = ErrorMessage;
var contentStyle = {
  border: "1px solid #E0E0E0",
  height: "500px",
  width: "500px",
  margin: "auto",
  marginTop: "100px",
  background: "white"
};

var Signup = function Signup() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      signUpLoading = _useSelector.signUpLoading,
      signUpDone = _useSelector.signUpDone,
      signUpError = _useSelector.signUpError,
      me = _useSelector.me; //useEffect
  //리액트컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 Hook


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (me !== null && me !== void 0 && me.id) {
      alert('이미 로그인 하셨습니다.');
      router.push('/');
    }
  }, [me === null || me === void 0 ? void 0 : me.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (signUpDone) {
      router.push('/');
    }
  }), [signUpDone];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["SIGN_UP_REQUEST"],
      data: {
        email: email,
        password: password,
        nickname: nickname
      }
    });
  }, [password, passwordCheck, term]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: "Chatter\uC5D0 \uAC00\uC785\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: contentStyle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h1", {
        style: {
          textAlign: "center",
          margin: "10px 0",
          fontFamily: "Righteous, cursive",
          fontSize: "50px"
        },
        children: "Chatter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
        style: {
          textAlign: "center",
          fontWeight: "bolder",
          color: "grey"
        },
        children: "\uC0C8 \uACC4\uC815 \uB9CC\uB4E4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "loginForm",
        style: {
          width: "300px",
          margin: "10px auto"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
              name: "user-email",
              type: "email",
              placeholder: "\uC774\uBA54\uC77C",
              size: "large",
              style: {
                width: "300px",
                margin: "5px auto"
              },
              value: email,
              onChange: onChangeEmail,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
              name: "user-nickname",
              type: "email",
              placeholder: "\uB2C9\uB124\uC784",
              size: "large",
              style: {
                width: "300px",
                margin: "5px auto"
              },
              value: nickname,
              onChange: onChangeNickname,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Password, {
              name: "user-password",
              type: "password",
              placeholder: "\uBE44\uBC00\uBC88\uD638",
              size: "large",
              style: {
                width: "300px",
                margin: "5px auto"
              },
              value: password,
              onChange: onChangePassword,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Password, {
              name: "user-password-check",
              type: "password",
              placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
              size: "large",
              style: {
                width: "300px",
                margin: "5px auto"
              },
              value: passwordCheck,
              onChange: onChangePasswordCheck,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 25
            }, _this), passwordError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(ErrorMessage, {
              children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 47
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "primary",
              htmlType: "submit",
              children: "\uAC00\uC785\uD558\uAE30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            style: {
              textAlign: "center"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                children: "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 40
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Signup, "PuHCNirkbmMkQQKpE1Yrz2aGpTc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c2 = Signup;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsImNvbnRlbnRTdHlsZSIsImJvcmRlciIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZCIsIlNpZ251cCIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJtZSIsInVzZUVmZmVjdCIsImlkIiwiYWxlcnQiLCJwdXNoIiwidXNlSW5wdXQiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwidGVybSIsInNldFRlcm1FcnJvciIsInR5cGUiLCJTSUdOX1VQX1JFUVVFU1QiLCJkYXRhIiwidGV4dEFsaWduIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0EsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtCQUFsQjtLQUFNRixZO0FBSU4sSUFBTUcsWUFBWSxHQUFHO0FBQ2pCQyxRQUFNLEVBQUUsbUJBRFM7QUFFakJDLFFBQU0sRUFBRSxPQUZTO0FBR2pCQyxPQUFLLEVBQUUsT0FIVTtBQUlqQkMsUUFBTSxFQUFFLE1BSlM7QUFLakJDLFdBQVMsRUFBRSxPQUxNO0FBTWpCQyxZQUFVLEVBQUM7QUFOTSxDQUFyQjs7QUFTQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZpQixxQkFHdUNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBZjtBQUFBLEdBQUQsQ0FIbEQ7QUFBQSxNQUdSQyxhQUhRLGdCQUdSQSxhQUhRO0FBQUEsTUFHT0MsVUFIUCxnQkFHT0EsVUFIUDtBQUFBLE1BR21CQyxXQUhuQixnQkFHbUJBLFdBSG5CO0FBQUEsTUFHZ0NDLEVBSGhDLGdCQUdnQ0EsRUFIaEMsRUFLakI7QUFDQTs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBSTtBQUNWLFFBQUlELEVBQUosYUFBSUEsRUFBSixlQUFJQSxFQUFFLENBQUVFLEVBQVIsRUFBWTtBQUNSQyxXQUFLLENBQUMsZUFBRCxDQUFMO0FBQ0FiLFlBQU0sQ0FBQ2MsSUFBUCxDQUFZLEdBQVo7QUFDSDtBQUNKLEdBTFEsRUFLTixDQUFDSixFQUFELGFBQUNBLEVBQUQsdUJBQUNBLEVBQUUsQ0FBRUUsRUFBTCxDQUxNLENBQVQ7QUFPQUQseURBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBSUgsVUFBSixFQUFnQjtBQUNaUixZQUFNLENBQUNjLElBQVAsQ0FBWSxHQUFaO0FBQ0g7QUFDSixHQUpRLENBQVQsRUFJSSxDQUFDTixVQUFELENBSko7QUFNQUcseURBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBSUYsV0FBSixFQUFpQjtBQUNiSSxXQUFLLENBQUNKLFdBQUQsQ0FBTDtBQUNIO0FBQ0osR0FKUSxFQUlQLENBQUNBLFdBQUQsQ0FKTyxDQUFUOztBQXBCaUIsa0JBMkJjTSwrREFBUSxDQUFDLEVBQUQsQ0EzQnRCO0FBQUE7QUFBQSxNQTJCVkMsS0EzQlU7QUFBQSxNQTJCSEMsYUEzQkc7O0FBQUEsbUJBNEJvQkYsK0RBQVEsQ0FBQyxFQUFELENBNUI1QjtBQUFBO0FBQUEsTUE0QlZHLFFBNUJVO0FBQUEsTUE0QkFDLGdCQTVCQTs7QUFBQSxtQkE2Qm9CSiwrREFBUSxDQUFDLEVBQUQsQ0E3QjVCO0FBQUE7QUFBQSxNQTZCVkssUUE3QlU7QUFBQSxNQTZCQUMsZ0JBN0JBOztBQUFBLGtCQStCeUJDLHNEQUFRLENBQUMsRUFBRCxDQS9CakM7QUFBQSxNQStCVkMsYUEvQlU7QUFBQSxNQStCS0MsZ0JBL0JMOztBQUFBLG1CQWdDeUJGLHNEQUFRLENBQUMsS0FBRCxDQWhDakM7QUFBQSxNQWdDVkcsYUFoQ1U7QUFBQSxNQWdDS0MsZ0JBaENMOztBQWtDakIsTUFBTUMscUJBQXFCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFLO0FBQzNDTCxvQkFBZ0IsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFDQUwsb0JBQWdCLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CWCxRQUFwQixDQUFoQjtBQUNILEdBSHdDLEVBR3RDLENBQUNBLFFBQUQsQ0FIc0MsQ0FBekM7QUFLQSxNQUFNWSxRQUFRLEdBQUdKLHlEQUFXLENBQUMsWUFBSTtBQUM3QixRQUFHUixRQUFRLEtBQUtHLGFBQWhCLEVBQThCO0FBQzFCLGFBQU9HLGdCQUFnQixDQUFDLElBQUQsQ0FBdkI7QUFDSDs7QUFDRCxRQUFHLENBQUNPLElBQUosRUFBVTtBQUNOLGFBQU9DLFlBQVksQ0FBQyxJQUFELENBQW5CO0FBQ0g7O0FBRURoQyxZQUFRLENBQUM7QUFDTGlDLFVBQUksRUFBRUMsOERBREQ7QUFFTEMsVUFBSSxFQUFFO0FBQUVyQixhQUFLLEVBQUxBLEtBQUY7QUFBU0ksZ0JBQVEsRUFBUkEsUUFBVDtBQUFtQkYsZ0JBQVEsRUFBUkE7QUFBbkI7QUFGRCxLQUFELENBQVI7QUFLSCxHQWIyQixFQWExQixDQUFDRSxRQUFELEVBQVVHLGFBQVYsRUFBd0JVLElBQXhCLENBYjBCLENBQTVCO0FBZUEsc0JBQ0k7QUFBQSw0QkFDQSxzRUFBQyxnREFBRDtBQUFBLDZCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBSUE7QUFBSyxXQUFLLEVBQUV6QyxZQUFaO0FBQUEsOEJBQ0k7QUFBSSxhQUFLLEVBQUU7QUFBQzhDLG1CQUFTLEVBQUUsUUFBWjtBQUFzQjFDLGdCQUFNLEVBQUUsUUFBOUI7QUFBd0MyQyxvQkFBVSxFQUFFLG9CQUFwRDtBQUEwRUMsa0JBQVEsRUFBRTtBQUFwRixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFJLGFBQUssRUFBRTtBQUFDRixtQkFBUyxFQUFFLFFBQVo7QUFBc0JHLG9CQUFVLEVBQUUsUUFBbEM7QUFBNENDLGVBQUssRUFBRTtBQUFuRCxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUEyQixhQUFLLEVBQUU7QUFBQy9DLGVBQUssRUFBQyxPQUFQO0FBQWdCQyxnQkFBTSxFQUFDO0FBQXZCLFNBQWxDO0FBQUEsK0JBQ0ksc0VBQUMseUNBQUQ7QUFBQSxrQ0FDSTtBQUFBLG1DQUNJLHNFQUFDLDBDQUFEO0FBQ0Esa0JBQUksRUFBQyxZQURMO0FBRUEsa0JBQUksRUFBQyxPQUZMO0FBR0EseUJBQVcsRUFBQyxvQkFIWjtBQUlBLGtCQUFJLEVBQUMsT0FKTDtBQUtBLG1CQUFLLEVBQUU7QUFBQ0QscUJBQUssRUFBQyxPQUFQO0FBQWdCQyxzQkFBTSxFQUFDO0FBQXZCLGVBTFA7QUFNQSxtQkFBSyxFQUFFb0IsS0FOUDtBQU9BLHNCQUFRLEVBQUVDLGFBUFY7QUFRQSxzQkFBUTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBWUk7QUFBQSxtQ0FDQSxzRUFBQywwQ0FBRDtBQUNRLGtCQUFJLEVBQUMsZUFEYjtBQUVRLGtCQUFJLEVBQUMsT0FGYjtBQUdRLHlCQUFXLEVBQUMsb0JBSHBCO0FBSVEsa0JBQUksRUFBQyxPQUpiO0FBS1EsbUJBQUssRUFBRTtBQUFDdEIscUJBQUssRUFBQyxPQUFQO0FBQWdCQyxzQkFBTSxFQUFDO0FBQXZCLGVBTGY7QUFNUSxtQkFBSyxFQUFFc0IsUUFOZjtBQU9RLHNCQUFRLEVBQUVDLGdCQVBsQjtBQVFRLHNCQUFRO0FBUmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpKLGVBd0JJO0FBQUEsbUNBQ0ksc0VBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQ0ksa0JBQUksRUFBQyxlQURUO0FBRUksa0JBQUksRUFBQyxVQUZUO0FBR0kseUJBQVcsRUFBQywwQkFIaEI7QUFJSSxrQkFBSSxFQUFDLE9BSlQ7QUFLSSxtQkFBSyxFQUFFO0FBQUN4QixxQkFBSyxFQUFHLE9BQVQ7QUFBa0JDLHNCQUFNLEVBQUU7QUFBMUIsZUFMWDtBQU1JLG1CQUFLLEVBQUV3QixRQU5YO0FBT0ksc0JBQVEsRUFBRUMsZ0JBUGQ7QUFRSSxzQkFBUTtBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhCSixlQW1DSTtBQUFBLG9DQUNJLHNFQUFDLDBDQUFELENBQU8sUUFBUDtBQUNJLGtCQUFJLEVBQUMscUJBRFQ7QUFFSSxrQkFBSSxFQUFDLFVBRlQ7QUFHSSx5QkFBVyxFQUFDLHVDQUhoQjtBQUlJLGtCQUFJLEVBQUMsT0FKVDtBQUtJLG1CQUFLLEVBQUU7QUFBQzFCLHFCQUFLLEVBQUcsT0FBVDtBQUFrQkMsc0JBQU0sRUFBRTtBQUExQixlQUxYO0FBTUksbUJBQUssRUFBRTJCLGFBTlg7QUFPSSxzQkFBUSxFQUFFSSxxQkFQZDtBQVFJLHNCQUFRO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQVVTRixhQUFhLGlCQUFJLHNFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQ0osZUErQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEvQ0osZUFnREk7QUFBSyxpQkFBSyxFQUFFO0FBQUNrQixxQkFBTyxFQUFFLE1BQVY7QUFBa0JDLDRCQUFjLEVBQUUsUUFBbEM7QUFBNENDLHdCQUFVLEVBQUU7QUFBeEQsYUFBWjtBQUFBLG1DQUNJLHNFQUFDLDJDQUFEO0FBQVEsa0JBQUksRUFBQyxTQUFiO0FBQXVCLHNCQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhESixlQW1ESTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5ESixlQW9ESTtBQUFLLGlCQUFLLEVBQUU7QUFBQ1AsdUJBQVMsRUFBRTtBQUFaLGFBQVo7QUFBQSxtQ0FDSSxzRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKQTtBQUFBLGtCQURKO0FBdUVILENBN0hEOztHQUFNdkMsTTtVQUNhRSxxRCxFQUNFRSx1RCxFQUN1Q0MsdUQsRUF3QnpCVyx1RCxFQUNNQSx1RCxFQUNBQSx1RDs7O01BN0JuQ2hCLE07O0FBOElTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuMWIwOTc5YzJmOTE2Y2JhYTFhYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIENoZWNrYm94LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfRE9ORSwgTE9BRF9NWV9JTkZPX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuY29sb3I6IHJlZDtcclxuYDtcclxuXHJcbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHsgXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFMEUwRTBcIiwgXHJcbiAgICBoZWlnaHQ6IFwiNTAwcHhcIiwgXHJcbiAgICB3aWR0aDogXCI1MDBweFwiLCBcclxuICAgIG1hcmdpbjogXCJhdXRvXCIsIFxyXG4gICAgbWFyZ2luVG9wOiBcIjEwMHB4XCIsIFxyXG4gICAgYmFja2dyb3VuZDpcIndoaXRlXCJcclxufTtcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyAgc2lnblVwTG9hZGluZywgc2lnblVwRG9uZSwgc2lnblVwRXJyb3IsIG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuXHJcbiAgICAvL3VzZUVmZmVjdFxyXG4gICAgLy/rpqzslaHtirjsu7Ttj6zrhIztirjqsIAg66CM642U66eBIOuQoOuVjOuniOuLpCDtirnsoJUg7J6R7JeF7J2EIOyLpO2Wie2VoCDsiJgg7J6I64+E66GdIO2VmOuKlCBIb29rXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAobWU/LmlkKSB7IFxyXG4gICAgICAgICAgICBhbGVydCgn7J2066+4IOuhnOq3uOyduCDtlZjshajsirXri4jri6QuJyk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lPy5pZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChzaWduVXBEb25lKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSksIFtzaWduVXBEb25lXTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoc2lnblVwRXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoc2lnblVwRXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3NpZ25VcEVycm9yXSlcclxuXHJcblxyXG4gICAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgICB9LCBbcGFzc3dvcmRdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgaWYocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spe1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRlcm0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgZW1haWwsIHBhc3N3b3JkLCBuaWNrbmFtZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxbcGFzc3dvcmQscGFzc3dvcmRDaGVjayx0ZXJtXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DaGF0dGVy7JeQIOqwgOyehe2VmOq4sDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPiBcclxuICAgICAgICA8ZGl2IHN0eWxlPXtjb250ZW50U3R5bGV9PlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgZm9udEZhbWlseTogXCJSaWdodGVvdXMsIGN1cnNpdmVcIiwgZm9udFNpemU6IFwiNTBweFwifX0+Q2hhdHRlcjwvaDE+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiwgY29sb3I6IFwiZ3JleVwifX0+7IOIIOqzhOyglSDrp4zrk6TquLA8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiIHN0eWxlPXt7d2lkdGg6XCIzMDBweFwiLCBtYXJnaW46XCIxMHB4IGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXItZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMzAwcHhcIiwgbWFyZ2luOlwiNXB4IGF1dG9cIn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlci1uaWNrbmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64uJ64Sk7J6EXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMzAwcHhcIiwgbWFyZ2luOlwiNXB4IGF1dG9cIn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aCA6IFwiMzAwcHhcIiwgbWFyZ2luOiBcIjVweCBhdXRvXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmQtY2hlY2tcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGggOiBcIjMwMHB4XCIsIG1hcmdpbjogXCI1cHggYXV0b1wifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRDaGVja30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiA8RXJyb3JNZXNzYWdlPuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSA+7J2066+4IOqzhOygleydtCDsnojsnLzsi6DqsIDsmpQ/PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCk9PntcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7IC8vUkVRVUVTVOqwgCBTVUNDRVNT6rCAIOuQoOuVjOq5jOyngCDquLDri6TroKTspIDri6QuXHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwic291cmNlUm9vdCI6IiJ9