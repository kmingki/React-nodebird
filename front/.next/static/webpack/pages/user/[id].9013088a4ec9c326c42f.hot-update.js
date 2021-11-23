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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layout/DesktopLayout */ "./components/layout/DesktopLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\user\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();















var User = function User() {
  _s();

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var id = router.query.id;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePosts = _useSelector.hasMorePosts,
      loadPostsLoading = _useSelector.loadPostsLoading;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector2.userInfo,
      me = _useSelector2.me,
      photoPath = _useSelector2.photoPath,
      editUserProfileDone = _useSelector2.editUserProfileDone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalVisible = _useState[0],
      setmodalVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      nickname = _useState2[0],
      setNickname = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var onScroll = function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_POSTS_REQUEST"],
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
  var onChangeNickname = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setNickname(e.target.value);
  }, []);

  var onClickEditProfile = function onClickEditProfile() {
    setmodalVisible(true);
  };

  var onClickClose = function onClickClose() {
    setmodalVisible(false);
  };

  var onClickEditProfilePhoto = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangePhoto = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    //console.log('images', e.target.files);
    var imageFormData = new FormData();
    imageFormData.append('photo', e.target.files[0]);
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["UPLOAD_PHOTO_REQUEST"],
      data: imageFormData
    });
  }, []);
  var onClickSave = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!nickname || !nickname.trim()) {
      return alert('닉네임을 작성하세요.');
    }

    var formData = new FormData();
    formData.append('photo', photoPath);
    formData.append('content', nickname); //req.body.content

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["EDIT_USER_PROFILE_REQUEST"],
      data: formData
    });
  }, [nickname, photoPath]);
  /*
  useEffect(()=>{
    if(editUserProfileDone){
      }
  });
  */

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    children: [userInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("title", {
        children: [userInfo.nickname, "\uB2D8\uC758 \uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        name: "description",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        property: "og:description",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://nodebird.com/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://nodebird.com/user/".concat(id)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }, _this), userInfo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
            src: "http://localhost:3065/profile/".concat(userInfo.photo),
            size: 128
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            style: {
              display: "inline-block"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
              children: userInfo.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
              children: userInfo.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }, _this), me && me.id == userInfo.id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          shape: "round",
          onClick: onClickEditProfile,
          children: "Edit profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        style: {
          display: "flex",
          margin: "20px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
          children: [userInfo.Followings, " Following ", userInfo.Followers, " Followers"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        visible: modalVisible,
        title: "Edit profile",
        onCancel: onClickClose,
        footer: null,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
          style: {
            margin: '10px 0 20px'
          },
          encType: "multipart/form-data",
          onFinish: onClickSave,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            onClick: onClickEditProfilePhoto,
            style: {
              cursor: "pointer"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("input", {
              type: "file",
              name: "photo",
              hidden: true,
              ref: imageInput,
              onChange: onChangePhoto
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
              count: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PlusCircleFilled"], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
                style: {
                  color: 'red'
                }
              }, "style", {
                fontSize: "25px"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 25
              }, _this),
              offset: [-10, 110],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                src: "http://localhost:3065/profile/".concat(photoPath),
                size: 128
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 11
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
            placeholder: "Nickname",
            style: {
              marginTop: "20px"
            },
            value: nickname,
            onChange: onChangeNickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            shape: "round",
            htmlType: "submit",
            style: {
              marginTop: "20px"
            },
            children: "\uC5C5\uB85C\uB4DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }, _this)]
    }, void 0, true) : null, mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 32
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, _this);
};

_s(User, "nhAjOW0NPUX0scbZVwoQmO+5IuE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanMiXSwibmFtZXMiOlsiVXNlciIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInVzZXIiLCJ1c2VySW5mbyIsIm1lIiwicGhvdG9QYXRoIiwiZWRpdFVzZXJQcm9maWxlRG9uZSIsInVzZVN0YXRlIiwibW9kYWxWaXNpYmxlIiwic2V0bW9kYWxWaXNpYmxlIiwibmlja25hbWUiLCJzZXROaWNrbmFtZSIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInR5cGUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsImxhc3RJZCIsImxlbmd0aCIsImRhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlTmlja25hbWUiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2tFZGl0UHJvZmlsZSIsIm9uQ2xpY2tDbG9zZSIsIm9uQ2xpY2tFZGl0UHJvZmlsZVBob3RvIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VQaG90byIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGVzIiwiVVBMT0FEX1BIT1RPX1JFUVVFU1QiLCJvbkNsaWNrU2F2ZSIsInRyaW0iLCJhbGVydCIsImZvcm1EYXRhIiwiRURJVF9VU0VSX1BST0ZJTEVfUkVRVUVTVCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJwaG90byIsImVtYWlsIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImN1cnNvciIsImNvbG9yIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBekI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUhpQixNQUlUQyxFQUpTLEdBSUZGLE1BQU0sQ0FBQ0csS0FKTCxDQUlURCxFQUpTOztBQUFBLHFCQUtxQ0UsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FMaEQ7QUFBQSxNQUtUQyxTQUxTLGdCQUtUQSxTQUxTO0FBQUEsTUFLRUMsWUFMRixnQkFLRUEsWUFMRjtBQUFBLE1BS2dCQyxnQkFMaEIsZ0JBS2dCQSxnQkFMaEI7O0FBQUEsc0JBTXdDTCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNLLElBQWpCO0FBQUEsR0FBRCxDQU5uRDtBQUFBLE1BTVRDLFFBTlMsaUJBTVRBLFFBTlM7QUFBQSxNQU1DQyxFQU5ELGlCQU1DQSxFQU5EO0FBQUEsTUFNS0MsU0FOTCxpQkFNS0EsU0FOTDtBQUFBLE1BTWdCQyxtQkFOaEIsaUJBTWdCQSxtQkFOaEI7O0FBQUEsa0JBT3VCQyxzREFBUSxDQUFDLEtBQUQsQ0FQL0I7QUFBQSxNQU9WQyxZQVBVO0FBQUEsTUFPSUMsZUFQSjs7QUFBQSxtQkFRaUJGLHNEQUFRLENBQUMsRUFBRCxDQVJ6QjtBQUFBLE1BUVRHLFFBUlM7QUFBQSxNQVFDQyxXQVJEOztBQVVqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixVQUFJQyxNQUFNLENBQUNDLFdBQVAsR0FBcUJDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBOUMsR0FBNkRGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0MsR0FBekcsRUFBOEc7QUFDNUcsWUFBSW5CLFlBQVksSUFBSSxDQUFDQyxnQkFBckIsRUFBdUM7QUFDckNYLGtCQUFRLENBQUM7QUFDUDhCLGdCQUFJLEVBQUVDLHNFQURDO0FBRVBDLGtCQUFNLEVBQUV2QixTQUFTLENBQUNBLFNBQVMsQ0FBQ3dCLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBVCxJQUFtQ3hCLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDd0IsTUFBVixHQUFtQixDQUFwQixDQUFULENBQWdDN0IsRUFGcEU7QUFHUDhCLGdCQUFJLEVBQUU5QjtBQUhDLFdBQUQsQ0FBUjtBQUtEO0FBQ0Y7QUFDRixLQVZEOztBQVdBb0IsVUFBTSxDQUFDVyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1osUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEMsWUFBTSxDQUFDWSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ2IsUUFBckM7QUFDRCxLQUZEO0FBR0QsR0FoQlEsRUFnQk4sQ0FBQ2QsU0FBUyxDQUFDd0IsTUFBWCxFQUFtQnZCLFlBQW5CLEVBQWlDTixFQUFqQyxFQUFxQ08sZ0JBQXJDLENBaEJNLENBQVQ7QUFrQkEsTUFBTTBCLGdCQUFnQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUMxQ2xCLGVBQVcsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQzs7QUFJQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0J2QixtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNELEdBRkQ7O0FBR0EsTUFBTXdCLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJ4QixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBRkQ7O0FBSUEsTUFBTXlCLHVCQUF1QixHQUFHTix5REFBVyxDQUFDLFlBQU07QUFDaER4QyxjQUFVLENBQUMrQyxPQUFYLENBQW1CQyxLQUFuQjtBQUNELEdBRjBDLEVBRXhDLENBQUNoRCxVQUFVLENBQUMrQyxPQUFaLENBRndDLENBQTNDO0FBSUEsTUFBTUUsYUFBYSxHQUFHVCx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUN2QztBQUNBLFFBQU1TLGFBQWEsR0FBRyxJQUFJQyxRQUFKLEVBQXRCO0FBQ0FELGlCQUFhLENBQUNFLE1BQWQsQ0FBcUIsT0FBckIsRUFBOEJYLENBQUMsQ0FBQ0MsTUFBRixDQUFTVyxLQUFULENBQWUsQ0FBZixDQUE5QjtBQUNBbkQsWUFBUSxDQUFDO0FBQ1A4QixVQUFJLEVBQUVzQixtRUFEQztBQUVQbEIsVUFBSSxFQUFFYztBQUZDLEtBQUQsQ0FBUjtBQUlELEdBUmdDLEVBUTlCLEVBUjhCLENBQWpDO0FBVUEsTUFBTUssV0FBVyxHQUFJZix5REFBVyxDQUFDLFlBQU07QUFDckMsUUFBSSxDQUFDbEIsUUFBRCxJQUFhLENBQUNBLFFBQVEsQ0FBQ2tDLElBQVQsRUFBbEIsRUFBbUM7QUFDakMsYUFBT0MsS0FBSyxDQUFDLGFBQUQsQ0FBWjtBQUNEOztBQUNELFFBQU1DLFFBQVEsR0FBRyxJQUFJUCxRQUFKLEVBQWpCO0FBQ0FPLFlBQVEsQ0FBQ04sTUFBVCxDQUFnQixPQUFoQixFQUF5Qm5DLFNBQXpCO0FBQ0F5QyxZQUFRLENBQUNOLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkI5QixRQUEzQixFQU5xQyxDQU1BOztBQUVyQ3BCLFlBQVEsQ0FBQztBQUNQOEIsVUFBSSxFQUFFMkIsd0VBREM7QUFFUHZCLFVBQUksRUFBRXNCO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FaK0IsRUFZN0IsQ0FBQ3BDLFFBQUQsRUFBV0wsU0FBWCxDQVo2QixDQUFoQztBQWNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHRSxzQkFDRSxzRUFBQyx5RUFBRDtBQUFBLGVBQ0dGLFFBQVEsaUJBQ1Asc0VBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLG1CQUNHQSxRQUFRLENBQUNPLFFBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sWUFBS1AsUUFBUSxDQUFDTyxRQUFkO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sWUFBS1AsUUFBUSxDQUFDTyxRQUFkO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FO0FBQU0sZ0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxlQUFPLFlBQUtQLFFBQVEsQ0FBQ08sUUFBZDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFRRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBU0U7QUFBTSxnQkFBUSxFQUFDLFFBQWY7QUFBd0IsZUFBTyxzQ0FBK0JoQixFQUEvQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFjR1MsUUFBUSxnQkFFTDtBQUFBLDhCQUNBO0FBQUssYUFBSyxFQUFFO0FBQUM2QyxpQkFBTyxFQUFDLE1BQVQ7QUFBaUJDLG9CQUFVLEVBQUMsUUFBNUI7QUFBc0NDLHdCQUFjLEVBQUUsZUFBdEQ7QUFBdUVDLGdCQUFNLEVBQUM7QUFBOUUsU0FBWjtBQUFBLGdDQUNNO0FBQUssZUFBSyxFQUFFO0FBQUNILG1CQUFPLEVBQUUsTUFBVjtBQUFrQkMsc0JBQVUsRUFBQyxRQUE3QjtBQUF1Q0MsMEJBQWMsRUFBRTtBQUF2RCxXQUFaO0FBQUEsa0NBQ0ksc0VBQUMsMkNBQUQ7QUFBUSxlQUFHLDBDQUFtQy9DLFFBQVEsQ0FBQ2lELEtBQTVDLENBQVg7QUFBZ0UsZ0JBQUksRUFBRTtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSyxpQkFBSyxFQUFFO0FBQUNKLHFCQUFPLEVBQUU7QUFBVixhQUFaO0FBQUEsb0NBQ0k7QUFBQSx3QkFBSzdDLFFBQVEsQ0FBQ087QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBQSx3QkFBSVAsUUFBUSxDQUFDa0Q7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE4sRUFRT2pELEVBQUUsSUFBSUEsRUFBRSxDQUFDVixFQUFILElBQU9TLFFBQVEsQ0FBQ1QsRUFBdEIsZ0JBQ0Qsc0VBQUMsMkNBQUQ7QUFBUSxlQUFLLEVBQUMsT0FBZDtBQUFzQixpQkFBTyxFQUFFc0Msa0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURDLEdBRUQsSUFWTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQWFFO0FBQUssYUFBSyxFQUFFO0FBQUNnQixpQkFBTyxFQUFDLE1BQVQ7QUFBaUJHLGdCQUFNLEVBQUM7QUFBeEIsU0FBWjtBQUFBLCtCQUNJO0FBQUEscUJBQUloRCxRQUFRLENBQUNtRCxVQUFiLGlCQUFvQ25ELFFBQVEsQ0FBQ29ELFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRixlQWdCRSxzRUFBQywwQ0FBRDtBQUNGLGVBQU8sRUFBRS9DLFlBRFA7QUFFRixhQUFLLEVBQUMsY0FGSjtBQUdGLGdCQUFRLEVBQUV5QixZQUhSO0FBSUYsY0FBTSxFQUFFLElBSk47QUFBQSwrQkFNSixzRUFBQyx5Q0FBRDtBQUFNLGVBQUssRUFBRTtBQUFFa0Isa0JBQU0sRUFBRTtBQUFWLFdBQWI7QUFBd0MsaUJBQU8sRUFBQyxxQkFBaEQ7QUFBc0Usa0JBQVEsRUFBRVIsV0FBaEY7QUFBQSxrQ0FDRTtBQUFLLG1CQUFPLEVBQUVULHVCQUFkO0FBQXVDLGlCQUFLLEVBQUU7QUFBQ3NCLG9CQUFNLEVBQUM7QUFBUixhQUE5QztBQUFBLG9DQUNBO0FBQU8sa0JBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFJLEVBQUMsT0FBeEI7QUFBZ0Msb0JBQU0sTUFBdEM7QUFBdUMsaUJBQUcsRUFBRXBFLFVBQTVDO0FBQXdELHNCQUFRLEVBQUVpRDtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBLGVBRUEsc0VBQUMsMENBQUQ7QUFBTyxtQkFBSyxlQUFFLHNFQUFDLGtFQUFEO0FBQWtCLHFCQUFLLEVBQUU7QUFBRW9CLHVCQUFLLEVBQUU7QUFBVDtBQUF6QiwwQkFBa0Q7QUFBQ0Msd0JBQVEsRUFBQztBQUFWLGVBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWQ7QUFBdUYsb0JBQU0sRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLEdBQU4sQ0FBL0Y7QUFBQSxxQ0FDQSxzRUFBQywyQ0FBRDtBQUFRLG1CQUFHLDBDQUFtQ3JELFNBQW5DLENBQVg7QUFBMkQsb0JBQUksRUFBRTtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRSxzRUFBQywwQ0FBRDtBQUFPLHVCQUFXLEVBQUMsVUFBbkI7QUFBOEIsaUJBQUssRUFBRTtBQUFDc0QsdUJBQVMsRUFBRTtBQUFaLGFBQXJDO0FBQTBELGlCQUFLLEVBQUVqRCxRQUFqRTtBQUEyRSxvQkFBUSxFQUFFaUI7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVFFLHNFQUFDLDJDQUFEO0FBQVEsaUJBQUssRUFBQyxPQUFkO0FBQXNCLG9CQUFRLEVBQUMsUUFBL0I7QUFBd0MsaUJBQUssRUFBRTtBQUFDZ0MsdUJBQVMsRUFBRTtBQUFaLGFBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5JO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkY7QUFBQSxvQkFGSyxHQXVDTCxJQXJETixFQXNERzVELFNBQVMsQ0FBQzZELEdBQVYsQ0FBYyxVQUFDOUQsSUFBRDtBQUFBLDBCQUFVLHNFQUFDLDZEQUFEO0FBQXdCLFlBQUksRUFBRUE7QUFBOUIsU0FBZUEsSUFBSSxDQUFDSixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVY7QUFBQSxLQUFkLENBdERIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMERELENBcklEOztHQUFNUCxJO1VBRWFJLHVELEVBQ0ZFLHFELEVBRXVDRyx1RCxFQUNHQSx1RDs7O0tBTnJEVCxJOztBQThKU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLjkwMTMwODhhNGVjOWMzMjZjNDJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXZhdGFyLCBJbWFnZSwgQnV0dG9uLCBNb2RhbCwgSW5wdXQsIEJhZGdlLCBGb3JtIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9VU0VSX1JFUVVFU1QsIFVQTE9BRF9QSE9UT19SRVFVRVNULCBFRElUX1VTRVJfUFJPRklMRV9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgRGVza3RvcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9EZXNrdG9wTGF5b3V0JztcclxuXHJcbmNvbnN0IFVzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IHVzZXJJbmZvLCBtZSwgcGhvdG9QYXRoLCBlZGl0VXNlclByb2ZpbGVEb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldG1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgWyBuaWNrbmFtZSwgc2V0Tmlja25hbWUgXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICBsYXN0SWQ6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0gJiYgbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXS5pZCxcclxuICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW21haW5Qb3N0cy5sZW5ndGgsIGhhc01vcmVQb3N0cywgaWQsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VOaWNrbmFtZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXROaWNrbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrRWRpdFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRtb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2xpY2tDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldG1vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNsaWNrRWRpdFByb2ZpbGVQaG90byA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQaG90byA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdpbWFnZXMnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9QSE9UT19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrU2F2ZSAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIW5pY2tuYW1lIHx8ICFuaWNrbmFtZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfri4nrhKTsnoTsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBwaG90b1BhdGgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50Jywgbmlja25hbWUpOy8vcmVxLmJvZHkuY29udGVudFxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogRURJVF9VU0VSX1BST0ZJTEVfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9LCBbbmlja25hbWUsIHBob3RvUGF0aF0pO1xyXG5cclxuICAvKlxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoZWRpdFVzZXJQcm9maWxlRG9uZSl7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG4gICovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGVza3RvcExheW91dD5cclxuICAgICAge3VzZXJJbmZvICYmIChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAge3VzZXJJbmZvLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICDri5jsnZgg6riAXHJcbiAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vbm9kZWJpcmQuY29tL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YGh0dHBzOi8vbm9kZWJpcmQuY29tL3VzZXIvJHtpZH1gfSAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgKX1cclxuICAgICAge3VzZXJJbmZvXHJcbiAgICAgICAgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBtYXJnaW46XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Byb2ZpbGUvJHt1c2VySW5mby5waG90b31gfSBzaXplPXsxMjh9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3VzZXJJbmZvLm5pY2tuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VySW5mby5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHttZSAmJiBtZS5pZD09dXNlckluZm8uaWQgP1xyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaGFwZT1cInJvdW5kXCIgb25DbGljaz17b25DbGlja0VkaXRQcm9maWxlfT5FZGl0IHByb2ZpbGU8L0J1dHRvbj46XHJcbiAgICAgICAgICAgICAgICBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIG1hcmdpbjpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPHA+e3VzZXJJbmZvLkZvbGxvd2luZ3N9IEZvbGxvd2luZyB7dXNlckluZm8uRm9sbG93ZXJzfSBGb2xsb3dlcnM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cclxuICAgICAgICAgIHRpdGxlPVwiRWRpdCBwcm9maWxlXCJcclxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNsaWNrQ2xvc2V9XHJcbiAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4JyB9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvbkNsaWNrU2F2ZX0+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tFZGl0UHJvZmlsZVBob3RvfSBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInBob3RvXCIgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlUGhvdG99IC8+XHJcbiAgICAgICAgICA8QmFkZ2UgY291bnQ9ezxQbHVzQ2lyY2xlRmlsbGVkIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fSBzdHlsZT17e2ZvbnRTaXplOlwiMjVweFwifX0vPn0gIG9mZnNldD17Wy0xMCwgMTEwXX0+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7cGhvdG9QYXRofWB9IHNpemU9ezEyOH0vPlxyXG4gICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmlja25hbWVcIiBzdHlsZT17e21hcmdpblRvcDogXCIyMHB4XCJ9fSB2YWx1ZT17bmlja25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfS8+XHJcbiAgICAgICAgICA8QnV0dG9uIHNoYXBlPVwicm91bmRcIiBodG1sVHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIn19PuyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIDogbnVsbH1cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgIDwvRGVza3RvcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfVxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICAvL2NvbnNvbGUubG9nKCdnZXRTdGF0ZScsIGNvbnRleHQuc3RvcmUuZ2V0U3RhdGUoKS5wb3N0Lm1haW5Qb3N0cyk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==