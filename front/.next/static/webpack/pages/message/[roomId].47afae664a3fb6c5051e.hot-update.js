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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/io */ "./utils/io.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Chat.js",
    _this = undefined,
    _s = $RefreshSig$();










var Chat = function Chat(_ref) {
  _s();

  var roomId = _ref.roomId;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      room = _useState[0],
      setRoom = _useState[1]; // 왜 다른 페이지인데 안바뀌냐?


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState3[0],
      setMessage = _useState3[1]; // 입력 메세지


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      messages = _useState4[0],
      setMessages = _useState4[1]; // 채팅방 메세지 기록
  // dynamic page parameter 바뀔때마다 rerendering된다.


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (roomId !== 'main' && isLoading) {
      _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].emit('loadRoom', {
        roomId: parseInt(roomId, 10),
        socketId: _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].id
      });
    }
  }, [roomId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
      /*
            setRoom({...room, roomData});
            const chats = roomData.Chats;
            setMessages({...messages, chats});
            */

      setIsLoading(false);
    });
    return function () {
      _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].off('roomData');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].on('newMessage', function (fullChats) {
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
      _utils_io__WEBPACK_IMPORTED_MODULE_5__["socket"].off('newMessage');
    };
  }, []);

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

  var updateScroll = function updateScroll() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: roomId !== 'main' ? isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
      spin: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 23
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        width: '100%',
        height: '100%'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          height: '50px',
          borderBottom: 'solid thin #EFEEF5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          children: room.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          style: {
            color: 'grey'
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 50
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "chatContainer",
        style: {
          height: 'calc(100% - 110px)',
          width: '100%',
          overflow: 'auto'
        },
        children: messages && messages.map(function (m) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            style: {
              height: '30px'
            },
            children: m.chat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 51
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "input",
        style: {
          position: 'absolute',
          height: '60px',
          width: '100%',
          left: '0',
          right: '0',
          bottom: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: 'solid thin #EFEEF5',
          backgroundColor: 'white'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          bordered: false,
          style: {
            width: '90%'
          },
          onChange: onChangeMessage,
          value: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 61
          }, _this),
          size: "large",
          style: {
            marginRight: '5%'
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "You don\u2019t have a message selected"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }, _this)
  }, void 0, false);
};

_s(Chat, "+9iTvdumGkcJ+5jZTdOGSItmfR0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm5hbWVzIjpbIkNoYXQiLCJyb29tSWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJyb29tIiwic2V0Um9vbSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInNvY2tldCIsImVtaXQiLCJwYXJzZUludCIsInNvY2tldElkIiwiaWQiLCJvbiIsInJvb21EYXRhIiwiQ2hhdHMiLCJvZmYiLCJmdWxsQ2hhdHMiLCJvbkNoYW5nZU1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrU3VibWl0IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVzZXJJZCIsInVwZGF0ZVNjcm9sbCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyQm90dG9tIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRpdGxlIiwiY29sb3IiLCJwYXJ0aWNpcGFudHMiLCJvdmVyZmxvdyIsIm1hcCIsIm0iLCJjaGF0IiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJib3JkZXJUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5SaWdodCIsImZsZXhEaXJlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxxQkFDWkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FEQztBQUFBLE1BQ25CQyxFQURtQixnQkFDbkJBLEVB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SVNBLG1FQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZS9bcm9vbUlkXS40N2FmYWU2NjRhM2ZiNmM1MDUxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQXJyb3dVcE91dGxpbmVkLCBMb2FkaW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tICcuLi91dGlscy9pbyc7XHJcblxyXG5jb25zdCBDaGF0ID0gKHsgcm9vbUlkIH0pID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtyb29tLCBzZXRSb29tXSA9IHVzZVN0YXRlKHt9KTsgLy8g7JmcIOuLpOuluCDtjpjsnbTsp4DsnbjrjbAg7JWI67CU64CM64OQP1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7IC8vIOyeheugpSDrqZTshLjsp4BcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTsgLy8g7LGE7YyF67CpIOuplOyEuOyngCDquLDroZ1cclxuXHJcbiAgLy8gZHluYW1pYyBwYWdlIHBhcmFtZXRlciDrsJTrgJTrlYzrp4jri6QgcmVyZW5kZXJpbmfrkJzri6QuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb29tSWQgIT09ICdtYWluJyAmJiBpc0xvYWRpbmcpIHtcclxuICAgICAgc29ja2V0LmVtaXQoJ2xvYWRSb29tJywge1xyXG4gICAgICAgIHJvb21JZDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgc29ja2V0SWQ6IHNvY2tldC5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3Jvb21JZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uKCdyb29tRGF0YScsIChyb29tRGF0YSkgPT4ge1xyXG4gICAgICAvKlxyXG4gICAgICAgICAgICBzZXRSb29tKHJvb20gPT4gKHsuLi5yb29tLFxyXG4gICAgICAgICAgICBDaGF0czogXy5jbG9uZURlZXAocm9vbURhdGEuQ2hhdHMpLFxyXG4gICAgICAgICAgICBVc2VyOiBfLmNsb25lRGVlcChyb29tRGF0YS5Vc2VyKSxcclxuICAgICAgICAgICAgVXNlcklkOiByb29tRGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcm9vbURhdGEuY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICBpZCA6IHJvb21EYXRhLmlkLFxyXG4gICAgICAgICAgICBtYXg6IHJvb21EYXRhLm1heCxcclxuICAgICAgICAgICAgcGFydGljaXBhbnRzOiBfLmNsb25lRGVlcChyb29tRGF0YS5wYXJ0aWNpcGFudHMpLFxyXG4gICAgICAgICAgICB0aXRsZTogcm9vbURhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcm9vbURhdGEudXBkYXRlZEF0XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgIHNldFJvb20ocm9vbURhdGEpO1xyXG4gICAgICBzZXRNZXNzYWdlcyhyb29tRGF0YS5DaGF0cyk7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgICAgICBzZXRSb29tKHsuLi5yb29tLCByb29tRGF0YX0pO1xyXG4gICAgICAgICAgICBjb25zdCBjaGF0cyA9IHJvb21EYXRhLkNoYXRzO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyh7Li4ubWVzc2FnZXMsIGNoYXRzfSk7XHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc29ja2V0Lm9mZigncm9vbURhdGEnKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uKCduZXdNZXNzYWdlJywgKGZ1bGxDaGF0cykgPT4ge1xyXG4gICAgICAvKiBmdWxsQ2hhdHNcclxuICAgICAgICAgICAgW3tcclxuICAgICAgICAgICAgICAgIGlkOiAyOSxcclxuICAgICAgICAgICAgICAgIGNoYXQ6ICcy7IucIDnrtoQnLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAyMDIyLTAxLTI3VDA1OjA5OjAyLjAwMFosXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IDIwMjItMDEtMjdUMDU6MDk6MDIuMDAwWixcclxuICAgICAgICAgICAgICAgIFVzZXJJZDogMyxcclxuICAgICAgICAgICAgICAgIFJvb21JZDogNzRcclxuICAgICAgICAgICAgICB9LF1cclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgIHNldE1lc3NhZ2VzKGZ1bGxDaGF0cyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQub2ZmKCduZXdNZXNzYWdlJyk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VNZXNzYWdlID0gKGUpID0+IHtcclxuICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBzZW5kICR7bWVzc2FnZX0gdG8gc2VydmVyYCk7XHJcbiAgICAgIHNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIHtcclxuICAgICAgICByb29tSWQ6IHBhcnNlSW50KHJvb21JZCwgMTApLFxyXG4gICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgdXNlcklkOiBtZS5pZCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjcm9sbCA9ICgpID0+IHtcclxuXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyByb29tSWQgIT09ICdtYWluJ1xyXG4gICAgICAgID8gaXNMb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+XHJcbiAgICAgICAgICA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUwcHgnLCBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICNFRkVFRjUnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3Jvb20udGl0bGV9PC9oMj4mbmJzcDsmbmJzcDs8aDIgc3R5bGU9e3sgY29sb3I6ICdncmV5JyB9fT57cm9vbS5wYXJ0aWNpcGFudHMubGVuZ3RofTwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdENvbnRhaW5lclwiIHN0eWxlPXt7IGhlaWdodDogJ2NhbGMoMTAwJSAtIDExMHB4KScsIHdpZHRoOiAnMTAwJScsIG92ZXJmbG93OiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICB7IG1lc3NhZ2VzICYmIG1lc3NhZ2VzLm1hcCgobSkgPT4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JyB9fT57bS5jaGF0fTwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICBib3R0b206ICcwJyxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgdGhpbiAjRUZFRUY1JyxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGJvcmRlcmVkPXtmYWxzZX0gc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19IG9uQ2hhbmdlPXtvbkNoYW5nZU1lc3NhZ2V9IHZhbHVlPXttZXNzYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PEFycm93VXBPdXRsaW5lZCAvPn0gc2l6ZT1cImxhcmdlXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1JScgfX0gb25DbGljaz17b25DbGlja1N1Ym1pdH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgOiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8ZGl2PllvdSBkb27igJl0IGhhdmUgYSBtZXNzYWdlIHNlbGVjdGVkPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+Q2hvb3NlIG9uZSBmcm9tIHlvdXIgZXhpc3RpbmcgbWVzc2FnZXMsIG9yIHN0YXJ0IGEgbmV3IG9uZS48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuXHJcbi8qXHJcbjxkaXY+XHJcbiAgICAgICAgPGgxPllvdSBkb27igJl0IGhhdmUgYSBtZXNzYWdlIHNlbGVjdGVkPC9oMT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8cD5DaG9vc2Ugb25lIGZyb20geW91ciBleGlzdGluZyBtZXNzYWdlcywgb3Igc3RhcnQgYSBuZXcgb25lLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=