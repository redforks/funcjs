"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkResult = checkResult;

var _op = require("./op");

/**
 * Wrap a function, checks its return value.
 *
 * @export
 * @param {any} f function to wrap.
 * @param {string} [msg='Should return a value']
 * @param {any} [check=truthy] function to check the result, raise Error with msg if returns falsy.
 */
function checkResult(f) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Should return a value";
  var check = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _op.truthy;

  return function () {
    var r = f.apply(undefined, arguments);
    if (!check(r)) {
      fail(msg);
    }
    return r;
  };
}

function fail(msg) {
  throw Error(msg);
}