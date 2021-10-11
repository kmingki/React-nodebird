webpackHotUpdate_N_E("pages/main",{

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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\components\\PostForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostForm = function PostForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      addPostDone = _useSelector.addPostDone;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES_REQUEST"],
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_IMAGE"],
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

  var uploadButton = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        marginTop: 8
      },
      children: "Upload"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        children: me.nickname[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }, _this),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      style: {
        margin: '10px 0 20px'
      },
      encType: "multipart/form-data",
      onFinish: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
        value: text,
        onChange: onChangeText,
        maxLength: 140,
        placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
        bordered: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          margin: '10px 0'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
          type: "file",
          name: "image",
          multiple: true,
          hidden: true,
          ref: imageInput,
          onChange: onChangeImages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CameraOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EnvironmentOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "round",
          style: {
            "float": 'right'
          },
          htmlType: "submit",
          children: "\uC5C5\uB85C\uB4DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
          listType: "picture-card",
          fileList: imagePaths,
          onPreview: _this.handlePreview,
          onChange: _this.handleChange,
          children: imagePaths.length >= 8 ? null : uploadButton
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, _this);
};

_s(PostForm, "V/cR6VzXgR/llROF3O0h7PaIKx8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VyIiwibWUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DaGFuZ2VJbWFnZXMiLCJ1c2VDYWxsYmFjayIsImUiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsInRhcmdldCIsImZpbGVzIiwiZiIsImFwcGVuZCIsInR5cGUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ0cmltIiwiYWxlcnQiLCJmb3JtRGF0YSIsInAiLCJBRERfUE9TVF9SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwib25DaGFuZ2VUZXh0IiwidmFsdWUiLCJ1cGxvYWRCdXR0b24iLCJtYXJnaW5Ub3AiLCJuaWNrbmFtZSIsIm1hcmdpbiIsImhhbmRsZVByZXZpZXciLCJoYW5kbGVDaGFuZ2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURxQixrQkFFR0Msc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVkQyxJQUZjO0FBQUEsTUFFUkMsT0FGUTs7QUFBQSxxQkFHZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFD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LGlCQUFPLEVBQUVBLGtCQUE3QjtBQUFBLGlDQUFpRCxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRSxxRUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQXVCLGVBQUssRUFBQyxPQUE3QjtBQUFxQyxlQUFLLEVBQUU7QUFBRSxxQkFBTztBQUFULFdBQTVDO0FBQWdFLGtCQUFRLEVBQUMsUUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFRRTtBQUFBLCtCQUNFLHFFQUFDLDJDQUFEO0FBQ0Esa0JBQVEsRUFBQyxjQURUO0FBRUEsa0JBQVEsRUFBRXBCLFVBRlY7QUFHQSxtQkFBUyxFQUFFLEtBQUksQ0FBQ3VDLGFBSGhCO0FBSUEsa0JBQVEsRUFBRSxLQUFJLENBQUNDLFlBSmY7QUFBQSxvQkFNR3hDLFVBQVUsQ0FBQ3lDLE1BQVgsSUFBcUIsQ0FBckIsR0FBeUIsSUFBekIsR0FBZ0NOO0FBTm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0F0R0Q7O0dBQU01QyxRO1VBQ2FFLHVELEVBRW1CSSx1RCxFQUNyQkEsdUQ7OztLQUpYTixRO0FBd0dTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLmRiNTQ4MmQ2ZTViNzNmMDcyMzlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2FyZCwgQXZhdGFyLCBVcGxvYWQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCwgRW52aXJvbm1lbnRPdXRsaW5lZCwgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICAgXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIFxyXG5cclxuICAvKuydtOuvuOyngOulvCBhamF466GcIOyXheuhnOuTnCDtlaDrlYwgZm9ybSDsoITshqEg7ZWE7JqUXHJcbiAg6rCZ7J2AIGtleeulvCDqsIDsp4Qg6rCS7J2EIOyXrOufrOqwnCDrhKPsnYTsiJgg7J6I64ukLlxyXG4gIOqwkuydgCDrrLjsnpDsl7TroZwg7J6Q64+Z67OA7ZmYKi9cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgIC8vY29uc29sZS5sb2coJ2ltYWdlcycsIGUudGFyZ2V0LmZpbGVzKTsg7Jyg7IKs67Cw7Je0LCBGaWxl6rCd7LK0XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKT0+e1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKTtcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgLy9jbGljaygpIC0gZWxlbWVudOulvCDrp4jsmrDsiqTroZwg7YG066at7ZWcIOqyg+ycvOuhnCDtlZzri6QuXHJcbn0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4geyBcclxuICAgIGlmKGFkZFBvc3REb25lKSB7XHJcbiAgICAgIHNldFRleHQoJycpO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9LFthZGRQb3N0RG9uZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBpbWFnZVBhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHApOy8vcmVxLmJvZHkuaW1hZ2VcclxuICAgIH0pO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgdGV4dCk7Ly9yZXEuYm9keS5jb250ZW50XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0sIFt0ZXh0LCBpbWFnZVBhdGhzXSk7IFxyXG5cclxuICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgZGF0YTogaW5kZXgsXHJcbiAgICB9KVxyXG4gIH0pO1xyXG4gIC8vdXNlQ2FsbGJhY2vsu7Ttj6zrhIztirjqsIAg66as66CM642U66eBIOuQoOuVjOuniOuLpCDtlajsiJjrk6TsnbQg7IOI66GcIOyDneyEseuQmOuKlCDqsoPsnYQg67Cp7KeAXHJcbiAgLy9lLnRhcmdldCAtIO2KueyglSDsnbTrsqTtirjqsIAg67Cc7IOd7ZWY64qUIO2DnOq3uFxyXG4gIC8vZS50YXJnZXQubmFtZSAtIO2DnOq3uOydmCDsnbTrpoRcclxuICAvL2UudGFyZ2V0LnZhbHVlIC0g7YOc6re47JeQIOyeheugpeuQnOuKkCDqsJJcclxuICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQbHVzT3V0bGluZWQgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+VXBsb2FkPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgYXZhdGFyPXs8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeiOyXiOuCmOyalD9cIiBib3JkZXJlZD17ZmFsc2V9Lz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCd9fT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PjxDYW1lcmFPdXRsaW5lZCAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+PEVudmlyb25tZW50T3V0bGluZWQgLz48L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj7sl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgZmlsZUxpc3Q9e2ltYWdlUGF0aHN9XHJcbiAgICAgICAgICBvblByZXZpZXc9e3RoaXMuaGFuZGxlUHJldmlld31cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ltYWdlUGF0aHMubGVuZ3RoID49IDggPyBudWxsIDogdXBsb2FkQnV0dG9ufVxyXG4gICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==