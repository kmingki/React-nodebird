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








function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
}

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

  var fileList = imagePaths.map(function (v, i) {
    name: v;

    url: "http://localhost:3065/".concat(v);
  });

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        children: me.nickname[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }, _this),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
        lineNumber: 109,
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
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CameraOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EnvironmentOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
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
          lineNumber: 114,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], {
        listType: "picture-card",
        fileList: fileList,
        onPreview: handlePreview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsIlBvc3RGb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VyIiwibWUiLCJwcmV2aWV3VmlzaWJsZSIsInNldHByZXZpZXdWaXNpYmxlIiwicHJldmlld0ltYWdlIiwic2V0UHJldmlld0ltYWdlIiwicHJldmlld1RpdGxlIiwic2V0UHJldmlld1RpdGxlIiwiZmlsZUxpc3QiLCJtYXAiLCJ2IiwiaSIsIm5hbWUiLCJ1cmwiLCJoYW5kbGVQcmV2aWV3IiwicHJldmlldyIsIm9yaWdpbkZpbGVPYmoiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsIm9uQ2hhbmdlSW1hZ2VzIiwidXNlQ2FsbGJhY2siLCJlIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImNhbGwiLCJ0YXJnZXQiLCJmaWxlcyIsImYiLCJhcHBlbmQiLCJ0eXBlIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiZGF0YSIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwidHJpbSIsImFsZXJ0IiwiZm9ybURhdGEiLCJwIiwiQUREX1BPU1RfUkVRVUVTVCIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsIm9uQ2hhbmdlVGV4dCIsInZhbHVlIiwibmlja25hbWUiLCJtYXJnaW4i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QUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQWhIRDs7R0FBTTNCLFE7VUFDYUUsdUQsRUFJbUJNLHVELEVBQ3JCQSx1RDs7O0tBTlhSLFE7QUFrSFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW4uMmRhYjMzMDhhMThlZGYzZDc4MzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDYXJkLCBBdmF0YXIsIFVwbG9hZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IENhbWVyYU91dGxpbmVkLCBFbnZpcm9ubWVudE91dGxpbmVkLCBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBnZXRCYXNlNjQoZmlsZSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgICBcclxuICBjb25zdCBbIHByZXZpZXdWaXNpYmxlLCBzZXRwcmV2aWV3VmlzaWJsZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFsgcHJldmlld0ltYWdlLCBzZXRQcmV2aWV3SW1hZ2UgXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbIHByZXZpZXdUaXRsZSwgc2V0UHJldmlld1RpdGxlIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGZpbGVMaXN0ID0gaW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IHsgXHJcbiAgICBuYW1lOiB2O1xyXG4gICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVByZXZpZXcgPSBhc3luYyBmaWxlID0+IHtcclxuICAgIGlmICghZmlsZS51cmwgJiYgIWZpbGUucHJldmlldykge1xyXG4gICAgICBmaWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2UoZmlsZS51cmwgfHwgZmlsZS5wcmV2aWV3KTtcclxuICAgIHNldHByZXZpZXdWaXNpYmxlKHRydWUpO1xyXG4gICAgc2V0UHJldmlld1RpdGxlKGZpbGUubmFtZSB8fCBmaWxlLnVybC5zdWJzdHJpbmcoZmlsZS51cmwubGFzdEluZGV4T2YoJy8nKSArIDEpKTtcclxuICB9O1xyXG5cclxuICAvKuydtOuvuOyngOulvCBhamF466GcIOyXheuhnOuTnCDtlaDrlYwgZm9ybSDsoITshqEg7ZWE7JqUXHJcbiAg6rCZ7J2AIGtleeulvCDqsIDsp4Qg6rCS7J2EIOyXrOufrOqwnCDrhKPsnYTsiJgg7J6I64ukLlxyXG4gIOqwkuydgCDrrLjsnpDsl7TroZwg7J6Q64+Z67OA7ZmYKi9cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgIC8vY29uc29sZS5sb2coJ2ltYWdlcycsIGUudGFyZ2V0LmZpbGVzKTsg7Jyg7IKs67Cw7Je0LCBGaWxl6rCd7LK0XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKT0+e1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKTtcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgLy9jbGljaygpIC0gZWxlbWVudOulvCDrp4jsmrDsiqTroZwg7YG066at7ZWcIOqyg+ycvOuhnCDtlZzri6QuXHJcbn0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4geyBcclxuICAgIGlmKGFkZFBvc3REb25lKSB7XHJcbiAgICAgIHNldFRleHQoJycpO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9LFthZGRQb3N0RG9uZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBpbWFnZVBhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHApOy8vcmVxLmJvZHkuaW1hZ2VcclxuICAgIH0pO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgdGV4dCk7Ly9yZXEuYm9keS5jb250ZW50XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0sIFt0ZXh0LCBpbWFnZVBhdGhzXSk7IFxyXG5cclxuICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgZGF0YTogaW5kZXgsXHJcbiAgICB9KVxyXG4gIH0pO1xyXG4gIC8vdXNlQ2FsbGJhY2vsu7Ttj6zrhIztirjqsIAg66as66CM642U66eBIOuQoOuVjOuniOuLpCDtlajsiJjrk6TsnbQg7IOI66GcIOyDneyEseuQmOuKlCDqsoPsnYQg67Cp7KeAXHJcbiAgLy9lLnRhcmdldCAtIO2KueyglSDsnbTrsqTtirjqsIAg67Cc7IOd7ZWY64qUIO2DnOq3uFxyXG4gIC8vZS50YXJnZXQubmFtZSAtIO2DnOq3uOydmCDsnbTrpoRcclxuICAvL2UudGFyZ2V0LnZhbHVlIC0g7YOc6re47JeQIOyeheugpeuQnOuKkCDqsJJcclxuICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgYXZhdGFyPXs8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeiOyXiOuCmOyalD9cIiBib3JkZXJlZD17ZmFsc2V9Lz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCd9fT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PjxDYW1lcmFPdXRsaW5lZCAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+PEVudmlyb25tZW50T3V0bGluZWQgLz48L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj7sl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcclxuICAgICAgICAgIGZpbGVMaXN0PXtmaWxlTGlzdH1cclxuICAgICAgICAgIG9uUHJldmlldz17aGFuZGxlUHJldmlld31cclxuICAgICAgICA+XHJcbiAgICAgICAgPC9VcGxvYWQ+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==