webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/layout/DesktopLayout.js":
/*!********************************************!*\
  !*** ./components/layout/DesktopLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\DesktopLayout.js",
    _this = undefined,
    _s = $RefreshSig$();














var DesktopLayout = function DesktopLayout(_ref) {
  _s();

  var children = _ref.children,
      Side = _ref.Side;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var toTop = function toTop() {
    router.push('/main');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOG_OUT_REQUEST"]
    });
  }, [_reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOG_OUT_REQUEST"]]);
  var onClickMessages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return router.push('/messages');
  });
  var onClickProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return router.push("/user/".concat(me.id));
  });

  var menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    style: {
      display: "flex",
      width: "80%",
      margin: "0 auto"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexFlow: "row wrap",
        width: "20%",
        alignContent: "flex-start"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["HomeOutlined"], {
          style: {
            color: "#2C2C2C"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 136
        }, _this),
        onClick: toTop,
        children: "\xA0Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["GlobalOutlined"], {
          style: {
            color: "#2C2C2C"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 136
        }, _this),
        children: "\xA0Explore"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["MailOutlined"], {
          style: {
            color: "#2C2C2C"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 136
        }, _this),
        onClick: onClickMessages,
        children: "\xA0Messages"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["StarOutlined"], {
          style: {
            color: "#2C2C2C"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 136
        }, _this),
        children: "\xA0Notification"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UserOutlined"], {
          style: {
            color: "#2C2C2C"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 136
        }, _this),
        onClick: onClickProfile,
        children: "\xA0Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        onClick: onLogOut,
        children: "\xA0Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        width: "50%",
        borderRight: "solid thin #EFEEF5",
        borderLeft: "solid thin #EFEEF5"
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        width: "30%",
        borderRight: "solid thin #EFEEF5"
      },
      children: Side
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, _this);
};

_s(DesktopLayout, "qghFebAJgQ5V0wXf2nulLXlkHvw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = DesktopLayout;
DesktopLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DesktopLayout);

var _c;

$RefreshReg$(_c, "DesktopLayout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dC5qcyJdLCJuYW1lcyI6WyJEZXNrdG9wTGF5b3V0IiwiY2hpbGRyZW4iLCJTaWRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ0b1RvcCIsInB1c2giLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsIm9uTG9nT3V0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwib25DbGlja01lc3NhZ2VzIiwib25DbGlja1Byb2ZpbGUiLCJpZCIsIm1lbnUiLCJkaXNwbGF5Iiwid2lkdGgiLCJtYXJnaW4iLCJmbGV4RmxvdyIsImFsaWduQ29udGVudCIsImhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJib3JkZXJSaWdodCIsImJvcmRlckxlZnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBc0I7QUFBQTs7QUFBQSxNQUFwQkMsUUFBb0IsUUFBcEJBLFFBQW9CO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ3hDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZ3QyxxQkFHekJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBZjtBQUFBLEdBQUQsQ0FIYztBQUFBLE1BR2hDQyxFQUhnQyxnQkFHaENBLEVBSGdDOztBQUt4QyxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCUixVQUFNLENBQUNTLElBQVAsQ0FBWSxPQUFaO0FBQ0FDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUFDQyxTQUFHLEVBQUMsQ0FBTDtBQUFRQyxVQUFJLEVBQUMsQ0FBYjtBQUFnQkMsY0FBUSxFQUFDO0FBQXpCLEtBQWhCO0FBQ0gsR0FIRDs7QUFLQSxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBSTtBQUM3QmQsWUFBUSxDQUFDO0FBQ0xlLFVBQUksRUFBRUMsOERBQWVBO0FBRGhCLEtBQUQsQ0FBUjtBQUlILEdBTDJCLEVBS3pCLENBQUNBLDhEQUFELENBTHlCLENBQTVCO0FBT0EsTUFBTUMsZUFBZSxHQUFHSCx5REFBVyxDQUFDLFlBQUk7QUFDcEMsV0FBT2hCLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLFdBQVosQ0FBUDtBQUNILEdBRmtDLENBQW5DO0FBSUEsTUFBTVcsY0FBYyxHQUFHSix5REFBVyxDQUFDLFlBQUk7QUFDbkMsV0FBT2hCLE1BQU0sQ0FBQ1MsSUFBUCxpQkFBcUJGLEVBQUUsQ0FBQ2MsRUFBeEIsRUFBUDtBQUNILEdBRmlDLENBQWxDOztBQUtBLE1BQU1DLElBQUksZ0JBQ04sc0VBQUMseUNBQUQ7QUFBQSwyQkFDRSxzRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSw2QkFDSTtBQUFHLGVBQU8sRUFBRVAsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7O0FBUUEsc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQ1EsYUFBTyxFQUFDLE1BQVQ7QUFBaUJDLFdBQUssRUFBQyxLQUF2QjtBQUE4QkMsWUFBTSxFQUFDO0FBQXJDLEtBQVo7QUFBQSw0QkFDSTtBQUFLLFdBQUssRUFBRTtBQUFDRixlQUFPLEVBQUMsTUFBVDtBQUFpQkcsZ0JBQVEsRUFBQyxVQUExQjtBQUFzQ0YsYUFBSyxFQUFDLEtBQTVDO0FBQW1ERyxvQkFBWSxFQUFFO0FBQWpFLE9BQVo7QUFBQSw4QkFDSSxzRUFBQywyQ0FBRDtBQUFRLFlBQUksRUFBQyxNQUFiO0FBQW9CLGFBQUssRUFBQyxPQUExQjtBQUFrQyxhQUFLLEVBQUU7QUFBQ0osaUJBQU8sRUFBRSxPQUFWO0FBQW1CRSxnQkFBTSxFQUFFLFFBQTNCO0FBQXFDRyxnQkFBTSxFQUFFLE1BQTdDO0FBQXFEQyxrQkFBUSxFQUFFO0FBQS9ELFNBQXpDO0FBQWlILFlBQUksZUFBRSxzRUFBQyw4REFBRDtBQUFjLGVBQUssRUFBRTtBQUFDQyxpQkFBSyxFQUFFO0FBQVI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBdkg7QUFBbUssZUFBTyxFQUFFdEIsS0FBNUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLHNFQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLE1BQWI7QUFBb0IsYUFBSyxFQUFDLE9BQTFCO0FBQWtDLGFBQUssRUFBRTtBQUFDZSxpQkFBTyxFQUFFLE9BQVY7QUFBbUJFLGdCQUFNLEVBQUUsUUFBM0I7QUFBcUNHLGdCQUFNLEVBQUUsTUFBN0M7QUFBcURDLGtCQUFRLEVBQUU7QUFBL0QsU0FBekM7QUFBaUgsWUFBSSxlQUFFLHNFQUFDLGdFQUFEO0FBQWdCLGVBQUssRUFBRTtBQUFDQyxpQkFBSyxFQUFFO0FBQVI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJLHNFQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLE1BQWI7QUFBb0IsYUFBSyxFQUFDLE9BQTFCO0FBQWtDLGFBQUssRUFBRTtBQUFDUCxpQkFBTyxFQUFFLE9BQVY7QUFBbUJFLGdCQUFNLEVBQUUsUUFBM0I7QUFBcUNHLGdCQUFNLEVBQUUsTUFBN0M7QUFBcURDLGtCQUFRLEVBQUU7QUFBL0QsU0FBekM7QUFBaUgsWUFBSSxlQUFFLHNFQUFDLDhEQUFEO0FBQWMsZUFBSyxFQUFFO0FBQUNDLGlCQUFLLEVBQUU7QUFBUjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF2SDtBQUFtSyxlQUFPLEVBQUVYLGVBQTVLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSSxzRUFBQywyQ0FBRDtBQUFRLFlBQUksRUFBQyxNQUFiO0FBQW9CLGFBQUssRUFBQyxPQUExQjtBQUFrQyxhQUFLLEVBQUU7QUFBQ0ksaUJBQU8sRUFBRSxPQUFWO0FBQW1CRSxnQkFBTSxFQUFFLFFBQTNCO0FBQXFDRyxnQkFBTSxFQUFFLE1BQTdDO0FBQXFEQyxrQkFBUSxFQUFFO0FBQS9ELFNBQXpDO0FBQWlILFlBQUksZUFBRSxzRUFBQyw4REFBRDtBQUFjLGVBQUssRUFBRTtBQUFDQyxpQkFBSyxFQUFFO0FBQVI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJLHNFQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLE1BQWI7QUFBb0IsYUFBSyxFQUFDLE9BQTFCO0FBQWtDLGFBQUssRUFBRTtBQUFDUCxpQkFBTyxFQUFFLE9BQVY7QUFBbUJFLGdCQUFNLEVBQUUsUUFBM0I7QUFBcUNHLGdCQUFNLEVBQUUsTUFBN0M7QUFBcURDLGtCQUFRLEVBQUU7QUFBL0QsU0FBekM7QUFBaUgsWUFBSSxlQUFFLHNFQUFDLDhEQUFEO0FBQWMsZUFBSyxFQUFFO0FBQUNDLGlCQUFLLEVBQUU7QUFBUjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF2SDtBQUFtSyxlQUFPLEVBQUVWLGNBQTVLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFNSSxzRUFBQywyQ0FBRDtBQUFRLFlBQUksRUFBQyxNQUFiO0FBQW9CLGFBQUssRUFBQyxPQUExQjtBQUFrQyxhQUFLLEVBQUU7QUFBQ0csaUJBQU8sRUFBRSxPQUFWO0FBQW1CRSxnQkFBTSxFQUFFLFFBQTNCO0FBQXFDRyxnQkFBTSxFQUFFLE1BQTdDO0FBQXFEQyxrQkFBUSxFQUFFO0FBQS9ELFNBQXpDO0FBQWlILGVBQU8sRUFBRWQsUUFBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVNJO0FBQUssV0FBSyxFQUFFO0FBQUNTLGFBQUssRUFBQyxLQUFQO0FBQWNPLG1CQUFXLEVBQUUsb0JBQTNCO0FBQWlEQyxrQkFBVSxFQUFFO0FBQTdELE9BQVo7QUFBQSxnQkFDQ2xDO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKLGVBWUk7QUFBSyxXQUFLLEVBQUU7QUFBQzBCLGFBQUssRUFBQyxLQUFQO0FBQWNPLG1CQUFXLEVBQUU7QUFBM0IsT0FBWjtBQUFBLGdCQUNDaEM7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0FwREQ7O0dBQU1GLGE7VUFDYUkscUQsRUFDRUUsdUQsRUFDRkMsdUQ7OztLQUhiUCxhO0FBc0ROQSxhQUFhLENBQUNvQyxTQUFkLEdBQTBCO0FBQ3RCbkMsVUFBUSxFQUFFb0MsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURILENBQTFCO0FBSWV2Qyw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjBlNjdhZWQwZDUzNTdmOTFmZjU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sLCBCdXR0b24sIEF2YXRhciwgRHJvcGRvd24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IFN0YXJPdXRsaW5lZCwgTWFpbE91dGxpbmVkLCBVc2VyT3V0bGluZWQsIEdsb2JhbE91dGxpbmVkLCBIb21lT3V0bGluZWQsIFNlYXJjaE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRGVza3RvcExheW91dCA9ICh7Y2hpbGRyZW4sIFNpZGV9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGNvbnN0IHRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvbWFpbicpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOjAsIGxlZnQ6MCwgYmVoYXZpb3I6J2F1dG8nfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LCBbTE9HX09VVF9SRVFVRVNUXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja01lc3NhZ2VzID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goJy9tZXNzYWdlcycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1Byb2ZpbGUgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaChgL3VzZXIvJHttZS5pZH1gKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBtZW51ID0gKFxyXG4gICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkxvZ091dH0+TG9nIG91dDwvYT4gXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIHdpZHRoOlwiODAlXCIsIG1hcmdpbjpcIjAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RmxvdzpcInJvdyB3cmFwXCIsIHdpZHRoOlwiMjAlXCIsIGFsaWduQ29udGVudDogXCJmbGV4LXN0YXJ0XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEhvbWVPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59IG9uQ2xpY2s9e3RvVG9wfT4mbmJzcDtIb21lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCAwXCIsIGhlaWdodDogXCI1MHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxHbG9iYWxPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PiZuYnNwO0V4cGxvcmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PE1haWxPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59IG9uQ2xpY2s9e29uQ2xpY2tNZXNzYWdlc30+Jm5ic3A7TWVzc2FnZXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PFN0YXJPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PiZuYnNwO05vdGlmaWNhdGlvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8VXNlck91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0gb25DbGljaz17b25DbGlja1Byb2ZpbGV9PiZuYnNwO1Byb2ZpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gb25DbGljaz17b25Mb2dPdXR9PiZuYnNwO0xvZ291dDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiNTAlXCIsIGJvcmRlclJpZ2h0OiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBib3JkZXJMZWZ0OiBcInNvbGlkIHRoaW4gI0VGRUVGNVwifX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjMwJVwiLCBib3JkZXJSaWdodDogXCJzb2xpZCB0aGluICNFRkVFRjVcIn19PlxyXG4gICAgICAgICAgICB7U2lkZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuRGVza3RvcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==