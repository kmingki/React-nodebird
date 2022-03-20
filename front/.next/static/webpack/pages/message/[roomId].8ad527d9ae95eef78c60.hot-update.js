webpackHotUpdate_N_E("pages/message/[roomId]",{

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/io */ "./utils/io.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Chat.js",
    _this = undefined,
    _s = $RefreshSig$();

/* eslint-disable */









var ChatWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
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

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      room = _useState[0],
      setRoom = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      message = _useState3[0],
      setMessage = _useState3[1]; //Input 입력 메세지


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      messages = _useState4[0],
      setMessages = _useState4[1]; //채팅방 메세지 기록


  var chattingContent = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (roomId !== "main" && isLoading) {
      _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].emit('loadRoom', {
        roomId: parseInt(roomId, 10),
        socketId: _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].id
      });
    }
  }, [roomId]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].on('roomData', function (roomData) {
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
      _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].off('roomData');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].on('newMessage', function (newChat) {
      console.log('new Message event on');
      setMessages(function (prev) {
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev), [newChat]);
      });
    });
    return function () {
      _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].off('newMessage');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    chattingContent.current && updateScroll();
  });

  var onChangeMessage = function onChangeMessage(e) {
    setMessage(e.target.value);
  };

  var onClickSubmit = function onClickSubmit() {
    if (message.length > 0) {
      console.log("send ".concat(message, " to server"));
      _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].emit('sendMessage', {
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


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: roomId !== "main" ? isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LoadingOutlined"], {
      spin: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 22
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      style: {
        width: "100%",
        height: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        style: {
          height: "50px",
          borderBottom: "solid thin #EFEEF5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
          children: room.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
          style: {
            color: "grey"
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 46
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
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
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(ChatWrapper, {
            sender: m.User.id === me.id ? "me" : "other",
            children: m.chat
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 48
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          bordered: false,
          style: {
            width: "90%"
          },
          onChange: onChangeMessage,
          value: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 61
          }, _this),
          size: "large",
          style: {
            marginRight: "5%"
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: "You don\u2019t have a message selected"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Chat, "Qv6TZipqdBpoe8pZ/oz0dDdLM/k=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm5hbWVzIjpbIkNoYXRXcmFwcGVyIiwic3R5bGVkIiwiZGl2Iiwic2VuZGVyIiwiQ2hhdCIsInJvb21JZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsInJvb20iLCJzZXRSb29tIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY2hhdHRpbmdDb250ZW50IiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic29ja2V0IiwiZW1pdCIsInBhcnNlSW50Iiwic29ja2V0SWQiLCJpZCIsIm9uIiwicm9vbURhdGEiLCJDaGF0cyIsIm9mZiIsIm5ld0NoYXQiLCJjb25zb2xlIiwibG9nIiwicHJldiIsImN1cnJlbnQiLCJ1cGRhdGVTY3JvbGwiLCJvbkNoYW5nZU1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrU3VibWl0IiwibGVuZ3RoIiwidXNlcklkIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJCb3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGl0bGUiLCJjb2xvciIsInBhcnRpY2lwYW50cyIsIm92ZXJmbG93IiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWFwIiwibSIsImkiLCJVc2VyIiwiY2hhdCIsInBvc2l0aW9uIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYm9yZGVyVG9wIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsV0FBVyxH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RDtBQUFPLGtCQUFRLEVBQUUsS0FBakI7QUFBd0IsZUFBSyxFQUFFO0FBQUN2QixpQkFBSyxFQUFDO0FBQVAsV0FBL0I7QUFBOEMsa0JBQVEsRUFBRVQsZUFBeEQ7QUFBeUUsZUFBSyxFQUFFdEI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsZUFBSyxFQUFDLFFBQTdCO0FBQXNDLGNBQUksZUFBRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE1QztBQUFpRSxjQUFJLEVBQUMsT0FBdEU7QUFBOEUsZUFBSyxFQUFFO0FBQUN1RCx1QkFBVyxFQUFFO0FBQWQsV0FBckY7QUFBMEcsaUJBQU8sRUFBRTdCO0FBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkUsZ0JBa0JGO0FBQUssV0FBSyxFQUFFO0FBQUNRLGVBQU8sRUFBQyxNQUFUO0FBQWlCTyxxQkFBYSxFQUFFLFFBQWhDO0FBQTBDTCxzQkFBYyxFQUFDLFFBQXpEO0FBQW1FRCxrQkFBVSxFQUFDLFFBQTlFO0FBQXdGSixhQUFLLEVBQUMsTUFBOUY7QUFBc0dDLGNBQU0sRUFBQztBQUE3RyxPQUFaO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJBLG1CQURKO0FBMEJILENBbkhEOztHQUFNM0MsSTtVQUNhRSx1RDs7O01BRGJGLEk7QUFxSFNBLG1FQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZS9bcm9vbUlkXS44YWQ1MjdkOWFlOTVlZWY3OGM2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBBcnJvd1VwT3V0bGluZWQsIExvYWRpbmdPdXRsaW5lZCwgVXNlckFkZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi4vdXRpbHMvaW8nO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IENoYXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOiA1MCU7XHJcbmJvcmRlcjogc29saWQgMXB4ICM0QzRDNTE7XHJcbmJvcmRlci1yYWRpdXM6IDUlO1xyXG5hbGlnbi1zZWxmOiAkeyh7c2VuZGVyfSkgPT4gc2VuZGVyPT09J21lJz8nZmxleC1lbmQnOidmbGV4LXN0YXJ0J307XHJcbnBhZGRpbmc6IDIlO1xyXG5tYXJnaW46IDElIDA7XHJcbndvcmQtd3JhcDogYnJlYWstd29yZDtcclxuYDtcclxuXHJcbmNvbnN0IENoYXQgPSAoeyByb29tSWQgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbcm9vbSwgc2V0Um9vbV0gPSB1c2VTdGF0ZSh7fSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTsgLy9JbnB1dCDsnoXroKUg66mU7IS47KeAXHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTsgLy/ssYTtjIXrsKkg66mU7IS47KeAIOq4sOuhnVxyXG4gICAgY29uc3QgY2hhdHRpbmdDb250ZW50ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChyb29tSWQgIT09IFwibWFpblwiICYmIGlzTG9hZGluZykge1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbG9hZFJvb20nLCB7XHJcbiAgICAgICAgICAgICAgICByb29tSWQgOiBwYXJzZUludChyb29tSWQsIDEwKSxcclxuICAgICAgICAgICAgICAgIHNvY2tldElkIDogc29ja2V0LmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm9vbUlkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKCdyb29tRGF0YScsIChyb29tRGF0YSk9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIHNldFJvb20ocm9vbSA9PiAoey4uLnJvb20sXHJcbiAgICAgICAgICAgIENoYXRzOiBfLmNsb25lRGVlcChyb29tRGF0YS5DaGF0cyksXHJcbiAgICAgICAgICAgIFVzZXI6IF8uY2xvbmVEZWVwKHJvb21EYXRhLlVzZXIpLFxyXG4gICAgICAgICAgICBVc2VySWQ6IHJvb21EYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiByb29tRGF0YS5jcmVhdGVkQXQsXHJcbiAgICAgICAgICAgIGlkIDogcm9vbURhdGEuaWQsXHJcbiAgICAgICAgICAgIG1heDogcm9vbURhdGEubWF4LFxyXG4gICAgICAgICAgICBwYXJ0aWNpcGFudHM6IF8uY2xvbmVEZWVwKHJvb21EYXRhLnBhcnRpY2lwYW50cyksXHJcbiAgICAgICAgICAgIHRpdGxlOiByb29tRGF0YS50aXRsZSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiByb29tRGF0YS51cGRhdGVkQXRcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRSb29tKHJvb21EYXRhKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMocm9vbURhdGEuQ2hhdHMpO1xyXG5cclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9mZigncm9vbURhdGEnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNvY2tldC5vbignbmV3TWVzc2FnZScsIChuZXdDaGF0KSA9PiB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyBNZXNzYWdlIGV2ZW50IG9uJyk7XHJcbiAgICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXYpPT4geyByZXR1cm4gWy4uLnByZXYsIG5ld0NoYXRdfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ25ld01lc3NhZ2UnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuXHJcbiAgICAgICAgY2hhdHRpbmdDb250ZW50LmN1cnJlbnQgJiYgdXBkYXRlU2Nyb2xsKCk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZU1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VuZCAke21lc3NhZ2V9IHRvIHNlcnZlcmApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywge1xyXG4gICAgICAgICAgICAgICAgcm9vbUlkIDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBtZS5pZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodDtcclxuICAgIH0gLy8v7LKY7J2MIOyxhO2MheuwqeydhCDriIzroIDsnYTrlYwsIOyxl+ydtCDsmZTsnYTrlYwgPyDqs6Drr7zsooBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHJvb21JZCAhPT0gXCJtYWluXCIgPyBcclxuICAgICAgICBpc0xvYWRpbmcgPyAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+IDogXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxoMj57cm9vbS50aXRsZX08L2gyPiZuYnNwOyZuYnNwOzxoMiBzdHlsZT17e2NvbG9yOiBcImdyZXlcIn19Pntyb29tLnBhcnRpY2lwYW50cy5sZW5ndGh9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRDb250YWluZXJcIiByZWY9e2NoYXR0aW5nQ29udGVudH0gc3R5bGU9e3sgaGVpZ2h0OlwiY2FsYygxMDAlIC0gMTEwcHgpXCIsIHdpZHRoOlwiMTAwJVwiLCBvdmVyZmxvdzonYXV0bycsIGRpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgcGFkZGluZ1JpZ2h0OiAnNSUnLCBwYWRkaW5nTGVmdDonNSUnfX0+XHJcbiAgICAgICAgICAgIHsgbWVzc2FnZXMgJiYgbWVzc2FnZXMubWFwKChtLCBpKT0+PENoYXRXcmFwcGVyIGtleT17aX0gc2VuZGVyPXttLlVzZXIuaWQgPT09IG1lLmlkPyBcIm1lXCIgOiBcIm90aGVyXCJ9PnttLmNoYXR9PC9DaGF0V3JhcHBlcj4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaGVpZ2h0OlwiNjBweFwiLCB3aWR0aDpcIjEwMCVcIixsZWZ0OicwJywgcmlnaHQ6JzAnLCBib3R0b206XCIwXCIsIGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwiLCBib3JkZXJUb3A6IFwic29saWQgdGhpbiAjRUZFRUY1XCIsIGJhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgYm9yZGVyZWQ9e2ZhbHNlfSBzdHlsZT17e3dpZHRoOlwiOTAlXCJ9fSBvbkNoYW5nZT17b25DaGFuZ2VNZXNzYWdlfSB2YWx1ZT17bWVzc2FnZX0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PEFycm93VXBPdXRsaW5lZCAvPn0gc2l6ZT1cImxhcmdlXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogXCI1JVwifX0gb25DbGljaz17b25DbGlja1N1Ym1pdH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgOiAgXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIiwgfX0+XHJcbiAgICAgICAgPGRpdj5Zb3UgZG9u4oCZdCBoYXZlIGEgbWVzc2FnZSBzZWxlY3RlZDwvZGl2PlxyXG4gICAgICAgIDxkaXY+Q2hvb3NlIG9uZSBmcm9tIHlvdXIgZXhpc3RpbmcgbWVzc2FnZXMsIG9yIHN0YXJ0IGEgbmV3IG9uZS48L2Rpdj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG5cclxuLypcclxuPGRpdj5cclxuICAgICAgICA8aDE+WW91IGRvbuKAmXQgaGF2ZSBhIG1lc3NhZ2Ugc2VsZWN0ZWQ8L2gxPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxwPkNob29zZSBvbmUgZnJvbSB5b3VyIGV4aXN0aW5nIG1lc3NhZ2VzLCBvciBzdGFydCBhIG5ldyBvbmUuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gKi8iXSwic291cmNlUm9vdCI6IiJ9