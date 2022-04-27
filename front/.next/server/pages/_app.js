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

/***/ "./css/global.css":
/*!************************!*\
  !*** ./css/global.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/global.css */ "./css/global.css");
/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_global_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Global CSS cannot be imported from files other than your Custom <App>

 // to initialize all pages with the store as follows.
// pages의 공통부분
// Component prop is the active page
// pageProps is an object with the initial props that were preloaded for your page




const MyApp = ({
  Component,
  pageProps
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
      children: "Chatter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("link", {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(MyApp));

/***/ }),

/***/ "./reducers/chat.js":
/*!**************************!*\
  !*** ./reducers/chat.js ***!
  \**************************/
/*! exports provided: initialState, UPDATE_ROOM_LIST, LOAD_ROOM_LIST, LOAD_ROOM_REQUEST, LOAD_ROOM_SUCCESS, LOAD_ROOM_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ROOM_LIST", function() { return UPDATE_ROOM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ROOM_LIST", function() { return LOAD_ROOM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ROOM_REQUEST", function() { return LOAD_ROOM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ROOM_SUCCESS", function() { return LOAD_ROOM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ROOM_FAILURE", function() { return LOAD_ROOM_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadRoomLoading: false,
  loadRoomDone: false,
  loadRoomError: null,
  rooms: []
};
const UPDATE_ROOM_LIST = 'UPDATE_ROOM_LIST';
const LOAD_ROOM_LIST = 'LOAD_ROOM_LIST';
const LOAD_ROOM_REQUEST = 'LOAD_ROOM_REQUEST';
const LOAD_ROOM_SUCCESS = 'LOAD_ROOM_SUCCESS';
const LOAD_ROOM_FAILURE = 'LOAD_ROOM_FAILURE';

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case UPDATE_ROOM_LIST:
      {
        // draft.mainPosts = draft.mainPosts.concat(action.data);
        // draft.me.Followings.push({ id : action.data.UserId});
        draft.rooms.push(action.data);
        break;
      }

    case LOAD_ROOM_LIST:
      {
        draft.rooms = action.data;
        break;
      }

    case LOAD_ROOM_REQUEST:
      {
        draft.loadRoomLoading = true;
        draft.loadRoomDone = false;
        draft.loadRoomError = null;
        break;
      }

    case LOAD_ROOM_SUCCESS:
      {
        // draft.rooms=action.data;
        draft.loadRoomLoading = false;
        draft.loadRoomDone = true;
        draft.loadRoomError = null;
        break;
      }

    case LOAD_ROOM_FAILURE:
      {
        draft.loadRoomLoading = false;
        draft.loadRoomDone = false;
        draft.loadRoomError = action.error;
        break;
      }

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat */ "./reducers/chat.js");






const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      // HYDRATE액션을 처리하는 리듀서가 필요하다.
      // console.log('HYDRATE', action);
      // HYDRATE는 서버에서 생성한 상태를 클라이언트 스토어에 합쳐준다.
      console.log('HYDRATE');
      console.log(action.payload);
      return action.payload;
    // action.payload에는 서버에서 생성한 스토어의 상태가 담겨있다.

    default:
      {
        console.log('client store');
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"],
          chat: _chat__WEBPACK_IMPORTED_MODULE_4__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, ADD_POSTS_REQUEST, ADD_POSTS_SUCCESS, ADD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
//import shortId from 'shortid';
//import faker from 'faker';

const initialState = {
  mainPosts: [],
  imagePaths: [],
  singlePost: null,
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
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
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
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
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
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
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
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
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

    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data;
      break;

    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostDone = false;
      draft.loadPostError = action.error;
      break;

    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data); //action.data.concat(draft.mainPosts); action.data = load한 배열, action.data + draft.mainPosts

      draft.hasMorePosts = action.data.length === 10;
      break;

    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
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

    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      break;

    case RETWEET_SUCCESS:
      draft.mainPosts.unshift(action.data);
      draft.retweetLoading = false;
      draft.retweetDone = true;
      draft.retweetError = null;
      break;

    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetDone = false;
      draft.retweetError = action.error;
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
/*! exports provided: initialState, UPLOAD_PHOTO_REQUEST, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_DONE, EDIT_USER_PROFILE_REQUEST, EDIT_USER_PROFILE_SUCCESS, EDIT_USER_PROFILE_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, REMOVE_FOLLOWERS_REQUEST, REMOVE_FOLLOWERS_SUCCESS, REMOVE_FOLLOWERS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PHOTO_REQUEST", function() { return UPLOAD_PHOTO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PHOTO_SUCCESS", function() { return UPLOAD_PHOTO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PHOTO_FAILURE", function() { return UPLOAD_PHOTO_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_USER_PROFILE_REQUEST", function() { return EDIT_USER_PROFILE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_USER_PROFILE_SUCCESS", function() { return EDIT_USER_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_USER_PROFILE_FAILURE", function() { return EDIT_USER_PROFILE_FAILURE; });
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
// import produce from '../util/produce';

const initialState = {
  searchUserLoading: false,
  // 유저 정보 검색 시도중
  searchUserDone: false,
  searchUserError: null,
  searchUserResult: [],
  uploadPhotoLoading: false,
  // 유저 프로필사진 업로드 시도중
  uploadPhotoDone: false,
  uploadPhotoError: null,
  photoPath: null,
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
  editUserProfileLoading: false,
  // 사용자 프로필 수정 시도중
  editUserProfileDone: false,
  editUserProfileError: null,
  loadFollowersLoading: false,
  // 팔로워 로드 시도중
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  // 팔로잉 로드 시도중
  loadFollowingsDone: false,
  loadFollowingsError: null,
  removeFollowersLoading: false,
  // 팔로워 차단 시도중
  removeFollowersDone: false,
  removeFollowersError: null,
  me: null,
  userInfo: null
};
const UPLOAD_PHOTO_REQUEST = 'UPLOAD_PHOTO_REQUEST';
const UPLOAD_PHOTO_SUCCESS = 'UPLOAD_PHOTO_SUCCESS';
const UPLOAD_PHOTO_FAILURE = 'UPLOAD_PHOTO_FAILURE';
const SEARCH_USER_REQUEST = 'SEARCH_USER_REQUEST';
const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS';
const SEARCH_USER_FAILURE = 'SEARCH_USER_FAILURE';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
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
const EDIT_USER_PROFILE_REQUEST = 'EDIT_USER_PROFILE_REQUEST';
const EDIT_USER_PROFILE_SUCCESS = 'EDIT_USER_PROFILE_SUCCESS';
const EDIT_USER_PROFILE_FAILURE = 'EDIT_USER_PROFILE_FAILURE';
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
    case UPLOAD_PHOTO_REQUEST:
      draft.uploadPhotoLoading = true;
      draft.uploadPhotoDone = false;
      draft.uploadPhotoError = null;
      break;

    case UPLOAD_PHOTO_SUCCESS:
      draft.photoPath = action.data;
      draft.uploadPhotoLoading = false;
      draft.uploadPhotoDone = true;
      draft.uploadPhotoError = null;
      break;

    case UPLOAD_PHOTO_FAILURE:
      draft.uploadPhotoLoading = false;
      draft.uploadPhotoDone = false;
      draft.uploadPhotoError = action.error;
      break;

    case SEARCH_USER_REQUEST:
      draft.searchUserLoading = true;
      draft.searchUserDone = false;
      draft.searchUserError = null;
      break;

    case SEARCH_USER_SUCCESS:
      draft.searchUserResult = action.data;
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
      break;

    case REMOVE_FOLLOWERS_SUCCESS:
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
      draft.removeFollowersLoading = false;
      draft.removeFollowersDone = true;
      draft.removeFollowersError = null;
      break;

    case REMOVE_FOLLOWERS_FAILURE:
      draft.removeFollowersLoading = false;
      draft.removeFollowersDone = false;
      draft.removeFollowersError = action.error;
      break;

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

    case EDIT_USER_PROFILE_REQUEST:
      draft.editUserProfileLoading = true;
      draft.editUserProfileError = null;
      draft.editUserProfileDone = false;
      break;

    case EDIT_USER_PROFILE_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.me.photo = action.data.photo;
      draft.userInfo.nickname = action.data.nickname;
      draft.userInfo.photo = action.data.photo;
      draft.editUserProfileLoading = false;
      draft.editUserProfileError = null;
      draft.editUserProfileDone = true;
      break;

    case EDIT_USER_PROFILE_FAILURE:
      draft.editUserProfileLoading = false;
      draft.editUserProfileError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;

    case REMOVE_POST_OF_ME:
      // filter()메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data.postId);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/chat.js":
/*!***********************!*\
  !*** ./sagas/chat.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chatSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/chat */ "./reducers/chat.js");




function loadRoomAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/room/${data}`);
}

function* loadRoom(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadRoomAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_chat__WEBPACK_IMPORTED_MODULE_2__["LOAD_ROOM_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_chat__WEBPACK_IMPORTED_MODULE_2__["LOAD_ROOM_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadRoom() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_chat__WEBPACK_IMPORTED_MODULE_2__["LOAD_ROOM_REQUEST"], loadRoom);
}

function* chatSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadRoom)]);
}

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
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat */ "./sagas/chat.js");





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_chat__WEBPACK_IMPORTED_MODULE_4__["default"])]);
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
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
//import shortId from 'shortid';





function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put(): redux store에 dispatch하는 역할
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`post/${data}/unlike`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data); //console.log(result.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: error.response.data
    });
  }
}

function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts?lastId=${data || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
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
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data); //action.data == text

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //post reducer와 user reducer
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data); //action.data == postid

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/images', data); //form data는 그대로 전송해야함
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
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




function uploadPhotoAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/photo', data); // form data는 그대로 전송해야함
}

function* uploadPhoto(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadPhotoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_PHOTO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_PHOTO_FAILURE"],
      error: err.response.data
    });
  }
}

function searchUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/search/${data}`);
}

function* searchUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(searchUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SEARCH_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SEARCH_USER_FAILURE"],
      error: err.response.data
    });
  }
}

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

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
} /// delay() => Promise 가 한번 resolve 되고 나면, 미들웨어는 Saga 를 다시 작동시키면서, 다음 yield 까지 코드를 실행합니다.


function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data); // { email, password }
    // console.log(result.data);

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
/* err.response.data :  https://xn--xy1bk56a.run/axios/guide/error-handling.html */


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
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
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

function editUserProfileAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/editUserProfile', data);
}

function* editUserProfile(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(editUserProfileAPI, action.data);
    console.log(result.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["EDIT_USER_PROFILE_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["EDIT_USER_PROFILE_FAILURE"],
      error: err.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/removeFollower/${data}`);
}

function* removeFollower(action) {
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

function* watchUploadPhoto() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_PHOTO_REQUEST"], uploadPhoto);
}

function* watchSearchUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SEARCH_USER_REQUEST"], searchUser);
}

function* watchEditUserProfile() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["EDIT_USER_PROFILE_REQUEST"], editUserProfile);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadPhoto), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSearchUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchEditUserProfile), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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


 // use createWrapper from next-redux-wrapper to provide the store to all pages.





const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(configureStore, {
  debug: true
}); // configureStore: store를 만든다.
// createWrapper : store를 만드는 함수를 정의해서 넘긴다.

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jaGF0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9jaGF0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwiaW5pdGlhbFN0YXRlIiwibG9hZFJvb21Mb2FkaW5nIiwibG9hZFJvb21Eb25lIiwibG9hZFJvb21FcnJvciIsInJvb21zIiwiVVBEQVRFX1JPT01fTElTVCIsIkxPQURfUk9PTV9MSVNUIiwiTE9BRF9ST09NX1JFUVVFU1QiLCJMT0FEX1JPT01fU1VDQ0VTUyIsIkxPQURfUk9PTV9GQUlMVVJFIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSIsInB1c2giLCJkYXRhIiwiZXJyb3IiLCJyb290UmVkdWNlciIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiY2hhdCIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJzaW5nbGVQb3N0IiwiaGFzTW9yZVBvc3RzIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVuTGlrZVBvc3RMb2FkaW5nIiwidW5MaWtlUG9zdERvbmUiLCJ1bkxpa2VQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RTX1JFUVVFU1QiLCJBRERfUE9TVFNfU1VDQ0VTUyIsIkFERF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiZmlsdGVyIiwidiIsImkiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJVc2VySWQiLCJjb25jYXQiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwicG9zdElkIiwiQ29tbWVudHMiLCJzZWFyY2hVc2VyTG9hZGluZyIsInNlYXJjaFVzZXJEb25lIiwic2VhcmNoVXNlckVycm9yIiwic2VhcmNoVXNlclJlc3VsdCIsInVwbG9hZFBob3RvTG9hZGluZyIsInVwbG9hZFBob3RvRG9uZSIsInVwbG9hZFBob3RvRXJyb3IiLCJwaG90b1BhdGgiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZWRpdFVzZXJQcm9maWxlTG9hZGluZyIsImVkaXRVc2VyUHJvZmlsZURvbmUiLCJlZGl0VXNlclByb2ZpbGVFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJzTG9hZGluZyIsInJlbW92ZUZvbGxvd2Vyc0RvbmUiLCJyZW1vdmVGb2xsb3dlcnNFcnJvciIsIm1lIiwidXNlckluZm8iLCJVUExPQURfUEhPVE9fUkVRVUVTVCIsIlVQTE9BRF9QSE9UT19TVUNDRVNTIiwiVVBMT0FEX1BIT1RPX0ZBSUxVUkUiLCJTRUFSQ0hfVVNFUl9SRVFVRVNUIiwiU0VBUkNIX1VTRVJfU1VDQ0VTUyIsIlNFQVJDSF9VU0VSX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX0RPTkUiLCJFRElUX1VTRVJfUFJPRklMRV9SRVFVRVNUIiwiRURJVF9VU0VSX1BST0ZJTEVfU1VDQ0VTUyIsIkVESVRfVVNFUl9QUk9GSUxFX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIm5pY2tuYW1lIiwicGhvdG8iLCJQb3N0cyIsImxvYWRSb29tQVBJIiwiYXhpb3MiLCJnZXQiLCJsb2FkUm9vbSIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsIndhdGNoTG9hZFJvb20iLCJ0YWtlTGF0ZXN0IiwiY2hhdFNhZ2EiLCJhbGwiLCJmb3JrIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJ1bmxpa2VQb3N0QVBJIiwicGF0Y2giLCJ1bmxpa2VQb3N0IiwibGlrZVBvc3RBUEkiLCJsaWtlUG9zdCIsImxvYWRQb3N0c0FQSSIsImxvYWRQb3N0cyIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsImFkZENvbW1lbnQiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsb2FkVXNlclBvc3RzQVBJIiwibGFzdElkIiwibG9hZFVzZXJQb3N0cyIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hSZXR3ZWV0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoQWRkUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaExvYWRVc2VyUG9zdHMiLCJ3YXRjaEhhc2h0YWdQb3N0cyIsInVwbG9hZFBob3RvQVBJIiwidXBsb2FkUGhvdG8iLCJzZWFyY2hVc2VyQVBJIiwic2VhcmNoVXNlciIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93IiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwiZWRpdFVzZXJQcm9maWxlQVBJIiwiZWRpdFVzZXJQcm9maWxlIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsIndhdGNoVXBsb2FkUGhvdG8iLCJ3YXRjaFNlYXJjaFVzZXIiLCJ3YXRjaEVkaXRVc2VyUHJvZmlsZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvYWRGb2xsb3dlcnMiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7Q0FDNEI7O0NBQ21CO0FBRS9DO0FBQ0E7QUFDQTs7Ozs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxrQkFDWjtBQUFBLDBCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNEJBQ0U7QUFBTSxhQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFNLFNBQUcsRUFBQyxNQUFWO0FBQWlCLFVBQUksRUFBQyxjQUF0QjtBQUFxQyxVQUFJLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUEsZ0JBREY7O0FBWUFGLEtBQUssQ0FBQ0csU0FBTixHQUFrQjtBQUNoQkYsV0FBUyxFQUFFRyxpREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQURqQjtBQUVoQkosV0FBUyxFQUFFRSxpREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUZaLENBQWxCO0FBS2VFLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JULEtBQWxCLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTVUsWUFBWSxHQUFHO0FBQzFCQyxpQkFBZSxFQUFFLEtBRFM7QUFFMUJDLGNBQVksRUFBRSxLQUZZO0FBRzFCQyxlQUFhLEVBQUUsSUFIVztBQUkxQkMsT0FBSyxFQUFFO0FBSm1CLENBQXJCO0FBT0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjs7QUFFUCxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHWCxZQUFULEVBQXVCWSxNQUF2QixLQUFrQ0MsNENBQU8sQ0FBQ0YsS0FBRCxFQUFTRyxLQUFELElBQVc7QUFDMUUsVUFBUUYsTUFBTSxDQUFDRyxJQUFmO0FBQ0UsU0FBS1YsZ0JBQUw7QUFBdUI7QUFDckI7QUFDQTtBQUNBUyxhQUFLLENBQUNWLEtBQU4sQ0FBWVksSUFBWixDQUFpQkosTUFBTSxDQUFDSyxJQUF4QjtBQUNBO0FBQ0Q7O0FBQ0QsU0FBS1gsY0FBTDtBQUFxQjtBQUNuQlEsYUFBSyxDQUFDVixLQUFOLEdBQWNRLE1BQU0sQ0FBQ0ssSUFBckI7QUFDQTtBQUNEOztBQUNELFNBQUtWLGlCQUFMO0FBQXdCO0FBQ3RCTyxhQUFLLENBQUNiLGVBQU4sR0FBd0IsSUFBeEI7QUFDQWEsYUFBSyxDQUFDWixZQUFOLEdBQXFCLEtBQXJCO0FBQ0FZLGFBQUssQ0FBQ1gsYUFBTixHQUFzQixJQUF0QjtBQUNBO0FBQ0Q7O0FBQ0QsU0FBS0ssaUJBQUw7QUFBd0I7QUFDdEI7QUFDQU0sYUFBSyxDQUFDYixlQUFOLEdBQXdCLEtBQXhCO0FBQ0FhLGFBQUssQ0FBQ1osWUFBTixHQUFxQixJQUFyQjtBQUNBWSxhQUFLLENBQUNYLGFBQU4sR0FBc0IsSUFBdEI7QUFDQTtBQUNEOztBQUNELFNBQUtNLGlCQUFMO0FBQXdCO0FBQ3RCSyxhQUFLLENBQUNiLGVBQU4sR0FBd0IsS0FBeEI7QUFDQWEsYUFBSyxDQUFDWixZQUFOLEdBQXFCLEtBQXJCO0FBQ0FZLGFBQUssQ0FBQ1gsYUFBTixHQUFzQlMsTUFBTSxDQUFDTSxLQUE3QjtBQUNBO0FBQ0Q7O0FBQ0Q7QUFDRTtBQS9CSjtBQWlDRCxDQWxDd0QsQ0FBekQ7O0FBb0NlUixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVMsV0FBVyxHQUFHLENBQUNSLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNyQyxVQUFRQSxNQUFNLENBQUNHLElBQWY7QUFDRSxTQUFLSywwREFBTDtBQUFjO0FBQ1o7QUFDQTtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZVixNQUFNLENBQUNXLE9BQW5CO0FBQ0EsYUFBT1gsTUFBTSxDQUFDVyxPQUFkO0FBQXVCOztBQUN6QjtBQUFTO0FBQ1BGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxjQUFNRSxlQUFlLEdBQUdDLDZEQUFlLENBQUM7QUFDdENDLDZEQURzQztBQUV0Q0MsNkRBRnNDO0FBR3RDQyw2REFBSUE7QUFIa0MsU0FBRCxDQUF2QztBQUtBLGVBQU9KLGVBQWUsQ0FBQ2IsS0FBRCxFQUFRQyxNQUFSLENBQXRCO0FBQ0Q7QUFmSDtBQWlCRCxDQWxCRDs7QUFvQmVPLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTW5CLFlBQVksR0FBRztBQUMxQjZCLFdBQVMsRUFBRSxFQURlO0FBRTFCQyxZQUFVLEVBQUMsRUFGZTtBQUcxQkMsWUFBVSxFQUFFLElBSGM7QUFJMUJDLGNBQVksRUFBRSxJQUpZO0FBSzFCQyxpQkFBZSxFQUFFLEtBTFM7QUFNMUJDLGNBQVksRUFBRSxLQU5ZO0FBTzFCQyxlQUFhLEVBQUUsSUFQVztBQVExQkMsbUJBQWlCLEVBQUUsS0FSTztBQVMxQkMsZ0JBQWMsRUFBRSxLQVRVO0FBVTFCQyxpQkFBZSxFQUFFLElBVlM7QUFXMUJDLGtCQUFnQixFQUFFLEtBWFE7QUFZMUJDLGVBQWEsRUFBRSxLQVpXO0FBYTFCQyxnQkFBYyxFQUFFLElBYlU7QUFjMUJDLGlCQUFlLEVBQUUsS0FkUztBQWUxQkMsY0FBWSxFQUFFLEtBZlk7QUFnQjFCQyxlQUFhLEVBQUUsSUFoQlc7QUFpQjFCQyxnQkFBYyxFQUFFLEtBakJVO0FBa0IxQkMsYUFBVyxFQUFFLEtBbEJhO0FBbUIxQkMsY0FBWSxFQUFFLElBbkJZO0FBb0IxQkMsbUJBQWlCLEVBQUUsS0FwQk87QUFxQjFCQyxnQkFBYyxFQUFFLEtBckJVO0FBc0IxQkMsaUJBQWUsRUFBRSxJQXRCUztBQXVCMUJDLG1CQUFpQixFQUFFLEtBdkJPO0FBd0IxQkMsZ0JBQWMsRUFBRSxLQXhCVTtBQXlCMUJDLGlCQUFlLEVBQUUsSUF6QlM7QUEwQjFCQyxxQkFBbUIsRUFBRSxLQTFCSztBQTJCMUJDLGtCQUFnQixFQUFFLEtBM0JRO0FBNEIxQkMsbUJBQWlCLEVBQUUsSUE1Qk87QUE2QjFCQyxnQkFBYyxFQUFFLEtBN0JVO0FBOEIxQkMsYUFBVyxFQUFHLEtBOUJZO0FBK0IxQkMsY0FBWSxFQUFFO0FBL0JZLENBQXJCLEMsQ0FrQ1A7O0FBQ08sTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlC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LGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2dsb2JhbC5jc3MnOyAvLyBHbG9iYWwgQ1NTIGNhbm5vdCBiZSBpbXBvcnRlZCBmcm9tIGZpbGVzIG90aGVyIHRoYW4geW91ciBDdXN0b20gPEFwcD5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnOyAvLyB0byBpbml0aWFsaXplIGFsbCBwYWdlcyB3aXRoIHRoZSBzdG9yZSBhcyBmb2xsb3dzLlxyXG5cclxuLy8gcGFnZXPsnZgg6rO17Ya167aA67aEXHJcbi8vIENvbXBvbmVudCBwcm9wIGlzIHRoZSBhY3RpdmUgcGFnZVxyXG4vLyBwYWdlUHJvcHMgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGluaXRpYWwgcHJvcHMgdGhhdCB3ZXJlIHByZWxvYWRlZCBmb3IgeW91ciBwYWdlXHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDx0aXRsZT5DaGF0dGVyPC90aXRsZT5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuXHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5NeUFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkUm9vbUxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRSb29tRG9uZTogZmFsc2UsXHJcbiAgbG9hZFJvb21FcnJvcjogbnVsbCxcclxuICByb29tczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1JPT01fTElTVCA9ICdVUERBVEVfUk9PTV9MSVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUk9PTV9MSVNUID0gJ0xPQURfUk9PTV9MSVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUk9PTV9SRVFVRVNUID0gJ0xPQURfUk9PTV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUk9PTV9TVUNDRVNTID0gJ0xPQURfUk9PTV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUk9PTV9GQUlMVVJFID0gJ0xPQURfUk9PTV9GQUlMVVJFJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBVUERBVEVfUk9PTV9MSVNUOiB7XHJcbiAgICAgIC8vIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAvLyBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZCA6IGFjdGlvbi5kYXRhLlVzZXJJZH0pO1xyXG4gICAgICBkcmFmdC5yb29tcy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfUk9PTV9MSVNUOiB7XHJcbiAgICAgIGRyYWZ0LnJvb21zID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX1JPT01fUkVRVUVTVDoge1xyXG4gICAgICBkcmFmdC5sb2FkUm9vbUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUm9vbURvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFJvb21FcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX1JPT01fU1VDQ0VTUzoge1xyXG4gICAgICAvLyBkcmFmdC5yb29tcz1hY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFJvb21Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRSb29tRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRSb29tRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9ST09NX0ZBSUxVUkU6IHtcclxuICAgICAgZHJhZnQubG9hZFJvb21Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRSb29tRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUm9vbUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgY2hhdCBmcm9tICcuL2NoYXQnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTogLy8gSFlEUkFUReyVoeyFmOydhCDsspjrpqztlZjripQg66as65OA7ISc6rCAIO2VhOyalO2VmOuLpC5cclxuICAgICAgLy8gY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAvLyBIWURSQVRF64qUIOyEnOuyhOyXkOyEnCDsg53shLHtlZwg7IOB7YOc66W8IO2BtOudvOydtOyWuO2KuCDsiqTthqDslrTsl5Ag7ZWp7LOQ7KSA64ukLlxyXG4gICAgICBjb25zb2xlLmxvZygnSFlEUkFURScpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDsgLy8gYWN0aW9uLnBheWxvYWTsl5DripQg7ISc67KE7JeQ7IScIOyDneyEse2VnCDsiqTthqDslrTsnZgg7IOB7YOc6rCAIOuLtOqyqOyeiOuLpC5cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc29sZS5sb2coJ2NsaWVudCBzdG9yZScpO1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgcG9zdCxcclxuICAgICAgICBjaGF0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiLy9pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuLy9pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOltdLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVuTGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bkxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5MaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICByZXR3ZWV0RG9uZSA6IGZhbHNlLFxyXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbi8vYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVFNfUkVRVUVTVCA9ICdBRERfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVFNfU1VDQ0VTUyA9ICdBRERfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVFNfRkFJTFVSRSA9ICdBRERfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuLy9SZWR1Y2VycyA6IGFjdGlvbuydhCDthrXtlbQg7Ja065akIO2WieuPmeydhCDsoJXsnZjtlojri6TrqbQsIOq3uCDqsrDqs7wg7IOB7YOc6rCAIOyWtOuWu+qyjCDrsJTrgIzripTsp4Ag7Yq57KCV7ZWY6rKMIOuQmOuKlCDtlajsiJhcclxuLy9wcm9kdWNlIHN0YXRlLCDsg4Htg5zsnZgg6rKw6rO8IO2VqOyImFxyXG4vL3JldHVybiBwcm9kdWNlKCnsnbgg6rKDXHJcbi8vZHJhZnTqsIAgc3RhdGXroZwg67CU64CM64qU6rKDXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7IC8vcHVzaCgpIDog67Cw7Je07J2YIOunqOuSpOyXkCBwdXNoXHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuTGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuTGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodik9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodik9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuTGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTogXHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIC8vYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7IGFjdGlvbi5kYXRhID0gbG9hZO2VnCDrsLDsl7QsIGFjdGlvbi5kYXRhICsgZHJhZnQubWFpblBvc3RzXHJcbiAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTogXHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7Ly/sg4jroZzsmrQg7JqU7IaM66W8IOuwsOyXtOydmCDrp6gg7JWe7Kq97JeQIOy2lOqwgO2VmOqzoCwg7IOI66Gc7Jq0IOq4uOydtOuwmO2ZmFxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1udWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cz1kcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KT0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodik9PnYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzPWFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiBcclxuICAgICAgYnJlYWs7IC8vcmV0dXJuIGRyYWZ07ZW064+EIOuQmOyngOyViuuCmC4uLlxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbi8qXHJcbmh0dHBzOi8vcmVhY3QudmxwdC51cy9yZWR1eC8wMS1rZXl3b3Jkcy5odG1sXHJcbiovXHJcbiIsIi8vIGltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc2VhcmNoVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqygOyDiSDsi5zrj4TspJFcclxuICBzZWFyY2hVc2VyRG9uZTogZmFsc2UsXHJcbiAgc2VhcmNoVXNlckVycm9yOiBudWxsLFxyXG4gIHNlYXJjaFVzZXJSZXN1bHQ6IFtdLFxyXG4gIHVwbG9hZFBob3RvTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDtlITroZztlYTsgqzsp4Qg7JeF66Gc65OcIOyLnOuPhOykkVxyXG4gIHVwbG9hZFBob3RvRG9uZTogZmFsc2UsXHJcbiAgdXBsb2FkUGhvdG9FcnJvcjogbnVsbCxcclxuICBwaG90b1BhdGg6IG51bGwsXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgbG9hZFVzZXJFcnJvcjogbnVsbCxcclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJFcclxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgZWRpdFVzZXJQcm9maWxlTG9hZGluZzogZmFsc2UsIC8vIOyCrOyaqeyekCDtlITroZztlYQg7IiY7KCVIOyLnOuPhOykkVxyXG4gIGVkaXRVc2VyUHJvZmlsZURvbmU6IGZhbHNlLFxyXG4gIGVkaXRVc2VyUHJvZmlsZUVycm9yOiBudWxsLFxyXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOuhnOuTnCDsi5zrj4TspJFcclxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyeiSDroZzrk5wg7Iuc64+E7KSRXHJcbiAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG4gIHJlbW92ZUZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4wg7LCo64uoIOyLnOuPhOykkVxyXG4gIHJlbW92ZUZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHVzZXJJbmZvOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QSE9UT19SRVFVRVNUID0gJ1VQTE9BRF9QSE9UT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QSE9UT19TVUNDRVNTID0gJ1VQTE9BRF9QSE9UT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QSE9UT19GQUlMVVJFID0gJ1VQTE9BRF9QSE9UT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfVVNFUl9SRVFVRVNUID0gJ1NFQVJDSF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1VTRVJfU1VDQ0VTUyA9ICdTRUFSQ0hfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9VU0VSX0ZBSUxVUkUgPSAnU0VBUkNIX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRE9ORSA9ICdTSUdOX1VQX0RPTkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfVVNFUl9QUk9GSUxFX1JFUVVFU1QgPSAnRURJVF9VU0VSX1BST0ZJTEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBFRElUX1VTRVJfUFJPRklMRV9TVUNDRVNTID0gJ0VESVRfVVNFUl9QUk9GSUxFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRURJVF9VU0VSX1BST0ZJTEVfRkFJTFVSRSA9ICdFRElUX1VTRVJfUFJPRklMRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBVUExPQURfUEhPVE9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBsb2FkUGhvdG9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXBsb2FkUGhvdG9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBob3RvRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX1BIT1RPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnBob3RvUGF0aCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC51cGxvYWRQaG90b0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkUGhvdG9Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXBsb2FkUGhvdG9FcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfUEhPVE9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQudXBsb2FkUGhvdG9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBob3RvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRQaG90b0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0VBUkNIX1VTRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2VhcmNoVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0VBUkNIX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2VhcmNoVXNlclJlc3VsdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5zZWFyY2hVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTRUFSQ0hfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zZWFyY2hVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0RPTkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEVESVRfVVNFUl9QUk9GSUxFX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmVkaXRVc2VyUHJvZmlsZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5lZGl0VXNlclByb2ZpbGVFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmVkaXRVc2VyUHJvZmlsZURvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEVESVRfVVNFUl9QUk9GSUxFX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGRyYWZ0Lm1lLnBob3RvID0gYWN0aW9uLmRhdGEucGhvdG87XHJcbiAgICAgIGRyYWZ0LnVzZXJJbmZvLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGRyYWZ0LnVzZXJJbmZvLnBob3RvID0gYWN0aW9uLmRhdGEucGhvdG87XHJcbiAgICAgIGRyYWZ0LmVkaXRVc2VyUHJvZmlsZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZWRpdFVzZXJQcm9maWxlRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5lZGl0VXNlclByb2ZpbGVEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEVESVRfVVNFUl9QUk9GSUxFX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmVkaXRVc2VyUHJvZmlsZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZWRpdFVzZXJQcm9maWxlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAvLyBmaWx0ZXIoKeuplOyEnOuTnOuKlCDso7zslrTsp4Qg7ZWo7IiY7J2YIO2FjOyKpO2KuOulvCDthrXqs7ztlZjripQg66qo65OgIOyalOyGjOulvCDrqqjslYQg7IOI66Gc7Jq0IOuwsOyXtOuhnCDrsJjtmZjtlZzri6QuXHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlLCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX1JPT01fUkVRVUVTVCxcclxuICAgIExPQURfUk9PTV9TVUNDRVNTLFxyXG4gICAgTE9BRF9ST09NX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvY2hhdCc7XHJcblxyXG5mdW5jdGlvbiBsb2FkUm9vbUFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcm9vbS8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbG9hZFJvb20oYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUm9vbUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUk9PTV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUk9PTV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExvYWRSb29tKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1JPT01fUkVRVUVTVCwgbG9hZFJvb20pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAqIGNoYXRTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFJvb20pXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IGNoYXRTYWdhIGZyb20gJy4vY2hhdCc7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSc7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAqIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKGNoYXRTYWdhKSxcclxuICAgIF0pO1xyXG59IiwiLy9pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSxcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICAgIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgUkVUV0VFVF9GQUlMVVJFLFxyXG4gIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogcmV0d2VldChhY3Rpb24pIHtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXQoKTogcmVkdXggc3RvcmXsl5AgZGlzcGF0Y2jtlZjripQg7Jet7ZWgXHJcbiAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxufVxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgcG9zdC8ke2RhdGF9L3VubGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtkYXRhIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkgeyAvLyBkYXRhID09IHRleHQgXHJcbiAgICBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIGFkZFBvc3QoYWN0aW9uKXsgLy9hY3Rpb25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7IC8vYWN0aW9uLmRhdGEgPT0gdGV4dFxyXG4gICAgICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7IFxyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wb3N0IHJlZHVjZXLsmYAgdXNlciByZWR1Y2VyXHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpOyAvL2FjdGlvbi5kYXRhID09IHBvc3RpZFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7IC8vZm9ybSBkYXRh64qUIOq3uOuMgOuhnCDsoITshqHtlbTslbztlahcclxufVxyXG5cclxuZnVuY3Rpb24gKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyUG9zdHNBUEkoZGF0YSwgbGFzdElkKXtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiAqIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbG9hZEhhc2h0YWdQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoUmV0d2VldCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiAqIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24gKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiAqIHdhdGNoSGFzaHRhZ1Bvc3RzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlclBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoSGFzaHRhZ1Bvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICBTRUFSQ0hfVVNFUl9SRVFVRVNULFxyXG4gIFNFQVJDSF9VU0VSX1NVQ0NFU1MsXHJcbiAgU0VBUkNIX1VTRVJfRkFJTFVSRSxcclxuICBVUExPQURfUEhPVE9fUkVRVUVTVCxcclxuICBVUExPQURfUEhPVE9fU1VDQ0VTUyxcclxuICBVUExPQURfUEhPVE9fRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICBSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gIFJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICBFRElUX1VTRVJfUFJPRklMRV9SRVFVRVNULFxyXG4gIEVESVRfVVNFUl9QUk9GSUxFX1NVQ0NFU1MsXHJcbiAgRURJVF9VU0VSX1BST0ZJTEVfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIHVwbG9hZFBob3RvQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvcGhvdG8nLCBkYXRhKTsgLy8gZm9ybSBkYXRh64qUIOq3uOuMgOuhnCDsoITshqHtlbTslbztlahcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZFBob3RvKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZFBob3RvQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfUEhPVE9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9QSE9UT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaFVzZXJBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyL3NlYXJjaC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZWFyY2hVc2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNlYXJjaFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfVVNFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbi8vLyBkZWxheSgpID0+IFByb21pc2Ug6rCAIO2VnOuyiCByZXNvbHZlIOuQmOqzoCDrgpjrqbQsIOuvuOuTpOybqOyWtOuKlCBTYWdhIOulvCDri6Tsi5wg7J6R64+Z7Iuc7YKk66m07IScLCDri6TsnYwgeWllbGQg6rmM7KeAIOy9lOuTnOulvCDsi6Ttlontlanri4jri6QuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpOy8vIHsgZW1haWwsIHBhc3N3b3JkIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyogZXJyLnJlc3BvbnNlLmRhdGEgOiAgaHR0cHM6Ly94bi0teHkxYms1NmEucnVuL2F4aW9zL2d1aWRlL2Vycm9yLWhhbmRsaW5nLmh0bWwgKi9cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvZm9sbG93LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvdW5mb2xsb3cvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2Vyc0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9sb2FkRm9sbG93ZXJzJyk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGxvYWRGb2xsb3dlcnNBUEkoKTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9sb2FkRm9sbG93aW5ncycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGxvYWRGb2xsb3dpbmdzQVBJKCk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0VXNlclByb2ZpbGVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvZWRpdFVzZXJQcm9maWxlJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0VXNlclByb2ZpbGUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZWRpdFVzZXJQcm9maWxlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX1VTRVJfUFJPRklMRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9VU0VSX1BST0ZJTEVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci9yZW1vdmVGb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEuaWQpOyAvLyByZXN1bHQuZGF0YS5uaWNrbmFtZVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZFBob3RvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX1BIT1RPX1JFUVVFU1QsIHVwbG9hZFBob3RvKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTZWFyY2hVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0VBUkNIX1VTRVJfUkVRVUVTVCwgc2VhcmNoVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEVkaXRVc2VyUHJvZmlsZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfVVNFUl9QUk9GSUxFX1JFUVVFU1QsIGVkaXRVc2VyUHJvZmlsZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2Vycyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkUGhvdG8pLFxyXG4gICAgZm9yayh3YXRjaFNlYXJjaFVzZXIpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICBmb3JrKHdhdGNoRWRpdFVzZXJQcm9maWxlKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInOyAvLyB1c2UgY3JlYXRlV3JhcHBlciBmcm9tIG5leHQtcmVkdXgtd3JhcHBlciB0byBwcm92aWRlIHRoZSBzdG9yZSB0byBhbGwgcGFnZXMuXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKFxyXG4gICAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpLFxyXG4gICAgKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHsgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIH0pO1xyXG4vLyBjb25maWd1cmVTdG9yZTogc3RvcmXrpbwg66eM65Og64ukLlxyXG4vLyBjcmVhdGVXcmFwcGVyIDogc3RvcmXrpbwg66eM65Oc64qUIO2VqOyImOulvCDsoJXsnZjtlbTshJwg64SY6ri064ukLlxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9