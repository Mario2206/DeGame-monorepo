"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./const/contractAddresses.ts":
/*!************************************!*\
  !*** ./const/contractAddresses.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NETWORK: function() { return /* binding */ NETWORK; },\n/* harmony export */   NFT_COLLECTION_ADDRESS: function() { return /* binding */ NFT_COLLECTION_ADDRESS; }\n/* harmony export */ });\n/* harmony import */ var _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/chains */ \"./node_modules/@thirdweb-dev/chains/dist/thirdweb-dev-chains.esm.js\");\n/** Replace the values below with the addresses of your smart contracts. */ // 1. Set up the network your smart contracts are deployed to.\n// First, import the chain from the package, then set the NETWORK variable to the chain.\n\nconst LocalhostNetwork = {\n    ..._thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__.Localhost,\n    chainId: 31337\n};\nconst NETWORK = _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__.Sepolia;\n// 3. The address of your NFT collection smart contract.\nconst NFT_COLLECTION_ADDRESS = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdC9jb250cmFjdEFkZHJlc3Nlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5RUFBeUUsR0FFekUsOERBQThEO0FBQzlELHdGQUF3RjtBQUM5QjtBQUUxRCxNQUFNRSxtQkFBbUI7SUFBRSxHQUFHRiwyREFBUztJQUFFRyxTQUFTO0FBQU07QUFFakQsTUFBTUMsVUFBVUgseURBQU9BLENBQUM7QUFFL0Isd0RBQXdEO0FBQ2pELE1BQU1JLHlCQUF5Qiw2Q0FBNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3QvY29udHJhY3RBZGRyZXNzZXMudHM/YmRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogUmVwbGFjZSB0aGUgdmFsdWVzIGJlbG93IHdpdGggdGhlIGFkZHJlc3NlcyBvZiB5b3VyIHNtYXJ0IGNvbnRyYWN0cy4gKi9cclxuXHJcbi8vIDEuIFNldCB1cCB0aGUgbmV0d29yayB5b3VyIHNtYXJ0IGNvbnRyYWN0cyBhcmUgZGVwbG95ZWQgdG8uXHJcbi8vIEZpcnN0LCBpbXBvcnQgdGhlIGNoYWluIGZyb20gdGhlIHBhY2thZ2UsIHRoZW4gc2V0IHRoZSBORVRXT1JLIHZhcmlhYmxlIHRvIHRoZSBjaGFpbi5cclxuaW1wb3J0IHsgTG9jYWxob3N0LCBTZXBvbGlhIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvY2hhaW5zXCI7XHJcblxyXG5jb25zdCBMb2NhbGhvc3ROZXR3b3JrID0geyAuLi5Mb2NhbGhvc3QsIGNoYWluSWQ6IDMxMzM3IH07XHJcblxyXG5leHBvcnQgY29uc3QgTkVUV09SSyA9IFNlcG9saWE7ICBcclxuXHJcbi8vIDMuIFRoZSBhZGRyZXNzIG9mIHlvdXIgTkZUIGNvbGxlY3Rpb24gc21hcnQgY29udHJhY3QuXHJcbmV4cG9ydCBjb25zdCBORlRfQ09MTEVDVElPTl9BRERSRVNTID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcclxuIl0sIm5hbWVzIjpbIkxvY2FsaG9zdCIsIlNlcG9saWEiLCJMb2NhbGhvc3ROZXR3b3JrIiwiY2hhaW5JZCIsIk5FVFdPUksiLCJORlRfQ09MTEVDVElPTl9BRERSRVNTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./const/contractAddresses.ts\n"));

/***/ })

});