/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/success",{

/***/ "./src/pages/success.js":
/*!******************************!*\
  !*** ./src/pages/success.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/rookasrudzianskas/Documents/React/AMAZON @2/AMAZON @3/AMAZON copy 2 2/src/pages/success.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Success = function Success() {\n  _s();\n\n  var _useAuthState = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_6__.auth),\n      _useAuthState2 = (0,_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useAuthState, 1),\n      user = _useAuthState2[0];\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_8__.selectItems),\n      _useSelector2 = (0,_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSelector, 1),\n      items = _useSelector2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"bg-gray-100 h-screen shadow-2xl\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"max-w-screen-lg mx-auto\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-10 bg-white\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"flex items-center space-x-2 mb-5\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.CheckCircleIcon, {\n            className: \"text-green-500 h-10\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-3xl\",\n            children: \"Thanks \".concat(user !== null && user !== void 0 && user.displayName ? user === null || user === void 0 ? void 0 : user.displayName : 'you', \", your order has been confirmed!\")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"Thank you, \".concat(user !== null && user !== void 0 && user.displayName ? user === null || user === void 0 ? void 0 : user.displayName : 'you', \" for shopping with us. We will send a confirmation email, then the \").concat(items !== null && items !== void 0 && items.length ? items === null || items === void 0 ? void 0 : items.length : \"\", \" items has shipped, if you would like to check the status of order(s) please press the link below.\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Success, \"MbFQsWDSv+a/bK8qhgaYMAsdh7s=\", false, function () {\n  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector];\n});\n\n_c = Success;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Success);\n\nvar _c;\n\n$RefreshReg$(_c, \"Success\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N1Y2Nlc3MuanM/ZmRiYiJdLCJuYW1lcyI6WyJTdWNjZXNzIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwiaXRlbXMiLCJkaXNwbGF5TmFtZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsc0JBQ0hDLHVFQUFZLENBQUNDLDJDQUFELENBRFQ7QUFBQTtBQUFBLE1BQ1hDLElBRFc7O0FBQUEscUJBRUZDLHdEQUFXLENBQUNDLDREQUFELENBRlQ7QUFBQTtBQUFBLE1BRVhDLEtBRlc7O0FBSWxCLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsNEJBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBR0k7QUFBTSxlQUFTLEVBQUMseUJBQWhCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQUEsa0NBQ0ksOERBQUMsbUVBQUQ7QUFBaUIscUJBQVMsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSSxxQkFBUyxFQUFDLFVBQWQ7QUFBQSx1Q0FBb0NILElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosSUFBQUEsSUFBSSxDQUFFSSxXQUFOLEdBQW9CSixJQUFwQixhQUFvQkEsSUFBcEIsdUJBQW9CQSxJQUFJLENBQUVJLFdBQTFCLEdBQXdDLEtBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFNSTtBQUFBLHlDQUNtQkosSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixJQUFBQSxJQUFJLENBQUVJLFdBQU4sR0FBb0JKLElBQXBCLGFBQW9CQSxJQUFwQix1QkFBb0JBLElBQUksQ0FBRUksV0FBMUIsR0FBd0MsS0FEM0QsZ0ZBQ3NJRCxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLElBQUFBLEtBQUssQ0FBRUUsTUFBUCxHQUFnQkYsS0FBaEIsYUFBZ0JBLEtBQWhCLHVCQUFnQkEsS0FBSyxDQUFFRSxNQUF2QixHQUFnQyxFQUR0SztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBdEJEOztHQUFNUixPO1VBQ2FDLG1FLEVBQ0NHLG9EOzs7S0FGZEosTztBQXdCTiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9zdWNjZXNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQge0NoZWNrQ2lyY2xlSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcbmltcG9ydCB7YXV0aH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7c2VsZWN0SXRlbXN9IGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcblxuY29uc3QgU3VjY2VzcyA9ICgpID0+IHtcbiAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gICAgY29uc3QgW2l0ZW1zXSA9IHVzZVNlbGVjdG9yKHNlbGVjdEl0ZW1zKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgaC1zY3JlZW4gc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTEwIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZUljb24gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgaC0xMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj57YFRoYW5rcyAke3VzZXI/LmRpc3BsYXlOYW1lID8gdXNlcj8uZGlzcGxheU5hbWUgOiAneW91J30sIHlvdXIgb3JkZXIgaGFzIGJlZW4gY29uZmlybWVkIWB9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFRoYW5rIHlvdSwgJHt1c2VyPy5kaXNwbGF5TmFtZSA/IHVzZXI/LmRpc3BsYXlOYW1lIDogJ3lvdSd9IGZvciBzaG9wcGluZyB3aXRoIHVzLiBXZSB3aWxsIHNlbmQgYSBjb25maXJtYXRpb24gZW1haWwsIHRoZW4gdGhlICR7aXRlbXM/Lmxlbmd0aCA/IGl0ZW1zPy5sZW5ndGggOiBcIlwiIH0gaXRlbXMgaGFzIHNoaXBwZWQsIGlmIHlvdSB3b3VsZCBsaWtlIHRvIGNoZWNrIHRoZSBzdGF0dXMgb2Ygb3JkZXIocykgcGxlYXNlIHByZXNzIHRoZSBsaW5rIGJlbG93LmB9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/success.js\n");

/***/ })

});