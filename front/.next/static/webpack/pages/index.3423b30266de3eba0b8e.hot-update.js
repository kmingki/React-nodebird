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
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    //console.log('images', e.target.files); 유사배열
    //multi-part FormData
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
      data: text
    });
  }, [text]); //[text] 안써서 text가 undefined
  //useCallback컴포넌트가 리렌더링 될때마다 함수들이 새로 생성되는 것을 방지
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
      lineNumber: 55,
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
        lineNumber: 57,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
        lineNumber: 59,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: imagePaths.map(function (v) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            display: 'inline-block'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: 'http://localhost:3065/' + v,
            style: {
              width: '200px'
            },
            alt: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC81C\uAC70"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 19
          }, _this)]
        }, v, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, _this);
};

_s(PostForm, "zjCZLaSLeoTEJRbC7E7/5O9Gkzk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DaGFuZ2VJbWFnZXMiLCJ1c2VDYWxsYmFjayIsImUiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsInRhcmdldCIsImZpbGVzIiwiZiIsImFwcGVuZCIsInR5cGUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwidXNlRWZmZWN0Iiwib25TdWJtaXRGb3JtIiwiQUREX1BPU1RfUkVRVUVTVCIsIm9uQ2hhbmdlVGV4dCIsInZhbHVlIiwibWFyZ2luIiwibWFwIiwidiIsImRpc3BsYXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRHFCLGtCQUVHQyxzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRWRDLElBRmM7QUFBQSxNQUVSQyxPQUZRLGlCQUVnQjs7O0FBRmhCLHFCQUdhQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUh4QjtBQUFBLE1BR2JDLFVBSGEsZ0JBR2JBLFVBSGE7QUFBQSxNQUdEQyxXQUhDLGdCQUdEQSxXQUhDOztBQUtyQixNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0FBRUEsTUFB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O0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsbUNBQ0UscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBUUQsT0FUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQXBFRDs7R0FBTXJDLFE7VUFDYUUsdUQsRUFFaUJJLHVEOzs7S0FIOUJOLFE7QUFzRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM0MjNiMzAyNjZkZTNlYmEwYjhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBVUExPQURfSU1BR0VTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7Ly/su7Ttj6zrhIztirjsnZggc3RhdGVcclxuICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH09dXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIFxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBcclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpOyDsnKDsgqzrsLDsl7RcclxuICAgIC8vbXVsdGktcGFydCBGb3JtRGF0YVxyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZik9PntcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7XHJcbiAgICB9KTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIC8vY2xpY2soKSAtIGVsZW1lbnTrpbwg66eI7Jqw7Iqk66GcIO2BtOumre2VnCDqsoPsnLzroZwg7ZWc64ukLlxyXG59LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgXHJcbiAgICBpZihhZGRQb3N0RG9uZSkge1xyXG4gICAgICBzZXRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9LFthZGRQb3N0RG9uZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHRleHRcclxuICAgIH0pO1xyXG4gIH0sIFt0ZXh0XSk7IC8vW3RleHRdIOyViOyNqOyEnCB0ZXh06rCAIHVuZGVmaW5lZFxyXG5cclxuICAvL3VzZUNhbGxiYWNr7Lu07Y+s64SM7Yq46rCAIOumrOugjOuNlOungSDrkKDrlYzrp4jri6Qg7ZWo7IiY65Ok7J20IOyDiOuhnCDsg53shLHrkJjripQg6rKD7J2EIOuwqeyngFxyXG4gIC8vZS50YXJnZXQgLSDtirnsoJUg7J2067Kk7Yq46rCAIOuwnOyDne2VmOuKlCDtg5zqt7hcclxuICAvL2UudGFyZ2V0Lm5hbWUgLSDtg5zqt7jsnZgg7J2066aEXHJcbiAgLy9lLnRhcmdldC52YWx1ZSAtIO2DnOq3uOyXkCDsnoXroKXrkJzripAg6rCSXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeiOyXiOuCmOyalD9cIiAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj7sp7nsp7k8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwOi8vbG9jYWxob3N0OjMwNjUvJyArIHZ9IHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9