/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/chapter01/OOP-package.ts":
/*!**************************************!*\
  !*** ./src/chapter01/OOP-package.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/**\r\n * 封装，public protected private\r\n */\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\n// 父类 \r\nvar People = /** @class */ (function () {\r\n    function People(name, age) {\r\n        this.name = name;\r\n        this.age = age;\r\n        this.weight = 120;\r\n    }\r\n    People.prototype.eat = function () {\r\n        console.log(this.name + \" eat something.\");\r\n    };\r\n    People.prototype.speak = function () {\r\n        console.log(\"my name is \" + this.name + \", age \" + this.age);\r\n    };\r\n    return People;\r\n}());\r\n// 子类\r\nvar Student = /** @class */ (function (_super) {\r\n    __extends(Student, _super);\r\n    function Student(name, age, number) {\r\n        var _this = _super.call(this, name, age) || this;\r\n        _this.number = number;\r\n        _this.girlfriend = 'someone';\r\n        return _this;\r\n    }\r\n    Student.prototype.study = function () {\r\n        console.log(this.name + \" is studying.\");\r\n    };\r\n    Student.prototype.getWeight = function () {\r\n        console.log(\"weight \" + this.weight);\r\n    };\r\n    return Student;\r\n}(People));\r\nexports[\"default\"] = Student;\r\n\n\n//# sourceURL=webpack:///./src/chapter01/OOP-package.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _OOPPackage = __webpack_require__(/*! ./chapter01/OOP-package.ts */ \"./src/chapter01/OOP-package.ts\");\n\nvar _OOPPackage2 = _interopRequireDefault(_OOPPackage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar xiaoming = new _OOPPackage2.default('xiaoming', 17, 'S9'); // // 创建类和示例\n// import Person from './chapter01/OOP-exp'\n\n// // 创建实例 OOP-exp\n// let MissYang = new Person('yang', 26)\n\n// // 实例调用方法\n// MissYang.speak()\n\n\n// // 继承 OOP-extends\n// import Student from './chapter01/OOP-extends'\n\n// // 创建 Student 实例\n// let xiaoming = new Student('xiaoming', 12, 'S1')\n\n// // 调用自身方法\n// xiaoming.study()\n\n// // 调用父类方法\n// xiaoming.speak()\n\n\n// 封装 OOP-package\n\nxiaoming.getWeight();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });