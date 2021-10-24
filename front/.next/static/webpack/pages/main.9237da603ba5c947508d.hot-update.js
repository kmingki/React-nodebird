webpackHotUpdate_N_E("pages/main",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\components\\AppLayout.js",
    _this = undefined,
    _s = $RefreshSig$();













var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      searchInput = _useInput2[0],
      onChangeSearchInput = _useInput2[1];

  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/hashtag/".concat(searchInput));
  }, [searchInput]);

  var toTop = function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOG_OUT_REQUEST"]
    });
  }, [_reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOG_OUT_REQUEST"]]);

  var menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
        onClick: onLogOut,
        children: "Log out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      style: {
        clear: "both"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 3,
        sm: 4,
        md: 0,
        style: {
          height: "100%",
          position: "fixed",
          borderRight: "solid thin #e2e2e2",
          zIndex: "2"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["HomeOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px",
                fontWeight: "100"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 136
            }, _this),
            onClick: toTop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SearchOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SendOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["StarOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["UserOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
              style: {
                color: "white",
                fontSize: "23px",
                backgroundColor: "green"
              },
              children: me.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 4,
        style: {
          position: "fixed"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            margin: "50px 0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
              src: "twitter.png",
              width: "50px",
              height: "50px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 136
            }, _this),
            onClick: toTop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["HomeOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 136
            }, _this),
            children: "\xA0Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["GlobalOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 136
            }, _this),
            children: "\xA0Explore"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SendOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 136
            }, _this),
            children: "\xA0Message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["StarOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 136
            }, _this),
            children: "\xA0Notification"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["UserOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 136
            }, _this),
            children: "\xA0Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
          overlay: menu,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
              children: me.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 136
            }, _this),
            children: ["\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              style: {
                display: "inline-block"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
                style: {
                  fontSize: "18px"
                },
                children: ["\xA0\xA0", me.email]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 66
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 27
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 21,
        sm: 0,
        md: 0,
        style: {
          marginLeft: "12.5%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            top: "0",
            position: "fixed",
            width: "100%",
            borderBottom: "solid thin #e2e2e2",
            backgroundColor: "white",
            zIndex: "1",
            cursor: "pointer"
          },
          onClick: toTop,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
            style: {
              fontSize: "25px"
            },
            children: "\xA0\xA0\xA0Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            marginTop: "50px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 20,
        md: 0,
        offset: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            top: "0",
            position: "fixed",
            width: "100%",
            borderBottom: "solid thin #e2e2e2",
            backgroundColor: "white",
            zIndex: "1",
            cursor: "pointer"
          },
          onClick: toTop,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
            style: {
              fontSize: "25px"
            },
            children: "\xA0\xA0\xA0Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            marginTop: "50px",
            zIndex: "-1"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 12,
        offset: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            top: "0",
            position: "fixed",
            width: "50%",
            borderBottom: "solid thin #e2e2e2",
            backgroundColor: "white",
            zIndex: "1",
            cursor: "pointer"
          },
          onClick: toTop,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
            style: {
              fontSize: "25px",
              marginLeft: "15px"
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            marginTop: "50px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
          placeholder: "\uAC80\uC0C9",
          onSearch: onSearch,
          style: {
            marginTop: "10px",
            marginLeft: "10px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, _this);
};

_s(AppLayout, "72AMlNUj1LYc+gBJ5uqdnrHQj0Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c;

$RefreshReg$(_c, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUlucHV0Iiwic2VhcmNoSW5wdXQiLCJvbkNoYW5nZVNlYXJjaElucHV0Iiwib25TZWFyY2giLCJ1c2VDYWxsYmFjayIsIlJvdXRlciIsInB1c2giLCJ0b1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwib25Mb2dPdXQiLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwibWVudSIsImNsZWFyIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJib3JkZXJSaWdodCIsInpJbmRleCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ3aWR0aCIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibmlja25hbWUiLCJlbWFpbCIsIm1hcmdpbkxlZnQiLCJib3JkZXJCb3R0b20iLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUM5QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUQ4QixxQkFFZkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQUZJO0FBQUEsTUFFdEJDLEVBRnNCLGdCQUV0QkEsRUFGc0I7O0FB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O0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtRUgsQ0EvRkQ7O0dBQU12QyxTO1VBQ2VHLHVELEVBQ0ZDLHVELEVBQzRCSSx1RDs7O0tBSHpDUixTO0FBaUdOQSxTQUFTLENBQUMyQyxTQUFWLEdBQXNCO0FBQ2xCMUMsVUFBUSxFQUFFMkMsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURQLENBQXRCO0FBSWU5Qyx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjkyMzdkYTYwM2JhNWM5NDc1MDhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sLCBCdXR0b24sIEF2YXRhciwgRHJvcGRvd24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IFN0YXJPdXRsaW5lZCwgU2VuZE91dGxpbmVkLCBVc2VyT3V0bGluZWQsIEdsb2JhbE91dGxpbmVkLCBIb21lT3V0bGluZWQsIFNlYXJjaE91dGxpbmVkLCBDb25zb2xlU3FsT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExPR19PVVRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgb25DaGFuZ2VTZWFyY2hJbnB1dF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xyXG4gICAgfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gICAgY29uc3QgdG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MCwgbGVmdDowLCBiZWhhdmlvcjonYXV0byd9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sIFtMT0dfT1VUX1JFUVVFU1RdKTtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gKFxyXG4gICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkxvZ091dH0+TG9nIG91dDwvYT4gXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17e2NsZWFyOiBcImJvdGhcIn19PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MH0gc209ezB9IG1kPXsyfSA+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezN9IHNtPXs0fSBtZD17MH0gc3R5bGU9e3toZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCBib3JkZXJSaWdodDogXCJzb2xpZCB0aGluICNlMmUyZTJcIiwgekluZGV4OiBcIjJcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggNXB4XCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIn19IGljb249ezxIb21lT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjIzcHhcIiwgZm9udFdlaWdodDogXCIxMDBcIn19Lz59IG9uQ2xpY2s9e3RvVG9wfT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCA1cHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwifX0gaWNvbj17PFNlYXJjaE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wiLCBmb250U2l6ZTogXCIyM3B4XCJ9fS8+fT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCA1cHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwifX0gaWNvbj17PFNlbmRPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjNweFwifX0vPn0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggNXB4XCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIn19IGljb249ezxTdGFyT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjIzcHhcIn19Lz59PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8VXNlck91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wiLCBmb250U2l6ZTogXCIyM3B4XCJ9fS8+fT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCA1cHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwifX0gaWNvbj17PEF2YXRhciBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIGZvbnRTaXplOiBcIjIzcHhcIiwgYmFja2dyb3VuZENvbG9yOlwiZ3JlZW5cIn19PnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXswfSBzbT17MH0gbWQ9ezR9IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogXCI1MHB4IDBcIn19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8aW1nIHNyYz1cInR3aXR0ZXIucG5nXCIgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiLz59IG9uQ2xpY2s9e3RvVG9wfT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEhvbWVPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PiZuYnNwO0hvbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEdsb2JhbE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+Jm5ic3A7RXhwbG9yZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8U2VuZE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+Jm5ic3A7TWVzc2FnZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8U3Rhck91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+Jm5ic3A7Tm90aWZpY2F0aW9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCAwXCIsIGhlaWdodDogXCI1MHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxVc2VyT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT4mbmJzcDtQcm9maWxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+fT5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDs8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19PjxwIHN0eWxlPXt7Zm9udFNpemU6XCIxOHB4XCJ9fT4mbmJzcDsmbmJzcDt7bWUuZW1haWx9PC9wPjwvZGl2PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjF9IHNtPXswfSBtZD17MH0gc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjEyLjUlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0b3A6IFwiMFwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNlMmUyZTJcIiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgekluZGV4OiBcIjFcIiwgY3Vyc29yOiBcInBvaW50ZXJcIn19IG9uQ2xpY2s9e3RvVG9wfT5cclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiBcIjI1cHhcIn19PiZuYnNwOyZuYnNwOyZuYnNwO0hvbWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjUwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXswfSBzbT17MjB9IG1kPXswfSBvZmZzZXQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RvcDogXCIwXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQm90dG9tOiBcInNvbGlkIHRoaW4gI2UyZTJlMlwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCB6SW5kZXg6IFwiMVwiLCBjdXJzb3I6IFwicG9pbnRlclwifX0gb25DbGljaz17dG9Ub3B9PlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6IFwiMjVweFwifX0+Jm5ic3A7Jm5ic3A7Jm5ic3A7SG9tZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiNTBweFwiLCB6SW5kZXg6IFwiLTFcIn19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXswfSBzbT17MH0gbWQ9ezEyfSBvZmZzZXQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RvcDogXCIwXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjUwJVwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjZTJlMmUyXCIsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHpJbmRleDogXCIxXCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXt0b1RvcH0+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogXCIyNXB4XCIsIG1hcmdpbkxlZnQ6XCIxNXB4XCJ9fT5Ib21lPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogXCI1MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MH0gc209ezB9IG1kPXs0fSA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwi6rKA7IOJXCIgb25TZWFyY2g9e29uU2VhcmNofSBzdHlsZT17e21hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwifX0vPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXswfSBzbT17MH0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=