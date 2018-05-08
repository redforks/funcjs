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
export function makeRegister(f, opt_msg) {
  opt_msg = opt_msg || `${f.name} with duplicate key:`;
  let keys = {};

  let r = (key, ...args) => {
    if (keys[key]) {
      throw Error(`${opt_msg} "${key}"`);
    }
    keys[key] = true;
    return f(key, ...args);
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
