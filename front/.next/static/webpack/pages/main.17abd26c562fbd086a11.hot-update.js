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
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_layout_MobileLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/MobileLayout */ "./components/layout/MobileLayout.js");
/* harmony import */ var _components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout/DesktopLayout */ "./components/layout/DesktopLayout.js");
/* harmony import */ var _components_layout_tabletLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout/tabletLayout */ "./components/layout/tabletLayout.js");
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SideBar */ "./components/SideBar.js");
/* harmony import */ var _components_layout_Title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout/Title */ "./components/layout/Title.js");
/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout/Menu */ "./components/layout/Menu.js");
/* harmony import */ var _components_layout_SideMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layout/SideMenu */ "./components/layout/SideMenu.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
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
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"],
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
  /*
  useEffect(() => {
    if (!me) {
      return Router.push('/');
    }
  }, [me]);
  */

  var mainContents = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 33
      }, _this);
    })]
  }, void 0, true);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
    children: [isDesktop && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_SideBar__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 28
      }, _this),
      children: mainContents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), isTablet && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_tabletLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
      SideMenu: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_SideMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 31
      }, _this),
      Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_SideBar__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 51
      }, _this),
      children: mainContents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this), isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_MobileLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      Header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_Title__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }, _this),
      Menu: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 46
      }, _this),
      children: mainContents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Main, "Tn80SvhJedU5Apd4U+pX7qr/DJs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcyJdLCJuYW1lcyI6WyJNYWluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInJldHdlZXRFcnJvciIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsIm1heFdpZHRoIiwiaXNUYWJsZXQiLCJtaW5XaWR0aCIsImlzRGVza3RvcCIsInVzZUVmZmVjdCIsImFsZXJ0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiZGF0YSIsImxlbmd0aCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYWluQ29udGVudHMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEaUIscUJBRUZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRlQ7QUFBQSxNQUVUQyxFQUZTLGdCQUVUQSxFQUZTOztBQUFBLHNCQUlvQkgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FKL0I7QUFBQSxNQUdUQyxTQUhTLGlCQUdU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QUFBLGFBWkY7QUFBQSxrQkFERjtBQW1CRCxDQWxFRDs7R0FBTWxDLEk7VUFDYUUsdUQsRUFDRkMsdUQsRUFFc0JBLHVELEVBQ3BCVSw4RCxFQUNBQSw4RCxFQUNDQSw4RDs7O0tBUGRiLEk7O0FBc0ZTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjE3YWJkMjZjNTYyZmJkMDg2YTExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IE1vYmlsZUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9Nb2JpbGVMYXlvdXQnO1xyXG5pbXBvcnQgRGVza3RvcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9EZXNrdG9wTGF5b3V0JztcclxuaW1wb3J0IFRhYmxldExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC90YWJsZXRMYXlvdXQnO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGVCYXInO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGl0bGUnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9NZW51JztcclxuaW1wb3J0IFNpZGVNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1NpZGVNZW51JztcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cyxcclxuICAgIGxvYWRQb3N0c0xvYWRpbmcsIHJldHdlZXRFcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkoeyBtYXhXaWR0aDogNTAwIH0pOyAvLyB+NTAwXHJcbiAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KHsgbWluV2lkdGg6IDUwMSwgbWF4V2lkdGg6IDEwMjMgfSk7IC8vIDUwMX4xMDIzXHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh7IG1pbldpZHRoOiAxMDI0IH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJldHdlZXRFcnJvcikge1xyXG4gICAgICByZXR1cm4gYWxlcnQocmV0d2VldEVycm9yKTtcclxuICAgIH1cclxuICB9LCBbcmV0d2VldEVycm9yXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgLy8gc2Nyb2xsWTrsiqTtgazroaTsnYQg7Ja866eI64KYIOuCtOuguOuKlOyngCBjbGllbnRIZWlnaHQ6IO2ZlOuptOq4uOydtFxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdPy5pZCwgLy8g66eI7KeA66eJIHBvc3TsnZggaWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuICAvKlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIW1lKSB7XHJcbiAgICAgIHJldHVybiBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfVxyXG4gIH0sIFttZV0pO1xyXG4qL1xyXG4gIGNvbnN0IG1haW5Db250ZW50cyA9IChcclxuICAgIDw+XHJcbiAgICAgIHsgbWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gKDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyBpc0Rlc2t0b3AgJiYgKFxyXG4gICAgICA8RGVza3RvcExheW91dCBTaWRlPXs8U2lkZUJhciAvPn0+XHJcbiAgICAgICAge21haW5Db250ZW50c31cclxuICAgICAgPC9EZXNrdG9wTGF5b3V0PlxyXG4gICAgICApfVxyXG4gICAgICB7IGlzVGFibGV0ICYmIChcclxuICAgICAgPFRhYmxldExheW91dCBTaWRlTWVudT17PFNpZGVNZW51IC8+fSBTaWRlPXs8U2lkZUJhciAvPn0+XHJcbiAgICAgICAge21haW5Db250ZW50c31cclxuICAgICAgPC9UYWJsZXRMYXlvdXQ+XHJcbiAgICAgICl9XHJcbiAgICAgIHsgaXNNb2JpbGUgJiYgKFxyXG4gICAgICA8TW9iaWxlTGF5b3V0IEhlYWRlcj17PFRpdGxlIC8+fSBNZW51PXs8TWVudSAvPn0+XHJcbiAgICAgICAge21haW5Db250ZW50c31cclxuICAgICAgPC9Nb2JpbGVMYXlvdXQ+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfVxyXG5cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIH0pO1xyXG5cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7IC8vIFJFUVVFU1TqsIAgU1VDQ0VTU+qwgCDrkKDrlYzquYzsp4Ag6riw64uk66Ck7KSA64ukLlxyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==