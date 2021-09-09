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
      lineNumber: 75,
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
        lineNumber: 77,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
        lineNumber: 79,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
            lineNumber: 85,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              onClick: onRemoveImage(i),
              children: "\uC81C\uAC70"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 19
          }, _this)]
        }, v, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DaGFuZ2VJbWFnZXMiLCJ1c2VDYWxsYmFjayIsImUiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsInRhcmdldCIsImZpbGVzIiwiZiIsImFwcGVuZCIsInR5cGUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ0cmltIiwiYWxlcnQiLCJmb3JtRGF0YSIsInAiLCJBRERfUE9TVF9SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwib25DaGFuZ2VUZXh0IiwidmFsdWUiLCJtYXJnaW4iLCJtYXAiLCJ2IiwiaSIsImRpc3BsYXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRHFCLGtCQUVHQyxzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRWRDLElBRmM7QUFBQSxNQUVSQyxPQUZRLGlCQUVnQjs7O0FBRmhCLHFCQUdhQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUh4QjtBQUFBLE1BR2JDLFVBSGEsZ0JBR2JBLFVBSGE7QUFB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aWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGU2MjBhZDVjODA2NTJjODFmNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpOy8v7Lu07Y+s64SM7Yq47J2YIHN0YXRlXHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9PXVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBcclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgXHJcblxyXG4gIC8q7J2066+47KeA66W8IGFqYXjroZwg7JeF66Gc65OcIO2VoOuVjCBmb3JtIOyghOyGoSDtlYTsmpRcclxuICDqsJnsnYAga2V566W8IOqwgOynhCDqsJLsnYQg7Jes65+s6rCcIOuEo+ydhOyImCDsnojri6QuXHJcbiAg6rCS7J2AIOusuOyekOyXtOuhnCDsnpDrj5nrs4DtmZgqL1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpOyDsnKDsgqzrsLDsl7QsIEZpbGXqsJ3ssrRcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpPT57XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAvL2NsaWNrKCkgLSBlbGVtZW5066W8IOuniOyasOyKpOuhnCDtgbTrpq3tlZwg6rKD7Jy866GcIO2VnOuLpC5cclxufSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgaWYoYWRkUG9zdERvbmUpIHtcclxuICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICB9XHJcbiAgfSxbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTsvL3JlcS5ib2R5LmltYWdlXHJcbiAgICB9KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHRleHQpOy8vcmVxLmJvZHkuY29udGVudFxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9LCBbdGV4dCwgaW1hZ2VQYXRoc10pOyBcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgfSlcclxuICB9KTtcclxuICAvL3VzZUNhbGxiYWNr7Lu07Y+s64SM7Yq46rCAIOumrOugjOuNlOungSDrkKDrlYzrp4jri6Qg7ZWo7IiY65Ok7J20IOyDiOuhnCDsg53shLHrkJjripQg6rKD7J2EIOuwqeyngFxyXG4gIC8vZS50YXJnZXQgLSDtirnsoJUg7J2067Kk7Yq46rCAIOuwnOyDne2VmOuKlCDtg5zqt7hcclxuICAvL2UudGFyZ2V0Lm5hbWUgLSDtg5zqt7jsnZgg7J2066aEXHJcbiAgLy9lLnRhcmdldC52YWx1ZSAtIO2DnOq3uOyXkCDsnoXroKXrkJzripAg6rCSXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPuynueynuTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Z9YH0gc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=