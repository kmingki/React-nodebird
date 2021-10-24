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
        marginLeft: "15%",
        marginRight: "15%"
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
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
              src: "twitter.png",
              width: "50px",
              height: "50px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 136
            }, _this),
            onClick: toTop
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
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["HomeOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px",
                fontWeight: "100"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 136
            }, _this),
            onClick: toTop
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
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SearchOutlined"], {
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
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SendOutlined"], {
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
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["StarOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
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
              lineNumber: 54,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
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
              lineNumber: 55,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 4,
        offset: 2,
        style: {
          position: "fixed"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
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
              lineNumber: 61,
              columnNumber: 136
            }, _this),
            onClick: toTop
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
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["HomeOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 136
            }, _this),
            children: "\xA0Home"
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
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["GlobalOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 136
            }, _this),
            children: "\xA0Explore"
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
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SendOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 136
            }, _this),
            children: "\xA0Message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
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
              lineNumber: 65,
              columnNumber: 136
            }, _this),
            children: "\xA0Notification"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
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
              lineNumber: 66,
              columnNumber: 136
            }, _this),
            children: "\xA0Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
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
              lineNumber: 69,
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
                lineNumber: 70,
                columnNumber: 66
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 27
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
            lineNumber: 77,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            marginTop: "50px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
            lineNumber: 86,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            marginTop: "50px",
            zIndex: "-1"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 12,
        offset: 4,
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
            lineNumber: 95,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            marginTop: "50px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
          lineNumber: 103,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUlucHV0Iiwic2VhcmNoSW5wdXQiLCJvbkNoYW5nZVNlYXJjaElucHV0Iiwib25TZWFyY2giLCJ1c2VDYWxsYmFjayIsIlJvdXRlciIsInB1c2giLCJ0b1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwib25Mb2dPdXQiLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwibWVudSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImhlaWdodCIsInBvc2l0aW9uIiwiYm9yZGVyUmlnaHQiLCJ6SW5kZXgiLCJkaXNwbGF5IiwibWFyZ2luIiwid2lkdGgiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm5pY2tuYW1lIiwiZW1haWwiLCJib3JkZXJCb3R0b20iLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUM5QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUQ4QixxQkFFZkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQUZJO0FBQUEsTUFFdEJDLEVBRnNCLGdCQUV0QkEsRUFGc0I7O0FBQUEsa0JBR2FDLCtEQUFRLENBQUMsRUFBRCxDQUhyQjtBQUFBO0FBQUEsTUFHdkJDLFdBSHVCO0FBQUEsTUFHVkMsbUJBSFU7O0FBSzlCLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFJO0FBQzdCQyxzREFBTSxDQUFDQyxJQUFQLG9CQUF3QkwsV0FBeEI7QUFDSCxHQUYyQixFQUV6QixDQUFDQSxXQUFELENBRnlCLENBQTVCOztBQUlBLE1BQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDaEJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUFDQyxTQUFHLEVBQUMsQ0FBTDtBQUFRQyxVQUFJLEVBQUMsQ0FBYjtBQUFnQkMsY0FBUSxFQUFDO0FBQXpCLEtBQWhCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUdULHlEQUFXLENBQUMsWUFBSTtBQUM3QlYsWUFBUSxDQUFDO0FBQ0xvQixVQUFJLEVBQUVDLCtEQUFlQTtBQURoQixLQUFELENBQVI7QUFJSCxHQUwyQixFQUt6QixDQUFDQSwrREFBRCxDQUx5QixDQUE1Qjs7QUFPQSxNQUFNQyxJQUFJLGdCQUNOLHNFQUFDLHlDQUFEO0FBQUEsMkJBQ0Usc0VBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsNkJBQ0k7QUFBRyxlQUFPLEVBQUVILFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKOztBQVFBLHNCQUNJO0FBQUEsMkJBQ0ksc0VBQUMsd0NBQUQ7QUFBSyxXQUFLLEVBQUU7QUFBQ0ksa0JBQVUsRUFBRSxLQUFiO0FBQW9CQyxtQkFBVyxFQUFDO0FBQWhDLE9BQVo7QUFBQSw4QkFDSSxzRUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQVksVUFBRSxFQUFFLENBQWhCO0FBQW1CLFVBQUUsRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSSxzRUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQVksVUFBRSxFQUFFLENBQWhCO0FBQW1CLFVBQUUsRUFBRSxDQUF2QjtBQUEwQixhQUFLLEVBQUU7QUFBQ0MsZ0JBQU0sRUFBRSxNQUFUO0FBQWlCQyxrQkFBUSxFQUFFLE9BQTNCO0FBQW9DQyxxQkFBVyxFQUFFLG9CQUFqRDtBQUF1RUMsZ0JBQU0sRUFBRTtBQUEvRSxTQUFqQztBQUFBLCtCQUNBO0FBQUEsa0NBQ0Esc0VBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQUssRUFBQyxRQUExQjtBQUFtQyxpQkFBSyxFQUFFO0FBQUNDLHFCQUFPLEVBQUUsT0FBVjtBQUFtQkMsb0JBQU0sRUFBRSxVQUEzQjtBQUF1Q0wsb0JBQU0sRUFBRSxNQUEvQztBQUF1RE0sbUJBQUssRUFBRTtBQUE5RCxhQUExQztBQUFpSCxnQkFBSSxlQUFFO0FBQUssaUJBQUcsRUFBQyxhQUFUO0FBQXVCLG1CQUFLLEVBQUMsTUFBN0I7QUFBb0Msb0JBQU0sRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF2SDtBQUE0SyxtQkFBTyxFQUFFbEI7QUFBckw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVBLHNFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFLLEVBQUMsUUFBMUI7QUFBbUMsaUJBQUssRUFBRTtBQUFDZ0IscUJBQU8sRUFBRSxPQUFWO0FBQW1CQyxvQkFBTSxFQUFFLFVBQTNCO0FBQXVDTCxvQkFBTSxFQUFFLE1BQS9DO0FBQXVETSxtQkFBSyxFQUFFO0FBQTlELGFBQTFDO0FBQWlILGdCQUFJLGVBQUUsc0VBQUMsOERBQUQ7QUFBYyxtQkFBSyxFQUFFO0FBQUNDLHFCQUFLLEVBQUUsU0FBUjtBQUFtQkMsd0JBQVEsRUFBRSxNQUE3QjtBQUFxQ0MsMEJBQVUsRUFBRTtBQUFqRDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF2SDtBQUF3TSxtQkFBTyxFQUFFckI7QUFBak47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxlQUdBLHNFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFLLEVBQUMsUUFBMUI7QUFBbUMsaUJBQUssRUFBRTtBQUFDZ0IscUJBQU8sRUFBRSxPQUFWO0FBQW1CQyxvQkFBTSxFQUFFLFVBQTNCO0FBQXVDTCxvQkFBTSxFQUFFLE1BQS9DO0FBQXVETSxtQkFBSyxFQUFFO0FBQTlELGFBQTFDO0FBQWlILGdCQUFJLGVBQUUsc0VBQUMsZ0VBQUQ7QUFBZ0IsbUJBQUssRUFBRTtBQUFDQyxxQkFBSyxFQUFFLFNBQVI7QUFBbUJDLHdCQUFRLEVBQUU7QUFBN0I7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhBLGVBSUEsc0VBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQUssRUFBQyxRQUExQjtBQUFtQyxpQkFBSyxFQUFFO0FBQUNKLHFCQUFPLEVBQUUsT0FBVjtBQUFtQkMsb0JBQU0sRUFBRSxVQUEzQjtBQUF1Q0wsb0JBQU0sRUFBRSxNQUEvQztBQUF1RE0sbUJBQUssRUFBRTtBQUE5RCxhQUExQztBQUFpSCxnQkFBSSxlQUFFLHNFQUFDLDhEQUFEO0FBQWMsbUJBQUssRUFBRTtBQUFDQyxxQkFBSyxFQUFFLFNBQVI7QUFBbUJDLHdCQUFRLEVBQUU7QUFBN0I7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpBLGVBS0Esc0VBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQUssRUFBQyxRQUExQjtBQUFtQyxpQkFBSyxFQUFFO0FBQUNKLHFCQUFPLEVBQUUsT0FBVjtBQUFtQkMsb0JBQU0sRUFBRSxVQUEzQjtBQUF1Q0wsb0JBQU0sRUFBRSxNQUEvQztBQUF1RE0sbUJBQUssRUFBRTtBQUE5RCxhQUExQztBQUFpSCxnQkFBSSxlQUFFLHNFQUFDLDhEQUFEO0FBQWMsbUJBQUssRUFBRTtBQUFDQyxxQkFBSyxFQUFFLFNBQVI7QUFBbUJDLHdCQUFRLEVBQUU7QUFBN0I7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxBLGVBTUEsc0VBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQUssRUFBQyxRQUExQjtBQUFtQyxpQkFBSyxFQUFFO0FBQUNKLHFCQUFPLEVBQUUsT0FBVjtBQUFtQkMsb0JBQU0sRUFBRSxVQUEzQjtBQUF1Q0wsb0JBQU0sRUFBRSxNQUEvQztBQUF1RE0sbUJBQUssRUFBRTtBQUE5RCxhQUExQztBQUFpSCxnQkFBSSxlQUFFLHNFQUFDLDhEQUFEO0FBQWMsbUJBQUssRUFBRTtBQUFDQyxxQkFBSyxFQUFFLFNBQVI7QUFBbUJDLHdCQUFRLEVBQUU7QUFBN0I7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5BLGVBT0Esc0VBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQUssRUFBQyxRQUExQjtBQUFtQyxpQkFBSyxFQUFFO0FBQUNKLHFCQUFPLEVBQUUsT0FBVjtBQUFtQkMsb0JBQU0sRUFBRSxVQUEzQjtBQUF1Q0wsb0JBQU0sRUFBRSxNQUEvQztBQUF1RE0sbUJBQUssRUFBRTtBQUE5RCxhQUExQztBQUFpSCxnQkFBSSxlQUFFLHNFQUFDLDJDQUFEO0FBQVEsbUJBQUssRUFBRTtBQUFDQyxxQkFBSyxFQUFFLE9BQVI7QUFBaUJDLHdCQUFRLEVBQUUsTUFBM0I7QUFBbUNFLCtCQUFlLEVBQUM7QUFBbkQsZUFBZjtBQUFBLHdCQUE2RTlCLEVBQUUsQ0FBQytCLFFBQUgsQ0FBWSxDQUFaO0FBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFnQkksc0VBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFZLFVBQUUsRUFBRSxDQUFoQjtBQUFtQixVQUFFLEVBQUUsQ0FBdkI7QUFBMEIsY0FBTSxFQUFFLENBQWxDO0FBQXFDLGFBQUssRUFBRTtBQUFDVixrQkFBUSxFQUFFO0FBQVgsU0FBNUM7QUFBQSxnQ0FDQTtBQUFBLGtDQUNBLHNFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFLLEVBQUMsUUFBMUI7QUFBbUMsaUJBQUssRUFBRTtBQUFDRyxxQkFBTyxFQUFFLE9BQVY7QUFBbUJDLG9CQUFNLEVBQUUsVUFBM0I7QUFBdUNMLG9CQUFNLEVBQUUsTUFBL0M7QUFBdURNLG1CQUFLLEVBQUU7QUFBOUQsYUFBMUM7QUFBaUgsZ0JBQUksZUFBRTtBQUFLLGlCQUFHLEVBQUMsYUFBVDtBQUF1QixtQkFBSyxFQUFDLE1BQTdCO0FBQW9DLG9CQUFNLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdkg7QUFBNEssbUJBQU8sRUFBRWxCO0FBQXJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQSxzRUFBQywyQ0FBRDtBQUFRLGdCQUFJLEVBQUMsTUFBYjtBQUFvQixpQkFBSyxFQUFDLE9BQTFCO0FBQWtDLGlCQUFLLEVBQUU7QUFBQ2dCLHFCQUFPLEVBQUUsT0FBVjtBQUFtQkMsb0JBQU0sRUFBRSxRQUEzQjtBQUFxQ0wsb0JBQU0sRUFBRSxNQUE3QztBQUFxRFEsc0JBQVEsRUFBRTtBQUEvRCxhQUF6QztBQUFpSCxnQkFBSSxlQUFFLHNFQUFDLDhEQUFEO0FBQWMsbUJBQUssRUFBRTtBQUFDRCxxQkFBSyxFQUFFO0FBQVI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFHQSxzRUFBQywyQ0FBRDtBQUFRLGdCQUFJLEVBQUMsTUFBYjtBQUFvQixpQkFBSyxFQUFDLE9BQTFCO0FBQWtDLGlCQUFLLEVBQUU7QUFBQ0gscUJBQU8sRUFBRSxPQUFWO0FBQW1CQyxvQkFBTSxFQUFFLFFBQTNCO0FBQXFDTCxvQkFBTSxFQUFFLE1BQTdDO0FBQXFEUSxzQkFBUSxFQUFFO0FBQS9ELGFBQXpDO0FBQWlILGdCQUFJLGVBQUUsc0VBQUMsZ0VBQUQ7QUFBZ0IsbUJBQUssRUFBRTtBQUFDRCxxQkFBSyxFQUFFO0FBQVI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEEsZUFJQSxzRUFBQywyQ0FBRDtBQUFRLGdCQUFJLEVBQUMsTUFBYjtBQUFvQixpQkFBSyxFQUFDLE9BQTFCO0FBQWtDLGlCQUFLLEVBQUU7QUFBQ0gscUJBQU8sRUFBRSxPQUFWO0FBQW1CQyxvQkFBTSxFQUFFLFFBQTNCO0FBQXFDTCxvQkFBTSxFQUFFLE1BQTdDO0FBQXFEUSxzQkFBUSxFQUFFO0FBQS9ELGFBQXpDO0FBQWlILGdCQUFJLGVBQUUsc0VBQUMsOERBQUQ7QUFBYyxtQkFBSyxFQUFFO0FBQUNELHFCQUFLLEVBQUU7QUFBUjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKQSxlQUtBLHNFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFLLEVBQUMsT0FBMUI7QUFBa0MsaUJBQUssRUFBRTtBQUFDSCxxQkFBTyxFQUFFLE9BQVY7QUFBbUJDLG9CQUFNLEVBQUUsUUFBM0I7QUFBcUNMLG9CQUFNLEVBQUUsTUFBN0M7QUFBcURRLHNCQUFRLEVBQUU7QUFBL0QsYUFBekM7QUFBaUgsZ0JBQUksZUFBRSxzRUFBQyw4REFBRDtBQUFjLG1CQUFLLEVBQUU7QUFBQ0QscUJBQUssRUFBRTtBQUFSO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxBLGVBTUEsc0VBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQUssRUFBQyxPQUExQjtBQUFrQyxpQkFBSyxFQUFFO0FBQUNILHFCQUFPLEVBQUUsT0FBVjtBQUFtQkMsb0JBQU0sRUFBRSxRQUEzQjtBQUFxQ0wsb0JBQU0sRUFBRSxNQUE3QztBQUFxRFEsc0JBQVEsRUFBRTtBQUEvRCxhQUF6QztBQUFpSCxnQkFBSSxlQUFFLHNFQUFDLDhEQUFEO0FBQWMsbUJBQUssRUFBRTtBQUFDRCxxQkFBSyxFQUFFO0FBQVI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBU0Esc0VBQUMsNkNBQUQ7QUFBVSxpQkFBTyxFQUFFVixJQUFuQjtBQUFBLGlDQUNBLHNFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFLLEVBQUMsT0FBMUI7QUFBa0MsaUJBQUssRUFBRTtBQUFDTyxxQkFBTyxFQUFFLE9BQVY7QUFBbUJDLG9CQUFNLEVBQUUsUUFBM0I7QUFBcUNMLG9CQUFNLEVBQUUsTUFBN0M7QUFBcURRLHNCQUFRLEVBQUU7QUFBL0QsYUFBekM7QUFBaUgsZ0JBQUksZUFBRSxzRUFBQywyQ0FBRDtBQUFBLHdCQUFTNUIsRUFBRSxDQUFDK0IsUUFBSCxDQUFZLENBQVo7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF2SDtBQUFBLDRDQUNVO0FBQUssbUJBQUssRUFBRTtBQUFDUCx1QkFBTyxFQUFFO0FBQVYsZUFBWjtBQUFBLHFDQUF1QztBQUFHLHFCQUFLLEVBQUU7QUFBQ0ksMEJBQVEsRUFBQztBQUFWLGlCQUFWO0FBQUEsdUNBQTBDNUIsRUFBRSxDQUFDZ0MsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkosZUFnQ0ksc0VBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFhLFVBQUUsRUFBRSxDQUFqQjtBQUFvQixVQUFFLEVBQUUsQ0FBeEI7QUFBMkIsYUFBSyxFQUFFO0FBQUNkLG9CQUFVLEVBQUU7QUFBYixTQUFsQztBQUFBLGdDQUNBO0FBQUssZUFBSyxFQUFFO0FBQUNQLGVBQUcsRUFBRSxHQUFOO0FBQVdVLG9CQUFRLEVBQUUsT0FBckI7QUFBOEJLLGlCQUFLLEVBQUUsTUFBckM7QUFBNkNPLHdCQUFZLEVBQUUsb0JBQTNEO0FBQWlGSCwyQkFBZSxFQUFDLE9BQWpHO0FBQTBHUCxrQkFBTSxFQUFFLEdBQWxIO0FBQXVIVyxrQkFBTSxFQUFFO0FBQS9ILFdBQVo7QUFBdUosaUJBQU8sRUFBRTFCLEtBQWhLO0FBQUEsaUNBQ0E7QUFBSSxpQkFBSyxFQUFFO0FBQUNvQixzQkFBUSxFQUFFO0FBQVgsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFJQTtBQUFLLGVBQUssRUFBRTtBQUFDTyxxQkFBUyxFQUFFO0FBQVosV0FBWjtBQUFBLG9CQUNDekM7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhDSixlQXlDSSxzRUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQVksVUFBRSxFQUFFLEVBQWhCO0FBQW9CLFVBQUUsRUFBRSxDQUF4QjtBQUEyQixjQUFNLEVBQUUsQ0FBbkM7QUFBQSxnQ0FDQTtBQUFLLGVBQUssRUFBRTtBQUFDaUIsZUFBRyxFQUFFLEdBQU47QUFBV1Usb0JBQVEsRUFBRSxPQUFyQjtBQUE4QkssaUJBQUssRUFBRSxNQUFyQztBQUE2Q08sd0JBQVksRUFBRSxvQkFBM0Q7QUFBaUZILDJCQUFlLEVBQUMsT0FBakc7QUFBMEdQLGtCQUFNLEVBQUUsR0FBbEg7QUFBdUhXLGtCQUFNLEVBQUU7QUFBL0gsV0FBWjtBQUF1SixpQkFBTyxFQUFFMUIsS0FBaEs7QUFBQSxpQ0FDQTtBQUFJLGlCQUFLLEVBQUU7QUFBQ29CLHNCQUFRLEVBQUU7QUFBWCxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUlBO0FBQUssZUFBSyxFQUFFO0FBQUNPLHFCQUFTLEVBQUUsTUFBWjtBQUFvQlosa0JBQU0sRUFBRTtBQUE1QixXQUFaO0FBQUEsb0JBQ0M3QjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekNKLGVBa0RJLHNFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUUsQ0FBaEI7QUFBbUIsVUFBRSxFQUFFLEVBQXZCO0FBQTJCLGNBQU0sRUFBRSxDQUFuQztBQUFBLGdDQUNBO0FBQUssZUFBSyxFQUFFO0FBQUNpQixlQUFHLEVBQUUsR0FBTjtBQUFXVSxvQkFBUSxFQUFFLE9BQXJCO0FBQThCSyxpQkFBSyxFQUFFLEtBQXJDO0FBQTRDTyx3QkFBWSxFQUFFLG9CQUExRDtBQUFnRkgsMkJBQWUsRUFBQyxPQUFoRztBQUF5R1Asa0JBQU0sRUFBRSxHQUFqSDtBQUFzSFcsa0JBQU0sRUFBRTtBQUE5SCxXQUFaO0FBQXNKLGlCQUFPLEVBQUUxQixLQUEvSjtBQUFBLGlDQUNBO0FBQUksaUJBQUssRUFBRTtBQUFDb0Isc0JBQVEsRUFBRSxNQUFYO0FBQW1CVix3QkFBVSxFQUFDO0FBQTlCLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBSUE7QUFBSyxlQUFLLEVBQUU7QUFBQ2lCLHFCQUFTLEVBQUU7QUFBWixXQUFaO0FBQUEsb0JBQ0N6QztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbERKLGVBMkRJLHNFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUUsQ0FBaEI7QUFBbUIsVUFBRSxFQUFFLENBQXZCO0FBQUEsK0JBQ0Esc0VBQUMsMENBQUQsQ0FBTyxNQUFQO0FBQWMscUJBQVcsRUFBQyxjQUExQjtBQUErQixrQkFBUSxFQUFFVSxRQUF6QztBQUFtRCxlQUFLLEVBQUU7QUFBQytCLHFCQUFTLEVBQUUsTUFBWjtBQUFvQmpCLHNCQUFVLEVBQUU7QUFBaEM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzREosZUE4REksc0VBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFZLFVBQUUsRUFBRSxDQUFoQjtBQUFtQixVQUFFLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxRUgsQ0FqR0Q7O0dBQU16QixTO1VBQ2VHLHVELEVBQ0ZDLHVELEVBQzRCSSx1RDs7O0tBSHpDUixTO0FBbUdOQSxTQUFTLENBQUMyQyxTQUFWLEdBQXNCO0FBQ2xCMUMsVUFBUSxFQUFFMkMsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURQLENBQXRCO0FBSWU5Qyx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjEzNWZkMDYyNDg4Njg4ZTVmMjc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sLCBCdXR0b24sIEF2YXRhciwgRHJvcGRvd24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IFN0YXJPdXRsaW5lZCwgU2VuZE91dGxpbmVkLCBVc2VyT3V0bGluZWQsIEdsb2JhbE91dGxpbmVkLCBIb21lT3V0bGluZWQsIFNlYXJjaE91dGxpbmVkLCBDb25zb2xlU3FsT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExPR19PVVRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgb25DaGFuZ2VTZWFyY2hJbnB1dF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xyXG4gICAgfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gICAgY29uc3QgdG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MCwgbGVmdDowLCBiZWhhdmlvcjonYXV0byd9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sIFtMT0dfT1VUX1JFUVVFU1RdKTtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gKFxyXG4gICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkxvZ091dH0+TG9nIG91dDwvYT4gXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMTUlXCIsIG1hcmdpblJpZ2h0OlwiMTUlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9IHNtPXswfSBtZD17Mn0gPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17M30gc209ezR9IG1kPXswfSBzdHlsZT17e2hlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIGJvcmRlclJpZ2h0OiBcInNvbGlkIHRoaW4gI2UyZTJlMlwiLCB6SW5kZXg6IFwiMlwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8aW1nIHNyYz1cInR3aXR0ZXIucG5nXCIgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiLz59IG9uQ2xpY2s9e3RvVG9wfT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCA1cHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwifX0gaWNvbj17PEhvbWVPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjNweFwiLCBmb250V2VpZ2h0OiBcIjEwMFwifX0vPn0gb25DbGljaz17dG9Ub3B9PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8U2VhcmNoT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjIzcHhcIn19Lz59PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8U2VuZE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wiLCBmb250U2l6ZTogXCIyM3B4XCJ9fS8+fT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCA1cHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwifX0gaWNvbj17PFN0YXJPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjNweFwifX0vPn0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggNXB4XCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIn19IGljb249ezxVc2VyT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjIzcHhcIn19Lz59PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8QXZhdGFyIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IFwiMjNweFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJncmVlblwifX0+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9IHNtPXswfSBtZD17NH0gb2Zmc2V0PXsyfSBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggNXB4XCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIn19IGljb249ezxpbWcgc3JjPVwidHdpdHRlci5wbmdcIiB3aWR0aD1cIjUwcHhcIiBoZWlnaHQ9XCI1MHB4XCIvPn0gb25DbGljaz17dG9Ub3B9PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8SG9tZU91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+Jm5ic3A7SG9tZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8R2xvYmFsT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT4mbmJzcDtFeHBsb3JlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCAwXCIsIGhlaWdodDogXCI1MHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxTZW5kT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT4mbmJzcDtNZXNzYWdlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCAwXCIsIGhlaWdodDogXCI1MHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxTdGFyT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT4mbmJzcDtOb3RpZmljYXRpb248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PFVzZXJPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PiZuYnNwO1Byb2ZpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59PlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOzxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wifX0+PHAgc3R5bGU9e3tmb250U2l6ZTpcIjE4cHhcIn19PiZuYnNwOyZuYnNwO3ttZS5lbWFpbH08L3A+PC9kaXY+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyMX0gc209ezB9IG1kPXswfSBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMTIuNSVcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RvcDogXCIwXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQm90dG9tOiBcInNvbGlkIHRoaW4gI2UyZTJlMlwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCB6SW5kZXg6IFwiMVwiLCBjdXJzb3I6IFwicG9pbnRlclwifX0gb25DbGljaz17dG9Ub3B9PlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6IFwiMjVweFwifX0+Jm5ic3A7Jm5ic3A7Jm5ic3A7SG9tZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiNTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9IHNtPXsyMH0gbWQ9ezB9IG9mZnNldD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dG9wOiBcIjBcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjZTJlMmUyXCIsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHpJbmRleDogXCIxXCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXt0b1RvcH0+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogXCIyNXB4XCJ9fT4mbmJzcDsmbmJzcDsmbmJzcDtIb21lPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogXCI1MHB4XCIsIHpJbmRleDogXCItMVwifX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9IHNtPXswfSBtZD17MTJ9IG9mZnNldD17NH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dG9wOiBcIjBcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiNTAlXCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNlMmUyZTJcIiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgekluZGV4OiBcIjFcIiwgY3Vyc29yOiBcInBvaW50ZXJcIn19IG9uQ2xpY2s9e3RvVG9wfT5cclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDpcIjE1cHhcIn19PkhvbWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjUwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXswfSBzbT17MH0gbWQ9ezR9ID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9XCLqsoDsg4lcIiBvblNlYXJjaD17b25TZWFyY2h9IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjEwcHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCJ9fS8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9IHNtPXswfSBtZD17Mn0gPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==