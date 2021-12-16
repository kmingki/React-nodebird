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
      socket = _ref.socket;
  //서버사이드렌더링 - pre rendering 해야할 필요가 있을까?
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      searchUserResult = _useSelector.searchUserResult;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      visible = _useState[0],
      onChangeVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      groupChat = _useState2[0],
      setGroupChat = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      RoomList = _useState3[0],
      setRoomList = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    socket.on('newRoom', function (data) {
      setRoomList([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(RoomList), [data]));
      console.log(data);
    });
  }, []);
  var listData = searchUserResult.map(function (v, i) {
    return {
      idx: i,
      uid: v.id,
      title: v.nickname,
      content: v.email,
      avatar: v.photo
    };
  });

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
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
              lineNumber: 76,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
                lineNumber: 81,
                columnNumber: 86
              }, _this),
              style: {
                margin: "0 15px"
              },
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
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
              lineNumber: 90,
              columnNumber: 25
            }, _this)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
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
                    lineNumber: 101,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 25
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item.Meta, {
              title: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 13
            }, _this), item.content]
          }, item.id, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, _this);
};

_s(Room, "x5x/jLbxvUqvWgRRLKYG/UhoKyc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJzb2NrZXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZWFyY2hVc2VyUmVzdWx0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwib25DaGFuZ2VWaXNpYmxlIiwiZ3JvdXBDaGF0Iiwic2V0R3JvdXBDaGF0IiwiUm9vbUxpc3QiLCJzZXRSb29tTGlzdCIsInVzZUVmZmVjdCIsIm9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0RGF0YSIsIm1hcCIsInYiLCJpIiwiaWR4IiwidWlkIiwiaWQiLCJ0aXRsZSIsIm5pY2tuYW1lIiwiY29udGVudCIsImVtYWlsIiwiYXZhdGFyIiwicGhvdG8iLCJzaG93TW9kYWwiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVPayIsInVzZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJwdXNoIiwidHlwZSIsIkNSRUFURV9DSEFUX1JFUVVFU1QiLCJvblNlYXJjaCIsImUiLCJTRUFSQ0hfVVNFUl9SRVFVRVNUIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJjaGVja2VkIiwiYm9yZGVyQm90dG9tIiwiZGlzcGxheSIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibWFyZ2luIiwiZmxleERpcmVjdGlvbiIsInN0eWxlcyIsInVzZXJMaXN0Iiwib3ZlcmZsb3ciLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxNQUFxQixRQUFyQkEsTUFBcUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7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O0FBQ0Esa0JBQVUsRUFBQyxVQURYO0FBRUEsa0JBQVUsRUFBRTlDLFFBRlo7QUFHQSxrQkFBVSxFQUFFLG9CQUFBK0MsSUFBSTtBQUFBLDhCQUNoQixzRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSxvQ0FFSSxzRUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0EsbUJBQUssRUFBRUEsSUFBSSxDQUFDakM7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLEVBS0NpQyxJQUFJLENBQUMvQixPQUxOO0FBQUEsYUFDUytCLElBQUksQ0FBQ2xDLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZ0I7QUFBQTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtFSCxDQTFIRDs7R0FBTTNCLEk7VUFFZUksdUQsRUFDWUMsdUQ7OztLQUgzQkwsSTtBQTRIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuYTI3ZWYwODcyYWI4YjE0ZmRkOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTGlzdCwgQXZhdGFyLCBNb2RhbCwgSW5wdXQsIFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNFQVJDSF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgQ1JFQVRFX0NIQVRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL2NoYXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm9vbS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IENoZWNrQm94IGZyb20gJy4vQ2hlY2tCb3gnO1xyXG5cclxuY29uc3QgUm9vbSA9ICh7IGhlaWdodCwgc29ja2V0IH0pID0+IHtcclxuICAgIC8v7ISc67KE7IKs7J2065Oc66CM642U66eBIC0gcHJlIHJlbmRlcmluZyDtlbTslbztlaAg7ZWE7JqU6rCAIOyeiOydhOq5jD9cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgc2VhcmNoVXNlclJlc3VsdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFsgdmlzaWJsZSwgb25DaGFuZ2VWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbIGdyb3VwQ2hhdCwgc2V0R3JvdXBDaGF0IF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbIFJvb21MaXN0LCBzZXRSb29tTGlzdCBdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNvY2tldC5vbignbmV3Um9vbScsIChkYXRhKT0+e1xyXG4gICAgICAgICAgICBzZXRSb29tTGlzdChbLi4uUm9vbUxpc3QsIGRhdGFdKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbGlzdERhdGEgPSBzZWFyY2hVc2VyUmVzdWx0Lm1hcCgodiwgaSkgPT4gKHsgXHJcbiAgICAgICAgaWR4OiBpLFxyXG4gICAgICAgIHVpZDogdi5pZCxcclxuICAgICAgICB0aXRsZTogdi5uaWNrbmFtZSxcclxuICAgICAgICBjb250ZW50OiB2LmVtYWlsLFxyXG4gICAgICAgIGF2YXRhcjogdi5waG90byxcclxuICAgICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlVmlzaWJsZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJzID1bXTtcclxuICAgICAgICBPYmplY3QuZW50cmllcyhncm91cENoYXQpLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICBpZiAodlsxXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaCh2WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENSRUFURV9DSEFUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgXCJ1c2Vyc1wiOiB1c2VycyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IGxhYmVsLCBjaGVja2VkIH19KSA9PiB7XHJcbiAgICAgICAgc2V0R3JvdXBDaGF0KHsgLi4uZ3JvdXBDaGF0LCBbbGFiZWxdOiBjaGVja2VkIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdFwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VUaXRsZVwiIHN0eWxlPXt7aGVpZ2h0OiBcIjUwcHhcIiwgYm9yZGVyQm90dG9tOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBkaXNwbGF5OiBcImZsZXhcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiNjAwcHhcIiwgZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZmxleEdyb3c6IFwiMVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luOlwiMFwifX0+Jm5ic3A7Jm5ic3A7TWVzc2FnZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBmbGV4R3JvdzogXCIwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBvbkNsaWNrPXtzaG93TW9kYWx9IGljb249ezxQbHVzT3V0bGluZWQgLz59IHN0eWxlPXt7bWFyZ2luOiBcIjAgMTVweFwifX0gc2l6ZT1cImxhcmdlXCI+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5ldyBNZXNzYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICAgICAgICAgICAgICBib2R5U3R5bGU9e3toZWlnaHQ6IFwiNTAwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVPa30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFBlb3BsZVwiIG9uU2VhcmNoPXtvblNlYXJjaH0gYm9yZGVyZWQ9e2ZhbHNlfSAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjpcImNvbHVtblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlYXJjaFVzZXJSZXN1bHQubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJMaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3VzZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtncm91cENoYXRbdXNlci5pZF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwic2Nyb2xsYWJsZURpdlwiIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQtNTAgLCBvdmVyZmxvdzogJ2F1dG8nfX0+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgIGRhdGFTb3VyY2U9e1Jvb21MaXN0fVxyXG4gICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=