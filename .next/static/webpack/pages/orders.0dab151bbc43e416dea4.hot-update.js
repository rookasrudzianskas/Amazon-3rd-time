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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/rookasrudzianskas/Documents/React/AMAZON @2/AMAZON @3/AMAZON copy 2 2/src/pages/orders.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Orders = /*#__PURE__*/function () {\n  var _s = $RefreshSig$();\n\n  var _ref2 = (0,_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)(_s( /*#__PURE__*/_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref) {\n    var orders, _useAuthState, _useAuthState2, user, userDisplayName, stripeOrders;\n\n    return _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _s();\n\n            orders = _ref.orders;\n            _useAuthState = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_6__.auth), _useAuthState2 = (0,_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useAuthState, 1), user = _useAuthState2[0];\n            userDisplayName = \"\".concat(user !== null && user !== void 0 && user.displayName ? user === null || user === void 0 ? void 0 : user.displayName : \"Your\");\n            _context.next = 6;\n            return _firebase__WEBPACK_IMPORTED_MODULE_6__.default.collection('users').doc(user.email).collection('orders').orderBy('timestamp', 'desc').get();\n\n          case 6:\n            stripeOrders = _context.sent;\n            return _context.abrupt(\"return\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 13,\n                columnNumber: 13\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: \"max-w-screen-lg mx-auto p-10\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                  className: \"text-3xl border-b mb-2 pb-1 border-yellow-400\",\n                  children: [\"\".concat(userDisplayName, \" \", \" \", \" Orders \\uD83D\\uDC47 \"), \" \"]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 15,\n                  columnNumber: 17\n                }, _this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                  children: \"x Orders\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 17,\n                  columnNumber: 21\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                  children: \"Please sign in to see your orders\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 19,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                  className: \"mt-5 spacy-y-4\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 22,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 14,\n                columnNumber: 13\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 9\n            }, _this));\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }), \"hP/7NvzUIXfxIpRVjMlmHSnysKo=\", false, function () {\n    return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState];\n  }));\n\n  return function Orders(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders); // import React from 'react';\n// import Header from \"../components/Header\";\n// import db, {auth} from \"../../firebase\";\n// import {useAuthState} from \"react-firebase-hooks/auth\";\n// import firebase from \"firebase\";\n// import moment from \"moment/moment\";\n// import {loadStripe} from \"@stripe/stripe-js\";\n// // const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);\n//\n// const Orders = async () => {\n//\n//     const [user] = useAuthState(auth);\n//     // const userDisplayName = `${user?.displayName ? user?.displayName : \"Your\"}`;\n//     // const stripeOrders = await db.collection('users').doc(user.email).collection('orders').orderBy('timestamp', 'desc').get();\n//\n//     // console.log(stripeOrders);\n//\n//     return (\n//         <div>\n//             <Header/>\n//             {/*<main className=\"max-w-screen-lg mx-auto p-10\">*/}\n//             {/*    <h1 className=\"text-3xl border-b mb-2 pb-1 border-yellow-400\">{`${userDisplayName} ${\" \"} Orders 👇 `} </h1>*/}\n//             {/*    {user ? (*/}\n//             {/*        <h2>x Orders</h2>*/}\n//             {/*    ) : (*/}\n//             {/*        <h2>Please sign in to see your orders</h2>*/}\n//             {/*    )}*/}\n//\n//             {/*    <div className=\"mt-5 spacy-y-4\">*/}\n//\n//             {/*    </div>*/}\n//             {/*</main>*/}\n//         </div>\n//     );\n// };\n//\n// export default Orders;\n//\n// // basically node js\n// // export async function getServerSideProps(context) {\n//\n//\n//\n//\n//     //     const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);\n//     //\n//     // // Get the user logged in credentials in here\n//     // const session = auth.user;\n//     // console.log(\"This is\", session);\n//     // if(!session) {\n//     //     return {\n//     //         props: {}\n//     //     };\n//     // }\n//     // //will get all the ordrrs for the user\n//     // // firebase db\n//     // const stripeOrders = await db.collection('users').doc(await session.user.email).collection('orders').orderBy('timestamp', 'desc').get();\n//     //\n//     // // stripe orders in here\n//     // const orders = await Promise.all(\n//     //     stripeOrders.docs.map(async (order) => ({\n//     //         id: order.id,\n//     //         amount: order.data().amount,\n//     //         amountShipping: order.data().amount_shipping,\n//     //         images: order.data().images,\n//     //         timestamp: moment(order.data().timestamp.toDate()).unix(),\n//     //         items: (\n//     //             // gets all the items in here\n//     //             // returs all the information, and the is mapped to the data and is in hte items\n//     //             await stripe.checkout.sessions.listLineItems(order.id, {\n//     //                 limit: 100\n//     //             })\n//     //         ).data,\n//     //     }))\n//     // );\n//\n//     // let user = auth.onAuthStateChanged(async user => alert(user);\n//     //\n//     // return {\n//     //     props: {\n//     //         // orders,\n//     //     }\n//     // }\n// // }\n\nvar _c;\n\n$RefreshReg$(_c, \"Orders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVycy5qcz9hZmZkIl0sIm5hbWVzIjpbIk9yZGVycyIsIm9yZGVycyIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJ1c2VyIiwidXNlckRpc3BsYXlOYW1lIiwiZGlzcGxheU5hbWUiLCJkYiIsImRvYyIsImVtYWlsIiwiY29sbGVjdGlvbiIsIm9yZGVyQnkiLCJnZXQiLCJzdHJpcGVPcmRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU07QUFBQTs7QUFBQSw2WUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQVFDLGtCQUFSLFFBQVFBLE1BQVI7QUFBQSw0QkFFSUMsdUVBQVksQ0FBQ0MsMkNBQUQsQ0FGaEIsaU9BRUpDLElBRkk7QUFHTEMsMkJBSEssYUFHZ0JELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosSUFBQUEsSUFBSSxDQUFFRSxXQUFOLEdBQW9CRixJQUFwQixhQUFvQkEsSUFBcEIsdUJBQW9CQSxJQUFJLENBQUVFLFdBQTFCLEdBQXdDLE1BSHhEO0FBQUE7QUFBQSxtQkFJZ0JDLHlEQUFBLENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkJKLElBQUksQ0FBQ0ssS0FBaEMsRUFBdUNDLFVBQXZDLENBQWtELFFBQWxELEVBQTREQyxPQUE1RCxDQUFvRSxXQUFwRSxFQUFpRixNQUFqRixFQUF5RkMsR0FBekYsRUFKaEI7O0FBQUE7QUFJTEMsd0JBSks7QUFBQSwwREFNUDtBQUFBLHNDQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFNLHlCQUFTLEVBQUMsOEJBQWhCO0FBQUEsd0NBQ0k7QUFBSSwyQkFBUyxFQUFDLCtDQUFkO0FBQUEsdUNBQWtFUixlQUFsRSxPQUFxRixHQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosRUFFS0QsSUFBSSxnQkFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQyxnQkFHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMUixlQVFJO0FBQUssMkJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIO0FBQUEsWUFFT0YsbUVBRlA7QUFBQTs7QUFBQSxrQkFBTkYsTUFBTTtBQUFBO0FBQUE7QUFBQSxHQUFaOztLQUFNQSxNO0FBd0JOLCtEQUFlQSxNQUFmLEUsQ0EwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL29yZGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IGRiLCB7YXV0aH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcblxuY29uc3QgT3JkZXJzID0gYXN5bmMgKHtvcmRlcnN9KSA9PiB7XG5cbiAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gICAgY29uc3QgdXNlckRpc3BsYXlOYW1lID0gYCR7dXNlcj8uZGlzcGxheU5hbWUgPyB1c2VyPy5kaXNwbGF5TmFtZSA6IFwiWW91clwifWA7XG4gICAgY29uc3Qgc3RyaXBlT3JkZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlci5lbWFpbCkuY29sbGVjdGlvbignb3JkZXJzJykub3JkZXJCeSgndGltZXN0YW1wJywgJ2Rlc2MnKS5nZXQoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgbXgtYXV0byBwLTEwXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGJvcmRlci1iIG1iLTIgcGItMSBib3JkZXIteWVsbG93LTQwMFwiPntgJHt1c2VyRGlzcGxheU5hbWV9ICR7XCIgXCJ9IE9yZGVycyDwn5GHIGB9IDwvaDE+XG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxoMj54IE9yZGVyczwvaDI+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGgyPlBsZWFzZSBzaWduIGluIHRvIHNlZSB5b3VyIG9yZGVyczwvaDI+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBzcGFjeS15LTRcIj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuLy8gaW1wb3J0IGRiLCB7YXV0aH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XG4vLyBpbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcbi8vIGltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcbi8vIGltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudC9tb21lbnRcIjtcbi8vIGltcG9ydCB7bG9hZFN0cmlwZX0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG4vLyAvLyBjb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG4vL1xuLy8gY29uc3QgT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuLy9cbi8vICAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4vLyAgICAgLy8gY29uc3QgdXNlckRpc3BsYXlOYW1lID0gYCR7dXNlcj8uZGlzcGxheU5hbWUgPyB1c2VyPy5kaXNwbGF5TmFtZSA6IFwiWW91clwifWA7XG4vLyAgICAgLy8gY29uc3Qgc3RyaXBlT3JkZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlci5lbWFpbCkuY29sbGVjdGlvbignb3JkZXJzJykub3JkZXJCeSgndGltZXN0YW1wJywgJ2Rlc2MnKS5nZXQoKTtcbi8vXG4vLyAgICAgLy8gY29uc29sZS5sb2coc3RyaXBlT3JkZXJzKTtcbi8vXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgIDxIZWFkZXIvPlxuLy8gICAgICAgICAgICAgey8qPG1haW4gY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIG14LWF1dG8gcC0xMFwiPiovfVxuLy8gICAgICAgICAgICAgey8qICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBib3JkZXItYiBtYi0yIHBiLTEgYm9yZGVyLXllbGxvdy00MDBcIj57YCR7dXNlckRpc3BsYXlOYW1lfSAke1wiIFwifSBPcmRlcnMg8J+RhyBgfSA8L2gxPiovfVxuLy8gICAgICAgICAgICAgey8qICAgIHt1c2VyID8gKCovfVxuLy8gICAgICAgICAgICAgey8qICAgICAgICA8aDI+eCBPcmRlcnM8L2gyPiovfVxuLy8gICAgICAgICAgICAgey8qICAgICkgOiAoKi99XG4vLyAgICAgICAgICAgICB7LyogICAgICAgIDxoMj5QbGVhc2Ugc2lnbiBpbiB0byBzZWUgeW91ciBvcmRlcnM8L2gyPiovfVxuLy8gICAgICAgICAgICAgey8qICAgICl9Ki99XG4vL1xuLy8gICAgICAgICAgICAgey8qICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBzcGFjeS15LTRcIj4qL31cbi8vXG4vLyAgICAgICAgICAgICB7LyogICAgPC9kaXY+Ki99XG4vLyAgICAgICAgICAgICB7Lyo8L21haW4+Ki99XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9O1xuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IE9yZGVycztcbi8vXG4vLyAvLyBiYXNpY2FsbHkgbm9kZSBqc1xuLy8gLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vL1xuLy9cbi8vXG4vL1xuLy8gICAgIC8vICAgICBjb25zdCBzdHJpcGUgPSByZXF1aXJlKCdzdHJpcGUnKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG4vLyAgICAgLy9cbi8vICAgICAvLyAvLyBHZXQgdGhlIHVzZXIgbG9nZ2VkIGluIGNyZWRlbnRpYWxzIGluIGhlcmVcbi8vICAgICAvLyBjb25zdCBzZXNzaW9uID0gYXV0aC51c2VyO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiVGhpcyBpc1wiLCBzZXNzaW9uKTtcbi8vICAgICAvLyBpZighc2Vzc2lvbikge1xuLy8gICAgIC8vICAgICByZXR1cm4ge1xuLy8gICAgIC8vICAgICAgICAgcHJvcHM6IHt9XG4vLyAgICAgLy8gICAgIH07XG4vLyAgICAgLy8gfVxuLy8gICAgIC8vIC8vd2lsbCBnZXQgYWxsIHRoZSBvcmRycnMgZm9yIHRoZSB1c2VyXG4vLyAgICAgLy8gLy8gZmlyZWJhc2UgZGJcbi8vICAgICAvLyBjb25zdCBzdHJpcGVPcmRlcnMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhhd2FpdCBzZXNzaW9uLnVzZXIuZW1haWwpLmNvbGxlY3Rpb24oJ29yZGVycycpLm9yZGVyQnkoJ3RpbWVzdGFtcCcsICdkZXNjJykuZ2V0KCk7XG4vLyAgICAgLy9cbi8vICAgICAvLyAvLyBzdHJpcGUgb3JkZXJzIGluIGhlcmVcbi8vICAgICAvLyBjb25zdCBvcmRlcnMgPSBhd2FpdCBQcm9taXNlLmFsbChcbi8vICAgICAvLyAgICAgc3RyaXBlT3JkZXJzLmRvY3MubWFwKGFzeW5jIChvcmRlcikgPT4gKHtcbi8vICAgICAvLyAgICAgICAgIGlkOiBvcmRlci5pZCxcbi8vICAgICAvLyAgICAgICAgIGFtb3VudDogb3JkZXIuZGF0YSgpLmFtb3VudCxcbi8vICAgICAvLyAgICAgICAgIGFtb3VudFNoaXBwaW5nOiBvcmRlci5kYXRhKCkuYW1vdW50X3NoaXBwaW5nLFxuLy8gICAgIC8vICAgICAgICAgaW1hZ2VzOiBvcmRlci5kYXRhKCkuaW1hZ2VzLFxuLy8gICAgIC8vICAgICAgICAgdGltZXN0YW1wOiBtb21lbnQob3JkZXIuZGF0YSgpLnRpbWVzdGFtcC50b0RhdGUoKSkudW5peCgpLFxuLy8gICAgIC8vICAgICAgICAgaXRlbXM6IChcbi8vICAgICAvLyAgICAgICAgICAgICAvLyBnZXRzIGFsbCB0aGUgaXRlbXMgaW4gaGVyZVxuLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJldHVycyBhbGwgdGhlIGluZm9ybWF0aW9uLCBhbmQgdGhlIGlzIG1hcHBlZCB0byB0aGUgZGF0YSBhbmQgaXMgaW4gaHRlIGl0ZW1zXG4vLyAgICAgLy8gICAgICAgICAgICAgYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmxpc3RMaW5lSXRlbXMob3JkZXIuaWQsIHtcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgbGltaXQ6IDEwMFxuLy8gICAgIC8vICAgICAgICAgICAgIH0pXG4vLyAgICAgLy8gICAgICAgICApLmRhdGEsXG4vLyAgICAgLy8gICAgIH0pKVxuLy8gICAgIC8vICk7XG4vL1xuLy8gICAgIC8vIGxldCB1c2VyID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoYXN5bmMgdXNlciA9PiBhbGVydCh1c2VyKTtcbi8vICAgICAvL1xuLy8gICAgIC8vIHJldHVybiB7XG4vLyAgICAgLy8gICAgIHByb3BzOiB7XG4vLyAgICAgLy8gICAgICAgICAvLyBvcmRlcnMsXG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyB9XG4vLyAvLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/orders.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _asyncToGenerator; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanM/YWUwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\n");

/***/ })

});