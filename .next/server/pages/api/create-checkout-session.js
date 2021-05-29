/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "./src/pages/api/create-checkout-session.js":
/*!**************************************************!*\
  !*** ./src/pages/api/create-checkout-session.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//everything in api, is backend code\n// the secret key is have to be kept secret\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY); // then we get request, we access the items\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  // this is going to be called then we his this endpoint  .../api-create-checkout-session\n  // this will pull out this data from the request body\n  const {\n    items,\n    email\n  } = req.body;\n  console.log(items);\n  console.log(email);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzPzg3M2IiXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsInJlcSIsInJlcyIsIml0ZW1zIiwiZW1haWwiLCJib2R5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBUCxDQUFrQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUE5QixDQUFmLEMsQ0FDQTs7O0FBRUEsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CO0FBQ0E7QUFDQSxRQUFNO0FBQUNDLFNBQUQ7QUFBUUM7QUFBUixNQUFpQkgsR0FBRyxDQUFDSSxJQUEzQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUVILENBUEQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9ldmVyeXRoaW5nIGluIGFwaSwgaXMgYmFja2VuZCBjb2RlXG4vLyB0aGUgc2VjcmV0IGtleSBpcyBoYXZlIHRvIGJlIGtlcHQgc2VjcmV0XG5jb25zdCBzdHJpcGUgPSByZXF1aXJlKCdzdHJpcGUnKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG4vLyB0aGVuIHdlIGdldCByZXF1ZXN0LCB3ZSBhY2Nlc3MgdGhlIGl0ZW1zXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIC8vIHRoaXMgaXMgZ29pbmcgdG8gYmUgY2FsbGVkIHRoZW4gd2UgaGlzIHRoaXMgZW5kcG9pbnQgIC4uLi9hcGktY3JlYXRlLWNoZWNrb3V0LXNlc3Npb25cbiAgICAvLyB0aGlzIHdpbGwgcHVsbCBvdXQgdGhpcyBkYXRhIGZyb20gdGhlIHJlcXVlc3QgYm9keVxuICAgIGNvbnN0IHtpdGVtcywgZW1haWx9ID0gcmVxLmJvZHk7XG4gICAgY29uc29sZS5sb2coaXRlbXMpO1xuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcblxufTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/create-checkout-session.js\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();