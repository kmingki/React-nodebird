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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\components\\Room.js",
    _this = undefined;





var listData = [];

for (var i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: "ant design part ".concat(i),
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  });
}

var Room = function Room() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "messageTitle",
      style: {
        height: "50px",
        borderBottom: "solid thin #EFEEF5",
        display: "flex"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          width: "600px",
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "1"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
              style: {
                margin: "0"
              },
              children: "\xA0\xA0Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            flexGrow: "0"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "text",
              shape: "circle",
              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["PlusOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 66
              }, _this),
              style: {
                margin: "0 15px"
              },
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        itemLayout: "vertical",
        dataSource: listData,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                src: item.avatar
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 21
              }, _this),
              title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                href: item.href,
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 20
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 13
            }, _this), item.content]
          }, item.title, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 9
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzIl0sIm5hbWVzIjpbImxpc3REYXRhIiwiaSIsInB1c2giLCJocmVmIiwidGl0bGUiLCJhdmF0YXIiLCJjb250ZW50IiwiUm9vbSIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbiIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0JELFVBQVEsQ0FBQ0UsSUFBVCxDQUFjO0FBQ1pDLFFBQUksRUFBRSxvQkFETTtBQUVaQyxTQUFLLDRCQUFxQkgsQ0FBckIsQ0FGTztBQUdaSSxVQUFNLEVBQUUsb0NBSEk7QUFJWkMsV0FBTyxFQUNMO0FBTFUsR0FBZDtBQU9EOztBQUVELElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFFZixzQkFDSTtBQUFBLDRCQUVBO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBOEIsV0FBSyxFQUFFO0FBQUNDLGNBQU0sRUFBRSxNQUFUO0FBQWlCQyxvQkFBWSxFQUFFLG9CQUEvQjtBQUFxREMsZUFBTyxFQUFFO0FBQTlELE9BQXJDO0FBQUEsNkJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBQ0MsZUFBSyxFQUFFLE9BQVI7QUFBaUJELGlCQUFPLEVBQUM7QUFBekIsU0FBWjtBQUFBLGdDQUNJO0FBQUssZUFBSyxFQUFFO0FBQUNBLG1CQUFPLEVBQUMsTUFBVDtBQUFpQkUsc0JBQVUsRUFBQyxRQUE1QjtBQUFzQ0Msb0JBQVEsRUFBRTtBQUFoRCxXQUFaO0FBQUEsaUNBQ0k7QUFBQSxtQ0FDSTtBQUFJLG1CQUFLLEVBQUU7QUFBQ0Msc0JBQU0sRUFBQztBQUFSLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JO0FBQUssZUFBSyxFQUFFO0FBQUNKLG1CQUFPLEVBQUMsTUFBVDtBQUFpQkUsc0JBQVUsRUFBQyxRQUE1QjtBQUFzQ0Msb0JBQVEsRUFBRTtBQUFoRCxXQUFaO0FBQUEsaUNBQ0k7QUFBQSxtQ0FDSSxxRUFBQywyQ0FBRDtBQUFRLGtCQUFJLEVBQUMsTUFBYjtBQUFvQixtQkFBSyxFQUFDLFFBQTFCO0FBQW1DLGtCQUFJLGVBQUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBekM7QUFBMkQsbUJBQUssRUFBRTtBQUFDQyxzQkFBTSxFQUFFO0FBQVQsZUFBbEU7QUFBc0Ysa0JBQUksRUFBQztBQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBLGVBaUJBO0FBQUEsNkJBQ0EscUVBQUMseUNBQUQ7QUFDQSxrQkFBVSxFQUFDLFVBRFg7QUFFQSxrQkFBVSxFQUFFZCxRQUZaO0FBR0Esa0JBQVUsRUFBRSxvQkFBQWUsSUFBSTtBQUFBLDhCQUNoQixxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSxvQ0FFSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0Esb0JBQU0sZUFBRSxxRUFBQywyQ0FBRDtBQUFRLG1CQUFHLEVBQUVBLElBQUksQ0FBQ1Y7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEUjtBQUVBLG1CQUFLLGVBQUU7QUFBRyxvQkFBSSxFQUFFVSxJQUFJLENBQUNaLElBQWQ7QUFBQSwwQkFBcUJZLElBQUksQ0FBQ1g7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosRUFNQ1csSUFBSSxDQUFDVCxPQU5OO0FBQUEsYUFDU1MsSUFBSSxDQUFDWCxLQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGdCO0FBQUE7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQ0gsQ0F2Q0Q7O0tBQU1HLEk7QUF5Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2VzLmVmMmMxNjI2OGJmOThhNjFlOTRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTGlzdCwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBsaXN0RGF0YSA9IFtdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDIzOyBpKyspIHtcclxuICBsaXN0RGF0YS5wdXNoKHtcclxuICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgdGl0bGU6IGBhbnQgZGVzaWduIHBhcnQgJHtpfWAsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL2pvZXNjaG1vZS5pby9hcGkvdjEvcmFuZG9tJyxcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgICdXZSBzdXBwbHkgYSBzZXJpZXMgb2YgZGVzaWduIHByaW5jaXBsZXMsIHByYWN0aWNhbCBwYXR0ZXJucyBhbmQgaGlnaCBxdWFsaXR5IGRlc2lnbiByZXNvdXJjZXMgKFNrZXRjaCBhbmQgQXh1cmUpLCB0byBoZWxwIHBlb3BsZSBjcmVhdGUgdGhlaXIgcHJvZHVjdCBwcm90b3R5cGVzIGJlYXV0aWZ1bGx5IGFuZCBlZmZpY2llbnRseS4nLFxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBSb29tID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlVGl0bGVcIiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjYwMHB4XCIsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGZsZXhHcm93OiBcIjFcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbjpcIjBcIn19PiZuYnNwOyZuYnNwO01lc3NhZ2VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgZmxleEdyb3c6IFwiMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PFBsdXNPdXRsaW5lZCAvPn0gc3R5bGU9e3ttYXJnaW46IFwiMCAxNXB4XCJ9fSBzaXplPVwibGFyZ2VcIj48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9PlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17aXRlbS5hdmF0YXJ9IC8+fVxyXG4gICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=