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
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["HomeOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 155
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
              lineNumber: 29,
              columnNumber: 155
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
              lineNumber: 30,
              columnNumber: 155
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
              lineNumber: 31,
              columnNumber: 155
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
              lineNumber: 32,
              columnNumber: 155
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
          children: me.nickname
        }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlSW5wdXQiLCJzZWFyY2hJbnB1dCIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJvblNlYXJjaCIsInVzZUNhbGxiYWNrIiwiUm91dGVyIiwicHVzaCIsImNsZWFyIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwibmlja25hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxxQkFDZkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQURJO0FBQUEsTUFDdEJDLEVBRHNCLGdCQUN0QkEsRUFEc0I7O0FBQUEsa0JBRWFDLCtEQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBO0FBQUEsTUFFdkJDLFdBRnVCO0FBQUEsTUFFVkMsbUJBRlU7O0FBRzlCLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFJO0FBQzdCQyxzREFBTSxDQUFDQyxJQUFQLG9CQUF3QkwsV0FBeEI7QUFDSCxHQUYyQixFQUV6QixDQUFDQSxXQUFELENBRnlCLENBQTVCO0FBSUEsc0JBQ0k7QUFBQSwyQkFDSSxzRUFBQyx3Q0FBRDtBQUFLLFlBQU0sRUFBRSxDQUFiO0FBQWdCLFdBQUssRUFBRTtBQUFDTSxhQUFLLEVBQUU7QUFBUixPQUF2QjtBQUFBLDhCQUVJLHNFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUUsQ0FBaEI7QUFBQSxnQ0FDQSxzRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxPQUFYO0FBQUEsaUNBQW1CO0FBQUEsbUNBQUc7QUFBSSxtQkFBSyxFQUFFO0FBQUNDLDBCQUFVLEVBQUUsb0JBQWI7QUFBbUNDLHdCQUFRLEVBQUUsTUFBN0M7QUFBcURDLDBCQUFVLEVBQUM7QUFBaEUsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxFQUVLWCxFQUFFLGdCQUFHLHNFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsZ0JBQXFCLHNFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRjVCLGVBR0E7QUFBSyxlQUFLLEVBQUU7QUFBQ1ksa0JBQU0sRUFBRTtBQUFULFdBQVo7QUFBQSxrQ0FDQSxzRUFBQywyQ0FBRDtBQUFRLGdCQUFJLEVBQUMsTUFBYjtBQUFvQixpQkFBSyxFQUFDLE9BQTFCO0FBQWtDLGlCQUFLLEVBQUU7QUFBQ0MscUJBQU8sRUFBRSxPQUFWO0FBQW1CRCxvQkFBTSxFQUFFLFdBQTNCO0FBQXdDRSxvQkFBTSxFQUFFLE1BQWhEO0FBQXdEQyxtQkFBSyxFQUFFLE9BQS9EO0FBQXdFTCxzQkFBUSxFQUFFO0FBQWxGLGFBQXpDO0FBQW9JLGdCQUFJLGVBQUUsc0VBQUMsK0RBQUQ7QUFBYyxtQkFBSyxFQUFFO0FBQUNNLHFCQUFLLEVBQUU7QUFBUjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUExSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVBLHNFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFLLEVBQUMsT0FBMUI7QUFBa0MsaUJBQUssRUFBRTtBQUFDSCxxQkFBTyxFQUFFLE9BQVY7QUFBbUJELG9CQUFNLEVBQUUsV0FBM0I7QUFBd0NFLG9CQUFNLEVBQUUsTUFBaEQ7QUFBd0RDLG1CQUFLLEVBQUUsT0FBL0Q7QUFBd0VMLHNCQUFRLEVBQUU7QUFBbEYsYUFBekM7QUFBb0ksZ0JBQUksZUFBRSxzRUFBQyxpRUFBRDtBQUFnQixtQkFBSyxFQUFFO0FBQUNNLHFCQUFLLEVBQUU7QUFBUjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUExSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxlQUdBLHNFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFLLEVBQUMsT0FBMUI7QUFBa0MsaUJBQUssRUFBRTtBQUFDSCxxQkFBTyxFQUFFLE9BQVY7QUFBbUJELG9CQUFNLEVBQUUsV0FBM0I7QUFBd0NFLG9CQUFNLEVBQUUsTUFBaEQ7QUFBd0RDLG1CQUFLLEVBQUUsT0FBL0Q7QUFBd0VMLHNCQUFRLEVBQUU7QUFBbEYsYUFBekM7QUFBb0ksZ0JBQUksZUFBRSxzRUFBQywrREFBRDtBQUFjLG1CQUFLLEVBQUU7QUFBQ00scUJBQUssRUFBRTtBQUFSO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhBLGVBSUEsc0VBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQUssRUFBQyxPQUExQjtBQUFrQyxpQkFBSyxFQUFFO0FBQUNILHFCQUFPLEVBQUUsT0FBVjtBQUFtQkQsb0JBQU0sRUFBRSxXQUEzQjtBQUF3Q0Usb0JBQU0sRUFBRSxNQUFoRDtBQUF3REMsbUJBQUssRUFBRSxPQUEvRDtBQUF3RUwsc0JBQVEsRUFBRTtBQUFsRixhQUF6QztBQUFvSSxnQkFBSSxlQUFFLHNFQUFDLCtEQUFEO0FBQWMsbUJBQUssRUFBRTtBQUFDTSxxQkFBSyxFQUFFO0FBQVI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBMUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkEsZUFLQSxzRUFBQywyQ0FBRDtBQUFRLGdCQUFJLEVBQUMsTUFBYjtBQUFvQixpQkFBSyxFQUFDLE9BQTFCO0FBQWtDLGlCQUFLLEVBQUU7QUFBQ0gscUJBQU8sRUFBRSxPQUFWO0FBQW1CRCxvQkFBTSxFQUFFLFdBQTNCO0FBQXdDRSxvQkFBTSxFQUFFLE1BQWhEO0FBQXdEQyxtQkFBSyxFQUFFLE9BQS9EO0FBQXdFTCxzQkFBUSxFQUFFO0FBQWxGLGFBQXpDO0FBQW9JLGdCQUFJLGVBQUUsc0VBQUMsK0RBQUQ7QUFBYyxtQkFBSyxFQUFFO0FBQUNNLHFCQUFLLEVBQUU7QUFBUjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUExSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEEsZUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZBLGVBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYQSxlQVlBLHNFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLE1BQWI7QUFBb0IsZUFBSyxFQUFDLE9BQTFCO0FBQWtDLGVBQUssRUFBRTtBQUFDSCxtQkFBTyxFQUFFLE9BQVY7QUFBbUJELGtCQUFNLEVBQUUsV0FBM0I7QUFBd0NFLGtCQUFNLEVBQUUsTUFBaEQ7QUFBd0RDLGlCQUFLLEVBQUUsT0FBL0Q7QUFBd0VMLG9CQUFRLEVBQUU7QUFBbEYsV0FBekM7QUFBb0ksY0FBSSxlQUFFLHNFQUFDLDJDQUFEO0FBQUEsc0JBQVNWLEVBQUUsQ0FBQ2lCLFFBQUgsQ0FBWSxDQUFaO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBMUk7QUFBQSxvQkFBOEtqQixFQUFFLENBQUNpQjtBQUFqTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBaUJJLHNFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUUsRUFBakI7QUFBQSxnQ0FDQSxzRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxPQUFYO0FBQUEsaUNBQW1CO0FBQUEsbUNBQUc7QUFBSSxtQkFBSyxFQUFFO0FBQUNQLHdCQUFRLEVBQUUsTUFBWDtBQUFtQkMsMEJBQVUsRUFBQztBQUE5QixlQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLEVBRUNmLFFBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJKLGVBcUJJLHNFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUUsQ0FBaEI7QUFBQSwrQkFDQSxzRUFBQywwQ0FBRCxDQUFPLE1BQVA7QUFBYyxxQkFBVyxFQUFDLGNBQTFCO0FBQStCLGtCQUFRLEVBQUVRO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZCSCxDQXBDRDs7R0FBTVQsUztVQUNhRSx1RCxFQUM0QkksdUQ7OztLQUZ6Q04sUztBQXNDTkEsU0FBUyxDQUFDdUIsU0FBVixHQUFzQjtBQUNsQnRCLFVBQVEsRUFBRXVCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEUCxDQUF0QjtBQUllMUIsd0VBQWY7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjY5NjE2ODUxN2I0MjU5ZjllZTYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCwgQnV0dG9uLCBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgU3Rhck91dGxpbmVkLCBTZW5kT3V0bGluZWQsIFVzZXJPdXRsaW5lZCwgR2xvYmFsT3V0bGluZWQsIEhvbWVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIG9uQ2hhbmdlU2VhcmNoSW5wdXRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xyXG4gICAgfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXs4fSBzdHlsZT17e2NsZWFyOiBcImJvdGhcIn19PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXs4fSBtZD17Nn0gPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYWluXCI+PGE+PGgxIHN0eWxlPXt7Zm9udEZhbWlseTogXCJSaWdodGVvdXMsIGN1cnNpdmVcIiwgZm9udFNpemU6IFwiMzBweFwiLCBtYXJnaW5MZWZ0OlwiMTVweFwifX0+Q2hhdHRlcjwvaDE+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7bWUgPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtIC8+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogXCI1MHB4IDBcIn19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggYXV0b1wiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIzMDBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8SG9tZU91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+SG9tZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggYXV0b1wiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIzMDBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8R2xvYmFsT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT5FeHBsb3JlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCBhdXRvXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjMwMHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxTZW5kT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT5NZXNzYWdlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCBhdXRvXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjMwMHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxTdGFyT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT5Ob3RpZmljYXRpb248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IGF1dG9cIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMzAwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PFVzZXJPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PlByb2ZpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IGF1dG9cIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMzAwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+fT57bWUubmlja25hbWV9PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsxNn0gbWQ9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21haW5cIj48YT48aDEgc3R5bGU9e3tmb250U2l6ZTogXCIzMHB4XCIsIG1hcmdpbkxlZnQ6XCIxNXB4XCJ9fT5Ib21lPC9oMT48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXswfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwi6rKA7IOJXCIgb25TZWFyY2g9e29uU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG5cclxuXHJcbi8qKlxyXG4gKiA8dWwgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiIHN0eWxlPXt7bmF2Q29udGFpbmVyU3R5bGV9fT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZWFyY2hcIiBzdHlsZT17bGlzdFN0eWxlfT48SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwiaW5wdXQgc2VhcmNoIHRleHRcIiBvblNlYXJjaD17b25TZWFyY2h9IHN0eWxlPXt7IHdpZHRoOiAyMDAgfX0gLz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIiBzdHlsZT17bGlzdFN0eWxlfT48U2VuZE91dGxpbmVkIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wifX0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZmlsZVwiIHN0eWxlPXtsaXN0U3R5bGV9PjxVc2VyT3V0bGluZWQgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCJ9fS8+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICovIl0sInNvdXJjZVJvb3QiOiIifQ==