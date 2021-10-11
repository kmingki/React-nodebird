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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        children: me.nickname[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
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
        lineNumber: 82,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
          type: "file",
          name: "image",
          multiple: true,
          hidden: true,
          ref: imageInput,
          onChange: onChangeImages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "text",
          onClick: onClickImageUpload,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CameraOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 62
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EnvironmentOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          style: {
            "float": 'right'
          },
          htmlType: "submit",
          children: "\uC9F9\uC9F9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: imagePaths.map(function (v, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            style: {
              display: 'inline-block'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
              src: "http://localhost:3065/".concat(v),
              style: {
                width: '200px'
              },
              alt: v
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                onClick: onRemoveImage(i),
                children: "\uC81C\uAC70"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 19
            }, _this)]
          }, v, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VyIiwibWUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DaGFuZ2VJbWFnZXMiLCJ1c2VDYWxsYmFjayIsImUiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsInRhcmdldCIsImZpbGVzIiwiZiIsImFwcGVuZCIsInR5cGUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ0cmltIiwiYWxlcnQiLCJmb3JtRGF0YSIsInAiLCJBRERfUE9TVF9SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwib25DaGFuZ2VUZXh0IiwidmFsdWUiLCJuaWNrbmFtZSIsIm1hcmdpbiIsIm1hcCIsInYiLCJpIiwiZGlzcGxheSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEcUIsa0JBRUdDLHNEQUFRLENBQUMsRUFBRCxDQUZYO0FBQUEsTUFFZEMsSUFGYztBQUFBLE1BRVJDLE9BRlE7O0FBQUEscUJBR2VDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSDFCO0FBQUEsTUFHYkMs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QUVDLHFCQUFPLEVBQUU7QUFBWCxhQUFwQjtBQUFBLG9DQUNFO0FBQUssaUJBQUcsa0NBQTJCRixDQUEzQixDQUFSO0FBQXdDLG1CQUFLLEVBQUU7QUFBRUcscUJBQUssRUFBRTtBQUFULGVBQS9DO0FBQW1FLGlCQUFHLEVBQUVIO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHFDQUNFLHFFQUFDLDJDQUFEO0FBQVEsdUJBQU8sRUFBRVIsYUFBYSxDQUFDUyxDQUFELENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLGFBQVVELENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVFELFNBVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2QkgsQ0FqR0Q7O0dBQU0vQyxRO1VBQ2FFLHVELEVBRW1CSSx1RCxFQUNyQkEsdUQ7OztLQUpYTixRO0FBbUdTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLmU5MDE0NDhhZTk2NWNlNGFlZDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2FyZCwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ2FtZXJhT3V0bGluZWQsIEVudmlyb25tZW50T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgICBcclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgXHJcblxyXG4gIC8q7J2066+47KeA66W8IGFqYXjroZwg7JeF66Gc65OcIO2VoOuVjCBmb3JtIOyghOyGoSDtlYTsmpRcclxuICDqsJnsnYAga2V566W8IOqwgOynhCDqsJLsnYQg7Jes65+s6rCcIOuEo+ydhOyImCDsnojri6QuXHJcbiAg6rCS7J2AIOusuOyekOyXtOuhnCDsnpDrj5nrs4DtmZgqL1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpOyDsnKDsgqzrsLDsl7QsIEZpbGXqsJ3ssrRcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpPT57XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAvL2NsaWNrKCkgLSBlbGVtZW5066W8IOuniOyasOyKpOuhnCDtgbTrpq3tlZwg6rKD7Jy866GcIO2VnOuLpC5cclxufSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgaWYoYWRkUG9zdERvbmUpIHtcclxuICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0sW2FkZFBvc3REb25lXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+qyjOyLnOq4gOydhCDsnpHshLHtlZjshLjsmpQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7Ly9yZXEuYm9keS5pbWFnZVxyXG4gICAgfSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB0ZXh0KTsvL3JlcS5ib2R5LmNvbnRlbnRcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSwgW3RleHQsIGltYWdlUGF0aHNdKTsgXHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICBkYXRhOiBpbmRleCxcclxuICAgIH0pXHJcbiAgfSk7XHJcbiAgLy91c2VDYWxsYmFja+y7tO2PrOuEjO2KuOqwgCDrpqzroIzrjZTrp4Eg65Cg65WM66eI64ukIO2VqOyImOuTpOydtCDsg4jroZwg7IOd7ISx65CY64qUIOqyg+ydhCDrsKnsp4BcclxuICAvL2UudGFyZ2V0IC0g7Yq57KCVIOydtOuypO2KuOqwgCDrsJzsg53tlZjripQg7YOc6re4XHJcbiAgLy9lLnRhcmdldC5uYW1lIC0g7YOc6re47J2YIOydtOumhFxyXG4gIC8vZS50YXJnZXQudmFsdWUgLSDtg5zqt7jsl5Ag7J6F66Cl65Cc64qQIOqwklxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgYXZhdGFyPXs8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgdGl0bGU9e21lLm5pY2tuYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIGJvcmRlcmVkPXtmYWxzZX0vPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT48Q2FtZXJhT3V0bGluZWQgLz48L0J1dHRvbj5cclxuICAgICAgICAgICAgPEVudmlyb25tZW50T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGh0bWxUeXBlPVwic3VibWl0XCI+7Ke57Ke5PC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gfSBzdHlsZT17eyB3aWR0aDogJzIwMHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblJlbW92ZUltYWdlKGkpfT7soJzqsbA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=