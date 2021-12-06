webpackHotUpdate_N_E("pages/messages",{

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "messageTitle",
      style: {
        height: "50px",
        borderBottom: "solid thin #EFEEF5",
        display: "flex"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          width: "600px",
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "1"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
              style: {
                margin: "0"
              },
              children: "\xA0\xA0Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "text",
              shape: "circle",
              onClick: showModal,
              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["PlusOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 86
              }, _this),
              style: {
                margin: "0 15px"
              },
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
            visible: visible,
            title: "New Messages",
            onOk: handleOk,
            onCancel: handleCancel,
            bodyStyle: {
              height: "500px"
            },
            footer: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "primary",
              onClick: handleOk,
              children: "Next"
            }, "submit", false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 25
            }, _this)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 21
            }, _this), groupChat.map(function (p) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
                color: "#2db7f5",
                closable: true,
                onClose: function onClose() {
                  _onClose(p);
                },
                children: [p.avatar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                  src: "http://localhost:3065/profile/".concat(p.avatar)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 36
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                  children: p.title[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 98
                }, _this), "\xA0", p.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 42
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"].Group, {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: searchUserResult.map(function (u) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                  className: _Room_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.userList,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                      src: "http://localhost:3065/profile/".concat(item.avatar)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 29
                    }, _this), u.nickname]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 29
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 51
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
              itemLayout: "vertical",
              dataSource: listData,
              renderItem: function renderItem(item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                  className: _Room_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.userList,
                  onClick: function onClick() {
                    onClickUser(item);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
                      avatar: item.avatar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                        src: "http://localhost:3065/profile/".concat(item.avatar)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 46
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                        children: item.title[0]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 112
                      }, _this),
                      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                        href: item.href,
                        children: item.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 32
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 25
                    }, _this), item.content]
                  }, item.title, true, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 21
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      id: "scrollableDiv",
      style: {
        height: height - 50,
        overflow: 'auto'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        itemLayout: "vertical",
        dataSource: listData,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                src: item.avatar
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 21
              }, _this),
              title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                href: item.href,
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 20
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 13
            }, _this), item.content]
          }, item.title, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZWFyY2hVc2VyUmVzdWx0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwib25DaGFuZ2VWaXNpYmxlIiwiZ3JvdXBDaGF0Iiwic2V0R3JvdXBDaGF0IiwibGlzdERhdGEiLCJtYXAiLCJ2IiwiaSIsImlkeCIsInVpZCIsImlkIiwidGl0bGUiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJlbWFpbCIsImF2YXRhciIsInBob3RvIiwic2hvd01vZGFsIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlT2siLCJjb25zb2xlIiwibG9nIiwib25TZWFyY2giLCJlIiwidHlwZSIsIlNFQVJDSF9VU0VSX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja1VzZXIiLCJsZW5ndGgiLCJjb25jYXQiLCJvbkNsb3NlIiwiZmlsdGVyIiwicCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJ1Iiwic3R5bGVzIiwidXNlckxpc3QiLCJpdGVtIiwiaHJlZiIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRnlCLHFCQUdJQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUhmO0FBQUEsTUFHakJDLGdCQUhpQixnQkFHakJB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T0FBL0I7QUFBQSw2QkFDQSxxRUFBQyx5Q0FBRDtBQUNBLGtCQUFVLEVBQUMsVUFEWDtBQUVBLGtCQUFVLEVBQUV6QyxRQUZaO0FBR0Esa0JBQVUsRUFBRSxvQkFBQXVDLElBQUk7QUFBQSw4QkFDaEIscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsb0NBRUkscUVBQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUNBLG9CQUFNLGVBQUUscUVBQUMsMkNBQUQ7QUFBUSxtQkFBRyxFQUFFQSxJQUFJLENBQUM1QjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURSO0FBRUEsbUJBQUssZUFBRTtBQUFHLG9CQUFJLEVBQUU0QixJQUFJLENBQUNDLElBQWQ7QUFBQSwwQkFBcUJELElBQUksQ0FBQ2hDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLEVBTUNnQyxJQUFJLENBQUM5QixPQU5OO0FBQUEsYUFDUzhCLElBQUksQ0FBQ2hDLEtBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZ0I7QUFBQTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9GSCxDQXRJRDs7R0FBTXBCLEk7VUFFZUcsdUQsRUFDWUMsdUQ7OztLQUgzQkosSTtBQXdJU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuYjBlNDEyYmI1OWZiMjdhYmE5MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTGlzdCwgQXZhdGFyLCBNb2RhbCwgSW5wdXQsIFRhZywgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBTRUFSQ0hfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Sb29tLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBSb29tID0gKHsgaGVpZ2h0IH0pID0+IHtcclxuICAgIC8v7ISc67KE7IKs7J2065Oc66CM642U66eBIC0gcHJlIHJlbmRlcmluZyDtlbTslbztlaAg7ZWE7JqU6rCAIOyeiOydhOq5jD9cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgc2VhcmNoVXNlclJlc3VsdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFsgdmlzaWJsZSwgb25DaGFuZ2VWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbIGdyb3VwQ2hhdCwgc2V0R3JvdXBDaGF0IF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgbGlzdERhdGEgPSBzZWFyY2hVc2VyUmVzdWx0Lm1hcCgodiwgaSkgPT4gKHsgXHJcbiAgICAgICAgaWR4OiBpLFxyXG4gICAgICAgIHVpZDogdi5pZCxcclxuICAgICAgICB0aXRsZTogdi5uaWNrbmFtZSxcclxuICAgICAgICBjb250ZW50OiB2LmVtYWlsLFxyXG4gICAgICAgIGF2YXRhcjogdi5waG90byxcclxuICAgICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlVmlzaWJsZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29rJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tVc2VyID0gKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwQ2hhdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXBDaGF0W2ldLnVpZCA9PT0gZS51aWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEdyb3VwQ2hhdChncm91cENoYXQgPT4gZ3JvdXBDaGF0LmNvbmNhdChlKSk7XHJcbiAgICAgICAgLy9zZXRHcm91cENoYXQoZ3JvdXBDaGF0ID0+IFsuLi5ncm91cENoYXQsIGVdKTtcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3Qgb25DbG9zZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0R3JvdXBDaGF0KGdyb3VwQ2hhdCA9PiBncm91cENoYXQuZmlsdGVyKHAgPT4gKHAudWlkICE9PSBlLnVpZCkpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0XCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVRpdGxlXCIgc3R5bGU9e3toZWlnaHQ6IFwiNTBweFwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjRUZFRUY1XCIsIGRpc3BsYXk6IFwiZmxleFwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCI2MDBweFwiLCBkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBmbGV4R3JvdzogXCIxXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW46XCIwXCJ9fT4mbmJzcDsmbmJzcDtNZXNzYWdlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGZsZXhHcm93OiBcIjBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIG9uQ2xpY2s9e3Nob3dNb2RhbH0gaWNvbj17PFBsdXNPdXRsaW5lZCAvPn0gc3R5bGU9e3ttYXJnaW46IFwiMCAxNXB4XCJ9fSBzaXplPVwibGFyZ2VcIj48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmV3IE1lc3NhZ2VzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlTdHlsZT17e2hlaWdodDogXCI1MDBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJzdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZU9rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9XCJTZWFyY2ggUGVvcGxlXCIgb25TZWFyY2g9e29uU2VhcmNofSBib3JkZXJlZD17ZmFsc2V9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtncm91cENoYXQubWFwKChwKT0+KDxUYWdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyZGI3ZjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NhYmxlIG9uQ2xvc2U9eygpPT57b25DbG9zZShwKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cC5hdmF0YXI/IDxBdmF0YXIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Byb2ZpbGUvJHtwLmF2YXRhcn1gfSAvPjogPEF2YXRhcj57cC50aXRsZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3twLnRpdGxlfTwvVGFnPikpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hVc2VyUmVzdWx0Lm1hcCh1PT4oPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7aXRlbS5hdmF0YXJ9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1Lm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD48L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94Lkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTGlzdH0gb25DbGljaz17KCk9Pnsgb25DbGlja1VzZXIoaXRlbSk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e2l0ZW0uYXZhdGFyPyA8QXZhdGFyIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7aXRlbS5hdmF0YXJ9YH0gLz4gOiA8QXZhdGFyPntpdGVtLnRpdGxlWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwic2Nyb2xsYWJsZURpdlwiIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQtNTAgLCBvdmVyZmxvdzogJ2F1dG8nfX0+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgIGRhdGFTb3VyY2U9e2xpc3REYXRhfVxyXG4gICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfT5cclxuICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2l0ZW0uYXZhdGFyfSAvPn1cclxuICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgKX1cclxuICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9