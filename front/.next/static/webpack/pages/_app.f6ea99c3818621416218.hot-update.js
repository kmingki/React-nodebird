webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unlikePost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(likePost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(uploadImages),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLikePost),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnlikePost),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUploadImages),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);

//put() redux store에 dispatch하는 역할






function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("post/".concat(data, "/unlike"));
}

function unlikePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlikePost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(unlikePostAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_FAILURE"],
            data: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/post/".concat(data, "/like"));
}

function likePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function likePost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(likePostAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_FAILURE"],
            error: _context2.t0.response.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function loadPostsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/posts');
}

function loadPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(loadPostsAPI);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POSTS_FAILURE"],
            error: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function addPostAPI(data) {
  // data == text 
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', {
    content: data
  });
}

function addPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(addPostAPI, action.data);

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context4.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            //post reducer와 user reducer
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 8:
          _context4.next = 15;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_FAILURE"],
            error: _context4.t0.response.data
          });

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 10]]);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/post/".concat(data));
}

function removePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(removePostAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context5.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["REMOVE_POST_OF_ME"],
            data: result.data
          });

        case 8:
          _context5.next = 15;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_FAILURE"],
            error: _context5.t0.response.data
          });

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 10]]);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/post/".concat(data.postId, "/comment"), data);
}

function addComment(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_FAILURE"],
            error: _context6.t0.response.data
          });

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data);
}

function uploadImages(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function uploadImages$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(uploadImagesAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data
          });

        case 6:
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: UPLOAD_IMAGES_REQUEST,
            error: _context7.t0.response.data
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function watchLikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikePost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchUnlikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnlikePost$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_REQUEST"], unlikePost);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchLoadPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchUploadImages() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUploadImages$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(UPLOAD_IMAGES_REQUEST, uploadImages);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchAddComment)]);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJ1bmxpa2VQb3N0IiwibGlrZVBvc3QiLCJsb2FkUG9zdHMiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJ1cGxvYWRJbWFnZXMiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsInBvc3RTYWdhIiwidW5saWtlUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBhdGNoIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiY29uc29sZSIsImVycm9yIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsInJlc3BvbnNlIiwibGlrZVBvc3RBUEkiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwibG9hZFBvc3RzQVBJIiwiZ2V0IiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiYWRkUG9zdEFQSSIsInBvc3QiLCJjb250ZW50IiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiaWQiLCJBRERfUE9TVF9GQUlMVVJFIiwicmVtb3ZlUG9zdEFQSSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJ1cGxvYWRJbWFnZXNBUEkiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJ0YWtlTGF0ZXN0IiwiTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfUkVRVUVTVCIsInRocm90dGxlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FnQ1dBLFU7bUdBcUJBQyxRO21HQXFCQUMsUzttR0FvQkFDLE87bUdBMkJBQyxVO21HQXlCQUMsVTttR0FtQkFDLFk7bUdBaUJBQyxhO21HQUlBQyxlO29HQUlBQyxZO29HQUlBQyxjO29HQUlBQyxlO29HQUlBQyxlO29HQUdBQyxpQjtvR0FJZUMsUTs7QUFqTjFCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFxQkE7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDekIsU0FBT0MsNENBQUssQ0FBQ0MsS0FBTixnQkFBb0JGLElBQXBCLGFBQVA7QUFDSDs7QUFFRCxTQUFXaEIsVUFBWCxDQUFzQm1CLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdUIsaUJBQU1DLCtEQUFJLENBQUNMLGFBQUQsRUFBZ0JJLE1BQU0sQ0FBQ0gsSUFBdkIsQ0FBVjs7QUFGdkI7QUFFY0ssZ0JBRmQ7QUFBQTtBQUlRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVDLGtFQURBO0FBRU5SLGdCQUFJLEVBQUVLLE1BQU0sQ0FBQ0w7QUFGUCxXQUFELENBQVQ7O0FBSlI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNRUyxpQkFBTyxDQUFDQyxLQUFSO0FBVFI7QUFVUSxpQkFBTUosOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFSSxrRUFEQTtBQUVOWCxnQkFBSSxFQUFFLFlBQUlZLFFBQUosQ0FBYVo7QUFGYixXQUFELENBQVQ7O0FBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJBLFNBQVNhLFdBQVQsQ0FBcUJiLElBQXJCLEVBQTJCO0FBQ3ZC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QUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY2ZWE5OWMzODE4NjIxNDE2MjE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3B1dCgpIHJlZHV4IHN0b3Jl7JeQIGRpc3BhdGNo7ZWY64qUIOyXre2VoFxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSxcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGBwb3N0LyR7ZGF0YX0vdW5saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdHMnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkgeyAvLyBkYXRhID09IHRleHQgXHJcbiAgICBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIHsgY29udGVudCA6IGRhdGEgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogYWRkUG9zdChhY3Rpb24peyAvL2FjdGlvblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTsgLy9hY3Rpb24uZGF0YSA9PSB0ZXh0XHJcbiAgICAgICAgXHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3Bvc3QgcmVkdWNlcuyZgCB1c2VyIHJlZHVjZXJcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7IC8vYWN0aW9uLmRhdGEgPT0gcG9zdGlkXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiAqIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9