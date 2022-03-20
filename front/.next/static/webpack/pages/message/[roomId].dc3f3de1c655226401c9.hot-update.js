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
      console.log(messages);
      setMessages([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages), [newChat]));
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
      lineNumber: 113,
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
          lineNumber: 116,
          columnNumber: 13
        }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
          style: {
            color: "grey"
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 46
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
            lineNumber: 120,
            columnNumber: 48
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
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
          lineNumber: 125,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 61
          }, _this),
          size: "large",
          style: {
            marginRight: "5%"
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
        lineNumber: 131,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm5hbWVzIjpbIkNoYXRXcmFwcGVyIiwic3R5bGVkIiwiZGl2Iiwic2VuZGVyIiwiQ2hhdCIsInJvb21JZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsInJvb20iLCJzZXRSb29tIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY2hhdHRpbmdDb250ZW50IiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic29ja2V0IiwiZW1pdCIsInBhcnNlSW50Iiwic29ja2V0SWQiLCJpZCIsIm9uIiwicm9vbURhdGEiLCJDaGF0cyIsIm9mZiIsIm5ld0NoYXQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInVwZGF0ZVNjcm9sbCIsIm9uQ2hhbmdlTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2tTdWJtaXQiLCJsZW5ndGgiLCJ1c2VySWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0aXRsZSIsImNvbG9yIiwicGFydGljaXBhbnRzIiwib3ZlcmZsb3ciLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXAiLCJtIiwiaSIsIlVzZXIiLCJjaGF0IiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJib3JkZXJUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkhBSUg7QUFBQSxNQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxTQUFjQSxNQUFNLEtBQUcsSUFBVCxHQUFjLFVBQWQsR0FBeUIsWUFBdkM7QUFBQSxDQUpHLENBQWpCO0tBQU1ILFc7O0FBVU4sSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sUUFBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFNBQWJBLE1BQWE7O0FBQUEscUJBQ1ZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBZjtBQUFBLEdBQUQsQ0FERDtBQUFBLE1BQ2pCQyxFQURpQixnQkFDakJBLEVBRGlCOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDLEVBQUQsQ0FGUDtBQUFBLE1BRWxCQyxJQUZrQjtBQUFBLE1BRVpDLE9BRlk7O0FBQUEsbUJBR1NGLHNEQUFRLENBQUMsSUFBRCxDQUhqQjtBQUFBLE1BR2xCRyxTQUhrQjtBQUFBLE1BR1BDLFlBSE87O0FBQUEsbUJBSUtKLHNEQUFRLENBQUMsRUFBRCxDQUpiO0FBQUEsTUFJbEJLLE9BSmtCO0FBQUEsTUFJVEMsVUFKUyxrQkFJbUI7OztBQUpuQixtQkFLT04sc0RBQVEsQ0FBQyxFQUFELENBTGY7QUFBQSxNQUtsQk8sUUFMa0I7QUFBQSxNQUtSQyxXQUxRLGtCQUtxQjs7O0FBQzlDLE1BQU1DLGVBQWUsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTlCO0FBRUFDLHlEQUFTLENBQUMsWUFBSTtBQUNWLFFBQUloQixNQUFNLEtBQUssTUFBWCxJQUFxQlEsU0FBekIsRUFBb0M7QUFDaENTLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxVQUFaLEVBQXdCO0FBQ3BCbEIsY0FBTSxFQUFHbUIsUUFBUSxDQUFDbkIsTUFBRCxFQUFTLEVBQVQsQ0FERztBQUVwQm9CLGdCQUFRLEVBQUdILGdEQUFNLENBQUNJO0FBRkUsT0FBeEI7QUFJSDtBQUNKLEdBUFEsRUFPTixDQUFDckIsTUFBRCxDQVBNLENBQVQ7QUFTQWdCLHlEQUFTLENBQUMsWUFBSTtBQUVWQyxvREFBTSxDQUFDSyxFQUFQLENBQVUsVUFBVixFQUFzQixVQUFDQyxRQUFELEVBQVk7QUFFOUI7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFWWhCLGFBQU8sQ0FBQ2dCLFFBQUQsQ0FBUDtBQUNBVixpQkFBVyxDQUFDVSxRQUFRLENBQUNDLEtBQVYsQ0FBWDtBQUVBZixrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUVILEtBckJEO0FBdUJBLFdBQU8sWUFBTTtBQUNUUSxzREFBTSxDQUFDUSxHQUFQLENBQVcsVUFBWDtBQUNILEtBRkQ7QUFJSCxHQTdCUSxFQTZCTixFQTdCTSxDQUFUO0FBK0JBVCx5REFBUyxDQUFDLFlBQUk7QUFFVkMsb0RBQU0sQ0FBQ0ssRUFBUCxDQUFVLFlBQVYsRUFBd0IsVUFBQ0ksT0FBRCxFQUFhO0FBQ2xDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWWhCLFFBQVo7QUFDQ0MsaUJBQVcsd0dBQUtELFFBQUwsSUFBZWMsT0FBZixHQUFYO0FBQ0gsS0FKRDtBQU1BLFdBQU8sWUFBTTtBQUNUVCxzREFBTSxDQUFDUSxHQUFQLENBQVcsWUFBWDtBQUNILEtBRkQ7QUFJSCxHQVpRLEVBWU4sRUFaTSxDQUFUO0FBZUFULHlEQUFTLENBQUMsWUFBSztBQUVYRixtQkFBZSxDQUFDZSxPQUFoQixJQUEyQkMsWUFBWSxFQUF2QztBQUVILEdBSlEsQ0FBVDs7QUFNQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUMzQnJCLGNBQVUsQ0FBQ3FCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVY7QUFDSCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QixRQUFJekIsT0FBTyxDQUFDMEIsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUNwQlQsYUFBTyxDQUFDQyxHQUFSLGdCQUFvQmxCLE9BQXBCO0FBRUFPLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQ3ZCbEIsY0FBTSxFQUFHbUIsUUFBUSxDQUFDbkIsTUFBRCxFQUFTLEVBQVQsQ0FETTtBQUV2QlUsZUFBTyxFQUFQQSxPQUZ1QjtBQUd2QjJCLGNBQU0sRUFBRWpDLEVBQUUsQ0FBQ2lCO0FBSFksT0FBM0I7QUFNQVYsZ0JBQVUsQ0FBQyxFQUFELENBQVY7QUFDSDtBQUNKLEdBWkQ7O0FBY0EsTUFBTW1CLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJoQixtQkFBZSxDQUFDZSxPQUFoQixDQUF3QlMsU0FBeEIsR0FBb0N4QixlQUFlLENBQUNlLE9BQWhCLENBQXdCVSxZQUE1RDtBQUNILEdBRkQsQ0F2RnlCLENBeUZ2Qjs7O0FBQ0Ysc0JBQ0k7QUFBQSxjQUNFdkMsTUFBTSxLQUFLLE1BQVgsR0FDRlEsU0FBUyxnQkFBSSxxRUFBQyxpRUFBRDtBQUFpQixVQUFJO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSixnQkFDVDtBQUFLLFdBQUssRUFBRTtBQUFDZ0MsYUFBSyxFQUFDLE1BQVA7QUFBZUMsY0FBTSxFQUFDO0FBQXRCLE9BQVo7QUFBQSw4QkFDSTtBQUFLLGFBQUssRUFBRTtBQUFDQSxnQkFBTSxFQUFFLE1BQVQ7QUFBaUJDLHNCQUFZLEVBQUUsb0JBQS9CO0FBQXFEQyxpQkFBTyxFQUFDLE1BQTdEO0FBQXFFQyxvQkFBVSxFQUFDLFFBQWhGO0FBQTBGQyx3QkFBYyxFQUFDO0FBQXpHLFNBQVo7QUFBQSxnQ0FDQTtBQUFBLG9CQUFLdkMsSUFBSSxDQUFDd0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLDJCQUNpQztBQUFJLGVBQUssRUFBRTtBQUFDQyxpQkFBSyxFQUFFO0FBQVIsV0FBWDtBQUFBLG9CQUE2QnpDLElBQUksQ0FBQzBDLFlBQUwsQ0FBa0JaO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBK0IsV0FBRyxFQUFFdEIsZUFBcEM7QUFBcUQsYUFBSyxFQUFFO0FBQUUyQixnQkFBTSxFQUFDLG9CQUFUO0FBQStCRCxlQUFLLEVBQUMsTUFBckM7QUFBNkNTLGtCQUFRLEVBQUMsTUFBdEQ7QUFBOEROLGlCQUFPLEVBQUMsTUFBdEU7QUFBOEVPLHVCQUFhLEVBQUUsUUFBN0Y7QUFBdUdDLHNCQUFZLEVBQUUsSUFBckg7QUFBMkhDLHFCQUFXLEVBQUM7QUFBdkksU0FBNUQ7QUFBQSxrQkFDRXhDLFFBQVEsSUFBSUEsUUFBUSxDQUFDeUMsR0FBVCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDhCQUFRLHFFQUFDLFdBQUQ7QUFBcUIsa0JBQU0sRUFBRUQsQ0FBQyxDQUFDRSxJQUFGLENBQU9uQyxFQUFQLEtBQWNqQixFQUFFLENBQUNpQixFQUFqQixHQUFxQixJQUFyQixHQUE0QixPQUF6RDtBQUFBLHNCQUFtRWlDLENBQUMsQ0FBQ0c7QUFBckUsYUFBa0JGLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVI7QUFBQSxTQUFiO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBU0k7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBdUIsYUFBSyxFQUFFO0FBQUNHLGtCQUFRLEVBQUMsVUFBVjtBQUFzQmpCLGdCQUFNLEVBQUMsTUFBN0I7QUFBcUNELGVBQUssRUFBQyxNQUEzQztBQUFrRG1CLGNBQUksRUFBQyxHQUF2RDtBQUE0REMsZUFBSyxFQUFDLEdBQWxFO0FBQXVFQyxnQkFBTSxFQUFDLEdBQTlFO0FBQW1GbEIsaUJBQU8sRUFBQyxNQUEzRjtBQUFtR0Msb0JBQVUsRUFBRSxRQUEvRztBQUM5QkMsd0JBQWMsRUFBQyxlQURlO0FBQ0VpQixtQkFBUyxFQUFFLG9CQURiO0FBQ21DQyx5QkFBZSxFQUFDO0FBRG5ELFNBQTlCO0FBQUEsZ0NBRUkscUVBQUMsMENBQUQ7QUFBTyxrQkFBUSxFQUFFLEtBQWpCO0FBQXdCLGVBQUssRUFBRTtBQUFDdkIsaUJBQUssRUFBQztBQUFQLFdBQS9CO0FBQThDLGtCQUFRLEVBQUVULGVBQXhEO0FBQXlFLGVBQUssRUFBRXJCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSxxRUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQXVCLGVBQUssRUFBQyxRQUE3QjtBQUFzQyxjQUFJLGVBQUUscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBNUM7QUFBaUUsY0FBSSxFQUFDLE9BQXRFO0FBQThFLGVBQUssRUFBRTtBQUFDc0QsdUJBQVcsRUFBRTtBQUFkLFdBQXJGO0FBQTBHLGlCQUFPLEVBQUU3QjtBQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZFLGdCQWtCRjtBQUFLLFdBQUssRUFBRTtBQUFDUSxlQUFPLEVBQUMsTUFBVDtBQUFpQk8scUJBQWEsRUFBRSxRQUFoQztBQUEwQ0wsc0JBQWMsRUFBQyxRQUF6RDtBQUFtRUQsa0JBQVUsRUFBQyxRQUE5RTtBQUF3RkosYUFBSyxFQUFDLE1BQTlGO0FBQXNHQyxjQUFNLEVBQUM7QUFBN0csT0FBWjtBQUFBLDhCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CQSxtQkFESjtBQTBCSCxDQXBIRDs7R0FBTTFDLEk7VUFDYUUsdUQ7OztNQURiRixJO0FBc0hTQSxtRUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW3Jvb21JZF0uZGMzZjNkZTFjNjU1MjI2NDAxYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQXJyb3dVcE91dGxpbmVkLCBMb2FkaW5nT3V0bGluZWQsIFVzZXJBZGRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNvY2tldCB9IGZyb20gJy4uL3V0aWxzL2lvJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDaGF0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDogNTAlO1xyXG5ib3JkZXI6IHNvbGlkIDFweCAjNEM0QzUxO1xyXG5ib3JkZXItcmFkaXVzOiA1JTtcclxuYWxpZ24tc2VsZjogJHsoe3NlbmRlcn0pID0+IHNlbmRlcj09PSdtZSc/J2ZsZXgtZW5kJzonZmxleC1zdGFydCd9O1xyXG5wYWRkaW5nOiAyJTtcclxubWFyZ2luOiAxJSAwO1xyXG53b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbmA7XHJcblxyXG5jb25zdCBDaGF0ID0gKHsgcm9vbUlkIH0pID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgW3Jvb20sIHNldFJvb21dID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7IC8vSW5wdXQg7J6F66ClIOuplOyEuOyngFxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8v7LGE7YyF67CpIOuplOyEuOyngCDquLDroZ1cclxuICAgIGNvbnN0IGNoYXR0aW5nQ29udGVudCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAocm9vbUlkICE9PSBcIm1haW5cIiAmJiBpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xvYWRSb29tJywge1xyXG4gICAgICAgICAgICAgICAgcm9vbUlkIDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRJZCA6IHNvY2tldC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Jvb21JZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNvY2tldC5vbigncm9vbURhdGEnLCAocm9vbURhdGEpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBzZXRSb29tKHJvb20gPT4gKHsuLi5yb29tLFxyXG4gICAgICAgICAgICBDaGF0czogXy5jbG9uZURlZXAocm9vbURhdGEuQ2hhdHMpLFxyXG4gICAgICAgICAgICBVc2VyOiBfLmNsb25lRGVlcChyb29tRGF0YS5Vc2VyKSxcclxuICAgICAgICAgICAgVXNlcklkOiByb29tRGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcm9vbURhdGEuY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICBpZCA6IHJvb21EYXRhLmlkLFxyXG4gICAgICAgICAgICBtYXg6IHJvb21EYXRhLm1heCxcclxuICAgICAgICAgICAgcGFydGljaXBhbnRzOiBfLmNsb25lRGVlcChyb29tRGF0YS5wYXJ0aWNpcGFudHMpLFxyXG4gICAgICAgICAgICB0aXRsZTogcm9vbURhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcm9vbURhdGEudXBkYXRlZEF0XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0Um9vbShyb29tRGF0YSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJvb21EYXRhLkNoYXRzKTtcclxuXHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ3Jvb21EYXRhJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBzb2NrZXQub24oJ25ld01lc3NhZ2UnLCAobmV3Q2hhdCkgPT4ge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgTWVzc2FnZSBldmVudCBvbicpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBuZXdDaGF0XSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ25ld01lc3NhZ2UnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuXHJcbiAgICAgICAgY2hhdHRpbmdDb250ZW50LmN1cnJlbnQgJiYgdXBkYXRlU2Nyb2xsKCk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZU1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VuZCAke21lc3NhZ2V9IHRvIHNlcnZlcmApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywge1xyXG4gICAgICAgICAgICAgICAgcm9vbUlkIDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBtZS5pZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXR0aW5nQ29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodDtcclxuICAgIH0gLy8v7LKY7J2MIOyxhO2MheuwqeydhCDriIzroIDsnYTrlYwsIOyxl+ydtCDsmZTsnYTrlYwgPyDqs6Drr7zsooBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHJvb21JZCAhPT0gXCJtYWluXCIgPyBcclxuICAgICAgICBpc0xvYWRpbmcgPyAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+IDogXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxoMj57cm9vbS50aXRsZX08L2gyPiZuYnNwOyZuYnNwOzxoMiBzdHlsZT17e2NvbG9yOiBcImdyZXlcIn19Pntyb29tLnBhcnRpY2lwYW50cy5sZW5ndGh9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRDb250YWluZXJcIiByZWY9e2NoYXR0aW5nQ29udGVudH0gc3R5bGU9e3sgaGVpZ2h0OlwiY2FsYygxMDAlIC0gMTEwcHgpXCIsIHdpZHRoOlwiMTAwJVwiLCBvdmVyZmxvdzonYXV0bycsIGRpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgcGFkZGluZ1JpZ2h0OiAnNSUnLCBwYWRkaW5nTGVmdDonNSUnfX0+XHJcbiAgICAgICAgICAgIHsgbWVzc2FnZXMgJiYgbWVzc2FnZXMubWFwKChtLCBpKT0+PENoYXRXcmFwcGVyIGtleT17aX0gc2VuZGVyPXttLlVzZXIuaWQgPT09IG1lLmlkPyBcIm1lXCIgOiBcIm90aGVyXCJ9PnttLmNoYXR9PC9DaGF0V3JhcHBlcj4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaGVpZ2h0OlwiNjBweFwiLCB3aWR0aDpcIjEwMCVcIixsZWZ0OicwJywgcmlnaHQ6JzAnLCBib3R0b206XCIwXCIsIGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwiLCBib3JkZXJUb3A6IFwic29saWQgdGhpbiAjRUZFRUY1XCIsIGJhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgYm9yZGVyZWQ9e2ZhbHNlfSBzdHlsZT17e3dpZHRoOlwiOTAlXCJ9fSBvbkNoYW5nZT17b25DaGFuZ2VNZXNzYWdlfSB2YWx1ZT17bWVzc2FnZX0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PEFycm93VXBPdXRsaW5lZCAvPn0gc2l6ZT1cImxhcmdlXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogXCI1JVwifX0gb25DbGljaz17b25DbGlja1N1Ym1pdH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgOiAgXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIiwgfX0+XHJcbiAgICAgICAgPGRpdj5Zb3UgZG9u4oCZdCBoYXZlIGEgbWVzc2FnZSBzZWxlY3RlZDwvZGl2PlxyXG4gICAgICAgIDxkaXY+Q2hvb3NlIG9uZSBmcm9tIHlvdXIgZXhpc3RpbmcgbWVzc2FnZXMsIG9yIHN0YXJ0IGEgbmV3IG9uZS48L2Rpdj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG5cclxuLypcclxuPGRpdj5cclxuICAgICAgICA8aDE+WW91IGRvbuKAmXQgaGF2ZSBhIG1lc3NhZ2Ugc2VsZWN0ZWQ8L2gxPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxwPkNob29zZSBvbmUgZnJvbSB5b3VyIGV4aXN0aW5nIG1lc3NhZ2VzLCBvciBzdGFydCBhIG5ldyBvbmUuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gKi8iXSwic291cmNlUm9vdCI6IiJ9