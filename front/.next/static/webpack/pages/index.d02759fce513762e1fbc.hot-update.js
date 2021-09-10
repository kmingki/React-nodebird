webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_AppLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout.js */ "./components/AppLayout.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Home = function Home() {
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
      retweetError = _useSelector2.retweetError; //useEffect : 컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 Hook
  //component가 mount 됬을때, component가 unmount 됐을때, component가 update됬을때(특정 props, stat가 바뀔때)


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (retweetError) {
      return alert(retweetError);
    }
  }, [retweetError]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
    });
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_MY_INFO_REQUEST"]
    });
  }, [_reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"], _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_MY_INFO_REQUEST"]]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      //scrollY:스크롤을 얼마나 내렸는지 clientHeight: 화면길이
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"],
            data: mainPosts[mainPosts.length - 1].id //마지막 post의 id????

          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_AppLayout_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }, _this), mainPosts.map(function (c) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: c
      }, c.id, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, _this);
};

_s(Home, "eO+QMWR+/tIpNUDFV1MauWXrqHY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJyZXR3ZWV0RXJyb3IiLCJ1c2VFZmZlY3QiLCJhbGVydCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZGF0YSIsImxlbmd0aCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFZixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZlLHFCQUdBQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLElBQWY7QUFBQSxHQUFELENBSFg7QUFBQSxNQUdQQyxFQUhPLGdCQUdQQSxFQUhPOztBQUFBLHNCQUlxREgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDRyxJQUFmO0FBQUEsR0FBRCxDQUpoRTtBQUFBLE1BSVBDLFNBSk8saUJBSVBBLFNBSk87QUFBQSxNQUlJQyxZQUpKLGlCQUlJQSxZQUpKO0FBQUEsTUFJa0JDLGdCQUpsQixpQkFJa0JBLGdCQUpsQjtBQUFBLE1BSW9DQyxZQUpwQyxpQkFJb0NBLFlBSnBDLEVBT2Y7QUFDQTs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBSTtBQUNWLFFBQUlELFlBQUosRUFBaUI7QUFDYixhQUFPRSxLQUFLLENBQUNGLFlBQUQsQ0FBWjtBQUNIO0FBQ0osR0FKUSxFQUlOLENBQUNBLFlBQUQsQ0FKTSxDQUFUO0FBTUFDLHlEQUFTLENBQUMsWUFBSTtBQUNWWCxZQUFRLENBQUM7QUFDTGEsVUFBSSxFQUFFQyxpRUFBa0JBO0FBRG5CLEtBQUQsQ0FBUjtBQUdBZCxZQUFRLENBQUM7QUFDTGEsVUFBSSxFQUFFRSxtRUFBb0JBO0FBRHJCLEtBQUQsQ0FBUjtBQUdILEdBUFEsRUFPTixDQUFDRCxpRUFBRCxFQUFxQkMsbUVBQXJCLENBUE0sQ0FBVDtBQVNBSix5REFBUyxDQUFDLFlBQUk7QUFDVixhQUFTSyxRQUFULEdBQW1CO0FBQ2Y7QUFDQSxVQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBZUMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUF4QyxHQUF1REYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUF6QixHQUF3QyxHQUFsRyxFQUF1RztBQUNuRyxZQUFJZCxZQUFZLElBQUksQ0FBQ0MsZ0JBQXJCLEVBQXVDO0FBQ25DVCxrQkFBUSxDQUFDO0FBQ0xhLGdCQUFJLEVBQUVDLGlFQUREO0FBRUxTLGdCQUFJLEVBQUVoQixTQUFTLENBQUNBLFNBQVMsQ0FBQ2lCLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBVCxDQUFnQ0MsRUFGakMsQ0FFb0M7O0FBRnBDLFdBQUQsQ0FBUjtBQUlIO0FBQ0o7QUFDSjs7QUFDRFIsVUFBTSxDQUFDUyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1YsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDVEMsWUFBTSxDQUFDVSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1gsUUFBckM7QUFDSCxLQUZEO0FBR0gsR0FoQlEsRUFnQk4sQ0FBQ1QsU0FBRCxFQUFZQyxZQUFaLEVBQTBCQyxnQkFBMUIsQ0FoQk0sQ0FBVDtBQWtCQSxzQkFDSSxxRUFBQyxnRUFBRDtBQUFBLGVBQ01KLEVBQUUsaUJBQUkscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURaLEVBRUtFLFNBQVMsQ0FBQ3FCLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQU87QUFDMUIsMEJBQVEscUVBQUMsNERBQUQ7QUFBcUIsWUFBSSxFQUFFQTtBQUEzQixTQUFlQSxDQUFDLENBQUNKLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQUNELEtBRk0sQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBbEREOztHQUFNMUIsSTtVQUVlRSx1RCxFQUNGQyx1RCxFQUNxREEsdUQ7OztLQUpsRUgsSTtBQW9EU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDAyNzU5ZmNlNTEzNzYyZTFmYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoICwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dC5qcyc7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcsIHJldHdlZXRFcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucG9zdCk7XHJcblxyXG5cclxuICAgIC8vdXNlRWZmZWN0IDog7Lu07Y+s64SM7Yq46rCAIOugjOuNlOungSDrkKDrlYzrp4jri6Qg7Yq57KCVIOyekeyXheydhCDsi6TtlontlaAg7IiYIOyeiOuPhOuhnSDtlZjripQgSG9va1xyXG4gICAgLy9jb21wb25lbnTqsIAgbW91bnQg65Cs7J2E65WMLCBjb21wb25lbnTqsIAgdW5tb3VudCDrkJDsnYTrlYwsIGNvbXBvbmVudOqwgCB1cGRhdGXrkKzsnYTrlYwo7Yq57KCVIHByb3BzLCBzdGF06rCAIOuwlOuAlOuVjClcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChyZXR3ZWV0RXJyb3Ipe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQocmV0d2VldEVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmV0d2VldEVycm9yXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgICAgICB9KVxyXG4gICAgfSwgW0xPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1JFUVVFU1RdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpe1xyXG4gICAgICAgICAgICAvL3Njcm9sbFk67Iqk7YGs66Gk7J2EIOyWvOuniOuCmCDrgrTroLjripTsp4AgY2xpZW50SGVpZ2h0OiDtmZTrqbTquLjsnbRcclxuICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkrZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgICAgICAgICAgIGlmKCBoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcgKXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXS5pZCAvL+uniOyngOuniSBwb3N07J2YIGlkPz8/P1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW21haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICB7IG1lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKGMpID0+IHtcclxuICAgICAgICByZXR1cm4gKDxQb3N0Q2FyZCBrZXk9e2MuaWR9IHBvc3Q9e2N9IC8+KTtcclxuICAgICAgfSl9XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+ICAgXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9