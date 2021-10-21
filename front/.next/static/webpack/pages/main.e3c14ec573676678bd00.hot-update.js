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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\components\\AppLayout.js",
    _this = undefined,
    _s = $RefreshSig$();













var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      searchInput = _useInput2[0],
      onChangeSearchInput = _useInput2[1];

  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/hashtag/".concat(searchInput));
  }, [searchInput]);

  var toTop = function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOG_OUT_REQUEST"]
    });
  }, [_reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOG_OUT_REQUEST"]]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!me) {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    }
  }, [me]);

  var menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
        onClick: onLogOut,
        children: "Log out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      style: {
        clear: "both"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        md: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 3,
        md: 0,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            position: "fixed"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["HomeOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px",
                fontWeight: "100"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 136
            }, _this),
            onClick: toTop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SearchOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SendOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["StarOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["UserOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
              style: {
                color: "white",
                fontSize: "23px",
                backgroundColor: "green"
              },
              children: me.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        md: 4,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            margin: "50px 0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
              src: "twitter.png",
              width: "50px",
              height: "50px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 136
            }, _this),
            onClick: toTop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["HomeOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 136
            }, _this),
            children: "\xA0Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["GlobalOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 136
            }, _this),
            children: "\xA0Explore"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SendOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 136
            }, _this),
            children: "\xA0Message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["StarOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 136
            }, _this),
            children: "\xA0Notification"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["UserOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 136
            }, _this),
            children: "\xA0Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
          overlay: menu,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
              children: me.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 136
            }, _this),
            children: ["\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              style: {
                display: "inline-block"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
                style: {
                  fontSize: "18px"
                },
                children: ["\xA0\xA0", me.email]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 66
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 27
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 21,
        md: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            borderStyle: "solid",
            borderWidth: "thin",
            borderColor: "#e2e2e2"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/main",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
                style: {
                  fontSize: "25px",
                  marginLeft: "15px"
                },
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 39
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 36
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 17
          }, _this), children]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        md: 4,
        style: {
          paddingLeft: "10px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
          placeholder: "\uAC80\uC0C9",
          onSearch: onSearch,
          style: {
            marginTop: "10px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        md: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, _this);
};

_s(AppLayout, "y7+ayAlkrVup5rLJ7VCr+YaXEPI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUlucHV0Iiwic2VhcmNoSW5wdXQiLCJvbkNoYW5nZVNlYXJjaElucHV0Iiwib25TZWFyY2giLCJ1c2VDYWxsYmFjayIsIlJvdXRlciIsInB1c2giLCJ0b1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwib25Mb2dPdXQiLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwidXNlRWZmZWN0IiwibWVudSIsImNsZWFyIiwicG9zaXRpb24iLCJkaXNwbGF5IiwibWFyZ2luIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm5pY2tuYW1lIiwiZW1haWwiLCJib3JkZXJTdHlsZSIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUM5QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUQ4QixxQkFFZkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQUZJO0FBQUEsTUFFdEJDLEVB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJKLGVBcUNJLHNFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUUsQ0FBaEI7QUFBbUIsYUFBSyxFQUFFO0FBQUN5QyxxQkFBVyxFQUFFO0FBQWQsU0FBMUI7QUFBQSwrQkFDQSxzRUFBQywwQ0FBRCxDQUFPLE1BQVA7QUFBYyxxQkFBVyxFQUFDLGNBQTFCO0FBQStCLGtCQUFRLEVBQUUvQixRQUF6QztBQUFtRCxlQUFLLEVBQUU7QUFBQ2dDLHFCQUFTLEVBQUU7QUFBWjtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJDSixlQXdDSSxzRUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQVksVUFBRSxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0NILENBakZEOztHQUFNM0MsUztVQUNlRyx1RCxFQUNGQyx1RCxFQUM0QkksdUQ7OztLQUh6Q1IsUztBQW1GTkEsU0FBUyxDQUFDNEMsU0FBVixHQUFzQjtBQUNsQjNDLFVBQVEsRUFBRTRDLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEUCxDQUF0QjtBQUllL0Msd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi5lM2MxNGVjNTczNjc2Njc4YmQwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCwgQnV0dG9uLCBBdmF0YXIsIERyb3Bkb3duIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBTdGFyT3V0bGluZWQsIFNlbmRPdXRsaW5lZCwgVXNlck91dGxpbmVkLCBHbG9iYWxPdXRsaW5lZCwgSG9tZU91dGxpbmVkLCBTZWFyY2hPdXRsaW5lZCwgQ29uc29sZVNxbE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIG9uQ2hhbmdlU2VhcmNoSW5wdXRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHtzZWFyY2hJbnB1dH1gKTtcclxuICAgIH0sIFtzZWFyY2hJbnB1dF0pO1xyXG5cclxuICAgIGNvbnN0IHRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOjAsIGxlZnQ6MCwgYmVoYXZpb3I6J2F1dG8nfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LCBbTE9HX09VVF9SRVFVRVNUXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKCFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWVdKTtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gKFxyXG4gICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkxvZ091dH0+TG9nIG91dDwvYT4gXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17e2NsZWFyOiBcImJvdGhcIn19PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MH0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17M30gbWQ9ezB9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwifX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggNXB4XCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIn19IGljb249ezxIb21lT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjIzcHhcIiwgZm9udFdlaWdodDogXCIxMDBcIn19Lz59IG9uQ2xpY2s9e3RvVG9wfT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCA1cHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwifX0gaWNvbj17PFNlYXJjaE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wiLCBmb250U2l6ZTogXCIyM3B4XCJ9fS8+fT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCA1cHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwifX0gaWNvbj17PFNlbmRPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjNweFwifX0vPn0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggNXB4XCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIn19IGljb249ezxTdGFyT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjIzcHhcIn19Lz59PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8VXNlck91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wiLCBmb250U2l6ZTogXCIyM3B4XCJ9fS8+fT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCA1cHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwifX0gaWNvbj17PEF2YXRhciBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIGZvbnRTaXplOiBcIjIzcHhcIiwgYmFja2dyb3VuZENvbG9yOlwiZ3JlZW5cIn19PnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXswfSBtZD17NH0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogXCI1MHB4IDBcIn19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8aW1nIHNyYz1cInR3aXR0ZXIucG5nXCIgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiLz59IG9uQ2xpY2s9e3RvVG9wfT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEhvbWVPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PiZuYnNwO0hvbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEdsb2JhbE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+Jm5ic3A7RXhwbG9yZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8U2VuZE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+Jm5ic3A7TWVzc2FnZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8U3Rhck91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+Jm5ic3A7Tm90aWZpY2F0aW9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCAwXCIsIGhlaWdodDogXCI1MHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxVc2VyT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT4mbmJzcDtQcm9maWxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+fT5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDs8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19PjxwIHN0eWxlPXt7Zm9udFNpemU6XCIxOHB4XCJ9fT4mbmJzcDsmbmJzcDt7bWUuZW1haWx9PC9wPjwvZGl2PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjF9IG1kPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlclN0eWxlOiBcInNvbGlkXCIsIGJvcmRlcldpZHRoOiBcInRoaW5cIiwgYm9yZGVyQ29sb3I6IFwiI2UyZTJlMlwifX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21haW5cIj48YT48aDEgc3R5bGU9e3tmb250U2l6ZTogXCIyNXB4XCIsIG1hcmdpbkxlZnQ6XCIxNXB4XCJ9fT5Ib21lPC9oMT48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXswfSBtZD17NH0gc3R5bGU9e3twYWRkaW5nTGVmdDogXCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9XCLqsoDsg4lcIiBvblNlYXJjaD17b25TZWFyY2h9IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjEwcHhcIn19Lz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MH0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=