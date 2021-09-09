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
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    var formData = new FormData();
    imagePaths.forEach(function (p) {
      formData.append('image', p); //req.body.image
    });
    formData.append('content', text); //req.body.content

    console.log(formData.getAll('image'));
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
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
      lineNumber: 76,
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
        lineNumber: 78,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
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
        lineNumber: 80,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
            lineNumber: 86,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              onClick: onRemoveImage(i),
              children: "\uC81C\uAC70"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 19
          }, _this)]
        }, v, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DaGFuZ2VJbWFnZXMiLCJ1c2VDYWxsYmFjayIsImUiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsInRhcmdldCIsImZpbGVzIiwiZiIsImFwcGVuZCIsInR5cGUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ0cmltIiwiYWxlcnQiLCJmb3JtRGF0YSIsInAiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsIiwiQUREX1BPU1RfUkVRVUVTVCIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsIm9uQ2hhbmdlVGV4dCIsInZhbHVlIiwibWFyZ2luIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURxQixrQkFFR0Msc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVkQyxJQUZjO0FBQUEsTUFFUkMsT0FGUSxpQkFFZ0I7OztBQUZoQixxQkFHYUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIeEI7QUFBQSxN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QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0JILENBekZEOztHQUFNL0MsUTtVQUNhRSx1RCxFQUVpQkksdUQ7OztLQUg5Qk4sUTtBQTJGU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODgzMWQ1YmVhZDZmY2Y4MjYxOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpOy8v7Lu07Y+s64SM7Yq47J2YIHN0YXRlXHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9PXVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBcclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgXHJcblxyXG4gIC8q7J2066+47KeA66W8IGFqYXjroZwg7JeF66Gc65OcIO2VoOuVjCBmb3JtIOyghOyGoSDtlYTsmpRcclxuICDqsJnsnYAga2V566W8IOqwgOynhCDqsJLsnYQg7Jes65+s6rCcIOuEo+ydhOyImCDsnojri6QuXHJcbiAg6rCS7J2AIOusuOyekOyXtOuhnCDsnpDrj5nrs4DtmZgqL1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpOyDsnKDsgqzrsLDsl7QsIEZpbGXqsJ3ssrRcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpPT57XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAvL2NsaWNrKCkgLSBlbGVtZW5066W8IOuniOyasOyKpOuhnCDtgbTrpq3tlZwg6rKD7Jy866GcIO2VnOuLpC5cclxufSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgaWYoYWRkUG9zdERvbmUpIHtcclxuICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICB9XHJcbiAgfSxbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTsvL3JlcS5ib2R5LmltYWdlXHJcbiAgICB9KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHRleHQpOy8vcmVxLmJvZHkuY29udGVudFxyXG5cclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmdldEFsbCgnaW1hZ2UnKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSwgW3RleHQsIGltYWdlUGF0aHNdKTsgXHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICBkYXRhOiBpbmRleCxcclxuICAgIH0pXHJcbiAgfSk7XHJcbiAgLy91c2VDYWxsYmFja+y7tO2PrOuEjO2KuOqwgCDrpqzroIzrjZTrp4Eg65Cg65WM66eI64ukIO2VqOyImOuTpOydtCDsg4jroZwg7IOd7ISx65CY64qUIOqyg+ydhCDrsKnsp4BcclxuICAvL2UudGFyZ2V0IC0g7Yq57KCVIOydtOuypO2KuOqwgCDrsJzsg53tlZjripQg7YOc6re4XHJcbiAgLy9lLnRhcmdldC5uYW1lIC0g7YOc6re47J2YIOydtOumhFxyXG4gIC8vZS50YXJnZXQudmFsdWUgLSDtg5zqt7jsl5Ag7J6F66Cl65Cc64qQIOqwklxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4JyB9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeiOyXiOuCmOyalD9cIiAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj7sp7nsp7k8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHt2fWB9IHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9