module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/message/[roomId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/io */ "./utils/io.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Chat.js";

/* eslint-disable */









const ChatWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "Chat__ChatWrapper",
  componentId: "sc-cmjb8i-0"
})(["max-width:50%;border:solid 1px #4C4C51;border-radius:5%;align-self:", ";padding:2%;margin:1% 0;word-wrap:break-word;"], ({
  sender
}) => sender === 'me' ? 'flex-end' : 'flex-start');

const Chat = ({
  roomId
}) => {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const {
    0: room,
    1: setRoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); //Input 입력 메세지

  const {
    0: messages,
    1: setMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); //채팅방 메세지 기록

  const chattingContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (roomId !== "main" && isLoading) {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].emit('loadRoom', {
        roomId: parseInt(roomId, 10),
        socketId: _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].id
      });
    }
  }, [roomId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].on('roomData', roomData => {
      setRoom(roomData);
      setMessages(roomData.Chats);
      setIsLoading(false);
    });
    return () => {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].off('roomData');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].on('newMessage', newChat => {
      console.log('new Message event on');
      setMessages(prev => {
        return [...prev, newChat];
      });
    });
    return () => {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].off('newMessage');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chattingContent.current && updateScroll();
  });

  const onChangeMessage = e => {
    setMessage(e.target.value);
  };

  const onClickSubmit = () => {
    if (message.length > 0) {
      console.log(`send ${message} to server`);
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].emit('sendMessage', {
        roomId: parseInt(roomId, 10),
        message,
        userId: me.id
      });
      setMessage('');
    }
  }; // 채팅창 밑부분부터 보여지게 scroll update 부분


  const updateScroll = () => {
    chattingContent.current.scrollTop = chattingContent.current.scrollHeight;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: roomId !== "main" ? isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
      spin: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 22
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        width: "100%",
        height: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          height: "50px",
          borderBottom: "solid thin #EFEEF5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
          children: room.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
          style: {
            color: "grey"
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 46
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "chatContainer",
        ref: chattingContent,
        style: {
          height: "calc(100% - 110px)",
          width: "100%",
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          paddingRight: '5%',
          paddingLeft: '5%'
        },
        children: messages && messages.map((m, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ChatWrapper, {
          sender: m.User.id === me.id ? "me" : "other",
          children: m.chat
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 48
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "input",
        style: {
          position: "absolute",
          height: "60px",
          width: "100%",
          left: '0',
          right: '0',
          bottom: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "solid thin #EFEEF5",
          backgroundColor: 'white'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          bordered: false,
          style: {
            width: "90%"
          },
          onChange: onChangeMessage,
          value: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 61
          }, undefined),
          size: "large",
          style: {
            marginRight: "5%"
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: "You don\u2019t have a message selected"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/CheckBox.js":
/*!********************************!*\
  !*** ./components/CheckBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\CheckBox.js";

/* eslint-disable */





const CheckBox = ({
  user,
  handleChange,
  label,
  value
}) => {
  //console.log(user);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        label: label,
        checked: value,
        onChange: handleChange,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start"
        },
        children: [user.photo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          src: `http://localhost:3065/profile/${user.photo}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 26
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          children: user.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, undefined), "\xA0", user.nickname, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: user.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

/***/ }),

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Room.module.css */ "./components/Room.module.css");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Room_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckBox */ "./components/CheckBox.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/io */ "./utils/io.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Room.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Room = ({
  height
}) => {
  // 서버사이드렌더링 - pre rendering 해야할 필요가 있을까?
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    searchUserResult,
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const {
    rooms
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.chat);
  const {
    0: visible,
    1: onChangeVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: groupChat,
    1: setGroupChat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const showModal = () => {
    onChangeVisible(true);
  };

  const handleCancel = () => {
    onChangeVisible(false);
  };

  const handleOk = () => {
    const users = [];
    Object.entries(groupChat).forEach(v => {
      if (v[1] === true) {
        users.push(v[0]);
      }
    });
    users.push(me.id.toString());
    _utils_io__WEBPACK_IMPORTED_MODULE_8__["socket"].emit('createRoomRequest', me.id, users);
    onChangeVisible(false);
    setGroupChat({});
  };

  const onSearch = e => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["SEARCH_USER_REQUEST"],
      data: e
    });
  };

  const handleChange = ({
    target: {
      label,
      checked
    }
  }) => {
    setGroupChat(_objectSpread(_objectSpread({}, groupChat), {}, {
      [label]: checked
    }));
  }; // 채팅방 클릭했을때 채팅방 load


  const onClickRoom = room => router.push(`/message/${room.id}`);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "messageTitle",
      style: {
        height: '50px',
        borderBottom: 'solid thin #EFEEF5',
        display: 'flex'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        style: {
          width: '600px',
          display: 'flex'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            flexGrow: '1'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
              style: {
                margin: '0'
              },
              children: "\xA0\xA0Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            flexGrow: '0'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "text",
              shape: "circle",
              onClick: showModal,
              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 76
              }, undefined),
              style: {
                margin: '0 15px'
              },
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
            visible: visible,
            title: "New Messages",
            onOk: handleOk,
            onCancel: handleCancel,
            bodyStyle: {
              height: '500px'
            },
            footer: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "primary",
              onClick: handleOk,
              children: "Next"
            }, "submit", false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, undefined)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              style: {
                display: 'flex',
                flexDirection: 'column'
              },
              children: searchUserResult.map(user => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: _Room_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.userList,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_CheckBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  user: user,
                  handleChange: handleChange,
                  label: user.id,
                  value: groupChat[user.id]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 19
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      id: "scrollableDiv",
      style: {
        height: height - 50,
        overflow: 'auto'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
        itemLayout: "vertical",
        dataSource: rooms,
        renderItem: item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _Room_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.roomList,
          onClick: () => onClickRoom(item),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item.Meta, {
              title: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, undefined), item.title]
          }, item.id, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ }),

/***/ "./components/Room.module.css":
/*!************************************!*\
  !*** ./components/Room.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userList": "Room_userList__1XOGy",
	"roomList": "Room_roomList__3J3HQ",
	"error": "Room_error__2rn0h"
};


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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\layout\\DesktopLayout.js";









const DesktopLayout = ({
  children,
  Side
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  /*
  const toTop = () => {
    router.push('/main');
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  */

  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOG_OUT_REQUEST"]
    });
  }, [_reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOG_OUT_REQUEST"]]);
  const onClickMessages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => router.push('/message/main'));
  const onClickProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => router.push(`/user/${me.id}`));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    style: {
      display: 'flex',
      height: '100%',
      width: '100%',
      margin: '0 auto'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        width: '20%',
        position: 'fixed',
        left: '0'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "text",
          shape: "round",
          style: {
            margin: '10px 0',
            paddingLeft: '0px',
            height: '50px',
            fontSize: '20px'
          },
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HomeOutlined"], {
            style: {
              color: '#2C2C2C'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 134
          }, undefined),
          children: "\xA0Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "text",
          shape: "round",
          style: {
            margin: '10px 0',
            paddingLeft: '0px',
            height: '50px',
            fontSize: '20px'
          },
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["GlobalOutlined"], {
            style: {
              color: '#2C2C2C'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 134
          }, undefined),
          children: "\xA0Explore"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "text",
          shape: "round",
          style: {
            margin: '10px 0',
            paddingLeft: '0px',
            height: '50px',
            fontSize: '20px'
          },
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MailOutlined"], {
            style: {
              color: '#2C2C2C'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 134
          }, undefined),
          onClick: onClickMessages,
          children: "\xA0Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "text",
          shape: "round",
          style: {
            margin: '10px 0',
            paddingLeft: '0px',
            height: '50px',
            fontSize: '20px'
          },
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["StarOutlined"], {
            style: {
              color: '#2C2C2C'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 134
          }, undefined),
          children: "\xA0Bookmarks"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "text",
          shape: "round",
          style: {
            margin: '10px 0',
            paddingLeft: '0px',
            height: '50px',
            fontSize: '20px'
          },
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
            style: {
              color: '#2C2C2C'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 134
          }, undefined),
          onClick: onClickProfile,
          children: "\xA0Profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "text",
          shape: "round",
          style: {
            margin: '10px 0',
            paddingLeft: '0px',
            height: '50px',
            fontSize: '20px'
          },
          onClick: onLogOut,
          children: "\xA0Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        paddingLeft: '20%',
        display: 'flex'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          height: '100%',
          width: '60%',
          borderRight: 'solid thin #EFEEF5',
          borderLeft: 'solid thin #EFEEF5'
        },
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          height: '100%',
          width: '40%'
        },
        children: Side
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

DesktopLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  Side: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DesktopLayout);

/***/ }),

/***/ "./hooks/chatHooks.js":
/*!****************************!*\
  !*** ./hooks/chatHooks.js ***!
  \****************************/
/*! exports provided: useJoinRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useJoinRoom", function() { return useJoinRoom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useJoinRoom = (socket, id) => {
  const requestJoin = () => {
    socket.emit('joinRoom', id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(requestJoin, []);
};
/*
export const useWantingRoom = (socket, userId, dispatch) => {
    const ms = useMemo(()=>socket, [socket]);

    const roomData = () => {
        ms.emit('roomListDataRequest', userId, (res) => {
            dispatch({
                type: UPDATE_ROOM_LIST,
                data: res.rooms
            });
        })

        ms.on('updateRoomList', (room)=>{
            const users = room.participants;

            users.forEach(u => {
                if (u.id === userId) {
                    dispatch({
                        type: UPDATE_ROOM_LIST,
                        data: [...rooms, room]
                    });
                }
            });
        });
    };

    useEffect(roomData, []);
};
*/

/***/ }),

/***/ "./pages/message/[roomId].js":
/*!***********************************!*\
  !*** ./pages/message/[roomId].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Room__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Room */ "./components/Room.js");
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/Chat */ "./components/Chat.js");
/* harmony import */ var _components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/layout/DesktopLayout */ "./components/layout/DesktopLayout.js");
/* harmony import */ var _reducers_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/chat */ "./reducers/chat.js");
/* harmony import */ var _hooks_chatHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/chatHooks */ "./hooks/chatHooks.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../utils/io */ "./utils/io.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\message\\[roomId].js";

/* eslint-disable */











const Message = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    roomId
  } = router.query;
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  Object(_hooks_chatHooks__WEBPACK_IMPORTED_MODULE_7__["useJoinRoom"])(_utils_io__WEBPACK_IMPORTED_MODULE_8__["socket"], me.id);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _utils_io__WEBPACK_IMPORTED_MODULE_8__["socket"].emit('roomListDataRequest', me.id, res => {
      dispatch({
        type: _reducers_chat__WEBPACK_IMPORTED_MODULE_6__["LOAD_ROOM_LIST"],
        data: res.rooms
      });
    });
    _utils_io__WEBPACK_IMPORTED_MODULE_8__["socket"].on('updateRoomList', room => {
      room.participants.forEach(u => {
        if (u.id === me.id) {
          dispatch({
            type: _reducers_chat__WEBPACK_IMPORTED_MODULE_6__["UPDATE_ROOM_LIST"],
            data: room
          });
        }
      });
    });
    return () => {
      _utils_io__WEBPACK_IMPORTED_MODULE_8__["socket"].off('updateRoomList');
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Room__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 30
    }, undefined),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Chat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      roomId: roomId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Message);

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

/***/ "./utils/io.js":
/*!*********************!*\
  !*** ./utils/io.js ***!
  \*********************/
/*! exports provided: socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socket", function() { return socket; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);

const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"].connect('http://localhost:3065', {
  path: '/socket.io',
  withCredentials: true
});

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

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hlY2tCb3guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0Rlc2t0b3BMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvY2hhdEhvb2tzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21lc3NhZ2UvW3Jvb21JZF0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvY2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2lvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNoYXRXcmFwcGVyIiwic3R5bGVkIiwiZGl2Iiwic2VuZGVyIiwiQ2hhdCIsInJvb21JZCIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJyb29tIiwic2V0Um9vbSIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY2hhdHRpbmdDb250ZW50IiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic29ja2V0IiwiZW1pdCIsInBhcnNlSW50Iiwic29ja2V0SWQiLCJpZCIsIm9uIiwicm9vbURhdGEiLCJDaGF0cyIsIm9mZiIsIm5ld0NoYXQiLCJjb25zb2xlIiwibG9nIiwicHJldiIsImN1cnJlbnQiLCJ1cGRhdGVTY3JvbGwiLCJvbkNoYW5nZU1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrU3VibWl0IiwibGVuZ3RoIiwidXNlcklkIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJCb3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGl0bGUiLCJjb2xvciIsInBhcnRpY2lwYW50cyIsIm92ZXJmbG93IiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWFwIiwibSIsImkiLCJVc2VyIiwiY2hhdCIsInBvc2l0aW9uIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYm9yZGVyVG9wIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luUmlnaHQiLCJDaGVja0JveCIsImhhbmRsZUNoYW5nZSIsImxhYmVsIiwicGhvdG8iLCJuaWNrbmFtZSIsImVtYWlsIiwiUm9vbSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWFyY2hVc2VyUmVzdWx0Iiwicm9vbXMiLCJ2aXNpYmxlIiwib25DaGFuZ2VWaXNpYmxlIiwiZ3JvdXBDaGF0Iiwic2V0R3JvdXBDaGF0Iiwic2hvd01vZGFsIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlT2siLCJ1c2VycyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwidiIsInB1c2giLCJ0b1N0cmluZyIsIm9uU2VhcmNoIiwidHlwZSIsIlNFQVJDSF9VU0VSX1JFUVVFU1QiLCJkYXRhIiwiY2hlY2tlZCIsIm9uQ2xpY2tSb29tIiwiZmxleEdyb3ciLCJtYXJnaW4iLCJzdHlsZXMiLCJ1c2VyTGlzdCIsIml0ZW0iLCJyb29tTGlzdCIsIkRlc2t0b3BMYXlvdXQiLCJjaGlsZHJlbiIsIlNpZGUiLCJvbkxvZ091dCIsInVzZUNhbGxiYWNrIiwiTE9HX09VVF9SRVFVRVNUIiwib25DbGlja01lc3NhZ2VzIiwib25DbGlja1Byb2ZpbGUiLCJhbGlnbkNvbnRlbnQiLCJmb250U2l6ZSIsImJvcmRlclJpZ2h0IiwiYm9yZGVyTGVmdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiZWxlbWVudCIsInVzZUpvaW5Sb29tIiwicmVxdWVzdEpvaW4iLCJNZXNzYWdlIiwicXVlcnkiLCJyZXMiLCJMT0FEX1JPT01fTElTVCIsInUiLCJVUERBVEVfUk9PTV9MSVNUIiwiaW5pdGlhbFN0YXRlIiwibG9hZFJvb21Mb2FkaW5nIiwibG9hZFJvb21Eb25lIiwibG9hZFJvb21FcnJvciIsIkxPQURfUk9PTV9SRVFVRVNUIiwiTE9BRF9ST09NX1NVQ0NFU1MiLCJMT0FEX1JPT01fRkFJTFVSRSIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciIsInNlYXJjaFVzZXJMb2FkaW5nIiwic2VhcmNoVXNlckRvbmUiLCJzZWFyY2hVc2VyRXJyb3IiLCJ1cGxvYWRQaG90b0xvYWRpbmciLCJ1cGxvYWRQaG90b0RvbmUiLCJ1cGxvYWRQaG90b0Vycm9yIiwicGhvdG9QYXRoIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImVkaXRVc2VyUHJvZmlsZUxvYWRpbmciLCJlZGl0VXNlclByb2ZpbGVEb25lIiwiZWRpdFVzZXJQcm9maWxlRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsInJlbW92ZUZvbGxvd2Vyc0xvYWRpbmciLCJyZW1vdmVGb2xsb3dlcnNEb25lIiwicmVtb3ZlRm9sbG93ZXJzRXJyb3IiLCJ1c2VySW5mbyIsIlVQTE9BRF9QSE9UT19SRVFVRVNUIiwiVVBMT0FEX1BIT1RPX1NVQ0NFU1MiLCJVUExPQURfUEhPVE9fRkFJTFVSRSIsIlNFQVJDSF9VU0VSX1NVQ0NFU1MiLCJTRUFSQ0hfVVNFUl9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9VUF9ET05FIiwiRURJVF9VU0VSX1BST0ZJTEVfUkVRVUVTVCIsIkVESVRfVVNFUl9QUk9GSUxFX1NVQ0NFU1MiLCJFRElUX1VTRVJfUFJPRklMRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIkZvbGxvd2luZ3MiLCJVc2VySWQiLCJmaWx0ZXIiLCJGb2xsb3dlcnMiLCJQb3N0cyIsInVuc2hpZnQiLCJwb3N0SWQiLCJpbyIsImNvbm5lY3QiLCJwYXRoIiwid2l0aENyZWRlbnRpYWxzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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cUgsTUFBTSxDQUFDMUMsSUFBUCxDQUFZcUksTUFBbEQsQ0FBakI7QUFDQTs7QUFDRjtBQUNFO0FBbk5KO0FBcU5ELENBdE53RCxDQUF6RDs7QUF3TmU1RixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNqVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU14SCxNQUFNLEdBQUdxTixtREFBRSxDQUFDQyxPQUFILENBQVcsdUJBQVgsRUFBb0M7QUFDeERDLE1BQUksRUFBRSxZQURrRDtBQUV4REMsaUJBQWUsRUFBRTtBQUZ1QyxDQUFwQyxDQUFmLEM7Ozs7Ozs7Ozs7O0FDRlAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvbWVzc2FnZS9bcm9vbUlkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbWVzc2FnZS9bcm9vbUlkXS5qc1wiKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQXJyb3dVcE91dGxpbmVkLCBMb2FkaW5nT3V0bGluZWQsIFVzZXJBZGRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNvY2tldCB9IGZyb20gJy4uL3V0aWxzL2lvJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDaGF0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDogNTAlO1xyXG5ib3JkZXI6IHNvbGlkIDFweCAjNEM0QzUxO1xyXG5ib3JkZXItcmFkaXVzOiA1JTtcclxuYWxpZ24tc2VsZjogJHsoe3NlbmRlcn0pID0+IHNlbmRlcj09PSdtZSc/J2ZsZXgtZW5kJzonZmxleC1zdGFydCd9O1xyXG5wYWRkaW5nOiAyJTtcclxubWFyZ2luOiAxJSAwO1xyXG53b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbmA7XHJcblxyXG5jb25zdCBDaGF0ID0gKHsgcm9vbUlkIH0pID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgW3Jvb20sIHNldFJvb21dID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7IC8vSW5wdXQg7J6F66ClIOuplOyEuOyngFxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8v7LGE7YyF67CpIOuplOyEuOyngCDquLDroZ1cclxuICAgIGNvbnN0IGNoYXR0aW5nQ29udGVudCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAocm9vbUlkICE9PSBcIm1haW5cIiAmJiBpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xvYWRSb29tJywge1xyXG4gICAgICAgICAgICAgICAgcm9vbUlkIDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRJZCA6IHNvY2tldC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Jvb21JZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNvY2tldC5vbigncm9vbURhdGEnLCAocm9vbURhdGEpPT57XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFJvb20ocm9vbURhdGEpO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhyb29tRGF0YS5DaGF0cyk7XHJcblxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub2ZmKCdyb29tRGF0YScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKCduZXdNZXNzYWdlJywgKG5ld0NoYXQpID0+IHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IE1lc3NhZ2UgZXZlbnQgb24nKTtcclxuICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldik9PiB7IHJldHVybiBbLi4ucHJldiwgbmV3Q2hhdF19KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9mZignbmV3TWVzc2FnZScpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG5cclxuICAgICAgICBjaGF0dGluZ0NvbnRlbnQuY3VycmVudCAmJiB1cGRhdGVTY3JvbGwoKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZW5kICR7bWVzc2FnZX0gdG8gc2VydmVyYCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB7XHJcbiAgICAgICAgICAgICAgICByb29tSWQgOiBwYXJzZUludChyb29tSWQsIDEwKSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IG1lLmlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDssYTtjIXssL0g67CR67aA67aE67aA7YSwIOuztOyXrOyngOqyjCBzY3JvbGwgdXBkYXRlIOu2gOu2hFxyXG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodDtcclxuICAgIH0gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyByb29tSWQgIT09IFwibWFpblwiID8gXHJcbiAgICAgICAgaXNMb2FkaW5nID8gIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPiA6IFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiNTBweFwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjRUZFRUY1XCIsIGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICA8aDI+e3Jvb20udGl0bGV9PC9oMj4mbmJzcDsmbmJzcDs8aDIgc3R5bGU9e3tjb2xvcjogXCJncmV5XCJ9fT57cm9vbS5wYXJ0aWNpcGFudHMubGVuZ3RofTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0Q29udGFpbmVyXCIgcmVmPXtjaGF0dGluZ0NvbnRlbnR9IHN0eWxlPXt7IGhlaWdodDpcImNhbGMoMTAwJSAtIDExMHB4KVwiLCB3aWR0aDpcIjEwMCVcIiwgb3ZlcmZsb3c6J2F1dG8nLCBkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHBhZGRpbmdSaWdodDogJzUlJywgcGFkZGluZ0xlZnQ6JzUlJ319PlxyXG4gICAgICAgICAgICB7IG1lc3NhZ2VzICYmIG1lc3NhZ2VzLm1hcCgobSwgaSk9PjxDaGF0V3JhcHBlciBrZXk9e2l9IHNlbmRlcj17bS5Vc2VyLmlkID09PSBtZS5pZD8gXCJtZVwiIDogXCJvdGhlclwifT57bS5jaGF0fTwvQ2hhdFdyYXBwZXI+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCIgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIGhlaWdodDpcIjYwcHhcIiwgd2lkdGg6XCIxMDAlXCIsbGVmdDonMCcsIHJpZ2h0OicwJywgYm90dG9tOlwiMFwiLCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIiwgYm9yZGVyVG9wOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGJvcmRlcmVkPXtmYWxzZX0gc3R5bGU9e3t3aWR0aDpcIjkwJVwifX0gb25DaGFuZ2U9e29uQ2hhbmdlTWVzc2FnZX0gdmFsdWU9e21lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cImNpcmNsZVwiIGljb249ezxBcnJvd1VwT3V0bGluZWQgLz59IHNpemU9XCJsYXJnZVwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiNSVcIn19IG9uQ2xpY2s9e29uQ2xpY2tTdWJtaXR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDogIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCIsIH19PlxyXG4gICAgICAgIDxkaXY+WW91IGRvbuKAmXQgaGF2ZSBhIG1lc3NhZ2Ugc2VsZWN0ZWQ8L2Rpdj5cclxuICAgICAgICA8ZGl2PkNob29zZSBvbmUgZnJvbSB5b3VyIGV4aXN0aW5nIG1lc3NhZ2VzLCBvciBzdGFydCBhIG5ldyBvbmUuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hlY2tib3gsIEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgQ2hlY2tCb3ggPSAoeyB1c2VyLCBoYW5kbGVDaGFuZ2UsIGxhYmVsLCB2YWx1ZSB9KSA9PiB7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh1c2VyKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgY2hlY2tlZD17dmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwifX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1c2VyLnBob3RvPyA8QXZhdGFyIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7dXNlci5waG90b31gfSAvPiA6XHJcbiAgICAgICAgICAgIDxBdmF0YXI+e3VzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAmbmJzcDt7dXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3VzZXIuZW1haWx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja0JveDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIExpc3QsIE1vZGFsLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNFQVJDSF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Jvb20ubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSAnLi9DaGVja0JveCc7XHJcblxyXG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tICcuLi91dGlscy9pbyc7XHJcblxyXG5jb25zdCBSb29tID0gKHsgaGVpZ2h0IH0pID0+IHtcclxuICAvLyDshJzrsoTsgqzsnbTrk5zroIzrjZTrp4EgLSBwcmUgcmVuZGVyaW5nIO2VtOyVvO2VoCDtlYTsmpTqsIAg7J6I7J2E6rmMP1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHNlYXJjaFVzZXJSZXN1bHQsIG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgcm9vbXMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2hhdCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIG9uQ2hhbmdlVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2dyb3VwQ2hhdCwgc2V0R3JvdXBDaGF0XSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgb25DaGFuZ2VWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIG9uQ2hhbmdlVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VycyA9IFtdO1xyXG4gICAgT2JqZWN0LmVudHJpZXMoZ3JvdXBDaGF0KS5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgIGlmICh2WzFdID09PSB0cnVlKSB7XHJcbiAgICAgICAgdXNlcnMucHVzaCh2WzBdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB1c2Vycy5wdXNoKG1lLmlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHNvY2tldC5lbWl0KCdjcmVhdGVSb29tUmVxdWVzdCcsIG1lLmlkLCB1c2Vycyk7XHJcbiAgICBvbkNoYW5nZVZpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0R3JvdXBDaGF0KHt9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGUsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldDogeyBsYWJlbCwgY2hlY2tlZCB9IH0pID0+IHtcclxuICAgIHNldEdyb3VwQ2hhdCh7IC4uLmdyb3VwQ2hhdCwgW2xhYmVsXTogY2hlY2tlZCB9KTtcclxuICB9O1xyXG5cclxuICAvLyDssYTtjIXrsKkg7YG066at7ZaI7J2E65WMIOyxhO2MheuwqSBsb2FkXHJcbiAgY29uc3Qgb25DbGlja1Jvb20gPSAocm9vbSkgPT4gcm91dGVyLnB1c2goYC9tZXNzYWdlLyR7cm9vbS5pZH1gKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVRpdGxlXCIgc3R5bGU9e3sgaGVpZ2h0OiAnNTBweCcsIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gI0VGRUVGNScsIGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNjAwcHgnLCBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGZsZXhHcm93OiAnMScgfX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpbjogJzAnIH19PiZuYnNwOyZuYnNwO01lc3NhZ2VzPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZmxleEdyb3c6ICcwJyB9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBvbkNsaWNrPXtzaG93TW9kYWx9IGljb249ezxQbHVzT3V0bGluZWQgLz59IHN0eWxlPXt7IG1hcmdpbjogJzAgMTVweCcgfX0gc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgTWVzc2FnZXNcIlxyXG4gICAgICAgICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgICAgICAgYm9keVN0eWxlPXt7IGhlaWdodDogJzUwMHB4JyB9fVxyXG4gICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJzdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZU9rfT5cclxuICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFBlb3BsZVwiIG9uU2VhcmNoPXtvblNlYXJjaH0gYm9yZGVyZWQ9e2ZhbHNlfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XHJcbiAgICAgICAgICAgICAgICB7c2VhcmNoVXNlclJlc3VsdC5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dXNlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtncm91cENoYXRbdXNlci5pZF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwic2Nyb2xsYWJsZURpdlwiIHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0IC0gNTAsIG92ZXJmbG93OiAnYXV0bycgfX0+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBkYXRhU291cmNlPXtyb29tc31cclxuICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vbUxpc3R9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tSb29tKGl0ZW0pfT5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb207XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVzZXJMaXN0XCI6IFwiUm9vbV91c2VyTGlzdF9fMVhPR3lcIixcblx0XCJyb29tTGlzdFwiOiBcIlJvb21fcm9vbUxpc3RfXzNKM0hRXCIsXG5cdFwiZXJyb3JcIjogXCJSb29tX2Vycm9yX18ycm4waFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFN0YXJPdXRsaW5lZCwgTWFpbE91dGxpbmVkLCBVc2VyT3V0bGluZWQsIEdsb2JhbE91dGxpbmVkLCBIb21lT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IExPR19PVVRfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRGVza3RvcExheW91dCA9ICh7IGNoaWxkcmVuLCBTaWRlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgLypcclxuICBjb25zdCB0b1RvcCA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvbWFpbicpO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogJ2F1dG8nIH0pO1xyXG4gIH07XHJcbiAgKi9cclxuXHJcbiAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtMT0dfT1VUX1JFUVVFU1RdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja01lc3NhZ2VzID0gdXNlQ2FsbGJhY2soKCkgPT4gcm91dGVyLnB1c2goJy9tZXNzYWdlL21haW4nKSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tQcm9maWxlID0gdXNlQ2FsbGJhY2soKCkgPT4gcm91dGVyLnB1c2goYC91c2VyLyR7bWUuaWR9YCkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnLCBtYXJnaW46ICcwIGF1dG8nIH19PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjAlJywgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6ICcwJyB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduQ29udGVudDogJ2ZsZXgtc3RhcnQnIH19PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAnLCBwYWRkaW5nTGVmdDogJzBweCcsIGhlaWdodDogJzUwcHgnLCBmb250U2l6ZTogJzIwcHgnIH19IGljb249ezxIb21lT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMkMyQzJDJyB9fSAvPn0+Jm5ic3A7SG9tZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAnLCBwYWRkaW5nTGVmdDogJzBweCcsIGhlaWdodDogJzUwcHgnLCBmb250U2l6ZTogJzIwcHgnIH19IGljb249ezxHbG9iYWxPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMyQzJDMkMnIH19IC8+fT4mbmJzcDtFeHBsb3JlPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCcsIHBhZGRpbmdMZWZ0OiAnMHB4JywgaGVpZ2h0OiAnNTBweCcsIGZvbnRTaXplOiAnMjBweCcgfX0gaWNvbj17PE1haWxPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMyQzJDMkMnIH19IC8+fSBvbkNsaWNrPXtvbkNsaWNrTWVzc2FnZXN9PiZuYnNwO01lc3NhZ2U8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJywgcGFkZGluZ0xlZnQ6ICcwcHgnLCBoZWlnaHQ6ICc1MHB4JywgZm9udFNpemU6ICcyMHB4JyB9fSBpY29uPXs8U3Rhck91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzJDMkMyQycgfX0gLz59PiZuYnNwO0Jvb2ttYXJrczwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAnLCBwYWRkaW5nTGVmdDogJzBweCcsIGhlaWdodDogJzUwcHgnLCBmb250U2l6ZTogJzIwcHgnIH19IGljb249ezxVc2VyT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMkMyQzJDJyB9fSAvPn0gb25DbGljaz17b25DbGlja1Byb2ZpbGV9PiZuYnNwO1Byb2ZpbGU8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJywgcGFkZGluZ0xlZnQ6ICcwcHgnLCBoZWlnaHQ6ICc1MHB4JywgZm9udFNpemU6ICcyMHB4JyB9fSBvbkNsaWNrPXtvbkxvZ091dH0+Jm5ic3A7TG9nb3V0PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMjAlJywgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnNjAlJywgYm9yZGVyUmlnaHQ6ICdzb2xpZCB0aGluICNFRkVFRjUnLCBib3JkZXJMZWZ0OiAnc29saWQgdGhpbiAjRUZFRUY1JyB9fT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzQwJScgfX0+XHJcbiAgICAgICAgICB7U2lkZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuRGVza3RvcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgU2lkZTogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BMYXlvdXQ7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VKb2luUm9vbSA9IChzb2NrZXQsIGlkKSA9PiB7XHJcbiAgY29uc3QgcmVxdWVzdEpvaW4gPSAoKSA9PiB7XHJcbiAgICBzb2NrZXQuZW1pdCgnam9pblJvb20nLCBpZCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KHJlcXVlc3RKb2luLCBbXSk7XHJcbn07XHJcblxyXG4vKlxyXG5leHBvcnQgY29uc3QgdXNlV2FudGluZ1Jvb20gPSAoc29ja2V0LCB1c2VySWQsIGRpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCBtcyA9IHVzZU1lbW8oKCk9PnNvY2tldCwgW3NvY2tldF0pO1xyXG5cclxuICAgIGNvbnN0IHJvb21EYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIG1zLmVtaXQoJ3Jvb21MaXN0RGF0YVJlcXVlc3QnLCB1c2VySWQsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVVBEQVRFX1JPT01fTElTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlcy5yb29tc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtcy5vbigndXBkYXRlUm9vbUxpc3QnLCAocm9vbSk9PntcclxuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSByb29tLnBhcnRpY2lwYW50cztcclxuXHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2godSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodS5pZCA9PT0gdXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEVfUk9PTV9MSVNULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbLi4ucm9vbXMsIHJvb21dXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3Qocm9vbURhdGEsIFtdKTtcclxufTtcclxuKi9cclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb29tIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9Sb29tJztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL0NoYXQnO1xyXG5pbXBvcnQgRGVza3RvcExheW91dCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0Rlc2t0b3BMYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgTE9BRF9ST09NX0xJU1QsIFVQREFURV9ST09NX0xJU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9jaGF0JztcclxuaW1wb3J0IHsgdXNlSm9pblJvb20gfSBmcm9tICcuLi8uLi9ob29rcy9jaGF0SG9va3MnO1xyXG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2lvJztcclxuXHJcbmNvbnN0IE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcm9vbUlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIHVzZUpvaW5Sb29tKHNvY2tldCwgbWUuaWQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNvY2tldC5lbWl0KCdyb29tTGlzdERhdGFSZXF1ZXN0JywgbWUuaWQsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9BRF9ST09NX0xJU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXMucm9vbXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbigndXBkYXRlUm9vbUxpc3QnLCAocm9vbSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcm9vbS5wYXJ0aWNpcGFudHMuZm9yRWFjaCh1ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1LmlkID09PSBtZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVVBEQVRFX1JPT01fTElTVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcm9vbVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9mZigndXBkYXRlUm9vbUxpc3QnKTtcclxuICAgICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxEZXNrdG9wTGF5b3V0IFNpZGU9ezxSb29tLz59PlxyXG4gICAgICAgICAgICA8Q2hhdCByb29tSWQ9e3Jvb21JZH0gLz5cclxuICAgICAgICA8L0Rlc2t0b3BMYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZFJvb21Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUm9vbURvbmU6IGZhbHNlLFxyXG4gIGxvYWRSb29tRXJyb3I6IG51bGwsXHJcbiAgcm9vbXM6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9ST09NX0xJU1QgPSAnVVBEQVRFX1JPT01fTElTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JPT01fTElTVCA9ICdMT0FEX1JPT01fTElTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JPT01fUkVRVUVTVCA9ICdMT0FEX1JPT01fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JPT01fU1VDQ0VTUyA9ICdMT0FEX1JPT01fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JPT01fRkFJTFVSRSA9ICdMT0FEX1JPT01fRkFJTFVSRSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVVBEQVRFX1JPT01fTElTVDoge1xyXG4gICAgICAvLyBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgLy8gZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQgOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgZHJhZnQucm9vbXMucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX1JPT01fTElTVDoge1xyXG4gICAgICBkcmFmdC5yb29tcyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9ST09NX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQubG9hZFJvb21Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFJvb21Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRSb29tRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9ST09NX1NVQ0NFU1M6IHtcclxuICAgICAgLy8gZHJhZnQucm9vbXM9YWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRSb29tTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUm9vbURvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUm9vbUVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfUk9PTV9GQUlMVVJFOiB7XHJcbiAgICAgIGRyYWZ0LmxvYWRSb29tTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUm9vbURvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFJvb21FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiLy8gaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBzZWFyY2hVc2VyTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rKA7IOJIOyLnOuPhOykkVxyXG4gIHNlYXJjaFVzZXJEb25lOiBmYWxzZSxcclxuICBzZWFyY2hVc2VyRXJyb3I6IG51bGwsXHJcbiAgc2VhcmNoVXNlclJlc3VsdDogW10sXHJcbiAgdXBsb2FkUGhvdG9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIO2UhOuhnO2VhOyCrOynhCDsl4XroZzrk5wg7Iuc64+E7KSRXHJcbiAgdXBsb2FkUGhvdG9Eb25lOiBmYWxzZSxcclxuICB1cGxvYWRQaG90b0Vycm9yOiBudWxsLFxyXG4gIHBob3RvUGF0aDogbnVsbCxcclxuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBlZGl0VXNlclByb2ZpbGVMb2FkaW5nOiBmYWxzZSwgLy8g7IKs7Jqp7J6QIO2UhOuhnO2VhCDsiJjsoJUg7Iuc64+E7KSRXHJcbiAgZWRpdFVzZXJQcm9maWxlRG9uZTogZmFsc2UsXHJcbiAgZWRpdFVzZXJQcm9maWxlRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4wg66Gc65OcIOyLnOuPhOykkVxyXG4gIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7J6JIOuhnOuTnCDsi5zrj4TspJFcclxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDssKjri6gg7Iuc64+E7KSRXHJcbiAgcmVtb3ZlRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgdXNlckluZm86IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BIT1RPX1JFUVVFU1QgPSAnVVBMT0FEX1BIT1RPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BIT1RPX1NVQ0NFU1MgPSAnVVBMT0FEX1BIT1RPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BIT1RPX0ZBSUxVUkUgPSAnVVBMT0FEX1BIT1RPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9VU0VSX1JFUVVFU1QgPSAnU0VBUkNIX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfVVNFUl9TVUNDRVNTID0gJ1NFQVJDSF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1VTRVJfRkFJTFVSRSA9ICdTRUFSQ0hfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9ET05FID0gJ1NJR05fVVBfRE9ORSc7XHJcblxyXG5leHBvcnQgY29uc3QgRURJVF9VU0VSX1BST0ZJTEVfUkVRVUVTVCA9ICdFRElUX1VTRVJfUFJPRklMRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEVESVRfVVNFUl9QUk9GSUxFX1NVQ0NFU1MgPSAnRURJVF9VU0VSX1BST0ZJTEVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBFRElUX1VTRVJfUFJPRklMRV9GQUlMVVJFID0gJ0VESVRfVVNFUl9QUk9GSUxFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFVQTE9BRF9QSE9UT19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51cGxvYWRQaG90b0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRQaG90b0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkUGhvdG9FcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfUEhPVE9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucGhvdG9QYXRoID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBob3RvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRQaG90b0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRQaG90b0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9QSE9UT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cGxvYWRQaG90b0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkUGhvdG9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBob3RvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTRUFSQ0hfVVNFUl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zZWFyY2hVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTRUFSQ0hfVVNFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zZWFyY2hVc2VyUmVzdWx0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2VhcmNoVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNFQVJDSF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRE9ORTpcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRURJVF9VU0VSX1BST0ZJTEVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZWRpdFVzZXJQcm9maWxlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmVkaXRVc2VyUHJvZmlsZUVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuZWRpdFVzZXJQcm9maWxlRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRURJVF9VU0VSX1BST0ZJTEVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgZHJhZnQubWUucGhvdG8gPSBhY3Rpb24uZGF0YS5waG90bztcclxuICAgICAgZHJhZnQudXNlckluZm8ubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgZHJhZnQudXNlckluZm8ucGhvdG8gPSBhY3Rpb24uZGF0YS5waG90bztcclxuICAgICAgZHJhZnQuZWRpdFVzZXJQcm9maWxlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5lZGl0VXNlclByb2ZpbGVFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmVkaXRVc2VyUHJvZmlsZURvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRURJVF9VU0VSX1BST0ZJTEVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZWRpdFVzZXJQcm9maWxlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5lZGl0VXNlclByb2ZpbGVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIC8vIGZpbHRlcigp66mU7ISc65Oc64qUIOyjvOyWtOynhCDtlajsiJjsnZgg7YWM7Iqk7Yq466W8IO2GteqzvO2VmOuKlCDrqqjrk6Ag7JqU7IaM66W8IOuqqOyVhCDsg4jroZzsmrQg67Cw7Je066GcIOuwmO2ZmO2VnOuLpC5cclxuICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdDozMDY1Jywge1xyXG4gIHBhdGg6ICcvc29ja2V0LmlvJyxcclxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=