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

/* eslint-disable */











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
          dispatch({
            type: _reducers_chat__WEBPACK_IMPORTED_MODULE_6__["UPDATE_ROOM_LIST"],
            data: room
          });
        }
      });
    });
    return function () {
      _utils_io__WEBPACK_IMPORTED_MODULE_8__["socket"].off('updateRoomList');
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_layout_DesktopLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Side: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Room__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 30
    }, _this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Chat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      roomId: roomId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVzc2FnZS9bcm9vbUlkXS5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInJvb21JZCIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUpvaW5Sb29tIiwic29ja2V0IiwiaWQiLCJ1c2VFZmZlY3QiLCJlbWl0IiwicmVzIiwidHlwZSIsIkxPQURfUk9PTV9MSVNUIiwiZGF0YSIsInJvb21zIiwib24iLCJyb29tIiwicGFydGljaXBhbnRzIiwiZm9yRWFjaCIsInUiLCJVUERBVEVfUk9PTV9MSVNUIiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFGa0IsTUFHVkMsTUFIVSxHQUdDRixNQUFNLENBQUNHLEtBSFIsQ0FHVkQsTUFIVTs7QUFBQSxxQkFJSEUsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FKUjtBQUFBLE1BSVZDLEVBSlUsZ0JBSVZBLEVBSlU7O0FBTWxCQyxzRUFBVyxDQUFDQyxnREFBRCxFQUFTRixFQUFFLENBQUNHLEVBQVosQ0FBWDtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFFWkYsb0RBQU0sQ0FBQ0csSUFBUCxDQUFZLHFCQUFaLEVBQW1DTCxFQUFFLENBQUNHLEVBQXRDLEVBQTBDLFVBQUNHLEdBQUQsRUFBUztBQUMvQ2YsY0FBUSxDQUFDO0FBQ0xnQixZQUFJLEVBQUVDLDZEQUREO0FBRUxDLFlBQUksRUFBRUgsR0FBRyxDQUFDSTtBQUZMLE9BQUQsQ0FBUjtBQUlILEtBTEQ7QUFPQVIsb0RBQU0sQ0FBQ1MsRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQUNDLElBQUQsRUFBVTtBQUVsQ0EsVUFBSSxDQUFDQyxZQUFMLENBQWtCQyxPQUFsQixDQUEwQixVQUFBQyxDQUFDLEVBQUk7QUFDM0IsWUFBSUEsQ0FBQyxDQUFDWixFQUFGLEtBQVNILEVBQUUsQ0FBQ0csRUFBaEIsRUFBb0I7QUFDaEJaLGtCQUFRLENBQUM7QUFDTGdCLGdCQUFJLEVBQUVTLCtEQUREO0FBRUxQLGdCQUFJLEVBQUVHO0FBRkQsV0FBRCxDQUFSO0FBSUg7QUFDSixPQVBEO0FBUUgsS0FWRDtBQVlBLFdBQU8sWUFBTTtBQUNUVixzREFBTSxDQUFDZSxHQUFQLENBQVcsZ0JBQVg7QUFDRCxLQUZIO0FBR0gsR0F4QlEsRUF3Qk4sRUF4Qk0sQ0FBVDtBQTBCQSxzQkFDSSxxRUFBQyx3RUFBRDtBQUFlLFFBQUksZUFBRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXJCO0FBQUEsMkJBQ0kscUVBQUMsd0RBQUQ7QUFBTSxZQUFNLEVBQUV0QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQXZDRDs7R0FBTUwsTztVQUNlRSx1RCxFQUNGRSxxRCxFQUVBRyx1RCxFQUVmSSw0RDs7O0tBTkVYLE87QUF5Q1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW3Jvb21JZF0uOTEyNGE3OWM1NzQ4OWE5ZWVlMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm9vbSBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvUm9vbSc7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9DaGF0JztcclxuaW1wb3J0IERlc2t0b3BMYXlvdXQgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9EZXNrdG9wTGF5b3V0JztcclxuXHJcbmltcG9ydCB7IExPQURfUk9PTV9MSVNULCBVUERBVEVfUk9PTV9MSVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvY2hhdCc7XHJcbmltcG9ydCB7IHVzZUpvaW5Sb29tIH0gZnJvbSAnLi4vLi4vaG9va3MvY2hhdEhvb2tzJztcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi8uLi8uLi91dGlscy9pbyc7XHJcblxyXG5jb25zdCBNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHJvb21JZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICB1c2VKb2luUm9vbShzb2NrZXQsIG1lLmlkKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBzb2NrZXQuZW1pdCgncm9vbUxpc3REYXRhUmVxdWVzdCcsIG1lLmlkLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPQURfUk9PTV9MSVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzLnJvb21zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oJ3VwZGF0ZVJvb21MaXN0JywgKHJvb20pID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJvb20ucGFydGljaXBhbnRzLmZvckVhY2godSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodS5pZCA9PT0gbWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFVQREFURV9ST09NX0xJU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJvb21cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ3VwZGF0ZVJvb21MaXN0Jyk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8RGVza3RvcExheW91dCBTaWRlPXs8Um9vbS8+fT5cclxuICAgICAgICAgICAgPENoYXQgcm9vbUlkPXtyb29tSWR9IC8+XHJcbiAgICAgICAgPC9EZXNrdG9wTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTsiXSwic291cmNlUm9vdCI6IiJ9