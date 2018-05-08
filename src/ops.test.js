import { truthy, falsy } from "./op";

test("truthy", function() {
  expect(truthy(false)).toBe(false);
  expect(truthy(null)).toBe(false);
  expect(truthy(undefined)).toBe(false);
  expect(truthy("")).toBe(false);
  expect(truthy(0)).toBe(false);

  expect(truthy(true)).toBe(true);
  expect(truthy("false")).toBe(true);
  expect(truthy([])).toBe(true);
  expect(truthy({})).toBe(true);
  expect(truthy(1)).toBe(true);
});

test("falsy", function() {
  expect(falsy(false)).toBe(true);
  expect(falsy(null)).toBe(true);
  expect(falsy(undefined)).toBe(true);
  expect(falsy("")).toBe(true);
  expect(falsy(0)).toBe(true);

  expect(falsy(true)).toBe(false);
  expect(falsy("false")).toBe(false);
  expect(falsy([])).toBe(false);
  expect(falsy({})).toBe(false);
  expect(falsy(1)).toBe(false);
});
