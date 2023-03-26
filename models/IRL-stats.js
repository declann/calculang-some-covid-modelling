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
/* harmony default export */ __webpack_exports__["a"] = ("iso_code,date,new_cases_smoothed,new_cases,new_deaths_smoothed,new_deaths\r\nIRL,2020-01-03,,0.0,,0.0\r\nIRL,2020-01-04,,0.0,,0.0\r\nIRL,2020-01-05,,0.0,,0.0\r\nIRL,2020-01-06,,0.0,,0.0\r\nIRL,2020-01-07,,0.0,,0.0\r\nIRL,2020-01-08,0.0,0.0,0.0,0.0\r\nIRL,2020-01-09,0.0,0.0,0.0,0.0\r\nIRL,2020-01-10,0.0,0.0,0.0,0.0\r\nIRL,2020-01-11,0.0,0.0,0.0,0.0\r\nIRL,2020-01-12,0.0,0.0,0.0,0.0\r\nIRL,2020-01-13,0.0,0.0,0.0,0.0\r\nIRL,2020-01-14,0.0,0.0,0.0,0.0\r\nIRL,2020-01-15,0.0,0.0,0.0,0.0\r\nIRL,2020-01-16,0.0,0.0,0.0,0.0\r\nIRL,2020-01-17,0.0,0.0,0.0,0.0\r\nIRL,2020-01-18,0.0,0.0,0.0,0.0\r\nIRL,2020-01-19,0.0,0.0,0.0,0.0\r\nIRL,2020-01-20,0.0,0.0,0.0,0.0\r\nIRL,2020-01-21,0.0,0.0,0.0,0.0\r\nIRL,2020-01-22,0.0,0.0,0.0,0.0\r\nIRL,2020-01-23,0.0,0.0,0.0,0.0\r\nIRL,2020-01-24,0.0,0.0,0.0,0.0\r\nIRL,2020-01-25,0.0,0.0,0.0,0.0\r\nIRL,2020-01-26,0.0,0.0,0.0,0.0\r\nIRL,2020-01-27,0.0,0.0,0.0,0.0\r\nIRL,2020-01-28,0.0,0.0,0.0,0.0\r\nIRL,2020-01-29,0.0,0.0,0.0,0.0\r\nIRL,2020-01-30,0.0,0.0,0.0,0.0\r\nIRL,2020-01-31,0.0,0.0,0.0,0.0\r\nIRL,2020-02-01,0.0,0.0,0.0,0.0\r\nIRL,2020-02-02,0.0,0.0,0.0,0.0\r\nIRL,2020-02-03,0.0,0.0,0.0,0.0\r\nIRL,2020-02-04,0.0,0.0,0.0,0.0\r\nIRL,2020-02-05,0.0,0.0,0.0,0.0\r\nIRL,2020-02-06,0.0,0.0,0.0,0.0\r\nIRL,2020-02-07,0.0,0.0,0.0,0.0\r\nIRL,2020-02-08,0.0,0.0,0.0,0.0\r\nIRL,2020-02-09,0.0,0.0,0.0,0.0\r\nIRL,2020-02-10,0.0,0.0,0.0,0.0\r\nIRL,2020-02-11,0.0,0.0,0.0,0.0\r\nIRL,2020-02-12,0.0,0.0,0.0,0.0\r\nIRL,2020-02-13,0.0,0.0,0.0,0.0\r\nIRL,2020-02-14,0.0,0.0,0.0,0.0\r\nIRL,2020-02-15,0.0,0.0,0.0,0.0\r\nIRL,2020-02-16,0.0,0.0,0.0,0.0\r\nIRL,2020-02-17,0.0,0.0,0.0,0.0\r\nIRL,2020-02-18,0.0,0.0,0.0,0.0\r\nIRL,2020-02-19,0.0,0.0,0.0,0.0\r\nIRL,2020-02-20,0.0,0.0,0.0,0.0\r\nIRL,2020-02-21,0.0,0.0,0.0,0.0\r\nIRL,2020-02-22,0.0,0.0,0.0,0.0\r\nIRL,2020-02-23,0.0,0.0,0.0,0.0\r\nIRL,2020-02-24,0.0,0.0,0.0,0.0\r\nIRL,2020-02-25,0.0,0.0,0.0,0.0\r\nIRL,2020-02-26,0.0,0.0,0.0,0.0\r\nIRL,2020-02-27,0.0,0.0,0.0,0.0\r\nIRL,2020-02-28,0.0,0.0,0.0,0.0\r\nIRL,2020-02-29,0.0,0.0,0.0,0.0\r\nIRL,2020-03-01,0.143,1.0,0.0,0.0\r\nIRL,2020-03-02,0.143,0.0,0.0,0.0\r\nIRL,2020-03-03,0.143,0.0,0.0,0.0\r\nIRL,2020-03-04,0.143,0.0,0.143,1.0\r\nIRL,2020-03-05,0.286,1.0,0.143,0.0\r\nIRL,2020-03-06,0.857,4.0,0.143,0.0\r\nIRL,2020-03-07,1.857,7.0,0.143,0.0\r\nIRL,2020-03-08,2.429,5.0,0.143,0.0\r\nIRL,2020-03-09,2.571,1.0,0.143,0.0\r\nIRL,2020-03-10,2.857,2.0,0.143,0.0\r\nIRL,2020-03-11,3.286,3.0,0.0,0.0\r\nIRL,2020-03-12,4.571,10.0,0.0,0.0\r\nIRL,2020-03-13,5.286,9.0,0.0,0.0\r\nIRL,2020-03-14,8.143,27.0,0.143,1.0\r\nIRL,2020-03-15,10.286,20.0,0.143,0.0\r\nIRL,2020-03-16,15.714,39.0,0.143,0.0\r\nIRL,2020-03-17,21.143,40.0,0.286,1.0\r\nIRL,2020-03-18,28.429,54.0,0.286,0.0\r\nIRL,2020-03-19,36.857,69.0,0.286,0.0\r\nIRL,2020-03-20,46.143,74.0,0.286,0.0\r\nIRL,2020-03-21,69.571,191.0,0.286,1.0\r\nIRL,2020-03-22,84.714,126.0,0.429,1.0\r\nIRL,2020-03-23,93.714,102.0,0.857,3.0\r\nIRL,2020-03-24,105.286,121.0,1.429,5.0\r\nIRL,2020-03-25,128.857,219.0,1.714,2.0\r\nIRL,2020-03-26,148.143,204.0,2.714,7.0\r\nIRL,2020-03-27,171.143,235.0,3.857,8.0\r\nIRL,2020-03-28,180.286,255.0,5.0,9.0\r\nIRL,2020-03-29,205.429,302.0,7.0,15.0\r\nIRL,2020-03-30,232.857,294.0,7.143,4.0\r\nIRL,2020-03-31,245.571,210.0,8.429,14.0\r\nIRL,2020-04-01,255.0,285.0,11.143,21.0\r\nIRL,2020-04-02,272.286,325.0,12.429,16.0\r\nIRL,2020-04-03,269.0,212.0,14.143,20.0\r\nIRL,2020-04-04,290.0,402.0,16.0,22.0\r\nIRL,2020-04-05,307.429,424.0,17.286,24.0\r\nIRL,2020-04-06,312.714,331.0,21.857,36.0\r\nIRL,2020-04-07,338.429,390.0,25.857,42.0\r\nIRL,2020-04-08,421.286,865.0,28.0,36.0\r\nIRL,2020-04-09,427.0,365.0,30.571,34.0\r\nIRL,2020-04-10,463.0,464.0,35.0,51.0\r\nIRL,2020-04-11,506.286,705.0,36.714,34.0\r\nIRL,2020-04-12,545.143,696.0,39.857,46.0\r\nIRL,2020-04-13,617.714,839.0,41.571,48.0\r\nIRL,2020-04-14,665.857,727.0,42.0,45.0\r\nIRL,2020-04-15,684.0,992.0,45.0,57.0\r\nIRL,2020-04-16,750.571,831.0,46.857,47.0\r\nIRL,2020-04-17,837.0,1069.0,46.714,50.0\r\nIRL,2020-04-18,839.714,724.0,49.143,51.0\r\nIRL,2020-04-19,841.571,709.0,48.714,43.0\r\nIRL,2020-04-20,832.857,778.0,49.571,54.0\r\nIRL,2020-04-21,799.429,493.0,49.571,45.0\r\nIRL,2020-04-22,715.0,401.0,47.0,39.0\r\nIRL,2020-04-23,651.714,388.0,45.857,39.0\r\nIRL,2020-04-24,589.143,631.0,45.0,44.0\r\nIRL,2020-04-25,619.429,936.0,42.714,35.0\r\nIRL,2020-04-26,600.571,577.0,41.429,34.0\r\nIRL,2020-04-27,543.286,377.0,40.571,48.0\r\nIRL,2020-04-28,573.0,701.0,36.714,18.0\r\nIRL,2020-04-29,570.857,386.0,36.714,39.0\r\nIRL,2020-04-30,548.143,229.0,34.143,21.0\r\nIRL,2020-05-01,511.714,376.0,30.571,19.0\r\nIRL,2020-05-02,429.286,359.0,29.571,28.0\r\nIRL,2020-05-03,378.429,221.0,28.714,28.0\r\nIRL,2020-05-04,373.571,343.0,25.286,24.0\r\nIRL,2020-05-05,320.571,330.0,26.571,27.0\r\nIRL,2020-05-06,303.429,266.0,24.571,25.0\r\nIRL,2020-05-07,300.857,211.0,24.143,18.0\r\nIRL,2020-05-08,285.0,265.0,24.857,24.0\r\nIRL,2020-05-09,253.286,137.0,25.0,29.0\r\nIRL,2020-05-10,244.0,156.0,23.571,18.0\r\nIRL,2020-05-11,226.286,219.0,22.714,18.0\r\nIRL,2020-05-12,212.857,236.0,20.857,14.0\r\nIRL,2020-05-13,194.714,139.0,18.857,11.0\r\nIRL,2020-05-14,179.857,107.0,18.0,12.0\r\nIRL,2020-05-15,164.714,159.0,15.429,6.0\r\nIRL,2020-05-16,206.0,426.0,13.429,15.0\r\nIRL,2020-05-17,202.143,129.0,11.857,7.0\r\nIRL,2020-05-18,184.0,92.0,11.286,14.0\r\nIRL,2020-05-19,159.429,64.0,10.429,8.0\r\nIRL,2020-05-20,152.143,88.0,10.571,12.0\r\nIRL,2020-05-21,144.143,51.0,10.143,9.0\r\nIRL,2020-05-22,130.571,64.0,10.429,8.0\r\nIRL,2020-05-23,80.571,76.0,9.0,5.0\r\nIRL,2020-05-24,78.571,115.0,8.714,5.0\r\nIRL,2020-05-25,76.286,76.0,7.143,3.0\r\nIRL,2020-05-26,75.286,57.0,6.857,6.0\r\nIRL,2020-05-27,71.143,59.0,6.0,6.0\r\nIRL,2020-05-28,69.143,37.0,5.857,8.0\r\nIRL,2020-05-29,69.714,68.0,5.571,6.0\r\nIRL,2020-05-30,64.286,38.0,5.429,4.0\r\nIRL,2020-05-31,52.857,35.0,5.714,7.0\r\nIRL,2020-06-01,49.571,53.0,6.0,5.0\r\nIRL,2020-06-02,50.143,61.0,5.857,5.0\r\nIRL,2020-06-03,52.0,72.0,5.571,4.0\r\nIRL,2020-06-04,47.286,4.0,4.714,2.0\r\nIRL,2020-06-05,44.0,45.0,4.143,2.0\r\nIRL,2020-06-06,43.0,31.0,4.286,5.0\r\nIRL,2020-06-07,41.0,21.0,3.857,4.0\r\nIRL,2020-06-08,36.286,20.0,3.571,3.0\r\nIRL,2020-06-09,30.143,18.0,3.429,4.0\r\nIRL,2020-06-10,20.714,6.0,3.571,5.0\r\nIRL,2020-06-11,21.286,8.0,3.714,3.0\r\nIRL,2020-06-12,17.143,16.0,3.714,2.0\r\nIRL,2020-06-13,13.714,7.0,3.571,4.0\r\nIRL,2020-06-14,12.429,12.0,3.286,2.0\r\nIRL,2020-06-15,16.0,45.0,3.143,2.0\r\nIRL,2020-06-16,14.571,8.0,2.714,1.0\r\nIRL,2020-06-17,16.286,18.0,2.286,2.0\r\nIRL,2020-06-18,17.0,13.0,2.143,2.0\r\nIRL,2020-06-19,15.714,7.0,2.143,2.0\r\nIRL,2020-06-20,16.714,14.0,2.0,3.0\r\nIRL,2020-06-21,16.857,13.0,2.0,2.0\r\nIRL,2020-06-22,11.286,6.0,1.714,0.0\r\nIRL,2020-06-23,10.857,5.0,1.571,0.0\r\nIRL,2020-06-24,8.857,4.0,1.571,2.0\r\nIRL,2020-06-25,8.143,8.0,2.143,6.0\r\nIRL,2020-06-26,7.857,5.0,2.0,1.0\r\nIRL,2020-06-27,7.143,9.0,1.714,1.0\r\nIRL,2020-06-28,6.571,9.0,1.714,2.0\r\nIRL,2020-06-29,9.0,23.0,1.857,1.0\r\nIRL,2020-06-30,8.571,2.0,2.0,1.0\r\nIRL,2020-07-01,11.286,23.0,1.857,1.0\r\nIRL,2020-07-02,11.714,11.0,1.286,2.0\r\nIRL,2020-07-03,11.571,4.0,1.143,0.0\r\nIRL,2020-07-04,12.0,12.0,1.0,0.0\r\nIRL,2020-07-05,12.0,9.0,1.143,3.0\r\nIRL,2020-07-06,10.286,11.0,1.143,1.0\r\nIRL,2020-07-07,12.571,18.0,1.0,0.0\r\nIRL,2020-07-08,9.857,4.0,1.0,1.0\r\nIRL,2020-07-09,9.286,7.0,0.714,0.0\r\nIRL,2020-07-10,9.286,4.0,1.0,2.0\r\nIRL,2020-07-11,10.857,23.0,1.0,0.0\r\nIRL,2020-07-12,13.0,24.0,0.571,0.0\r\nIRL,2020-07-13,14.571,22.0,0.429,0.0\r\nIRL,2020-07-14,14.429,17.0,0.429,0.0\r\nIRL,2020-07-15,15.286,10.0,0.429,1.0\r\nIRL,2020-07-16,18.857,32.0,0.714,2.0\r\nIRL,2020-07-17,20.143,13.0,0.714,2.0\r\nIRL,2020-07-18,19.0,15.0,0.714,0.0\r\nIRL,2020-07-19,20.143,32.0,0.714,0.0\r\nIRL,2020-07-20,19.857,20.0,0.857,1.0\r\nIRL,2020-07-21,18.857,10.0,0.857,0.0\r\nIRL,2020-07-22,18.286,6.0,0.714,0.0\r\nIRL,2020-07-23,18.857,36.0,0.429,0.0\r\nIRL,2020-07-24,19.429,17.0,0.286,1.0\r\nIRL,2020-07-25,18.286,7.0,0.286,0.0\r\nIRL,2020-07-26,16.429,19.0,0.429,1.0\r\nIRL,2020-07-27,17.0,24.0,0.286,0.0\r\nIRL,2020-07-28,17.286,12.0,0.286,0.0\r\nIRL,2020-07-29,18.0,11.0,0.286,0.0\r\nIRL,2020-07-30,18.286,38.0,0.286,0.0\r\nIRL,2020-07-31,17.571,12.0,0.143,0.0\r\nIRL,2020-08-01,28.714,85.0,0.286,1.0\r\nIRL,2020-08-02,31.429,38.0,0.286,1.0\r\nIRL,2020-08-03,34.286,44.0,0.286,0.0\r\nIRL,2020-08-04,40.143,53.0,0.286,0.0\r\nIRL,2020-08-05,45.143,46.0,0.286,0.0\r\nIRL,2020-08-06,46.143,45.0,0.286,0.0\r\nIRL,2020-08-07,51.571,50.0,0.286,0.0\r\nIRL,2020-08-08,49.286,69.0,0.143,0.0\r\nIRL,2020-08-09,57.857,98.0,0.143,1.0\r\nIRL,2020-08-10,76.429,174.0,0.286,1.0\r\nIRL,2020-08-11,78.571,68.0,0.429,1.0\r\nIRL,2020-08-12,80.0,56.0,0.571,1.0\r\nIRL,2020-08-13,78.286,33.0,0.571,0.0\r\nIRL,2020-08-14,76.429,37.0,0.571,0.0\r\nIRL,2020-08-15,79.571,91.0,0.571,0.0\r\nIRL,2020-08-16,75.0,66.0,0.429,0.0\r\nIRL,2020-08-17,78.143,196.0,0.429,1.0\r\nIRL,2020-08-18,77.857,66.0,0.286,0.0\r\nIRL,2020-08-19,77.857,56.0,0.143,0.0\r\nIRL,2020-08-20,99.714,186.0,0.143,0.0\r\nIRL,2020-08-21,101.286,48.0,0.143,0.0\r\nIRL,2020-08-22,106.714,129.0,0.286,1.0\r\nIRL,2020-08-23,108.571,79.0,0.286,0.0\r\nIRL,2020-08-24,102.429,153.0,0.143,0.0\r\nIRL,2020-08-25,101.714,61.0,0.143,0.0\r\nIRL,2020-08-26,114.714,147.0,0.143,0.0\r\nIRL,2020-08-27,100.286,85.0,0.286,1.0\r\nIRL,2020-08-28,116.571,162.0,0.286,0.0\r\nIRL,2020-08-29,111.0,90.0,0.143,0.0\r\nIRL,2020-08-30,117.714,126.0,0.143,0.0\r\nIRL,2020-08-31,115.857,140.0,0.143,0.0\r\nIRL,2020-09-01,113.0,41.0,0.143,0.0\r\nIRL,2020-09-02,99.286,51.0,0.143,0.0\r\nIRL,2020-09-03,117.714,214.0,0.0,0.0\r\nIRL,2020-09-04,107.286,89.0,0.0,0.0\r\nIRL,2020-09-05,107.571,92.0,0.143,1.0\r\nIRL,2020-09-06,103.429,97.0,0.143,0.0\r\nIRL,2020-09-07,116.429,231.0,0.143,0.0\r\nIRL,2020-09-08,130.286,138.0,0.429,2.0\r\nIRL,2020-09-09,137.571,102.0,0.571,1.0\r\nIRL,2020-09-10,150.714,306.0,0.714,1.0\r\nIRL,2020-09-11,150.0,84.0,0.857,1.0\r\nIRL,2020-09-12,164.857,196.0,0.714,0.0\r\nIRL,2020-09-13,181.143,211.0,1.143,3.0\r\nIRL,2020-09-14,170.857,159.0,1.429,2.0\r\nIRL,2020-09-15,187.571,255.0,1.286,1.0\r\nIRL,2020-09-16,202.571,207.0,1.429,2.0\r\nIRL,2020-09-17,209.857,357.0,1.714,3.0\r\nIRL,2020-09-18,233.571,250.0,1.857,2.0\r\nIRL,2020-09-19,237.571,224.0,2.286,3.0\r\nIRL,2020-09-20,242.857,248.0,2.0,1.0\r\nIRL,2020-09-21,258.286,267.0,1.714,0.0\r\nIRL,2020-09-22,278.286,395.0,1.571,0.0\r\nIRL,2020-09-23,275.571,188.0,1.286,0.0\r\nIRL,2020-09-24,270.714,323.0,1.143,2.0\r\nIRL,2020-09-25,268.0,231.0,1.429,4.0\r\nIRL,2020-09-26,281.571,319.0,1.0,0.0\r\nIRL,2020-09-27,292.0,321.0,1.143,2.0\r\nIRL,2020-09-28,288.857,245.0,1.429,2.0\r\nIRL,2020-09-29,293.857,430.0,1.714,2.0\r\nIRL,2020-09-30,322.286,387.0,1.714,0.0\r\nIRL,2020-10-01,328.0,363.0,1.429,0.0\r\nIRL,2020-10-02,354.286,415.0,1.143,2.0\r\nIRL,2020-10-03,371.857,442.0,1.429,2.0\r\nIRL,2020-10-04,392.571,466.0,1.714,4.0\r\nIRL,2020-10-05,444.0,605.0,1.571,1.0\r\nIRL,2020-10-06,434.571,364.0,1.571,2.0\r\nIRL,2020-10-07,453.143,517.0,2.0,3.0\r\nIRL,2020-10-08,461.857,424.0,2.286,2.0\r\nIRL,2020-10-09,489.857,611.0,2.143,1.0\r\nIRL,2020-10-10,498.429,502.0,2.0,1.0\r\nIRL,2020-10-11,520.0,617.0,2.0,4.0\r\nIRL,2020-10-12,578.0,1011.0,2.571,5.0\r\nIRL,2020-10-13,642.714,817.0,3.0,5.0\r\nIRL,2020-10-14,686.0,820.0,2.857,2.0\r\nIRL,2020-10-15,740.857,808.0,3.286,5.0\r\nIRL,2020-10-16,808.429,1084.0,3.714,4.0\r\nIRL,2020-10-17,906.143,1186.0,3.857,2.0\r\nIRL,2020-10-18,960.571,998.0,4.0,5.0\r\nIRL,2020-10-19,994.857,1251.0,4.429,8.0\r\nIRL,2020-10-20,1061.571,1284.0,4.143,3.0\r\nIRL,2020-10-21,1091.714,1031.0,4.429,4.0\r\nIRL,2020-10-22,1156.714,1263.0,4.429,5.0\r\nIRL,2020-10-23,1168.429,1166.0,4.286,3.0\r\nIRL,2020-10-24,1151.286,1066.0,4.714,5.0\r\nIRL,2020-10-25,1273.143,1851.0,5.0,7.0\r\nIRL,2020-10-26,1215.429,847.0,4.571,5.0\r\nIRL,2020-10-27,1177.714,1020.0,5.143,7.0\r\nIRL,2020-10-28,1164.571,939.0,5.286,5.0\r\nIRL,2020-10-29,1084.143,700.0,5.571,7.0\r\nIRL,2020-10-30,1012.857,667.0,5.714,4.0\r\nIRL,2020-10-31,983.857,863.0,6.143,8.0\r\nIRL,2020-11-01,828.286,762.0,6.0,6.0\r\nIRL,2020-11-02,764.0,397.0,6.0,5.0\r\nIRL,2020-11-03,696.286,546.0,5.571,4.0\r\nIRL,2020-11-04,669.0,748.0,5.429,4.0\r\nIRL,2020-11-05,611.571,298.0,5.429,7.0\r\nIRL,2020-11-06,578.429,435.0,5.714,6.0\r\nIRL,2020-11-07,535.571,563.0,5.0,3.0\r\nIRL,2020-11-08,497.0,492.0,5.429,9.0\r\nIRL,2020-11-09,485.571,317.0,5.571,6.0\r\nIRL,2020-11-10,484.571,539.0,6.429,10.0\r\nIRL,2020-11-11,415.571,265.0,7.143,9.0\r\nIRL,2020-11-12,405.857,230.0,6.429,2.0\r\nIRL,2020-11-13,394.857,358.0,6.286,5.0\r\nIRL,2020-11-14,369.429,385.0,6.714,6.0\r\nIRL,2020-11-15,365.857,467.0,5.571,1.0\r\nIRL,2020-11-16,381.571,427.0,5.857,8.0\r\nIRL,2020-11-17,358.429,377.0,5.286,6.0\r\nIRL,2020-11-18,385.286,453.0,5.571,11.0\r\nIRL,2020-11-19,399.571,330.0,7.143,13.0\r\nIRL,2020-11-20,401.571,372.0,7.286,6.0\r\nIRL,2020-11-21,405.857,415.0,6.857,3.0\r\nIRL,2020-11-22,386.143,329.0,7.714,7.0\r\nIRL,2020-11-23,373.857,341.0,7.429,6.0\r\nIRL,2020-11-24,365.429,318.0,7.429,6.0\r\nIRL,2020-11-25,336.429,250.0,6.429,4.0\r\nIRL,2020-11-26,320.571,219.0,5.714,8.0\r\nIRL,2020-11-27,304.143,257.0,5.286,3.0\r\nIRL,2020-11-28,288.714,307.0,6.0,8.0\r\nIRL,2020-11-29,271.0,205.0,5.143,1.0\r\nIRL,2020-11-30,257.0,243.0,6.286,14.0\r\nIRL,2020-12-01,254.286,299.0,6.286,6.0\r\nIRL,2020-12-02,261.857,303.0,6.286,4.0\r\nIRL,2020-12-03,266.857,254.0,6.286,8.0\r\nIRL,2020-12-04,268.429,268.0,6.143,2.0\r\nIRL,2020-12-05,247.714,162.0,6.143,8.0\r\nIRL,2020-12-06,256.0,263.0,6.714,5.0\r\nIRL,2020-12-07,286.571,457.0,5.714,7.0\r\nIRL,2020-12-08,286.429,298.0,5.143,2.0\r\nIRL,2020-12-09,274.857,222.0,5.143,4.0\r\nIRL,2020-12-10,269.143,214.0,5.143,8.0\r\nIRL,2020-12-11,262.0,218.0,5.857,7.0\r\nIRL,2020-12-12,282.143,303.0,5.286,4.0\r\nIRL,2020-12-13,288.0,304.0,5.0,3.0\r\nIRL,2020-12-14,258.286,249.0,4.857,6.0\r\nIRL,2020-12-15,277.0,429.0,5.286,5.0\r\nIRL,2020-12-16,283.0,264.0,4.714,0.0\r\nIRL,2020-12-17,299.143,327.0,4.143,4.0\r\nIRL,2020-12-18,328.143,421.0,3.571,3.0\r\nIRL,2020-12-19,353.571,481.0,3.714,5.0\r\nIRL,2020-12-20,392.429,576.0,4.429,8.0\r\nIRL,2020-12-21,431.429,522.0,4.571,7.0\r\nIRL,2020-12-22,479.571,766.0,4.571,5.0\r\nIRL,2020-12-23,545.429,725.0,5.143,4.0\r\nIRL,2020-12-24,636.0,961.0,5.143,4.0\r\nIRL,2020-12-25,708.286,927.0,6.143,10.0\r\nIRL,2020-12-26,770.714,918.0,7.571,15.0\r\nIRL,2020-12-27,834.857,1025.0,6.857,3.0\r\nIRL,2020-12-28,945.429,1296.0,6.857,7.0\r\nIRL,2020-12-29,941.0,735.0,7.143,7.0\r\nIRL,2020-12-30,946.714,765.0,7.857,9.0\r\nIRL,2020-12-31,1030.143,1545.0,8.857,11.0\r\nIRL,2021-01-01,1143.429,1720.0,8.286,6.0\r\nIRL,2021-01-02,1243.714,1620.0,7.0,6.0\r\nIRL,2021-01-03,1347.714,1753.0,9.143,18.0\r\nIRL,2021-01-04,1647.429,3394.0,9.286,8.0\r\nIRL,2021-01-05,2251.143,4961.0,9.429,8.0\r\nIRL,2021-01-06,3014.714,6110.0,10.714,18.0\r\nIRL,2021-01-07,3554.714,5325.0,11.857,19.0\r\nIRL,2021-01-08,4427.857,7832.0,13.0,14.0\r\nIRL,2021-01-09,5125.429,6503.0,14.857,19.0\r\nIRL,2021-01-10,6050.286,8227.0,15.0,19.0\r\nIRL,2021-01-11,6257.286,4843.0,17.286,24.0\r\nIRL,2021-01-12,6532.286,6886.0,20.714,32.0\r\nIRL,2021-01-13,6363.143,4926.0,24.429,44.0\r\nIRL,2021-01-14,6038.429,3052.0,26.571,34.0\r\nIRL,2021-01-15,5427.143,3553.0,32.429,55.0\r\nIRL,2021-01-16,5057.143,3913.0,37.714,56.0\r\nIRL,2021-01-17,4380.571,3491.0,41.429,45.0\r\nIRL,2021-01-18,4150.429,3232.0,45.714,54.0\r\nIRL,2021-01-19,3587.571,2946.0,49.857,61.0\r\nIRL,2021-01-20,3186.286,2117.0,50.286,47.0\r\nIRL,2021-01-21,3035.429,1996.0,55.0,67.0\r\nIRL,2021-01-22,2882.857,2485.0,55.571,59.0\r\nIRL,2021-01-23,2695.0,2598.0,55.714,57.0\r\nIRL,2021-01-24,2533.0,2357.0,59.571,72.0\r\nIRL,2021-01-25,2343.429,1905.0,60.571,61.0\r\nIRL,2021-01-26,2118.286,1370.0,59.0,50.0\r\nIRL,2021-01-27,2011.429,1369.0,62.571,72.0\r\nIRL,2021-01-28,1858.857,928.0,60.714,54.0\r\nIRL,2021-01-29,1694.0,1331.0,63.0,75.0\r\nIRL,2021-01-30,1531.857,1463.0,65.429,74.0\r\nIRL,2021-01-31,1373.286,1247.0,64.571,66.0\r\nIRL,2021-02-01,1302.714,1411.0,62.857,49.0\r\nIRL,2021-02-02,1284.714,1244.0,63.429,54.0\r\nIRL,2021-02-03,1232.857,1006.0,61.286,57.0\r\nIRL,2021-02-04,1224.714,871.0,64.571,77.0\r\nIRL,2021-02-05,1178.286,1006.0,62.286,59.0\r\nIRL,2021-02-06,1157.0,1314.0,59.143,52.0\r\nIRL,2021-02-07,1124.429,1019.0,55.429,40.0\r\nIRL,2021-02-08,1035.0,785.0,52.571,29.0\r\nIRL,2021-02-09,1003.0,1020.0,51.286,45.0\r\nIRL,2021-02-10,977.714,829.0,48.429,37.0\r\nIRL,2021-02-11,930.857,543.0,45.571,57.0\r\nIRL,2021-02-12,929.857,999.0,43.714,46.0\r\nIRL,2021-02-13,865.286,862.0,40.429,29.0\r\nIRL,2021-02-14,851.0,919.0,40.143,38.0\r\nIRL,2021-02-15,892.571,1076.0,39.714,26.0\r\nIRL,2021-02-16,859.143,786.0,37.143,27.0\r\nIRL,2021-02-17,857.857,820.0,36.0,29.0\r\nIRL,2021-02-18,881.857,711.0,32.286,31.0\r\nIRL,2021-02-19,830.286,638.0,29.0,23.0\r\nIRL,2021-02-20,835.143,896.0,29.714,34.0\r\nIRL,2021-02-21,811.429,753.0,27.143,20.0\r\nIRL,2021-02-22,797.429,978.0,27.571,29.0\r\nIRL,2021-02-23,782.143,679.0,26.143,17.0\r\nIRL,2021-02-24,763.0,686.0,24.571,18.0\r\nIRL,2021-02-25,741.0,557.0,23.0,20.0\r\nIRL,2021-02-26,731.286,570.0,23.429,26.0\r\nIRL,2021-02-27,690.143,608.0,22.571,28.0\r\nIRL,2021-02-28,693.0,773.0,21.429,12.0\r\nIRL,2021-03-01,657.429,729.0,19.571,16.0\r\nIRL,2021-03-02,699.286,972.0,19.714,18.0\r\nIRL,2021-03-03,647.143,321.0,18.714,11.0\r\nIRL,2021-03-04,618.571,357.0,17.857,14.0\r\nIRL,2021-03-05,617.0,559.0,16.143,14.0\r\nIRL,2021-03-06,595.857,460.0,13.429,9.0\r\nIRL,2021-03-07,559.714,520.0,13.714,14.0\r\nIRL,2021-03-08,531.286,530.0,12.429,7.0\r\nIRL,2021-03-09,466.714,520.0,11.571,12.0\r\nIRL,2021-03-10,482.571,432.0,11.0,7.0\r\nIRL,2021-03-11,475.286,306.0,11.143,15.0\r\nIRL,2021-03-12,485.571,631.0,10.857,12.0\r\nIRL,2021-03-13,504.286,591.0,10.286,5.0\r\nIRL,2021-03-14,521.571,641.0,8.857,4.0\r\nIRL,2021-03-15,522.714,538.0,9.0,8.0\r\nIRL,2021-03-16,503.143,383.0,8.857,11.0\r\nIRL,2021-03-17,523.571,575.0,9.0,8.0\r\nIRL,2021-03-18,529.429,347.0,8.0,8.0\r\nIRL,2021-03-19,518.143,552.0,7.857,11.0\r\nIRL,2021-03-20,516.714,581.0,8.429,9.0\r\nIRL,2021-03-21,498.0,510.0,8.571,5.0\r\nIRL,2021-03-22,496.143,525.0,8.143,5.0\r\nIRL,2021-03-23,551.143,768.0,8.143,11.0\r\nIRL,2021-03-24,543.286,520.0,7.429,3.0\r\nIRL,2021-03-25,545.857,365.0,6.429,1.0\r\nIRL,2021-03-26,564.143,680.0,5.857,7.0\r\nIRL,2021-03-27,566.0,594.0,5.429,6.0\r\nIRL,2021-03-28,574.429,569.0,6.143,10.0\r\nIRL,2021-03-29,586.571,610.0,6.714,9.0\r\nIRL,2021-03-30,563.143,604.0,6.0,6.0\r\nIRL,2021-03-31,565.571,537.0,6.286,5.0\r\nIRL,2021-04-01,565.714,366.0,6.857,5.0\r\nIRL,2021-04-02,527.143,410.0,6.857,7.0\r\nIRL,2021-04-03,548.857,746.0,7.429,10.0\r\nIRL,2021-04-04,551.429,587.0,6.857,6.0\r\nIRL,2021-04-05,536.857,508.0,6.286,5.0\r\nIRL,2021-04-06,515.286,453.0,6.286,6.0\r\nIRL,2021-04-07,484.0,318.0,6.0,3.0\r\nIRL,2021-04-08,494.714,441.0,6.0,5.0\r\nIRL,2021-04-09,495.857,418.0,5.429,3.0\r\nIRL,2021-04-10,446.143,398.0,4.714,5.0\r\nIRL,2021-04-11,429.286,469.0,4.571,5.0\r\nIRL,2021-04-12,421.143,451.0,4.286,3.0\r\nIRL,2021-04-13,399.571,302.0,3.714,2.0\r\nIRL,2021-04-14,409.143,385.0,4.143,6.0\r\nIRL,2021-04-15,396.714,354.0,4.0,4.0\r\nIRL,2021-04-16,397.143,421.0,4.143,4.0\r\nIRL,2021-04-17,382.714,297.0,4.143,5.0\r\nIRL,2021-04-18,375.286,417.0,3.857,3.0\r\nIRL,2021-04-19,370.714,419.0,3.714,2.0\r\nIRL,2021-04-20,366.143,270.0,4.286,6.0\r\nIRL,2021-04-21,368.714,403.0,3.429,0.0\r\nIRL,2021-04-22,373.286,386.0,3.143,2.0\r\nIRL,2021-04-23,370.0,398.0,3.286,5.0\r\nIRL,2021-04-24,415.429,615.0,2.857,2.0\r\nIRL,2021-04-25,417.714,433.0,2.857,3.0\r\nIRL,2021-04-26,423.714,461.0,2.857,2.0\r\nIRL,2021-04-27,446.429,429.0,2.286,2.0\r\nIRL,2021-04-28,451.143,436.0,2.857,4.0\r\nIRL,2021-04-29,456.0,420.0,3.0,3.0\r\nIRL,2021-04-30,451.714,368.0,2.571,2.0\r\nIRL,2021-05-01,430.857,469.0,2.571,2.0\r\nIRL,2021-05-02,446.714,544.0,2.286,1.0\r\nIRL,2021-05-03,461.857,567.0,2.429,3.0\r\nIRL,2021-05-04,457.857,401.0,2.429,2.0\r\nIRL,2021-05-05,460.143,452.0,2.0,1.0\r\nIRL,2021-05-06,454.714,382.0,1.714,1.0\r\nIRL,2021-05-07,461.429,415.0,1.714,2.0\r\nIRL,2021-05-08,449.714,387.0,1.571,1.0\r\nIRL,2021-05-09,433.429,430.0,1.714,2.0\r\nIRL,2021-05-10,409.429,399.0,1.714,3.0\r\nIRL,2021-05-11,424.429,506.0,1.857,3.0\r\nIRL,2021-05-12,414.143,380.0,1.857,1.0\r\nIRL,2021-05-13,413.571,378.0,1.857,1.0\r\nIRL,2021-05-14,418.0,446.0,1.571,0.0\r\nIRL,2021-05-15,425.143,437.0,1.429,0.0\r\nIRL,2021-05-16,423.714,420.0,1.286,1.0\r\nIRL,2021-05-17,432.571,461.0,1.0,1.0\r\nIRL,2021-05-18,413.857,375.0,0.857,2.0\r\nIRL,2021-05-19,413.714,379.0,0.714,0.0\r\nIRL,2021-05-20,411.857,365.0,1.0,3.0\r\nIRL,2021-05-21,423.286,526.0,1.286,2.0\r\nIRL,2021-05-22,428.0,470.0,1.286,0.0\r\nIRL,2021-05-23,444.143,533.0,1.571,3.0\r\nIRL,2021-05-24,433.143,384.0,1.714,2.0\r\nIRL,2021-05-25,443.429,447.0,1.571,1.0\r\nIRL,2021-05-26,439.143,349.0,2.143,4.0\r\nIRL,2021-05-27,437.429,353.0,1.857,1.0\r\nIRL,2021-05-28,425.857,445.0,1.571,0.0\r\nIRL,2021-05-29,420.429,432.0,1.571,0.0\r\nIRL,2021-05-30,410.143,461.0,1.429,2.0\r\nIRL,2021-05-31,420.429,456.0,1.429,2.0\r\nIRL,2021-06-01,409.0,367.0,1.571,2.0\r\nIRL,2021-06-02,412.0,370.0,1.143,1.0\r\nIRL,2021-06-03,409.714,337.0,1.143,1.0\r\nIRL,2021-06-04,404.286,407.0,1.286,1.0\r\nIRL,2021-06-05,409.0,465.0,1.286,0.0\r\nIRL,2021-06-06,417.0,517.0,1.286,2.0\r\nIRL,2021-06-07,406.714,384.0,1.0,0.0\r\nIRL,2021-06-08,399.0,313.0,0.857,1.0\r\nIRL,2021-06-09,400.0,377.0,0.714,0.0\r\nIRL,2021-06-10,390.571,271.0,0.571,0.0\r\nIRL,2021-06-11,364.857,227.0,0.429,0.0\r\nIRL,2021-06-12,355.286,398.0,0.429,0.0\r\nIRL,2021-06-13,327.0,319.0,0.143,0.0\r\nIRL,2021-06-14,333.714,431.0,0.429,2.0\r\nIRL,2021-06-15,334.0,315.0,0.286,0.0\r\nIRL,2021-06-16,309.0,202.0,0.286,0.0\r\nIRL,2021-06-17,310.714,283.0,0.429,1.0\r\nIRL,2021-06-18,319.286,287.0,0.714,2.0\r\nIRL,2021-06-19,315.714,373.0,0.857,1.0\r\nIRL,2021-06-20,313.286,302.0,1.286,3.0\r\nIRL,2021-06-21,307.857,393.0,1.0,0.0\r\nIRL,2021-06-22,319.0,393.0,1.143,1.0\r\nIRL,2021-06-23,330.714,284.0,1.286,1.0\r\nIRL,2021-06-24,315.143,174.0,1.286,1.0\r\nIRL,2021-06-25,316.714,298.0,1.0,0.0\r\nIRL,2021-06-26,306.857,304.0,0.857,0.0\r\nIRL,2021-06-27,318.0,380.0,0.429,0.0\r\nIRL,2021-06-28,325.143,443.0,0.857,3.0\r\nIRL,2021-06-29,317.571,340.0,0.714,0.0\r\nIRL,2021-06-30,324.0,329.0,0.714,1.0\r\nIRL,2021-07-01,348.0,342.0,0.571,0.0\r\nIRL,2021-07-02,363.286,405.0,0.571,0.0\r\nIRL,2021-07-03,383.857,448.0,0.857,2.0\r\nIRL,2021-07-04,402.714,512.0,0.857,0.0\r\nIRL,2021-07-05,403.429,448.0,0.571,1.0\r\nIRL,2021-07-06,435.143,562.0,0.714,1.0\r\nIRL,2021-07-07,436.0,335.0,0.571,0.0\r\nIRL,2021-07-08,443.857,397.0,0.571,0.0\r\nIRL,2021-07-09,462.143,533.0,0.571,0.0\r\nIRL,2021-07-10,474.286,533.0,0.286,0.0\r\nIRL,2021-07-11,491.286,631.0,0.286,0.0\r\nIRL,2021-07-12,510.286,581.0,0.143,0.0\r\nIRL,2021-07-13,512.286,576.0,0.143,1.0\r\nIRL,2021-07-14,546.143,572.0,0.143,0.0\r\nIRL,2021-07-15,573.571,589.0,0.143,0.0\r\nIRL,2021-07-16,602.714,737.0,0.286,1.0\r\nIRL,2021-07-17,668.571,994.0,0.571,2.0\r\nIRL,2021-07-18,745.571,1170.0,0.571,0.0\r\nIRL,2021-07-19,859.286,1377.0,0.857,2.0\r\nIRL,2021-07-20,945.429,1179.0,0.857,1.0\r\nIRL,2021-07-21,1016.714,1071.0,0.857,0.0\r\nIRL,2021-07-22,1091.143,1110.0,0.857,0.0\r\nIRL,2021-07-23,1165.857,1260.0,0.714,0.0\r\nIRL,2021-07-24,1193.571,1188.0,0.571,1.0\r\nIRL,2021-07-25,1224.429,1386.0,0.714,1.0\r\nIRL,2021-07-26,1219.857,1345.0,0.857,3.0\r\nIRL,2021-07-27,1212.286,1126.0,0.714,0.0\r\nIRL,2021-07-28,1241.571,1276.0,1.0,2.0\r\nIRL,2021-07-29,1242.143,1114.0,1.429,3.0\r\nIRL,2021-07-30,1248.0,1301.0,1.429,0.0\r\nIRL,2021-07-31,1272.714,1361.0,1.429,1.0\r\nIRL,2021-08-01,1289.143,1501.0,1.286,0.0\r\nIRL,2021-08-02,1300.857,1427.0,1.143,2.0\r\nIRL,2021-08-03,1296.857,1098.0,1.143,0.0\r\nIRL,2021-08-04,1307.714,1352.0,1.429,4.0\r\nIRL,2021-08-05,1274.857,884.0,1.0,0.0\r\nIRL,2021-08-06,1262.857,1217.0,1.143,1.0\r\nIRL,2021-08-07,1281.571,1492.0,1.143,1.0\r\nIRL,2021-08-08,1321.571,1781.0,1.429,2.0\r\nIRL,2021-08-09,1378.857,1828.0,1.571,3.0\r\nIRL,2021-08-10,1484.429,1837.0,1.857,2.0\r\nIRL,2021-08-11,1492.857,1411.0,1.714,3.0\r\nIRL,2021-08-12,1582.143,1509.0,1.857,1.0\r\nIRL,2021-08-13,1668.143,1819.0,2.143,3.0\r\nIRL,2021-08-14,1702.571,1733.0,2.286,2.0\r\nIRL,2021-08-15,1730.714,1978.0,2.286,2.0\r\nIRL,2021-08-16,1765.857,2074.0,2.286,3.0\r\nIRL,2021-08-17,1754.571,1758.0,2.429,3.0\r\nIRL,2021-08-18,1758.857,1441.0,2.571,4.0\r\nIRL,2021-08-19,1757.0,1496.0,2.714,2.0\r\nIRL,2021-08-20,1740.571,1704.0,2.571,2.0\r\nIRL,2021-08-21,1752.714,1818.0,2.429,1.0\r\nIRL,2021-08-22,1769.857,2098.0,2.143,0.0\r\nIRL,2021-08-23,1777.143,2125.0,2.429,5.0\r\nIRL,2021-08-24,1767.143,1688.0,2.714,5.0\r\nIRL,2021-08-25,1788.429,1590.0,2.286,1.0\r\nIRL,2021-08-26,1799.143,1571.0,2.571,4.0\r\nIRL,2021-08-27,1848.714,2051.0,2.857,4.0\r\nIRL,2021-08-28,1855.571,1866.0,3.429,5.0\r\nIRL,2021-08-29,1823.714,1875.0,3.857,3.0\r\nIRL,2021-08-30,1805.429,1997.0,4.286,8.0\r\nIRL,2021-08-31,1808.0,1706.0,4.143,4.0\r\nIRL,2021-09-01,1765.429,1292.0,4.857,6.0\r\nIRL,2021-09-02,1738.429,1382.0,5.286,7.0\r\nIRL,2021-09-03,1701.0,1789.0,5.143,3.0\r\nIRL,2021-09-04,1684.571,1751.0,5.286,6.0\r\nIRL,2021-09-05,1617.714,1407.0,6.286,10.0\r\nIRL,2021-09-06,1575.714,1703.0,6.0,6.0\r\nIRL,2021-09-07,1500.571,1180.0,6.714,9.0\r\nIRL,2021-09-08,1478.286,1136.0,7.0,8.0\r\nIRL,2021-09-09,1490.143,1465.0,6.857,6.0\r\nIRL,2021-09-10,1454.143,1537.0,7.571,8.0\r\nIRL,2021-09-11,1385.571,1271.0,7.286,4.0\r\nIRL,2021-09-12,1415.857,1619.0,6.429,4.0\r\nIRL,2021-09-13,1382.0,1466.0,6.429,6.0\r\nIRL,2021-09-14,1405.714,1346.0,5.857,5.0\r\nIRL,2021-09-15,1368.714,877.0,5.857,8.0\r\nIRL,2021-09-16,1327.429,1176.0,6.143,8.0\r\nIRL,2021-09-17,1276.571,1181.0,5.857,6.0\r\nIRL,2021-09-18,1296.143,1408.0,6.143,6.0\r\nIRL,2021-09-19,1262.857,1386.0,6.571,7.0\r\nIRL,2021-09-20,1261.429,1456.0,6.571,6.0\r\nIRL,2021-09-21,1244.0,1224.0,6.714,6.0\r\nIRL,2021-09-22,1283.0,1150.0,6.0,3.0\r\nIRL,2021-09-23,1317.857,1420.0,5.143,2.0\r\nIRL,2021-09-24,1353.286,1429.0,5.143,6.0\r\nIRL,2021-09-25,1345.571,1354.0,5.429,8.0\r\nIRL,2021-09-26,1313.714,1163.0,5.286,6.0\r\nIRL,2021-09-27,1296.429,1335.0,5.571,8.0\r\nIRL,2021-09-28,1330.0,1459.0,6.143,10.0\r\nIRL,2021-09-29,1314.857,1044.0,6.143,3.0\r\nIRL,2021-09-30,1325.857,1497.0,6.143,2.0\r\nIRL,2021-10-01,1328.429,1447.0,6.286,7.0\r\nIRL,2021-10-02,1316.0,1267.0,6.286,8.0\r\nIRL,2021-10-03,1300.857,1057.0,7.0,11.0\r\nIRL,2021-10-04,1336.714,1586.0,7.143,9.0\r\nIRL,2021-10-05,1278.429,1051.0,6.857,8.0\r\nIRL,2021-10-06,1256.857,893.0,7.714,9.0\r\nIRL,2021-10-07,1203.571,1124.0,7.857,3.0\r\nIRL,2021-10-08,1137.143,982.0,7.286,3.0\r\nIRL,2021-10-09,1128.429,1206.0,7.571,10.0\r\nIRL,2021-10-10,1263.429,2002.0,6.857,6.0\r\nIRL,2021-10-11,1314.0,1940.0,6.714,8.0\r\nIRL,2021-10-12,1361.571,1384.0,5.857,2.0\r\nIRL,2021-10-13,1427.857,1357.0,5.429,6.0\r\nIRL,2021-10-14,1475.286,1456.0,6.286,9.0\r\nIRL,2021-10-15,1628.0,2051.0,7.714,13.0\r\nIRL,2021-10-16,1688.0,1626.0,6.714,3.0\r\nIRL,2021-10-17,1674.429,1907.0,6.857,7.0\r\nIRL,2021-10-18,1708.714,2180.0,7.429,12.0\r\nIRL,2021-10-19,1708.143,1380.0,8.286,8.0\r\nIRL,2021-10-20,1739.429,1576.0,8.429,7.0\r\nIRL,2021-10-21,1873.857,2397.0,8.571,10.0\r\nIRL,2021-10-22,1887.571,2147.0,7.714,7.0\r\nIRL,2021-10-23,1944.714,2026.0,8.429,8.0\r\nIRL,2021-10-24,2024.429,2465.0,9.0,11.0\r\nIRL,2021-10-25,2059.714,2427.0,8.143,6.0\r\nIRL,2021-10-26,2109.0,1725.0,7.857,6.0\r\nIRL,2021-10-27,2147.429,1845.0,7.571,5.0\r\nIRL,2021-10-28,2116.429,2180.0,6.857,5.0\r\nIRL,2021-10-29,2041.714,1624.0,7.429,11.0\r\nIRL,2021-10-30,2123.429,2598.0,7.857,11.0\r\nIRL,2021-10-31,2134.286,2541.0,7.857,11.0\r\nIRL,2021-11-01,2211.286,2966.0,8.0,7.0\r\nIRL,2021-11-02,2245.286,1963.0,8.857,12.0\r\nIRL,2021-11-03,2389.571,2855.0,9.143,7.0\r\nIRL,2021-11-04,2610.0,3723.0,11.0,18.0\r\nIRL,2021-11-05,2831.429,3174.0,11.0,11.0\r\nIRL,2021-11-06,2892.286,3024.0,11.143,12.0\r\nIRL,2021-11-07,3086.857,3903.0,10.857,9.0\r\nIRL,2021-11-08,3189.571,3685.0,11.571,12.0\r\nIRL,2021-11-09,3398.857,3428.0,10.571,5.0\r\nIRL,2021-11-10,3442.571,3161.0,10.429,6.0\r\nIRL,2021-11-11,3672.286,5331.0,8.714,6.0\r\nIRL,2021-11-12,3642.857,2968.0,7.714,4.0\r\nIRL,2021-11-13,3736.143,3677.0,7.143,8.0\r\nIRL,2021-11-14,3961.143,5478.0,7.0,8.0\r\nIRL,2021-11-15,4097.857,4642.0,7.0,12.0\r\nIRL,2021-11-16,4151.714,3805.0,6.857,4.0\r\nIRL,2021-11-17,4352.286,4565.0,7.429,10.0\r\nIRL,2021-11-18,4219.286,4400.0,7.286,5.0\r\nIRL,2021-11-19,4314.143,3632.0,8.0,9.0\r\nIRL,2021-11-20,4452.571,4646.0,8.143,9.0\r\nIRL,2021-11-21,4117.571,3133.0,7.286,2.0\r\nIRL,2021-11-22,4305.714,5959.0,7.286,12.0\r\nIRL,2021-11-23,4358.857,4177.0,7.143,3.0\r\nIRL,2021-11-24,4511.571,5634.0,7.143,10.0\r\nIRL,2021-11-25,4406.0,3661.0,8.286,13.0\r\nIRL,2021-11-26,4443.0,3891.0,8.571,11.0\r\nIRL,2021-11-27,4459.714,4763.0,8.571,9.0\r\nIRL,2021-11-28,4672.0,4619.0,10.0,12.0\r\nIRL,2021-11-29,4505.143,4791.0,9.0,5.0\r\nIRL,2021-11-30,4442.0,3735.0,10.429,13.0\r\nIRL,2021-12-01,4294.714,4603.0,11.286,16.0\r\nIRL,2021-12-02,4551.429,5458.0,10.286,6.0\r\nIRL,2021-12-03,4537.0,3790.0,10.571,13.0\r\nIRL,2021-12-04,4450.714,4159.0,10.857,11.0\r\nIRL,2021-12-05,4563.429,5408.0,10.0,6.0\r\nIRL,2021-12-06,4682.143,5622.0,11.286,14.0\r\nIRL,2021-12-07,4885.143,5156.0,10.571,8.0\r\nIRL,2021-12-08,4643.429,2911.0,9.571,9.0\r\nIRL,2021-12-09,4658.714,5565.0,9.857,8.0\r\nIRL,2021-12-10,4706.714,4126.0,8.714,5.0\r\nIRL,2021-12-11,4684.429,4003.0,8.0,6.0\r\nIRL,2021-12-12,4497.143,4097.0,8.0,6.0\r\nIRL,2021-12-13,4266.0,4004.0,7.429,10.0\r\nIRL,2021-12-14,4195.429,4662.0,7.857,11.0\r\nIRL,2021-12-15,4449.286,4688.0,8.0,10.0\r\nIRL,2021-12-16,4207.286,3871.0,8.429,11.0\r\nIRL,2021-12-17,4222.143,4230.0,8.714,7.0\r\nIRL,2021-12-18,4241.857,4141.0,9.571,12.0\r\nIRL,2021-12-19,4170.143,3595.0,10.0,9.0\r\nIRL,2021-12-20,4645.714,7333.0,10.0,10.0\r\nIRL,2021-12-21,4711.714,5124.0,9.0,4.0\r\nIRL,2021-12-22,4726.0,4788.0,8.0,3.0\r\nIRL,2021-12-23,4925.714,5269.0,7.429,7.0\r\nIRL,2021-12-24,5222.429,6307.0,8.286,13.0\r\nIRL,2021-12-25,5689.571,7411.0,7.0,3.0\r\nIRL,2021-12-26,6773.429,11182.0,7.429,12.0\r\nIRL,2021-12-27,7692.286,13765.0,7.0,7.0\r\nIRL,2021-12-28,8446.571,10404.0,6.714,2.0\r\nIRL,2021-12-29,8724.714,6735.0,7.571,9.0\r\nIRL,2021-12-30,9258.571,9006.0,7.429,6.0\r\nIRL,2021-12-31,10704.429,16428.0,6.429,6.0\r\nIRL,2022-01-01,12582.0,20554.0,7.714,12.0\r\nIRL,2022-01-02,13857.429,20110.0,7.571,11.0\r\nIRL,2022-01-03,15186.0,23065.0,8.571,14.0\r\nIRL,2022-01-04,16138.429,17071.0,9.286,7.0\r\nIRL,2022-01-05,17602.857,16986.0,8.571,4.0\r\nIRL,2022-01-06,19359.429,21302.0,8.571,6.0\r\nIRL,2022-01-07,19534.857,17656.0,8.571,6.0\r\nIRL,2022-01-08,20001.0,23817.0,8.286,10.0\r\nIRL,2022-01-09,20260.429,21926.0,8.857,15.0\r\nIRL,2022-01-10,20697.143,26122.0,9.286,17.0\r\nIRL,2022-01-11,21313.286,21384.0,10.143,13.0\r\nIRL,2022-01-12,22302.286,23909.0,10.714,8.0\r\nIRL,2022-01-13,22014.857,19290.0,11.571,12.0\r\nIRL,2022-01-14,22479.571,20909.0,13.0,16.0\r\nIRL,2022-01-15,21777.714,18904.0,13.143,11.0\r\nIRL,2022-01-16,21083.286,17065.0,12.857,13.0\r\nIRL,2022-01-17,19430.857,14555.0,12.0,11.0\r\nIRL,2022-01-18,17912.143,10753.0,11.714,11.0\r\nIRL,2022-01-19,15400.714,6329.0,11.714,8.0\r\nIRL,2022-01-20,13468.857,5767.0,11.286,9.0\r\nIRL,2022-01-21,11459.429,6843.0,10.143,8.0\r\nIRL,2022-01-22,9547.857,5523.0,9.429,6.0\r\nIRL,2022-01-23,8052.429,6597.0,8.571,7.0\r\nIRL,2022-01-24,6928.714,6689.0,8.714,12.0\r\nIRL,2022-01-25,6068.429,4731.0,8.857,12.0\r\nIRL,2022-01-26,5691.714,3692.0,9.571,13.0\r\nIRL,2022-01-27,5440.143,4006.0,10.143,13.0\r\nIRL,2022-01-28,5263.286,5605.0,10.143,8.0\r\nIRL,2022-01-29,5226.429,5265.0,11.0,12.0\r\nIRL,2022-01-30,5013.857,5109.0,11.0,7.0\r\nIRL,2022-01-31,4785.571,5091.0,11.571,16.0\r\nIRL,2022-02-01,4738.286,4400.0,12.143,16.0\r\nIRL,2022-02-02,4764.0,3872.0,12.0,12.0\r\nIRL,2022-02-03,4792.857,4208.0,11.429,9.0\r\nIRL,2022-02-04,4840.714,5940.0,11.714,10.0\r\nIRL,2022-02-05,4954.429,6061.0,11.143,8.0\r\nIRL,2022-02-06,5181.286,6697.0,12.714,18.0\r\nIRL,2022-02-07,5348.286,6260.0,11.714,9.0\r\nIRL,2022-02-08,5424.429,4933.0,10.714,9.0\r\nIRL,2022-02-09,5439.143,3975.0,10.286,9.0\r\nIRL,2022-02-10,5378.0,3780.0,10.286,9.0\r\nIRL,2022-02-11,5340.429,5677.0,10.286,10.0\r\nIRL,2022-02-12,5281.571,5649.0,10.429,9.0\r\nIRL,2022-02-13,5270.286,6618.0,8.429,4.0\r\nIRL,2022-02-14,5081.714,4940.0,8.286,8.0\r\nIRL,2022-02-15,4995.714,4331.0,8.143,8.0\r\nIRL,2022-02-16,4927.0,3494.0,7.429,4.0\r\nIRL,2022-02-17,4981.286,4160.0,7.286,8.0\r\nIRL,2022-02-18,4922.286,5264.0,6.857,7.0\r\nIRL,2022-02-19,4833.286,5026.0,6.143,4.0\r\nIRL,2022-02-20,4572.857,4795.0,6.571,7.0\r\nIRL,2022-02-21,4557.143,4830.0,6.857,10.0\r\nIRL,2022-02-22,4417.143,3351.0,6.857,8.0\r\nIRL,2022-02-23,4414.143,3473.0,7.429,8.0\r\nIRL,2022-02-24,4288.429,3280.0,7.143,6.0\r\nIRL,2022-02-25,4125.143,4121.0,7.571,10.0\r\nIRL,2022-02-26,3939.857,3729.0,8.0,7.0\r\nIRL,2022-02-27,3869.714,4304.0,8.429,10.0\r\nIRL,2022-02-28,3693.286,3595.0,7.714,5.0\r\nIRL,2022-03-01,3548.571,2338.0,7.714,8.0\r\nIRL,2022-03-02,3377.714,2277.0,7.143,4.0\r\nIRL,2022-03-03,3380.286,3298.0,7.714,10.0\r\nIRL,2022-03-04,3269.0,3342.0,8.0,12.0\r\nIRL,2022-03-05,3313.857,4043.0,8.0,7.0\r\nIRL,2022-03-06,3269.714,3995.0,7.857,9.0\r\nIRL,2022-03-07,3306.714,3854.0,8.571,10.0\r\nIRL,2022-03-08,3151.857,1254.0,9.0,11.0\r\nIRL,2022-03-09,3167.0,2383.0,9.286,6.0\r\nIRL,2022-03-10,3318.0,4355.0,8.857,7.0\r\nIRL,2022-03-11,3083.143,1698.0,8.429,9.0\r\nIRL,2022-03-12,3085.143,4057.0,8.714,9.0\r\nIRL,2022-03-13,3818.0,9125.0,9.286,13.0\r\nIRL,2022-03-14,3886.286,4332.0,10.0,15.0\r\nIRL,2022-03-15,4489.286,5475.0,10.143,12.0\r\nIRL,2022-03-16,4448.857,2100.0,10.429,8.0\r\nIRL,2022-03-17,4724.143,6282.0,10.429,7.0\r\nIRL,2022-03-18,5260.429,5452.0,10.714,11.0\r\nIRL,2022-03-19,5424.286,5204.0,10.429,7.0\r\nIRL,2022-03-20,4924.714,5628.0,9.714,8.0\r\nIRL,2022-03-21,4989.714,4787.0,9.714,15.0\r\nIRL,2022-03-22,4931.429,5067.0,9.429,10.0\r\nIRL,2022-03-23,5206.286,4024.0,10.286,14.0\r\nIRL,2022-03-24,5410.0,7708.0,11.0,12.0\r\nIRL,2022-03-25,5637.429,7044.0,11.714,16.0\r\nIRL,2022-03-26,6161.0,8869.0,12.143,10.0\r\nIRL,2022-03-27,6663.714,9147.0,12.0,7.0\r\nIRL,2022-03-28,7084.0,7729.0,11.429,11.0\r\nIRL,2022-03-29,7351.571,6940.0,11.286,9.0\r\nIRL,2022-03-30,7528.571,5263.0,11.286,14.0\r\nIRL,2022-03-31,7275.286,5935.0,12.143,18.0\r\nIRL,2022-04-01,7036.143,5370.0,12.0,15.0\r\nIRL,2022-04-02,6518.143,5243.0,11.857,9.0\r\nIRL,2022-04-03,6029.286,5725.0,14.143,23.0\r\nIRL,2022-04-04,5460.429,3747.0,14.0,10.0\r\nIRL,2022-04-05,4799.429,2313.0,14.857,15.0\r\nIRL,2022-04-06,4499.571,3164.0,15.571,19.0\r\nIRL,2022-04-07,4042.857,2738.0,15.286,16.0\r\nIRL,2022-04-08,3855.571,4059.0,14.429,9.0\r\nIRL,2022-04-09,3556.571,3150.0,15.714,18.0\r\nIRL,2022-04-10,3144.857,2843.0,14.571,15.0\r\nIRL,2022-04-11,3001.714,2745.0,15.143,14.0\r\nIRL,2022-04-12,2877.286,1442.0,15.714,19.0\r\nIRL,2022-04-13,2670.286,1715.0,14.857,13.0\r\nIRL,2022-04-14,2528.857,1748.0,14.714,15.0\r\nIRL,2022-04-15,2248.429,2096.0,15.714,16.0\r\nIRL,2022-04-16,2073.286,1924.0,15.0,13.0\r\nIRL,2022-04-17,1920.0,1770.0,15.286,17.0\r\nIRL,2022-04-18,1765.857,1666.0,15.286,14.0\r\nIRL,2022-04-19,1681.571,852.0,14.857,16.0\r\nIRL,2022-04-20,1674.857,1668.0,14.0,7.0\r\nIRL,2022-04-21,1536.286,778.0,13.429,11.0\r\nIRL,2022-04-22,1436.143,1395.0,12.571,10.0\r\nIRL,2022-04-23,1362.714,1410.0,11.714,7.0\r\nIRL,2022-04-24,1276.0,1163.0,11.429,15.0\r\nIRL,2022-04-25,1254.143,1513.0,10.143,5.0\r\nIRL,2022-04-26,1233.143,705.0,10.286,17.0\r\nIRL,2022-04-27,1146.0,1058.0,10.143,6.0\r\nIRL,2022-04-28,1209.571,1223.0,10.429,13.0\r\nIRL,2022-04-29,1148.857,970.0,9.714,5.0\r\nIRL,2022-04-30,1111.429,1148.0,9.714,7.0\r\nIRL,2022-05-01,1082.286,959.0,8.286,5.0\r\nIRL,2022-05-02,969.143,721.0,8.571,7.0\r\nIRL,2022-05-03,895.286,188.0,7.714,11.0\r\nIRL,2022-05-04,856.143,784.0,7.857,7.0\r\nIRL,2022-05-05,751.571,491.0,6.857,6.0\r\nIRL,2022-05-06,760.286,1031.0,7.857,12.0\r\nIRL,2022-05-07,760.143,1147.0,8.143,9.0\r\nIRL,2022-05-08,750.143,889.0,8.143,5.0\r\nIRL,2022-05-09,819.286,1205.0,7.571,3.0\r\nIRL,2022-05-10,867.286,524.0,6.714,5.0\r\nIRL,2022-05-11,821.429,463.0,6.429,5.0\r\nIRL,2022-05-12,1147.429,2773.0,6.143,4.0\r\nIRL,2022-05-13,1328.571,2299.0,5.286,6.0\r\nIRL,2022-05-14,1613.857,3144.0,4.286,2.0\r\nIRL,2022-05-15,1869.714,2680.0,4.0,3.0\r\nIRL,2022-05-16,1825.0,892.0,4.571,7.0\r\nIRL,2022-05-17,1777.0,188.0,4.429,4.0\r\nIRL,2022-05-18,1805.571,663.0,4.286,4.0\r\nIRL,2022-05-19,1467.143,404.0,4.429,5.0\r\nIRL,2022-05-20,1251.857,792.0,4.0,3.0\r\nIRL,2022-05-21,1493.571,4836.0,3.714,0.0\r\nIRL,2022-05-22,1148.286,263.0,3.857,4.0\r\nIRL,2022-05-23,1112.857,644.0,3.143,2.0\r\nIRL,2022-05-24,1152.571,466.0,3.143,4.0\r\nIRL,2022-05-25,1146.714,622.0,3.143,4.0\r\nIRL,2022-05-26,1154.0,455.0,3.0,4.0\r\nIRL,2022-05-27,1143.714,720.0,2.857,2.0\r\nIRL,2022-05-28,556.714,727.0,4.143,9.0\r\nIRL,2022-05-29,591.143,504.0,3.571,0.0\r\nIRL,2022-05-30,628.0,902.0,3.714,3.0\r\nIRL,2022-05-31,611.286,349.0,3.286,1.0\r\nIRL,2022-06-01,577.857,388.0,3.143,3.0\r\nIRL,2022-06-02,634.714,853.0,2.857,2.0\r\nIRL,2022-06-03,619.714,615.0,3.143,4.0\r\nIRL,2022-06-04,559.571,306.0,2.714,6.0\r\nIRL,2022-06-05,638.143,1054.0,2.714,0.0\r\nIRL,2022-06-06,622.143,790.0,2.429,1.0\r\nIRL,2022-06-07,591.571,135.0,2.571,2.0\r\nIRL,2022-06-08,662.429,884.0,2.571,3.0\r\nIRL,2022-06-09,608.429,475.0,2.429,1.0\r\nIRL,2022-06-10,649.857,905.0,2.286,3.0\r\nIRL,2022-06-11,714.429,758.0,1.714,2.0\r\nIRL,2022-06-12,864.714,2106.0,2.143,3.0\r\nIRL,2022-06-13,965.714,1497.0,2.429,3.0\r\nIRL,2022-06-14,977.0,214.0,2.714,4.0\r\nIRL,2022-06-15,977.571,888.0,3.0,5.0\r\nIRL,2022-06-16,987.714,546.0,3.0,1.0\r\nIRL,2022-06-17,1250.143,2742.0,2.714,1.0\r\nIRL,2022-06-18,1324.571,1279.0,3.0,4.0\r\nIRL,2022-06-19,1174.286,1054.0,3.429,6.0\r\nIRL,2022-06-20,1170.571,1471.0,3.857,6.0\r\nIRL,2022-06-21,1361.0,1547.0,3.429,1.0\r\nIRL,2022-06-22,1374.429,982.0,3.286,4.0\r\nIRL,2022-06-23,1517.143,1545.0,4.143,7.0\r\nIRL,2022-06-24,1300.143,1223.0,4.143,1.0\r\nIRL,2022-06-25,1447.0,2307.0,4.571,7.0\r\nIRL,2022-06-26,1658.286,2533.0,4.143,3.0\r\nIRL,2022-06-27,1687.429,1675.0,4.857,11.0\r\nIRL,2022-06-28,1727.857,1830.0,5.857,8.0\r\nIRL,2022-06-29,1774.714,1310.0,6.143,6.0\r\nIRL,2022-06-30,1779.571,1579.0,6.143,7.0\r\nIRL,2022-07-01,1889.857,1995.0,6.286,2.0\r\nIRL,2022-07-02,1878.143,2225.0,5.857,4.0\r\nIRL,2022-07-03,1836.0,2238.0,6.286,6.0\r\nIRL,2022-07-04,1878.714,1974.0,5.0,2.0\r\nIRL,2022-07-05,1776.571,1115.0,4.714,6.0\r\nIRL,2022-07-06,2005.857,2915.0,5.143,9.0\r\nIRL,2022-07-07,2031.0,1755.0,4.714,4.0\r\nIRL,2022-07-08,2002.429,1795.0,4.571,1.0\r\nIRL,2022-07-09,2077.857,2753.0,4.714,5.0\r\nIRL,2022-07-10,2012.857,1783.0,4.286,3.0\r\nIRL,2022-07-11,2277.714,3828.0,5.143,8.0\r\nIRL,2022-07-12,2388.714,1892.0,5.0,5.0\r\nIRL,2022-07-13,2017.143,314.0,4.714,7.0\r\nIRL,2022-07-14,2100.286,2337.0,4.429,2.0\r\nIRL,2022-07-15,2016.286,1207.0,5.0,5.0\r\nIRL,2022-07-16,2030.143,2850.0,5.571,9.0\r\nIRL,2022-07-17,2041.571,1863.0,6.857,12.0\r\nIRL,2022-07-18,1786.143,2040.0,7.429,12.0\r\nIRL,2022-07-19,1658.429,998.0,7.857,8.0\r\nIRL,2022-07-20,1695.286,572.0,8.286,10.0\r\nIRL,2022-07-21,1520.143,1111.0,9.286,9.0\r\nIRL,2022-07-22,1530.571,1280.0,9.857,9.0\r\nIRL,2022-07-23,1251.286,895.0,9.0,3.0\r\nIRL,2022-07-24,1118.857,936.0,8.286,7.0\r\nIRL,2022-07-25,963.286,951.0,7.857,9.0\r\nIRL,2022-07-26,862.429,292.0,7.286,4.0\r\nIRL,2022-07-27,799.857,134.0,6.857,7.0\r\nIRL,2022-07-28,780.571,976.0,6.286,5.0\r\nIRL,2022-07-29,672.429,523.0,5.571,4.0\r\nIRL,2022-07-30,696.429,1063.0,6.0,6.0\r\nIRL,2022-07-31,648.714,602.0,5.429,3.0\r\nIRL,2022-08-01,592.286,556.0,5.571,10.0\r\nIRL,2022-08-02,565.429,104.0,5.857,6.0\r\nIRL,2022-08-03,606.857,424.0,5.571,5.0\r\nIRL,2022-08-04,496.714,205.0,5.286,3.0\r\nIRL,2022-08-05,494.429,507.0,5.714,7.0\r\nIRL,2022-08-06,426.143,585.0,5.571,5.0\r\nIRL,2022-08-07,422.0,573.0,5.429,2.0\r\nIRL,2022-08-08,408.571,462.0,4.857,6.0\r\nIRL,2022-08-09,432.286,270.0,5.286,9.0\r\nIRL,2022-08-10,408.143,255.0,5.286,5.0\r\nIRL,2022-08-11,450.857,504.0,5.286,3.0\r\nIRL,2022-08-12,455.143,537.0,4.857,4.0\r\nIRL,2022-08-13,487.0,808.0,5.143,7.0\r\nIRL,2022-08-14,456.143,357.0,5.714,6.0\r\nIRL,2022-08-15,426.857,257.0,5.714,6.0\r\nIRL,2022-08-16,426.429,267.0,4.571,1.0\r\nIRL,2022-08-17,414.857,174.0,4.286,3.0\r\nIRL,2022-08-18,419.143,534.0,5.143,9.0\r\nIRL,2022-08-19,397.857,388.0,4.857,2.0\r\nIRL,2022-08-20,314.143,222.0,4.143,2.0\r\nIRL,2022-08-21,323.286,421.0,4.0,5.0\r\nIRL,2022-08-22,320.429,237.0,3.143,0.0\r\nIRL,2022-08-23,289.714,52.0,3.571,4.0\r\nIRL,2022-08-24,266.286,10.0,3.571,3.0\r\nIRL,2022-08-25,258.857,482.0,2.857,4.0\r\nIRL,2022-08-26,251.714,338.0,2.714,1.0\r\nIRL,2022-08-27,248.571,200.0,2.714,2.0\r\nIRL,2022-08-28,234.429,322.0,2.429,3.0\r\nIRL,2022-08-29,246.714,323.0,2.714,2.0\r\nIRL,2022-08-30,255.571,114.0,2.714,4.0\r\nIRL,2022-08-31,258.0,27.0,2.714,3.0\r\nIRL,2022-09-01,268.714,557.0,2.571,3.0\r\nIRL,2022-09-02,231.143,75.0,3.143,5.0\r\nIRL,2022-09-03,273.0,493.0,3.143,2.0\r\nIRL,2022-09-04,271.714,313.0,2.857,1.0\r\nIRL,2022-09-05,273.571,336.0,2.857,2.0\r\nIRL,2022-09-06,278.571,149.0,2.857,4.0\r\nIRL,2022-09-07,278.286,25.0,2.571,1.0\r\nIRL,2022-09-08,273.0,520.0,2.286,1.0\r\nIRL,2022-09-09,296.857,242.0,1.714,1.0\r\nIRL,2022-09-10,267.143,285.0,1.714,2.0\r\nIRL,2022-09-11,254.286,223.0,1.857,2.0\r\nIRL,2022-09-12,240.714,241.0,1.857,2.0\r\nIRL,2022-09-13,236.0,116.0,1.714,3.0\r\nIRL,2022-09-14,235.571,22.0,1.714,1.0\r\nIRL,2022-09-15,226.286,455.0,1.857,2.0\r\nIRL,2022-09-16,228.714,259.0,2.0,2.0\r\nIRL,2022-09-17,226.143,267.0,1.857,1.0\r\nIRL,2022-09-18,222.143,195.0,1.714,1.0\r\nIRL,2022-09-19,232.571,314.0,1.714,2.0\r\nIRL,2022-09-20,218.714,19.0,1.286,0.0\r\nIRL,2022-09-21,222.286,47.0,1.286,1.0\r\nIRL,2022-09-22,232.857,529.0,1.429,3.0\r\nIRL,2022-09-23,240.0,309.0,1.571,3.0\r\nIRL,2022-09-24,237.286,248.0,1.857,3.0\r\nIRL,2022-09-25,267.857,409.0,1.857,1.0\r\nIRL,2022-09-26,271.857,342.0,2.0,3.0\r\nIRL,2022-09-27,272.571,24.0,2.857,6.0\r\nIRL,2022-09-28,269.429,25.0,2.857,1.0\r\nIRL,2022-09-29,235.286,290.0,2.571,1.0\r\nIRL,2022-09-30,255.286,449.0,2.429,2.0\r\nIRL,2022-10-01,285.429,459.0,2.857,6.0\r\nIRL,2022-10-02,274.429,332.0,3.286,4.0\r\nIRL,2022-10-03,269.0,304.0,3.571,5.0\r\nIRL,2022-10-04,272.286,47.0,3.571,6.0\r\nIRL,2022-10-05,306.714,266.0,4.0,4.0\r\nIRL,2022-10-06,342.143,538.0,4.286,3.0\r\nIRL,2022-10-07,335.429,402.0,4.714,5.0\r\nIRL,2022-10-08,320.571,355.0,4.143,2.0\r\nIRL,2022-10-09,323.0,349.0,4.143,4.0\r\nIRL,2022-10-10,335.286,390.0,4.143,5.0\r\nIRL,2022-10-11,331.286,19.0,3.857,4.0\r\nIRL,2022-10-12,298.0,33.0,3.571,2.0\r\nIRL,2022-10-13,321.857,705.0,3.571,3.0\r\nIRL,2022-10-14,306.857,297.0,3.429,4.0\r\nIRL,2022-10-15,313.857,404.0,4.143,7.0\r\nIRL,2022-10-16,315.714,362.0,3.714,1.0\r\nIRL,2022-10-17,295.143,246.0,3.714,5.0\r\nIRL,2022-10-18,307.571,106.0,3.714,4.0\r\nIRL,2022-10-19,306.857,28.0,4.286,6.0\r\nIRL,2022-10-20,296.571,633.0,4.571,5.0\r\nIRL,2022-10-21,292.286,267.0,4.571,4.0\r\nIRL,2022-10-22,294.857,422.0,4.143,4.0\r\nIRL,2022-10-23,290.857,334.0,4.571,4.0\r\nIRL,2022-10-24,292.0,254.0,4.714,6.0\r\nIRL,2022-10-25,280.857,28.0,4.429,2.0\r\nIRL,2022-10-26,315.714,272.0,4.286,5.0\r\nIRL,2022-10-27,277.429,365.0,4.714,8.0\r\nIRL,2022-10-28,293.0,376.0,4.571,3.0\r\nIRL,2022-10-29,255.286,158.0,4.571,4.0\r\nIRL,2022-10-30,240.286,229.0,4.571,4.0\r\nIRL,2022-10-31,226.0,154.0,4.286,4.0\r\nIRL,2022-11-01,226.143,29.0,4.429,3.0\r\nIRL,2022-11-02,207.143,139.0,4.857,8.0\r\nIRL,2022-11-03,223.143,477.0,4.143,3.0\r\nIRL,2022-11-04,247.286,545.0,5.0,9.0\r\nIRL,2022-11-05,271.429,327.0,5.0,4.0\r\nIRL,2022-11-06,272.143,234.0,4.571,1.0\r\nIRL,2022-11-07,280.857,215.0,4.857,6.0\r\nIRL,2022-11-08,279.286,18.0,5.143,5.0\r\nIRL,2022-11-09,286.714,191.0,4.571,4.0\r\nIRL,2022-11-10,294.0,528.0,5.0,6.0\r\nIRL,2022-11-11,268.143,364.0,4.429,5.0\r\nIRL,2022-11-12,259.0,263.0,4.429,4.0\r\nIRL,2022-11-13,257.857,226.0,4.714,3.0\r\nIRL,2022-11-14,267.571,283.0,4.429,4.0\r\nIRL,2022-11-15,269.714,33.0,4.286,4.0\r\nIRL,2022-11-16,246.571,29.0,4.0,2.0\r\nIRL,2022-11-17,237.571,465.0,3.429,2.0\r\nIRL,2022-11-18,227.714,295.0,3.429,5.0\r\nIRL,2022-11-19,230.143,280.0,4.0,8.0\r\nIRL,2022-11-20,223.571,180.0,4.714,8.0\r\nIRL,2022-11-21,213.714,214.0,4.857,5.0\r\nIRL,2022-11-22,211.571,18.0,5.286,7.0\r\nIRL,2022-11-23,211.143,26.0,5.429,3.0\r\nIRL,2022-11-24,205.857,428.0,5.429,2.0\r\nIRL,2022-11-25,201.286,263.0,5.143,3.0\r\nIRL,2022-11-26,216.286,385.0,4.571,4.0\r\nIRL,2022-11-27,221.571,217.0,4.0,4.0\r\nIRL,2022-11-28,229.143,267.0,4.0,5.0\r\nIRL,2022-11-29,230.143,25.0,3.0,0.0\r\nIRL,2022-11-30,253.143,187.0,2.857,2.0\r\nIRL,2022-12-01,245.857,377.0,3.429,6.0\r\nIRL,2022-12-02,250.0,292.0,3.714,5.0\r\nIRL,2022-12-03,240.571,319.0,4.429,9.0\r\nIRL,2022-12-04,249.286,278.0,4.571,5.0\r\nIRL,2022-12-05,264.429,373.0,4.571,5.0\r\nIRL,2022-12-06,263.0,15.0,5.143,4.0\r\nIRL,2022-12-07,239.714,24.0,6.0,8.0\r\nIRL,2022-12-08,265.857,560.0,6.0,6.0\r\nIRL,2022-12-09,281.714,403.0,6.429,8.0\r\nIRL,2022-12-10,278.571,297.0,5.286,1.0\r\nIRL,2022-12-11,300.429,431.0,4.571,0.0\r\nIRL,2022-12-12,272.714,179.0,4.714,6.0\r\nIRL,2022-12-13,278.143,53.0,4.571,3.0\r\nIRL,2022-12-14,335.714,427.0,3.714,2.0\r\nIRL,2022-12-15,329.714,518.0,3.429,4.0\r\nIRL,2022-12-16,337.429,457.0,2.857,4.0\r\nIRL,2022-12-17,368.857,517.0,3.0,2.0\r\nIRL,2022-12-18,385.571,548.0,3.857,6.0\r\nIRL,2022-12-19,432.143,505.0,3.714,5.0\r\nIRL,2022-12-20,445.571,147.0,5.0,12.0\r\nIRL,2022-12-21,416.571,224.0,5.286,4.0\r\nIRL,2022-12-22,421.571,553.0,5.714,7.0\r\nIRL,2022-12-23,459.0,719.0,6.143,7.0\r\nIRL,2022-12-24,494.0,762.0,7.0,8.0\r\nIRL,2022-12-25,503.571,615.0,7.143,7.0\r\nIRL,2022-12-26,535.429,728.0,7.429,7.0\r\nIRL,2022-12-27,542.857,199.0,6.857,8.0\r\nIRL,2022-12-28,546.857,252.0,7.429,8.0\r\nIRL,2022-12-29,483.571,110.0,7.143,5.0\r\nIRL,2022-12-30,398.429,123.0,7.143,7.0\r\nIRL,2022-12-31,428.143,970.0,7.714,12.0\r\nIRL,2023-01-01,429.143,622.0,8.143,10.0\r\nIRL,2023-01-02,426.429,709.0,8.571,10.0\r\nIRL,2023-01-03,422.0,168.0,8.429,7.0\r\nIRL,2023-01-04,400.714,103.0,8.429,8.0\r\nIRL,2023-01-05,399.143,99.0,9.0,9.0\r\nIRL,2023-01-06,534.571,1071.0,8.714,5.0\r\nIRL,2023-01-07,479.714,586.0,7.714,5.0\r\nIRL,2023-01-08,522.857,924.0,7.286,7.0\r\nIRL,2023-01-09,503.857,576.0,7.714,13.0\r\nIRL,2023-01-10,496.143,114.0,8.0,9.0\r\nIRL,2023-01-11,505.286,167.0,7.714,6.0\r\nIRL,2023-01-12,561.143,490.0,8.286,13.0\r\nIRL,2023-01-13,457.429,345.0,8.143,4.0\r\nIRL,2023-01-14,422.429,341.0,8.571,8.0\r\nIRL,2023-01-15,320.714,212.0,8.571,7.0\r\nIRL,2023-01-16,271.143,229.0,7.714,7.0\r\nIRL,2023-01-17,262.143,51.0,6.857,3.0\r\nIRL,2023-01-18,242.714,31.0,6.571,4.0\r\nIRL,2023-01-19,224.571,363.0,5.429,5.0\r\nIRL,2023-01-20,190.857,109.0,6.143,9.0\r\nIRL,2023-01-21,174.0,223.0,5.714,5.0\r\nIRL,2023-01-22,160.429,117.0,5.429,5.0\r\nIRL,2023-01-23,148.714,147.0,5.143,5.0\r\nIRL,2023-01-24,145.571,29.0,5.429,5.0\r\nIRL,2023-01-25,143.286,15.0,4.857,0.0\r\nIRL,2023-01-26,129.429,266.0,5.0,6.0\r\nIRL,2023-01-27,129.714,111.0,3.857,1.0\r\nIRL,2023-01-28,126.857,203.0,3.143,0.0\r\nIRL,2023-01-29,128.143,126.0,2.857,3.0\r\nIRL,2023-01-30,123.571,115.0,3.429,9.0\r\nIRL,2023-01-31,120.714,9.0,2.857,1.0\r\nIRL,2023-02-01,118.571,0.0,3.429,4.0\r\nIRL,2023-02-02,80.571,0.0,2.857,2.0\r\nIRL,2023-02-03,104.143,276.0,3.0,2.0\r\nIRL,2023-02-04,105.143,210.0,3.143,1.0\r\nIRL,2023-02-05,107.714,144.0,3.429,5.0\r\nIRL,2023-02-06,105.0,96.0,2.429,2.0\r\nIRL,2023-02-07,105.286,11.0,2.429,1.0\r\nIRL,2023-02-08,106.714,10.0,1.857,0.0\r\nIRL,2023-02-09,114.286,53.0,2.0,3.0\r\nIRL,2023-02-10,107.571,229.0,2.0,2.0\r\nIRL,2023-02-11,99.571,154.0,2.143,2.0\r\nIRL,2023-02-12,95.429,115.0,1.571,1.0\r\nIRL,2023-02-13,100.857,134.0,1.429,1.0\r\nIRL,2023-02-14,100.429,8.0,1.429,1.0\r\nIRL,2023-02-15,101.143,15.0,1.429,0.0\r\nIRL,2023-02-16,129.429,251.0,1.0,0.0\r\nIRL,2023-02-17,107.429,75.0,1.0,2.0\r\nIRL,2023-02-18,110.143,173.0,0.714,0.0\r\nIRL,2023-02-19,113.0,135.0,0.857,2.0\r\nIRL,2023-02-20,110.0,113.0,0.714,0.0\r\nIRL,2023-02-21,111.571,19.0,0.714,1.0\r\nIRL,2023-02-22,109.429,0.0,0.714,0.0\r\nIRL,2023-02-23,103.0,206.0,0.714,0.0\r\nIRL,2023-02-24,106.0,96.0,0.571,1.0\r\nIRL,2023-02-25,98.714,122.0,0.857,2.0\r\nIRL,2023-02-26,92.857,94.0,0.857,2.0\r\nIRL,2023-02-27,92.429,110.0,0.857,0.0\r\nIRL,2023-02-28,90.143,3.0,0.857,1.0\r\nIRL,2023-03-01,91.0,6.0,0.857,0.0\r\nIRL,2023-03-02,86.571,175.0,1.0,1.0\r\nIRL,2023-03-03,88.429,109.0,0.857,0.0\r\nIRL,2023-03-04,87.0,112.0,0.714,1.0\r\nIRL,2023-03-05,83.571,70.0,0.429,0.0\r\nIRL,2023-03-06,77.429,67.0,0.429,0.0\r\nIRL,2023-03-07,77.286,2.0,0.286,0.0\r\nIRL,2023-03-08,76.429,0.0,0.286,0.0\r\nIRL,2023-03-09,93.143,292.0,4.286,29.0\r\nIRL,2023-03-10,87.714,71.0,4.286,0.0\r\nIRL,2023-03-11,99.0,191.0,4.143,0.0\r\nIRL,2023-03-12,107.0,126.0,4.143,0.0\r\nIRL,2023-03-13,120.143,159.0,4.143,0.0\r\nIRL,2023-03-14,121.143,9.0,4.143,0.0\r\nIRL,2023-03-15,121.143,0.0,4.143,0.0\r\nIRL,2023-03-16,113.286,237.0,1.571,11.0\r\nIRL,2023-03-17,,,,\r\nIRL,2023-03-18,,,,\r\nIRL,2023-03-19,,,,\r\nIRL,2023-03-20,,,,\r\nIRL,2023-03-21,,,,\r\nIRL,2023-03-22,,,,\r\nIRL,2023-03-23,,,,\r\n");

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data_date_extent", function() { return data_date_extent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_cases_smoothed", function() { return new_cases_smoothed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_deaths_smoothed", function() { return new_deaths_smoothed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_cases", function() { return new_cases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_deaths", function() { return new_deaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_cases_smoothed_lag_allowance", function() { return new_cases_smoothed_lag_allowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_cases_lag_allowance", function() { return new_cases_lag_allowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cases_deaths_link_smoothed", function() { return cases_deaths_link_smoothed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cases_deaths_link", function() { return cases_deaths_link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lag", function() { return lag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony import */ var raw_loader_public_owid_covid_data_IRL_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
// copying some old stuff; this data integration approach is a bit mental right now: clearly the top 80% of this file should note be in calculang (everything above "metrics").
// much of this can be neatly abstracted into a csv loader for calculang, but that might hide the Qs about performance/approach that I don't mind exposing now.





const data = Object(d3_dsv__WEBPACK_IMPORTED_MODULE_1__[/* csvParse */ "a"])(raw_loader_public_owid_covid_data_IRL_csv__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], d3_dsv__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).map((d) => {
  return {
    date: new Date(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(d.date, 'yyyy-MM-dd')),
    new_cases_smoothed: d.new_cases_smoothed,
    new_deaths_smoothed: d.new_deaths_smoothed,
    new_cases: d.new_cases,
    new_deaths: d.new_deaths };

});

const data_date_extent = ({}) => data[data.length - 1].date; // important, because data is hidden to applications

// "smoothed" = 7 day avg.
// Ireland only sends data once per week, which is an interesting effect I am watching for recent data
const new_cases_smoothed = ({ t_in }) =>
data.find((d) => Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d.date, t({ t_in }))).new_cases_smoothed;

const new_deaths_smoothed = ({ t_in }) =>
data.find((d) => Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d.date, t({ t_in }))).new_deaths_smoothed;

const new_cases = ({ t_in }) =>
data.find((d) => Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d.date, t({ t_in }))).new_cases;

const new_deaths = ({ t_in }) =>
data.find((d) => Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d.date, t({ t_in }))).new_deaths;

// some metrics modelling:

const new_cases_smoothed_lag_allowance = ({ t_in }) =>
new_cases_smoothed({ t_in: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(t({ t_in }), -lag({})) });

const new_cases_lag_allowance = ({ t_in }) =>
new_cases({ t_in: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(t({ t_in }), -lag({})) });

// cases 10 days ago / deaths (on 7 day avgs)
const cases_deaths_link_smoothed = ({ t_in }) =>
new_cases_smoothed_lag_allowance({ t_in }) / new_deaths_smoothed({ t_in });

// same, but using daily numbers
const cases_deaths_link = ({ t_in }) => new_cases_lag_allowance({ t_in }) / new_deaths({ t_in });

const lag = ({}) => 10; // lag a constant 10 here

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