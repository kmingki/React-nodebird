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
  /*
  const toTop = () => {
    router.push('/main');
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  */


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
      margin: '0 auto',
      position: 'relative'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        position: 'absolute',
        left: '0',
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
          lineNumber: 34,
          columnNumber: 132
        }, _this),
        children: "\xA0Home"
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
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["GlobalOutlined"], {
          style: {
            color: '#2C2C2C'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 132
        }, _this),
        children: "\xA0Explore"
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
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MailOutlined"], {
          style: {
            color: '#2C2C2C'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 132
        }, _this),
        onClick: onClickMessages,
        children: "\xA0Message"
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
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["StarOutlined"], {
          style: {
            color: '#2C2C2C'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 132
        }, _this),
        children: "\xA0Bookmarks"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
          lineNumber: 38,
          columnNumber: 132
        }, _this),
        onClick: onClickProfile,
        children: "\xA0Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        height: '100%',
        width: '30%'
      },
      children: Side
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dC5qcyJdLCJuYW1lcyI6WyJEZXNrdG9wTGF5b3V0IiwiY2hpbGRyZW4iLCJTaWRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJvbkxvZ091dCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxPR19PVVRfUkVRVUVTVCIsIm9uQ2xpY2tNZXNzYWdlcyIsInB1c2giLCJvbkNsaWNrUHJvZmlsZSIsImlkIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwicG9zaXRpb24iLCJsZWZ0IiwiZmxleERpcmVjdGlvbiIsImFsaWduQ29udGVudCIsInBhZGRpbmdMZWZ0IiwiZm9udFNpemUiLCJjb2xvciIsImJvcmRlclJpZ2h0IiwiYm9yZGVyTGVmdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzVDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUY0QyxxQkFHN0JDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSGtCO0FBQUEsTUFHcENDLEVBSG9DLGdCQUdwQ0EsRUFIb0M7QUFLNUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFRSxN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QUU7QUFBRW1CLGNBQU0sRUFBRSxNQUFWO0FBQWtCQyxhQUFLLEVBQUU7QUFBekIsT0FBWjtBQUFBLGdCQUNHbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0F4Q0Q7O0dBQU1GLGE7VUFDV0kscUQsRUFDRUUsdUQsRUFDRkMsdUQ7OztLQUhYUCxhO0FBMENOQSxhQUFhLENBQUNnQyxTQUFkLEdBQTBCO0FBQ3hCL0IsVUFBUSxFQUFFZ0MsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQyxVQUREO0FBRXhCakMsTUFBSSxFQUFFK0IsaURBQVMsQ0FBQ0csT0FBVixDQUFrQkQ7QUFGQSxDQUExQjtBQUtlbkMsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi5mNWI1NTQwNjNhNDc5YzliNDU1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFN0YXJPdXRsaW5lZCwgTWFpbE91dGxpbmVkLCBVc2VyT3V0bGluZWQsIEdsb2JhbE91dGxpbmVkLCBIb21lT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IExPR19PVVRfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRGVza3RvcExheW91dCA9ICh7IGNoaWxkcmVuLCBTaWRlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgLypcclxuICBjb25zdCB0b1RvcCA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvbWFpbicpO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogJ2F1dG8nIH0pO1xyXG4gIH07XHJcbiAgKi9cclxuXHJcbiAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtMT0dfT1VUX1JFUVVFU1RdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja01lc3NhZ2VzID0gdXNlQ2FsbGJhY2soKCkgPT4gcm91dGVyLnB1c2goJy9tZXNzYWdlL21haW4nKSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tQcm9maWxlID0gdXNlQ2FsbGJhY2soKCkgPT4gcm91dGVyLnB1c2goYC91c2VyLyR7bWUuaWR9YCkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzgwJScsIG1hcmdpbjogJzAgYXV0bycsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnMCcsIGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcyMCUnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25Db250ZW50OiAnZmxleC1zdGFydCcgfX0+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAnLCBwYWRkaW5nTGVmdDogJzBweCcsIGhlaWdodDogJzUwcHgnLCBmb250U2l6ZTogJzIwcHgnIH19IGljb249ezxIb21lT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMkMyQzJDJyB9fSAvPn0+Jm5ic3A7SG9tZTwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJywgcGFkZGluZ0xlZnQ6ICcwcHgnLCBoZWlnaHQ6ICc1MHB4JywgZm9udFNpemU6ICcyMHB4JyB9fSBpY29uPXs8R2xvYmFsT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMkMyQzJDJyB9fSAvPn0+Jm5ic3A7RXhwbG9yZTwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJywgcGFkZGluZ0xlZnQ6ICcwcHgnLCBoZWlnaHQ6ICc1MHB4JywgZm9udFNpemU6ICcyMHB4JyB9fSBpY29uPXs8TWFpbE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzJDMkMyQycgfX0gLz59IG9uQ2xpY2s9e29uQ2xpY2tNZXNzYWdlc30+Jm5ic3A7TWVzc2FnZTwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJywgcGFkZGluZ0xlZnQ6ICcwcHgnLCBoZWlnaHQ6ICc1MHB4JywgZm9udFNpemU6ICcyMHB4JyB9fSBpY29uPXs8U3Rhck91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzJDMkMyQycgfX0gLz59PiZuYnNwO0Jvb2ttYXJrczwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJywgcGFkZGluZ0xlZnQ6ICcwcHgnLCBoZWlnaHQ6ICc1MHB4JywgZm9udFNpemU6ICcyMHB4JyB9fSBpY29uPXs8VXNlck91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzJDMkMyQycgfX0gLz59IG9uQ2xpY2s9e29uQ2xpY2tQcm9maWxlfT4mbmJzcDtQcm9maWxlPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAnLCBwYWRkaW5nTGVmdDogJzBweCcsIGhlaWdodDogJzUwcHgnLCBmb250U2l6ZTogJzIwcHgnIH19IG9uQ2xpY2s9e29uTG9nT3V0fT4mbmJzcDtMb2dvdXQ8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnNTAlJywgYm9yZGVyUmlnaHQ6ICdzb2xpZCB0aGluICNFRkVFRjUnLCBib3JkZXJMZWZ0OiAnc29saWQgdGhpbiAjRUZFRUY1JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICczMCUnIH19PlxyXG4gICAgICAgIHtTaWRlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXNrdG9wTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBTaWRlOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==