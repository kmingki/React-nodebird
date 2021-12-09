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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Room.module.css */ "./components/Room.module.css");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Room_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckBox */ "./components/CheckBox.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Room.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Room = function Room(_ref) {
  _s();

  var height = _ref.height;
  //서버사이드렌더링 - pre rendering 해야할 필요가 있을까?
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      searchUserResult = _useSelector.searchUserResult;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      visible = _useState[0],
      onChangeVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      groupChat = _useState2[0],
      setGroupChat = _useState2[1];

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
    console.log('ok');
  };

  var onSearch = function onSearch(e) {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["SEARCH_USER_REQUEST"],
      data: e
    });
  };

  var onClickUser = function onClickUser(e) {
    for (var i = 0; i < groupChat.length; i++) {
      if (groupChat[i].uid === e.uid) {
        return;
      }
    }

    setGroupChat(function (groupChat) {
      return groupChat.concat(e);
    }); //setGroupChat(groupChat => [...groupChat, e]);
  };

  var handleChange = function handleChange(_ref2) {
    var _ref2$target = _ref2.target,
        label = _ref2$target.label,
        checked = _ref2$target.checked;
    setGroupChat(_objectSpread(_objectSpread({}, groupChat), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, label, checked)));
  };

  var handleSubmit = function handleSubmit() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "messageTitle",
      style: {
        height: "50px",
        borderBottom: "solid thin #EFEEF5",
        display: "flex"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        style: {
          width: "600px",
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "1"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
              style: {
                margin: "0"
              },
              children: "\xA0\xA0Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "text",
              shape: "circle",
              onClick: showModal,
              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 86
              }, _this),
              style: {
                margin: "0 15px"
              },
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
            visible: visible,
            title: "New Messages",
            onOk: handleOk,
            onCancel: handleCancel,
            bodyStyle: {
              height: "500px"
            },
            footer: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "primary",
              onClick: handleOk,
              children: "Next"
            }, "submit", false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 25
            }, _this)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: searchUserResult.map(function (user) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: _Room_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.userList,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_CheckBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    user: user,
                    handleChange: handleChange,
                    label: user.id,
                    value: groupChat[user.id]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 25
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      id: "scrollableDiv",
      style: {
        height: height - 50,
        overflow: 'auto'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
        itemLayout: "vertical",
        dataSource: listData,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item.Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                src: item.avatar
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 21
              }, _this),
              title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                href: item.href,
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 20
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 13
            }, _this), item.content]
          }, item.title, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, _this);
};

_s(Room, "L8F1oA3WQBBv9gRpyWlQ7tcYQ4Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZWFyY2hVc2VyUmVzdWx0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwib25DaGFuZ2VWaXNpYmxlIiwiZ3JvdXBDaGF0Iiwic2V0R3JvdXBDaGF0IiwibGlzdERhdGEiLCJtYXAiLCJ2IiwiaSIsImlkeCIsInVpZCIsImlkIiwidGl0bGUiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJlbWFpbCIsImF2YXRhciIsInBob3RvIiwic2hvd01vZGFsIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlT2siLCJjb25zb2xlIiwibG9nIiwib25TZWFyY2giLCJlIiwidHlwZSIsIlNFQVJDSF9VU0VSX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja1VzZXIiLCJsZW5ndGgiLCJjb25jYXQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImNoZWNrZWQiLCJoYW5kbGVTdWJtaXQiLCJib3JkZXJCb3R0b20iLCJkaXNwbGF5Iiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtYXJnaW4iLCJmbGV4RGlyZWN0aW9uIiwic3R5bGVzIiwidXNlckxpc3QiLCJvdmVyZmxvdyIsIml0ZW0iLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDekI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZ5QixxQkFHSUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFq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LHVCQURSO0FBRUEsbUJBQUssZUFBRTtBQUFHLG9CQUFJLEVBQUU4QixJQUFJLENBQUNDLElBQWQ7QUFBQSwwQkFBcUJELElBQUksQ0FBQ2xDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLEVBTUNrQyxJQUFJLENBQUNoQyxPQU5OO0FBQUEsYUFDU2dDLElBQUksQ0FBQ2xDLEtBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZ0I7QUFBQTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1FSCxDQXpIRDs7R0FBTXBCLEk7VUFFZUcsdUQsRUFDWUMsdUQ7OztLQUgzQkosSTtBQTJIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuYmQ1MjNkY2RkMDA5N2ZiOWQ1ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTGlzdCwgQXZhdGFyLCBNb2RhbCwgSW5wdXQsIFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNFQVJDSF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Jvb20ubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBDaGVja0JveCBmcm9tICcuL0NoZWNrQm94JztcclxuY29uc3QgUm9vbSA9ICh7IGhlaWdodCB9KSA9PiB7XHJcbiAgICAvL+yEnOuyhOyCrOydtOuTnOugjOuNlOungSAtIHByZSByZW5kZXJpbmcg7ZW07JW87ZWgIO2VhOyalOqwgCDsnojsnYTquYw/XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHNlYXJjaFVzZXJSZXN1bHQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbIHZpc2libGUsIG9uQ2hhbmdlVmlzaWJsZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgWyBncm91cENoYXQsIHNldEdyb3VwQ2hhdCBdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IGxpc3REYXRhID0gc2VhcmNoVXNlclJlc3VsdC5tYXAoKHYsIGkpID0+ICh7IFxyXG4gICAgICAgIGlkeDogaSxcclxuICAgICAgICB1aWQ6IHYuaWQsXHJcbiAgICAgICAgdGl0bGU6IHYubmlja25hbWUsXHJcbiAgICAgICAgY29udGVudDogdi5lbWFpbCxcclxuICAgICAgICBhdmF0YXI6IHYucGhvdG8sXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VWaXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVZpc2libGUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU2VhcmNoID0gKGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrVXNlciA9IChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cENoYXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGdyb3VwQ2hhdFtpXS51aWQgPT09IGUudWlkKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRHcm91cENoYXQoZ3JvdXBDaGF0ID0+IGdyb3VwQ2hhdC5jb25jYXQoZSkpO1xyXG4gICAgICAgIC8vc2V0R3JvdXBDaGF0KGdyb3VwQ2hhdCA9PiBbLi4uZ3JvdXBDaGF0LCBlXSk7XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldDogeyBsYWJlbCwgY2hlY2tlZCB9fSkgPT4ge1xyXG4gICAgICAgIHNldEdyb3VwQ2hhdCh7IC4uLmdyb3VwQ2hhdCwgW2xhYmVsXTogY2hlY2tlZCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdFwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VUaXRsZVwiIHN0eWxlPXt7aGVpZ2h0OiBcIjUwcHhcIiwgYm9yZGVyQm90dG9tOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBkaXNwbGF5OiBcImZsZXhcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiNjAwcHhcIiwgZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZmxleEdyb3c6IFwiMVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luOlwiMFwifX0+Jm5ic3A7Jm5ic3A7TWVzc2FnZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBmbGV4R3JvdzogXCIwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBvbkNsaWNrPXtzaG93TW9kYWx9IGljb249ezxQbHVzT3V0bGluZWQgLz59IHN0eWxlPXt7bWFyZ2luOiBcIjAgMTVweFwifX0gc2l6ZT1cImxhcmdlXCI+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5ldyBNZXNzYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICAgICAgICAgICAgICBib2R5U3R5bGU9e3toZWlnaHQ6IFwiNTAwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVPa30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFBlb3BsZVwiIG9uU2VhcmNoPXtvblNlYXJjaH0gYm9yZGVyZWQ9e2ZhbHNlfSAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjpcImNvbHVtblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlYXJjaFVzZXJSZXN1bHQubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJMaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3VzZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtncm91cENoYXRbdXNlci5pZF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwic2Nyb2xsYWJsZURpdlwiIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQtNTAgLCBvdmVyZmxvdzogJ2F1dG8nfX0+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgIGRhdGFTb3VyY2U9e2xpc3REYXRhfVxyXG4gICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfT5cclxuICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2l0ZW0uYXZhdGFyfSAvPn1cclxuICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgKX1cclxuICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9