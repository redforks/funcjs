import { checkResult } from "./debug";

describe("checkResult", function() {
  let inner;
  beforeEach(function() {
    inner = jest.fn();
  });

  it("call inner", function() {
    inner.mockReturnValueOnce(33);
    let f = checkResult(inner);
    expect(f(1, 2)).toEqual(33);
    expect(inner).toBeCalledWith(1, 2);
  });

  it("inner returns falsy value", function() {
    let f = checkResult(inner);
    expect(f).toThrowError("Should return a value");
  });
});
