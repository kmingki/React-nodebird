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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data); //form data는 그대로 전송해야함
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
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 13;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES_REQUEST"],
            error: _context7.t0.response.data
          });

        case 13:
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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES_REQUEST"], uploadImages);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJ1bmxpa2VQb3N0IiwibGlrZVBvc3QiLCJsb2FkUG9zdHMiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJ1cGxvYWRJbWFnZXMiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsInBvc3RTYWdhIiwidW5saWtlUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBhdGNoIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiY29uc29sZSIsImVycm9yIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsInJlc3BvbnNlIiwibGlrZVBvc3RBUEkiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwibG9hZFBvc3RzQVBJIiwiZ2V0IiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiYWRkUG9zdEFQSSIsInBvc3QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJpZCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX09GX01FIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsInVwbG9hZEltYWdlc0FQSSIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsInRha2VMYXRlc3QiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9SRVFVRVNUIiwidGhyb3R0bGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQW1DV0EsVTttR0FxQkFDLFE7bUdBcUJBQyxTO21HQW9CQUMsTzttR0EyQkFDLFU7bUdBeUJBQyxVO21HQW1CQUMsWTttR0FrQkFDLGE7bUdBSUFDLGU7b0dBSUFDLFk7b0dBSUFDLGM7b0dBSUFDLGU7b0dBSUFDLGU7b0dBR0FDLGlCO29HQUllQyxROztBQXJOMUI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXdCQTs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxJQUF2QixFQUE2QjtBQUN6QixTQUFPQyw0Q0FBSyxDQUFDQyxLQUFOLGdCQUFvQkYsSUFBcEIsYUFBUDtBQUNIOztBQUVELFNBQVdoQixVQUFYLENBQXNCbUIsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV1QixpQkFBTUMsK0RBQUksQ0FBQ0wsYUFBRCxFQUFnQkksTUFBTSxDQUFDSCxJQUF2QixDQUFWOztBQUZ2QjtBQUVjSyxnQkFGZDtBQUFBO0FBSVEsaUJBQU1DLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRUMsa0VBREE7QUFFTlIsZ0JBQUksRUFBRUssTUFBTSxDQUFDTDtBQUZQLFdBQUQsQ0FBVDs7QUFKUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU1FTLGlCQUFPLENBQUNDLEtBQVI7QUFUUjtBQVVRLGlCQUFNSiw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVJLGtFQURBO0FBRU5YLGdCQUFJLEVBQUUsWUFBSVksUUFBSixDQUFhWjtBQUZiLFdBQUQsQ0FBVDs7QUFWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQkEsU0FBU2EsV0FBVCxDQUFxQmIsSUFBckIsRUFBMkI7QUFDdkIsU0FBT0MsNENB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QUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43MjhhZjEzMjk1ZDRmNDM2MWUwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9wdXQoKSByZWR1eCBzdG9yZeyXkCBkaXNwYXRjaO2VmOuKlCDsl63tlaBcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCB7IGFsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgcG9zdC8ke2RhdGF9L3VubGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHsgLy8gZGF0YSA9PSB0ZXh0IFxyXG4gICAgXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiBhZGRQb3N0KGFjdGlvbil7IC8vYWN0aW9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpOyAvL2FjdGlvbi5kYXRhID09IHRleHRcclxuICAgICAgICBcclxuICAgICAgICB5aWVsZCBwdXQoeyBcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcG9zdCByZWR1Y2Vy7JmAIHVzZXIgcmVkdWNlclxyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTsgLy9hY3Rpb24uZGF0YSA9PSBwb3N0aWRcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpOyAvL2Zvcm0gZGF0YeuKlCDqt7jrjIDroZwg7KCE7Iah7ZW07JW87ZWoXHJcbn1cclxuXHJcbmZ1bmN0aW9uICogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7IC8vYWN0aW9uLmRhdGEgPSDsnbTrr7jsp4AgZm9ybSBkYXRhXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoQWRkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uICogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=