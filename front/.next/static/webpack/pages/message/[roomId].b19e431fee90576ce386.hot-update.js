webpackHotUpdate_N_E("pages/message/[roomId]",{

/***/ "./pages/message/[roomId].js":
/*!***********************************!*\
  !*** ./pages/message/[roomId].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Room__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Room */ "./components/Room.js");
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/Chat */ "./components/Chat.js");
/* harmony import */ var _components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/layout/DesktopLayout */ "./components/layout/DesktopLayout.js");
/* harmony import */ var _reducers_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/chat */ "./reducers/chat.js");
/* harmony import */ var _hooks_chatHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/chatHooks */ "./hooks/chatHooks.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../utils/io */ "./utils/io.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\pages\\message\\[roomId].js",
    _this = undefined,
    _s = $RefreshSig$();












var Message = function Message() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var roomId = router.query.roomId;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  Object(_hooks_chatHooks__WEBPACK_IMPORTED_MODULE_7__["useJoinRoom"])(_utils_io__WEBPACK_IMPORTED_MODULE_8__["socket"], me.id);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _utils_io__WEBPACK_IMPORTED_MODULE_8__["socket"].emit('roomListDataRequest', me.id, function (res) {
      dispatch({
        type: _reducers_chat__WEBPACK_IMPORTED_MODULE_6__["LOAD_ROOM_LIST"],
        data: res.rooms
      });
    });
    _utils_io__WEBPACK_IMPORTED_MODULE_8__["socket"].on('updateRoomList', function (room) {
      room.participants.forEach(function (u) {
        if (u.id === me.id) {
          console.log('update room list'); //draft.me.Followings.push({ id : action.data.UserId});
          //console.log([...rooms, room]);

          dispatch({
            type: _reducers_chat__WEBPACK_IMPORTED_MODULE_6__["UPDATE_ROOM_LIST"],
            data: room
          });
        }
      });
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Room__WEBPACK_IMPORTED_MODULE_3__["default"], {
      height: document.documentElement.clientHeight
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 30
    }, _this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Chat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      roomId: roomId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, _this);
};

_s(Message, "cuNqGUNb9D9iGUZl+dEslQ2RTqQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], _hooks_chatHooks__WEBPACK_IMPORTED_MODULE_7__["useJoinRoom"]];
});

_c = Message;
/* harmony default export */ __webpack_exports__["default"] = (Message);

var _c;

$RefreshReg$(_c, "Message");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVzc2FnZS9bcm9vbUlkXS5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInJvb21JZCIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUpvaW5Sb29tIiwic29ja2V0IiwiaWQiLCJ1c2VFZmZlY3QiLCJlbWl0IiwicmVzIiwidHlwZSIsIkxPQURfUk9PTV9MSVNUIiwiZGF0YSIsInJvb21zIiwib24iLCJyb29tIiwicGFydGljaXBhbnRzIiwiZm9yRWFjaCIsInUiLCJjb25zb2xlIiwibG9nIiwiVVBEQVRFX1JPT01fTElTVCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRmtCLE1BR1ZDLE1BSFUsR0FHQ0YsTUFBTSxDQUFDRyxLQUhSLENBR1ZELE1BSFU7O0FBQUEscUJBSUhFLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSlI7QUFBQSxNQUlWQyxFQUpVLGdCQUlWQSxFQUpVOztBQU1sQkMsc0VBQVcsQ0FBQ0MsZ0RBQUQsRUFBU0YsRUFBRSxDQUFDRyxFQUFaLENBQVg7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBRVpGLG9EQUFNLENBQUNHLElBQVAsQ0FBWSxxQkFBWixFQUFtQ0wsRUFBRSxDQUFDRyxFQUF0QyxFQUEwQyxVQUFDRyxHQUFELEVBQVM7QUFDL0NmLGNBQVEsQ0FBQztBQUNMZ0IsWUFBSSxFQUFFQyw2REFERDtBQUVMQyxZQUFJLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTCxPQUFELENBQVI7QUFJSCxLQUxEO0FBT0FSLG9EQUFNLENBQUNTLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixVQUFDQyxJQUFELEVBQVU7QUFFbENBLFVBQUksQ0FBQ0MsWUFBTCxDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQUMsQ0FBQyxFQUFJO0FBQzNCLFlBQUlBLENBQUMsQ0FBQ1osRUFBRixLQUFTSCxFQUFFLENBQUNHLEVBQWhCLEVBQW9CO0FBQ2hCYSxpQkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFEZ0IsQ0FFaEI7QUFDQTs7QUFDQTFCLGtCQUFRLENBQUM7QUFDTGdCLGdCQUFJLEVBQUVXLCtEQUREO0FBRUxULGdCQUFJLEVBQUVHO0FBRkQsV0FBRCxDQUFSO0FBSUg7QUFDSixPQVZEO0FBV0gsS0FiRDtBQWNILEdBdkJRLEVBdUJQLEVBdkJPLENBQVQ7QUF5QkEsc0JBQ0kscUVBQUMsd0VBQUQ7QUFBZSxRQUFJLGVBQUUscUVBQUMsd0RBQUQ7QUFBTSxZQUFNLEVBQUVPLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFyQjtBQUFBLDJCQUNJLHFFQUFDLHdEQUFEO0FBQU0sWUFBTSxFQUFFMUI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0F0Q0Q7O0dBQU1MLE87VUFDZUUsdUQsRUFDRkUscUQsRUFFQUcsdUQsRUFFZkksNEQ7OztLQU5FWCxPO0FBd0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlL1tyb29tSWRdLmIxOWU0MzFmZWU5MDU3NmNlMzg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvb20gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL1Jvb20nO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvQ2hhdCc7XHJcbmltcG9ydCBEZXNrdG9wTGF5b3V0IGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcExheW91dCc7XHJcblxyXG5pbXBvcnQgeyBMT0FEX1JPT01fTElTVCwgVVBEQVRFX1JPT01fTElTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NoYXQnO1xyXG5pbXBvcnQgeyB1c2VKb2luUm9vbSB9IGZyb20gJy4uLy4uL2hvb2tzL2NoYXRIb29rcyc7XHJcbmltcG9ydCB7IHNvY2tldCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaW8nO1xyXG5cclxuY29uc3QgTWVzc2FnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyByb29tSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgdXNlSm9pblJvb20oc29ja2V0LCBtZS5pZCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ3Jvb21MaXN0RGF0YVJlcXVlc3QnLCBtZS5pZCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX1JPT01fTElTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlcy5yb29tc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCd1cGRhdGVSb29tTGlzdCcsIChyb29tKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByb29tLnBhcnRpY2lwYW50cy5mb3JFYWNoKHUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHUuaWQgPT09IG1lLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSByb29tIGxpc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkIDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhbLi4ucm9vbXMsIHJvb21dKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFVQREFURV9ST09NX0xJU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJvb21cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPERlc2t0b3BMYXlvdXQgU2lkZT17PFJvb20gaGVpZ2h0PXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0fS8+fT5cclxuICAgICAgICAgICAgPENoYXQgcm9vbUlkPXtyb29tSWR9IC8+XHJcbiAgICAgICAgPC9EZXNrdG9wTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTsiXSwic291cmNlUm9vdCI6IiJ9