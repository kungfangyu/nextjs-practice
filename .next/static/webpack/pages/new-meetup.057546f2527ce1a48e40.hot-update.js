webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_fangyugong_Desktop_react_course_2021_next_js_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_fangyugong_Desktop_react_course_2021_next_js_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_fangyugong_Desktop_react_course_2021_next_js_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_fangyugong_Desktop_react_course_2021_next_js_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\n\n\n\nvar _jsxFileName = \"/Users/fangyugong/Desktop/react-course-2021/next-js-practice/pages/new-meetup/index.js\";\n\n/*\n * @Date: 2021-10-18 13:46:30\n * @LastEditors: Fane Kung\n * @LastEditTime: 2021-10-22 10:26:45\n * @FilePath: /next-js-practice/pages/new-meetup/index.js\n */\n\n\n\nfunction NewMeetupPage() {\n  function addMeetupHandler(_x) {\n    return _addMeetupHandler.apply(this, arguments);\n  }\n\n  function _addMeetupHandler() {\n    var _s = $RefreshSig$();\n\n    _addMeetupHandler = Object(_Users_fangyugong_Desktop_react_course_2021_next_js_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_s( /*#__PURE__*/_Users_fangyugong_Desktop_react_course_2021_next_js_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(enteredMeetupData) {\n      var response, data, router;\n      return _Users_fangyugong_Desktop_react_course_2021_next_js_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _s();\n\n              _context.next = 3;\n              return fetch('/api/new-meetup', {\n                method: 'POST',\n                body: JSON.stringify(enteredMeetupData),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              data = _context.sent;\n              console.log(data);\n              router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n              router.push('/');\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }), \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n      return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n    }));\n    return _addMeetupHandler.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onAddMeetup: addMeetupHandler\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 7\n  }, this);\n}\n\n_c = NewMeetupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewMeetupPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewMeetupPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcz84NDNhIl0sIm5hbWVzIjpbIk5ld01lZXR1cFBhZ2UiLCJhZGRNZWV0dXBIYW5kbGVyIiwiZW50ZXJlZE1lZXR1cERhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFBQSxXQUNSQyxnQkFEUTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSw4VkFDdkIsaUJBQWlDQyxpQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFFeUJDLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUM5Q0Msc0JBQU0sRUFBRSxNQURzQztBQUU5Q0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLGlCQUFmLENBRndDO0FBRzlDTSx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFIcUMsZUFBcEIsQ0FGOUI7O0FBQUE7QUFFUUMsc0JBRlI7QUFBQTtBQUFBLHFCQVVxQkEsUUFBUSxDQUFDQyxJQUFULEVBVnJCOztBQUFBO0FBVVFDLGtCQVZSO0FBWUVDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUVNRyxvQkFkUixHQWNpQkMsNkRBQVMsRUFkMUI7QUFlRUQsb0JBQU0sQ0FBQ0UsSUFBUCxDQUFZLEdBQVo7O0FBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEdUI7QUFBQSxjQWVORCxxREFmTTtBQUFBO0FBQUE7QUFBQTs7QUFrQnZCLHNCQUNJLHFFQUFDLHlFQUFEO0FBQWUsZUFBVyxFQUFFZDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHRDs7S0FyQlFELGE7QUF1Qk1BLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGF0ZTogMjAyMS0xMC0xOCAxMzo0NjozMFxuICogQExhc3RFZGl0b3JzOiBGYW5lIEt1bmdcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMTAtMjIgMTA6MjY6NDVcbiAqIEBGaWxlUGF0aDogL25leHQtanMtcHJhY3RpY2UvcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qc1xuICovXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybSdcblxuZnVuY3Rpb24gTmV3TWVldHVwUGFnZSgpIHtcbiAgYXN5bmMgZnVuY3Rpb24gYWRkTWVldHVwSGFuZGxlciAoZW50ZXJlZE1lZXR1cERhdGEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlbnRlcmVkTWVldHVwRGF0YSlcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ldy1tZWV0dXAnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICByb3V0ZXIucHVzaCgnLycpXG4gIH1cbiAgcmV0dXJuIChcbiAgICAgIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0dXBIYW5kbGVyfS8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3TWVldHVwUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/new-meetup/index.js\n");

/***/ })

})