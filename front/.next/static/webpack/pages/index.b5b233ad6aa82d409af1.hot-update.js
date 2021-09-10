webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\components\\PostCard.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();















var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 20px;\n"])));
_c = CardWrapper;

var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      removePostLoading = _useSelector.removePostLoading,
      likePostError = _useSelector.likePostError;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var id = me === null || me === void 0 ? void 0 : me.id; //me 있으면 id 없으면 undefined

  var onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_12__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [post, id]);
  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_12__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [post, id]);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_12__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [post, id]);
  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: RETWEET_REQUEST,
      data: post.id
    });
  }, [id]);
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(CardWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 38
      }, _this) //이미지가 반드시 한개 이상일때 실행된다.
      ,
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 19
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageOutlined"], {
        onClick: onToggleComment
      }, "message", false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 24
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, _this)
      }, "elipsis", false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this)],
      extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 20
      }, _this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 30
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
        header: "".concat(post.Comments ? post.Comments.length : 0, " \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments || [],
        renderItem: function renderItem(item) {
          //item은 post.Comments
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Comment"], {
              author: item.User.nickname //item.User.nickname
              ,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
                href: {
                  pathname: '/user',
                  query: {
                    id: item.User.id
                  }
                },
                as: "/user/".concat(item.User.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
                    children: item.User.nickname[0]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 28
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 29
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 21
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, _this)]
    }, void 0, true)]
  }, post.id, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, _this);
};

_s(PostCard, "1u0GuXhRn5Iez42RsF6au8Ye4vE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c2 = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    //shape을 이용하면 더 정확하게 prop정의 할수있다.
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c, _c2;

$RefreshReg$(_c, "CardWrapper");
$RefreshReg$(_c2, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVtb3ZlUG9zdExvYWRpbmciLCJsaWtlUG9zdEVycm9yIiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwidXNlciIsIm1lIiwiaWQiLCJvblVubGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJvbkxpa2UiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidiIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwYXRobmFtZSIsInF1ZXJ5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJhcnJheU9mIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBViwyS0FBakI7S0FBTUYsVzs7QUFHTixJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFX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LEdBQWhCO0FBRFcsQ0FBckI7QUFZZTdDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI1YjIzM2FkNmFhODJkNDA5YWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfWZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDYXJkLCBQb3BvdmVyLCBCdXR0b24sIExpc3QsIENvbW1lbnQsIEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBIZWFydFR3b1RvbmUsIE1lc3NhZ2VPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgUmV0d2VldE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSAnLi9Qb3N0Q2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSAnLi9Gb2xsb3dCdXR0b24nO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgcmVtb3ZlUG9zdExvYWRpbmcsIGxpa2VQb3N0RXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgWyBjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBpZCA9IG1lPy5pZDsgLy9tZSDsnojsnLzrqbQgaWQg7JeG7Jy866m0IHVuZGVmaW5lZFxyXG5cclxuICAgIGNvbnN0IG9uVW5saWtlID0gdXNlQ2FsbGJhY2soKCk9PntcclxuXHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWRcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtwb3N0LCBpZF0pO1xyXG5cclxuICAgIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0sIFtwb3N0LCBpZF0pO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtwb3N0LCBpZF0pO1xyXG5cclxuICAgIGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICB9KVxyXG4gICAgfSwgW2lkXSk7XHJcbiAgICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQodj0+IHYuaWQgPT09IGlkKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENhcmRXcmFwcGVyIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfS8+fS8v7J2066+47KeA6rCAIOuwmOuTnOyLnCDtlZzqsJwg7J207IOB7J2865WMIOyLpO2WieuQnOuLpC5cclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgb25DbGljaz17b25SZXR3ZWV0fS8+LFxyXG4gICAgICAgICAgICAgICAgbGlrZWQgXHJcbiAgICAgICAgICAgICAgICA/IDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Vbmxpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICA6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfSAvPixcclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwibWVzc2FnZVwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0vPixcclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIFxyXG4gICAgICAgICAgICAgICAga2V5PVwiZWxpcHNpc1wiIFxyXG4gICAgICAgICAgICAgICAgY29udGVudD17KFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBleHRyYT17PEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cyA/IHBvc3QuQ29tbWVudHMubGVuZ3RoIDogMH0g64yT6riAYH1cclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHMgfHwgW119XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4geyAvL2l0ZW3snYAgcG9zdC5Db21tZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX0vL2l0ZW0uVXNlci5uaWNrbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvdXNlcicsIHF1ZXJ5OiB7IGlkOiBpdGVtLlVzZXIuaWQgfX19IGFzPXtgL3VzZXIvJHtpdGVtLlVzZXIuaWR9YH0+ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NhcmRXcmFwcGVyPiAgICAgICAgICBcclxuICAgICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoeyAvL3NoYXBl7J2EIOydtOyaqe2VmOuptCDrjZQg7KCV7ZmV7ZWY6rKMIHByb3DsoJXsnZgg7ZWg7IiY7J6I64ukLlxyXG4gICAgICAgIGlkOlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgVXNlcjpQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6UHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjcmVhdGVkQXQ6UHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBDb21tZW50czpQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcclxuICAgIH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==