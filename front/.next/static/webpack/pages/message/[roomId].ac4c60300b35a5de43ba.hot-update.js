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
  console.log('chat component rendered'); //dynamic page parameter 바뀔때마다 rerendering된다. 

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
    console.log('ref object changed');
    console.log(chattingContent.current); //[id]바뀔때 컴포넌트 리렌더링은 되지만, mount도 매번 된다
    //ref 객체는 리렌더링이 되어도 변경되지 않는다.

    chattingContent.current && updateScroll();
  });

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
      lineNumber: 121,
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
          lineNumber: 124,
          columnNumber: 13
        }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          style: {
            color: "grey"
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 46
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "chatContainer",
        ref: chattingContent,
        style: {
          height: "calc(100% - 110px)",
          width: "100%",
          overflow: 'auto'
        },
        children: messages && messages.map(function (m, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            style: {
              height: "30px"
            },
            children: m.chat
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 48
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
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
          lineNumber: 133,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 61
          }, _this),
          size: "large",
          style: {
            marginRight: "5%"
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
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
        lineNumber: 139,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm5hbWVzIjpbIkNoYXQiLCJyb29tSWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJyb29tIiwic2V0Um9vbSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNoYXR0aW5nQ29udGVudCIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzb2NrZXQiLCJlbWl0IiwicGFyc2VJbnQiLCJzb2NrZXRJZCIsImlkIiwib24iLCJyb29tRGF0YSIsIkNoYXRzIiwib2ZmIiwiZnVsbENoYXRzIiwiY3VycmVudCIsInVwZGF0ZVNjcm9sbCIsIm9uQ2hhbmdlTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2tTdWJtaXQiLCJsZW5ndGgiLCJ1c2VySWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0aXRsZSIsImNvbG9yIiwicGFydGljaXBhbnRzIiwib3ZlcmZsb3ciLCJtYXAiLCJtIiwiaSIsImNoYXQiLCJwb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImJvcmRlclRvcCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblJpZ2h0IiwiZmxleERpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEscUJBQ1ZDLCtEQUFXLENBQUMsVUFBQ0MsS0FB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T0FBdEU7QUFBOEUsZUFBSyxFQUFFO0FBQUNrRCx1QkFBVyxFQUFFO0FBQWQsV0FBckY7QUFBMEcsaUJBQU8sRUFBRXpCO0FBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkUsZ0JBa0JGO0FBQUssV0FBSyxFQUFFO0FBQUNRLGVBQU8sRUFBQyxNQUFUO0FBQWlCa0IscUJBQWEsRUFBRSxRQUFoQztBQUEwQ2hCLHNCQUFjLEVBQUMsUUFBekQ7QUFBbUVELGtCQUFVLEVBQUMsUUFBOUU7QUFBd0ZKLGFBQUssRUFBQyxNQUE5RjtBQUFzR0MsY0FBTSxFQUFDO0FBQTdHLE9BQVo7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQkEsbUJBREo7QUEwQkgsQ0F2SUQ7O0dBQU0xQyxJO1VBQ2FFLHVEOzs7S0FEYkYsSTtBQXlJU0EsbUVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlL1tyb29tSWRdLmFjNGM2MDMwMGIzNWE1ZGU0M2JhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFycm93VXBPdXRsaW5lZCwgTG9hZGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi4vdXRpbHMvaW8nO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgQ2hhdCA9ICh7IHJvb21JZCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFtyb29tLCBzZXRSb29tXSA9IHVzZVN0YXRlKHt9KTsgLy/smZwg64uk66W4IO2OmOydtOyngOyduOuNsCDslYjrsJTrgIzrg5A/XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7IC8v7J6F66ClIOuplOyEuOyngFxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8v7LGE7YyF67CpIOuplOyEuOyngCDquLDroZ1cclxuICAgIGNvbnN0IGNoYXR0aW5nQ29udGVudCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnY2hhdCBjb21wb25lbnQgcmVuZGVyZWQnKVxyXG4gICAgLy9keW5hbWljIHBhZ2UgcGFyYW1ldGVyIOuwlOuAlOuVjOuniOuLpCByZXJlbmRlcmluZ+uQnOuLpC4gXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAocm9vbUlkICE9PSBcIm1haW5cIiAmJiBpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xvYWRSb29tJywge1xyXG4gICAgICAgICAgICAgICAgcm9vbUlkIDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRJZCA6IHNvY2tldC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Jvb21JZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNvY2tldC5vbigncm9vbURhdGEnLCAocm9vbURhdGEpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBzZXRSb29tKHJvb20gPT4gKHsuLi5yb29tLFxyXG4gICAgICAgICAgICBDaGF0czogXy5jbG9uZURlZXAocm9vbURhdGEuQ2hhdHMpLFxyXG4gICAgICAgICAgICBVc2VyOiBfLmNsb25lRGVlcChyb29tRGF0YS5Vc2VyKSxcclxuICAgICAgICAgICAgVXNlcklkOiByb29tRGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcm9vbURhdGEuY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICBpZCA6IHJvb21EYXRhLmlkLFxyXG4gICAgICAgICAgICBtYXg6IHJvb21EYXRhLm1heCxcclxuICAgICAgICAgICAgcGFydGljaXBhbnRzOiBfLmNsb25lRGVlcChyb29tRGF0YS5wYXJ0aWNpcGFudHMpLFxyXG4gICAgICAgICAgICB0aXRsZTogcm9vbURhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcm9vbURhdGEudXBkYXRlZEF0XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0Um9vbShyb29tRGF0YSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJvb21EYXRhLkNoYXRzKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgc2V0Um9vbSh7Li4ucm9vbSwgcm9vbURhdGF9KTtcclxuICAgICAgICAgICAgY29uc3QgY2hhdHMgPSByb29tRGF0YS5DaGF0cztcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoey4uLm1lc3NhZ2VzLCBjaGF0c30pO1xyXG4gICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9mZigncm9vbURhdGEnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNvY2tldC5vbignbmV3TWVzc2FnZScsIChmdWxsQ2hhdHMpID0+IHtcclxuICAgICAgICAgICAgLyogZnVsbENoYXRzXHJcbiAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogMjksXHJcbiAgICAgICAgICAgICAgICBjaGF0OiAnMuyLnCA567aEJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogMjAyMi0wMS0yN1QwNTowOTowMi4wMDBaLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiAyMDIyLTAxLTI3VDA1OjA5OjAyLjAwMFosXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6IDMsXHJcbiAgICAgICAgICAgICAgICBSb29tSWQ6IDc0XHJcbiAgICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhmdWxsQ2hhdHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub2ZmKCduZXdNZXNzYWdlJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWYgb2JqZWN0IGNoYW5nZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGF0dGluZ0NvbnRlbnQuY3VycmVudCk7XHJcbiAgICAgICAgLy9baWRd67CU64CU65WMIOy7tO2PrOuEjO2KuCDrpqzroIzrjZTrp4HsnYAg65CY7KeA66eMLCBtb3VudOuPhCDrp6Trsogg65Cc64ukXHJcbiAgICAgICAgLy9yZWYg6rCd7LK064qUIOumrOugjOuNlOungeydtCDrkJjslrTrj4Qg67OA6rK965CY7KeAIOyViuuKlOuLpC5cclxuICAgICAgICBjaGF0dGluZ0NvbnRlbnQuY3VycmVudCAmJiB1cGRhdGVTY3JvbGwoKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZW5kICR7bWVzc2FnZX0gdG8gc2VydmVyYCk7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIHtcclxuICAgICAgICAgICAgICAgIHJvb21JZCA6IHBhcnNlSW50KHJvb21JZCwgMTApLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogbWUuaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodDtcclxuICAgIH0gLy8v7LKY7J2MIOyxhO2MheuwqeydhCDriIzroIDsnYTrlYwsIOyxl+ydtCDsmZTsnYTrlYwgPyDqs6Drr7zsooBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHJvb21JZCAhPT0gXCJtYWluXCIgPyBcclxuICAgICAgICBpc0xvYWRpbmcgPyAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+IDogXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxoMj57cm9vbS50aXRsZX08L2gyPiZuYnNwOyZuYnNwOzxoMiBzdHlsZT17e2NvbG9yOiBcImdyZXlcIn19Pntyb29tLnBhcnRpY2lwYW50cy5sZW5ndGh9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRDb250YWluZXJcIiByZWY9e2NoYXR0aW5nQ29udGVudH0gc3R5bGU9e3sgaGVpZ2h0OlwiY2FsYygxMDAlIC0gMTEwcHgpXCIsIHdpZHRoOlwiMTAwJVwiLCBvdmVyZmxvdzonYXV0byd9fT5cclxuICAgICAgICAgICAgeyBtZXNzYWdlcyAmJiBtZXNzYWdlcy5tYXAoKG0sIGkpPT48ZGl2IGtleT17aX0gc3R5bGU9e3toZWlnaHQ6XCIzMHB4XCJ9fT57bS5jaGF0fTwvZGl2Pil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCBoZWlnaHQ6XCI2MHB4XCIsIHdpZHRoOlwiMTAwJVwiLGxlZnQ6JzAnLCByaWdodDonMCcsIGJvdHRvbTpcIjBcIiwgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCIsIGJvcmRlclRvcDogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgYmFja2dyb3VuZENvbG9yOid3aGl0ZSd9fT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBib3JkZXJlZD17ZmFsc2V9IHN0eWxlPXt7d2lkdGg6XCI5MCVcIn19IG9uQ2hhbmdlPXtvbkNoYW5nZU1lc3NhZ2V9IHZhbHVlPXttZXNzYWdlfS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJjaXJjbGVcIiBpY29uPXs8QXJyb3dVcE91dGxpbmVkIC8+fSBzaXplPVwibGFyZ2VcIiBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjUlXCJ9fSBvbkNsaWNrPXtvbkNsaWNrU3VibWl0fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA6ICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwiLCB9fT5cclxuICAgICAgICA8ZGl2PllvdSBkb27igJl0IGhhdmUgYSBtZXNzYWdlIHNlbGVjdGVkPC9kaXY+XHJcbiAgICAgICAgPGRpdj5DaG9vc2Ugb25lIGZyb20geW91ciBleGlzdGluZyBtZXNzYWdlcywgb3Igc3RhcnQgYSBuZXcgb25lLjwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XHJcblxyXG4vKlxyXG48ZGl2PlxyXG4gICAgICAgIDxoMT5Zb3UgZG9u4oCZdCBoYXZlIGEgbWVzc2FnZSBzZWxlY3RlZDwvaDE+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPHA+Q2hvb3NlIG9uZSBmcm9tIHlvdXIgZXhpc3RpbmcgbWVzc2FnZXMsIG9yIHN0YXJ0IGEgbmV3IG9uZS48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAqLyJdLCJzb3VyY2VSb290IjoiIn0=