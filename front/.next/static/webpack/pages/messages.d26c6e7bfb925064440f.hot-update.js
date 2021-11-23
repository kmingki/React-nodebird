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

  var groupChatPeople = [];

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
    groupChatPeople.push(e); //searchUserResult 중에서 e는 표시해야된다.
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var listData = searchUserResult.map(function (v, i) {
      return {
        uid: v.id,
        title: v.nickname,
        content: v.email
      };
    });
  }, [searchUserResult]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
              lineNumber: 59,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
                lineNumber: 64,
                columnNumber: 86
              }, _this),
              style: {
                margin: "0 15px"
              },
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
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
              lineNumber: 73,
              columnNumber: 25
            }, _this)],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
              placeholder: "Search People",
              onSearch: onSearch,
              bordered: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
              itemLayout: "vertical",
              dataSource: listData,
              renderItem: function renderItem(item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                  className: _Room_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.userList,
                  onClick: function onClick() {
                    onClickUser(item.uid);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
                      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                        src: item.avatar
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 33
                      }, _this),
                      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                        href: item.href,
                        children: item.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 32
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 25
                    }, _this), item.content]
                  }, item.title, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 21
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
                lineNumber: 108,
                columnNumber: 21
              }, _this),
              title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                href: item.href,
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 20
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 13
            }, _this), item.content]
          }, item.title, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, _this);
};

_s(Room, "f0hHwigPOhoBh+h8G2o0HhL8cmo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJoZWlnaHQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZWFyY2hVc2VyUmVzdWx0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwib25DaGFuZ2VWaXNpYmxlIiwiZ3JvdXBDaGF0UGVvcGxlIiwic2hvd01vZGFsIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlT2siLCJjb25zb2xlIiwibG9nIiwib25TZWFyY2giLCJlIiwidHlwZSIsIlNFQVJDSF9VU0VSX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja1VzZXIiLCJwdXNoIiwidXNlRWZmZWN0IiwibGlzdERhdGEiLCJtYXAiLCJ2IiwiaSIsInVpZCIsImlkIiwidGl0bGUiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJlbWFpbCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbiIsIml0ZW0iLCJzdHlsZXMiLCJ1c2VyTGlzdCIsImF2YXRhciIsImhyZWYiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDekI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZ5QixxQkFHSUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIZjtBQUFBLE1BR2pCQyxnQkFIaUIsZ0JBR2pCQSxnQkFIaUI7O0FBQUEsa0JBSVVDLHNEQUFRLENBQUMsS0FBRCxDQUpsQjtBQUFBLE1BSWxCQyxPQUprQjtBQUFB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L21lc3NhZ2VzLmQyNmM2ZTdiZmI5MjUwNjQ0NDBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIExpc3QsIEF2YXRhciwgTW9kYWwsIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU0VBUkNIX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm9vbS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUm9vbSA9ICh7IGhlaWdodCB9KSA9PiB7XHJcbiAgICAvL+yEnOuyhOyCrOydtOuTnOugjOuNlOungSAtIHByZSByZW5kZXJpbmcg7ZW07JW87ZWgIO2VhOyalOqwgCDsnojsnYTquYw/XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHNlYXJjaFVzZXJSZXN1bHQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgb25DaGFuZ2VWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGdyb3VwQ2hhdFBlb3BsZSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlVmlzaWJsZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29rJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb25DbGlja1VzZXIgPSAoZSkgPT4ge1xyXG5cclxuICAgICAgICBncm91cENoYXRQZW9wbGUucHVzaChlKTtcclxuICAgICAgICAvL3NlYXJjaFVzZXJSZXN1bHQg7KSR7JeQ7IScIGXripQg7ZGc7Iuc7ZW07JW865Cc64ukLlxyXG5cclxuXHJcbiAgICB9IFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGxpc3REYXRhID0gc2VhcmNoVXNlclJlc3VsdC5tYXAoKHYsIGkpID0+ICh7IFxyXG4gICAgICAgICAgICB1aWQ6IHYuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlOiB2Lm5pY2tuYW1lLFxyXG4gICAgICAgICAgICBjb250ZW50OiB2LmVtYWlsLFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgfSwgW3NlYXJjaFVzZXJSZXN1bHRdKTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlVGl0bGVcIiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjYwMHB4XCIsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGZsZXhHcm93OiBcIjFcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbjpcIjBcIn19PiZuYnNwOyZuYnNwO01lc3NhZ2VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZmxleEdyb3c6IFwiMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgb25DbGljaz17c2hvd01vZGFsfSBpY29uPXs8UGx1c091dGxpbmVkIC8+fSBzdHlsZT17e21hcmdpbjogXCIwIDE1cHhcIn19IHNpemU9XCJsYXJnZVwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgTWVzc2FnZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keVN0eWxlPXt7aGVpZ2h0OiBcIjUwMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlT2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBQZW9wbGVcIiBvblNlYXJjaD17b25TZWFyY2h9IGJvcmRlcmVkPXtmYWxzZX0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2xpc3REYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckxpc3R9IG9uQ2xpY2s9eygpPT57IG9uQ2xpY2tVc2VyKGl0ZW0udWlkKTsgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17aXRlbS5hdmF0YXJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJzY3JvbGxhYmxlRGl2XCIgc3R5bGU9e3toZWlnaHQ6IGhlaWdodC01MCAsIG92ZXJmbG93OiAnYXV0byd9fT5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9PlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17aXRlbS5hdmF0YXJ9IC8+fVxyXG4gICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=