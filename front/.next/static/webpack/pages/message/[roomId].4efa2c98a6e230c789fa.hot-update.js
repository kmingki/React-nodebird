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


  var chattingContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
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
    //[id]바뀔때 컴포넌트 리렌더링은 되지만, mount는 한번된다
    if (chattingContent.current) {
      updateScroll();
    }
  }, [roomId]);

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
    console.log('done');
    chattingContent.current.scrollTop = chattingContent.current.scrollHeight - chattingContent.current.clientHeight;
  }; ///처음 채팅방을 눌렀을때, 챗이 왔을때 ? 고민좀


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: roomId !== "main" ? isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
      spin: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
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
          lineNumber: 122,
          columnNumber: 13
        }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          style: {
            color: "grey"
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 46
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
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
            lineNumber: 126,
            columnNumber: 45
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
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
          lineNumber: 131,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 61
          }, _this),
          size: "large",
          style: {
            marginRight: "5%"
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
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
        lineNumber: 137,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm5hbWVzIjpbIkNoYXQiLCJyb29tSWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJyb29tIiwic2V0Um9vbSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNoYXR0aW5nQ29udGVudCIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzb2NrZXQiLCJlbWl0IiwicGFyc2VJbnQiLCJzb2NrZXRJZCIsImlkIiwib24iLCJyb29tRGF0YSIsIkNoYXRzIiwib2ZmIiwiZnVsbENoYXRzIiwiY3VycmVudCIsInVwZGF0ZVNjcm9sbCIsIm9uQ2hhbmdlTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2tTdWJtaXQiLCJsZW5ndGgiLCJ1c2VySWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0aXRsZSIsImNvbG9yIiwicGFydGljaXBhbnRzIiwib3ZlcmZsb3ciLCJtYXAiLCJtIiwiY2hhdCIsInBvc2l0aW9uIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYm9yZGVyVG9wIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luUmlnaHQiLCJmbGV4RGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxxQkFDVkMsK0RBQVcsQ0FB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LE9BQXRFO0FBQThFLGVBQUssRUFBRTtBQUFDa0QsdUJBQVcsRUFBRTtBQUFkLFdBQXJGO0FBQTBHLGlCQUFPLEVBQUV6QjtBQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZFLGdCQWtCRjtBQUFLLFdBQUssRUFBRTtBQUFDUyxlQUFPLEVBQUMsTUFBVDtBQUFpQmlCLHFCQUFhLEVBQUUsUUFBaEM7QUFBMENmLHNCQUFjLEVBQUMsUUFBekQ7QUFBbUVELGtCQUFVLEVBQUMsUUFBOUU7QUFBd0ZKLGFBQUssRUFBQyxNQUE5RjtBQUFzR0MsY0FBTSxFQUFDO0FBQTdHLE9BQVo7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQkEsbUJBREo7QUEwQkgsQ0FySUQ7O0dBQU0zQyxJO1VBQ2FFLHVEOzs7S0FEYkYsSTtBQXVJU0EsbUVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlL1tyb29tSWRdLjRlZmEyYzk4YTZlMjMwYzc4OWZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFycm93VXBPdXRsaW5lZCwgTG9hZGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi4vdXRpbHMvaW8nO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgQ2hhdCA9ICh7IHJvb21JZCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFtyb29tLCBzZXRSb29tXSA9IHVzZVN0YXRlKHt9KTsgLy/smZwg64uk66W4IO2OmOydtOyngOyduOuNsCDslYjrsJTrgIzrg5A/XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7IC8v7J6F66ClIOuplOyEuOyngFxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8v7LGE7YyF67CpIOuplOyEuOyngCDquLDroZ1cclxuICAgIGNvbnN0IGNoYXR0aW5nQ29udGVudCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjaGF0dGluZ0NvbnRlbnQpO1xyXG4gICAgLy9keW5hbWljIHBhZ2UgcGFyYW1ldGVyIOuwlOuAlOuVjOuniOuLpCByZXJlbmRlcmluZ+uQnOuLpC4gXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAocm9vbUlkICE9PSBcIm1haW5cIiAmJiBpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xvYWRSb29tJywge1xyXG4gICAgICAgICAgICAgICAgcm9vbUlkIDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRJZCA6IHNvY2tldC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Jvb21JZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNvY2tldC5vbigncm9vbURhdGEnLCAocm9vbURhdGEpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBzZXRSb29tKHJvb20gPT4gKHsuLi5yb29tLFxyXG4gICAgICAgICAgICBDaGF0czogXy5jbG9uZURlZXAocm9vbURhdGEuQ2hhdHMpLFxyXG4gICAgICAgICAgICBVc2VyOiBfLmNsb25lRGVlcChyb29tRGF0YS5Vc2VyKSxcclxuICAgICAgICAgICAgVXNlcklkOiByb29tRGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcm9vbURhdGEuY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICBpZCA6IHJvb21EYXRhLmlkLFxyXG4gICAgICAgICAgICBtYXg6IHJvb21EYXRhLm1heCxcclxuICAgICAgICAgICAgcGFydGljaXBhbnRzOiBfLmNsb25lRGVlcChyb29tRGF0YS5wYXJ0aWNpcGFudHMpLFxyXG4gICAgICAgICAgICB0aXRsZTogcm9vbURhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcm9vbURhdGEudXBkYXRlZEF0XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0Um9vbShyb29tRGF0YSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJvb21EYXRhLkNoYXRzKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgc2V0Um9vbSh7Li4ucm9vbSwgcm9vbURhdGF9KTtcclxuICAgICAgICAgICAgY29uc3QgY2hhdHMgPSByb29tRGF0YS5DaGF0cztcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoey4uLm1lc3NhZ2VzLCBjaGF0c30pO1xyXG4gICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9mZigncm9vbURhdGEnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNvY2tldC5vbignbmV3TWVzc2FnZScsIChmdWxsQ2hhdHMpID0+IHtcclxuICAgICAgICAgICAgLyogZnVsbENoYXRzXHJcbiAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogMjksXHJcbiAgICAgICAgICAgICAgICBjaGF0OiAnMuyLnCA567aEJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogMjAyMi0wMS0yN1QwNTowOTowMi4wMDBaLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiAyMDIyLTAxLTI3VDA1OjA5OjAyLjAwMFosXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6IDMsXHJcbiAgICAgICAgICAgICAgICBSb29tSWQ6IDc0XHJcbiAgICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhmdWxsQ2hhdHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub2ZmKCduZXdNZXNzYWdlJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIC8vW2lkXeuwlOuAlOuVjCDsu7Ttj6zrhIztirgg66as66CM642U66eB7J2AIOuQmOyngOunjCwgbW91bnTripQg7ZWc67KI65Cc64ukXHJcbiAgICAgICAgaWYgKGNoYXR0aW5nQ29udGVudC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sIFtyb29tSWRdKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZU1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VuZCAke21lc3NhZ2V9IHRvIHNlcnZlcmApO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB7XHJcbiAgICAgICAgICAgICAgICByb29tSWQgOiBwYXJzZUludChyb29tSWQsIDEwKSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IG1lLmlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpO1xyXG4gICAgICAgIGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodC1jaGF0dGluZ0NvbnRlbnQuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICB9IC8vL+yymOydjCDssYTtjIXrsKnsnYQg64iM66CA7J2E65WMLCDssZfsnbQg7JmU7J2E65WMID8g6rOg66+87KKAXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyByb29tSWQgIT09IFwibWFpblwiID8gXHJcbiAgICAgICAgaXNMb2FkaW5nID8gIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPiA6IFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiNTBweFwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjRUZFRUY1XCIsIGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICA8aDI+e3Jvb20udGl0bGV9PC9oMj4mbmJzcDsmbmJzcDs8aDIgc3R5bGU9e3tjb2xvcjogXCJncmV5XCJ9fT57cm9vbS5wYXJ0aWNpcGFudHMubGVuZ3RofTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0Q29udGFpbmVyXCIgcmVmPXtjaGF0dGluZ0NvbnRlbnR9IHN0eWxlPXt7IGhlaWdodDpcImNhbGMoMTAwJSAtIDExMHB4KVwiLCB3aWR0aDpcIjEwMCVcIiwgb3ZlcmZsb3c6J2F1dG8nfX0+XHJcbiAgICAgICAgICAgIHsgbWVzc2FnZXMgJiYgbWVzc2FnZXMubWFwKChtKT0+PGRpdiBzdHlsZT17e2hlaWdodDpcIjMwcHhcIn19PnttLmNoYXR9PC9kaXY+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCIgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIGhlaWdodDpcIjYwcHhcIiwgd2lkdGg6XCIxMDAlXCIsbGVmdDonMCcsIHJpZ2h0OicwJywgYm90dG9tOlwiMFwiLCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIiwgYm9yZGVyVG9wOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGJvcmRlcmVkPXtmYWxzZX0gc3R5bGU9e3t3aWR0aDpcIjkwJVwifX0gb25DaGFuZ2U9e29uQ2hhbmdlTWVzc2FnZX0gdmFsdWU9e21lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cImNpcmNsZVwiIGljb249ezxBcnJvd1VwT3V0bGluZWQgLz59IHNpemU9XCJsYXJnZVwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiNSVcIn19IG9uQ2xpY2s9e29uQ2xpY2tTdWJtaXR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDogIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCIsIH19PlxyXG4gICAgICAgIDxkaXY+WW91IGRvbuKAmXQgaGF2ZSBhIG1lc3NhZ2Ugc2VsZWN0ZWQ8L2Rpdj5cclxuICAgICAgICA8ZGl2PkNob29zZSBvbmUgZnJvbSB5b3VyIGV4aXN0aW5nIG1lc3NhZ2VzLCBvciBzdGFydCBhIG5ldyBvbmUuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuXHJcbi8qXHJcbjxkaXY+XHJcbiAgICAgICAgPGgxPllvdSBkb27igJl0IGhhdmUgYSBtZXNzYWdlIHNlbGVjdGVkPC9oMT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8cD5DaG9vc2Ugb25lIGZyb20geW91ciBleGlzdGluZyBtZXNzYWdlcywgb3Igc3RhcnQgYSBuZXcgb25lLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICovIl0sInNvdXJjZVJvb3QiOiIifQ==