webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_DONE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, REMOVE_FOLLOWERS_REQUEST, REMOVE_FOLLOWERS_SUCCESS, REMOVE_FOLLOWERS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_REQUEST", function() { return SEARCH_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_SUCCESS", function() { return SEARCH_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_FAILURE", function() { return SEARCH_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_DONE", function() { return SIGN_UP_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWERS_REQUEST", function() { return REMOVE_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWERS_SUCCESS", function() { return REMOVE_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWERS_FAILURE", function() { return REMOVE_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
//import produce from '../util/produce';

var initialState = {
  searchUserLoading: false,
  // 유저 정보 검색 시도중
  searchUserDone: false,
  searchUserError: null,
  searchUserResult: null,
  loadMyInfoLoading: false,
  // 유저 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  // 유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  removeFollowersLoading: false,
  removeFollowersDone: false,
  removeFollowersError: null,
  me: null,
  userInfo: null
};
var SEARCH_USER_REQUEST = 'SEARCH_USER_REQUEST';
var SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS';
var SEARCH_USER_FAILURE = 'SEARCH_USER_FAILURE';
var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var SIGN_UP_DONE = 'SIGN_UP_DONE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
var LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
var LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
var LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
var LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
var LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
var REMOVE_FOLLOWERS_REQUEST = 'REMOVE_FOLLOWERS_REQUEST';
var REMOVE_FOLLOWERS_SUCCESS = 'REMOVE_FOLLOWERS_SUCCESS';
var REMOVE_FOLLOWERS_FAILURE = 'REMOVE_FOLLOWERS_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case SEARCH_USER_REQUEST:
        draft.searchUserLoading = true;
        draft.searchUserDone = false;
        draft.searchUserError = null;
        break;

      case SEARCH_USER_SUCCESS:
        draft.searchUserLoading = false;
        draft.searchUserDone = true;
        draft.searchUserError = null;
        break;

      case SEARCH_USER_FAILURE:
        draft.searchUserLoading = false;
        draft.searchUserDone = false;
        draft.searchUserError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        draft.loadMyInfoError = null;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = action.error;
        break;

      case LOAD_USER_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.userInfo = action.data;
        draft.loadMyInfoError = null;
        break;

      case LOAD_USER_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        draft.followDone = true;
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        draft.unfollowDone = true;
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.me.Followers = action.data;
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.loadFollowersError = null;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsDone = false;
        draft.loadFollowingsError = null;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.me.Followings = action.data;
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        draft.loadFollowingsError = null;
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = false;
        draft.loadFollowingsError = action.error;
        break;

      case REMOVE_FOLLOWERS_REQUEST:
        draft.removeFollowersLoading = true;
        draft.removeFollowersDone = false;
        draft.removeFollowersError = null;

      case REMOVE_FOLLOWERS_SUCCESS:
        draft.me.Followers = draft.me.Followers.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        draft.removeFollowersLoading = false;
        draft.removeFollowersDone = true;
        draft.removeFollowersError = null;

      case REMOVE_FOLLOWERS_FAILURE:
        draft.removeFollowersLoading = false;
        draft.removeFollowersDone = false;
        draft.removeFollowersError = action.error;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = action.data;
        draft.logInDone = true;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case SIGN_UP_DONE:
        draft.signUpDone = false;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        //filter()메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data.postId;
        });
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzZWFyY2hVc2VyTG9hZGluZyIsInNlYXJjaFVzZXJEb25lIiwic2VhcmNoVXNlckVycm9yIiwic2VhcmNoVXNlclJlc3VsdCIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJyZW1vdmVGb2xsb3dlcnNMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJzRG9uZSIsInJlbW92ZUZvbGxvd2Vyc0Vycm9yIiwibWUiLCJ1c2VySW5mbyIsIlNFQVJDSF9VU0VSX1JFUVVFU1QiLCJTRUFSQ0hfVVNFUl9TVUNDRVNTIiwiU0VBUkNIX1VTRVJfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfRE9ORSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwiZXJyb3IiLCJkYXRhIiwiRm9sbG93aW5ncyIsInB1c2giLCJpZCIsIlVzZXJJZCIsImZpbHRlciIsInYiLCJGb2xsb3dlcnMiLCJuaWNrbmFtZSIsIlBvc3RzIiwidW5zaGlmdCIsInBvc3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LENBQUM3QyxFQUFOLENBQVN5RCxLQUFULENBQWVKLE1BQWYsQ0FBc0IsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFNQSxDQUFDLENBQUNILEVBQUYsS0FBU1IsTUFBTSxDQUFDSyxJQUFQLENBQVlXLE1BQTNCO0FBQUEsU0FBdEIsQ0FBakI7QUFDQTs7QUFDSjtBQUNJO0FBN0xKO0FBK0xILEdBaE13RCxDQUF6QztBQUFBLENBQWhCOztBQWtNZWxCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODM4ZjRmMmQ5MjllMjljYzA4ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgc2VhcmNoVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqygOyDiSDsi5zrj4TspJFcclxuICAgIHNlYXJjaFVzZXJEb25lOiBmYWxzZSxcclxuICAgIHNlYXJjaFVzZXJFcnJvcjogbnVsbCxcclxuICAgIHNlYXJjaFVzZXJSZXN1bHQ6IG51bGwsXHJcbiAgICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnJvcjogbnVsbCxcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9VU0VSX1JFUVVFU1QgPSAnU0VBUkNIX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfVVNFUl9TVUNDRVNTID0gJ1NFQVJDSF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1VTRVJfRkFJTFVSRSA9ICdTRUFSQ0hfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9ET05FID0gJ1NJR05fVVBfRE9ORSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICBjYXNlIFNFQVJDSF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxvYWRpbmc9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRG9uZT1mYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgU0VBUkNIX1VTRVJfU1VDQ0VTUzpcclxuXHJcbiAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoVXNlckRvbmU9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgU0VBUkNIX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zZWFyY2hVc2VyTG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRG9uZT1mYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZT1hY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VySW5mbz1hY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrOyAgICBcclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkIDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkICk7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlOyAgICBcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7ICAgIFxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yOyBcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRE9ORTpcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lPWFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAvL2ZpbHRlcigp66mU7ISc65Oc64qUIOyjvOyWtOynhCDtlajsiJjsnZgg7YWM7Iqk7Yq466W8IO2GteqzvO2VmOuKlCDrqqjrk6Ag7JqU7IaM66W8IOuqqOyVhCDsg4jroZzsmrQg67Cw7Je066GcIOuwmO2ZmO2VnOuLpC5cclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodik9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=