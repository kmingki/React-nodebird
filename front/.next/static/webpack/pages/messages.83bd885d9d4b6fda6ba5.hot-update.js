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
      setRoomList([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(RoomList), [data]));
      console.log(data);
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
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
              lineNumber: 68,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
                lineNumber: 73,
                columnNumber: 86
              }, _this),
              style: {
                margin: "0 15px"
              },
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
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
              lineNumber: 82,
              columnNumber: 25
            }, _this)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
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
                    lineNumber: 93,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 25
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
              lineNumber: 114,
              columnNumber: 13
            }, _this), item.title]
          }, item.id, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJzb2NrZXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZWFyY2hVc2VyUmVzdWx0IiwibWUiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJvbkNoYW5nZVZpc2libGUiLCJncm91cENoYXQiLCJzZXRHcm91cENoYXQiLCJwYXJ0aWNpcGF0ZVJvb20iLCJSb29tTGlzdCIsInNldFJvb21MaXN0IiwidXNlRWZmZWN0Iiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNob3dNb2RhbCIsImhhbmRsZUNhbmNlbCIsImhhbmRsZU9rIiwidXNlcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsInYiLCJwdXNoIiwidHlwZSIsIkNSRUFURV9DSEFUX1JFUVVFU1QiLCJvblNlYXJjaCIsImUiLCJTRUFSQ0hfVVNFUl9SRVFVRVNUIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJjaGVja2VkIiwiYm9yZGVyQm90dG9tIiwiZGlzcGxheSIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibWFyZ2luIiwiZmxleERpcmVjdGlvbiIsIm1hcCIsInN0eWxlcyIsInVzZXJMaXN0IiwiaWQiLCJvdmVyZmxvdyIsIml0ZW0iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsTUFBcUIsUUFBckJBLE1BQXFCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ2pDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGaUMscUJBR0FDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSFg7QUFBQSxNQUd6QkMsZ0JBSHlCLGdCQUd6QkEsZ0JBSHlCO0FBQUEsTUFHUEMsRUFITyxnQkFHUEEsRUFITzs7QUFBQSxrQkFJSUMsc0RBQVEsQ0FBQyxLQUFELENBSlo7QUFBQSxNQUl6QkMsT0FKeUI7QUFBQSxNQUloQkMsZUFKZ0I7O0FBQUEsbUJBS0dGLHNEQUFRLENBQUMsRUFBRCxDQUxYO0FBQUEsTUFLekJHLFNBTHlCO0FBQUEsTUFLZEMsWUFMYzs7QUFBQSxtQkFNQ0osc0RBQVEsQ0FBQ0QsRUFBRSxDQUFDTSxlQUFKLENBTlQ7QUFBQSxNQU16QkMsUUFOeUI7QUFBQSxNQU1mQyxXQU5lOztBQVFqQ0MseURBQVMsQ0FBQyxZQUFJO0FBQ1ZoQixVQUFNLENBQUNpQixFQUFQLENBQVUsU0FBVixFQUFxQixVQUFDQyxJQUFELEVBQVE7QUFDekJILGlCQUFXLHdHQUFLRCxRQUFMLElBQWVJLElBQWYsR0FBWDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNMLEtBSEM7QUFJSCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJYLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0gsR0FGRDs7QUFJQSxNQUFNWSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCWixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNILEdBRkQ7O0FBSUEsTUFBTWEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUVuQixRQUFNQyxLQUFLLEdBQUUsRUFBYjtBQUNBQyxVQUFNLENBQUNDLE9BQVAsQ0FBZWYsU0FBZixFQUEwQmdCLE9BQTFCLENBQWtDLFVBQUFDLENBQUMsRUFBRTtBQUNqQyxVQUFJQSxDQUFDLENBQUMsQ0FBRCxDQUFELEtBQVMsSUFBYixFQUFtQjtBQUNmSixhQUFLLENBQUNLLElBQU4sQ0FBV0QsQ0FBQyxDQUFDLENBQUQsQ0FBWjtBQUNIO0FBQ0osS0FKRDtBQU1BM0IsWUFBUSxDQUFDO0FBQ0w2QixVQUFJLEVBQUVDLGtFQUREO0FBRUxiLFVBQUksRUFBRTtBQUFFLGlCQUFTTTtBQUFYO0FBRkQsS0FBRCxDQUFSO0FBSUgsR0FiRDs7QUFlQSxNQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDcEJoQyxZQUFRLENBQUM7QUFDTDZCLFVBQUksRUFBRUksa0VBREQ7QUFFTGhCLFVBQUksRUFBRWU7QUFGRCxLQUFELENBQVI7QUFJSCxHQUxEOztBQU1BLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQW1DO0FBQUEsNkJBQWhDQyxNQUFnQztBQUFBLFFBQXRCQyxLQUFzQixnQkFBdEJBLEtBQXNCO0FBQUEsUUFBZkMsT0FBZSxnQkFBZkEsT0FBZTtBQUNwRDFCLGdCQUFZLGlDQUFNRCxTQUFOLHFHQUFrQjBCLEtBQWxCLEVBQTBCQyxPQUExQixHQUFaO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFBLDRCQUNBO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBSUE7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUE4QixXQUFLLEVBQUU7QUFBQ3ZDLGNBQU0sRUFBRSxNQUFUO0FBQWlCd0Msb0JBQVksRUFBRSxvQkFBL0I7QUFBcURDLGVBQU8sRUFBRTtBQUE5RCxPQUFyQztBQUFBLDZCQUNJO0FBQUssYUFBSyxFQUFFO0FBQUNDLGVBQUssRUFBRSxPQUFSO0FBQWlCRCxpQkFBTyxFQUFDO0FBQXpCLFNBQVo7QUFBQSxnQ0FDSTtBQUFLLGVBQUssRUFBRTtBQUFDQSxtQkFBTyxFQUFDLE1BQVQ7QUFBaUJFLHNCQUFVLEVBQUMsUUFBNUI7QUFBc0NDLG9CQUFRLEVBQUU7QUFBaEQsV0FBWjtBQUFBLGlDQUNJO0FBQUEsbUNBQ0k7QUFBSSxtQkFBSyxFQUFFO0FBQUNDLHNCQUFNLEVBQUM7QUFBUixlQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFNSTtBQUFLLGVBQUssRUFBRTtBQUFDSixtQkFBTyxFQUFDLE1BQVQ7QUFBaUJFLHNCQUFVLEVBQUMsUUFBNUI7QUFBc0NDLG9CQUFRLEVBQUU7QUFBaEQsV0FBWjtBQUFBLGtDQUNJO0FBQUEsbUNBQ0ksc0VBQUMsMkNBQUQ7QUFBUSxrQkFBSSxFQUFDLE1BQWI7QUFBb0IsbUJBQUssRUFBQyxRQUExQjtBQUFtQyxxQkFBTyxFQUFFdEIsU0FBNUM7QUFBdUQsa0JBQUksZUFBRSxzRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE3RDtBQUErRSxtQkFBSyxFQUFFO0FBQUN1QixzQkFBTSxFQUFFO0FBQVQsZUFBdEY7QUFBMEcsa0JBQUksRUFBQztBQUEvRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJLHNFQUFDLDBDQUFEO0FBQ0EsbUJBQU8sRUFBRW5DLE9BRFQ7QUFFQSxpQkFBSyxFQUFDLGNBRk47QUFHQSxnQkFBSSxFQUFFYyxRQUhOO0FBSUEsb0JBQVEsRUFBRUQsWUFKVjtBQUtBLHFCQUFTLEVBQUU7QUFBQ3ZCLG9CQUFNLEVBQUU7QUFBVCxhQUxYO0FBTUEsa0JBQU0sRUFBRSxjQUNKLHNFQUFDLDJDQUFEO0FBQXFCLGtCQUFJLEVBQUMsU0FBMUI7QUFBb0MscUJBQU8sRUFBRXdCLFFBQTdDO0FBQUE7QUFBQSxlQUFZLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESSxDQU5SO0FBQUEsb0NBWUEsc0VBQUMsMENBQUQsQ0FBTyxNQUFQO0FBQWMseUJBQVcsRUFBQyxlQUExQjtBQUEwQyxzQkFBUSxFQUFFUyxRQUFwRDtBQUE4RCxzQkFBUSxFQUFFO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkEsZUFlQTtBQUFLLG1CQUFLLEVBQUU7QUFBQ1EsdUJBQU8sRUFBQyxNQUFUO0FBQWlCSyw2QkFBYSxFQUFDO0FBQS9CLGVBQVo7QUFBQSx3QkFDQ3ZDLGdCQUFnQixDQUFDd0MsR0FBakIsQ0FBcUIsVUFBQXpDLElBQUk7QUFBQSxvQ0FDdEI7QUFBSywyQkFBUyxFQUFFMEMsdURBQU0sQ0FBQ0MsUUFBdkI7QUFBQSx5Q0FDQSxzRUFBQyxpREFBRDtBQUNBLHdCQUFJLEVBQUUzQyxJQUROO0FBRUEsZ0NBQVksRUFBRThCLFlBRmQ7QUFHQSx5QkFBSyxFQUFFOUIsSUFBSSxDQUFDNEMsRUFIWjtBQUlBLHlCQUFLLEVBQUV0QyxTQUFTLENBQUNOLElBQUksQ0FBQzRDLEVBQU47QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRHNCO0FBQUEsZUFBekI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpBLGVBK0NBO0FBQUssUUFBRSxFQUFDLGVBQVI7QUFBd0IsV0FBSyxFQUFFO0FBQUNsRCxjQUFNLEVBQUVBLE1BQU0sR0FBQyxFQUFoQjtBQUFxQm1ELGdCQUFRLEVBQUU7QUFBL0IsT0FBL0I7QUFBQSw2QkFDQSxzRUFBQyx5Q0FBRDtBQUNBLGtCQUFVLEVBQUMsVUFEWDtBQUVBLGtCQUFVLEVBQUVwQyxRQUZaO0FBR0Esa0JBQVUsRUFBRSxvQkFBQXFDLElBQUk7QUFBQSw4QkFDaEIsc0VBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsb0NBRUksc0VBQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUNBLG1CQUFLLEVBQUVBLElBQUksQ0FBQ0M7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLEVBS0NELElBQUksQ0FBQ0MsS0FMTjtBQUFBLGFBQ1NELElBQUksQ0FBQ0YsRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0VILENBbEhEOztHQUFNbkQsSTtVQUVlSSx1RCxFQUNnQkMsdUQ7OztLQUgvQkwsSTtBQW9IU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuODNiZDg4NWQ5ZDRiNmZkYTZiYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTGlzdCwgQXZhdGFyLCBNb2RhbCwgSW5wdXQsIFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNFQVJDSF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgQ1JFQVRFX0NIQVRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL2NoYXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm9vbS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IENoZWNrQm94IGZyb20gJy4vQ2hlY2tCb3gnO1xyXG5cclxuY29uc3QgUm9vbSA9ICh7IGhlaWdodCwgc29ja2V0IH0pID0+IHtcclxuICAgIC8v7ISc67KE7IKs7J2065Oc66CM642U66eBIC0gcHJlIHJlbmRlcmluZyDtlbTslbztlaAg7ZWE7JqU6rCAIOyeiOydhOq5jD9cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgc2VhcmNoVXNlclJlc3VsdCwgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbIHZpc2libGUsIG9uQ2hhbmdlVmlzaWJsZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgWyBncm91cENoYXQsIHNldEdyb3VwQ2hhdCBdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgWyBSb29tTGlzdCwgc2V0Um9vbUxpc3QgXSA9IHVzZVN0YXRlKG1lLnBhcnRpY2lwYXRlUm9vbSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc29ja2V0Lm9uKCduZXdSb29tJywgKGRhdGEpPT57XHJcbiAgICAgICAgICAgIHNldFJvb21MaXN0KFsuLi5Sb29tTGlzdCwgZGF0YV0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VWaXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVZpc2libGUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB1c2VycyA9W107XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZ3JvdXBDaGF0KS5mb3JFYWNoKHY9PntcclxuICAgICAgICAgICAgaWYgKHZbMV0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJzLnB1c2godlswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBDUkVBVEVfQ0hBVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiB7IFwidXNlcnNcIjogdXNlcnMgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU2VhcmNoID0gKGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldDogeyBsYWJlbCwgY2hlY2tlZCB9fSkgPT4ge1xyXG4gICAgICAgIHNldEdyb3VwQ2hhdCh7IC4uLmdyb3VwQ2hhdCwgW2xhYmVsXTogY2hlY2tlZCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlVGl0bGVcIiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjYwMHB4XCIsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGZsZXhHcm93OiBcIjFcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbjpcIjBcIn19PiZuYnNwOyZuYnNwO01lc3NhZ2VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZmxleEdyb3c6IFwiMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgb25DbGljaz17c2hvd01vZGFsfSBpY29uPXs8UGx1c091dGxpbmVkIC8+fSBzdHlsZT17e21hcmdpbjogXCIwIDE1cHhcIn19IHNpemU9XCJsYXJnZVwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgTWVzc2FnZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keVN0eWxlPXt7aGVpZ2h0OiBcIjUwMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlT2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBQZW9wbGVcIiBvblNlYXJjaD17b25TZWFyY2h9IGJvcmRlcmVkPXtmYWxzZX0gIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWFyY2hVc2VyUmVzdWx0Lm1hcCh1c2VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt1c2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3JvdXBDaGF0W3VzZXIuaWRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cInNjcm9sbGFibGVEaXZcIiBzdHlsZT17e2hlaWdodDogaGVpZ2h0LTUwICwgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICBkYXRhU291cmNlPXtSb29tTGlzdH1cclxuICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==