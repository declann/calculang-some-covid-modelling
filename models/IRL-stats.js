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
/* harmony default export */ __webpack_exports__["a"] = ("iso_code,continent,location,date,total_cases,new_cases,new_cases_smoothed,total_deaths,new_deaths,new_deaths_smoothed,total_cases_per_million,new_cases_per_million,new_cases_smoothed_per_million,total_deaths_per_million,new_deaths_per_million,new_deaths_smoothed_per_million,reproduction_rate,icu_patients,icu_patients_per_million,hosp_patients,hosp_patients_per_million,weekly_icu_admissions,weekly_icu_admissions_per_million,weekly_hosp_admissions,weekly_hosp_admissions_per_million,new_tests,total_tests,total_tests_per_thousand,new_tests_per_thousand,new_tests_smoothed,new_tests_smoothed_per_thousand,positive_rate,tests_per_case,tests_units,total_vaccinations,people_vaccinated,people_fully_vaccinated,total_boosters,new_vaccinations,new_vaccinations_smoothed,total_vaccinations_per_hundred,people_vaccinated_per_hundred,people_fully_vaccinated_per_hundred,total_boosters_per_hundred,new_vaccinations_smoothed_per_million,new_people_vaccinated_smoothed,new_people_vaccinated_smoothed_per_hundred,stringency_index,population,population_density,median_age,aged_65_older,aged_70_older,gdp_per_capita,extreme_poverty,cardiovasc_death_rate,diabetes_prevalence,female_smokers,male_smokers,handwashing_facilities,hospital_beds_per_thousand,life_expectancy,human_development_index,excess_mortality_cumulative_absolute,excess_mortality_cumulative,excess_mortality,excess_mortality_cumulative_per_million\r\nIRL,Europe,Ireland,2020-02-29,1.0,1.0,,,,,0.201,0.201,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,-428.2,-7.1,-4.43,-85.9338249342151\r\nIRL,Europe,Ireland,2020-03-01,1.0,0.0,,,,,0.201,0.0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-02,1.0,0.0,,,,,0.201,0.0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-03,2.0,1.0,,,,,0.401,0.201,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-04,6.0,4.0,,,,,1.204,0.803,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-05,6.0,0.0,0.857,,,,1.204,0.0,0.172,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-06,18.0,12.0,2.571,,,,3.612,2.408,0.516,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-07,18.0,0.0,2.429,,,,3.612,0.0,0.487,,,,,,,18.0,3.612,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-08,19.0,1.0,2.571,,,,3.813,0.201,0.516,,,,,,,17.0,3.412,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-09,21.0,2.0,2.857,,,,4.214,0.401,0.573,,,,,,,18.0,3.612,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-10,34.0,13.0,4.571,,,,6.823,2.609,0.917,,,,,,,26.0,5.218,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-11,43.0,9.0,5.286,1.0,1.0,0.143,8.63,1.806,1.061,0.201,0.201,0.029,,,,32.0,6.422,,,,,,,,,,,,,,,,,,,,,,,,,,,11.11,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-12,43.0,0.0,5.286,1.0,0.0,0.143,8.63,0.0,1.061,0.201,0.0,0.029,,,,44.0,8.83,,,,,,,,,,,,,,,,,,,,,,,,,,,31.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-13,90.0,47.0,10.286,1.0,0.0,0.143,18.062,9.432,2.064,0.201,0.0,0.029,,,,36.0,7.225,,,,,,,,,,,,,,,,,,,,,,,,,,,42.59,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-14,129.0,39.0,15.857,2.0,1.0,0.286,25.889,7.827,3.182,0.401,0.201,0.057,,,,38.0,7.626,,,,,,,,,,,,,,,,,,,,,,,,,,,42.59,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-15,129.0,0.0,15.714,2.0,0.0,0.286,25.889,0.0,3.154,0.401,0.0,0.057,2.5,,,41.0,8.228,,,,,,,,,,,,,,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-16,169.0,40.0,21.143,2.0,0.0,0.286,33.916,8.027,4.243,0.401,0.0,0.057,2.59,,,55.0,11.038,,,,,,,,,,,,,,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-17,223.0,54.0,27.0,2.0,0.0,0.286,44.753,10.837,5.419,0.401,0.0,0.057,2.69,,,61.0,12.242,,,,,,,,,,,,,,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-18,292.0,69.0,35.571,2.0,0.0,0.143,58.6,13.847,7.139,0.401,0.0,0.029,2.78,,,80.0,16.055,,,,,,6457.0,1.296,,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-19,557.0,265.0,73.429,3.0,1.0,0.286,111.782,53.182,14.736,0.602,0.201,0.057,2.84,,,98.0,19.667,,,,,946.0,7403.0,1.486,0.19,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-20,683.0,126.0,84.714,3.0,0.0,0.286,137.069,25.286,17.001,0.602,0.0,0.057,2.64,,,133.0,26.691,,,,,1469.0,8872.0,1.78,0.295,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-21,785.0,102.0,93.714,3.0,0.0,0.143,157.539,20.47,18.807,0.602,0.0,0.029,2.49,,,151.0,30.304,,,,,1564.0,10436.0,2.094,0.314,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-22,906.0,121.0,111.0,4.0,1.0,0.286,181.822,24.283,22.276,0.803,0.201,0.057,2.38,,,177.0,35.521,,,,,978.0,11414.0,2.291,0.196,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-23,1125.0,219.0,136.571,6.0,2.0,0.571,225.772,43.95,27.408,1.204,0.401,0.115,2.28,,,218.0,43.75,,,,,2581.0,13995.0,2.809,0.518,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-24,1329.0,204.0,158.0,7.0,1.0,0.714,266.712,40.94,31.708,1.405,0.201,0.143,2.17,,,239.0,47.964,,,,,1566.0,15561.0,3.123,0.314,,,,,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-25,1564.0,235.0,181.714,9.0,2.0,1.0,313.873,47.161,36.468,1.806,0.401,0.201,2.05,,,290.0,58.199,,,,,1775.0,17336.0,3.479,0.356,1554.0,0.312,0.1169,8.6,tests performed,,,,,,,,,,,,,,48.15,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-26,1819.0,255.0,180.286,19.0,10.0,2.286,365.048,51.175,36.181,3.813,2.007,0.459,1.92,,,331.0,66.427,,,,,3376.0,20712.0,4.157,0.678,1901.0,0.382,0.0948,10.5,tests performed,,,,,,,,,,,,,,57.41,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-27,2121.0,302.0,205.429,22.0,3.0,2.714,425.655,60.607,41.227,4.415,0.602,0.545,1.87,68.0,13.647,380.0,76.261,,,,,2941.0,23653.0,4.747,0.59,2112.0,0.424,0.0973,10.3,tests performed,,,,,,,,,,,,,,75.93,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-28,2415.0,294.0,232.857,36.0,14.0,4.714,484.657,59.002,46.731,7.225,2.81,0.946,1.81,80.0,16.055,442.0,88.703,,,,,2206.0,25859.0,5.19,0.443,2203.0,0.442,0.1057,9.5,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-29,2615.0,200.0,244.143,46.0,10.0,6.0,524.794,40.137,48.996,9.232,2.007,1.204,1.74,96.0,19.266,513.0,102.952,,,,,1616.0,27475.0,5.514,0.324,2294.0,0.46,0.1064,9.4,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-30,2910.0,295.0,255.0,54.0,8.0,6.857,583.997,59.202,51.175,10.837,1.605,1.376,1.68,107.0,21.473,571.0,114.592,,,,,1397.0,28872.0,5.794,0.28,2125.0,0.426,0.12,8.3,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-03-31,3235.0,325.0,272.286,71.0,17.0,9.143,649.22,65.223,54.644,14.249,3.412,1.835,1.63,120.0,24.082,596.0,119.609,,,,,1928.0,30800.0,6.181,0.387,2177.0,0.437,0.1251,8.0,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,-417.0,-4.68,0.39,-83.6861396486868\r\nIRL,Europe,Ireland,2020-04-01,3447.0,212.0,269.0,85.0,14.0,10.857,691.765,42.545,53.985,17.058,2.81,2.179,1.57,128.0,25.688,656.0,131.65,,,,,2009.0,32809.0,6.584,0.403,2210.0,0.444,0.1217,8.2,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-02,3849.0,402.0,290.0,98.0,13.0,11.286,772.441,80.676,58.199,19.667,2.609,2.265,1.53,132.0,26.491,655.0,131.449,,,,,1975.0,34784.0,6.981,0.396,2010.0,0.403,0.1443,6.9,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-03,4273.0,424.0,307.429,120.0,22.0,14.0,857.532,85.091,61.697,24.082,4.415,2.81,1.53,137.0,27.494,704.0,141.283,,,,,1857.0,36641.0,7.353,0.373,1855.0,0.372,0.1657,6.0,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-04,4604.0,331.0,312.714,137.0,17.0,14.429,923.959,66.427,62.757,27.494,3.412,2.896,1.54,140.0,28.096,738.0,148.106,,,,,1849.0,38490.0,7.724,0.371,1804.0,0.362,0.1733,5.8,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-05,4994.0,390.0,339.857,158.0,21.0,16.0,1002.227,78.268,68.205,31.708,4.214,3.211,1.55,139.0,27.895,702.0,140.882,,,,,2831.0,41321.0,8.293,0.568,1978.0,0.397,0.1718,5.8,tests performed,,,,,,,,,,,,,,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-06,5364.0,370.0,350.571,174.0,16.0,17.143,1076.481,74.254,70.355,34.919,3.211,3.44,1.55,144.0,28.899,829.0,166.369,,,,,6117.0,47438.0,9.52,1.228,2652.0,0.532,0.1322,7.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-07,5709.0,345.0,353.429,210.0,36.0,19.857,1145.717,69.237,70.928,42.144,7.225,3.985,1.55,143.0,28.698,828.0,166.168,,,,,1853.0,49291.0,9.892,0.372,2642.0,0.53,0.1338,7.5,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-08,6074.0,365.0,375.286,235.0,25.0,21.429,1218.968,73.25,75.315,47.161,5.017,4.3,1.58,146.0,29.3,837.0,167.974,,,,,3728.0,53019.0,10.64,0.748,2887.0,0.579,0.13,7.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-09,6574.0,500.0,389.286,263.0,28.0,23.571,1319.311,100.343,78.124,52.78,5.619,4.73,1.62,151.0,30.304,838.0,168.175,,,,,5487.0,58506.0,11.741,1.101,3389.0,0.68,0.1149,8.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-10,8089.0,1515.0,545.143,287.0,24.0,23.857,1623.351,304.04,109.403,57.597,4.816,4.788,1.7,155.0,31.106,825.0,165.566,,,,,6959.0,65465.0,13.138,1.397,4118.0,0.826,0.1324,7.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-11,8928.0,839.0,617.714,320.0,33.0,26.143,1791.726,168.376,123.967,64.22,6.623,5.247,1.64,155.0,31.106,856.0,171.787,,,,,6990.0,72455.0,14.541,1.403,4852.0,0.974,0.1273,7.9,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-12,9655.0,727.0,665.857,334.0,14.0,25.143,1937.625,145.899,133.628,67.029,2.81,5.046,1.58,148.0,29.702,853.0,171.185,47.0,9.467,494.0,99.105,5722.0,78177.0,15.689,1.148,5265.0,1.057,0.1265,7.9,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-13,10647.0,992.0,754.714,365.0,31.0,27.286,2136.706,199.081,151.461,73.25,6.221,5.476,1.5,143.0,28.698,868.0,174.196,,,,,8427.0,86604.0,17.38,1.691,5595.0,1.123,0.1349,7.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-14,11479.0,832.0,824.286,406.0,41.0,28.0,2303.677,166.971,165.423,81.479,8.228,5.619,1.41,149.0,29.902,868.0,174.196,,,,,4275.0,90879.0,18.238,0.858,5941.0,1.192,0.1387,7.2,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-15,12547.0,1068.0,924.714,444.0,38.0,29.857,2518.01,214.333,185.577,89.105,7.626,5.992,1.32,140.0,28.096,881.0,176.805,,,,,3036.0,93915.0,18.847,0.609,5842.0,1.172,0.1583,6.3,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-16,13271.0,724.0,956.714,486.0,42.0,31.857,2663.306,145.297,191.999,97.533,8.429,6.393,1.2,142.0,28.497,856.0,171.787,,,,,3644.0,97559.0,19.579,0.731,5579.0,1.12,0.1715,5.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-17,13980.0,709.0,841.571,530.0,44.0,34.714,2805.593,142.287,168.892,106.364,8.83,6.967,1.13,137.0,27.494,852.0,170.985,,,,,4311.0,101870.0,20.444,0.865,5201.0,1.044,0.1618,6.2,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-18,14758.0,778.0,832.857,571.0,41.0,35.857,2961.727,156.134,167.143,114.592,8.228,7.196,1.09,134.0,26.892,811.0,162.756,,,,,2253.0,104123.0,20.896,0.452,4524.0,0.908,0.1841,5.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-19,15251.0,493.0,799.429,610.0,39.0,39.429,3060.665,98.938,160.434,122.419,7.827,7.913,1.04,133.0,26.691,816.0,163.76,59.0,11.885,349.0,70.099,2313.0,106436.0,21.36,0.464,4037.0,0.81,0.198,5.0,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-20,15652.0,401.0,715.0,687.0,77.0,46.0,3141.14,80.475,143.491,137.871,15.453,9.232,0.99,139.0,27.895,820.0,164.563,,,,,1626.0,108062.0,21.687,0.326,3065.0,0.615,0.2333,4.3,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-21,16040.0,388.0,651.571,730.0,43.0,46.286,3219.006,77.866,130.761,146.501,8.63,9.289,0.95,133.0,26.691,774.0,155.331,,,,,3757.0,111819.0,22.441,0.754,2991.0,0.6,0.2178,4.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-22,16671.0,631.0,589.143,769.0,39.0,46.429,3345.639,126.633,118.233,154.328,7.827,9.318,0.93,131.0,26.29,778.0,156.134,,,,,5363.0,117182.0,23.517,1.076,3324.0,0.667,0.1772,5.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-23,17607.0,936.0,619.429,794.0,25.0,44.0,3533.482,187.842,124.311,159.345,5.017,8.83,0.9,123.0,24.684,742.0,148.909,,,,,4871.0,122053.0,24.494,0.978,3499.0,0.702,0.177,5.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-24,18184.0,577.0,600.571,1014.0,220.0,69.143,3649.278,115.796,120.526,203.496,44.151,13.876,0.87,118.0,23.681,745.0,149.511,,,,,5580.0,127633.0,25.614,1.12,3680.0,0.739,0.1632,6.1,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-25,18561.0,377.0,543.286,1063.0,49.0,70.286,3724.936,75.659,109.03,213.329,9.834,14.105,0.85,123.0,24.684,736.0,147.705,,,,,5632.0,133265.0,26.744,1.13,4163.0,0.835,0.1305,7.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-26,19262.0,701.0,573.0,1087.0,24.0,68.143,3865.617,140.681,114.993,218.146,4.816,13.675,0.83,120.0,24.082,758.0,152.12,45.0,9.064,306.0,61.437,8598.0,141863.0,28.47,1.725,5061.0,1.016,0.1132,8.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-27,19648.0,386.0,570.857,1102.0,15.0,59.286,3943.082,77.465,114.563,221.156,3.01,11.898,0.79,117.0,23.48,771.0,154.729,,,,,5100.0,146963.0,29.493,1.023,5557.0,1.115,0.1027,9.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-28,19877.0,229.0,548.143,1159.0,57.0,61.286,3989.039,45.957,110.005,232.595,11.439,12.299,0.74,113.0,22.678,753.0,151.117,,,,,6306.0,153269.0,30.759,1.266,5921.0,1.188,0.0926,10.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-29,20253.0,376.0,511.714,1190.0,31.0,60.143,4064.497,75.458,102.694,238.817,6.221,12.07,0.71,103.0,20.671,760.0,152.522,,,,,8159.0,161428.0,32.396,1.637,6321.0,1.269,0.081,12.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-04-30,20612.0,359.0,429.286,1232.0,42.0,62.571,4136.544,72.046,86.152,247.245,8.429,12.557,0.67,106.0,21.273,736.0,147.705,,,,,8218.0,169646.0,34.046,1.649,6799.0,1.364,0.0631,15.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,488.0,4.25,35.16,97.9348588694464\r\nIRL,Europe,Ireland,2020-05-01,20833.0,221.0,378.429,1265.0,33.0,35.857,4180.895,44.352,75.945,253.868,6.623,7.196,0.66,99.0,19.868,740.0,148.508,,,,,7451.0,177097.0,35.541,1.495,7066.0,1.418,0.0536,18.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-02,21176.0,343.0,373.571,1286.0,21.0,31.857,4249.731,68.835,74.971,258.082,4.214,6.393,0.67,99.0,19.868,705.0,141.484,,,,,12076.0,189173.0,37.964,2.423,7987.0,1.603,0.0468,21.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-03,21506.0,330.0,320.571,1303.0,17.0,30.857,4315.957,66.226,64.334,261.494,3.412,6.193,0.68,93.0,18.664,684.0,137.269,,,262.0,52.574,9799.0,198972.0,39.931,1.967,8158.0,1.637,0.0393,25.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-04,21772.0,266.0,303.429,1319.0,16.0,31.0,4369.34,53.383,60.894,264.705,3.211,6.221,0.67,91.0,18.262,672.0,134.861,,,,,8617.0,207589.0,41.66,1.729,8661.0,1.738,0.035,28.5,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-05,21983.0,211.0,300.857,1339.0,20.0,25.714,4411.684,42.345,60.378,268.719,4.014,5.161,0.65,90.0,18.062,680.0,136.467,,,,,7512.0,215101.0,43.168,1.508,8833.0,1.773,0.0341,29.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-06,22248.0,265.0,285.0,1375.0,36.0,26.429,4464.866,53.182,57.196,275.944,7.225,5.304,0.63,82.0,16.456,657.0,131.851,,,,,7815.0,222916.0,44.736,1.568,8784.0,1.763,0.0324,30.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-07,22385.0,137.0,253.286,1403.0,28.0,24.429,4492.36,27.494,50.831,281.563,5.619,4.902,0.6,76.0,15.252,614.0,123.221,,,,,5703.0,228619.0,45.881,1.145,8425.0,1.691,0.0301,33.3,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-08,22541.0,156.0,244.0,1429.0,26.0,23.429,4523.667,31.307,48.967,286.781,5.218,4.702,0.61,72.0,14.449,585.0,117.401,,,,,4973.0,233592.0,46.879,0.998,8071.0,1.62,0.0302,33.1,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-09,22760.0,219.0,226.286,1446.0,17.0,22.857,4567.618,43.95,45.412,290.192,3.412,4.587,0.63,72.0,14.449,539.0,108.17,,,,,7657.0,241249.0,48.415,1.537,7439.0,1.493,0.0304,32.9,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-10,22996.0,236.0,212.857,1458.0,12.0,22.143,4614.98,47.362,42.717,292.6,2.408,4.444,0.65,72.0,14.449,539.0,108.17,,,163.0,32.632,6517.0,247766.0,49.723,1.308,6971.0,1.399,0.0305,32.7,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-11,23135.0,139.0,194.714,1467.0,9.0,21.143,4642.875,27.895,39.076,294.407,1.806,4.243,0.65,69.0,13.847,555.0,111.381,,,,,5374.0,253140.0,50.802,1.078,6507.0,1.306,0.0299,33.4,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-12,23242.0,107.0,179.857,1488.0,21.0,21.286,4664.348,21.473,36.095,298.621,4.214,4.272,0.65,67.0,13.446,512.0,102.751,,,,,6138.0,259278.0,52.034,1.232,6311.0,1.267,0.0285,35.1,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-13,23401.0,159.0,164.714,1497.0,9.0,17.429,4696.257,31.909,33.056,300.427,1.806,3.498,0.66,62.0,12.443,486.0,97.533,,,,,4674.0,263952.0,52.972,0.938,5862.0,1.176,0.0281,35.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-14,23827.0,426.0,206.0,1506.0,9.0,14.714,4781.75,85.492,41.341,302.233,1.806,2.953,0.66,59.0,11.84,459.0,92.115,,,,,6210.0,270162.0,54.218,1.246,5935.0,1.191,0.0347,28.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-15,23956.0,129.0,202.143,1518.0,12.0,12.714,4807.638,25.889,40.567,304.642,2.408,2.552,0.62,56.0,11.238,419.0,84.088,,,,,5699.0,275861.0,55.361,1.144,6038.0,1.212,0.0335,29.9,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-16,24048.0,92.0,184.0,1533.0,15.0,12.429,4826.101,18.463,36.926,307.652,3.01,2.494,0.58,54.0,10.837,386.0,77.465,,,,,6334.0,282195.0,56.633,1.271,5849.0,1.174,0.0315,31.8,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-17,24112.0,64.0,159.429,1543.0,10.0,12.143,4838.945,12.844,31.995,309.659,2.007,2.437,0.56,51.0,10.235,395.0,79.271,19.0,3.827,109.0,21.956,6457.0,288652.0,57.928,1.296,5841.0,1.172,0.0273,36.6,tests performed,,,,,,,,,,,,,,90.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-18,24200.0,88.0,152.143,1547.0,4.0,11.429,4856.606,17.66,30.533,310.462,0.803,2.294,0.55,55.0,11.038,386.0,77.465,,,,,3964.0,292616.0,58.724,0.796,5639.0,1.132,0.027,37.1,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-19,24251.0,51.0,144.143,1561.0,14.0,10.429,4866.841,10.235,28.927,313.271,2.81,2.093,0.53,54.0,10.837,368.0,73.853,,,,,3278.0,295894.0,59.382,0.658,5231.0,1.05,0.0276,36.3,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-20,24315.0,64.0,130.571,1571.0,10.0,10.571,4879.685,12.844,26.204,315.278,2.007,2.122,0.52,49.0,9.834,367.0,73.652,,,,,4764.0,300658.0,60.338,0.956,5244.0,1.052,0.0249,40.2,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-21,24391.0,76.0,80.571,1583.0,12.0,11.0,4894.937,15.252,16.17,317.686,2.408,2.208,0.52,52.0,10.436,315.0,63.216,,,,,5274.0,305932.0,61.396,1.058,5110.0,1.026,0.0158,63.4,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-22,24506.0,115.0,78.571,1592.0,9.0,10.571,4918.016,23.079,15.768,319.492,1.806,2.122,0.53,49.0,9.834,316.0,63.417,,,,,5373.0,311305.0,62.475,1.078,5063.0,1.016,0.0155,64.4,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-23,24582.0,76.0,76.286,1604.0,12.0,10.143,4933.268,15.252,15.309,321.901,2.408,2.036,0.53,51.0,10.235,303.0,60.808,,,,,4276.0,315581.0,63.333,0.858,4769.0,0.957,0.016,62.5,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-24,24639.0,57.0,75.286,1608.0,4.0,9.286,4944.707,11.439,15.109,322.703,0.803,1.864,0.54,49.0,9.834,304.0,61.009,10.0,2.014,97.0,19.539,3509.0,319090.0,64.037,0.704,4348.0,0.873,0.0173,57.8,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-25,24698.0,59.0,71.143,1606.0,-2.0,8.429,4956.547,11.84,14.277,322.302,-0.401,1.691,0.54,48.0,9.633,305.0,61.209,,,,,3529.0,322619.0,64.745,0.708,4286.0,0.86,0.0166,60.2,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-26,24735.0,37.0,69.143,1615.0,9.0,7.714,4963.973,7.425,13.876,324.108,1.806,1.548,0.54,48.0,9.633,287.0,57.597,,,,,3515.0,326134.0,65.451,0.705,4320.0,0.867,0.016,62.5,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-27,24803.0,68.0,69.714,1631.0,16.0,8.571,4977.619,13.647,13.991,327.319,3.211,1.72,0.53,48.0,9.633,263.0,52.78,,,,,3437.0,329571.0,66.14,0.69,4130.0,0.829,0.0169,59.2,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-28,24841.0,38.0,64.286,1639.0,8.0,8.0,4985.246,7.626,12.901,328.925,1.605,1.605,0.52,45.0,9.031,231.0,46.359,,,,,3811.0,333382.0,66.905,0.765,3921.0,0.787,0.0164,61.0,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-29,24876.0,35.0,52.857,1645.0,6.0,7.571,4992.27,7.024,10.608,330.129,1.204,1.519,0.53,42.0,8.429,197.0,39.535,,,,,4364.0,337746.0,67.781,0.876,3777.0,0.758,0.014,71.5,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-30,24929.0,53.0,49.571,1651.0,6.0,6.714,5002.906,10.636,9.948,331.333,1.204,1.347,0.55,36.0,7.225,173.0,34.719,,,,,3423.0,341169.0,68.468,0.687,3655.0,0.734,0.0136,73.7,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-05-31,24990.0,61.0,50.143,1652.0,1.0,6.286,5015.148,12.242,10.063,331.534,0.201,1.261,0.57,36.0,7.225,184.0,36.926,15.0,3.021,58.0,11.683,3474.0,344643.0,69.165,0.697,3650.0,0.733,0.0137,72.8,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,577.8,4.12,3.51,115.956478390914\r\nIRL,Europe,Ireland,2020-06-01,25062.0,72.0,52.0,1650.0,-2.0,6.286,5029.597,14.449,10.436,331.132,-0.401,1.261,0.56,37.0,7.425,176.0,35.321,,,,,2285.0,346928.0,69.624,0.459,3473.0,0.697,0.015,66.8,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-02,25066.0,4.0,47.286,1658.0,8.0,6.143,5030.4,0.803,9.49,332.738,1.605,1.233,0.53,36.0,7.225,194.0,38.933,,,,,1827.0,348755.0,69.99,0.367,3232.0,0.649,0.0146,68.4,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-03,25111.0,45.0,44.0,1659.0,1.0,4.0,5039.431,9.031,8.83,332.938,0.201,0.803,0.51,37.0,7.425,166.0,33.314,,,,,2486.0,351241.0,70.489,0.499,3096.0,0.621,0.0142,70.4,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-04,25142.0,31.0,43.0,1664.0,5.0,3.571,5045.652,6.221,8.63,333.942,1.003,0.717,0.48,36.0,7.225,154.0,30.906,,,,,3099.0,354340.0,71.111,0.622,2994.0,0.601,0.0144,69.6,tests performed,,,,,,,,,,,,,,83.33,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-05,25163.0,21.0,41.0,1670.0,6.0,3.571,5049.867,4.214,8.228,335.146,1.204,0.717,0.46,37.0,7.425,139.0,27.895,,,,,3234.0,357574.0,71.76,0.649,2833.0,0.569,0.0145,69.1,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-06,25183.0,20.0,36.286,1678.0,8.0,3.857,5053.88,4.014,7.282,336.751,1.605,0.774,0.45,36.0,7.225,122.0,24.484,,,,,3106.0,360680.0,72.383,0.623,2787.0,0.559,0.013,76.8,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-07,25201.0,18.0,30.143,1679.0,1.0,3.857,5057.493,3.612,6.049,336.952,0.201,0.774,0.46,34.0,6.823,125.0,25.086,3.0,0.604,25.0,5.036,2828.0,363508.0,72.951,0.568,2695.0,0.541,0.0112,89.4,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-08,25207.0,6.0,20.714,1683.0,4.0,4.714,5058.697,1.204,4.157,337.755,0.803,0.946,0.46,34.0,6.823,122.0,24.484,,,,,1960.0,365468.0,73.344,0.393,2649.0,0.532,0.0078,127.9,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-09,25215.0,8.0,21.286,1691.0,8.0,4.714,5060.302,1.605,4.272,339.36,1.605,0.946,0.47,35.0,7.024,110.0,22.075,,,,,2355.0,367823.0,73.817,0.473,2724.0,0.547,0.0078,128.0,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-10,25231.0,16.0,17.143,1695.0,4.0,5.143,5063.513,3.211,3.44,340.163,0.803,1.032,0.49,29.0,5.82,102.0,20.47,,,,,2675.0,370498.0,74.354,0.537,2751.0,0.552,0.0062,160.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-11,25238.0,7.0,13.714,1703.0,8.0,5.571,5064.918,1.405,2.752,341.769,1.605,1.118,0.5,27.0,5.419,89.0,17.861,,,,,4240.0,374738.0,75.205,0.851,2914.0,0.585,0.0047,212.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-12,25250.0,12.0,12.429,1705.0,2.0,5.0,5067.326,2.408,2.494,342.17,0.401,1.003,0.54,27.0,5.419,79.0,15.854,,,,,3009.0,377747.0,75.809,0.604,2882.0,0.578,0.0043,231.9,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-13,25295.0,45.0,16.0,1705.0,0.0,3.857,5076.357,9.031,3.211,342.17,0.0,0.774,0.59,,,76.0,15.252,,,,,2712.0,380459.0,76.353,0.544,2826.0,0.567,0.0057,176.6,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-14,25303.0,8.0,14.571,1706.0,1.0,3.857,5077.963,1.605,2.924,342.371,0.201,0.774,0.59,27.0,5.419,81.0,16.256,,,30.0,6.043,2512.0,382971.0,76.857,0.504,2780.0,0.558,0.0052,190.8,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-15,25321.0,18.0,16.286,1706.0,0.0,3.286,5081.575,3.612,3.268,342.371,0.0,0.659,0.6,24.0,4.816,78.0,15.654,,,,,1714.0,384685.0,77.201,0.344,2745.0,0.551,0.0059,168.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-16,25334.0,13.0,17.0,1709.0,3.0,2.571,5084.184,2.609,3.412,342.973,0.602,0.516,0.59,20.0,4.014,69.0,13.847,,,,,2112.0,386797.0,77.625,0.424,2711.0,0.544,0.0063,159.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-17,25341.0,7.0,15.714,1710.0,1.0,2.143,5085.589,1.405,3.154,343.173,0.201,0.43,0.57,21.0,4.214,60.0,12.041,,,,,3420.0,390217.0,78.311,0.686,2817.0,0.565,0.0056,179.3,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-18,25355.0,14.0,16.714,1714.0,4.0,1.571,5088.398,2.81,3.354,343.976,0.803,0.315,0.57,21.0,4.214,48.0,9.633,,,,,3359.0,393576.0,78.985,0.674,2691.0,0.54,0.0062,161.0,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-19,25368.0,13.0,16.857,1714.0,0.0,1.286,5091.007,2.609,3.383,343.976,0.0,0.258,0.57,16.0,3.211,44.0,8.83,,,,,3161.0,396737.0,79.62,0.634,2713.0,0.544,0.0062,160.9,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-20,25374.0,6.0,11.286,1715.0,1.0,1.429,5092.211,1.204,2.265,344.177,0.201,0.287,0.56,17.0,3.412,41.0,8.228,,,,,2724.0,399461.0,80.166,0.547,2715.0,0.545,0.0042,240.6,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-21,25379.0,5.0,10.857,1715.0,0.0,1.286,5093.215,1.003,2.179,344.177,0.0,0.258,0.59,16.0,3.211,41.0,8.228,14.0,2.82,13.0,2.619,2159.0,401620.0,80.6,0.433,2664.0,0.535,0.0041,245.4,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-22,25383.0,4.0,8.857,1717.0,2.0,1.571,5094.017,0.803,1.778,344.578,0.401,0.315,0.62,16.0,3.211,43.0,8.63,,,,,1498.0,403118.0,80.9,0.301,2633.0,0.528,0.0034,297.3,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-23,25391.0,8.0,8.143,1720.0,3.0,1.571,5095.623,1.605,1.634,345.18,0.602,0.315,0.67,11.0,2.208,40.0,8.027,,,,,2116.0,405234.0,81.325,0.425,2634.0,0.529,0.0031,323.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-24,25396.0,5.0,7.857,1726.0,6.0,2.286,5096.626,1.003,1.577,346.384,1.204,0.459,0.72,9.0,1.806,37.0,7.425,,,,,3252.0,408486.0,81.977,0.653,2610.0,0.524,0.003,332.2,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-25,25405.0,9.0,7.143,1727.0,1.0,1.857,5098.433,1.806,1.433,346.585,0.201,0.373,0.77,12.0,2.408,30.0,6.021,,,,,2983.0,411469.0,82.576,0.599,2556.0,0.513,0.0028,357.8,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-26,25414.0,9.0,6.571,1730.0,3.0,2.286,5100.239,1.806,1.319,347.187,0.602,0.459,0.84,12.0,2.408,26.0,5.218,,,,,3689.0,415158.0,83.316,0.74,2632.0,0.528,0.0025,400.5,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-27,25437.0,23.0,9.0,1734.0,4.0,2.714,5104.855,4.616,1.806,347.99,0.803,0.545,0.91,11.0,2.208,22.0,4.415,,,,,4007.0,419165.0,84.121,0.804,2815.0,0.565,0.0032,312.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-28,25439.0,2.0,8.571,1735.0,1.0,2.857,5105.256,0.401,1.72,348.191,0.201,0.573,0.93,11.0,2.208,20.0,4.014,4.0,0.806,13.0,2.619,2724.0,421889.0,84.667,0.547,2896.0,0.581,0.003,337.9,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-29,25462.0,23.0,11.286,1735.0,0.0,2.571,5109.872,4.616,2.265,348.191,0.0,0.516,0.98,12.0,2.408,22.0,4.415,,,,,3340.0,425229.0,85.338,0.67,3159.0,0.634,0.0036,279.9,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-06-30,25473.0,11.0,11.714,1736.0,1.0,2.286,5112.079,2.208,2.351,348.391,0.201,0.459,0.96,13.0,2.609,21.0,4.214,,,,,4591.0,429820.0,86.259,0.921,3512.0,0.705,0.0033,299.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,422.2,2.58,-6.62,84.7297078169678\r\nIRL,Europe,Ireland,2020-07-01,25477.0,4.0,11.571,1738.0,2.0,1.714,5112.882,0.803,2.322,348.793,0.401,0.344,0.95,12.0,2.408,21.0,4.214,,,,,4551.0,434371.0,87.172,0.913,3698.0,0.742,0.0031,319.6,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-02,25489.0,12.0,12.0,1738.0,0.0,1.571,5115.29,2.408,2.408,348.793,0.0,0.315,0.96,10.0,2.007,18.0,3.612,,,,,3792.0,438163.0,87.933,0.761,3813.0,0.765,0.0031,317.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-03,25498.0,9.0,12.0,1740.0,2.0,1.429,5117.096,1.806,2.408,349.194,0.401,0.287,0.97,10.0,2.007,20.0,4.014,,,,,8049.0,446212.0,89.549,1.615,4436.0,0.89,0.0027,369.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-04,25509.0,11.0,10.286,1741.0,1.0,1.0,5119.304,2.208,2.064,349.395,0.201,0.201,1.0,11.0,2.208,22.0,4.415,,,,,8312.0,454524.0,91.217,1.668,5051.0,1.014,0.002,491.1,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-05,25527.0,18.0,12.571,1741.0,0.0,0.857,5122.916,3.612,2.523,349.395,0.0,0.172,1.05,10.0,2.007,20.0,4.014,6.0,1.209,9.0,1.813,7000.0,461524.0,92.621,1.405,5662.0,1.136,0.0022,450.4,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-06,25531.0,4.0,9.857,1741.0,0.0,0.857,5123.719,0.803,1.978,349.395,0.0,0.172,1.06,10.0,2.007,19.0,3.813,,,,,6529.0,468053.0,93.932,1.31,6118.0,1.228,0.0016,620.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-07,25538.0,7.0,9.286,1742.0,1.0,0.857,5125.124,1.405,1.864,349.595,0.201,0.172,1.09,9.0,1.806,20.0,4.014,,,,,6161.0,474214.0,95.168,1.236,6342.0,1.273,0.0015,683.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-08,25542.0,4.0,9.286,1738.0,-4.0,0.0,5125.927,0.803,1.864,348.793,-0.803,0.0,1.16,9.0,1.806,12.0,2.408,,,,,4361.0,478575.0,96.043,0.875,6315.0,1.267,0.0015,680.1,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-09,25565.0,23.0,10.857,1743.0,5.0,0.714,5130.542,4.616,2.179,349.796,1.003,0.143,1.26,9.0,1.806,13.0,2.609,,,,,3945.0,482520.0,96.835,0.792,6337.0,1.272,0.0017,583.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-10,25589.0,24.0,13.0,1744.0,1.0,0.571,5135.359,4.816,2.609,349.997,0.201,0.115,1.29,9.0,1.806,11.0,2.208,,,,,9330.0,491850.0,98.708,1.872,6520.0,1.308,0.002,501.5,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-11,25611.0,22.0,14.571,1746.0,2.0,0.714,5139.774,4.415,2.924,350.398,0.401,0.143,1.29,10.0,2.007,13.0,2.609,,,,,8929.0,500779.0,100.499,1.792,6608.0,1.326,0.0022,453.5,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-12,25628.0,17.0,14.429,1746.0,0.0,0.714,5143.186,3.412,2.896,350.398,0.0,0.143,1.29,11.0,2.208,12.0,2.408,1.0,0.201,4.0,0.806,8717.0,509496.0,102.249,1.749,6853.0,1.375,0.0021,474.9,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-13,25638.0,10.0,15.286,1746.0,0.0,0.714,5145.192,2.007,3.068,350.398,0.0,0.143,1.28,10.0,2.007,11.0,2.208,,,,,7664.0,517160.0,103.787,1.538,7015.0,1.408,0.0022,458.9,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-14,25670.0,32.0,18.857,1746.0,0.0,0.571,5151.614,6.422,3.784,350.398,0.0,0.115,1.29,10.0,2.007,13.0,2.609,,,,,6400.0,523560.0,105.071,1.284,7049.0,1.415,0.0027,373.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-15,25683.0,13.0,20.143,1748.0,2.0,1.429,5154.223,2.609,4.042,350.799,0.401,0.287,1.25,8.0,1.605,12.0,2.408,,,,,4387.0,527947.0,105.952,0.88,7053.0,1.415,0.0029,350.1,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-16,25698.0,15.0,19.0,1749.0,1.0,0.857,5157.234,3.01,3.813,351.0,0.201,0.172,1.21,8.0,1.605,12.0,2.408,,,,,4316.0,532263.0,106.818,0.866,7106.0,1.426,0.0027,374.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-17,25730.0,32.0,20.143,1752.0,3.0,1.143,5163.656,6.422,4.042,351.602,0.602,0.229,1.21,8.0,1.605,12.0,2.408,,,,,9512.0,541775.0,108.727,1.909,7132.0,1.431,0.0028,354.1,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-18,25750.0,20.0,19.857,1753.0,1.0,1.0,5167.669,4.014,3.985,351.803,0.201,0.201,1.17,8.0,1.605,10.0,2.007,,,,,9243.0,551018.0,110.582,1.855,7177.0,1.44,0.0028,361.4,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-19,25760.0,10.0,18.857,1753.0,0.0,1.0,5169.676,2.007,3.784,351.803,0.0,0.201,1.16,9.0,1.806,10.0,2.007,2.0,0.403,7.0,1.41,8630.0,559648.0,112.314,1.732,7165.0,1.438,0.0026,380.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-20,25766.0,6.0,18.286,1753.0,0.0,1.0,5170.88,1.204,3.67,351.803,0.0,0.201,1.17,8.0,1.605,12.0,2.408,,,,,8415.0,568063.0,114.002,1.689,7272.0,1.459,0.0025,397.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-21,25802.0,36.0,18.857,1753.0,0.0,1.0,5178.105,7.225,3.784,351.803,0.0,0.201,1.2,7.0,1.405,13.0,2.609,,,,,6674.0,574737.0,115.342,1.339,7311.0,1.467,0.0026,387.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-22,25819.0,17.0,19.429,1754.0,1.0,0.857,5181.517,3.412,3.899,352.004,0.201,0.172,1.18,6.0,1.204,14.0,2.81,,,,,4619.0,579356.0,116.269,0.927,7344.0,1.474,0.0026,378.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-23,25826.0,7.0,18.286,1763.0,9.0,2.0,5182.921,1.405,3.67,353.81,1.806,0.401,1.16,6.0,1.204,13.0,2.609,,,,,4067.0,583423.0,117.085,0.816,7309.0,1.467,0.0025,399.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-24,25845.0,19.0,16.429,1763.0,0.0,1.571,5186.734,3.813,3.297,353.81,0.0,0.315,1.2,5.0,1.003,11.0,2.208,,,,,8980.0,592403.0,118.887,1.802,7233.0,1.452,0.0023,440.3,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-25,25869.0,24.0,17.0,1764.0,1.0,1.571,5191.551,4.816,3.412,354.01,0.201,0.315,1.25,5.0,1.003,10.0,2.007,,,,,8888.0,601291.0,120.671,1.784,7182.0,1.441,0.0024,422.5,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-26,25881.0,12.0,17.286,1764.0,0.0,1.571,5193.959,2.408,3.469,354.01,0.0,0.315,1.31,5.0,1.003,11.0,2.208,3.0,0.604,14.0,2.82,8016.0,609307.0,122.279,1.609,7094.0,1.424,0.0024,410.4,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-27,25892.0,11.0,18.0,1764.0,0.0,1.571,5196.167,2.208,3.612,354.01,0.0,0.315,1.4,6.0,1.204,11.0,2.208,,,,,5804.0,615111.0,123.444,1.165,6721.0,1.349,0.0027,373.4,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-28,25929.0,37.0,18.143,1764.0,0.0,1.571,5203.592,7.425,3.641,354.01,0.0,0.315,1.5,6.0,1.204,10.0,2.007,,,,,4965.0,620076.0,124.441,0.996,6477.0,1.3,0.0028,357.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-29,25942.0,13.0,17.571,1764.0,0.0,1.429,5206.201,2.609,3.526,354.01,0.0,0.287,1.58,4.0,0.803,10.0,2.007,,,,,4740.0,624816.0,125.392,0.951,6494.0,1.303,0.0027,369.6,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-30,26027.0,85.0,28.714,1763.0,-1.0,0.0,5223.259,17.058,5.763,353.81,-0.201,0.0,1.69,4.0,0.803,6.0,1.204,,,,,4383.0,629199.0,126.272,0.88,6539.0,1.312,0.0044,227.7,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-07-31,26065.0,38.0,31.429,1763.0,0.0,0.0,5230.885,7.626,6.307,353.81,0.0,0.0,1.64,4.0,0.803,6.0,1.204,,,,,3856.0,633055.0,127.045,0.774,5807.0,1.165,0.0054,184.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,345.6,1.85,-3.28,69.357145953444\r\nIRL,Europe,Ireland,2020-08-01,26109.0,44.0,34.286,1763.0,0.0,-0.143,5239.716,8.83,6.881,353.81,0.0,-0.029,1.61,4.0,0.803,8.0,1.605,,,,,3306.0,636361.0,127.709,0.663,5010.0,1.005,0.0068,146.1,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-02,26162.0,53.0,40.143,1763.0,0.0,-0.143,5250.352,10.636,8.056,353.81,0.0,-0.029,1.62,4.0,0.803,10.0,2.007,1.0,0.201,8.0,1.611,3131.0,639492.0,128.337,0.628,4312.0,0.865,0.0093,107.4,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-03,26208.0,46.0,45.143,1763.0,0.0,-0.143,5259.584,9.232,9.06,353.81,0.0,-0.029,1.6,5.0,1.003,10.0,2.007,,,,,3041.0,642533.0,128.947,0.61,3917.0,0.786,0.0115,86.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-04,26253.0,45.0,46.286,1763.0,0.0,-0.143,5268.614,9.031,9.289,353.81,0.0,-0.029,1.58,5.0,1.003,14.0,2.81,,,,,1991.0,644524.0,129.347,0.4,3493.0,0.701,0.0133,75.5,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-05,26303.0,50.0,51.571,1763.0,0.0,-0.143,5278.649,10.034,10.35,353.81,0.0,-0.029,1.6,6.0,1.204,17.0,3.412,,,,,3761.0,648285.0,130.102,0.755,3353.0,0.673,0.0154,65.0,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-06,26372.0,69.0,49.286,1768.0,5.0,0.714,5292.496,13.847,9.891,354.813,1.003,0.143,1.6,5.0,1.003,10.0,2.007,,,,,4833.0,653118.0,131.072,0.97,3417.0,0.686,0.0144,69.3,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-07,26470.0,98.0,57.857,1772.0,4.0,1.286,5312.163,19.667,11.611,355.616,0.803,0.258,1.62,5.0,1.003,11.0,2.208,,,,,4980.0,658098.0,132.071,0.999,3578.0,0.718,0.0162,61.8,tests performed,,,,,,,,,,,,,,38.89,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-08,26644.0,174.0,76.429,1772.0,0.0,1.286,5347.083,34.919,15.338,355.616,0.0,0.258,1.59,6.0,1.204,12.0,2.408,,,,,4880.0,662978.0,133.051,0.979,3802.0,0.763,0.0201,49.7,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-09,26712.0,68.0,78.571,1772.0,0.0,1.286,5360.729,13.647,15.768,355.616,0.0,0.258,1.5,6.0,1.204,13.0,2.609,1.0,0.201,13.0,2.619,4107.0,667085.0,133.875,0.824,3942.0,0.791,0.0199,50.2,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-10,26768.0,56.0,80.0,1772.0,0.0,1.286,5371.968,11.238,16.055,355.616,0.0,0.258,1.41,7.0,1.405,12.0,2.408,,,,,3874.0,670959.0,134.652,0.777,4061.0,0.815,0.0197,50.8,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-11,26801.0,33.0,78.286,1773.0,1.0,1.429,5378.59,6.623,15.711,355.817,0.201,0.287,1.34,5.0,1.003,14.0,2.81,,,,,4026.0,674985.0,135.46,0.808,4352.0,0.873,0.018,55.6,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-12,26838.0,37.0,76.429,1774.0,1.0,1.571,5386.016,7.425,15.338,356.017,0.201,0.315,1.33,6.0,1.204,13.0,2.609,,,,,5843.0,680828.0,136.633,1.173,4649.0,0.933,0.0164,60.8,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-13,26929.0,91.0,79.571,1774.0,0.0,0.857,5404.278,18.262,15.969,356.017,0.0,0.172,1.34,6.0,1.204,12.0,2.408,,,,,7072.0,687900.0,138.052,1.419,4969.0,0.997,0.016,62.4,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-14,26995.0,66.0,75.0,1774.0,0.0,0.286,5417.524,13.245,15.051,356.017,0.0,0.057,1.36,8.0,1.605,11.0,2.208,,,,,11337.0,699237.0,140.327,2.275,5877.0,1.179,0.0128,78.4,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-15,27191.0,196.0,78.143,1774.0,0.0,0.286,5456.858,39.334,15.682,356.017,0.0,0.057,1.39,8.0,1.605,15.0,3.01,,,,,10653.0,709890.0,142.465,2.138,6702.0,1.345,0.0117,85.8,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-16,27257.0,66.0,77.857,1774.0,0.0,0.286,5470.103,13.245,15.625,356.017,0.0,0.057,1.36,8.0,1.605,16.0,3.211,0.0,0.0,17.0,3.424,10352.0,720242.0,144.543,2.078,7594.0,1.524,0.0103,97.5,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-17,27313.0,56.0,77.857,1774.0,0.0,0.286,5481.342,11.238,15.625,356.017,0.0,0.057,1.33,8.0,1.605,21.0,4.214,,,,,5533.0,725775.0,145.653,1.11,7831.0,1.572,0.0099,100.6,tests performed,,,,,,,,,,,,,,64.35,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-18,27499.0,186.0,99.714,1775.0,1.0,0.286,5518.669,37.328,20.011,356.218,0.201,0.057,1.33,7.0,1.405,22.0,4.415,,,,,4339.0,730114.0,146.524,0.871,7876.0,1.581,0.0127,79.0,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-19,27547.0,48.0,101.286,1775.0,0.0,0.143,5528.302,9.633,20.327,356.218,0.0,0.029,1.28,6.0,1.204,17.0,3.412,,,,,6192.0,736306.0,147.766,1.243,7925.0,1.59,0.0128,78.2,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-20,27676.0,129.0,106.714,1776.0,1.0,0.286,5554.191,25.889,21.416,356.419,0.201,0.057,1.25,6.0,1.204,16.0,3.211,,,,,11416.0,747722.0,150.057,2.291,8546.0,1.715,0.0125,80.1,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-21,27755.0,79.0,108.571,1776.0,0.0,0.286,5570.045,15.854,21.789,356.419,0.0,0.057,1.22,6.0,1.204,18.0,3.612,,,,,13080.0,760802.0,152.682,2.625,8795.0,1.765,0.0123,81.0,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-22,27908.0,153.0,102.429,1777.0,1.0,0.429,5600.75,30.705,20.556,356.619,0.201,0.086,1.21,6.0,1.204,20.0,4.014,,,,,6758.0,767560.0,154.039,1.356,8239.0,1.653,0.0124,80.4,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-23,27969.0,61.0,101.714,1777.0,0.0,0.429,5612.992,12.242,20.413,356.619,0.0,0.086,1.2,6.0,1.204,21.0,4.214,2.0,0.403,10.0,2.014,5438.0,772998.0,155.13,1.091,7537.0,1.513,0.0135,74.1,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-24,28116.0,147.0,114.714,1777.0,0.0,0.429,5642.493,29.501,23.022,356.619,0.0,0.086,1.21,5.0,1.003,27.0,5.419,,,,,4838.0,777836.0,156.101,0.971,7437.0,1.493,0.0154,64.8,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-25,28201.0,85.0,100.286,1777.0,0.0,0.286,5659.551,17.058,20.126,356.619,0.0,0.057,1.18,4.0,0.803,26.0,5.218,,,,,5015.0,782851.0,157.107,1.006,7534.0,1.512,0.0133,75.1,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-26,28363.0,162.0,116.571,1777.0,0.0,0.286,5692.062,32.511,23.394,356.619,0.0,0.057,1.18,4.0,0.803,26.0,5.218,,,,,7648.0,790499.0,158.642,1.535,7742.0,1.554,0.0151,66.4,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-27,28453.0,90.0,111.0,1777.0,0.0,0.143,5710.124,18.062,22.276,356.619,0.0,0.029,1.14,5.0,1.003,29.0,5.82,,,,,12274.0,802773.0,161.105,2.463,7864.0,1.578,0.0141,70.8,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-28,28578.0,125.0,117.571,1777.0,0.0,0.143,5735.21,25.086,23.595,356.619,0.0,0.029,1.13,5.0,1.003,32.0,6.422,,,,,12303.0,815076.0,163.574,2.469,7753.0,1.556,0.0152,65.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-29,28720.0,142.0,116.0,1777.0,0.0,0.0,5763.707,28.497,23.28,356.619,0.0,0.0,1.11,5.0,1.003,30.0,6.021,,,,,9940.0,825016.0,165.569,1.995,8208.0,1.647,0.0141,70.8,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-30,28760.0,40.0,113.0,1777.0,0.0,0.0,5771.735,8.027,22.678,356.619,0.0,0.0,1.11,5.0,1.003,33.0,6.623,2.0,0.403,31.0,6.244,5659.0,830675.0,166.705,1.136,8240.0,1.654,0.0137,72.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-08-31,28811.0,51.0,99.286,1777.0,0.0,0.0,5781.97,10.235,19.925,356.619,0.0,0.0,1.13,6.0,1.204,35.0,7.024,,,,,9340.0,840015.0,168.579,1.874,8883.0,1.783,0.0112,89.5,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,351.8,1.67,0.27,70.6014003079329\r\nIRL,Europe,Ireland,2020-09-01,29025.0,214.0,117.714,1777.0,0.0,0.0,5824.917,42.947,23.624,356.619,0.0,0.0,1.18,6.0,1.204,36.0,7.225,,,,,4892.0,844907.0,169.561,0.982,8865.0,1.779,0.0133,75.3,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-02,29114.0,89.0,107.286,1777.0,0.0,0.0,5842.778,17.861,21.531,356.619,0.0,0.0,1.18,6.0,1.204,40.0,8.027,,,,,7301.0,852208.0,171.026,1.465,8816.0,1.769,0.0122,82.2,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-03,29206.0,92.0,107.571,1777.0,0.0,0.0,5861.241,18.463,21.588,356.619,0.0,0.0,1.19,7.0,1.405,40.0,8.027,,,,,12501.0,864709.0,173.535,2.509,8848.0,1.776,0.0122,82.3,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-04,29303.0,97.0,103.571,1777.0,0.0,0.0,5880.707,19.467,20.785,356.619,0.0,0.0,1.22,7.0,1.405,44.0,8.83,,,,,14064.0,878773.0,176.358,2.822,9100.0,1.826,0.0114,87.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-05,29534.0,231.0,116.286,1777.0,0.0,0.0,5927.066,46.359,23.337,356.619,0.0,0.0,1.27,7.0,1.405,48.0,9.633,,,,,11322.0,890095.0,178.63,2.272,9297.0,1.866,0.0125,79.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-06,29672.0,138.0,130.286,1777.0,0.0,0.0,5954.761,27.695,26.147,356.619,0.0,0.0,1.29,6.0,1.204,49.0,9.834,1.0,0.201,32.0,6.446,10343.0,900438.0,180.705,2.076,9966.0,2.0,0.0131,76.5,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-07,29774.0,102.0,137.571,1777.0,0.0,0.0,5975.231,20.47,27.609,356.619,0.0,0.0,1.3,6.0,1.204,49.0,9.834,,,,,6253.0,906691.0,181.96,1.255,9525.0,1.912,0.0144,69.2,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-08,30080.0,306.0,150.714,1778.0,1.0,0.143,6036.64,61.41,30.246,356.82,0.201,0.029,1.33,6.0,1.204,49.0,9.834,,,,,6678.0,913369.0,183.301,1.34,9780.0,1.963,0.0154,64.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-09,30164.0,84.0,150.0,1781.0,3.0,0.571,6053.498,16.858,30.103,357.422,0.602,0.115,1.31,6.0,1.204,50.0,10.034,,,,,10749.0,924118.0,185.458,2.157,10273.0,2.062,0.0146,68.5,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-10,30360.0,196.0,164.857,1781.0,0.0,0.571,6092.833,39.334,33.085,357.422,0.0,0.115,1.31,7.0,1.405,49.0,9.834,,,,,12363.0,936481.0,187.939,2.481,10253.0,2.058,0.0161,62.2,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-11,30571.0,211.0,181.143,1781.0,0.0,0.571,6135.177,42.345,36.353,357.422,0.0,0.115,1.32,7.0,1.405,53.0,10.636,,,,,13073.0,949554.0,190.562,2.624,10112.0,2.029,0.0179,55.8,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-12,30730.0,159.0,170.857,1783.0,2.0,0.857,6167.087,31.909,34.289,357.823,0.401,0.172,1.31,9.0,1.806,52.0,10.436,,,,,12230.0,961784.0,193.017,2.454,10241.0,2.055,0.0167,59.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-13,30985.0,255.0,187.571,1784.0,1.0,1.0,6218.261,51.175,37.643,358.024,0.201,0.201,1.34,10.0,2.007,54.0,10.837,0.0,0.0,35.0,7.05,9815.0,971599.0,194.986,1.97,10166.0,2.04,0.0185,54.2,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-14,31192.0,207.0,202.571,1784.0,0.0,1.0,6259.804,41.542,40.653,358.024,0.0,0.201,1.35,11.0,2.208,60.0,12.041,,,,,9888.0,981487.0,196.971,1.984,10685.0,2.144,0.019,52.7,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-15,31549.0,357.0,209.857,1787.0,3.0,1.286,6331.448,71.645,42.115,358.626,0.602,0.258,1.35,13.0,2.609,68.0,13.647,,,,,8120.0,989607.0,198.6,1.63,10891.0,2.186,0.0193,51.9,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-16,31799.0,250.0,233.571,1788.0,1.0,1.0,6381.62,50.172,46.875,358.827,0.201,0.201,1.33,14.0,2.81,65.0,13.045,,,,,12241.0,1001848.0,201.057,2.457,11104.0,2.228,0.021,47.5,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-17,32023.0,224.0,237.571,1789.0,1.0,1.143,6426.574,44.954,47.677,359.028,0.201,0.229,1.3,14.0,2.81,76.0,15.252,,,,,14663.0,1016511.0,204.0,2.943,11433.0,2.294,0.0208,48.1,tests performed,,,,,,,,,,,,,,67.13,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-18,32271.0,248.0,242.857,1792.0,3.0,1.571,6476.344,49.77,48.738,359.63,0.602,0.315,1.28,15.0,3.01,80.0,16.055,,,,,14506.0,1031017.0,206.911,2.911,11638.0,2.336,0.0209,47.9,tests performed,,,,,,,,,,,,,,60.65,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-19,32538.0,267.0,258.286,1792.0,0.0,1.286,6529.927,53.583,51.834,359.63,0.0,0.258,1.27,16.0,3.211,74.0,14.851,,,,,14380.0,1045397.0,209.797,2.886,11945.0,2.397,0.0216,46.2,tests performed,,,,,,,,,,,,,,60.65,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-20,32933.0,395.0,278.286,1792.0,0.0,1.143,6609.198,79.271,55.848,359.63,0.0,0.229,1.28,16.0,3.211,82.0,16.456,6.0,1.209,55.0,11.079,12138.0,1057535.0,212.233,2.436,12277.0,2.464,0.0227,44.1,tests performed,,,,,,,,,,,,,,60.65,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-21,33121.0,188.0,275.571,1792.0,0.0,1.143,6646.927,37.729,55.303,359.63,0.0,0.229,1.25,17.0,3.412,90.0,18.062,,,,,10031.0,1067566.0,214.246,2.013,12297.0,2.468,0.0224,44.6,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-22,33444.0,323.0,270.714,1792.0,0.0,0.714,6711.749,64.822,54.329,359.63,0.0,0.143,1.24,16.0,3.211,94.0,18.865,,,,,12583.0,1080149.0,216.771,2.525,12935.0,2.596,0.0209,47.8,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-23,33675.0,231.0,268.0,1794.0,2.0,0.857,6758.107,46.359,53.784,360.031,0.401,0.172,1.24,17.0,3.412,90.0,18.062,,,,,12671.0,1092820.0,219.314,2.543,12996.0,2.608,0.0206,48.5,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-24,33994.0,319.0,281.571,1797.0,3.0,1.143,6822.126,64.019,56.507,360.633,0.602,0.229,1.24,16.0,3.211,94.0,18.865,,,,,14356.0,1107176.0,222.195,2.881,12952.0,2.599,0.0217,46.0,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-25,34315.0,321.0,292.0,1797.0,0.0,0.714,6886.546,64.42,58.6,360.633,0.0,0.143,1.25,17.0,3.412,100.0,20.069,,,,,14538.0,1121714.0,225.113,2.918,12957.0,2.6,0.0225,44.4,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-26,34560.0,245.0,288.857,1802.0,5.0,1.429,6935.715,49.168,57.97,361.637,1.003,0.287,1.25,18.0,3.612,102.0,20.47,,,,,11808.0,1133522.0,227.482,2.37,12589.0,2.526,0.0229,43.6,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-27,34990.0,430.0,293.857,1802.0,0.0,1.429,7022.01,86.295,58.973,361.637,0.0,0.287,1.29,17.0,3.412,108.0,21.674,4.0,0.806,56.0,11.28,11878.0,1145400.0,229.866,2.384,12552.0,2.519,0.0234,42.7,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-28,35377.0,387.0,322.286,1802.0,0.0,1.429,7099.675,77.666,64.678,361.637,0.0,0.287,1.3,17.0,3.412,111.0,22.276,,,,,9866.0,1155266.0,231.846,1.98,12529.0,2.514,0.0257,38.9,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-29,35740.0,363.0,328.0,1803.0,1.0,1.571,7172.524,72.849,65.825,361.837,0.201,0.315,1.3,18.0,3.612,117.0,23.48,,,,,12673.0,1167939.0,234.389,2.543,12541.0,2.517,0.0262,38.2,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-09-30,36155.0,415.0,354.286,1804.0,1.0,1.429,7255.809,83.285,71.1,362.038,0.201,0.287,1.31,22.0,4.415,122.0,24.484,,,,,13247.0,1181186.0,237.048,2.658,12624.0,2.533,0.0281,35.6,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,294.6,1.26,-2.38,59.122150456842\r\nIRL,Europe,Ireland,2020-10-01,36597.0,442.0,371.857,1806.0,2.0,1.286,7344.512,88.703,74.627,362.439,0.401,0.258,1.32,20.0,4.014,122.0,24.484,,,,,14524.0,1195710.0,239.962,2.915,12648.0,2.538,0.0294,34.0,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-02,37063.0,466.0,392.571,1801.0,-5.0,0.571,7438.032,93.52,78.784,361.436,-1.003,0.115,1.32,21.0,4.214,117.0,23.48,,,,,12673.0,1208383.0,242.506,2.543,12381.0,2.485,0.0317,31.5,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-03,37668.0,605.0,444.0,1810.0,9.0,1.143,7559.447,121.415,89.105,363.242,1.806,0.229,1.32,20.0,4.014,120.0,24.082,,,,,13621.0,1222004.0,245.239,2.734,12640.0,2.537,0.0351,28.5,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-04,38032.0,364.0,434.571,1810.0,0.0,1.143,7632.497,73.05,87.212,363.242,0.0,0.229,1.32,21.0,4.214,134.0,26.892,9.0,1.813,85.0,17.122,11295.0,1233299.0,247.506,2.267,12557.0,2.52,0.0346,28.9,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-05,38549.0,517.0,453.143,1810.0,0.0,1.143,7736.252,103.755,90.94,363.242,0.0,0.229,1.33,23.0,4.616,150.0,30.103,,,,,12166.0,1245465.0,249.948,2.442,12886.0,2.586,0.0352,28.4,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-06,38973.0,424.0,461.857,1811.0,1.0,1.143,7821.343,85.091,92.688,363.443,0.201,0.229,1.34,24.0,4.816,150.0,30.103,,,,,11646.0,1257111.0,252.285,2.337,12739.0,2.557,0.0363,27.6,tests performed,,,,,,,,,,,,,,52.31,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-07,39584.0,611.0,489.857,1816.0,5.0,1.714,7943.962,122.619,98.308,364.446,1.003,0.344,1.36,27.0,5.419,156.0,31.307,,,,,14542.0,1271653.0,255.203,2.918,12924.0,2.594,0.0379,26.4,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-08,40086.0,502.0,498.429,1817.0,1.0,1.571,8044.706,100.744,100.028,364.647,0.201,0.315,1.37,25.0,5.017,159.0,31.909,,,,,15880.0,1287533.0,258.39,3.187,13118.0,2.633,0.038,26.3,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-09,40703.0,617.0,520.0,1821.0,4.0,2.857,8168.53,123.823,104.357,365.45,0.803,0.573,1.4,31.0,6.221,179.0,35.923,,,,,16522.0,1304055.0,261.706,3.316,13667.0,2.743,0.038,26.3,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-10,41714.0,1011.0,578.0,1824.0,3.0,2.0,8371.424,202.894,115.997,366.052,0.602,0.401,1.43,30.0,6.021,194.0,38.933,,,,,15634.0,1319689.0,264.843,3.138,13955.0,2.801,0.0414,24.1,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-11,42528.0,814.0,642.286,1826.0,2.0,2.286,8534.782,163.359,128.898,366.453,0.401,0.459,1.43,30.0,6.021,201.0,40.338,4.0,0.806,130.0,26.186,7998.0,1327687.0,266.448,1.605,13484.0,2.706,0.0476,21.0,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-12,43351.0,823.0,686.0,1827.0,1.0,2.429,8699.947,165.165,137.671,366.654,0.201,0.487,1.43,32.0,6.422,221.0,44.352,,,,,13988.0,1341675.0,269.256,2.807,13744.0,2.758,0.0499,20.0,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-13,44159.0,808.0,740.857,1830.0,3.0,2.714,8862.101,162.154,148.68,367.256,0.602,0.545,1.42,31.0,6.221,240.0,48.165,,,,,15305.0,1356980.0,272.327,3.072,14267.0,2.863,0.0519,19.3,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-14,45243.0,1084.0,808.429,1835.0,5.0,2.714,9079.645,217.544,162.24,368.259,1.003,0.545,1.41,30.0,6.021,234.0,46.961,,,,,16255.0,1373235.0,275.589,3.262,14512.0,2.912,0.0557,18.0,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-15,46429.0,1186.0,906.143,1838.0,3.0,3.0,9317.659,238.014,181.85,368.861,0.602,0.602,1.39,29.0,5.82,238.0,47.763,,,,,13428.0,1386663.0,278.284,2.695,14161.0,2.842,0.064,15.6,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-16,47427.0,998.0,960.571,1841.0,3.0,2.857,9517.944,200.285,192.773,369.463,0.602,0.573,1.36,30.0,6.021,244.0,48.967,,,,,17758.0,1404421.0,281.848,3.564,14338.0,2.877,0.067,14.9,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-17,48678.0,1251.0,994.857,1849.0,8.0,3.571,9769.002,251.058,199.654,371.069,1.605,0.717,1.32,30.0,6.021,260.0,52.178,,,,,19040.0,1423461.0,285.669,3.821,14825.0,2.975,0.0671,14.9,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-18,49962.0,1284.0,1062.0,1852.0,3.0,3.714,10026.683,257.681,213.129,371.671,0.602,0.745,1.29,31.0,6.221,274.0,54.988,9.0,1.813,120.0,24.172,16140.0,1439601.0,288.908,3.239,15988.0,3.209,0.0664,15.1,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-19,50993.0,1031.0,1091.714,1852.0,0.0,3.571,10233.591,206.907,219.092,371.671,0.0,0.717,1.24,32.0,6.422,298.0,59.804,,,,,14391.0,1453992.0,291.796,2.888,16045.0,3.22,0.068,14.7,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-20,52256.0,1263.0,1156.714,1865.0,13.0,5.0,10487.057,253.467,232.137,374.28,2.609,1.003,1.2,34.0,6.823,315.0,63.216,,,,,14676.0,1468668.0,294.741,2.945,15955.0,3.202,0.0725,13.8,tests performed,,,,,,,,,,,,,,55.09,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-21,53422.0,1166.0,1168.429,1868.0,3.0,4.714,10721.057,234.0,234.487,374.882,0.602,0.946,1.14,35.0,7.024,324.0,65.022,,,,,16779.0,1485447.0,298.109,3.367,16030.0,3.217,0.0729,13.7,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-22,54476.0,1054.0,1149.571,1871.0,3.0,4.714,10932.581,211.523,230.703,375.484,0.602,0.946,1.08,37.0,7.425,310.0,62.213,,,,,17834.0,1503281.0,301.688,3.579,16660.0,3.343,0.069,14.5,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-23,55261.0,785.0,1119.143,1878.0,7.0,5.286,11090.119,157.539,224.597,376.889,1.405,1.061,1.02,38.0,7.626,311.0,62.413,,,,,17712.0,1520993.0,305.242,3.555,16653.0,3.342,0.0672,14.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-24,56108.0,847.0,1061.429,1882.0,4.0,4.714,11260.101,169.981,213.014,377.691,0.803,0.946,0.98,37.0,7.425,312.0,62.614,,,,,17906.0,1538899.0,308.836,3.593,16491.0,3.31,0.0644,15.5,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-25,57128.0,1020.0,1023.714,1882.0,0.0,4.286,11464.8,204.7,205.445,377.691,0.0,0.86,0.96,39.0,7.827,319.0,64.019,12.0,2.417,180.0,36.056,15772.0,1554671.0,312.001,3.165,16439.0,3.299,0.0623,16.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-26,58067.0,939.0,1010.571,1885.0,3.0,4.714,11653.245,188.444,202.808,378.293,0.602,0.946,0.93,38.0,7.626,344.0,69.036,,,,,14264.0,1568935.0,314.864,2.863,16420.0,3.295,0.0615,16.2,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-27,58767.0,700.0,930.143,1890.0,5.0,3.571,11793.725,140.48,186.667,379.297,1.003,0.717,0.89,38.0,7.626,354.0,71.043,,,,,11435.0,1580370.0,317.158,2.295,15957.0,3.202,0.0583,17.2,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-28,59434.0,667.0,858.857,1896.0,6.0,4.0,11927.583,133.858,172.361,380.501,1.204,0.803,0.86,40.0,8.027,327.0,65.624,,,,,11170.0,1591540.0,319.4,2.242,15156.0,3.042,0.0567,17.6,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-29,60297.0,863.0,831.571,1902.0,6.0,4.429,12100.775,173.192,166.885,381.705,1.204,0.889,0.83,43.0,8.63,330.0,66.226,,,,,15316.0,1606856.0,322.474,3.074,14796.0,2.969,0.0562,17.8,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-30,61059.0,762.0,828.286,1908.0,6.0,4.286,12253.698,152.923,166.226,382.909,1.204,0.86,0.8,42.0,8.429,327.0,65.624,,,,,13801.0,1620657.0,325.243,2.77,14238.0,2.857,0.0582,17.2,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-10-31,61456.0,397.0,764.0,1913.0,5.0,4.429,12333.37,79.672,153.324,383.913,1.003,0.889,0.77,44.0,8.83,322.0,64.621,,,,,14296.0,1634953.0,328.112,2.869,13722.0,2.754,0.0557,18.0,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,409.6,1.57,4.45,82.2010618707485\r\nIRL,Europe,Ireland,2020-11-01,62002.0,546.0,696.286,1915.0,2.0,4.714,12442.945,109.575,139.735,384.314,0.401,0.946,0.76,44.0,8.83,325.0,65.223,10.0,2.014,124.0,24.978,11068.0,1646021.0,330.334,2.221,13050.0,2.619,0.0534,18.7,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-02,62750.0,748.0,669.0,1917.0,2.0,4.571,12593.058,150.113,134.259,384.715,0.401,0.917,0.75,44.0,8.83,327.0,65.624,,,,,11074.0,1657095.0,332.556,2.222,12594.0,2.527,0.0531,18.8,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-03,63048.0,298.0,611.571,1922.0,5.0,4.571,12652.863,59.804,122.734,385.719,1.003,0.917,0.73,43.0,8.63,306.0,61.41,,,,,10500.0,1667595.0,334.663,2.107,12461.0,2.501,0.0491,20.4,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-04,63483.0,435.0,578.429,1930.0,8.0,4.857,12740.161,87.298,116.083,387.324,1.605,0.975,0.73,40.0,8.027,315.0,63.216,,,,,12592.0,1680187.0,337.19,2.527,12664.0,2.541,0.0457,21.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-05,64046.0,563.0,535.571,1933.0,3.0,4.429,12853.147,112.986,107.482,387.926,0.602,0.889,0.73,38.0,7.626,307.0,61.611,,,,,11846.0,1692033.0,339.568,2.377,12168.0,2.442,0.044,22.7,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-06,64538.0,492.0,497.0,1940.0,7.0,4.571,12951.885,98.738,99.741,389.331,1.405,0.917,0.72,37.0,7.425,295.0,59.202,,,,,11815.0,1703848.0,341.939,2.371,11884.0,2.385,0.0418,23.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-07,64855.0,317.0,485.571,1945.0,5.0,4.571,13015.503,63.618,97.447,390.335,1.003,0.917,0.72,40.0,8.027,279.0,55.991,,,,,12172.0,1716020.0,344.382,2.443,11581.0,2.324,0.0419,23.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-08,65394.0,539.0,484.571,1947.0,2.0,4.571,13123.672,108.17,97.247,390.736,0.401,0.917,0.72,40.0,8.027,283.0,56.794,19.0,3.827,142.0,28.402,9576.0,1725596.0,346.303,1.922,11368.0,2.281,0.0426,23.5,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-09,65659.0,265.0,415.571,1948.0,1.0,4.429,13176.854,53.182,83.399,390.937,0.201,0.889,0.72,41.0,8.228,291.0,58.4,,,,,9912.0,1735508.0,348.292,1.989,11202.0,2.248,0.0371,27.0,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-10,65889.0,230.0,405.857,1963.0,15.0,5.857,13223.012,46.158,81.45,393.947,3.01,1.175,0.74,40.0,8.027,279.0,55.991,,,,,10407.0,1745915.0,350.381,2.089,11189.0,2.245,0.0363,27.6,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-11,66247.0,358.0,394.857,1965.0,2.0,5.0,13294.858,71.846,79.242,394.348,0.401,1.003,0.76,39.0,7.827,282.0,56.594,,,,,10790.0,1756705.0,352.546,2.165,10931.0,2.194,0.0361,27.7,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-12,66632.0,385.0,369.429,1965.0,0.0,4.571,13372.122,77.264,74.139,394.348,0.0,0.917,0.78,38.0,7.626,285.0,57.196,,,,,13058.0,1769763.0,355.167,2.621,11104.0,2.228,0.0333,30.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-13,67099.0,467.0,365.857,1972.0,7.0,4.571,13465.842,93.72,73.422,395.753,1.405,0.917,0.81,33.0,6.623,275.0,55.189,,,,,11612.0,1781375.0,357.497,2.33,11075.0,2.223,0.033,30.3,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-14,67526.0,427.0,381.571,1978.0,6.0,4.714,13551.535,85.693,76.576,396.957,1.204,0.946,0.82,33.0,6.623,254.0,50.974,,,,,9801.0,1791176.0,359.464,1.967,10737.0,2.155,0.0355,28.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-15,67903.0,377.0,358.429,1979.0,1.0,4.571,13627.194,75.659,71.932,397.158,0.201,0.917,0.83,30.0,6.021,254.0,50.974,16.0,3.223,149.0,29.812,9184.0,1800360.0,361.307,1.843,10681.0,2.144,0.0336,29.8,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-16,68356.0,453.0,385.286,1984.0,5.0,5.143,13718.105,90.911,77.322,398.161,1.003,1.032,0.84,34.0,6.823,276.0,55.389,,,,,11106.0,1811466.0,363.536,2.229,10851.0,2.178,0.0355,28.2,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-17,68686.0,330.0,399.571,1995.0,11.0,4.571,13784.331,66.226,80.188,400.369,2.208,0.917,0.84,34.0,6.823,273.0,54.787,,,,,9977.0,1821443.0,365.538,2.002,10790.0,2.165,0.037,27.0,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-18,69058.0,372.0,401.571,2006.0,11.0,5.857,13858.987,74.655,80.59,402.576,2.208,1.175,0.84,33.0,6.623,274.0,54.988,,,,,12562.0,1834005.0,368.059,2.521,11043.0,2.216,0.0364,27.5,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-19,69473.0,415.0,405.857,2010.0,4.0,6.429,13942.271,83.285,81.45,403.379,0.803,1.29,0.83,32.0,6.422,290.0,58.199,,,,,12640.0,1846645.0,370.596,2.537,10983.0,2.204,0.037,27.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-20,69802.0,329.0,386.143,2018.0,8.0,6.571,14008.297,66.026,77.494,404.985,1.605,1.319,0.82,33.0,6.623,287.0,57.597,,,,,12829.0,1859474.0,373.171,2.575,11157.0,2.239,0.0346,28.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-21,70143.0,341.0,373.857,2022.0,4.0,6.286,14076.731,68.434,75.028,405.787,0.803,1.261,0.81,32.0,6.422,275.0,55.189,,,,,10444.0,1869918.0,375.267,2.096,11249.0,2.258,0.0332,30.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-22,70461.0,318.0,365.429,2023.0,1.0,6.286,14140.549,63.818,73.336,405.988,0.201,1.261,0.8,31.0,6.221,277.0,55.59,10.0,2.014,140.0,27.999,9563.0,1879481.0,377.186,1.919,11303.0,2.268,0.0323,30.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-23,70711.0,250.0,336.429,2023.0,0.0,5.571,14190.721,50.172,67.517,405.988,0.0,1.118,0.8,33.0,6.623,291.0,58.4,,,,,9834.0,1889315.0,379.159,1.974,11121.0,2.232,0.0303,33.1,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-24,70930.0,219.0,320.571,2028.0,5.0,4.714,14234.671,43.95,64.334,406.992,1.003,0.946,0.8,37.0,7.425,291.0,58.4,,,,,10089.0,1899404.0,381.184,2.025,11137.0,2.235,0.0288,34.7,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-25,71187.0,257.0,304.143,2033.0,5.0,3.857,14286.248,51.576,61.037,407.995,1.003,0.774,0.81,36.0,7.225,269.0,53.985,,,,,12442.0,1911846.0,383.681,2.497,11120.0,2.232,0.0274,36.6,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-26,71494.0,307.0,288.714,2036.0,3.0,3.714,14347.858,61.611,57.941,408.597,0.602,0.745,0.82,36.0,7.225,247.0,49.569,,,,,12456.0,1924302.0,386.181,2.5,11094.0,2.226,0.026,38.4,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-27,71699.0,205.0,271.0,2043.0,7.0,3.571,14388.999,41.141,54.386,410.002,1.405,0.717,0.83,34.0,6.823,253.0,50.774,,,,,10778.0,1935080.0,388.344,2.163,10801.0,2.168,0.0251,39.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-28,71942.0,243.0,257.0,2050.0,7.0,4.0,14437.766,48.767,51.576,411.407,1.405,0.803,0.85,31.0,6.221,243.0,48.767,,,,,11339.0,1946419.0,390.619,2.276,10929.0,2.193,0.0235,42.5,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-29,72241.0,299.0,254.286,2052.0,2.0,4.143,14497.771,60.005,51.032,411.808,0.401,0.831,0.87,30.0,6.021,257.0,51.576,5.0,1.007,113.0,22.762,9443.0,1955862.0,392.514,1.895,10912.0,2.19,0.0233,42.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-11-30,72544.0,303.0,261.857,2053.0,1.0,4.286,14558.579,60.808,52.551,412.009,0.201,0.86,0.9,30.0,6.021,259.0,51.978,,,,,9057.0,1964919.0,394.332,1.818,10801.0,2.168,0.0242,41.2,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,340.6,1.19,-2.68,68.3537150224046\r\nIRL,Europe,Ireland,2020-12-01,72798.0,254.0,266.857,2069.0,16.0,5.857,14609.553,50.974,53.555,415.22,3.211,1.175,0.91,31.0,6.221,224.0,44.954,,,,,9786.0,1974705.0,396.296,1.964,10757.0,2.159,0.0248,40.3,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-02,73066.0,268.0,268.429,2074.0,5.0,5.857,14663.337,53.784,53.87,416.223,1.003,1.175,0.92,31.0,6.221,228.0,45.756,,,,,11934.0,1986639.0,398.691,2.395,10685.0,2.144,0.0251,39.8,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-03,73228.0,162.0,247.714,2080.0,6.0,6.286,14695.848,32.511,49.713,417.427,1.204,1.261,0.93,32.0,6.422,234.0,46.961,,,,,12047.0,1998686.0,401.109,2.418,10626.0,2.132,0.0233,42.9,tests performed,,,,,,,,,,,,,,81.48,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-04,73491.0,263.0,256.0,2086.0,6.0,6.143,14748.629,52.78,51.376,418.631,1.204,1.233,0.97,29.0,5.82,239.0,47.964,,,,,11856.0,2010542.0,403.488,2.379,10780.0,2.163,0.0237,42.1,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-05,73948.0,457.0,286.571,2099.0,13.0,7.0,14840.342,91.714,57.511,421.24,2.609,1.405,1.0,28.0,5.619,230.0,46.158,,,,,11456.0,2021998.0,405.787,2.299,10797.0,2.167,0.0265,37.7,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-06,74246.0,298.0,286.429,2099.0,0.0,6.714,14900.147,59.804,57.482,421.24,0.0,1.347,1.0,28.0,5.619,233.0,46.76,10.0,2.014,102.0,20.546,9413.0,2031411.0,407.676,1.889,10793.0,2.166,0.0265,37.7,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-07,74468.0,222.0,274.857,2099.0,0.0,6.571,14944.699,44.552,55.16,421.24,0.0,1.319,1.0,28.0,5.619,232.0,46.559,,,,,9623.0,2041034.0,409.607,1.931,10874.0,2.182,0.0253,39.6,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-08,74682.0,214.0,269.143,2097.0,-2.0,4.0,14987.646,42.947,54.013,420.839,-0.401,0.803,1.02,32.0,6.422,215.0,43.148,,,,,10424.0,2051458.0,411.699,2.092,10965.0,2.201,0.0245,40.7,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-09,74900.0,218.0,262.0,2102.0,5.0,4.0,15031.395,43.75,52.58,421.842,1.003,0.803,1.04,37.0,7.425,215.0,43.148,,,,,12203.0,2063661.0,414.148,2.449,11003.0,2.208,0.0238,42.0,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-10,75203.0,303.0,282.143,2117.0,15.0,5.286,15092.203,60.808,56.622,424.853,3.01,1.061,1.08,36.0,7.225,203.0,40.739,,,,,12688.0,2076349.0,416.695,2.546,11095.0,2.227,0.0254,39.3,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-11,75507.0,304.0,288.0,2120.0,3.0,4.857,15153.212,61.009,57.798,425.455,0.602,0.975,1.12,35.0,7.024,204.0,40.94,,,,,12618.0,2088967.0,419.227,2.532,11204.0,2.248,0.0257,38.9,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-12,75756.0,249.0,258.286,2123.0,3.0,3.429,15203.183,49.971,51.834,426.057,0.602,0.688,1.15,32.0,6.422,190.0,38.13,,,,,12850.0,2101817.0,421.806,2.579,11403.0,2.288,0.0227,44.1,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-13,76185.0,429.0,277.0,2124.0,1.0,3.571,15289.277,86.094,55.59,426.257,0.201,0.717,1.21,31.0,6.221,192.0,38.532,11.0,2.216,81.0,16.316,10728.0,2112545.0,423.959,2.153,11591.0,2.326,0.0239,41.8,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-14,76449.0,264.0,283.0,2126.0,2.0,3.857,15342.258,52.981,56.794,426.659,0.401,0.774,1.25,34.0,6.823,197.0,39.535,,,,,10251.0,2122796.0,426.016,2.057,11680.0,2.344,0.0242,41.3,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-15,76776.0,327.0,299.143,2134.0,8.0,5.286,15407.883,65.624,60.034,428.264,1.605,1.061,1.3,32.0,6.422,198.0,39.736,,,,,10847.0,2133643.0,428.193,2.177,11741.0,2.356,0.0255,39.2,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-16,77197.0,421.0,328.143,2140.0,6.0,5.429,15492.372,84.489,65.854,429.468,1.204,1.089,1.36,28.0,5.619,198.0,39.736,,,,,13120.0,2146763.0,430.826,2.633,11872.0,2.383,0.0276,36.2,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-17,77678.0,481.0,353.571,2143.0,3.0,3.714,15588.902,96.53,70.957,430.07,0.602,0.745,1.42,30.0,6.021,211.0,42.345,,,,,13219.0,2159982.0,433.479,2.653,11948.0,2.398,0.0296,33.8,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-18,78254.0,576.0,392.429,2149.0,6.0,4.143,15704.497,115.595,78.755,431.275,1.204,0.831,1.47,31.0,6.221,206.0,41.341,,,,,14093.0,2174075.0,436.307,2.828,12158.0,2.44,0.0323,31.0,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-19,78776.0,522.0,431.429,2154.0,5.0,4.429,15809.255,104.758,86.582,432.278,1.003,0.889,1.51,29.0,5.82,206.0,41.341,,,,,13941.0,2188016.0,439.105,2.798,12314.0,2.471,0.035,28.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-20,79542.0,766.0,479.571,2158.0,4.0,4.857,15962.981,153.726,96.243,433.081,0.803,0.975,1.56,29.0,5.82,220.0,44.151,18.0,3.626,128.0,25.783,13458.0,2201474.0,441.805,2.701,12704.0,2.55,0.0377,26.5,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-21,80267.0,725.0,545.429,2158.0,0.0,4.571,16108.478,145.497,109.46,433.081,0.0,0.917,1.6,30.0,6.021,235.0,47.161,,,,,12804.0,2214278.0,444.375,2.57,13069.0,2.623,0.0417,24.0,tests performed,,,,,,,,,,,,,,72.22,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-22,81228.0,961.0,636.0,2171.0,13.0,5.286,16301.338,192.859,127.636,435.69,2.609,1.061,1.62,28.0,5.619,237.0,47.563,,,,,13225.0,2227503.0,447.029,2.654,13409.0,2.691,0.0474,21.1,tests performed,,,,,,,,,,,,,,75.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-23,82155.0,927.0,708.286,2184.0,13.0,6.286,16487.374,186.036,142.143,438.299,2.609,1.261,1.62,25.0,5.017,239.0,47.964,,,,,20662.0,2248165.0,451.176,4.147,14486.0,2.907,0.0489,20.5,tests performed,,,,,,,,,,,,,,75.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-24,83073.0,918.0,770.714,2192.0,8.0,7.0,16671.604,184.23,154.672,439.904,1.605,1.405,1.62,22.0,4.415,255.0,51.175,,,,,22876.0,2271041.0,455.767,4.591,15866.0,3.184,0.0486,20.6,tests performed,,,,,,,,,,,,,,68.52,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-25,84098.0,1025.0,834.857,2194.0,2.0,6.429,16877.307,205.703,167.544,440.305,0.401,1.29,1.62,25.0,5.017,253.0,50.774,,,,,21423.0,2292464.0,460.066,4.299,16913.0,3.394,0.0494,20.3,tests performed,,,,,,,,,,,,,,68.52,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-26,85394.0,1296.0,945.429,2200.0,6.0,6.571,17137.396,260.089,189.734,441.51,1.204,1.319,1.62,23.0,4.616,268.0,53.784,,,,,11999.0,2304463.0,462.474,2.408,16635.0,3.338,0.0568,17.6,tests performed,,,,,,,,,,,,,,68.52,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-27,86129.0,735.0,941.0,2204.0,4.0,6.571,17284.901,147.504,188.846,442.312,0.803,1.319,1.62,27.0,5.419,321.0,64.42,16.0,3.223,186.0,37.265,3536.0,2307999.0,463.184,0.71,15218.0,3.054,0.0618,16.2,tests performed,,,,,,,,,,,,,,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-28,86894.0,765.0,946.714,2205.0,1.0,6.714,17438.425,153.525,189.992,442.513,0.201,1.347,1.67,30.0,6.021,360.0,72.247,,,,,9405.0,2317404.0,465.071,1.887,14732.0,2.957,0.0643,15.6,tests performed,163.0,145.0,24.0,,,,0.0,0.0,0.0,,,,,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-29,88439.0,1545.0,1030.143,2213.0,8.0,6.0,17748.486,310.06,206.735,444.119,1.605,1.204,1.75,34.0,6.823,409.0,82.081,,,,,13805.0,2331209.0,467.841,2.77,14815.0,2.973,0.0695,14.4,tests performed,235.0,216.0,25.0,,72.0,72.0,0.0,0.0,0.0,,14.0,71.0,0.001,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-30,90157.0,1718.0,1143.143,2226.0,13.0,6.0,18093.264,344.779,229.413,446.727,2.609,1.204,1.81,39.0,7.827,454.0,91.112,,,,,17489.0,2348698.0,471.351,3.51,14362.0,2.882,0.0796,12.6,tests performed,1285.0,1266.0,25.0,,1050.0,561.0,0.03,0.03,0.0,,113.0,560.0,0.011,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2020-12-31,91779.0,1622.0,1243.714,2237.0,11.0,6.429,18418.777,325.513,249.596,448.935,2.208,1.29,1.87,42.0,8.429,491.0,98.537,,,,,26312.0,2375010.0,476.632,5.28,14853.0,2.981,0.0837,11.9,tests performed,2309.0,2289.0,26.0,,1024.0,715.0,0.05,0.05,0.0,,143.0,715.0,0.014,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,145.6,0.46,-6.65,29.2199087118676\r\nIRL,Europe,Ireland,2021-01-01,93532.0,1753.0,1347.714,2248.0,11.0,7.714,18770.58,351.803,270.468,451.143,2.208,1.548,1.94,50.0,10.034,508.0,101.949,,,,,27389.0,2402399.0,482.128,5.497,15705.0,3.152,0.0858,11.7,tests performed,3110.0,3090.0,26.0,,801.0,737.0,0.06,0.06,0.0,,148.0,736.0,0.015,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-02,96926.0,3394.0,1647.429,2252.0,4.0,7.429,19451.709,681.129,330.616,451.945,0.803,1.491,2.03,56.0,11.238,581.0,116.599,,,,,20846.0,2423245.0,486.312,4.184,16969.0,3.405,0.0971,10.3,tests performed,4121.0,4101.0,26.0,,1011.0,792.0,0.08,0.08,0.0,,159.0,791.0,0.016,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-03,101887.0,4961.0,2251.143,2259.0,7.0,7.857,20447.313,995.604,451.773,453.35,1.405,1.577,2.08,65.0,13.045,673.0,135.062,15.0,3.021,479.0,96.083,28543.0,2451788.0,492.04,5.728,20541.0,4.122,0.1096,9.1,tests performed,4140.0,4118.0,28.0,,19.0,663.0,0.08,0.08,0.0,,133.0,662.0,0.013,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-04,107997.0,6110.0,3014.714,2265.0,6.0,8.571,21673.506,1226.193,605.012,454.554,1.204,1.72,2.07,73.0,14.65,744.0,149.311,,,,,20571.0,2472359.0,496.168,4.128,22136.0,4.442,0.1362,7.3,tests performed,5319.0,5296.0,29.0,,1179.0,737.0,0.11,0.11,0.0,,148.0,736.0,0.015,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-05,113322.0,5325.0,3554.714,2282.0,17.0,9.857,22742.16,1068.654,713.382,457.966,3.412,1.978,1.99,76.0,15.252,817.0,163.961,,,,,19908.0,2492267.0,500.164,3.995,23008.0,4.617,0.1545,6.5,tests performed,8828.0,8801.0,33.0,,3509.0,1228.0,0.18,0.18,0.0,,246.0,1226.0,0.025,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-06,121154.0,7832.0,4428.143,2299.0,17.0,10.429,24313.934,1571.774,888.667,461.378,3.412,2.093,1.9,89.0,17.861,921.0,184.832,,,,,28370.0,2520637.0,505.857,5.693,24563.0,4.929,0.1803,5.5,tests performed,15586.0,15554.0,38.0,,6758.0,2043.0,0.31,0.31,0.0,,410.0,2041.0,0.041,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-07,127657.0,6503.0,5125.429,2307.0,8.0,10.0,25618.996,1305.062,1028.603,462.983,1.605,2.007,1.77,101.0,20.269,1022.0,205.101,,,,,28610.0,2549247.0,511.599,5.742,24891.0,4.995,0.2059,4.9,tests performed,27299.0,27263.0,42.0,,11713.0,3570.0,0.55,0.55,0.0,,716.0,3568.0,0.072,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-08,135884.0,8227.0,6050.286,2327.0,20.0,11.286,27270.042,1651.045,1214.209,466.997,4.014,2.265,1.64,107.0,21.473,1153.0,231.391,,,,,27319.0,2576566.0,517.081,5.483,24881.0,4.993,0.2432,4.1,tests performed,39962.0,39921.0,47.0,,12663.0,5265.0,0.8,0.8,0.0,,1057.0,5262.0,0.106,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-09,140727.0,4843.0,6257.286,2336.0,9.0,12.0,28241.965,971.923,1255.751,468.803,1.806,2.408,1.49,121.0,24.283,1285.0,257.882,,,,,29972.0,2606538.0,523.096,6.015,26185.0,5.255,0.239,4.2,tests performed,48030.0,47986.0,50.0,,8068.0,6273.0,0.96,0.96,0.0,,1259.0,6269.0,0.126,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-10,147613.0,6886.0,6532.286,2344.0,8.0,12.143,29623.89,1381.925,1310.94,470.408,1.605,2.437,1.36,128.0,25.688,1426.0,286.179,29.0,5.842,866.0,173.836,24485.0,2631023.0,528.01,4.914,25605.0,5.139,0.2551,3.9,tests performed,52789.0,52744.0,52.0,,4759.0,6950.0,1.06,1.06,0.0,,1395.0,6947.0,0.139,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-11,152539.0,4926.0,6363.143,2352.0,8.0,12.429,30612.47,988.58,1276.995,472.014,1.605,2.494,1.24,144.0,28.899,1575.0,316.081,,,,,19794.0,2650817.0,531.982,3.972,25494.0,5.116,0.2496,4.0,tests performed,61114.0,61065.0,56.0,,8325.0,7971.0,1.23,1.23,0.0,,1600.0,7967.0,0.16,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-12,155591.0,3052.0,6038.429,2397.0,45.0,16.429,31224.964,612.494,1211.829,481.045,9.031,3.297,1.13,160.0,32.11,1690.0,339.16,,,,,18945.0,2669762.0,535.784,3.802,25356.0,5.089,0.2381,4.2,tests performed,69969.0,69914.0,62.0,,8855.0,8734.0,1.4,1.4,0.0,,1753.0,8730.0,0.175,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-13,159144.0,3553.0,5427.143,2460.0,63.0,23.0,31938.002,713.038,1089.153,493.688,12.643,4.616,1.04,176.0,35.321,1750.0,351.201,,,,,24583.0,2694345.0,540.718,4.933,24815.0,4.98,0.2187,4.6,tests performed,79827.0,79769.0,65.0,,9858.0,9177.0,1.6,1.6,0.0,,1842.0,9174.0,0.184,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-14,163057.0,3913.0,5057.143,2488.0,28.0,25.857,32723.287,785.285,1014.899,499.307,5.619,5.189,0.97,173.0,34.719,1792.0,359.63,,,,,28178.0,2722523.0,546.373,5.655,24754.0,4.968,0.2043,4.9,tests performed,87875.0,87815.0,67.0,,8048.0,8654.0,1.76,1.76,0.0,,1737.0,8650.0,0.174,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-15,166548.0,3491.0,4380.571,2536.0,48.0,29.857,33423.883,700.595,879.12,508.94,9.633,5.992,0.91,187.0,37.528,1846.0,370.467,,,,,22833.0,2745356.0,550.955,4.582,24113.0,4.839,0.1817,5.5,tests performed,95526.0,95464.0,69.0,,7651.0,7938.0,1.92,1.92,0.0,,1593.0,7935.0,0.159,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-16,169780.0,3232.0,4150.429,2595.0,59.0,37.0,34072.501,648.618,832.934,520.781,11.84,7.425,0.85,191.0,38.331,1848.0,370.868,,,,,26663.0,2772019.0,556.306,5.351,23640.0,4.744,0.1756,5.7,tests performed,100733.0,100668.0,72.0,,5207.0,7529.0,2.02,2.02,0.0,,1511.0,7526.0,0.151,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-17,172726.0,2946.0,3587.571,2608.0,13.0,37.714,34663.722,591.222,719.976,523.39,2.609,7.569,0.8,196.0,39.334,1923.0,385.92,59.0,11.885,1078.0,216.339,21441.0,2793460.0,560.609,4.303,23205.0,4.657,0.1546,6.5,tests performed,101838.0,101769.0,76.0,,1105.0,7007.0,2.04,2.04,0.0,,1406.0,7004.0,0.141,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-18,174843.0,2117.0,3186.286,2616.0,8.0,37.714,35088.575,424.853,639.444,524.995,1.605,7.569,0.77,199.0,39.937,2020.0,405.386,,,,,18191.0,2811651.0,564.26,3.651,22976.0,4.611,0.1387,7.2,tests performed,110516.0,110443.0,80.0,,8678.0,7057.0,2.22,2.22,0.0,,1416.0,7054.0,0.142,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-19,176839.0,1996.0,3035.429,2708.0,92.0,44.429,35489.144,400.57,609.169,543.458,18.463,8.916,0.74,209.0,41.943,1954.0,392.141,,,,,19218.0,2830869.0,568.116,3.857,23015.0,4.619,0.1319,7.6,tests performed,118882.0,118794.0,95.0,,8366.0,6988.0,2.39,2.38,0.0,,1402.0,6983.0,0.14,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-20,179324.0,2485.0,2882.857,2768.0,60.0,44.0,35987.85,498.705,578.55,555.499,12.041,8.83,0.72,210.0,42.144,1941.0,389.532,,,,,24296.0,2855165.0,572.992,4.876,22974.0,4.611,0.1255,8.0,tests performed,128266.0,127222.0,1051.0,,9384.0,6920.0,2.57,2.55,0.02,,1389.0,6779.0,0.136,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-21,181922.0,2598.0,2695.0,2818.0,50.0,47.143,36509.232,521.383,540.849,565.534,10.034,9.461,0.7,214.0,42.947,1949.0,391.137,,,,,23196.0,2878361.0,577.647,4.655,22263.0,4.468,0.1211,8.3,tests performed,138172.0,136172.0,2007.0,,9906.0,7185.0,2.77,2.73,0.04,,1442.0,6908.0,0.139,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-22,184279.0,2357.0,2533.0,2870.0,52.0,47.714,36982.25,473.017,508.338,575.969,10.436,9.576,0.68,218.0,43.75,1969.0,395.151,,,,,24189.0,2902550.0,582.502,4.854,22456.0,4.507,0.1128,8.9,tests performed,145869.0,142907.0,2969.0,,7697.0,7192.0,2.93,2.87,0.06,,1443.0,6778.0,0.136,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-23,186184.0,1905.0,2343.429,2947.0,77.0,50.286,37364.557,382.307,470.294,591.422,15.453,10.092,0.65,216.0,43.348,1893.0,379.899,,,,,21492.0,2924042.0,586.815,4.313,21718.0,4.359,0.1079,9.3,tests performed,150480.0,147062.0,3425.0,,4611.0,7107.0,3.02,2.95,0.07,,1426.0,6628.0,0.133,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-24,187554.0,1370.0,2118.286,2970.0,23.0,51.714,37639.497,274.94,425.111,596.038,4.616,10.378,0.63,221.0,44.352,1914.0,384.113,66.0,13.295,725.0,145.434,19593.0,2943635.0,590.747,3.932,21454.0,4.306,0.0987,10.1,tests performed,152046.0,148232.0,3821.0,,1566.0,7173.0,3.05,2.97,0.08,,1440.0,6638.0,0.133,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-25,188923.0,1369.0,2011.429,2977.0,7.0,51.571,37914.236,274.739,403.666,597.443,1.405,10.35,0.62,218.0,43.75,1948.0,390.937,,,,,14884.0,2958519.0,593.734,2.987,20981.0,4.211,0.0959,10.4,tests performed,154660.0,149564.0,5103.0,,2614.0,6306.0,3.1,3.0,0.1,,1266.0,5589.0,0.112,85.19,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-26,189851.0,928.0,1858.857,3066.0,89.0,51.143,38100.473,186.237,373.047,615.304,17.861,10.264,0.62,216.0,43.348,1823.0,365.851,,,,,16665.0,2975184.0,597.078,3.344,20616.0,4.137,0.0902,11.1,tests performed,159137.0,150546.0,8598.0,,4477.0,5751.0,3.19,3.02,0.17,,1154.0,4536.0,0.091,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-27,191182.0,1331.0,1694.0,3120.0,54.0,50.286,38367.586,267.113,339.962,626.141,10.837,10.092,0.62,212.0,42.545,1727.0,346.585,,,,,22387.0,2997571.0,601.571,4.493,20344.0,4.083,0.0833,12.0,tests performed,167972.0,152687.0,15292.0,,8835.0,5672.0,3.37,3.06,0.31,,1138.0,3638.0,0.073,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-28,192645.0,1463.0,1531.857,3167.0,47.0,49.857,38661.19,293.604,307.423,635.573,9.432,10.006,0.63,214.0,42.947,1620.0,325.112,,,,,21780.0,3019351.0,605.942,4.371,20141.0,4.042,0.0761,13.1,tests performed,180458.0,153637.0,26828.0,,12486.0,6041.0,3.62,3.08,0.54,,1212.0,2495.0,0.05,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-29,193892.0,1247.0,1373.286,3214.0,47.0,49.143,38911.446,250.256,275.599,645.005,9.432,9.862,0.63,211.0,42.345,1552.0,311.465,,,,,21943.0,3041294.0,610.346,4.404,19821.0,3.978,0.0693,14.4,tests performed,193518.0,155174.0,38351.0,,13060.0,6807.0,3.88,3.11,0.77,,1366.0,1752.0,0.035,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-30,195303.0,1411.0,1302.714,3292.0,78.0,49.286,39194.614,283.168,261.437,660.659,15.654,9.891,0.64,213.0,42.746,1494.0,299.825,,,,,21598.0,3062892.0,614.68,4.334,19836.0,3.981,0.0657,15.2,tests performed,201917.0,155780.0,46144.0,,8399.0,7348.0,4.05,3.13,0.93,,1475.0,1245.0,0.025,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-01-31,196547.0,1244.0,1284.714,3307.0,15.0,48.143,39444.268,249.654,257.824,663.669,3.01,9.662,0.65,211.0,42.345,1515.0,304.04,67.0,13.496,553.0,110.989,17649.0,3080541.0,618.222,3.542,19558.0,3.925,0.0657,15.2,tests performed,206201.0,155984.0,50224.0,,4284.0,7736.0,4.14,3.13,1.01,,1553.0,1107.0,0.022,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,800.6,2.3,20.01,160.66936067803\r\nIRL,Europe,Ireland,2021-02-01,197553.0,1006.0,1232.857,3317.0,10.0,48.571,39646.158,201.89,247.417,665.676,2.007,9.748,0.66,207.0,41.542,1529.0,306.849,,,,,15047.0,3095588.0,621.242,3.02,19581.0,3.93,0.063,15.9,tests performed,215513.0,156965.0,58555.0,,9312.0,8693.0,4.33,3.15,1.18,,1745.0,1057.0,0.021,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-02,198424.0,871.0,1224.714,3418.0,101.0,50.286,39820.956,174.798,245.783,685.945,20.269,10.092,0.67,207.0,41.542,1418.0,284.573,,,,,16329.0,3111917.0,624.519,3.277,19533.0,3.92,0.0627,15.9,tests performed,221412.0,157768.0,63651.0,,5899.0,8896.0,4.44,3.17,1.28,,1785.0,1032.0,0.021,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-03,199430.0,1006.0,1178.286,3512.0,94.0,56.0,40022.846,201.89,236.466,704.81,18.865,11.238,0.67,202.0,40.539,1366.0,274.137,,,,,18442.0,3130359.0,628.22,3.701,18970.0,3.807,0.0621,16.1,tests performed,229634.0,159131.0,70510.0,,8222.0,8809.0,4.61,3.19,1.42,,1768.0,921.0,0.018,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-04,200744.0,1314.0,1157.0,3586.0,74.0,59.857,40286.548,263.702,232.194,719.661,14.851,12.013,0.69,187.0,37.528,1308.0,262.498,,,,,20214.0,3150573.0,632.276,4.057,18746.0,3.762,0.0617,16.2,tests performed,241553.0,160520.0,81040.0,,11919.0,8728.0,4.85,3.22,1.63,,1752.0,983.0,0.02,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-05,201763.0,1019.0,1124.429,3621.0,35.0,58.143,40491.047,204.499,225.657,726.685,7.024,11.668,0.69,181.0,36.324,1258.0,252.463,,,,,20278.0,3170851.0,636.346,4.07,18508.0,3.714,0.0608,16.5,tests performed,253514.0,163878.0,89643.0,,11961.0,8571.0,5.09,3.29,1.8,,1720.0,1243.0,0.025,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-06,202548.0,785.0,1035.0,3674.0,53.0,54.571,40648.586,157.539,207.71,737.321,10.636,10.952,0.69,180.0,36.124,1199.0,240.623,,,,,19497.0,3190348.0,640.259,3.913,18208.0,3.654,0.0568,17.6,tests performed,258251.0,164754.0,93504.0,,4737.0,8048.0,5.18,3.31,1.88,,1615.0,1282.0,0.026,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-07,203568.0,1020.0,1003.0,3686.0,12.0,54.143,40853.286,204.7,201.288,739.729,2.408,10.866,0.71,179.0,35.923,1203.0,241.425,54.0,10.877,417.0,83.595,15377.0,3205725.0,643.345,3.086,17883.0,3.589,0.0561,17.8,tests performed,259852.0,165060.0,94800.0,,1601.0,7664.0,5.21,3.31,1.9,,1538.0,1297.0,0.026,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-08,204397.0,829.0,977.714,3687.0,1.0,52.857,41019.654,166.369,196.214,739.93,0.201,10.608,0.72,175.0,35.12,1212.0,243.232,,,,,12697.0,3218422.0,645.893,2.548,17548.0,3.522,0.0557,17.9,tests performed,261846.0,166185.0,95669.0,,1994.0,6619.0,5.25,3.34,1.92,,1328.0,1317.0,0.026,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-09,204940.0,543.0,930.857,3752.0,65.0,47.714,41128.627,108.973,186.81,752.975,13.045,9.576,0.74,178.0,35.722,1104.0,221.558,,,,,15126.0,3233548.0,648.928,3.036,17376.0,3.487,0.0536,18.7,tests performed,266581.0,170392.0,96198.0,,4735.0,6453.0,5.35,3.42,1.93,,1295.0,1803.0,0.036,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-10,205939.0,999.0,929.857,3794.0,42.0,40.286,41329.113,200.486,186.609,761.403,8.429,8.085,0.76,170.0,34.117,1032.0,207.108,,,,,18213.0,3251761.0,652.584,3.655,17343.0,3.481,0.0536,18.7,tests performed,275947.0,179183.0,96773.0,,9366.0,6616.0,5.54,3.6,1.94,,1328.0,2865.0,0.057,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-11,206801.0,862.0,865.286,3846.0,52.0,37.143,41502.104,172.991,173.651,771.839,10.436,7.454,0.77,170.0,34.117,984.0,197.475,,,,,17372.0,3269133.0,656.07,3.486,16937.0,3.399,0.0511,19.6,tests performed,282518.0,185321.0,97206.0,,6571.0,5852.0,5.67,3.72,1.95,,1174.0,3543.0,0.071,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-12,207720.0,919.0,851.0,3865.0,19.0,34.857,41686.535,184.431,170.784,775.652,3.813,6.995,0.79,173.0,34.719,959.0,192.458,,,,,18841.0,3287974.0,659.851,3.781,16732.0,3.358,0.0509,19.7,tests performed,287387.0,189675.0,97721.0,,4869.0,4839.0,5.77,3.81,1.96,,971.0,3685.0,0.074,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-13,208796.0,1076.0,892.571,3931.0,66.0,36.714,41902.473,215.938,179.127,788.897,13.245,7.368,0.8,170.0,34.117,898.0,180.216,,,,,18174.0,3306148.0,663.498,3.647,16543.0,3.32,0.054,18.5,tests performed,290480.0,190860.0,99629.0,,3093.0,4604.0,5.83,3.83,2.0,,924.0,3729.0,0.075,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-14,209582.0,786.0,859.143,3948.0,17.0,37.429,42060.212,157.739,172.418,792.309,3.412,7.511,0.8,160.0,32.11,899.0,180.417,47.0,9.467,309.0,62.041,14450.0,3320598.0,666.398,2.9,16410.0,3.293,0.0524,19.1,tests performed,293172.0,193533.0,99648.0,,2692.0,4760.0,5.88,3.88,2.0,,955.0,4068.0,0.082,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-15,210402.0,820.0,857.857,3948.0,0.0,37.286,42224.775,164.563,172.16,792.309,0.0,7.483,0.81,158.0,31.708,916.0,183.829,,,,,11452.0,3332050.0,668.696,2.298,16233.0,3.258,0.0528,18.9,tests performed,302968.0,195461.0,107516.0,,9796.0,5875.0,6.08,3.92,2.16,,1179.0,4182.0,0.084,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-16,211113.0,711.0,881.857,3980.0,32.0,32.571,42367.463,142.688,176.977,798.731,6.422,6.537,0.82,155.0,31.106,861.0,172.791,,,,,13119.0,3345169.0,671.329,2.633,15946.0,3.2,0.0553,18.1,tests performed,316715.0,201062.0,115662.0,,13747.0,7162.0,6.36,4.04,2.32,,1437.0,4381.0,0.088,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-17,211751.0,638.0,830.286,4036.0,56.0,34.571,42495.501,128.038,166.627,809.969,11.238,6.938,0.82,154.0,30.906,831.0,166.77,,,,,17122.0,3362291.0,674.765,3.436,15790.0,3.169,0.0526,19.0,tests performed,334874.0,210763.0,124120.0,,18159.0,8418.0,6.72,4.23,2.49,,1689.0,4511.0,0.091,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-18,212647.0,896.0,835.143,4082.0,46.0,33.714,42675.315,179.815,167.602,819.201,9.232,6.766,0.83,151.0,30.304,771.0,154.729,,,,,15829.0,3378120.0,677.942,3.177,15570.0,3.125,0.0536,18.6,tests performed,351632.0,219196.0,132445.0,,16758.0,9873.0,7.06,4.4,2.66,,1981.0,4839.0,0.097,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-19,213400.0,753.0,811.429,4109.0,27.0,34.857,42826.432,151.117,162.843,824.62,5.419,6.995,0.83,153.0,30.705,754.0,151.317,,,,,17036.0,3395156.0,681.361,3.419,15312.0,3.073,0.053,18.9,tests performed,367563.0,228558.0,139014.0,,15931.0,11454.0,7.38,4.59,2.79,,2299.0,5555.0,0.111,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-20,214378.0,978.0,797.429,4135.0,26.0,29.143,43022.703,196.271,160.033,829.837,5.218,5.849,0.83,149.0,29.902,719.0,144.293,,,,,15606.0,3410762.0,684.493,3.132,14945.0,2.999,0.0534,18.7,tests performed,376985.0,234416.0,142579.0,,9422.0,12358.0,7.57,4.7,2.86,,2480.0,6222.0,0.125,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-21,215057.0,679.0,782.143,4136.0,1.0,26.857,43158.969,136.266,156.965,830.038,0.201,5.39,0.83,151.0,30.304,744.0,149.311,38.0,7.654,316.0,63.451,14901.0,3425663.0,687.483,2.99,15009.0,3.012,0.0521,19.2,tests performed,379094.0,235510.0,143598.0,,2109.0,12275.0,7.61,4.73,2.88,,2463.0,5997.0,0.12,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-22,215743.0,686.0,763.0,4137.0,1.0,27.0,43296.64,137.671,153.124,830.239,0.201,5.419,0.83,156.0,31.307,726.0,145.698,,,,,11828.0,3437491.0,689.857,2.374,15063.0,3.023,0.0507,19.7,tests performed,384111.0,239428.0,144698.0,,5017.0,11592.0,7.71,4.8,2.9,,2326.0,6281.0,0.126,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-23,216300.0,557.0,741.0,4181.0,44.0,28.714,43408.422,111.782,148.708,839.069,8.83,5.763,0.83,151.0,30.304,693.0,139.076,,,,,13841.0,3451332.0,692.635,2.778,15166.0,3.044,0.0489,20.5,tests performed,398493.0,252756.0,145752.0,,14382.0,11683.0,8.0,5.07,2.93,,2345.0,7385.0,0.148,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-24,216840.0,540.0,727.0,4237.0,56.0,28.714,43516.793,108.371,145.899,850.307,11.238,5.763,0.82,136.0,27.293,652.0,130.847,,,,,16607.0,3467939.0,695.967,3.333,15093.0,3.029,0.0482,20.8,tests performed,417470.0,269647.0,147840.0,,18977.0,11799.0,8.38,5.41,2.97,,2368.0,8412.0,0.169,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-25,217478.0,638.0,690.143,4271.0,34.0,27.0,43644.83,128.038,138.502,857.131,6.823,5.419,0.83,141.0,28.297,591.0,118.606,,,,,18206.0,3486145.0,699.621,3.654,15432.0,3.097,0.0447,22.4,tests performed,437228.0,287668.0,149578.0,,19758.0,12228.0,8.77,5.77,3.0,,2454.0,9782.0,0.196,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-26,218251.0,773.0,693.0,4300.0,29.0,27.286,43799.961,155.13,139.076,862.951,5.82,5.476,0.84,136.0,27.293,574.0,115.194,,,,,19178.0,3505323.0,703.47,3.849,15738.0,3.158,0.044,22.7,tests performed,456025.0,303717.0,152326.0,,18797.0,12637.0,9.15,6.1,3.06,,2536.0,10737.0,0.215,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-27,218980.0,729.0,657.429,4313.0,13.0,25.429,43946.261,146.3,131.937,865.56,2.609,5.103,0.84,134.0,26.892,550.0,110.377,,,,,18273.0,3523596.0,707.137,3.667,16119.0,3.235,0.0408,24.5,tests performed,465668.0,312663.0,153024.0,,9643.0,12669.0,9.35,6.27,3.07,,2542.0,11178.0,0.224,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-02-28,219592.0,612.0,647.857,4319.0,6.0,26.143,44069.081,122.82,130.016,866.764,1.204,5.247,0.84,134.0,26.892,554.0,111.18,32.0,6.446,196.0,39.279,13102.0,3536698.0,709.766,2.629,15862.0,3.183,0.0408,24.5,tests performed,468136.0,315085.0,153071.0,,2468.0,12720.0,9.39,6.32,3.07,,2553.0,11368.0,0.228,87.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,1190.4,3.17,14.14,238.896836061863\r\nIRL,Europe,Ireland,2021-03-01,220273.0,681.0,647.143,4319.0,0.0,26.0,44205.748,136.667,129.873,866.764,0.0,5.218,0.83,117.0,23.48,540.0,108.371,,,,,12210.0,3548908.0,712.217,2.45,15917.0,3.194,0.0407,24.6,tests performed,474454.0,320627.0,153847.0,,6318.0,12906.0,9.52,6.43,3.09,,2590.0,11600.0,0.233,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-02,220630.0,357.0,618.571,4333.0,14.0,21.714,44277.393,71.645,124.139,869.573,2.81,4.358,0.82,115.0,23.079,498.0,99.942,,,,,11680.0,3560588.0,714.561,2.344,15608.0,3.132,0.0396,25.2,tests performed,488175.0,332758.0,155437.0,,13721.0,12812.0,9.8,6.68,3.12,,2571.0,11429.0,0.229,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-03,221189.0,559.0,621.286,4357.0,24.0,17.143,44389.577,112.184,124.683,874.39,4.816,3.44,0.82,110.0,22.075,489.0,98.136,,,,,15277.0,3575865.0,717.627,3.066,15418.0,3.094,0.0403,24.8,tests performed,502483.0,345575.0,156929.0,,14308.0,12145.0,10.08,6.94,3.15,,2437.0,10847.0,0.218,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-04,221649.0,460.0,595.857,4396.0,39.0,17.857,44481.892,92.316,119.58,882.216,7.827,3.584,0.82,105.0,21.072,460.0,92.316,,,,,14244.0,3590109.0,720.485,2.859,14852.0,2.981,0.0401,24.9,tests performed,522832.0,364248.0,158607.0,,20349.0,12229.0,10.49,7.31,3.18,,2454.0,10940.0,0.22,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-05,222169.0,520.0,559.714,4405.0,9.0,15.0,44586.249,104.357,112.327,884.023,1.806,3.01,0.83,100.0,20.069,426.0,85.492,,,,,16640.0,3606749.0,723.825,3.339,14489.0,2.908,0.0386,25.9,tests performed,543592.0,382630.0,160990.0,,20760.0,12510.0,10.91,7.68,3.23,,2511.0,11273.0,0.226,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-06,222699.0,530.0,531.286,4419.0,14.0,15.143,44692.613,106.364,106.622,886.832,2.81,3.039,0.84,103.0,20.671,414.0,83.084,,,,,13325.0,3620074.0,726.499,2.674,13783.0,2.766,0.0385,25.9,tests performed,554100.0,393014.0,161115.0,,10508.0,12633.0,11.12,7.89,3.23,,2535.0,11479.0,0.23,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-07,223219.0,520.0,518.143,4422.0,3.0,14.714,44796.97,104.357,103.984,887.434,0.602,2.953,0.86,103.0,20.671,423.0,84.89,34.0,6.849,168.0,33.639,13756.0,3633830.0,729.259,2.761,13876.0,2.785,0.0373,26.8,tests performed,555598.0,394505.0,161123.0,,1498.0,12495.0,11.15,7.92,3.23,,2508.0,11346.0,0.228,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-08,223651.0,432.0,482.571,4422.0,0.0,14.714,44883.666,86.696,96.845,887.434,0.0,2.953,0.87,101.0,20.269,418.0,83.887,,,,,10682.0,3644512.0,731.403,2.144,13658.0,2.741,0.0353,28.3,tests performed,563680.0,401107.0,162604.0,,8082.0,12747.0,11.31,8.05,3.26,,2558.0,11497.0,0.231,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-09,223957.0,306.0,475.286,4452.0,30.0,17.0,44945.076,61.41,95.383,893.455,6.021,3.412,0.89,93.0,18.664,397.0,79.672,,,,,13585.0,3658097.0,734.13,2.726,13930.0,2.796,0.0341,29.3,tests performed,580513.0,414856.0,165690.0,,16833.0,13191.0,11.65,8.33,3.33,,2647.0,11728.0,0.235,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-10,224588.0,631.0,485.571,4499.0,47.0,20.286,45071.709,126.633,97.447,902.887,9.432,4.071,0.92,92.0,18.463,370.0,74.254,,,,,15592.0,3673689.0,737.259,3.129,13975.0,2.805,0.0347,28.8,tests performed,598134.0,428510.0,169660.0,,17621.0,13664.0,12.0,8.6,3.4,,2742.0,11848.0,0.238,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-11,225179.0,591.0,504.286,4509.0,10.0,16.143,45190.315,118.606,101.203,904.894,2.007,3.24,0.93,87.0,17.46,359.0,72.046,,,,,15750.0,3689439.0,740.419,3.161,14190.0,2.848,0.0355,28.1,tests performed,618606.0,446902.0,171741.0,,20472.0,13682.0,12.41,8.97,3.45,,2746.0,11808.0,0.237,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-12,225820.0,641.0,521.571,4518.0,9.0,16.143,45318.955,128.64,104.672,906.7,1.806,3.24,0.94,86.0,17.259,344.0,69.036,,,,,16499.0,3705938.0,743.731,3.311,14170.0,2.844,0.0368,27.2,tests performed,637180.0,464154.0,173065.0,,18574.0,13370.0,12.79,9.31,3.47,,2683.0,11646.0,0.234,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-13,226358.0,538.0,522.714,4534.0,16.0,16.429,45426.924,107.969,104.902,909.911,3.211,3.297,0.94,85.0,17.058,340.0,68.233,,,,,16203.0,3722141.0,746.982,3.252,14581.0,2.926,0.0358,27.9,tests performed,645581.0,472392.0,173228.0,,8401.0,13069.0,12.96,9.48,3.48,,2623.0,11340.0,0.228,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-14,226741.0,383.0,503.143,4534.0,0.0,16.0,45503.787,76.863,100.974,909.911,0.0,3.211,0.94,86.0,17.259,349.0,70.039,28.0,5.64,156.0,31.222,13349.0,3735490.0,749.661,2.679,14523.0,2.915,0.0346,28.9,tests performed,645939.0,472737.0,173242.0,,358.0,12906.0,12.96,9.49,3.48,,2590.0,11176.0,0.224,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-15,227316.0,575.0,523.571,4534.0,0.0,16.0,45619.181,115.395,105.074,909.911,0.0,3.211,0.96,85.0,17.058,360.0,72.247,,,,,10586.0,3746076.0,751.786,2.124,14509.0,2.912,0.0361,27.7,tests performed,649489.0,475311.0,174218.0,,3550.0,12258.0,13.03,9.54,3.5,,2460.0,10601.0,0.213,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-16,227663.0,347.0,529.429,4552.0,18.0,14.286,45688.819,69.638,106.249,913.524,3.612,2.867,0.97,85.0,17.058,355.0,71.244,,,,,11392.0,3757468.0,754.072,2.286,14196.0,2.849,0.0373,26.8,tests performed,662153.0,484182.0,178011.0,,12664.0,11663.0,13.29,9.72,3.57,,2341.0,9904.0,0.199,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-17,228215.0,552.0,518.143,4566.0,14.0,9.571,45799.598,110.779,103.984,916.333,2.81,1.921,0.98,82.0,16.456,350.0,70.24,,,,,15990.0,3773458.0,757.281,3.209,14253.0,2.86,0.0364,27.5,tests performed,669389.0,489022.0,180413.0,,7236.0,10179.0,13.43,9.81,3.62,,2043.0,8645.0,0.173,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-18,228796.0,581.0,516.714,4566.0,0.0,8.143,45916.197,116.599,103.697,916.333,0.0,1.634,0.99,83.0,16.657,345.0,69.237,,,,,13514.0,3786972.0,759.993,2.712,13933.0,2.796,0.0371,27.0,tests performed,685693.0,500664.0,185077.0,,16304.0,9584.0,13.76,10.05,3.71,,1923.0,7680.0,0.154,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-19,229306.0,510.0,498.0,4576.0,10.0,8.286,46018.547,102.35,99.942,918.34,2.007,1.663,1.0,87.0,17.46,336.0,67.431,,,,,12942.0,3799914.0,762.59,2.597,13425.0,2.694,0.0371,27.0,tests performed,702057.0,510929.0,191177.0,,16364.0,9268.0,14.09,10.25,3.84,,1860.0,6682.0,0.134,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-20,229831.0,525.0,496.143,4585.0,9.0,7.286,46123.907,105.36,99.569,920.146,1.806,1.462,1.01,83.0,16.657,328.0,65.825,,,,,16621.0,3816535.0,765.926,3.336,13485.0,2.706,0.0368,27.2,tests performed,710312.0,516089.0,194274.0,,8255.0,9247.0,14.25,10.36,3.9,,1856.0,6242.0,0.125,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-21,230599.0,768.0,551.143,4587.0,2.0,7.571,46278.034,154.127,110.607,920.548,0.401,1.519,1.03,80.0,16.055,360.0,72.247,24.0,4.834,194.0,38.876,14882.0,3831417.0,768.912,2.987,13704.0,2.75,0.0402,24.9,tests performed,713932.0,519667.0,194317.0,,3620.0,9713.0,14.33,10.43,3.9,,1949.0,6704.0,0.135,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-22,231119.0,520.0,543.286,4588.0,1.0,7.714,46382.391,104.357,109.03,920.748,0.201,1.548,1.02,80.0,16.055,359.0,72.046,,,,,12722.0,3844139.0,771.466,2.553,14009.0,2.811,0.0388,25.8,tests performed,723638.0,526993.0,196697.0,,9706.0,10593.0,14.52,10.58,3.95,,2126.0,7383.0,0.148,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-23,231484.0,365.0,545.857,4610.0,22.0,8.286,46455.641,73.25,109.546,925.163,4.415,1.663,1.02,76.0,15.252,357.0,71.645,,,,,15044.0,3859183.0,774.485,3.019,14531.0,2.916,0.0376,26.6,tests performed,743484.0,539478.0,204060.0,,19846.0,11619.0,14.92,10.83,4.1,,2332.0,7899.0,0.159,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-24,232164.0,680.0,564.143,4628.0,18.0,8.857,46592.108,136.467,113.216,928.776,3.612,1.778,1.02,75.0,15.051,329.0,66.026,,,,,20112.0,3879295.0,778.521,4.036,15120.0,3.034,0.0373,26.8,tests performed,766761.0,553008.0,213807.0,,23277.0,13910.0,15.39,11.1,4.29,,2792.0,9141.0,0.183,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-25,232758.0,594.0,566.0,4631.0,3.0,9.286,46711.315,119.208,113.588,929.378,0.602,1.864,1.01,75.0,15.051,312.0,62.614,,,,,17979.0,3897274.0,782.129,3.608,15757.0,3.162,0.0359,27.8,tests performed,797731.0,573785.0,224002.0,,30970.0,16005.0,16.01,11.52,4.5,,3212.0,10446.0,0.21,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-26,233327.0,569.0,574.429,4651.0,20.0,10.714,46825.506,114.19,115.28,933.391,4.014,2.15,1.0,66.0,13.245,317.0,63.618,,,,,18491.0,3915765.0,785.84,3.711,16550.0,3.321,0.0347,28.8,tests performed,826801.0,593404.0,233454.0,,29070.0,17821.0,16.59,11.91,4.69,,3576.0,11782.0,0.236,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-27,233937.0,610.0,586.571,4653.0,2.0,9.714,46947.924,122.419,117.717,933.793,0.401,1.95,0.99,65.0,13.045,304.0,61.009,,,,,21134.0,3936899.0,790.081,4.241,17195.0,3.451,0.0341,29.3,tests performed,843774.0,605067.0,238764.0,,16973.0,19066.0,16.93,12.14,4.79,,3826.0,12711.0,0.255,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-28,234541.0,604.0,563.143,4666.0,13.0,11.286,47069.139,121.214,113.015,936.402,2.609,2.265,0.99,68.0,13.647,322.0,64.621,21.0,4.23,146.0,29.208,19619.0,3956518.0,794.019,3.937,17872.0,3.587,0.0315,31.7,tests performed,,,,,,21196.0,,,,,4254.0,13977.0,0.28,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-29,235078.0,537.0,565.571,4667.0,1.0,11.286,47176.907,107.768,113.502,936.602,0.201,2.265,0.97,70.0,14.048,331.0,66.427,,,,,13507.0,3970025.0,796.729,2.711,17984.0,3.609,0.0314,31.8,tests performed,880832.0,629943.0,250950.0,,,22456.0,17.68,12.64,5.04,,4507.0,14707.0,0.295,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-30,235444.0,366.0,565.714,4681.0,14.0,10.143,47250.358,73.451,113.531,939.412,2.81,2.036,0.96,65.0,13.045,310.0,62.213,,,,,14957.0,3984982.0,799.731,3.002,17971.0,3.607,0.0315,31.8,tests performed,906979.0,645650.0,261391.0,,26147.0,23356.0,18.2,12.96,5.25,,4687.0,15167.0,0.304,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-03-31,235854.0,410.0,527.143,4687.0,6.0,8.429,47332.64,82.281,105.79,940.616,1.204,1.691,0.95,64.0,12.844,297.0,59.604,,,,,21152.0,4006134.0,803.976,4.245,18120.0,3.636,0.0291,34.4,tests performed,938154.0,665245.0,272974.0,,31175.0,24485.0,18.83,13.35,5.48,,4914.0,16034.0,0.322,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,951.6,2.35,-8.32,190.97297479542\r\nIRL,Europe,Ireland,2021-04-01,236600.0,746.0,548.857,4705.0,18.0,10.571,47482.352,149.712,110.148,944.229,3.612,2.122,0.95,63.0,12.643,274.0,54.988,,,,,19535.0,4025669.0,807.896,3.92,18342.0,3.681,0.0299,33.4,tests performed,971892.0,685302.0,286659.0,,33738.0,24880.0,19.5,13.75,5.75,,4993.0,15931.0,0.32,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-02,237187.0,587.0,551.429,4713.0,8.0,8.857,47600.154,117.803,110.664,945.834,1.605,1.778,0.94,62.0,12.443,264.0,52.981,,,,,19031.0,4044700.0,811.715,3.819,18419.0,3.696,0.0299,33.4,tests performed,983974.0,692777.0,291266.0,,12082.0,22453.0,19.75,13.9,5.85,,4506.0,14196.0,0.285,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-03,237695.0,508.0,536.857,4715.0,2.0,8.857,47702.103,101.949,107.74,946.235,0.401,1.778,0.92,65.0,13.045,242.0,48.566,,,,,16662.0,4061362.0,815.059,3.344,17780.0,3.568,0.0302,33.1,tests performed,987105.0,695748.0,291426.0,,3131.0,20476.0,19.81,13.96,5.85,,4109.0,12954.0,0.26,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-04,238148.0,453.0,515.286,4718.0,3.0,7.429,47793.014,90.911,103.411,946.837,0.602,1.491,0.9,58.0,11.64,242.0,48.566,26.0,5.237,118.0,23.769,13946.0,4075308.0,817.858,2.799,16970.0,3.406,0.0304,32.9,tests performed,991057.0,699119.0,292010.0,,3952.0,18393.0,19.89,14.03,5.86,,3691.0,11659.0,0.234,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-05,238466.0,318.0,484.0,4718.0,0.0,7.286,47856.832,63.818,97.132,946.837,0.0,1.462,0.89,58.0,11.64,260.0,52.178,,,,,11954.0,4087262.0,820.257,2.399,16748.0,3.361,0.0289,34.6,tests performed,1011064.0,711005.0,300136.0,,20007.0,18605.0,20.29,14.27,6.02,,3734.0,11580.0,0.232,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-06,238907.0,441.0,494.714,4727.0,9.0,6.571,47945.335,88.503,99.282,948.644,1.806,1.319,0.89,60.0,12.041,261.0,52.379,,,,,13864.0,4101126.0,823.039,2.782,16592.0,3.33,0.0298,33.5,tests performed,1039734.0,729247.0,310567.0,,28670.0,18965.0,20.87,14.63,6.23,,3806.0,11942.0,0.24,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-07,239325.0,418.0,495.857,4732.0,5.0,6.429,48029.222,83.887,99.512,949.647,1.003,1.29,0.88,56.0,11.238,232.0,46.559,,,,,16151.0,4117277.0,826.281,3.241,15878.0,3.186,0.0312,32.0,tests performed,1070342.0,749328.0,321102.0,,30608.0,18884.0,21.48,15.04,6.44,,3790.0,12012.0,0.241,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-08,239723.0,398.0,446.143,4737.0,5.0,4.571,48109.095,79.873,89.535,950.65,1.003,0.917,0.87,55.0,11.038,226.0,45.355,,,,,19214.0,4136491.0,830.137,3.856,15832.0,3.177,0.0282,35.5,tests performed,1100079.0,769949.0,330227.0,,29737.0,18312.0,22.08,15.45,6.63,,3675.0,12092.0,0.243,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-09,240192.0,469.0,429.286,4769.0,32.0,8.0,48203.216,94.122,86.152,957.072,6.422,1.605,0.88,53.0,10.636,212.0,42.545,,,,,16795.0,4153286.0,833.507,3.371,15512.0,3.113,0.0277,36.1,tests performed,1115296.0,781032.0,334368.0,,15217.0,18760.0,22.38,15.67,6.71,,3765.0,12608.0,0.253,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-10,240643.0,451.0,421.143,4783.0,14.0,9.714,48293.726,90.509,84.518,959.882,2.81,1.95,0.88,52.0,10.436,208.0,41.743,,,,,16849.0,4170135.0,836.888,3.381,15539.0,3.118,0.0271,36.9,tests performed,1118430.0,783834.0,334701.0,,3134.0,18761.0,22.45,15.73,6.72,,3765.0,12584.0,0.253,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-11,240945.0,302.0,399.571,4785.0,2.0,9.571,48354.333,60.607,80.188,960.283,0.401,1.921,0.88,53.0,10.636,213.0,42.746,15.0,3.021,81.0,16.316,14355.0,4184490.0,839.769,2.881,15597.0,3.13,0.0256,39.0,tests performed,1128869.0,791533.0,337447.0,,10439.0,19687.0,22.65,15.88,6.77,,3951.0,13202.0,0.265,84.26,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-12,241330.0,385.0,409.143,4785.0,0.0,9.571,48431.597,77.264,82.109,960.283,0.0,1.921,0.89,50.0,10.034,227.0,45.556,,,,,11918.0,4196408.0,842.161,2.392,15592.0,3.129,0.0262,38.1,tests performed,1148824.0,802949.0,345986.0,,19955.0,19680.0,23.06,16.11,6.94,,3950.0,13135.0,0.264,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-13,241684.0,354.0,396.714,4803.0,18.0,10.857,48502.64,71.043,79.615,963.896,3.612,2.179,0.9,48.0,9.633,206.0,41.341,,,,,13650.0,4210058.0,844.9,2.739,15562.0,3.123,0.0255,39.2,tests performed,1175628.0,823207.0,352534.0,,26804.0,19413.0,23.59,16.52,7.07,,3896.0,13423.0,0.269,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-14,242105.0,421.0,397.143,4812.0,9.0,11.429,48587.129,84.489,79.701,965.702,1.806,2.294,0.9,49.0,9.834,192.0,38.532,,,,,16872.0,4226930.0,848.286,3.386,15665.0,3.144,0.0254,39.4,tests performed,1213389.0,850230.0,363273.0,,37761.0,20435.0,24.35,17.06,7.29,,4101.0,14415.0,0.289,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-15,242402.0,297.0,382.714,4820.0,8.0,11.857,48646.733,59.604,76.805,967.307,1.605,2.38,0.9,51.0,10.235,184.0,36.926,,,,,14926.0,4241856.0,851.282,2.995,15052.0,3.021,0.0254,39.3,tests performed,1251052.0,878112.0,373055.0,,37663.0,21568.0,25.11,17.62,7.49,,4328.0,15452.0,0.31,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-16,242819.0,417.0,375.286,4831.0,11.0,8.857,48730.419,83.686,75.315,969.515,2.208,1.778,0.92,53.0,10.636,190.0,38.13,,,,,15404.0,4257260.0,854.373,3.091,14853.0,2.981,0.0253,39.6,tests performed,1271324.0,893875.0,377565.0,,20272.0,22290.0,25.51,17.94,7.58,,4473.0,16120.0,0.324,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-17,243238.0,419.0,370.714,4835.0,4.0,7.429,48814.507,84.088,74.397,970.318,0.803,1.491,0.94,50.0,10.034,183.0,36.726,,,,,14999.0,4272259.0,857.383,3.01,14589.0,2.928,0.0254,39.4,tests performed,1272785.0,894893.0,378008.0,,1461.0,22051.0,25.54,17.96,7.59,,4425.0,15866.0,0.318,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-18,243508.0,270.0,366.143,4836.0,1.0,7.286,48868.692,54.185,73.48,970.518,0.201,1.462,0.96,47.0,9.432,181.0,36.324,18.0,3.626,93.0,18.733,14507.0,4286766.0,860.295,2.911,14611.0,2.932,0.0251,39.9,tests performed,1281655.0,901563.0,380208.0,,8870.0,21827.0,25.72,18.09,7.63,,4380.0,15719.0,0.315,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-19,243911.0,403.0,368.714,4836.0,0.0,7.286,48949.568,80.877,73.996,970.518,0.0,1.462,0.99,50.0,10.034,183.0,36.726,,,,,11881.0,4298647.0,862.679,2.384,14606.0,2.931,0.0252,39.6,tests performed,1303886.0,916542.0,387460.0,,22231.0,22152.0,26.17,18.39,7.78,,4446.0,16228.0,0.326,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-20,244297.0,386.0,373.286,4847.0,11.0,6.286,49027.033,77.465,74.913,972.726,2.208,1.261,1.01,48.0,9.633,179.0,35.923,,,,,15085.0,4313732.0,865.706,3.027,14811.0,2.972,0.0252,39.7,tests performed,1340272.0,943131.0,397258.0,,36386.0,23521.0,26.9,18.93,7.97,,4720.0,17132.0,0.344,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-21,244695.0,398.0,370.0,4856.0,9.0,6.286,49106.906,79.873,74.254,974.532,1.806,1.261,1.03,47.0,9.432,182.0,36.525,,,,,19058.0,4332790.0,869.531,3.825,15123.0,3.035,0.0245,40.9,tests performed,1383928.0,974663.0,409382.0,,43656.0,24363.0,27.77,19.56,8.22,,4889.0,17776.0,0.357,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-22,245310.0,615.0,415.429,4866.0,10.0,6.571,49230.328,123.422,83.371,976.539,2.007,1.319,1.04,48.0,9.633,176.0,35.321,,,,,18095.0,4350885.0,873.163,3.631,15576.0,3.126,0.0267,37.5,tests performed,1429749.0,1008159.0,421707.0,,45821.0,25528.0,28.69,20.23,8.46,,5123.0,18578.0,0.373,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-23,245743.0,433.0,417.714,4867.0,1.0,5.143,49317.225,86.897,83.829,976.74,0.201,1.032,1.04,48.0,9.633,166.0,33.314,,,,,19557.0,4370442.0,877.087,3.925,16169.0,3.245,0.0258,38.7,tests performed,1460286.0,1031744.0,428659.0,,30537.0,26995.0,29.31,20.71,8.6,,5418.0,19696.0,0.395,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-24,246204.0,461.0,423.714,4872.0,5.0,5.286,49409.742,92.516,85.034,977.743,1.003,1.061,1.04,46.0,9.232,162.0,32.511,,,,,17803.0,4388245.0,880.66,3.573,16569.0,3.325,0.0256,39.1,tests performed,1470242.0,1041439.0,428921.0,,9956.0,28208.0,29.51,20.9,8.61,,5661.0,20935.0,0.42,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-25,246633.0,429.0,446.429,4873.0,1.0,5.286,49495.836,86.094,89.592,977.944,0.201,1.061,1.04,45.0,9.031,174.0,34.919,16.0,3.223,102.0,20.546,15829.0,4404074.0,883.837,3.177,16758.0,3.363,0.0266,37.5,tests performed,1488727.0,1056930.0,431916.0,,18485.0,29582.0,29.88,21.21,8.67,,5937.0,22195.0,0.445,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-26,247069.0,436.0,451.143,4874.0,1.0,5.429,49583.335,87.499,90.538,978.144,0.201,1.089,1.04,46.0,9.232,184.0,36.926,,,,,12839.0,4416913.0,886.413,2.577,16895.0,3.391,0.0267,37.4,tests performed,1522282.0,1082742.0,439663.0,,33555.0,31199.0,30.55,21.73,8.82,,6261.0,23743.0,0.476,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-27,247489.0,420.0,456.0,4884.0,10.0,5.286,49667.624,84.288,91.513,980.151,2.007,1.061,1.04,47.0,9.432,153.0,30.705,,,,,15273.0,4432186.0,889.479,3.065,16922.0,3.396,0.0269,37.1,tests performed,1556748.0,1108676.0,448199.0,,34466.0,30925.0,31.24,22.25,8.99,,6206.0,23649.0,0.475,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-28,247857.0,368.0,451.714,4896.0,12.0,5.714,49741.476,73.853,90.653,982.56,2.408,1.147,1.03,45.0,9.031,153.0,30.705,,,,,20498.0,4452684.0,893.592,4.114,17128.0,3.437,0.0264,37.9,tests performed,1599611.0,1140275.0,459464.0,,42863.0,30812.0,32.1,22.88,9.22,,6184.0,23659.0,0.475,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-29,248326.0,469.0,430.857,4899.0,3.0,4.714,49835.598,94.122,86.467,983.162,0.602,0.946,1.03,44.0,8.83,154.0,30.906,,,,,19880.0,4472564.0,897.582,3.99,17383.0,3.489,0.0248,40.3,tests performed,1649077.0,1176272.0,472934.0,,49466.0,31333.0,33.09,23.61,9.49,,6288.0,24016.0,0.482,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-04-30,248870.0,544.0,446.714,4903.0,4.0,5.143,49944.771,109.173,89.649,983.964,0.803,1.032,1.04,44.0,8.83,139.0,27.895,,,,,22296.0,4494860.0,902.056,4.474,17774.0,3.567,0.0251,39.8,tests performed,1672170.0,1192729.0,479578.0,,23093.0,30269.0,33.56,23.94,9.62,,6075.0,22998.0,0.462,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,902.6,2.1,-1.9,181.139351671234\r\nIRL,Europe,Ireland,2021-05-01,249437.0,567.0,461.857,4906.0,3.0,4.857,50058.56,113.789,92.688,984.566,0.602,0.975,1.03,41.0,8.228,123.0,24.684,,,,,18934.0,4513794.0,905.856,3.8,17936.0,3.6,0.0258,38.8,tests performed,1685396.0,1205081.0,480458.0,,13226.0,30736.0,33.82,24.18,9.64,,6168.0,23377.0,0.469,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-02,249838.0,401.0,457.857,4906.0,0.0,4.714,50139.035,80.475,91.886,984.566,0.0,0.946,1.02,41.0,8.228,127.0,25.487,14.0,2.82,78.0,15.712,17992.0,4531786.0,909.467,3.611,18245.0,3.662,0.0251,39.8,tests performed,1700435.0,1219239.0,481347.0,,15039.0,30244.0,34.13,24.47,9.66,,6070.0,23187.0,0.465,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-03,250290.0,452.0,460.143,4906.0,0.0,4.571,50229.746,90.71,92.344,984.566,0.0,0.917,1.01,40.0,8.027,129.0,25.889,,,,,13379.0,4545165.0,912.152,2.685,18322.0,3.677,0.0251,39.8,tests performed,1733663.0,1245747.0,488069.0,,33228.0,30197.0,34.79,25.0,9.79,,6060.0,23286.0,0.467,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-04,250672.0,382.0,454.714,4908.0,2.0,3.429,50306.408,76.662,91.255,984.968,0.401,0.688,0.99,41.0,8.228,144.0,28.899,,,,,14160.0,4559325.0,914.994,2.842,18163.0,3.645,0.025,39.9,tests performed,1779030.0,1277758.0,501489.0,,45367.0,31755.0,35.7,25.64,10.06,,6373.0,24155.0,0.485,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-05,251087.0,415.0,461.429,4915.0,7.0,2.714,50389.692,83.285,92.602,986.373,1.405,0.545,0.98,37.0,7.425,137.0,27.494,,,,,19503.0,4578828.0,918.908,3.914,18021.0,3.617,0.0256,39.1,tests performed,1830592.0,1315014.0,515916.0,,51562.0,32997.0,36.74,26.39,10.35,,6622.0,24963.0,0.501,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-06,251474.0,387.0,449.714,4921.0,6.0,3.143,50467.358,77.666,90.251,987.577,1.204,0.631,0.97,36.0,7.225,131.0,26.29,,,,,20862.0,4599690.0,923.094,4.187,18161.0,3.645,0.0248,40.4,tests performed,1886117.0,1355539.0,531002.0,,55525.0,33863.0,37.85,27.2,10.66,,6796.0,25610.0,0.514,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-07,251904.0,430.0,433.429,4918.0,-3.0,2.143,50553.653,86.295,86.983,986.975,-0.602,0.43,0.97,34.0,6.823,127.0,25.487,,,,,18793.0,4618483.0,926.866,3.771,17660.0,3.544,0.0245,40.7,tests performed,1918567.0,1381008.0,537988.0,,32450.0,35200.0,38.5,27.71,10.8,,7064.0,26897.0,0.54,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-08,252303.0,399.0,409.429,4919.0,1.0,1.857,50633.727,80.074,82.167,987.175,0.201,0.373,0.98,33.0,6.623,110.0,22.075,,,,,23787.0,4642270.0,931.639,4.774,18354.0,3.683,0.0223,44.8,tests performed,1939033.0,1400595.0,538868.0,,20466.0,36234.0,38.91,28.11,10.81,,7272.0,27931.0,0.561,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-09,252809.0,506.0,424.429,4921.0,2.0,2.143,50735.274,101.547,85.177,987.577,0.401,0.43,0.99,31.0,6.221,116.0,23.28,9.0,1.813,84.0,16.92,17071.0,4659341.0,935.065,3.426,18222.0,3.657,0.0233,42.9,tests performed,1972421.0,1429425.0,543591.0,,33388.0,38855.0,39.58,28.69,10.91,,7798.0,30027.0,0.603,80.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-10,253189.0,380.0,414.143,4921.0,0.0,2.143,50811.535,76.261,83.113,987.577,0.0,0.43,0.99,31.0,6.221,124.0,24.885,,,,,13518.0,4672859.0,937.778,2.713,18242.0,3.661,0.0227,44.0,tests performed,2021087.0,1463350.0,558477.0,,48666.0,41061.0,40.56,29.37,11.21,,8240.0,31086.0,0.624,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-11,253567.0,378.0,413.571,4929.0,8.0,3.0,50887.394,75.859,82.998,989.182,1.605,0.602,0.99,34.0,6.823,117.0,23.48,,,,,16710.0,4689569.0,941.132,3.353,18606.0,3.734,0.0222,45.0,tests performed,2073215.0,1494626.0,579477.0,,52128.0,42026.0,41.61,30.0,11.63,,8434.0,30981.0,0.622,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-12,254013.0,446.0,418.0,4937.0,8.0,3.143,50976.9,89.506,83.887,990.788,1.605,0.631,0.99,34.0,6.823,109.0,21.875,,,,,19634.0,4709203.0,945.072,3.94,18625.0,3.738,0.0224,44.6,tests performed,2134605.0,1530607.0,605023.0,,61390.0,43430.0,42.84,30.72,12.14,,8716.0,30799.0,0.618,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-13,254450.0,437.0,425.143,4937.0,0.0,2.286,51064.6,87.7,85.32,990.788,0.0,0.459,0.99,36.0,7.225,111.0,22.276,,,,,19701.0,4728904.0,949.026,3.954,18459.0,3.704,0.023,43.4,tests performed,2200772.0,1568882.0,633140.0,,66167.0,44951.0,44.17,31.49,12.71,,9021.0,30478.0,0.612,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-14,254870.0,420.0,423.714,4941.0,4.0,3.286,51148.888,84.288,85.034,991.59,0.803,0.659,0.98,39.0,7.827,,,,,,,19450.0,4748354.0,952.929,3.903,18553.0,3.723,0.0228,43.8,tests performed,2241851.0,1597583.0,645523.0,,41079.0,46183.0,44.99,32.06,12.95,,9268.0,30939.0,0.621,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-15,255331.0,461.0,432.571,4941.0,0.0,3.143,51241.405,92.516,86.811,991.59,0.0,0.631,0.99,40.0,8.027,,,,,,,21847.0,4770201.0,957.313,4.384,18276.0,3.668,0.0237,42.2,tests performed,2266042.0,1620648.0,646653.0,,24191.0,46716.0,45.48,32.52,12.98,,9375.0,31436.0,0.631,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-16,255706.0,375.0,413.857,4941.0,0.0,2.857,51316.662,75.257,83.055,991.59,0.0,0.573,0.99,42.0,8.429,,,4.0,0.806,,,14373.0,4784574.0,960.198,2.884,17890.0,3.59,0.0231,43.2,tests performed,2305294.0,1656014.0,650648.0,,39252.0,47553.0,46.26,33.23,13.06,,9543.0,32370.0,0.65,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-17,256085.0,379.0,413.714,4941.0,0.0,2.857,51392.722,76.06,83.027,991.59,0.0,0.573,1.0,42.0,8.429,110.0,22.075,,,,,13345.0,4797919.0,962.876,2.678,17866.0,3.585,0.0232,43.2,tests performed,2356696.0,1695012.0,663164.0,,51402.0,47944.0,47.3,34.02,13.31,,9622.0,33095.0,0.664,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-18,256450.0,365.0,411.857,4941.0,0.0,1.714,51465.972,73.25,82.654,991.59,0.0,0.344,1.01,39.0,7.827,102.0,20.47,,,,,16964.0,4814883.0,966.281,3.404,17902.0,3.593,0.023,43.5,tests performed,2411260.0,1732063.0,680872.0,,54564.0,48292.0,48.39,34.76,13.66,,9692.0,33920.0,0.681,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-19,256976.0,526.0,423.286,4941.0,0.0,0.571,51571.533,105.561,84.948,991.59,0.0,0.115,1.02,38.0,7.626,101.0,20.269,,,,,20743.0,4835626.0,970.443,4.163,18060.0,3.624,0.0234,42.7,tests performed,2469876.0,1771084.0,700580.0,,58616.0,47896.0,49.57,35.54,14.06,,9612.0,34354.0,0.689,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-20,257446.0,470.0,428.0,4941.0,0.0,0.571,51665.856,94.323,85.894,991.59,0.0,0.115,1.01,38.0,7.626,103.0,20.671,,,,,18572.0,4854198.0,974.17,3.727,17899.0,3.592,0.0239,41.8,tests performed,2533596.0,1811651.0,738646.0,,63720.0,47546.0,50.85,36.36,14.82,,9542.0,34681.0,0.696,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-21,257979.0,533.0,444.143,4941.0,0.0,0.0,51772.822,106.966,89.133,991.59,0.0,0.0,1.0,38.0,7.626,107.0,21.473,,,,,18950.0,4873148.0,977.973,3.803,17828.0,3.578,0.0249,40.1,tests performed,2573725.0,1841587.0,762335.0,,40129.0,47411.0,51.65,36.96,15.3,,9515.0,34858.0,0.7,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-22,258363.0,384.0,433.143,4941.0,0.0,0.0,51849.885,77.063,86.926,991.59,0.0,0.0,0.99,42.0,8.429,110.0,22.075,,,,,23519.0,4896667.0,982.693,4.72,18067.0,3.626,0.024,41.7,tests performed,2597523.0,1859901.0,778017.0,,23798.0,47354.0,52.13,37.33,15.61,,9503.0,34179.0,0.686,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-23,258810.0,447.0,443.429,4941.0,0.0,0.0,51939.592,89.707,88.99,991.59,0.0,0.0,0.99,43.0,8.63,116.0,23.28,7.0,1.41,88.0,17.726,16285.0,4912952.0,985.962,3.268,18340.0,3.681,0.0242,41.4,tests performed,2636446.0,1890689.0,794583.0,,38923.0,47307.0,52.91,37.94,15.95,,9494.0,33525.0,0.673,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-24,259159.0,349.0,439.143,4941.0,0.0,0.0,52009.631,70.039,88.13,991.59,0.0,0.0,0.98,44.0,8.83,127.0,25.487,,,,,12772.0,4925724.0,988.525,2.563,18258.0,3.664,0.0241,41.6,tests performed,2686190.0,1924016.0,814210.0,,49744.0,47071.0,53.91,38.61,16.34,,9446.0,32715.0,0.657,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-25,259512.0,353.0,437.429,4941.0,0.0,0.0,52080.474,70.842,87.786,991.59,0.0,0.0,0.98,41.0,8.228,103.0,20.671,,,,,16092.0,4941816.0,991.754,3.229,18133.0,3.639,0.0241,41.5,tests performed,2734310.0,1946806.0,842571.0,,48120.0,46150.0,54.87,39.07,16.91,,9262.0,30678.0,0.616,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-26,259957.0,445.0,425.857,4941.0,0.0,0.0,52169.779,89.305,85.464,991.59,0.0,0.0,0.98,41.0,8.228,99.0,19.868,,,,,21087.0,4962903.0,995.986,4.232,18182.0,3.649,0.0234,42.7,tests performed,2787578.0,1964168.0,879019.0,,53268.0,45386.0,55.94,39.42,17.64,,9108.0,27583.0,0.554,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-27,260389.0,432.0,420.429,4941.0,0.0,0.0,52256.475,86.696,84.374,991.59,0.0,0.0,0.98,39.0,7.827,101.0,20.269,,,,,17794.0,4980697.0,999.557,3.571,18071.0,3.627,0.0233,43.0,tests performed,2847672.0,1992524.0,912280.0,,60094.0,44868.0,57.15,39.99,18.31,,9004.0,25839.0,0.519,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-28,260850.0,461.0,410.143,4941.0,0.0,0.0,52348.992,92.516,82.31,991.59,0.0,0.0,0.97,38.0,7.626,99.0,19.868,,,,,17881.0,4998578.0,1003.146,3.588,17919.0,3.596,0.0229,43.7,tests performed,2879825.0,2017340.0,920121.0,,32153.0,43729.0,57.79,40.49,18.47,,8776.0,25108.0,0.504,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-29,261306.0,456.0,420.429,4941.0,0.0,0.0,52440.505,91.513,84.374,991.59,0.0,0.0,0.97,35.0,7.024,90.0,18.062,,,,,18905.0,5017483.0,1006.94,3.794,17259.0,3.464,0.0244,41.1,tests performed,2905766.0,2041657.0,921940.0,,25941.0,44035.0,58.31,40.97,18.5,,8837.0,25965.0,0.521,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-30,261673.0,367.0,409.0,4941.0,0.0,0.0,52514.156,73.652,82.081,991.59,0.0,0.0,0.97,35.0,7.024,99.0,19.868,15.0,3.021,71.0,14.302,16723.0,5034206.0,1010.296,3.356,17322.0,3.476,0.0236,42.4,tests performed,2938793.0,2067429.0,932611.0,,33027.0,43192.0,58.98,41.49,18.72,,8668.0,25249.0,0.507,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-05-31,262043.0,370.0,412.0,4941.0,0.0,0.0,52588.41,74.254,82.683,991.59,0.0,0.0,0.97,35.0,7.024,98.0,19.667,,,,,14129.0,5048335.0,1013.131,2.835,17516.0,3.515,0.0235,42.5,tests performed,2981113.0,2098344.0,947638.0,,42320.0,42132.0,59.83,42.11,19.02,,8455.0,24904.0,0.5,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,972.4,2.13,2.73,195.147247468544\r\nIRL,Europe,Ireland,2021-06-01,262380.0,337.0,409.714,4941.0,0.0,0.0,52656.042,67.631,82.224,991.59,0.0,0.0,0.97,34.0,6.823,89.0,17.861,,,,,16921.0,5065256.0,1016.527,3.396,17634.0,3.539,0.0232,43.0,tests performed,3024332.0,2120764.0,972410.0,,43219.0,41432.0,60.69,42.56,19.51,,8315.0,24851.0,0.499,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-02,262787.0,407.0,404.286,4941.0,0.0,0.0,52737.721,81.679,81.135,991.59,0.0,0.0,0.96,34.0,6.823,93.0,18.664,,,,,23042.0,5088298.0,1021.151,4.624,17914.0,3.595,0.0226,44.3,tests performed,3073355.0,2139198.0,1004957.0,,49023.0,40825.0,61.68,42.93,20.17,,8193.0,25004.0,0.502,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-03,263252.0,465.0,409.0,4941.0,0.0,0.0,52831.04,93.319,82.081,991.59,0.0,0.0,0.96,30.0,6.021,84.0,16.858,,,,,19005.0,5107303.0,1024.965,3.814,18087.0,3.63,0.0226,44.2,tests performed,3125561.0,2168158.0,1028326.0,,52206.0,39698.0,62.73,43.51,20.64,,7967.0,25091.0,0.504,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-04,263769.0,517.0,417.0,4941.0,0.0,0.0,52934.795,103.755,83.686,991.59,0.0,0.0,0.95,28.0,5.619,86.0,17.259,,,,,19272.0,5126575.0,1028.833,3.868,18285.0,3.67,0.0228,43.8,tests performed,3157734.0,2188931.0,1039736.0,,32173.0,39701.0,63.37,43.93,20.87,,7967.0,24513.0,0.492,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-05,264185.0,416.0,411.286,4941.0,0.0,0.0,53018.28,83.485,82.539,991.59,0.0,0.0,0.93,29.0,5.82,74.0,14.851,,,,,19182.0,5145757.0,1032.682,3.85,18325.0,3.678,0.0224,44.6,tests performed,3181366.0,2208728.0,1043585.0,,23632.0,39371.0,63.85,44.33,20.94,,7901.0,23867.0,0.479,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-06,264498.0,313.0,403.571,4941.0,0.0,0.0,53081.095,62.815,80.991,991.59,0.0,0.0,0.92,27.0,5.419,70.0,14.048,14.0,2.82,65.0,13.093,14558.0,5160315.0,1035.604,2.922,18016.0,3.616,0.0224,44.6,tests performed,3205439.0,2228342.0,1048055.0,,24073.0,38092.0,64.33,44.72,21.03,,7645.0,22988.0,0.461,55.56,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-07,264875.0,377.0,404.571,4941.0,0.0,0.0,53156.754,75.659,81.192,991.59,0.0,0.0,0.91,26.0,5.218,69.0,13.847,,,,,13686.0,5174001.0,1038.351,2.747,17952.0,3.603,0.0225,44.4,tests performed,3249906.0,2254594.0,1066291.0,,44467.0,38399.0,65.22,45.25,21.4,,7706.0,22321.0,0.448,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-08,265114.0,239.0,390.571,4941.0,0.0,0.0,53204.718,47.964,78.382,991.59,0.0,0.0,0.89,27.0,5.419,77.0,15.453,,,,,12211.0,5186212.0,1040.801,2.451,17279.0,3.468,0.0226,44.2,tests performed,3302625.0,2287318.0,1086435.0,,52719.0,39756.0,66.28,45.9,21.8,,7978.0,23793.0,0.477,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-09,265341.0,227.0,364.857,4941.0,0.0,0.0,53250.273,45.556,73.222,991.59,0.0,0.0,0.89,27.0,5.419,76.0,15.252,,,,,15850.0,5202062.0,1043.982,3.181,16252.0,3.262,0.0224,44.5,tests performed,3357696.0,2315031.0,1114032.0,,55071.0,40620.0,67.38,46.46,22.36,,8152.0,25119.0,0.504,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-10,265739.0,398.0,355.286,4941.0,0.0,0.0,53330.146,79.873,71.301,991.59,0.0,0.0,0.89,23.0,4.616,70.0,14.048,,,,,17980.0,5220042.0,1047.59,3.608,16106.0,3.232,0.0221,45.3,tests performed,3416726.0,2341286.0,1146817.0,,59030.0,41595.0,68.57,46.99,23.02,,8348.0,24733.0,0.496,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-11,266058.0,319.0,327.0,4941.0,0.0,0.0,53394.165,64.019,65.624,991.59,0.0,0.0,0.9,23.0,4.616,60.0,12.041,,,,,16980.0,5237022.0,1050.998,3.408,15778.0,3.166,0.0207,48.3,tests performed,3448449.0,2353400.0,1166510.0,,31723.0,41531.0,69.21,47.23,23.41,,8335.0,23496.0,0.472,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-12,266489.0,431.0,329.143,4941.0,0.0,0.0,53480.661,86.496,66.054,991.59,0.0,0.0,0.91,22.0,4.415,58.0,11.64,,,,,17777.0,5254799.0,1054.566,3.568,15577.0,3.126,0.0211,47.3,tests performed,3475794.0,2362646.0,1185422.0,,27345.0,42061.0,69.75,47.42,23.79,,8441.0,21988.0,0.441,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-13,266804.0,315.0,329.429,4941.0,0.0,0.0,53543.877,63.216,66.112,991.59,0.0,0.0,0.91,22.0,4.415,62.0,12.443,8.0,1.611,50.0,10.072,14404.0,5269203.0,1057.456,2.891,15555.0,3.122,0.0212,47.2,tests performed,3522819.0,2378506.0,1216602.0,,47025.0,45340.0,70.7,47.73,24.42,,9099.0,21452.0,0.431,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-14,267006.0,202.0,304.429,4941.0,0.0,0.0,53584.416,40.539,61.095,991.59,0.0,0.0,0.91,23.0,4.616,67.0,13.446,,,,,11377.0,5280580.0,1059.739,2.283,15226.0,3.056,0.02,50.0,tests performed,3578855.0,2393180.0,1258149.0,,56036.0,46993.0,71.82,48.03,25.25,,9431.0,19798.0,0.397,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-15,267289.0,283.0,310.714,4941.0,0.0,0.0,53641.21,56.794,62.356,991.59,0.0,0.0,0.93,23.0,4.616,60.0,12.041,,,,,13889.0,5294469.0,1062.527,2.787,15465.0,3.104,0.0201,49.8,tests performed,3640468.0,2406607.0,1306531.0,,61613.0,48263.0,73.06,48.3,26.22,,9686.0,17041.0,0.342,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-16,267576.0,287.0,319.286,4941.0,0.0,0.0,53698.807,57.597,64.076,991.59,0.0,0.0,0.94,19.0,3.813,57.0,11.439,,,,,17356.0,5311825.0,1066.01,3.483,15680.0,3.147,0.0204,49.1,tests performed,3704826.0,2428469.0,1349529.0,,64358.0,49590.0,74.35,48.74,27.08,,9952.0,16205.0,0.325,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-17,267949.0,373.0,315.714,4979.0,38.0,5.429,53773.663,74.856,63.359,999.217,7.626,1.089,0.95,18.0,3.612,54.0,10.837,,,,,17936.0,5329761.0,1069.609,3.6,15674.0,3.146,0.0201,49.6,tests performed,3767093.0,2440835.0,1399960.0,,62267.0,50052.0,75.6,48.98,28.1,,10045.0,14221.0,0.285,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-18,268251.0,302.0,313.286,4979.0,0.0,5.429,53834.27,60.607,62.872,999.217,0.0,1.089,0.96,15.0,3.01,53.0,10.636,,,,,15662.0,5345423.0,1072.753,3.143,15486.0,3.108,0.0202,49.4,tests performed,3806293.0,2447382.0,1433021.0,,39200.0,51121.0,76.39,49.12,28.76,,10259.0,13426.0,0.269,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-19,268644.0,393.0,307.857,4979.0,0.0,5.429,53913.14,78.87,61.783,999.217,0.0,1.089,0.97,14.0,2.81,48.0,9.633,,,,,17162.0,5362585.0,1076.197,3.444,15398.0,3.09,0.02,50.0,tests performed,3840903.0,2455933.0,1459243.0,,34610.0,52158.0,77.08,49.29,29.28,,10467.0,13327.0,0.267,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-20,269037.0,393.0,319.0,4979.0,0.0,5.429,53992.009,78.87,64.019,999.217,0.0,1.089,0.99,15.0,3.01,49.0,9.834,8.0,1.611,49.0,9.87,13845.0,5376430.0,1078.975,2.779,15318.0,3.074,0.0208,48.0,tests performed,3888904.0,2471757.0,1491961.0,,48001.0,52298.0,78.04,49.6,29.94,,10495.0,13322.0,0.267,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-21,269321.0,284.0,330.714,4979.0,0.0,5.429,54049.004,56.995,66.37,999.217,0.0,1.089,0.99,13.0,2.609,53.0,10.636,,,,,10994.0,5387424.0,1081.182,2.206,15263.0,3.063,0.0217,46.2,tests performed,3947920.0,2487394.0,1536028.0,,59016.0,52724.0,79.23,49.92,30.83,,10581.0,13459.0,0.27,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-22,269495.0,174.0,315.143,4979.0,0.0,5.429,54083.924,34.919,63.245,999.217,0.0,1.089,0.99,13.0,2.609,39.0,7.827,,,,,14078.0,5401502.0,1084.007,2.825,15290.0,3.068,0.0206,48.5,tests performed,4007835.0,2508112.0,1576083.0,,59915.0,52481.0,80.43,50.33,31.63,,10532.0,14501.0,0.291,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-23,269793.0,298.0,316.714,4989.0,10.0,6.857,54143.728,59.804,63.56,1001.223,2.007,1.376,1.0,13.0,2.609,41.0,8.228,,,,,18414.0,5419916.0,1087.702,3.695,15442.0,3.099,0.0205,48.8,tests performed,4071766.0,2527950.0,1621184.0,,63931.0,52420.0,81.71,50.73,32.53,,10520.0,14212.0,0.285,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-24,270097.0,304.0,306.857,4989.0,0.0,1.429,54204.737,61.009,61.582,1001.223,0.0,0.287,1.02,13.0,2.609,47.0,9.432,,,,,17237.0,5437153.0,1091.161,3.459,15342.0,3.079,0.02,50.0,tests performed,4137532.0,2543734.0,1671964.0,,65766.0,52920.0,83.03,51.05,33.55,,10620.0,14700.0,0.295,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-25,270477.0,380.0,318.0,4989.0,0.0,1.429,54280.998,76.261,63.818,1001.223,0.0,0.287,1.05,13.0,2.609,38.0,7.626,,,,,17450.0,5454603.0,1094.663,3.502,15597.0,3.13,0.0204,49.0,tests performed,4177244.0,2553055.0,1702822.0,,39712.0,52993.0,83.83,51.24,34.17,,10635.0,15096.0,0.303,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-26,270920.0,443.0,325.143,4989.0,0.0,1.429,54369.902,88.904,65.252,1001.223,0.0,0.287,1.07,13.0,2.609,43.0,8.63,,,,,18725.0,5473328.0,1098.421,3.758,15820.0,3.175,0.0206,48.7,tests performed,4216231.0,2561701.0,1733201.0,,38987.0,53618.0,84.61,51.41,34.78,,10760.0,15110.0,0.303,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-27,271260.0,340.0,317.571,4989.0,0.0,1.429,54438.135,68.233,63.732,1001.223,0.0,0.287,1.09,15.0,3.01,47.0,9.432,3.0,0.604,43.0,8.662,14771.0,5488099.0,1101.386,2.964,15953.0,3.202,0.0199,50.2,tests performed,4265221.0,2586231.0,1758136.0,,48990.0,53760.0,85.6,51.9,35.28,,10789.0,16353.0,0.328,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-28,271589.0,329.0,324.0,4989.0,0.0,1.429,54504.161,66.026,65.022,1001.223,0.0,0.287,1.11,16.0,3.211,49.0,9.834,,,,,13363.0,5501462.0,1104.067,2.682,16291.0,3.269,0.0199,50.3,tests performed,4324717.0,2614925.0,1789702.0,,59496.0,53828.0,86.79,52.48,35.92,,10803.0,18219.0,0.366,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-29,271931.0,342.0,348.0,4989.0,0.0,1.429,54572.795,68.635,69.839,1001.223,0.0,0.287,1.12,16.0,3.211,46.0,9.232,,,,,15721.0,5517183.0,1107.222,3.155,16526.0,3.317,0.0211,47.5,tests performed,4384236.0,2637802.0,1826885.0,,59519.0,53772.0,87.99,52.94,36.66,,10791.0,18527.0,0.372,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-06-30,271908.0,-23.0,302.143,4998.0,9.0,1.286,54568.18,-4.616,60.636,1003.03,1.806,0.258,1.14,14.0,2.81,44.0,8.83,,,,,20569.0,5537752.0,1111.35,4.128,16834.0,3.378,0.0179,55.7,tests performed,4447619.0,2653067.0,1875597.0,,63383.0,53693.0,89.26,53.24,37.64,,10775.0,17874.0,0.359,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,920.8,1.92,-2.19,184.791840260218\r\nIRL,Europe,Ireland,2021-07-01,272784.0,876.0,383.857,5000.0,2.0,1.571,54743.981,175.801,77.035,1003.431,0.401,0.315,1.15,14.0,2.81,44.0,8.83,,,,,19135.0,5556887.0,1115.19,3.84,17105.0,3.433,0.0224,44.6,tests performed,4508903.0,2667289.0,1923441.0,,61284.0,53053.0,90.49,53.53,38.6,,10647.0,17651.0,0.354,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-02,273296.0,512.0,402.714,5000.0,0.0,1.571,54846.732,102.751,80.819,1003.431,0.0,0.315,1.16,14.0,2.81,46.0,9.232,,,,,18961.0,5575848.0,1118.996,3.805,17321.0,3.476,0.0233,43.0,tests performed,4548792.0,2676908.0,1954182.0,,39889.0,53078.0,91.29,53.72,39.22,,10652.0,17693.0,0.355,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-03,273744.0,448.0,403.429,5000.0,0.0,1.571,54936.639,89.907,80.963,1003.431,0.0,0.315,1.17,14.0,2.81,42.0,8.429,,,,,20129.0,5595977.0,1123.035,4.04,17521.0,3.516,0.023,43.4,tests performed,4583004.0,2683443.0,1982065.0,,34212.0,52396.0,91.97,53.85,39.78,,10515.0,17392.0,0.349,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-04,274306.0,562.0,435.143,5000.0,0.0,1.571,55049.425,112.786,87.327,1003.431,0.0,0.315,1.18,14.0,2.81,48.0,9.633,4.0,0.806,56.0,11.28,17150.0,5613127.0,1126.477,3.442,17861.0,3.584,0.0244,41.0,tests performed,4636830.0,2704078.0,2020562.0,,53826.0,53087.0,93.05,54.27,40.55,,10654.0,16835.0,0.338,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-05,274641.0,335.0,436.0,5000.0,0.0,1.571,55116.655,67.23,87.499,1003.431,0.0,0.315,1.19,14.0,2.81,51.0,10.235,,,,,13733.0,5626860.0,1129.233,2.756,17914.0,3.595,0.0243,41.1,tests performed,4702572.0,2721706.0,2074128.0,,65742.0,53979.0,94.37,54.62,41.62,,10833.0,15254.0,0.306,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-06,275038.0,397.0,443.857,5000.0,0.0,1.571,55196.327,79.672,89.076,1003.431,0.0,0.315,1.2,16.0,3.211,54.0,10.837,,,,,16463.0,5643323.0,1132.537,3.304,18020.0,3.616,0.0246,40.6,tests performed,4770562.0,2746194.0,2122646.0,,67990.0,55189.0,95.74,55.11,42.6,,11076.0,15485.0,0.311,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-07,275571.0,533.0,523.286,5006.0,6.0,1.143,55303.293,106.966,105.016,1004.635,1.204,0.229,1.22,17.0,3.412,60.0,12.041,,,,,22292.0,5665615.0,1137.011,4.474,18266.0,3.666,0.0286,34.9,tests performed,4839476.0,2769730.0,2173978.0,,68914.0,55980.0,97.12,55.58,43.63,,11234.0,16666.0,0.334,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-08,276104.0,533.0,474.286,5006.0,0.0,0.857,55410.259,106.966,95.183,1004.635,0.0,0.172,1.24,17.0,3.412,58.0,11.64,,,,,20558.0,5686173.0,1141.136,4.126,18469.0,3.706,0.0257,38.9,tests performed,4904178.0,2789564.0,2225351.0,,64702.0,56468.0,98.42,55.98,44.66,,11332.0,17468.0,0.351,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-09,276735.0,631.0,491.286,5006.0,0.0,0.857,55536.892,126.633,98.594,1004.635,0.0,0.172,1.25,15.0,3.01,50.0,10.034,,,,,19848.0,5706021.0,1145.12,3.983,18596.0,3.732,0.0264,37.9,tests performed,4940626.0,2802348.0,2253344.0,,36448.0,55976.0,99.15,56.24,45.22,,11234.0,17920.0,0.36,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-10,277316.0,581.0,510.286,5006.0,0.0,0.857,55653.49,116.599,102.407,1004.635,0.0,0.172,1.27,16.0,3.211,52.0,10.436,,,,,20023.0,5726044.0,1149.138,4.018,18581.0,3.729,0.0275,36.4,tests performed,4973876.0,2819610.0,2271468.0,,33250.0,55839.0,99.82,56.59,45.59,,11206.0,19452.0,0.39,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-11,277892.0,576.0,512.286,5006.0,0.0,0.857,55769.086,115.595,102.809,1004.635,0.0,0.172,1.3,16.0,3.211,58.0,11.64,2.0,0.403,60.0,12.086,18603.0,5744647.0,1152.871,3.733,18789.0,3.771,0.0273,36.7,tests performed,5028395.0,2842612.0,2309032.0,,54519.0,55938.0,100.91,57.05,46.34,,11226.0,19791.0,0.397,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-12,278464.0,572.0,546.143,5006.0,0.0,0.857,55883.878,114.792,109.603,1004.635,0.0,0.172,1.33,16.0,3.211,63.0,12.643,,,,,15286.0,5759933.0,1155.939,3.068,19010.0,3.815,0.0287,34.8,tests performed,5093080.0,2871000.0,2353782.0,,64685.0,55787.0,102.21,57.62,47.24,,11196.0,21328.0,0.428,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-13,279053.0,589.0,573.571,5006.0,0.0,0.857,56002.082,118.204,115.108,1004.635,0.0,0.172,1.37,17.0,3.412,62.0,12.443,,,,,15775.0,5775708.0,1159.105,3.166,18912.0,3.795,0.0303,33.0,tests performed,5158446.0,2900925.0,2398523.0,,65366.0,55412.0,103.52,58.22,48.14,,11120.0,22104.0,0.444,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-14,279790.0,737.0,602.714,5018.0,12.0,1.714,56149.988,147.906,120.956,1007.043,2.408,0.344,1.4,20.0,4.014,73.0,14.65,,,,,20989.0,5796697.0,1163.317,4.212,18726.0,3.758,0.0322,31.1,tests performed,5220014.0,2933901.0,2436649.0,,61568.0,54363.0,104.76,58.88,48.9,,10910.0,23453.0,0.471,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-15,280784.0,994.0,668.571,5018.0,0.0,1.714,56349.47,199.482,134.173,1007.043,0.0,0.344,1.43,22.0,4.415,80.0,16.055,,,,,19504.0,5816201.0,1167.231,3.914,18575.0,3.728,0.036,27.8,tests performed,5279672.0,2966434.0,2472904.0,,59658.0,53642.0,105.96,59.53,49.63,,10765.0,25267.0,0.507,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-16,281954.0,1170.0,745.571,5018.0,0.0,1.714,56584.273,234.803,149.626,1007.043,0.0,0.344,1.45,23.0,4.616,79.0,15.854,,,,,20952.0,5837153.0,1171.436,4.205,18733.0,3.759,0.0398,25.1,tests performed,5314904.0,2982461.0,2496750.0,,35232.0,53468.0,106.66,59.85,50.11,,10730.0,25730.0,0.516,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-17,283331.0,1377.0,859.286,5018.0,0.0,1.714,56860.618,276.345,172.447,1007.043,0.0,0.344,1.45,22.0,4.415,78.0,15.654,,,,,22292.0,5859445.0,1175.91,4.474,19057.0,3.824,0.0451,22.2,tests performed,5349234.0,3001136.0,2514316.0,,34330.0,53623.0,107.35,60.23,50.46,,10761.0,25932.0,0.52,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-18,284510.0,1179.0,945.429,5018.0,0.0,1.714,57097.227,236.609,189.734,1007.043,0.0,0.344,1.43,22.0,4.415,91.0,18.262,4.0,0.806,112.0,22.56,19210.0,5878655.0,1179.765,3.855,19144.0,3.842,0.0494,20.2,tests performed,5398308.0,3032038.0,2538691.0,,49074.0,52845.0,108.34,60.85,50.95,,10605.0,27061.0,0.543,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-19,285581.0,1071.0,1016.714,5018.0,0.0,1.714,57312.162,214.935,204.041,1007.043,0.0,0.344,1.4,20.0,4.014,101.0,20.269,,,,,17005.0,5895660.0,1183.178,3.413,19390.0,3.891,0.0524,19.1,tests performed,5454252.0,3070098.0,2564235.0,,55944.0,51596.0,109.46,61.61,51.46,,10355.0,28443.0,0.571,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-20,286691.0,1110.0,1091.143,5018.0,0.0,1.714,57534.923,222.762,218.977,1007.043,0.0,0.344,1.37,21.0,4.214,89.0,17.861,,,,,20211.0,5915871.0,1187.234,4.056,20023.0,4.018,0.0545,18.4,tests performed,5510791.0,3107070.0,2590642.0,,56539.0,50335.0,110.59,62.35,51.99,,10102.0,29449.0,0.591,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-21,287951.0,1260.0,1165.857,5026.0,8.0,1.143,57787.788,252.865,233.971,1008.649,1.605,0.229,1.33,22.0,4.415,96.0,19.266,,,,,24462.0,5940333.0,1192.143,4.909,20519.0,4.118,0.0568,17.6,tests performed,5566700.0,3147318.0,2613195.0,,55909.0,49527.0,111.72,63.16,52.44,,9939.0,30488.0,0.612,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-22,289139.0,1188.0,1193.571,5026.0,0.0,1.143,58026.203,238.415,239.533,1008.649,0.0,0.229,1.3,23.0,4.616,95.0,19.065,,,,,21846.0,5962179.0,1196.527,4.384,20854.0,4.185,0.0572,17.5,tests performed,5619745.0,3179810.0,2639311.0,,53045.0,48582.0,112.78,63.81,52.97,,9750.0,30482.0,0.612,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-23,290525.0,1386.0,1224.429,5026.0,0.0,1.143,58304.354,278.151,245.726,1008.649,0.0,0.229,1.27,22.0,4.415,106.0,21.273,,,,,21509.0,5983688.0,1200.844,4.317,20934.0,4.201,0.0585,17.1,tests performed,5651886.0,3197373.0,2656127.0,,32141.0,48140.0,113.43,64.17,53.3,,9661.0,30702.0,0.616,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-24,291870.0,1345.0,1219.857,5026.0,0.0,1.143,58574.277,269.923,244.808,1008.649,0.0,0.229,1.24,21.0,4.214,105.0,21.072,,,,,22454.0,6006142.0,1205.35,4.506,20957.0,4.206,0.0582,17.2,tests performed,5681052.0,3213034.0,2670654.0,,29166.0,47403.0,114.01,64.48,53.6,,9513.0,30271.0,0.607,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-25,292996.0,1126.0,1212.286,5026.0,0.0,1.143,58800.25,225.973,243.289,1008.649,0.0,0.229,1.22,22.0,4.415,123.0,24.684,11.0,2.216,142.0,28.402,17094.0,6023236.0,1208.78,3.431,20654.0,4.145,0.0587,17.0,tests performed,5726056.0,3240106.0,2691964.0,,45004.0,46821.0,114.91,65.02,54.02,,9396.0,29724.0,0.597,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-26,294272.0,1276.0,1241.571,5026.0,0.0,1.143,59056.325,256.076,249.166,1008.649,0.0,0.229,1.21,25.0,5.017,141.0,28.297,,,,,17517.0,6040753.0,1212.296,3.515,20728.0,4.16,0.0599,16.7,tests performed,5778558.0,3269064.0,2719136.0,,52502.0,46329.0,115.97,65.61,54.57,,9298.0,28424.0,0.57,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-27,295386.0,1114.0,1242.143,5026.0,0.0,1.143,59279.89,223.564,249.281,1008.649,0.0,0.229,1.19,27.0,5.419,142.0,28.497,,,,,17496.0,6058249.0,1215.807,3.511,20340.0,4.082,0.0611,16.4,tests performed,5830075.0,3295582.0,2747364.0,,51517.0,45612.0,117.0,66.14,55.14,,9154.0,26930.0,0.54,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-28,296687.0,1301.0,1248.0,5035.0,9.0,1.286,59540.983,261.093,250.456,1010.455,1.806,0.258,1.17,26.0,5.218,152.0,30.504,,,,,22792.0,6081041.0,1220.381,4.574,20101.0,4.034,0.0621,16.1,tests performed,5879723.0,3317652.0,2777870.0,,49648.0,44718.0,118.0,66.58,55.75,,8974.0,24333.0,0.488,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-29,298048.0,1361.0,1272.714,5035.0,0.0,1.286,59814.116,273.134,255.416,1010.455,0.0,0.258,1.15,26.0,5.218,162.0,32.511,,,,,19948.0,6100989.0,1224.384,4.003,19830.0,3.98,0.0642,15.6,tests performed,5926246.0,3341540.0,2802589.0,,46523.0,43786.0,118.93,67.06,56.24,,8787.0,23104.0,0.464,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-30,299549.0,1501.0,1289.143,5035.0,0.0,1.286,60115.346,301.23,258.713,1010.455,0.0,0.258,1.14,23.0,4.616,169.0,33.916,,,,,22408.0,6123397.0,1228.881,4.497,19958.0,4.005,0.0646,15.5,tests performed,5953027.0,3356069.0,2815730.0,,26781.0,43020.0,119.47,67.35,56.51,,8634.0,22671.0,0.455,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-07-31,300976.0,1427.0,1300.857,5035.0,0.0,1.286,60401.726,286.379,261.064,1010.455,0.0,0.258,1.13,26.0,5.218,164.0,32.913,,,,,19688.0,6143085.0,1232.832,3.951,19563.0,3.926,0.0665,15.0,tests performed,5973552.0,3367422.0,2825257.0,,20525.0,41786.0,119.88,67.58,56.7,,8386.0,22055.0,0.443,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,1112.2,2.21,8.19,223.203176300406\r\nIRL,Europe,Ireland,2021-08-01,302074.0,1098.0,1296.857,5035.0,0.0,1.286,60622.079,220.353,260.261,1010.455,0.0,0.258,1.12,26.0,5.218,163.0,32.712,11.0,2.216,187.0,37.466,18374.0,6161459.0,1236.52,3.687,19746.0,3.963,0.0657,15.2,tests performed,6004565.0,3382716.0,2841377.0,,31013.0,39787.0,120.5,67.89,57.02,,7985.0,20373.0,0.409,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-02,303426.0,1352.0,1307.714,5035.0,0.0,1.286,60893.407,271.328,262.44,1010.455,0.0,0.258,1.12,27.0,5.419,177.0,35.521,,,,,12584.0,6174043.0,1239.045,2.525,19041.0,3.821,0.0687,14.6,tests performed,6048051.0,3401020.0,2867645.0,,43486.0,38499.0,121.38,68.25,57.55,,7726.0,18851.0,0.378,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-03,304310.0,884.0,1274.857,5035.0,0.0,1.286,61070.813,177.407,255.846,1010.455,0.0,0.258,1.12,29.0,5.82,178.0,35.722,,,,,14841.0,6188884.0,1242.024,2.978,18662.0,3.745,0.0683,14.6,tests performed,6088592.0,3424554.0,2886208.0,,40541.0,36931.0,122.19,68.73,57.92,,7412.0,18425.0,0.37,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-04,305527.0,1217.0,1262.857,5044.0,9.0,1.286,61315.048,244.235,253.438,1012.261,1.806,0.258,1.13,30.0,6.021,187.0,37.528,,,,,19997.0,6208881.0,1246.037,4.013,18263.0,3.665,0.0691,14.5,tests performed,6133184.0,3439353.0,2917407.0,,44592.0,36209.0,123.08,69.02,58.55,,7267.0,17386.0,0.349,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-05,307019.0,1492.0,1281.571,5044.0,0.0,1.286,61614.472,299.424,257.194,1012.261,0.0,0.258,1.14,28.0,5.619,193.0,38.732,,,,,20564.0,6229445.0,1250.164,4.127,18351.0,3.683,0.0698,14.3,tests performed,6170671.0,3452339.0,2942834.0,,37487.0,34918.0,123.84,69.28,59.06,,7008.0,15828.0,0.318,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-06,308800.0,1781.0,1321.571,5044.0,0.0,1.286,61971.894,357.422,265.221,1012.261,0.0,0.258,1.16,30.0,6.021,189.0,37.93,,,,,22005.0,6251450.0,1254.58,4.416,18293.0,3.671,0.0722,13.8,tests performed,6185762.0,3459170.0,2951658.0,,15091.0,33248.0,124.14,69.42,59.24,,6672.0,14729.0,0.296,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-07,310628.0,1828.0,1378.857,5044.0,0.0,1.286,62338.749,366.854,276.718,1012.261,0.0,0.258,1.17,33.0,6.623,198.0,39.736,,,,,22769.0,6274219.0,1259.149,4.569,18733.0,3.759,0.0736,13.6,tests performed,6206292.0,3467872.0,2963630.0,,20530.0,33249.0,124.55,69.6,59.48,,6673.0,14350.0,0.288,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-08,312465.0,1837.0,1484.429,5044.0,0.0,1.286,62707.409,368.661,297.904,1012.261,0.0,0.258,1.17,31.0,6.221,208.0,41.743,9.0,1.813,173.0,34.646,18879.0,6293098.0,1262.938,3.789,18806.0,3.774,0.0789,12.7,tests performed,6235105.0,3473910.0,2986992.0,,28813.0,32934.0,125.13,69.72,59.94,,6609.0,13028.0,0.261,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-09,313876.0,1411.0,1492.857,5044.0,0.0,1.286,62990.577,283.168,299.596,1012.261,0.0,0.258,1.16,34.0,6.823,217.0,43.549,,,,,16052.0,6309150.0,1266.159,3.221,19301.0,3.873,0.0773,12.9,tests performed,6270755.0,3483835.0,3013409.0,,35650.0,31815.0,125.85,69.92,60.47,,6385.0,11831.0,0.237,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-10,315385.0,1509.0,1582.143,5044.0,0.0,1.286,63293.413,302.835,317.514,1012.261,0.0,0.258,1.16,33.0,6.623,206.0,41.341,,,,,18638.0,6327788.0,1269.9,3.74,19843.0,3.982,0.0797,12.5,tests performed,6309263.0,3491384.0,3045006.0,,38508.0,31524.0,126.62,70.07,61.11,,6326.0,9547.0,0.192,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-11,317204.0,1819.0,1668.143,5059.0,15.0,2.143,63658.461,365.048,334.773,1015.271,3.01,0.43,1.15,36.0,7.225,206.0,41.341,,,,,24234.0,6352022.0,1274.763,4.863,20449.0,4.104,0.0816,12.3,tests performed,6354831.0,3498896.0,3083914.0,,45568.0,31664.0,127.53,70.22,61.89,,6355.0,8506.0,0.171,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-12,318937.0,1733.0,1702.571,5059.0,0.0,2.143,64006.25,347.789,341.683,1015.271,0.0,0.43,1.14,37.0,7.425,219.0,43.95,,,,,21609.0,6373631.0,1279.1,4.337,20598.0,4.134,0.0827,12.1,tests performed,6394507.0,3510560.0,3112773.0,,39676.0,31977.0,128.33,70.45,62.47,,6417.0,8317.0,0.167,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-13,320915.0,1978.0,1730.714,5059.0,0.0,2.143,64403.207,396.957,347.33,1015.271,0.0,0.43,1.13,43.0,8.63,221.0,44.352,,,,,22551.0,6396182.0,1283.625,4.526,20676.0,4.149,0.0837,11.9,tests performed,6418518.0,3528882.0,3118731.0,,24011.0,33251.0,128.81,70.82,62.59,,6673.0,9959.0,0.2,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-14,322989.0,2074.0,1765.857,5059.0,0.0,2.143,64819.431,416.223,354.383,1015.271,0.0,0.43,1.11,43.0,8.63,230.0,46.158,,,,,23269.0,6419451.0,1288.295,4.67,20747.0,4.164,0.0851,11.7,tests performed,6439151.0,3545880.0,3122405.0,,20633.0,33266.0,129.22,71.16,62.66,,6676.0,11144.0,0.224,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-15,324747.0,1758.0,1754.571,5059.0,0.0,2.143,65172.237,352.806,352.118,1015.271,0.0,0.43,1.1,48.0,9.633,248.0,49.77,14.0,2.82,234.0,46.934,20215.0,6439666.0,1292.352,4.057,20938.0,4.202,0.0838,11.9,tests performed,6472563.0,3556356.0,3145701.0,,33412.0,33923.0,129.9,71.37,63.13,,6808.0,11778.0,0.236,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-16,326188.0,1441.0,1758.857,5059.0,0.0,2.143,65461.426,289.189,352.978,1015.271,0.0,0.43,1.09,51.0,10.235,262.0,52.58,,,,,15775.0,6455441.0,1295.518,3.166,20899.0,4.194,0.0842,11.9,tests performed,6512537.0,3569663.0,3172883.0,,39974.0,34540.0,130.7,71.64,63.68,,6932.0,12261.0,0.246,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-17,327684.0,1496.0,1757.0,5059.0,0.0,2.143,65761.652,300.227,352.606,1015.271,0.0,0.43,1.08,54.0,10.837,248.0,49.77,,,,,18709.0,6474150.0,1299.272,3.755,20909.0,4.196,0.084,11.9,tests performed,6553894.0,3585465.0,3199085.0,,41357.0,34947.0,131.53,71.96,64.2,,7013.0,13440.0,0.27,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-18,329388.0,1704.0,1740.571,5074.0,15.0,2.143,66103.622,341.969,349.309,1018.282,3.01,0.43,1.07,54.0,10.837,249.0,49.971,,,,,23925.0,6498075.0,1304.074,4.801,20865.0,4.187,0.0834,12.0,tests performed,6591235.0,3597297.0,3225121.0,,37341.0,33772.0,132.28,72.19,64.72,,6778.0,14057.0,0.282,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-19,331206.0,1818.0,1752.714,5074.0,0.0,2.143,66468.469,364.847,351.746,1018.282,0.0,0.43,1.07,52.0,10.436,244.0,48.967,,,,,22901.0,6520976.0,1308.67,4.596,21049.0,4.224,0.0833,12.0,tests performed,6628735.0,3612732.0,3247857.0,,37500.0,33461.0,133.03,72.5,65.18,,6715.0,14596.0,0.293,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-20,333304.0,2098.0,1769.857,5074.0,0.0,2.143,66889.509,421.04,355.186,1018.282,0.0,0.43,1.07,52.0,10.436,251.0,50.372,,,,,21223.0,6542199.0,1312.929,4.259,20860.0,4.186,0.0848,11.8,tests performed,6648621.0,3624771.0,3255935.0,,19886.0,32872.0,133.43,72.74,65.34,,6597.0,13698.0,0.275,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-21,335429.0,2125.0,1777.143,5074.0,0.0,2.143,67315.967,426.458,356.648,1018.282,0.0,0.43,1.06,54.0,10.837,259.0,51.978,,,,,22583.0,6564782.0,1317.461,4.532,20762.0,4.167,0.0856,11.7,tests performed,6668940.0,3632914.0,3268267.0,,20319.0,32827.0,133.84,72.91,65.59,,6588.0,12433.0,0.25,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-22,337117.0,1688.0,1767.143,5074.0,0.0,2.143,67654.725,338.758,354.641,1018.282,0.0,0.43,1.05,59.0,11.84,314.0,63.015,16.0,3.223,277.0,55.595,18070.0,6582852.0,1321.087,3.626,20455.0,4.105,0.0864,11.6,tests performed,6695215.0,3643999.0,3283731.0,,26275.0,31807.0,134.36,73.13,65.9,,6383.0,12520.0,0.251,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-23,338707.0,1590.0,1788.429,5074.0,0.0,2.143,67973.816,319.091,358.913,1018.282,0.0,0.43,1.05,60.0,12.041,318.0,63.818,,,,,14921.0,6597773.0,1324.082,2.994,20333.0,4.081,0.088,11.4,tests performed,6727982.0,3654025.0,3306846.0,,32767.0,30778.0,135.02,73.33,66.36,,6177.0,12052.0,0.242,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-24,340278.0,1571.0,1799.143,5074.0,0.0,2.143,68289.094,315.278,361.063,1018.282,0.0,0.43,1.04,55.0,11.038,307.0,61.611,,,,,18420.0,6616193.0,1327.779,3.697,20292.0,4.072,0.0887,11.3,tests performed,6756955.0,3663685.0,3326465.0,,28973.0,29009.0,135.6,73.53,66.76,,5822.0,11174.0,0.224,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-25,342329.0,2051.0,1848.714,5092.0,18.0,2.571,68700.701,411.607,371.011,1021.894,3.612,0.516,1.03,56.0,11.238,323.0,64.822,,,,,23838.0,6640031.0,1332.562,4.784,20279.0,4.07,0.0912,11.0,tests performed,6785103.0,3672570.0,3346089.0,,28148.0,27695.0,136.17,73.7,67.15,,5558.0,10753.0,0.216,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-26,344195.0,1866.0,1855.571,5092.0,0.0,2.571,69075.182,374.48,372.388,1021.894,0.0,0.516,1.02,61.0,12.242,332.0,66.628,,,,,23029.0,6663060.0,1337.184,4.622,20298.0,4.074,0.0914,10.9,tests performed,6814257.0,3682660.0,3365580.0,,29154.0,26503.0,136.75,73.91,67.54,,5319.0,9990.0,0.2,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-27,346070.0,1875.0,1823.714,5092.0,0.0,2.571,69451.468,376.287,365.994,1021.894,0.0,0.516,1.0,59.0,11.84,326.0,65.424,,,,,21919.0,6684979.0,1341.583,4.399,20397.0,4.093,0.0894,11.2,tests performed,6832091.0,3692690.0,3373530.0,,17834.0,26210.0,137.11,74.11,67.7,,5260.0,9703.0,0.195,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-28,348067.0,1997.0,1805.429,5092.0,0.0,2.571,69852.239,400.77,362.325,1021.894,0.0,0.516,0.99,61.0,12.242,324.0,65.022,,,,,20310.0,6705289.0,1345.659,4.076,20072.0,4.028,0.0899,11.1,tests performed,6850040.0,3701498.0,3382695.0,,17949.0,25871.0,137.47,74.28,67.89,,5192.0,9798.0,0.197,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-29,349773.0,1706.0,1808.0,5092.0,0.0,2.571,70194.609,342.371,362.841,1021.894,0.0,0.516,0.99,60.0,12.041,347.0,69.638,29.0,5.842,315.0,63.25,17869.0,6723158.0,1349.245,3.586,20044.0,4.023,0.0902,11.1,tests performed,6866129.0,3706601.0,3393760.0,,16089.0,24416.0,137.79,74.39,68.11,,4900.0,8943.0,0.179,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-30,351065.0,1292.0,1765.429,5092.0,0.0,2.571,70453.896,259.287,354.297,1021.894,0.0,0.516,0.98,61.0,12.242,382.0,76.662,,,,,14527.0,6737685.0,1352.16,2.915,19987.0,4.011,0.0883,11.3,tests performed,6883002.0,3710755.0,3406615.0,,16873.0,22146.0,138.13,74.47,68.37,,4444.0,8104.0,0.163,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-08-31,352447.0,1382.0,1738.429,5092.0,0.0,2.571,70731.244,277.348,348.879,1021.894,0.0,0.516,0.98,54.0,10.837,355.0,71.244,,,,,18684.0,6756369.0,1355.91,3.75,20025.0,4.019,0.0868,11.5,tests performed,6900483.0,3715832.0,3419194.0,,17481.0,20504.0,138.48,74.57,68.62,,4115.0,7450.0,0.15,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,1323.4,2.52,9.05,265.588098827511\r\nIRL,Europe,Ireland,2021-09-01,354236.0,1789.0,1701.0,5112.0,20.0,2.857,71090.272,359.028,341.367,1025.908,4.014,0.573,0.98,56.0,11.238,360.0,72.247,,,,,24024.0,6780393.0,1360.731,4.821,20052.0,4.024,0.0848,11.8,tests performed,6917953.0,3721044.0,3431695.0,,17470.0,18979.0,138.83,74.68,68.87,,3809.0,6925.0,0.139,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-02,352529.0,-1707.0,1190.571,5112.0,0.0,2.857,70747.701,-342.571,238.931,1025.908,0.0,0.573,0.98,59.0,11.84,343.0,68.835,,,,,21832.0,6802225.0,1365.113,4.381,19881.0,3.99,0.0599,16.7,tests performed,6938754.0,3725930.0,3447769.0,,20801.0,17785.0,139.25,74.77,69.19,,3569.0,6181.0,0.124,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-03,353936.0,1407.0,1123.714,5112.0,0.0,2.857,71030.066,282.365,225.514,1025.908,0.0,0.573,0.98,55.0,11.038,353.0,70.842,,,,,21312.0,6823537.0,1369.39,4.277,19794.0,3.972,0.0568,17.6,tests performed,6954006.0,3730662.0,3458419.0,,15252.0,17416.0,139.56,74.87,69.41,,3495.0,5425.0,0.109,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-04,355639.0,1703.0,1081.714,5112.0,0.0,2.857,71371.835,341.769,217.085,1025.908,0.0,0.573,0.97,52.0,10.436,363.0,72.849,,,,,21728.0,6845265.0,1373.75,4.361,19997.0,4.013,0.0541,18.5,tests performed,6971145.0,3735958.0,3470263.0,,17139.0,17301.0,139.9,74.98,69.64,,3472.0,4923.0,0.099,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-05,356819.0,1180.0,1006.571,5112.0,0.0,2.857,71608.644,236.81,202.005,1025.908,0.0,0.573,0.97,59.0,11.84,362.0,72.648,26.0,5.237,293.0,58.818,18088.0,6863353.0,1377.38,3.63,20028.0,4.019,0.0503,19.9,tests performed,6982918.0,3738145.0,3479918.0,,11773.0,16684.0,140.14,75.02,69.84,,3348.0,4506.0,0.09,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-06,357955.0,1136.0,984.286,5112.0,0.0,2.857,71836.624,227.98,197.533,1025.908,0.0,0.573,0.97,59.0,11.84,384.0,77.063,,,,,17510.0,6880863.0,1380.894,3.514,20454.0,4.105,0.0481,20.8,tests performed,6995964.0,3741284.0,3489965.0,,13046.0,16137.0,140.4,75.08,70.04,,3238.0,4361.0,0.088,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-07,359420.0,1465.0,996.143,5112.0,0.0,2.857,72130.629,294.005,199.912,1025.908,0.0,0.573,0.98,59.0,11.84,367.0,73.652,,,,,20585.0,6901448.0,1385.025,4.131,20726.0,4.159,0.0481,20.8,tests performed,7013422.0,3744040.0,3504848.0,,17458.0,16134.0,140.75,75.14,70.34,,3238.0,4030.0,0.081,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-08,360957.0,1537.0,960.143,5155.0,43.0,6.143,72439.084,308.455,192.687,1034.537,8.63,1.233,0.97,56.0,11.238,335.0,67.23,,,,,26671.0,6928119.0,1390.378,5.353,21104.0,4.235,0.0455,22.0,tests performed,7031349.0,3747256.0,3519694.0,,17927.0,16199.0,141.11,75.2,70.64,,3251.0,3745.0,0.075,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-09,362228.0,1271.0,1385.571,5155.0,0.0,6.143,72694.156,255.072,278.065,1034.537,0.0,1.233,0.96,54.0,10.837,331.0,66.427,,,,,26494.0,6954613.0,1395.695,5.317,21770.0,4.369,0.0636,15.7,tests performed,7048681.0,3750721.0,3533670.0,,17332.0,15704.0,141.46,75.27,70.92,,3152.0,3542.0,0.071,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-10,363847.0,1619.0,1415.857,5155.0,0.0,6.143,73019.067,324.911,284.143,1034.537,0.0,1.233,0.95,59.0,11.84,328.0,65.825,,,,,26700.0,6981313.0,1401.053,5.358,22539.0,4.523,0.0628,15.9,tests performed,7062524.0,3753316.0,3544975.0,,13843.0,15503.0,141.74,75.32,71.14,,3111.0,3236.0,0.065,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-11,365313.0,1466.0,1382.0,5155.0,0.0,6.143,73313.273,294.206,277.348,1034.537,0.0,1.233,0.94,58.0,11.64,310.0,62.213,,,,,26396.0,7007709.0,1406.35,5.297,23206.0,4.657,0.0596,16.8,tests performed,7077395.0,3755339.0,3557823.0,,14871.0,15179.0,142.03,75.36,71.4,,3046.0,2769.0,0.056,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-12,366659.0,1346.0,1405.714,5155.0,0.0,6.143,73583.396,270.124,282.107,1034.537,0.0,1.233,0.94,59.0,11.84,315.0,63.216,27.0,5.439,272.0,54.588,20227.0,7027936.0,1410.41,4.059,23512.0,4.719,0.0598,16.7,tests performed,7086682.0,3756965.0,3565532.0,,9287.0,14823.0,142.22,75.4,71.56,,2975.0,2689.0,0.054,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-13,367536.0,877.0,1368.714,5155.0,0.0,6.143,73759.398,176.002,274.682,1034.537,0.0,1.233,0.93,58.0,11.64,321.0,64.42,,,,,20192.0,7048128.0,1414.462,4.052,23895.0,4.795,0.0573,17.5,tests performed,7098983.0,3758565.0,3576312.0,,12301.0,14717.0,142.47,75.43,71.77,,2953.0,2469.0,0.05,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-14,368712.0,1176.0,1327.429,5155.0,0.0,6.143,73995.405,236.007,266.397,1034.537,0.0,1.233,0.92,60.0,12.041,309.0,62.012,,,,,23063.0,7071191.0,1419.09,4.628,24249.0,4.866,0.0547,18.3,tests performed,7114699.0,3761945.0,3588780.0,,15716.0,14468.0,142.78,75.5,72.02,,2904.0,2558.0,0.051,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-15,367536.0,-1176.0,939.857,5179.0,24.0,3.429,73759.398,-236.007,188.616,1039.354,4.816,0.688,0.92,65.0,13.045,292.0,58.6,,,,,30302.0,7101493.0,1425.172,6.081,24768.0,4.971,0.0379,26.4,tests performed,7127226.0,3763939.0,3599423.0,,12527.0,13697.0,143.03,75.54,72.24,,2749.0,2383.0,0.048,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-16,371301.0,3765.0,1296.143,5179.0,0.0,3.429,74514.982,755.583,260.118,1039.354,0.0,0.688,0.92,67.0,13.446,290.0,58.199,,,,,28845.0,7130338.0,1430.96,5.789,25104.0,5.038,0.0516,19.4,tests performed,7144384.0,3766567.0,3614042.0,,17158.0,13672.0,143.38,75.59,72.53,,2744.0,2264.0,0.045,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-17,372687.0,1386.0,1262.857,5179.0,0.0,3.429,74793.133,278.151,253.438,1039.354,0.0,0.688,0.91,73.0,14.65,288.0,57.798,,,,,26908.0,7157246.0,1436.36,5.4,25133.0,5.044,0.0502,19.9,tests performed,7157879.0,3768882.0,3625264.0,,13495.0,13622.0,143.65,75.64,72.75,,2734.0,2224.0,0.045,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-18,374143.0,1456.0,1261.429,5179.0,0.0,3.429,75085.332,292.199,253.151,1039.354,0.0,0.688,0.92,66.0,13.245,261.0,52.379,,,,,27371.0,7184617.0,1441.853,5.493,25273.0,5.072,0.0499,20.0,tests performed,7168207.0,3770747.0,3633738.0,,10328.0,12973.0,143.86,75.67,72.92,,2604.0,2201.0,0.044,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-19,375367.0,1224.0,1244.0,5179.0,0.0,3.429,75330.972,245.64,249.654,1039.354,0.0,0.688,0.92,63.0,12.643,278.0,55.791,18.0,3.626,241.0,48.344,22731.0,7207348.0,1446.415,4.562,25630.0,5.144,0.0485,20.6,tests performed,7174749.0,3771727.0,3639332.0,,6542.0,12581.0,143.99,75.69,73.04,,2525.0,2109.0,0.042,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-20,376517.0,1150.0,1283.0,5179.0,0.0,3.429,75561.761,230.789,257.48,1039.354,0.0,0.688,0.93,65.0,13.045,297.0,59.604,,,,,19847.0,7227195.0,1450.398,3.983,25581.0,5.134,0.0502,19.9,tests performed,7182882.0,3773259.0,3646022.0,,8133.0,11986.0,144.15,75.72,73.17,,2405.0,2099.0,0.042,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-21,377937.0,1420.0,1317.857,5179.0,0.0,3.429,75846.735,284.974,264.476,1039.354,0.0,0.688,0.94,63.0,12.643,286.0,57.396,,,,,22989.0,7250184.0,1455.012,4.614,25570.0,5.132,0.0515,19.4,tests performed,7192943.0,3775239.0,3654198.0,,10061.0,11178.0,144.35,75.76,73.33,,2243.0,1899.0,0.038,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-22,379366.0,1429.0,1690.0,5209.0,30.0,4.286,76133.516,286.781,339.16,1045.374,6.021,0.86,0.94,63.0,12.643,272.0,54.587,,,,,29941.0,7280125.0,1461.021,6.009,25519.0,5.121,0.0662,15.1,tests performed,7203410.0,3777005.0,3662985.0,,10467.0,10883.0,144.56,75.8,73.51,,2184.0,1867.0,0.037,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-23,380720.0,1354.0,1345.571,5209.0,0.0,4.286,76405.245,271.729,270.038,1045.374,0.0,0.86,0.94,59.0,11.84,286.0,57.396,,,,,27520.0,7307645.0,1466.543,5.523,25330.0,5.083,0.0531,18.8,tests performed,7212715.0,3778984.0,3670390.0,,9305.0,9762.0,144.75,75.84,73.66,,1959.0,1774.0,0.036,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-24,381883.0,1163.0,1313.714,5209.0,0.0,4.286,76638.643,233.398,263.644,1045.374,0.0,0.86,0.93,61.0,12.242,297.0,59.604,,,,,26457.0,7334102.0,1471.853,5.31,25265.0,5.07,0.052,19.2,tests performed,7221713.0,3781434.0,3676988.0,,8998.0,9119.0,144.93,75.89,73.79,,1830.0,1793.0,0.036,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-25,383218.0,1335.0,1296.429,5209.0,0.0,4.286,76906.559,267.916,260.175,1045.374,0.0,0.86,0.94,65.0,13.045,282.0,56.594,,,,,25248.0,7359350.0,1476.92,5.067,24962.0,5.01,0.0519,19.3,tests performed,7230331.0,3782970.0,3684070.0,,8618.0,8875.0,145.1,75.92,73.93,,1781.0,1746.0,0.035,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-26,384677.0,1459.0,1330.0,5209.0,0.0,4.286,77199.36,292.801,266.913,1045.374,0.0,0.86,0.96,65.0,13.045,296.0,59.403,22.0,4.432,266.0,53.38,19928.0,7379278.0,1480.919,3.999,24561.0,4.929,0.0542,18.5,tests performed,7235555.0,3784180.0,3687830.0,299.0,5224.0,8687.0,145.21,75.94,74.01,0.01,1743.0,1779.0,0.036,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-27,385721.0,1044.0,1314.857,5209.0,0.0,4.286,77408.876,209.516,263.874,1045.374,0.0,0.86,0.97,66.0,13.245,310.0,62.213,,,,,15793.0,7395071.0,1484.089,3.169,23982.0,4.813,0.0548,18.2,tests performed,7242657.0,3785705.0,3692979.0,818.0,7102.0,8539.0,145.35,75.97,74.11,0.02,1714.0,1778.0,0.036,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-28,387218.0,1497.0,1325.857,5209.0,0.0,4.286,77709.304,300.427,266.081,1045.374,0.0,0.86,0.97,63.0,12.643,300.0,60.206,,,,,18974.0,7414045.0,1487.896,3.808,23409.0,4.698,0.0566,17.7,tests performed,7248589.0,3787415.0,3696598.0,1494.0,5932.0,7949.0,145.47,76.01,74.19,0.03,1595.0,1739.0,0.035,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-29,388665.0,1447.0,1328.429,5249.0,40.0,5.714,77999.697,290.393,266.597,1053.402,8.027,1.147,0.97,60.0,12.041,300.0,60.206,,,,,24480.0,7438525.0,1492.809,4.913,22629.0,4.541,0.0587,17.0,tests performed,7255542.0,3788759.0,3700573.0,3205.0,6953.0,7447.0,145.61,76.04,74.27,0.06,1495.0,1679.0,0.034,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-09-30,389932.0,1267.0,1316.0,5249.0,0.0,5.714,78253.966,254.269,264.103,1053.402,0.0,1.147,0.96,59.0,11.84,297.0,59.604,,,,,22984.0,7461509.0,1497.422,4.613,21981.0,4.411,0.0599,16.7,tests performed,7265217.0,3790629.0,3705723.0,5898.0,9675.0,7500.0,145.8,76.07,74.37,0.12,1505.0,1664.0,0.033,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,1560.2,2.84,9.86,313.110587721537\r\nIRL,Europe,Ireland,2021-10-01,390989.0,1057.0,1300.857,5249.0,0.0,5.714,78466.091,212.125,261.064,1053.402,0.0,1.147,0.96,59.0,11.84,308.0,61.811,,,,,21023.0,7482532.0,1501.641,4.219,21204.0,4.255,0.0613,16.3,tests performed,7272246.0,3792373.0,3709799.0,7146.0,7029.0,7219.0,145.94,76.11,74.45,0.14,1449.0,1563.0,0.031,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-02,392575.0,1586.0,1336.714,5249.0,0.0,5.714,78784.38,318.288,268.26,1053.402,0.0,1.147,0.97,56.0,11.238,298.0,59.804,,,,,20608.0,7503140.0,1505.777,4.136,20541.0,4.122,0.0651,15.4,tests performed,7277654.0,3793586.0,3712800.0,8349.0,5408.0,6760.0,146.05,76.13,74.51,0.17,1357.0,1517.0,0.03,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-03,393626.0,1051.0,1278.429,5249.0,0.0,5.714,78995.301,210.921,256.563,1053.402,0.0,1.147,0.98,60.0,12.041,319.0,64.019,24.0,4.834,258.0,51.768,17003.0,7520143.0,1509.189,3.412,20124.0,4.039,0.0635,15.7,tests performed,7283973.0,3793935.0,3713988.0,13148.0,6319.0,6917.0,146.18,76.14,74.53,0.26,1388.0,1394.0,0.028,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-04,394519.0,893.0,1256.857,5249.0,0.0,5.714,79174.513,179.213,252.234,1053.402,0.0,1.147,0.99,64.0,12.844,333.0,66.829,,,,,13890.0,7534033.0,1511.976,2.788,19852.0,3.984,0.0633,15.8,tests performed,7296484.0,3794956.0,3716813.0,21881.0,12511.0,7690.0,146.43,76.16,74.59,0.44,1543.0,1322.0,0.027,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-05,395643.0,1124.0,1203.571,5249.0,0.0,5.714,79400.085,225.571,241.54,1053.402,0.0,1.147,1.01,65.0,13.045,349.0,70.039,,,,,17689.0,7551722.0,1515.526,3.55,19668.0,3.947,0.0612,16.3,tests performed,7312381.0,3795965.0,3719351.0,34265.0,15897.0,9113.0,146.75,76.18,74.64,0.69,1829.0,1221.0,0.025,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-06,396625.0,982.0,1137.143,5280.0,31.0,4.429,79597.159,197.074,228.209,1059.623,6.221,0.889,1.03,70.0,14.048,343.0,68.835,,,,,23775.0,7575497.0,1520.298,4.771,19567.0,3.927,0.0581,17.2,tests performed,7328160.0,3797212.0,3722033.0,46157.0,15779.0,10374.0,147.07,76.2,74.7,0.93,2082.0,1208.0,0.024,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-07,397831.0,1206.0,1128.429,5280.0,0.0,4.429,79839.186,242.028,226.46,1059.623,0.0,0.889,1.07,69.0,13.847,355.0,71.244,,,,,22774.0,7598271.0,1524.868,4.57,19537.0,3.921,0.0578,17.3,tests performed,7344261.0,3798234.0,3724779.0,58534.0,16101.0,11292.0,147.39,76.23,74.75,1.17,2266.0,1086.0,0.022,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-08,399833.0,2002.0,1263.429,5280.0,0.0,4.429,80240.96,401.774,253.553,1059.623,0.0,0.889,1.11,73.0,14.65,354.0,71.043,,,,,23046.0,7621317.0,1529.493,4.625,19826.0,3.979,0.0637,15.7,tests performed,7353851.0,3798982.0,3727120.0,65054.0,9590.0,11658.0,147.58,76.24,74.8,1.31,2340.0,944.0,0.019,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-09,401773.0,1940.0,1314.0,5280.0,0.0,4.429,80630.291,389.331,263.702,1059.623,0.0,0.889,1.13,74.0,14.851,353.0,70.842,,,,,20208.0,7641525.0,1533.549,4.055,19769.0,3.967,0.0665,15.0,tests performed,7360573.0,3800511.0,3731010.0,66357.0,6722.0,11846.0,147.72,76.27,74.88,1.33,2377.0,989.0,0.02,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-10,403157.0,1384.0,1361.571,5280.0,0.0,4.429,80908.041,277.75,273.249,1059.623,0.0,0.889,1.14,74.0,14.851,382.0,76.662,21.0,4.23,317.0,63.653,17939.0,7659464.0,1537.149,3.6,19903.0,3.994,0.0684,14.6,tests performed,7368647.0,3800852.0,3732089.0,73023.0,8074.0,12096.0,147.88,76.28,74.9,1.47,2428.0,988.0,0.02,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-11,404514.0,1357.0,1427.857,5280.0,0.0,4.429,81180.372,272.331,286.551,1059.623,0.0,0.889,1.14,75.0,15.051,400.0,80.274,,,,,14958.0,7674422.0,1540.15,3.002,20056.0,4.025,0.0712,14.0,tests performed,7381403.0,3801433.0,3733673.0,83634.0,12756.0,12131.0,148.13,76.29,74.93,1.68,2435.0,925.0,0.019,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-12,405970.0,1456.0,1475.286,5280.0,0.0,4.429,81472.571,292.199,296.069,1059.623,0.0,0.889,1.15,73.0,14.65,402.0,80.676,,,,,17927.0,7692349.0,1543.748,3.598,20090.0,4.032,0.0734,13.6,tests performed,7396320.0,3802469.0,3735663.0,95534.0,14917.0,11991.0,148.43,76.31,74.97,1.92,2406.0,929.0,0.019,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-13,408021.0,2051.0,1628.0,5306.0,26.0,3.714,81884.178,411.607,326.717,1064.841,5.218,0.745,1.16,69.0,13.847,408.0,81.88,,,,,25587.0,7717936.0,1548.883,5.135,20348.0,4.084,0.08,12.5,tests performed,7412647.0,3803172.0,3737193.0,109635.0,16327.0,12070.0,148.76,76.32,75.0,2.2,2422.0,851.0,0.017,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-14,409647.0,1626.0,1688.0,5306.0,0.0,3.714,82210.494,326.316,338.758,1064.841,0.0,0.745,1.16,70.0,14.048,415.0,83.285,,,,,24904.0,7742840.0,1553.881,4.998,20653.0,4.145,0.0817,12.2,tests performed,7426609.0,3804128.0,3739197.0,120642.0,13962.0,11764.0,149.04,76.34,75.04,2.42,2361.0,842.0,0.017,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-15,411554.0,1907.0,1674.429,5306.0,0.0,3.714,82593.203,382.709,336.035,1064.841,0.0,0.745,1.16,73.0,14.65,413.0,82.883,,,,,23337.0,7766177.0,1558.564,4.683,20694.0,4.153,0.0809,12.4,tests performed,7438434.0,3805516.0,3741798.0,128489.0,11825.0,12083.0,149.28,76.37,75.09,2.58,2425.0,933.0,0.019,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-16,413734.0,2180.0,1708.714,5306.0,0.0,3.714,83030.699,437.496,342.915,1064.841,0.0,0.745,1.16,71.0,14.249,406.0,81.479,,,,,23405.0,7789582.0,1563.262,4.697,21151.0,4.245,0.0808,12.4,tests performed,7444712.0,3807227.0,3744675.0,130181.0,6278.0,12020.0,149.41,76.41,75.15,2.61,2412.0,959.0,0.019,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-17,415114.0,1380.0,1708.143,5306.0,0.0,3.714,83307.646,276.947,342.801,1064.841,0.0,0.745,1.16,74.0,14.851,459.0,92.115,27.0,5.439,386.0,77.552,20038.0,7809620.0,1567.283,4.021,21451.0,4.305,0.0796,12.6,tests performed,7451554.0,3807898.0,3745849.0,135181.0,6842.0,11844.0,149.54,76.42,75.17,2.71,2377.0,1007.0,0.02,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-18,416690.0,1576.0,1739.429,5306.0,0.0,3.714,83623.927,316.281,349.079,1064.841,0.0,0.745,1.17,73.0,14.65,484.0,97.132,,,,,18105.0,7827725.0,1570.916,3.633,21900.0,4.395,0.0794,12.6,tests performed,7464636.0,3809236.0,3747590.0,145194.0,13082.0,11890.0,149.8,76.45,75.21,2.91,2386.0,1115.0,0.022,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-19,419087.0,2397.0,1873.857,5306.0,0.0,3.714,84104.972,481.045,376.057,1064.841,0.0,0.745,1.18,74.0,14.851,472.0,94.724,,,,,21358.0,7849083.0,1575.203,4.286,22391.0,4.494,0.0837,11.9,tests performed,7479046.0,3811482.0,3749845.0,155103.0,14410.0,11818.0,150.09,76.49,75.25,3.11,2372.0,1288.0,0.026,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-20,421234.0,2147.0,1887.571,5369.0,63.0,9.0,84535.845,430.873,378.81,1077.484,12.643,1.806,1.18,86.0,17.259,464.0,93.118,,,,,27417.0,7876500.0,1580.705,5.502,22652.0,4.546,0.0833,12.0,tests performed,7493846.0,3813244.0,3751622.0,166372.0,14800.0,11600.0,150.39,76.53,75.29,3.34,2328.0,1439.0,0.029,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-21,423260.0,2026.0,1944.714,5369.0,0.0,9.0,84942.435,406.59,390.277,1077.484,0.0,1.806,1.17,88.0,17.66,448.0,89.907,,,,,27339.0,7903839.0,1586.191,5.487,23000.0,4.616,0.0846,11.8,tests performed,7505278.0,3814738.0,3753501.0,174432.0,11432.0,11238.0,150.62,76.56,75.33,3.5,2255.0,1516.0,0.03,40.74,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-22,425725.0,2465.0,2024.429,5369.0,0.0,9.0,85437.127,494.691,406.275,1077.484,0.0,1.806,1.17,90.0,18.062,457.0,91.714,,,,,25234.0,7929073.0,1591.255,5.064,23271.0,4.67,0.087,11.5,tests performed,7510381.0,3816744.0,3755163.0,175867.0,5103.0,10278.0,150.72,76.6,75.36,3.53,2063.0,1604.0,0.032,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-23,428152.0,2427.0,2059.714,5369.0,0.0,9.0,85924.192,487.065,413.356,1077.484,0.0,1.806,1.15,93.0,18.664,450.0,90.309,,,,,23034.0,7952107.0,1595.878,4.623,23218.0,4.66,0.0887,11.3,tests performed,7515864.0,3818687.0,3757334.0,177236.0,5483.0,10165.0,150.83,76.64,75.4,3.56,2040.0,1637.0,0.033,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-24,429877.0,1725.0,2109.0,5369.0,0.0,9.0,86270.376,346.184,423.247,1077.484,0.0,1.806,1.15,97.0,19.467,471.0,94.523,13.0,2.619,357.0,71.71,19115.0,7971222.0,1599.714,3.836,23086.0,4.633,0.0914,10.9,tests performed,7518411.0,3819901.0,3758143.0,177760.0,2547.0,9551.0,150.88,76.66,75.42,3.57,1917.0,1715.0,0.034,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-25,431722.0,1845.0,2147.429,5369.0,0.0,9.0,86640.642,370.266,430.959,1077.484,0.0,1.806,1.15,99.0,19.868,497.0,99.741,,,,,17133.0,7988355.0,1603.152,3.438,22947.0,4.605,0.0936,10.7,tests performed,7525319.0,3821144.0,3759314.0,182259.0,6908.0,8669.0,151.02,76.69,75.44,3.66,1740.0,1701.0,0.034,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-26,433902.0,2180.0,2116.429,5369.0,0.0,9.0,87078.138,437.496,424.738,1077.484,0.0,1.806,1.15,97.0,19.467,513.0,102.952,,,,,16525.0,8004880.0,1606.469,3.316,22257.0,4.467,0.0951,10.5,tests performed,7535550.0,3822701.0,3760702.0,189549.0,10231.0,8072.0,151.23,76.72,75.47,3.8,1620.0,1603.0,0.032,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-27,435526.0,1624.0,2041.714,5436.0,67.0,9.571,87404.052,325.914,409.744,1090.93,13.446,1.921,1.16,101.0,20.269,503.0,100.945,,,,,22457.0,8027337.0,1610.976,4.507,21548.0,4.324,0.0948,10.6,tests performed,7546713.0,3824845.0,3762348.0,196924.0,11163.0,7552.0,151.45,76.76,75.51,3.95,1516.0,1657.0,0.033,37.96,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-28,438124.0,2598.0,2123.429,5436.0,0.0,9.571,87925.435,521.383,426.143,1090.93,0.0,1.921,1.18,99.0,19.868,487.0,97.734,,,,,25215.0,8052552.0,1616.036,5.06,21245.0,4.264,0.0999,10.0,tests performed,7556756.0,3826979.0,3763664.0,203517.0,10043.0,7354.0,151.65,76.8,75.53,4.08,1476.0,1749.0,0.035,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-29,440665.0,2541.0,2134.286,5436.0,0.0,9.571,88435.378,509.944,428.322,1090.93,0.0,1.921,1.19,97.0,19.467,481.0,96.53,,,,,24910.0,8077462.0,1621.035,4.999,21198.0,4.254,0.1007,9.9,tests performed,7562337.0,3828980.0,3765084.0,205677.0,5581.0,7422.0,151.77,76.84,75.56,4.13,1489.0,1748.0,0.035,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-30,443631.0,2966.0,2211.286,5436.0,0.0,9.571,89030.613,595.235,443.774,1090.93,0.0,1.921,1.21,92.0,18.463,470.0,94.323,,,,,25252.0,8102714.0,1626.103,5.068,21515.0,4.318,0.1028,9.7,tests performed,7566244.0,3830608.0,3766394.0,206646.0,3907.0,7197.0,151.84,76.88,75.59,4.15,1444.0,1703.0,0.034,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-10-31,445594.0,1963.0,2245.286,5436.0,0.0,9.571,89424.56,393.947,450.598,1090.93,0.0,1.921,1.23,93.0,18.664,500.0,100.343,39.0,7.856,407.0,81.58,22395.0,8125109.0,1630.597,4.494,21984.0,4.412,0.1021,9.8,tests performed,,,,,,7074.0,,,,,1420.0,1548.0,0.031,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,1873.2,3.25,12.1,375.925364004605\r\nIRL,Europe,Ireland,2021-11-01,448449.0,2855.0,2389.571,5436.0,0.0,9.571,89997.52,572.959,479.554,1090.93,0.0,1.921,1.25,91.0,18.262,515.0,103.353,,,,,21441.0,8146550.0,1634.9,4.303,22599.0,4.535,0.1057,9.5,tests performed,7569609.0,3830864.0,3766637.0,209512.0,,6327.0,151.91,76.88,75.59,4.2,1270.0,1389.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-02,452172.0,3723.0,2610.0,5436.0,0.0,9.571,90744.674,747.155,523.791,1090.93,0.0,1.921,1.27,90.0,18.062,493.0,98.938,,,,,20999.0,8167549.0,1639.114,4.214,23238.0,4.664,0.1123,8.9,tests performed,7580087.0,3831960.0,3767702.0,217838.0,10478.0,6362.0,152.12,76.9,75.61,4.37,1277.0,1323.0,0.027,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-03,455346.0,3174.0,2831.429,5492.0,56.0,8.0,91381.652,636.978,568.229,1102.169,11.238,1.605,1.27,86.0,17.259,460.0,92.316,,,,,30021.0,8197570.0,1645.139,6.025,24319.0,4.88,0.1164,8.6,tests performed,7593003.0,3834500.0,3769495.0,226426.0,12916.0,6613.0,152.38,76.95,75.65,4.54,1327.0,1379.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-04,458370.0,3024.0,2892.286,5492.0,0.0,8.0,91988.527,606.875,580.442,1102.169,0.0,1.605,1.26,90.0,18.062,458.0,91.914,,,,,28911.0,8226481.0,1650.941,5.802,24847.0,4.986,0.1164,8.6,tests performed,7607839.0,3836054.0,3770716.0,238487.0,14836.0,7298.0,152.68,76.98,75.67,4.79,1465.0,1296.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-05,462273.0,3903.0,3086.857,5492.0,0.0,8.0,92771.805,783.278,619.49,1102.169,0.0,1.605,1.26,76.0,15.252,464.0,93.118,,,,,27436.0,8253917.0,1656.447,5.506,25208.0,5.059,0.1225,8.2,tests performed,7624601.0,3837688.0,3771733.0,252599.0,16762.0,8895.0,153.02,77.02,75.69,5.07,1785.0,1244.0,0.025,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-06,465958.0,3685.0,3189.571,5492.0,0.0,8.0,93511.334,739.529,640.103,1102.169,0.0,1.605,1.25,74.0,14.851,444.0,89.105,,,,,27232.0,8281149.0,1661.912,5.465,25491.0,5.116,0.1251,8.0,tests performed,7639079.0,3839515.0,3773056.0,263932.0,14478.0,10405.0,153.31,77.05,75.72,5.3,2088.0,1272.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-07,469386.0,3428.0,3398.857,5492.0,0.0,8.0,94199.286,687.952,682.104,1102.169,0.0,1.605,1.25,75.0,15.051,478.0,95.928,34.0,6.849,373.0,74.933,25624.0,8306773.0,1667.055,5.142,25952.0,5.208,0.131,7.6,tests performed,7651820.0,3840245.0,3773821.0,275178.0,12741.0,11985.0,153.56,77.07,75.74,5.52,2405.0,1358.0,0.027,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-08,472547.0,3161.0,3442.571,5492.0,0.0,8.0,94833.655,634.369,690.877,1102.169,0.0,1.605,1.25,78.0,15.654,498.0,99.942,,,,,22338.0,8329111.0,1671.538,4.483,26080.0,5.234,0.132,7.6,tests performed,7667487.0,3840756.0,3774311.0,289845.0,15667.0,13983.0,153.88,77.08,75.75,5.82,2806.0,1413.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-09,477878.0,5331.0,3672.286,5492.0,0.0,8.0,95903.513,1069.858,736.977,1102.169,0.0,1.605,1.25,83.0,16.657,520.0,104.357,,,,,25798.0,8354909.0,1676.715,5.177,26766.0,5.372,0.1372,7.3,tests performed,7693054.0,3842136.0,3775305.0,313039.0,25567.0,16138.0,154.39,77.11,75.77,6.28,3239.0,1454.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-10,480846.0,2968.0,3642.857,5566.0,74.0,10.571,96499.15,595.637,731.071,1117.019,14.851,2.122,1.23,89.0,17.861,551.0,110.578,,,,,30675.0,8385584.0,1682.871,6.156,26859.0,5.39,0.1356,7.4,tests performed,7722799.0,3843761.0,3776603.0,339861.0,29745.0,18542.0,154.99,77.14,75.79,6.82,3721.0,1323.0,0.027,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-11,484523.0,3677.0,3736.143,5566.0,0.0,10.571,97237.073,737.923,749.792,1117.019,0.0,2.122,1.21,97.0,19.467,543.0,108.973,,,,,31250.0,8416834.0,1689.142,6.271,27193.0,5.457,0.1374,7.3,tests performed,7755008.0,3845165.0,3777655.0,369615.0,32209.0,21024.0,155.63,77.17,75.81,7.42,4219.0,1302.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-12,490001.0,5478.0,3961.143,5566.0,0.0,10.571,98336.432,1099.359,794.947,1117.019,0.0,2.122,1.21,96.0,19.266,549.0,110.177,,,,,30161.0,8446995.0,1695.195,6.053,27583.0,5.536,0.1436,7.0,tests performed,7782954.0,3846328.0,3778741.0,395317.0,27946.0,22622.0,156.19,77.19,75.83,7.93,4540.0,1234.0,0.025,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-13,494643.0,4642.0,4097.857,5566.0,0.0,10.571,99268.017,931.585,822.383,1117.019,0.0,2.122,1.19,107.0,21.473,556.0,111.582,,,,,29128.0,8476123.0,1701.041,5.846,27853.0,5.59,0.1471,6.8,tests performed,7805445.0,3847739.0,3780073.0,415065.0,22491.0,23767.0,156.64,77.22,75.86,8.33,4770.0,1175.0,0.024,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-14,498448.0,3805.0,4151.714,5566.0,0.0,10.571,100031.628,763.611,833.192,1117.019,0.0,2.122,1.18,106.0,21.273,582.0,116.799,20.0,4.029,510.0,102.328,26062.0,8502185.0,1706.271,5.23,27916.0,5.602,0.1487,6.7,tests performed,7817998.0,3849387.0,3781872.0,424171.0,12553.0,23740.0,156.9,77.25,75.9,8.51,4764.0,1306.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-15,503006.0,4558.0,4351.286,5566.0,0.0,10.571,100946.356,914.728,873.243,1117.019,0.0,2.122,1.16,117.0,23.48,622.0,124.827,,,,,25005.0,8527190.0,1711.289,5.018,28297.0,5.679,0.1538,6.5,tests performed,7834525.0,3850639.0,3782418.0,438900.0,16527.0,23863.0,157.23,77.28,75.91,8.81,4789.0,1412.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-16,507413.0,4407.0,4219.286,5566.0,0.0,10.571,101830.78,884.424,846.752,1117.019,0.0,2.122,1.14,114.0,22.878,614.0,123.221,,,,,27467.0,8554657.0,1716.801,5.512,28535.0,5.727,0.1479,6.8,tests performed,7864783.0,3851966.0,3783443.0,466810.0,30258.0,24533.0,157.84,77.3,75.93,9.37,4923.0,1404.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-17,511045.0,3632.0,4314.143,5609.0,43.0,6.143,102559.672,728.892,865.789,1125.649,8.63,1.233,1.12,119.0,23.882,634.0,127.235,,,,,31973.0,8586630.0,1723.218,6.417,28721.0,5.764,0.1502,6.7,tests performed,7900340.0,3853478.0,3784499.0,499799.0,35557.0,25363.0,158.55,77.33,75.95,10.03,5090.0,1388.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-18,515691.0,4646.0,4452.571,5609.0,0.0,6.143,103492.06,932.388,893.57,1125.649,0.0,1.233,1.11,118.0,23.681,643.0,129.041,,,,,32415.0,8619045.0,1729.723,6.505,28887.0,5.797,0.1541,6.5,tests performed,7942187.0,3855154.0,3786931.0,537543.0,41847.0,26740.0,159.39,77.37,76.0,10.79,5366.0,1427.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-19,518824.0,3133.0,4117.571,5609.0,0.0,6.143,104120.81,628.75,826.34,1125.649,0.0,1.233,1.1,118.0,23.681,643.0,129.041,,,,,30759.0,8649804.0,1735.896,6.173,28973.0,5.814,0.1421,7.0,tests performed,7975976.0,3856334.0,3788390.0,568693.0,33789.0,27575.0,160.07,77.39,76.03,11.41,5534.0,1429.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-20,524783.0,5959.0,4305.714,5609.0,0.0,6.143,105316.699,1195.889,864.097,1125.649,0.0,1.233,1.11,121.0,24.283,640.0,128.439,,,,,31104.0,8680908.0,1742.138,6.242,29255.0,5.871,0.1472,6.8,tests performed,8001592.0,3857882.0,3791303.0,589858.0,25616.0,28021.0,160.58,77.42,76.09,11.84,5623.0,1449.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-21,528964.0,4181.0,4359.429,5609.0,0.0,6.143,106155.768,839.069,874.877,1125.649,0.0,1.233,1.11,125.0,25.086,669.0,134.259,32.0,6.446,549.0,110.184,28683.0,8709591.0,1747.895,5.756,29629.0,5.946,0.1471,6.8,tests performed,8019340.0,3859669.0,3794052.0,603070.0,17748.0,28763.0,160.94,77.46,76.14,12.1,5772.0,1469.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-22,534594.0,5630.0,4512.571,5609.0,0.0,6.143,107285.631,1129.863,905.611,1125.649,0.0,1.233,1.1,126.0,25.286,685.0,137.47,,,,,26990.0,8736581.0,1753.311,5.417,29913.0,6.003,0.1509,6.6,tests performed,8036967.0,3860388.0,3794518.0,619514.0,17627.0,28920.0,161.29,77.47,76.15,12.43,5804.0,1393.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-23,538255.0,3661.0,4406.0,5609.0,0.0,6.143,108020.343,734.712,884.223,1125.649,0.0,1.233,1.07,130.0,26.089,638.0,128.038,,,,,30274.0,8766855.0,1759.387,6.076,30314.0,6.084,0.1453,6.9,tests performed,8073671.0,3862563.0,3796057.0,652508.0,36704.0,29841.0,162.03,77.52,76.18,13.09,5989.0,1514.0,0.03,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-24,542146.0,3891.0,4443.0,5652.0,43.0,6.143,108801.213,780.87,891.649,1134.278,8.63,1.233,1.06,132.0,26.491,611.0,122.619,,,,,31622.0,8798477.0,1765.733,6.346,30264.0,6.074,0.1468,6.8,tests performed,8113580.0,3864191.0,3799137.0,687709.0,39909.0,30463.0,162.83,77.55,76.24,13.8,6114.0,1530.0,0.031,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-25,546909.0,4763.0,4459.714,5652.0,0.0,6.143,109757.081,955.868,895.003,1134.278,0.0,1.233,1.06,126.0,25.286,598.0,120.01,,,,,35284.0,8833761.0,1772.814,7.081,30674.0,6.156,0.1454,6.9,tests performed,8156166.0,3865203.0,3800247.0,728173.0,42586.0,30568.0,163.68,77.57,76.27,14.61,6135.0,1436.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-26,551528.0,4619.0,4672.0,5652.0,0.0,6.143,110684.051,926.969,937.606,1134.278,0.0,1.233,1.05,118.0,23.681,572.0,114.792,,,,,32926.0,8866687.0,1779.422,6.608,30983.0,6.218,0.1508,6.6,tests performed,8193803.0,3866509.0,3801317.0,763446.0,37637.0,31118.0,164.44,77.6,76.29,15.32,6245.0,1454.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-27,556319.0,4791.0,4505.143,5652.0,0.0,6.143,111645.538,961.488,904.12,1134.278,0.0,1.233,1.04,121.0,24.283,536.0,107.568,,,,,34190.0,8900877.0,1786.283,6.861,31424.0,6.306,0.1434,7.0,tests performed,8220919.0,3867748.0,3802848.0,787797.0,27116.0,31332.0,164.98,77.62,76.32,15.81,6288.0,1409.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-28,560054.0,3735.0,4441.429,5652.0,0.0,6.143,112395.101,749.563,891.333,1134.278,0.0,1.233,1.05,117.0,23.48,566.0,113.588,42.0,8.46,443.0,88.832,28461.0,8929338.0,1791.995,5.712,31392.0,6.3,0.1415,7.1,tests performed,8241053.0,3869719.0,3805096.0,803712.0,20134.0,31673.0,165.39,77.66,76.36,16.13,6356.0,1436.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-29,564657.0,4603.0,4294.714,5652.0,0.0,6.143,113318.86,923.759,861.89,1134.278,0.0,1.233,1.05,115.0,23.079,579.0,116.197,,,,,29569.0,8958907.0,1797.929,5.934,31761.0,6.374,0.1352,7.4,tests performed,8263978.0,3870265.0,3806059.0,825129.0,22925.0,32430.0,165.85,77.67,76.38,16.56,6508.0,1411.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-11-30,570115.0,5458.0,4551.429,5652.0,0.0,6.143,114414.205,1095.345,913.409,1134.278,0.0,1.233,1.05,122.0,24.484,579.0,116.197,,,,,30682.0,8989589.0,1804.086,6.157,31819.0,6.386,0.143,7.0,tests performed,8305968.0,3872212.0,3807655.0,863582.0,41990.0,33185.0,166.69,77.71,76.41,17.33,6660.0,1378.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-01,573905.0,3790.0,4537.0,5707.0,55.0,7.857,115174.806,760.601,910.513,1145.316,11.038,1.577,1.04,117.0,23.48,578.0,115.997,,,,,34324.0,9023913.0,1810.975,6.888,32205.0,6.463,0.1409,7.1,tests performed,8347153.0,3873342.0,3808978.0,902315.0,41185.0,33368.0,167.52,77.73,76.44,18.11,6696.0,1307.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-02,578064.0,4159.0,4450.714,5707.0,0.0,7.857,116009.46,834.654,893.197,1145.316,0.0,1.577,1.04,117.0,23.48,545.0,109.374,,,,,36124.0,9060037.0,1818.224,7.25,32325.0,6.487,0.1377,7.3,tests performed,8389432.0,3875149.0,3810339.0,941427.0,42279.0,33324.0,168.36,77.77,76.47,18.89,6688.0,1421.0,0.029,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-03,583472.0,5408.0,4563.429,5707.0,0.0,7.857,117094.77,1085.311,915.817,1145.316,0.0,1.577,1.04,110.0,22.075,528.0,105.962,,,,,33464.0,9093501.0,1824.94,6.716,32402.0,6.503,0.1408,7.1,tests performed,8427169.0,3876199.0,3811475.0,976981.0,37737.0,33338.0,169.12,77.79,76.49,19.61,6690.0,1384.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-04,589094.0,5622.0,4682.143,5707.0,0.0,7.857,118223.028,1128.258,939.641,1145.316,0.0,1.577,1.04,114.0,22.878,487.0,97.734,,,,,34442.0,9127943.0,1831.852,6.912,32438.0,6.51,0.1443,6.9,tests performed,8453118.0,3877399.0,3813148.0,1000057.0,25949.0,33171.0,169.64,77.81,76.52,20.07,6657.0,1379.0,0.028,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-05,594250.0,5156.0,4885.143,5707.0,0.0,7.857,119257.766,1034.738,980.381,1145.316,0.0,1.577,1.03,110.0,22.075,503.0,100.945,33.0,6.647,476.0,95.479,30391.0,9158334.0,1837.951,6.099,32714.0,6.565,0.1493,6.7,tests performed,8471377.0,3878751.0,3814912.0,1015200.0,18259.0,32903.0,170.01,77.84,76.56,20.37,6603.0,1290.0,0.026,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-06,597161.0,2911.0,4643.429,5707.0,0.0,7.857,119841.964,584.197,931.872,1145.316,0.0,1.577,1.02,110.0,22.075,536.0,107.568,,,,,30004.0,9188338.0,1843.973,6.021,32776.0,6.578,0.1417,7.1,tests performed,8495460.0,3879693.0,3816163.0,1037090.0,24083.0,33069.0,170.49,77.86,76.59,20.81,6636.0,1347.0,0.027,44.44,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-07,602726.0,5565.0,4658.714,5707.0,0.0,7.857,120958.782,1116.819,934.94,1145.316,0.0,1.577,1.02,117.0,23.48,505.0,101.347,,,,,29812.0,9218150.0,1849.955,5.983,32652.0,6.553,0.1427,7.0,tests performed,8525411.0,3880179.0,3816859.0,1065860.0,29951.0,31349.0,171.09,77.87,76.6,21.39,6291.0,1138.0,0.023,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-08,606852.0,4126.0,4706.714,5788.0,81.0,11.571,121786.813,828.031,944.573,1161.572,16.256,2.322,1.01,118.0,23.681,543.0,108.973,,,,,34383.0,9252533.0,1856.856,6.9,32660.0,6.554,0.1441,6.9,tests performed,8564147.0,3880994.0,3818293.0,1102347.0,38736.0,30999.0,171.87,77.89,76.63,22.12,6221.0,1093.0,0.022,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-09,610855.0,4003.0,4684.429,5788.0,0.0,11.571,122590.16,803.347,940.1,1161.572,0.0,2.322,1.0,115.0,23.079,530.0,106.364,,,,,27121.0,9279654.0,1862.298,5.443,31374.0,6.296,0.1493,6.7,tests performed,8611657.0,3881793.0,3819433.0,1147918.0,47510.0,31746.0,172.82,77.9,76.65,23.04,6371.0,949.0,0.019,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-10,614952.0,4097.0,4497.143,5788.0,0.0,11.571,123412.372,822.211,902.514,1161.572,0.0,2.322,1.0,110.0,22.075,511.0,102.551,,,,,30491.0,9310145.0,1868.417,6.119,30949.0,6.211,0.1453,6.9,tests performed,8654444.0,3882673.0,3820966.0,1188293.0,42787.0,32468.0,173.68,77.92,76.68,23.85,6516.0,925.0,0.019,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-11,618956.0,4004.0,4266.0,5788.0,0.0,11.571,124215.919,803.547,856.127,1161.572,0.0,2.322,1.0,111.0,22.276,481.0,96.53,,,,,34462.0,9344607.0,1875.334,6.916,30952.0,6.212,0.1378,7.3,tests performed,8684816.0,3883306.0,3821789.0,1217209.0,30372.0,33100.0,174.29,77.93,76.7,24.43,6643.0,844.0,0.017,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-12,623623.0,4667.0,4196.143,5788.0,0.0,11.571,125152.522,936.602,842.108,1161.572,0.0,2.322,1.04,109.0,21.875,504.0,101.146,37.0,7.453,438.0,87.825,32346.0,9376953.0,1881.825,6.491,31231.0,6.268,0.1344,7.4,tests performed,8713056.0,3883996.0,3822977.0,1243571.0,28240.0,34526.0,174.86,77.95,76.72,24.96,6929.0,749.0,0.015,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-13,628306.0,4683.0,4449.286,5788.0,0.0,11.571,126092.335,939.813,892.91,1161.572,0.0,2.322,1.05,108.0,21.674,518.0,103.955,,,,,27383.0,9404336.0,1887.32,5.495,30857.0,6.193,0.1442,6.9,tests performed,8746120.0,3884710.0,3823998.0,1274900.0,33064.0,35809.0,175.52,77.96,76.74,25.59,7186.0,717.0,0.014,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-14,632177.0,3871.0,4207.286,5788.0,0.0,11.571,126869.191,776.856,844.344,1161.572,0.0,2.322,1.06,109.0,21.875,493.0,98.938,,,,,27119.0,9431455.0,1892.763,5.442,30472.0,6.115,0.1381,7.2,tests performed,8800756.0,3885334.0,3825130.0,1327781.0,54636.0,39335.0,176.62,77.97,76.77,26.65,7894.0,736.0,0.015,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-15,636407.0,4230.0,4222.143,5835.0,47.0,6.714,127718.094,848.903,847.326,1171.004,9.432,1.347,1.08,105.0,21.072,470.0,94.323,,,,,36274.0,9467729.0,1900.042,7.28,30742.0,6.169,0.1373,7.3,tests performed,8858872.0,3886118.0,3826289.0,1383955.0,58116.0,42104.0,177.79,77.99,76.79,27.77,8450.0,732.0,0.015,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-16,640548.0,4141.0,4241.857,5835.0,0.0,6.714,128549.135,831.041,851.282,1171.004,0.0,1.347,1.1,108.0,21.674,443.0,88.904,,,,,35133.0,9502862.0,1907.093,7.051,31887.0,6.399,0.133,7.5,tests performed,8924902.0,3887164.0,3827706.0,1447529.0,66030.0,44749.0,179.11,78.01,76.82,29.05,8981.0,767.0,0.015,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-17,644143.0,3595.0,4170.143,5835.0,0.0,6.714,129270.602,721.467,836.89,1171.004,0.0,1.347,1.14,105.0,21.072,420.0,84.288,,,,,34589.0,9537451.0,1914.035,6.942,32472.0,6.517,0.1284,7.8,tests performed,8992330.0,3888349.0,3830054.0,1511425.0,67428.0,48269.0,180.46,78.03,76.86,30.33,9687.0,811.0,0.016,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-18,651476.0,7333.0,4645.714,5835.0,0.0,6.714,130742.234,1471.632,932.331,1171.004,0.0,1.347,1.19,107.0,21.473,410.0,82.281,,,,,33312.0,9570763.0,1920.72,6.685,32308.0,6.484,0.1438,7.0,tests performed,9039047.0,3889609.0,3831185.0,1555751.0,46717.0,50604.0,181.4,78.06,76.89,31.22,10156.0,900.0,0.018,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-19,656600.0,5124.0,4711.0,5835.0,0.0,6.714,131770.55,1028.316,945.433,1171.004,0.0,1.347,1.24,107.0,21.473,436.0,87.499,34.0,6.849,332.0,66.674,32547.0,9603310.0,1927.252,6.532,32337.0,6.49,0.1457,6.9,tests performed,9094093.0,3890162.0,3832048.0,1609382.0,55046.0,54434.0,182.51,78.07,76.9,32.3,10924.0,881.0,0.018,50.0,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-20,661388.0,4788.0,4726.0,5835.0,0.0,6.714,132731.435,960.885,948.443,1171.004,0.0,1.347,1.28,104.0,20.871,467.0,93.72,,,,,27032.0,9630342.0,1932.677,5.425,32287.0,6.48,0.1464,6.8,tests performed,9184242.0,3890700.0,3832566.0,1698475.0,90149.0,62589.0,184.32,78.08,76.91,34.09,12561.0,856.0,0.017,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-21,666657.0,5269.0,4925.714,5835.0,0.0,6.714,133788.851,1057.416,988.523,1171.004,0.0,1.347,1.32,102.0,20.47,443.0,88.904,,,,,35504.0,9665846.0,1939.802,7.125,33484.0,6.72,0.1471,6.8,tests performed,9311904.0,3892134.0,3834254.0,1823017.0,127662.0,73021.0,186.88,78.11,76.95,36.59,14654.0,971.0,0.019,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-22,672964.0,6307.0,5222.429,5890.0,55.0,7.857,135054.579,1265.728,1048.069,1182.042,11.038,1.577,1.37,100.0,20.069,429.0,86.094,,,,,38510.0,9704356.0,1947.53,7.728,33804.0,6.784,0.1545,6.5,tests performed,9440993.0,3893364.0,3835697.0,1949435.0,129089.0,83160.0,189.47,78.13,76.98,39.12,16689.0,1035.0,0.021,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-23,680375.0,7411.0,5689.571,5890.0,0.0,7.857,136541.864,1487.285,1141.818,1182.042,0.0,1.577,1.43,98.0,19.667,390.0,78.268,,,,,40553.0,9744909.0,1955.669,8.138,34578.0,6.939,0.1645,6.1,tests performed,9539193.0,3894290.0,3836939.0,2045467.0,98200.0,87756.0,191.44,78.15,77.0,41.05,17611.0,1018.0,0.02,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-24,691557.0,11182.0,6773.429,5890.0,0.0,7.857,138785.937,2244.073,1359.334,1182.042,0.0,1.577,1.49,89.0,17.861,393.0,78.87,,,,,38531.0,9783440.0,1963.401,7.733,35141.0,7.052,0.1928,5.2,tests performed,9550222.0,3894387.0,3837055.0,2056283.0,11029.0,79699.0,191.66,78.15,77.0,41.27,15994.0,863.0,0.017,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-25,705322.0,13765.0,7692.286,5890.0,0.0,7.857,141548.382,2762.445,1543.735,1182.042,0.0,1.577,1.51,87.0,17.46,378.0,75.859,,,,,43080.0,9826520.0,1972.047,8.646,36537.0,7.332,0.2105,4.7,tests performed,,,,,,73044.0,,,,,14659.0,683.0,0.014,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-26,715726.0,10404.0,8446.571,5890.0,0.0,7.857,143636.321,2087.939,1695.11,1182.042,0.0,1.577,1.52,91.0,18.262,426.0,85.492,36.0,7.252,429.0,86.012,25581.0,9852101.0,1977.181,5.134,35542.0,7.133,0.2377,4.2,tests performed,9550481.0,3894390.0,3837059.0,2056535.0,,65198.0,191.66,78.16,77.0,41.27,13084.0,604.0,0.012,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-27,722461.0,6735.0,8724.714,5890.0,0.0,7.857,144987.943,1351.621,1750.93,1182.042,0.0,1.577,1.52,91.0,18.262,462.0,92.717,,,,,14084.0,9866185.0,1980.007,2.826,33692.0,6.762,0.259,3.9,tests performed,9564124.0,3894768.0,3837634.0,2069225.0,13643.0,54269.0,191.94,78.16,77.02,41.53,10891.0,581.0,0.012,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-28,731467.0,9006.0,9258.571,5890.0,0.0,7.857,146795.323,1807.38,1858.067,1182.042,0.0,1.577,1.54,92.0,18.463,521.0,104.558,,,,,26409.0,9892594.0,1985.307,5.3,32393.0,6.501,0.2858,3.5,tests performed,9588241.0,3895213.0,3838353.0,2092178.0,24117.0,39477.0,192.42,78.17,77.03,41.99,7922.0,440.0,0.009,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-29,747895.0,16428.0,10704.429,5912.0,22.0,3.143,150092.195,3296.873,2148.231,1186.457,4.415,0.631,1.58,93.0,18.664,568.0,113.99,,,,,39008.0,9931602.0,1993.135,7.828,32464.0,6.515,0.3297,3.0,tests performed,9640813.0,3896263.0,3839553.0,2142500.0,52572.0,28546.0,193.48,78.19,77.05,43.0,5729.0,414.0,0.008,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-30,768449.0,20554.0,12582.0,5912.0,0.0,3.143,154217.099,4124.904,2525.034,1186.457,0.0,0.631,1.59,88.0,17.66,619.0,124.225,,,,,45622.0,9977224.0,2002.291,9.156,33188.0,6.66,0.3791,2.6,tests performed,9700729.0,3897290.0,3840651.0,2200292.0,59916.0,23077.0,194.68,78.21,77.08,44.16,4631.0,429.0,0.009,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2021-12-31,788559.0,20110.0,13857.429,5912.0,0.0,3.143,158252.898,4035.799,2780.994,1186.457,0.0,0.631,1.57,86.0,17.259,682.0,136.868,,,,,45772.0,10022996.0,2011.477,9.186,34222.0,6.868,0.4049,2.5,tests performed,9721389.0,3898001.0,3842284.0,2218608.0,20660.0,24452.0,195.09,78.23,77.11,44.52,4907.0,516.0,0.01,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-01,811840.0,23281.0,15216.857,5912.0,0.0,3.143,162925.073,4672.175,3053.813,1186.457,0.0,0.631,1.53,85.0,17.058,656.0,131.65,,,,,44660.0,10067656.0,2020.439,8.963,34448.0,6.913,0.4417,2.3,tests performed,9730467.0,3898066.0,3842376.0,2227530.0,9078.0,25731.0,195.28,78.23,77.11,44.7,5164.0,525.0,0.011,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-02,811840.0,0.0,13730.571,5912.0,0.0,3.143,162925.073,0.0,2755.536,1186.457,0.0,0.631,1.49,87.0,17.46,717.0,143.892,27.0,5.439,812.0,162.959,33290.0,10100946.0,2027.12,6.681,35549.0,7.134,0.3862,2.6,tests performed,9745101.0,3898333.0,3842987.0,2241286.0,14634.0,27803.0,195.57,78.23,77.12,44.98,5580.0,563.0,0.011,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-03,845897.0,34057.0,17633.714,5912.0,0.0,3.143,169759.843,6834.769,3538.843,1186.457,0.0,0.631,1.51,93.0,18.664,804.0,161.352,,,,,36863.0,10137809.0,2034.518,7.398,38803.0,7.787,0.4544,2.2,tests performed,9765715.0,3901951.0,3843681.0,2257588.0,20614.0,28799.0,195.98,78.31,77.14,45.31,5780.0,1026.0,0.021,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-04,867199.0,21302.0,19390.286,5912.0,0.0,3.143,174034.86,4275.017,3891.362,1186.457,0.0,0.631,1.45,90.0,18.062,884.0,177.407,,,,,40184.0,10177993.0,2042.583,8.064,40771.0,8.182,0.4756,2.1,tests performed,9798580.0,3903113.0,3844373.0,2288599.0,32865.0,30048.0,196.64,78.33,77.15,45.93,6030.0,1129.0,0.023,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-05,884855.0,17656.0,19565.714,5952.0,40.0,5.714,177578.175,3543.315,3926.569,1194.484,8.027,1.147,1.39,94.0,18.865,928.0,186.237,,,,,40322.0,10218315.0,2050.675,8.092,40959.0,8.22,0.4777,2.1,tests performed,9840824.0,3905227.0,3845149.0,2327953.0,42244.0,28573.0,197.49,78.37,77.17,46.72,5734.0,1281.0,0.026,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-06,908672.0,23817.0,20031.857,5952.0,0.0,5.714,182357.918,4779.743,4020.117,1194.484,0.0,1.147,1.33,90.0,18.062,941.0,188.846,,,,,48979.0,10267294.0,2060.504,9.829,41439.0,8.316,0.4834,2.1,tests performed,9884051.0,3907639.0,3846674.0,2367243.0,43227.0,26189.0,198.36,78.42,77.2,47.51,5256.0,1478.0,0.03,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-07,930598.0,21926.0,20291.286,5952.0,0.0,5.714,186758.164,4400.245,4072.181,1194.484,0.0,1.147,1.28,84.0,16.858,936.0,187.842,,,,,42269.0,10309563.0,2068.987,8.483,40938.0,8.216,0.4957,2.0,tests performed,9919190.0,3912410.0,3847321.0,2396964.0,35139.0,28257.0,199.06,78.52,77.21,48.1,5671.0,2058.0,0.041,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-08,956720.0,26122.0,20697.143,5952.0,0.0,5.714,192000.488,5242.325,4153.631,1194.484,0.0,1.147,1.23,83.0,16.657,917.0,184.029,,,,,48573.0,10358136.0,2078.735,9.748,41497.0,8.328,0.4988,2.0,tests performed,9943733.0,3922170.0,3847998.0,2411070.0,24543.0,30467.0,199.56,78.71,77.22,48.39,6114.0,3443.0,0.069,52.78,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-09,978104.0,21384.0,23752.0,5952.0,0.0,5.714,196291.961,4291.473,4766.698,1194.484,0.0,1.147,1.19,83.0,16.657,984.0,197.475,38.0,7.654,1026.0,205.864,44040.0,10402176.0,2087.573,8.838,43033.0,8.636,0.5519,1.8,tests performed,9961274.0,3929263.0,3848645.0,2420871.0,17541.0,30882.0,199.91,78.85,77.24,48.58,6198.0,4419.0,0.089,,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-10,978104.0,0.0,18886.714,5952.0,0.0,5.714,196291.961,0.0,3790.303,1194.484,0.0,1.147,1.13,,,,,,,,,43834.0,10446010.0,2096.37,8.797,44029.0,8.836,0.429,2.3,tests performed,9981964.0,3935858.0,3849035.0,2434576.0,20690.0,30893.0,200.32,78.99,77.24,48.86,6200.0,4844.0,0.097,,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-11,1021303.0,43199.0,22014.857,5952.0,0.0,5.714,204961.404,8669.443,4418.078,1194.484,0.0,1.147,,,,,,,,,,42109.0,10488119.0,2104.821,8.451,44304.0,8.891,0.4969,2.0,tests performed,10009761.0,3940544.0,3850245.0,2456478.0,27797.0,30169.0,200.88,79.08,77.27,49.3,6055.0,5347.0,0.107,,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-12,1042212.0,20909.0,22479.571,6035.0,83.0,11.857,209157.552,4196.147,4511.339,1211.141,16.657,2.38,,,,,,,,,,40655.0,10528774.0,2112.979,8.159,44351.0,8.901,0.5069,2.0,tests performed,10039071.0,3947890.0,3850923.0,2477765.0,29310.0,28321.0,201.47,79.23,77.28,49.73,5684.0,6095.0,0.122,,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\nIRL,Europe,Ireland,2022-01-13,1061116.0,18904.0,21777.714,6035.0,,,212951.323,3793.772,4370.486,1211.141,,,,,,,,,,,,36960.0,10565734.0,2120.397,7.417,42634.0,8.556,,,tests performed,,,,,,,,,,,,,,,4982904.0,69.874,38.7,13.928,8.678,67335.293,0.2,126.459,3.28,23.0,25.7,,2.96,82.3,0.955,,,,\r\n");

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

// const data_date_extent = ({}) => data[data.length - 1].date;   ====== error in calculang
const data_date_extent = data[data.length - 1].date; // exposing this, because not knowing the bounds = possibility for runtime TypeErrors in data.find result lookup

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