import { truthy } from "./op";

/**
 * Wrap a function, checks its return value.
 *
 * @export
 * @param {any} f function to wrap.
 * @param {string} [msg='Should return a value']
 * @param {any} [check=truthy] function to check the result, raise Error with msg if returns falsy.
 */
export function checkResult(f, msg = "Should return a value", check = truthy) {
  return (...args) => {
    let r = f(...args);
    if (!check(r)) {
      fail(msg);
    }
    return r;
  };
}

function fail(msg) {
  throw Error(msg);
}
