/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./src/pages/orders.js":
/*!*****************************!*\
  !*** ./src/pages/orders.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ \"./node_modules/firebase/dist/index.esm.js\");\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment/moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/rookasrudzianskas/Documents/React/AMAZON @2/AMAZON @3/AMAZON copy 2 2/src/pages/orders.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n // const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);\n\nvar Orders = /*#__PURE__*/function () {\n  var _s = $RefreshSig$();\n\n  var _ref = (0,_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)(_s( /*#__PURE__*/_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var _useAuthState, _useAuthState2, user;\n\n    return _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _s();\n\n            _useAuthState = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_6__.auth), _useAuthState2 = (0,_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useAuthState, 1), user = _useAuthState2[0]; // const userDisplayName = `${user?.displayName ? user?.displayName : \"Your\"}`;\n            // const stripeOrders = await db.collection('users').doc(user.email).collection('orders').orderBy('timestamp', 'desc').get();\n            // console.log(stripeOrders);\n\n            return _context.abrupt(\"return\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 20,\n                columnNumber: 13\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 9\n            }, _this));\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }), \"hP/7NvzUIXfxIpRVjMlmHSnysKo=\", false, function () {\n    return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState];\n  }));\n\n  return function Orders() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders); // basically node js\n// export async function getServerSideProps(context) {\n//     const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);\n//\n// // Get the user logged in credentials in here\n// const session = auth.user;\n// console.log(\"This is\", session);\n// if(!session) {\n//     return {\n//         props: {}\n//     };\n// }\n// //will get all the ordrrs for the user\n// // firebase db\n// const stripeOrders = await db.collection('users').doc(await session.user.email).collection('orders').orderBy('timestamp', 'desc').get();\n//\n// // stripe orders in here\n// const orders = await Promise.all(\n//     stripeOrders.docs.map(async (order) => ({\n//         id: order.id,\n//         amount: order.data().amount,\n//         amountShipping: order.data().amount_shipping,\n//         images: order.data().images,\n//         timestamp: moment(order.data().timestamp.toDate()).unix(),\n//         items: (\n//             // gets all the items in here\n//             // returs all the information, and the is mapped to the data and is in hte items\n//             await stripe.checkout.sessions.listLineItems(order.id, {\n//                 limit: 100\n//             })\n//         ).data,\n//     }))\n// );\n// let user = auth.onAuthStateChanged(async user => alert(user);\n//\n// return {\n//     props: {\n//         // orders,\n//     }\n// }\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"Orders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVycy5qcz9hZmZkIl0sIm5hbWVzIjpbIk9yZGVycyIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsTUFBTTtBQUFBOztBQUFBLDRZQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw0QkFFSUMsdUVBQVksQ0FBQ0MsMkNBQUQsQ0FGaEIsaU9BRUpDLElBRkksc0JBR1g7QUFDQTtBQUVBOztBQU5XLDBEQVNQO0FBQUEscUNBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDtBQUFBLFlBRU9GLG1FQUZQO0FBQUE7O0FBQUEsa0JBQU5ELE1BQU07QUFBQTtBQUFBO0FBQUEsR0FBWjs7S0FBTUEsTTtBQTJCTiwrREFBZUEsTUFBZixFLENBRUE7QUFDQTtBQUtJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSiIsImZpbGUiOiIuL3NyYy9wYWdlcy9vcmRlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBkYiwge2F1dGh9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQvbW9tZW50XCI7XG5pbXBvcnQge2xvYWRTdHJpcGV9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuLy8gY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5jb25zdCBPcmRlcnMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gICAgLy8gY29uc3QgdXNlckRpc3BsYXlOYW1lID0gYCR7dXNlcj8uZGlzcGxheU5hbWUgPyB1c2VyPy5kaXNwbGF5TmFtZSA6IFwiWW91clwifWA7XG4gICAgLy8gY29uc3Qgc3RyaXBlT3JkZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlci5lbWFpbCkuY29sbGVjdGlvbignb3JkZXJzJykub3JkZXJCeSgndGltZXN0YW1wJywgJ2Rlc2MnKS5nZXQoKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHN0cmlwZU9yZGVycyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgICB7Lyo8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgbXgtYXV0byBwLTEwXCI+Ki99XG4gICAgICAgICAgICB7LyogICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGJvcmRlci1iIG1iLTIgcGItMSBib3JkZXIteWVsbG93LTQwMFwiPntgJHt1c2VyRGlzcGxheU5hbWV9ICR7XCIgXCJ9IE9yZGVycyDwn5GHIGB9IDwvaDE+Ki99XG4gICAgICAgICAgICB7LyogICAge3VzZXIgPyAoKi99XG4gICAgICAgICAgICB7LyogICAgICAgIDxoMj54IE9yZGVyczwvaDI+Ki99XG4gICAgICAgICAgICB7LyogICAgKSA6ICgqL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgPGgyPlBsZWFzZSBzaWduIGluIHRvIHNlZSB5b3VyIG9yZGVyczwvaDI+Ki99XG4gICAgICAgICAgICB7LyogICAgKX0qL31cblxuICAgICAgICAgICAgey8qICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBzcGFjeS15LTRcIj4qL31cblxuICAgICAgICAgICAgey8qICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgey8qPC9tYWluPiovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzO1xuXG4vLyBiYXNpY2FsbHkgbm9kZSBqc1xuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG5cblxuXG5cbiAgICAvLyAgICAgY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuICAgIC8vXG4gICAgLy8gLy8gR2V0IHRoZSB1c2VyIGxvZ2dlZCBpbiBjcmVkZW50aWFscyBpbiBoZXJlXG4gICAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF1dGgudXNlcjtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRoaXMgaXNcIiwgc2Vzc2lvbik7XG4gICAgLy8gaWYoIXNlc3Npb24pIHtcbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAgIHByb3BzOiB7fVxuICAgIC8vICAgICB9O1xuICAgIC8vIH1cbiAgICAvLyAvL3dpbGwgZ2V0IGFsbCB0aGUgb3JkcnJzIGZvciB0aGUgdXNlclxuICAgIC8vIC8vIGZpcmViYXNlIGRiXG4gICAgLy8gY29uc3Qgc3RyaXBlT3JkZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoYXdhaXQgc2Vzc2lvbi51c2VyLmVtYWlsKS5jb2xsZWN0aW9uKCdvcmRlcnMnKS5vcmRlckJ5KCd0aW1lc3RhbXAnLCAnZGVzYycpLmdldCgpO1xuICAgIC8vXG4gICAgLy8gLy8gc3RyaXBlIG9yZGVycyBpbiBoZXJlXG4gICAgLy8gY29uc3Qgb3JkZXJzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgLy8gICAgIHN0cmlwZU9yZGVycy5kb2NzLm1hcChhc3luYyAob3JkZXIpID0+ICh7XG4gICAgLy8gICAgICAgICBpZDogb3JkZXIuaWQsXG4gICAgLy8gICAgICAgICBhbW91bnQ6IG9yZGVyLmRhdGEoKS5hbW91bnQsXG4gICAgLy8gICAgICAgICBhbW91bnRTaGlwcGluZzogb3JkZXIuZGF0YSgpLmFtb3VudF9zaGlwcGluZyxcbiAgICAvLyAgICAgICAgIGltYWdlczogb3JkZXIuZGF0YSgpLmltYWdlcyxcbiAgICAvLyAgICAgICAgIHRpbWVzdGFtcDogbW9tZW50KG9yZGVyLmRhdGEoKS50aW1lc3RhbXAudG9EYXRlKCkpLnVuaXgoKSxcbiAgICAvLyAgICAgICAgIGl0ZW1zOiAoXG4gICAgLy8gICAgICAgICAgICAgLy8gZ2V0cyBhbGwgdGhlIGl0ZW1zIGluIGhlcmVcbiAgICAvLyAgICAgICAgICAgICAvLyByZXR1cnMgYWxsIHRoZSBpbmZvcm1hdGlvbiwgYW5kIHRoZSBpcyBtYXBwZWQgdG8gdGhlIGRhdGEgYW5kIGlzIGluIGh0ZSBpdGVtc1xuICAgIC8vICAgICAgICAgICAgIGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5saXN0TGluZUl0ZW1zKG9yZGVyLmlkLCB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxpbWl0OiAxMDBcbiAgICAvLyAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgKS5kYXRhLFxuICAgIC8vICAgICB9KSlcbiAgICAvLyApO1xuXG4gICAgLy8gbGV0IHVzZXIgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZChhc3luYyB1c2VyID0+IGFsZXJ0KHVzZXIpO1xuICAgIC8vXG4gICAgLy8gcmV0dXJuIHtcbiAgICAvLyAgICAgcHJvcHM6IHtcbiAgICAvLyAgICAgICAgIC8vIG9yZGVycyxcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/orders.js\n");

/***/ })

});