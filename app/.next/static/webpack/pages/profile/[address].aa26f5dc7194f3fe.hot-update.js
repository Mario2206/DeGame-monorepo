"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/[address]",{

/***/ "./components/Comments/Comments.jsx":
/*!******************************************!*\
  !*** ./components/Comments/Comments.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Comments: function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Comments_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comments.module.css */ \"./components/Comments/Comments.module.css\");\n/* harmony import */ var _Comments_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Comments_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst exampleComments = [\n    {\n        id: 1,\n        gameName: \"Tom Clancy's Rainbow Six Siege\",\n        imgGame: \"https://cdn1.epicgames.com/offer/carnation/Share_Image_1920x1080-3_1920x1080-6e2d079f24db0a35285007191358978b\",\n        comment: \"This game is awesome!\",\n        rating: 4.5,\n        time: \"2 hours ago\"\n    },\n    {\n        id: 2,\n        gameName: \"Avatar: Frontiers of Pandora\",\n        imgGame: \"https://cdn-uploads.gameblog.fr/img/news/428100_648873239f3dc.jpg?ver=1\",\n        comment: \"I love playing this game!\",\n        rating: 5,\n        time: \"1 day ago\"\n    },\n    {\n        id: 3,\n        gameName: \"Call of Duty: Modern Warfare III\",\n        imgGame: \"https://cdn-products.eneba.com/resized-products/SLVSqluiQW4bQAMgb1_-5npM22TIVGi4-f80BB_sfPc_350x200_2x-0.jpg\",\n        comment: \"Great graphics in this game.\",\n        rating: 3,\n        time: \"3 days ago\"\n    }\n];\nfunction Comments() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().commentsContainer),\n        children: exampleComments.map((comment)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().comment),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: comment.imgGame,\n                        alt: comment.gameName\n                    }, void 0, false, {\n                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Comments/Comments.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().gamenameRatingContainer),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: comment.gameName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Comments/Comments.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_Comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().starRating),\n                                        children: Array.from({\n                                            length: 5\n                                        }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_Comments_module_css__WEBPACK_IMPORTED_MODULE_3___default()) + comment.rating > index ? \"yellow\" : \"☆\",\n                                                children: comment.rating > index ? \"★\" : \"☆\"\n                                            }, index, false, {\n                                                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Comments/Comments.jsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 21\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Comments/Comments.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Comments/Comments.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: comment.comment\n                            }, void 0, false, {\n                                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Comments/Comments.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: comment.time\n                            }, void 0, false, {\n                                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Comments/Comments.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Comments/Comments.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, comment.id, true, {\n                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Comments/Comments.jsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/components/Comments/Comments.jsx\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, this);\n}\n_c = Comments;\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0Y7QUFDYztBQUUzQyxNQUFNRyxrQkFBa0I7SUFDdEI7UUFDRUMsSUFBSTtRQUNKQyxVQUFVO1FBQ1ZDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxRQUFRO1FBQ1JDLE1BQU07SUFDUjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsUUFBUTtRQUNSQyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLFVBQVU7UUFDVkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0NBQ0Q7QUFHTSxTQUFTQztJQUVkLHFCQUNBLDhEQUFDQztRQUFJQyxXQUFXViwrRUFBd0I7a0JBRW5DQyxnQkFBZ0JXLEdBQUcsQ0FBQyxDQUFDUCx3QkFDbEIsOERBQUNJO2dCQUFxQkMsV0FBV1YscUVBQWM7O2tDQUM3Qyw4REFBQ2E7d0JBQUlDLEtBQUtULFFBQVFELE9BQU87d0JBQUVXLEtBQUtWLFFBQVFGLFFBQVE7Ozs7OztrQ0FDaEQsOERBQUNNOzswQ0FDQyw4REFBQ0E7Z0NBQUlDLFdBQVdWLHFGQUE4Qjs7a0RBQzVDLDhEQUFDaUI7a0RBQUlaLFFBQVFGLFFBQVE7Ozs7OztrREFDckIsOERBQUNNO3dDQUFJQyxXQUFXVix3RUFBaUI7a0RBQzlCbUIsTUFBTUMsSUFBSSxDQUFDOzRDQUFFQyxRQUFRO3dDQUFFLEdBQUcsQ0FBQ0MsR0FBR0Msc0JBQzdCLDhEQUFDQztnREFBaUJkLFdBQVdWLDZEQUFNQSxHQUFHSyxRQUFRQyxNQUFNLEdBQUdpQixRQUFRLFdBQVc7MERBQ3ZFbEIsUUFBUUMsTUFBTSxHQUFHaUIsUUFBUSxNQUFNOytDQUR2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7MENBTWpCLDhEQUFDRTswQ0FBR3BCLFFBQVFBLE9BQU87Ozs7OzswQ0FDbkIsOERBQUNtQjswQ0FBTW5CLFFBQVFFLElBQUk7Ozs7Ozs7Ozs7Ozs7ZUFkYkYsUUFBUUgsRUFBRTs7Ozs7Ozs7OztBQW9COUI7S0ExQmdCTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLmpzeD9mMWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db21tZW50cy5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IGV4YW1wbGVDb21tZW50cyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGdhbWVOYW1lOiBcIlRvbSBDbGFuY3kncyBSYWluYm93IFNpeCBTaWVnZVwiLFxuICAgIGltZ0dhbWU6IFwiaHR0cHM6Ly9jZG4xLmVwaWNnYW1lcy5jb20vb2ZmZXIvY2FybmF0aW9uL1NoYXJlX0ltYWdlXzE5MjB4MTA4MC0zXzE5MjB4MTA4MC02ZTJkMDc5ZjI0ZGIwYTM1Mjg1MDA3MTkxMzU4OTc4YlwiLFxuICAgIGNvbW1lbnQ6IFwiVGhpcyBnYW1lIGlzIGF3ZXNvbWUhXCIsXG4gICAgcmF0aW5nOiA0LjUsXG4gICAgdGltZTogXCIyIGhvdXJzIGFnb1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgZ2FtZU5hbWU6IFwiQXZhdGFyOiBGcm9udGllcnMgb2YgUGFuZG9yYVwiLFxuICAgIGltZ0dhbWU6IFwiaHR0cHM6Ly9jZG4tdXBsb2Fkcy5nYW1lYmxvZy5mci9pbWcvbmV3cy80MjgxMDBfNjQ4ODczMjM5ZjNkYy5qcGc/dmVyPTFcIixcbiAgICBjb21tZW50OiBcIkkgbG92ZSBwbGF5aW5nIHRoaXMgZ2FtZSFcIixcbiAgICByYXRpbmc6IDUsXG4gICAgdGltZTogXCIxIGRheSBhZ29cIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGdhbWVOYW1lOiBcIkNhbGwgb2YgRHV0eTogTW9kZXJuIFdhcmZhcmUgSUlJXCIsXG4gICAgaW1nR2FtZTogXCJodHRwczovL2Nkbi1wcm9kdWN0cy5lbmViYS5jb20vcmVzaXplZC1wcm9kdWN0cy9TTFZTcWx1aVFXNGJRQU1nYjFfLTVucE0yMlRJVkdpNC1mODBCQl9zZlBjXzM1MHgyMDBfMngtMC5qcGdcIixcbiAgICBjb21tZW50OiBcIkdyZWF0IGdyYXBoaWNzIGluIHRoaXMgZ2FtZS5cIixcbiAgICByYXRpbmc6IDMsXG4gICAgdGltZTogXCIzIGRheXMgYWdvXCIsXG4gIH0sXG5dO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50cygpIHtcblxuICByZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNDb250YWluZXJ9PlxuXHRcdFx0ey8qIFJlbmRlciBjb21tZW50cyAqL31cbiAgICAgIHtleGFtcGxlQ29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2NvbW1lbnQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2NvbW1lbnQuaW1nR2FtZX0gYWx0PXtjb21tZW50LmdhbWVOYW1lfSAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lbmFtZVJhdGluZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGg0Pntjb21tZW50LmdhbWVOYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyUmF0aW5nfT5cbiAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcyArIGNvbW1lbnQucmF0aW5nID4gaW5kZXggPyAneWVsbG93JyA6ICfimIYnfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5yYXRpbmcgPiBpbmRleCA/ICfimIUnIDogJ+KYhid9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+e2NvbW1lbnQuY29tbWVudH08L3A+XG4gICAgICAgICAgICAgIDxzcGFuPntjb21tZW50LnRpbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInN0eWxlcyIsImV4YW1wbGVDb21tZW50cyIsImlkIiwiZ2FtZU5hbWUiLCJpbWdHYW1lIiwiY29tbWVudCIsInJhdGluZyIsInRpbWUiLCJDb21tZW50cyIsImRpdiIsImNsYXNzTmFtZSIsImNvbW1lbnRzQ29udGFpbmVyIiwibWFwIiwiaW1nIiwic3JjIiwiYWx0IiwiZ2FtZW5hbWVSYXRpbmdDb250YWluZXIiLCJoNCIsInN0YXJSYXRpbmciLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJzcGFuIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Comments/Comments.jsx\n"));

/***/ })

});