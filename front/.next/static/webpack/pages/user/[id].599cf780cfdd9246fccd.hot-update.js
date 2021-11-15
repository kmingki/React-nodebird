webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout/DesktopLayout */ "./components/layout/DesktopLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\user\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();












var User = function User() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query.id;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePosts = _useSelector.hasMorePosts,
      loadPostsLoading = _useSelector.loadPostsLoading;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector2.userInfo;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var onScroll = function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_USER_POSTS_REQUEST"],
            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
            data: id
          });
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length, hasMorePosts, id, loadPostsLoading]);

  var onClickEditProfile = function onClickEditProfile() {
    console.log('done');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: [userInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("title", {
        children: [userInfo.nickname, "\uB2D8\uC758 \uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meta", {
        name: "description",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meta", {
        property: "og:description",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://nodebird.com/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://nodebird.com/user/".concat(id)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this), userInfo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
            src: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Image"], {
              src: "https://joeschmoe.io/api/v1/random"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 34
            }, _this),
            size: 128
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            style: {
              display: "inline-block"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
              children: userInfo.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              children: userInfo.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          shape: "round",
          onClick: onClickEditProfile,
          children: "Edit profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        style: {
          display: "flex",
          margin: "20px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
          children: [userInfo.Followings, " Following ", userInfo.Followers, " Followers"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, _this)]
    }, void 0, true) : null, mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 32
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(User, "FXTbcjoVaSS4w2oveElPGfnTqkc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = User;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (User);

var _c;

$RefreshReg$(_c, "User");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanMiXSwibmFtZXMiOlsiVXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwidXNlciIsInVzZXJJbmZvIiwidXNlRWZmZWN0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwidHlwZSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwibGFzdElkIiwibGVuZ3RoIiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DbGlja0VkaXRQcm9maWxlIiwiY29uc29sZSIsImxvZyIsIm5pY2tuYW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImVtYWlsIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBOzs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUZpQixNQUdUQyxFQUhTLEdBR0ZGLE1BQU0sQ0FBQ0csS0FITCxDQUdURCxFQUhTOztBQUFBLHFCQUlxQ0UsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FKaEQ7QUFBQSxN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QU1MLEk7VUFDYUUsdUQsRUFDRkUscUQsRUFFdUNHLHVELEVBQ2pDQSx1RDs7O0tBTGpCUCxJOztBQTJGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLjU5OWNmNzgwY2ZkZDkyNDZmY2NkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIEltYWdlLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IExPQURfVVNFUl9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IERlc2t0b3BMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dCc7XHJcblxyXG5jb25zdCBVc2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IHVzZXJJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGxhc3RJZDogbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXSAmJiBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdLmlkLFxyXG4gICAgICAgICAgICBkYXRhOiBpZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbbWFpblBvc3RzLmxlbmd0aCwgaGFzTW9yZVBvc3RzLCBpZCwgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrRWRpdFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZG9uZScpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEZXNrdG9wTGF5b3V0PlxyXG4gICAgICB7dXNlckluZm8gJiYgKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICB7dXNlckluZm8ubmlja25hbWV9XHJcbiAgICAgICAgICAgIOuLmOydmCDquIBcclxuICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9ub2RlYmlyZC5jb20vZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9ub2RlYmlyZC5jb20vdXNlci8ke2lkfWB9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICApfVxyXG4gICAgICB7dXNlckluZm9cclxuICAgICAgICA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIG1hcmdpbjpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9ezxJbWFnZSBzcmM9XCJodHRwczovL2pvZXNjaG1vZS5pby9hcGkvdjEvcmFuZG9tXCIvPn0gc2l6ZT17MTI4fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VySW5mby5uaWNrbmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dXNlckluZm8uZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNoYXBlPVwicm91bmRcIiBvbkNsaWNrPXtvbkNsaWNrRWRpdFByb2ZpbGV9PkVkaXQgcHJvZmlsZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIG1hcmdpbjpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPHA+e3VzZXJJbmZvLkZvbGxvd2luZ3N9IEZvbGxvd2luZyB7dXNlckluZm8uRm9sbG93ZXJzfSBGb2xsb3dlcnM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIDogbnVsbH1cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgIDwvRGVza3RvcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfVxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICAvL2NvbnNvbGUubG9nKCdnZXRTdGF0ZScsIGNvbnRleHQuc3RvcmUuZ2V0U3RhdGUoKS5wb3N0Lm1haW5Qb3N0cyk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==