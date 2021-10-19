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
              height: "15%",
              width: "100%",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["HomeOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 153
            }, _this),
            children: "Home"
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
              height: "15%",
              width: "300px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["GlobalOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 154
            }, _this),
            children: "Explore"
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
              height: "15%",
              width: "300px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["SendOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 154
            }, _this),
            children: "Message"
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
              height: "15%",
              width: "300px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["StarOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 154
            }, _this),
            children: "Notification"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px auto",
              height: "15%",
              width: "300px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["UserOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 154
            }, _this),
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
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
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
            children: me.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 155
          }, _this),
          children: ["\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            style: {
              display: "inline-block"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
              style: {
                fontSize: "15px"
              },
              children: [me.nickname, me.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 66
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 27
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
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
              lineNumber: 40,
              columnNumber: 39
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 36
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
          placeholder: "\uAC80\uC0C9",
          onSearch: onSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlSW5wdXQiLCJzZWFyY2hJbnB1dCIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJvblNlYXJjaCIsInVzZUNhbGxiYWNrIiwiUm91dGVyIiwicHVzaCIsImNsZWFyIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwibmlja25hbWUiLCJlbWFpbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLHFCQUNmQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLElBQWY7QUFBQSxHQUFELENBREk7QUFBQSxNQUN0QkMsRUFEc0IsZ0JBQ3RCQSxFQURzQjs7QUFBQSxrQkFFYUMsK0RBQVEsQ0FBQyxFQUFELENBRnJCO0FBQUE7QUFBQSxNQUV2QkMsV0FGdUI7QUFBQSxNQUVWQyxtQkFGVTs7QUFHOUIsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQUk7QUFDN0JDLHNEQUFNLENBQUNDLElBQVAsb0JBQXdCTCxXQUF4QjtBQUNILEdBRjJCLEVBRXpCLENBQUNBLFdBQUQsQ0FGeUIsQ0FBNUI7QUFJQSxzQkFDSTtBQUFBLDJCQUNJLHNFQUFDLHdDQUFEO0FBQUssWUFBTSxFQUFFLENBQWI7QUFBZ0IsV0FBSyxFQUFFO0FBQUNNLGFBQUssRUFBRTtBQUFSLE9BQXZCO0FBQUEsOEJBRUksc0VBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFZLFVBQUUsRUFBRSxDQUFoQjtBQUFBLGdDQUNBLHNFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLE9BQVg7QUFBQSxpQ0FBbUI7QUFBQSxtQ0FBRztBQUFJLG1CQUFLLEVBQUU7QUFBQ0MsMEJBQVUsRUFBRSxvQkFBYjtBQUFtQ0Msd0JBQVEsRUFBRSxNQUE3QztBQUFxREMsMEJBQVUsRUFBQztBQUFoRSxlQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLEVBRUtYLEVBQUUsZ0JBQUcsc0VBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxnQkFBcUIsc0VBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGNUIsZUFHQTtBQUFLLGVBQUssRUFBRTtBQUFDWSxrQkFBTSxFQUFFO0FBQVQsV0FBWjtBQUFBLGtDQUNBLHNFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFLLEVBQUMsT0FBMUI7QUFBa0MsaUJBQUssRUFBRTtBQUFDQyxxQkFBTyxFQUFFLE9BQVY7QUFBbUJELG9CQUFNLEVBQUUsV0FBM0I7QUFBd0NFLG9CQUFNLEVBQUUsS0FBaEQ7QUFBdURDLG1CQUFLLEVBQUUsTUFBOUQ7QUFBc0VMLHNCQUFRLEVBQUU7QUFBaEYsYUFBekM7QUFBa0ksZ0JBQUksZUFBRSxzRUFBQywrREFBRDtBQUFjLG1CQUFLLEVBQUU7QUFBQ00scUJBQUssRUFBRTtBQUFSO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUEsc0VBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQUssRUFBQyxPQUExQjtBQUFrQyxpQkFBSyxFQUFFO0FBQUNILHFCQUFPLEVBQUUsT0FBVjtBQUFtQkQsb0JBQU0sRUFBRSxXQUEzQjtBQUF3Q0Usb0JBQU0sRUFBRSxLQUFoRDtBQUF1REMsbUJBQUssRUFBRSxPQUE5RDtBQUF1RUwsc0JBQVEsRUFBRTtBQUFqRixhQUF6QztBQUFtSSxnQkFBSSxlQUFFLHNFQUFDLGlFQUFEO0FBQWdCLG1CQUFLLEVBQUU7QUFBQ00scUJBQUssRUFBRTtBQUFSO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBLGVBR0Esc0VBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQUssRUFBQyxPQUExQjtBQUFrQyxpQkFBSyxFQUFFO0FBQUNILHFCQUFPLEVBQUUsT0FBVjtBQUFtQkQsb0JBQU0sRUFBRSxXQUEzQjtBQUF3Q0Usb0JBQU0sRUFBRSxLQUFoRDtBQUF1REMsbUJBQUssRUFBRSxPQUE5RDtBQUF1RUwsc0JBQVEsRUFBRTtBQUFqRixhQUF6QztBQUFtSSxnQkFBSSxlQUFFLHNFQUFDLCtEQUFEO0FBQWMsbUJBQUssRUFBRTtBQUFDTSxxQkFBSyxFQUFFO0FBQVI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBekk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEEsZUFJQSxzRUFBQywyQ0FBRDtBQUFRLGdCQUFJLEVBQUMsTUFBYjtBQUFvQixpQkFBSyxFQUFDLE9BQTFCO0FBQWtDLGlCQUFLLEVBQUU7QUFBQ0gscUJBQU8sRUFBRSxPQUFWO0FBQW1CRCxvQkFBTSxFQUFFLFdBQTNCO0FBQXdDRSxvQkFBTSxFQUFFLEtBQWhEO0FBQXVEQyxtQkFBSyxFQUFFLE9BQTlEO0FBQXVFTCxzQkFBUSxFQUFFO0FBQWpGLGFBQXpDO0FBQW1JLGdCQUFJLGVBQUUsc0VBQUMsK0RBQUQ7QUFBYyxtQkFBSyxFQUFFO0FBQUNNLHFCQUFLLEVBQUU7QUFBUjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF6STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKQSxlQUtBLHNFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFLLEVBQUMsT0FBMUI7QUFBa0MsaUJBQUssRUFBRTtBQUFDSCxxQkFBTyxFQUFFLE9BQVY7QUFBbUJELG9CQUFNLEVBQUUsV0FBM0I7QUFBd0NFLG9CQUFNLEVBQUUsS0FBaEQ7QUFBdURDLG1CQUFLLEVBQUUsT0FBOUQ7QUFBdUVMLHNCQUFRLEVBQUU7QUFBakYsYUFBekM7QUFBbUksZ0JBQUksZUFBRSxzRUFBQywrREFBRDtBQUFjLG1CQUFLLEVBQUU7QUFBQ00scUJBQUssRUFBRTtBQUFSO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIQSxlQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkEsZUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhBLGVBWUEsc0VBQUMsMkNBQUQ7QUFBUSxjQUFJLEVBQUMsTUFBYjtBQUFvQixlQUFLLEVBQUMsT0FBMUI7QUFBa0MsZUFBSyxFQUFFO0FBQUNILG1CQUFPLEVBQUUsT0FBVjtBQUFtQkQsa0JBQU0sRUFBRSxXQUEzQjtBQUF3Q0Usa0JBQU0sRUFBRSxNQUFoRDtBQUF3REMsaUJBQUssRUFBRSxPQUEvRDtBQUF3RUwsb0JBQVEsRUFBRTtBQUFsRixXQUF6QztBQUFvSSxjQUFJLGVBQUUsc0VBQUMsMkNBQUQ7QUFBQSxzQkFBU1YsRUFBRSxDQUFDaUIsUUFBSCxDQUFZLENBQVo7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUExSTtBQUFBLDBDQUNVO0FBQUssaUJBQUssRUFBRTtBQUFDSixxQkFBTyxFQUFFO0FBQVYsYUFBWjtBQUFBLG1DQUF1QztBQUFHLG1CQUFLLEVBQUU7QUFBQ0gsd0JBQVEsRUFBRTtBQUFYLGVBQVY7QUFBQSx5QkFBK0JWLEVBQUUsQ0FBQ2lCLFFBQWxDLEVBQTRDakIsRUFBRSxDQUFDa0IsS0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBaUJJLHNFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUUsRUFBakI7QUFBQSxnQ0FDQSxzRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxPQUFYO0FBQUEsaUNBQW1CO0FBQUEsbUNBQUc7QUFBSSxtQkFBSyxFQUFFO0FBQUNSLHdCQUFRLEVBQUUsTUFBWDtBQUFtQkMsMEJBQVUsRUFBQztBQUE5QixlQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLEVBRUNmLFFBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJKLGVBcUJJLHNFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUUsQ0FBaEI7QUFBQSwrQkFDQSxzRUFBQywwQ0FBRCxDQUFPLE1BQVA7QUFBYyxxQkFBVyxFQUFDLGNBQTFCO0FBQStCLGtCQUFRLEVBQUVRO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZCSCxDQXBDRDs7R0FBTVQsUztVQUNhRSx1RCxFQUM0QkksdUQ7OztLQUZ6Q04sUztBQXNDTkEsU0FBUyxDQUFDd0IsU0FBVixHQUFzQjtBQUNsQnZCLFVBQVEsRUFBRXdCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEUCxDQUF0QjtBQUllM0Isd0VBQWY7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjBjYjQ4MzgyZDEwNGY5YzI5MWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCwgQnV0dG9uLCBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgU3Rhck91dGxpbmVkLCBTZW5kT3V0bGluZWQsIFVzZXJPdXRsaW5lZCwgR2xvYmFsT3V0bGluZWQsIEhvbWVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIG9uQ2hhbmdlU2VhcmNoSW5wdXRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xyXG4gICAgfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXs4fSBzdHlsZT17e2NsZWFyOiBcImJvdGhcIn19PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXs4fSBtZD17Nn0gPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYWluXCI+PGE+PGgxIHN0eWxlPXt7Zm9udEZhbWlseTogXCJSaWdodGVvdXMsIGN1cnNpdmVcIiwgZm9udFNpemU6IFwiMzBweFwiLCBtYXJnaW5MZWZ0OlwiMTVweFwifX0+Q2hhdHRlcjwvaDE+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7bWUgPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtIC8+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogXCI1MHB4IDBcIn19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggYXV0b1wiLCBoZWlnaHQ6IFwiMTUlXCIsIHdpZHRoOiBcIjEwMCVcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEhvbWVPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PkhvbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IGF1dG9cIiwgaGVpZ2h0OiBcIjE1JVwiLCB3aWR0aDogXCIzMDBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8R2xvYmFsT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT5FeHBsb3JlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCBhdXRvXCIsIGhlaWdodDogXCIxNSVcIiwgd2lkdGg6IFwiMzAwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PFNlbmRPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59Pk1lc3NhZ2U8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IGF1dG9cIiwgaGVpZ2h0OiBcIjE1JVwiLCB3aWR0aDogXCIzMDBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8U3Rhck91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+Tm90aWZpY2F0aW9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCBhdXRvXCIsIGhlaWdodDogXCIxNSVcIiwgd2lkdGg6IFwiMzAwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PFVzZXJPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PlByb2ZpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IGF1dG9cIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMzAwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+fT5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDs8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19PjxwIHN0eWxlPXt7Zm9udFNpemU6IFwiMTVweFwifX0+e21lLm5pY2tuYW1lfXttZS5lbWFpbH08L3A+PC9kaXY+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezE2fSBtZD17MTJ9ID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFpblwiPjxhPjxoMSBzdHlsZT17e2ZvbnRTaXplOiBcIjMwcHhcIiwgbWFyZ2luTGVmdDpcIjE1cHhcIn19PkhvbWU8L2gxPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9XCLqsoDsg4lcIiBvblNlYXJjaD17b25TZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcblxyXG5cclxuLyoqXHJcbiAqIDx1bCBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCIgc3R5bGU9e3tuYXZDb250YWluZXJTdHlsZX19PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNlYXJjaFwiIHN0eWxlPXtsaXN0U3R5bGV9PjxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiIG9uU2VhcmNoPXtvblNlYXJjaH0gc3R5bGU9e3sgd2lkdGg6IDIwMCB9fSAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZVwiIHN0eWxlPXtsaXN0U3R5bGV9PjxTZW5kT3V0bGluZWQgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCJ9fS8+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9maWxlXCIgc3R5bGU9e2xpc3RTdHlsZX0+PFVzZXJPdXRsaW5lZCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIn19Lz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gKi8iXSwic291cmNlUm9vdCI6IiJ9