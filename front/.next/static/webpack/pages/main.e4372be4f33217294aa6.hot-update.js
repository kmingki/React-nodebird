webpackHotUpdate_N_E("pages/main",{

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_MobileLayout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/MobileLayout.js */ "./components/layout/MobileLayout.js");
/* harmony import */ var _components_layout_DesktopLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/DesktopLayout.js */ "./components/layout/DesktopLayout.js");
/* harmony import */ var _components_layout_tabletLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout/tabletLayout */ "./components/layout/tabletLayout.js");
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SideBar */ "./components/SideBar.js");
/* harmony import */ var _components_layout_Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/Title */ "./components/layout/Title.js");
/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout/Menu */ "./components/layout/Menu.js");
/* harmony import */ var _components_layout_SideMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout/SideMenu */ "./components/layout/SideMenu.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\main.js",
    _this = undefined,
    _s = $RefreshSig$();

/* eslint-disable */

















var Main = function Main() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading,
      retweetError = _useSelector2.retweetError;

  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_13__["useMediaQuery"])({
    maxWidth: 500
  }); //~500

  var isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_13__["useMediaQuery"])({
    minWidth: 501,
    maxWidth: 1023
  }); //501~1023

  var isDesktop = Object(react_responsive__WEBPACK_IMPORTED_MODULE_13__["useMediaQuery"])({
    minWidth: 1024
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (retweetError) {
      return alert(retweetError);
    }
  }, [retweetError]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      //scrollY:스크롤을 얼마나 내렸는지 clientHeight: 화면길이
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POSTS_REQUEST"],
            data: (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id //마지막 post의 id

          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!me) {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    }
  }, [me]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
    children: [isDesktop && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_DesktopLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_SideBar__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 46
      }, _this),
      children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }, _this), mainPosts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 33
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }, _this), isTablet && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_tabletLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      SideMenu: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_SideMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 48
      }, _this),
      Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_SideBar__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 68
      }, _this),
      children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this), mainPosts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 24
    }, _this), isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_MobileLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      Header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_Title__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 46
      }, _this),
      Menu: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 63
      }, _this),
      children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }, _this), mainPosts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 24
    }, _this)]
  }, void 0, true);
};

_s(Main, "wlzOYefDAuM+h6ipY14gVY06/Cc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_responsive__WEBPACK_IMPORTED_MODULE_13__["useMediaQuery"], react_responsive__WEBPACK_IMPORTED_MODULE_13__["useMediaQuery"], react_responsive__WEBPACK_IMPORTED_MODULE_13__["useMediaQuery"]];
});

_c = Main;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcyJdLCJuYW1lcyI6WyJNYWluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInJldHdlZXRFcnJvciIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsIm1heFdpZHRoIiwiaXNUYWJsZXQiLCJtaW5XaWR0aCIsImlzRGVza3RvcCIsInVzZUVmZmVjdCIsImFsZXJ0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiZGF0YSIsImxlbmd0aCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSb3V0ZXIiLCJwdXNoIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURlLHFCQUVBQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLElBQWY7QUFBQSxHQUFELENBRlg7QUFBQSxNQUVQQyxFQUZPLGdCQUVQQSxFQUZPOztBQUFBLHNCQUdxREgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDRyxJQUFmO0FBQUEsR0FBRCxDQUhoRTtBQUFBLE1BR1BDLFNBSE8saUJB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V0FBZUEsSUFBSSxDQUFDd0IsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUjtBQUNILE9BRkEsQ0FGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSZixFQWVFbkIsUUFBUSxpQkFBSyxzRUFBQywwRUFBRDtBQUFjLFlBQU0sZUFBRSxzRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXRCO0FBQWlDLFVBQUksZUFBRSxzRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXZDO0FBQUEsaUJBQ1ROLEVBQUUsaUJBQUksc0VBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURHLEVBRVZFLFNBQVMsQ0FBQzRCLEdBQVYsQ0FBYyxVQUFDN0IsSUFBRCxFQUFVO0FBQ3JCLDRCQUFRLHNFQUFDLDREQUFEO0FBQXdCLGNBQUksRUFBRUE7QUFBOUIsV0FBZUEsSUFBSSxDQUFDd0IsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUjtBQUNILE9BRkEsQ0FGVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmZjtBQUFBLGtCQURKO0FBeUJILENBL0REOztHQUFNL0IsSTtVQUNlRSx1RCxFQUNGQyx1RCxFQUNxREEsdUQsRUFDbkRVLCtELEVBQ0FBLCtELEVBQ0NBLCtEOzs7S0FOaEJiLEk7O0FBb0ZTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLmU0MzcyYmU0ZjMzMjE3Mjk0YWE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCAsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTW9iaWxlTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L01vYmlsZUxheW91dC5qcyc7XHJcbmltcG9ydCBEZXNrdG9wTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0Rlc2t0b3BMYXlvdXQuanMnO1xyXG5pbXBvcnQgVGFibGV0TGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L3RhYmxldExheW91dCc7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZUJhcic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaXRsZSc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L01lbnUnO1xyXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvU2lkZU1lbnUnO1xyXG5cclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgcmV0d2VldEVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh7IG1heFdpZHRoOiA1MDAgfSk7IC8vfjUwMFxyXG4gICAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KHsgbWluV2lkdGg6IDUwMSwgbWF4V2lkdGg6IDEwMjN9KTsgLy81MDF+MTAyM1xyXG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh7IG1pbldpZHRoOiAxMDI0IH0pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAocmV0d2VldEVycm9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHJldHdlZXRFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JldHdlZXRFcnJvcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCl7XHJcbiAgICAgICAgICAgIC8vc2Nyb2xsWTrsiqTtgazroaTsnYQg7Ja866eI64KYIOuCtOuguOuKlOyngCBjbGllbnRIZWlnaHQ6IO2ZlOuptOq4uOydtFxyXG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nICl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkIC8v66eI7KeA66eJIHBvc3TsnZggaWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZV0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyBpc0Rlc2t0b3AgJiYgKDxEZXNrdG9wTGF5b3V0IFNpZGU9ezxTaWRlQmFyIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICB7IG1lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Rlc2t0b3BMYXlvdXQ+KVxyXG4gICAgICAgIH1cclxuICAgICAgICB7IGlzVGFibGV0ICYmICg8VGFibGV0TGF5b3V0IFNpZGVNZW51PXs8U2lkZU1lbnUgLz59IFNpZGU9ezxTaWRlQmFyIC8+fT5cclxuICAgICAgICB7IG1lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8L1RhYmxldExheW91dD4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsgaXNNb2JpbGUgJiYgKDxNb2JpbGVMYXlvdXQgSGVhZGVyPXs8VGl0bGUgLz59IE1lbnU9ezxNZW51IC8+fT5cclxuICAgICAgICAgICAgeyBtZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvTW9iaWxlTGF5b3V0PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCk9PntcclxuICAgIFxyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXE/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpOyAvL1JFUVVFU1TqsIAgU1VDQ0VTU+qwgCDrkKDrlYzquYzsp4Ag6riw64uk66Ck7KSA64ukLlxyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9