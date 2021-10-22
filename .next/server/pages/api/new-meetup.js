module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * @Date: 2021-10-21 15:25:47\n * @LastEditors: Fane Kung\n * @LastEditTime: 2021-10-21 17:32:28\n * @FilePath: /next-js-practice/pages/api/new-meetup.js\n */\n // /api/new-meetup\n// /POST /api/new-meetup\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const data = req.body; // const { title, image, address, description } = data;\n\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://Fane:ATFDyq3JQ0bkTuiN@cluster0.9rbz6.mongodb.net/meetups?retryWrites=true&w=majority');\n    const db = client.db();\n    const meetupsCollection = db.collection('meetups'); //也可以跟資料庫名稱一樣（nextPracticeMeetups）\n\n    const result = await meetupsCollection.insertOne(data); // mongodb的內置查詢命令之一用於在集合中插入一個新的文檔（數據）\n\n    console.log(result);\n    client.close(); //關閉數據連接\n\n    res.status(201).json({\n      message: 'Meetup inserted!'\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBO0FBQ0E7O0FBRUEsZUFBZUEsT0FBZixDQUF3QkMsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQW1DO0FBQ2pDLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQWxCLEVBQTBCO0FBQ3hCLFVBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQixDQUR3QixDQUd4Qjs7QUFFQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQixvR0FBcEIsQ0FBckI7QUFDQSxVQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBRUEsVUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUIsQ0FSd0IsQ0FRNEI7O0FBRXBELFVBQU1DLE1BQU0sR0FBRyxNQUFNRixpQkFBaUIsQ0FBQ0csU0FBbEIsQ0FBNEJULElBQTVCLENBQXJCLENBVndCLENBVStCOztBQUV2RFUsV0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFFQU4sVUFBTSxDQUFDVSxLQUFQLEdBZHdCLENBY1Q7O0FBRWZkLE9BQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBQXJCO0FBQ0Q7QUFDRjs7QUFHY25CLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQERhdGU6IDIwMjEtMTAtMjEgMTU6MjU6NDdcbiAqIEBMYXN0RWRpdG9yczogRmFuZSBLdW5nXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTEwLTIxIDE3OjMyOjI4XG4gKiBARmlsZVBhdGg6IC9uZXh0LWpzLXByYWN0aWNlL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzXG4gKi9cblxuXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuLy8gL2FwaS9uZXctbWVldHVwXG4vLyAvUE9TVCAvYXBpL25ldy1tZWV0dXBcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlciggcmVxLCByZXMgKSB7XG4gIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgIC8vIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vRmFuZTpBVEZEeXEzSlEwYmtUdWlOQGNsdXN0ZXIwLjlyYno2Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JylcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7IC8v5Lmf5Y+v5Lul6Lef6LOH5paZ5bqr5ZCN56ix5LiA5qij77yIbmV4dFByYWN0aWNlTWVldHVwc++8iVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpIC8vIG1vbmdvZGLnmoTlhafnva7mn6XoqaLlkb3ku6TkuYvkuIDnlKjmlrzlnKjpm4blkIjkuK3mj5LlhaXkuIDlgIvmlrDnmoTmlofmqpTvvIjmlbjmk5rvvIlcblxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICBjbGllbnQuY2xvc2UoKSAvL+mXnOmWieaVuOaTmumAo+aOpVxuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6ICdNZWV0dXAgaW5zZXJ0ZWQhJ30pXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });