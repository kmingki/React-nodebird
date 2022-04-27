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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!me) {
      return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }
  }, [me]);

  var mainContents = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }, _this);
    })]
  }, void 0, true);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
    children: [isDesktop && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_SideBar__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 28
      }, _this),
      children: mainContents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), isTablet && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_tabletLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
      SideMenu: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_SideMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 31
      }, _this),
      Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_SideBar__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 51
      }, _this),
      children: mainContents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this), isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_MobileLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      Header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_Title__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      }, _this),
      Menu: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 46
      }, _this),
      children: mainContents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Main, "6B1WyY1eeIPwe80pnn+80PGwPYY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcyJdLCJuYW1lcyI6WyJNYWluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInJldHdlZXRFcnJvciIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsIm1heFdpZHRoIiwiaXNUYWJsZXQiLCJtaW5XaWR0aCIsImlzRGVza3RvcCIsInVzZUVmZmVjdCIsImFsZXJ0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiZGF0YSIsImxlbmd0aCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSb3V0ZXIiLCJwdXNoIiwibWFpbkNvbnRlbnRzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGlCLHFCQUVGQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUZUO0FBQUEsTUFFVEMsRUFGUyxnQkFFVEEsRUFGUzs7QUFBQSxzQkFJb0JILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBSi9CO0FBQUEs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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdEI7QUFBaUMsVUFBSSxlQUFFLHNFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdkM7QUFBQSxnQkFDR3dCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUEsa0JBREY7QUFtQkQsQ0FqRUQ7O0dBQU1wQyxJO1VBQ2FFLHVELEVBQ0ZDLHVELEVBRXNCQSx1RCxFQUNwQlUsOEQsRUFDQUEsOEQsRUFDQ0EsOEQ7OztLQVBkYixJOztBQXFGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi5iOWE5ZjcxZTQwOGZlOTg3Y2I1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCBNb2JpbGVMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTW9iaWxlTGF5b3V0JztcclxuaW1wb3J0IERlc2t0b3BMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dCc7XHJcbmltcG9ydCBUYWJsZXRMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvdGFibGV0TGF5b3V0JztcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlQmFyJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RpdGxlJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTWVudSc7XHJcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9TaWRlTWVudSc7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nLCByZXR3ZWV0RXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHsgbWF4V2lkdGg6IDUwMCB9KTsgLy8gfjUwMFxyXG4gIGNvbnN0IGlzVGFibGV0ID0gdXNlTWVkaWFRdWVyeSh7IG1pbldpZHRoOiA1MDEsIG1heFdpZHRoOiAxMDIzIH0pOyAvLyA1MDF+MTAyM1xyXG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogMTAyNCB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZXR3ZWV0RXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KHJldHdlZXRFcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW3JldHdlZXRFcnJvcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgIC8vIHNjcm9sbFk67Iqk7YGs66Gk7J2EIOyWvOuniOuCmCDrgrTroLjripTsp4AgY2xpZW50SGVpZ2h0OiDtmZTrqbTquLjsnbRcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQsIC8vIOuniOyngOuniSBwb3N07J2YIGlkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghbWUpIHtcclxuICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9XHJcbiAgfSwgW21lXSk7XHJcblxyXG4gIGNvbnN0IG1haW5Db250ZW50cyA9IChcclxuICAgIDw+XHJcbiAgICAgIHsgbWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gKDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyBpc0Rlc2t0b3AgJiYgKFxyXG4gICAgICA8RGVza3RvcExheW91dCBTaWRlPXs8U2lkZUJhciAvPn0+XHJcbiAgICAgICAge21haW5Db250ZW50c31cclxuICAgICAgPC9EZXNrdG9wTGF5b3V0PlxyXG4gICAgICApfVxyXG4gICAgICB7IGlzVGFibGV0ICYmIChcclxuICAgICAgPFRhYmxldExheW91dCBTaWRlTWVudT17PFNpZGVNZW51IC8+fSBTaWRlPXs8U2lkZUJhciAvPn0+XHJcbiAgICAgICAge21haW5Db250ZW50c31cclxuICAgICAgPC9UYWJsZXRMYXlvdXQ+XHJcbiAgICAgICl9XHJcbiAgICAgIHsgaXNNb2JpbGUgJiYgKFxyXG4gICAgICA8TW9iaWxlTGF5b3V0IEhlYWRlcj17PFRpdGxlIC8+fSBNZW51PXs8TWVudSAvPn0+XHJcbiAgICAgICAge21haW5Db250ZW50c31cclxuICAgICAgPC9Nb2JpbGVMYXlvdXQ+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfVxyXG5cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIH0pO1xyXG5cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7IC8vIFJFUVVFU1TqsIAgU1VDQ0VTU+qwgCDrkKDrlYzquYzsp4Ag6riw64uk66Ck7KSA64ukLlxyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==