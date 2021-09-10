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
      likePostError = _useSelector.likePostError,
      retweetError = _useSelector.retweetError;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var id = me === null || me === void 0 ? void 0 : me.id; //me 있으면 id 없으면 undefined

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (retweetError) {
      return alert(retweetError);
    }
  }, [retweetError]);
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_12__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [post, id]);
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(CardWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 38
      }, _this) //이미지가 반드시 한개 이상일때 실행된다.
      ,
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 19
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageOutlined"], {
        onClick: onToggleComment
      }, "message", false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 24
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this)
      }, "elipsis", false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, _this)],
      extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 20
      }, _this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 25
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 30
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
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
                    lineNumber: 130,
                    columnNumber: 28
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 29
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 21
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, _this)]
    }, void 0, true)]
  }, post.id, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, _this);
};

_s(PostCard, "tPU6KfCn6dJYrbub+fhe7DKPugk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVtb3ZlUG9zdExvYWRpbmciLCJsaWtlUG9zdEVycm9yIiwicmV0d2VldEVycm9yIiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwidXNlciIsIm1lIiwiaWQiLCJ1c2VFZmZlY3QiLCJhbGVydCIsIm9uVW5saWtlIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJvbkxpa2UiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidiIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwYXRobmFtZSIsInF1ZXJ5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJhcnJheU9mIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBViwyS0FBakI7S0FBTUYsVzs7QUFHTixJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7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LFlBQVEsRUFBQ00saURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FMUztBQU1sQmIsVUFBTSxFQUFFVSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDTyxHQUE1QixDQU5VO0FBT2xCcEIsVUFBTSxFQUFFYSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QjtBQVBVLEdBQWhCO0FBRFcsQ0FBckI7QUFZZS9DLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZiOGFkMDVkZmY0NmE1Y2Y3YzExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfWZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDYXJkLCBQb3BvdmVyLCBCdXR0b24sIExpc3QsIENvbW1lbnQsIEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBIZWFydFR3b1RvbmUsIE1lc3NhZ2VPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgUmV0d2VldE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSAnLi9Qb3N0Q2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSAnLi9Gb2xsb3dCdXR0b24nO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfUkVRVUVTVCwgUkVUV0VFVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZywgbGlrZVBvc3RFcnJvciwgcmV0d2VldEVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFsgY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgaWQgPSBtZT8uaWQ7IC8vbWUg7J6I7Jy866m0IGlkIOyXhuycvOuptCB1bmRlZmluZWRcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAocmV0d2VldEVycm9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHJldHdlZXRFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JldHdlZXRFcnJvcl0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBvblVubGlrZSA9IHVzZUNhbGxiYWNrKCgpPT57XHJcblxyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbcG9zdCwgaWRdKTtcclxuXHJcbiAgICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9LCBbcG9zdCwgaWRdKTtcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbcG9zdCwgaWRdKTtcclxuXHJcbiAgICBjb25zdCBvblJldHdlZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbcG9zdCwgaWRdKTtcclxuICAgIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCh2PT4gdi5pZCA9PT0gaWQpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q2FyZFdyYXBwZXIga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9Lz59Ly/snbTrr7jsp4DqsIAg67CY65Oc7IucIO2VnOqwnCDsnbTsg4HsnbzrlYwg7Iuk7ZaJ65Cc64ukLlxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9Lz4sXHJcbiAgICAgICAgICAgICAgICBsaWtlZCBcclxuICAgICAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblVubGlrZX0gLz5cclxuICAgICAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+LFxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJtZXNzYWdlXCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fS8+LFxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgXHJcbiAgICAgICAgICAgICAgICBrZXk9XCJlbGlwc2lzXCIgXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIiBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30gb25DbGljaz17b25SZW1vdmVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIGV4dHJhPXs8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzID8gcG9zdC5Db21tZW50cy5sZW5ndGggOiAwfSDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50cyB8fCBbXX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7IC8vaXRlbeydgCBwb3N0LkNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfS8vaXRlbS5Vc2VyLm5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy91c2VyJywgcXVlcnk6IHsgaWQ6IGl0ZW0uVXNlci5pZCB9fX0gYXM9e2AvdXNlci8ke2l0ZW0uVXNlci5pZH1gfT4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2FyZFdyYXBwZXI+ICAgICAgICAgIFxyXG4gICAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7IC8vc2hhcGXsnYQg7J207Jqp7ZWY66m0IOuNlCDsoJXtmZXtlZjqsowgcHJvcOygleydmCDtlaDsiJjsnojri6QuXHJcbiAgICAgICAgaWQ6UHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBVc2VyOlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgY29udGVudDpQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDpQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIENvbW1lbnRzOlByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICAgICAgTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxyXG4gICAgfSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9