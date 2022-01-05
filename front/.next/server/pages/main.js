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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\CommentForm.js";








const CommentForm = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    addCommentDone,
    addCommentLoading,
    addCommentError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const [commentText, onChangeCommentText, setCommentText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (addCommentError) {
      alert(addCommentError);
    }
  }, [addCommentError]);
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        userId: id,
        postId: post.id
      }
    });
  }, [commentText, id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
      style: {
        position: 'relative',
        margin: 0
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
        rows: 4,
        value: commentText,
        onChange: onChangeCommentText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        style: {
          position: 'absolute',
          right: 0,
          bottom: -40
        },
        type: "primary",
        htmlType: "submit",
        loading: addCommentLoading,
        children: "\uC090\uC57D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
};

CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
      nickname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
    }).isRequired,
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\FollowButton.js";







const FollowButton = ({
  post
}) => {
  var _me$Followings;

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    me,
    followLoading,
    unfollowLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const isFollowing = me === null || me === void 0 ? void 0 : (_me$Followings = me.Followings) === null || _me$Followings === void 0 ? void 0 : _me$Followings.find(v => v.id === post.User.id);
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isFollowing) {
      //내가 post 작성자를 following 하고 있으면
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);

  if (me === "" || me === null) {
    return null;
  } else {
    if (post.UserId === me.id) {
      return null;
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    children: isFollowing ? '언팔로우' : '팔로우'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, undefined);
};

FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
      nickname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
    }).isRequired,
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);
/*
@useCallback-[]내부 값이 바뀌면 함수를 재생성, 
@useEffect-[]내부에 넣은 값이 바뀌면 함수 재실행
컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때 (사라질 때), 그리고 업데이트 될 때 (특정 props가 바뀔 때)
deps에 특정 값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 지정한 값이 바뀔 때에도 호출이 됩니다.
 */

/***/ }),

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/ImagesZoom/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\ImagesZoom\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const settings = {
    initialSlide: 0,
    beforeChange: (slide, newSlide) => setCurrentSlide(newSlide),
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Overlay"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["CloseBtn"], {
        onClick: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["SlickWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
          children: images.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["ImgWrapper"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              src: `http://localhost:3065/${v.src}`,
              alt: v.src
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 33
            }, undefined)
          }, v.src, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 29
          }, undefined))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Indicator"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: [currentSlide + 1, ' ', "/", images.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

ImagesZoom.PropTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

/***/ }),

/***/ "./components/ImagesZoom/styles.js":
/*!*****************************************!*\
  !*** ./components/ImagesZoom/styles.js ***!
  \*****************************************/
/*! exports provided: Global, Overlay, Header, SlickWrapper, CloseBtn, Indicator, ImgWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickWrapper", function() { return SlickWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseBtn", function() { return CloseBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWrapper", function() { return ImgWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);


const Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])([".slick-slide{display:inline-block;}.ant-card-cover{transform:none !important;}"]);
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Overlay",
  componentId: "sc-r2o2ee-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "styles__Header",
  componentId: "sc-r2o2ee-1"
})(["height:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}"]);
const SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SlickWrapper",
  componentId: "sc-r2o2ee-2"
})(["height:calc(100% - 44px);background:#090909;"]);
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CloseOutlined"]).withConfig({
  displayName: "styles__CloseBtn",
  componentId: "sc-r2o2ee-3"
})(["position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;"]);
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Indicator",
  componentId: "sc-r2o2ee-4"
})(["text-align:center;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}"]);
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ImgWrapper",
  componentId: "sc-r2o2ee-5"
})(["padding:32px;text-align:center;& img{margin:0 auto;max-height:750px;}"]);

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\PostCard.js";















const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "PostCard__CardWrapper",
  componentId: "sc-10lmnn1-0"
})(["margin-bottom:20px;"]);

const PostCard = ({
  post
}) => {
  moment__WEBPACK_IMPORTED_MODULE_12___default.a.locale('ko');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    removePostLoading,
    likePostError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const id = me === null || me === void 0 ? void 0 : me.id; //me 있으면 id 없으면 undefined

  const onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [post, id]);
  const onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [post, id]);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [post, id]);
  const onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [post, id]);
  const liked = post.Likers.find(v => v.id === id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(CardWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 38
      }, undefined) //이미지가 반드시 한개 이상일때 실행된다.
      ,
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, undefined), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 19
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
        onClick: onToggleComment
      }, "message", false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, undefined)
          }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 24
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined)
      }, "elipsis", false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined)],
      extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 20
      }, undefined),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("span", {
        style: {
          float: 'right'
        },
        children: moment__WEBPACK_IMPORTED_MODULE_12___default()(post.createdAt).startOf('hour').fromNow()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: `user/${post.User.id}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
              children: post.User.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 64
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 61
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }, undefined),
        title: post.User.nickname,
        description: post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("p", {
            children: `${post.User.nickname}님이 리트윗하셨습니다`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
            cover: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
              images: post.Retweet.Images
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 54
            }, undefined),
            extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
              post: post.Retweet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 28
            }, undefined),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                href: `user/${post.Retweet.User.id}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                    children: post.Retweet.User.nickname[0]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 80
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 77
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 33
              }, undefined),
              title: post.Retweet.User.nickname,
              description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
                postData: post.Retweet.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }, undefined)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 23
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
        header: `${post.Comments ? post.Comments.length : 0} 댓글`,
        itemLayout: "horizontal",
        dataSource: post.Comments || [],
        renderItem: item => {
          //item은 post.Comments
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
              author: item.User.nickname //item.User.nickname
              ,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                href: {
                  pathname: '/user',
                  query: {
                    id: item.User.id
                  }
                },
                as: `/user/${item.User.id}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                    children: item.User.nickname[0]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 28
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 29
              }, undefined),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 21
          }, undefined);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, undefined)]
    }, void 0, true)]
  }, post.id, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }, undefined);
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    //shape을 이용하면 더 정확하게 prop정의 할수있다.
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\PostCardContent.js";





const PostCardContent = ({
  postData
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: postData.split(/(#[^\s#]+)/g).map(v => {
      if (v.match(/(#[^\s#]+)/)) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: {
            pathname: '/hashtag',
            query: {
              tag: v.slice(1)
            }
          },
          as: `/hashtag/${v.slice(1)}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
            children: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)
        }, v, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined);
      }

      return v;
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ }),

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\PostForm.js";







function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
  });
}

const PostForm = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    imagePaths,
    addPostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const {
    0: previewVisible,
    1: setpreviewVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: previewImage,
    1: setPreviewImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: previewTitle,
    1: setPreviewTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const fileList = imagePaths.map((v, i) => ({
    uid: i,
    name: v,
    url: `http://localhost:3065/${v}` //imagePaths

  }));

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setpreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  /*이미지를 ajax로 업로드 할때 form 전송 필요
  같은 key를 가진 값을 여러개 넣을수 있다.
  값은 문자열로 자동변환*/


  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    //console.log('images', e.target.files); 유사배열, File객체
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    imageInput.current.click(); //click() - element를 마우스로 클릭한 것으로 한다.
  }, [imageInput.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    const formData = new FormData();
    imagePaths.forEach(p => {
      formData.append('image', p); //req.body.image
    });
    formData.append('content', text); //req.body.content

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
  const onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_IMAGE"],
      data: index
    });
  }); //useCallback컴포넌트가 리렌더링 될때마다 함수들이 새로 생성되는 것을 방지
  //e.target - 특정 이벤트가 발생하는 태그
  //e.target.name - 태그의 이름
  //e.target.value - 태그에 입력된느 값

  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setText(e.target.value);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        children: me.nickname[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }, undefined),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      style: {
        margin: '10px 0 20px'
      },
      encType: "multipart/form-data",
      onFinish: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
        value: text,
        onChange: onChangeText,
        maxLength: 140,
        placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
        bordered: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          margin: '10px 0'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
          type: "file",
          name: "image",
          multiple: true,
          hidden: true,
          ref: imageInput,
          onChange: onChangeImages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CameraOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 60
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EnvironmentOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 60
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "round",
          style: {
            float: 'right'
          },
          htmlType: "submit",
          children: "\uC5C5\uB85C\uB4DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
        listType: "picture-card",
        fileList: fileList,
        onPreview: handlePreview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\PostImages.js";







const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        src: `http://localhost:3065/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 32
      }, undefined)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        style: {
          display: 'inline-block'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
          role: "presentation",
          src: `http://localhost:3065/${images[0].src}`,
          width: "50%",
          onClick: onZoom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
          role: "presentation",
          src: `http://localhost:3065/${images[1].src}`,
          width: "50%",
          onClick: onZoom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 32
      }, undefined)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        src: `http://localhost:3065/${images[0].src}`,
        width: "50%",
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        role: "presentation",
        style: {
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'middle'
        },
        onClick: onZoom,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, undefined), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 28
    }, undefined)]
  }, void 0, true);
};

PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./components/SideBar.js":
/*!*******************************!*\
  !*** ./components/SideBar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\SideBar.js";






const SideBar = () => {
  const [searchInput, onChangeSearchInput] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  const onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
      placeholder: "\uAC80\uC0C9",
      onSearch: onSearch,
      style: {
        margin: "10px",
        width: "80%"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

SideBar.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./components/layout/DesktopLayout.js":
/*!********************************************!*\
  !*** ./components/layout/DesktopLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\DesktopLayout.js";













const DesktopLayout = ({
  children,
  Side
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);

  const toTop = () => {
    router.push('/main');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOG_OUT_REQUEST"]
    });
  }, [_reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOG_OUT_REQUEST"]]);
  const onClickMessages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    return router.push('/message/main');
  });
  const onClickProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    return router.push(`/user/${me.id}`);
  });

  const menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
        onClick: onLogOut,
        children: "Log out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, undefined);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    style: {
      display: "flex",
      width: "80%",
      margin: "0 auto"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexFlow: "row wrap",
        width: "20%",
        alignContent: "flex-start"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["HomeOutlined"], {
          style: {
            color: "#2C2C2C"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 136
        }, undefined),
        onClick: toTop,
        children: "\xA0Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["GlobalOutlined"], {
          style: {
            color: "#2C2C2C"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 136
        }, undefined),
        children: "\xA0Explore"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["MailOutlined"], {
          style: {
            color: "#2C2C2C"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 136
        }, undefined),
        onClick: onClickMessages,
        children: "\xA0Messages"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["StarOutlined"], {
          style: {
            color: "#2C2C2C"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 136
        }, undefined),
        children: "\xA0Notification"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UserOutlined"], {
          style: {
            color: "#2C2C2C"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 136
        }, undefined),
        onClick: onClickProfile,
        children: "\xA0Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        shape: "round",
        style: {
          display: "block",
          margin: "10px 0",
          height: "50px",
          fontSize: "20px"
        },
        onClick: onLogOut,
        children: "\xA0Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        width: "50%",
        borderRight: "solid thin #EFEEF5",
        borderLeft: "solid thin #EFEEF5"
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        width: "30%",
        borderRight: "solid thin #EFEEF5"
      },
      children: Side
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

DesktopLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DesktopLayout);

/***/ }),

/***/ "./components/layout/Menu.js":
/*!***********************************!*\
  !*** ./components/layout/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\Menu.js";







const Menu = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const onClickHome = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    return router.push('/main');
  }, []);
  const onClickSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    return router.push('/search');
  }, []);
  const onClickMessages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    return router.push('/message/main');
  }, []);
  const onClickNotification = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    return router.push('/notification');
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HomeOutlined"], {
        style: {
          color: "#2C2C2C",
          fontSize: "23px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 50
      }, undefined),
      onClick: onClickHome
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], {
        style: {
          color: "#2C2C2C",
          fontSize: "23px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 50
      }, undefined),
      onClick: onClickSearch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MailOutlined"], {
        style: {
          color: "#2C2C2C",
          fontSize: "23px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 50
      }, undefined),
      onClick: onClickMessages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StarOutlined"], {
        style: {
          color: "#2C2C2C",
          fontSize: "23px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 50
      }, undefined),
      onClick: onClickNotification
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/layout/MobileLayout.js":
/*!*******************************************!*\
  !*** ./components/layout/MobileLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\MobileLayout.js";




const menuStyle = {
  display: "flex",
  height: "70px",
  position: "fixed",
  bottom: "0",
  zIndex: "99",
  background: "white",
  width: "100%",
  borderTop: "solid thin #EFEEF5",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center"
};

const MobileLayout = ({
  children,
  Header,
  Menu
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [Header, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "children",
        style: {
          marginTop: "49px"
        },
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "menu",
        style: menuStyle,
        children: Menu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

MobileLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MobileLayout);

/***/ }),

/***/ "./components/layout/SideMenu.js":
/*!***************************************!*\
  !*** ./components/layout/SideMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\SideMenu.js";













const SideMenu = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);

  const toTop = () => {
    router.push('/main');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOG_OUT_REQUEST"]
    });
  }, [_reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOG_OUT_REQUEST"]]);
  const onClickMessages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    return router.push('/messages');
  });
  const onClickProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    return router.push('/profile');
  });

  const menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
        onClick: onLogOut,
        children: "Log out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "text",
      shape: "round",
      style: {
        display: "block",
        margin: "10px auto",
        height: "60px",
        width: "60px"
      },
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["HomeOutlined"], {
        style: {
          color: "#2C2C2C",
          fontSize: "24px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 132
      }, undefined),
      onClick: toTop
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "text",
      shape: "round",
      style: {
        display: "block",
        margin: "10px auto",
        height: "60px",
        width: "60px"
      },
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["GlobalOutlined"], {
        style: {
          color: "#2C2C2C",
          fontSize: "24px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 132
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "text",
      shape: "round",
      style: {
        display: "block",
        margin: "10px auto",
        height: "60px",
        width: "60px"
      },
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["MailOutlined"], {
        style: {
          color: "#2C2C2C",
          fontSize: "24px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 132
      }, undefined),
      onClick: onClickMessages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "text",
      shape: "round",
      style: {
        display: "block",
        margin: "10px auto",
        height: "60px",
        width: "60px"
      },
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["StarOutlined"], {
        style: {
          color: "#2C2C2C",
          fontSize: "24px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 132
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "text",
      shape: "round",
      style: {
        display: "block",
        margin: "10px auto",
        height: "60px",
        width: "60px"
      },
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UserOutlined"], {
        style: {
          color: "#2C2C2C",
          fontSize: "24px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 132
      }, undefined),
      onClick: onClickProfile
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, undefined);
};

SideMenu.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./components/layout/Title.js":
/*!************************************!*\
  !*** ./components/layout/Title.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\Title.js";




const style = {
  display: "flex",
  alignItems: "center",
  height: "50px",
  position: "fixed",
  top: "0",
  zIndex: "1",
  background: "white",
  width: "100%",
  borderBottom: "solid thin #EFEEF5"
};

const Title = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const toTop = () => {
    router.push('/main');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: style,
      onClick: toTop,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        style: {
          margin: "0"
        },
        children: "\xA0\xA0\xA0Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./components/layout/tabletLayout.js":
/*!*******************************************!*\
  !*** ./components/layout/tabletLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\tabletLayout.js";




const TabletLayout = ({
  children,
  SideMenu,
  Side
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    style: {
      display: "flex",
      width: "700px",
      margin: "0 auto"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        width: "100px"
      },
      children: SideMenu
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        width: "600px"
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

TabletLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TabletLayout);

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ((initValue = null) => {
  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setter(e.target.value);
  }, []);
  return [value, handler, setter];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout_MobileLayout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/MobileLayout.js */ "./components/layout/MobileLayout.js");
/* harmony import */ var _components_layout_DesktopLayout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout/DesktopLayout.js */ "./components/layout/DesktopLayout.js");
/* harmony import */ var _components_layout_tabletLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout/tabletLayout */ "./components/layout/tabletLayout.js");
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SideBar */ "./components/SideBar.js");
/* harmony import */ var _components_layout_Title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/layout/Title */ "./components/layout/Title.js");
/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/layout/Menu */ "./components/layout/Menu.js");
/* harmony import */ var _components_layout_SideMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/layout/SideMenu */ "./components/layout/SideMenu.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\main.js";





















const Main = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading,
    retweetError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_17__["useMediaQuery"])({
    maxWidth: 500
  }); //~500

  const isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_17__["useMediaQuery"])({
    minWidth: 501,
    maxWidth: 1023
  }); //501~1023

  const isDesktop = Object(react_responsive__WEBPACK_IMPORTED_MODULE_17__["useMediaQuery"])({
    minWidth: 1024
  }); //const isBigDesktop = useMediaQuery({ minWidth: 1280 });
  //useEffect : 컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 Hook
  //component가 mount 됬을때, component가 unmount 됐을때, component가 update됬을때(특정 props, stat가 바뀔때)

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (retweetError) {
      return alert(retweetError);
    }
  }, [retweetError]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onScroll() {
      //scrollY:스크롤을 얼마나 내렸는지 clientHeight: 화면길이
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"],
            data: (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id //마지막 post의 id

          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!me) {
      return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
    }
  }, [me]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["Fragment"], {
    children: [isDesktop && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_layout_DesktopLayout_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_SideBar__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 46
      }, undefined),
      children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }, undefined), mainPosts.map(post => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 33
        }, undefined);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }, undefined), isTablet && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_layout_tabletLayout__WEBPACK_IMPORTED_MODULE_12__["default"], {
      SideMenu: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_layout_SideMenu__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 48
      }, undefined),
      Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_SideBar__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 68
      }, undefined),
      children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, undefined), mainPosts.map(post => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 24
    }, undefined), isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_layout_MobileLayout_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      Header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_layout_Title__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 46
      }, undefined),
      Menu: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 63
      }, undefined),
      children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }, undefined), mainPosts.map(post => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }, undefined);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 24
    }, undefined)]
  }, void 0, true);
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_7__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_8___default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_MY_INFO_REQUEST"]
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]); //REQUEST가 SUCCESS가 될때까지 기다려준다.

  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Main);

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
        //draft.mainPosts = draft.mainPosts.concat(action.data);
        //draft.me.Followings.push({ id : action.data.UserId});
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
        draft.rooms = action.data;
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




 //(이전상태, 액션) => 다음상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      //console.log('HYDRATE', action);
      return action.payload;

    default:
      {
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
//import produce from '../util/produce';

const initialState = {
  searchUserLoading: false,
  // 유저 정보 검색 시도중
  searchUserDone: false,
  searchUserError: null,
  searchUserResult: [],
  uploadPhotoLoading: false,
  //유저 프로필사진 업로드 시도중
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
  //팔로워 로드 시도중
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  //팔로잉 로드 시도중
  loadFollowingsDone: false,
  loadFollowingsError: null,
  removeFollowersLoading: false,
  //팔로워 차단 시도중
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
      //filter()메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/photo', data); //form data는 그대로 전송해야함
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
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW1hZ2VzWm9vbS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9NZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L01vYmlsZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9TaWRlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC90YWJsZXRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jaGF0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9jaGF0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnRFcnJvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJpZCIsInVzZXIiLCJtZSIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwidXNlSW5wdXQiLCJ1c2VFZmZlY3QiLCJhbGVydCIsIm9uU3VibWl0Q29tbWVudCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsInVzZXJJZCIsInBvc3RJZCIsInBvc2l0aW9uIiwibWFyZ2luIiwicmlnaHQiLCJib3R0b20iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJVc2VyIiwibmlja25hbWUiLCJJbWFnZXMiLCJDb21tZW50cyIsImFycmF5T2YiLCJvYmplY3QiLCJGb2xsb3dCdXR0b24iLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJvbkNsaWNrQnV0dG9uIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiVXNlcklkIiwiYXJyYXkiLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwib25DbG9zZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInVzZVN0YXRlIiwic2V0dGluZ3MiLCJpbml0aWFsU2xpZGUiLCJiZWZvcmVDaGFuZ2UiLCJzbGlkZSIsIm5ld1NsaWRlIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1hcCIsInNyYyIsImxlbmd0aCIsImZ1bmMiLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJTbGlja1dyYXBwZXIiLCJDbG9zZUJ0biIsIkNsb3NlT3V0bGluZWQiLCJJbmRpY2F0b3IiLCJJbWdXcmFwcGVyIiwiQ2FyZFdyYXBwZXIiLCJQb3N0Q2FyZCIsIm1vbWVudCIsImxvY2FsZSIsInJlbW92ZVBvc3RMb2FkaW5nIiwibGlrZVBvc3RFcnJvciIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJvblVubGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvbkxpa2UiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwibGlrZWQiLCJMaWtlcnMiLCJmbG9hdCIsImNyZWF0ZWRBdCIsInN0YXJ0T2YiLCJmcm9tTm93IiwiUmV0d2VldCIsIml0ZW0iLCJwYXRobmFtZSIsInF1ZXJ5IiwiYW55IiwiUG9zdENhcmRDb250ZW50IiwicG9zdERhdGEiLCJzcGxpdCIsIm1hdGNoIiwidGFnIiwic2xpY2UiLCJnZXRCYXNlNjQiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsIlBvc3RGb3JtIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsInRleHQiLCJzZXRUZXh0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwicHJldmlld1Zpc2libGUiLCJzZXRwcmV2aWV3VmlzaWJsZSIsInByZXZpZXdJbWFnZSIsInNldFByZXZpZXdJbWFnZSIsInByZXZpZXdUaXRsZSIsInNldFByZXZpZXdUaXRsZSIsImZpbGVMaXN0IiwiaSIsInVpZCIsIm5hbWUiLCJ1cmwiLCJoYW5kbGVQcmV2aWV3IiwicHJldmlldyIsIm9yaWdpbkZpbGVPYmoiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwidGFyZ2V0IiwiZmlsZXMiLCJmIiwiYXBwZW5kIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwib25TdWJtaXQiLCJ0cmltIiwiZm9ybURhdGEiLCJwIiwiQUREX1BPU1RfUkVRVUVTVCIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsIm9uQ2hhbmdlVGV4dCIsInZhbHVlIiwiUG9zdEltYWdlcyIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJkaXNwbGF5Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiU2lkZUJhciIsInNlYXJjaElucHV0Iiwib25DaGFuZ2VTZWFyY2hJbnB1dCIsIm9uU2VhcmNoIiwiUm91dGVyIiwicHVzaCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIkRlc2t0b3BMYXlvdXQiLCJjaGlsZHJlbiIsIlNpZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwib25Mb2dPdXQiLCJMT0dfT1VUX1JFUVVFU1QiLCJvbkNsaWNrTWVzc2FnZXMiLCJvbkNsaWNrUHJvZmlsZSIsIm1lbnUiLCJmbGV4RmxvdyIsImFsaWduQ29udGVudCIsImhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJib3JkZXJSaWdodCIsImJvcmRlckxlZnQiLCJub2RlIiwiTWVudSIsIm9uQ2xpY2tIb21lIiwib25DbGlja1NlYXJjaCIsIm9uQ2xpY2tOb3RpZmljYXRpb24iLCJtZW51U3R5bGUiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyVG9wIiwiTW9iaWxlTGF5b3V0IiwibWFyZ2luVG9wIiwiU2lkZU1lbnUiLCJzdHlsZSIsImJvcmRlckJvdHRvbSIsIlRpdGxlIiwiVGFibGV0TGF5b3V0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwiaGFuZGxlciIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiTWFpbiIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJyZXR3ZWV0RXJyb3IiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJtYXhXaWR0aCIsImlzVGFibGV0IiwibWluV2lkdGgiLCJpc0Rlc2t0b3AiLCJvblNjcm9sbCIsInNjcm9sbFkiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFNlcnZlclNpZGVQcm9wcyIsIndyYXBwZXIiLCJjb250ZXh0IiwiY29va2llIiwicmVxIiwiaGVhZGVycyIsImF4aW9zIiwiZGVmYXVsdHMiLCJDb29raWUiLCJzdG9yZSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiRU5EIiwic2FnYVRhc2siLCJ0b1Byb21pc2UiLCJpbml0aWFsU3RhdGUiLCJsb2FkUm9vbUxvYWRpbmciLCJsb2FkUm9vbURvbmUiLCJsb2FkUm9vbUVycm9yIiwicm9vbXMiLCJVUERBVEVfUk9PTV9MSVNUIiwiTE9BRF9ST09NX0xJU1QiLCJMT0FEX1JPT01fUkVRVUVTVCIsIkxPQURfUk9PTV9TVUNDRVNTIiwiTE9BRF9ST09NX0ZBSUxVUkUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0Iiwicm9vdFJlZHVjZXIiLCJIWURSQVRFIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNoYXQiLCJzaW5nbGVQb3N0IiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwidW5MaWtlUG9zdExvYWRpbmciLCJ1bkxpa2VQb3N0RG9uZSIsInVuTGlrZVBvc3RFcnJvciIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVFNfUkVRVUVTVCIsIkFERF9QT1NUU19TVUNDRVNTIiwiQUREX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJmaWx0ZXIiLCJQb3N0SWQiLCJjb25jYXQiLCJ1bnNoaWZ0Iiwic2VhcmNoVXNlckxvYWRpbmciLCJzZWFyY2hVc2VyRG9uZSIsInNlYXJjaFVzZXJFcnJvciIsInNlYXJjaFVzZXJSZXN1bHQiLCJ1cGxvYWRQaG90b0xvYWRpbmciLCJ1cGxvYWRQaG90b0RvbmUiLCJ1cGxvYWRQaG90b0Vycm9yIiwicGhvdG9QYXRoIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZWRpdFVzZXJQcm9maWxlTG9hZGluZyIsImVkaXRVc2VyUHJvZmlsZURvbmUiLCJlZGl0VXNlclByb2ZpbGVFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJzTG9hZGluZyIsInJlbW92ZUZvbGxvd2Vyc0RvbmUiLCJyZW1vdmVGb2xsb3dlcnNFcnJvciIsInVzZXJJbmZvIiwiVVBMT0FEX1BIT1RPX1JFUVVFU1QiLCJVUExPQURfUEhPVE9fU1VDQ0VTUyIsIlVQTE9BRF9QSE9UT19GQUlMVVJFIiwiU0VBUkNIX1VTRVJfUkVRVUVTVCIsIlNFQVJDSF9VU0VSX1NVQ0NFU1MiLCJTRUFSQ0hfVVNFUl9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfRE9ORSIsIkVESVRfVVNFUl9QUk9GSUxFX1JFUVVFU1QiLCJFRElUX1VTRVJfUFJPRklMRV9TVUNDRVNTIiwiRURJVF9VU0VSX1BST0ZJTEVfRkFJTFVSRSIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJGb2xsb3dlcnMiLCJwaG90byIsIlBvc3RzIiwibG9hZFJvb21BUEkiLCJsb2FkUm9vbSIsInB1dCIsInJlc3BvbnNlIiwid2F0Y2hMb2FkUm9vbSIsInRha2VMYXRlc3QiLCJjaGF0U2FnYSIsImZvcmsiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJ1bmxpa2VQb3N0QVBJIiwicGF0Y2giLCJ1bmxpa2VQb3N0IiwibGlrZVBvc3RBUEkiLCJsaWtlUG9zdCIsImxvYWRQb3N0c0FQSSIsImxvYWRQb3N0cyIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsImFkZENvbW1lbnQiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsb2FkVXNlclBvc3RzQVBJIiwibGFzdElkIiwibG9hZFVzZXJQb3N0cyIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hSZXR3ZWV0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoQWRkUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaExvYWRVc2VyUG9zdHMiLCJ3YXRjaEhhc2h0YWdQb3N0cyIsInVwbG9hZFBob3RvQVBJIiwidXBsb2FkUGhvdG8iLCJzZWFyY2hVc2VyQVBJIiwic2VhcmNoVXNlciIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93IiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwiZWRpdFVzZXJQcm9maWxlQVBJIiwiZWRpdFVzZXJQcm9maWxlIiwibG9nIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsIndhdGNoVXBsb2FkUGhvdG8iLCJ3YXRjaFNlYXJjaFVzZXIiLCJ3YXRjaEVkaXRVc2VyUHJvZmlsZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvYWRGb2xsb3dlcnMiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQ2hDLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUVDLGtCQUFGO0FBQWtCQyxxQkFBbEI7QUFBcUNDO0FBQXJDLE1BQXlEQywrREFBVyxDQUFFQyxLQUFELElBQVNBLEtBQUssQ0FBQ1AsSUFBaEIsQ0FBMUU7QUFDQSxRQUFNUSxF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QjtBQUNBLFNBQU94SyxLQUFQO0FBQ0QsQ0FYRDs7QUFhQSxNQUFNUixPQUFPLEdBQUcwUSx3RUFBYSxDQUFDVixjQUFELEVBQWlCO0FBQUVXLE9BQUs7QUFBUCxDQUFqQixDQUE3QjtBQUVlM1Esc0VBQWYsRTs7Ozs7Ozs7Ozs7QUN2QkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbWFpbi5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IEFERF9DT01NRU5UX1JFUVVFU1QgIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGFkZENvbW1lbnREb25lLCBhZGRDb21tZW50TG9hZGluZywgYWRkQ29tbWVudEVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5wb3N0KTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZihhZGRDb21tZW50RG9uZSl7XHJcbiAgICAgIHNldENvbW1lbnRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9LCBbYWRkQ29tbWVudERvbmVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZihhZGRDb21tZW50RXJyb3IpIHtcclxuICAgICAgYWxlcnQoYWRkQ29tbWVudEVycm9yKTtcclxuICAgIH1cclxuICB9LCBbYWRkQ29tbWVudEVycm9yXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvbnRlbnQgOiBjb21tZW50VGV4dCxcclxuICAgICAgICB1c2VySWQgOiBpZCxcclxuICAgICAgICBwb3N0SWQgOiBwb3N0LmlkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtjb21tZW50VGV4dCwgaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdENvbW1lbnR9PlxyXG4gICAgICA8Rm9ybS5JdGVtIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhIHJvd3M9ezR9IHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IC8+XHJcbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDAsIGJvdHRvbTogLTQwIH19IHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXthZGRDb21tZW50TG9hZGluZ30+7IKQ7JW9PC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBjb250ZW50OlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBuaWNrbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSkuaXNSZXF1aXJlZCxcclxuICAgIEltYWdlczpQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgQ29tbWVudHM6UHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZT8uRm9sbG93aW5ncz8uZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGlmIChpc0ZvbGxvd2luZyl7IC8v64K06rCAIHBvc3Qg7J6R7ISx7J6Q66W8IGZvbGxvd2luZyDtlZjqs6Ag7J6I7Jy866m0XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNGb2xsb3dpbmddKTtcclxuXHJcbiAgICBpZiAobWUgPT09IFwiXCIgfHwgbWUgPT09IG51bGwpe1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocG9zdC5Vc2VySWQgPT09IG1lLmlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nIHx8IHVuZm9sbG93TG9hZGluZ30gb25DbGljaz17b25DbGlja0J1dHRvbn0+XHJcbiAgICAgICAgICAgIHtpc0ZvbGxvd2luZyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCd9IFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBjb250ZW50OlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIFVzZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgICBuaWNrbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICB9KS5pc1JlcXVpcmVkLFxyXG4gICAgICBJbWFnZXM6UHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICBDb21tZW50czpQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxyXG4gICAgfSkuaXNSZXF1aXJlZCxcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uO1xyXG5cclxuXHJcbi8qXHJcbkB1c2VDYWxsYmFjay1bXeuCtOu2gCDqsJLsnbQg67CU64CM66m0IO2VqOyImOulvCDsnqzsg53shLEsIFxyXG5AdXNlRWZmZWN0LVtd64K067aA7JeQIOuEo+ydgCDqsJLsnbQg67CU64CM66m0IO2VqOyImCDsnqzsi6Ttlolcclxu7Lu07Y+s64SM7Yq46rCAIOuniOyatO2KuCDrkJDsnYQg65WMICjsspjsnYwg64KY7YOA64Ks7J2EIOuVjCksIOyWuOuniOyatO2KuCDrkJDsnYQg65WMICjsgqzrnbzsp4gg65WMKSwg6re466as6rOgIOyXheuNsOydtO2KuCDrkKAg65WMICjtirnsoJUgcHJvcHPqsIAg67CU64CUIOuVjClcclxuZGVwc+yXkCDtirnsoJUg6rCS7J2EIOuEo+qyjCDrkJzri6TrqbQsIOy7tO2PrOuEjO2KuOqwgCDsspjsnYwg66eI7Jq07Yq4IOuQoCDrlYzsl5Drj4Qg7Zi47Lac7J20IOuQmOqzoCwg7KeA7KCV7ZWcIOqwkuydtCDrsJTrgJQg65WM7JeQ64+EIO2YuOy2nOydtCDrkKnri4jri6QuXHJcbiAqLyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCB7IE92ZXJsYXksIEhlYWRlciwgQ2xvc2VCdG4sIFNsaWNrV3JhcHBlciwgSW1nV3JhcHBlciwgSW5kaWNhdG9yLCBHbG9iYWwgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5cclxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7aW1hZ2VzLCBvbkNsb3NlfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgaW5pdGlhbFNsaWRlIDogMCxcclxuICAgICAgICBiZWZvcmVDaGFuZ2UgOiAoc2xpZGUsIG5ld1NsaWRlKT0+c2V0Q3VycmVudFNsaWRlKG5ld1NsaWRlKSxcclxuICAgICAgICBhcnJvd3MgOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZSA6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93IDogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbCA6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE92ZXJsYXk+XHJcbiAgICAgICAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cclxuICAgICAgICAgICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXtvbkNsb3NlfS8+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8U2xpY2tXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZ1dyYXBwZXIga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHt2LnNyY31gfSBhbHQ9e3Yuc3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWdXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5kaWNhdG9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTbGlkZSsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0luZGljYXRvcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NsaWNrV3JhcHBlcj5cclxuICAgICAgICA8L092ZXJsYXk+XHJcbiAgICApO1xyXG59O1xyXG5cclxuSW1hZ2VzWm9vbS5Qcm9wVHlwZXMgPSB7XHJcbiAgICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgc3JjOlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2UgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAuc2xpY2stc2xpZGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuYW50LWNhcmQtY292ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDUwMDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAmIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KTtcclxuICBiYWNrZ3JvdW5kOiAjMDkwOTA5O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlQnRuID0gc3R5bGVkKENsb3NlT3V0bGluZWQpYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgJiA+IGRpdiB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMTMxMzE7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmIGltZyB7XHJcbiAgICAgICAgbWFyZ2luIDogMCBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6NzUwcHg7XHJcbiAgICB9XHJcbmA7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ2FyZCwgUG9wb3ZlciwgQnV0dG9uLCBMaXN0LCBDb21tZW50LCBBdmF0YXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgSGVhcnRUd29Ub25lLCBNZXNzYWdlT3V0bGluZWQsIEVsbGlwc2lzT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gJy4vRm9sbG93QnV0dG9uJztcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFJFVFdFRVRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG5cclxuICAgIG1vbWVudC5sb2NhbGUoJ2tvJyk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nLCBsaWtlUG9zdEVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFsgY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgaWQgPSBtZT8uaWQ7IC8vbWUg7J6I7Jy866m0IGlkIOyXhuycvOuptCB1bmRlZmluZWRcclxuXHJcbiAgICBjb25zdCBvblVubGlrZSA9IHVzZUNhbGxiYWNrKCgpPT57XHJcblxyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbcG9zdCwgaWRdKTtcclxuXHJcbiAgICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9LCBbcG9zdCwgaWRdKTtcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbcG9zdCwgaWRdKTtcclxuXHJcbiAgICBjb25zdCBvblJldHdlZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbcG9zdCwgaWRdKTtcclxuICAgIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCh2PT4gdi5pZCA9PT0gaWQpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q2FyZFdyYXBwZXIga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9Lz59Ly/snbTrr7jsp4DqsIAg67CY65Oc7IucIO2VnOqwnCDsnbTsg4HsnbzrlYwg7Iuk7ZaJ65Cc64ukLlxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9Lz4sXHJcbiAgICAgICAgICAgICAgICBsaWtlZCBcclxuICAgICAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblVubGlrZX0gLz5cclxuICAgICAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+LFxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJtZXNzYWdlXCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fS8+LFxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgXHJcbiAgICAgICAgICAgICAgICBrZXk9XCJlbGlwc2lzXCIgXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICA6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgZXh0cmE9ezxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19Pnttb21lbnQocG9zdC5jcmVhdGVkQXQpLnN0YXJ0T2YoJ2hvdXInKS5mcm9tTm93KCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXs8TGluayBocmVmPXtgdXNlci8ke3Bvc3QuVXNlci5pZH1gfT48YT48QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuUmV0d2VldCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cD57YCR7cG9zdC5Vc2VyLm5pY2tuYW1lfeuLmOydtCDrpqztirjsnJftlZjshajsirXri4jri6RgfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5SZXR3ZWV0LkltYWdlc30vPn1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17PEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0LlJldHdlZXR9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxMaW5rIGhyZWY9e2B1c2VyLyR7cG9zdC5SZXR3ZWV0LlVzZXIuaWR9YH0+PGE+PEF2YXRhcj57cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuUmV0d2VldC5jb250ZW50fS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICA6IDxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzID8gcG9zdC5Db21tZW50cy5sZW5ndGggOiAwfSDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50cyB8fCBbXX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7IC8vaXRlbeydgCBwb3N0LkNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfS8vaXRlbS5Vc2VyLm5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy91c2VyJywgcXVlcnk6IHsgaWQ6IGl0ZW0uVXNlci5pZCB9fX0gYXM9e2AvdXNlci8ke2l0ZW0uVXNlci5pZH1gfT4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2FyZFdyYXBwZXI+ICAgICAgICAgIFxyXG4gICAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7IC8vc2hhcGXsnYQg7J207Jqp7ZWY66m0IOuNlCDsoJXtmZXtlZjqsowgcHJvcOygleydmCDtlaDsiJjsnojri6QuXHJcbiAgICAgICAgaWQ6UHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBVc2VyOlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgY29udGVudDpQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDpQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIENvbW1lbnRzOlByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICAgICAgTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxyXG4gICAgfSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUG9zdENhcmRDb250ZW50ID0gKHsgcG9zdERhdGEgfSkgPT4ge1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgIHtwb3N0RGF0YS5zcGxpdCgvKCNbXlxccyNdKykvZykubWFwKCh2KSA9PiB7XHJcbiAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzI10rKS8pKSB7XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiAnL2hhc2h0YWcnLCBxdWVyeTogeyB0YWc6IHYuc2xpY2UoMSkgfSB9fVxyXG4gICAgICAgICAgICBhcz17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfVxyXG4gICAgICAgICAgICBrZXk9e3Z9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPnt2fTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHY7XHJcbiAgICB9KX1cclxuICA8L2Rpdj5cclxuICApO1xyXG4gICAgXHJcbn07XHJcblxyXG5Qb3N0Q2FyZENvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdERhdGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkQ29udGVudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENhcmQsIEF2YXRhciwgVXBsb2FkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQsIEVudmlyb25tZW50T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBnZXRCYXNlNjQoZmlsZSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgICBcclxuICBjb25zdCBbIHByZXZpZXdWaXNpYmxlLCBzZXRwcmV2aWV3VmlzaWJsZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFsgcHJldmlld0ltYWdlLCBzZXRQcmV2aWV3SW1hZ2UgXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbIHByZXZpZXdUaXRsZSwgc2V0UHJldmlld1RpdGxlIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGZpbGVMaXN0ID0gaW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+ICh7IFxyXG4gICAgdWlkOiBpLFxyXG4gICAgbmFtZTogdixcclxuICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Z9YC8vaW1hZ2VQYXRoc1xyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldmlldyA9IGFzeW5jIGZpbGUgPT4ge1xyXG4gICAgaWYgKCFmaWxlLnVybCAmJiAhZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgIGZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChmaWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZShmaWxlLnVybCB8fCBmaWxlLnByZXZpZXcpO1xyXG4gICAgc2V0cHJldmlld1Zpc2libGUodHJ1ZSk7XHJcbiAgICBzZXRQcmV2aWV3VGl0bGUoZmlsZS5uYW1lIHx8IGZpbGUudXJsLnN1YnN0cmluZyhmaWxlLnVybC5sYXN0SW5kZXhPZignLycpICsgMSkpO1xyXG4gIH07XHJcblxyXG4gIC8q7J2066+47KeA66W8IGFqYXjroZwg7JeF66Gc65OcIO2VoOuVjCBmb3JtIOyghOyGoSDtlYTsmpRcclxuICDqsJnsnYAga2V566W8IOqwgOynhCDqsJLsnYQg7Jes65+s6rCcIOuEo+ydhOyImCDsnojri6QuXHJcbiAg6rCS7J2AIOusuOyekOyXtOuhnCDsnpDrj5nrs4DtmZgqL1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpOyDsnKDsgqzrsLDsl7QsIEZpbGXqsJ3ssrRcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpPT57XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAvL2NsaWNrKCkgLSBlbGVtZW5066W8IOuniOyasOyKpOuhnCDtgbTrpq3tlZwg6rKD7Jy866GcIO2VnOuLpC5cclxufSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgaWYoYWRkUG9zdERvbmUpIHtcclxuICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0sW2FkZFBvc3REb25lXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+qyjOyLnOq4gOydhCDsnpHshLHtlZjshLjsmpQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7Ly9yZXEuYm9keS5pbWFnZVxyXG4gICAgfSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB0ZXh0KTsvL3JlcS5ib2R5LmNvbnRlbnRcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSwgW3RleHQsIGltYWdlUGF0aHNdKTsgXHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICBkYXRhOiBpbmRleCxcclxuICAgIH0pXHJcbiAgfSk7XHJcbiAgLy91c2VDYWxsYmFja+y7tO2PrOuEjO2KuOqwgCDrpqzroIzrjZTrp4Eg65Cg65WM66eI64ukIO2VqOyImOuTpOydtCDsg4jroZwg7IOd7ISx65CY64qUIOqyg+ydhCDrsKnsp4BcclxuICAvL2UudGFyZ2V0IC0g7Yq57KCVIOydtOuypO2KuOqwgCDrsJzsg53tlZjripQg7YOc6re4XHJcbiAgLy9lLnRhcmdldC5uYW1lIC0g7YOc6re47J2YIOydtOumhFxyXG4gIC8vZS50YXJnZXQudmFsdWUgLSDtg5zqt7jsl5Ag7J6F66Cl65Cc64qQIOqwklxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmQuTWV0YVxyXG4gICAgICBhdmF0YXI9ezxBdmF0YXI+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgdGl0bGU9e21lLm5pY2tuYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8Rm9ybSBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAgMjBweCcgfX0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIGJvcmRlcmVkPXtmYWxzZX0vPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJ319PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+PENhbWVyYU91dGxpbmVkIC8+PC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT48RW52aXJvbm1lbnRPdXRsaW5lZCAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPuyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgZmlsZUxpc3Q9e2ZpbGVMaXN0fVxyXG4gICAgICAgICAgb25QcmV2aWV3PXtoYW5kbGVQcmV2aWV3fVxyXG4gICAgICAgID5cclxuICAgICAgICA8L1VwbG9hZD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBJbWFnZXNab29tIGZyb20gJy4vSW1hZ2VzWm9vbSc7XHJcbiBcclxuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFsgc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZXNab29tIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IG9uWm9vbT0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2UgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldFNob3dJbWFnZXNab29tKGZhbHNlKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAxICkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMiApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheSA6ICdpbmxpbmUtYmxvY2snfX0gPlxyXG4gICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IHdpZHRoPVwiNTAlXCIgb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMV0uc3JjfWB9IHdpZHRoPVwiNTAlXCIgb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gd2lkdGg9XCI1MCVcIiBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzUwJScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX1cclxuICAgICAgICAgICAgb25DbGljaz17b25ab29tfT5cclxuICAgICAgICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGgtMX1cclxuICAgICAgICAgICAgICAgIOqwnOydmCDsgqzsp4Qg642U67O06riwXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0vPn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IFNpZGVCYXIgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgb25DaGFuZ2VTZWFyY2hJbnB1dF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xyXG4gICAgfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9XCLqsoDsg4lcIiBvblNlYXJjaD17b25TZWFyY2h9IHN0eWxlPXt7bWFyZ2luOiBcIjEwcHhcIiwgd2lkdGg6IFwiODAlXCJ9fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59O1xyXG5cclxuU2lkZUJhci5wcm9wVHlwZXMgPSB7XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBNZW51LCBJbnB1dCwgUm93LCBDb2wsIEJ1dHRvbiwgQXZhdGFyLCBEcm9wZG93biB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgU3Rhck91dGxpbmVkLCBNYWlsT3V0bGluZWQsIFVzZXJPdXRsaW5lZCwgR2xvYmFsT3V0bGluZWQsIEhvbWVPdXRsaW5lZCwgU2VhcmNoT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExPR19PVVRfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBEZXNrdG9wTGF5b3V0ID0gKHtjaGlsZHJlbiwgU2lkZX0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcblxyXG4gICAgY29uc3QgdG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9tYWluJyk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MCwgbGVmdDowLCBiZWhhdmlvcjonYXV0byd9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sIFtMT0dfT1VUX1JFUVVFU1RdKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrTWVzc2FnZXMgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaCgnL21lc3NhZ2UvbWFpbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1Byb2ZpbGUgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaChgL3VzZXIvJHttZS5pZH1gKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBtZW51ID0gKFxyXG4gICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkxvZ091dH0+TG9nIG91dDwvYT4gXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIHdpZHRoOlwiODAlXCIsIG1hcmdpbjpcIjAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RmxvdzpcInJvdyB3cmFwXCIsIHdpZHRoOlwiMjAlXCIsIGFsaWduQ29udGVudDogXCJmbGV4LXN0YXJ0XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEhvbWVPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59IG9uQ2xpY2s9e3RvVG9wfT4mbmJzcDtIb21lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCAwXCIsIGhlaWdodDogXCI1MHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxHbG9iYWxPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PiZuYnNwO0V4cGxvcmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PE1haWxPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59IG9uQ2xpY2s9e29uQ2xpY2tNZXNzYWdlc30+Jm5ic3A7TWVzc2FnZXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PFN0YXJPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PiZuYnNwO05vdGlmaWNhdGlvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8VXNlck91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0gb25DbGljaz17b25DbGlja1Byb2ZpbGV9PiZuYnNwO1Byb2ZpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gb25DbGljaz17b25Mb2dPdXR9PiZuYnNwO0xvZ291dDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiNTAlXCIsIGJvcmRlclJpZ2h0OiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBib3JkZXJMZWZ0OiBcInNvbGlkIHRoaW4gI0VGRUVGNVwifX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjMwJVwiLCBib3JkZXJSaWdodDogXCJzb2xpZCB0aGluICNFRkVFRjVcIn19PlxyXG4gICAgICAgICAgICB7U2lkZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuRGVza3RvcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBIb21lT3V0bGluZWQsIFNlYXJjaE91dGxpbmVkLCBNYWlsT3V0bGluZWQsIFN0YXJPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tIb21lID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goJy9tYWluJyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1NlYXJjaCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKCcvc2VhcmNoJyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBvbkNsaWNrTWVzc2FnZXMgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaCgnL21lc3NhZ2UvbWFpbicpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25DbGlja05vdGlmaWNhdGlvbiA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKCcvbm90aWZpY2F0aW9uJyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PEhvbWVPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjNweFwifX0vPn0gb25DbGljaz17b25DbGlja0hvbWV9PjwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIGljb249ezxTZWFyY2hPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjNweFwifX0vPn0gb25DbGljaz17b25DbGlja1NlYXJjaH0+PC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PE1haWxPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjNweFwifX0vPn0gb25DbGljaz17b25DbGlja01lc3NhZ2VzfT48L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBpY29uPXs8U3Rhck91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wiLCBmb250U2l6ZTogXCIyM3B4XCJ9fS8+fSBvbkNsaWNrPXtvbkNsaWNrTm90aWZpY2F0aW9ufT48L0J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBtZW51U3R5bGUgPSB7XHJcbiAgICBkaXNwbGF5OlwiZmxleFwiLFxyXG4gICAgaGVpZ2h0OlwiNzBweFwiLFxyXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgIGJvdHRvbTpcIjBcIixcclxuICAgIHpJbmRleDpcIjk5XCIsXHJcbiAgICBiYWNrZ3JvdW5kOlwid2hpdGVcIixcclxuICAgIHdpZHRoOlwiMTAwJVwiLFxyXG4gICAgYm9yZGVyVG9wOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsIFxyXG4gICAganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1ldmVubHlcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxufTtcclxuXHJcbmNvbnN0IE1vYmlsZUxheW91dCA9ICh7Y2hpbGRyZW4sIEhlYWRlciwgTWVudX0pID0+IHtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7SGVhZGVyfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkcmVuXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiNDlweFwifX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiIHN0eWxlPXttZW51U3R5bGV9PlxyXG4gICAgICAgICAgICB7TWVudX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuTW9iaWxlTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgLCB7dXNlQ2FsbGJhY2sgfWZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sLCBCdXR0b24sIEF2YXRhciwgRHJvcGRvd24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IFN0YXJPdXRsaW5lZCwgTWFpbE91dGxpbmVkLCBVc2VyT3V0bGluZWQsIEdsb2JhbE91dGxpbmVkLCBIb21lT3V0bGluZWQsIFNlYXJjaE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgU2lkZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGNvbnN0IHRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvbWFpbicpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOjAsIGxlZnQ6MCwgYmVoYXZpb3I6J2F1dG8nfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LCBbTE9HX09VVF9SRVFVRVNUXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja01lc3NhZ2VzID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goJy9tZXNzYWdlcycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1Byb2ZpbGUgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSAoXHJcbiAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uTG9nT3V0fT5Mb2cgb3V0PC9hPiBcclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCBhdXRvXCIsIGhlaWdodDogXCI2MHB4XCIsIHdpZHRoOiBcIjYwcHhcIn19IGljb249ezxIb21lT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjI0cHhcIn19Lz59IG9uQ2xpY2s9e3RvVG9wfT48L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggYXV0b1wiLCBoZWlnaHQ6IFwiNjBweFwiLCB3aWR0aDogXCI2MHB4XCJ9fSBpY29uPXs8R2xvYmFsT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjI0cHhcIn19Lz59PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCBhdXRvXCIsIGhlaWdodDogXCI2MHB4XCIsIHdpZHRoOiBcIjYwcHhcIn19IGljb249ezxNYWlsT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjI0cHhcIn19Lz59IG9uQ2xpY2s9e29uQ2xpY2tNZXNzYWdlc30+PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IGF1dG9cIiwgaGVpZ2h0OiBcIjYwcHhcIiwgd2lkdGg6IFwiNjBweFwifX0gaWNvbj17PFN0YXJPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjRweFwifX0vPn0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IGF1dG9cIiwgaGVpZ2h0OiBcIjYwcHhcIiwgd2lkdGg6IFwiNjBweFwifX0gaWNvbj17PFVzZXJPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjRweFwifX0vPn0gb25DbGljaz17b25DbGlja1Byb2ZpbGV9PjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblNpZGVNZW51LnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3Qgc3R5bGU9e1xyXG4gICAgZGlzcGxheTpcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcclxuICAgIGhlaWdodDpcIjUwcHhcIixcclxuICAgIHBvc2l0aW9uOlwiZml4ZWRcIixcclxuICAgIHRvcDpcIjBcIixcclxuICAgIHpJbmRleDpcIjFcIixcclxuICAgIGJhY2tncm91bmQ6XCJ3aGl0ZVwiLFxyXG4gICAgd2lkdGg6XCIxMDAlXCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjRUZFRUY1XCIsXHJcbn1cclxuXHJcbmNvbnN0IFRpdGxlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgdG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9tYWluJyk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MCwgbGVmdDowLCBiZWhhdmlvcjonYXV0byd9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXt0b1RvcH0+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbjpcIjBcIn19PiZuYnNwOyZuYnNwOyZuYnNwO0hvbWU8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgVGFibGV0TGF5b3V0ID0gKHtjaGlsZHJlbiwgU2lkZU1lbnUsIFNpZGV9KSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgd2lkdGg6XCI3MDBweFwiLCBtYXJnaW46XCIwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDBweFwifX0+XHJcbiAgICAgICAgICAgIHtTaWRlTWVudX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjYwMHB4XCJ9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5UYWJsZXRMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZXRMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGluaXRWYWx1ZSA9IG51bGwpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldHRlcl0gPSB1c2VTdGF0ZShpbml0VmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0dGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0dGVyXTtcclxufTtcclxuXHJcblxyXG5cclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoICwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNb2JpbGVMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTW9iaWxlTGF5b3V0LmpzJztcclxuaW1wb3J0IERlc2t0b3BMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dC5qcyc7XHJcbmltcG9ydCBUYWJsZXRMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvdGFibGV0TGF5b3V0JztcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlQmFyJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RpdGxlJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTWVudSc7XHJcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9TaWRlTWVudSc7XHJcblxyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSc7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nLCByZXR3ZWV0RXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHsgbWF4V2lkdGg6IDUwMCB9KTsgLy9+NTAwXHJcbiAgICBjb25zdCBpc1RhYmxldCA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogNTAxLCBtYXhXaWR0aDogMTAyM30pOyAvLzUwMX4xMDIzXHJcbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHsgbWluV2lkdGg6IDEwMjQgfSk7XHJcbiAgICAvL2NvbnN0IGlzQmlnRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogMTI4MCB9KTtcclxuXHJcbiAgICAvL3VzZUVmZmVjdCA6IOy7tO2PrOuEjO2KuOqwgCDroIzrjZTrp4Eg65Cg65WM66eI64ukIO2KueyglSDsnpHsl4XsnYQg7Iuk7ZaJ7ZWgIOyImCDsnojrj4TroZ0g7ZWY64qUIEhvb2tcclxuICAgIC8vY29tcG9uZW506rCAIG1vdW50IOuQrOydhOuVjCwgY29tcG9uZW506rCAIHVubW91bnQg65CQ7J2E65WMLCBjb21wb25lbnTqsIAgdXBkYXRl65Cs7J2E65WMKO2KueyglSBwcm9wcywgc3RhdOqwgCDrsJTrgJTrlYwpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAocmV0d2VldEVycm9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHJldHdlZXRFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JldHdlZXRFcnJvcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCl7XHJcbiAgICAgICAgICAgIC8vc2Nyb2xsWTrsiqTtgazroaTsnYQg7Ja866eI64KYIOuCtOuguOuKlOyngCBjbGllbnRIZWlnaHQ6IO2ZlOuptOq4uOydtFxyXG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nICl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkIC8v66eI7KeA66eJIHBvc3TsnZggaWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZV0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyBpc0Rlc2t0b3AgJiYgKDxEZXNrdG9wTGF5b3V0IFNpZGU9ezxTaWRlQmFyIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICB7IG1lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Rlc2t0b3BMYXlvdXQ+KVxyXG4gICAgICAgIH1cclxuICAgICAgICB7IGlzVGFibGV0ICYmICg8VGFibGV0TGF5b3V0IFNpZGVNZW51PXs8U2lkZU1lbnUgLz59IFNpZGU9ezxTaWRlQmFyIC8+fT5cclxuICAgICAgICB7IG1lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8L1RhYmxldExheW91dD4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsgaXNNb2JpbGUgJiYgKDxNb2JpbGVMYXlvdXQgSGVhZGVyPXs8VGl0bGUgLz59IE1lbnU9ezxNZW51IC8+fT5cclxuICAgICAgICAgICAgeyBtZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvTW9iaWxlTGF5b3V0PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCk9PntcclxuICAgIFxyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXE/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpOyAvL1JFUVVFU1TqsIAgU1VDQ0VTU+qwgCDrkKDrlYzquYzsp4Ag6riw64uk66Ck7KSA64ukLlxyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkUm9vbUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFJvb21Eb25lOiBmYWxzZSxcclxuICAgIGxvYWRSb29tRXJyb3I6IG51bGwsXHJcbiAgICByb29tczogW11cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUk9PTV9MSVNUID0gJ1VQREFURV9ST09NX0xJU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9ST09NX0xJU1QgPSAnTE9BRF9ST09NX0xJU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9ST09NX1JFUVVFU1QgPSAnTE9BRF9ST09NX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9ST09NX1NVQ0NFU1MgPSAnTE9BRF9ST09NX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9ST09NX0ZBSUxVUkUgPSAnTE9BRF9ST09NX0ZBSUxVUkUnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFVQREFURV9ST09NX0xJU1Q6IHtcclxuICAgICAgICAgICAgLy9kcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgLy9kcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZCA6IGFjdGlvbi5kYXRhLlVzZXJJZH0pO1xyXG4gICAgICAgICAgICBkcmFmdC5yb29tcy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9ST09NX0xJU1Q6IHtcclxuICAgICAgICAgICAgZHJhZnQucm9vbXMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9ST09NX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJvb21Mb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRSb29tRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJvb21FcnJvcj1udWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX1JPT01fU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICBkcmFmdC5yb29tcz1hY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJvb21Mb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUm9vbURvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJvb21FcnJvcj1udWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX1JPT01fRkFJTFVSRToge1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUm9vbUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRSb29tRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJvb21FcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgY2hhdCBmcm9tICcuL2NoYXQnO1xyXG5cclxuXHJcbi8vKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICBwb3N0LFxyXG4gICAgICAgICAgICAgICAgY2hhdCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiLy9pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuLy9pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOltdLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVuTGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bkxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5MaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICByZXR3ZWV0RG9uZSA6IGZhbHNlLFxyXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbi8vYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVFNfUkVRVUVTVCA9ICdBRERfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVFNfU1VDQ0VTUyA9ICdBRERfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVFNfRkFJTFVSRSA9ICdBRERfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuLy9SZWR1Y2VycyA6IGFjdGlvbuydhCDthrXtlbQg7Ja065akIO2WieuPmeydhCDsoJXsnZjtlojri6TrqbQsIOq3uCDqsrDqs7wg7IOB7YOc6rCAIOyWtOuWu+qyjCDrsJTrgIzripTsp4Ag7Yq57KCV7ZWY6rKMIOuQmOuKlCDtlajsiJhcclxuLy9wcm9kdWNlIHN0YXRlLCDsg4Htg5zsnZgg6rKw6rO8IO2VqOyImFxyXG4vL3JldHVybiBwcm9kdWNlKCnsnbgg6rKDXHJcbi8vZHJhZnTqsIAgc3RhdGXroZwg67CU64CM64qU6rKDXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7IC8vcHVzaCgpIDog67Cw7Je07J2YIOunqOuSpOyXkCBwdXNoXHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuTGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuTGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodik9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodik9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuTGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bkxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTogXHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIC8vYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7IGFjdGlvbi5kYXRhID0gbG9hZO2VnCDrsLDsl7QsIGFjdGlvbi5kYXRhICsgZHJhZnQubWFpblBvc3RzXHJcbiAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTogXHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7Ly/sg4jroZzsmrQg7JqU7IaM66W8IOuwsOyXtOydmCDrp6gg7JWe7Kq97JeQIOy2lOqwgO2VmOqzoCwg7IOI66Gc7Jq0IOq4uOydtOuwmO2ZmFxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1udWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cz1kcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KT0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodik9PnYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzPWFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiBcclxuICAgICAgYnJlYWs7IC8vcmV0dXJuIGRyYWZ07ZW064+EIOuQmOyngOyViuuCmC4uLlxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbi8qXHJcbmh0dHBzOi8vcmVhY3QudmxwdC51cy9yZWR1eC8wMS1rZXl3b3Jkcy5odG1sXHJcbiovXHJcbiIsIi8vaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgc2VhcmNoVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqygOyDiSDsi5zrj4TspJFcclxuICAgIHNlYXJjaFVzZXJEb25lOiBmYWxzZSxcclxuICAgIHNlYXJjaFVzZXJFcnJvcjogbnVsbCxcclxuICAgIHNlYXJjaFVzZXJSZXN1bHQ6IFtdLFxyXG4gICAgdXBsb2FkUGhvdG9Mb2FkaW5nOiBmYWxzZSwgLy/snKDsoIAg7ZSE66Gc7ZWE7IKs7KeEIOyXheuhnOuTnCDsi5zrj4TspJFcclxuICAgIHVwbG9hZFBob3RvRG9uZTogZmFsc2UsXHJcbiAgICB1cGxvYWRQaG90b0Vycm9yOiBudWxsLFxyXG4gICAgcGhvdG9QYXRoOm51bGwsXHJcbiAgICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnJvcjogbnVsbCxcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBlZGl0VXNlclByb2ZpbGVMb2FkaW5nOiBmYWxzZSwgLy8g7IKs7Jqp7J6QIO2UhOuhnO2VhCDsiJjsoJUg7Iuc64+E7KSRXHJcbiAgICBlZGl0VXNlclByb2ZpbGVEb25lOiBmYWxzZSxcclxuICAgIGVkaXRVc2VyUHJvZmlsZUVycm9yOiBudWxsLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLCAvL+2MlOuhnOybjCDroZzrk5wg7Iuc64+E7KSRXHJcbiAgICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLCAvL+2MlOuhnOyeiSDroZzrk5wg7Iuc64+E7KSRXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZUZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLCAvL+2MlOuhnOybjCDssKjri6gg7Iuc64+E7KSRXHJcbiAgICByZW1vdmVGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfUEhPVE9fUkVRVUVTVCA9ICdVUExPQURfUEhPVE9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfUEhPVE9fU1VDQ0VTUyA9ICdVUExPQURfUEhPVE9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfUEhPVE9fRkFJTFVSRSA9ICdVUExPQURfUEhPVE9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX1VTRVJfUkVRVUVTVCA9ICdTRUFSQ0hfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9VU0VSX1NVQ0NFU1MgPSAnU0VBUkNIX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfVVNFUl9GQUlMVVJFID0gJ1NFQVJDSF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0RPTkUgPSAnU0lHTl9VUF9ET05FJztcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX1VTRVJfUFJPRklMRV9SRVFVRVNUID0gJ0VESVRfVVNFUl9QUk9GSUxFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRURJVF9VU0VSX1BST0ZJTEVfU1VDQ0VTUyA9ICdFRElUX1VTRVJfUFJPRklMRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEVESVRfVVNFUl9QUk9GSUxFX0ZBSUxVUkUgPSAnRURJVF9VU0VSX1BST0ZJTEVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgIGNhc2UgVVBMT0FEX1BIT1RPX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUGhvdG9Mb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUGhvdG9Eb25lPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBob3RvRXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX1BIT1RPX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucGhvdG9QYXRoPWFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBob3RvTG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQaG90b0RvbmU9dHJ1ZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQaG90b0Vycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9QSE9UT19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBob3RvTG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQaG90b0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUGhvdG9FcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNFQVJDSF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxvYWRpbmc9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRG9uZT1mYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgU0VBUkNIX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zZWFyY2hVc2VyUmVzdWx0PWFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJEb25lPXRydWU7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoVXNlckVycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNFQVJDSF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoVXNlckRvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoVXNlckVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWU9YWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlckluZm89YWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhazsgICAgXHJcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZCA6IGFjdGlvbi5kYXRhLlVzZXJJZH0pO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KT0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCApO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTsgICAgXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBudWxsOyAgICBcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjsgXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0RPTkU6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBFRElUX1VTRVJfUFJPRklMRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRVc2VyUHJvZmlsZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRVc2VyUHJvZmlsZUVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5lZGl0VXNlclByb2ZpbGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEVESVRfVVNFUl9QUk9GSUxFX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUubmlja25hbWU9YWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgZHJhZnQubWUucGhvdG89YWN0aW9uLmRhdGEucGhvdG87XHJcbiAgICAgICAgZHJhZnQudXNlckluZm8ubmlja25hbWU9YWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgZHJhZnQudXNlckluZm8ucGhvdG89YWN0aW9uLmRhdGEucGhvdG87XHJcbiAgICAgICAgZHJhZnQuZWRpdFVzZXJQcm9maWxlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRVc2VyUHJvZmlsZUVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5lZGl0VXNlclByb2ZpbGVEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgRURJVF9VU0VSX1BST0ZJTEVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5lZGl0VXNlclByb2ZpbGVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFVzZXJQcm9maWxlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAvL2ZpbHRlcigp66mU7ISc65Oc64qUIOyjvOyWtOynhCDtlajsiJjsnZgg7YWM7Iqk7Yq466W8IO2GteqzvO2VmOuKlCDrqqjrk6Ag7JqU7IaM66W8IOuqqOyVhCDsg4jroZzsmrQg67Cw7Je066GcIOuwmO2ZmO2VnOuLpC5cclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodik9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExPQURfUk9PTV9SRVFVRVNULFxyXG4gICAgTE9BRF9ST09NX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1JPT01fRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9jaGF0JztcclxuXHJcbmZ1bmN0aW9uIGxvYWRSb29tQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9yb29tLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiBsb2FkUm9vbShhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRSb29tQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9ST09NX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9ST09NX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoTG9hZFJvb20oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUk9PTV9SRVFVRVNULCBsb2FkUm9vbSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICogY2hhdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUm9vbSlcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgY2hhdFNhZ2EgZnJvbSAnLi9jaGF0JztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgICAgIGZvcmsoY2hhdFNhZ2EpLFxyXG4gICAgXSk7XHJcbn0iLCIvL2ltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlLCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICAgIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgIExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiByZXR3ZWV0KGFjdGlvbikge1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dCgpOiByZWR1eCBzdG9yZeyXkCBkaXNwYXRjaO2VmOuKlCDsl63tlaBcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG59XHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGBwb3N0LyR7ZGF0YX0vdW5saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2RhdGEgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7IC8vIGRhdGEgPT0gdGV4dCBcclxuICAgIFxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogYWRkUG9zdChhY3Rpb24peyAvL2FjdGlvblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTsgLy9hY3Rpb24uZGF0YSA9PSB0ZXh0XHJcbiAgICAgICAgXHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3Bvc3QgcmVkdWNlcuyZgCB1c2VyIHJlZHVjZXJcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7IC8vYWN0aW9uLmRhdGEgPT0gcG9zdGlkXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTsgLy9mb3JtIGRhdGHripQg6re464yA66GcIOyghOyGoe2VtOyVvO2VqFxyXG59XHJcblxyXG5mdW5jdGlvbiAqIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FQSShkYXRhLCBsYXN0SWQpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyBcclxufVxyXG5cclxuZnVuY3Rpb24gKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uICogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5mdW5jdGlvbiAqIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uICogd2F0Y2hIYXNodGFnUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3RzKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAqIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hIYXNodGFnUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGFsbCwgZGVsYXksIGZvcmssIHRha2VMYXRlc3QsIHB1dCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgU0VBUkNIX1VTRVJfUkVRVUVTVCxcclxuICAgIFNFQVJDSF9VU0VSX1NVQ0NFU1MsXHJcbiAgICBTRUFSQ0hfVVNFUl9GQUlMVVJFLFxyXG4gICAgVVBMT0FEX1BIT1RPX1JFUVVFU1QsXHJcbiAgICBVUExPQURfUEhPVE9fU1VDQ0VTUyxcclxuICAgIFVQTE9BRF9QSE9UT19GQUlMVVJFLFxyXG4gICAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfSU5fUkVRVUVTVCxcclxuICAgIExPR19JTl9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBGT0xMT1dfUkVRVUVTVCxcclxuICAgIEZPTExPV19TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuICAgIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNULFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgRURJVF9VU0VSX1BST0ZJTEVfUkVRVUVTVCxcclxuICAgIEVESVRfVVNFUl9QUk9GSUxFX1NVQ0NFU1MsXHJcbiAgICBFRElUX1VTRVJfUFJPRklMRV9GQUlMVVJFLFxyXG4gIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRQaG90b0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9waG90bycsIGRhdGEpOyAvL2Zvcm0gZGF0YeuKlCDqt7jrjIDroZwg7KCE7Iah7ZW07JW87ZWoXHJcbn1cclxuXHJcbmZ1bmN0aW9uICogdXBsb2FkUGhvdG8oYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRQaG90b0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9QSE9UT19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9QSE9UT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaFVzZXJBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvc2VhcmNoLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiBzZWFyY2hVc2VyIChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWFyY2hVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbG9hZE15SW5mbyAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiAgbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuLy8vIGRlbGF5KCkgPT4gUHJvbWlzZSDqsIAg7ZWc67KIIHJlc29sdmUg65CY6rOgIOuCmOuptCwg66+465Ok7Juo7Ja064qUIFNhZ2Eg66W8IOuLpOyLnCDsnpHrj5nsi5ztgqTrqbTshJwsIOuLpOydjCB5aWVsZCDquYzsp4Ag7L2U65Oc66W8IOyLpO2Wie2VqeuLiOuLpC5cclxuZnVuY3Rpb24gKiBsb2dJbiAoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpOy8veyBlbWFpbCwgcGFzc3dvcmQgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSwgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qZXJyLnJlc3BvbnNlLmRhdGEgOiAgaHR0cHM6Ly94bi0teHkxYms1NmEucnVuL2F4aW9zL2d1aWRlL2Vycm9yLWhhbmRsaW5nLmh0bWwgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyL2ZvbGxvdy8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Rk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci91bmZvbGxvdy8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2Vyc0FQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvbG9hZEZvbGxvd2VycycpO1xyXG59XHJcbmZ1bmN0aW9uICogbG9hZEZvbGxvd2VycyhhY3Rpb24pe1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGxvYWRGb2xsb3dlcnNBUEkoKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9sb2FkRm9sbG93aW5ncycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIGxvYWRGb2xsb3dpbmdzKGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGxvYWRGb2xsb3dpbmdzQVBJKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiB9XHJcblxyXG5mdW5jdGlvbiBlZGl0VXNlclByb2ZpbGVBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9lZGl0VXNlclByb2ZpbGUnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiBlZGl0VXNlclByb2ZpbGUoYWN0aW9uKSB7IFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGVkaXRVc2VyUHJvZmlsZUFQSSwgYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRURJVF9VU0VSX1BST0ZJTEVfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBFRElUX1VTRVJfUFJPRklMRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci9yZW1vdmVGb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhLmlkKTsgLy8gcmVzdWx0LmRhdGEubmlja25hbWVcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaFVwbG9hZFBob3RvKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfUEhPVE9fUkVRVUVTVCwgdXBsb2FkUGhvdG8pO1xyXG59XHJcbmZ1bmN0aW9uICogd2F0Y2hTZWFyY2hVc2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTRUFSQ0hfVVNFUl9SRVFVRVNULCBzZWFyY2hVc2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaEVkaXRVc2VyUHJvZmlsZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRURJVF9VU0VSX1BST0ZJTEVfUkVRVUVTVCwgZWRpdFVzZXJQcm9maWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExvYWRVc2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoRm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiAqIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAqIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hVcGxvYWRQaG90byksXHJcbiAgICAgICAgZm9yayh3YXRjaFNlYXJjaFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICAgICAgZm9yayh3YXRjaEVkaXRVc2VyUHJvZmlsZSksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhcclxuICAgICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSxcclxuICAgICk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlc3BvbnNpdmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9