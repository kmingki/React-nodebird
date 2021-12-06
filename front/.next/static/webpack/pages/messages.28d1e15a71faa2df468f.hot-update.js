webpackHotUpdate_N_E("pages/messages",{

/***/ "./components/Checkbox.js":
/*!********************************!*\
  !*** ./components/Checkbox.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Room.module.css */ "./components/Room.module.css");
/* harmony import */ var _Room_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Room_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Checkbox */ "./components/Checkbox.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Checkbox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Room.js",
    _this = undefined,
    _s = $RefreshSig$();










var Room = function Room(_ref) {
  _s();

  var height = _ref.height;
  //서버사이드렌더링 - pre rendering 해야할 필요가 있을까?
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      searchUserResult = _useSelector.searchUserResult;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      visible = _useState[0],
      onChangeVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SEARCH_USER_REQUEST"],
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "text",
              shape: "circle",
              onClick: showModal,
              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["PlusOutlined"], {}, void 0, false, {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
            visible: visible,
            title: "New Messages",
            onOk: handleOk,
            onCancel: handleCancel,
            bodyStyle: {
              height: "500px"
            },
            footer: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "primary",
              onClick: handleOk,
              children: "Next"
            }, "submit", false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, _this)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 21
            }, _this), groupChat.map(function (p) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
                color: "#2db7f5",
                closable: true,
                onClose: function onClose() {
                  _onClose(p);
                },
                children: [p.avatar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                  src: "http://localhost:3065/profile/".concat(p.avatar)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 36
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                  children: p.title[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 98
                }, _this), "\xA0", p.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 42
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a.Group, {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: searchUserResult.map(function (u) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: _Room_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.userList,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                      src: "http://localhost:3065/profile/".concat(u.avatar)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 29
                    }, _this), u.email]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 29
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 29
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
              itemLayout: "vertical",
              dataSource: listData,
              renderItem: function renderItem(item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: _Room_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.userList,
                  onClick: function onClick() {
                    onClickUser(item);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
                      avatar: item.avatar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                        src: "http://localhost:3065/profile/".concat(item.avatar)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 46
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                        children: item.title[0]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 112
                      }, _this),
                      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                        href: item.href,
                        children: item.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 32
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 25
                    }, _this), item.content]
                  }, item.title, true, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 21
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      id: "scrollableDiv",
      style: {
        height: height - 50,
        overflow: 'auto'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        itemLayout: "vertical",
        dataSource: listData,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                src: item.avatar
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 21
              }, _this),
              title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: item.href,
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 20
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 13
            }, _this), item.content]
          }, item.title, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, _this);
};

_s(Room, "xKaQCgTniThGNfacbv037uOzRlY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZWFyY2hVc2VyUmVzdWx0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwib25DaGFuZ2VWaXNpYmxlIiwiZ3JvdXBDaGF0Iiwic2V0R3JvdXBDaGF0IiwibGlzdERhdGEiLCJtYXAiLCJ2IiwiaSIsImlkeCIsInVpZCIsImlkIiwidGl0bGUiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJlbWFpbCIsImF2YXRhciIsInBob3RvIiwic2hvd01vZGFsIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlT2siLCJjb25zb2xlIiwibG9nIiwib25TZWFyY2giLCJlIiwidHlwZSIsIlNFQVJDSF9VU0VSX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja1VzZXIiLCJsZW5ndGgiLCJjb25jYXQiLCJvbkNsb3NlIiwiZmlsdGVyIiwicCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJ1Iiwic3R5bGVzIiwidXNlckxpc3QiLCJpdGVtIiwiaHJlZiIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRnlCLHFCQUdJQywrREFBVyxDQUFDLFVBQUND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QUFBd0IsV0FBSyxFQUFFO0FBQUNuQixjQUFNLEVBQUVBLE1BQU0sR0FBQyxFQUFoQjtBQUFxQnFELGdCQUFRLEVBQUU7QUFBL0IsT0FBL0I7QUFBQSw2QkFDQSxxRUFBQyx5Q0FBRDtBQUNBLGtCQUFVLEVBQUMsVUFEWDtBQUVBLGtCQUFVLEVBQUV6QyxRQUZaO0FBR0Esa0JBQVUsRUFBRSxvQkFBQXVDLElBQUk7QUFBQSw4QkFDaEIscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsb0NBRUkscUVBQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUNBLG9CQUFNLGVBQUUscUVBQUMsMkNBQUQ7QUFBUSxtQkFBRyxFQUFFQSxJQUFJLENBQUM1QjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURSO0FBRUEsbUJBQUssZUFBRTtBQUFHLG9CQUFJLEVBQUU0QixJQUFJLENBQUNDLElBQWQ7QUFBQSwwQkFBcUJELElBQUksQ0FBQ2hDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLEVBTUNnQyxJQUFJLENBQUM5QixPQU5OO0FBQUEsYUFDUzhCLElBQUksQ0FBQ2hDLEtBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZ0I7QUFBQTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFGSCxDQXZJRDs7R0FBTXBCLEk7VUFFZUcsdUQsRUFDWUMsdUQ7OztLQUgzQkosSTtBQXlJU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuMjhkMWUxNWE3MWZhYTJkZjQ2OGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTGlzdCwgQXZhdGFyLCBNb2RhbCwgSW5wdXQsIFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNFQVJDSF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Jvb20ubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL0NoZWNrYm94JztcclxuY29uc3QgUm9vbSA9ICh7IGhlaWdodCB9KSA9PiB7XHJcbiAgICAvL+yEnOuyhOyCrOydtOuTnOugjOuNlOungSAtIHByZSByZW5kZXJpbmcg7ZW07JW87ZWgIO2VhOyalOqwgCDsnojsnYTquYw/XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHNlYXJjaFVzZXJSZXN1bHQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbIHZpc2libGUsIG9uQ2hhbmdlVmlzaWJsZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgWyBncm91cENoYXQsIHNldEdyb3VwQ2hhdCBdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGxpc3REYXRhID0gc2VhcmNoVXNlclJlc3VsdC5tYXAoKHYsIGkpID0+ICh7IFxyXG4gICAgICAgIGlkeDogaSxcclxuICAgICAgICB1aWQ6IHYuaWQsXHJcbiAgICAgICAgdGl0bGU6IHYubmlja25hbWUsXHJcbiAgICAgICAgY29udGVudDogdi5lbWFpbCxcclxuICAgICAgICBhdmF0YXI6IHYucGhvdG8sXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VWaXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVZpc2libGUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU2VhcmNoID0gKGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrVXNlciA9IChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cENoYXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGdyb3VwQ2hhdFtpXS51aWQgPT09IGUudWlkKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRHcm91cENoYXQoZ3JvdXBDaGF0ID0+IGdyb3VwQ2hhdC5jb25jYXQoZSkpO1xyXG4gICAgICAgIC8vc2V0R3JvdXBDaGF0KGdyb3VwQ2hhdCA9PiBbLi4uZ3JvdXBDaGF0LCBlXSk7XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEdyb3VwQ2hhdChncm91cENoYXQgPT4gZ3JvdXBDaGF0LmZpbHRlcihwID0+IChwLnVpZCAhPT0gZS51aWQpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdFwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VUaXRsZVwiIHN0eWxlPXt7aGVpZ2h0OiBcIjUwcHhcIiwgYm9yZGVyQm90dG9tOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBkaXNwbGF5OiBcImZsZXhcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiNjAwcHhcIiwgZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZmxleEdyb3c6IFwiMVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luOlwiMFwifX0+Jm5ic3A7Jm5ic3A7TWVzc2FnZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBmbGV4R3JvdzogXCIwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBvbkNsaWNrPXtzaG93TW9kYWx9IGljb249ezxQbHVzT3V0bGluZWQgLz59IHN0eWxlPXt7bWFyZ2luOiBcIjAgMTVweFwifX0gc2l6ZT1cImxhcmdlXCI+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5ldyBNZXNzYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICAgICAgICAgICAgICBib2R5U3R5bGU9e3toZWlnaHQ6IFwiNTAwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVPa30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFBlb3BsZVwiIG9uU2VhcmNoPXtvblNlYXJjaH0gYm9yZGVyZWQ9e2ZhbHNlfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7Z3JvdXBDaGF0Lm1hcCgocCk9Pig8VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMmRiN2Y1XCJcclxuICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZSBvbkNsb3NlPXsoKT0+e29uQ2xvc2UocCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3AuYXZhdGFyPyA8QXZhdGFyIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7cC5hdmF0YXJ9YH0gLz46IDxBdmF0YXI+e3AudGl0bGVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDt7cC50aXRsZX08L1RhZz4pKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94Lkdyb3VwIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoVXNlclJlc3VsdC5tYXAodT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7dS5hdmF0YXJ9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1LmVtYWlsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+PC9kaXY+KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveC5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2xpc3REYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckxpc3R9IG9uQ2xpY2s9eygpPT57IG9uQ2xpY2tVc2VyKGl0ZW0pOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtpdGVtLmF2YXRhcj8gPEF2YXRhciBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvcHJvZmlsZS8ke2l0ZW0uYXZhdGFyfWB9IC8+IDogPEF2YXRhcj57aXRlbS50aXRsZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cInNjcm9sbGFibGVEaXZcIiBzdHlsZT17e2hlaWdodDogaGVpZ2h0LTUwICwgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICBkYXRhU291cmNlPXtsaXN0RGF0YX1cclxuICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX0+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtpdGVtLmF2YXRhcn0gLz59XHJcbiAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==