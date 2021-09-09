module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore.js */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\pages\\_app.js";





 //pages의 공통부분




const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore_js__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_3___default()(NodeBird)));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //(이전상태, 액션) => 다음상태

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  //서버사이드렌더링을 위해 index 추가
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  //user와 post의 initialstate는 redux가 해결
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POSTS_REQUEST, ADD_POSTS_SUCCESS, ADD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POSTS_REQUEST", function() { return ADD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POSTS_SUCCESS", function() { return ADD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POSTS_FAILURE", function() { return ADD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
//import shortId from 'shortid';
//import faker from 'faker';

const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unLikePostLoading: false,
  unLikePostDone: false,
  unLikePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null
}; //action

const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POSTS_REQUEST = 'ADD_POSTS_REQUEST';
const ADD_POSTS_SUCCESS = 'ADD_POSTS_SUCCESS';
const ADD_POSTS_FAILURE = 'ADD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE'; //Reducers : action을 통해 어떤 행동을 정의했다면, 그 결과 상태가 어떻게 바뀌는지 특정하게 되는 함수
//produce state, 상태의 결과 함수
//return produce()인 것
//draft가 state로 바뀌는것

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        }); //push() : 배열의 맨뒤에 push

        draft.likePostLoading = false;
        draft.likePostDone = true;
        draft.likePostError = null;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostDone = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unLikePostLoading = true;
      draft.unLikePostDone = false;
      draft.unLikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unLikePostLoading = false;
        draft.unLikePostDone = true;
        draft.unLikePostError = null;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unLikePostLoading = false;
      draft.unLikePostDone = false;
      draft.unLikePostError = action.error;
      break;

    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts); //action.data = load한 배열, action.data + draft.mainPosts

      draft.hasMorePosts = draft.mainPosts.length < 50;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.imagePaths = [];
      draft.mainPosts.unshift(action.data); //새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이반환

      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.postId);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostDone = false;
      draft.removePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        draft.addCommentError = null;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = false;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      draft.imagePaths = action.data;
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      draft.uploadImagesError = false;
      break;

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = action.error;
      break;

    default:
      break;
    //return draft해도 되지않나...
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);
/*
https://react.vlpt.us/redux/01-keywords.html
*/

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_DONE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, REMOVE_FOLLOWERS_REQUEST, REMOVE_FOLLOWERS_SUCCESS, REMOVE_FOLLOWERS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
//import produce from '../util/produce';

const initialState = {
  loadMyInfoLoading: false,
  // 유저 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
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
  signUpData: {},
  loginData: {}
};
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const SIGN_UP_DONE = 'SIGN_UP_DONE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const REMOVE_FOLLOWERS_REQUEST = 'REMOVE_FOLLOWERS_REQUEST';
const REMOVE_FOLLOWERS_SUCCESS = 'REMOVE_FOLLOWERS_SUCCESS';
const REMOVE_FOLLOWERS_FAILURE = 'REMOVE_FOLLOWERS_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
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
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
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
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
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
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data.postId);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
//put() redux store에 dispatch하는 역할






function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`post/${data}/unlike`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(unlikePostAPI, action.data); //console.log(result.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_FAILURE"],
      error: error.response.data
    });
  }
}

function loadPostsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/posts');
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadPostsAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  // data == text 
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data);
}

function* addPost(action) {
  //action
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addPostAPI, action.data); //action.data == text

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      //post reducer와 user reducer
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(removePostAPI, action.data); //action.data == postid

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/images', data); //form data는 그대로 전송해야함
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(uploadImagesAPI, action.data); //action.data = 이미지 form data

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"],
      error: err.response.data
    });
  }
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
} /// delay() => Promise 가 한번 resolve 되고 나면, 미들웨어는 Saga 를 다시 작동시키면서, 다음 yield 까지 코드를 실행합니다.


function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data); //{ email, password }
    //console.log(result.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}
/*err.response.data :  https://xn--xy1bk56a.run/axios/guide/error-handling.html */


function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
} //put():특정 액션을 dispatch한다.


function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/follow/${data}`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/unfollow/${data}`);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowersAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/loadFollowers');
}

function* loadFollowers(action) {
  try {
    const result = yield loadFollowersAPI();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/loadFollowings');
}

function* loadFollowings(action) {
  try {
    const result = yield loadFollowingsAPI();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/changeNickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data); // result.data.nickname

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/removeFollower/${data}`);
}

function* removeFollower(action) {
  console.log("DONE");

  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data.id); // result.data.nickname

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWERS_REQUEST"], removeFollower);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");





 //action, action에 따라 상태를 수정하는 reducer를 저장하는
//단 하나의 객체

const configureStore = context => {
  console.log(context);
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwid2l0aFJlZHV4U2FnYSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5MaWtlUG9zdExvYWRpbmciLCJ1bkxpa2VQb3N0RG9uZSIsInVuTGlrZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RTX1JFUVVFU1QiLCJBRERfUE9TVFNfU1VDQ0VTUyIsIkFERF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJpIiwiZGF0YSIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJlcnJvciIsImNvbmNhdCIsImxlbmd0aCIsInVuc2hpZnQiLCJwb3N0SWQiLCJDb21tZW50cyIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsInJlbW92ZUZvbGxvd2Vyc0xvYWRpbmciLCJyZW1vdmVGb2xsb3dlcnNEb25lIiwicmVtb3ZlRm9sbG93ZXJzRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX0RPTkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIm5pY2tuYW1lIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJ1bmxpa2VQb3N0QVBJIiwicGF0Y2giLCJ1bmxpa2VQb3N0IiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwibGlrZVBvc3RBUEkiLCJsaWtlUG9zdCIsImxvYWRQb3N0c0FQSSIsImdldCIsImxvYWRQb3N0cyIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwiYWRkQ29tbWVudCIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsIndhdGNoTGlrZVBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJyZW1vdmVGb2xsb3dlckFQSSIsInJlbW92ZUZvbGxvd2VyIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJjb25maWd1cmVTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOzs7OztBQUNBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUNoQyxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyc7XHJcblxyXG4vL3BhZ2Vz7J2YIOqzte2Gteu2gOu2hFxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShOb2RlQmlyZCkpOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG5cclxuLy8o7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlcj1jb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgLy/shJzrsoTsgqzsnbTrk5zroIzrjZTrp4HsnYQg7JyE7ZW0IGluZGV4IOy2lOqwgFxyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9ICwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLC8vdXNlcuyZgCBwb3N07J2YIGluaXRpYWxzdGF0ZeuKlCByZWR1eOqwgCDtlbTqsrBcclxuICAgIHBvc3QsXHJcbn0pO1xyXG4gICAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCIvL2ltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG4vL2ltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6W10sXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVuTGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bkxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5MaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG59O1xyXG5cclxuLy9hY3Rpb25cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUU19SRVFVRVNUID0gJ0FERF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUU19TVUNDRVNTID0gJ0FERF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUU19GQUlMVVJFID0gJ0FERF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcbi8vUmVkdWNlcnMgOiBhY3Rpb27snYQg7Ya17ZW0IOyWtOuWpCDtlonrj5nsnYQg7KCV7J2Y7ZaI64uk66m0LCDqt7gg6rKw6rO8IOyDge2DnOqwgCDslrTrlrvqsowg67CU64CM64qU7KeAIO2Kueygle2VmOqyjCDrkJjripQg7ZWo7IiYXHJcbi8vcHJvZHVjZSBzdGF0ZSwg7IOB7YOc7J2YIOqysOqzvCDtlajsiJhcclxuLy9yZXR1cm4gcHJvZHVjZSgp7J24IOqyg1xyXG4vL2RyYWZ06rCAIHN0YXRl66GcIOuwlOuAjOuKlOqyg1xyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pOyAvL3B1c2goKSA6IOuwsOyXtOydmCDrp6jrkqTsl5AgcHVzaFxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5MaWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgZHJhZnQudW5MaWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5MaWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5MaWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5MaWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5MaWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpOy8vYWN0aW9uLmRhdGEgPSBsb2Fk7ZWcIOuwsOyXtCwgYWN0aW9uLmRhdGEgKyBkcmFmdC5tYWluUG9zdHNcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOiBcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPW51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTsvL+yDiOuhnOyatCDsmpTshozrpbwg67Cw7Je07J2YIOunqCDslZ7sqr3sl5Ag7LaU6rCA7ZWY6rOgLCDsg4jroZzsmrQg6ri47J2067CY7ZmYXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPW51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzPWRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KT0+di5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHM9YWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiBcclxuICAgICAgYnJlYWs7IC8vcmV0dXJuIGRyYWZ07ZW064+EIOuQmOyngOyViuuCmC4uLlxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbi8qXHJcbmh0dHBzOi8vcmVhY3QudmxwdC51cy9yZWR1eC8wMS1rZXl3b3Jkcy5odG1sXHJcbiovXHJcbiIsIi8vaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICAgIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0RPTkUgPSAnU0lHTl9VUF9ET05FJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWU9YWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkIDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkICk7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlOyAgICBcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7ICAgIFxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yOyBcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRE9ORTpcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lPWFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAvL2ZpbHRlcigp66mU7ISc65Oc64qUIOyjvOyWtOynhCDtlajsiJjsnZgg7YWM7Iqk7Yq466W8IO2GteqzvO2VmOuKlCDrqqjrk6Ag7JqU7IaM66W8IOuqqOyVhCDsg4jroZzsmrQg67Cw7Je066GcIOuwmO2ZmO2VnOuLpC5cclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodik9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgXSk7XHJcbn0iLCIvL3B1dCgpIHJlZHV4IHN0b3Jl7JeQIGRpc3BhdGNo7ZWY64qUIOyXre2VoFxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSxcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGBwb3N0LyR7ZGF0YX0vdW5saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdHMnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkgeyAvLyBkYXRhID09IHRleHQgXHJcbiAgICBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIGFkZFBvc3QoYWN0aW9uKXsgLy9hY3Rpb25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7IC8vYWN0aW9uLmRhdGEgPT0gdGV4dFxyXG4gICAgICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7IFxyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wb3N0IHJlZHVjZXLsmYAgdXNlciByZWR1Y2VyXHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpOyAvL2FjdGlvbi5kYXRhID09IHBvc3RpZFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7IC8vZm9ybSBkYXRh64qUIOq3uOuMgOuhnCDsoITshqHtlbTslbztlahcclxufVxyXG5cclxuZnVuY3Rpb24gKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTsgLy9hY3Rpb24uZGF0YSA9IOydtOuvuOyngCBmb3JtIGRhdGFcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24gKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAqIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgdGFrZUxhdGVzdCwgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICBGT0xMT1dfRkFJTFVSRSxcclxuICAgIEZPTExPV19SRVFVRVNULFxyXG4gICAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG4gICAgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuICAgIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIGxvYWRNeUluZm8gKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG4vLy8gZGVsYXkoKSA9PiBQcm9taXNlIOqwgCDtlZzrsoggcmVzb2x2ZSDrkJjqs6Ag64KY66m0LCDrr7jrk6Tsm6jslrTripQgU2FnYSDrpbwg64uk7IucIOyekeuPmeyLnO2CpOuptOyEnCwg64uk7J2MIHlpZWxkIOq5jOyngCDsvZTrk5zrpbwg7Iuk7ZaJ7ZWp64uI64ukLlxyXG5mdW5jdGlvbiAqIGxvZ0luIChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7Ly97IGVtYWlsLCBwYXNzd29yZCB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLCBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyplcnIucmVzcG9uc2UuZGF0YSA6ICBodHRwczovL3huLS14eTFiazU2YS5ydW4vYXhpb3MvZ3VpZGUvZXJyb3ItaGFuZGxpbmcuaHRtbCAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuXHJcbi8vcHV0KCk67Yq57KCVIOyVoeyFmOydhCBkaXNwYXRjaO2VnOuLpC5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci9mb2xsb3cvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvdW5mb2xsb3cvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2xvYWRGb2xsb3dlcnMnKTtcclxufVxyXG5mdW5jdGlvbiAqIGxvYWRGb2xsb3dlcnMoYWN0aW9uKXtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBsb2FkRm9sbG93ZXJzQVBJKCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvbG9hZEZvbGxvd2luZ3MnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBsb2FkRm9sbG93aW5nc0FQSSgpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuIH1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvY2hhbmdlTmlja25hbWUnLCB7IG5pY2tuYW1lOiBkYXRhfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7IFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7IC8vIHJlc3VsdC5kYXRhLm5pY2tuYW1lXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyL3JlbW92ZUZvbGxvd2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRE9ORVwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEuaWQpOyAvLyByZXN1bHQuZGF0YS5uaWNrbmFtZVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hGb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoTG9hZEZvbGxvd2luZ3MoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExvZ091dCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICogdXNlclNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgICAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG4vL2FjdGlvbiwgYWN0aW9u7JeQIOuUsOudvCDsg4Htg5zrpbwg7IiY7KCV7ZWY64qUIHJlZHVjZXLrpbwg7KCA7J6l7ZWY64qUXHJcbi8v64uoIO2VmOuCmOydmCDqsJ3ssrRcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmU9Y3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyksXHJcbiAgICAgICk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwgeyBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9