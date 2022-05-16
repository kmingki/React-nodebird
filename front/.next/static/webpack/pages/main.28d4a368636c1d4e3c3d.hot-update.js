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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _components_layout_MobileLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout/MobileLayout */ "./components/layout/MobileLayout.js");
/* harmony import */ var _components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/DesktopLayout */ "./components/layout/DesktopLayout.js");
/* harmony import */ var _components_layout_tabletLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout/tabletLayout */ "./components/layout/tabletLayout.js");
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SideBar */ "./components/SideBar.js");
/* harmony import */ var _components_layout_Title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layout/Title */ "./components/layout/Title.js");
/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/layout/Menu */ "./components/layout/Menu.js");
/* harmony import */ var _components_layout_SideMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/layout/SideMenu */ "./components/layout/SideMenu.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\main.js",
    _this = undefined,
    _s = $RefreshSig$();




















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
      loadPostsError = _useSelector2.loadPostsError,
      retweetError = _useSelector2.retweetError;

  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"])({
    maxWidth: 500
  }); // ~500

  var isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"])({
    minWidth: 501,
    maxWidth: 1023
  }); // 501~1023

  var isDesktop = Object(react_responsive__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"])({
    minWidth: 1024
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (retweetError) {
      return alert(retweetError);
    }
  }, [retweetError]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      // scrollY:스크롤을 얼마나 내렸는지 clientHeight: 화면길이
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"],
            data: (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id // 마지막 post의 id

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
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOAD_MY_INFO_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (loadPostsError) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].info(loadPostsError);
    }
  }, [loadPostsError]);
  /*
  useEffect(() => {
    if (!me) {
      return Router.push('/');
    }
  }, [me]);
  */

  var mainContents = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["Fragment"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 33
      }, _this);
    })]
  }, void 0, true);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["Fragment"], {
    children: [isDesktop && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
      Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_SideBar__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 28
      }, _this),
      children: mainContents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this), isTablet && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_layout_tabletLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
      SideMenu: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_layout_SideMenu__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 31
      }, _this),
      Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_SideBar__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 51
      }, _this),
      children: mainContents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this), isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_layout_MobileLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
      Header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_layout_Title__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }, _this),
      Menu: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 46
      }, _this),
      children: mainContents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Main, "bJzoU1jTe77Acy/S+JyTGG9VQB8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_responsive__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"], react_responsive__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"], react_responsive__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcyJdLCJuYW1lcyI6WyJNYWluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0Vycm9yIiwicmV0d2VldEVycm9yIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwibWF4V2lkdGgiLCJpc1RhYmxldCIsIm1pbldpZHRoIiwiaXNEZXNrdG9wIiwidXNlRWZmZWN0IiwiYWxlcnQiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJkYXRhIiwibGVuZ3RoIiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwibWVzc2FnZSIsImluZm8iLCJtYWluQ29udGVudHMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEaUIscUJBRUZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRlQ7QUFBQSxNQUVUQyxFQUZTLGdCQUVUQSxFQUZTOztBQUFBLHNCQUlvQ0gsK0RBQVcsQ0FBQyxVQUFDQyxL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QUMsd0VBQUQ7QUFBYyxjQUFRLGVBQUUsc0VBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF4QjtBQUFzQyxVQUFJLGVBQUUsc0VBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE1QztBQUFBLGdCQUNHc0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsRUFXSXpCLFFBQVEsaUJBQ1Ysc0VBQUMsdUVBQUQ7QUFBYyxZQUFNLGVBQUUsc0VBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF0QjtBQUFpQyxVQUFJLGVBQUUsc0VBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF2QztBQUFBLGdCQUNHeUI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQSxrQkFERjtBQW1CRCxDQTdFRDs7R0FBTXRDLEk7VUFDYUUsdUQsRUFDRkMsdUQsRUFFc0NBLHVELEVBQ3BDVyw4RCxFQUNBQSw4RCxFQUNDQSw4RDs7O0tBUGRkLEk7O0FBOEZTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjI4ZDRhMzY4NjM2YzFkNGUzYzNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgTW9iaWxlTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L01vYmlsZUxheW91dCc7XHJcbmltcG9ydCBEZXNrdG9wTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0Rlc2t0b3BMYXlvdXQnO1xyXG5pbXBvcnQgVGFibGV0TGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L3RhYmxldExheW91dCc7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZUJhcic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaXRsZSc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L01lbnUnO1xyXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvU2lkZU1lbnUnO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZywgbG9hZFBvc3RzRXJyb3IsIHJldHdlZXRFcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkoeyBtYXhXaWR0aDogNTAwIH0pOyAvLyB+NTAwXHJcbiAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KHsgbWluV2lkdGg6IDUwMSwgbWF4V2lkdGg6IDEwMjMgfSk7IC8vIDUwMX4xMDIzXHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh7IG1pbldpZHRoOiAxMDI0IH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJldHdlZXRFcnJvcikge1xyXG4gICAgICByZXR1cm4gYWxlcnQocmV0d2VldEVycm9yKTtcclxuICAgIH1cclxuICB9LCBbcmV0d2VldEVycm9yXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgLy8gc2Nyb2xsWTrsiqTtgazroaTsnYQg7Ja866eI64KYIOuCtOuguOuKlOyngCBjbGllbnRIZWlnaHQ6IO2ZlOuptOq4uOydtFxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdPy5pZCwgLy8g66eI7KeA66eJIHBvc3TsnZggaWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRQb3N0c0Vycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UuaW5mbyhsb2FkUG9zdHNFcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW2xvYWRQb3N0c0Vycm9yXSk7XHJcblxyXG4gIC8qXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghbWUpIHtcclxuICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9XHJcbiAgfSwgW21lXSk7XHJcbiovXHJcbiAgY29uc3QgbWFpbkNvbnRlbnRzID0gKFxyXG4gICAgPD5cclxuICAgICAgeyBtZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pKX1cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IGlzRGVza3RvcCAmJiAoXHJcbiAgICAgIDxEZXNrdG9wTGF5b3V0IFNpZGU9ezxTaWRlQmFyIC8+fT5cclxuICAgICAgICB7bWFpbkNvbnRlbnRzfVxyXG4gICAgICA8L0Rlc2t0b3BMYXlvdXQ+XHJcbiAgICAgICl9XHJcbiAgICAgIHsgaXNUYWJsZXQgJiYgKFxyXG4gICAgICA8VGFibGV0TGF5b3V0IFNpZGVNZW51PXs8U2lkZU1lbnUgLz59IFNpZGU9ezxTaWRlQmFyIC8+fT5cclxuICAgICAgICB7bWFpbkNvbnRlbnRzfVxyXG4gICAgICA8L1RhYmxldExheW91dD5cclxuICAgICAgKX1cclxuICAgICAgeyBpc01vYmlsZSAmJiAoXHJcbiAgICAgIDxNb2JpbGVMYXlvdXQgSGVhZGVyPXs8VGl0bGUgLz59IE1lbnU9ezxNZW51IC8+fT5cclxuICAgICAgICB7bWFpbkNvbnRlbnRzfVxyXG4gICAgICA8L01vYmlsZUxheW91dD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcblxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIH0pO1xyXG5cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7IC8vIFJFUVVFU1TqsIAgU1VDQ0VTU+qwgCDrkKDrlYzquYzsp4Ag6riw64uk66Ck7KSA64ukLlxyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==