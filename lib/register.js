"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRegister = makeRegister;
/**
 * Create a register function.
 *
 * Failed if called twice with the same key.
 *
 * @param {any} f
 * @param {string} opt_msg
 * @param {function} opt_key optional key function, invoked with the same
 * arguments applied to f, default to get first argument.
 * @returns
 */
function makeRegister(f, opt_msg) {
  var opt_key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getFirstArg;

  opt_msg = opt_msg || f.name + " with duplicate key:";
  var keys = {};

  var r = function r() {
    var key = opt_key.apply(undefined, arguments);
    if (keys[key]) {
      throw Error(opt_msg + " \"" + key + "\"");
    }
    keys[key] = true;
    return f.apply(undefined, arguments);
  };

  if (process.env.NODE_ENV === "test") {
    afterEach(function () {
      keys = {};
    });
  }

  // Function name can not directly assigned, normally it is readonly
  Object.defineProperty(r, "name", { value: f.name });
  return r;
}

function getFirstArg(first) {
  return first;
}