(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsTypeIs"] = factory();
	else
		root["jsTypeIs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst jsTypes = [\n  'String',\n  'Number',\n  'Undefined',\n  'Function',\n  'Object',\n  'Symbol',\n  'Boolean',\n  'Null',\n  'RegExp',\n  'Error',\n  'EvalError',\n  'RangeError',\n  'ReferenceError',\n  'SyntaxError',\n  'TypeError',\n  'URIError',\n  'Math',\n  'Date',\n  'Array',\n  'Int8Array',\n  'Uint8Array',\n  'Uint8ClampedArray',\n  'Int16Array',\n  'Uint16Array',\n  'Int32Array',\n  'Uint32Array',\n  'Float32Array',\n  'Float64Array',\n  'Map',\n  'Set',\n  'WeakMap',\n  'WeakSet',\n  'ArrayBuffer',\n  'DataView',\n  'JSON',\n  'Promise'\n]\n\n/**\n * return type of value\n * @param  {*}      value\n * @return {string}\n */\nconst jsTypeIs = (value, options = {}) => {\n  let type = Object.prototype.toString.call(value).slice(8, -1)\n\n  if (type === 'Function') {\n    // is class\n    if (/^class\\s/.test(value.toString())) {\n      return value.name\n    }\n\n    let name = value.name\n\n    // build-in type\n    if (jsTypes.find(val => val === name)) {\n      return value.name\n    }\n\n    // Function\n    return type\n  }\n\n  if (type === 'Number') {\n    if (isNaN(value)) type = 'NaN'\n  }\n\n  if (type === 'Error') {\n    return value.name\n  }\n\n  if (type === 'Object') {\n    let constructor = Object.getPrototypeOf(value).constructor\n    if (constructor && !jsTypes.find(val => val === constructor.name)) {\n      return constructor.name\n    }\n  }\n\n  return type\n}\n\nclass Sample {}\n\nconsole.log('expect Sample -> ' + jsTypeIs(new Sample()))\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jsTypeIs);\n\n\n//# sourceURL=webpack://jsTypeIs/./src/index.js?");

/***/ })

/******/ });
});