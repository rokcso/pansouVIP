"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    const addBookmark = ()=>{\n        if (window.sidebar) {\n            // Mozilla Firefox Bookmark\n            window.sidebar.addPanel(location.href, document.title, \"\");\n        } else if (window.external && \"AddFavorite\" in window.external) {\n            // IE Favorite\n            window.external.AddFavorite(location.href, document.title);\n        } else if (window.opera && window.print) {\n            // Opera Hotlist\n            this.title = document.title;\n            return true;\n        } else {\n            // Webkit - Safari / Chrome\n            alert(\"按 \" + (/Mac/i.test(navigator.userAgent) ? \"Cmd\" : \"Ctrl\") + \"+D 键将本页加入书签。\");\n            return true;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().layout),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"盘搜 VIP 云盘搜索工具精选导航\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: addBookmark,\n                    children: \"收藏本站\"\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"盘搜 VIP ❤️ 云盘搜索工具精选导航\\xa0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Copyright \\xa9 2023 \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"https://rokcso.com\",\n                                    children: \"rokcso\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 35\n                                }, this),\n                                \"\\xa0\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"All rights reserved.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/pansouVIP/components/layout.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNaO0FBRWQsU0FBU0UsT0FBTyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7SUFDN0IsTUFBTUMsY0FBYztRQUNsQixJQUFJQyxPQUFPQyxPQUFPLEVBQUU7WUFDbEIsMkJBQTJCO1lBQzNCRCxPQUFPQyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsU0FBU0MsSUFBSSxFQUFFQyxTQUFTQyxLQUFLLEVBQUU7UUFDekQsT0FBTyxJQUFJTixPQUFPTyxRQUFRLElBQUksaUJBQWlCUCxPQUFPTyxRQUFRLEVBQUU7WUFDOUQsY0FBYztZQUNkUCxPQUFPTyxRQUFRLENBQUNDLFdBQVcsQ0FBQ0wsU0FBU0MsSUFBSSxFQUFFQyxTQUFTQyxLQUFLO1FBQzNELE9BQU8sSUFBSU4sT0FBT1MsS0FBSyxJQUFJVCxPQUFPVSxLQUFLLEVBQUU7WUFDdkMsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQ0osS0FBSyxHQUFHRCxTQUFTQyxLQUFLO1lBQzNCLE9BQU87UUFDVCxPQUFPO1lBQ0wsMkJBQTJCO1lBQzNCSyxNQUNFLE9BQ0csUUFBT0MsSUFBSSxDQUFDQyxVQUFVQyxTQUFTLElBQUksUUFBUSxNQUFLLElBQ2pEO1lBRUosT0FBTztRQUNUO0lBQ0Y7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBV3JCLGtFQUFhOzs4QkFDM0IsOERBQUN1QjtvQkFBT0YsV0FBV3JCLGtFQUFhOzhCQUM5Qiw0RUFBQ0Msa0RBQUlBO3dCQUFDUSxNQUFPO3dCQUFJWSxXQUFXckIsZ0VBQVc7a0NBQ3JDLDRFQUFDeUI7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNDO29CQUFPQyxTQUFTdkI7OEJBQWE7Ozs7Ozs4QkFDOUIsOERBQUN3Qjs4QkFBTXpCOzs7Ozs7OEJBQ1AsOERBQUMwQjtvQkFBT1IsV0FBV3JCLGtFQUFhOztzQ0FDOUIsOERBQUM4QjtzQ0FBSzs7Ozs7O3NDQUNOLDhEQUFDQTs7Z0NBQUs7OENBQ2tCLDhEQUFDN0Isa0RBQUlBO29DQUFDUSxNQUFLOzhDQUFxQjs7Ozs7O2dDQUFhOzs7Ozs7O3NDQUdyRSw4REFBQ3FCO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0tBM0N3QjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sYXlvdXQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGFkZEJvb2ttYXJrID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuc2lkZWJhcikge1xuICAgICAgLy8gTW96aWxsYSBGaXJlZm94IEJvb2ttYXJrXG4gICAgICB3aW5kb3cuc2lkZWJhci5hZGRQYW5lbChsb2NhdGlvbi5ocmVmLCBkb2N1bWVudC50aXRsZSwgXCJcIik7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuZXh0ZXJuYWwgJiYgXCJBZGRGYXZvcml0ZVwiIGluIHdpbmRvdy5leHRlcm5hbCkge1xuICAgICAgLy8gSUUgRmF2b3JpdGVcbiAgICAgIHdpbmRvdy5leHRlcm5hbC5BZGRGYXZvcml0ZShsb2NhdGlvbi5ocmVmLCBkb2N1bWVudC50aXRsZSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cub3BlcmEgJiYgd2luZG93LnByaW50KSB7XG4gICAgICAvLyBPcGVyYSBIb3RsaXN0XG4gICAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Via2l0IC0gU2FmYXJpIC8gQ2hyb21lXG4gICAgICBhbGVydChcbiAgICAgICAgXCLmjIkgXCIgK1xuICAgICAgICAgICgvTWFjL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/IFwiQ21kXCIgOiBcIkN0cmxcIikgK1xuICAgICAgICAgIFwiK0Qg6ZSu5bCG5pys6aG15Yqg5YWl5Lmm562+44CCXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8aDE+55uY5pCcIFZJUCDkupHnm5jmkJzntKLlt6Xlhbfnsr7pgInlr7zoiKo8L2gxPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkQm9va21hcmt9PuaUtuiXj+acrOermTwvYnV0dG9uPlxuICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgPHNwYW4+55uY5pCcIFZJUCDinaTvuI8g5LqR55uY5pCc57Si5bel5YW357K+6YCJ5a+86IiqJm5ic3A7PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyAyMDIzIDxMaW5rIGhyZWY9XCJodHRwczovL3Jva2Nzby5jb21cIj5yb2tjc288L0xpbms+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3NwYW4+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTGluayIsIkxheW91dCIsImNoaWxkcmVuIiwiYWRkQm9va21hcmsiLCJ3aW5kb3ciLCJzaWRlYmFyIiwiYWRkUGFuZWwiLCJsb2NhdGlvbiIsImhyZWYiLCJkb2N1bWVudCIsInRpdGxlIiwiZXh0ZXJuYWwiLCJBZGRGYXZvcml0ZSIsIm9wZXJhIiwicHJpbnQiLCJhbGVydCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYXlvdXQiLCJoZWFkZXIiLCJsb2dvIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwibWFpbiIsImZvb3RlciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});