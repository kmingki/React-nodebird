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
    //console.log('images', e.target.files); 유사배열, File객체
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
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
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
    onFinish: onSubmit,
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

_s(PostForm, "tscwaFKyhzoOy46uheu21XTIU70=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DaGFuZ2VJbWFnZXMiLCJ1c2VDYWxsYmFjayIsImUiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsInRhcmdldCIsImZpbGVzIiwiZiIsImFwcGVuZCIsInR5cGUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJBRERfUE9TVF9SRVFVRVNUIiwiY29udGVudCIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsIm9uQ2hhbmdlVGV4dCIsInZhbHVlIiwibWFyZ2luIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURxQixrQkFFR0Msc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVkQyxJQUZjO0FBQUEsTUFFUkMsT0FGUSxpQkFFZ0I7OztBQUZoQixxQkFHYUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIeEI7QUFBQSxNQUdiQyxVQUhhLGdCQUdiQSxVQUhhO0FBQUEsTUFHREMsV0FIQyxnQkFHREEs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QSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBT0U7QUFBQSxnQkFDR2xCLFVBQVUsQ0FBQytCLEdBQVgsQ0FBZSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN4Qiw0QkFDRTtBQUFhLGVBQUssRUFBRTtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBcEI7QUFBQSxrQ0FDRTtBQUFLLGVBQUcsa0NBQTJCRixDQUEzQixDQUFSO0FBQXdDLGlCQUFLLEVBQUU7QUFBRUcsbUJBQUssRUFBRTtBQUFULGFBQS9DO0FBQW1FLGVBQUcsRUFBRUg7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsbUNBQ0UscUVBQUMsMkNBQUQ7QUFBUSxxQkFBTyxFQUFFUCxhQUFhLENBQUNRLENBQUQsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBVUQsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBUUQsT0FUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQWpGRDs7R0FBTXpDLFE7VUFDYUUsdUQsRUFFaUJJLHVEOzs7S0FIOUJOLFE7QUFtRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhYTFmYWYxMTBlNWI2OTBjZTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTsvL+y7tO2PrOuEjO2KuOydmCBzdGF0ZVxyXG4gIGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfT11c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIFxyXG5cclxuICAvKuydtOuvuOyngOulvCBhamF466GcIOyXheuhnOuTnCDtlaDrlYwgZm9ybSDsoITshqEg7ZWE7JqUXHJcbiAg6rCZ7J2AIGtleeulvCDqsIDsp4Qg6rCS7J2EIOyXrOufrOqwnCDrhKPsnYTsiJgg7J6I64ukLlxyXG4gIOqwkuydgCDrrLjsnpDsl7TroZwg7J6Q64+Z67OA7ZmYKi9cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgIC8vY29uc29sZS5sb2coJ2ltYWdlcycsIGUudGFyZ2V0LmZpbGVzKTsg7Jyg7IKs67Cw7Je0LCBGaWxl6rCd7LK0XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKT0+e1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKTtcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgLy9jbGljaygpIC0gZWxlbWVudOulvCDrp4jsmrDsiqTroZwg7YG066at7ZWcIOqyg+ycvOuhnCDtlZzri6QuXHJcbn0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4geyBcclxuICAgIGlmKGFkZFBvc3REb25lKSB7XHJcbiAgICAgIHNldFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH0sW2FkZFBvc3REb25lXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaW1hZ2VQYXRocyxcclxuICAgICAgICBjb250ZW50OiB0ZXh0LFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbdGV4dF0pOyBcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgfSlcclxuICB9KTtcclxuICAvL3VzZUNhbGxiYWNr7Lu07Y+s64SM7Yq46rCAIOumrOugjOuNlOungSDrkKDrlYzrp4jri6Qg7ZWo7IiY65Ok7J20IOyDiOuhnCDsg53shLHrkJjripQg6rKD7J2EIOuwqeyngFxyXG4gIC8vZS50YXJnZXQgLSDtirnsoJUg7J2067Kk7Yq46rCAIOuwnOyDne2VmOuKlCDtg5zqt7hcclxuICAvL2UudGFyZ2V0Lm5hbWUgLSDtg5zqt7jsnZgg7J2066aEXHJcbiAgLy9lLnRhcmdldC52YWx1ZSAtIO2DnOq3uOyXkCDsnoXroKXrkJzripAg6rCSXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPuynueynuTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Z9YH0gc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=