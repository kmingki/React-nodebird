webpackHotUpdate_N_E("pages/messages",{

/***/ "./components/Checkbox.js":
/*!********************************!*\
  !*** ./components/Checkbox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Checkbox.js",
    _this = undefined;






var CheckBox = function CheckBox(_ref) {
  var user = _ref.user,
      handleChange = _ref.handleChange,
      label = _ref.label,
      value = _ref.value;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      label: lavel,
      checked: value,
      onChange: handleChange,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Avatar, {
        src: "http://localhost:3065/profile/".concat(user.avatar)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this), user.nickname, user.email]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_c = CheckBox;
/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

var _c;

$RefreshReg$(_c, "CheckBox");

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

/***/ }),

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
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Checkbox */ "./components/Checkbox.js");
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

  var _onClose = function onClose(e) {
    setGroupChat(function (groupChat) {
      return groupChat.filter(function (p) {
        return p.uid !== e.uid;
      });
    });
  };

  var handleChange = function handleChange(_ref2) {
    var _ref2$target = _ref2.target,
        label = _ref2$target.label,
        checked = _ref2$target.checked;
    setGroupChat(_objectSpread(_objectSpread({}, groupChat), {}, {
      label: checked
    }));
  };

  var handleSubmit = function handleSubmit() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
              lineNumber: 90,
              columnNumber: 25
            }, _this)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 21
            }, _this), groupChat.map(function (p) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
                color: "#2db7f5",
                closable: true,
                onClose: function onClose() {
                  _onClose(p);
                },
                children: [p.avatar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                  src: "http://localhost:3065/profile/".concat(p.avatar)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 36
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                  children: p.title[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 98
                }, _this), "\xA0", p.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 42
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("form", {
              onSubmit: handleSubmit,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                style: {
                  display: "flex",
                  flexDirection: "column"
                },
                children: searchUserResult.map(function (user) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: _Room_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.userList,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      user: user,
                      handleChange: handleChange,
                      label: user.id,
                      value: groupChat[user.id]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 25
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
              itemLayout: "vertical",
              dataSource: listData,
              renderItem: function renderItem(item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: _Room_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.userList,
                  onClick: function onClick() {
                    onClickUser(item);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item.Meta, {
                      avatar: item.avatar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                        src: "http://localhost:3065/profile/".concat(item.avatar)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 46
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                        children: item.title[0]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 112
                      }, _this),
                      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                        href: item.href,
                        children: item.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 32
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 25
                    }, _this), item.content]
                  }, item.title, true, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 21
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
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
                lineNumber: 146,
                columnNumber: 21
              }, _this),
              title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                href: item.href,
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 20
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 13
            }, _this), item.content]
          }, item.title, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIkNoZWNrQm94IiwidXNlciIsImhhbmRsZUNoYW5nZSIsImxhYmVsIiwidmFsdWUiLCJsYXZlbCIsImF2YXRhciIsIm5pY2tuYW1lIiwiZW1haWwiLCJSb29tIiwiaGVpZ2h0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzZWFyY2hVc2VyUmVzdWx0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwib25DaGFuZ2VWaXNpYmxlIiwiZ3JvdXBDaGF0Iiwic2V0R3JvdXBDaGF0IiwibGlzdERhdGEiLCJtYXAiLCJ2IiwiaSIsImlkeCIsInVpZCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwicGhvdG8iLCJzaG93TW9kYWwiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVPayIsImNvbnNvbGUiLCJsb2ciLCJvblNlYXJjaCIsImUiLCJ0eXBlIiwiU0VBUkNIX1VTRVJfUkVRVUVTVCIsImRhdGEiLCJvbkNsaWNrVXNlciIsImxlbmd0aCIsImNvbmNhdCIsIm9uQ2xvc2UiLCJmaWx0ZXIiLCJwIiwidGFyZ2V0IiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJzdHlsZXMiLCJ1c2VyTGlzdCIsIml0ZW0iLCJocmVmIiwib3ZlcmZsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMEM7QUFBQSxNQUF2Q0MsSUFBdUMsUUFBdkNBLElBQXVDO0FBQUEsTUFBakNDLFlBQWlDLFFBQWpDQSxZQUFpQztBQUFBLE1BQW5CQyxLQUFtQixR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QUF3QixXQUFLLEVBQUU7QUFBQ2xCLGNBQU0sRUFBRUEsTUFBTSxHQUFDLEVBQWhCO0FBQXFCbUQsZ0JBQVEsRUFBRTtBQUEvQixPQUEvQjtBQUFBLDZCQUNBLHFFQUFDLHlDQUFEO0FBQ0Esa0JBQVUsRUFBQyxVQURYO0FBRUEsa0JBQVUsRUFBRXhDLFFBRlo7QUFHQSxrQkFBVSxFQUFFLG9CQUFBc0MsSUFBSTtBQUFBLDhCQUNoQixxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSxvQ0FFSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0Esb0JBQU0sZUFBRSxxRUFBQywyQ0FBRDtBQUFRLG1CQUFHLEVBQUVBLElBQUksQ0FBQ3JEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFI7QUFFQSxtQkFBSyxlQUFFO0FBQUcsb0JBQUksRUFBRXFELElBQUksQ0FBQ0MsSUFBZDtBQUFBLDBCQUFxQkQsSUFBSSxDQUFDL0I7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosRUFNQytCLElBQUksQ0FBQzlCLE9BTk47QUFBQSxhQUNTOEIsSUFBSSxDQUFDL0IsS0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEZILENBcEpEOztHQUFNbkIsSTtVQUVlRyx1RCxFQUNZQyx1RDs7O0tBSDNCSixJO0FBc0pTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlcy44NTVjZWM5YTlhNzQ2YjU1NjY4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IENoZWNrQm94ID0gKHsgdXNlciwgaGFuZGxlQ2hhbmdlLCBsYWJlbCwgdmFsdWUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgIGxhYmVsPXtsYXZlbH1cclxuICAgICAgICBjaGVja2VkPXt2YWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgPEF2YXRhciBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvcHJvZmlsZS8ke3VzZXIuYXZhdGFyfWB9IC8+XHJcbiAgICAgICAgICAgIHt1c2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICB7dXNlci5lbWFpbH1cclxuICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tCb3g7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBMaXN0LCBBdmF0YXIsIE1vZGFsLCBJbnB1dCwgVGFnIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU0VBUkNIX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm9vbS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnO1xyXG5jb25zdCBSb29tID0gKHsgaGVpZ2h0IH0pID0+IHtcclxuICAgIC8v7ISc67KE7IKs7J2065Oc66CM642U66eBIC0gcHJlIHJlbmRlcmluZyDtlbTslbztlaAg7ZWE7JqU6rCAIOyeiOydhOq5jD9cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgc2VhcmNoVXNlclJlc3VsdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFsgdmlzaWJsZSwgb25DaGFuZ2VWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbIGdyb3VwQ2hhdCwgc2V0R3JvdXBDaGF0IF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc3QgbGlzdERhdGEgPSBzZWFyY2hVc2VyUmVzdWx0Lm1hcCgodiwgaSkgPT4gKHsgXHJcbiAgICAgICAgaWR4OiBpLFxyXG4gICAgICAgIHVpZDogdi5pZCxcclxuICAgICAgICB0aXRsZTogdi5uaWNrbmFtZSxcclxuICAgICAgICBjb250ZW50OiB2LmVtYWlsLFxyXG4gICAgICAgIGF2YXRhcjogdi5waG90byxcclxuICAgICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlVmlzaWJsZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29rJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tVc2VyID0gKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwQ2hhdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXBDaGF0W2ldLnVpZCA9PT0gZS51aWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEdyb3VwQ2hhdChncm91cENoYXQgPT4gZ3JvdXBDaGF0LmNvbmNhdChlKSk7XHJcbiAgICAgICAgLy9zZXRHcm91cENoYXQoZ3JvdXBDaGF0ID0+IFsuLi5ncm91cENoYXQsIGVdKTtcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3Qgb25DbG9zZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0R3JvdXBDaGF0KGdyb3VwQ2hhdCA9PiBncm91cENoYXQuZmlsdGVyKHAgPT4gKHAudWlkICE9PSBlLnVpZCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgbGFiZWwsIGNoZWNrZWQgfSB9KSA9PiB7XHJcbiAgICAgICAgc2V0R3JvdXBDaGF0KHsgLi4uZ3JvdXBDaGF0LCBsYWJlbDogY2hlY2tlZCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdFwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VUaXRsZVwiIHN0eWxlPXt7aGVpZ2h0OiBcIjUwcHhcIiwgYm9yZGVyQm90dG9tOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBkaXNwbGF5OiBcImZsZXhcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiNjAwcHhcIiwgZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZmxleEdyb3c6IFwiMVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luOlwiMFwifX0+Jm5ic3A7Jm5ic3A7TWVzc2FnZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBmbGV4R3JvdzogXCIwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBvbkNsaWNrPXtzaG93TW9kYWx9IGljb249ezxQbHVzT3V0bGluZWQgLz59IHN0eWxlPXt7bWFyZ2luOiBcIjAgMTVweFwifX0gc2l6ZT1cImxhcmdlXCI+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5ldyBNZXNzYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICAgICAgICAgICAgICBib2R5U3R5bGU9e3toZWlnaHQ6IFwiNTAwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVPa30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFBlb3BsZVwiIG9uU2VhcmNoPXtvblNlYXJjaH0gYm9yZGVyZWQ9e2ZhbHNlfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7Z3JvdXBDaGF0Lm1hcCgocCk9Pig8VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMmRiN2Y1XCJcclxuICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZSBvbkNsb3NlPXsoKT0+e29uQ2xvc2UocCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3AuYXZhdGFyPyA8QXZhdGFyIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7cC5hdmF0YXJ9YH0gLz46IDxBdmF0YXI+e3AudGl0bGVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDt7cC50aXRsZX08L1RhZz4pKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWFyY2hVc2VyUmVzdWx0Lm1hcCh1c2VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt1c2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3JvdXBDaGF0W3VzZXIuaWRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtsaXN0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJMaXN0fSBvbkNsaWNrPXsoKT0+eyBvbkNsaWNrVXNlcihpdGVtKTsgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17aXRlbS5hdmF0YXI/IDxBdmF0YXIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Byb2ZpbGUvJHtpdGVtLmF2YXRhcn1gfSAvPiA6IDxBdmF0YXI+e2l0ZW0udGl0bGVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJzY3JvbGxhYmxlRGl2XCIgc3R5bGU9e3toZWlnaHQ6IGhlaWdodC01MCAsIG92ZXJmbG93OiAnYXV0byd9fT5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9PlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17aXRlbS5hdmF0YXJ9IC8+fVxyXG4gICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=