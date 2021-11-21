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
      photoPath = _useSelector2.photoPath;

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
    console.log('images', e.target.files);
    var imageFormData = new FormData();
    imageFormData.append('photo', e.target.files[0]);
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["UPLOAD_PHOTO_REQUEST"],
      data: imageFormData
    });
  }, []);
  var onClickSave = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!nickname || !nickname.trim()) {
      return alert('게시글을 작성하세요.');
    }

    var formData = new FormData();
    imagePaths.forEach(function (p) {
      formData.append('image', p); //req.body.image
    });
    formData.append('content', nickname); //req.body.content

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["EDIT_USER_PROFILE_REQUEST"],
      data: formData
    });
  }, [nickname]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    children: [userInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("title", {
        children: [userInfo.nickname, "\uB2D8\uC758 \uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        name: "description",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        property: "og:description",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://nodebird.com/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://nodebird.com/user/".concat(id)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
            src: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Image"], {
              src: "https://joeschmoe.io/api/v1/random"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 34
            }, _this),
            size: 128
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            style: {
              display: "inline-block"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
              children: userInfo.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
              children: userInfo.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, _this), me && me.id == userInfo.id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          shape: "round",
          onClick: onClickEditProfile,
          children: "Edit profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
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
          lineNumber: 119,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
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
              lineNumber: 129,
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
                lineNumber: 130,
                columnNumber: 25
              }, _this),
              offset: [-10, 110],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                src: "http://localhost:3065/".concat(photoPath),
                size: 128
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 11
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
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
            lineNumber: 134,
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
            lineNumber: 135,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }, _this)]
    }, void 0, true) : null, mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 32
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, _this);
};

_s(User, "XXHepW+/xzdx1myeQ3ztPTQHXDE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanMiXSwibmFtZXMiOlsiVXNlciIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInVzZXIiLCJ1c2VySW5mbyIsIm1lIiwicGhvdG9QYXRoIiwidXNlU3RhdGUiLCJtb2RhbFZpc2libGUiLCJzZXRtb2RhbFZpc2libGUiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwidXNlRWZmZWN0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwidHlwZSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwibGFzdElkIiwibGVuZ3RoIiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DaGFuZ2VOaWNrbmFtZSIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DbGlja0VkaXRQcm9maWxlIiwib25DbGlja0Nsb3NlIiwib25DbGlja0VkaXRQcm9maWxlUGhvdG8iLCJjdXJyZW50IiwiY2xpY2siLCJvbkNoYW5nZVBob3RvIiwiY29uc29sZSIsImxvZyIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiVVBMT0FEX1BIT1RPX1JFUVVFU1QiLCJvbkNsaWNrU2F2ZSIsInRyaW0iLCJhbGVydCIsImZvcm1EYXRhIiwiaW1hZ2VQYXRocyIsImZvckVhY2giLCJwIiwiRURJVF9VU0VSX1BST0ZJTEVfUkVRVUVTVCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJlbWFpbCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJjdXJzb3IiLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFIaUIsTUFJVEMsRUFKUyxHQUlGRixNQUFNLENBQUNHLEtBSkwsQ0FJVEQsRUFKUzs7QUFBQSxxQkFLcUNFLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBTGhEO0FBQUEsTUFLVEMsU0FMUyxnQkFLVEEsU0FMUztBQUFBLE1BS0VDLFlBTEYsZ0JBS0VBLFlBTEY7QUFBQSxNQUtnQkMsZ0JBTGhCLGdCQUtnQkEsZ0JBTGhCOztBQUFBLHNCQU1tQkwsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDSyxJQUFqQjtBQUFBLEdBQUQsQ0FOOUI7QUFBQSxNQU1UQyxRQU5TLGlCQU1UQSxRQU5TO0FBQUEsTUFNQ0MsRUFORCxpQkFNQ0EsRUFORDtBQUFBLE1BTUtDLFNBTkwsaUJBTUtBLFNBTkw7O0FBQUEsa0JBT3VCQyxzREFBUSxDQUFDLEtBQUQsQ0FQL0I7QUFBQSxNQU9WQyxZQVBVO0FBQUEsTUFPSUMsZUFQSjs7QUFBQSxtQkFRaUJGLHNEQUFRLENBQUMsRUFBRCxDQVJ6QjtBQUFBLE1BUVRHLFFBUlM7QUFBQSxNQVFDQyxXQVJEOztBQVVqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFB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QjtBQUF3QyxpQkFBSyxFQUFFO0FBQUNvQyx1QkFBUyxFQUFFO0FBQVosYUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRjtBQUFBLG9CQUZLLEdBdUNMLElBckROLEVBc0RHL0QsU0FBUyxDQUFDZ0UsR0FBVixDQUFjLFVBQUNqRSxJQUFEO0FBQUEsMEJBQVUsc0VBQUMsNkRBQUQ7QUFBd0IsWUFBSSxFQUFFQTtBQUE5QixTQUFlQSxJQUFJLENBQUNKLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVjtBQUFBLEtBQWQsQ0F0REg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwREQsQ0FoSUQ7O0dBQU1QLEk7VUFFYUksdUQsRUFDRkUscUQsRUFFdUNHLHVELEVBQ2xCQSx1RDs7O0tBTmhDVCxJOztBQXlKU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLmIwYWFlMDA2MjMxOTg5ZWZmZmIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXZhdGFyLCBJbWFnZSwgQnV0dG9uLCBNb2RhbCwgSW5wdXQsIEJhZGdlLCBGb3JtIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9VU0VSX1JFUVVFU1QsIFVQTE9BRF9QSE9UT19SRVFVRVNULCBFRElUX1VTRVJfUFJPRklMRV9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgRGVza3RvcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9EZXNrdG9wTGF5b3V0JztcclxuXHJcbmNvbnN0IFVzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IHVzZXJJbmZvLCBtZSwgcGhvdG9QYXRoIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldG1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgWyBuaWNrbmFtZSwgc2V0Tmlja25hbWUgXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICBsYXN0SWQ6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0gJiYgbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXS5pZCxcclxuICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW21haW5Qb3N0cy5sZW5ndGgsIGhhc01vcmVQb3N0cywgaWQsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VOaWNrbmFtZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXROaWNrbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrRWRpdFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRtb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2xpY2tDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldG1vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNsaWNrRWRpdFByb2ZpbGVQaG90byA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQaG90byA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfUEhPVE9fUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1NhdmUgID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFuaWNrbmFtZSB8fCAhbmlja25hbWUudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTsvL3JlcS5ib2R5LmltYWdlXHJcbiAgICB9KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIG5pY2tuYW1lKTsvL3JlcS5ib2R5LmNvbnRlbnRcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEVESVRfVVNFUl9QUk9GSUxFX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSwgW25pY2tuYW1lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGVza3RvcExheW91dD5cclxuICAgICAge3VzZXJJbmZvICYmIChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAge3VzZXJJbmZvLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICDri5jsnZgg6riAXHJcbiAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vbm9kZWJpcmQuY29tL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YGh0dHBzOi8vbm9kZWJpcmQuY29tL3VzZXIvJHtpZH1gfSAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgKX1cclxuICAgICAge3VzZXJJbmZvXHJcbiAgICAgICAgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBtYXJnaW46XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXs8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9qb2VzY2htb2UuaW8vYXBpL3YxL3JhbmRvbVwiLz59IHNpemU9ezEyOH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXNlckluZm8ubmlja25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3VzZXJJbmZvLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge21lICYmIG1lLmlkPT11c2VySW5mby5pZCA/XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNoYXBlPVwicm91bmRcIiBvbkNsaWNrPXtvbkNsaWNrRWRpdFByb2ZpbGV9PkVkaXQgcHJvZmlsZTwvQnV0dG9uPjpcclxuICAgICAgICAgICAgICAgIG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgbWFyZ2luOlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8cD57dXNlckluZm8uRm9sbG93aW5nc30gRm9sbG93aW5nIHt1c2VySW5mby5Gb2xsb3dlcnN9IEZvbGxvd2VyczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgdGl0bGU9XCJFZGl0IHByb2ZpbGVcIlxyXG4gICAgICAgICAgb25DYW5jZWw9e29uQ2xpY2tDbG9zZX1cclxuICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uQ2xpY2tTYXZlfT5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0VkaXRQcm9maWxlUGhvdG99IHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwicGhvdG9cIiBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VQaG90b30gLz5cclxuICAgICAgICAgIDxCYWRnZSBjb3VudD17PFBsdXNDaXJjbGVGaWxsZWQgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19IHN0eWxlPXt7Zm9udFNpemU6XCIyNXB4XCJ9fS8+fSAgb2Zmc2V0PXtbLTEwLCAxMTBdfT5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7cGhvdG9QYXRofWB9IHNpemU9ezEyOH0vPlxyXG4gICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmlja25hbWVcIiBzdHlsZT17e21hcmdpblRvcDogXCIyMHB4XCJ9fSB2YWx1ZT17bmlja25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfS8+XHJcbiAgICAgICAgICA8QnV0dG9uIHNoYXBlPVwicm91bmRcIiBodG1sVHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIn19PuyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIDogbnVsbH1cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgIDwvRGVza3RvcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfVxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICAvL2NvbnNvbGUubG9nKCdnZXRTdGF0ZScsIGNvbnRleHQuc3RvcmUuZ2V0U3RhdGUoKS5wb3N0Lm1haW5Qb3N0cyk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==