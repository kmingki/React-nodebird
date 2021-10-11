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
      lineNumber: 99,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        marginTop: 8
      },
      children: "Upload"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        children: me.nickname[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }, _this),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
        lineNumber: 111,
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
          lineNumber: 113,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CameraOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EnvironmentOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
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
          lineNumber: 116,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], {
          listType: "picture-card",
          fileList: imagePaths,
          onPreview: handlePreview,
          onChange: onChangeImages,
          children: imagePaths.length >= 8 ? null : uploadButton
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsIlBvc3RGb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VyIiwibWUiLCJwcmV2aWV3VmlzaWJsZSIsInNldHByZXZpZXdWaXNpYmxlIiwicHJldmlld0ltYWdlIiwic2V0UHJldmlld0ltYWdlIiwicHJldmlld1RpdGxlIiwic2V0UHJldmlld1RpdGxlIiwiaGFuZGxlUHJldmlldyIsInVybCIsInByZXZpZXciLCJvcmlnaW5GaWxlT2JqIiwibmFtZSIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwib25DaGFuZ2VJbWFnZXMiLCJ1c2VDYWxsYmFjayIsImUiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsInRhcmdldCIsImZpbGVzIiwiZiIsImFwcGVuZCIsInR5cGUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ0cmltIiwiYWxlcnQiLCJmb3JtRGF0YSIsInAiLCJBRERfUE9TVF9SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwib25DaGFuZ2VUZXh0IiwidmFsdWUiLCJ1cGxvYWRCdXR0b24iLCJtYXJnaW5Ub3AiLCJuaWNrbmFtZSIsIm1hcmdp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QixVQUFVLENBQUNrRCxNQUFYLElBQXFCLENBQXJCLEdBQXlCLElBQXpCLEdBQWdDSjtBQU5uQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBbkhEOztHQUFNekQsUTtVQUNhRSx1RCxFQUltQk0sdUQsRUFDckJBLHVEOzs7S0FOWFIsUTtBQXFIU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi42YTBkOTc2ZTRjMjU3Yjc5MTJkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENhcmQsIEF2YXRhciwgVXBsb2FkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQsIEVudmlyb25tZW50T3V0bGluZWQsIFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBSRU1PVkVfSU1BR0UgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgIFxyXG4gIGNvbnN0IFsgcHJldmlld1Zpc2libGUsIHNldHByZXZpZXdWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgWyBwcmV2aWV3SW1hZ2UsIHNldFByZXZpZXdJbWFnZSBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFsgcHJldmlld1RpdGxlLCBzZXRQcmV2aWV3VGl0bGUgXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldmlldyA9IGFzeW5jIGZpbGUgPT4ge1xyXG4gICAgaWYgKCFmaWxlLnVybCAmJiAhZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgIGZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChmaWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZShmaWxlLnVybCB8fCBmaWxlLnByZXZpZXcpO1xyXG4gICAgc2V0cHJldmlld1Zpc2libGUodHJ1ZSk7XHJcbiAgICBzZXRQcmV2aWV3VGl0bGUoZmlsZS5uYW1lIHx8IGZpbGUudXJsLnN1YnN0cmluZyhmaWxlLnVybC5sYXN0SW5kZXhPZignLycpICsgMSkpO1xyXG4gIH07XHJcblxyXG4gIC8q7J2066+47KeA66W8IGFqYXjroZwg7JeF66Gc65OcIO2VoOuVjCBmb3JtIOyghOyGoSDtlYTsmpRcclxuICDqsJnsnYAga2V566W8IOqwgOynhCDqsJLsnYQg7Jes65+s6rCcIOuEo+ydhOyImCDsnojri6QuXHJcbiAg6rCS7J2AIOusuOyekOyXtOuhnCDsnpDrj5nrs4DtmZgqL1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpOyDsnKDsgqzrsLDsl7QsIEZpbGXqsJ3ssrRcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpPT57XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAvL2NsaWNrKCkgLSBlbGVtZW5066W8IOuniOyasOyKpOuhnCDtgbTrpq3tlZwg6rKD7Jy866GcIO2VnOuLpC5cclxufSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgaWYoYWRkUG9zdERvbmUpIHtcclxuICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0sW2FkZFBvc3REb25lXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+qyjOyLnOq4gOydhCDsnpHshLHtlZjshLjsmpQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7Ly9yZXEuYm9keS5pbWFnZVxyXG4gICAgfSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB0ZXh0KTsvL3JlcS5ib2R5LmNvbnRlbnRcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSwgW3RleHQsIGltYWdlUGF0aHNdKTsgXHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICBkYXRhOiBpbmRleCxcclxuICAgIH0pXHJcbiAgfSk7XHJcbiAgLy91c2VDYWxsYmFja+y7tO2PrOuEjO2KuOqwgCDrpqzroIzrjZTrp4Eg65Cg65WM66eI64ukIO2VqOyImOuTpOydtCDsg4jroZwg7IOd7ISx65CY64qUIOqyg+ydhCDrsKnsp4BcclxuICAvL2UudGFyZ2V0IC0g7Yq57KCVIOydtOuypO2KuOqwgCDrsJzsg53tlZjripQg7YOc6re4XHJcbiAgLy9lLnRhcmdldC5uYW1lIC0g7YOc6re47J2YIOydtOumhFxyXG4gIC8vZS50YXJnZXQudmFsdWUgLSDtg5zqt7jsl5Ag7J6F66Cl65Cc64qQIOqwklxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFBsdXNPdXRsaW5lZCAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5VcGxvYWQ8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmQuTWV0YVxyXG4gICAgICBhdmF0YXI9ezxBdmF0YXI+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgdGl0bGU9e21lLm5pY2tuYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8Rm9ybSBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAgMjBweCcgfX0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIGJvcmRlcmVkPXtmYWxzZX0vPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJ319PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+PENhbWVyYU91dGxpbmVkIC8+PC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT48RW52aXJvbm1lbnRPdXRsaW5lZCAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPuyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXHJcbiAgICAgICAgICBmaWxlTGlzdD17aW1hZ2VQYXRoc31cclxuICAgICAgICAgIG9uUHJldmlldz17aGFuZGxlUHJldmlld31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ltYWdlUGF0aHMubGVuZ3RoID49IDggPyBudWxsIDogdXBsb2FkQnV0dG9ufVxyXG4gICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==