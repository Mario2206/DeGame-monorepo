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

/***/ "./pages/profile/[address].tsx":
/*!*************************************!*\
  !*** ./pages/profile/[address].tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Container/Container */ \"./components/Container/Container.tsx\");\n/* harmony import */ var _components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Skeleton/Skeleton */ \"./components/Skeleton/Skeleton.tsx\");\n/* harmony import */ var _const_contractAddresses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const/contractAddresses */ \"./const/contractAddresses.ts\");\n/* harmony import */ var _styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Profile.module.css */ \"./styles/Profile.module.css\");\n/* harmony import */ var _styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _util_randomColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/randomColor */ \"./util/randomColor.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst [randomColor1, randomColor2, randomColor3, randomColor4] = [\n    (0,_util_randomColor__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n    (0,_util_randomColor__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n    (0,_util_randomColor__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n    (0,_util_randomColor__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n];\nfunction ProfilePage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"nfts\");\n    const { contract: nftCollection } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(_const_contractAddresses__WEBPACK_IMPORTED_MODULE_6__.NFT_COLLECTION_ADDRESS);\n    const { data: ownedNfts, isLoading: loadingOwnedNfts } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useOwnedNFTs)(nftCollection, router.query.address);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        maxWidth: \"lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().profileHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().coverImage),\n                        style: {\n                            background: \"linear-gradient(90deg, \".concat(randomColor1, \", \").concat(randomColor2, \")\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().profilePicture),\n                        style: {\n                            background: \"linear-gradient(90deg, \".concat(randomColor3, \", \").concat(randomColor4, \")\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().profileName),\n                        children: router.query.address ? router.query.address.toString().substring(0, 4) + \"...\" + router.query.address.toString().substring(38, 42) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            width: \"320\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().tabs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"\".concat((_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().tab), \" \\n        \").concat(tab === \"nfts\" ? (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().activeTab) : \"\"),\n                        onClick: ()=>setTab(\"nfts\"),\n                        children: \"NFTs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"\".concat((_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().tab), \" \\n        \").concat(tab === \"listings\" ? (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().activeTab) : \"\"),\n                        onClick: ()=>setTab(\"listings\"),\n                        children: \"Listings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"\".concat((_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().tab), \"\\n        \").concat(tab === \"auctions\" ? (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().activeTab) : \"\"),\n                        onClick: ()=>setTab(\"auctions\"),\n                        children: \"Auctions\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"\".concat((_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().tab), \"\\n        \").concat(tab === \"comments\" ? (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().activeTab) : \"\"),\n                        onClick: ()=>setTab(\"comments\"),\n                        children: \"Comments\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(tab === \"nfts\" ? (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().activeTabContent) : (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().tabContent))\n            }, void 0, false, {\n                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(tab === \"listings\" ? (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().activeTabContent) : (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().tabContent))\n            }, void 0, false, {\n                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(tab === \"auctions\" ? (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().activeTabContent) : (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().tabContent))\n            }, void 0, false, {\n                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(tab === \"comments\" ? (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().activeTabContent) : (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_8___default().tabContent)),\n                children: \"C'est carr\\xe9 le S\"\n            }, void 0, false, {\n                fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adil/Desktop/DeGame-monorepo/app/pages/profile/[address].tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"Qtyx1YapqgxSqvEhLpGjPzzHQPs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useOwnedNFTs\n    ];\n});\n_c = ProfilePage;\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVWLE9BRENaLFFBQVEsYUFBYVIsb0ZBQXVCLEdBQUdBLDhFQUFpQjswQkFFbkU7Ozs7Ozs7Ozs7OztBQUtQO0dBeEd3Qk07O1FBQ1BaLGtEQUFTQTtRQUdZRiw0REFBV0E7UUFFVUMsNkRBQVlBOzs7S0FOL0NhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUvW2FkZHJlc3NdLnRzeD9hNTU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgdXNlQ29udHJhY3QsXHJcbiAgdXNlT3duZWRORlRzLFxyXG59IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWluZXIvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Ta2VsZXRvbi9Ta2VsZXRvblwiO1xyXG5pbXBvcnQgeyBDb21tZW50cyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgTkZUX0NPTExFQ1RJT05fQUREUkVTUyxcclxufSBmcm9tIFwiLi4vLi4vY29uc3QvY29udHJhY3RBZGRyZXNzZXNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1Byb2ZpbGUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgcmFuZG9tQ29sb3IgZnJvbSBcIi4uLy4uL3V0aWwvcmFuZG9tQ29sb3JcIjtcclxuXHJcbmNvbnN0IFtyYW5kb21Db2xvcjEsIHJhbmRvbUNvbG9yMiwgcmFuZG9tQ29sb3IzLCByYW5kb21Db2xvcjRdID0gW1xyXG4gIHJhbmRvbUNvbG9yKCksXHJcbiAgcmFuZG9tQ29sb3IoKSxcclxuICByYW5kb21Db2xvcigpLFxyXG4gIHJhbmRvbUNvbG9yKCksXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGU8XCJuZnRzXCIgfCBcImxpc3RpbmdzXCIgfCBcImF1Y3Rpb25zXCIgfCBcImNvbW1lbnRzXCI+KFwibmZ0c1wiKTtcclxuXHJcbiAgY29uc3QgeyBjb250cmFjdDogbmZ0Q29sbGVjdGlvbiB9ID0gdXNlQ29udHJhY3QoTkZUX0NPTExFQ1RJT05fQUREUkVTUyk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogb3duZWROZnRzLCBpc0xvYWRpbmc6IGxvYWRpbmdPd25lZE5mdHMgfSA9IHVzZU93bmVkTkZUcyhcclxuICAgIG5mdENvbGxlY3Rpb24sXHJcbiAgICByb3V0ZXIucXVlcnkuYWRkcmVzcyBhcyBzdHJpbmdcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUhlYWRlcn0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJJbWFnZX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7cmFuZG9tQ29sb3IxfSwgJHtyYW5kb21Db2xvcjJ9KWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZVBpY3R1cmV9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAke3JhbmRvbUNvbG9yM30sICR7cmFuZG9tQ29sb3I0fSlgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlTmFtZX0+XHJcbiAgICAgICAgICB7cm91dGVyLnF1ZXJ5LmFkZHJlc3MgPyAoXHJcbiAgICAgICAgICAgIHJvdXRlci5xdWVyeS5hZGRyZXNzLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDQpICtcclxuICAgICAgICAgICAgXCIuLi5cIiArXHJcbiAgICAgICAgICAgIHJvdXRlci5xdWVyeS5hZGRyZXNzLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDM4LCA0MilcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD1cIjMyMFwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJzfT5cclxuICAgICAgICA8aDNcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhYn0gXHJcbiAgICAgICAgJHt0YWIgPT09IFwibmZ0c1wiID8gc3R5bGVzLmFjdGl2ZVRhYiA6IFwiXCJ9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYihcIm5mdHNcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTkZUc1xyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGgzXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy50YWJ9IFxyXG4gICAgICAgICR7dGFiID09PSBcImxpc3RpbmdzXCIgPyBzdHlsZXMuYWN0aXZlVGFiIDogXCJcIn1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKFwibGlzdGluZ3NcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTGlzdGluZ3NcclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxoM1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGFifVxyXG4gICAgICAgICR7dGFiID09PSBcImF1Y3Rpb25zXCIgPyBzdHlsZXMuYWN0aXZlVGFiIDogXCJcIn1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKFwiYXVjdGlvbnNcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQXVjdGlvbnNcclxuICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICA8aDNcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhYn1cclxuICAgICAgICAke3RhYiA9PT0gXCJjb21tZW50c1wiID8gc3R5bGVzLmFjdGl2ZVRhYiA6IFwiXCJ9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYihcImNvbW1lbnRzXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENvbW1lbnRzXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgIHRhYiA9PT0gXCJuZnRzXCIgPyBzdHlsZXMuYWN0aXZlVGFiQ29udGVudCA6IHN0eWxlcy50YWJDb250ZW50XHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICB7LyogPE5GVEdyaWRcclxuICAgICAgICAgIGRhdGE9e293bmVkTmZ0c31cclxuICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ093bmVkTmZ0c31cclxuICAgICAgICAgIGVtcHR5VGV4dD1cIkxvb2tzIGxpa2UgeW91IGRvbid0IGhhdmUgYW55IE5GVHMgZnJvbSB0aGlzIGNvbGxlY3Rpb24uIEhlYWQgdG8gdGhlIGJ1eSBwYWdlIHRvIGJ1eSBzb21lIVwiXHJcbiAgICAgICAgLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICB0YWIgPT09IFwibGlzdGluZ3NcIiA/IHN0eWxlcy5hY3RpdmVUYWJDb250ZW50IDogc3R5bGVzLnRhYkNvbnRlbnRcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgdGFiID09PSBcImF1Y3Rpb25zXCIgPyBzdHlsZXMuYWN0aXZlVGFiQ29udGVudCA6IHN0eWxlcy50YWJDb250ZW50XHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgIHRhYiA9PT0gXCJjb21tZW50c1wiID8gc3R5bGVzLmFjdGl2ZVRhYkNvbnRlbnQgOiBzdHlsZXMudGFiQ29udGVudFxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgQydlc3QgY2FycsOpIGxlIFNcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250cmFjdCIsInVzZU93bmVkTkZUcyIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJTa2VsZXRvbiIsIk5GVF9DT0xMRUNUSU9OX0FERFJFU1MiLCJzdHlsZXMiLCJyYW5kb21Db2xvciIsInJhbmRvbUNvbG9yMSIsInJhbmRvbUNvbG9yMiIsInJhbmRvbUNvbG9yMyIsInJhbmRvbUNvbG9yNCIsIlByb2ZpbGVQYWdlIiwicm91dGVyIiwidGFiIiwic2V0VGFiIiwiY29udHJhY3QiLCJuZnRDb2xsZWN0aW9uIiwiZGF0YSIsIm93bmVkTmZ0cyIsImlzTG9hZGluZyIsImxvYWRpbmdPd25lZE5mdHMiLCJxdWVyeSIsImFkZHJlc3MiLCJtYXhXaWR0aCIsImRpdiIsImNsYXNzTmFtZSIsInByb2ZpbGVIZWFkZXIiLCJjb3ZlckltYWdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicHJvZmlsZVBpY3R1cmUiLCJoMSIsInByb2ZpbGVOYW1lIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ3aWR0aCIsInRhYnMiLCJoMyIsImFjdGl2ZVRhYiIsIm9uQ2xpY2siLCJhY3RpdmVUYWJDb250ZW50IiwidGFiQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile/[address].tsx\n"));

/***/ })

});