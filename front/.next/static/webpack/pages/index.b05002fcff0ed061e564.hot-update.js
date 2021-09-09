webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\components\\PostForm.js",
    _this = undefined,
    _s = $RefreshSig$();







var PostForm = function PostForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState[0],
      setText = _useState[1]; //컴포넌트의 state


  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      addPostDone = _useSelector.addPostDone;

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /*이미지를 ajax로 업로드 할때 form 전송 필요
  같은 key를 가진 값을 여러개 넣을수 있다.
  값은 문자열로 자동변환*/

  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    //console.log('images', e.target.files); 유사배열
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    imageInput.current.click(); //click() - element를 마우스로 클릭한 것으로 한다.
  }, [imageInput.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
      data: {
        imagePaths: imagePaths,
        content: text
      }
    });
  }, [text]);
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_IMAGE"],
        data: index
      });
    };
  }); //useCallback컴포넌트가 리렌더링 될때마다 함수들이 새로 생성되는 것을 방지
  //e.target - 특정 이벤트가 발생하는 태그
  //e.target.name - 태그의 이름
  //e.target.value - 태그에 입력된느 값

  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setText(e.target.value);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChangeImages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        style: {
          "float": 'right'
        },
        htmlType: "submit",
        children: "\uC9F9\uC9F9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: imagePaths.map(function (v, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            display: 'inline-block'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: "http://localhost:3065/".concat(v),
            style: {
              width: '200px'
            },
            alt: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              onClick: onRemoveImage(i),
              children: "\uC81C\uAC70"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 19
          }, _this)]
        }, v, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, _this);
};

_s(PostForm, "TQ7WYLUccHBl3ZeC2jhlcJNHgA8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DaGFuZ2VJbWFnZXMiLCJ1c2VDYWxsYmFjayIsImUiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsInRhcmdldCIsImZpbGVzIiwiZiIsImFwcGVuZCIsInR5cGUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwidXNlRWZmZWN0Iiwib25TdWJtaXRGb3JtIiwiQUREX1BPU1RfUkVRVUVTVCIsImNvbnRlbnQiLCJvblJlbW92ZUltYWdlIiwiaW5kZXgiLCJSRU1PVkVfSU1BR0UiLCJvbkNoYW5nZVRleHQiLCJ2YWx1ZSIsIm1hcmdpbiIsIm1hcCIsInYiLCJpIiwiZGlzcGxheSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEcUIsa0JBRUdDLHNEQUFRLENBQUMsRUFBRCxDQUZYO0FBQUEsTUFFZEMsSUFGYztBQUFBLE1BRVJDLE9BRlEsaUJBRWdCOzs7QUFGaEIscUJBR2FDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSHhCO0FBQUEsTUFHYkMsVUFIYSxnQkFHYkEsVUFIYTtBQUFBLE1BR0RDLFdBSEMsZ0JB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O0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQU9FO0FBQUEsZ0JBQ0dsQixVQUFVLENBQUMrQixHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDeEIsNEJBQ0U7QUFBYSxlQUFLLEVBQUU7QUFBRUMsbUJBQU8sRUFBRTtBQUFYLFdBQXBCO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLGtDQUEyQkYsQ0FBM0IsQ0FBUjtBQUF3QyxpQkFBSyxFQUFFO0FBQUVHLG1CQUFLLEVBQUU7QUFBVCxhQUEvQztBQUFtRSxlQUFHLEVBQUVIO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLG1DQUNFLHFFQUFDLDJDQUFEO0FBQVEscUJBQU8sRUFBRVAsYUFBYSxDQUFDUSxDQUFELENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQVVELENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVFELE9BVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzQkgsQ0FqRkQ7O0dBQU16QyxRO1VBQ2FFLHVELEVBRWlCSSx1RDs7O0tBSDlCTixRO0FBbUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMDUwMDJmY2ZmMGVkMDYxZTU2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBSRU1PVkVfSU1BR0UgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7Ly/su7Ttj6zrhIztirjsnZggc3RhdGVcclxuICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH09dXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIFxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBcclxuXHJcbiAgLyrsnbTrr7jsp4DrpbwgYWpheOuhnCDsl4XroZzrk5wg7ZWg65WMIGZvcm0g7KCE7IahIO2VhOyalFxyXG4gIOqwmeydgCBrZXnrpbwg6rCA7KeEIOqwkuydhCDsl6zrn6zqsJwg64Sj7J2E7IiYIOyeiOuLpC5cclxuICDqsJLsnYAg66y47J6Q7Je066GcIOyekOuPmeuzgO2ZmCovXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAvL2NvbnNvbGUubG9nKCdpbWFnZXMnLCBlLnRhcmdldC5maWxlcyk7IOycoOyCrOuwsOyXtFxyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZik9PntcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7XHJcbiAgICB9KTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIC8vY2xpY2soKSAtIGVsZW1lbnTrpbwg66eI7Jqw7Iqk66GcIO2BtOumre2VnCDqsoPsnLzroZwg7ZWc64ukLlxyXG59LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgXHJcbiAgICBpZihhZGRQb3N0RG9uZSkge1xyXG4gICAgICBzZXRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9LFthZGRQb3N0RG9uZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpbWFnZVBhdGhzLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFt0ZXh0XSk7IFxyXG5cclxuICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgZGF0YTogaW5kZXgsXHJcbiAgICB9KVxyXG4gIH0pO1xyXG4gIC8vdXNlQ2FsbGJhY2vsu7Ttj6zrhIztirjqsIAg66as66CM642U66eBIOuQoOuVjOuniOuLpCDtlajsiJjrk6TsnbQg7IOI66GcIOyDneyEseuQmOuKlCDqsoPsnYQg67Cp7KeAXHJcbiAgLy9lLnRhcmdldCAtIO2KueyglSDsnbTrsqTtirjqsIAg67Cc7IOd7ZWY64qUIO2DnOq3uFxyXG4gIC8vZS50YXJnZXQubmFtZSAtIO2DnOq3uOydmCDsnbTrpoRcclxuICAvL2UudGFyZ2V0LnZhbHVlIC0g7YOc6re47JeQIOyeheugpeuQnOuKkCDqsJJcclxuICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAgMjBweCcgfX0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPuynueynuTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Z9YH0gc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=