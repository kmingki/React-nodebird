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
    return {
      uid: i,
      name: v,
      url: "http://localhost:3065/".concat(v)
    };
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
        lineNumber: 106,
        columnNumber: 15
      }, _this),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
        lineNumber: 110,
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
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CameraOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EnvironmentOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 60
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
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
          lineNumber: 115,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], {
        listType: "picture-card",
        fileList: fileList,
        onPreview: handlePreview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsIlBvc3RGb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VyIiwibWUiLCJwcmV2aWV3VmlzaWJsZSIsInNldHByZXZpZXdWaXNpYmxlIiwicHJldmlld0ltYWdlIiwic2V0UHJldmlld0ltYWdlIiwicHJldmlld1RpdGxlIiwic2V0UHJldmlld1RpdGxlIiwiZmlsZUxpc3QiLCJtYXAiLCJ2IiwiaSIsInVpZCIsIm5hbWUiLCJ1cmwiLCJoYW5kbGVQcmV2aWV3IiwicHJldmlldyIsIm9yaWdpbkZpbGVPYmoiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsIm9uQ2hhbmdlSW1hZ2VzIiwidXNlQ2FsbGJhY2siLCJlIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImNhbGwiLCJ0YXJnZXQiLCJmaWxlcyIsImYiLCJhcHBlbmQiLCJ0eXBlIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiZGF0YSIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwidHJpbSIsImFsZXJ0IiwiZm9ybURhdGEiLCJwIiwiQUREX1BPU1RfUkVRVUVTVCIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsIm9uQ2hhbmdlVGV4dCIsInZhbHVlIiwibmlja25hbWUiLCJt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QUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBakhEOztHQUFNNUIsUTtVQUNhRSx1RCxFQUltQk0sdUQsRUFDckJBLHVEOzs7S0FOWFIsUTtBQW1IU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi45NWQ1ZDZhMzViYzQyNzkzODY4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENhcmQsIEF2YXRhciwgVXBsb2FkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQsIEVudmlyb25tZW50T3V0bGluZWQsIFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBSRU1PVkVfSU1BR0UgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgIFxyXG4gIGNvbnN0IFsgcHJldmlld1Zpc2libGUsIHNldHByZXZpZXdWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgWyBwcmV2aWV3SW1hZ2UsIHNldFByZXZpZXdJbWFnZSBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFsgcHJldmlld1RpdGxlLCBzZXRQcmV2aWV3VGl0bGUgXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgZmlsZUxpc3QgPSBpbWFnZVBhdGhzLm1hcCgodiwgaSkgPT4gKHsgXHJcbiAgICB1aWQ6IGksXHJcbiAgICBuYW1lOiB2LFxyXG4gICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmV2aWV3ID0gYXN5bmMgZmlsZSA9PiB7XHJcbiAgICBpZiAoIWZpbGUudXJsICYmICFmaWxlLnByZXZpZXcpIHtcclxuICAgICAgZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlKGZpbGUudXJsIHx8IGZpbGUucHJldmlldyk7XHJcbiAgICBzZXRwcmV2aWV3VmlzaWJsZSh0cnVlKTtcclxuICAgIHNldFByZXZpZXdUaXRsZShmaWxlLm5hbWUgfHwgZmlsZS51cmwuc3Vic3RyaW5nKGZpbGUudXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKSk7XHJcbiAgfTtcclxuXHJcbiAgLyrsnbTrr7jsp4DrpbwgYWpheOuhnCDsl4XroZzrk5wg7ZWg65WMIGZvcm0g7KCE7IahIO2VhOyalFxyXG4gIOqwmeydgCBrZXnrpbwg6rCA7KeEIOqwkuydhCDsl6zrn6zqsJwg64Sj7J2E7IiYIOyeiOuLpC5cclxuICDqsJLsnYAg66y47J6Q7Je066GcIOyekOuPmeuzgO2ZmCovXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAvL2NvbnNvbGUubG9nKCdpbWFnZXMnLCBlLnRhcmdldC5maWxlcyk7IOycoOyCrOuwsOyXtCwgRmlsZeqwneyytFxyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZik9PntcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7XHJcbiAgICB9KTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIC8vY2xpY2soKSAtIGVsZW1lbnTrpbwg66eI7Jqw7Iqk66GcIO2BtOumre2VnCDqsoPsnLzroZwg7ZWc64ukLlxyXG59LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgXHJcbiAgICBpZihhZGRQb3N0RG9uZSkge1xyXG4gICAgICBzZXRUZXh0KCcnKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSxbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTsvL3JlcS5ib2R5LmltYWdlXHJcbiAgICB9KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHRleHQpOy8vcmVxLmJvZHkuY29udGVudFxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9LCBbdGV4dCwgaW1hZ2VQYXRoc10pOyBcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgfSlcclxuICB9KTtcclxuICAvL3VzZUNhbGxiYWNr7Lu07Y+s64SM7Yq46rCAIOumrOugjOuNlOungSDrkKDrlYzrp4jri6Qg7ZWo7IiY65Ok7J20IOyDiOuhnCDsg53shLHrkJjripQg6rKD7J2EIOuwqeyngFxyXG4gIC8vZS50YXJnZXQgLSDtirnsoJUg7J2067Kk7Yq46rCAIOuwnOyDne2VmOuKlCDtg5zqt7hcclxuICAvL2UudGFyZ2V0Lm5hbWUgLSDtg5zqt7jsnZgg7J2066aEXHJcbiAgLy9lLnRhcmdldC52YWx1ZSAtIO2DnOq3uOyXkCDsnoXroKXrkJzripAg6rCSXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgIGF2YXRhcj17PEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICB0aXRsZT17bWUubmlja25hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4JyB9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCIgYm9yZGVyZWQ9e2ZhbHNlfS8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAnfX0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT48Q2FtZXJhT3V0bGluZWQgLz48L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PjxFbnZpcm9ubWVudE91dGxpbmVkIC8+PC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGh0bWxUeXBlPVwic3VibWl0XCI+7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXHJcbiAgICAgICAgICBmaWxlTGlzdD17ZmlsZUxpc3R9XHJcbiAgICAgICAgICBvblByZXZpZXc9e2hhbmRsZVByZXZpZXd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvVXBsb2FkPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=