"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRegister = makeRegister;
/**
 * Create a register function.
 *
 * Assume first argument of f is a unique key, failed if called twice with the
 * same key.
 *
 * @param {any} f
 * @param {string} opt_msg
 * @returns
 */
function makeRegister(f, opt_msg) {
  opt_msg = opt_msg || f.name + " with duplicate key:";
  var keys = {};

  var r = function r(key) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (keys[key]) {
      throw Error(opt_msg + " \"" + key + "\"");
    }
    keys[key] = true;
    return f.apply(undefined, [key].concat(args));
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