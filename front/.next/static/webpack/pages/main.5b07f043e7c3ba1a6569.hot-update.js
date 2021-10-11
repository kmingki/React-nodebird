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
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      previewVisible = _useState2[0],
      setpreviewVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      previewImage = _useState3[0],
      setPreviewImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      previewTitle = _useState4[0],
      setPreviewTitle = _useState4[1];

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
      lineNumber: 91,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        marginTop: 8
      },
      children: "Upload"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        children: me.nickname[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }, _this),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
        lineNumber: 103,
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
          lineNumber: 105,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CameraOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EnvironmentOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
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
          lineNumber: 108,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
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
          lineNumber: 111,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, _this);
};

_s(PostForm, "okxhFp2OfU6TSk6xSKuPH/XzWTk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbWFnZUlucHV0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwidXNlciIsIm1lIiwicHJldmlld1Zpc2libGUiLCJzZXRwcmV2aWV3VmlzaWJsZSIsInByZXZpZXdJbWFnZSIsInNldFByZXZpZXdJbWFnZSIsInByZXZpZXdUaXRsZSIsInNldFByZXZpZXdUaXRsZSIsImhhbmRsZVByZXZpZXciLCJmaWxlIiwidXJsIiwicHJldmlldyIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJuYW1lIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJvbkNoYW5nZUltYWdlcyIsInVzZUNhbGxiYWNrIiwiZSIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwidGFyZ2V0IiwiZmlsZXMiLCJmIiwiYXBwZW5kIiwidHlwZSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsImRhdGEiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdCIsInRyaW0iLCJhbGVydCIsImZvcm1EYXRhIiwicCIsIkFERF9QT1NUX1JFUVVFU1QiLCJvblJlbW92ZUltYWdlIiwiaW5kZXgiLCJSRU1PVkVfSU1BR0UiLCJvbkNoYW5nZVRleHQiLCJ2YWx1ZSIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIiwibWFyZ2luIiwiaGFuZGxlQ2hhbmdlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElB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QUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQU8sRUFBRUEsa0JBQTdCO0FBQUEsaUNBQWlELHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsZUFBSyxFQUFDLE9BQTdCO0FBQXFDLGVBQUssRUFBRTtBQUFFLHFCQUFPO0FBQVQsV0FBNUM7QUFBZ0Usa0JBQVEsRUFBQyxRQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVFFO0FBQUEsK0JBQ0UscUVBQUMsMkNBQUQ7QUFDQSxrQkFBUSxFQUFDLGNBRFQ7QUFFQSxrQkFBUSxFQUFFakMsVUFGVjtBQUdBLG1CQUFTLEVBQUVVLGFBSFg7QUFJQSxrQkFBUSxFQUFFMEMsWUFKVjtBQUFBLG9CQU1HcEQsVUFBVSxDQUFDcUQsTUFBWCxJQUFxQixDQUFyQixHQUF5QixJQUF6QixHQUFnQ0w7QUFObkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXBIRDs7R0FBTTNELFE7VUFDYUUsdUQsRUFHbUJNLHVELEVBQ3JCQSx1RDs7O0tBTFhSLFE7QUFzSFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW4uNWIwN2YwNDNlN2MzYmExYTY1NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDYXJkLCBBdmF0YXIsIFVwbG9hZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkLCBFbnZpcm9ubWVudE91dGxpbmVkLCBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICAgXHJcbiAgXHJcbiAgXHJcbiAgY29uc3QgWyBwcmV2aWV3VmlzaWJsZSwgc2V0cHJldmlld1Zpc2libGUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIHByZXZpZXdJbWFnZSwgc2V0UHJldmlld0ltYWdlIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgWyBwcmV2aWV3VGl0bGUsIHNldFByZXZpZXdUaXRsZSBdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmV2aWV3ID0gYXN5bmMgZmlsZSA9PiB7XHJcbiAgICBpZiAoIWZpbGUudXJsICYmICFmaWxlLnByZXZpZXcpIHtcclxuICAgICAgZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlKGZpbGUudXJsIHx8IGZpbGUucHJldmlldyk7XHJcbiAgICBzZXRwcmV2aWV3VmlzaWJsZSh0cnVlKTtcclxuICAgIHNldFByZXZpZXdUaXRsZShmaWxlLm5hbWUgfHwgZmlsZS51cmwuc3Vic3RyaW5nKGZpbGUudXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKSk7XHJcbiAgfTtcclxuXHJcbiAgLyrsnbTrr7jsp4DrpbwgYWpheOuhnCDsl4XroZzrk5wg7ZWg65WMIGZvcm0g7KCE7IahIO2VhOyalFxyXG4gIOqwmeydgCBrZXnrpbwg6rCA7KeEIOqwkuydhCDsl6zrn6zqsJwg64Sj7J2E7IiYIOyeiOuLpC5cclxuICDqsJLsnYAg66y47J6Q7Je066GcIOyekOuPmeuzgO2ZmCovXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAvL2NvbnNvbGUubG9nKCdpbWFnZXMnLCBlLnRhcmdldC5maWxlcyk7IOycoOyCrOuwsOyXtCwgRmlsZeqwneyytFxyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZik9PntcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7XHJcbiAgICB9KTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIC8vY2xpY2soKSAtIGVsZW1lbnTrpbwg66eI7Jqw7Iqk66GcIO2BtOumre2VnCDqsoPsnLzroZwg7ZWc64ukLlxyXG59LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgXHJcbiAgICBpZihhZGRQb3N0RG9uZSkge1xyXG4gICAgICBzZXRUZXh0KCcnKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSxbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTsvL3JlcS5ib2R5LmltYWdlXHJcbiAgICB9KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHRleHQpOy8vcmVxLmJvZHkuY29udGVudFxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9LCBbdGV4dCwgaW1hZ2VQYXRoc10pOyBcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgfSlcclxuICB9KTtcclxuICAvL3VzZUNhbGxiYWNr7Lu07Y+s64SM7Yq46rCAIOumrOugjOuNlOungSDrkKDrlYzrp4jri6Qg7ZWo7IiY65Ok7J20IOyDiOuhnCDsg53shLHrkJjripQg6rKD7J2EIOuwqeyngFxyXG4gIC8vZS50YXJnZXQgLSDtirnsoJUg7J2067Kk7Yq46rCAIOuwnOyDne2VmOuKlCDtg5zqt7hcclxuICAvL2UudGFyZ2V0Lm5hbWUgLSDtg5zqt7jsnZgg7J2066aEXHJcbiAgLy9lLnRhcmdldC52YWx1ZSAtIO2DnOq3uOyXkCDsnoXroKXrkJzripAg6rCSXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGx1c091dGxpbmVkIC8+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgIGF2YXRhcj17PEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICB0aXRsZT17bWUubmlja25hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4JyB9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCIgYm9yZGVyZWQ9e2ZhbHNlfS8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAnfX0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT48Q2FtZXJhT3V0bGluZWQgLz48L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PjxFbnZpcm9ubWVudE91dGxpbmVkIC8+PC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGh0bWxUeXBlPVwic3VibWl0XCI+7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcclxuICAgICAgICAgIGZpbGVMaXN0PXtpbWFnZVBhdGhzfVxyXG4gICAgICAgICAgb25QcmV2aWV3PXtoYW5kbGVQcmV2aWV3fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ltYWdlUGF0aHMubGVuZ3RoID49IDggPyBudWxsIDogdXBsb2FkQnV0dG9ufVxyXG4gICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==