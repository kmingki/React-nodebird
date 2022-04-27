webpackHotUpdate_N_E("pages/main",{

/***/ "./components/layout/SideMenu.js":
/*!***************************************!*\
  !*** ./components/layout/SideMenu.js ***!
  \***************************************/
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
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\SideMenu.js",
    _this = undefined,
    _s = $RefreshSig$();










var SideMenu = function SideMenu() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

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
    return router.push('/messages');
  });
  var onClickProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return router.push('/profile');
  });

  var menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
        onClick: onLogOut,
        children: "Log out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "round",
      style: {
        display: 'block',
        margin: '10px auto',
        height: '60px',
        width: '60px'
      },
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HomeOutlined"], {
        style: {
          color: '#2C2C2C',
          fontSize: '24px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 128
      }, _this),
      onClick: toTop
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "round",
      style: {
        display: 'block',
        margin: '10px auto',
        height: '60px',
        width: '60px'
      },
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["GlobalOutlined"], {
        style: {
          color: '#2C2C2C',
          fontSize: '24px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 128
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "round",
      style: {
        display: 'block',
        margin: '10px auto',
        height: '60px',
        width: '60px'
      },
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MailOutlined"], {
        style: {
          color: '#2C2C2C',
          fontSize: '24px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 128
      }, _this),
      onClick: onClickMessages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "round",
      style: {
        display: 'block',
        margin: '10px auto',
        height: '60px',
        width: '60px'
      },
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["StarOutlined"], {
        style: {
          color: '#2C2C2C',
          fontSize: '24px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 128
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "round",
      style: {
        display: 'block',
        margin: '10px auto',
        height: '60px',
        width: '60px'
      },
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
        style: {
          color: '#2C2C2C',
          fontSize: '24px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 128
      }, _this),
      onClick: onClickProfile
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(SideMenu, "d4+7neNXLRcDF3nCn55ByTGU8zo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = SideMenu;
SideMenu.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

var _c;

$RefreshReg$(_c, "SideMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU2lkZU1lbnUuanMiXSwibmFtZXMiOlsiU2lkZU1lbnUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9Ub3AiLCJwdXNoIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJvbkxvZ091dCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxPR19PVVRfUkVRVUVTVCIsIm9uQ2xpY2tNZXNzYWdlcyIsIm9uQ2xpY2tQcm9maWxlIiwibWVudSIsImRpc3BsYXkiLCJtYXJnaW4iLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiZm9udFNpemUiLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCSixVQUFNLENBQUNLLElBQVAsQ0FBWSxPQUFaO0FBQ0FDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUFFQyxTQUFHLEVBQUUsQ0FBUDtBQUFVQyxVQUFJLEVBQUUsQ0FBaEI7QUFBbUJDLGNBQVEsRUFBRTtBQUE3QixLQUFoQjtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDakNWLFlBQVEsQ0FBQztBQUNQVyxVQUFJLEVBQUVDLDhEQUFlQTtBQURkLEtBQUQsQ0FBUjtBQUdELEdBSjJCLEVBSXpCLENBQUNBLDhEQUFELENBSnlC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QUFBb0JDLGNBQU0sRUFBRSxXQUE1QjtBQUF5Q0MsY0FBTSxFQUFFLE1BQWpEO0FBQXlEQyxhQUFLLEVBQUU7QUFBaEUsT0FBekM7QUFBbUgsVUFBSSxlQUFFLHFFQUFDLDhEQUFEO0FBQWMsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxTQUFUO0FBQW9CQyxrQkFBUSxFQUFFO0FBQTlCO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBekg7QUFBMEwsYUFBTyxFQUFFUDtBQUFuTTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQXBDRDs7R0FBTWpCLFE7VUFDV0UscUQsRUFDRUUsdUQ7OztLQUZiSixRO0FBc0NOQSxRQUFRLENBQUN5QixTQUFULEdBQXFCO0FBQ25CQyxVQUFRLEVBQUVDLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETixDQUFyQjtBQUllN0IsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi41YmY4NGU1YTZjOTkyN2FmMzQ5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBNZW51LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU3Rhck91dGxpbmVkLCBNYWlsT3V0bGluZWQsIFVzZXJPdXRsaW5lZCwgR2xvYmFsT3V0bGluZWQsIEhvbWVPdXRsaW5lZCwgU2VhcmNoT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgeyBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IFNpZGVNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgdG9Ub3AgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL21haW4nKTtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgbGVmdDogMCwgYmVoYXZpb3I6ICdhdXRvJyB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkxvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW0xPR19PVVRfUkVRVUVTVF0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTWVzc2FnZXMgPSB1c2VDYWxsYmFjaygoKSA9PiByb3V0ZXIucHVzaCgnL21lc3NhZ2VzJykpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrUHJvZmlsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHJvdXRlci5wdXNoKCcvcHJvZmlsZScpKTtcclxuXHJcbiAgY29uc3QgbWVudSA9IChcclxuICAgIDxNZW51PlxyXG4gICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgIDxhIG9uQ2xpY2s9e29uTG9nT3V0fT5Mb2cgb3V0PC9hPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW46ICcxMHB4IGF1dG8nLCBoZWlnaHQ6ICc2MHB4Jywgd2lkdGg6ICc2MHB4JyB9fSBpY29uPXs8SG9tZU91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzJDMkMyQycsIGZvbnRTaXplOiAnMjRweCcgfX0gLz59IG9uQ2xpY2s9e3RvVG9wfSAvPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbjogJzEwcHggYXV0bycsIGhlaWdodDogJzYwcHgnLCB3aWR0aDogJzYwcHgnIH19IGljb249ezxHbG9iYWxPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMyQzJDMkMnLCBmb250U2l6ZTogJzI0cHgnIH19IC8+fSAvPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbjogJzEwcHggYXV0bycsIGhlaWdodDogJzYwcHgnLCB3aWR0aDogJzYwcHgnIH19IGljb249ezxNYWlsT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMkMyQzJDJywgZm9udFNpemU6ICcyNHB4JyB9fSAvPn0gb25DbGljaz17b25DbGlja01lc3NhZ2VzfSAvPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbjogJzEwcHggYXV0bycsIGhlaWdodDogJzYwcHgnLCB3aWR0aDogJzYwcHgnIH19IGljb249ezxTdGFyT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMkMyQzJDJywgZm9udFNpemU6ICcyNHB4JyB9fSAvPn0gLz5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW46ICcxMHB4IGF1dG8nLCBoZWlnaHQ6ICc2MHB4Jywgd2lkdGg6ICc2MHB4JyB9fSBpY29uPXs8VXNlck91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzJDMkMyQycsIGZvbnRTaXplOiAnMjRweCcgfX0gLz59IG9uQ2xpY2s9e29uQ2xpY2tQcm9maWxlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNpZGVNZW51LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVNZW51O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9