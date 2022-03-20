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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Chat.js",
    _this = undefined,
    _s = $RefreshSig$();

/* eslint-disable */









var ChatWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Chat__ChatWrapper",
  componentId: "sc-cmjb8i-0"
})(["max-width:50%;border:solid 1px #4C4C51;border-radius:5%;align-self:", ";padding:2%;margin:1% 0;word-wrap:break-word;"], function (_ref) {
  var sender = _ref.sender;
  return sender === 'me' ? 'flex-end' : 'flex-start';
});
_c = ChatWrapper;

var Chat = function Chat(_ref2) {
  _s();

  var roomId = _ref2.roomId;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      room = _useState[0],
      setRoom = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState3[0],
      setMessage = _useState3[1]; //Input 입력 메세지


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      messages = _useState4[0],
      setMessages = _useState4[1]; //채팅방 메세지 기록


  var chattingContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
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
      setIsLoading(false);
    });
    return function () {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].off('roomData');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].on('newMessage', function (newChat) {
      console.log('new Message event on');
      console.log(messages); //console.log([messages.concat(newChat)]);
      //setMessages([...messages]);
    });
    return function () {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].off('newMessage');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: roomId !== "main" ? isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
      spin: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 22
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
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
          lineNumber: 118,
          columnNumber: 13
        }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
          style: {
            color: "grey"
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 46
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
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
        children: messages && messages.map(function (m, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ChatWrapper, {
            sender: m.User.id === me.id ? "me" : "other",
            children: m.chat
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 48
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
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
          lineNumber: 127,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 61
          }, _this),
          size: "large",
          style: {
            marginRight: "5%"
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
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
        lineNumber: 133,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Chat, "Qv6TZipqdBpoe8pZ/oz0dDdLM/k=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c2 = Chat;
/* harmony default export */ __webpack_exports__["default"] = (Chat);
/*
<div>
        <h1>You don’t have a message selected</h1>
        <br />
        <p>Choose one from your existing messages, or start a new one.</p>
        </div>
 */

var _c, _c2;

$RefreshReg$(_c, "ChatWrapper");
$RefreshReg$(_c2, "Chat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm5hbWVzIjpbIkNoYXRXcmFwcGVyIiwic3R5bGVkIiwiZGl2Iiwic2VuZGVyIiwiQ2hhdCIsInJvb21JZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsInJvb20iLCJzZXRSb29tIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY2hhdHRpbmdDb250ZW50IiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic29ja2V0IiwiZW1pdCIsInBhcnNlSW50Iiwic29ja2V0SWQiLCJpZCIsIm9uIiwicm9vbURhdGEiLCJDaGF0cyIsIm9mZiIsIm5ld0NoYXQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInVwZGF0ZVNjcm9sbCIsIm9uQ2hhbmdlTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2tTdWJtaXQiLCJsZW5ndGgiLCJ1c2VySWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0aXRsZSIsImNvbG9yIiwicGFydGljaXBhbnRzIiwib3ZlcmZsb3ciLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXAiLCJtIiwiaSIsIlVzZXIiLCJjaGF0IiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJib3JkZXJUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFN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QUN2QixpQkFBSyxFQUFDO0FBQVAsV0FBL0I7QUFBOEMsa0JBQVEsRUFBRVQsZUFBeEQ7QUFBeUUsZUFBSyxFQUFFckI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsZUFBSyxFQUFDLFFBQTdCO0FBQXNDLGNBQUksZUFBRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE1QztBQUFpRSxjQUFJLEVBQUMsT0FBdEU7QUFBOEUsZUFBSyxFQUFFO0FBQUNzRCx1QkFBVyxFQUFFO0FBQWQsV0FBckY7QUFBMEcsaUJBQU8sRUFBRTdCO0FBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkUsZ0JBa0JGO0FBQUssV0FBSyxFQUFFO0FBQUNRLGVBQU8sRUFBQyxNQUFUO0FBQWlCTyxxQkFBYSxFQUFFLFFBQWhDO0FBQTBDTCxzQkFBYyxFQUFDLFFBQXpEO0FBQW1FRCxrQkFBVSxFQUFDLFFBQTlFO0FBQXdGSixhQUFLLEVBQUMsTUFBOUY7QUFBc0dDLGNBQU0sRUFBQztBQUE3RyxPQUFaO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJBLG1CQURKO0FBMEJILENBdEhEOztHQUFNMUMsSTtVQUNhRSx1RDs7O01BRGJGLEk7QUF3SFNBLG1FQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZS9bcm9vbUlkXS41MGQ5OGM2YmRmOGVkZGQyYjU4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBBcnJvd1VwT3V0bGluZWQsIExvYWRpbmdPdXRsaW5lZCwgVXNlckFkZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi4vdXRpbHMvaW8nO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IENoYXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOiA1MCU7XHJcbmJvcmRlcjogc29saWQgMXB4ICM0QzRDNTE7XHJcbmJvcmRlci1yYWRpdXM6IDUlO1xyXG5hbGlnbi1zZWxmOiAkeyh7c2VuZGVyfSkgPT4gc2VuZGVyPT09J21lJz8nZmxleC1lbmQnOidmbGV4LXN0YXJ0J307XHJcbnBhZGRpbmc6IDIlO1xyXG5tYXJnaW46IDElIDA7XHJcbndvcmQtd3JhcDogYnJlYWstd29yZDtcclxuYDtcclxuXHJcbmNvbnN0IENoYXQgPSAoeyByb29tSWQgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbcm9vbSwgc2V0Um9vbV0gPSB1c2VTdGF0ZSh7fSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTsgLy9JbnB1dCDsnoXroKUg66mU7IS47KeAXHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTsgLy/ssYTtjIXrsKkg66mU7IS47KeAIOq4sOuhnVxyXG4gICAgY29uc3QgY2hhdHRpbmdDb250ZW50ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAocm9vbUlkICE9PSBcIm1haW5cIiAmJiBpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xvYWRSb29tJywge1xyXG4gICAgICAgICAgICAgICAgcm9vbUlkIDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRJZCA6IHNvY2tldC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Jvb21JZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNvY2tldC5vbigncm9vbURhdGEnLCAocm9vbURhdGEpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBzZXRSb29tKHJvb20gPT4gKHsuLi5yb29tLFxyXG4gICAgICAgICAgICBDaGF0czogXy5jbG9uZURlZXAocm9vbURhdGEuQ2hhdHMpLFxyXG4gICAgICAgICAgICBVc2VyOiBfLmNsb25lRGVlcChyb29tRGF0YS5Vc2VyKSxcclxuICAgICAgICAgICAgVXNlcklkOiByb29tRGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcm9vbURhdGEuY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICBpZCA6IHJvb21EYXRhLmlkLFxyXG4gICAgICAgICAgICBtYXg6IHJvb21EYXRhLm1heCxcclxuICAgICAgICAgICAgcGFydGljaXBhbnRzOiBfLmNsb25lRGVlcChyb29tRGF0YS5wYXJ0aWNpcGFudHMpLFxyXG4gICAgICAgICAgICB0aXRsZTogcm9vbURhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcm9vbURhdGEudXBkYXRlZEF0XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0Um9vbShyb29tRGF0YSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJvb21EYXRhLkNoYXRzKTtcclxuXHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ3Jvb21EYXRhJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBzb2NrZXQub24oJ25ld01lc3NhZ2UnLCAobmV3Q2hhdCkgPT4ge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgTWVzc2FnZSBldmVudCBvbicpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzKTtcclxuICAgICAgICAgICAvL2NvbnNvbGUubG9nKFttZXNzYWdlcy5jb25jYXQobmV3Q2hhdCldKTtcclxuICAgICAgICAgICAvL3NldE1lc3NhZ2VzKFsuLi5tZXNzYWdlc10pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub2ZmKCduZXdNZXNzYWdlJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcblxyXG4gICAgICAgIGNoYXR0aW5nQ29udGVudC5jdXJyZW50ICYmIHVwZGF0ZVNjcm9sbCgpO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VNZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNlbmQgJHttZXNzYWdlfSB0byBzZXJ2ZXJgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIHtcclxuICAgICAgICAgICAgICAgIHJvb21JZCA6IHBhcnNlSW50KHJvb21JZCwgMTApLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogbWUuaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjaGF0dGluZ0NvbnRlbnQuY3VycmVudC5zY3JvbGxUb3AgPSBjaGF0dGluZ0NvbnRlbnQuY3VycmVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9IC8vL+yymOydjCDssYTtjIXrsKnsnYQg64iM66CA7J2E65WMLCDssZfsnbQg7JmU7J2E65WMID8g6rOg66+87KKAXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyByb29tSWQgIT09IFwibWFpblwiID8gXHJcbiAgICAgICAgaXNMb2FkaW5nID8gIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPiA6IFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiNTBweFwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjRUZFRUY1XCIsIGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICA8aDI+e3Jvb20udGl0bGV9PC9oMj4mbmJzcDsmbmJzcDs8aDIgc3R5bGU9e3tjb2xvcjogXCJncmV5XCJ9fT57cm9vbS5wYXJ0aWNpcGFudHMubGVuZ3RofTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0Q29udGFpbmVyXCIgcmVmPXtjaGF0dGluZ0NvbnRlbnR9IHN0eWxlPXt7IGhlaWdodDpcImNhbGMoMTAwJSAtIDExMHB4KVwiLCB3aWR0aDpcIjEwMCVcIiwgb3ZlcmZsb3c6J2F1dG8nLCBkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHBhZGRpbmdSaWdodDogJzUlJywgcGFkZGluZ0xlZnQ6JzUlJ319PlxyXG4gICAgICAgICAgICB7IG1lc3NhZ2VzICYmIG1lc3NhZ2VzLm1hcCgobSwgaSk9PjxDaGF0V3JhcHBlciBrZXk9e2l9IHNlbmRlcj17bS5Vc2VyLmlkID09PSBtZS5pZD8gXCJtZVwiIDogXCJvdGhlclwifT57bS5jaGF0fTwvQ2hhdFdyYXBwZXI+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCIgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIGhlaWdodDpcIjYwcHhcIiwgd2lkdGg6XCIxMDAlXCIsbGVmdDonMCcsIHJpZ2h0OicwJywgYm90dG9tOlwiMFwiLCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIiwgYm9yZGVyVG9wOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGJvcmRlcmVkPXtmYWxzZX0gc3R5bGU9e3t3aWR0aDpcIjkwJVwifX0gb25DaGFuZ2U9e29uQ2hhbmdlTWVzc2FnZX0gdmFsdWU9e21lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cImNpcmNsZVwiIGljb249ezxBcnJvd1VwT3V0bGluZWQgLz59IHNpemU9XCJsYXJnZVwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiNSVcIn19IG9uQ2xpY2s9e29uQ2xpY2tTdWJtaXR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDogIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCIsIH19PlxyXG4gICAgICAgIDxkaXY+WW91IGRvbuKAmXQgaGF2ZSBhIG1lc3NhZ2Ugc2VsZWN0ZWQ8L2Rpdj5cclxuICAgICAgICA8ZGl2PkNob29zZSBvbmUgZnJvbSB5b3VyIGV4aXN0aW5nIG1lc3NhZ2VzLCBvciBzdGFydCBhIG5ldyBvbmUuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuXHJcbi8qXHJcbjxkaXY+XHJcbiAgICAgICAgPGgxPllvdSBkb27igJl0IGhhdmUgYSBtZXNzYWdlIHNlbGVjdGVkPC9oMT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8cD5DaG9vc2Ugb25lIGZyb20geW91ciBleGlzdGluZyBtZXNzYWdlcywgb3Igc3RhcnQgYSBuZXcgb25lLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICovIl0sInNvdXJjZVJvb3QiOiIifQ==