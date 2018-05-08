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
export function makeRegister(f, opt_msg, opt_key = getFirstArg) {
  opt_msg = opt_msg || `${f.name} with duplicate key:`;
  let keys = {};

  let r = (...args) => {
    let key = opt_key(...args);
    if (keys[key]) {
      throw Error(`${opt_msg} "${key}"`);
    }
    keys[key] = true;
    return f(...args);
  };

  if (process.env.NODE_ENV === "test") {
    afterEach(function() {
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
