webpackHotUpdate_N_E("pages/message/[roomId]",{

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/io */ "./utils/io.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Chat.js",
    _this = undefined,
    _s = $RefreshSig$();

/* eslint-disable */









var Chat = function Chat(_ref) {
  _s();

  var roomId = _ref.roomId;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      room = _useState[0],
      setRoom = _useState[1]; //왜 다른 페이지인데 안바뀌냐?


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState3[0],
      setMessage = _useState3[1]; //입력 메세지


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      messages = _useState4[0],
      setMessages = _useState4[1]; //채팅방 메세지 기록


  var chattingContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  console.log(chattingContent); //dynamic page parameter 바뀔때마다 rerendering된다. 

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (roomId !== "main" && isLoading) {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].emit('loadRoom', {
        roomId: parseInt(roomId, 10),
        socketId: _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].id
      });
    }
  }, [roomId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].on('roomData', function (roomData) {
      /*
      setRoom(room => ({...room,
      Chats: _.cloneDeep(roomData.Chats),
      User: _.cloneDeep(roomData.User),
      UserId: roomData.UserId,
      createdAt: roomData.createdAt,
      id : roomData.id,
      max: roomData.max,
      participants: _.cloneDeep(roomData.participants),
      title: roomData.title,
      updatedAt: roomData.updatedAt
      }));
      */
      setRoom(roomData);
      setMessages(roomData.Chats);
      /*
      setRoom({...room, roomData});
      const chats = roomData.Chats;
      setMessages({...messages, chats});
      */

      setIsLoading(false);
    });
    return function () {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].off('roomData');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].on('newMessage', function (fullChats) {
      /* fullChats
      [{
          id: 29,
          chat: '2시 9분',
          createdAt: 2022-01-27T05:09:02.000Z,
          updatedAt: 2022-01-27T05:09:02.000Z,
          UserId: 3,
          RoomId: 74
        },]
      */
      setMessages(fullChats);
    });
    return function () {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].off('newMessage');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (chattingContent.current) {
      updateScroll();
    }
  }, []);

  var onChangeMessage = function onChangeMessage(e) {
    setMessage(e.target.value);
  };

  var onClickSubmit = function onClickSubmit() {
    if (message.length > 0) {
      console.log("send ".concat(message, " to server"));
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].emit('sendMessage', {
        roomId: parseInt(roomId, 10),
        message: message,
        userId: me.id
      });
      setMessage('');
    }
  };

  var updateScroll = function updateScroll() {
    chattingContent.current.scrollTop = chattingContent.current.scrollHeight;
  }; ///처음 채팅방을 눌렀을때, 챗이 왔을때 ? 고민좀


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: roomId !== "main" ? isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
      spin: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 22
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        width: "100%",
        height: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          height: "50px",
          borderBottom: "solid thin #EFEEF5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          children: room.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          style: {
            color: "grey"
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 46
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "chatContainer",
        ref: chattingContent,
        style: {
          height: "calc(100% - 110px)",
          width: "100%",
          overflow: 'auto'
        },
        children: messages && messages.map(function (m) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            style: {
              height: "30px"
            },
            children: m.chat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 45
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          bordered: false,
          style: {
            width: "90%"
          },
          onChange: onChangeMessage,
          value: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 61
          }, _this),
          size: "large",
          style: {
            marginRight: "5%"
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "You don\u2019t have a message selected"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Chat, "Qv6TZipqdBpoe8pZ/oz0dDdLM/k=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = Chat;
/* harmony default export */ __webpack_exports__["default"] = (Chat);
/*
<div>
        <h1>You don’t have a message selected</h1>
        <br />
        <p>Choose one from your existing messages, or start a new one.</p>
        </div>
 */

var _c;

$RefreshReg$(_c, "Chat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm5hbWVzIjpbIkNoYXQiLCJyb29tSWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJyb29tIiwic2V0Um9vbSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNoYXR0aW5nQ29udGVudCIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzb2NrZXQiLCJlbWl0IiwicGFyc2VJbnQiLCJzb2NrZXRJZCIsImlkIiwib24iLCJyb29tRGF0YSIsIkNoYXRzIiwib2ZmIiwiZnVsbENoYXRzIiwiY3VycmVudCIsInVwZGF0ZVNjcm9sbCIsIm9uQ2hhbmdlTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2tTdWJtaXQiLCJsZW5ndGgiLCJ1c2VySWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0aXRsZSIsImNvbG9yIiwicGFydGljaXBhbnRzIiwib3ZlcmZsb3ciLCJtYXAiLCJtIiwiY2hhdCIsInBvc2l0aW9uIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYm9yZGVyVG9wIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luUmlnaHQiLCJmbGV4RGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxxQkFDVkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FB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O0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkUsZ0JBa0JGO0FBQUssV0FBSyxFQUFFO0FBQUNRLGVBQU8sRUFBQyxNQUFUO0FBQWlCaUIscUJBQWEsRUFBRSxRQUFoQztBQUEwQ2Ysc0JBQWMsRUFBQyxRQUF6RDtBQUFtRUQsa0JBQVUsRUFBQyxRQUE5RTtBQUF3RkosYUFBSyxFQUFDLE1BQTlGO0FBQXNHQyxjQUFNLEVBQUM7QUFBN0csT0FBWjtBQUFBLDhCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CQSxtQkFESjtBQTBCSCxDQXBJRDs7R0FBTTFDLEk7VUFDYUUsdUQ7OztLQURiRixJO0FBc0lTQSxtRUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW3Jvb21JZF0uMzk4MzdhM2M1NjQ1OTUyM2QyMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQXJyb3dVcE91dGxpbmVkLCBMb2FkaW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tICcuLi91dGlscy9pbyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBDaGF0ID0gKHsgcm9vbUlkIH0pID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgW3Jvb20sIHNldFJvb21dID0gdXNlU3RhdGUoe30pOyAvL+yZnCDri6Trpbgg7Y6Y7J207KeA7J24642wIOyViOuwlOuAjOuDkD9cclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTsgLy/snoXroKUg66mU7IS47KeAXHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTsgLy/ssYTtjIXrsKkg66mU7IS47KeAIOq4sOuhnVxyXG4gICAgY29uc3QgY2hhdHRpbmdDb250ZW50ID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coY2hhdHRpbmdDb250ZW50KTtcclxuICAgIC8vZHluYW1pYyBwYWdlIHBhcmFtZXRlciDrsJTrgJTrlYzrp4jri6QgcmVyZW5kZXJpbmfrkJzri6QuIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKHJvb21JZCAhPT0gXCJtYWluXCIgJiYgaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdsb2FkUm9vbScsIHtcclxuICAgICAgICAgICAgICAgIHJvb21JZCA6IHBhcnNlSW50KHJvb21JZCwgMTApLFxyXG4gICAgICAgICAgICAgICAgc29ja2V0SWQgOiBzb2NrZXQuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyb29tSWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBzb2NrZXQub24oJ3Jvb21EYXRhJywgKHJvb21EYXRhKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgc2V0Um9vbShyb29tID0+ICh7Li4ucm9vbSxcclxuICAgICAgICAgICAgQ2hhdHM6IF8uY2xvbmVEZWVwKHJvb21EYXRhLkNoYXRzKSxcclxuICAgICAgICAgICAgVXNlcjogXy5jbG9uZURlZXAocm9vbURhdGEuVXNlciksXHJcbiAgICAgICAgICAgIFVzZXJJZDogcm9vbURhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHJvb21EYXRhLmNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgaWQgOiByb29tRGF0YS5pZCxcclxuICAgICAgICAgICAgbWF4OiByb29tRGF0YS5tYXgsXHJcbiAgICAgICAgICAgIHBhcnRpY2lwYW50czogXy5jbG9uZURlZXAocm9vbURhdGEucGFydGljaXBhbnRzKSxcclxuICAgICAgICAgICAgdGl0bGU6IHJvb21EYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHJvb21EYXRhLnVwZGF0ZWRBdFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFJvb20ocm9vbURhdGEpO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhyb29tRGF0YS5DaGF0cyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIHNldFJvb20oey4uLnJvb20sIHJvb21EYXRhfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXRzID0gcm9vbURhdGEuQ2hhdHM7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKHsuLi5tZXNzYWdlcywgY2hhdHN9KTtcclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ3Jvb21EYXRhJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBzb2NrZXQub24oJ25ld01lc3NhZ2UnLCAoZnVsbENoYXRzKSA9PiB7XHJcbiAgICAgICAgICAgIC8qIGZ1bGxDaGF0c1xyXG4gICAgICAgICAgICBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDI5LFxyXG4gICAgICAgICAgICAgICAgY2hhdDogJzLsi5wgOeu2hCcsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IDIwMjItMDEtMjdUMDU6MDk6MDIuMDAwWixcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRBdDogMjAyMi0wMS0yN1QwNTowOTowMi4wMDBaLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOiAzLFxyXG4gICAgICAgICAgICAgICAgUm9vbUlkOiA3NFxyXG4gICAgICAgICAgICAgIH0sXVxyXG4gICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoZnVsbENoYXRzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9mZignbmV3TWVzc2FnZScpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY2hhdHRpbmdDb250ZW50LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdXBkYXRlU2Nyb2xsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZW5kICR7bWVzc2FnZX0gdG8gc2VydmVyYCk7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIHtcclxuICAgICAgICAgICAgICAgIHJvb21JZCA6IHBhcnNlSW50KHJvb21JZCwgMTApLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogbWUuaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodDtcclxuICAgIH0gLy8v7LKY7J2MIOyxhO2MheuwqeydhCDriIzroIDsnYTrlYwsIOyxl+ydtCDsmZTsnYTrlYwgPyDqs6Drr7zsooBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHJvb21JZCAhPT0gXCJtYWluXCIgPyBcclxuICAgICAgICBpc0xvYWRpbmcgPyAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+IDogXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxoMj57cm9vbS50aXRsZX08L2gyPiZuYnNwOyZuYnNwOzxoMiBzdHlsZT17e2NvbG9yOiBcImdyZXlcIn19Pntyb29tLnBhcnRpY2lwYW50cy5sZW5ndGh9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRDb250YWluZXJcIiByZWY9e2NoYXR0aW5nQ29udGVudH0gc3R5bGU9e3sgaGVpZ2h0OlwiY2FsYygxMDAlIC0gMTEwcHgpXCIsIHdpZHRoOlwiMTAwJVwiLCBvdmVyZmxvdzonYXV0byd9fT5cclxuICAgICAgICAgICAgeyBtZXNzYWdlcyAmJiBtZXNzYWdlcy5tYXAoKG0pPT48ZGl2IHN0eWxlPXt7aGVpZ2h0OlwiMzBweFwifX0+e20uY2hhdH08L2Rpdj4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaGVpZ2h0OlwiNjBweFwiLCB3aWR0aDpcIjEwMCVcIixsZWZ0OicwJywgcmlnaHQ6JzAnLCBib3R0b206XCIwXCIsIGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwiLCBib3JkZXJUb3A6IFwic29saWQgdGhpbiAjRUZFRUY1XCIsIGJhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgYm9yZGVyZWQ9e2ZhbHNlfSBzdHlsZT17e3dpZHRoOlwiOTAlXCJ9fSBvbkNoYW5nZT17b25DaGFuZ2VNZXNzYWdlfSB2YWx1ZT17bWVzc2FnZX0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PEFycm93VXBPdXRsaW5lZCAvPn0gc2l6ZT1cImxhcmdlXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogXCI1JVwifX0gb25DbGljaz17b25DbGlja1N1Ym1pdH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgOiAgXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIiwgfX0+XHJcbiAgICAgICAgPGRpdj5Zb3UgZG9u4oCZdCBoYXZlIGEgbWVzc2FnZSBzZWxlY3RlZDwvZGl2PlxyXG4gICAgICAgIDxkaXY+Q2hvb3NlIG9uZSBmcm9tIHlvdXIgZXhpc3RpbmcgbWVzc2FnZXMsIG9yIHN0YXJ0IGEgbmV3IG9uZS48L2Rpdj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG5cclxuLypcclxuPGRpdj5cclxuICAgICAgICA8aDE+WW91IGRvbuKAmXQgaGF2ZSBhIG1lc3NhZ2Ugc2VsZWN0ZWQ8L2gxPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxwPkNob29zZSBvbmUgZnJvbSB5b3VyIGV4aXN0aW5nIG1lc3NhZ2VzLCBvciBzdGFydCBhIG5ldyBvbmUuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gKi8iXSwic291cmNlUm9vdCI6IiJ9