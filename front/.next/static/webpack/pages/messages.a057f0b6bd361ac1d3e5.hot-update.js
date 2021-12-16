webpackHotUpdate_N_E("pages/messages",{

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/chat */ "./reducers/chat.js");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Room.module.css */ "./components/Room.module.css");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Room_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CheckBox */ "./components/CheckBox.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Room.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Room = function Room(_ref) {
  _s();

  var height = _ref.height,
      socket = _ref.socket,
      setRoomId = _ref.setRoomId;
  //서버사이드렌더링 - pre rendering 해야할 필요가 있을까?
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      searchUserResult = _useSelector.searchUserResult,
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      visible = _useState[0],
      onChangeVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      groupChat = _useState2[0],
      setGroupChat = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(me.participateRoom),
      RoomList = _useState3[0],
      setRoomList = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    socket.on('newRoom', function (data) {
      setRoomList([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(RoomList), [data])); //console.log(data);
    });
  }, []);

  var showModal = function showModal() {
    onChangeVisible(true);
  };

  var handleCancel = function handleCancel() {
    onChangeVisible(false);
  };

  var handleOk = function handleOk() {
    var users = [];
    Object.entries(groupChat).forEach(function (v) {
      if (v[1] === true) {
        users.push(v[0]);
      }
    });
    dispatch({
      type: _reducers_chat__WEBPACK_IMPORTED_MODULE_7__["CREATE_CHAT_REQUEST"],
      data: {
        "users": users
      }
    });
  };

  var onSearch = function onSearch(e) {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["SEARCH_USER_REQUEST"],
      data: e
    });
  };

  var handleChange = function handleChange(_ref2) {
    var _ref2$target = _ref2.target,
        label = _ref2$target.label,
        checked = _ref2$target.checked;
    setGroupChat(_objectSpread(_objectSpread({}, groupChat), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, label, checked)));
  }; //채팅방 클릭했을때 채팅방 보이기


  var onClickRoom = function onClickRoom(roomId) {
    setRoomId(roomId);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "messageTitle",
      style: {
        height: "50px",
        borderBottom: "solid thin #EFEEF5",
        display: "flex"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        style: {
          width: "600px",
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "1"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
              style: {
                margin: "0"
              },
              children: "\xA0\xA0Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "text",
              shape: "circle",
              onClick: showModal,
              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 86
              }, _this),
              style: {
                margin: "0 15px"
              },
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
            visible: visible,
            title: "New Messages",
            onOk: handleOk,
            onCancel: handleCancel,
            bodyStyle: {
              height: "500px"
            },
            footer: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "primary",
              onClick: handleOk,
              children: "Next"
            }, "submit", false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 25
            }, _this)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: searchUserResult.map(function (user) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  className: _Room_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.userList,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_CheckBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    user: user,
                    handleChange: handleChange,
                    label: user.id,
                    value: groupChat[user.id]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 25
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      id: "scrollableDiv",
      style: {
        height: height - 50,
        overflow: 'auto'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
        itemLayout: "vertical",
        dataSource: RoomList,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: _Room_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.roomList,
            onClick: function onClick() {
              return onClickRoom(item.id);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item.Meta, {
                title: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 13
              }, _this), item.title]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, _this);
};

_s(Room, "hjMqjAi0FON3UT2EA+OStNq+qJs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = Room;
/* harmony default export */ __webpack_exports__["default"] = (Room);

var _c;

$RefreshReg$(_c, "Room");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJzb2NrZXQiLCJzZXRSb29tSWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZWFyY2hVc2VyUmVzdWx0IiwibWUiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJvbkNoYW5nZVZpc2libGUiLCJncm91cENoYXQiLCJzZXRHcm91cENoYXQiLCJwYXJ0aWNpcGF0ZVJvb20iLCJSb29tTGlzdCIsInNldFJvb21MaXN0IiwidXNlRWZmZWN0Iiwib24iLCJkYXRhIiwic2hvd01vZGFsIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlT2siLCJ1c2VycyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwidiIsInB1c2giLCJ0eXBlIiwiQ1JFQVRFX0NIQVRfUkVRVUVTVCIsIm9uU2VhcmNoIiwiZSIsIlNFQVJDSF9VU0VSX1JFUVVFU1QiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImNoZWNrZWQiLCJvbkNsaWNrUm9vbSIsInJvb21JZCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJtYXAiLCJzdHlsZXMiLCJ1c2VyTGlzdCIsImlkIiwib3ZlcmZsb3ciLCJpdGVtIiwicm9vbUxpc3QiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLE1BQXdCLFFBQXhCQSxNQUF3QjtBQUFBLE1BQWhCQyxTQUFn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bUJBQU8sRUFBRTtBQUFBLHFCQUFJZixXQUFXLENBQUNjLElBQUksQ0FBQ0YsRUFBTixDQUFmO0FBQUEsYUFBMUM7QUFBQSxtQ0FDQSxzRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSxzQ0FFSSxzRUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0EscUJBQUssRUFBRUUsSUFBSSxDQUFDRTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosRUFLQ0YsSUFBSSxDQUFDRSxLQUxOO0FBQUEsZUFDU0YsSUFBSSxDQUFDRixFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0VILENBekhEOztHQUFNcEQsSTtVQUVlSyx1RCxFQUNnQkMsdUQ7OztLQUgvQk4sSTtBQTJIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuYTA1N2YwYjZiZDM2MWFjMWQzZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTGlzdCwgQXZhdGFyLCBNb2RhbCwgSW5wdXQsIFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNFQVJDSF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgQ1JFQVRFX0NIQVRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL2NoYXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm9vbS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IENoZWNrQm94IGZyb20gJy4vQ2hlY2tCb3gnO1xyXG5cclxuY29uc3QgUm9vbSA9ICh7IGhlaWdodCwgc29ja2V0LCBzZXRSb29tSWQgfSkgPT4ge1xyXG4gICAgLy/shJzrsoTsgqzsnbTrk5zroIzrjZTrp4EgLSBwcmUgcmVuZGVyaW5nIO2VtOyVvO2VoCDtlYTsmpTqsIAg7J6I7J2E6rmMP1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBzZWFyY2hVc2VyUmVzdWx0LCBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFsgdmlzaWJsZSwgb25DaGFuZ2VWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbIGdyb3VwQ2hhdCwgc2V0R3JvdXBDaGF0IF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbIFJvb21MaXN0LCBzZXRSb29tTGlzdCBdID0gdXNlU3RhdGUobWUucGFydGljaXBhdGVSb29tKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzb2NrZXQub24oJ25ld1Jvb20nLCAoZGF0YSk9PntcclxuICAgICAgICAgICAgc2V0Um9vbUxpc3QoWy4uLlJvb21MaXN0LCBkYXRhXSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlVmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VWaXNpYmxlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcnMgPVtdO1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGdyb3VwQ2hhdCkuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgIGlmICh2WzFdID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKHZbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ1JFQVRFX0NIQVRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogeyBcInVzZXJzXCI6IHVzZXJzIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfVVNFUl9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgbGFiZWwsIGNoZWNrZWQgfX0pID0+IHtcclxuICAgICAgICBzZXRHcm91cENoYXQoeyAuLi5ncm91cENoYXQsIFtsYWJlbF06IGNoZWNrZWQgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+yxhO2MheuwqSDtgbTrpq3tlojsnYTrlYwg7LGE7YyF67CpIOuztOydtOq4sFxyXG4gICAgY29uc3Qgb25DbGlja1Jvb20gPSAocm9vbUlkKSA9PiB7XHJcbiAgICAgICAgc2V0Um9vbUlkKHJvb21JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdFwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VUaXRsZVwiIHN0eWxlPXt7aGVpZ2h0OiBcIjUwcHhcIiwgYm9yZGVyQm90dG9tOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBkaXNwbGF5OiBcImZsZXhcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiNjAwcHhcIiwgZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZmxleEdyb3c6IFwiMVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luOlwiMFwifX0+Jm5ic3A7Jm5ic3A7TWVzc2FnZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBmbGV4R3JvdzogXCIwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBvbkNsaWNrPXtzaG93TW9kYWx9IGljb249ezxQbHVzT3V0bGluZWQgLz59IHN0eWxlPXt7bWFyZ2luOiBcIjAgMTVweFwifX0gc2l6ZT1cImxhcmdlXCI+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5ldyBNZXNzYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICAgICAgICAgICAgICBib2R5U3R5bGU9e3toZWlnaHQ6IFwiNTAwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVPa30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFBlb3BsZVwiIG9uU2VhcmNoPXtvblNlYXJjaH0gYm9yZGVyZWQ9e2ZhbHNlfSAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjpcImNvbHVtblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlYXJjaFVzZXJSZXN1bHQubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJMaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3VzZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtncm91cENoYXRbdXNlci5pZF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwic2Nyb2xsYWJsZURpdlwiIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQtNTAgLCBvdmVyZmxvdzogJ2F1dG8nfX0+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgIGRhdGFTb3VyY2U9e1Jvb21MaXN0fVxyXG4gICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vbUxpc3R9IG9uQ2xpY2s9eygpPT5vbkNsaWNrUm9vbShpdGVtLmlkKX0+XHJcbiAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9