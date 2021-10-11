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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      gutter: 8,
      style: {
        clear: "both"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/main",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              style: {
                fontFamily: "Righteous, cursive",
                fontSize: "30px",
                marginLeft: "15px"
              },
              children: "Chatter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 39
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 36
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, _this), me ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 27
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 45
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
          placeholder: "\uAC80\uC0C9",
          onSearch: onSearch,
          style: {
            width: 200
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, _this), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/community",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["GlobalOutlined"], {
              style: {
                fontSize: "25px",
                marginTop: "15px",
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 44
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 41
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/message",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["SendOutlined"], {
              style: {
                fontSize: "25px",
                marginTop: "15px",
                marginLeft: "15px",
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 42
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 39
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/activity",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["StarOutlined"], {
              style: {
                fontSize: "25px",
                marginTop: "15px",
                marginLeft: "15px",
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 43
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 40
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["UserOutlined"], {
              style: {
                fontSize: "25px",
                marginTop: "15px",
                marginLeft: "15px",
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 42
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 39
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
/**
 * <ul className="nav-container" style={{navContainerStyle}}>
                <li className="search" style={listStyle}><Input.Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /></li>
                <li className="message" style={listStyle}><SendOutlined style={{display: "block"}}/></li>
                <li className="profile" style={listStyle}><UserOutlined style={{display: "block"}}/></li>
            </ul>
 */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlSW5wdXQiLCJzZWFyY2hJbnB1dCIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJvblNlYXJjaCIsInVzZUNhbGxiYWNrIiwiUm91dGVyIiwicHVzaCIsImNsZWFyIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIndpZHRoIiwibWFyZ2luVG9wIiwiY29sb3IiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxxQkFDZkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQURJO0FBQUEsTUFDdEJDLEVBRHNCLGdCQUN0QkEsRUFEc0I7O0FBQUEsa0JBRWFDLCtEQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBO0FBQUEsTUFFdkJDLFdBRnVCO0FBQUEsTUFFVkMsbUJBRlU7O0FBRzlCLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFJO0FBQzdCQyxzREFBTSxDQUFDQyxJQUFQLG9CQUF3QkwsV0FBeEI7QUFDSCxHQUYyQixFQUV6QixDQUFDQSxXQUFELENBRnlCLENBQTVCO0FBSUEsc0JBQ0k7QUFBQSwyQkFDSSxzRUFBQyx3Q0FBRDtBQUFLLFlBQU0sRUFBRSxDQUFiO0FBQWdCLFdBQUssRUFBRTtBQUFDTSxhQUFLLEVB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QUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQTVCRDs7R0FBTW5CLFM7VUFDYUUsdUQsRUFDNEJJLHVEOzs7S0FGekNOLFM7QUE4Qk5BLFNBQVMsQ0FBQ29CLFNBQVYsR0FBc0I7QUFDbEJuQixVQUFRLEVBQUVvQixpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBRFAsQ0FBdEI7QUFJZXZCLHdFQUFmO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi5iNjg0OThmYjc4YThkNjg2OTQ2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBNZW51LCBJbnB1dCwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgU3Rhck91dGxpbmVkLCBTZW5kT3V0bGluZWQsIFVzZXJPdXRsaW5lZCwgR2xvYmFsT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHtzZWFyY2hJbnB1dH1gKTtcclxuICAgIH0sIFtzZWFyY2hJbnB1dF0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0gc3R5bGU9e3tjbGVhcjogXCJib3RoXCJ9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFpblwiPjxhPjxoMSBzdHlsZT17e2ZvbnRGYW1pbHk6IFwiUmlnaHRlb3VzLCBjdXJzaXZlXCIsIGZvbnRTaXplOiBcIjMwcHhcIiwgbWFyZ2luTGVmdDpcIjE1cHhcIn19PkNoYXR0ZXI8L2gxPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge21lID8gPFVzZXJQcm9maWxlIC8+IDogPExvZ2luRm9ybSAvPn1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwi6rKA7IOJXCIgb25TZWFyY2g9e29uU2VhcmNofSBzdHlsZT17eyB3aWR0aDogMjAwfX0gLz5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tbXVuaXR5XCI+PGE+PEdsb2JhbE91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luVG9wOlwiMTVweFwiLCBjb2xvcjogXCIjMkMyQzJDXCJ9fS8+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWVzc2FnZVwiPjxhPjxTZW5kT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBtYXJnaW5Ub3A6XCIxNXB4XCIsIG1hcmdpbkxlZnQ6XCIxNXB4XCIsIGNvbG9yOiBcIiMyQzJDMkNcIn19Lz48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY3Rpdml0eVwiPjxhPjxTdGFyT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBtYXJnaW5Ub3A6XCIxNXB4XCIsIG1hcmdpbkxlZnQ6XCIxNXB4XCIsIGNvbG9yOiBcIiMyQzJDMkNcIiB9fS8+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxhPjxVc2VyT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBtYXJnaW5Ub3A6XCIxNXB4XCIsIG1hcmdpbkxlZnQ6XCIxNXB4XCIsIGNvbG9yOiBcIiMyQzJDMkNcIiB9fS8+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcblxyXG5cclxuLyoqXHJcbiAqIDx1bCBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCIgc3R5bGU9e3tuYXZDb250YWluZXJTdHlsZX19PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNlYXJjaFwiIHN0eWxlPXtsaXN0U3R5bGV9PjxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiIG9uU2VhcmNoPXtvblNlYXJjaH0gc3R5bGU9e3sgd2lkdGg6IDIwMCB9fSAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZVwiIHN0eWxlPXtsaXN0U3R5bGV9PjxTZW5kT3V0bGluZWQgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCJ9fS8+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9maWxlXCIgc3R5bGU9e2xpc3RTdHlsZX0+PFVzZXJPdXRsaW5lZCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIn19Lz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gKi8iXSwic291cmNlUm9vdCI6IiJ9