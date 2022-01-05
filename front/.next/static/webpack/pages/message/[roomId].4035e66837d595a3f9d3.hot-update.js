webpackHotUpdate_N_E("pages/message/[roomId]",{

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Room.module.css */ "./components/Room.module.css");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Room_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CheckBox */ "./components/CheckBox.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/io */ "./utils/io.js");
/* harmony import */ var _reducers_chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/chat */ "./reducers/chat.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Room.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










 //import { useWantingRoom } from '../hooks/chatHooks';



var Room = function Room(_ref) {
  _s();

  var height = _ref.height;
  //서버사이드렌더링 - pre rendering 해야할 필요가 있을까?
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      searchUserResult = _useSelector.searchUserResult,
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.chat;
  }),
      rooms = _useSelector2.rooms;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      visible = _useState[0],
      onChangeVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      groupChat = _useState2[0],
      setGroupChat = _useState2[1];

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
    users.push(me.id.toString());
    _utils_io__WEBPACK_IMPORTED_MODULE_9__["socket"].emit('createRoomRequest', me.id, users);
    console.log('create room request');
    onChangeVisible(false);
    setGroupChat({});
    /*
    dispatch({
        type: CREATE_CHAT_REQUEST,
        data: { "users": users }
    });
    */
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
  }; //채팅방 클릭했을때 채팅방 load


  var onClickRoom = function onClickRoom(room) {
    return router.push("/message/".concat(room.id));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: "messageTitle",
      style: {
        height: "50px",
        borderBottom: "solid thin #EFEEF5",
        display: "flex"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        style: {
          width: "600px",
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "1"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h2", {
              style: {
                margin: "0"
              },
              children: "\xA0\xA0Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "text",
              shape: "circle",
              onClick: showModal,
              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 86
              }, _this),
              style: {
                margin: "0 15px"
              },
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
            visible: visible,
            title: "New Messages",
            onOk: handleOk,
            onCancel: handleCancel,
            bodyStyle: {
              height: "500px"
            },
            footer: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "primary",
              onClick: handleOk,
              children: "Next"
            }, "submit", false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 25
            }, _this)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: searchUserResult.map(function (user) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  className: _Room_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.userList,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_CheckBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    user: user,
                    handleChange: handleChange,
                    label: user.id,
                    value: groupChat[user.id]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 25
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      id: "scrollableDiv",
      style: {
        height: height - 50,
        overflow: 'auto'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
        itemLayout: "vertical",
        dataSource: rooms,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: _Room_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.roomList,
            onClick: function onClick() {
              return onClickRoom(item);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item.Meta, {
                title: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 13
              }, _this), item.title]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, _this);
};

_s(Room, "SDO4IElN2eSLyFzpERLA13BE/CU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZWFyY2hVc2VyUmVzdWx0IiwibWUiLCJjaGF0Iiwicm9vbXMiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJvbkNoYW5nZVZpc2libGUiLCJncm91cENoYXQiLCJzZXRHcm91cENoYXQiLCJzaG93TW9kYWwiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVPayIsInVzZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJ2IiwicHVzaCIsImlkIiwidG9TdHJpbmciLCJzb2NrZXQiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsIm9uU2VhcmNoIiwiZSIsInR5cGUiLCJTRUFSQ0hfVVNFUl9SRVFVRVNUIiwiZGF0YSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImxhYmVsIiwiY2hlY2tlZCIsIm9uQ2xpY2tSb29tIiwicm9vbSIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJtYXAiLCJzdHlsZXMiLCJ1c2VyTGlzdCIsIm92ZXJmbG93IiwiaXRlbSIsInJvb21MaXN0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Q0FFQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ3pCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRB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O0FBQWlDLG1CQUFPLEVBQUU7QUFBQSxxQkFBSWQsV0FBVyxDQUFDYSxJQUFELENBQWY7QUFBQSxhQUExQztBQUFBLG1DQUNBLHNFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLHNDQUVJLHNFQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDQSxxQkFBSyxFQUFFQSxJQUFJLENBQUNFO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixFQUtDRixJQUFJLENBQUNFLEtBTE47QUFBQSxlQUNTRixJQUFJLENBQUM1QixFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0VILENBNUhEOztHQUFNM0IsSTtVQUVlRyx1RCxFQUNGRSxxRCxFQUNrQkMsdUQsRUFDZkEsdUQ7OztLQUxoQk4sSTtBQThIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZS9bcm9vbUlkXS40MDM1ZTY2ODM3ZDU5NWEzZjlkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIExpc3QsIEF2YXRhciwgTW9kYWwsIElucHV0LCBUYWcgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBTRUFSQ0hfVVNFUl9SRVFVRVNULCBMT0FEX01ZX0lORk9fUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Sb29tLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSAnLi9DaGVja0JveCc7XHJcblxyXG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tICcuLi91dGlscy9pbyc7XHJcbmltcG9ydCB7VVBEQVRFX1JPT01fTElTVH0gZnJvbSAnLi4vcmVkdWNlcnMvY2hhdCc7XHJcbi8vaW1wb3J0IHsgdXNlV2FudGluZ1Jvb20gfSBmcm9tICcuLi9ob29rcy9jaGF0SG9va3MnO1xyXG5cclxuY29uc3QgUm9vbSA9ICh7IGhlaWdodCB9KSA9PiB7XHJcbiAgICAvL+yEnOuyhOyCrOydtOuTnOugjOuNlOungSAtIHByZSByZW5kZXJpbmcg7ZW07JW87ZWgIO2VhOyalOqwgCDsnojsnYTquYw/XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgc2VhcmNoVXNlclJlc3VsdCwgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7IHJvb21zIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5jaGF0KTtcclxuICAgIGNvbnN0IFsgdmlzaWJsZSwgb25DaGFuZ2VWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbIGdyb3VwQ2hhdCwgc2V0R3JvdXBDaGF0IF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlVmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VWaXNpYmxlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcnMgPVtdO1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGdyb3VwQ2hhdCkuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgIGlmICh2WzFdID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKHZbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXNlcnMucHVzaChtZS5pZC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ2NyZWF0ZVJvb21SZXF1ZXN0JywgbWUuaWQsIHVzZXJzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlIHJvb20gcmVxdWVzdCcpO1xyXG4gICAgICAgIG9uQ2hhbmdlVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgc2V0R3JvdXBDaGF0KHt9KTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ1JFQVRFX0NIQVRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogeyBcInVzZXJzXCI6IHVzZXJzIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAqL1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU2VhcmNoID0gKGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldDogeyBsYWJlbCwgY2hlY2tlZCB9fSkgPT4ge1xyXG4gICAgICAgIHNldEdyb3VwQ2hhdCh7IC4uLmdyb3VwQ2hhdCwgW2xhYmVsXTogY2hlY2tlZCB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v7LGE7YyF67CpIO2BtOumre2WiOydhOuVjCDssYTtjIXrsKkgbG9hZFxyXG4gICAgY29uc3Qgb25DbGlja1Jvb20gPSAocm9vbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaChgL21lc3NhZ2UvJHtyb29tLmlkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlVGl0bGVcIiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjYwMHB4XCIsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGZsZXhHcm93OiBcIjFcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbjpcIjBcIn19PiZuYnNwOyZuYnNwO01lc3NhZ2VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZmxleEdyb3c6IFwiMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgb25DbGljaz17c2hvd01vZGFsfSBpY29uPXs8UGx1c091dGxpbmVkIC8+fSBzdHlsZT17e21hcmdpbjogXCIwIDE1cHhcIn19IHNpemU9XCJsYXJnZVwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgTWVzc2FnZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keVN0eWxlPXt7aGVpZ2h0OiBcIjUwMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlT2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBQZW9wbGVcIiBvblNlYXJjaD17b25TZWFyY2h9IGJvcmRlcmVkPXtmYWxzZX0gIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWFyY2hVc2VyUmVzdWx0Lm1hcCh1c2VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt1c2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3JvdXBDaGF0W3VzZXIuaWRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cInNjcm9sbGFibGVEaXZcIiBzdHlsZT17e2hlaWdodDogaGVpZ2h0LTUwICwgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICBkYXRhU291cmNlPXtyb29tc31cclxuICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb21MaXN0fSBvbkNsaWNrPXsoKT0+b25DbGlja1Jvb20oaXRlbSl9PlxyXG4gICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==