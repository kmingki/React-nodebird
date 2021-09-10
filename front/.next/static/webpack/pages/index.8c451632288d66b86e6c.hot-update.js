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
        lineNumber: 79,
        columnNumber: 38
      }, _this) //이미지가 반드시 한개 이상일때 실행된다.
      ,
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 19
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageOutlined"], {
        onClick: onToggleComment
      }, "message", false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 24
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, _this)
      }, "elipsis", false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, _this)],
      extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 20
      }, _this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 25
        }, _this),
        title: post.User.nickname,
        description: post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          cover: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            images: post.Retweet.Images
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 54
          }, _this),
          extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            post: post
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 28
          }, _this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
            avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
              children: post.Retweet.User.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 33
            }, _this),
            title: post.Retweet.User.nickname,
            description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
              postData: post.Retweet.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 38
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 23
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
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
                    lineNumber: 137,
                    columnNumber: 28
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 29
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 21
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, _this)]
    }, void 0, true)]
  }, post.id, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVtb3ZlUG9zdExvYWRpbmciLCJsaWtlUG9zdEVycm9yIiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwidXNlciIsIm1lIiwiaWQiLCJvblVubGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJvbkxpa2UiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidiIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsIlJldHdlZXQiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicGF0aG5hbWUiLCJxdWVyeSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsMktBQWpCO0tBQU1GLFc7O0FBR04sSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcs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T0EscUJBQU8sRUFBRUssSUFBSSxDQUFDSDtBQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBO0FBYUg7QUFsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUEsb0JBL0NSO0FBQUEsS0FBa0JuQyxJQUFJLENBQUNZLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTJFSCxDQXJJRDs7R0FBTWIsUTtVQUNlRyx1RCxFQUM0QkMsdUQsRUFFOUJBLHVEOzs7TUFKYkosUTtBQXVJTkEsUUFBUSxDQUFDMEMsU0FBVCxHQUFxQjtBQUNqQnpDLE1BQUksRUFBRTBDLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFBRTtBQUNwQi9CLE1BQUUsRUFBQzhCLGlEQUFTLENBQUNFLE1BREs7QUFFbEJaLFFBQUksRUFBQ1UsaURBQVMsQ0FBQ0csTUFGRztBQUdsQlYsV0FBTyxFQUFDTyxpREFBUyxDQUFDSSxNQUhBO0FBSWxCQyxhQUFTLEVBQUNMLGlEQUFTLENBQUNJLE1BSkY7QUFLbEJWLFlBQVEsRUFBQ00saURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FMUztBQU1sQmQsVUFBTSxFQUFFVyxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDTyxHQUE1QixDQU5VO0FBT2xCckIsVUFBTSxFQUFFYyxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QjtBQVBVLEdBQWhCO0FBRFcsQ0FBckI7QUFZZTlDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhjNDUxNjMyMjg4ZDY2Yjg2ZTZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfWZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDYXJkLCBQb3BvdmVyLCBCdXR0b24sIExpc3QsIENvbW1lbnQsIEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBIZWFydFR3b1RvbmUsIE1lc3NhZ2VPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgUmV0d2VldE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSAnLi9Qb3N0Q2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSAnLi9Gb2xsb3dCdXR0b24nO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfUkVRVUVTVCwgUkVUV0VFVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZywgbGlrZVBvc3RFcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBbIGNvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZCBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGlkID0gbWU/LmlkOyAvL21lIOyeiOycvOuptCBpZCDsl4bsnLzrqbQgdW5kZWZpbmVkXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG5cclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW3Bvc3QsIGlkXSk7XHJcblxyXG4gICAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSwgW3Bvc3QsIGlkXSk7XHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW3Bvc3QsIGlkXSk7XHJcblxyXG4gICAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW3Bvc3QsIGlkXSk7XHJcbiAgICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQodj0+IHYuaWQgPT09IGlkKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENhcmRXcmFwcGVyIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfS8+fS8v7J2066+47KeA6rCAIOuwmOuTnOyLnCDtlZzqsJwg7J207IOB7J2865WMIOyLpO2WieuQnOuLpC5cclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgb25DbGljaz17b25SZXR3ZWV0fS8+LFxyXG4gICAgICAgICAgICAgICAgbGlrZWQgXHJcbiAgICAgICAgICAgICAgICA/IDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Vbmxpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICA6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfSAvPixcclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwibWVzc2FnZVwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0vPixcclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIFxyXG4gICAgICAgICAgICAgICAga2V5PVwiZWxpcHNpc1wiIFxyXG4gICAgICAgICAgICAgICAgY29udGVudD17KFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBleHRyYT17PEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LlJldHdlZXQgPyBcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5SZXR3ZWV0LkltYWdlc30vPn1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17PEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuUmV0d2VldC5jb250ZW50fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cyA/IHBvc3QuQ29tbWVudHMubGVuZ3RoIDogMH0g64yT6riAYH1cclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHMgfHwgW119XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4geyAvL2l0ZW3snYAgcG9zdC5Db21tZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX0vL2l0ZW0uVXNlci5uaWNrbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvdXNlcicsIHF1ZXJ5OiB7IGlkOiBpdGVtLlVzZXIuaWQgfX19IGFzPXtgL3VzZXIvJHtpdGVtLlVzZXIuaWR9YH0+ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NhcmRXcmFwcGVyPiAgICAgICAgICBcclxuICAgICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoeyAvL3NoYXBl7J2EIOydtOyaqe2VmOuptCDrjZQg7KCV7ZmV7ZWY6rKMIHByb3DsoJXsnZgg7ZWg7IiY7J6I64ukLlxyXG4gICAgICAgIGlkOlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgVXNlcjpQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6UHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjcmVhdGVkQXQ6UHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBDb21tZW50czpQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcclxuICAgIH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==