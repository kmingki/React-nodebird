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
        xs: 8,
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          style: {
            margin: "50px 0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px auto",
              height: "50px",
              width: "300px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["GlobalOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 155
            }, _this),
            children: "Explore"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px auto",
              height: "50px",
              width: "300px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["SendOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 155
            }, _this),
            children: "Message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px auto",
              height: "50px",
              width: "300px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["StarOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 155
            }, _this),
            children: "Notification"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px auto",
              height: "50px",
              width: "300px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["UserOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 155
            }, _this),
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 16,
        md: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/main",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              style: {
                fontSize: "30px",
                marginLeft: "15px"
              },
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 39
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 36
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, _this), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
          placeholder: "\uAC80\uC0C9",
          onSearch: onSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlSW5wdXQiLCJzZWFyY2hJbnB1dCIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJvblNlYXJjaCIsInVzZUNhbGxiYWNrIiwiUm91dGVyIiwicHVzaCIsImNsZWFyIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZ0I7QUFBQTs7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQUEscUJBQ2ZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBZjtBQUFBLEdBQUQsQ0FESTtBQUFBLE1BQ3RCQyxFQURzQixnQkFDdEJBLEVBRHNCOztBQUFBLGtCQUVhQywrREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQTtBQUFBLE1BRXZCQyxXQUZ1QjtBQUFBLE1BRVZDLG1CQUZVOztBQUc5QixNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBSTtBQUM3QkMsc0RBQU0sQ0FBQ0MsSUFBUCxvQkFBd0JMLFdBQXhCO0FBQ0gsR0FGMkIsRUFFekIsQ0FBQ0EsV0FBRCxDQUZ5QixDQUE1QjtBQUlBLHNCQUNJO0FBQUEsMkJBQ0ksc0VBQUMsd0NBQUQ7QUFBSyxZQUFNLEVBQUUsQ0FBYjtBQUFnQixXQUFLLEVB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NzgyN2ZlMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgU3Rhck91dGxpbmVkLCBTZW5kT3V0bGluZWQsIFVzZXJPdXRsaW5lZCwgR2xvYmFsT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHtzZWFyY2hJbnB1dH1gKTtcclxuICAgIH0sIFtzZWFyY2hJbnB1dF0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0gc3R5bGU9e3tjbGVhcjogXCJib3RoXCJ9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17OH0gbWQ9ezZ9ID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFpblwiPjxhPjxoMSBzdHlsZT17e2ZvbnRGYW1pbHk6IFwiUmlnaHRlb3VzLCBjdXJzaXZlXCIsIGZvbnRTaXplOiBcIjMwcHhcIiwgbWFyZ2luTGVmdDpcIjE1cHhcIn19PkNoYXR0ZXI8L2gxPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge21lID8gPFVzZXJQcm9maWxlIC8+IDogPExvZ2luRm9ybSAvPn1cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46IFwiNTBweCAwXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IGF1dG9cIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMzAwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEdsb2JhbE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+RXhwbG9yZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggYXV0b1wiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIzMDBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8U2VuZE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+TWVzc2FnZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggYXV0b1wiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIzMDBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8U3Rhck91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+Tm90aWZpY2F0aW9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCBhdXRvXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjMwMHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxVc2VyT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT5Qcm9maWxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MTZ9IG1kPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYWluXCI+PGE+PGgxIHN0eWxlPXt7Zm9udFNpemU6IFwiMzBweFwiLCBtYXJnaW5MZWZ0OlwiMTVweFwifX0+SG9tZTwvaDE+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cIuqygOyDiVwiIG9uU2VhcmNoPXtvblNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcclxuXHJcblxyXG4vKipcclxuICogPHVsIGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIiBzdHlsZT17e25hdkNvbnRhaW5lclN0eWxlfX0+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2VhcmNoXCIgc3R5bGU9e2xpc3RTdHlsZX0+PElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cImlucHV0IHNlYXJjaCB0ZXh0XCIgb25TZWFyY2g9e29uU2VhcmNofSBzdHlsZT17eyB3aWR0aDogMjAwIH19IC8+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlXCIgc3R5bGU9e2xpc3RTdHlsZX0+PFNlbmRPdXRsaW5lZCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIn19Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZpbGVcIiBzdHlsZT17bGlzdFN0eWxlfT48VXNlck91dGxpbmVkIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wifX0vPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAqLyJdLCJzb3VyY2VSb290IjoiIn0=