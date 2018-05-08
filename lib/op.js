"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truthy = truthy;
exports.falsy = falsy;
/**
 * Return true if value is truthy.
 *
 * @param {any} v
 * @returns
 */
function truthy(v) {
  return !!v;
}

/**
 * Return true if value is falsy.
 *
 * @param {any} v
 * @returns
 */
function falsy(v) {
  return !v;
}