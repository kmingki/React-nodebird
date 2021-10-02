webpackHotUpdate_N_E("pages/main",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\components\\AppLayout.js",
    _this = undefined,
    _s = $RefreshSig$();













var navContainerStyle = {
  backgroundColor: "blue",
  listStyleType: "none",

  /*목록 기호 제거 */
  margin: "0",
  padding: "0",
  overflow: "hidden",
  zIndex: "100000"
};
var listStyle = {
  "float": "left",
  display: "block",
  padding: "8px",
  textDecoration: "none"
};

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      searchInput = _useInput2[0],
      onChangeSearchInput = _useInput2[1];

  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/hashtag/".concat(searchInput));
  }, [searchInput]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
      className: "nav-container",
      style: {
        navContainerStyle: navContainerStyle
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
        className: "home",
        style: listStyle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/main",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              style: {
                fontFamily: "Playfair Display, serif"
              },
              children: "Chatter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 78
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 75
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 56
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
        className: "search",
        style: listStyle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
          placeholder: "input search text",
          onSearch: onSearch,
          style: {
            width: 200
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 58
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
        className: "message",
        style: listStyle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["SendOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 59
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
        className: "profile",
        style: listStyle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["UserOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 59
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      gutter: 8,
      style: {
        clear: "both"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 6,
        children: me ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 27
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 45
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 12,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
          href: "https://www.naver.com",
          target: "_blank",
          rel: "noreferrer noopener",
          children: "Made by Minji"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(AppLayout, "9AMQZqpNFZkGJG5mjWPxAxYm0TY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c;

$RefreshReg$(_c, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsibmF2Q29udGFpbmVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwicGFkZGluZyIsIm92ZXJmbG93IiwiekluZGV4IiwibGlzdFN0eWxlIiwiZGlzcGxheSIsInRleHREZWNvcmF0aW9uIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlSW5wdXQiLCJzZWFyY2hJbnB1dCIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJvblNlYXJjaCIsInVzZUNhbGxiYWNrIiwiUm91dGVyIiwicHVzaCIsImZvbnRGYW1pbHkiLCJ3aWR0aCIsImNsZWFyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBQztBQUNwQkMsaUJBQWUsRUFBRSxNQURHO0FBRXBCQyxlQUFhLEVBQUUsTUFGSzs7QUFFRztBQUN2QkMsUUFBTSxFQUFFLEdBSFk7QUFJcEJDLFNBQU8sRUFBRSxHQUpXO0FBS3BCQyxVQUFRLEVBQUUsUUFMVTtBQU1wQkMsUUFBTSxFQUFFO0FBTlksQ0FBeEI7QUFTQSxJQUFNQyxTQUFTLEdBQUk7QUFDZixXQUFPLE1BRFE7QUFFZkMsU0FBTyxFQUFFLE9BRk07QUFHZkosU0FBTyxFQUFFLEtBSE07QUFJZkssZ0JBQWMsRUFBRTtBQUpELENBQW5COztBQU9BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLHFCQUNmQywrREFBVyxDQUFD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TUQsUztVQUNhRSx1RCxFQUM0QkksdUQ7OztLQUZ6Q04sUztBQThCTkEsU0FBUyxDQUFDZ0IsU0FBVixHQUFzQjtBQUNsQmYsVUFBUSxFQUFFZ0IsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURQLENBQXRCO0FBSWVuQix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLmU3ZjlhYWE2OWVlMGI4YWI1YmQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW5Gb3JtJztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4vVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBOb2RlRXhwYW5kT3V0bGluZWQsIFNlbmRPdXRsaW5lZCwgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IG5hdkNvbnRhaW5lclN0eWxlPXtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIsXHJcbiAgICBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIiwgLyrrqqnroZ0g6riw7Zi4IOygnOqxsCAqL1xyXG4gICAgbWFyZ2luOiBcIjBcIixcclxuICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICB6SW5kZXg6IFwiMTAwMDAwXCIsXHJcbn1cclxuXHJcbmNvbnN0IGxpc3RTdHlsZSA9ICB7XHJcbiAgICBmbG9hdDogXCJsZWZ0XCIsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG59XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIG9uQ2hhbmdlU2VhcmNoSW5wdXRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xyXG4gICAgfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCIgc3R5bGU9e3tuYXZDb250YWluZXJTdHlsZX19PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIiBzdHlsZT17bGlzdFN0eWxlfT48TGluayBocmVmPVwiL21haW5cIj48YT48aDEgc3R5bGU9e3tmb250RmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXksIHNlcmlmXCJ9fT5DaGF0dGVyPC9oMT48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2VhcmNoXCIgc3R5bGU9e2xpc3RTdHlsZX0+PElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cImlucHV0IHNlYXJjaCB0ZXh0XCIgb25TZWFyY2g9e29uU2VhcmNofSBzdHlsZT17eyB3aWR0aDogMjAwIH19IC8+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlXCIgc3R5bGU9e2xpc3RTdHlsZX0+PFNlbmRPdXRsaW5lZCAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZmlsZVwiIHN0eWxlPXtsaXN0U3R5bGV9PjxVc2VyT3V0bGluZWQgLz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0gc3R5bGU9e3tjbGVhcjogXCJib3RoXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAge21lID8gPFVzZXJQcm9maWxlIC8+IDogPExvZ2luRm9ybSAvPn1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubmF2ZXIuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPk1hZGUgYnkgTWluamk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=