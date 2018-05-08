import { makeRegister } from "./register";

describe("makeRegister", function() {
  let inner, f;
  beforeAll(function() {
    inner = jest.fn();
    f = makeRegister(inner);
  });

  it("wrapped function name", function() {
    expect(f.name).toBe(inner.name);
  });

  it("call inner", function() {
    inner.mockReturnValue(45);
    expect(f("foo", 33, 45)).toBe(45);
    expect(inner).toBeCalledWith("foo", 33, 45);
  });

  it("registered", function() {
    f("foo");
    f("bar");
    expect(() => f("foo")).toThrowError(/ with duplicate key: "foo"/);
  });
});
