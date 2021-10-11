webpackHotUpdate_N_E("pages/main",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\components\\PostForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostForm = function PostForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      addPostDone = _useSelector.addPostDone;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      previewVisible = _useState2[0],
      setpreviewVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      previewImage = _useState3[0],
      setPreviewImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      previewTitle = _useState4[0],
      setPreviewTitle = _useState4[1];

  0;

  var handlePreview = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!file.url && !file.preview)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return getBase64(file.originFileObj);

            case 3:
              file.preview = _context.sent;

            case 4:
              setPreviewImage(file.url || file.preview);
              setpreviewVisible(true);
              setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handlePreview(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /*이미지를 ajax로 업로드 할때 form 전송 필요
  같은 key를 가진 값을 여러개 넣을수 있다.
  값은 문자열로 자동변환*/


  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    //console.log('images', e.target.files); 유사배열, File객체
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    imageInput.current.click(); //click() - element를 마우스로 클릭한 것으로 한다.
  }, [imageInput.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    var formData = new FormData();
    imagePaths.forEach(function (p) {
      formData.append('image', p); //req.body.image
    });
    formData.append('content', text); //req.body.content

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["REMOVE_IMAGE"],
        data: index
      });
    };
  }); //useCallback컴포넌트가 리렌더링 될때마다 함수들이 새로 생성되는 것을 방지
  //e.target - 특정 이벤트가 발생하는 태그
  //e.target.name - 태그의 이름
  //e.target.value - 태그에 입력된느 값

  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setText(e.target.value);
  }, []);

  var uploadButton = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["PlusOutlined"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        marginTop: 8
      },
      children: "Upload"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        children: me.nickname[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 15
      }, _this),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      style: {
        margin: '10px 0 20px'
      },
      encType: "multipart/form-data",
      onFinish: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
        value: text,
        onChange: onChangeText,
        maxLength: 140,
        placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
        bordered: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          margin: '10px 0'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
          type: "file",
          name: "image",
          multiple: true,
          hidden: true,
          ref: imageInput,
          onChange: onChangeImages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CameraOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EnvironmentOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "primary",
          shape: "round",
          style: {
            "float": 'right'
          },
          htmlType: "submit",
          children: "\uC5C5\uB85C\uB4DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], {
          listType: "picture-card",
          fileList: imagePaths,
          onPreview: handlePreview,
          onChange: handleChange,
          children: imagePaths.length >= 8 ? null : uploadButton
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, _this);
};

_s(PostForm, "uUtsv9ofCDgGVrGWtiKk/NcnMDo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VyIiwibWUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwicHJldmlld1Zpc2libGUiLCJzZXRwcmV2aWV3VmlzaWJsZSIsInByZXZpZXdJbWFnZSIsInNldFByZXZpZXdJbWFnZSIsInByZXZpZXdUaXRsZSIsInNldFByZXZpZXdUaXRsZSIsImhhbmRsZVByZXZpZXciLCJmaWxlIiwidXJsIiwicHJldmlldyIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJuYW1lIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJvbkNoYW5nZUltYWdlcyIsInVzZUNhbGxiYWNrIiwiZSIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwidGFyZ2V0IiwiZmlsZXMiLCJmIiwiYXBwZW5kIiwidHlwZSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsImRhdGEiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdCIsInRyaW0iLCJhbGVydCIsImZvcm1EYXRhIiwicCIsIkFERF9QT1NUX1JFUVVFU1QiLCJvblJlbW92ZUltYWdlIiwiaW5kZXgiLCJSRU1PVkVfSU1BR0UiLCJvbkNoYW5nZVRleHQiLCJ2YWx1ZSIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIiwibWFyZ2luIiwiaGFuZGxlQ2hhbmdlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElB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RkYsZUFHRSxxRUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFPLEVBQUVBLGtCQUE3QjtBQUFBLGlDQUFpRCxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRSxxRUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQXVCLGVBQUssRUFBQyxPQUE3QjtBQUFxQyxlQUFLLEVBQUU7QUFBRSxxQkFBTztBQUFULFdBQTVDO0FBQWdFLGtCQUFRLEVBQUMsUUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFRRTtBQUFBLCtCQUNFLHFFQUFDLDJDQUFEO0FBQ0Esa0JBQVEsRUFBQyxjQURUO0FBRUEsa0JBQVEsRUFBRW5DLFVBRlY7QUFHQSxtQkFBUyxFQUFFWSxhQUhYO0FBSUEsa0JBQVEsRUFBRTBDLFlBSlY7QUFBQSxvQkFNR3RELFVBQVUsQ0FBQ3VELE1BQVgsSUFBcUIsQ0FBckIsR0FBeUIsSUFBekIsR0FBZ0NMO0FBTm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0FuSEQ7O0dBQU0zRCxRO1VBQ2FFLHVELEVBRW1CSSx1RCxFQUNyQkEsdUQ7OztLQUpYTixRO0FBcUhTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjY2NWQ5MmExODE1MjRiMDYwNTRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2FyZCwgQXZhdGFyLCBVcGxvYWQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDYW1lcmFPdXRsaW5lZCwgRW52aXJvbm1lbnRPdXRsaW5lZCwgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICAgXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIFxyXG4gIGNvbnN0IFsgcHJldmlld1Zpc2libGUsIHNldHByZXZpZXdWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgWyBwcmV2aWV3SW1hZ2UsIHNldFByZXZpZXdJbWFnZSBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFsgcHJldmlld1RpdGxlLCBzZXRQcmV2aWV3VGl0bGUgXSA9IHVzZVN0YXRlKCcnKTtcclxuMFxyXG4gIGNvbnN0IGhhbmRsZVByZXZpZXcgPSBhc3luYyBmaWxlID0+IHtcclxuICAgIGlmICghZmlsZS51cmwgJiYgIWZpbGUucHJldmlldykge1xyXG4gICAgICBmaWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2UoZmlsZS51cmwgfHwgZmlsZS5wcmV2aWV3KTtcclxuICAgIHNldHByZXZpZXdWaXNpYmxlKHRydWUpO1xyXG4gICAgc2V0UHJldmlld1RpdGxlKGZpbGUubmFtZSB8fCBmaWxlLnVybC5zdWJzdHJpbmcoZmlsZS51cmwubGFzdEluZGV4T2YoJy8nKSArIDEpKTtcclxuICB9O1xyXG5cclxuICAvKuydtOuvuOyngOulvCBhamF466GcIOyXheuhnOuTnCDtlaDrlYwgZm9ybSDsoITshqEg7ZWE7JqUXHJcbiAg6rCZ7J2AIGtleeulvCDqsIDsp4Qg6rCS7J2EIOyXrOufrOqwnCDrhKPsnYTsiJgg7J6I64ukLlxyXG4gIOqwkuydgCDrrLjsnpDsl7TroZwg7J6Q64+Z67OA7ZmYKi9cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgIC8vY29uc29sZS5sb2coJ2ltYWdlcycsIGUudGFyZ2V0LmZpbGVzKTsg7Jyg7IKs67Cw7Je0LCBGaWxl6rCd7LK0XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKT0+e1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKTtcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgLy9jbGljaygpIC0gZWxlbWVudOulvCDrp4jsmrDsiqTroZwg7YG066at7ZWcIOqyg+ycvOuhnCDtlZzri6QuXHJcbn0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4geyBcclxuICAgIGlmKGFkZFBvc3REb25lKSB7XHJcbiAgICAgIHNldFRleHQoJycpO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9LFthZGRQb3N0RG9uZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBpbWFnZVBhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHApOy8vcmVxLmJvZHkuaW1hZ2VcclxuICAgIH0pO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgdGV4dCk7Ly9yZXEuYm9keS5jb250ZW50XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0sIFt0ZXh0LCBpbWFnZVBhdGhzXSk7IFxyXG5cclxuICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgZGF0YTogaW5kZXgsXHJcbiAgICB9KVxyXG4gIH0pO1xyXG4gIC8vdXNlQ2FsbGJhY2vsu7Ttj6zrhIztirjqsIAg66as66CM642U66eBIOuQoOuVjOuniOuLpCDtlajsiJjrk6TsnbQg7IOI66GcIOyDneyEseuQmOuKlCDqsoPsnYQg67Cp7KeAXHJcbiAgLy9lLnRhcmdldCAtIO2KueyglSDsnbTrsqTtirjqsIAg67Cc7IOd7ZWY64qUIO2DnOq3uFxyXG4gIC8vZS50YXJnZXQubmFtZSAtIO2DnOq3uOydmCDsnbTrpoRcclxuICAvL2UudGFyZ2V0LnZhbHVlIC0g7YOc6re47JeQIOyeheugpeuQnOuKkCDqsJJcclxuICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQbHVzT3V0bGluZWQgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+VXBsb2FkPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgYXZhdGFyPXs8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeiOyXiOuCmOyalD9cIiBib3JkZXJlZD17ZmFsc2V9Lz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCd9fT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PjxDYW1lcmFPdXRsaW5lZCAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+PEVudmlyb25tZW50T3V0bGluZWQgLz48L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj7sl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgZmlsZUxpc3Q9e2ltYWdlUGF0aHN9XHJcbiAgICAgICAgICBvblByZXZpZXc9e2hhbmRsZVByZXZpZXd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW1hZ2VQYXRocy5sZW5ndGggPj0gOCA/IG51bGwgOiB1cGxvYWRCdXR0b259XHJcbiAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9