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


  var chattingContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); //dynamic page parameter 바뀔때마다 rerendering된다. 

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
    var _chattingContent$curr;

    console.log('ref object changed'); //[id]바뀔때 컴포넌트 리렌더링은 되지만, mount는 한번된다

    (_chattingContent$curr = chattingContent.current) === null || _chattingContent$curr === void 0 ? void 0 : _chattingContent$curr.scrollIntoView({
      behavior: 'smooth'
    });
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
    chattingContent.current.scrollIntoView(false);
  }; ///처음 채팅방을 눌렀을때, 챗이 왔을때 ? 고민좀


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: roomId !== "main" ? isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
      spin: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
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
          lineNumber: 120,
          columnNumber: 13
        }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          style: {
            color: "grey"
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 46
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
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
            lineNumber: 124,
            columnNumber: 45
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
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
          lineNumber: 129,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 61
          }, _this),
          size: "large",
          style: {
            marginRight: "5%"
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
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
        lineNumber: 135,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm5hbWVzIjpbIkNoYXQiLCJyb29tSWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJyb29tIiwic2V0Um9vbSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNoYXR0aW5nQ29udGVudCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInNvY2tldCIsImVtaXQiLCJwYXJzZUludCIsInNvY2tldElkIiwiaWQiLCJvbiIsInJvb21EYXRhIiwiQ2hhdHMiLCJvZmYiLCJmdWxsQ2hhdHMiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJvbkNoYW5nZU1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrU3VibWl0IiwibGVuZ3RoIiwidXNlcklkIiwidXBkYXRlU2Nyb2xsIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJCb3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGl0bGUiLCJjb2xvciIsInBhcnRpY2lwYW50cyIsIm92ZXJmbG93IiwibWFwIiwibSIsImNoYXQiLCJwb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImJvcmRlclRvcCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblJpZ2h0IiwiZmxleERpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEscUJBQ1ZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtB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bkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRSxnQkFrQkY7QUFBSyxXQUFLLEVBQUU7QUFBQ08sZUFBTyxFQUFDLE1BQVQ7QUFBaUJpQixxQkFBYSxFQUFFLFFBQWhDO0FBQTBDZixzQkFBYyxFQUFDLFFBQXpEO0FBQW1FRCxrQkFBVSxFQUFDLFFBQTlFO0FBQXdGSixhQUFLLEVBQUMsTUFBOUY7QUFBc0dDLGNBQU0sRUFBQztBQUE3RyxPQUFaO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJBLG1CQURKO0FBMEJILENBbklEOztHQUFNMUMsSTtVQUNhRSx1RDs7O0tBRGJGLEk7QUFxSVNBLG1FQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZS9bcm9vbUlkXS5kZmVmMjk5MDk0NmYxMDE0YjBjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBBcnJvd1VwT3V0bGluZWQsIExvYWRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNvY2tldCB9IGZyb20gJy4uL3V0aWxzL2lvJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IENoYXQgPSAoeyByb29tSWQgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbcm9vbSwgc2V0Um9vbV0gPSB1c2VTdGF0ZSh7fSk7IC8v7JmcIOuLpOuluCDtjpjsnbTsp4DsnbjrjbAg7JWI67CU64CM64OQP1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpOyAvL+yeheugpSDrqZTshLjsp4BcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pOyAvL+yxhO2MheuwqSDrqZTshLjsp4Ag6riw66GdXHJcbiAgICBjb25zdCBjaGF0dGluZ0NvbnRlbnQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgLy9keW5hbWljIHBhZ2UgcGFyYW1ldGVyIOuwlOuAlOuVjOuniOuLpCByZXJlbmRlcmluZ+uQnOuLpC4gXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAocm9vbUlkICE9PSBcIm1haW5cIiAmJiBpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xvYWRSb29tJywge1xyXG4gICAgICAgICAgICAgICAgcm9vbUlkIDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRJZCA6IHNvY2tldC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Jvb21JZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNvY2tldC5vbigncm9vbURhdGEnLCAocm9vbURhdGEpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBzZXRSb29tKHJvb20gPT4gKHsuLi5yb29tLFxyXG4gICAgICAgICAgICBDaGF0czogXy5jbG9uZURlZXAocm9vbURhdGEuQ2hhdHMpLFxyXG4gICAgICAgICAgICBVc2VyOiBfLmNsb25lRGVlcChyb29tRGF0YS5Vc2VyKSxcclxuICAgICAgICAgICAgVXNlcklkOiByb29tRGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcm9vbURhdGEuY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICBpZCA6IHJvb21EYXRhLmlkLFxyXG4gICAgICAgICAgICBtYXg6IHJvb21EYXRhLm1heCxcclxuICAgICAgICAgICAgcGFydGljaXBhbnRzOiBfLmNsb25lRGVlcChyb29tRGF0YS5wYXJ0aWNpcGFudHMpLFxyXG4gICAgICAgICAgICB0aXRsZTogcm9vbURhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcm9vbURhdGEudXBkYXRlZEF0XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0Um9vbShyb29tRGF0YSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJvb21EYXRhLkNoYXRzKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgc2V0Um9vbSh7Li4ucm9vbSwgcm9vbURhdGF9KTtcclxuICAgICAgICAgICAgY29uc3QgY2hhdHMgPSByb29tRGF0YS5DaGF0cztcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoey4uLm1lc3NhZ2VzLCBjaGF0c30pO1xyXG4gICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9mZigncm9vbURhdGEnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNvY2tldC5vbignbmV3TWVzc2FnZScsIChmdWxsQ2hhdHMpID0+IHtcclxuICAgICAgICAgICAgLyogZnVsbENoYXRzXHJcbiAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogMjksXHJcbiAgICAgICAgICAgICAgICBjaGF0OiAnMuyLnCA567aEJyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogMjAyMi0wMS0yN1QwNTowOTowMi4wMDBaLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiAyMDIyLTAxLTI3VDA1OjA5OjAyLjAwMFosXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6IDMsXHJcbiAgICAgICAgICAgICAgICBSb29tSWQ6IDc0XHJcbiAgICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhmdWxsQ2hhdHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub2ZmKCduZXdNZXNzYWdlJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygncmVmIG9iamVjdCBjaGFuZ2VkJyk7XHJcbiAgICAgICAgLy9baWRd67CU64CU65WMIOy7tO2PrOuEjO2KuCDrpqzroIzrjZTrp4HsnYAg65CY7KeA66eMLCBtb3VudOuKlCDtlZzrsojrkJzri6RcclxuICAgICAgICBjaGF0dGluZ0NvbnRlbnQuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9LCBbcm9vbUlkXSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VNZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNlbmQgJHttZXNzYWdlfSB0byBzZXJ2ZXJgKTtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywge1xyXG4gICAgICAgICAgICAgICAgcm9vbUlkIDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBtZS5pZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgY2hhdHRpbmdDb250ZW50LmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpXHJcbiAgICB9IC8vL+yymOydjCDssYTtjIXrsKnsnYQg64iM66CA7J2E65WMLCDssZfsnbQg7JmU7J2E65WMID8g6rOg66+87KKAXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyByb29tSWQgIT09IFwibWFpblwiID8gXHJcbiAgICAgICAgaXNMb2FkaW5nID8gIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPiA6IFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiNTBweFwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjRUZFRUY1XCIsIGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICA8aDI+e3Jvb20udGl0bGV9PC9oMj4mbmJzcDsmbmJzcDs8aDIgc3R5bGU9e3tjb2xvcjogXCJncmV5XCJ9fT57cm9vbS5wYXJ0aWNpcGFudHMubGVuZ3RofTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0Q29udGFpbmVyXCIgcmVmPXtjaGF0dGluZ0NvbnRlbnR9IHN0eWxlPXt7IGhlaWdodDpcImNhbGMoMTAwJSAtIDExMHB4KVwiLCB3aWR0aDpcIjEwMCVcIiwgb3ZlcmZsb3c6J2F1dG8nfX0+XHJcbiAgICAgICAgICAgIHsgbWVzc2FnZXMgJiYgbWVzc2FnZXMubWFwKChtKT0+PGRpdiBzdHlsZT17e2hlaWdodDpcIjMwcHhcIn19PnttLmNoYXR9PC9kaXY+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCIgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIGhlaWdodDpcIjYwcHhcIiwgd2lkdGg6XCIxMDAlXCIsbGVmdDonMCcsIHJpZ2h0OicwJywgYm90dG9tOlwiMFwiLCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIiwgYm9yZGVyVG9wOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGJvcmRlcmVkPXtmYWxzZX0gc3R5bGU9e3t3aWR0aDpcIjkwJVwifX0gb25DaGFuZ2U9e29uQ2hhbmdlTWVzc2FnZX0gdmFsdWU9e21lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cImNpcmNsZVwiIGljb249ezxBcnJvd1VwT3V0bGluZWQgLz59IHNpemU9XCJsYXJnZVwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiNSVcIn19IG9uQ2xpY2s9e29uQ2xpY2tTdWJtaXR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDogIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCIsIH19PlxyXG4gICAgICAgIDxkaXY+WW91IGRvbuKAmXQgaGF2ZSBhIG1lc3NhZ2Ugc2VsZWN0ZWQ8L2Rpdj5cclxuICAgICAgICA8ZGl2PkNob29zZSBvbmUgZnJvbSB5b3VyIGV4aXN0aW5nIG1lc3NhZ2VzLCBvciBzdGFydCBhIG5ldyBvbmUuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuXHJcbi8qXHJcbjxkaXY+XHJcbiAgICAgICAgPGgxPllvdSBkb27igJl0IGhhdmUgYSBtZXNzYWdlIHNlbGVjdGVkPC9oMT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8cD5DaG9vc2Ugb25lIGZyb20geW91ciBleGlzdGluZyBtZXNzYWdlcywgb3Igc3RhcnQgYSBuZXcgb25lLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICovIl0sInNvdXJjZVJvb3QiOiIifQ==