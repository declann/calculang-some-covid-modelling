(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requiredArgs; });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingZeros; });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toDate; });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toInteger; });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (formatters);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startOfUTCWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startOfUTCISOWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(1, arguments);
  var weekStartsOn = 1;
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildLocalizeFn; });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildMatchFn; });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isProtectedDayOfYearToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isProtectedWeekYearToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return throwProtectedError; });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUTCWeekYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUTCISOWeekYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildFormatLongFn; });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isSameDay; });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(2, arguments);
  var dateLeftStartOfDay = Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDateLeft);
  var dateRightStartOfDay = Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startOfDay; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("iso_code,continent,location,date,total_cases,new_cases,new_cases_smoothed,total_deaths,new_deaths,new_deaths_smoothed,total_cases_per_million,new_cases_per_million,new_cases_smoothed_per_million,total_deaths_per_million,new_deaths_per_million,new_deaths_smoothed_per_million,reproduction_rate,icu_patients,icu_patients_per_million,hosp_patients,hosp_patients_per_million,weekly_icu_admissions,weekly_icu_admissions_per_million,weekly_hosp_admissions,weekly_hosp_admissions_per_million,new_tests,total_tests,total_tests_per_thousand,new_tests_per_thousand,new_tests_smoothed,new_tests_smoothed_per_thousand,positive_rate,tests_per_case,tests_units,total_vaccinations,people_vaccinated,people_fully_vaccinated,total_boosters,new_vaccinations,new_vaccinations_smoothed,total_vaccinations_per_hundred,people_vaccinated_per_hundred,people_fully_vaccinated_per_hundred,total_boosters_per_hundred,new_vaccinations_smoothed_per_million,new_people_vaccinated_smoothed,new_people_vaccinated_smoothed_per_hundred,stringency_index,population,population_density,median_age,aged_65_older,aged_70_older,gdp_per_capita,extreme_poverty,cardiovasc_death_rate,diabetes_prevalence,female_smokers,male_smokers,handwashing_facilities,hospital_beds_per_thousand,life_expectancy,human_development_index,excess_mortality_cumulative_absolute,excess_mortality_cumulative,excess_mortality,excess_mortality_cumulative_per_million\r\nIRL,Europe,Ireland,2020-02-29,1.0,1.0,,,,,0.201,0.201,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,-428.2,-7.1,-4.43,-85.9338249342151\r\nIRL,Europe,Ireland,2020-03-01,1.0,0.0,,,,,0.201,0.0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-02,1.0,0.0,,,,,0.201,0.0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-03,2.0,1.0,,,,,0.401,0.201,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-04,6.0,4.0,,,,,1.204,0.803,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-05,6.0,0.0,0.857,,,,1.204,0.0,0.172,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-06,18.0,12.0,2.571,,,,3.612,2.408,0.516,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-07,18.0,0.0,2.429,,,,3.612,0.0,0.487,,,,,,,18.0,3.612,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-08,19.0,1.0,2.571,,,,3.813,0.201,0.516,,,,,,,17.0,3.412,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-09,21.0,2.0,2.857,,,,4.214,0.401,0.573,,,,,,,18.0,3.612,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-10,34.0,13.0,4.571,,,,6.823,2.609,0.917,,,,,,,26.0,5.218,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-11,43.0,9.0,5.286,1.0,1.0,0.143,8.63,1.806,1.061,0.201,0.201,0.029,,,,32.0,6.422,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-12,43.0,0.0,5.286,1.0,0.0,0.143,8.63,0.0,1.061,0.201,0.0,0.029,,,,44.0,8.83,,,,,,,,,,,,,,,,,,,,,,,,,,,31.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-13,90.0,47.0,10.286,1.0,0.0,0.143,18.062,9.432,2.064,0.201,0.0,0.029,,,,36.0,7.225,,,,,,,,,,,,,,,,,,,,,,,,,,,42.59,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-14,129.0,39.0,15.857,2.0,1.0,0.286,25.889,7.827,3.182,0.401,0.201,0.057,,,,38.0,7.626,,,,,,,,,,,,,,,,,,,,,,,,,,,42.59,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-15,129.0,0.0,15.714,2.0,0.0,0.286,25.889,0.0,3.154,0.401,0.0,0.057,2.5,,,41.0,8.228,,,,,,,,,,,,,,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-16,169.0,40.0,21.143,2.0,0.0,0.286,33.916,8.027,4.243,0.401,0.0,0.057,2.59,,,55.0,11.038,,,,,,,,,,,,,,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-17,223.0,54.0,27.0,2.0,0.0,0.286,44.753,10.837,5.419,0.401,0.0,0.057,2.7,,,61.0,12.242,,,,,,,,,,,,,,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-18,292.0,69.0,35.571,2.0,0.0,0.143,58.6,13.847,7.139,0.401,0.0,0.029,2.79,,,80.0,16.055,,,,,,6457.0,1.296,,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-19,557.0,265.0,73.429,3.0,1.0,0.286,111.782,53.182,14.736,0.602,0.201,0.057,2.85,,,98.0,19.667,,,,,946.0,7403.0,1.486,0.19,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-20,683.0,126.0,84.714,3.0,0.0,0.286,137.069,25.286,17.001,0.602,0.0,0.057,2.65,,,133.0,26.691,,,,,1469.0,8872.0,1.78,0.295,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-21,785.0,102.0,93.714,3.0,0.0,0.143,157.539,20.47,18.807,0.602,0.0,0.029,2.49,,,151.0,30.304,,,,,1564.0,10436.0,2.094,0.314,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-22,906.0,121.0,111.0,4.0,1.0,0.286,181.822,24.283,22.276,0.803,0.201,0.057,2.39,,,177.0,35.521,,,,,978.0,11414.0,2.291,0.196,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-23,1125.0,219.0,136.571,6.0,2.0,0.571,225.772,43.95,27.408,1.204,0.401,0.115,2.28,,,218.0,43.75,,,,,2581.0,13995.0,2.809,0.518,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-24,1329.0,204.0,158.0,7.0,1.0,0.714,266.712,40.94,31.708,1.405,0.201,0.143,2.17,,,239.0,47.964,,,,,1566.0,15561.0,3.123,0.314,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-25,1564.0,235.0,181.714,9.0,2.0,1.0,313.873,47.161,36.468,1.806,0.401,0.201,2.05,,,290.0,58.199,,,,,1775.0,17336.0,3.479,0.356,1554.0,0.312,0.1169,8.6,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-26,1819.0,255.0,180.286,19.0,10.0,2.286,365.048,51.175,36.181,3.813,2.007,0.459,1.92,,,331.0,66.427,,,,,3376.0,20712.0,4.157,0.678,1901.0,0.382,0.0948,10.5,tests performed,,,,,,,,,,,,,,57.41,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-27,2121.0,302.0,205.429,22.0,3.0,2.714,425.655,60.607,41.227,4.415,0.602,0.545,1.87,68.0,13.647,380.0,76.261,,,,,2941.0,23653.0,4.747,0.59,2112.0,0.424,0.0973,10.3,tests performed,,,,,,,,,,,,,,75.93,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-28,2415.0,294.0,232.857,36.0,14.0,4.714,484.657,59.002,46.731,7.225,2.81,0.946,1.81,80.0,16.055,442.0,88.703,,,,,2206.0,25859.0,5.19,0.443,2203.0,0.442,0.1057,9.5,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-29,2615.0,200.0,244.143,46.0,10.0,6.0,524.794,40.137,48.996,9.232,2.007,1.204,1.74,96.0,19.266,513.0,102.952,,,,,1616.0,27475.0,5.514,0.324,2294.0,0.46,0.1064,9.4,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-30,2910.0,295.0,255.0,54.0,8.0,6.857,583.997,59.202,51.175,10.837,1.605,1.376,1.68,107.0,21.473,571.0,114.592,,,,,1397.0,28872.0,5.794,0.28,2125.0,0.426,0.12,8.3,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-31,3235.0,325.0,272.286,71.0,17.0,9.143,649.22,65.223,54.644,14.249,3.412,1.835,1.63,120.0,24.082,596.0,119.609,,,,,1928.0,30800.0,6.181,0.387,2177.0,0.437,0.1251,8.0,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,-417.0,-4.68,0.39,-83.6861396486868\r\nIRL,Europe,Ireland,2020-04-01,3447.0,212.0,269.0,85.0,14.0,10.857,691.765,42.545,53.985,17.058,2.81,2.179,1.57,128.0,25.688,656.0,131.65,,,,,2009.0,32809.0,6.584,0.403,2210.0,0.444,0.1217,8.2,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-02,3849.0,402.0,290.0,98.0,13.0,11.286,772.441,80.676,58.199,19.667,2.609,2.265,1.53,132.0,26.491,655.0,131.449,,,,,1975.0,34784.0,6.981,0.396,2010.0,0.403,0.1443,6.9,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-03,4273.0,424.0,307.429,120.0,22.0,14.0,857.532,85.091,61.697,24.082,4.415,2.81,1.53,137.0,27.494,704.0,141.283,,,,,1857.0,36641.0,7.353,0.373,1855.0,0.372,0.1657,6.0,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-04,4604.0,331.0,312.714,137.0,17.0,14.429,923.959,66.427,62.757,27.494,3.412,2.896,1.54,140.0,28.096,738.0,148.106,,,,,1849.0,38490.0,7.724,0.371,1804.0,0.362,0.1733,5.8,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-05,4994.0,390.0,339.857,158.0,21.0,16.0,1002.227,78.268,68.205,31.708,4.214,3.211,1.55,139.0,27.895,702.0,140.882,,,,,2831.0,41321.0,8.293,0.568,1978.0,0.397,0.1718,5.8,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-06,5364.0,370.0,350.571,174.0,16.0,17.143,1076.481,74.254,70.355,34.919,3.211,3.44,1.55,144.0,28.899,829.0,166.369,,,,,6117.0,47438.0,9.52,1.228,2652.0,0.532,0.1322,7.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-07,5709.0,345.0,353.429,210.0,36.0,19.857,1145.717,69.237,70.928,42.144,7.225,3.985,1.55,143.0,28.698,828.0,166.168,,,,,1853.0,49291.0,9.892,0.372,2642.0,0.53,0.1338,7.5,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-08,6074.0,365.0,375.286,235.0,25.0,21.429,1218.968,73.25,75.315,47.161,5.017,4.3,1.58,146.0,29.3,837.0,167.974,,,,,3728.0,53019.0,10.64,0.748,2887.0,0.579,0.13,7.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-09,6574.0,500.0,389.286,263.0,28.0,23.571,1319.311,100.343,78.124,52.78,5.619,4.73,1.62,151.0,30.304,838.0,168.175,,,,,5487.0,58506.0,11.741,1.101,3389.0,0.68,0.1149,8.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-10,8089.0,1515.0,545.143,287.0,24.0,23.857,1623.351,304.04,109.403,57.597,4.816,4.788,1.7,155.0,31.106,825.0,165.566,,,,,6959.0,65465.0,13.138,1.397,4118.0,0.826,0.1324,7.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-11,8928.0,839.0,617.714,320.0,33.0,26.143,1791.726,168.376,123.967,64.22,6.623,5.247,1.65,155.0,31.106,856.0,171.787,,,,,6990.0,72455.0,14.541,1.403,4852.0,0.974,0.1273,7.9,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-12,9655.0,727.0,665.857,334.0,14.0,25.143,1937.625,145.899,133.628,67.029,2.81,5.046,1.58,148.0,29.702,853.0,171.185,47.0,9.467,494.0,99.105,5722.0,78177.0,15.689,1.148,5265.0,1.057,0.1265,7.9,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-13,10647.0,992.0,754.714,365.0,31.0,27.286,2136.706,199.081,151.461,73.25,6.221,5.476,1.5,143.0,28.698,868.0,174.196,,,,,8427.0,86604.0,17.38,1.691,5595.0,1.123,0.1349,7.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-14,11479.0,832.0,824.286,406.0,41.0,28.0,2303.677,166.971,165.423,81.479,8.228,5.619,1.41,149.0,29.902,868.0,174.196,,,,,4275.0,90879.0,18.238,0.858,5941.0,1.192,0.1387,7.2,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-15,12547.0,1068.0,924.714,444.0,38.0,29.857,2518.01,214.333,185.577,89.105,7.626,5.992,1.32,140.0,28.096,881.0,176.805,,,,,3036.0,93915.0,18.847,0.609,5842.0,1.172,0.1583,6.3,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-16,13271.0,724.0,956.714,486.0,42.0,31.857,2663.306,145.297,191.999,97.533,8.429,6.393,1.2,142.0,28.497,856.0,171.787,,,,,3644.0,97559.0,19.579,0.731,5579.0,1.12,0.1715,5.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-17,13980.0,709.0,841.571,530.0,44.0,34.714,2805.593,142.287,168.892,106.364,8.83,6.967,1.13,137.0,27.494,852.0,170.985,,,,,4311.0,101870.0,20.444,0.865,5201.0,1.044,0.1618,6.2,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-18,14758.0,778.0,832.857,571.0,41.0,35.857,2961.727,156.134,167.143,114.592,8.228,7.196,1.09,134.0,26.892,811.0,162.756,,,,,2253.0,104123.0,20.896,0.452,4524.0,0.908,0.1841,5.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-19,15251.0,493.0,799.429,610.0,39.0,39.429,3060.665,98.938,160.434,122.419,7.827,7.913,1.03,133.0,26.691,816.0,163.76,59.0,11.885,349.0,70.099,2313.0,106436.0,21.36,0.464,4037.0,0.81,0.198,5.0,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-20,15652.0,401.0,715.0,687.0,77.0,46.0,3141.14,80.475,143.491,137.871,15.453,9.232,0.99,139.0,27.895,820.0,164.563,,,,,1626.0,108062.0,21.687,0.326,3065.0,0.615,0.2333,4.3,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-21,16040.0,388.0,651.571,730.0,43.0,46.286,3219.006,77.866,130.761,146.501,8.63,9.289,0.95,133.0,26.691,774.0,155.331,,,,,3757.0,111819.0,22.441,0.754,2991.0,0.6,0.2178,4.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-22,16671.0,631.0,589.143,769.0,39.0,46.429,3345.639,126.633,118.233,154.328,7.827,9.318,0.93,131.0,26.29,778.0,156.134,,,,,5363.0,117182.0,23.517,1.076,3324.0,0.667,0.1772,5.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-23,17607.0,936.0,619.429,794.0,25.0,44.0,3533.482,187.842,124.311,159.345,5.017,8.83,0.9,123.0,24.684,742.0,148.909,,,,,4871.0,122053.0,24.494,0.978,3499.0,0.702,0.177,5.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-24,18184.0,577.0,600.571,1014.0,220.0,69.143,3649.278,115.796,120.526,203.496,44.151,13.876,0.87,118.0,23.681,745.0,149.511,,,,,5580.0,127633.0,25.614,1.12,3680.0,0.739,0.1632,6.1,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-25,18561.0,377.0,543.286,1063.0,49.0,70.286,3724.936,75.659,109.03,213.329,9.834,14.105,0.84,123.0,24.684,736.0,147.705,,,,,5632.0,133265.0,26.744,1.13,4163.0,0.835,0.1305,7.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-26,19262.0,701.0,573.0,1087.0,24.0,68.143,3865.617,140.681,114.993,218.146,4.816,13.675,0.83,120.0,24.082,758.0,152.12,45.0,9.064,306.0,61.437,8598.0,141863.0,28.47,1.725,5061.0,1.016,0.1132,8.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-27,19648.0,386.0,570.857,1102.0,15.0,59.286,3943.082,77.465,114.563,221.156,3.01,11.898,0.78,117.0,23.48,771.0,154.729,,,,,5100.0,146963.0,29.493,1.023,5557.0,1.115,0.1027,9.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-28,19877.0,229.0,548.143,1159.0,57.0,61.286,3989.039,45.957,110.005,232.595,11.439,12.299,0.74,113.0,22.678,753.0,151.117,,,,,6306.0,153269.0,30.759,1.266,5921.0,1.188,0.0926,10.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-29,20253.0,376.0,511.714,1190.0,31.0,60.143,4064.497,75.458,102.694,238.817,6.221,12.07,0.71,103.0,20.671,760.0,152.522,,,,,8159.0,161428.0,32.396,1.637,6321.0,1.269,0.081,12.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-30,20612.0,359.0,429.286,1232.0,42.0,62.571,4136.544,72.046,86.152,247.245,8.429,12.557,0.67,106.0,21.273,736.0,147.705,,,,,8218.0,169646.0,34.046,1.649,6799.0,1.364,0.0631,15.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,488.0,4.25,35.16,97.9348588694464\r\nIRL,Europe,Ireland,2020-05-01,20833.0,221.0,378.429,1265.0,33.0,35.857,4180.895,44.352,75.945,253.868,6.623,7.196,0.66,99.0,19.868,740.0,148.508,,,,,7451.0,177097.0,35.541,1.495,7066.0,1.418,0.0536,18.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-02,21176.0,343.0,373.571,1286.0,21.0,31.857,4249.731,68.835,74.971,258.082,4.214,6.393,0.67,99.0,19.868,705.0,141.484,,,,,12076.0,189173.0,37.964,2.423,7987.0,1.603,0.0468,21.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-03,21506.0,330.0,320.571,1303.0,17.0,30.857,4315.957,66.226,64.334,261.494,3.412,6.193,0.68,93.0,18.664,684.0,137.269,,,262.0,52.574,9799.0,198972.0,39.931,1.967,8158.0,1.637,0.0393,25.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-04,21772.0,266.0,303.429,1319.0,16.0,31.0,4369.34,53.383,60.894,264.705,3.211,6.221,0.67,91.0,18.262,672.0,134.861,,,,,8617.0,207589.0,41.66,1.729,8661.0,1.738,0.035,28.5,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-05,21983.0,211.0,300.857,1339.0,20.0,25.714,4411.684,42.345,60.378,268.719,4.014,5.161,0.65,90.0,18.062,680.0,136.467,,,,,7512.0,215101.0,43.168,1.508,8833.0,1.773,0.0341,29.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-06,22248.0,265.0,285.0,1375.0,36.0,26.429,4464.866,53.182,57.196,275.944,7.225,5.304,0.63,82.0,16.456,657.0,131.851,,,,,7815.0,222916.0,44.736,1.568,8784.0,1.763,0.0324,30.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-07,22385.0,137.0,253.286,1403.0,28.0,24.429,4492.36,27.494,50.831,281.563,5.619,4.902,0.6,76.0,15.252,614.0,123.221,,,,,5703.0,228619.0,45.881,1.145,8425.0,1.691,0.0301,33.3,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-08,22541.0,156.0,244.0,1429.0,26.0,23.429,4523.667,31.307,48.967,286.781,5.218,4.702,0.61,72.0,14.449,585.0,117.401,,,,,4973.0,233592.0,46.879,0.998,8071.0,1.62,0.0302,33.1,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-09,22760.0,219.0,226.286,1446.0,17.0,22.857,4567.618,43.95,45.412,290.192,3.412,4.587,0.63,72.0,14.449,539.0,108.17,,,,,7657.0,241249.0,48.415,1.537,7439.0,1.493,0.0304,32.9,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-10,22996.0,236.0,212.857,1458.0,12.0,22.143,4614.98,47.362,42.717,292.6,2.408,4.444,0.65,72.0,14.449,539.0,108.17,,,163.0,32.632,6517.0,247766.0,49.723,1.308,6971.0,1.399,0.0305,32.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-11,23135.0,139.0,194.714,1467.0,9.0,21.143,4642.875,27.895,39.076,294.407,1.806,4.243,0.65,69.0,13.847,555.0,111.381,,,,,5374.0,253140.0,50.802,1.078,6507.0,1.306,0.0299,33.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-12,23242.0,107.0,179.857,1488.0,21.0,21.286,4664.348,21.473,36.095,298.621,4.214,4.272,0.66,67.0,13.446,512.0,102.751,,,,,6138.0,259278.0,52.034,1.232,6311.0,1.267,0.0285,35.1,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-13,23401.0,159.0,164.714,1497.0,9.0,17.429,4696.257,31.909,33.056,300.427,1.806,3.498,0.66,62.0,12.443,486.0,97.533,,,,,4674.0,263952.0,52.972,0.938,5862.0,1.176,0.0281,35.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-14,23827.0,426.0,206.0,1506.0,9.0,14.714,4781.75,85.492,41.341,302.233,1.806,2.953,0.66,59.0,11.84,459.0,92.115,,,,,6210.0,270162.0,54.218,1.246,5935.0,1.191,0.0347,28.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-15,23956.0,129.0,202.143,1518.0,12.0,12.714,4807.638,25.889,40.567,304.642,2.408,2.552,0.62,56.0,11.238,419.0,84.088,,,,,5699.0,275861.0,55.361,1.144,6038.0,1.212,0.0335,29.9,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-16,24048.0,92.0,184.0,1533.0,15.0,12.429,4826.101,18.463,36.926,307.652,3.01,2.494,0.58,54.0,10.837,386.0,77.465,,,,,6334.0,282195.0,56.633,1.271,5849.0,1.174,0.0315,31.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-17,24112.0,64.0,159.429,1543.0,10.0,12.143,4838.945,12.844,31.995,309.659,2.007,2.437,0.56,51.0,10.235,395.0,79.271,19.0,3.827,109.0,21.956,6457.0,288652.0,57.928,1.296,5841.0,1.172,0.0273,36.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-18,24200.0,88.0,152.143,1547.0,4.0,11.429,4856.606,17.66,30.533,310.462,0.803,2.294,0.55,55.0,11.038,386.0,77.465,,,,,3964.0,292616.0,58.724,0.796,5639.0,1.132,0.027,37.1,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-19,24251.0,51.0,144.143,1561.0,14.0,10.429,4866.841,10.235,28.927,313.271,2.81,2.093,0.53,54.0,10.837,368.0,73.853,,,,,3278.0,295894.0,59.382,0.658,5231.0,1.05,0.0276,36.3,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-20,24315.0,64.0,130.571,1571.0,10.0,10.571,4879.685,12.844,26.204,315.278,2.007,2.122,0.52,49.0,9.834,367.0,73.652,,,,,4764.0,300658.0,60.338,0.956,5244.0,1.052,0.0249,40.2,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-21,24391.0,76.0,80.571,1583.0,12.0,11.0,4894.937,15.252,16.17,317.686,2.408,2.208,0.52,52.0,10.436,315.0,63.216,,,,,5274.0,305932.0,61.396,1.058,5110.0,1.026,0.0158,63.4,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-22,24506.0,115.0,78.571,1592.0,9.0,10.571,4918.016,23.079,15.768,319.492,1.806,2.122,0.53,49.0,9.834,316.0,63.417,,,,,5373.0,311305.0,62.475,1.078,5063.0,1.016,0.0155,64.4,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-23,24582.0,76.0,76.286,1604.0,12.0,10.143,4933.268,15.252,15.309,321.901,2.408,2.036,0.53,51.0,10.235,303.0,60.808,,,,,4276.0,315581.0,63.333,0.858,4769.0,0.957,0.016,62.5,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-24,24639.0,57.0,75.286,1608.0,4.0,9.286,4944.707,11.439,15.109,322.703,0.803,1.864,0.54,49.0,9.834,304.0,61.009,10.0,2.014,97.0,19.539,3509.0,319090.0,64.037,0.704,4348.0,0.873,0.0173,57.8,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-25,24698.0,59.0,71.143,1606.0,-2.0,8.429,4956.547,11.84,14.277,322.302,-0.401,1.691,0.54,48.0,9.633,305.0,61.209,,,,,3529.0,322619.0,64.745,0.708,4286.0,0.86,0.0166,60.2,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-26,24735.0,37.0,69.143,1615.0,9.0,7.714,4963.973,7.425,13.876,324.108,1.806,1.548,0.54,48.0,9.633,287.0,57.597,,,,,3515.0,326134.0,65.451,0.705,4320.0,0.867,0.016,62.5,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-27,24803.0,68.0,69.714,1631.0,16.0,8.571,4977.619,13.647,13.991,327.319,3.211,1.72,0.53,48.0,9.633,263.0,52.78,,,,,3437.0,329571.0,66.14,0.69,4130.0,0.829,0.0169,59.2,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-28,24841.0,38.0,64.286,1639.0,8.0,8.0,4985.246,7.626,12.901,328.925,1.605,1.605,0.52,45.0,9.031,231.0,46.359,,,,,3811.0,333382.0,66.905,0.765,3921.0,0.787,0.0164,61.0,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-29,24876.0,35.0,52.857,1645.0,6.0,7.571,4992.27,7.024,10.608,330.129,1.204,1.519,0.53,42.0,8.429,197.0,39.535,,,,,4364.0,337746.0,67.781,0.876,3777.0,0.758,0.014,71.5,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-30,24929.0,53.0,49.571,1651.0,6.0,6.714,5002.906,10.636,9.948,331.333,1.204,1.347,0.55,36.0,7.225,173.0,34.719,,,,,3423.0,341169.0,68.468,0.687,3655.0,0.734,0.0136,73.7,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-31,24990.0,61.0,50.143,1652.0,1.0,6.286,5015.148,12.242,10.063,331.534,0.201,1.261,0.57,36.0,7.225,184.0,36.926,15.0,3.021,58.0,11.683,3474.0,344643.0,69.165,0.697,3650.0,0.733,0.0137,72.8,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,577.8,4.12,3.51,115.956478390914\r\nIRL,Europe,Ireland,2020-06-01,25062.0,72.0,52.0,1650.0,-2.0,6.286,5029.597,14.449,10.436,331.132,-0.401,1.261,0.56,37.0,7.425,176.0,35.321,,,,,2285.0,346928.0,69.624,0.459,3473.0,0.697,0.015,66.8,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-02,25066.0,4.0,47.286,1658.0,8.0,6.143,5030.4,0.803,9.49,332.738,1.605,1.233,0.53,36.0,7.225,194.0,38.933,,,,,1827.0,348755.0,69.99,0.367,3232.0,0.649,0.0146,68.4,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-03,25111.0,45.0,44.0,1659.0,1.0,4.0,5039.431,9.031,8.83,332.938,0.201,0.803,0.51,37.0,7.425,166.0,33.314,,,,,2486.0,351241.0,70.489,0.499,3096.0,0.621,0.0142,70.4,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-04,25142.0,31.0,43.0,1664.0,5.0,3.571,5045.652,6.221,8.63,333.942,1.003,0.717,0.48,36.0,7.225,154.0,30.906,,,,,3099.0,354340.0,71.111,0.622,2994.0,0.601,0.0144,69.6,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-05,25163.0,21.0,41.0,1670.0,6.0,3.571,5049.867,4.214,8.228,335.146,1.204,0.717,0.46,37.0,7.425,139.0,27.895,,,,,3234.0,357574.0,71.76,0.649,2833.0,0.569,0.0145,69.1,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-06,25183.0,20.0,36.286,1678.0,8.0,3.857,5053.88,4.014,7.282,336.751,1.605,0.774,0.45,36.0,7.225,122.0,24.484,,,,,3106.0,360680.0,72.383,0.623,2787.0,0.559,0.013,76.8,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-07,25201.0,18.0,30.143,1679.0,1.0,3.857,5057.493,3.612,6.049,336.952,0.201,0.774,0.46,34.0,6.823,125.0,25.086,3.0,0.604,25.0,5.036,2828.0,363508.0,72.951,0.568,2695.0,0.541,0.0112,89.4,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-08,25207.0,6.0,20.714,1683.0,4.0,4.714,5058.697,1.204,4.157,337.755,0.803,0.946,0.46,34.0,6.823,122.0,24.484,,,,,1960.0,365468.0,73.344,0.393,2649.0,0.532,0.0078,127.9,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-09,25215.0,8.0,21.286,1691.0,8.0,4.714,5060.302,1.605,4.272,339.36,1.605,0.946,0.47,35.0,7.024,110.0,22.075,,,,,2355.0,367823.0,73.817,0.473,2724.0,0.547,0.0078,128.0,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-10,25231.0,16.0,17.143,1695.0,4.0,5.143,5063.513,3.211,3.44,340.163,0.803,1.032,0.49,29.0,5.82,102.0,20.47,,,,,2675.0,370498.0,74.354,0.537,2751.0,0.552,0.0062,160.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-11,25238.0,7.0,13.714,1703.0,8.0,5.571,5064.918,1.405,2.752,341.769,1.605,1.118,0.5,27.0,5.419,89.0,17.861,,,,,4240.0,374738.0,75.205,0.851,2914.0,0.585,0.0047,212.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-12,25250.0,12.0,12.429,1705.0,2.0,5.0,5067.326,2.408,2.494,342.17,0.401,1.003,0.54,27.0,5.419,79.0,15.854,,,,,3009.0,377747.0,75.809,0.604,2882.0,0.578,0.0043,231.9,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-13,25295.0,45.0,16.0,1705.0,0.0,3.857,5076.357,9.031,3.211,342.17,0.0,0.774,0.6,,,76.0,15.252,,,,,2712.0,380459.0,76.353,0.544,2826.0,0.567,0.0057,176.6,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-14,25303.0,8.0,14.571,1706.0,1.0,3.857,5077.963,1.605,2.924,342.371,0.201,0.774,0.59,27.0,5.419,81.0,16.256,,,30.0,6.043,2512.0,382971.0,76.857,0.504,2780.0,0.558,0.0052,190.8,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-15,25321.0,18.0,16.286,1706.0,0.0,3.286,5081.575,3.612,3.268,342.371,0.0,0.659,0.6,24.0,4.816,78.0,15.654,,,,,1714.0,384685.0,77.201,0.344,2745.0,0.551,0.0059,168.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-16,25334.0,13.0,17.0,1709.0,3.0,2.571,5084.184,2.609,3.412,342.973,0.602,0.516,0.59,20.0,4.014,69.0,13.847,,,,,2112.0,386797.0,77.625,0.424,2711.0,0.544,0.0063,159.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-17,25341.0,7.0,15.714,1710.0,1.0,2.143,5085.589,1.405,3.154,343.173,0.201,0.43,0.57,21.0,4.214,60.0,12.041,,,,,3420.0,390217.0,78.311,0.686,2817.0,0.565,0.0056,179.3,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-18,25355.0,14.0,16.714,1714.0,4.0,1.571,5088.398,2.81,3.354,343.976,0.803,0.315,0.57,21.0,4.214,48.0,9.633,,,,,3359.0,393576.0,78.985,0.674,2691.0,0.54,0.0062,161.0,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-19,25368.0,13.0,16.857,1714.0,0.0,1.286,5091.007,2.609,3.383,343.976,0.0,0.258,0.56,16.0,3.211,44.0,8.83,,,,,3161.0,396737.0,79.62,0.634,2713.0,0.544,0.0062,160.9,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-20,25374.0,6.0,11.286,1715.0,1.0,1.429,5092.211,1.204,2.265,344.177,0.201,0.287,0.56,17.0,3.412,41.0,8.228,,,,,2724.0,399461.0,80.166,0.547,2715.0,0.545,0.0042,240.6,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-21,25379.0,5.0,10.857,1715.0,0.0,1.286,5093.215,1.003,2.179,344.177,0.0,0.258,0.59,16.0,3.211,41.0,8.228,14.0,2.82,13.0,2.619,2159.0,401620.0,80.6,0.433,2664.0,0.535,0.0041,245.4,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-22,25383.0,4.0,8.857,1717.0,2.0,1.571,5094.017,0.803,1.778,344.578,0.401,0.315,0.62,16.0,3.211,43.0,8.63,,,,,1498.0,403118.0,80.9,0.301,2633.0,0.528,0.0034,297.3,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-23,25391.0,8.0,8.143,1720.0,3.0,1.571,5095.623,1.605,1.634,345.18,0.602,0.315,0.67,11.0,2.208,40.0,8.027,,,,,2116.0,405234.0,81.325,0.425,2634.0,0.529,0.0031,323.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-24,25396.0,5.0,7.857,1726.0,6.0,2.286,5096.626,1.003,1.577,346.384,1.204,0.459,0.72,9.0,1.806,37.0,7.425,,,,,3252.0,408486.0,81.977,0.653,2610.0,0.524,0.003,332.2,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-25,25405.0,9.0,7.143,1727.0,1.0,1.857,5098.433,1.806,1.433,346.585,0.201,0.373,0.77,12.0,2.408,30.0,6.021,,,,,2983.0,411469.0,82.576,0.599,2556.0,0.513,0.0028,357.8,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-26,25414.0,9.0,6.571,1730.0,3.0,2.286,5100.239,1.806,1.319,347.187,0.602,0.459,0.84,12.0,2.408,26.0,5.218,,,,,3689.0,415158.0,83.316,0.74,2632.0,0.528,0.0025,400.5,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-27,25437.0,23.0,9.0,1734.0,4.0,2.714,5104.855,4.616,1.806,347.99,0.803,0.545,0.91,11.0,2.208,22.0,4.415,,,,,4007.0,419165.0,84.121,0.804,2815.0,0.565,0.0032,312.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-28,25439.0,2.0,8.571,1735.0,1.0,2.857,5105.256,0.401,1.72,348.191,0.201,0.573,0.93,11.0,2.208,20.0,4.014,4.0,0.806,13.0,2.619,2724.0,421889.0,84.667,0.547,2896.0,0.581,0.003,337.9,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-29,25462.0,23.0,11.286,1735.0,0.0,2.571,5109.872,4.616,2.265,348.191,0.0,0.516,0.98,12.0,2.408,22.0,4.415,,,,,3340.0,425229.0,85.338,0.67,3159.0,0.634,0.0036,279.9,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-30,25473.0,11.0,11.714,1736.0,1.0,2.286,5112.079,2.208,2.351,348.391,0.201,0.459,0.96,13.0,2.609,21.0,4.214,,,,,4591.0,429820.0,86.259,0.921,3512.0,0.705,0.0033,299.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,422.2,2.58,-6.62,84.7297078169678\r\nIRL,Europe,Ireland,2020-07-01,25477.0,4.0,11.571,1738.0,2.0,1.714,5112.882,0.803,2.322,348.793,0.401,0.344,0.95,12.0,2.408,21.0,4.214,,,,,4551.0,434371.0,87.172,0.913,3698.0,0.742,0.0031,319.6,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-02,25489.0,12.0,12.0,1738.0,0.0,1.571,5115.29,2.408,2.408,348.793,0.0,0.315,0.96,10.0,2.007,18.0,3.612,,,,,3792.0,438163.0,87.933,0.761,3813.0,0.765,0.0031,317.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-03,25498.0,9.0,12.0,1740.0,2.0,1.429,5117.096,1.806,2.408,349.194,0.401,0.287,0.97,10.0,2.007,20.0,4.014,,,,,8049.0,446212.0,89.549,1.615,4436.0,0.89,0.0027,369.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-04,25509.0,11.0,10.286,1741.0,1.0,1.0,5119.304,2.208,2.064,349.395,0.201,0.201,1.0,11.0,2.208,22.0,4.415,,,,,8312.0,454524.0,91.217,1.668,5051.0,1.014,0.002,491.1,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-05,25527.0,18.0,12.571,1741.0,0.0,0.857,5122.916,3.612,2.523,349.395,0.0,0.172,1.06,10.0,2.007,20.0,4.014,6.0,1.209,9.0,1.813,7000.0,461524.0,92.621,1.405,5662.0,1.136,0.0022,450.4,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-06,25531.0,4.0,9.857,1741.0,0.0,0.857,5123.719,0.803,1.978,349.395,0.0,0.172,1.06,10.0,2.007,19.0,3.813,,,,,6529.0,468053.0,93.932,1.31,6118.0,1.228,0.0016,620.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-07,25538.0,7.0,9.286,1742.0,1.0,0.857,5125.124,1.405,1.864,349.595,0.201,0.172,1.09,9.0,1.806,20.0,4.014,,,,,6161.0,474214.0,95.168,1.236,6342.0,1.273,0.0015,683.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-08,25542.0,4.0,9.286,1738.0,-4.0,0.0,5125.927,0.803,1.864,348.793,-0.803,0.0,1.17,9.0,1.806,12.0,2.408,,,,,4361.0,478575.0,96.043,0.875,6315.0,1.267,0.0015,680.1,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-09,25565.0,23.0,10.857,1743.0,5.0,0.714,5130.542,4.616,2.179,349.796,1.003,0.143,1.26,9.0,1.806,13.0,2.609,,,,,3945.0,482520.0,96.835,0.792,6337.0,1.272,0.0017,583.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-10,25589.0,24.0,13.0,1744.0,1.0,0.571,5135.359,4.816,2.609,349.997,0.201,0.115,1.3,9.0,1.806,11.0,2.208,,,,,9330.0,491850.0,98.708,1.872,6520.0,1.308,0.002,501.5,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-11,25611.0,22.0,14.571,1746.0,2.0,0.714,5139.774,4.415,2.924,350.398,0.401,0.143,1.3,10.0,2.007,13.0,2.609,,,,,8929.0,500779.0,100.499,1.792,6608.0,1.326,0.0022,453.5,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-12,25628.0,17.0,14.429,1746.0,0.0,0.714,5143.186,3.412,2.896,350.398,0.0,0.143,1.29,11.0,2.208,12.0,2.408,1.0,0.201,4.0,0.806,8717.0,509496.0,102.249,1.749,6853.0,1.375,0.0021,474.9,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-13,25638.0,10.0,15.286,1746.0,0.0,0.714,5145.192,2.007,3.068,350.398,0.0,0.143,1.28,10.0,2.007,11.0,2.208,,,,,7664.0,517160.0,103.787,1.538,7015.0,1.408,0.0022,458.9,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-14,25670.0,32.0,18.857,1746.0,0.0,0.571,5151.614,6.422,3.784,350.398,0.0,0.115,1.29,10.0,2.007,13.0,2.609,,,,,6400.0,523560.0,105.071,1.284,7049.0,1.415,0.0027,373.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-15,25683.0,13.0,20.143,1748.0,2.0,1.429,5154.223,2.609,4.042,350.799,0.401,0.287,1.25,8.0,1.605,12.0,2.408,,,,,4387.0,527947.0,105.952,0.88,7053.0,1.415,0.0029,350.1,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-16,25698.0,15.0,19.0,1749.0,1.0,0.857,5157.234,3.01,3.813,351.0,0.201,0.172,1.22,8.0,1.605,12.0,2.408,,,,,4316.0,532263.0,106.818,0.866,7106.0,1.426,0.0027,374.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-17,25730.0,32.0,20.143,1752.0,3.0,1.143,5163.656,6.422,4.042,351.602,0.602,0.229,1.21,8.0,1.605,12.0,2.408,,,,,9512.0,541775.0,108.727,1.909,7132.0,1.431,0.0028,354.1,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-18,25750.0,20.0,19.857,1753.0,1.0,1.0,5167.669,4.014,3.985,351.803,0.201,0.201,1.17,8.0,1.605,10.0,2.007,,,,,9243.0,551018.0,110.582,1.855,7177.0,1.44,0.0028,361.4,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-19,25760.0,10.0,18.857,1753.0,0.0,1.0,5169.676,2.007,3.784,351.803,0.0,0.201,1.16,9.0,1.806,10.0,2.007,2.0,0.403,7.0,1.41,8630.0,559648.0,112.314,1.732,7165.0,1.438,0.0026,380.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-20,25766.0,6.0,18.286,1753.0,0.0,1.0,5170.88,1.204,3.67,351.803,0.0,0.201,1.17,8.0,1.605,12.0,2.408,,,,,8415.0,568063.0,114.002,1.689,7272.0,1.459,0.0025,397.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-21,25802.0,36.0,18.857,1753.0,0.0,1.0,5178.105,7.225,3.784,351.803,0.0,0.201,1.2,7.0,1.405,13.0,2.609,,,,,6674.0,574737.0,115.342,1.339,7311.0,1.467,0.0026,387.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-22,25819.0,17.0,19.429,1754.0,1.0,0.857,5181.517,3.412,3.899,352.004,0.201,0.172,1.18,6.0,1.204,14.0,2.81,,,,,4619.0,579356.0,116.269,0.927,7344.0,1.474,0.0026,378.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-23,25826.0,7.0,18.286,1763.0,9.0,2.0,5182.921,1.405,3.67,353.81,1.806,0.401,1.16,6.0,1.204,13.0,2.609,,,,,4067.0,583423.0,117.085,0.816,7309.0,1.467,0.0025,399.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-24,25845.0,19.0,16.429,1763.0,0.0,1.571,5186.734,3.813,3.297,353.81,0.0,0.315,1.2,5.0,1.003,11.0,2.208,,,,,8980.0,592403.0,118.887,1.802,7233.0,1.452,0.0023,440.3,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-25,25869.0,24.0,17.0,1764.0,1.0,1.571,5191.551,4.816,3.412,354.01,0.201,0.315,1.25,5.0,1.003,10.0,2.007,,,,,8888.0,601291.0,120.671,1.784,7182.0,1.441,0.0024,422.5,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-26,25881.0,12.0,17.286,1764.0,0.0,1.571,5193.959,2.408,3.469,354.01,0.0,0.315,1.31,5.0,1.003,11.0,2.208,3.0,0.604,14.0,2.82,8016.0,609307.0,122.279,1.609,7094.0,1.424,0.0024,410.4,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-27,25892.0,11.0,18.0,1764.0,0.0,1.571,5196.167,2.208,3.612,354.01,0.0,0.315,1.4,6.0,1.204,11.0,2.208,,,,,5804.0,615111.0,123.444,1.165,6721.0,1.349,0.0027,373.4,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-28,25929.0,37.0,18.143,1764.0,0.0,1.571,5203.592,7.425,3.641,354.01,0.0,0.315,1.5,6.0,1.204,10.0,2.007,,,,,4965.0,620076.0,124.441,0.996,6477.0,1.3,0.0028,357.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-29,25942.0,13.0,17.571,1764.0,0.0,1.429,5206.201,2.609,3.526,354.01,0.0,0.287,1.59,4.0,0.803,10.0,2.007,,,,,4740.0,624816.0,125.392,0.951,6494.0,1.303,0.0027,369.6,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-30,26027.0,85.0,28.714,1763.0,-1.0,0.0,5223.259,17.058,5.763,353.81,-0.201,0.0,1.69,4.0,0.803,6.0,1.204,,,,,4383.0,629199.0,126.272,0.88,6539.0,1.312,0.0044,227.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-31,26065.0,38.0,31.429,1763.0,0.0,0.0,5230.885,7.626,6.307,353.81,0.0,0.0,1.64,4.0,0.803,6.0,1.204,,,,,3856.0,633055.0,127.045,0.774,5807.0,1.165,0.0054,184.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,345.6,1.85,-3.28,69.357145953444\r\nIRL,Europe,Ireland,2020-08-01,26109.0,44.0,34.286,1763.0,0.0,-0.143,5239.716,8.83,6.881,353.81,0.0,-0.029,1.61,4.0,0.803,8.0,1.605,,,,,3306.0,636361.0,127.709,0.663,5010.0,1.005,0.0068,146.1,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-02,26162.0,53.0,40.143,1763.0,0.0,-0.143,5250.352,10.636,8.056,353.81,0.0,-0.029,1.62,4.0,0.803,10.0,2.007,1.0,0.201,8.0,1.611,3131.0,639492.0,128.337,0.628,4312.0,0.865,0.0093,107.4,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-03,26208.0,46.0,45.143,1763.0,0.0,-0.143,5259.584,9.232,9.06,353.81,0.0,-0.029,1.6,5.0,1.003,10.0,2.007,,,,,3041.0,642533.0,128.947,0.61,3917.0,0.786,0.0115,86.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-04,26253.0,45.0,46.286,1763.0,0.0,-0.143,5268.614,9.031,9.289,353.81,0.0,-0.029,1.58,5.0,1.003,14.0,2.81,,,,,1991.0,644524.0,129.347,0.4,3493.0,0.701,0.0133,75.5,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-05,26303.0,50.0,51.571,1763.0,0.0,-0.143,5278.649,10.034,10.35,353.81,0.0,-0.029,1.6,6.0,1.204,17.0,3.412,,,,,3761.0,648285.0,130.102,0.755,3353.0,0.673,0.0154,65.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-06,26372.0,69.0,49.286,1768.0,5.0,0.714,5292.496,13.847,9.891,354.813,1.003,0.143,1.6,5.0,1.003,10.0,2.007,,,,,4833.0,653118.0,131.072,0.97,3417.0,0.686,0.0144,69.3,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-07,26470.0,98.0,57.857,1772.0,4.0,1.286,5312.163,19.667,11.611,355.616,0.803,0.258,1.62,5.0,1.003,11.0,2.208,,,,,4980.0,658098.0,132.071,0.999,3578.0,0.718,0.0162,61.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-08,26644.0,174.0,76.429,1772.0,0.0,1.286,5347.083,34.919,15.338,355.616,0.0,0.258,1.59,6.0,1.204,12.0,2.408,,,,,4880.0,662978.0,133.051,0.979,3802.0,0.763,0.0201,49.7,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-09,26712.0,68.0,78.571,1772.0,0.0,1.286,5360.729,13.647,15.768,355.616,0.0,0.258,1.5,6.0,1.204,13.0,2.609,1.0,0.201,13.0,2.619,4107.0,667085.0,133.875,0.824,3942.0,0.791,0.0199,50.2,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-10,26768.0,56.0,80.0,1772.0,0.0,1.286,5371.968,11.238,16.055,355.616,0.0,0.258,1.41,7.0,1.405,12.0,2.408,,,,,3874.0,670959.0,134.652,0.777,4061.0,0.815,0.0197,50.8,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-11,26801.0,33.0,78.286,1773.0,1.0,1.429,5378.59,6.623,15.711,355.817,0.201,0.287,1.33,5.0,1.003,14.0,2.81,,,,,4026.0,674985.0,135.46,0.808,4352.0,0.873,0.018,55.6,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-12,26838.0,37.0,76.429,1774.0,1.0,1.571,5386.016,7.425,15.338,356.017,0.201,0.315,1.33,6.0,1.204,13.0,2.609,,,,,5843.0,680828.0,136.633,1.173,4649.0,0.933,0.0164,60.8,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-13,26929.0,91.0,79.571,1774.0,0.0,0.857,5404.278,18.262,15.969,356.017,0.0,0.172,1.34,6.0,1.204,12.0,2.408,,,,,7072.0,687900.0,138.052,1.419,4969.0,0.997,0.016,62.4,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-14,26995.0,66.0,75.0,1774.0,0.0,0.286,5417.524,13.245,15.051,356.017,0.0,0.057,1.36,8.0,1.605,11.0,2.208,,,,,11337.0,699237.0,140.327,2.275,5877.0,1.179,0.0128,78.4,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-15,27191.0,196.0,78.143,1774.0,0.0,0.286,5456.858,39.334,15.682,356.017,0.0,0.057,1.39,8.0,1.605,15.0,3.01,,,,,10653.0,709890.0,142.465,2.138,6702.0,1.345,0.0117,85.8,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-16,27257.0,66.0,77.857,1774.0,0.0,0.286,5470.103,13.245,15.625,356.017,0.0,0.057,1.36,8.0,1.605,16.0,3.211,0.0,0.0,17.0,3.424,10352.0,720242.0,144.543,2.078,7594.0,1.524,0.0103,97.5,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-17,27313.0,56.0,77.857,1774.0,0.0,0.286,5481.342,11.238,15.625,356.017,0.0,0.057,1.34,8.0,1.605,21.0,4.214,,,,,5533.0,725775.0,145.653,1.11,7831.0,1.572,0.0099,100.6,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-18,27499.0,186.0,99.714,1775.0,1.0,0.286,5518.669,37.328,20.011,356.218,0.201,0.057,1.33,7.0,1.405,22.0,4.415,,,,,4339.0,730114.0,146.524,0.871,7876.0,1.581,0.0127,79.0,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-19,27547.0,48.0,101.286,1775.0,0.0,0.143,5528.302,9.633,20.327,356.218,0.0,0.029,1.28,6.0,1.204,17.0,3.412,,,,,6192.0,736306.0,147.766,1.243,7925.0,1.59,0.0128,78.2,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-20,27676.0,129.0,106.714,1776.0,1.0,0.286,5554.191,25.889,21.416,356.419,0.201,0.057,1.25,6.0,1.204,16.0,3.211,,,,,11416.0,747722.0,150.057,2.291,8546.0,1.715,0.0125,80.1,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-21,27755.0,79.0,108.571,1776.0,0.0,0.286,5570.045,15.854,21.789,356.419,0.0,0.057,1.22,6.0,1.204,18.0,3.612,,,,,13080.0,760802.0,152.682,2.625,8795.0,1.765,0.0123,81.0,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-22,27908.0,153.0,102.429,1777.0,1.0,0.429,5600.75,30.705,20.556,356.619,0.201,0.086,1.21,6.0,1.204,20.0,4.014,,,,,6758.0,767560.0,154.039,1.356,8239.0,1.653,0.0124,80.4,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-23,27969.0,61.0,101.714,1777.0,0.0,0.429,5612.992,12.242,20.413,356.619,0.0,0.086,1.2,6.0,1.204,21.0,4.214,2.0,0.403,10.0,2.014,5438.0,772998.0,155.13,1.091,7537.0,1.513,0.0135,74.1,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-24,28116.0,147.0,114.714,1777.0,0.0,0.429,5642.493,29.501,23.022,356.619,0.0,0.086,1.21,5.0,1.003,27.0,5.419,,,,,4838.0,777836.0,156.101,0.971,7437.0,1.493,0.0154,64.8,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-25,28201.0,85.0,100.286,1777.0,0.0,0.286,5659.551,17.058,20.126,356.619,0.0,0.057,1.17,4.0,0.803,26.0,5.218,,,,,5015.0,782851.0,157.107,1.006,7534.0,1.512,0.0133,75.1,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-26,28363.0,162.0,116.571,1777.0,0.0,0.286,5692.062,32.511,23.394,356.619,0.0,0.057,1.18,4.0,0.803,26.0,5.218,,,,,7648.0,790499.0,158.642,1.535,7742.0,1.554,0.0151,66.4,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-27,28453.0,90.0,111.0,1777.0,0.0,0.143,5710.124,18.062,22.276,356.619,0.0,0.029,1.14,5.0,1.003,29.0,5.82,,,,,12274.0,802773.0,161.105,2.463,7864.0,1.578,0.0141,70.8,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-28,28578.0,125.0,117.571,1777.0,0.0,0.143,5735.21,25.086,23.595,356.619,0.0,0.029,1.13,5.0,1.003,32.0,6.422,,,,,12303.0,815076.0,163.574,2.469,7753.0,1.556,0.0152,65.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-29,28720.0,142.0,116.0,1777.0,0.0,0.0,5763.707,28.497,23.28,356.619,0.0,0.0,1.11,5.0,1.003,30.0,6.021,,,,,9940.0,825016.0,165.569,1.995,8208.0,1.647,0.0141,70.8,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-30,28760.0,40.0,113.0,1777.0,0.0,0.0,5771.735,8.027,22.678,356.619,0.0,0.0,1.11,5.0,1.003,33.0,6.623,2.0,0.403,31.0,6.244,5659.0,830675.0,166.705,1.136,8240.0,1.654,0.0137,72.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-31,28811.0,51.0,99.286,1777.0,0.0,0.0,5781.97,10.235,19.925,356.619,0.0,0.0,1.13,6.0,1.204,35.0,7.024,,,,,9340.0,840015.0,168.579,1.874,8883.0,1.783,0.0112,89.5,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,351.8,1.67,0.27,70.6014003079329\r\nIRL,Europe,Ireland,2020-09-01,29025.0,214.0,117.714,1777.0,0.0,0.0,5824.917,42.947,23.624,356.619,0.0,0.0,1.18,6.0,1.204,36.0,7.225,,,,,4892.0,844907.0,169.561,0.982,8865.0,1.779,0.0133,75.3,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-02,29114.0,89.0,107.286,1777.0,0.0,0.0,5842.778,17.861,21.531,356.619,0.0,0.0,1.18,6.0,1.204,40.0,8.027,,,,,7301.0,852208.0,171.026,1.465,8816.0,1.769,0.0122,82.2,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-03,29206.0,92.0,107.571,1777.0,0.0,0.0,5861.241,18.463,21.588,356.619,0.0,0.0,1.19,7.0,1.405,40.0,8.027,,,,,12501.0,864709.0,173.535,2.509,8848.0,1.776,0.0122,82.3,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-04,29303.0,97.0,103.571,1777.0,0.0,0.0,5880.707,19.467,20.785,356.619,0.0,0.0,1.22,7.0,1.405,44.0,8.83,,,,,14064.0,878773.0,176.358,2.822,9100.0,1.826,0.0114,87.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-05,29534.0,231.0,116.286,1777.0,0.0,0.0,5927.066,46.359,23.337,356.619,0.0,0.0,1.27,7.0,1.405,48.0,9.633,,,,,11322.0,890095.0,178.63,2.272,9297.0,1.866,0.0125,79.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-06,29672.0,138.0,130.286,1777.0,0.0,0.0,5954.761,27.695,26.147,356.619,0.0,0.0,1.29,6.0,1.204,49.0,9.834,1.0,0.201,32.0,6.446,10343.0,900438.0,180.705,2.076,9966.0,2.0,0.0131,76.5,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-07,29774.0,102.0,137.571,1777.0,0.0,0.0,5975.231,20.47,27.609,356.619,0.0,0.0,1.3,6.0,1.204,49.0,9.834,,,,,6253.0,906691.0,181.96,1.255,9525.0,1.912,0.0144,69.2,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-08,30080.0,306.0,150.714,1778.0,1.0,0.143,6036.64,61.41,30.246,356.82,0.201,0.029,1.33,6.0,1.204,49.0,9.834,,,,,6678.0,913369.0,183.301,1.34,9780.0,1.963,0.0154,64.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-09,30164.0,84.0,150.0,1781.0,3.0,0.571,6053.498,16.858,30.103,357.422,0.602,0.115,1.31,6.0,1.204,50.0,10.034,,,,,10749.0,924118.0,185.458,2.157,10273.0,2.062,0.0146,68.5,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-10,30360.0,196.0,164.857,1781.0,0.0,0.571,6092.833,39.334,33.085,357.422,0.0,0.115,1.31,7.0,1.405,49.0,9.834,,,,,12363.0,936481.0,187.939,2.481,10253.0,2.058,0.0161,62.2,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-11,30571.0,211.0,181.143,1781.0,0.0,0.571,6135.177,42.345,36.353,357.422,0.0,0.115,1.32,7.0,1.405,53.0,10.636,,,,,13073.0,949554.0,190.562,2.624,10112.0,2.029,0.0179,55.8,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-12,30730.0,159.0,170.857,1783.0,2.0,0.857,6167.087,31.909,34.289,357.823,0.401,0.172,1.31,9.0,1.806,52.0,10.436,,,,,12230.0,961784.0,193.017,2.454,10241.0,2.055,0.0167,59.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-13,30985.0,255.0,187.571,1784.0,1.0,1.0,6218.261,51.175,37.643,358.024,0.201,0.201,1.34,10.0,2.007,54.0,10.837,0.0,0.0,35.0,7.05,9815.0,971599.0,194.986,1.97,10166.0,2.04,0.0185,54.2,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-14,31192.0,207.0,202.571,1784.0,0.0,1.0,6259.804,41.542,40.653,358.024,0.0,0.201,1.35,11.0,2.208,60.0,12.041,,,,,9888.0,981487.0,196.971,1.984,10685.0,2.144,0.019,52.7,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-15,31549.0,357.0,209.857,1787.0,3.0,1.286,6331.448,71.645,42.115,358.626,0.602,0.258,1.35,13.0,2.609,68.0,13.647,,,,,8120.0,989607.0,198.6,1.63,10891.0,2.186,0.0193,51.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-16,31799.0,250.0,233.571,1788.0,1.0,1.0,6381.62,50.172,46.875,358.827,0.201,0.201,1.33,14.0,2.81,65.0,13.045,,,,,12241.0,1001848.0,201.057,2.457,11104.0,2.228,0.021,47.5,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-17,32023.0,224.0,237.571,1789.0,1.0,1.143,6426.574,44.954,47.677,359.028,0.201,0.229,1.3,14.0,2.81,76.0,15.252,,,,,14663.0,1016511.0,204.0,2.943,11433.0,2.294,0.0208,48.1,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-18,32271.0,248.0,242.857,1792.0,3.0,1.571,6476.344,49.77,48.738,359.63,0.602,0.315,1.28,15.0,3.01,80.0,16.055,,,,,14506.0,1031017.0,206.911,2.911,11638.0,2.336,0.0209,47.9,tests performed,,,,,,,,,,,,,,60.65,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-19,32538.0,267.0,258.286,1792.0,0.0,1.286,6529.927,53.583,51.834,359.63,0.0,0.258,1.27,16.0,3.211,74.0,14.851,,,,,14380.0,1045397.0,209.797,2.886,11945.0,2.397,0.0216,46.2,tests performed,,,,,,,,,,,,,,60.65,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-20,32933.0,395.0,278.286,1792.0,0.0,1.143,6609.198,79.271,55.848,359.63,0.0,0.229,1.28,16.0,3.211,82.0,16.456,6.0,1.209,55.0,11.079,12138.0,1057535.0,212.233,2.436,12277.0,2.464,0.0227,44.1,tests performed,,,,,,,,,,,,,,60.65,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-21,33121.0,188.0,275.571,1792.0,0.0,1.143,6646.927,37.729,55.303,359.63,0.0,0.229,1.25,17.0,3.412,90.0,18.062,,,,,10031.0,1067566.0,214.246,2.013,12297.0,2.468,0.0224,44.6,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-22,33444.0,323.0,270.714,1792.0,0.0,0.714,6711.749,64.822,54.329,359.63,0.0,0.143,1.24,16.0,3.211,94.0,18.865,,,,,12583.0,1080149.0,216.771,2.525,12935.0,2.596,0.0209,47.8,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-23,33675.0,231.0,268.0,1794.0,2.0,0.857,6758.107,46.359,53.784,360.031,0.401,0.172,1.24,17.0,3.412,90.0,18.062,,,,,12671.0,1092820.0,219.314,2.543,12996.0,2.608,0.0206,48.5,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-24,33994.0,319.0,281.571,1797.0,3.0,1.143,6822.126,64.019,56.507,360.633,0.602,0.229,1.24,16.0,3.211,94.0,18.865,,,,,14356.0,1107176.0,222.195,2.881,12952.0,2.599,0.0217,46.0,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-25,34315.0,321.0,292.0,1797.0,0.0,0.714,6886.546,64.42,58.6,360.633,0.0,0.143,1.25,17.0,3.412,100.0,20.069,,,,,14538.0,1121714.0,225.113,2.918,12957.0,2.6,0.0225,44.4,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-26,34560.0,245.0,288.857,1802.0,5.0,1.429,6935.715,49.168,57.97,361.637,1.003,0.287,1.25,18.0,3.612,102.0,20.47,,,,,11808.0,1133522.0,227.482,2.37,12589.0,2.526,0.0229,43.6,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-27,34990.0,430.0,293.857,1802.0,0.0,1.429,7022.01,86.295,58.973,361.637,0.0,0.287,1.29,17.0,3.412,108.0,21.674,4.0,0.806,56.0,11.28,11878.0,1145400.0,229.866,2.384,12552.0,2.519,0.0234,42.7,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-28,35377.0,387.0,322.286,1802.0,0.0,1.429,7099.675,77.666,64.678,361.637,0.0,0.287,1.3,17.0,3.412,111.0,22.276,,,,,9866.0,1155266.0,231.846,1.98,12529.0,2.514,0.0257,38.9,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-29,35740.0,363.0,328.0,1803.0,1.0,1.571,7172.524,72.849,65.825,361.837,0.201,0.315,1.3,18.0,3.612,117.0,23.48,,,,,12673.0,1167939.0,234.389,2.543,12541.0,2.517,0.0262,38.2,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-30,36155.0,415.0,354.286,1804.0,1.0,1.429,7255.809,83.285,71.1,362.038,0.201,0.287,1.32,22.0,4.415,122.0,24.484,,,,,13247.0,1181186.0,237.048,2.658,12624.0,2.533,0.0281,35.6,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,294.6,1.26,-2.38,59.122150456842\r\nIRL,Europe,Ireland,2020-10-01,36597.0,442.0,371.857,1806.0,2.0,1.286,7344.512,88.703,74.627,362.439,0.401,0.258,1.32,20.0,4.014,122.0,24.484,,,,,14524.0,1195710.0,239.962,2.915,12648.0,2.538,0.0294,34.0,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-02,37063.0,466.0,392.571,1801.0,-5.0,0.571,7438.032,93.52,78.784,361.436,-1.003,0.115,1.33,21.0,4.214,117.0,23.48,,,,,12673.0,1208383.0,242.506,2.543,12381.0,2.485,0.0317,31.5,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-03,37668.0,605.0,444.0,1810.0,9.0,1.143,7559.447,121.415,89.105,363.242,1.806,0.229,1.33,20.0,4.014,120.0,24.082,,,,,13621.0,1222004.0,245.239,2.734,12640.0,2.537,0.0351,28.5,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-04,38032.0,364.0,434.571,1810.0,0.0,1.143,7632.497,73.05,87.212,363.242,0.0,0.229,1.32,21.0,4.214,134.0,26.892,9.0,1.813,85.0,17.122,11295.0,1233299.0,247.506,2.267,12557.0,2.52,0.0346,28.9,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-05,38549.0,517.0,453.143,1810.0,0.0,1.143,7736.252,103.755,90.94,363.242,0.0,0.229,1.33,23.0,4.616,150.0,30.103,,,,,12166.0,1245465.0,249.948,2.442,12886.0,2.586,0.0352,28.4,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-06,38973.0,424.0,461.857,1811.0,1.0,1.143,7821.343,85.091,92.688,363.443,0.201,0.229,1.34,24.0,4.816,150.0,30.103,,,,,11646.0,1257111.0,252.285,2.337,12739.0,2.557,0.0363,27.6,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-07,39584.0,611.0,489.857,1816.0,5.0,1.714,7943.962,122.619,98.308,364.446,1.003,0.344,1.36,27.0,5.419,156.0,31.307,,,,,14542.0,1271653.0,255.203,2.918,12924.0,2.594,0.0379,26.4,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-08,40086.0,502.0,498.429,1817.0,1.0,1.571,8044.706,100.744,100.028,364.647,0.201,0.315,1.38,25.0,5.017,159.0,31.909,,,,,15880.0,1287533.0,258.39,3.187,13118.0,2.633,0.038,26.3,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-09,40703.0,617.0,520.0,1821.0,4.0,2.857,8168.53,123.823,104.357,365.45,0.803,0.573,1.41,31.0,6.221,179.0,35.923,,,,,16522.0,1304055.0,261.706,3.316,13667.0,2.743,0.038,26.3,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-10,41714.0,1011.0,578.0,1824.0,3.0,2.0,8371.424,202.894,115.997,366.052,0.602,0.401,1.43,30.0,6.021,194.0,38.933,,,,,15634.0,1319689.0,264.843,3.138,13955.0,2.801,0.0414,24.1,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-11,42528.0,814.0,642.286,1826.0,2.0,2.286,8534.782,163.359,128.898,366.453,0.401,0.459,1.43,30.0,6.021,201.0,40.338,4.0,0.806,130.0,26.186,7998.0,1327687.0,266.448,1.605,13484.0,2.706,0.0476,21.0,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-12,43351.0,823.0,686.0,1827.0,1.0,2.429,8699.947,165.165,137.671,366.654,0.201,0.487,1.43,32.0,6.422,221.0,44.352,,,,,13988.0,1341675.0,269.256,2.807,13744.0,2.758,0.0499,20.0,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-13,44159.0,808.0,740.857,1830.0,3.0,2.714,8862.101,162.154,148.68,367.256,0.602,0.545,1.42,31.0,6.221,240.0,48.165,,,,,15305.0,1356980.0,272.327,3.072,14267.0,2.863,0.0519,19.3,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-14,45243.0,1084.0,808.429,1835.0,5.0,2.714,9079.645,217.544,162.24,368.259,1.003,0.545,1.41,30.0,6.021,234.0,46.961,,,,,16255.0,1373235.0,275.589,3.262,14512.0,2.912,0.0557,18.0,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-15,46429.0,1186.0,906.143,1838.0,3.0,3.0,9317.659,238.014,181.85,368.861,0.602,0.602,1.39,29.0,5.82,238.0,47.763,,,,,13428.0,1386663.0,278.284,2.695,14161.0,2.842,0.064,15.6,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-16,47427.0,998.0,960.571,1841.0,3.0,2.857,9517.944,200.285,192.773,369.463,0.602,0.573,1.36,30.0,6.021,244.0,48.967,,,,,17758.0,1404421.0,281.848,3.564,14338.0,2.877,0.067,14.9,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-17,48678.0,1251.0,994.857,1849.0,8.0,3.571,9769.002,251.058,199.654,371.069,1.605,0.717,1.32,30.0,6.021,260.0,52.178,,,,,19040.0,1423461.0,285.669,3.821,14825.0,2.975,0.0671,14.9,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-18,49962.0,1284.0,1062.0,1852.0,3.0,3.714,10026.683,257.681,213.129,371.671,0.602,0.745,1.29,31.0,6.221,274.0,54.988,9.0,1.813,120.0,24.172,16140.0,1439601.0,288.908,3.239,15988.0,3.209,0.0664,15.1,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-19,50993.0,1031.0,1091.714,1852.0,0.0,3.571,10233.591,206.907,219.092,371.671,0.0,0.717,1.24,32.0,6.422,298.0,59.804,,,,,14391.0,1453992.0,291.796,2.888,16045.0,3.22,0.068,14.7,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-20,52256.0,1263.0,1156.714,1865.0,13.0,5.0,10487.057,253.467,232.137,374.28,2.609,1.003,1.19,34.0,6.823,315.0,63.216,,,,,14676.0,1468668.0,294.741,2.945,15955.0,3.202,0.0725,13.8,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-21,53422.0,1166.0,1168.429,1868.0,3.0,4.714,10721.057,234.0,234.487,374.882,0.602,0.946,1.14,35.0,7.024,324.0,65.022,,,,,16779.0,1485447.0,298.109,3.367,16030.0,3.217,0.0729,13.7,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-22,54476.0,1054.0,1149.571,1871.0,3.0,4.714,10932.581,211.523,230.703,375.484,0.602,0.946,1.08,37.0,7.425,310.0,62.213,,,,,17834.0,1503281.0,301.688,3.579,16660.0,3.343,0.069,14.5,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-23,55261.0,785.0,1119.143,1878.0,7.0,5.286,11090.119,157.539,224.597,376.889,1.405,1.061,1.02,38.0,7.626,311.0,62.413,,,,,17712.0,1520993.0,305.242,3.555,16653.0,3.342,0.0672,14.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-24,56108.0,847.0,1061.429,1882.0,4.0,4.714,11260.101,169.981,213.014,377.691,0.803,0.946,0.98,37.0,7.425,312.0,62.614,,,,,17906.0,1538899.0,308.836,3.593,16491.0,3.31,0.0644,15.5,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-25,57128.0,1020.0,1023.714,1882.0,0.0,4.286,11464.8,204.7,205.445,377.691,0.0,0.86,0.96,39.0,7.827,319.0,64.019,12.0,2.417,180.0,36.056,15772.0,1554671.0,312.001,3.165,16439.0,3.299,0.0623,16.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-26,58067.0,939.0,1010.571,1885.0,3.0,4.714,11653.245,188.444,202.808,378.293,0.602,0.946,0.93,38.0,7.626,344.0,69.036,,,,,14264.0,1568935.0,314.864,2.863,16420.0,3.295,0.0615,16.2,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-27,58767.0,700.0,930.143,1890.0,5.0,3.571,11793.725,140.48,186.667,379.297,1.003,0.717,0.89,38.0,7.626,354.0,71.043,,,,,11435.0,1580370.0,317.158,2.295,15957.0,3.202,0.0583,17.2,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-28,59434.0,667.0,858.857,1896.0,6.0,4.0,11927.583,133.858,172.361,380.501,1.204,0.803,0.86,40.0,8.027,327.0,65.624,,,,,11170.0,1591540.0,319.4,2.242,15156.0,3.042,0.0567,17.6,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-29,60297.0,863.0,831.571,1902.0,6.0,4.429,12100.775,173.192,166.885,381.705,1.204,0.889,0.83,43.0,8.63,330.0,66.226,,,,,15316.0,1606856.0,322.474,3.074,14796.0,2.969,0.0562,17.8,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-30,61059.0,762.0,828.286,1908.0,6.0,4.286,12253.698,152.923,166.226,382.909,1.204,0.86,0.8,42.0,8.429,327.0,65.624,,,,,13801.0,1620657.0,325.243,2.77,14238.0,2.857,0.0582,17.2,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-31,61456.0,397.0,764.0,1913.0,5.0,4.429,12333.37,79.672,153.324,383.913,1.003,0.889,0.77,44.0,8.83,322.0,64.621,,,,,14296.0,1634953.0,328.112,2.869,13722.0,2.754,0.0557,18.0,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,409.6,1.57,4.45,82.2010618707485\r\nIRL,Europe,Ireland,2020-11-01,62002.0,546.0,696.286,1915.0,2.0,4.714,12442.945,109.575,139.735,384.314,0.401,0.946,0.76,44.0,8.83,325.0,65.223,10.0,2.014,124.0,24.978,11068.0,1646021.0,330.334,2.221,13050.0,2.619,0.0534,18.7,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-02,62750.0,748.0,669.0,1917.0,2.0,4.571,12593.058,150.113,134.259,384.715,0.401,0.917,0.75,44.0,8.83,327.0,65.624,,,,,11074.0,1657095.0,332.556,2.222,12594.0,2.527,0.0531,18.8,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-03,63048.0,298.0,611.571,1922.0,5.0,4.571,12652.863,59.804,122.734,385.719,1.003,0.917,0.73,43.0,8.63,306.0,61.41,,,,,10500.0,1667595.0,334.663,2.107,12461.0,2.501,0.0491,20.4,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-04,63483.0,435.0,578.429,1930.0,8.0,4.857,12740.161,87.298,116.083,387.324,1.605,0.975,0.73,40.0,8.027,315.0,63.216,,,,,12592.0,1680187.0,337.19,2.527,12664.0,2.541,0.0457,21.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-05,64046.0,563.0,535.571,1933.0,3.0,4.429,12853.147,112.986,107.482,387.926,0.602,0.889,0.73,38.0,7.626,307.0,61.611,,,,,11846.0,1692033.0,339.568,2.377,12168.0,2.442,0.044,22.7,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-06,64538.0,492.0,497.0,1940.0,7.0,4.571,12951.885,98.738,99.741,389.331,1.405,0.917,0.72,37.0,7.425,295.0,59.202,,,,,11815.0,1703848.0,341.939,2.371,11884.0,2.385,0.0418,23.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-07,64855.0,317.0,485.571,1945.0,5.0,4.571,13015.503,63.618,97.447,390.335,1.003,0.917,0.72,40.0,8.027,279.0,55.991,,,,,12172.0,1716020.0,344.382,2.443,11581.0,2.324,0.0419,23.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-08,65394.0,539.0,484.571,1947.0,2.0,4.571,13123.672,108.17,97.247,390.736,0.401,0.917,0.72,40.0,8.027,283.0,56.794,19.0,3.827,142.0,28.402,9576.0,1725596.0,346.303,1.922,11368.0,2.281,0.0426,23.5,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-09,65659.0,265.0,415.571,1948.0,1.0,4.429,13176.854,53.182,83.399,390.937,0.201,0.889,0.72,41.0,8.228,291.0,58.4,,,,,9912.0,1735508.0,348.292,1.989,11202.0,2.248,0.0371,27.0,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-10,65889.0,230.0,405.857,1963.0,15.0,5.857,13223.012,46.158,81.45,393.947,3.01,1.175,0.74,40.0,8.027,279.0,55.991,,,,,10407.0,1745915.0,350.381,2.089,11189.0,2.245,0.0363,27.6,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-11,66247.0,358.0,394.857,1965.0,2.0,5.0,13294.858,71.846,79.242,394.348,0.401,1.003,0.76,39.0,7.827,282.0,56.594,,,,,10790.0,1756705.0,352.546,2.165,10931.0,2.194,0.0361,27.7,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-12,66632.0,385.0,369.429,1965.0,0.0,4.571,13372.122,77.264,74.139,394.348,0.0,0.917,0.78,38.0,7.626,285.0,57.196,,,,,13058.0,1769763.0,355.167,2.621,11104.0,2.228,0.0333,30.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-13,67099.0,467.0,365.857,1972.0,7.0,4.571,13465.842,93.72,73.422,395.753,1.405,0.917,0.81,33.0,6.623,275.0,55.189,,,,,11612.0,1781375.0,357.497,2.33,11075.0,2.223,0.033,30.3,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-14,67526.0,427.0,381.571,1978.0,6.0,4.714,13551.535,85.693,76.576,396.957,1.204,0.946,0.82,33.0,6.623,254.0,50.974,,,,,9801.0,1791176.0,359.464,1.967,10737.0,2.155,0.0355,28.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-15,67903.0,377.0,358.429,1979.0,1.0,4.571,13627.194,75.659,71.932,397.158,0.201,0.917,0.83,30.0,6.021,254.0,50.974,16.0,3.223,149.0,29.812,9184.0,1800360.0,361.307,1.843,10681.0,2.144,0.0336,29.8,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-16,68356.0,453.0,385.286,1984.0,5.0,5.143,13718.105,90.911,77.322,398.161,1.003,1.032,0.84,34.0,6.823,276.0,55.389,,,,,11106.0,1811466.0,363.536,2.229,10851.0,2.178,0.0355,28.2,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-17,68686.0,330.0,399.571,1995.0,11.0,4.571,13784.331,66.226,80.188,400.369,2.208,0.917,0.84,34.0,6.823,273.0,54.787,,,,,9977.0,1821443.0,365.538,2.002,10790.0,2.165,0.037,27.0,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-18,69058.0,372.0,401.571,2006.0,11.0,5.857,13858.987,74.655,80.59,402.576,2.208,1.175,0.84,33.0,6.623,274.0,54.988,,,,,12562.0,1834005.0,368.059,2.521,11043.0,2.216,0.0364,27.5,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-19,69473.0,415.0,405.857,2010.0,4.0,6.429,13942.271,83.285,81.45,403.379,0.803,1.29,0.83,32.0,6.422,290.0,58.199,,,,,12640.0,1846645.0,370.596,2.537,10983.0,2.204,0.037,27.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-20,69802.0,329.0,386.143,2018.0,8.0,6.571,14008.297,66.026,77.494,404.985,1.605,1.319,0.82,33.0,6.623,287.0,57.597,,,,,12829.0,1859474.0,373.171,2.575,11157.0,2.239,0.0346,28.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-21,70143.0,341.0,373.857,2022.0,4.0,6.286,14076.731,68.434,75.028,405.787,0.803,1.261,0.81,32.0,6.422,275.0,55.189,,,,,10444.0,1869918.0,375.267,2.096,11249.0,2.258,0.0332,30.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-22,70461.0,318.0,365.429,2023.0,1.0,6.286,14140.549,63.818,73.336,405.988,0.201,1.261,0.8,31.0,6.221,277.0,55.59,10.0,2.014,140.0,27.999,9563.0,1879481.0,377.186,1.919,11303.0,2.268,0.0323,30.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-23,70711.0,250.0,336.429,2023.0,0.0,5.571,14190.721,50.172,67.517,405.988,0.0,1.118,0.8,33.0,6.623,291.0,58.4,,,,,9834.0,1889315.0,379.159,1.974,11121.0,2.232,0.0303,33.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-24,70930.0,219.0,320.571,2028.0,5.0,4.714,14234.671,43.95,64.334,406.992,1.003,0.946,0.8,37.0,7.425,291.0,58.4,,,,,10089.0,1899404.0,381.184,2.025,11137.0,2.235,0.0288,34.7,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-25,71187.0,257.0,304.143,2033.0,5.0,3.857,14286.248,51.576,61.037,407.995,1.003,0.774,0.81,36.0,7.225,269.0,53.985,,,,,12442.0,1911846.0,383.681,2.497,11120.0,2.232,0.0274,36.6,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-26,71494.0,307.0,288.714,2036.0,3.0,3.714,14347.858,61.611,57.941,408.597,0.602,0.745,0.82,36.0,7.225,247.0,49.569,,,,,12456.0,1924302.0,386.181,2.5,11094.0,2.226,0.026,38.4,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-27,71699.0,205.0,271.0,2043.0,7.0,3.571,14388.999,41.141,54.386,410.002,1.405,0.717,0.83,34.0,6.823,253.0,50.774,,,,,10778.0,1935080.0,388.344,2.163,10801.0,2.168,0.0251,39.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-28,71942.0,243.0,257.0,2050.0,7.0,4.0,14437.766,48.767,51.576,411.407,1.405,0.803,0.84,31.0,6.221,243.0,48.767,,,,,11339.0,1946419.0,390.619,2.276,10929.0,2.193,0.0235,42.5,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-29,72241.0,299.0,254.286,2052.0,2.0,4.143,14497.771,60.005,51.032,411.808,0.401,0.831,0.87,30.0,6.021,257.0,51.576,5.0,1.007,113.0,22.762,9443.0,1955862.0,392.514,1.895,10912.0,2.19,0.0233,42.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-30,72544.0,303.0,261.857,2053.0,1.0,4.286,14558.579,60.808,52.551,412.009,0.201,0.86,0.9,30.0,6.021,259.0,51.978,,,,,9057.0,1964919.0,394.332,1.818,10801.0,2.168,0.0242,41.2,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,340.6,1.19,-2.68,68.3537150224046\r\nIRL,Europe,Ireland,2020-12-01,72798.0,254.0,266.857,2069.0,16.0,5.857,14609.553,50.974,53.555,415.22,3.211,1.175,0.91,31.0,6.221,224.0,44.954,,,,,9786.0,1974705.0,396.296,1.964,10757.0,2.159,0.0248,40.3,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-02,73066.0,268.0,268.429,2074.0,5.0,5.857,14663.337,53.784,53.87,416.223,1.003,1.175,0.92,31.0,6.221,228.0,45.756,,,,,11934.0,1986639.0,398.691,2.395,10685.0,2.144,0.0251,39.8,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-03,73228.0,162.0,247.714,2080.0,6.0,6.286,14695.848,32.511,49.713,417.427,1.204,1.261,0.93,32.0,6.422,234.0,46.961,,,,,12047.0,1998686.0,401.109,2.418,10626.0,2.132,0.0233,42.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-04,73491.0,263.0,256.0,2086.0,6.0,6.143,14748.629,52.78,51.376,418.631,1.204,1.233,0.97,29.0,5.82,239.0,47.964,,,,,11856.0,2010542.0,403.488,2.379,10780.0,2.163,0.0237,42.1,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-05,73948.0,457.0,286.571,2099.0,13.0,7.0,14840.342,91.714,57.511,421.24,2.609,1.405,1.0,28.0,5.619,230.0,46.158,,,,,11456.0,2021998.0,405.787,2.299,10797.0,2.167,0.0265,37.7,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-06,74246.0,298.0,286.429,2099.0,0.0,6.714,14900.147,59.804,57.482,421.24,0.0,1.347,1.0,28.0,5.619,233.0,46.76,10.0,2.014,102.0,20.546,9413.0,2031411.0,407.676,1.889,10793.0,2.166,0.0265,37.7,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-07,74468.0,222.0,274.857,2099.0,0.0,6.571,14944.699,44.552,55.16,421.24,0.0,1.319,1.0,28.0,5.619,232.0,46.559,,,,,9623.0,2041034.0,409.607,1.931,10874.0,2.182,0.0253,39.6,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-08,74682.0,214.0,269.143,2097.0,-2.0,4.0,14987.646,42.947,54.013,420.839,-0.401,0.803,1.02,32.0,6.422,215.0,43.148,,,,,10424.0,2051458.0,411.699,2.092,10965.0,2.201,0.0245,40.7,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-09,74900.0,218.0,262.0,2102.0,5.0,4.0,15031.395,43.75,52.58,421.842,1.003,0.803,1.04,37.0,7.425,215.0,43.148,,,,,12203.0,2063661.0,414.148,2.449,11003.0,2.208,0.0238,42.0,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-10,75203.0,303.0,282.143,2117.0,15.0,5.286,15092.203,60.808,56.622,424.853,3.01,1.061,1.08,36.0,7.225,203.0,40.739,,,,,12688.0,2076349.0,416.695,2.546,11095.0,2.227,0.0254,39.3,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-11,75507.0,304.0,288.0,2120.0,3.0,4.857,15153.212,61.009,57.798,425.455,0.602,0.975,1.11,35.0,7.024,204.0,40.94,,,,,12618.0,2088967.0,419.227,2.532,11204.0,2.248,0.0257,38.9,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-12,75756.0,249.0,258.286,2123.0,3.0,3.429,15203.183,49.971,51.834,426.057,0.602,0.688,1.15,32.0,6.422,190.0,38.13,,,,,12850.0,2101817.0,421.806,2.579,11403.0,2.288,0.0227,44.1,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-13,76185.0,429.0,277.0,2124.0,1.0,3.571,15289.277,86.094,55.59,426.257,0.201,0.717,1.21,31.0,6.221,192.0,38.532,11.0,2.216,81.0,16.316,10728.0,2112545.0,423.959,2.153,11591.0,2.326,0.0239,41.8,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-14,76449.0,264.0,283.0,2126.0,2.0,3.857,15342.258,52.981,56.794,426.659,0.401,0.774,1.25,34.0,6.823,197.0,39.535,,,,,10251.0,2122796.0,426.016,2.057,11680.0,2.344,0.0242,41.3,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-15,76776.0,327.0,299.143,2134.0,8.0,5.286,15407.883,65.624,60.034,428.264,1.605,1.061,1.3,32.0,6.422,198.0,39.736,,,,,10847.0,2133643.0,428.193,2.177,11741.0,2.356,0.0255,39.2,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-16,77197.0,421.0,328.143,2140.0,6.0,5.429,15492.372,84.489,65.854,429.468,1.204,1.089,1.37,28.0,5.619,198.0,39.736,,,,,13120.0,2146763.0,430.826,2.633,11872.0,2.383,0.0276,36.2,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-17,77678.0,481.0,353.571,2143.0,3.0,3.714,15588.902,96.53,70.957,430.07,0.602,0.745,1.42,30.0,6.021,211.0,42.345,,,,,13219.0,2159982.0,433.479,2.653,11948.0,2.398,0.0296,33.8,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-18,78254.0,576.0,392.429,2149.0,6.0,4.143,15704.497,115.595,78.755,431.275,1.204,0.831,1.47,31.0,6.221,206.0,41.341,,,,,14093.0,2174075.0,436.307,2.828,12158.0,2.44,0.0323,31.0,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-19,78776.0,522.0,431.429,2154.0,5.0,4.429,15809.255,104.758,86.582,432.278,1.003,0.889,1.51,29.0,5.82,206.0,41.341,,,,,13941.0,2188016.0,439.105,2.798,12314.0,2.471,0.035,28.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-20,79542.0,766.0,479.571,2158.0,4.0,4.857,15962.981,153.726,96.243,433.081,0.803,0.975,1.56,29.0,5.82,220.0,44.151,18.0,3.626,128.0,25.783,13458.0,2201474.0,441.805,2.701,12704.0,2.55,0.0377,26.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-21,80267.0,725.0,545.429,2158.0,0.0,4.571,16108.478,145.497,109.46,433.081,0.0,0.917,1.6,30.0,6.021,235.0,47.161,,,,,12804.0,2214278.0,444.375,2.57,13069.0,2.623,0.0417,24.0,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-22,81228.0,961.0,636.0,2171.0,13.0,5.286,16301.338,192.859,127.636,435.69,2.609,1.061,1.62,28.0,5.619,237.0,47.563,,,,,13225.0,2227503.0,447.029,2.654,13409.0,2.691,0.0474,21.1,tests performed,,,,,,,,,,,,,,75.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-23,82155.0,927.0,708.286,2184.0,13.0,6.286,16487.374,186.036,142.143,438.299,2.609,1.261,1.62,25.0,5.017,239.0,47.964,,,,,20662.0,2248165.0,451.176,4.147,14486.0,2.907,0.0489,20.5,tests performed,,,,,,,,,,,,,,75.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-24,83073.0,918.0,770.714,2192.0,8.0,7.0,16671.604,184.23,154.672,439.904,1.605,1.405,1.62,22.0,4.415,255.0,51.175,,,,,22876.0,2271041.0,455.767,4.591,15866.0,3.184,0.0486,20.6,tests performed,,,,,,,,,,,,,,68.52,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-25,84098.0,1025.0,834.857,2194.0,2.0,6.429,16877.307,205.703,167.544,440.305,0.401,1.29,1.62,25.0,5.017,253.0,50.774,,,,,21423.0,2292464.0,460.066,4.299,16913.0,3.394,0.0494,20.3,tests performed,,,,,,,,,,,,,,68.52,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-26,85394.0,1296.0,945.429,2200.0,6.0,6.571,17137.396,260.089,189.734,441.51,1.204,1.319,1.63,23.0,4.616,268.0,53.784,,,,,11999.0,2304463.0,462.474,2.408,16635.0,3.338,0.0568,17.6,tests performed,,,,,,,,,,,,,,68.52,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-27,86129.0,735.0,941.0,2204.0,4.0,6.571,17284.901,147.504,188.846,442.312,0.803,1.319,1.63,27.0,5.419,321.0,64.42,16.0,3.223,186.0,37.265,3536.0,2307999.0,463.184,0.71,15218.0,3.054,0.0618,16.2,tests performed,,,,,,,,,,,,,,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-28,86894.0,765.0,946.714,2205.0,1.0,6.714,17438.425,153.525,189.992,442.513,0.201,1.347,1.67,30.0,6.021,360.0,72.247,,,,,9405.0,2317404.0,465.071,1.887,14732.0,2.957,0.0643,15.6,tests performed,187.0,162.0,30.0,,,,0.0,0.0,0.0,,,,,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-29,88439.0,1545.0,1030.143,2213.0,8.0,6.0,17748.486,310.06,206.735,444.119,1.605,1.204,1.75,34.0,6.823,409.0,82.081,,,,,13805.0,2331209.0,467.841,2.77,14815.0,2.973,0.0695,14.4,tests performed,259.0,233.0,31.0,,72.0,72.0,0.01,0.0,0.0,,14.0,71.0,0.001,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-30,90157.0,1718.0,1143.143,2226.0,13.0,6.0,18093.264,344.779,229.413,446.727,2.609,1.204,1.81,39.0,7.827,454.0,91.112,,,,,17489.0,2348698.0,471.351,3.51,14362.0,2.882,0.0796,12.6,tests performed,1311.0,1285.0,31.0,,1052.0,562.0,0.03,0.03,0.0,,113.0,562.0,0.011,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-31,91779.0,1622.0,1243.714,2237.0,11.0,6.429,18418.777,325.513,249.596,448.935,2.208,1.29,1.87,42.0,8.429,491.0,98.537,,,,,26312.0,2375010.0,476.632,5.28,14853.0,2.981,0.0837,11.9,tests performed,2337.0,2310.0,32.0,,1026.0,717.0,0.05,0.05,0.0,,144.0,716.0,0.014,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,145.6,0.46,-6.65,29.2199087118676\r\nIRL,Europe,Ireland,2021-01-01,93532.0,1753.0,1347.714,2248.0,11.0,7.714,18770.58,351.803,270.468,451.143,2.208,1.548,1.95,50.0,10.034,508.0,101.949,,,,,27389.0,2402399.0,482.128,5.497,15705.0,3.152,0.0858,11.7,tests performed,3140.0,3113.0,32.0,,803.0,738.0,0.06,0.06,0.0,,148.0,738.0,0.015,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-02,96926.0,3394.0,1647.429,2252.0,4.0,7.429,19451.709,681.129,330.616,451.945,0.803,1.491,2.04,56.0,11.238,581.0,116.599,,,,,20846.0,2423245.0,486.312,4.184,16969.0,3.405,0.0971,10.3,tests performed,4152.0,4125.0,32.0,,1012.0,793.0,0.08,0.08,0.0,,159.0,793.0,0.016,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-03,101887.0,4961.0,2251.143,2259.0,7.0,7.857,20447.313,995.604,451.773,453.35,1.405,1.577,2.09,65.0,13.045,673.0,135.062,15.0,3.021,479.0,96.083,28543.0,2451788.0,492.04,5.728,20541.0,4.122,0.1096,9.1,tests performed,4172.0,4143.0,34.0,,20.0,664.0,0.08,0.08,0.0,,133.0,664.0,0.013,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-04,107997.0,6110.0,3014.714,2265.0,6.0,8.571,21673.506,1226.193,605.012,454.554,1.204,1.72,2.08,73.0,14.65,744.0,149.311,,,,,20571.0,2472359.0,496.168,4.128,22136.0,4.442,0.1362,7.3,tests performed,5354.0,5322.0,37.0,,1182.0,738.0,0.11,0.11,0.0,,148.0,737.0,0.015,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-05,113322.0,5325.0,3554.714,2282.0,17.0,9.857,22742.16,1068.654,713.382,457.966,3.412,1.978,2.0,76.0,15.252,817.0,163.961,,,,,19908.0,2492267.0,500.164,3.995,23008.0,4.617,0.1545,6.5,tests performed,8866.0,8829.0,42.0,,3512.0,1230.0,0.18,0.18,0.0,,247.0,1228.0,0.025,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-06,121154.0,7832.0,4428.143,2299.0,17.0,10.429,24313.934,1571.774,888.667,461.378,3.412,2.093,1.9,89.0,17.861,921.0,184.832,,,,,28370.0,2520637.0,505.857,5.693,24563.0,4.929,0.1803,5.5,tests performed,15627.0,15584.0,48.0,,6761.0,2045.0,0.31,0.31,0.0,,410.0,2043.0,0.041,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-07,127657.0,6503.0,5125.429,2307.0,8.0,10.0,25618.996,1305.062,1028.603,462.983,1.605,2.007,1.77,101.0,20.269,1022.0,205.101,,,,,28610.0,2549247.0,511.599,5.742,24891.0,4.995,0.2059,4.9,tests performed,27341.0,27292.0,54.0,,11714.0,3572.0,0.55,0.55,0.0,,717.0,3569.0,0.072,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-08,135884.0,8227.0,6050.286,2327.0,20.0,11.286,27270.042,1651.045,1214.209,466.997,4.014,2.265,1.64,107.0,21.473,1153.0,231.391,,,,,27319.0,2576566.0,517.081,5.483,24881.0,4.993,0.2432,4.1,tests performed,40004.0,39950.0,59.0,,12663.0,5266.0,0.8,0.8,0.0,,1057.0,5262.0,0.106,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-09,140727.0,4843.0,6257.286,2336.0,9.0,12.0,28241.965,971.923,1255.751,468.803,1.806,2.408,1.49,121.0,24.283,1285.0,257.882,,,,,29972.0,2606538.0,523.096,6.015,26185.0,5.255,0.239,4.2,tests performed,48075.0,48017.0,63.0,,8071.0,6275.0,0.96,0.96,0.0,,1259.0,6270.0,0.126,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-10,147613.0,6886.0,6532.286,2344.0,8.0,12.143,29623.89,1381.925,1310.94,470.408,1.605,2.437,1.36,128.0,25.688,1426.0,286.179,29.0,5.842,866.0,173.836,24485.0,2631023.0,528.01,4.914,25605.0,5.139,0.2551,3.9,tests performed,52838.0,52779.0,65.0,,4763.0,6952.0,1.06,1.06,0.0,,1395.0,6948.0,0.139,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-11,152539.0,4926.0,6363.143,2352.0,8.0,12.429,30612.47,988.58,1276.995,472.014,1.605,2.494,1.24,144.0,28.899,1575.0,316.081,,,,,19794.0,2650817.0,531.982,3.972,25494.0,5.116,0.2496,4.0,tests performed,61167.0,61102.0,71.0,,8329.0,7973.0,1.23,1.23,0.0,,1600.0,7969.0,0.16,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-12,155591.0,3052.0,6038.429,2397.0,45.0,16.429,31224.964,612.494,1211.829,481.045,9.031,3.297,1.13,160.0,32.11,1690.0,339.16,,,,,18945.0,2669762.0,535.784,3.802,25356.0,5.089,0.2381,4.2,tests performed,70027.0,69955.0,78.0,,8860.0,8737.0,1.41,1.4,0.0,,1753.0,8732.0,0.175,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-13,159144.0,3553.0,5427.143,2460.0,63.0,23.0,31938.002,713.038,1089.153,493.688,12.643,4.616,1.04,176.0,35.321,1750.0,351.201,,,,,24583.0,2694345.0,540.718,4.933,24815.0,4.98,0.2187,4.6,tests performed,79892.0,79815.0,83.0,,9865.0,9181.0,1.6,1.6,0.0,,1842.0,9176.0,0.184,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-14,163057.0,3913.0,5057.143,2488.0,28.0,25.857,32723.287,785.285,1014.899,499.307,5.619,5.189,0.97,173.0,34.719,1792.0,359.63,,,,,28178.0,2722523.0,546.373,5.655,24754.0,4.968,0.2043,4.9,tests performed,87946.0,87866.0,86.0,,8054.0,8658.0,1.76,1.76,0.0,,1738.0,8653.0,0.174,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-15,166548.0,3491.0,4380.571,2536.0,48.0,29.857,33423.883,700.595,879.12,508.94,9.633,5.992,0.9,187.0,37.528,1846.0,370.467,,,,,22833.0,2745356.0,550.955,4.582,24113.0,4.839,0.1817,5.5,tests performed,95605.0,95523.0,88.0,,7659.0,7943.0,1.92,1.92,0.0,,1594.0,7939.0,0.159,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-16,169780.0,3232.0,4150.429,2595.0,59.0,37.0,34072.501,648.618,832.934,520.781,11.84,7.425,0.85,191.0,38.331,1848.0,370.868,,,,,26663.0,2772019.0,556.306,5.351,23640.0,4.744,0.1756,5.7,tests performed,100816.0,100731.0,91.0,,5211.0,7534.0,2.02,2.02,0.0,,1512.0,7531.0,0.151,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-17,172726.0,2946.0,3587.571,2608.0,13.0,37.714,34663.722,591.222,719.976,523.39,2.609,7.569,0.8,196.0,39.334,1923.0,385.92,59.0,11.885,1078.0,216.339,21441.0,2793460.0,560.609,4.303,23205.0,4.657,0.1546,6.5,tests performed,101923.0,101834.0,95.0,,1107.0,7012.0,2.05,2.04,0.0,,1407.0,7008.0,0.141,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-18,174843.0,2117.0,3186.286,2616.0,8.0,37.714,35088.575,424.853,639.444,524.995,1.605,7.569,0.77,199.0,39.937,2020.0,405.386,,,,,18191.0,2811651.0,564.26,3.651,22976.0,4.611,0.1387,7.2,tests performed,110606.0,110512.0,100.0,,8683.0,7063.0,2.22,2.22,0.0,,1417.0,7059.0,0.142,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-19,176839.0,1996.0,3035.429,2708.0,92.0,44.429,35489.144,400.57,609.169,543.458,18.463,8.916,0.74,209.0,41.943,1954.0,392.141,,,,,19272.0,2830923.0,568.127,3.868,23023.0,4.62,0.1318,7.6,tests performed,118980.0,118870.0,116.0,,8374.0,6993.0,2.39,2.39,0.0,,1403.0,6988.0,0.14,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-20,179324.0,2485.0,2882.857,2768.0,60.0,44.0,35987.85,498.705,578.55,555.499,12.041,8.83,0.72,210.0,42.144,1941.0,389.532,,,,,24296.0,2855219.0,573.003,4.876,22982.0,4.612,0.1254,8.0,tests performed,128367.0,127300.0,1073.0,,9387.0,6925.0,2.58,2.55,0.02,,1390.0,6784.0,0.136,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-21,181922.0,2598.0,2695.0,2818.0,50.0,47.143,36509.232,521.383,540.849,565.534,10.034,9.461,0.7,214.0,42.947,1949.0,391.137,,,,,23196.0,2878415.0,577.658,4.655,22270.0,4.469,0.121,8.3,tests performed,138279.0,136255.0,2030.0,,9912.0,7190.0,2.78,2.73,0.04,,1443.0,6913.0,0.139,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-22,184279.0,2357.0,2533.0,2870.0,52.0,47.714,36982.25,473.017,508.338,575.969,10.436,9.576,0.67,218.0,43.75,1969.0,395.151,,,,,24189.0,2902604.0,582.513,4.854,22464.0,4.508,0.1128,8.9,tests performed,145981.0,142993.0,2994.0,,7702.0,7197.0,2.93,2.87,0.06,,1444.0,6781.0,0.136,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-23,186184.0,1905.0,2343.429,2947.0,77.0,50.286,37364.557,382.307,470.294,591.422,15.453,10.092,0.65,216.0,43.348,1893.0,379.899,,,,,21492.0,2924096.0,586.826,4.313,21725.0,4.36,0.1079,9.3,tests performed,150598.0,147154.0,3450.0,,4617.0,7112.0,3.02,2.95,0.07,,1427.0,6632.0,0.133,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-24,187554.0,1370.0,2118.286,2970.0,23.0,51.714,37639.497,274.94,425.111,596.038,4.616,10.378,0.63,221.0,44.352,1914.0,384.113,66.0,13.295,725.0,145.434,19593.0,2943689.0,590.758,3.932,21461.0,4.307,0.0987,10.1,tests performed,152168.0,148328.0,3846.0,,1570.0,7178.0,3.05,2.98,0.08,,1441.0,6642.0,0.133,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-25,188923.0,1369.0,2011.429,2977.0,7.0,51.571,37914.236,274.739,403.666,597.443,1.405,10.35,0.62,218.0,43.75,1948.0,390.937,,,,,14884.0,2958573.0,593.745,2.987,20989.0,4.212,0.0958,10.4,tests performed,154789.0,149666.0,5129.0,,2621.0,6312.0,3.11,3.0,0.1,,1267.0,5593.0,0.112,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-26,189851.0,928.0,1858.857,3066.0,89.0,51.143,38100.473,186.237,373.047,615.304,17.861,10.264,0.62,216.0,43.348,1823.0,365.851,,,,,16665.0,2975238.0,597.089,3.344,20616.0,4.137,0.0902,11.1,tests performed,159272.0,150654.0,8624.0,,4483.0,5756.0,3.2,3.02,0.17,,1155.0,4541.0,0.091,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-27,191182.0,1331.0,1694.0,3120.0,54.0,50.286,38367.586,267.113,339.962,626.141,10.837,10.092,0.62,212.0,42.545,1727.0,346.585,,,,,22387.0,2997625.0,601.582,4.493,20344.0,4.083,0.0833,12.0,tests performed,168110.0,152797.0,15319.0,,8838.0,5678.0,3.37,3.07,0.31,,1139.0,3642.0,0.073,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-28,192645.0,1463.0,1531.857,3167.0,47.0,49.857,38661.19,293.604,307.423,635.573,9.432,10.006,0.63,214.0,42.947,1620.0,325.112,,,,,21780.0,3019405.0,605.953,4.371,20141.0,4.042,0.0761,13.1,tests performed,180603.0,153756.0,26853.0,,12493.0,6046.0,3.62,3.09,0.54,,1213.0,2500.0,0.05,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-29,193892.0,1247.0,1373.286,3214.0,47.0,49.143,38911.446,250.256,275.599,645.005,9.432,9.862,0.63,211.0,42.345,1552.0,311.465,,,,,21943.0,3041348.0,610.357,4.404,19821.0,3.978,0.0693,14.4,tests performed,193669.0,155300.0,38375.0,,13066.0,6813.0,3.89,3.12,0.77,,1367.0,1758.0,0.035,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-30,195303.0,1411.0,1302.714,3292.0,78.0,49.286,39194.614,283.168,261.437,660.659,15.654,9.891,0.64,213.0,42.746,1494.0,299.825,,,,,21598.0,3062946.0,614.691,4.334,19836.0,3.981,0.0657,15.2,tests performed,202070.0,155908.0,46168.0,,8401.0,7353.0,4.06,3.13,0.93,,1476.0,1251.0,0.025,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-31,196547.0,1244.0,1284.714,3307.0,15.0,48.143,39444.268,249.654,257.824,663.669,3.01,9.662,0.65,211.0,42.345,1515.0,304.04,67.0,13.496,553.0,110.989,17649.0,3080595.0,618.233,3.542,19558.0,3.925,0.0657,15.2,tests performed,206357.0,156113.0,50250.0,,4287.0,7741.0,4.14,3.13,1.01,,1554.0,1112.0,0.022,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,777.6,2.23,19.17,156.053578395249\r\nIRL,Europe,Ireland,2021-02-01,197553.0,1006.0,1232.857,3317.0,10.0,48.571,39646.158,201.89,247.417,665.676,2.007,9.748,0.65,207.0,41.542,1529.0,306.849,,,,,15047.0,3095642.0,621.253,3.02,19581.0,3.93,0.063,15.9,tests performed,215680.0,157105.0,58581.0,,9323.0,8699.0,4.33,3.15,1.18,,1746.0,1063.0,0.021,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-02,198424.0,871.0,1224.714,3418.0,101.0,50.286,39820.956,174.798,245.783,685.945,20.269,10.092,0.67,207.0,41.542,1418.0,284.573,,,,,16329.0,3111971.0,624.53,3.277,19533.0,3.92,0.0627,15.9,tests performed,221586.0,157914.0,63678.0,,5906.0,8902.0,4.45,3.17,1.28,,1787.0,1037.0,0.021,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-03,199430.0,1006.0,1178.286,3512.0,94.0,56.0,40022.846,201.89,236.466,704.81,18.865,11.238,0.67,202.0,40.539,1366.0,274.137,,,,,18442.0,3130413.0,628.231,3.701,18970.0,3.807,0.0621,16.1,tests performed,229815.0,159282.0,70539.0,,8229.0,8815.0,4.61,3.2,1.42,,1769.0,926.0,0.019,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-04,200744.0,1314.0,1157.0,3586.0,74.0,59.857,40286.548,263.702,232.194,719.661,14.851,12.013,0.68,187.0,37.528,1308.0,262.498,,,,,20214.0,3150627.0,632.287,4.057,18746.0,3.762,0.0617,16.2,tests performed,241744.0,160680.0,81070.0,,11929.0,8734.0,4.85,3.22,1.63,,1753.0,989.0,0.02,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-05,201763.0,1019.0,1124.429,3621.0,35.0,58.143,40491.047,204.499,225.657,726.685,7.024,11.668,0.69,181.0,36.324,1258.0,252.463,,,,,20278.0,3170905.0,636.357,4.07,18508.0,3.714,0.0608,16.5,tests performed,253709.0,164041.0,89674.0,,11965.0,8577.0,5.09,3.29,1.8,,1721.0,1249.0,0.025,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-06,202548.0,785.0,1035.0,3674.0,53.0,54.571,40648.586,157.539,207.71,737.321,10.636,10.952,0.69,180.0,36.124,1199.0,240.623,,,,,19497.0,3190402.0,640.27,3.913,18208.0,3.654,0.0568,17.6,tests performed,258451.0,164920.0,93537.0,,4742.0,8054.0,5.19,3.31,1.88,,1616.0,1287.0,0.026,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-07,203568.0,1020.0,1003.0,3686.0,12.0,54.143,40853.286,204.7,201.288,739.729,2.408,10.866,0.71,179.0,35.923,1203.0,241.425,54.0,10.877,417.0,83.595,15377.0,3205779.0,643.356,3.086,17883.0,3.589,0.0561,17.8,tests performed,260054.0,165228.0,94833.0,,1603.0,7671.0,5.22,3.32,1.9,,1539.0,1302.0,0.026,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-08,204397.0,829.0,977.714,3687.0,1.0,52.857,41019.654,166.369,196.214,739.93,0.201,10.608,0.72,175.0,35.12,1212.0,243.232,,,,,12697.0,3218476.0,645.904,2.548,17548.0,3.522,0.0557,17.9,tests performed,262065.0,166368.0,95704.0,,2011.0,6626.0,5.26,3.34,1.92,,1330.0,1323.0,0.027,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-09,204940.0,543.0,930.857,3752.0,65.0,47.714,41128.627,108.973,186.81,752.975,13.045,9.576,0.74,178.0,35.722,1104.0,221.558,,,,,15126.0,3233602.0,648.939,3.036,17376.0,3.487,0.0536,18.7,tests performed,266806.0,170580.0,96234.0,,4741.0,6460.0,5.35,3.42,1.93,,1296.0,1809.0,0.036,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-10,205939.0,999.0,929.857,3794.0,42.0,40.286,41329.113,200.486,186.609,761.403,8.429,8.085,0.76,170.0,34.117,1032.0,207.108,,,,,18213.0,3251815.0,652.594,3.655,17343.0,3.481,0.0536,18.7,tests performed,276172.0,179369.0,96811.0,,9366.0,6622.0,5.54,3.6,1.94,,1329.0,2870.0,0.058,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-11,206801.0,862.0,865.286,3846.0,52.0,37.143,41502.104,172.991,173.651,771.839,10.436,7.454,0.77,170.0,34.117,984.0,197.475,,,,,17372.0,3269187.0,656.081,3.486,16937.0,3.399,0.0511,19.6,tests performed,282753.0,185515.0,97246.0,,6581.0,5858.0,5.67,3.72,1.95,,1176.0,3548.0,0.071,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-12,207720.0,919.0,851.0,3865.0,19.0,34.857,41686.535,184.431,170.784,775.652,3.813,6.995,0.79,173.0,34.719,959.0,192.458,,,,,18841.0,3288028.0,659.862,3.781,16732.0,3.358,0.0509,19.7,tests performed,287631.0,189877.0,97762.0,,4878.0,4846.0,5.77,3.81,1.96,,973.0,3691.0,0.074,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-13,208796.0,1076.0,892.571,3931.0,66.0,36.714,41902.473,215.938,179.127,788.897,13.245,7.368,0.8,170.0,34.117,898.0,180.216,,,,,18174.0,3306202.0,663.509,3.647,16543.0,3.32,0.054,18.5,tests performed,290730.0,191066.0,99672.0,,3099.0,4611.0,5.83,3.83,2.0,,925.0,3735.0,0.075,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-14,209582.0,786.0,859.143,3948.0,17.0,37.429,42060.212,157.739,172.418,792.309,3.412,7.511,0.8,160.0,32.11,899.0,180.417,47.0,9.467,309.0,62.041,14450.0,3320652.0,666.409,2.9,16410.0,3.293,0.0524,19.1,tests performed,293428.0,193744.0,99692.0,,2698.0,4768.0,5.89,3.89,2.0,,957.0,4074.0,0.082,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-15,210402.0,820.0,857.857,3948.0,0.0,37.286,42224.775,164.563,172.16,792.309,0.0,7.483,0.81,158.0,31.708,916.0,183.829,,,,,11452.0,3332104.0,668.707,2.298,16233.0,3.258,0.0528,18.9,tests performed,303232.0,195676.0,107564.0,,9804.0,5881.0,6.09,3.93,2.16,,1180.0,4187.0,0.084,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-16,211113.0,711.0,881.857,3980.0,32.0,32.571,42367.463,142.688,176.977,798.731,6.422,6.537,0.82,155.0,31.106,861.0,172.791,,,,,13119.0,3345223.0,671.34,2.633,15946.0,3.2,0.0553,18.1,tests performed,316988.0,201282.0,115714.0,,13756.0,7169.0,6.36,4.04,2.32,,1439.0,4386.0,0.088,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-17,211751.0,638.0,830.286,4036.0,56.0,34.571,42495.501,128.038,166.627,809.969,11.238,6.938,0.82,154.0,30.906,831.0,166.77,,,,,17122.0,3362345.0,674.776,3.436,15790.0,3.169,0.0526,19.0,tests performed,335151.0,210986.0,124173.0,,18163.0,8426.0,6.73,4.23,2.49,,1691.0,4517.0,0.091,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-18,212647.0,896.0,835.143,4082.0,46.0,33.714,42675.315,179.815,167.602,819.201,9.232,6.766,0.82,151.0,30.304,771.0,154.729,,,,,15829.0,3378174.0,677.953,3.177,15570.0,3.125,0.0536,18.6,tests performed,351921.0,219425.0,132504.0,,16770.0,9881.0,7.06,4.4,2.66,,1983.0,4844.0,0.097,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-19,213400.0,753.0,811.429,4109.0,27.0,34.857,42826.432,151.117,162.843,824.62,5.419,6.995,0.83,153.0,30.705,754.0,151.317,,,,,17036.0,3395210.0,681.372,3.419,15312.0,3.073,0.053,18.9,tests performed,367860.0,228788.0,139080.0,,15939.0,11461.0,7.38,4.59,2.79,,2300.0,5559.0,0.112,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-20,214378.0,978.0,797.429,4135.0,26.0,29.143,43022.703,196.271,160.033,829.837,5.218,5.849,0.84,149.0,29.902,719.0,144.293,,,,,15606.0,3410816.0,684.504,3.132,14945.0,2.999,0.0534,18.7,tests performed,377288.0,234652.0,142645.0,,9428.0,12365.0,7.57,4.71,2.86,,2481.0,6227.0,0.125,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-21,215057.0,679.0,782.143,4136.0,1.0,26.857,43158.969,136.266,156.965,830.038,0.201,5.39,0.83,151.0,30.304,744.0,149.311,38.0,7.654,316.0,63.451,14901.0,3425717.0,687.494,2.99,15009.0,3.012,0.0521,19.2,tests performed,379400.0,235749.0,143664.0,,2112.0,12282.0,7.61,4.73,2.88,,2465.0,6001.0,0.12,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-22,215743.0,686.0,763.0,4137.0,1.0,27.0,43296.64,137.671,153.124,830.239,0.201,5.419,0.83,156.0,31.307,726.0,145.698,,,,,11828.0,3437545.0,689.868,2.374,15063.0,3.023,0.0507,19.7,tests performed,384430.0,239673.0,144771.0,,5030.0,11600.0,7.71,4.81,2.91,,2328.0,6285.0,0.126,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-23,216300.0,557.0,741.0,4181.0,44.0,28.714,43408.422,111.782,148.708,839.069,8.83,5.763,0.83,151.0,30.304,693.0,139.076,,,,,13841.0,3451386.0,692.645,2.778,15166.0,3.044,0.0489,20.5,tests performed,398818.0,253005.0,145827.0,,14388.0,11690.0,8.0,5.08,2.93,,2346.0,7389.0,0.148,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-24,216840.0,540.0,727.0,4237.0,56.0,28.714,43516.793,108.371,145.899,850.307,11.238,5.763,0.82,136.0,27.293,652.0,130.847,,,,,16607.0,3467993.0,695.978,3.333,15093.0,3.029,0.0482,20.8,tests performed,417809.0,269908.0,147917.0,,18991.0,11808.0,8.38,5.42,2.97,,2370.0,8417.0,0.169,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-25,217478.0,638.0,690.143,4271.0,34.0,27.0,43644.83,128.038,138.502,857.131,6.823,5.419,0.83,141.0,28.297,591.0,118.606,,,,,18206.0,3486199.0,699.632,3.654,15432.0,3.097,0.0447,22.4,tests performed,437591.0,287946.0,149663.0,,19782.0,12239.0,8.78,5.78,3.0,,2456.0,9789.0,0.196,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-26,218251.0,773.0,693.0,4300.0,29.0,27.286,43799.961,155.13,139.076,862.951,5.82,5.476,0.84,136.0,27.293,574.0,115.194,,,,,19178.0,3505377.0,703.481,3.849,15738.0,3.158,0.044,22.7,tests performed,456401.0,304002.0,152417.0,,18810.0,12649.0,9.16,6.1,3.06,,2538.0,10745.0,0.216,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-27,218980.0,729.0,657.429,4313.0,13.0,25.429,43946.261,146.3,131.937,865.56,2.609,5.103,0.84,134.0,26.892,550.0,110.377,,,,,18273.0,3523650.0,707.148,3.667,16119.0,3.235,0.0408,24.5,tests performed,466057.0,312960.0,153116.0,,9656.0,12681.0,9.35,6.28,3.07,,2545.0,11187.0,0.225,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-28,219592.0,612.0,647.857,4319.0,6.0,26.143,44069.081,122.82,130.016,866.764,1.204,5.247,0.84,134.0,26.892,554.0,111.18,32.0,6.446,196.0,39.279,13102.0,3536752.0,709.777,2.629,15862.0,3.183,0.0408,24.5,tests performed,468526.0,315383.0,153163.0,,2469.0,12732.0,9.4,6.33,3.07,,2555.0,11376.0,0.228,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,1144.4,3.04,13.19,229.6652714963\r\nIRL,Europe,Ireland,2021-03-01,220273.0,681.0,647.143,4319.0,0.0,26.0,44205.748,136.667,129.873,866.764,0.0,5.218,0.83,117.0,23.48,540.0,108.371,,,,,12210.0,3548962.0,712.228,2.45,15917.0,3.194,0.0407,24.6,tests performed,474858.0,320937.0,153941.0,,6332.0,12918.0,9.53,6.44,3.09,,2592.0,11609.0,0.233,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-02,220630.0,357.0,618.571,4333.0,14.0,21.714,44277.393,71.645,124.139,869.573,2.81,4.358,0.83,115.0,23.079,498.0,99.942,,,,,11680.0,3560642.0,714.572,2.344,15608.0,3.132,0.0396,25.2,tests performed,488602.0,333082.0,155540.0,,13744.0,12826.0,9.81,6.68,3.12,,2574.0,11440.0,0.23,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-03,221189.0,559.0,621.286,4357.0,24.0,17.143,44389.577,112.184,124.683,874.39,4.816,3.44,0.82,110.0,22.075,489.0,98.136,,,,,15277.0,3575919.0,717.638,3.066,15418.0,3.094,0.0403,24.8,tests performed,502928.0,345918.0,157031.0,,14326.0,12160.0,10.09,6.94,3.15,,2440.0,10859.0,0.218,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-04,221649.0,460.0,595.857,4396.0,39.0,17.857,44481.892,92.316,119.58,882.216,7.827,3.584,0.82,105.0,21.072,460.0,92.316,,,,,14244.0,3590163.0,720.496,2.859,14852.0,2.981,0.0401,24.9,tests performed,523302.0,364613.0,158712.0,,20374.0,12244.0,10.5,7.32,3.19,,2457.0,10952.0,0.22,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-05,222169.0,520.0,559.714,4405.0,9.0,15.0,44586.249,104.357,112.327,884.023,1.806,3.01,0.83,100.0,20.069,426.0,85.492,,,,,16640.0,3606803.0,723.836,3.339,14489.0,2.908,0.0386,25.9,tests performed,544090.0,383016.0,161102.0,,20788.0,12527.0,10.92,7.69,3.23,,2514.0,11288.0,0.227,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-06,222699.0,530.0,531.286,4419.0,14.0,15.143,44692.613,106.364,106.622,886.832,2.81,3.039,0.84,103.0,20.671,414.0,83.084,,,,,13325.0,3620128.0,726.51,2.674,13783.0,2.766,0.0385,25.9,tests performed,554626.0,393423.0,161232.0,,10536.0,12653.0,11.13,7.9,3.24,,2539.0,11495.0,0.231,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-07,223219.0,520.0,518.143,4422.0,3.0,14.714,44796.97,104.357,103.984,887.434,0.602,2.953,0.86,103.0,20.671,423.0,84.89,34.0,6.849,168.0,33.639,13756.0,3633884.0,729.27,2.761,13876.0,2.785,0.0373,26.8,tests performed,556133.0,394922.0,161241.0,,1507.0,12515.0,11.16,7.93,3.24,,2512.0,11363.0,0.228,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-08,223651.0,432.0,482.571,4422.0,0.0,14.714,44883.666,86.696,96.845,887.434,0.0,2.953,0.87,101.0,20.269,418.0,83.887,,,,,10682.0,3644566.0,731.414,2.144,13658.0,2.741,0.0353,28.3,tests performed,564237.0,401545.0,162724.0,,8104.0,12768.0,11.32,8.06,3.27,,2562.0,11515.0,0.231,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-09,223957.0,306.0,475.286,4452.0,30.0,17.0,44945.076,61.41,95.383,893.455,6.021,3.412,0.89,93.0,18.664,397.0,79.672,,,,,13585.0,3658151.0,734.14,2.726,13930.0,2.796,0.0341,29.3,tests performed,581092.0,415315.0,165811.0,,16855.0,13213.0,11.66,8.33,3.33,,2652.0,11748.0,0.236,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-10,224588.0,631.0,485.571,4499.0,47.0,20.286,45071.709,126.633,97.447,902.887,9.432,4.071,0.92,92.0,18.463,370.0,74.254,,,,,15592.0,3673743.0,737.269,3.129,13975.0,2.805,0.0347,28.8,tests performed,598732.0,428986.0,169783.0,,17640.0,13686.0,12.02,8.61,3.41,,2747.0,11867.0,0.238,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-11,225179.0,591.0,504.286,4509.0,10.0,16.143,45190.315,118.606,101.203,904.894,2.007,3.24,0.93,87.0,17.46,359.0,72.046,,,,,15750.0,3689493.0,740.43,3.161,14190.0,2.848,0.0355,28.1,tests performed,619223.0,447391.0,171870.0,,20491.0,13703.0,12.43,8.98,3.45,,2750.0,11825.0,0.237,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-12,225820.0,641.0,521.571,4518.0,9.0,16.143,45318.955,128.64,104.672,906.7,1.806,3.24,0.94,86.0,17.259,344.0,69.036,,,,,16499.0,3705992.0,743.741,3.311,14170.0,2.844,0.0368,27.2,tests performed,637816.0,464660.0,173196.0,,18593.0,13389.0,12.8,9.33,3.48,,2687.0,11663.0,0.234,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-13,226358.0,538.0,522.714,4534.0,16.0,16.429,45426.924,107.969,104.902,909.911,3.211,3.297,0.94,85.0,17.058,340.0,68.233,,,,,16203.0,3722195.0,746.993,3.252,14581.0,2.926,0.0358,27.9,tests performed,646221.0,472901.0,173360.0,,8405.0,13085.0,12.97,9.49,3.48,,2626.0,11354.0,0.228,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-14,226741.0,383.0,503.143,4534.0,0.0,16.0,45503.787,76.863,100.974,909.911,0.0,3.211,0.94,86.0,17.259,349.0,70.039,28.0,5.64,156.0,31.222,13349.0,3735544.0,749.672,2.679,14523.0,2.915,0.0346,28.9,tests performed,646589.0,473255.0,173375.0,,368.0,12922.0,12.98,9.5,3.48,,2593.0,11190.0,0.225,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-15,227316.0,575.0,523.571,4534.0,0.0,16.0,45619.181,115.395,105.074,909.911,0.0,3.211,0.96,85.0,17.058,360.0,72.247,,,,,10586.0,3746130.0,751.797,2.124,14509.0,2.912,0.0361,27.7,tests performed,650158.0,475846.0,174353.0,,3569.0,12274.0,13.05,9.55,3.5,,2463.0,10614.0,0.213,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-16,227663.0,347.0,529.429,4552.0,18.0,14.286,45688.819,69.638,106.249,913.524,3.612,2.867,0.97,85.0,17.058,355.0,71.244,,,,,11392.0,3757522.0,754.083,2.286,14196.0,2.849,0.0373,26.8,tests performed,662847.0,484733.0,178155.0,,12689.0,11679.0,13.3,9.73,3.58,,2344.0,9917.0,0.199,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-17,228215.0,552.0,518.143,4566.0,14.0,9.571,45799.598,110.779,103.984,916.333,2.81,1.921,0.98,82.0,16.456,350.0,70.24,,,,,15990.0,3773512.0,757.292,3.209,14253.0,2.86,0.0364,27.5,tests performed,670099.0,489585.0,180561.0,,7252.0,10195.0,13.45,9.83,3.62,,2046.0,8657.0,0.174,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-18,228796.0,581.0,516.714,4566.0,0.0,8.143,45916.197,116.599,103.697,916.333,0.0,1.634,0.99,83.0,16.657,345.0,69.237,,,,,13514.0,3787026.0,760.004,2.712,13933.0,2.796,0.0371,27.0,tests performed,686421.0,501242.0,185228.0,,16322.0,9600.0,13.78,10.06,3.72,,1927.0,7693.0,0.154,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-19,229306.0,510.0,498.0,4576.0,10.0,8.286,46018.547,102.35,99.942,918.34,2.007,1.663,1.0,87.0,17.46,336.0,67.431,,,,,12942.0,3799968.0,762.601,2.597,13425.0,2.694,0.0371,27.0,tests performed,702817.0,511536.0,191331.0,,16396.0,9286.0,14.1,10.27,3.84,,1864.0,6697.0,0.134,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-20,229831.0,525.0,496.143,4585.0,9.0,7.286,46123.907,105.36,99.569,920.146,1.806,1.462,1.01,83.0,16.657,328.0,65.825,,,,,16621.0,3816589.0,765.937,3.336,13485.0,2.706,0.0368,27.2,tests performed,711097.0,516710.0,194439.0,,8280.0,9268.0,14.27,10.37,3.9,,1860.0,6258.0,0.126,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-21,230599.0,768.0,551.143,4587.0,2.0,7.571,46278.034,154.127,110.607,920.548,0.401,1.519,1.03,80.0,16.055,360.0,72.247,24.0,4.834,194.0,38.876,14882.0,3831471.0,768.923,2.987,13704.0,2.75,0.0402,24.9,tests performed,714726.0,520297.0,194483.0,,3629.0,9734.0,14.34,10.44,3.9,,1953.0,6720.0,0.135,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-22,231119.0,520.0,543.286,4588.0,1.0,7.714,46382.391,104.357,109.03,920.748,0.201,1.548,1.02,80.0,16.055,359.0,72.046,,,,,12722.0,3844193.0,771.476,2.553,14009.0,2.811,0.0388,25.8,tests performed,724452.0,527638.0,196868.0,,9726.0,10613.0,14.54,10.59,3.95,,2130.0,7399.0,0.148,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-23,231484.0,365.0,545.857,4610.0,22.0,8.286,46455.641,73.25,109.546,925.163,4.415,1.663,1.02,76.0,15.252,357.0,71.645,,,,,15044.0,3859237.0,774.496,3.019,14531.0,2.916,0.0376,26.6,tests performed,744321.0,540140.0,204238.0,,19869.0,11639.0,14.94,10.84,4.1,,2336.0,7915.0,0.159,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-24,232164.0,680.0,564.143,4628.0,18.0,8.857,46592.108,136.467,113.216,928.776,3.612,1.778,1.02,75.0,15.051,329.0,66.026,,,,,20112.0,3879349.0,778.532,4.036,15120.0,3.034,0.0373,26.8,tests performed,767627.0,553691.0,213994.0,,23306.0,13933.0,15.41,11.11,4.29,,2796.0,9158.0,0.184,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-25,232758.0,594.0,566.0,4631.0,3.0,9.286,46711.315,119.208,113.588,929.378,0.602,1.864,1.01,75.0,15.051,312.0,62.614,,,,,17979.0,3897328.0,782.14,3.608,15757.0,3.162,0.0359,27.8,tests performed,798626.0,574489.0,224197.0,,30999.0,16029.0,16.03,11.53,4.5,,3217.0,10464.0,0.21,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-26,233327.0,569.0,574.429,4651.0,20.0,10.714,46825.506,114.19,115.28,933.391,4.014,2.15,1.0,66.0,13.245,317.0,63.618,,,,,18491.0,3915819.0,785.851,3.711,16550.0,3.321,0.0347,28.8,tests performed,827721.0,594126.0,233656.0,,29095.0,17843.0,16.61,11.92,4.69,,3581.0,11799.0,0.237,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-27,233937.0,610.0,586.571,4653.0,2.0,9.714,46947.924,122.419,117.717,933.793,0.401,1.95,1.0,65.0,13.045,304.0,61.009,,,,,21134.0,3936953.0,790.092,4.241,17195.0,3.451,0.0341,29.3,tests performed,844713.0,605805.0,238969.0,,16992.0,19088.0,16.95,12.16,4.8,,3831.0,12728.0,0.255,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-28,234541.0,604.0,563.143,4666.0,13.0,11.286,47069.139,121.214,113.015,936.402,2.609,2.265,0.99,68.0,13.647,322.0,64.621,21.0,4.23,146.0,29.208,19619.0,3956572.0,794.029,3.937,17872.0,3.587,0.0315,31.7,tests performed,,,,,,21221.0,,,,,4259.0,13995.0,0.281,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-29,235078.0,537.0,565.571,4667.0,1.0,11.286,47176.907,107.768,113.502,936.602,0.201,2.265,0.98,70.0,14.048,331.0,66.427,,,,,13507.0,3970079.0,796.74,2.711,17984.0,3.609,0.0314,31.8,tests performed,881831.0,630722.0,251175.0,,,22483.0,17.7,12.66,5.04,,4512.0,14726.0,0.296,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-30,235444.0,366.0,565.714,4681.0,14.0,10.143,47250.358,73.451,113.531,939.412,2.81,2.036,0.96,65.0,13.045,310.0,62.213,,,,,14957.0,3985036.0,799.742,3.002,17971.0,3.607,0.0315,31.8,tests performed,908027.0,646456.0,261639.0,,26196.0,23387.0,18.22,12.97,5.25,,4693.0,15188.0,0.305,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-31,235854.0,410.0,527.143,4687.0,6.0,8.429,47332.64,82.281,105.79,940.616,1.204,1.691,0.95,64.0,12.844,297.0,59.604,,,,,21152.0,4006188.0,803.987,4.245,18120.0,3.636,0.0291,34.4,tests performed,939231.0,666069.0,273234.0,,31204.0,24515.0,18.85,13.37,5.48,,4920.0,16054.0,0.322,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,882.6,2.18,-9.05,177.125627947077\r\nIRL,Europe,Ireland,2021-04-01,236600.0,746.0,548.857,4705.0,18.0,10.571,47482.352,149.712,110.148,944.229,3.612,2.122,0.96,63.0,12.643,274.0,54.988,,,,,19535.0,4025723.0,807.907,3.92,18342.0,3.681,0.0299,33.4,tests performed,972995.0,686138.0,286933.0,,33764.0,24910.0,19.53,13.77,5.76,,4999.0,15950.0,0.32,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-02,237187.0,587.0,551.429,4713.0,8.0,8.857,47600.154,117.803,110.664,945.834,1.605,1.778,0.94,62.0,12.443,264.0,52.981,,,,,19031.0,4044754.0,811.726,3.819,18419.0,3.696,0.0299,33.4,tests performed,985100.0,693630.0,291549.0,,12105.0,22483.0,19.77,13.92,5.85,,4512.0,14215.0,0.285,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-03,237695.0,508.0,536.857,4715.0,2.0,8.857,47702.103,101.949,107.74,946.235,0.401,1.778,0.92,65.0,13.045,242.0,48.566,,,,,16662.0,4061416.0,815.07,3.344,17780.0,3.568,0.0302,33.1,tests performed,988244.0,696613.0,291710.0,,3144.0,20504.0,19.83,13.98,5.85,,4115.0,12973.0,0.26,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-04,238148.0,453.0,515.286,4718.0,3.0,7.429,47793.014,90.911,103.411,946.837,0.602,1.491,0.9,58.0,11.64,242.0,48.566,26.0,5.237,118.0,23.769,13946.0,4075362.0,817.869,2.799,16970.0,3.406,0.0304,32.9,tests performed,992211.0,699993.0,292300.0,,3967.0,18420.0,19.91,14.05,5.87,,3697.0,11676.0,0.234,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-05,238466.0,318.0,484.0,4718.0,0.0,7.286,47856.832,63.818,97.132,946.837,0.0,1.462,0.89,58.0,11.64,260.0,52.178,,,,,11954.0,4087316.0,820.268,2.399,16748.0,3.361,0.0289,34.6,tests performed,1012249.0,711900.0,300437.0,,20038.0,18631.0,20.31,14.29,6.03,,3739.0,11597.0,0.233,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-06,238907.0,441.0,494.714,4727.0,9.0,6.571,47945.335,88.503,99.282,948.644,1.806,1.319,0.89,60.0,12.041,261.0,52.379,,,,,13864.0,4101180.0,823.05,2.782,16592.0,3.33,0.0298,33.5,tests performed,1040946.0,730165.0,310872.0,,28697.0,18988.0,20.89,14.65,6.24,,3811.0,11958.0,0.24,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-07,239325.0,418.0,495.857,4732.0,5.0,6.429,48029.222,83.887,99.512,949.647,1.003,1.29,0.88,56.0,11.238,232.0,46.559,,,,,16151.0,4117331.0,826.291,3.241,15878.0,3.186,0.0312,32.0,tests performed,1071578.0,750266.0,321413.0,,30632.0,18907.0,21.51,15.06,6.45,,3794.0,12028.0,0.241,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-08,239723.0,398.0,446.143,4737.0,5.0,4.571,48109.095,79.873,89.535,950.65,1.003,0.917,0.87,55.0,11.038,226.0,45.355,,,,,19214.0,4136545.0,830.147,3.856,15832.0,3.177,0.0282,35.5,tests performed,1101339.0,770902.0,330549.0,,29761.0,18335.0,22.1,15.47,6.63,,3680.0,12109.0,0.243,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-09,240192.0,469.0,429.286,4769.0,32.0,8.0,48203.216,94.122,86.152,957.072,6.422,1.605,0.88,53.0,10.636,212.0,42.545,,,,,16795.0,4153340.0,833.518,3.371,15512.0,3.113,0.0277,36.1,tests performed,1116579.0,782005.0,334695.0,,15240.0,18783.0,22.41,15.69,6.72,,3769.0,12625.0,0.253,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-10,240643.0,451.0,421.143,4783.0,14.0,9.714,48293.726,90.509,84.518,959.882,2.81,1.95,0.88,52.0,10.436,208.0,41.743,,,,,16849.0,4170189.0,836.899,3.381,15539.0,3.118,0.0271,36.9,tests performed,1119720.0,784813.0,335030.0,,3141.0,18782.0,22.47,15.75,6.72,,3769.0,12600.0,0.253,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-11,240945.0,302.0,399.571,4785.0,2.0,9.571,48354.333,60.607,80.188,960.283,0.401,1.921,0.88,53.0,10.636,213.0,42.746,15.0,3.021,81.0,16.316,14355.0,4184544.0,839.78,2.881,15597.0,3.13,0.0256,39.0,tests performed,1130192.0,792526.0,337795.0,,10472.0,19712.0,22.68,15.9,6.78,,3956.0,13219.0,0.265,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-12,241330.0,385.0,409.143,4785.0,0.0,9.571,48431.597,77.264,82.109,960.283,0.0,1.921,0.89,50.0,10.034,227.0,45.556,,,,,11918.0,4196462.0,842.172,2.392,15592.0,3.129,0.0262,38.1,tests performed,1150181.0,803963.0,346348.0,,19989.0,19705.0,23.08,16.13,6.95,,3955.0,13152.0,0.264,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-13,241684.0,354.0,396.714,4803.0,18.0,10.857,48502.64,71.043,79.615,963.896,3.612,2.179,0.9,48.0,9.633,206.0,41.341,,,,,13650.0,4210112.0,844.911,2.739,15562.0,3.123,0.0255,39.2,tests performed,1177015.0,824240.0,352907.0,,26834.0,19438.0,23.62,16.54,7.08,,3901.0,13439.0,0.27,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-14,242105.0,421.0,397.143,4812.0,9.0,11.429,48587.129,84.489,79.701,965.702,1.806,2.294,0.9,49.0,9.834,192.0,38.532,,,,,16872.0,4226984.0,848.297,3.386,15665.0,3.144,0.0254,39.4,tests performed,1214810.0,851284.0,363659.0,,37795.0,20462.0,24.38,17.08,7.3,,4106.0,14431.0,0.29,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-15,242402.0,297.0,382.714,4820.0,8.0,11.857,48646.733,59.604,76.805,967.307,1.605,2.38,0.9,51.0,10.235,184.0,36.926,,,,,14926.0,4241910.0,851.293,2.995,15052.0,3.021,0.0254,39.3,tests performed,1252507.0,879186.0,373455.0,,37697.0,21595.0,25.14,17.64,7.49,,4334.0,15469.0,0.31,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-16,242819.0,417.0,375.286,4831.0,11.0,8.857,48730.419,83.686,75.315,969.515,2.208,1.778,0.92,53.0,10.636,190.0,38.13,,,,,15404.0,4257314.0,854.384,3.091,14853.0,2.981,0.0253,39.6,tests performed,1272809.0,894971.0,377973.0,,20302.0,22319.0,25.54,17.96,7.59,,4479.0,16138.0,0.324,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-17,243238.0,419.0,370.714,4835.0,4.0,7.429,48814.507,84.088,74.397,970.318,0.803,1.491,0.94,50.0,10.034,183.0,36.726,,,,,14999.0,4272313.0,857.394,3.01,14589.0,2.928,0.0254,39.4,tests performed,1274286.0,895998.0,378423.0,,1477.0,22081.0,25.57,17.98,7.59,,4431.0,15884.0,0.319,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-18,243508.0,270.0,366.143,4836.0,1.0,7.286,48868.692,54.185,73.48,970.518,0.201,1.462,0.96,47.0,9.432,181.0,36.324,18.0,3.626,93.0,18.733,14507.0,4286820.0,860.306,2.911,14611.0,2.932,0.0251,39.9,tests performed,1283179.0,902680.0,380634.0,,8893.0,21855.0,25.75,18.12,7.64,,4386.0,15736.0,0.316,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-19,243911.0,403.0,368.714,4836.0,0.0,7.286,48949.568,80.877,73.996,970.518,0.0,1.462,0.99,50.0,10.034,183.0,36.726,,,,,11881.0,4298701.0,862.69,2.384,14606.0,2.931,0.0252,39.6,tests performed,1305441.0,917680.0,387896.0,,22262.0,22180.0,26.2,18.42,7.78,,4451.0,16245.0,0.326,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-20,244297.0,386.0,373.286,4847.0,11.0,6.286,49027.033,77.465,74.913,972.726,2.208,1.261,1.01,48.0,9.633,179.0,35.923,,,,,15085.0,4313786.0,865.717,3.027,14811.0,2.972,0.0252,39.7,tests performed,1341871.0,944299.0,397708.0,,36430.0,23551.0,26.93,18.95,7.98,,4726.0,17151.0,0.344,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-21,244695.0,398.0,370.0,4856.0,9.0,6.286,49106.906,79.873,74.254,974.532,1.806,1.261,1.03,47.0,9.432,182.0,36.525,,,,,19058.0,4332844.0,869.542,3.825,15123.0,3.035,0.0245,40.9,tests performed,1385559.0,975852.0,409843.0,,43688.0,24393.0,27.81,19.58,8.22,,4895.0,17795.0,0.357,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-22,245310.0,615.0,415.429,4866.0,10.0,6.571,49230.328,123.422,83.371,976.539,2.007,1.319,1.05,48.0,9.633,176.0,35.321,,,,,18095.0,4350939.0,873.173,3.631,15576.0,3.126,0.0267,37.5,tests performed,1431409.0,1009369.0,422176.0,,45850.0,25557.0,28.73,20.26,8.47,,5129.0,18598.0,0.373,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-23,245743.0,433.0,417.714,4867.0,1.0,5.143,49317.225,86.897,83.829,976.74,0.201,1.032,1.04,48.0,9.633,166.0,33.314,,,,,19557.0,4370496.0,877.098,3.925,16169.0,3.245,0.0258,38.7,tests performed,1461972.0,1032973.0,429135.0,,30563.0,27023.0,29.34,20.73,8.61,,5423.0,19715.0,0.396,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-24,246204.0,461.0,423.714,4872.0,5.0,5.286,49409.742,92.516,85.034,977.743,1.003,1.061,1.04,46.0,9.232,162.0,32.511,,,,,17803.0,4388299.0,880.671,3.573,16569.0,3.325,0.0256,39.1,tests performed,1471944.0,1042673.0,429408.0,,9972.0,28237.0,29.54,20.93,8.62,,5667.0,20954.0,0.421,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-25,246633.0,429.0,446.429,4873.0,1.0,5.286,49495.836,86.094,89.592,977.944,0.201,1.061,1.04,45.0,9.031,174.0,34.919,16.0,3.223,102.0,20.546,15829.0,4404128.0,883.848,3.177,16758.0,3.363,0.0266,37.5,tests performed,1490454.0,1058180.0,432412.0,,18510.0,29611.0,29.91,21.24,8.68,,5943.0,22214.0,0.446,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-26,247069.0,436.0,451.143,4874.0,1.0,5.429,49583.335,87.499,90.538,978.144,0.201,1.089,1.04,46.0,9.232,184.0,36.926,,,,,12839.0,4416967.0,886.424,2.577,16895.0,3.391,0.0267,37.4,tests performed,1524045.0,1084018.0,440170.0,,33591.0,31229.0,30.59,21.75,8.83,,6267.0,23763.0,0.477,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-27,247489.0,420.0,456.0,4884.0,10.0,5.286,49667.624,84.288,91.513,980.151,2.007,1.061,1.04,47.0,9.432,153.0,30.705,,,,,15273.0,4432240.0,889.489,3.065,16922.0,3.396,0.0269,37.1,tests performed,1558542.0,1109971.0,448718.0,,34497.0,30953.0,31.28,22.28,9.01,,6212.0,23667.0,0.475,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-28,247857.0,368.0,451.714,4896.0,12.0,5.714,49741.476,73.853,90.653,982.56,2.408,1.147,1.03,45.0,9.031,153.0,30.705,,,,,20498.0,4452738.0,893.603,4.114,17128.0,3.437,0.0264,37.9,tests performed,1601441.0,1141587.0,460003.0,,42899.0,30840.0,32.14,22.91,9.23,,6189.0,23676.0,0.475,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-29,248326.0,469.0,430.857,4899.0,3.0,4.714,49835.598,94.122,86.467,983.162,0.602,0.946,1.03,44.0,8.83,154.0,30.906,,,,,19880.0,4472618.0,897.593,3.99,17383.0,3.489,0.0248,40.3,tests performed,1650949.0,1177615.0,473487.0,,49508.0,31363.0,33.13,23.63,9.5,,6294.0,24035.0,0.482,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-30,248870.0,544.0,446.714,4903.0,4.0,5.143,49944.771,109.173,89.649,983.964,0.803,1.032,1.04,44.0,8.83,139.0,27.895,,,,,22296.0,4494914.0,902.067,4.474,17774.0,3.567,0.0251,39.8,tests performed,1674068.0,1194091.0,480141.0,,23119.0,30299.0,33.6,23.96,9.64,,6081.0,23017.0,0.462,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,810.6,1.88,-2.77,162.676222540109\r\nIRL,Europe,Ireland,2021-05-01,249437.0,567.0,461.857,4906.0,3.0,4.857,50058.56,113.789,92.688,984.566,0.602,0.975,1.03,41.0,8.228,123.0,24.684,,,,,18934.0,4513848.0,905.867,3.8,17936.0,3.6,0.0258,38.8,tests performed,1687324.0,1206465.0,481030.0,,13256.0,30769.0,33.86,24.21,9.65,,6175.0,23399.0,0.47,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-02,249838.0,401.0,457.857,4906.0,0.0,4.714,50139.035,80.475,91.886,984.566,0.0,0.946,1.02,41.0,8.228,127.0,25.487,14.0,2.82,78.0,15.712,17992.0,4531840.0,909.478,3.611,18245.0,3.662,0.0251,39.8,tests performed,1702387.0,1220641.0,481927.0,,15063.0,30276.0,34.16,24.5,9.67,,6076.0,23209.0,0.466,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-03,250290.0,452.0,460.143,4906.0,0.0,4.571,50229.746,90.71,92.344,984.566,0.0,0.917,1.01,40.0,8.027,129.0,25.889,,,,,13379.0,4545219.0,912.163,2.685,18322.0,3.677,0.0251,39.8,tests performed,1735663.0,1247180.0,488667.0,,33276.0,30231.0,34.83,25.03,9.81,,6067.0,23309.0,0.468,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-04,250672.0,382.0,454.714,4908.0,2.0,3.429,50306.408,76.662,91.255,984.968,0.401,0.688,0.99,41.0,8.228,144.0,28.899,,,,,14160.0,4559379.0,915.004,2.842,18163.0,3.645,0.025,39.9,tests performed,1781079.0,1279224.0,502105.0,,45416.0,31791.0,35.74,25.67,10.08,,6380.0,24179.0,0.485,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-05,251087.0,415.0,461.429,4915.0,7.0,2.714,50389.692,83.285,92.602,986.373,1.405,0.545,0.98,37.0,7.425,137.0,27.494,,,,,19503.0,4578882.0,918.918,3.914,18021.0,3.617,0.0256,39.1,tests performed,1832699.0,1316518.0,516555.0,,51620.0,33037.0,36.78,26.42,10.37,,6630.0,24990.0,0.502,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-06,251474.0,387.0,449.714,4921.0,6.0,3.143,50467.358,77.666,90.251,987.577,1.204,0.631,0.97,36.0,7.225,131.0,26.29,,,,,20862.0,4599744.0,923.105,4.187,18161.0,3.645,0.0248,40.4,tests performed,1888281.0,1357086.0,531659.0,,55582.0,33905.0,37.9,27.23,10.67,,6804.0,25639.0,0.515,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-07,251904.0,430.0,433.429,4918.0,-3.0,2.143,50553.653,86.295,86.983,986.975,-0.602,0.43,0.97,34.0,6.823,127.0,25.487,,,,,18793.0,4618537.0,926.877,3.771,17660.0,3.544,0.0245,40.7,tests performed,1920782.0,1382592.0,538660.0,,32501.0,35245.0,38.55,27.75,10.81,,7073.0,26929.0,0.54,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-08,252303.0,399.0,409.429,4919.0,1.0,1.857,50633.727,80.074,82.167,987.175,0.201,0.373,0.98,33.0,6.623,110.0,22.075,,,,,23787.0,4642324.0,931.65,4.774,18354.0,3.683,0.0223,44.8,tests performed,1941278.0,1402198.0,539551.0,,20496.0,36279.0,38.96,28.14,10.83,,7281.0,27962.0,0.561,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-09,252809.0,506.0,424.429,4921.0,2.0,2.143,50735.274,101.547,85.177,987.577,0.401,0.43,0.99,31.0,6.221,116.0,23.28,9.0,1.813,84.0,16.92,17071.0,4659395.0,935.076,3.426,18222.0,3.657,0.0233,42.9,tests performed,1974720.0,1431068.0,544288.0,,33442.0,38905.0,39.63,28.72,10.92,,7808.0,30061.0,0.603,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-10,253189.0,380.0,414.143,4921.0,0.0,2.143,50811.535,76.261,83.113,987.577,0.0,0.43,0.99,31.0,6.221,124.0,24.885,,,,,13518.0,4672913.0,937.789,2.713,18242.0,3.661,0.0227,44.0,tests performed,2023436.0,1465034.0,559185.0,,48716.0,41110.0,40.61,29.4,11.22,,8250.0,31122.0,0.625,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-11,253567.0,378.0,413.571,4929.0,8.0,3.0,50887.394,75.859,82.998,989.182,1.605,0.602,0.99,34.0,6.823,117.0,23.48,,,,,16710.0,4689623.0,941.143,3.353,18606.0,3.734,0.0222,45.0,tests performed,2075627.0,1496345.0,580216.0,,52191.0,42078.0,41.65,30.03,11.64,,8444.0,31017.0,0.622,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-12,254013.0,446.0,418.0,4937.0,8.0,3.143,50976.9,89.506,83.887,990.788,1.605,0.631,0.99,34.0,6.823,109.0,21.875,,,,,19634.0,4709257.0,945.083,3.94,18625.0,3.738,0.0224,44.6,tests performed,2137067.0,1532355.0,605785.0,,61440.0,43481.0,42.89,30.75,12.16,,8726.0,30834.0,0.619,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-13,254450.0,437.0,425.143,4937.0,0.0,2.286,51064.6,87.7,85.32,990.788,0.0,0.459,0.98,36.0,7.225,111.0,22.276,,,,,19701.0,4728958.0,949.037,3.954,18459.0,3.704,0.023,43.4,tests performed,2203290.0,1570666.0,633925.0,,66223.0,45001.0,44.22,31.52,12.72,,9031.0,30511.0,0.612,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-14,254870.0,420.0,423.714,4941.0,4.0,3.286,51148.888,84.288,85.034,991.59,0.803,0.659,0.98,39.0,7.827,,,,,,,19450.0,4748408.0,952.94,3.903,18553.0,3.723,0.0228,43.8,tests performed,2244416.0,1599396.0,646326.0,,41126.0,46233.0,45.04,32.1,12.97,,9278.0,30972.0,0.622,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-15,255331.0,461.0,432.571,4941.0,0.0,3.143,51241.405,92.516,86.811,991.59,0.0,0.631,0.99,40.0,8.027,,,,,,,21847.0,4770255.0,957.324,4.384,18276.0,3.668,0.0237,42.2,tests performed,2268635.0,1622480.0,647466.0,,24219.0,46765.0,45.53,32.56,12.99,,9385.0,31469.0,0.632,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-16,255706.0,375.0,413.857,4941.0,0.0,2.857,51316.662,75.257,83.055,991.59,0.0,0.573,0.99,42.0,8.429,,,4.0,0.806,,,14373.0,4784628.0,960.209,2.884,17890.0,3.59,0.0231,43.2,tests performed,2307921.0,1657868.0,651474.0,,39286.0,47600.0,46.32,33.27,13.07,,9553.0,32400.0,0.65,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-17,256085.0,379.0,413.714,4941.0,0.0,2.857,51392.722,76.06,83.027,991.59,0.0,0.573,1.0,42.0,8.429,110.0,22.075,,,,,13345.0,4797973.0,962.887,2.678,17866.0,3.585,0.0232,43.2,tests performed,2359383.0,1696908.0,664012.0,,51462.0,47992.0,47.35,34.05,13.33,,9631.0,33125.0,0.665,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-18,256450.0,365.0,411.857,4941.0,0.0,1.714,51465.972,73.25,82.654,991.59,0.0,0.344,1.01,39.0,7.827,102.0,20.47,,,,,16964.0,4814937.0,966.291,3.404,17902.0,3.593,0.023,43.5,tests performed,2413996.0,1733992.0,681736.0,,54613.0,48338.0,48.45,34.8,13.68,,9701.0,33950.0,0.681,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-19,256976.0,526.0,423.286,4941.0,0.0,0.571,51571.533,105.561,84.948,991.59,0.0,0.115,1.02,38.0,7.626,101.0,20.269,,,,,20743.0,4835680.0,970.454,4.163,18060.0,3.624,0.0234,42.7,tests performed,2472662.0,1773044.0,701468.0,,58666.0,47942.0,49.62,35.58,14.08,,9621.0,34384.0,0.69,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-20,257446.0,470.0,428.0,4941.0,0.0,0.571,51665.856,94.323,85.894,991.59,0.0,0.115,1.01,38.0,7.626,103.0,20.671,,,,,18572.0,4854252.0,974.181,3.727,17899.0,3.592,0.0239,41.8,tests performed,2536446.0,1813663.0,739550.0,,63784.0,47594.0,50.9,36.4,14.84,,9551.0,34714.0,0.697,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-21,257979.0,533.0,444.143,4941.0,0.0,0.0,51772.822,106.966,89.133,991.59,0.0,0.0,1.0,38.0,7.626,107.0,21.473,,,,,18950.0,4873202.0,977.984,3.803,17828.0,3.578,0.0249,40.1,tests performed,2576636.0,1843645.0,763260.0,,40190.0,47460.0,51.71,37.0,15.32,,9525.0,34893.0,0.7,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-22,258363.0,384.0,433.143,4941.0,0.0,0.0,51849.885,77.063,86.926,991.59,0.0,0.0,0.99,42.0,8.429,110.0,22.075,,,,,23519.0,4896721.0,982.704,4.72,18067.0,3.626,0.024,41.7,tests performed,2600460.0,1861976.0,778952.0,,23824.0,47404.0,52.19,37.37,15.63,,9513.0,34214.0,0.687,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-23,258810.0,447.0,443.429,4941.0,0.0,0.0,51939.592,89.707,88.99,991.59,0.0,0.0,0.99,43.0,8.63,116.0,23.28,7.0,1.41,88.0,17.726,16285.0,4913006.0,985.972,3.268,18340.0,3.681,0.0242,41.4,tests performed,2639450.0,1892813.0,795542.0,,38990.0,47361.0,52.97,37.99,15.97,,9505.0,33564.0,0.674,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-24,259159.0,349.0,439.143,4941.0,0.0,0.0,52009.631,70.039,88.13,991.59,0.0,0.0,0.99,44.0,8.83,127.0,25.487,,,,,12772.0,4925778.0,988.536,2.563,18258.0,3.664,0.0241,41.6,tests performed,2689266.0,1926198.0,815184.0,,49816.0,47126.0,53.97,38.66,16.36,,9458.0,32756.0,0.657,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-25,259512.0,353.0,437.429,4941.0,0.0,0.0,52080.474,70.842,87.786,991.59,0.0,0.0,0.98,41.0,8.228,103.0,20.671,,,,,16092.0,4941870.0,991.765,3.229,18133.0,3.639,0.0241,41.5,tests performed,2737466.0,1949047.0,843571.0,,48200.0,46210.0,54.94,39.11,16.93,,9274.0,30722.0,0.617,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-26,259957.0,445.0,425.857,4941.0,0.0,0.0,52169.779,89.305,85.464,991.59,0.0,0.0,0.98,41.0,8.228,99.0,19.868,,,,,21087.0,4962957.0,995.997,4.232,18182.0,3.649,0.0234,42.7,tests performed,2790805.0,1966456.0,880045.0,,53339.0,45449.0,56.01,39.46,17.66,,9121.0,27630.0,0.554,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-27,260389.0,432.0,420.429,4941.0,0.0,0.0,52256.475,86.696,84.374,991.59,0.0,0.0,0.98,39.0,7.827,101.0,20.269,,,,,17794.0,4980751.0,999.568,3.571,18071.0,3.627,0.0233,43.0,tests performed,2850961.0,1994860.0,913328.0,,60156.0,44931.0,57.21,40.03,18.33,,9017.0,25885.0,0.519,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-28,260850.0,461.0,410.143,4941.0,0.0,0.0,52348.992,92.516,82.31,991.59,0.0,0.0,0.97,38.0,7.626,99.0,19.868,,,,,17881.0,4998632.0,1003.156,3.588,17919.0,3.596,0.0229,43.7,tests performed,2883174.0,2019725.0,921189.0,,32213.0,43791.0,57.86,40.53,18.49,,8788.0,25154.0,0.505,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-29,261306.0,456.0,420.429,4941.0,0.0,0.0,52440.505,91.513,84.374,991.59,0.0,0.0,0.97,35.0,7.024,90.0,18.062,,,,,18905.0,5017537.0,1006.95,3.794,17259.0,3.464,0.0244,41.1,tests performed,2909158.0,2044073.0,923023.0,,25984.0,44100.0,58.38,41.02,18.52,,8850.0,26014.0,0.522,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-30,261673.0,367.0,409.0,4941.0,0.0,0.0,52514.156,73.652,82.081,991.59,0.0,0.0,0.97,35.0,7.024,99.0,19.868,15.0,3.021,71.0,14.302,16723.0,5034260.0,1010.306,3.356,17322.0,3.476,0.0236,42.4,tests performed,2942260.0,2069904.0,933714.0,,33102.0,43259.0,59.05,41.54,18.74,,8681.0,25299.0,0.508,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-31,262043.0,370.0,412.0,4941.0,0.0,0.0,52588.41,74.254,82.683,991.59,0.0,0.0,0.97,35.0,7.024,98.0,19.667,,,,,14129.0,5048389.0,1013.142,2.835,17516.0,3.515,0.0235,42.5,tests performed,2984648.0,2100875.0,948756.0,,42388.0,42197.0,59.9,42.16,19.04,,8468.0,24954.0,0.501,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,857.4,1.88,1.81,172.068336054638\r\nIRL,Europe,Ireland,2021-06-01,262380.0,337.0,409.714,4941.0,0.0,0.0,52656.042,67.631,82.224,991.59,0.0,0.0,0.97,34.0,6.823,89.0,17.861,,,,,16921.0,5065310.0,1016.538,3.396,17634.0,3.539,0.0232,43.0,tests performed,3027964.0,2123368.0,973558.0,,43316.0,41500.0,60.77,42.61,19.54,,8328.0,24903.0,0.5,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-02,262787.0,407.0,404.286,4941.0,0.0,0.0,52737.721,81.679,81.135,991.59,0.0,0.0,0.97,34.0,6.823,93.0,18.664,,,,,23042.0,5088352.0,1021.162,4.624,17914.0,3.595,0.0226,44.3,tests performed,3077081.0,2141860.0,1006146.0,,49117.0,40897.0,61.75,42.98,20.19,,8207.0,25058.0,0.503,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-03,263252.0,465.0,409.0,4941.0,0.0,0.0,52831.04,93.319,82.081,991.59,0.0,0.0,0.96,30.0,6.021,84.0,16.858,,,,,19005.0,5107357.0,1024.976,3.814,18087.0,3.63,0.0226,44.2,tests performed,3129352.0,2170858.0,1029548.0,,52271.0,39770.0,62.8,43.57,20.66,,7981.0,25143.0,0.505,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-04,263769.0,517.0,417.0,4941.0,0.0,0.0,52934.795,103.755,83.686,991.59,0.0,0.0,0.95,28.0,5.619,86.0,17.259,,,,,19272.0,5126629.0,1028.844,3.868,18285.0,3.67,0.0228,43.8,tests performed,3161578.0,2191671.0,1040978.0,,32226.0,39772.0,63.45,43.98,20.89,,7982.0,24564.0,0.493,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-05,264185.0,416.0,411.286,4941.0,0.0,0.0,53018.28,83.485,82.539,991.59,0.0,0.0,0.93,29.0,5.82,74.0,14.851,,,,,19182.0,5145811.0,1032.693,3.85,18325.0,3.678,0.0224,44.6,tests performed,3185244.0,2211498.0,1044840.0,,23666.0,39441.0,63.92,44.38,20.97,,7915.0,23918.0,0.48,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-06,264498.0,313.0,403.571,4941.0,0.0,0.0,53081.095,62.815,80.991,991.59,0.0,0.0,0.92,27.0,5.419,70.0,14.048,14.0,2.82,65.0,13.093,14558.0,5160369.0,1035.615,2.922,18016.0,3.616,0.0224,44.6,tests performed,3209389.0,2231166.0,1049338.0,,24145.0,38161.0,64.41,44.78,21.06,,7658.0,23037.0,0.462,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-07,264875.0,377.0,404.571,4941.0,0.0,0.0,53156.754,75.659,81.192,991.59,0.0,0.0,0.91,26.0,5.218,69.0,13.847,,,,,13686.0,5174055.0,1038.361,2.747,17952.0,3.603,0.0225,44.4,tests performed,3253913.0,2257455.0,1067599.0,,44524.0,38466.0,65.3,45.3,21.43,,7720.0,22369.0,0.449,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-08,265114.0,239.0,390.571,4941.0,0.0,0.0,53204.718,47.964,78.382,991.59,0.0,0.0,0.89,27.0,5.419,77.0,15.453,,,,,12211.0,5186266.0,1040.812,2.451,17279.0,3.468,0.0226,44.2,tests performed,3306709.0,2290237.0,1087769.0,,52796.0,39821.0,66.36,45.96,21.83,,7992.0,23838.0,0.478,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-09,265341.0,227.0,364.857,4941.0,0.0,0.0,53250.273,45.556,73.222,991.59,0.0,0.0,0.89,27.0,5.419,76.0,15.252,,,,,15850.0,5202116.0,1043.993,3.181,16252.0,3.262,0.0224,44.5,tests performed,3361863.0,2318012.0,1115395.0,,55154.0,40683.0,67.47,46.52,22.38,,8165.0,25165.0,0.505,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-10,265739.0,398.0,355.286,4941.0,0.0,0.0,53330.146,79.873,71.301,991.59,0.0,0.0,0.89,23.0,4.616,70.0,14.048,,,,,17980.0,5220096.0,1047.601,3.608,16106.0,3.232,0.0221,45.3,tests performed,3420964.0,2344313.0,1148210.0,,59101.0,41659.0,68.65,47.05,23.04,,8360.0,24779.0,0.497,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-11,266058.0,319.0,327.0,4941.0,0.0,0.0,53394.165,64.019,65.624,991.59,0.0,0.0,0.9,23.0,4.616,60.0,12.041,,,,,16980.0,5237076.0,1051.009,3.408,15778.0,3.166,0.0207,48.3,tests performed,3452750.0,2356466.0,1167931.0,,31786.0,41596.0,69.29,47.29,23.44,,8348.0,23542.0,0.472,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-12,266489.0,431.0,329.143,4941.0,0.0,0.0,53480.661,86.496,66.054,991.59,0.0,0.0,0.91,22.0,4.415,58.0,11.64,,,,,17777.0,5254853.0,1054.576,3.568,15577.0,3.126,0.0211,47.3,tests performed,3480138.0,2365743.0,1186859.0,,27388.0,42128.0,69.84,47.48,23.82,,8455.0,22035.0,0.442,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-13,266804.0,315.0,329.429,4941.0,0.0,0.0,53543.877,63.216,66.112,991.59,0.0,0.0,0.91,22.0,4.415,62.0,12.443,8.0,1.611,50.0,10.072,14404.0,5269257.0,1057.467,2.891,15555.0,3.122,0.0212,47.2,tests performed,3527247.0,2381656.0,1218074.0,,47109.0,45408.0,70.79,47.8,24.45,,9113.0,21499.0,0.431,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-14,267006.0,202.0,304.429,4941.0,0.0,0.0,53584.416,40.539,61.095,991.59,0.0,0.0,0.91,23.0,4.616,67.0,13.446,,,,,11377.0,5280634.0,1059.75,2.283,15226.0,3.056,0.02,50.0,tests performed,3583384.0,2396383.0,1259676.0,,56137.0,47067.0,71.91,48.09,25.28,,9446.0,19847.0,0.398,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-15,267289.0,283.0,310.714,4941.0,0.0,0.0,53641.21,56.794,62.356,991.59,0.0,0.0,0.93,23.0,4.616,60.0,12.041,,,,,13889.0,5294523.0,1062.538,2.787,15465.0,3.104,0.0201,49.8,tests performed,3645092.0,2409857.0,1308109.0,,61708.0,48340.0,73.15,48.36,26.25,,9701.0,17089.0,0.343,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-16,267576.0,287.0,319.286,4941.0,0.0,0.0,53698.807,57.597,64.076,991.59,0.0,0.0,0.94,19.0,3.813,57.0,11.439,,,,,17356.0,5311879.0,1066.021,3.483,15680.0,3.147,0.0204,49.1,tests performed,3709553.0,2431784.0,1351150.0,,64461.0,49670.0,74.45,48.8,27.12,,9968.0,16253.0,0.326,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-17,267949.0,373.0,315.714,4979.0,38.0,5.429,53773.663,74.856,63.359,999.217,7.626,1.089,0.95,18.0,3.612,54.0,10.837,,,,,17936.0,5329815.0,1069.62,3.6,15674.0,3.146,0.0201,49.6,tests performed,3771892.0,2444195.0,1401612.0,,62339.0,50133.0,75.7,49.05,28.13,,10061.0,14269.0,0.286,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-18,268251.0,302.0,313.286,4979.0,0.0,5.429,53834.27,60.607,62.872,999.217,0.0,1.089,0.96,15.0,3.01,53.0,10.636,,,,,15662.0,5345477.0,1072.763,3.143,15486.0,3.108,0.0202,49.4,tests performed,3811170.0,2450786.0,1434710.0,,39278.0,51203.0,76.48,49.18,28.79,,10276.0,13474.0,0.27,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-19,268644.0,393.0,307.857,4979.0,0.0,5.429,53913.14,78.87,61.783,999.217,0.0,1.089,0.97,14.0,2.81,48.0,9.633,,,,,17162.0,5362639.0,1076.208,3.444,15398.0,3.09,0.02,50.0,tests performed,3845817.0,2459362.0,1460947.0,,34647.0,52240.0,77.18,49.36,29.32,,10484.0,13374.0,0.268,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-20,269037.0,393.0,319.0,4979.0,0.0,5.429,53992.009,78.87,64.019,999.217,0.0,1.089,0.98,15.0,3.01,49.0,9.834,8.0,1.611,49.0,9.87,13845.0,5376484.0,1078.986,2.779,15318.0,3.074,0.0208,48.0,tests performed,3893886.0,2475233.0,1493692.0,,48069.0,52377.0,78.14,49.67,29.98,,10511.0,13368.0,0.268,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-21,269321.0,284.0,330.714,4979.0,0.0,5.429,54049.004,56.995,66.37,999.217,0.0,1.089,0.99,13.0,2.609,53.0,10.636,,,,,10994.0,5387478.0,1081.192,2.206,15263.0,3.063,0.0217,46.2,tests performed,3952995.0,2490933.0,1537797.0,,59109.0,52802.0,79.33,49.99,30.86,,10597.0,13507.0,0.271,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-22,269495.0,174.0,315.143,4979.0,0.0,5.429,54083.924,34.919,63.245,999.217,0.0,1.089,0.99,13.0,2.609,39.0,7.827,,,,,14078.0,5401556.0,1084.018,2.825,15290.0,3.068,0.0206,48.5,tests performed,4013007.0,2511713.0,1577893.0,,60012.0,52559.0,80.54,50.41,31.67,,10548.0,14551.0,0.292,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-23,269793.0,298.0,316.714,4989.0,10.0,6.857,54143.728,59.804,63.56,1001.223,2.007,1.376,1.0,13.0,2.609,41.0,8.228,,,,,18414.0,5419970.0,1087.713,3.695,15442.0,3.099,0.0205,48.8,tests performed,4077014.0,2531598.0,1623027.0,,64007.0,52494.0,81.82,50.81,32.57,,10535.0,14259.0,0.286,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-24,270097.0,304.0,306.857,4989.0,0.0,1.429,54204.737,61.009,61.582,1001.223,0.0,0.287,1.02,13.0,2.609,47.0,9.432,,,,,17237.0,5437207.0,1091.172,3.459,15342.0,3.079,0.02,50.0,tests performed,4142874.0,2547441.0,1673847.0,,65860.0,52997.0,83.14,51.12,33.59,,10636.0,14749.0,0.296,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-25,270477.0,380.0,318.0,4989.0,0.0,1.429,54280.998,76.261,63.818,1001.223,0.0,0.287,1.05,13.0,2.609,38.0,7.626,,,,,17450.0,5454657.0,1094.674,3.502,15597.0,3.13,0.0204,49.0,tests performed,4182690.0,2556830.0,1704745.0,,39816.0,53074.0,83.94,51.31,34.21,,10651.0,15149.0,0.304,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-26,270920.0,443.0,325.143,4989.0,0.0,1.429,54369.902,88.904,65.252,1001.223,0.0,0.287,1.07,13.0,2.609,43.0,8.63,,,,,18725.0,5473382.0,1098.432,3.758,15820.0,3.175,0.0206,48.7,tests performed,4221747.0,2565512.0,1735165.0,,39057.0,53704.0,84.72,51.49,34.82,,10778.0,15164.0,0.304,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-27,271260.0,340.0,317.571,4989.0,0.0,1.429,54438.135,68.233,63.732,1001.223,0.0,0.287,1.09,15.0,3.01,47.0,9.432,3.0,0.604,43.0,8.662,14771.0,5488153.0,1101.396,2.964,15953.0,3.202,0.0199,50.2,tests performed,4270819.0,2590086.0,1760149.0,,49072.0,53848.0,85.71,51.98,35.32,,10807.0,16408.0,0.329,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-28,271589.0,329.0,324.0,4989.0,0.0,1.429,54504.161,66.026,65.022,1001.223,0.0,0.287,1.11,16.0,3.211,49.0,9.834,,,,,13363.0,5501516.0,1104.078,2.682,16291.0,3.269,0.0199,50.3,tests performed,4330424.0,2618857.0,1791760.0,,59605.0,53918.0,86.91,52.56,35.96,,10821.0,18275.0,0.367,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-29,271931.0,342.0,348.0,4989.0,0.0,1.429,54572.795,68.635,69.839,1001.223,0.0,0.287,1.12,16.0,3.211,46.0,9.232,,,,,15721.0,5517237.0,1107.233,3.155,16526.0,3.317,0.0211,47.5,tests performed,4390049.0,2641802.0,1828992.0,,59625.0,53863.0,88.1,53.02,36.71,,10810.0,18584.0,0.373,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-30,271908.0,-23.0,302.143,4998.0,9.0,1.286,54568.18,-4.616,60.636,1003.03,1.806,0.258,1.13,14.0,2.81,44.0,8.83,,,,,20569.0,5537806.0,1111.361,4.128,16834.0,3.378,0.0179,55.7,tests performed,4453570.0,2657162.0,1877756.0,,63521.0,53794.0,89.38,53.33,37.68,,10796.0,17938.0,0.36,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,782.8,1.63,-3.14,157.09714656353\r\nIRL,Europe,Ireland,2021-07-01,272784.0,876.0,383.857,5000.0,2.0,1.571,54743.981,175.801,77.035,1003.431,0.401,0.315,1.14,14.0,2.81,44.0,8.83,,,,,19135.0,5556941.0,1115.201,3.84,17105.0,3.433,0.0224,44.6,tests performed,4514940.0,2671437.0,1925645.0,,61370.0,53152.0,90.61,53.61,38.65,,10667.0,17714.0,0.355,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-02,273296.0,512.0,402.714,5000.0,0.0,1.571,54846.732,102.751,80.819,1003.431,0.0,0.315,1.16,14.0,2.81,46.0,9.232,,,,,18961.0,5575902.0,1119.007,3.805,17321.0,3.476,0.0233,43.0,tests performed,4554921.0,2681099.0,1956443.0,,39981.0,53176.0,91.41,53.81,39.26,,10672.0,17753.0,0.356,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-03,273744.0,448.0,403.429,5000.0,0.0,1.571,54936.639,89.907,80.963,1003.431,0.0,0.315,1.17,14.0,2.81,42.0,8.429,,,,,20129.0,5596031.0,1123.046,4.04,17521.0,3.516,0.023,43.4,tests performed,4589177.0,2687659.0,1984349.0,,34256.0,52490.0,92.1,53.94,39.82,,10534.0,17450.0,0.35,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-04,274306.0,562.0,435.143,5000.0,0.0,1.571,55049.425,112.786,87.327,1003.431,0.0,0.315,1.18,14.0,2.81,48.0,9.633,4.0,0.806,56.0,11.28,17150.0,5613181.0,1126.488,3.442,17861.0,3.584,0.0244,41.0,tests performed,4643140.0,2708368.0,2022915.0,,53963.0,53189.0,93.18,54.35,40.6,,10674.0,16897.0,0.339,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-05,274641.0,335.0,436.0,5000.0,0.0,1.571,55116.655,67.23,87.499,1003.431,0.0,0.315,1.18,14.0,2.81,51.0,10.235,,,,,13733.0,5626914.0,1129.244,2.756,17914.0,3.595,0.0243,41.1,tests performed,4708997.0,2726053.0,2076548.0,,65857.0,54082.0,94.5,54.71,41.67,,10854.0,15314.0,0.307,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-06,275038.0,397.0,443.857,5000.0,0.0,1.571,55196.327,79.672,89.076,1003.431,0.0,0.315,1.2,16.0,3.211,54.0,10.837,,,,,16463.0,5643377.0,1132.548,3.304,18020.0,3.616,0.0246,40.6,tests performed,4777104.0,2750593.0,2125136.0,,68107.0,55294.0,95.87,55.2,42.65,,11097.0,15542.0,0.312,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-07,275571.0,533.0,523.286,5006.0,6.0,1.143,55303.293,106.966,105.016,1004.635,1.204,0.229,1.22,17.0,3.412,60.0,12.041,,,,,22292.0,5665669.0,1137.022,4.474,18266.0,3.666,0.0286,34.9,tests performed,4846130.0,2774185.0,2176535.0,,69026.0,56080.0,97.26,55.67,43.68,,11254.0,16718.0,0.336,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-08,276104.0,533.0,474.286,5006.0,0.0,0.857,55410.259,106.966,95.183,1004.635,0.0,0.172,1.23,17.0,3.412,58.0,11.64,,,,,20558.0,5686227.0,1141.147,4.126,18469.0,3.706,0.0257,38.9,tests performed,4910938.0,2794066.0,2227973.0,,64808.0,56571.0,98.56,56.07,44.71,,11353.0,17518.0,0.352,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-09,276735.0,631.0,491.286,5006.0,0.0,0.857,55536.892,126.633,98.594,1004.635,0.0,0.172,1.25,15.0,3.01,50.0,10.034,,,,,19848.0,5706075.0,1145.13,3.983,18596.0,3.732,0.0264,37.9,tests performed,4947466.0,2806897.0,2256004.0,,36528.0,56078.0,99.29,56.33,45.27,,11254.0,17971.0,0.361,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-10,277316.0,581.0,510.286,5006.0,0.0,0.857,55653.49,116.599,102.407,1004.635,0.0,0.172,1.27,16.0,3.211,52.0,10.436,,,,,20023.0,5726098.0,1149.149,4.018,18581.0,3.729,0.0275,36.4,tests performed,4980760.0,2824184.0,2274148.0,,33294.0,55940.0,99.96,56.68,45.64,,11226.0,19504.0,0.391,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-11,277892.0,576.0,512.286,5006.0,0.0,0.857,55769.086,115.595,102.809,1004.635,0.0,0.172,1.3,16.0,3.211,58.0,11.64,2.0,0.403,60.0,12.086,18603.0,5744701.0,1152.882,3.733,18789.0,3.771,0.0273,36.7,tests performed,5035380.0,2847226.0,2311786.0,,54620.0,56034.0,101.05,57.14,46.39,,11245.0,19837.0,0.398,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-12,278464.0,572.0,546.143,5006.0,0.0,0.857,55883.878,114.792,109.603,1004.635,0.0,0.172,1.33,16.0,3.211,63.0,12.643,,,,,15286.0,5759987.0,1155.95,3.068,19010.0,3.815,0.0287,34.8,tests performed,5100172.0,2875650.0,2356612.0,,64792.0,55882.0,102.35,57.71,47.29,,11215.0,21371.0,0.429,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-13,279053.0,589.0,573.571,5006.0,0.0,0.857,56002.082,118.204,115.108,1004.635,0.0,0.172,1.37,17.0,3.412,62.0,12.443,,,,,15775.0,5775762.0,1159.116,3.166,18912.0,3.795,0.0303,33.0,tests performed,5165635.0,2905621.0,2401410.0,,65463.0,55504.0,103.67,58.31,48.19,,11139.0,22147.0,0.444,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-14,279790.0,737.0,602.714,5018.0,12.0,1.714,56149.988,147.906,120.956,1007.043,2.408,0.344,1.4,20.0,4.014,73.0,14.65,,,,,20989.0,5796751.0,1163.328,4.212,18726.0,3.758,0.0322,31.1,tests performed,5227305.0,2938642.0,2439600.0,,61670.0,54454.0,104.9,58.97,48.96,,10928.0,23494.0,0.471,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-15,280784.0,994.0,668.571,5018.0,0.0,1.714,56349.47,199.482,134.173,1007.043,0.0,0.344,1.44,22.0,4.415,80.0,16.055,,,,,19504.0,5816255.0,1167.242,3.914,18575.0,3.728,0.036,27.8,tests performed,5287066.0,2971203.0,2475933.0,,59761.0,53733.0,106.1,59.63,49.69,,10783.0,25305.0,0.508,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-16,281954.0,1170.0,745.571,5018.0,0.0,1.714,56584.273,234.803,149.626,1007.043,0.0,0.344,1.45,23.0,4.616,79.0,15.854,,,,,20952.0,5837207.0,1171.447,4.205,18733.0,3.759,0.0398,25.1,tests performed,5322378.0,2987251.0,2499845.0,,35312.0,53559.0,106.81,59.95,50.17,,10749.0,25765.0,0.517,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-17,283331.0,1377.0,859.286,5018.0,0.0,1.714,56860.618,276.345,172.447,1007.043,0.0,0.344,1.45,22.0,4.415,78.0,15.654,,,,,22292.0,5859499.0,1175.921,4.474,19057.0,3.824,0.0451,22.2,tests performed,5356762.0,3005951.0,2517444.0,,34384.0,53715.0,107.5,60.33,50.52,,10780.0,25967.0,0.521,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-18,284510.0,1179.0,945.429,5018.0,0.0,1.714,57097.227,236.609,189.734,1007.043,0.0,0.344,1.43,22.0,4.415,91.0,18.262,4.0,0.806,112.0,22.56,19210.0,5878709.0,1179.776,3.855,19144.0,3.842,0.0494,20.2,tests performed,5405944.0,3036911.0,2541878.0,,49182.0,52938.0,108.49,60.95,51.01,,10624.0,27098.0,0.544,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-19,285581.0,1071.0,1016.714,5018.0,0.0,1.714,57312.162,214.935,204.041,1007.043,0.0,0.344,1.4,20.0,4.014,101.0,20.269,,,,,17005.0,5895714.0,1183.188,3.413,19390.0,3.891,0.0524,19.1,tests performed,5462007.0,3075025.0,2567493.0,,56063.0,51691.0,109.61,61.71,51.53,,10374.0,28482.0,0.572,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-20,286691.0,1110.0,1091.143,5018.0,0.0,1.714,57534.923,222.762,218.977,1007.043,0.0,0.344,1.37,21.0,4.214,89.0,17.861,,,,,20211.0,5915925.0,1187.244,4.056,20023.0,4.018,0.0545,18.4,tests performed,5518669.0,3112054.0,2593975.0,,56662.0,50433.0,110.75,62.45,52.06,,10121.0,29490.0,0.592,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-21,287951.0,1260.0,1165.857,5026.0,8.0,1.143,57787.788,252.865,233.971,1008.649,1.605,0.229,1.34,22.0,4.415,96.0,19.266,,,,,24462.0,5940387.0,1192.154,4.909,20519.0,4.118,0.0568,17.6,tests performed,5574689.0,3152357.0,2616592.0,,56020.0,49626.0,111.88,63.26,52.51,,9959.0,30531.0,0.613,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-22,289139.0,1188.0,1193.571,5026.0,0.0,1.143,58026.203,238.415,239.533,1008.649,0.0,0.229,1.3,23.0,4.616,95.0,19.065,,,,,21846.0,5962233.0,1196.538,4.384,20854.0,4.185,0.0572,17.5,tests performed,5627847.0,3184900.0,2642781.0,,53158.0,48683.0,112.94,63.92,53.04,,9770.0,30528.0,0.613,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-23,290525.0,1386.0,1224.429,5026.0,0.0,1.143,58304.354,278.151,245.726,1008.649,0.0,0.229,1.27,22.0,4.415,106.0,21.273,,,,,21509.0,5983742.0,1200.854,4.317,20934.0,4.201,0.0585,17.1,tests performed,5660066.0,3202489.0,2659653.0,,32219.0,48241.0,113.59,64.27,53.38,,9681.0,30748.0,0.617,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-24,291870.0,1345.0,1219.857,5026.0,0.0,1.143,58574.277,269.923,244.808,1008.649,0.0,0.229,1.24,21.0,4.214,105.0,21.072,,,,,22454.0,6006196.0,1205.361,4.506,20957.0,4.206,0.0582,17.2,tests performed,5689286.0,3218173.0,2674216.0,,29220.0,47503.0,114.18,64.58,53.67,,9533.0,30317.0,0.608,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-25,292996.0,1126.0,1212.286,5026.0,0.0,1.143,58800.25,225.973,243.289,1008.649,0.0,0.229,1.22,22.0,4.415,123.0,24.684,11.0,2.216,142.0,28.402,17094.0,6023290.0,1208.791,3.431,20654.0,4.145,0.0587,17.0,tests performed,5734417.0,3245286.0,2695622.0,,45131.0,46925.0,115.08,65.13,54.1,,9417.0,29768.0,0.597,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-26,294272.0,1276.0,1241.571,5026.0,0.0,1.143,59056.325,256.076,249.166,1008.649,0.0,0.229,1.21,25.0,5.017,141.0,28.297,,,,,17517.0,6040807.0,1212.307,3.515,20728.0,4.16,0.0599,16.7,tests performed,5787059.0,3274282.0,2722902.0,,52642.0,46436.0,116.14,65.71,54.64,,9319.0,28465.0,0.571,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-27,295386.0,1114.0,1242.143,5026.0,0.0,1.143,59279.89,223.564,249.281,1008.649,0.0,0.229,1.19,27.0,5.419,142.0,28.497,,,,,17496.0,6058303.0,1215.818,3.511,20340.0,4.082,0.0611,16.4,tests performed,5838683.0,3300851.0,2751192.0,,51624.0,45716.0,117.17,66.24,55.21,,9175.0,26971.0,0.541,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-28,296687.0,1301.0,1248.0,5035.0,9.0,1.286,59540.983,261.093,250.456,1010.455,1.806,0.258,1.17,26.0,5.218,152.0,30.504,,,,,22792.0,6081095.0,1220.392,4.574,20101.0,4.034,0.0621,16.1,tests performed,5888431.0,3322942.0,2781781.0,,49748.0,44820.0,118.17,66.69,55.83,,8995.0,24369.0,0.489,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-29,298048.0,1361.0,1272.714,5035.0,0.0,1.286,59814.116,273.134,255.416,1010.455,0.0,0.258,1.15,26.0,5.218,162.0,32.511,,,,,19948.0,6101043.0,1224.395,4.003,19830.0,3.98,0.0642,15.6,tests performed,5935050.0,3346854.0,2806575.0,,46619.0,43886.0,119.11,67.17,56.32,,8807.0,23136.0,0.464,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-30,299549.0,1501.0,1289.143,5035.0,0.0,1.286,60115.346,301.23,258.713,1010.455,0.0,0.258,1.14,23.0,4.616,169.0,33.916,,,,,22408.0,6123451.0,1228.892,4.497,19958.0,4.005,0.0646,15.5,tests performed,5961906.0,3361402.0,2819776.0,,26856.0,43120.0,119.65,67.46,56.59,,8654.0,22702.0,0.456,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-31,300976.0,1427.0,1300.857,5035.0,0.0,1.286,60401.726,286.379,261.064,1010.455,0.0,0.258,1.13,26.0,5.218,164.0,32.913,,,,,19688.0,6143139.0,1232.843,3.951,19563.0,3.926,0.0665,15.0,tests performed,5982483.0,3372773.0,2829338.0,,20577.0,41885.0,120.06,67.69,56.78,,8406.0,22086.0,0.443,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,1008.2,2.0,9.55,202.331812934787\r\nIRL,Europe,Ireland,2021-08-01,302074.0,1098.0,1296.857,5035.0,0.0,1.286,60622.079,220.353,260.261,1010.455,0.0,0.258,1.12,26.0,5.218,163.0,32.712,11.0,2.216,187.0,37.466,18374.0,6161513.0,1236.531,3.687,19746.0,3.963,0.0657,15.2,tests performed,6013594.0,3388102.0,2845526.0,,31111.0,39882.0,120.68,67.99,57.11,,8004.0,20402.0,0.409,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-02,303426.0,1352.0,1307.714,5035.0,0.0,1.286,60893.407,271.328,262.44,1010.455,0.0,0.258,1.12,27.0,5.419,177.0,35.521,,,,,12584.0,6174097.0,1239.056,2.525,19041.0,3.821,0.0687,14.6,tests performed,6057169.0,3406434.0,2871859.0,,43575.0,38587.0,121.56,68.36,57.63,,7744.0,18879.0,0.379,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-03,304310.0,884.0,1274.857,5035.0,0.0,1.286,61070.813,177.407,255.846,1010.455,0.0,0.258,1.12,29.0,5.82,178.0,35.722,,,,,14841.0,6188938.0,1242.034,2.978,18662.0,3.745,0.0683,14.6,tests performed,6097809.0,3429998.0,2890493.0,,40640.0,37018.0,122.37,68.84,58.01,,7429.0,18450.0,0.37,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-04,305527.0,1217.0,1262.857,5044.0,9.0,1.286,61315.048,244.235,253.438,1012.261,1.806,0.258,1.13,30.0,6.021,187.0,37.528,,,,,19997.0,6208935.0,1246.047,4.013,18263.0,3.665,0.0691,14.5,tests performed,6142499.0,3444837.0,2921754.0,,44690.0,36295.0,123.27,69.13,58.64,,7284.0,17414.0,0.349,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-05,307019.0,1492.0,1281.571,5044.0,0.0,1.286,61614.472,299.424,257.194,1012.261,0.0,0.258,1.14,28.0,5.619,193.0,38.732,,,,,20564.0,6229499.0,1250.174,4.127,18351.0,3.683,0.0698,14.3,tests performed,6180079.0,3457860.0,2947242.0,,37580.0,35004.0,124.03,69.39,59.15,,7025.0,15858.0,0.318,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-06,308800.0,1781.0,1321.571,5044.0,0.0,1.286,61971.894,357.422,265.221,1012.261,0.0,0.258,1.16,30.0,6.021,189.0,37.93,,,,,22005.0,6251504.0,1254.59,4.416,18293.0,3.671,0.0722,13.8,tests performed,6195224.0,3464711.0,2956102.0,,15145.0,33331.0,124.33,69.53,59.32,,6689.0,14758.0,0.296,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-07,310628.0,1828.0,1378.857,5044.0,0.0,1.286,62338.749,366.854,276.718,1012.261,0.0,0.258,1.17,33.0,6.623,198.0,39.736,,,,,22769.0,6274273.0,1259.16,4.569,18733.0,3.759,0.0736,13.6,tests performed,6215797.0,3473431.0,2968102.0,,20573.0,33331.0,124.74,69.71,59.57,,6689.0,14380.0,0.289,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-08,312465.0,1837.0,1484.429,5044.0,0.0,1.286,62707.409,368.661,297.904,1012.261,0.0,0.258,1.17,31.0,6.221,208.0,41.743,9.0,1.813,173.0,34.646,18879.0,6293152.0,1262.949,3.789,18806.0,3.774,0.0789,12.7,tests performed,6244683.0,3479491.0,2991519.0,,28886.0,33013.0,125.32,69.83,60.04,,6625.0,13056.0,0.262,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-09,313876.0,1411.0,1492.857,5044.0,0.0,1.286,62990.577,283.168,299.596,1012.261,0.0,0.258,1.16,34.0,6.823,217.0,43.549,,,,,16052.0,6309204.0,1266.17,3.221,19301.0,3.873,0.0773,12.9,tests performed,6280427.0,3489437.0,3018011.0,,35744.0,31894.0,126.04,70.03,60.57,,6401.0,11858.0,0.238,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-10,315385.0,1509.0,1582.143,5044.0,0.0,1.286,63293.413,302.835,317.514,1012.261,0.0,0.258,1.16,33.0,6.623,206.0,41.341,,,,,18638.0,6327842.0,1269.91,3.74,19843.0,3.982,0.0797,12.5,tests performed,6319007.0,3497007.0,3049661.0,,38580.0,31600.0,126.81,70.18,61.2,,6342.0,9573.0,0.192,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-11,317204.0,1819.0,1668.143,5059.0,15.0,2.143,63658.461,365.048,334.773,1015.271,3.01,0.43,1.15,36.0,7.225,206.0,41.341,,,,,24234.0,6352076.0,1274.774,4.863,20449.0,4.104,0.0816,12.3,tests performed,6364642.0,3504534.0,3088622.0,,45635.0,31735.0,127.73,70.33,61.98,,6369.0,8528.0,0.171,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-12,318937.0,1733.0,1702.571,5059.0,0.0,2.143,64006.25,347.789,341.683,1015.271,0.0,0.43,1.14,37.0,7.425,219.0,43.95,,,,,21609.0,6373685.0,1279.111,4.337,20598.0,4.134,0.0827,12.1,tests performed,6404394.0,3516218.0,3117539.0,,39752.0,32045.0,128.53,70.57,62.56,,6431.0,8337.0,0.167,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-13,320915.0,1978.0,1730.714,5059.0,0.0,2.143,64403.207,396.957,347.33,1015.271,0.0,0.43,1.13,43.0,8.63,221.0,44.352,,,,,22551.0,6396236.0,1283.636,4.526,20676.0,4.149,0.0837,11.9,tests performed,6428450.0,3534549.0,3123534.0,,24056.0,33318.0,129.01,70.93,62.69,,6686.0,9977.0,0.2,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-14,322989.0,2074.0,1765.857,5059.0,0.0,2.143,64819.431,416.223,354.383,1015.271,0.0,0.43,1.12,43.0,8.63,230.0,46.158,,,,,23269.0,6419505.0,1288.306,4.67,20747.0,4.164,0.0851,11.7,tests performed,6449101.0,3551551.0,3127223.0,,20651.0,33329.0,129.42,71.27,62.76,,6689.0,11160.0,0.224,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-15,324747.0,1758.0,1754.571,5059.0,0.0,2.143,65172.237,352.806,352.118,1015.271,0.0,0.43,1.1,48.0,9.633,248.0,49.77,14.0,2.82,234.0,46.934,20215.0,6439720.0,1292.363,4.057,20938.0,4.202,0.0838,11.9,tests performed,6482576.0,3562043.0,3150572.0,,33475.0,33985.0,130.1,71.49,63.23,,6820.0,11793.0,0.237,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-16,326188.0,1441.0,1758.857,5059.0,0.0,2.143,65461.426,289.189,352.978,1015.271,0.0,0.43,1.09,51.0,10.235,262.0,52.58,,,,,15775.0,6455495.0,1295.529,3.166,20899.0,4.194,0.0842,11.9,tests performed,6522635.0,3575386.0,3177808.0,,40059.0,34601.0,130.9,71.75,63.77,,6944.0,12278.0,0.246,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-17,327684.0,1496.0,1757.0,5059.0,0.0,2.143,65761.652,300.227,352.606,1015.271,0.0,0.43,1.08,54.0,10.837,248.0,49.77,,,,,18709.0,6474204.0,1299.283,3.755,20909.0,4.196,0.084,11.9,tests performed,6564070.0,3591203.0,3204075.0,,41435.0,35009.0,131.73,72.07,64.3,,7026.0,13457.0,0.27,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-18,329388.0,1704.0,1740.571,5074.0,15.0,2.143,66103.622,341.969,349.309,1018.282,3.01,0.43,1.07,54.0,10.837,249.0,49.971,,,,,23925.0,6498129.0,1304.085,4.801,20865.0,4.187,0.0834,12.0,tests performed,6601475.0,3603053.0,3230164.0,,37405.0,33833.0,132.48,72.31,64.82,,6790.0,14074.0,0.282,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-19,331206.0,1818.0,1752.714,5074.0,0.0,2.143,66468.469,364.847,351.746,1018.282,0.0,0.43,1.07,52.0,10.436,244.0,48.967,,,,,22901.0,6521030.0,1308.681,4.596,21049.0,4.224,0.0833,12.0,tests performed,6639030.0,3618507.0,3252938.0,,37555.0,33519.0,133.24,72.62,65.28,,6727.0,14613.0,0.293,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-20,333304.0,2098.0,1769.857,5074.0,0.0,2.143,66889.509,421.04,355.186,1018.282,0.0,0.43,1.07,52.0,10.436,251.0,50.372,,,,,21223.0,6542253.0,1312.94,4.259,20860.0,4.186,0.0848,11.8,tests performed,6658951.0,3630558.0,3261042.0,,19921.0,32929.0,133.64,72.86,65.44,,6608.0,13716.0,0.275,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-21,335429.0,2125.0,1777.143,5074.0,0.0,2.143,67315.967,426.458,356.648,1018.282,0.0,0.43,1.06,54.0,10.837,259.0,51.978,,,,,22583.0,6564836.0,1317.472,4.532,20762.0,4.167,0.0856,11.7,tests performed,6679291.0,3638704.0,3273393.0,,20340.0,32884.0,134.04,73.02,65.69,,6599.0,12450.0,0.25,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-22,337117.0,1688.0,1767.143,5074.0,0.0,2.143,67654.725,338.758,354.641,1018.282,0.0,0.43,1.05,59.0,11.84,314.0,63.015,16.0,3.223,277.0,55.595,18070.0,6582906.0,1321.098,3.626,20455.0,4.105,0.0864,11.6,tests performed,6705621.0,3649806.0,3288899.0,,26330.0,31864.0,134.57,73.25,66.0,,6395.0,12538.0,0.252,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-23,338707.0,1590.0,1788.429,5074.0,0.0,2.143,67973.816,319.091,358.913,1018.282,0.0,0.43,1.05,60.0,12.041,318.0,63.818,,,,,14921.0,6597827.0,1324.093,2.994,20333.0,4.081,0.088,11.4,tests performed,6738479.0,3659887.0,3312054.0,,32858.0,30835.0,135.23,73.45,66.47,,6188.0,12072.0,0.242,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-24,340278.0,1571.0,1799.143,5074.0,0.0,2.143,68289.094,315.278,361.063,1018.282,0.0,0.43,1.04,55.0,11.038,307.0,61.611,,,,,18420.0,6616247.0,1327.789,3.697,20292.0,4.072,0.0887,11.3,tests performed,6767526.0,3669560.0,3331735.0,,29047.0,29065.0,135.81,73.64,66.86,,5833.0,11194.0,0.225,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-25,342329.0,2051.0,1848.714,5092.0,18.0,2.571,68700.701,411.607,371.011,1021.894,3.612,0.516,1.03,56.0,11.238,323.0,64.822,,,,,23838.0,6640085.0,1332.573,4.784,20279.0,4.07,0.0912,11.0,tests performed,6795730.0,3678457.0,3351406.0,,28204.0,27751.0,136.38,73.82,67.26,,5569.0,10772.0,0.216,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-26,344195.0,1866.0,1855.571,5092.0,0.0,2.571,69075.182,374.48,372.388,1021.894,0.0,0.516,1.02,61.0,12.242,332.0,66.628,,,,,23029.0,6663114.0,1337.195,4.622,20298.0,4.074,0.0914,10.9,tests performed,6824926.0,3688556.0,3370931.0,,29196.0,26557.0,136.97,74.02,67.65,,5330.0,10007.0,0.201,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-27,346070.0,1875.0,1823.714,5092.0,0.0,2.571,69451.468,376.287,365.994,1021.894,0.0,0.516,1.0,59.0,11.84,326.0,65.424,,,,,21919.0,6685033.0,1341.594,4.399,20397.0,4.093,0.0894,11.2,tests performed,6842798.0,3698596.0,3378911.0,,17872.0,26264.0,137.33,74.23,67.81,,5271.0,9720.0,0.195,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-28,348067.0,1997.0,1805.429,5092.0,0.0,2.571,69852.239,400.77,362.325,1021.894,0.0,0.516,0.99,61.0,12.242,324.0,65.022,,,,,20310.0,6705343.0,1345.67,4.076,20072.0,4.028,0.0899,11.1,tests performed,6860755.0,3707406.0,3388082.0,,17957.0,25923.0,137.69,74.4,67.99,,5202.0,9815.0,0.197,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-29,349773.0,1706.0,1808.0,5092.0,0.0,2.571,70194.609,342.371,362.841,1021.894,0.0,0.516,0.99,60.0,12.041,347.0,69.638,29.0,5.842,315.0,63.25,17869.0,6723212.0,1349.256,3.586,20044.0,4.023,0.0902,11.1,tests performed,6876876.0,3712514.0,3399175.0,,16121.0,24465.0,138.01,74.51,68.22,,4910.0,8958.0,0.18,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-30,351065.0,1292.0,1765.429,5092.0,0.0,2.571,70453.896,259.287,354.297,1021.894,0.0,0.516,0.98,61.0,12.242,382.0,76.662,,,,,14527.0,6737739.0,1352.171,2.915,19987.0,4.011,0.0883,11.3,tests performed,6893796.0,3716680.0,3412068.0,,16920.0,22188.0,138.35,74.59,68.48,,4453.0,8113.0,0.163,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-31,352447.0,1382.0,1738.429,5092.0,0.0,2.571,70731.244,277.348,348.879,1021.894,0.0,0.516,0.97,54.0,10.837,355.0,71.244,,,,,18684.0,6756423.0,1355.921,3.75,20025.0,4.019,0.0868,11.5,tests performed,6911314.0,3721766.0,3424678.0,,17518.0,20541.0,138.7,74.69,68.73,,4122.0,7458.0,0.15,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,1237.4,2.34,9.73,248.329086813633\r\nIRL,Europe,Ireland,2021-09-01,354236.0,1789.0,1701.0,5112.0,20.0,2.857,71090.272,359.028,341.367,1025.908,4.014,0.573,0.97,56.0,11.238,360.0,72.247,,,,,24024.0,6780447.0,1360.742,4.821,20052.0,4.024,0.0848,11.8,tests performed,6928812.0,3726984.0,3437201.0,,17498.0,19012.0,139.05,74.8,68.98,,3815.0,6932.0,0.139,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-02,352529.0,-1707.0,1190.571,5112.0,0.0,2.857,70747.701,-342.571,238.931,1025.908,0.0,0.573,0.97,59.0,11.84,343.0,68.835,,,,,21832.0,6802279.0,1365.123,4.381,19881.0,3.99,0.0599,16.7,tests performed,6949667.0,3731881.0,3453319.0,,20855.0,17820.0,139.47,74.89,69.3,,3576.0,6189.0,0.124,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-03,353936.0,1407.0,1123.714,5112.0,0.0,2.857,71030.066,282.365,225.514,1025.908,0.0,0.573,0.97,55.0,11.038,353.0,70.842,,,,,21312.0,6823591.0,1369.4,4.277,19794.0,3.972,0.0568,17.6,tests performed,6964929.0,3736618.0,3463974.0,,15262.0,17447.0,139.78,74.99,69.52,,3501.0,5432.0,0.109,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-04,355639.0,1703.0,1081.714,5112.0,0.0,2.857,71371.835,341.769,217.085,1025.908,0.0,0.573,0.97,52.0,10.436,363.0,72.849,,,,,21728.0,6845319.0,1373.761,4.361,19997.0,4.013,0.0541,18.5,tests performed,6982083.0,3741917.0,3475830.0,,17154.0,17333.0,140.12,75.1,69.76,,3478.0,4930.0,0.099,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-05,356819.0,1180.0,1006.571,5112.0,0.0,2.857,71608.644,236.81,202.005,1025.908,0.0,0.573,0.97,59.0,11.84,362.0,72.648,26.0,5.237,293.0,58.818,18088.0,6863407.0,1377.391,3.63,20028.0,4.019,0.0503,19.9,tests performed,6993884.0,3744111.0,3485507.0,,11801.0,16715.0,140.36,75.14,69.95,,3354.0,4514.0,0.091,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-06,357955.0,1136.0,984.286,5112.0,0.0,2.857,71836.624,227.98,197.533,1025.908,0.0,0.573,0.97,59.0,11.84,384.0,77.063,,,,,17510.0,6880917.0,1380.905,3.514,20454.0,4.105,0.0481,20.8,tests performed,7006968.0,3747273.0,3495579.0,,13084.0,16167.0,140.62,75.2,70.15,,3244.0,4370.0,0.088,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-07,359420.0,1465.0,996.143,5112.0,0.0,2.857,72130.629,294.005,199.912,1025.908,0.0,0.573,0.98,59.0,11.84,367.0,73.652,,,,,20585.0,6901502.0,1385.036,4.131,20726.0,4.159,0.0481,20.8,tests performed,7024451.0,3750035.0,3510482.0,,17483.0,16162.0,140.97,75.26,70.45,,3243.0,4038.0,0.081,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-08,360957.0,1537.0,960.143,5155.0,43.0,6.143,72439.084,308.455,192.687,1034.537,8.63,1.233,0.97,56.0,11.238,335.0,67.23,,,,,26671.0,6928173.0,1390.389,5.353,21104.0,4.235,0.0455,22.0,tests performed,7042408.0,3753259.0,3525351.0,,17957.0,16228.0,141.33,75.32,70.75,,3257.0,3754.0,0.075,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-09,362228.0,1271.0,1385.571,5155.0,0.0,6.143,72694.156,255.072,278.065,1034.537,0.0,1.233,0.96,54.0,10.837,331.0,66.427,,,,,26494.0,6954667.0,1395.706,5.317,21770.0,4.369,0.0636,15.7,tests performed,7059759.0,3756727.0,3539346.0,,17351.0,15727.0,141.68,75.39,71.03,,3156.0,3549.0,0.071,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-10,363847.0,1619.0,1415.857,5155.0,0.0,6.143,73019.067,324.911,284.143,1034.537,0.0,1.233,0.95,59.0,11.84,328.0,65.825,,,,,26700.0,6981367.0,1401.064,5.358,22539.0,4.523,0.0628,15.9,tests performed,7073620.0,3759327.0,3550664.0,,13861.0,15527.0,141.96,75.44,71.26,,3116.0,3244.0,0.065,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-11,365313.0,1466.0,1382.0,5155.0,0.0,6.143,73313.273,294.206,277.348,1034.537,0.0,1.233,0.94,58.0,11.64,310.0,62.213,,,,,26396.0,7007763.0,1406.361,5.297,23206.0,4.657,0.0596,16.8,tests performed,7088499.0,3761353.0,3563518.0,,14879.0,15202.0,142.26,75.49,71.51,,3051.0,2777.0,0.056,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-12,366659.0,1346.0,1405.714,5155.0,0.0,6.143,73583.396,270.124,282.107,1034.537,0.0,1.233,0.94,59.0,11.84,315.0,63.216,27.0,5.439,272.0,54.588,20227.0,7027990.0,1410.421,4.059,23512.0,4.719,0.0598,16.7,tests performed,7097808.0,3762987.0,3571242.0,,9309.0,14846.0,142.44,75.52,71.67,,2979.0,2697.0,0.054,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-13,367536.0,877.0,1368.714,5155.0,0.0,6.143,73759.398,176.002,274.682,1034.537,0.0,1.233,0.93,58.0,11.64,321.0,64.42,,,,,20192.0,7048182.0,1414.473,4.052,23895.0,4.795,0.0573,17.5,tests performed,7110129.0,3764593.0,3582037.0,,12321.0,14737.0,142.69,75.55,71.89,,2958.0,2474.0,0.05,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-14,368712.0,1176.0,1327.429,5155.0,0.0,6.143,73995.405,236.007,266.397,1034.537,0.0,1.233,0.92,60.0,12.041,309.0,62.012,,,,,23063.0,7071245.0,1419.101,4.628,24249.0,4.866,0.0547,18.3,tests performed,7125861.0,3767978.0,3594517.0,,15732.0,14487.0,143.01,75.62,72.14,,2907.0,2563.0,0.051,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-15,367536.0,-1176.0,939.857,5179.0,24.0,3.429,73759.398,-236.007,188.616,1039.354,4.816,0.688,0.92,65.0,13.045,292.0,58.6,,,,,30302.0,7101547.0,1425.182,6.081,24768.0,4.971,0.0379,26.4,tests performed,7138401.0,3769975.0,3605170.0,,12540.0,13713.0,143.26,75.66,72.35,,2752.0,2388.0,0.048,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-16,371301.0,3765.0,1296.143,5179.0,0.0,3.429,74514.982,755.583,260.118,1039.354,0.0,0.688,0.92,67.0,13.446,290.0,58.199,,,,,28845.0,7130392.0,1430.971,5.789,25104.0,5.038,0.0516,19.4,tests performed,7155584.0,3772609.0,3619808.0,,17183.0,13689.0,143.6,75.71,72.64,,2747.0,2269.0,0.046,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-17,372687.0,1386.0,1262.857,5179.0,0.0,3.429,74793.133,278.151,253.438,1039.354,0.0,0.688,0.91,73.0,14.65,288.0,57.798,,,,,26908.0,7157300.0,1436.371,5.4,25133.0,5.044,0.0502,19.9,tests performed,7169088.0,3774923.0,3631040.0,,13504.0,13638.0,143.87,75.76,72.87,,2737.0,2228.0,0.045,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-18,374143.0,1456.0,1261.429,5179.0,0.0,3.429,75085.332,292.199,253.151,1039.354,0.0,0.688,0.92,66.0,13.245,261.0,52.379,,,,,27371.0,7184671.0,1441.864,5.493,25273.0,5.072,0.0499,20.0,tests performed,7179421.0,3776788.0,3639519.0,,10333.0,12989.0,144.08,75.79,73.04,,2607.0,2205.0,0.044,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-19,375367.0,1224.0,1244.0,5179.0,0.0,3.429,75330.972,245.64,249.654,1039.354,0.0,0.688,0.92,63.0,12.643,278.0,55.791,18.0,3.626,241.0,48.344,22731.0,7207402.0,1446.426,4.562,25630.0,5.144,0.0485,20.6,tests performed,7185977.0,3777771.0,3645124.0,,6556.0,12596.0,144.21,75.81,73.15,,2528.0,2112.0,0.042,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-20,376517.0,1150.0,1283.0,5179.0,0.0,3.429,75561.761,230.789,257.48,1039.354,0.0,0.688,0.93,65.0,13.045,297.0,59.604,,,,,19847.0,7227249.0,1450.409,3.983,25581.0,5.134,0.0502,19.9,tests performed,7194130.0,3779307.0,3651831.0,,8153.0,12000.0,144.38,75.85,73.29,,2408.0,2102.0,0.042,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-21,377937.0,1420.0,1317.857,5179.0,0.0,3.429,75846.735,284.974,264.476,1039.354,0.0,0.688,0.94,63.0,12.643,286.0,57.396,,,,,22989.0,7250238.0,1455.023,4.614,25570.0,5.132,0.0515,19.4,tests performed,7204201.0,3781290.0,3660014.0,,10071.0,11191.0,144.58,75.89,73.45,,2246.0,1902.0,0.038,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-22,379366.0,1429.0,1690.0,5209.0,30.0,4.286,76133.516,286.781,339.16,1045.374,6.021,0.86,0.94,63.0,12.643,272.0,54.587,,,,,29941.0,7280179.0,1461.031,6.009,25519.0,5.121,0.0662,15.1,tests performed,7214688.0,3783061.0,3668817.0,,10487.0,10898.0,144.79,75.92,73.63,,2187.0,1869.0,0.038,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-23,380720.0,1354.0,1345.571,5209.0,0.0,4.286,76405.245,271.729,270.038,1045.374,0.0,0.86,0.94,59.0,11.84,286.0,57.396,,,,,27520.0,7307699.0,1466.554,5.523,25330.0,5.083,0.0531,18.8,tests performed,7224010.0,3785043.0,3676236.0,,9322.0,9775.0,144.98,75.96,73.78,,1962.0,1776.0,0.036,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-24,381883.0,1163.0,1313.714,5209.0,0.0,4.286,76638.643,233.398,263.644,1045.374,0.0,0.86,0.94,61.0,12.242,297.0,59.604,,,,,26457.0,7334156.0,1471.864,5.31,25265.0,5.07,0.052,19.2,tests performed,7233022.0,3787496.0,3682846.0,,9012.0,9133.0,145.16,76.01,73.91,,1833.0,1796.0,0.036,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-25,383218.0,1335.0,1296.429,5209.0,0.0,4.286,76906.559,267.916,260.175,1045.374,0.0,0.86,0.95,65.0,13.045,282.0,56.594,,,,,25248.0,7359404.0,1476.931,5.067,24962.0,5.01,0.0519,19.3,tests performed,7241644.0,3789033.0,3689931.0,,8622.0,8889.0,145.33,76.04,74.05,,1784.0,1749.0,0.035,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-26,384677.0,1459.0,1330.0,5209.0,0.0,4.286,77199.36,292.801,266.913,1045.374,0.0,0.86,0.96,65.0,13.045,296.0,59.403,22.0,4.432,266.0,53.38,19928.0,7379332.0,1480.93,3.999,24561.0,4.929,0.0542,18.5,tests performed,7246892.0,3790242.0,3693714.0,301.0,5248.0,8702.0,145.44,76.06,74.13,0.01,1746.0,1782.0,0.036,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-27,385721.0,1044.0,1314.857,5209.0,0.0,4.286,77408.876,209.516,263.874,1045.374,0.0,0.86,0.97,66.0,13.245,310.0,62.213,,,,,15793.0,7395125.0,1484.099,3.169,23982.0,4.813,0.0548,18.2,tests performed,7254015.0,3791767.0,3698883.0,821.0,7123.0,8555.0,145.58,76.1,74.23,0.02,1717.0,1780.0,0.036,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-28,387218.0,1497.0,1325.857,5209.0,0.0,4.286,77709.304,300.427,266.081,1045.374,0.0,0.86,0.97,63.0,12.643,300.0,60.206,,,,,18974.0,7414099.0,1487.907,3.808,23409.0,4.698,0.0566,17.7,tests performed,7259962.0,3793479.0,3702513.0,1500.0,5947.0,7966.0,145.7,76.13,74.3,0.03,1599.0,1741.0,0.035,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-29,388665.0,1447.0,1328.429,5249.0,40.0,5.714,77999.697,290.393,266.597,1053.402,8.027,1.147,0.97,60.0,12.041,300.0,60.206,,,,,24480.0,7438579.0,1492.82,4.913,22629.0,4.541,0.0587,17.0,tests performed,7266947.0,3794828.0,3706502.0,3224.0,6985.0,7466.0,145.84,76.16,74.38,0.06,1498.0,1681.0,0.034,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-30,389932.0,1267.0,1316.0,5249.0,0.0,5.714,78253.966,254.269,264.103,1053.402,0.0,1.147,0.96,59.0,11.84,297.0,59.604,,,,,22984.0,7461563.0,1497.433,4.613,21981.0,4.411,0.0599,16.7,tests performed,7276688.0,3796702.0,3711664.0,5970.0,9741.0,7525.0,146.03,76.19,74.49,0.12,1510.0,1666.0,0.033,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,1490.2,2.7,10.42,299.062554686986\r\nIRL,Europe,Ireland,2021-10-01,390989.0,1057.0,1300.857,5249.0,0.0,5.714,78466.091,212.125,261.064,1053.402,0.0,1.147,0.96,59.0,11.84,308.0,61.811,,,,,21023.0,7482586.0,1501.652,4.219,21204.0,4.255,0.0613,16.3,tests performed,7283731.0,3798447.0,3715750.0,7221.0,7043.0,7244.0,146.17,76.23,74.57,0.14,1454.0,1564.0,0.031,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-02,392575.0,1586.0,1336.714,5249.0,0.0,5.714,78784.38,318.288,268.26,1053.402,0.0,1.147,0.97,56.0,11.238,298.0,59.804,,,,,20608.0,7503194.0,1505.787,4.136,20541.0,4.122,0.0651,15.4,tests performed,7289136.0,3799658.0,3718755.0,8419.0,5405.0,6785.0,146.28,76.25,74.63,0.17,1362.0,1518.0,0.03,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-03,393626.0,1051.0,1278.429,5249.0,0.0,5.714,78995.301,210.921,256.563,1053.402,0.0,1.147,0.97,60.0,12.041,319.0,64.019,24.0,4.834,258.0,51.768,17003.0,7520197.0,1509.2,3.412,20124.0,4.039,0.0635,15.7,tests performed,7295511.0,3800007.0,3719960.0,13257.0,6375.0,6946.0,146.41,76.26,74.65,0.27,1394.0,1395.0,0.028,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-04,394519.0,893.0,1256.857,5249.0,0.0,5.714,79174.513,179.213,252.234,1053.402,0.0,1.147,0.98,64.0,12.844,333.0,66.829,,,,,13890.0,7534087.0,1511.987,2.788,19852.0,3.984,0.0633,15.8,tests performed,7308050.0,3801035.0,3722800.0,21997.0,12539.0,7719.0,146.66,76.28,74.71,0.44,1549.0,1324.0,0.027,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-05,395643.0,1124.0,1203.571,5249.0,0.0,5.714,79400.085,225.571,241.54,1053.402,0.0,1.147,1.0,65.0,13.045,349.0,70.039,,,,,17689.0,7551776.0,1515.537,3.55,19668.0,3.947,0.0612,16.3,tests performed,7323967.0,3802045.0,3725347.0,34392.0,15917.0,9144.0,146.98,76.3,74.76,0.69,1835.0,1224.0,0.025,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-06,396625.0,982.0,1137.143,5280.0,31.0,4.429,79597.159,197.074,228.209,1059.623,6.221,0.889,1.03,70.0,14.048,343.0,68.835,,,,,23775.0,7575551.0,1520.308,4.771,19567.0,3.927,0.0581,17.2,tests performed,7339845.0,3803294.0,3728039.0,46372.0,15878.0,10414.0,147.3,76.33,74.82,0.93,2090.0,1209.0,0.024,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-07,397831.0,1206.0,1128.429,5280.0,0.0,4.429,79839.186,242.028,226.46,1059.623,0.0,0.889,1.07,69.0,13.847,355.0,71.244,,,,,22774.0,7598325.0,1524.879,4.57,19537.0,3.921,0.0578,17.3,tests performed,7355955.0,3804319.0,3730806.0,58735.0,16110.0,11324.0,147.62,76.35,74.87,1.18,2273.0,1088.0,0.022,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-08,399833.0,2002.0,1263.429,5280.0,0.0,4.429,80240.96,401.774,253.553,1059.623,0.0,0.889,1.11,73.0,14.65,354.0,71.043,,,,,23046.0,7621371.0,1529.504,4.625,19826.0,3.979,0.0637,15.7,tests performed,7365574.0,3805067.0,3733160.0,65272.0,9619.0,11692.0,147.82,76.36,74.92,1.31,2346.0,946.0,0.019,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-09,401773.0,1940.0,1314.0,5280.0,0.0,4.429,80630.291,389.331,263.702,1059.623,0.0,0.889,1.13,74.0,14.851,353.0,70.842,,,,,20208.0,7641579.0,1533.559,4.055,19769.0,3.967,0.0665,15.0,tests performed,7372301.0,3806593.0,3737058.0,66575.0,6727.0,11881.0,147.95,76.39,75.0,1.34,2384.0,991.0,0.02,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-10,403157.0,1384.0,1361.571,5280.0,0.0,4.429,80908.041,277.75,273.249,1059.623,0.0,0.889,1.14,74.0,14.851,382.0,76.662,21.0,4.23,317.0,63.653,17939.0,7659518.0,1537.159,3.6,19903.0,3.994,0.0684,14.6,tests performed,7380400.0,3806935.0,3738152.0,73251.0,8099.0,12127.0,148.11,76.4,75.02,1.47,2434.0,990.0,0.02,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-11,404514.0,1357.0,1427.857,5280.0,0.0,4.429,81180.372,272.331,286.551,1059.623,0.0,0.889,1.14,75.0,15.051,400.0,80.274,,,,,14958.0,7674476.0,1540.161,3.002,20056.0,4.025,0.0712,14.0,tests performed,7393180.0,3807514.0,3739745.0,83879.0,12780.0,12161.0,148.37,76.41,75.05,1.68,2441.0,926.0,0.019,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-12,405970.0,1456.0,1475.286,5280.0,0.0,4.429,81472.571,292.199,296.069,1059.623,0.0,0.889,1.15,73.0,14.65,402.0,80.676,,,,,17927.0,7692403.0,1543.759,3.598,20090.0,4.032,0.0734,13.6,tests performed,7408196.0,3808554.0,3741750.0,95859.0,15016.0,12033.0,148.67,76.43,75.09,1.92,2415.0,930.0,0.019,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-13,408021.0,2051.0,1628.0,5306.0,26.0,3.714,81884.178,411.607,326.717,1064.841,5.218,0.745,1.16,69.0,13.847,408.0,81.88,,,,,25587.0,7717990.0,1548.894,5.135,20348.0,4.084,0.08,12.5,tests performed,7424654.0,3809262.0,3743294.0,110072.0,16458.0,12116.0,149.0,76.45,75.12,2.21,2432.0,853.0,0.017,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-14,409647.0,1626.0,1688.0,5306.0,0.0,3.714,82210.494,326.316,338.758,1064.841,0.0,0.745,1.16,70.0,14.048,415.0,83.285,,,,,24904.0,7742894.0,1553.892,4.998,20653.0,4.145,0.0817,12.2,tests performed,7438679.0,3810221.0,3745316.0,121123.0,14025.0,11818.0,149.28,76.47,75.16,2.43,2372.0,843.0,0.017,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-15,411554.0,1907.0,1674.429,5306.0,0.0,3.714,82593.203,382.709,336.035,1064.841,0.0,0.745,1.16,73.0,14.65,413.0,82.883,,,,,23337.0,7766231.0,1558.575,4.683,20694.0,4.153,0.0809,12.4,tests performed,7450548.0,3811603.0,3747933.0,129004.0,11869.0,12139.0,149.52,76.49,75.22,2.59,2436.0,934.0,0.019,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-16,413734.0,2180.0,1708.714,5306.0,0.0,3.714,83030.699,437.496,342.915,1064.841,0.0,0.745,1.16,71.0,14.249,406.0,81.479,,,,,23405.0,7789636.0,1563.272,4.697,21151.0,4.245,0.0808,12.4,tests performed,7456827.0,3813314.0,3750811.0,130696.0,6279.0,12075.0,149.65,76.53,75.27,2.62,2423.0,960.0,0.019,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-17,415114.0,1380.0,1708.143,5306.0,0.0,3.714,83307.646,276.947,342.801,1064.841,0.0,0.745,1.16,74.0,14.851,459.0,92.115,27.0,5.439,386.0,77.552,20038.0,7809674.0,1567.294,4.021,21451.0,4.305,0.0796,12.6,tests performed,7463696.0,3813986.0,3751993.0,135715.0,6869.0,11899.0,149.79,76.54,75.3,2.72,2388.0,1007.0,0.02,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-18,416690.0,1576.0,1739.429,5306.0,0.0,3.714,83623.927,316.281,349.079,1064.841,0.0,0.745,1.17,73.0,14.65,484.0,97.132,,,,,18105.0,7827779.0,1570.927,3.633,21900.0,4.395,0.0794,12.6,tests performed,7476801.0,3815324.0,3753745.0,145740.0,13105.0,11946.0,150.05,76.57,75.33,2.92,2397.0,1116.0,0.022,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-19,419087.0,2397.0,1873.857,5306.0,0.0,3.714,84104.972,481.045,376.057,1064.841,0.0,0.745,1.18,74.0,14.851,472.0,94.724,,,,,21358.0,7849137.0,1575.213,4.286,22391.0,4.494,0.0837,11.9,tests performed,7491287.0,3817568.0,3756018.0,155709.0,14486.0,11870.0,150.34,76.61,75.38,3.12,2382.0,1288.0,0.026,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-20,421234.0,2147.0,1887.571,5369.0,63.0,9.0,84535.845,430.873,378.81,1077.484,12.643,1.806,1.18,86.0,17.259,464.0,93.118,,,,,27417.0,7876554.0,1580.716,5.502,22652.0,4.546,0.0833,12.0,tests performed,7506139.0,3819330.0,3757803.0,167024.0,14852.0,11641.0,150.64,76.65,75.41,3.35,2336.0,1438.0,0.029,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-21,423260.0,2026.0,1944.714,5369.0,0.0,9.0,84942.435,406.59,390.277,1077.484,0.0,1.806,1.17,88.0,17.66,448.0,89.907,,,,,27339.0,7903893.0,1586.202,5.487,23000.0,4.616,0.0846,11.8,tests performed,7517650.0,3820825.0,3759690.0,175154.0,11511.0,11282.0,150.87,76.68,75.45,3.52,2264.0,1515.0,0.03,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-22,425725.0,2465.0,2024.429,5369.0,0.0,9.0,85437.127,494.691,406.275,1077.484,0.0,1.806,1.17,90.0,18.062,457.0,91.714,,,,,25234.0,7929127.0,1591.266,5.064,23271.0,4.67,0.087,11.5,tests performed,7522763.0,3822831.0,3761357.0,176594.0,5113.0,10316.0,150.97,76.72,75.49,3.54,2070.0,1604.0,0.032,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-23,428152.0,2427.0,2059.714,5369.0,0.0,9.0,85924.192,487.065,413.356,1077.484,0.0,1.806,1.16,93.0,18.664,450.0,90.309,,,,,23034.0,7952161.0,1595.889,4.623,23218.0,4.66,0.0887,11.3,tests performed,7528249.0,3824775.0,3763530.0,177964.0,5486.0,10203.0,151.08,76.76,75.53,3.57,2048.0,1637.0,0.033,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-24,429877.0,1725.0,2109.0,5369.0,0.0,9.0,86270.376,346.184,423.247,1077.484,0.0,1.806,1.15,97.0,19.467,471.0,94.523,13.0,2.619,357.0,71.71,19115.0,7971276.0,1599.725,3.836,23086.0,4.633,0.0914,10.9,tests performed,7530802.0,3825991.0,3764342.0,178490.0,2553.0,9587.0,151.13,76.78,75.55,3.58,1924.0,1715.0,0.034,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-25,431722.0,1845.0,2147.429,5369.0,0.0,9.0,86640.642,370.266,430.959,1077.484,0.0,1.806,1.15,99.0,19.868,497.0,99.741,,,,,17133.0,7988409.0,1603.163,3.438,22947.0,4.605,0.0936,10.7,tests performed,7537738.0,3827234.0,3765522.0,183009.0,6936.0,8705.0,151.27,76.81,75.57,3.67,1747.0,1701.0,0.034,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-26,433902.0,2180.0,2116.429,5369.0,0.0,9.0,87078.138,437.496,424.738,1077.484,0.0,1.806,1.15,97.0,19.467,513.0,102.952,,,,,16525.0,8004934.0,1606.48,3.316,22257.0,4.467,0.0951,10.5,tests performed,7548043.0,3828788.0,3766911.0,190375.0,10305.0,8108.0,151.48,76.84,75.6,3.82,1627.0,1603.0,0.032,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-27,435526.0,1624.0,2041.714,5436.0,67.0,9.571,87404.052,325.914,409.744,1090.93,13.446,1.921,1.16,101.0,20.269,503.0,100.945,,,,,22457.0,8027391.0,1610.986,4.507,21548.0,4.324,0.0948,10.6,tests performed,7559286.0,3830933.0,3768564.0,197822.0,11243.0,7592.0,151.7,76.88,75.63,3.97,1524.0,1658.0,0.033,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-28,438124.0,2598.0,2123.429,5436.0,0.0,9.571,87925.435,521.383,426.143,1090.93,0.0,1.921,1.18,99.0,19.868,487.0,97.734,,,,,25215.0,8052606.0,1616.047,5.06,21245.0,4.264,0.0999,10.0,tests performed,7569430.0,3833068.0,3769885.0,204510.0,10144.0,7397.0,151.91,76.92,75.66,4.1,1484.0,1749.0,0.035,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-29,440665.0,2541.0,2134.286,5436.0,0.0,9.571,88435.378,509.944,428.322,1090.93,0.0,1.921,1.2,97.0,19.467,481.0,96.53,,,,,24910.0,8077516.0,1621.046,4.999,21198.0,4.254,0.1007,9.9,tests performed,7575031.0,3835071.0,3771310.0,206683.0,5601.0,7467.0,152.02,76.96,75.68,4.15,1499.0,1749.0,0.035,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-30,443631.0,2966.0,2211.286,5436.0,0.0,9.571,89030.613,595.235,443.774,1090.93,0.0,1.921,1.22,92.0,18.463,470.0,94.323,,,,,25252.0,8102768.0,1626.114,5.068,21515.0,4.318,0.1028,9.7,tests performed,7578945.0,3836696.0,3772621.0,207661.0,3914.0,7242.0,152.1,77.0,75.71,4.17,1453.0,1703.0,0.034,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-31,445594.0,1963.0,2245.286,5436.0,0.0,9.571,89424.56,393.947,450.598,1090.93,0.0,1.921,1.23,93.0,18.664,500.0,100.343,39.0,7.856,407.0,81.58,22395.0,8125163.0,1630.608,4.494,21984.0,4.412,0.1021,9.8,tests performed,,,,,,7119.0,,,,,1429.0,1548.0,0.031,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,1826.2,3.16,12.87,366.493113252834\r\nIRL,Europe,Ireland,2021-11-01,448449.0,2855.0,2389.571,5436.0,0.0,9.571,89997.52,572.959,479.554,1090.93,0.0,1.921,1.25,91.0,18.262,515.0,103.353,,,,,21441.0,8146604.0,1634.911,4.303,22599.0,4.535,0.1057,9.5,tests performed,7582319.0,3836955.0,3772866.0,210532.0,,6369.0,152.17,77.0,75.72,4.23,1278.0,1389.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-02,452172.0,3723.0,2610.0,5436.0,0.0,9.571,90744.674,747.155,523.791,1090.93,0.0,1.921,1.27,90.0,18.062,493.0,98.938,,,,,20999.0,8167603.0,1639.125,4.214,23238.0,4.664,0.1123,8.9,tests performed,7592850.0,3838051.0,3773933.0,218909.0,10531.0,6401.0,152.38,77.02,75.74,4.39,1285.0,1323.0,0.027,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-03,455346.0,3174.0,2831.429,5492.0,56.0,8.0,91381.652,636.978,568.229,1102.169,11.238,1.605,1.27,86.0,17.259,460.0,92.316,,,,,30021.0,8197624.0,1645.15,6.025,24319.0,4.88,0.1164,8.6,tests performed,7605808.0,3840592.0,3775730.0,227534.0,12958.0,6646.0,152.64,77.08,75.77,4.57,1334.0,1380.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-04,458370.0,3024.0,2892.286,5492.0,0.0,8.0,91988.527,606.875,580.442,1102.169,0.0,1.605,1.26,90.0,18.062,458.0,91.914,,,,,28911.0,8226535.0,1650.952,5.802,24847.0,4.986,0.1164,8.6,tests performed,7620807.0,3842139.0,3776952.0,239764.0,14999.0,7340.0,152.94,77.11,75.8,4.81,1473.0,1296.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-05,462273.0,3903.0,3086.857,5492.0,0.0,8.0,92771.805,783.278,619.49,1102.169,0.0,1.605,1.26,76.0,15.252,464.0,93.118,,,,,27436.0,8253971.0,1656.458,5.506,25208.0,5.059,0.1225,8.2,tests performed,7637746.0,3843766.0,3777968.0,254061.0,16939.0,8959.0,153.28,77.14,75.82,5.1,1798.0,1242.0,0.025,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-06,465958.0,3685.0,3189.571,5492.0,0.0,8.0,93511.334,739.529,640.103,1102.169,0.0,1.605,1.26,74.0,14.851,444.0,89.105,,,,,27232.0,8281203.0,1661.923,5.465,25491.0,5.116,0.1251,8.0,tests performed,7652238.0,3845590.0,3779293.0,265409.0,14492.0,10470.0,153.57,77.18,75.85,5.33,2101.0,1271.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-07,469386.0,3428.0,3398.857,5492.0,0.0,8.0,94199.286,687.952,682.104,1102.169,0.0,1.605,1.25,75.0,15.051,478.0,95.928,34.0,6.849,373.0,74.933,25624.0,8306827.0,1667.065,5.142,25952.0,5.208,0.131,7.6,tests performed,7664980.0,3846317.0,3780058.0,276659.0,12742.0,12050.0,153.83,77.19,75.86,5.55,2418.0,1356.0,0.027,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-08,472547.0,3161.0,3442.571,5492.0,0.0,8.0,94833.655,634.369,690.877,1102.169,0.0,1.605,1.25,78.0,15.654,498.0,99.942,,,,,22338.0,8329165.0,1671.548,4.483,26080.0,5.234,0.132,7.6,tests performed,7680713.0,3846827.0,3780551.0,291390.0,15733.0,14056.0,154.14,77.2,75.87,5.85,2821.0,1410.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-09,477878.0,5331.0,3672.286,5492.0,0.0,8.0,95903.513,1069.858,736.977,1102.169,0.0,1.605,1.25,83.0,16.657,520.0,104.357,,,,,25798.0,8354963.0,1676.726,5.177,26766.0,5.372,0.1372,7.3,tests performed,7706359.0,3848210.0,3781551.0,314654.0,25646.0,16216.0,154.66,77.23,75.89,6.31,3254.0,1451.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-10,480846.0,2968.0,3642.857,5566.0,74.0,10.571,96499.15,595.637,731.071,1117.019,14.851,2.122,1.23,89.0,17.861,551.0,110.578,,,,,30675.0,8385638.0,1682.882,6.156,26859.0,5.39,0.1356,7.4,tests performed,7736171.0,3849836.0,3782850.0,341541.0,29812.0,18623.0,155.25,77.26,75.92,6.85,3737.0,1321.0,0.027,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-11,484523.0,3677.0,3736.143,5566.0,0.0,10.571,97237.073,737.923,749.792,1117.019,0.0,2.122,1.22,97.0,19.467,543.0,108.973,,,,,31250.0,8416888.0,1689.153,6.271,27193.0,5.457,0.1374,7.3,tests performed,7768621.0,3851240.0,3783905.0,371533.0,32450.0,21116.0,155.91,77.29,75.94,7.46,4238.0,1300.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-12,490001.0,5478.0,3961.143,5566.0,0.0,10.571,98336.432,1099.359,794.947,1117.019,0.0,2.122,1.21,96.0,19.266,549.0,110.177,,,,,30161.0,8447049.0,1695.206,6.053,27583.0,5.536,0.1436,7.0,tests performed,7796985.0,3852405.0,3784993.0,397649.0,28364.0,22748.0,156.47,77.31,75.96,7.98,4565.0,1234.0,0.025,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-13,494643.0,4642.0,4097.857,5566.0,0.0,10.571,99268.017,931.585,822.383,1117.019,0.0,2.122,1.19,107.0,21.473,556.0,111.582,,,,,29128.0,8476177.0,1701.052,5.846,27853.0,5.59,0.1471,6.8,tests performed,7819616.0,3853822.0,3786326.0,417530.0,22631.0,23911.0,156.93,77.34,75.99,8.38,4799.0,1176.0,0.024,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-14,498448.0,3805.0,4151.714,5566.0,0.0,10.571,100031.628,763.611,833.192,1117.019,0.0,2.122,1.18,106.0,21.273,582.0,116.799,20.0,4.029,510.0,102.328,26062.0,8502239.0,1706.282,5.23,27916.0,5.602,0.1487,6.7,tests performed,7832205.0,3855471.0,3788124.0,426672.0,12589.0,23889.0,157.18,77.37,76.02,8.56,4794.0,1308.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-15,503006.0,4558.0,4351.286,5566.0,0.0,10.571,100946.356,914.728,873.243,1117.019,0.0,2.122,1.16,117.0,23.48,622.0,124.827,,,,,25005.0,8527244.0,1711.3,5.018,28297.0,5.679,0.1538,6.5,tests performed,7848908.0,3856718.0,3788672.0,441580.0,16703.0,24028.0,157.52,77.4,76.03,8.86,4822.0,1413.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-16,507413.0,4407.0,4219.286,5566.0,0.0,10.571,101830.78,884.424,846.752,1117.019,0.0,2.122,1.14,114.0,22.878,614.0,123.221,,,,,27467.0,8554711.0,1716.812,5.512,28535.0,5.727,0.1479,6.8,tests performed,7879413.0,3858045.0,3789702.0,469732.0,30505.0,24722.0,158.13,77.43,76.05,9.43,4961.0,1405.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-17,511045.0,3632.0,4314.143,5609.0,43.0,6.143,102559.672,728.892,865.789,1125.649,8.63,1.233,1.12,119.0,23.882,634.0,127.235,,,,,31973.0,8586684.0,1723.229,6.417,28721.0,5.764,0.1502,6.7,tests performed,7915249.0,3859566.0,3790762.0,502987.0,35836.0,25583.0,158.85,77.46,76.08,10.09,5134.0,1390.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-18,515691.0,4646.0,4452.571,5609.0,0.0,6.143,103492.06,932.388,893.57,1125.649,0.0,1.233,1.11,118.0,23.681,643.0,129.041,,,,,32415.0,8619099.0,1729.734,6.505,28887.0,5.797,0.1541,6.5,tests performed,7957439.0,3861243.0,3793196.0,541071.0,42190.0,26974.0,159.69,77.49,76.12,10.86,5413.0,1429.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-19,518824.0,3133.0,4117.571,5609.0,0.0,6.143,104120.81,628.75,826.34,1125.649,0.0,1.233,1.1,118.0,23.681,643.0,129.041,,,,,30759.0,8649858.0,1735.907,6.173,28973.0,5.814,0.1421,7.0,tests performed,7991471.0,3862426.0,3794655.0,572461.0,34032.0,27784.0,160.38,77.51,76.15,11.49,5576.0,1432.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-20,524783.0,5959.0,4305.714,5609.0,0.0,6.143,105316.699,1195.889,864.097,1125.649,0.0,1.233,1.11,121.0,24.283,640.0,128.439,,,,,31104.0,8680962.0,1742.149,6.242,29255.0,5.871,0.1472,6.8,tests performed,8017121.0,3863975.0,3797572.0,593655.0,25650.0,28215.0,160.89,77.54,76.21,11.91,5662.0,1450.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-21,528964.0,4181.0,4359.429,5609.0,0.0,6.143,106155.768,839.069,874.877,1125.649,0.0,1.233,1.11,125.0,25.086,669.0,134.259,32.0,6.446,549.0,110.184,28683.0,8709645.0,1747.905,5.756,29629.0,5.946,0.1471,6.8,tests performed,8034882.0,3865761.0,3800322.0,606880.0,17761.0,28954.0,161.25,77.58,76.27,12.18,5811.0,1470.0,0.03,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-22,534594.0,5630.0,4512.571,5609.0,0.0,6.143,107285.631,1129.863,905.611,1125.649,0.0,1.233,1.1,126.0,25.286,685.0,137.47,,,,,26990.0,8736635.0,1753.322,5.417,29913.0,6.003,0.1509,6.6,tests performed,8052586.0,3866477.0,3800792.0,623400.0,17704.0,29097.0,161.6,77.59,76.28,12.51,5839.0,1394.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-23,538255.0,3661.0,4406.0,5609.0,0.0,6.143,108020.343,734.712,884.223,1125.649,0.0,1.233,1.07,130.0,26.089,638.0,128.038,,,,,30274.0,8766909.0,1759.398,6.076,30314.0,6.084,0.1453,6.9,tests performed,8089366.0,3868649.0,3802335.0,656469.0,36780.0,29993.0,162.34,77.64,76.31,13.17,6019.0,1515.0,0.03,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-24,542146.0,3891.0,4443.0,5652.0,43.0,6.143,108801.213,780.87,891.649,1134.278,8.63,1.233,1.06,132.0,26.491,611.0,122.619,,,,,31622.0,8798531.0,1765.744,6.346,30264.0,6.074,0.1468,6.8,tests performed,8129439.0,3870272.0,3805422.0,691832.0,40073.0,30599.0,163.15,77.67,76.37,13.88,6141.0,1529.0,0.031,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-25,546909.0,4763.0,4459.714,5652.0,0.0,6.143,109757.081,955.868,895.003,1134.278,0.0,1.233,1.06,126.0,25.286,598.0,120.01,,,,,35284.0,8833815.0,1772.825,7.081,30674.0,6.156,0.1454,6.9,tests performed,8172204.0,3871287.0,3806538.0,732467.0,42765.0,30681.0,164.0,77.69,76.39,14.7,6157.0,1435.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-26,551528.0,4619.0,4672.0,5652.0,0.0,6.143,110684.051,926.969,937.606,1134.278,0.0,1.233,1.05,118.0,23.681,572.0,114.792,,,,,32926.0,8866741.0,1779.432,6.608,30983.0,6.218,0.1508,6.6,tests performed,8210362.0,3872592.0,3807612.0,768258.0,38158.0,31270.0,164.77,77.72,76.41,15.42,6275.0,1452.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-27,556319.0,4791.0,4505.143,5652.0,0.0,6.143,111645.538,961.488,904.12,1134.278,0.0,1.233,1.04,121.0,24.283,536.0,107.568,,,,,34190.0,8900931.0,1786.294,6.861,31424.0,6.306,0.1434,7.0,tests performed,8237566.0,3873831.0,3809145.0,792695.0,27204.0,31492.0,165.32,77.74,76.44,15.91,6320.0,1408.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-28,560054.0,3735.0,4441.429,5652.0,0.0,6.143,112395.101,749.563,891.333,1134.278,0.0,1.233,1.05,117.0,23.48,566.0,113.588,42.0,8.46,443.0,88.832,28461.0,8929392.0,1792.006,5.712,31392.0,6.3,0.1415,7.1,tests performed,8257727.0,3875801.0,3811393.0,808638.0,20161.0,31835.0,165.72,77.78,76.49,16.23,6389.0,1434.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-29,564657.0,4603.0,4294.714,5652.0,0.0,6.143,113318.86,923.759,861.89,1134.278,0.0,1.233,1.05,115.0,23.079,579.0,116.197,,,,,29569.0,8958961.0,1797.94,5.934,31761.0,6.374,0.1352,7.4,tests performed,8280742.0,3876349.0,3812356.0,830143.0,23015.0,32594.0,166.18,77.79,76.51,16.66,6541.0,1410.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-30,570115.0,5458.0,4551.429,5652.0,0.0,6.143,114414.205,1095.345,913.409,1134.278,0.0,1.233,1.05,122.0,24.484,579.0,116.197,,,,,30682.0,8989643.0,1804.097,6.157,31819.0,6.386,0.143,7.0,tests performed,8322865.0,3878291.0,3813953.0,868733.0,42123.0,33357.0,167.03,77.83,76.54,17.43,6694.0,1377.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,2066.2,3.42,9.24,414.657797942726\r\nIRL,Europe,Ireland,2021-12-01,573905.0,3790.0,4537.0,5707.0,55.0,7.857,115174.806,760.601,910.513,1145.316,11.038,1.577,1.04,117.0,23.48,578.0,115.997,,,,,34324.0,9023967.0,1810.986,6.888,32205.0,6.463,0.1409,7.1,tests performed,8364269.0,3879398.0,3815283.0,907701.0,41404.0,33547.0,167.86,77.85,76.57,18.22,6732.0,1304.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-02,578064.0,4159.0,4450.714,5707.0,0.0,7.857,116009.46,834.654,893.197,1145.316,0.0,1.577,1.04,117.0,23.48,545.0,109.374,,,,,36124.0,9060091.0,1818.235,7.25,32325.0,6.487,0.1377,7.3,tests performed,8407180.0,3881198.0,3816650.0,947445.0,42911.0,33568.0,168.72,77.89,76.59,19.01,6737.0,1416.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-03,583472.0,5408.0,4563.429,5707.0,0.0,7.857,117094.77,1085.311,915.817,1145.316,0.0,1.577,1.04,110.0,22.075,528.0,105.962,,,,,33464.0,9093555.0,1824.951,6.716,32402.0,6.503,0.1408,7.1,tests performed,8445365.0,3882253.0,3817788.0,983440.0,38185.0,33572.0,169.49,77.91,76.62,19.74,6737.0,1380.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-04,589094.0,5622.0,4682.143,5707.0,0.0,7.857,118223.028,1128.258,939.641,1145.316,0.0,1.577,1.04,114.0,22.878,487.0,97.734,,,,,34442.0,9127997.0,1831.863,6.912,32438.0,6.51,0.1443,6.9,tests performed,8471500.0,3883459.0,3819462.0,1006695.0,26135.0,33419.0,170.01,77.94,76.65,20.2,6707.0,1375.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-05,594250.0,5156.0,4885.143,5707.0,0.0,7.857,119257.766,1034.738,980.381,1145.316,0.0,1.577,1.03,110.0,22.075,503.0,100.945,33.0,6.647,476.0,95.479,30391.0,9158388.0,1837.962,6.099,32714.0,6.565,0.1493,6.7,tests performed,8489779.0,3884811.0,3821228.0,1021856.0,18279.0,33150.0,170.38,77.96,76.69,20.51,6653.0,1287.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-06,597161.0,2911.0,4643.429,5707.0,0.0,7.857,119841.964,584.197,931.872,1145.316,0.0,1.577,1.01,110.0,22.075,536.0,107.568,,,,,30004.0,9188392.0,1843.983,6.021,32776.0,6.578,0.1417,7.1,tests performed,8514037.0,3885753.0,3822482.0,1043918.0,24258.0,33328.0,170.86,77.98,76.71,20.95,6688.0,1343.0,0.027,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-07,602726.0,5565.0,4658.714,5707.0,0.0,7.857,120958.782,1116.819,934.94,1145.316,0.0,1.577,1.01,117.0,23.48,505.0,101.347,,,,,29812.0,9218204.0,1849.966,5.983,32652.0,6.553,0.1427,7.0,tests performed,8544268.0,3886238.0,3823185.0,1072962.0,30231.0,31629.0,171.47,77.99,76.73,21.53,6348.0,1135.0,0.023,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-08,606852.0,4126.0,4706.714,5788.0,81.0,11.571,121786.813,828.031,944.573,1161.572,16.256,2.322,1.0,118.0,23.681,543.0,108.973,,,,,34383.0,9252587.0,1856.866,6.9,32660.0,6.554,0.1441,6.9,tests performed,8583515.0,3887053.0,3824625.0,1109954.0,39247.0,31321.0,172.26,78.01,76.75,22.28,6286.0,1094.0,0.022,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-09,610855.0,4003.0,4684.429,5788.0,0.0,11.571,122590.16,803.347,940.1,1161.572,0.0,2.322,1.0,115.0,23.079,530.0,106.364,,,,,27121.0,9279708.0,1862.309,5.443,31374.0,6.296,0.1493,6.7,tests performed,8631482.0,3887853.0,3825777.0,1155969.0,47967.0,32043.0,173.22,78.02,76.78,23.2,6431.0,951.0,0.019,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-10,614952.0,4097.0,4497.143,5788.0,0.0,11.571,123412.372,822.211,902.514,1161.572,0.0,2.322,1.0,110.0,22.075,511.0,102.551,,,,,30491.0,9310199.0,1868.428,6.119,30949.0,6.211,0.1453,6.9,tests performed,8674878.0,3888744.0,3827331.0,1196921.0,43396.0,32788.0,174.09,78.04,76.81,24.02,6580.0,927.0,0.019,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-11,618956.0,4004.0,4266.0,5788.0,0.0,11.571,124215.919,803.547,856.127,1161.572,0.0,2.322,1.01,111.0,22.276,481.0,96.53,,,,,34462.0,9344661.0,1875.344,6.916,30952.0,6.212,0.1378,7.3,tests performed,8705415.0,3889383.0,3828157.0,1225993.0,30537.0,33416.0,174.71,78.05,76.83,24.6,6706.0,846.0,0.017,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-12,623623.0,4667.0,4196.143,5788.0,0.0,11.571,125152.522,936.602,842.108,1161.572,0.0,2.322,1.04,109.0,21.875,504.0,101.146,37.0,7.453,438.0,87.825,32346.0,9377007.0,1881.836,6.491,31231.0,6.268,0.1344,7.4,tests performed,8733719.0,3890075.0,3829346.0,1252416.0,28304.0,34849.0,175.27,78.07,76.85,25.13,6994.0,752.0,0.015,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-13,628306.0,4683.0,4449.286,5788.0,0.0,11.571,126092.335,939.813,892.91,1161.572,0.0,2.322,1.05,108.0,21.674,518.0,103.955,,,,,27383.0,9404390.0,1887.331,5.495,30857.0,6.193,0.1442,6.9,tests performed,8767029.0,3890793.0,3830378.0,1283976.0,33310.0,36142.0,175.94,78.08,76.87,25.77,7253.0,720.0,0.014,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-14,632177.0,3871.0,4207.286,5788.0,0.0,11.571,126869.191,776.856,844.344,1161.572,0.0,2.322,1.06,109.0,21.875,493.0,98.938,,,,,27119.0,9431509.0,1892.774,5.442,30472.0,6.115,0.1381,7.2,tests performed,8822156.0,3891418.0,3831526.0,1337331.0,55127.0,39698.0,177.05,78.1,76.89,26.84,7967.0,740.0,0.015,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-15,636407.0,4230.0,4222.143,5835.0,47.0,6.714,127718.094,848.903,847.326,1171.004,9.432,1.347,1.08,105.0,21.072,470.0,94.323,,,,,36274.0,9467783.0,1900.053,7.28,30742.0,6.169,0.1373,7.3,tests performed,8881444.0,3892213.0,3832704.0,1394648.0,59288.0,42561.0,178.24,78.11,76.92,27.99,8541.0,737.0,0.015,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-16,640548.0,4141.0,4241.857,5835.0,0.0,6.714,128549.135,831.041,851.282,1171.004,0.0,1.347,1.1,108.0,21.674,443.0,88.904,,,,,35130.0,9502913.0,1907.103,7.05,31886.0,6.399,0.133,7.5,tests performed,8949893.0,3893280.0,3834148.0,1460593.0,68449.0,45487.0,179.61,78.13,76.95,29.31,9129.0,775.0,0.016,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-17,644143.0,3595.0,4170.143,5835.0,0.0,6.714,129270.602,721.467,836.89,1171.004,0.0,1.347,1.14,105.0,21.072,420.0,84.288,,,,,34589.0,9537502.0,1914.045,6.942,32472.0,6.517,0.1284,7.8,tests performed,9019009.0,3894485.0,3836525.0,1526128.0,69116.0,49162.0,181.0,78.16,76.99,30.63,9866.0,820.0,0.016,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-18,651476.0,7333.0,4645.714,5835.0,0.0,6.714,130742.234,1471.632,932.331,1171.004,0.0,1.347,1.2,107.0,21.473,410.0,82.281,,,,,33312.0,9570814.0,1920.73,6.685,32308.0,6.484,0.1438,7.0,tests performed,9067299.0,3895757.0,3837671.0,1572000.0,48290.0,51698.0,181.97,78.18,77.02,31.55,10375.0,911.0,0.018,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-19,656600.0,5124.0,4711.0,5835.0,0.0,6.714,131770.55,1028.316,945.433,1171.004,0.0,1.347,1.24,107.0,21.473,436.0,87.499,34.0,6.849,332.0,66.674,32546.0,9603360.0,1927.262,6.532,32336.0,6.489,0.1457,6.9,tests performed,9123237.0,3896318.0,3838535.0,1626514.0,55938.0,55645.0,183.09,78.19,77.03,32.64,11167.0,892.0,0.018,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-20,661388.0,4788.0,4726.0,5835.0,0.0,6.714,132731.435,960.885,948.443,1171.004,0.0,1.347,1.27,104.0,20.871,467.0,93.72,,,,,27032.0,9630392.0,1932.687,5.425,32286.0,6.479,0.1464,6.8,tests performed,9217022.0,3896861.0,3839070.0,1719221.0,93785.0,64285.0,184.97,78.2,77.04,34.5,12901.0,867.0,0.017,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-21,666657.0,5269.0,4925.714,5835.0,0.0,6.714,133788.851,1057.416,988.523,1171.004,0.0,1.347,1.31,102.0,20.47,443.0,88.904,,,,,35494.0,9665886.0,1939.81,7.123,33482.0,6.719,0.1471,6.8,tests performed,9348827.0,3898331.0,3840793.0,1847835.0,131805.0,75239.0,187.62,78.23,77.08,37.08,15099.0,988.0,0.02,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-22,672964.0,6307.0,5222.429,5890.0,55.0,7.857,135054.579,1265.728,1048.069,1182.042,11.038,1.577,1.37,100.0,20.069,429.0,86.094,,,,,38509.0,9704395.0,1947.538,7.728,33802.0,6.784,0.1545,6.5,tests performed,9483508.0,3899591.0,3842266.0,1979785.0,134681.0,86009.0,190.32,78.26,77.11,39.73,17261.0,1054.0,0.021,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-23,680375.0,7411.0,5689.571,5890.0,0.0,7.857,136541.864,1487.285,1141.818,1182.042,0.0,1.577,1.43,98.0,19.667,390.0,78.268,,,,,40553.0,9744948.0,1955.676,8.138,34576.0,6.939,0.1646,6.1,tests performed,9586722.0,3900550.0,3843530.0,2080776.0,103214.0,90976.0,192.39,78.28,77.13,41.76,18258.0,1039.0,0.021,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-24,691557.0,11182.0,6773.429,5890.0,0.0,7.857,138785.937,2244.073,1359.334,1182.042,0.0,1.577,1.49,89.0,17.861,393.0,78.87,,,,,38531.0,9783479.0,1963.409,7.733,35140.0,7.052,0.1928,5.2,tests performed,9597955.0,3900651.0,3843654.0,2091784.0,11233.0,82707.0,192.62,78.28,77.14,41.98,16598.0,881.0,0.018,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-25,705322.0,13765.0,7692.286,5890.0,0.0,7.857,141548.382,2762.445,1543.735,1182.042,0.0,1.577,1.52,87.0,17.46,378.0,75.859,,,,,43100.0,9826579.0,1972.059,8.65,36538.0,7.333,0.2105,4.7,tests performed,,,,,,75828.0,,,,,15218.0,700.0,0.014,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-26,715726.0,10404.0,8446.571,5890.0,0.0,7.857,143636.321,2087.939,1695.11,1182.042,0.0,1.577,1.52,91.0,18.262,426.0,85.492,36.0,7.252,429.0,86.012,25581.0,9852160.0,1977.192,5.134,35543.0,7.133,0.2376,4.2,tests performed,9598228.0,3900659.0,3843660.0,2092043.0,,67856.0,192.62,78.28,77.14,41.98,13618.0,620.0,0.012,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-27,722461.0,6735.0,8724.714,5890.0,0.0,7.857,144987.943,1351.621,1750.93,1182.042,0.0,1.577,1.51,91.0,18.262,462.0,92.717,,,,,14067.0,9866227.0,1980.015,2.823,33691.0,6.761,0.259,3.9,tests performed,9612023.0,3901046.0,3844240.0,2104871.0,13795.0,56429.0,192.9,78.29,77.15,42.24,11325.0,598.0,0.012,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-28,731467.0,9006.0,9258.571,5890.0,0.0,7.857,146795.323,1807.38,1858.067,1182.042,0.0,1.577,1.53,92.0,18.463,521.0,104.558,,,,,26389.0,9892616.0,1985.311,5.296,32390.0,6.5,0.2858,3.5,tests performed,9636429.0,3901499.0,3844964.0,2128100.0,24406.0,41086.0,193.39,78.3,77.16,42.71,8245.0,453.0,0.009,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-29,747895.0,16428.0,10704.429,5912.0,22.0,3.143,150092.195,3296.873,2148.231,1186.457,4.415,0.631,1.58,93.0,18.664,568.0,113.99,,,,,39006.0,9931622.0,1993.139,7.828,32461.0,6.514,0.3298,3.0,tests performed,9691310.0,3902582.0,3846198.0,2180664.0,54881.0,29686.0,194.49,78.32,77.19,43.76,5958.0,427.0,0.009,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-30,768449.0,20554.0,12582.0,5912.0,0.0,3.143,154217.099,4124.904,2525.034,1186.457,0.0,0.631,1.6,88.0,17.66,619.0,124.225,,,,,45583.0,9977205.0,2002.287,9.148,33180.0,6.659,0.3792,2.6,tests performed,9753894.0,3903641.0,3847323.0,2241065.0,62584.0,23882.0,195.75,78.34,77.21,44.98,4793.0,442.0,0.009,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-31,788559.0,20110.0,13857.429,5912.0,0.0,3.143,158252.898,4035.799,2780.994,1186.457,0.0,0.631,1.57,86.0,17.259,682.0,136.868,,,,,45772.0,10022977.0,2011.473,9.186,34214.0,6.866,0.405,2.5,tests performed,9775195.0,3904360.0,3848970.0,2260000.0,21301.0,25320.0,196.17,78.36,77.24,45.36,5081.0,530.0,0.011,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-01,811840.0,23281.0,15216.857,5912.0,0.0,3.143,162925.073,4672.175,3053.813,1186.457,0.0,0.631,1.54,85.0,17.058,656.0,131.65,,,,,44660.0,10067637.0,2020.436,8.963,34437.0,6.911,0.4419,2.3,tests performed,9784282.0,3904424.0,3849065.0,2268928.0,9087.0,26599.0,196.36,78.36,77.25,45.53,5338.0,538.0,0.011,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-02,811840.0,0.0,13730.571,5912.0,0.0,3.143,162925.073,0.0,2755.536,1186.457,0.0,0.631,1.49,87.0,17.46,717.0,143.892,27.0,5.439,812.0,162.959,33282.0,10100919.0,2027.115,6.679,35537.0,7.132,0.3864,2.6,tests performed,9799031.0,3904690.0,3849683.0,2282793.0,14749.0,28686.0,196.65,78.36,77.26,45.81,5757.0,576.0,0.012,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-03,845897.0,34057.0,17633.714,5912.0,0.0,3.143,169759.843,6834.769,3538.843,1186.457,0.0,0.631,1.5,93.0,18.664,804.0,161.352,,,,,36862.0,10137781.0,2034.513,7.398,38793.0,7.785,0.4546,2.2,tests performed,9820108.0,3908314.0,3850387.0,2299542.0,21077.0,29726.0,197.08,78.43,77.27,46.15,5966.0,1038.0,0.021,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-04,867199.0,21302.0,19390.286,5912.0,0.0,3.143,174034.86,4275.017,3891.362,1186.457,0.0,0.631,1.44,90.0,18.062,884.0,177.407,,,,,39953.0,10177734.0,2042.531,8.018,40731.0,8.174,0.4761,2.1,tests performed,9853811.0,3909498.0,3851101.0,2331347.0,33703.0,31055.0,197.75,78.46,77.29,46.79,6232.0,1143.0,0.023,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-05,884855.0,17656.0,19565.714,5952.0,40.0,5.714,177578.175,3543.315,3926.569,1194.484,8.027,1.147,1.38,94.0,18.865,928.0,186.237,,,,,40318.0,10218052.0,2050.622,8.091,40919.0,8.212,0.4782,2.1,tests performed,9897599.0,3911639.0,3851909.0,2372186.0,43788.0,29470.0,198.63,78.5,77.3,47.61,5914.0,1294.0,0.026,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-06,908672.0,23817.0,20031.857,5952.0,0.0,5.714,182357.918,4779.743,4020.117,1194.484,0.0,1.147,1.34,90.0,18.062,941.0,188.846,,,,,48991.0,10267043.0,2060.454,9.832,41405.0,8.309,0.4838,2.1,tests performed,9942835.0,3914092.0,3853490.0,2413388.0,45236.0,26992.0,199.54,78.55,77.33,48.43,5417.0,1493.0,0.03,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-07,930598.0,21926.0,20291.286,5952.0,0.0,5.714,186758.164,4400.245,4072.181,1194.484,0.0,1.147,1.29,84.0,16.858,936.0,187.842,,,,,42283.0,10309326.0,2068.939,8.486,40907.0,8.209,0.496,2.0,tests performed,9979575.0,3918919.0,3854187.0,2444604.0,36740.0,29197.0,200.28,78.65,77.35,49.06,5859.0,2080.0,0.042,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-08,956720.0,26122.0,20697.143,5952.0,0.0,5.714,192000.488,5242.325,4153.631,1194.484,0.0,1.147,1.24,83.0,16.657,917.0,184.029,,,,,48579.0,10357905.0,2078.688,9.749,41467.0,8.322,0.4991,2.0,tests performed,10004885.0,3928699.0,3854881.0,2459441.0,25310.0,31515.0,200.78,78.84,77.36,49.36,6325.0,3468.0,0.07,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-09,978104.0,21384.0,23752.0,5952.0,0.0,5.714,196291.961,4291.473,4766.698,1194.484,0.0,1.147,1.19,83.0,16.657,984.0,197.475,38.0,7.654,1026.0,205.864,44044.0,10401949.0,2087.527,8.839,43004.0,8.63,0.5523,1.8,tests performed,10022872.0,3935812.0,3855538.0,2469658.0,17987.0,31977.0,201.15,78.99,77.38,49.56,6417.0,4446.0,0.089,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-10,978104.0,0.0,18886.714,5952.0,0.0,5.714,196291.961,0.0,3790.303,1194.484,0.0,1.147,1.12,89.0,17.861,1063.0,213.329,,,,,43836.0,10445785.0,2096.325,8.797,44001.0,8.83,0.4292,2.3,tests performed,10044642.0,3942455.0,3855974.0,2484349.0,21770.0,32076.0,201.58,79.12,77.38,49.86,6437.0,4877.0,0.098,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-11,1021303.0,43199.0,22014.857,5952.0,0.0,5.714,204961.404,8669.443,4418.078,1194.484,0.0,1.147,1.12,92.0,18.463,1062.0,213.129,,,,,42776.0,10488561.0,2104.909,8.585,44404.0,8.911,0.4958,2.0,tests performed,10074423.0,3947208.0,3857239.0,2508113.0,29781.0,31516.0,202.18,79.22,77.41,50.33,6325.0,5387.0,0.108,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-12,1042212.0,20909.0,22479.571,6035.0,83.0,11.857,209157.552,4196.147,4511.339,1211.141,16.657,2.38,1.04,92.0,18.463,1055.0,211.724,,,,,42087.0,10530648.0,2113.356,8.446,44657.0,8.962,0.5034,2.0,tests performed,10108079.0,3954743.0,3858021.0,2533453.0,33656.0,30069.0,202.86,79.37,77.43,50.84,6034.0,6158.0,0.124,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-13,1061116.0,18904.0,21777.714,6035.0,0.0,11.857,212951.323,3793.772,4370.486,1211.141,0.0,2.38,0.96,92.0,18.463,1011.0,202.894,,,,,42683.0,10573331.0,2121.921,8.566,43755.0,8.781,0.4977,2.0,tests performed,10141352.0,3962032.0,3858712.0,2558746.0,33273.0,28360.0,203.52,79.51,77.44,51.35,5691.0,6849.0,0.137,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-14,1078181.0,17065.0,21083.286,6035.0,0.0,11.857,216376.033,3424.71,4231.124,1211.141,0.0,2.38,0.88,83.0,16.657,1020.0,204.7,,,,,37839.0,10611170.0,2129.515,7.594,43121.0,8.654,0.4889,2.0,tests performed,10175084.0,3972737.0,3859427.0,2581058.0,33732.0,27930.0,204.2,79.73,77.45,51.8,5605.0,7688.0,0.154,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-15,1092736.0,14555.0,19430.857,6035.0,0.0,11.857,219297.02,2920.987,3899.505,1211.141,0.0,2.38,0.81,89.0,17.861,940.0,188.645,,,,,35932.0,10647102.0,2136.726,7.211,41314.0,8.291,0.4703,2.1,tests performed,10196269.0,3981079.0,3860041.0,2593287.0,21185.0,27341.0,204.63,79.89,77.47,52.04,5487.0,7483.0,0.15,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-16,1103489.0,10753.0,17912.143,6035.0,0.0,11.857,221454.999,2157.979,3594.72,1211.141,0.0,2.38,0.75,88.0,17.66,961.0,192.859,39.0,7.856,978.0,196.195,23322.0,10670424.0,2141.407,4.68,38354.0,7.697,0.467,2.1,tests performed,10210968.0,3988048.0,3861246.0,2599813.0,14699.0,26871.0,204.92,80.03,77.49,52.17,5393.0,7462.0,0.15,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-17,1109818.0,6329.0,18816.286,6035.0,0.0,11.857,222725.142,1270.143,3776.169,1211.141,0.0,2.38,0.68,97.0,19.467,1006.0,201.89,,,,,18212.0,10688636.0,2145.062,3.655,34693.0,6.962,0.5424,1.8,tests performed,10225653.0,3990593.0,3861745.0,2611454.0,14685.0,25859.0,205.21,80.09,77.5,52.41,5190.0,6877.0,0.138,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-18,1115585.0,5767.0,13468.857,6035.0,0.0,11.857,223882.499,1157.357,2703.014,1211.141,0.0,2.38,0.63,93.0,18.664,979.0,196.472,,,,,21224.0,10709860.0,2149.321,4.259,31614.0,6.344,0.426,2.3,tests performed,10242771.0,3994633.0,3862127.0,2624153.0,17118.0,24050.0,205.56,80.17,77.51,52.66,4827.0,6775.0,0.136,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-19,1122428.0,6843.0,11459.429,6087.0,52.0,7.429,225255.795,1373.296,2299.749,1221.577,10.436,1.491,0.6,90.0,18.062,911.0,182.825,,,,,22776.0,10732636.0,2153.892,4.571,28855.0,5.791,0.3971,2.5,tests performed,10258560.0,3998101.0,3862661.0,2635940.0,15789.0,21497.0,205.88,80.24,77.52,52.9,4314.0,6194.0,0.124,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-20,1127951.0,5523.0,9547.857,6087.0,0.0,7.429,226364.184,1108.39,1916.123,1221.577,0.0,1.491,0.58,90.0,18.062,896.0,179.815,,,,,20497.0,10753133.0,2158.005,4.113,25686.0,5.155,0.3717,2.7,tests performed,10273788.0,4001778.0,3863518.0,2646634.0,15228.0,18919.0,206.18,80.31,77.54,53.11,3797.0,5678.0,0.114,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-21,1134548.0,6597.0,8052.429,6087.0,0.0,7.429,227688.111,1323.927,1616.011,1221.577,0.0,1.491,0.58,88.0,17.66,892.0,179.012,,,,,20689.0,10773822.0,2162.157,4.152,23236.0,4.663,0.3465,2.9,tests performed,10286973.0,4005020.0,3864439.0,2655656.0,13185.0,15984.0,206.45,80.38,77.55,53.3,3208.0,4612.0,0.093,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-22,1141237.0,6689.0,6928.714,6087.0,0.0,7.429,229030.501,1342.39,1390.497,1221.577,0.0,1.491,0.58,78.0,15.654,836.0,167.774,,,,,20385.0,10794207.0,2166.248,4.091,21015.0,4.217,0.3297,3.0,tests performed,10297877.0,4009284.0,3865042.0,2661693.0,10904.0,14515.0,206.66,80.46,77.57,53.42,2913.0,4029.0,0.081,23.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-23,1145968.0,4731.0,6068.429,6087.0,0.0,7.429,229979.947,949.446,1217.85,1221.577,0.0,1.491,0.58,79.0,15.854,845.0,169.58,38.0,7.654,775.0,155.506,16016.0,10810223.0,2169.462,3.214,19971.0,4.008,0.3039,3.3,tests performed,10305191.0,4012374.0,3865719.0,2665240.0,7314.0,13460.0,206.81,80.52,77.58,53.49,2701.0,3475.0,0.07,23.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-24,1149660.0,3692.0,5691.714,6087.0,0.0,7.429,230720.881,740.933,1142.248,1221.577,0.0,1.491,0.57,76.0,15.252,885.0,177.607,,,,,13357.0,10823580.0,2172.143,2.681,19278.0,3.869,0.2952,3.4,tests performed,10311109.0,4013008.0,3866143.0,2670100.0,5918.0,12208.0,206.93,80.54,77.59,53.59,2450.0,3202.0,0.064,23.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-25,1153666.0,4006.0,5440.143,6087.0,0.0,7.429,231524.83,803.949,1091.762,1221.577,0.0,1.491,0.58,79.0,15.854,824.0,165.365,,,,,15729.0,10839309.0,2175.3,3.157,18493.0,3.711,0.2942,3.4,tests performed,10319877.0,4013695.0,3867933.0,2676391.0,8768.0,11015.0,207.11,80.55,77.62,53.71,2211.0,2723.0,0.055,23.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-26,1159271.0,5605.0,5263.286,6136.0,49.0,7.0,232649.676,1124.846,1056.269,1231.41,9.834,1.405,0.6,74.0,14.851,739.0,148.307,,,,,20250.0,10859559.0,2179.363,4.064,18132.0,3.639,0.2903,3.4,tests performed,10328421.0,4014389.0,3868764.0,2683410.0,8544.0,9980.0,207.28,80.56,77.64,53.85,2003.0,2327.0,0.047,23.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-27,1164536.0,5265.0,5226.429,6136.0,0.0,7.0,233706.289,1056.613,1048.872,1231.41,0.0,1.405,0.62,71.0,14.249,708.0,142.086,,,,,17973.0,10877532.0,2182.97,3.607,17771.0,3.566,0.2941,3.4,tests performed,10336611.0,4015650.0,3869872.0,2689231.0,8190.0,8975.0,207.44,80.59,77.66,53.97,1801.0,1982.0,0.04,23.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-28,1169645.0,5109.0,5013.857,6136.0,0.0,7.0,234731.594,1025.306,1006.212,1231.41,0.0,1.405,0.64,69.0,13.847,707.0,141.885,,,,,17746.0,10895278.0,2186.532,3.561,17351.0,3.482,0.289,3.5,tests performed,10347217.0,4016666.0,3872894.0,2695799.0,10606.0,8606.0,207.65,80.61,77.72,54.1,1727.0,1664.0,0.033,23.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-29,1169645.0,0.0,4058.286,6136.0,0.0,7.0,234731.594,0.0,814.442,1231.41,0.0,1.405,0.66,66.0,13.245,649.0,130.245,,,,,17450.0,10912728.0,2190.034,3.502,16932.0,3.398,0.2397,4.2,tests performed,10356777.0,4018990.0,3876306.0,2699623.0,9560.0,8414.0,207.85,80.66,77.79,54.18,1689.0,1387.0,0.028,14.81,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-30,1169645.0,0.0,3382.429,6136.0,0.0,7.0,234731.594,0.0,678.807,1231.41,0.0,1.405,0.73,74.0,14.851,651.0,130.647,23.0,4.633,639.0,128.313,14536.0,10927264.0,2192.951,2.917,16720.0,3.355,0.2023,4.9,tests performed,10367923.0,4020623.0,3883837.0,2701605.0,11146.0,8962.0,208.07,80.69,77.94,54.22,1799.0,1178.0,0.024,14.81,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-31,1183008.0,13363.0,4764.0,6136.0,0.0,7.0,237413.364,2681.77,956.069,1231.41,0.0,1.405,0.81,,,,,,,,,13290.0,10940554.0,2195.618,2.667,16711.0,3.354,0.2851,3.5,tests performed,10372434.0,4021088.0,3885182.0,2704306.0,4511.0,8761.0,208.16,80.7,77.97,54.27,1758.0,1154.0,0.023,14.81,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-02-01,1187216.0,4208.0,4792.857,6136.0,0.0,7.0,238257.851,844.487,961.86,1231.41,0.0,1.405,,,,,,,,,,16029.0,10956583.0,2198.835,3.217,16753.0,3.362,0.2861,3.5,tests performed,10380265.0,4021814.0,3888534.0,2708061.0,7831.0,8627.0,208.32,80.71,78.04,54.35,1731.0,1160.0,0.023,,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-02-02,1193156.0,5940.0,4840.714,6228.0,92.0,13.143,239449.927,1192.076,971.464,1249.874,18.463,2.638,,,,,,,,,,19684.0,10976267.0,2202.785,3.95,16673.0,3.346,0.2903,3.4,tests performed,10389033.0,4022441.0,3891434.0,2713302.0,8768.0,8659.0,208.49,80.72,78.1,54.45,1738.0,1150.0,0.023,,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-02-03,1199217.0,6061.0,4954.429,6228.0,,,240666.286,1216.359,994.285,1249.874,,,,,,,,,,,,19953.0,10996220.0,2206.789,4.004,16955.0,3.403,0.2922,3.4,tests performed,,,,,,,,,,,,,,,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\n");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6)
    : year > 9999 ? "+" + pad(year, 6)
    : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date"
      : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
      + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
      : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
      : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
      : "");
}

/* harmony default export */ __webpack_exports__["a"] = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? ""
        : value instanceof Date ? formatDate(value)
        : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
        : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ __webpack_exports__["a"] = (locale);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ __webpack_exports__["a"] = (formatDistance);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ __webpack_exports__["a"] = (formatLong);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ __webpack_exports__["a"] = (formatRelative);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ __webpack_exports__["a"] = (localize);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: Object(_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ __webpack_exports__["a"] = (match);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildMatchPatternFn; });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isValid; });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(1, arguments);

  if (!Object(_isDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDate; });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTimezoneOffsetInMilliseconds; });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subMilliseconds; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(2, arguments);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyAmount);
  return Object(_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(dirtyDate, -amount);
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addMilliseconds; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(2, arguments);
  var timestamp = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(dirtyDate).getTime();
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ __webpack_exports__["a"] = (longFormatters);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = Object(_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = Object(_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(date); // Padding

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = Object(_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = Object(_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = Object(_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Math.floor(absOffset / 60), 2);
  var minutes = Object(_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ __webpack_exports__["a"] = (formatters);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUTCWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate);
  var diff = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date, options).getTime() - Object(_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startOfUTCWeekYear; });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(options.firstWeekContainsDate);
  var year = Object(_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = Object(_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUTCISOWeek; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate);
  var diff = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date).getTime() - Object(_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startOfUTCISOWeekYear; });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(1, arguments);
  var year = Object(_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = Object(_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fourthOfJanuary);
  return date;
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUTCDayOfYear; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  Object(_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(1, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addDays; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(dirtyDate);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testing", function() { return testing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data_date_extent", function() { return data_date_extent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_cases_smoothed", function() { return new_cases_smoothed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_deaths_smoothed", function() { return new_deaths_smoothed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_cases", function() { return new_cases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_deaths", function() { return new_deaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cases_deaths_link_smoothed", function() { return cases_deaths_link_smoothed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cases_deaths_link", function() { return cases_deaths_link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony import */ var raw_loader_public_owid_covid_data_IRL_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
// copying some old stuff; this is a bit mental right now, but does it work?





const data = Object(d3_dsv__WEBPACK_IMPORTED_MODULE_1__[/* csvParse */ "a"])(raw_loader_public_owid_covid_data_IRL_csv__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], d3_dsv__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).map((d) => {
  return {
    date: new Date(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(d.date, 'yyyy-MM-dd')),
    new_cases_smoothed: d.new_cases_smoothed,
    new_deaths_smoothed: d.new_deaths_smoothed,
    new_cases: d.new_cases,
    new_deaths: d.new_deaths };

});

const testing = ({}) => 1; // this should work, and so should this:

// const data_date_extent = ({}) => data[data.length - 1].date;   ====== error at runtime, so breaking all rules and making a constant (not a function !!!)
const data_date_extent = ({}) => data[data.length - 1].date; // exposing this, because not knowing the bounds = possibility for runtime TypeErrors in data.find result lookup

// note data has per million figures too, reproduction rate... lots of interesting stuff? weekly_icu_admissions_per_million? new_tests_smoothed_per_thousand? stringency_index? hospital_beds_per_thousand?

// csv fns keyed by date:
const new_cases_smoothed = ({ t_in }) =>
data.find((d) => Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d.date, t({ t_in }))).new_cases_smoothed;

const new_deaths_smoothed = ({ t_in }) =>
data.find((d) => Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d.date, t({ t_in }))).new_deaths_smoothed;

const new_cases = ({ t_in }) =>
data.find((d) => Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d.date, t({ t_in }))).new_cases;

const new_deaths = ({ t_in }) =>
data.find((d) => Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d.date, t({ t_in }))).new_deaths;

// some metrics modelling:

// cases 14 days ago / deaths (smoothed values, = 7 day avgs? yes confirmed in Excel, should confirm here!)
const cases_deaths_link_smoothed = ({ t_in }) =>
new_cases_smoothed({ t_in: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(t({ t_in }), -14) }) / new_deaths_smoothed({ t_in });

const cases_deaths_link = ({ t_in }) =>
new_cases({ t_in: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(t({ t_in }), -14) }) / new_deaths({ t_in });

// explicit inputs:

// t should be a JS date
const t = ({ t_in }) => t_in;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvParse; });
/* unused harmony export csvParseRows */
/* unused harmony export csvFormat */
/* unused harmony export csvFormatBody */
/* unused harmony export csvFormatRows */
/* unused harmony export csvFormatRow */
/* unused harmony export csvFormatValue */
/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


var csv = Object(_dsv_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return autoType; });
function autoType(object) {
  for (var key in object) {
    var value = object[key].trim(), number, m;
    if (!value) value = null;
    else if (value === "true") value = true;
    else if (value === "false") value = false;
    else if (value === "NaN") value = NaN;
    else if (!isNaN(number = +value)) value = number;
    else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
      if (fixtz && !!m[4] && !m[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
      value = new Date(value);
    }
    else continue;
    object[key] = value;
  }
  return object;
}

// https://github.com/d3/d3-dsv/issues/45
const fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(dirtyDate);

  if (!Object(_isValid_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(originalDate);
  var utcDate = Object(_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__[/* isProtectedWeekYearToken */ "b"])(substring)) {
        Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__[/* throwProtectedError */ "c"])(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__[/* isProtectedDayOfYearToken */ "a"])(substring)) {
        Object(_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_7__[/* throwProtectedError */ "c"])(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=IRL-stats.js.map