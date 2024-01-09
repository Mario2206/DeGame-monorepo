/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar/Navbar.module.css":
/*!*********************************************!*\
  !*** ./components/Navbar/Navbar.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navContainer\": \"Navbar_navContainer__xv_QU\",\n\t\"nav\": \"Navbar_nav__yOCRc\",\n\t\"navLeft\": \"Navbar_navLeft__Vf45q\",\n\t\"navMiddle\": \"Navbar_navMiddle__CR3pY\",\n\t\"link\": \"Navbar_link__Qi5VS\",\n\t\"homeLink\": \"Navbar_homeLink__LVFUJ\",\n\t\"navRight\": \"Navbar_navRight__AgYnC\",\n\t\"profileImage\": \"Navbar_profileImage__Ap0dv\",\n\t\"buttonLink\": \"Navbar_buttonLink__rmaPb\",\n\t\"navConnect\": \"Navbar_navConnect__rTccf\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZmktZ2FtZXMvLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIubW9kdWxlLmNzcz84NDBmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdkNvbnRhaW5lclwiOiBcIk5hdmJhcl9uYXZDb250YWluZXJfX3h2X1FVXCIsXG5cdFwibmF2XCI6IFwiTmF2YmFyX25hdl9feU9DUmNcIixcblx0XCJuYXZMZWZ0XCI6IFwiTmF2YmFyX25hdkxlZnRfX1ZmNDVxXCIsXG5cdFwibmF2TWlkZGxlXCI6IFwiTmF2YmFyX25hdk1pZGRsZV9fQ1IzcFlcIixcblx0XCJsaW5rXCI6IFwiTmF2YmFyX2xpbmtfX1FpNVZTXCIsXG5cdFwiaG9tZUxpbmtcIjogXCJOYXZiYXJfaG9tZUxpbmtfX0xWRlVKXCIsXG5cdFwibmF2UmlnaHRcIjogXCJOYXZiYXJfbmF2UmlnaHRfX0FnWW5DXCIsXG5cdFwicHJvZmlsZUltYWdlXCI6IFwiTmF2YmFyX3Byb2ZpbGVJbWFnZV9fQXAwZHZcIixcblx0XCJidXR0b25MaW5rXCI6IFwiTmF2YmFyX2J1dHRvbkxpbmtfX3JtYVBiXCIsXG5cdFwibmF2Q29ubmVjdFwiOiBcIk5hdmJhcl9uYXZDb25uZWN0X19yVGNjZlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar/Navbar.module.css\n");

/***/ }),

/***/ "./components/Navbar/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/Navbar/Navbar.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"@thirdweb-dev/react\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/**\r\n * Navigation bar that shows up on all pages.\r\n * Rendered in _app.tsx file above the page content.\r\n */ function Navbar() {\n    const address = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useAddress)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLeft),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            className: `${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().homeLink)} ${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLeft)}`,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/logo.png\",\n                                    width: 48,\n                                    height: 48,\n                                    alt: \"NFT marketplace sample logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        fontFamily: \"monospace\"\n                                    },\n                                    children: \"DeGames\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navMiddle),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/games\",\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                children: \"Games\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navRight),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navConnect),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.ConnectWallet, {\n                                theme: \"dark\",\n                                btnTitle: \"Connect Wallet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 6\n                        }, this),\n                        address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            href: `/profile/${address}`,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().profileImage),\n                                src: \"/user-icon.png\",\n                                width: 42,\n                                height: 42,\n                                alt: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 8\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n            lineNumber: 15,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Navbar/Navbar.tsx\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNqQztBQUNGO0FBQ1k7QUFFekM7OztDQUdDLEdBQ00sU0FBU0s7SUFDZCxNQUFNQyxVQUFVTCwrREFBVUE7SUFFMUIscUJBQ0EsOERBQUNNO1FBQUlDLFdBQVdKLHdFQUFtQjtrQkFDbEMsNEVBQUNNO1lBQUlGLFdBQVdKLCtEQUFVOzs4QkFDekIsOERBQUNHO29CQUFJQyxXQUFXSixtRUFBYzs7c0NBQzdCLDhEQUFDRCxrREFBSUE7NEJBQUNTLE1BQUs7NEJBQUlKLFdBQVcsQ0FBQyxFQUFFSixvRUFBZSxDQUFDLENBQUMsRUFBRUEsbUVBQWMsQ0FBQyxDQUFDOzs4Q0FDL0QsOERBQUNGLG1EQUFLQTtvQ0FDTFksS0FBSTtvQ0FDSkMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBSTs7Ozs7OzhDQUVMLDhEQUFDQztvQ0FBS0MsT0FBTzt3Q0FBQ0MsWUFBWTtvQ0FBVzs4Q0FBRzs7Ozs7Ozs7Ozs7O3NDQUd6Qyw4REFBQ2I7NEJBQUlDLFdBQVdKLHFFQUFnQjtzQ0FDL0IsNEVBQUNELGtEQUFJQTtnQ0FBQ1MsTUFBSztnQ0FBU0osV0FBV0osZ0VBQVc7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU05Qyw4REFBQ0c7b0JBQUlDLFdBQVdKLG9FQUFlOztzQ0FDOUIsOERBQUNHOzRCQUFJQyxXQUFXSixzRUFBaUI7c0NBQ2hDLDRFQUFDSiw4REFBYUE7Z0NBQUN5QixPQUFNO2dDQUFPQyxVQUFTOzs7Ozs7Ozs7Ozt3QkFFckNwQix5QkFDQSw4REFBQ0gsa0RBQUlBOzRCQUFDSyxXQUFXSixnRUFBVzs0QkFBRVEsTUFBTSxDQUFDLFNBQVMsRUFBRU4sUUFBUSxDQUFDO3NDQUN4RCw0RUFBQ0osbURBQUtBO2dDQUNMTSxXQUFXSix3RUFBbUI7Z0NBQzlCVSxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWZpLWdhbWVzLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLnRzeD82N2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RXYWxsZXQsIHVzZUFkZHJlc3MgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL05hdmJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG4vKipcclxuICogTmF2aWdhdGlvbiBiYXIgdGhhdCBzaG93cyB1cCBvbiBhbGwgcGFnZXMuXHJcbiAqIFJlbmRlcmVkIGluIF9hcHAudHN4IGZpbGUgYWJvdmUgdGhlIHBhZ2UgY29udGVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgYWRkcmVzcyA9IHVzZUFkZHJlc3MoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2Q29udGFpbmVyfT5cclxuXHRcdFx0PG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGVmdH0+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhvbWVMaW5rfSAke3N0eWxlcy5uYXZMZWZ0fWB9PlxyXG5cdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvbG9nby5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXs0OH1cclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezQ4fVxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIk5GVCBtYXJrZXRwbGFjZSBzYW1wbGUgbG9nb1wiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogXCJtb25vc3BhY2VcIn19PkRlR2FtZXM8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZNaWRkbGV9PlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2dhbWVzXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcblx0XHRcdFx0XHRcdFx0R2FtZXNcclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2UmlnaHR9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZDb25uZWN0fT5cclxuXHRcdFx0XHRcdFx0PENvbm5lY3RXYWxsZXQgdGhlbWU9XCJkYXJrXCIgYnRuVGl0bGU9XCJDb25uZWN0IFdhbGxldFwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdHthZGRyZXNzICYmIChcclxuXHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gaHJlZj17YC9wcm9maWxlLyR7YWRkcmVzc31gfT5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVJbWFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi91c2VyLWljb24ucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXs0Mn1cclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17NDJ9XHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJQcm9maWxlXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L25hdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbm5lY3RXYWxsZXQiLCJ1c2VBZGRyZXNzIiwiSW1hZ2UiLCJMaW5rIiwic3R5bGVzIiwiTmF2YmFyIiwiYWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSIsIm5hdkNvbnRhaW5lciIsIm5hdiIsIm5hdkxlZnQiLCJocmVmIiwiaG9tZUxpbmsiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNwYW4iLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJuYXZNaWRkbGUiLCJsaW5rIiwibmF2UmlnaHQiLCJuYXZDb25uZWN0IiwidGhlbWUiLCJidG5UaXRsZSIsInByb2ZpbGVJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar/Navbar.tsx\n");

/***/ }),

/***/ "./const/contractAddresses.ts":
/*!************************************!*\
  !*** ./const/contractAddresses.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NETWORK: () => (/* binding */ NETWORK),\n/* harmony export */   NFT_COLLECTION_ADDRESS: () => (/* binding */ NFT_COLLECTION_ADDRESS)\n/* harmony export */ });\n/* harmony import */ var _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/chains */ \"@thirdweb-dev/chains\");\n/* harmony import */ var _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__);\n/** Replace the values below with the addresses of your smart contracts. */ // 1. Set up the network your smart contracts are deployed to.\n// First, import the chain from the package, then set the NETWORK variable to the chain.\n\nconst LocalhostNetwork = {\n    ..._thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__.Localhost,\n    chainId: 31337\n};\nconst NETWORK = _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__.Sepolia;\n// 3. The address of your NFT collection smart contract.\nconst NFT_COLLECTION_ADDRESS = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdC9jb250cmFjdEFkZHJlc3Nlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEseUVBQXlFLEdBRXpFLDhEQUE4RDtBQUM5RCx3RkFBd0Y7QUFDOUI7QUFFMUQsTUFBTUUsbUJBQW1CO0lBQUUsR0FBR0YsMkRBQVM7SUFBRUcsU0FBUztBQUFNO0FBRWpELE1BQU1DLFVBQVVILHlEQUFPQSxDQUFDO0FBRS9CLHdEQUF3RDtBQUNqRCxNQUFNSSx5QkFBeUIsNkNBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVmaS1nYW1lcy8uL2NvbnN0L2NvbnRyYWN0QWRkcmVzc2VzLnRzP2JkZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIFJlcGxhY2UgdGhlIHZhbHVlcyBiZWxvdyB3aXRoIHRoZSBhZGRyZXNzZXMgb2YgeW91ciBzbWFydCBjb250cmFjdHMuICovXHJcblxyXG4vLyAxLiBTZXQgdXAgdGhlIG5ldHdvcmsgeW91ciBzbWFydCBjb250cmFjdHMgYXJlIGRlcGxveWVkIHRvLlxyXG4vLyBGaXJzdCwgaW1wb3J0IHRoZSBjaGFpbiBmcm9tIHRoZSBwYWNrYWdlLCB0aGVuIHNldCB0aGUgTkVUV09SSyB2YXJpYWJsZSB0byB0aGUgY2hhaW4uXHJcbmltcG9ydCB7IExvY2FsaG9zdCwgU2Vwb2xpYSB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L2NoYWluc1wiO1xyXG5cclxuY29uc3QgTG9jYWxob3N0TmV0d29yayA9IHsgLi4uTG9jYWxob3N0LCBjaGFpbklkOiAzMTMzNyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FVFdPUksgPSBTZXBvbGlhOyAgXHJcblxyXG4vLyAzLiBUaGUgYWRkcmVzcyBvZiB5b3VyIE5GVCBjb2xsZWN0aW9uIHNtYXJ0IGNvbnRyYWN0LlxyXG5leHBvcnQgY29uc3QgTkZUX0NPTExFQ1RJT05fQUREUkVTUyA9IFwiMHg1RmJEQjIzMTU2NzhhZmVjYjM2N2YwMzJkOTNGNjQyZjY0MTgwYWEzXCI7XHJcbiJdLCJuYW1lcyI6WyJMb2NhbGhvc3QiLCJTZXBvbGlhIiwiTG9jYWxob3N0TmV0d29yayIsImNoYWluSWQiLCJORVRXT1JLIiwiTkZUX0NPTExFQ1RJT05fQUREUkVTUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./const/contractAddresses.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"@thirdweb-dev/react\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar/Navbar */ \"./components/Navbar/Navbar.tsx\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _const_contractAddresses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const/contractAddresses */ \"./const/contractAddresses.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.ThirdwebProvider, {\n        activeChain: _const_contractAddresses__WEBPACK_IMPORTED_MODULE_4__.NETWORK,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_3___default()), {\n                color: \"var(--color-tertiary)\",\n                startPosition: 0.3,\n                stopDelayMs: 200,\n                height: 3,\n                showOnShallow: true\n            }, void 0, false, {\n                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar, {}, void 0, false, {\n                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDRjtBQUNOO0FBQ007QUFDdEI7QUFFL0IsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxxQkFDRSw4REFBQ04saUVBQWdCQTtRQUNmTyxhQUFhSiw2REFBT0E7OzBCQUdwQiw4REFBQ0QsMkRBQWFBO2dCQUNaTSxPQUFNO2dCQUNOQyxlQUFlO2dCQUNmQyxhQUFhO2dCQUNiQyxRQUFRO2dCQUNSQyxlQUFlOzs7Ozs7MEJBSWpCLDhEQUFDWCw2REFBTUE7Ozs7OzBCQUVQLDhEQUFDSTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZmktZ2FtZXMvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFRoaXJkd2ViUHJvdmlkZXIgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdFwiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhclwiO1xuaW1wb3J0IE5leHROUHJvZ3Jlc3MgZnJvbSBcIm5leHRqcy1wcm9ncmVzc2JhclwiO1xuaW1wb3J0IHsgTkVUV09SSyB9IGZyb20gXCIuLi9jb25zdC9jb250cmFjdEFkZHJlc3Nlc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhpcmR3ZWJQcm92aWRlclxuICAgICAgYWN0aXZlQ2hhaW49e05FVFdPUkt9XG4gICAgPlxuICAgICAgey8qIFByb2dyZXNzIGJhciB3aGVuIG5hdmlnYXRpbmcgYmV0d2VlbiBwYWdlcyAqL31cbiAgICAgIDxOZXh0TlByb2dyZXNzXG4gICAgICAgIGNvbG9yPVwidmFyKC0tY29sb3ItdGVydGlhcnkpXCJcbiAgICAgICAgc3RhcnRQb3NpdGlvbj17MC4zfVxuICAgICAgICBzdG9wRGVsYXlNcz17MjAwfVxuICAgICAgICBoZWlnaHQ9ezN9XG4gICAgICAgIHNob3dPblNoYWxsb3c9e3RydWV9XG4gICAgICAvPlxuXG4gICAgICB7LyogUmVuZGVyIHRoZSBuYXZpZ2F0aW9uIG1lbnUgYWJvdmUgZWFjaCBjb21wb25lbnQgKi99XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICB7LyogUmVuZGVyIHRoZSBhY3R1YWwgY29tcG9uZW50IChwYWdlKSAqL31cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoaXJkd2ViUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlRoaXJkd2ViUHJvdmlkZXIiLCJOYXZiYXIiLCJOZXh0TlByb2dyZXNzIiwiTkVUV09SSyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYWN0aXZlQ2hhaW4iLCJjb2xvciIsInN0YXJ0UG9zaXRpb24iLCJzdG9wRGVsYXlNcyIsImhlaWdodCIsInNob3dPblNoYWxsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@thirdweb-dev/chains":
/*!***************************************!*\
  !*** external "@thirdweb-dev/chains" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@thirdweb-dev/chains");

/***/ }),

/***/ "@thirdweb-dev/react":
/*!**************************************!*\
  !*** external "@thirdweb-dev/react" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@thirdweb-dev/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();