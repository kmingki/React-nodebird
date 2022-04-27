webpackHotUpdate_N_E("pages/main",{

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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\DesktopLayout.js",
    _this = undefined,
    _s = $RefreshSig$();










var DesktopLayout = function DesktopLayout(_ref) {
  _s();

  var children = _ref.children,
      Side = _ref.Side;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOG_OUT_REQUEST"]
    });
  }, [_reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOG_OUT_REQUEST"]]);
  var onClickMessages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return router.push('/message/main');
  });
  var onClickProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return router.push("/user/".concat(me.id));
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    style: {
      display: 'flex',
      height: '100%',
      width: '80%',
      margin: '0 auto'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        width: '20%',
        flexDirection: 'column',
        alignContent: 'flex-start'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "text",
        shape: "round",
        style: {
          margin: '10px 0',
          paddingLeft: '0px',
          height: '50px',
          fontSize: '20px'
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HomeOutlined"], {
          style: {
            color: '#2C2C2C'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 132
        }, _this),
        children: "\xA0Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "text",
        shape: "round",
        style: {
          margin: '10px 0',
          paddingLeft: '0px',
          height: '50px',
          fontSize: '20px'
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["GlobalOutlined"], {
          style: {
            color: '#2C2C2C'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 132
        }, _this),
        children: "\xA0Explore"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "text",
        shape: "round",
        style: {
          margin: '10px 0',
          paddingLeft: '0px',
          height: '50px',
          fontSize: '20px'
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MailOutlined"], {
          style: {
            color: '#2C2C2C'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 132
        }, _this),
        onClick: onClickMessages,
        children: "\xA0Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "text",
        shape: "round",
        style: {
          margin: '10px 0',
          paddingLeft: '0px',
          height: '50px',
          fontSize: '20px'
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["StarOutlined"], {
          style: {
            color: '#2C2C2C'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 132
        }, _this),
        children: "\xA0Bookmarks"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "text",
        shape: "round",
        style: {
          margin: '10px 0',
          paddingLeft: '0px',
          height: '50px',
          fontSize: '20px'
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
          style: {
            color: '#2C2C2C'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 132
        }, _this),
        onClick: onClickProfile,
        children: "\xA0Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "text",
        shape: "round",
        style: {
          margin: '10px 0',
          paddingLeft: '0px',
          height: '50px',
          fontSize: '20px'
        },
        onClick: onLogOut,
        children: "\xA0Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        height: '100%',
        width: '50%',
        borderRight: 'solid thin #EFEEF5',
        borderLeft: 'solid thin #EFEEF5',
        position: 'relative'
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        height: '100%',
        width: '30%'
      },
      children: Side
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(DesktopLayout, "qghFebAJgQ5V0wXf2nulLXlkHvw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = DesktopLayout;
DesktopLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  Side: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dC5qcyJdLCJuYW1lcyI6WyJEZXNrdG9wTGF5b3V0IiwiY2hpbGRyZW4iLCJTaWRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ0b1RvcCIsInB1c2giLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsIm9uTG9nT3V0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwib25DbGlja01lc3NhZ2VzIiwib25DbGlja1Byb2ZpbGUiLCJpZCIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkNvbnRlbnQiLCJwYWRkaW5nTGVmdCIsImZvbnRTaXplIiwiY29sb3IiLCJib3JkZXJSaWdodCIsImJvcmRlckxlZnQiLCJwb3NpdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzVDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUY0QyxxQkFHN0JDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSGtCO0FBQUEsTUFHcENDLEVBSG9DLGdCQUdwQ0Es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RUFBRSxvQkFBN0M7QUFBbUVDLGtCQUFVLEVBQUUsb0JBQS9FO0FBQXFHQyxnQkFBUSxFQUFFO0FBQS9HLE9BQVo7QUFBQSxnQkFDR25DO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBWUU7QUFBSyxXQUFLLEVBQUU7QUFBRXlCLGNBQU0sRUFBRSxNQUFWO0FBQWtCQyxhQUFLLEVBQUU7QUFBekIsT0FBWjtBQUFBLGdCQUNHekI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0F0Q0Q7O0dBQU1GLGE7VUFDV0kscUQsRUFDRUUsdUQsRUFDRkMsdUQ7OztLQUhYUCxhO0FBd0NOQSxhQUFhLENBQUNxQyxTQUFkLEdBQTBCO0FBQ3hCcEMsVUFBUSxFQUFFcUMsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQyxVQUREO0FBRXhCdEMsTUFBSSxFQUFFb0MsaURBQVMsQ0FBQ0csT0FBVixDQUFrQkQ7QUFGQSxDQUExQjtBQUtleEMsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi5iYTAyZDA4NGJkMmEwNjBhNjA4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFN0YXJPdXRsaW5lZCwgTWFpbE91dGxpbmVkLCBVc2VyT3V0bGluZWQsIEdsb2JhbE91dGxpbmVkLCBIb21lT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IExPR19PVVRfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRGVza3RvcExheW91dCA9ICh7IGNoaWxkcmVuLCBTaWRlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgdG9Ub3AgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL21haW4nKTtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgbGVmdDogMCwgYmVoYXZpb3I6ICdhdXRvJyB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkxvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW0xPR19PVVRfUkVRVUVTVF0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTWVzc2FnZXMgPSB1c2VDYWxsYmFjaygoKSA9PiByb3V0ZXIucHVzaCgnL21lc3NhZ2UvbWFpbicpKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1Byb2ZpbGUgPSB1c2VDYWxsYmFjaygoKSA9PiByb3V0ZXIucHVzaChgL3VzZXIvJHttZS5pZH1gKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnODAlJywgbWFyZ2luOiAnMCBhdXRvJyB9fT5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMjAlJywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduQ29udGVudDogJ2ZsZXgtc3RhcnQnIH19PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJywgcGFkZGluZ0xlZnQ6ICcwcHgnLCBoZWlnaHQ6ICc1MHB4JywgZm9udFNpemU6ICcyMHB4JyB9fSBpY29uPXs8SG9tZU91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzJDMkMyQycgfX0gLz59PiZuYnNwO0hvbWU8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCcsIHBhZGRpbmdMZWZ0OiAnMHB4JywgaGVpZ2h0OiAnNTBweCcsIGZvbnRTaXplOiAnMjBweCcgfX0gaWNvbj17PEdsb2JhbE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzJDMkMyQycgfX0gLz59PiZuYnNwO0V4cGxvcmU8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCcsIHBhZGRpbmdMZWZ0OiAnMHB4JywgaGVpZ2h0OiAnNTBweCcsIGZvbnRTaXplOiAnMjBweCcgfX0gaWNvbj17PE1haWxPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMyQzJDMkMnIH19IC8+fSBvbkNsaWNrPXtvbkNsaWNrTWVzc2FnZXN9PiZuYnNwO01lc3NhZ2U8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCcsIHBhZGRpbmdMZWZ0OiAnMHB4JywgaGVpZ2h0OiAnNTBweCcsIGZvbnRTaXplOiAnMjBweCcgfX0gaWNvbj17PFN0YXJPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMyQzJDMkMnIH19IC8+fT4mbmJzcDtCb29rbWFya3M8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCcsIHBhZGRpbmdMZWZ0OiAnMHB4JywgaGVpZ2h0OiAnNTBweCcsIGZvbnRTaXplOiAnMjBweCcgfX0gaWNvbj17PFVzZXJPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMyQzJDMkMnIH19IC8+fSBvbkNsaWNrPXtvbkNsaWNrUHJvZmlsZX0+Jm5ic3A7UHJvZmlsZTwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJywgcGFkZGluZ0xlZnQ6ICcwcHgnLCBoZWlnaHQ6ICc1MHB4JywgZm9udFNpemU6ICcyMHB4JyB9fSBvbkNsaWNrPXtvbkxvZ091dH0+Jm5ic3A7TG9nb3V0PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzUwJScsIGJvcmRlclJpZ2h0OiAnc29saWQgdGhpbiAjRUZFRUY1JywgYm9yZGVyTGVmdDogJ3NvbGlkIHRoaW4gI0VGRUVGNScsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMzAlJyB9fT5cclxuICAgICAgICB7U2lkZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuRGVza3RvcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgU2lkZTogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=