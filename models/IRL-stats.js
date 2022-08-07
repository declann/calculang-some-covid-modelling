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
/* harmony default export */ __webpack_exports__["a"] = ("iso_code,date,new_cases_smoothed,new_cases,new_deaths_smoothed,new_deaths\r\nIRL,2020-02-29,,1.0,,\r\nIRL,2020-03-01,,0.0,,\r\nIRL,2020-03-02,,0.0,,\r\nIRL,2020-03-03,,1.0,,\r\nIRL,2020-03-04,,4.0,,\r\nIRL,2020-03-05,0.857,0.0,,\r\nIRL,2020-03-06,2.571,12.0,,\r\nIRL,2020-03-07,2.429,0.0,,\r\nIRL,2020-03-08,2.571,1.0,,\r\nIRL,2020-03-09,2.857,2.0,,\r\nIRL,2020-03-10,4.571,13.0,,\r\nIRL,2020-03-11,5.286,9.0,,1.0\r\nIRL,2020-03-12,5.286,0.0,,0.0\r\nIRL,2020-03-13,10.286,47.0,,0.0\r\nIRL,2020-03-14,15.857,39.0,,1.0\r\nIRL,2020-03-15,15.714,0.0,,0.0\r\nIRL,2020-03-16,21.143,40.0,0.286,0.0\r\nIRL,2020-03-17,27.0,54.0,0.286,0.0\r\nIRL,2020-03-18,35.571,69.0,0.143,0.0\r\nIRL,2020-03-19,73.429,265.0,0.286,1.0\r\nIRL,2020-03-20,84.714,126.0,0.286,0.0\r\nIRL,2020-03-21,93.714,102.0,0.143,0.0\r\nIRL,2020-03-22,111.0,121.0,0.286,1.0\r\nIRL,2020-03-23,136.571,219.0,0.571,2.0\r\nIRL,2020-03-24,158.0,204.0,0.714,1.0\r\nIRL,2020-03-25,181.714,235.0,1.0,2.0\r\nIRL,2020-03-26,180.286,255.0,2.286,10.0\r\nIRL,2020-03-27,205.429,302.0,2.714,3.0\r\nIRL,2020-03-28,232.857,294.0,4.714,14.0\r\nIRL,2020-03-29,244.143,200.0,6.0,10.0\r\nIRL,2020-03-30,255.0,295.0,6.857,8.0\r\nIRL,2020-03-31,272.286,325.0,9.143,17.0\r\nIRL,2020-04-01,269.0,212.0,10.857,14.0\r\nIRL,2020-04-02,290.0,402.0,11.286,13.0\r\nIRL,2020-04-03,307.429,424.0,14.0,22.0\r\nIRL,2020-04-04,312.714,331.0,14.429,17.0\r\nIRL,2020-04-05,339.857,390.0,16.0,21.0\r\nIRL,2020-04-06,350.571,370.0,17.143,16.0\r\nIRL,2020-04-07,353.429,345.0,19.857,36.0\r\nIRL,2020-04-08,375.286,365.0,21.429,25.0\r\nIRL,2020-04-09,389.286,500.0,23.571,28.0\r\nIRL,2020-04-10,545.143,1515.0,23.857,24.0\r\nIRL,2020-04-11,617.714,839.0,26.143,33.0\r\nIRL,2020-04-12,665.857,727.0,25.143,14.0\r\nIRL,2020-04-13,754.714,992.0,27.286,31.0\r\nIRL,2020-04-14,824.286,832.0,28.0,41.0\r\nIRL,2020-04-15,924.714,1068.0,29.857,38.0\r\nIRL,2020-04-16,956.714,724.0,31.857,42.0\r\nIRL,2020-04-17,841.571,709.0,34.714,44.0\r\nIRL,2020-04-18,832.857,778.0,35.857,41.0\r\nIRL,2020-04-19,799.429,493.0,39.429,39.0\r\nIRL,2020-04-20,715.0,401.0,46.0,77.0\r\nIRL,2020-04-21,651.571,388.0,46.286,43.0\r\nIRL,2020-04-22,589.143,631.0,46.429,39.0\r\nIRL,2020-04-23,619.429,936.0,44.0,25.0\r\nIRL,2020-04-24,600.571,577.0,69.143,220.0\r\nIRL,2020-04-25,543.286,377.0,70.286,49.0\r\nIRL,2020-04-26,573.0,701.0,68.143,24.0\r\nIRL,2020-04-27,570.857,386.0,59.286,15.0\r\nIRL,2020-04-28,548.143,229.0,61.286,57.0\r\nIRL,2020-04-29,511.714,376.0,60.143,31.0\r\nIRL,2020-04-30,429.286,359.0,62.571,42.0\r\nIRL,2020-05-01,378.429,221.0,35.857,33.0\r\nIRL,2020-05-02,373.571,343.0,31.857,21.0\r\nIRL,2020-05-03,320.571,330.0,30.857,17.0\r\nIRL,2020-05-04,303.429,266.0,31.0,16.0\r\nIRL,2020-05-05,300.857,211.0,25.714,20.0\r\nIRL,2020-05-06,285.0,265.0,26.429,36.0\r\nIRL,2020-05-07,253.286,137.0,24.429,28.0\r\nIRL,2020-05-08,244.0,156.0,23.429,26.0\r\nIRL,2020-05-09,226.286,219.0,22.857,17.0\r\nIRL,2020-05-10,212.857,236.0,22.143,12.0\r\nIRL,2020-05-11,194.714,139.0,21.143,9.0\r\nIRL,2020-05-12,179.857,107.0,21.286,21.0\r\nIRL,2020-05-13,164.714,159.0,17.429,9.0\r\nIRL,2020-05-14,206.0,426.0,14.714,9.0\r\nIRL,2020-05-15,202.143,129.0,12.714,12.0\r\nIRL,2020-05-16,184.0,92.0,12.429,15.0\r\nIRL,2020-05-17,159.429,64.0,12.143,10.0\r\nIRL,2020-05-18,152.143,88.0,11.429,4.0\r\nIRL,2020-05-19,144.143,51.0,10.429,14.0\r\nIRL,2020-05-20,130.571,64.0,10.571,10.0\r\nIRL,2020-05-21,80.571,76.0,11.0,12.0\r\nIRL,2020-05-22,78.571,115.0,10.571,9.0\r\nIRL,2020-05-23,76.286,76.0,10.143,12.0\r\nIRL,2020-05-24,75.286,57.0,9.286,4.0\r\nIRL,2020-05-25,71.143,59.0,,\r\nIRL,2020-05-26,69.143,37.0,8.0,9.0\r\nIRL,2020-05-27,69.714,68.0,8.857,16.0\r\nIRL,2020-05-28,64.286,38.0,8.286,8.0\r\nIRL,2020-05-29,52.857,35.0,7.857,6.0\r\nIRL,2020-05-30,49.571,53.0,7.0,6.0\r\nIRL,2020-05-31,50.143,61.0,6.571,1.0\r\nIRL,2020-06-01,52.0,72.0,,\r\nIRL,2020-06-02,47.286,4.0,6.429,8.0\r\nIRL,2020-06-03,44.0,45.0,4.286,1.0\r\nIRL,2020-06-04,43.0,31.0,3.857,5.0\r\nIRL,2020-06-05,41.0,21.0,3.857,6.0\r\nIRL,2020-06-06,36.286,20.0,4.143,8.0\r\nIRL,2020-06-07,30.143,18.0,4.143,1.0\r\nIRL,2020-06-08,20.714,6.0,4.714,4.0\r\nIRL,2020-06-09,21.286,8.0,4.714,8.0\r\nIRL,2020-06-10,17.143,16.0,5.143,4.0\r\nIRL,2020-06-11,13.714,7.0,5.571,8.0\r\nIRL,2020-06-12,12.429,12.0,5.0,2.0\r\nIRL,2020-06-13,16.0,45.0,3.857,0.0\r\nIRL,2020-06-14,14.571,8.0,3.857,1.0\r\nIRL,2020-06-15,16.286,18.0,3.286,0.0\r\nIRL,2020-06-16,17.0,13.0,2.571,3.0\r\nIRL,2020-06-17,15.714,7.0,2.143,1.0\r\nIRL,2020-06-18,16.714,14.0,1.571,4.0\r\nIRL,2020-06-19,16.857,13.0,1.286,0.0\r\nIRL,2020-06-20,11.286,6.0,1.429,1.0\r\nIRL,2020-06-21,10.857,5.0,1.286,0.0\r\nIRL,2020-06-22,8.857,4.0,1.571,2.0\r\nIRL,2020-06-23,8.143,8.0,1.571,3.0\r\nIRL,2020-06-24,7.857,5.0,2.286,6.0\r\nIRL,2020-06-25,7.143,9.0,1.857,1.0\r\nIRL,2020-06-26,6.571,9.0,2.286,3.0\r\nIRL,2020-06-27,9.0,23.0,2.714,4.0\r\nIRL,2020-06-28,8.571,2.0,2.857,1.0\r\nIRL,2020-06-29,11.286,23.0,2.571,0.0\r\nIRL,2020-06-30,11.714,11.0,2.286,1.0\r\nIRL,2020-07-01,11.571,4.0,1.714,2.0\r\nIRL,2020-07-02,12.0,12.0,1.571,0.0\r\nIRL,2020-07-03,12.0,9.0,1.429,2.0\r\nIRL,2020-07-04,10.286,11.0,1.0,1.0\r\nIRL,2020-07-05,12.571,18.0,0.857,0.0\r\nIRL,2020-07-06,9.857,4.0,0.857,0.0\r\nIRL,2020-07-07,9.286,7.0,0.857,1.0\r\nIRL,2020-07-08,9.286,4.0,,\r\nIRL,2020-07-09,10.857,23.0,1.286,5.0\r\nIRL,2020-07-10,13.0,24.0,1.143,1.0\r\nIRL,2020-07-11,14.571,22.0,1.286,2.0\r\nIRL,2020-07-12,14.429,17.0,1.286,0.0\r\nIRL,2020-07-13,15.286,10.0,1.286,0.0\r\nIRL,2020-07-14,18.857,32.0,1.143,0.0\r\nIRL,2020-07-15,20.143,13.0,1.429,2.0\r\nIRL,2020-07-16,19.0,15.0,0.857,1.0\r\nIRL,2020-07-17,20.143,32.0,1.143,3.0\r\nIRL,2020-07-18,19.857,20.0,1.0,1.0\r\nIRL,2020-07-19,18.857,10.0,1.0,0.0\r\nIRL,2020-07-20,18.286,6.0,1.0,0.0\r\nIRL,2020-07-21,18.857,36.0,1.0,0.0\r\nIRL,2020-07-22,19.429,17.0,0.857,1.0\r\nIRL,2020-07-23,18.286,7.0,2.0,9.0\r\nIRL,2020-07-24,16.429,19.0,1.571,0.0\r\nIRL,2020-07-25,17.0,24.0,1.571,1.0\r\nIRL,2020-07-26,17.286,12.0,1.571,0.0\r\nIRL,2020-07-27,18.0,11.0,1.571,0.0\r\nIRL,2020-07-28,18.143,37.0,1.571,0.0\r\nIRL,2020-07-29,17.571,13.0,1.429,0.0\r\nIRL,2020-07-30,28.714,85.0,,\r\nIRL,2020-07-31,31.429,38.0,0.143,0.0\r\nIRL,2020-08-01,34.286,44.0,0.0,0.0\r\nIRL,2020-08-02,40.143,53.0,0.0,0.0\r\nIRL,2020-08-03,45.143,46.0,0.0,0.0\r\nIRL,2020-08-04,46.286,45.0,0.0,0.0\r\nIRL,2020-08-05,51.571,50.0,0.0,0.0\r\nIRL,2020-08-06,49.286,69.0,0.714,5.0\r\nIRL,2020-08-07,57.857,98.0,1.286,4.0\r\nIRL,2020-08-08,76.429,174.0,1.286,0.0\r\nIRL,2020-08-09,78.571,68.0,1.286,0.0\r\nIRL,2020-08-10,80.0,56.0,1.286,0.0\r\nIRL,2020-08-11,78.286,33.0,1.429,1.0\r\nIRL,2020-08-12,76.429,37.0,1.571,1.0\r\nIRL,2020-08-13,79.571,91.0,0.857,0.0\r\nIRL,2020-08-14,75.0,66.0,0.286,0.0\r\nIRL,2020-08-15,78.143,196.0,0.286,0.0\r\nIRL,2020-08-16,77.857,66.0,0.286,0.0\r\nIRL,2020-08-17,77.857,56.0,0.286,0.0\r\nIRL,2020-08-18,99.714,186.0,0.286,1.0\r\nIRL,2020-08-19,101.286,48.0,0.143,0.0\r\nIRL,2020-08-20,106.714,129.0,0.286,1.0\r\nIRL,2020-08-21,108.571,79.0,0.286,0.0\r\nIRL,2020-08-22,102.429,153.0,0.429,1.0\r\nIRL,2020-08-23,101.714,61.0,0.429,0.0\r\nIRL,2020-08-24,114.714,147.0,0.429,0.0\r\nIRL,2020-08-25,100.286,85.0,0.286,0.0\r\nIRL,2020-08-26,116.571,162.0,0.286,0.0\r\nIRL,2020-08-27,111.0,90.0,0.143,0.0\r\nIRL,2020-08-28,117.571,125.0,0.143,0.0\r\nIRL,2020-08-29,116.0,142.0,0.0,0.0\r\nIRL,2020-08-30,113.0,40.0,0.0,0.0\r\nIRL,2020-08-31,99.286,51.0,0.0,0.0\r\nIRL,2020-09-01,117.714,214.0,0.0,0.0\r\nIRL,2020-09-02,107.286,89.0,0.0,0.0\r\nIRL,2020-09-03,107.571,92.0,0.0,0.0\r\nIRL,2020-09-04,103.571,97.0,0.0,0.0\r\nIRL,2020-09-05,116.286,231.0,0.0,0.0\r\nIRL,2020-09-06,130.286,138.0,0.0,0.0\r\nIRL,2020-09-07,137.571,102.0,0.0,0.0\r\nIRL,2020-09-08,150.714,306.0,0.143,1.0\r\nIRL,2020-09-09,150.0,84.0,0.571,3.0\r\nIRL,2020-09-10,164.857,196.0,0.571,0.0\r\nIRL,2020-09-11,181.143,211.0,0.571,0.0\r\nIRL,2020-09-12,170.857,159.0,0.857,2.0\r\nIRL,2020-09-13,187.571,255.0,1.0,1.0\r\nIRL,2020-09-14,202.571,207.0,1.0,0.0\r\nIRL,2020-09-15,209.857,357.0,1.286,3.0\r\nIRL,2020-09-16,233.571,250.0,1.0,1.0\r\nIRL,2020-09-17,237.571,224.0,1.143,1.0\r\nIRL,2020-09-18,242.857,248.0,1.571,3.0\r\nIRL,2020-09-19,258.286,267.0,1.286,0.0\r\nIRL,2020-09-20,278.286,395.0,1.143,0.0\r\nIRL,2020-09-21,275.571,188.0,1.143,0.0\r\nIRL,2020-09-22,270.714,323.0,0.714,0.0\r\nIRL,2020-09-23,268.0,231.0,0.857,2.0\r\nIRL,2020-09-24,281.571,319.0,1.143,3.0\r\nIRL,2020-09-25,292.0,321.0,0.714,0.0\r\nIRL,2020-09-26,288.857,245.0,1.429,5.0\r\nIRL,2020-09-27,293.857,430.0,1.429,0.0\r\nIRL,2020-09-28,322.286,387.0,1.429,0.0\r\nIRL,2020-09-29,328.0,363.0,1.571,1.0\r\nIRL,2020-09-30,354.286,415.0,1.429,1.0\r\nIRL,2020-10-01,371.857,442.0,1.286,2.0\r\nIRL,2020-10-02,392.571,466.0,,\r\nIRL,2020-10-03,444.0,605.0,1.857,9.0\r\nIRL,2020-10-04,434.571,364.0,1.857,0.0\r\nIRL,2020-10-05,453.143,517.0,1.857,0.0\r\nIRL,2020-10-06,461.857,424.0,1.857,1.0\r\nIRL,2020-10-07,489.857,611.0,2.429,5.0\r\nIRL,2020-10-08,498.429,502.0,2.286,1.0\r\nIRL,2020-10-09,520.0,617.0,2.857,4.0\r\nIRL,2020-10-10,578.0,1011.0,2.0,3.0\r\nIRL,2020-10-11,642.286,814.0,2.286,2.0\r\nIRL,2020-10-12,686.0,823.0,2.429,1.0\r\nIRL,2020-10-13,740.857,808.0,2.714,3.0\r\nIRL,2020-10-14,808.429,1084.0,2.714,5.0\r\nIRL,2020-10-15,906.143,1186.0,3.0,3.0\r\nIRL,2020-10-16,960.571,998.0,2.857,3.0\r\nIRL,2020-10-17,994.857,1251.0,3.571,8.0\r\nIRL,2020-10-18,1062.0,1284.0,3.714,3.0\r\nIRL,2020-10-19,1091.714,1031.0,3.571,0.0\r\nIRL,2020-10-20,1156.714,1263.0,5.0,13.0\r\nIRL,2020-10-21,1168.429,1166.0,4.714,3.0\r\nIRL,2020-10-22,1149.571,1054.0,4.714,3.0\r\nIRL,2020-10-23,1119.143,785.0,5.286,7.0\r\nIRL,2020-10-24,1061.429,847.0,4.714,4.0\r\nIRL,2020-10-25,1023.714,1020.0,4.286,0.0\r\nIRL,2020-10-26,1010.571,939.0,4.714,3.0\r\nIRL,2020-10-27,930.143,700.0,3.571,5.0\r\nIRL,2020-10-28,858.857,667.0,4.0,6.0\r\nIRL,2020-10-29,831.571,863.0,4.429,6.0\r\nIRL,2020-10-30,828.286,762.0,4.286,6.0\r\nIRL,2020-10-31,764.0,397.0,4.429,5.0\r\nIRL,2020-11-01,696.286,546.0,4.714,2.0\r\nIRL,2020-11-02,669.0,748.0,4.571,2.0\r\nIRL,2020-11-03,611.571,298.0,4.571,5.0\r\nIRL,2020-11-04,578.429,435.0,4.857,8.0\r\nIRL,2020-11-05,535.571,563.0,4.429,3.0\r\nIRL,2020-11-06,497.0,492.0,4.571,7.0\r\nIRL,2020-11-07,485.571,317.0,4.571,5.0\r\nIRL,2020-11-08,484.571,539.0,4.571,2.0\r\nIRL,2020-11-09,415.571,265.0,4.429,1.0\r\nIRL,2020-11-10,405.857,230.0,5.857,15.0\r\nIRL,2020-11-11,394.857,358.0,5.0,2.0\r\nIRL,2020-11-12,369.429,385.0,4.571,0.0\r\nIRL,2020-11-13,365.857,467.0,4.571,7.0\r\nIRL,2020-11-14,381.571,427.0,4.714,6.0\r\nIRL,2020-11-15,358.429,377.0,4.571,1.0\r\nIRL,2020-11-16,385.286,453.0,5.143,5.0\r\nIRL,2020-11-17,399.571,330.0,4.571,11.0\r\nIRL,2020-11-18,401.571,372.0,5.857,11.0\r\nIRL,2020-11-19,405.857,415.0,6.429,4.0\r\nIRL,2020-11-20,386.143,329.0,6.571,8.0\r\nIRL,2020-11-21,373.857,341.0,6.286,4.0\r\nIRL,2020-11-22,365.429,318.0,6.286,1.0\r\nIRL,2020-11-23,336.429,250.0,5.571,0.0\r\nIRL,2020-11-24,320.571,219.0,4.714,5.0\r\nIRL,2020-11-25,304.143,257.0,3.857,5.0\r\nIRL,2020-11-26,288.714,307.0,3.714,3.0\r\nIRL,2020-11-27,271.0,205.0,3.571,7.0\r\nIRL,2020-11-28,257.0,243.0,4.0,7.0\r\nIRL,2020-11-29,254.286,299.0,4.143,2.0\r\nIRL,2020-11-30,261.857,303.0,4.286,1.0\r\nIRL,2020-12-01,266.857,254.0,5.857,16.0\r\nIRL,2020-12-02,268.429,268.0,5.857,5.0\r\nIRL,2020-12-03,247.714,162.0,6.286,6.0\r\nIRL,2020-12-04,256.0,263.0,6.143,6.0\r\nIRL,2020-12-05,286.571,457.0,7.0,13.0\r\nIRL,2020-12-06,286.429,298.0,6.714,0.0\r\nIRL,2020-12-07,274.857,222.0,6.571,0.0\r\nIRL,2020-12-08,269.143,214.0,,\r\nIRL,2020-12-09,262.0,218.0,4.286,5.0\r\nIRL,2020-12-10,282.143,303.0,5.571,15.0\r\nIRL,2020-12-11,288.0,304.0,5.143,3.0\r\nIRL,2020-12-12,258.286,249.0,3.714,3.0\r\nIRL,2020-12-13,277.0,429.0,3.857,1.0\r\nIRL,2020-12-14,283.0,264.0,4.143,2.0\r\nIRL,2020-12-15,299.143,327.0,5.286,8.0\r\nIRL,2020-12-16,328.143,421.0,5.429,6.0\r\nIRL,2020-12-17,353.571,481.0,3.714,3.0\r\nIRL,2020-12-18,392.429,576.0,4.143,6.0\r\nIRL,2020-12-19,431.429,522.0,4.429,5.0\r\nIRL,2020-12-20,479.571,766.0,4.857,4.0\r\nIRL,2020-12-21,545.429,725.0,4.571,0.0\r\nIRL,2020-12-22,636.0,961.0,5.286,13.0\r\nIRL,2020-12-23,708.286,927.0,6.286,13.0\r\nIRL,2020-12-24,770.714,918.0,7.0,8.0\r\nIRL,2020-12-25,834.857,1025.0,6.429,2.0\r\nIRL,2020-12-26,945.429,1296.0,6.571,6.0\r\nIRL,2020-12-27,941.0,735.0,6.571,4.0\r\nIRL,2020-12-28,946.714,765.0,6.714,1.0\r\nIRL,2020-12-29,1030.143,1545.0,6.0,8.0\r\nIRL,2020-12-30,1143.143,1718.0,6.0,13.0\r\nIRL,2020-12-31,1243.714,1622.0,6.429,11.0\r\nIRL,2021-01-01,1347.714,1753.0,7.714,11.0\r\nIRL,2021-01-02,1647.429,3394.0,7.429,4.0\r\nIRL,2021-01-03,2251.143,4961.0,7.857,7.0\r\nIRL,2021-01-04,3014.714,6110.0,8.571,6.0\r\nIRL,2021-01-05,3554.714,5325.0,9.857,17.0\r\nIRL,2021-01-06,4428.143,7832.0,10.429,17.0\r\nIRL,2021-01-07,5125.429,6503.0,10.0,8.0\r\nIRL,2021-01-08,6050.286,8227.0,11.286,20.0\r\nIRL,2021-01-09,6257.286,4843.0,12.0,9.0\r\nIRL,2021-01-10,6532.286,6886.0,12.143,8.0\r\nIRL,2021-01-11,6363.143,4926.0,12.429,8.0\r\nIRL,2021-01-12,6038.429,3052.0,16.429,45.0\r\nIRL,2021-01-13,5427.143,3553.0,23.0,63.0\r\nIRL,2021-01-14,5057.143,3913.0,25.857,28.0\r\nIRL,2021-01-15,4380.571,3491.0,29.857,48.0\r\nIRL,2021-01-16,4150.429,3232.0,37.0,59.0\r\nIRL,2021-01-17,3587.571,2946.0,37.714,13.0\r\nIRL,2021-01-18,3186.286,2117.0,37.714,8.0\r\nIRL,2021-01-19,3035.429,1996.0,44.429,92.0\r\nIRL,2021-01-20,2882.857,2485.0,44.0,60.0\r\nIRL,2021-01-21,2695.0,2598.0,47.143,50.0\r\nIRL,2021-01-22,2533.0,2357.0,47.714,52.0\r\nIRL,2021-01-23,2343.429,1905.0,50.286,77.0\r\nIRL,2021-01-24,2118.286,1370.0,51.714,23.0\r\nIRL,2021-01-25,2011.429,1369.0,51.571,7.0\r\nIRL,2021-01-26,1858.857,928.0,51.143,89.0\r\nIRL,2021-01-27,1694.0,1331.0,50.286,54.0\r\nIRL,2021-01-28,1531.857,1463.0,49.857,47.0\r\nIRL,2021-01-29,1373.286,1247.0,49.143,47.0\r\nIRL,2021-01-30,1302.714,1411.0,49.286,78.0\r\nIRL,2021-01-31,1284.714,1244.0,48.143,15.0\r\nIRL,2021-02-01,1232.857,1006.0,48.571,10.0\r\nIRL,2021-02-02,1224.714,871.0,50.286,101.0\r\nIRL,2021-02-03,1178.286,1006.0,56.0,94.0\r\nIRL,2021-02-04,1157.0,1314.0,59.857,74.0\r\nIRL,2021-02-05,1124.429,1019.0,58.143,35.0\r\nIRL,2021-02-06,1035.0,785.0,54.571,53.0\r\nIRL,2021-02-07,1003.0,1020.0,54.143,12.0\r\nIRL,2021-02-08,977.714,829.0,52.857,1.0\r\nIRL,2021-02-09,930.857,543.0,47.714,65.0\r\nIRL,2021-02-10,929.857,999.0,40.286,42.0\r\nIRL,2021-02-11,865.286,862.0,37.143,52.0\r\nIRL,2021-02-12,851.0,919.0,34.857,19.0\r\nIRL,2021-02-13,892.571,1076.0,36.714,66.0\r\nIRL,2021-02-14,859.143,786.0,37.429,17.0\r\nIRL,2021-02-15,857.857,820.0,37.286,0.0\r\nIRL,2021-02-16,881.857,711.0,32.571,32.0\r\nIRL,2021-02-17,830.286,638.0,34.571,56.0\r\nIRL,2021-02-18,835.143,896.0,33.714,46.0\r\nIRL,2021-02-19,811.429,753.0,34.857,27.0\r\nIRL,2021-02-20,797.429,978.0,29.143,26.0\r\nIRL,2021-02-21,782.143,679.0,26.857,1.0\r\nIRL,2021-02-22,763.0,686.0,27.0,1.0\r\nIRL,2021-02-23,741.0,557.0,28.714,44.0\r\nIRL,2021-02-24,727.0,540.0,28.714,56.0\r\nIRL,2021-02-25,690.143,638.0,27.0,34.0\r\nIRL,2021-02-26,693.0,773.0,27.286,29.0\r\nIRL,2021-02-27,657.429,729.0,25.429,13.0\r\nIRL,2021-02-28,647.857,612.0,26.143,6.0\r\nIRL,2021-03-01,647.143,681.0,26.0,0.0\r\nIRL,2021-03-02,618.571,357.0,21.714,14.0\r\nIRL,2021-03-03,621.286,559.0,17.143,24.0\r\nIRL,2021-03-04,595.857,460.0,17.857,39.0\r\nIRL,2021-03-05,559.714,520.0,15.0,9.0\r\nIRL,2021-03-06,531.286,530.0,15.143,14.0\r\nIRL,2021-03-07,518.143,520.0,14.714,3.0\r\nIRL,2021-03-08,482.571,432.0,14.714,0.0\r\nIRL,2021-03-09,475.286,306.0,17.0,30.0\r\nIRL,2021-03-10,485.571,631.0,20.286,47.0\r\nIRL,2021-03-11,504.286,591.0,16.143,10.0\r\nIRL,2021-03-12,521.571,641.0,16.143,9.0\r\nIRL,2021-03-13,522.714,538.0,16.429,16.0\r\nIRL,2021-03-14,503.143,383.0,16.0,0.0\r\nIRL,2021-03-15,523.571,575.0,16.0,0.0\r\nIRL,2021-03-16,529.429,347.0,14.286,18.0\r\nIRL,2021-03-17,518.143,552.0,9.571,14.0\r\nIRL,2021-03-18,516.714,581.0,8.143,0.0\r\nIRL,2021-03-19,498.0,510.0,8.286,10.0\r\nIRL,2021-03-20,496.143,525.0,7.286,9.0\r\nIRL,2021-03-21,551.143,768.0,7.571,2.0\r\nIRL,2021-03-22,543.286,520.0,7.714,1.0\r\nIRL,2021-03-23,545.857,365.0,8.286,22.0\r\nIRL,2021-03-24,564.143,680.0,8.857,18.0\r\nIRL,2021-03-25,566.0,594.0,9.286,3.0\r\nIRL,2021-03-26,574.429,569.0,10.714,20.0\r\nIRL,2021-03-27,586.571,610.0,9.714,2.0\r\nIRL,2021-03-28,563.143,604.0,11.286,13.0\r\nIRL,2021-03-29,565.571,537.0,11.286,1.0\r\nIRL,2021-03-30,565.714,366.0,10.143,14.0\r\nIRL,2021-03-31,527.143,410.0,8.429,6.0\r\nIRL,2021-04-01,548.857,746.0,10.571,18.0\r\nIRL,2021-04-02,551.429,587.0,8.857,8.0\r\nIRL,2021-04-03,536.857,508.0,8.857,2.0\r\nIRL,2021-04-04,515.286,453.0,7.429,3.0\r\nIRL,2021-04-05,484.0,318.0,7.286,0.0\r\nIRL,2021-04-06,494.714,441.0,6.571,9.0\r\nIRL,2021-04-07,495.857,418.0,6.429,5.0\r\nIRL,2021-04-08,446.143,398.0,4.571,5.0\r\nIRL,2021-04-09,429.286,469.0,8.0,32.0\r\nIRL,2021-04-10,421.143,451.0,9.714,14.0\r\nIRL,2021-04-11,399.571,302.0,9.571,2.0\r\nIRL,2021-04-12,409.143,385.0,9.571,0.0\r\nIRL,2021-04-13,396.714,354.0,10.857,18.0\r\nIRL,2021-04-14,397.143,421.0,11.429,9.0\r\nIRL,2021-04-15,382.714,297.0,11.857,8.0\r\nIRL,2021-04-16,375.286,417.0,8.857,11.0\r\nIRL,2021-04-17,370.714,419.0,7.429,4.0\r\nIRL,2021-04-18,366.143,270.0,7.286,1.0\r\nIRL,2021-04-19,368.714,403.0,7.286,0.0\r\nIRL,2021-04-20,373.286,386.0,6.286,11.0\r\nIRL,2021-04-21,370.0,398.0,6.286,9.0\r\nIRL,2021-04-22,415.429,615.0,6.571,10.0\r\nIRL,2021-04-23,417.714,433.0,5.143,1.0\r\nIRL,2021-04-24,423.714,461.0,5.286,5.0\r\nIRL,2021-04-25,446.429,429.0,5.286,1.0\r\nIRL,2021-04-26,451.143,436.0,5.429,1.0\r\nIRL,2021-04-27,456.0,420.0,5.286,10.0\r\nIRL,2021-04-28,451.714,368.0,5.714,12.0\r\nIRL,2021-04-29,430.857,469.0,4.714,3.0\r\nIRL,2021-04-30,446.714,544.0,5.143,4.0\r\nIRL,2021-05-01,461.857,567.0,4.857,3.0\r\nIRL,2021-05-02,457.857,401.0,4.714,0.0\r\nIRL,2021-05-03,460.143,452.0,4.571,0.0\r\nIRL,2021-05-04,454.714,382.0,3.429,2.0\r\nIRL,2021-05-05,461.429,415.0,2.714,7.0\r\nIRL,2021-05-06,449.714,387.0,3.143,6.0\r\nIRL,2021-05-07,433.429,430.0,,\r\nIRL,2021-05-08,409.429,399.0,2.286,1.0\r\nIRL,2021-05-09,424.429,506.0,2.571,2.0\r\nIRL,2021-05-10,414.143,380.0,2.571,0.0\r\nIRL,2021-05-11,413.571,378.0,3.429,8.0\r\nIRL,2021-05-12,418.0,446.0,3.571,8.0\r\nIRL,2021-05-13,425.143,437.0,2.714,0.0\r\nIRL,2021-05-14,423.714,420.0,3.286,4.0\r\nIRL,2021-05-15,432.571,461.0,3.143,0.0\r\nIRL,2021-05-16,413.857,375.0,2.857,0.0\r\nIRL,2021-05-17,413.714,379.0,2.857,0.0\r\nIRL,2021-05-18,411.857,365.0,1.714,0.0\r\nIRL,2021-05-19,423.286,526.0,0.571,0.0\r\nIRL,2021-05-20,428.0,470.0,0.571,0.0\r\nIRL,2021-05-21,444.143,533.0,0.0,0.0\r\nIRL,2021-05-22,433.143,384.0,0.0,0.0\r\nIRL,2021-05-23,443.429,447.0,0.0,0.0\r\nIRL,2021-05-24,439.143,349.0,0.0,0.0\r\nIRL,2021-05-25,437.429,353.0,0.0,0.0\r\nIRL,2021-05-26,425.857,445.0,0.0,0.0\r\nIRL,2021-05-27,420.429,432.0,0.0,0.0\r\nIRL,2021-05-28,410.143,461.0,0.0,0.0\r\nIRL,2021-05-29,420.429,456.0,0.0,0.0\r\nIRL,2021-05-30,409.0,367.0,0.0,0.0\r\nIRL,2021-05-31,412.0,370.0,0.0,0.0\r\nIRL,2021-06-01,409.714,337.0,0.0,0.0\r\nIRL,2021-06-02,404.286,407.0,0.0,0.0\r\nIRL,2021-06-03,409.0,465.0,0.0,0.0\r\nIRL,2021-06-04,417.0,517.0,0.0,0.0\r\nIRL,2021-06-05,411.286,416.0,0.0,0.0\r\nIRL,2021-06-06,403.571,313.0,0.0,0.0\r\nIRL,2021-06-07,404.571,377.0,0.0,0.0\r\nIRL,2021-06-08,390.571,239.0,0.0,0.0\r\nIRL,2021-06-09,364.857,227.0,0.0,0.0\r\nIRL,2021-06-10,355.286,398.0,0.0,0.0\r\nIRL,2021-06-11,327.0,319.0,0.0,0.0\r\nIRL,2021-06-12,329.143,431.0,0.0,0.0\r\nIRL,2021-06-13,329.429,315.0,0.0,0.0\r\nIRL,2021-06-14,304.429,202.0,0.0,0.0\r\nIRL,2021-06-15,310.714,283.0,0.0,0.0\r\nIRL,2021-06-16,319.286,287.0,0.0,0.0\r\nIRL,2021-06-17,315.714,373.0,5.429,38.0\r\nIRL,2021-06-18,313.286,302.0,5.429,0.0\r\nIRL,2021-06-19,307.857,393.0,5.429,0.0\r\nIRL,2021-06-20,319.0,393.0,5.429,0.0\r\nIRL,2021-06-21,330.714,284.0,5.429,0.0\r\nIRL,2021-06-22,315.143,174.0,5.429,0.0\r\nIRL,2021-06-23,316.714,298.0,6.857,10.0\r\nIRL,2021-06-24,306.857,304.0,1.429,0.0\r\nIRL,2021-06-25,318.0,380.0,1.429,0.0\r\nIRL,2021-06-26,325.143,443.0,1.429,0.0\r\nIRL,2021-06-27,317.571,340.0,1.429,0.0\r\nIRL,2021-06-28,324.0,329.0,1.429,0.0\r\nIRL,2021-06-29,348.0,342.0,1.429,0.0\r\nIRL,2021-06-30,,,1.286,9.0\r\nIRL,2021-07-01,387.143,876.0,1.571,2.0\r\nIRL,2021-07-02,406.0,512.0,1.571,0.0\r\nIRL,2021-07-03,406.714,448.0,1.571,0.0\r\nIRL,2021-07-04,438.429,562.0,1.571,0.0\r\nIRL,2021-07-05,439.286,335.0,1.571,0.0\r\nIRL,2021-07-06,447.143,397.0,1.571,0.0\r\nIRL,2021-07-07,523.286,533.0,1.143,6.0\r\nIRL,2021-07-08,474.286,533.0,0.857,0.0\r\nIRL,2021-07-09,491.286,631.0,0.857,0.0\r\nIRL,2021-07-10,510.286,581.0,0.857,0.0\r\nIRL,2021-07-11,512.286,576.0,0.857,0.0\r\nIRL,2021-07-12,546.143,572.0,0.857,0.0\r\nIRL,2021-07-13,573.571,589.0,0.857,0.0\r\nIRL,2021-07-14,602.714,737.0,1.714,12.0\r\nIRL,2021-07-15,668.571,994.0,1.714,0.0\r\nIRL,2021-07-16,745.571,1170.0,1.714,0.0\r\nIRL,2021-07-17,859.286,1377.0,1.714,0.0\r\nIRL,2021-07-18,945.429,1179.0,1.714,0.0\r\nIRL,2021-07-19,1016.714,1071.0,1.714,0.0\r\nIRL,2021-07-20,1091.143,1110.0,1.714,0.0\r\nIRL,2021-07-21,1165.857,1260.0,1.143,8.0\r\nIRL,2021-07-22,1193.571,1188.0,1.143,0.0\r\nIRL,2021-07-23,1224.429,1386.0,1.143,0.0\r\nIRL,2021-07-24,1219.857,1345.0,1.143,0.0\r\nIRL,2021-07-25,1212.286,1126.0,1.143,0.0\r\nIRL,2021-07-26,1241.571,1276.0,1.143,0.0\r\nIRL,2021-07-27,1242.143,1114.0,1.143,0.0\r\nIRL,2021-07-28,1248.0,1301.0,1.286,9.0\r\nIRL,2021-07-29,1272.714,1361.0,1.286,0.0\r\nIRL,2021-07-30,1289.143,1501.0,1.286,0.0\r\nIRL,2021-07-31,1300.857,1427.0,1.286,0.0\r\nIRL,2021-08-01,1296.857,1098.0,1.286,0.0\r\nIRL,2021-08-02,1307.714,1352.0,1.286,0.0\r\nIRL,2021-08-03,1274.857,884.0,1.286,0.0\r\nIRL,2021-08-04,1262.857,1217.0,1.286,9.0\r\nIRL,2021-08-05,1281.571,1492.0,1.286,0.0\r\nIRL,2021-08-06,1321.571,1781.0,1.286,0.0\r\nIRL,2021-08-07,1378.857,1828.0,1.286,0.0\r\nIRL,2021-08-08,1484.429,1837.0,1.286,0.0\r\nIRL,2021-08-09,1492.857,1411.0,1.286,0.0\r\nIRL,2021-08-10,1582.143,1509.0,1.286,0.0\r\nIRL,2021-08-11,1668.143,1819.0,2.143,15.0\r\nIRL,2021-08-12,1702.571,1733.0,2.143,0.0\r\nIRL,2021-08-13,1730.714,1978.0,2.143,0.0\r\nIRL,2021-08-14,1765.857,2074.0,2.143,0.0\r\nIRL,2021-08-15,1754.571,1758.0,2.143,0.0\r\nIRL,2021-08-16,1758.857,1441.0,2.143,0.0\r\nIRL,2021-08-17,1757.0,1496.0,2.143,0.0\r\nIRL,2021-08-18,1740.571,1704.0,2.143,15.0\r\nIRL,2021-08-19,1752.714,1818.0,2.143,0.0\r\nIRL,2021-08-20,1769.857,2098.0,2.143,0.0\r\nIRL,2021-08-21,1777.143,2125.0,2.143,0.0\r\nIRL,2021-08-22,1767.143,1688.0,2.143,0.0\r\nIRL,2021-08-23,1788.429,1590.0,2.143,0.0\r\nIRL,2021-08-24,1799.143,1571.0,2.143,0.0\r\nIRL,2021-08-25,1848.714,2051.0,2.571,18.0\r\nIRL,2021-08-26,1855.571,1866.0,2.571,0.0\r\nIRL,2021-08-27,1823.714,1875.0,2.571,0.0\r\nIRL,2021-08-28,1805.429,1997.0,2.571,0.0\r\nIRL,2021-08-29,1808.0,1706.0,2.571,0.0\r\nIRL,2021-08-30,1765.429,1292.0,2.571,0.0\r\nIRL,2021-08-31,1738.429,1382.0,2.571,0.0\r\nIRL,2021-09-01,1701.0,1789.0,2.857,20.0\r\nIRL,2021-09-02,,,2.857,0.0\r\nIRL,2021-09-03,1367.571,1407.0,2.857,0.0\r\nIRL,2021-09-04,1325.571,1703.0,2.857,0.0\r\nIRL,2021-09-05,1250.429,1180.0,2.857,0.0\r\nIRL,2021-09-06,1228.143,1136.0,2.857,0.0\r\nIRL,2021-09-07,1240.0,1465.0,2.857,0.0\r\nIRL,2021-09-08,1204.0,1537.0,6.143,43.0\r\nIRL,2021-09-09,1385.571,1271.0,6.143,0.0\r\nIRL,2021-09-10,1415.857,1619.0,6.143,0.0\r\nIRL,2021-09-11,1382.0,1466.0,6.143,0.0\r\nIRL,2021-09-12,1405.714,1346.0,6.143,0.0\r\nIRL,2021-09-13,1368.714,877.0,6.143,0.0\r\nIRL,2021-09-14,1327.429,1176.0,6.143,0.0\r\nIRL,2021-09-15,,,3.429,24.0\r\nIRL,2021-09-16,1464.143,3765.0,3.429,0.0\r\nIRL,2021-09-17,1430.857,1386.0,3.429,0.0\r\nIRL,2021-09-18,1429.429,1456.0,3.429,0.0\r\nIRL,2021-09-19,1412.0,1224.0,3.429,0.0\r\nIRL,2021-09-20,1451.0,1150.0,3.429,0.0\r\nIRL,2021-09-21,1485.857,1420.0,3.429,0.0\r\nIRL,2021-09-22,1690.0,1429.0,4.286,30.0\r\nIRL,2021-09-23,1345.571,1354.0,4.286,0.0\r\nIRL,2021-09-24,1313.714,1163.0,4.286,0.0\r\nIRL,2021-09-25,1296.429,1335.0,4.286,0.0\r\nIRL,2021-09-26,1330.0,1459.0,4.286,0.0\r\nIRL,2021-09-27,1314.857,1044.0,4.286,0.0\r\nIRL,2021-09-28,1325.857,1497.0,4.286,0.0\r\nIRL,2021-09-29,1328.429,1447.0,5.714,40.0\r\nIRL,2021-09-30,1316.0,1267.0,5.714,0.0\r\nIRL,2021-10-01,1300.857,1057.0,5.714,0.0\r\nIRL,2021-10-02,1336.714,1586.0,5.714,0.0\r\nIRL,2021-10-03,1278.429,1051.0,5.714,0.0\r\nIRL,2021-10-04,1256.857,893.0,5.714,0.0\r\nIRL,2021-10-05,1203.571,1124.0,5.714,0.0\r\nIRL,2021-10-06,1137.143,982.0,4.429,31.0\r\nIRL,2021-10-07,1128.429,1206.0,4.429,0.0\r\nIRL,2021-10-08,1263.429,2002.0,4.429,0.0\r\nIRL,2021-10-09,1314.0,1940.0,4.429,0.0\r\nIRL,2021-10-10,1361.571,1384.0,4.429,0.0\r\nIRL,2021-10-11,1427.857,1357.0,4.429,0.0\r\nIRL,2021-10-12,1475.286,1456.0,4.429,0.0\r\nIRL,2021-10-13,1628.0,2051.0,3.714,26.0\r\nIRL,2021-10-14,1688.0,1626.0,3.714,0.0\r\nIRL,2021-10-15,1674.429,1907.0,3.714,0.0\r\nIRL,2021-10-16,1708.714,2180.0,3.714,0.0\r\nIRL,2021-10-17,1708.143,1380.0,3.714,0.0\r\nIRL,2021-10-18,1739.429,1576.0,3.714,0.0\r\nIRL,2021-10-19,1873.857,2397.0,3.714,0.0\r\nIRL,2021-10-20,1887.571,2147.0,9.0,63.0\r\nIRL,2021-10-21,1944.714,2026.0,9.0,0.0\r\nIRL,2021-10-22,2024.429,2465.0,9.0,0.0\r\nIRL,2021-10-23,2059.714,2427.0,9.0,0.0\r\nIRL,2021-10-24,2109.0,1725.0,9.0,0.0\r\nIRL,2021-10-25,2147.429,1845.0,9.0,0.0\r\nIRL,2021-10-26,2116.429,2180.0,9.0,0.0\r\nIRL,2021-10-27,2041.714,1624.0,9.571,67.0\r\nIRL,2021-10-28,2123.429,2598.0,9.571,0.0\r\nIRL,2021-10-29,2134.286,2541.0,9.571,0.0\r\nIRL,2021-10-30,2211.286,2966.0,9.571,0.0\r\nIRL,2021-10-31,2245.286,1963.0,9.571,0.0\r\nIRL,2021-11-01,2389.571,2855.0,9.571,0.0\r\nIRL,2021-11-02,2610.0,3723.0,9.571,0.0\r\nIRL,2021-11-03,2831.429,3174.0,8.0,56.0\r\nIRL,2021-11-04,2892.286,3024.0,8.0,0.0\r\nIRL,2021-11-05,3086.857,3903.0,8.0,0.0\r\nIRL,2021-11-06,3189.571,3685.0,8.0,0.0\r\nIRL,2021-11-07,3398.857,3428.0,8.0,0.0\r\nIRL,2021-11-08,3442.571,3161.0,8.0,0.0\r\nIRL,2021-11-09,3672.286,5331.0,8.0,0.0\r\nIRL,2021-11-10,3642.857,2968.0,10.571,74.0\r\nIRL,2021-11-11,3736.143,3677.0,10.571,0.0\r\nIRL,2021-11-12,3961.143,5478.0,10.571,0.0\r\nIRL,2021-11-13,4097.857,4642.0,10.571,0.0\r\nIRL,2021-11-14,4151.714,3805.0,10.571,0.0\r\nIRL,2021-11-15,4351.286,4558.0,10.571,0.0\r\nIRL,2021-11-16,4219.286,4407.0,10.571,0.0\r\nIRL,2021-11-17,4314.143,3632.0,6.143,43.0\r\nIRL,2021-11-18,4452.571,4646.0,6.143,0.0\r\nIRL,2021-11-19,4117.571,3133.0,6.143,0.0\r\nIRL,2021-11-20,4305.714,5959.0,6.143,0.0\r\nIRL,2021-11-21,4359.429,4181.0,6.143,0.0\r\nIRL,2021-11-22,4512.571,5630.0,6.143,0.0\r\nIRL,2021-11-23,4406.0,3661.0,6.143,0.0\r\nIRL,2021-11-24,4443.0,3891.0,6.143,43.0\r\nIRL,2021-11-25,4459.714,4763.0,6.143,0.0\r\nIRL,2021-11-26,4672.0,4619.0,6.143,0.0\r\nIRL,2021-11-27,4505.143,4791.0,6.143,0.0\r\nIRL,2021-11-28,4441.429,3735.0,6.143,0.0\r\nIRL,2021-11-29,4294.714,4603.0,6.143,0.0\r\nIRL,2021-11-30,4551.429,5458.0,6.143,0.0\r\nIRL,2021-12-01,4537.0,3790.0,7.857,55.0\r\nIRL,2021-12-02,4450.714,4159.0,7.857,0.0\r\nIRL,2021-12-03,4563.429,5408.0,7.857,0.0\r\nIRL,2021-12-04,4682.143,5622.0,7.857,0.0\r\nIRL,2021-12-05,4885.143,5156.0,7.857,0.0\r\nIRL,2021-12-06,4643.429,2911.0,7.857,0.0\r\nIRL,2021-12-07,4658.714,5565.0,7.857,0.0\r\nIRL,2021-12-08,4706.714,4126.0,11.571,81.0\r\nIRL,2021-12-09,4684.429,4003.0,11.571,0.0\r\nIRL,2021-12-10,4497.143,4097.0,11.571,0.0\r\nIRL,2021-12-11,4266.0,4004.0,11.571,0.0\r\nIRL,2021-12-12,4196.143,4667.0,11.571,0.0\r\nIRL,2021-12-13,4449.286,4683.0,11.571,0.0\r\nIRL,2021-12-14,4207.286,3871.0,11.571,0.0\r\nIRL,2021-12-15,4222.143,4230.0,6.714,47.0\r\nIRL,2021-12-16,4241.857,4141.0,6.714,0.0\r\nIRL,2021-12-17,4170.143,3595.0,6.714,0.0\r\nIRL,2021-12-18,4645.714,7333.0,6.714,0.0\r\nIRL,2021-12-19,4711.0,5124.0,6.714,0.0\r\nIRL,2021-12-20,4726.0,4788.0,6.714,0.0\r\nIRL,2021-12-21,4925.714,5269.0,6.714,0.0\r\nIRL,2021-12-22,5222.429,6307.0,7.857,55.0\r\nIRL,2021-12-23,5689.571,7411.0,7.857,0.0\r\nIRL,2021-12-24,6773.429,11182.0,7.857,0.0\r\nIRL,2021-12-25,7692.286,13765.0,7.857,0.0\r\nIRL,2021-12-26,8446.571,10404.0,7.857,0.0\r\nIRL,2021-12-27,8724.714,6735.0,7.857,0.0\r\nIRL,2021-12-28,9258.571,9006.0,7.857,0.0\r\nIRL,2021-12-29,10704.429,16428.0,3.143,22.0\r\nIRL,2021-12-30,12582.0,20554.0,3.143,0.0\r\nIRL,2021-12-31,13857.429,20110.0,3.143,0.0\r\nIRL,2022-01-01,15216.857,23281.0,3.143,0.0\r\nIRL,2022-01-02,13730.571,0.0,3.143,0.0\r\nIRL,2022-01-03,17633.714,34057.0,3.143,0.0\r\nIRL,2022-01-04,19390.286,21302.0,3.143,0.0\r\nIRL,2022-01-05,19565.714,17656.0,5.714,40.0\r\nIRL,2022-01-06,20031.857,23817.0,5.714,0.0\r\nIRL,2022-01-07,20291.286,21926.0,5.714,0.0\r\nIRL,2022-01-08,20697.143,26122.0,5.714,0.0\r\nIRL,2022-01-09,23752.0,21384.0,5.714,0.0\r\nIRL,2022-01-10,18886.714,0.0,5.714,0.0\r\nIRL,2022-01-11,22014.857,43199.0,5.714,0.0\r\nIRL,2022-01-12,22479.571,20909.0,11.857,83.0\r\nIRL,2022-01-13,21777.714,18904.0,11.857,0.0\r\nIRL,2022-01-14,21083.286,17065.0,11.857,0.0\r\nIRL,2022-01-15,19430.857,14555.0,11.857,0.0\r\nIRL,2022-01-16,17912.143,10753.0,11.857,0.0\r\nIRL,2022-01-17,18816.286,6329.0,11.857,0.0\r\nIRL,2022-01-18,13468.857,5767.0,11.857,0.0\r\nIRL,2022-01-19,11459.429,6843.0,7.429,52.0\r\nIRL,2022-01-20,9547.857,5523.0,7.429,0.0\r\nIRL,2022-01-21,8052.429,6597.0,7.429,0.0\r\nIRL,2022-01-22,6928.714,6689.0,7.429,0.0\r\nIRL,2022-01-23,6068.429,4731.0,7.429,0.0\r\nIRL,2022-01-24,5691.714,3692.0,7.429,0.0\r\nIRL,2022-01-25,5440.143,4006.0,7.429,0.0\r\nIRL,2022-01-26,5263.286,5605.0,7.0,49.0\r\nIRL,2022-01-27,5226.429,5265.0,7.0,0.0\r\nIRL,2022-01-28,5013.857,5109.0,7.0,0.0\r\nIRL,2022-01-29,4058.286,0.0,7.0,0.0\r\nIRL,2022-01-30,3382.429,0.0,7.0,0.0\r\nIRL,2022-01-31,4764.0,13363.0,7.0,0.0\r\nIRL,2022-02-01,4792.857,4208.0,7.0,0.0\r\nIRL,2022-02-02,4840.714,5940.0,13.143,92.0\r\nIRL,2022-02-03,4954.429,6061.0,13.143,0.0\r\nIRL,2022-02-04,5181.286,6697.0,13.143,0.0\r\nIRL,2022-02-05,5181.286,0.0,13.143,0.0\r\nIRL,2022-02-06,5181.286,0.0,13.143,0.0\r\nIRL,2022-02-07,5439.143,15168.0,13.143,0.0\r\nIRL,2022-02-08,5378.0,3780.0,13.143,0.0\r\nIRL,2022-02-09,5340.429,5677.0,9.0,63.0\r\nIRL,2022-02-10,5281.571,5649.0,9.0,0.0\r\nIRL,2022-02-11,5270.286,6618.0,9.0,0.0\r\nIRL,2022-02-12,5270.286,0.0,9.0,0.0\r\nIRL,2022-02-13,5270.286,0.0,9.0,0.0\r\nIRL,2022-02-14,4927.0,12765.0,9.0,0.0\r\nIRL,2022-02-15,,,23.143,99.0\r\nIRL,2022-02-16,4328.0,5264.0,15.429,9.0\r\nIRL,2022-02-17,4239.0,5026.0,15.857,3.0\r\nIRL,2022-02-18,3978.571,4795.0,18.0,15.0\r\nIRL,2022-02-19,3978.571,0.0,18.0,0.0\r\nIRL,2022-02-20,3978.571,0.0,18.0,0.0\r\nIRL,2022-02-21,3819.857,11654.0,21.714,26.0\r\nIRL,2022-02-22,4288.429,3280.0,8.857,9.0\r\nIRL,2022-02-23,4125.143,4121.0,8.714,8.0\r\nIRL,2022-02-24,3939.857,3729.0,9.857,11.0\r\nIRL,2022-02-25,3869.714,4304.0,8.286,4.0\r\nIRL,2022-02-26,3869.714,0.0,8.286,0.0\r\nIRL,2022-02-27,3869.714,0.0,8.286,0.0\r\nIRL,2022-02-28,3377.714,8210.0,7.714,22.0\r\nIRL,2022-03-01,3380.286,3298.0,8.0,11.0\r\nIRL,2022-03-02,3269.0,3342.0,8.714,13.0\r\nIRL,2022-03-03,3313.857,4043.0,8.0,6.0\r\nIRL,2022-03-04,3269.714,3995.0,8.0,4.0\r\nIRL,2022-03-05,3269.714,0.0,8.0,0.0\r\nIRL,2022-03-06,3269.714,0.0,8.0,0.0\r\nIRL,2022-03-07,3167.0,7491.0,10.429,39.0\r\nIRL,2022-03-08,3318.0,4355.0,9.0,1.0\r\nIRL,2022-03-09,3083.143,1698.0,8.143,7.0\r\nIRL,2022-03-10,3085.143,4057.0,9.0,12.0\r\nIRL,2022-03-11,3818.0,9125.0,11.429,21.0\r\nIRL,2022-03-12,3818.0,0.0,11.429,0.0\r\nIRL,2022-03-13,3818.0,0.0,11.429,0.0\r\nIRL,2022-03-14,4448.857,11907.0,7.714,13.0\r\nIRL,2022-03-15,4724.143,6282.0,9.286,12.0\r\nIRL,2022-03-16,5260.429,5452.0,8.571,2.0\r\nIRL,2022-03-17,4680.857,0.0,6.857,0.0\r\nIRL,2022-03-18,3377.286,0.0,3.857,0.0\r\nIRL,2022-03-19,3377.286,0.0,3.857,0.0\r\nIRL,2022-03-20,3377.286,0.0,3.857,0.0\r\nIRL,2022-03-21,5206.286,24710.0,5.714,26.0\r\nIRL,2022-03-22,5410.0,7708.0,6.286,16.0\r\nIRL,2022-03-23,5637.429,7044.0,6.714,5.0\r\nIRL,2022-03-24,6904.429,8869.0,7.857,8.0\r\nIRL,2022-03-25,8211.143,9147.0,10.286,17.0\r\nIRL,2022-03-26,8211.143,0.0,10.286,0.0\r\nIRL,2022-03-27,8211.143,0.0,10.286,0.0\r\nIRL,2022-03-28,7528.571,19932.0,8.143,11.0\r\nIRL,2022-03-29,7275.286,5935.0,7.143,9.0\r\nIRL,2022-03-30,7036.143,5370.0,7.857,10.0\r\nIRL,2022-03-31,6518.143,5243.0,8.571,13.0\r\nIRL,2022-04-01,6029.286,5725.0,10.857,33.0\r\nIRL,2022-04-02,6029.286,0.0,10.857,0.0\r\nIRL,2022-04-03,6029.286,0.0,10.857,0.0\r\nIRL,2022-04-04,4499.571,9224.0,11.143,13.0\r\nIRL,2022-04-05,4042.857,2738.0,10.714,6.0\r\nIRL,2022-04-06,3855.571,4059.0,12.0,19.0\r\nIRL,2022-04-07,3556.571,3150.0,12.857,19.0\r\nIRL,2022-04-08,3144.857,2843.0,11.0,20.0\r\nIRL,2022-04-09,3144.857,0.0,11.0,0.0\r\nIRL,2022-04-10,3144.857,0.0,11.0,0.0\r\nIRL,2022-04-11,2670.286,5902.0,12.143,21.0\r\nIRL,2022-04-12,2528.857,1748.0,14.0,19.0\r\nIRL,2022-04-13,2248.429,2096.0,13.571,16.0\r\nIRL,2022-04-14,2073.286,1924.0,12.714,13.0\r\nIRL,2022-04-15,1667.143,0.0,9.857,0.0\r\nIRL,2022-04-16,1667.143,0.0,9.857,0.0\r\nIRL,2022-04-17,1667.143,0.0,9.857,0.0\r\nIRL,2022-04-18,824.0,0.0,6.857,0.0\r\nIRL,2022-04-19,1536.286,6734.0,8.714,32.0\r\nIRL,2022-04-20,1436.143,1395.0,8.857,17.0\r\nIRL,2022-04-21,1362.714,1410.0,8.714,12.0\r\nIRL,2022-04-22,1528.857,1163.0,9.143,3.0\r\nIRL,2022-04-23,1528.857,0.0,9.143,0.0\r\nIRL,2022-04-24,1528.857,0.0,9.143,0.0\r\nIRL,2022-04-25,1996.857,3276.0,12.0,20.0\r\nIRL,2022-04-26,1209.571,1223.0,9.143,12.0\r\nIRL,2022-04-27,1148.857,970.0,10.429,26.0\r\nIRL,2022-04-28,1111.429,1148.0,11.857,22.0\r\nIRL,2022-04-29,1082.286,959.0,13.0,11.0\r\nIRL,2022-04-30,1082.286,0.0,13.0,0.0\r\nIRL,2022-05-01,1082.286,0.0,13.0,0.0\r\nIRL,2022-05-02,614.286,0.0,10.143,0.0\r\nIRL,2022-05-03,751.571,2184.0,9.143,5.0\r\nIRL,2022-05-04,760.286,1031.0,7.0,11.0\r\nIRL,2022-05-05,760.143,1147.0,4.571,5.0\r\nIRL,2022-05-06,750.143,889.0,6.286,23.0\r\nIRL,2022-05-07,750.143,0.0,6.286,0.0\r\nIRL,2022-05-08,750.143,0.0,6.286,0.0\r\nIRL,2022-05-09,1063.286,2192.0,10.857,32.0\r\nIRL,2022-05-10,1147.429,2773.0,10.714,4.0\r\nIRL,2022-05-11,1328.571,2299.0,9.571,3.0\r\nIRL,2022-05-12,1613.857,3144.0,9.714,6.0\r\nIRL,2022-05-13,1869.714,2680.0,10.286,27.0\r\nIRL,2022-05-14,1869.714,0.0,10.286,0.0\r\nIRL,2022-05-15,1869.714,0.0,10.286,0.0\r\nIRL,2022-05-16,1556.571,0.0,5.714,0.0\r\nIRL,2022-05-17,1160.429,0.0,5.143,0.0\r\nIRL,2022-05-18,3172.571,16384.0,10.571,41.0\r\nIRL,2022-05-19,2723.429,0.0,9.714,0.0\r\nIRL,2022-05-20,2340.571,0.0,5.857,0.0\r\nIRL,2022-05-21,2340.571,0.0,5.857,0.0\r\nIRL,2022-05-22,2340.571,0.0,5.857,0.0\r\nIRL,2022-05-23,2340.571,0.0,5.857,0.0\r\nIRL,2022-05-24,2340.571,0.0,5.857,0.0\r\nIRL,2022-05-25,1399.571,9797.0,8.571,60.0\r\nIRL,2022-05-26,1399.571,0.0,8.571,0.0\r\nIRL,2022-05-27,1399.571,0.0,8.571,0.0\r\nIRL,2022-05-28,1399.571,0.0,8.571,0.0\r\nIRL,2022-05-29,1399.571,0.0,8.571,0.0\r\nIRL,2022-05-30,1399.571,0.0,8.571,0.0\r\nIRL,2022-05-31,1399.571,0.0,8.571,0.0\r\nIRL,2022-06-01,619.714,4338.0,11.0,77.0\r\nIRL,2022-06-02,619.714,0.0,11.0,0.0\r\nIRL,2022-06-03,619.714,0.0,11.0,0.0\r\nIRL,2022-06-04,619.714,0.0,11.0,0.0\r\nIRL,2022-06-05,619.714,0.0,11.0,0.0\r\nIRL,2022-06-06,619.714,0.0,11.0,0.0\r\nIRL,2022-06-07,619.714,0.0,11.0,0.0\r\nIRL,2022-06-08,649.857,4549.0,5.0,35.0\r\nIRL,2022-06-09,649.857,0.0,5.0,0.0\r\nIRL,2022-06-10,649.857,0.0,5.0,0.0\r\nIRL,2022-06-11,649.857,0.0,5.0,0.0\r\nIRL,2022-06-12,649.857,0.0,5.0,0.0\r\nIRL,2022-06-13,649.857,0.0,5.0,0.0\r\nIRL,2022-06-14,649.857,0.0,5.0,0.0\r\nIRL,2022-06-15,1109.286,7765.0,3.714,26.0\r\nIRL,2022-06-16,1109.286,0.0,3.714,0.0\r\nIRL,2022-06-17,1109.286,0.0,3.714,0.0\r\nIRL,2022-06-18,1109.286,0.0,3.714,0.0\r\nIRL,2022-06-19,1109.286,0.0,3.714,0.0\r\nIRL,2022-06-20,1109.286,0.0,3.714,0.0\r\nIRL,2022-06-21,1109.286,0.0,3.714,0.0\r\nIRL,2022-06-22,1300.143,9101.0,3.857,27.0\r\nIRL,2022-06-23,1300.143,0.0,3.857,0.0\r\nIRL,2022-06-24,1300.143,0.0,3.857,0.0\r\nIRL,2022-06-25,1300.143,0.0,3.857,0.0\r\nIRL,2022-06-26,1300.143,0.0,3.857,0.0\r\nIRL,2022-06-27,1300.143,0.0,3.857,0.0\r\nIRL,2022-06-28,1300.143,0.0,3.857,0.0\r\nIRL,2022-06-29,1889.857,13229.0,4.286,30.0\r\nIRL,2022-06-30,1889.857,0.0,4.286,0.0\r\nIRL,2022-07-01,1889.857,0.0,4.286,0.0\r\nIRL,2022-07-02,1889.857,0.0,4.286,0.0\r\nIRL,2022-07-03,1889.857,0.0,4.286,0.0\r\nIRL,2022-07-04,1889.857,0.0,4.286,0.0\r\nIRL,2022-07-05,1889.857,0.0,4.286,0.0\r\nIRL,2022-07-06,2002.429,14017.0,5.286,37.0\r\nIRL,2022-07-07,2002.429,0.0,5.286,0.0\r\nIRL,2022-07-08,2002.429,0.0,5.286,0.0\r\nIRL,2022-07-09,2002.429,0.0,5.286,0.0\r\nIRL,2022-07-10,2002.429,0.0,5.286,0.0\r\nIRL,2022-07-11,2002.429,0.0,5.286,0.0\r\nIRL,2022-07-12,2002.429,0.0,5.286,0.0\r\nIRL,2022-07-13,2016.286,14114.0,5.0,35.0\r\nIRL,2022-07-14,2016.286,0.0,5.0,0.0\r\nIRL,2022-07-15,2016.286,0.0,5.0,0.0\r\nIRL,2022-07-16,2016.286,0.0,5.0,0.0\r\nIRL,2022-07-17,2016.286,0.0,5.0,0.0\r\nIRL,2022-07-18,2016.286,0.0,5.0,0.0\r\nIRL,2022-07-19,2016.286,0.0,5.0,0.0\r\nIRL,2022-07-20,1530.571,10714.0,7.0,49.0\r\nIRL,2022-07-21,1530.571,0.0,7.0,0.0\r\nIRL,2022-07-22,1530.571,0.0,7.0,0.0\r\nIRL,2022-07-23,1530.571,0.0,7.0,0.0\r\nIRL,2022-07-24,1530.571,0.0,7.0,0.0\r\nIRL,2022-07-25,1530.571,0.0,7.0,0.0\r\nIRL,2022-07-26,1530.571,0.0,7.0,0.0\r\nIRL,2022-07-27,672.429,4707.0,7.857,55.0\r\nIRL,2022-07-28,672.429,0.0,7.857,0.0\r\nIRL,2022-07-29,672.429,0.0,7.857,0.0\r\nIRL,2022-07-30,672.429,0.0,7.857,0.0\r\nIRL,2022-07-31,672.429,0.0,7.857,0.0\r\nIRL,2022-08-01,672.429,0.0,7.857,0.0\r\nIRL,2022-08-02,672.429,0.0,7.857,0.0\r\nIRL,2022-08-03,491.286,3439.0,3.571,25.0\r\nIRL,2022-08-04,,,,\r\nIRL,2022-08-05,,,,\r\n");

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