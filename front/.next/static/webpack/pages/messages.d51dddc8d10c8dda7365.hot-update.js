webpackHotUpdate_N_E("pages/messages",{

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Room.module.css */ "./components/Room.module.css");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Room_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Room.js",
    _this = undefined,
    _s = $RefreshSig$();









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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      groupChat = _useState2[0],
      onChangeGroupChat = _useState2[1];

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

    onChangeGroupChat(function (groupChat) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(groupChat), [e]);
    });
  };

  var _onClose = function onClose(e) {
    console.log(e.uid);
    groupChat.forEach(function (p) {
      return console.log(p);
    });
    onChangeGroupChat(function (groupChat) {
      return groupChat.filter(function (p) {
        return p.uid !== e.uid;
      });
    });
    console.log(groupChat);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "messageTitle",
      style: {
        height: "50px",
        borderBottom: "solid thin #EFEEF5",
        display: "flex"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          width: "600px",
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "1"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
              style: {
                margin: "0"
              },
              children: "\xA0\xA0Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "text",
              shape: "circle",
              onClick: showModal,
              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 86
              }, _this),
              style: {
                margin: "0 15px"
              },
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
            visible: visible,
            title: "New Messages",
            onOk: handleOk,
            onCancel: handleCancel,
            bodyStyle: {
              height: "500px"
            },
            footer: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              type: "primary",
              onClick: handleOk,
              children: "Next"
            }, "submit", false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 25
            }, _this)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 21
            }, _this), groupChat.map(function (p) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
                color: "#2db7f5",
                closable: true,
                onClose: function onClose() {
                  _onClose(p);
                },
                children: [p.avatar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                  src: "http://localhost:3065/profile/".concat(p.avatar)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 36
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                  children: p.title[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 98
                }, _this), "\xA0", p.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 42
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
              itemLayout: "vertical",
              dataSource: listData,
              renderItem: function renderItem(item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: _Room_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.userList,
                  onClick: function onClick() {
                    onClickUser(item);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item.Meta, {
                      avatar: item.avatar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                        src: "http://localhost:3065/profile/".concat(item.avatar)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 46
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                        children: item.title[0]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 112
                      }, _this),
                      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                        href: item.href,
                        children: item.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 32
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 25
                    }, _this), item.content]
                  }, item.title, true, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 21
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      id: "scrollableDiv",
      style: {
        height: height - 50,
        overflow: 'auto'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
        itemLayout: "vertical",
        dataSource: listData,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item.Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                src: item.avatar
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 21
              }, _this),
              title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: item.href,
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 20
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 13
            }, _this), item.content]
          }, item.title, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, _this);
};

_s(Room, "Z8e568Tq4Ef0Tu8nl5M1k5C5GUM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZWFyY2hVc2VyUmVzdWx0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwib25DaGFuZ2VWaXNpYmxlIiwiZ3JvdXBDaGF0Iiwib25DaGFuZ2VHcm91cENoYXQiLCJsaXN0RGF0YSIsIm1hcCIsInYiLCJpIiwiaWR4IiwidWlkIiwiaWQiLCJ0aXRsZSIsIm5pY2tuYW1lIiwiY29udGVudCIsImVtYWlsIiwiYXZhdGFyIiwicGhvdG8iLCJzaG93TW9kYWwiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVPayIsImNvbnNvbGUiLCJsb2ciLCJvblNlYXJjaCIsImUiLCJ0eXBlIiwiU0VBUkNIX1VTRVJfUkVRVUVTVCIsImRhdGEiLCJvbkNsaWNrVXNlciIsImxlbmd0aCIsIm9uQ2xvc2UiLCJmb3JFYWNoIiwicCIsImZpbHRlciIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbiIsIml0ZW0iLCJzdHlsZXMiLCJ1c2VyTGlzdCIsImhyZWYiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDekI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZ5QixxQkFHSUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIZjtBQUFBLE1BR2pCQyxnQkFIaUIsZ0JBR2pCQSxnQkFIaUI7O0FB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RUFBRXdCLElBQUksQ0FBQ0csSUFBZDtBQUFBLDBCQUFxQkgsSUFBSSxDQUFDNUI7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosRUFNQzRCLElBQUksQ0FBQzFCLE9BTk47QUFBQSxhQUNTMEIsSUFBSSxDQUFDNUIsS0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMkVILENBL0hEOztHQUFNcEIsSTtVQUVlRyx1RCxFQUNZQyx1RDs7O0tBSDNCSixJO0FBaUlTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlcy5kNTFkZGRjOGQxMGM4ZGRhNzM2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBMaXN0LCBBdmF0YXIsIE1vZGFsLCBJbnB1dCwgVGFnIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU0VBUkNIX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm9vbS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUm9vbSA9ICh7IGhlaWdodCB9KSA9PiB7XHJcbiAgICAvL+yEnOuyhOyCrOydtOuTnOugjOuNlOungSAtIHByZSByZW5kZXJpbmcg7ZW07JW87ZWgIO2VhOyalOqwgCDsnojsnYTquYw/XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHNlYXJjaFVzZXJSZXN1bHQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbIHZpc2libGUsIG9uQ2hhbmdlVmlzaWJsZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgWyBncm91cENoYXQsIG9uQ2hhbmdlR3JvdXBDaGF0IF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgbGlzdERhdGEgPSBzZWFyY2hVc2VyUmVzdWx0Lm1hcCgodiwgaSkgPT4gKHsgXHJcbiAgICAgICAgaWR4OiBpLFxyXG4gICAgICAgIHVpZDogdi5pZCxcclxuICAgICAgICB0aXRsZTogdi5uaWNrbmFtZSxcclxuICAgICAgICBjb250ZW50OiB2LmVtYWlsLFxyXG4gICAgICAgIGF2YXRhcjogdi5waG90byxcclxuICAgICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlVmlzaWJsZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29rJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tVc2VyID0gKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwQ2hhdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXBDaGF0W2ldLnVpZCA9PT0gZS51aWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uQ2hhbmdlR3JvdXBDaGF0KGdyb3VwQ2hhdCA9PiBbLi4uZ3JvdXBDaGF0LCBlXSk7XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudWlkKTtcclxuICAgICAgICBncm91cENoYXQuZm9yRWFjaCgocCk9PmNvbnNvbGUubG9nKHApKTtcclxuICAgICAgICBvbkNoYW5nZUdyb3VwQ2hhdChncm91cENoYXQgPT4gZ3JvdXBDaGF0LmZpbHRlcihwID0+IChwLnVpZCAhPT0gZS51aWQpKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ3JvdXBDaGF0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0XCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVRpdGxlXCIgc3R5bGU9e3toZWlnaHQ6IFwiNTBweFwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjRUZFRUY1XCIsIGRpc3BsYXk6IFwiZmxleFwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCI2MDBweFwiLCBkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBmbGV4R3JvdzogXCIxXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW46XCIwXCJ9fT4mbmJzcDsmbmJzcDtNZXNzYWdlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGZsZXhHcm93OiBcIjBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIG9uQ2xpY2s9e3Nob3dNb2RhbH0gaWNvbj17PFBsdXNPdXRsaW5lZCAvPn0gc3R5bGU9e3ttYXJnaW46IFwiMCAxNXB4XCJ9fSBzaXplPVwibGFyZ2VcIj48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmV3IE1lc3NhZ2VzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlTdHlsZT17e2hlaWdodDogXCI1MDBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJzdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZU9rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9XCJTZWFyY2ggUGVvcGxlXCIgb25TZWFyY2g9e29uU2VhcmNofSBib3JkZXJlZD17ZmFsc2V9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtncm91cENoYXQubWFwKChwKT0+KDxUYWdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyZGI3ZjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NhYmxlIG9uQ2xvc2U9eygpPT57b25DbG9zZShwKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cC5hdmF0YXI/IDxBdmF0YXIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Byb2ZpbGUvJHtwLmF2YXRhcn1gfSAvPjogPEF2YXRhcj57cC50aXRsZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3twLnRpdGxlfTwvVGFnPikpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtsaXN0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJMaXN0fSBvbkNsaWNrPXsoKT0+eyBvbkNsaWNrVXNlcihpdGVtKTsgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17aXRlbS5hdmF0YXI/IDxBdmF0YXIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Byb2ZpbGUvJHtpdGVtLmF2YXRhcn1gfSAvPiA6IDxBdmF0YXI+e2l0ZW0udGl0bGVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJzY3JvbGxhYmxlRGl2XCIgc3R5bGU9e3toZWlnaHQ6IGhlaWdodC01MCAsIG92ZXJmbG93OiAnYXV0byd9fT5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9PlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17aXRlbS5hdmF0YXJ9IC8+fVxyXG4gICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=