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
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
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
                      columnNumber: 25
                    }, _this), u.email]
                  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZWFyY2hVc2VyUmVzdWx0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwib25DaGFuZ2VWaXNpYmxlIiwiZ3JvdXBDaGF0Iiwic2V0R3JvdXBDaGF0IiwibGlzdERhdGEiLCJtYXAiLCJ2IiwiaSIsImlkeCIsInVpZCIsImlkIiwidGl0bGUiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJlbWFpbCIsImF2YXRhciIsInBob3RvIiwic2hvd01vZGFsIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlT2siLCJjb25zb2xlIiwibG9nIiwib25TZWFyY2giLCJlIiwidHlwZSIsIlNFQVJDSF9VU0VSX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja1VzZXIiLCJsZW5ndGgiLCJjb25jYXQiLCJvbkNsb3NlIiwiZmlsdGVyIiwicCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJ1Iiwic3R5bGVzIiwidXNlckxpc3QiLCJpdGVtIiwiaHJlZiIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDekI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZ5QixxQkFHSUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIZjtBQUFBLE1BR2pCQyxnQkFIaUIs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cUVBQUMseUNBQUQ7QUFDQSxrQkFBVSxFQUFDLFVBRFg7QUFFQSxrQkFBVSxFQUFFekMsUUFGWjtBQUdBLGtCQUFVLEVBQUUsb0JBQUF1QyxJQUFJO0FBQUEsOEJBQ2hCLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLG9DQUVJLHFFQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDQSxvQkFBTSxlQUFFLHFFQUFDLDJDQUFEO0FBQVEsbUJBQUcsRUFBRUEsSUFBSSxDQUFDNUI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEUjtBQUVBLG1CQUFLLGVBQUU7QUFBRyxvQkFBSSxFQUFFNEIsSUFBSSxDQUFDQyxJQUFkO0FBQUEsMEJBQXFCRCxJQUFJLENBQUNoQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixFQU1DZ0MsSUFBSSxDQUFDOUIsT0FOTjtBQUFBLGFBQ1M4QixJQUFJLENBQUNoQyxLQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGdCO0FBQUE7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxRkgsQ0F2SUQ7O0dBQU1wQixJO1VBRWVHLHVELEVBQ1lDLHVEOzs7S0FIM0JKLEk7QUF5SVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2VzLmY4OGFmMGUyYjhjZGE2NTE4ZDIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIExpc3QsIEF2YXRhciwgTW9kYWwsIElucHV0LCBUYWcgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBTRUFSQ0hfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Sb29tLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCc7XHJcbmNvbnN0IFJvb20gPSAoeyBoZWlnaHQgfSkgPT4ge1xyXG4gICAgLy/shJzrsoTsgqzsnbTrk5zroIzrjZTrp4EgLSBwcmUgcmVuZGVyaW5nIO2VtOyVvO2VoCDtlYTsmpTqsIAg7J6I7J2E6rmMP1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBzZWFyY2hVc2VyUmVzdWx0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgWyB2aXNpYmxlLCBvbkNoYW5nZVZpc2libGUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFsgZ3JvdXBDaGF0LCBzZXRHcm91cENoYXQgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBsaXN0RGF0YSA9IHNlYXJjaFVzZXJSZXN1bHQubWFwKCh2LCBpKSA9PiAoeyBcclxuICAgICAgICBpZHg6IGksXHJcbiAgICAgICAgdWlkOiB2LmlkLFxyXG4gICAgICAgIHRpdGxlOiB2Lm5pY2tuYW1lLFxyXG4gICAgICAgIGNvbnRlbnQ6IHYuZW1haWwsXHJcbiAgICAgICAgYXZhdGFyOiB2LnBob3RvLFxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlVmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VWaXNpYmxlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb2snKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfVVNFUl9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1VzZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBDaGF0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChncm91cENoYXRbaV0udWlkID09PSBlLnVpZCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0R3JvdXBDaGF0KGdyb3VwQ2hhdCA9PiBncm91cENoYXQuY29uY2F0KGUpKTtcclxuICAgICAgICAvL3NldEdyb3VwQ2hhdChncm91cENoYXQgPT4gWy4uLmdyb3VwQ2hhdCwgZV0pO1xyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBvbkNsb3NlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRHcm91cENoYXQoZ3JvdXBDaGF0ID0+IGdyb3VwQ2hhdC5maWx0ZXIocCA9PiAocC51aWQgIT09IGUudWlkKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlVGl0bGVcIiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjYwMHB4XCIsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGZsZXhHcm93OiBcIjFcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbjpcIjBcIn19PiZuYnNwOyZuYnNwO01lc3NhZ2VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZmxleEdyb3c6IFwiMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgb25DbGljaz17c2hvd01vZGFsfSBpY29uPXs8UGx1c091dGxpbmVkIC8+fSBzdHlsZT17e21hcmdpbjogXCIwIDE1cHhcIn19IHNpemU9XCJsYXJnZVwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgTWVzc2FnZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keVN0eWxlPXt7aGVpZ2h0OiBcIjUwMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlT2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBQZW9wbGVcIiBvblNlYXJjaD17b25TZWFyY2h9IGJvcmRlcmVkPXtmYWxzZX0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2dyb3VwQ2hhdC5tYXAoKHApPT4oPFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzJkYjdmNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2FibGUgb25DbG9zZT17KCk9PntvbkNsb3NlKHApfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwLmF2YXRhcj8gPEF2YXRhciBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvcHJvZmlsZS8ke3AuYXZhdGFyfWB9IC8+OiA8QXZhdGFyPntwLnRpdGxlWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e3AudGl0bGV9PC9UYWc+KSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICB7c2VhcmNoVXNlclJlc3VsdC5tYXAodT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJMaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7dS5hdmF0YXJ9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3UuZW1haWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PjwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTGlzdH0gb25DbGljaz17KCk9Pnsgb25DbGlja1VzZXIoaXRlbSk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e2l0ZW0uYXZhdGFyPyA8QXZhdGFyIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7aXRlbS5hdmF0YXJ9YH0gLz4gOiA8QXZhdGFyPntpdGVtLnRpdGxlWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwic2Nyb2xsYWJsZURpdlwiIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQtNTAgLCBvdmVyZmxvdzogJ2F1dG8nfX0+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgIGRhdGFTb3VyY2U9e2xpc3REYXRhfVxyXG4gICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfT5cclxuICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2l0ZW0uYXZhdGFyfSAvPn1cclxuICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgKX1cclxuICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9