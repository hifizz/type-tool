import * as tools from "../src/index";

describe("Type util functions:", () => {
  it("getTypeString", () => {
    expect(tools.getTypeString(123)).toBe("[object Number]")
    expect(tools.getTypeString({})).toBe("[object Object]")
    expect(tools.getTypeString([])).toBe("[object Array]")
    expect(tools.getTypeString(null)).toBe("[object Null]")
    expect(tools.getTypeString(new Map())).toBe("[object Map]")
  })

  it("isString", () => {
    expect(tools.isString('test_string')).toBe(true);
    /** typeof an instance by new String() will return 'object' */
    const s = new String("hello");
    expect(typeof s).toBe("object");
    /** But tools.isString() will return correctly */
    expect(tools.isString(s)).toBe(true);
  })

  it("isNumber", () => {
    expect(tools.isNumber(123)).toBe(true);
    expect(tools.isNumber(5e3)).toBe(true);
    expect(tools.isNumber(0xff)).toBe(true);
    expect(tools.isNumber(-1.1)).toBe(true);
    expect(tools.isNumber(0)).toBe(true);
    expect(tools.isNumber(1.1)).toBe(true);
    expect(tools.isNumber(10)).toBe(true);
    expect(tools.isNumber(10.10)).toBe(true);
    expect(tools.isNumber(100)).toBe(true);
    expect(tools.isNumber(new Number(123))).toBe(true);
  })

  it("isBoolean", () => {
    expect(tools.isBoolean(true)).toBe(true);
    expect(tools.isBoolean(new Boolean())).toBe(true);
    expect(tools.isBoolean(false)).toBe(true);
    const a = new Boolean();
    expect(tools.isBoolean(a)).toBe(true);
    expect(tools.isBoolean('dummy_string')).toBe(false);
  })

  it("isSymbol", () => {
    const s = Symbol('dummy');
    expect(tools.isSymbol(s)).toBe(true);
    const n = 'string';
    expect(tools.isSymbol(n)).toBe(false);
  })

  it("isArray", () => {
    expect(tools.isArray([])).toBe(true);
    expect(tools.isArray(() => {})).toBe(false);
  })

  it("isObject", () => {
    expect(tools.isObject({})).toBe(true);
  })

  it("isFunction", () => {
    const a = () => {}
    expect(tools.isFunction(a)).toBe(true);
    function func() {}
    expect(tools.isFunction(func)).toBe(true);
    const b: any[] = [];
    expect(tools.isFunction(b)).toBe(false);
  })

  it("isError", () => {
    const error = new Error("Error message!")
    expect(tools.isError(error)).toBe(true);
    const typeError = new TypeError("Error message!")
    expect(tools.isError(typeError)).toBe(true);
  })

  it("isNull", () => {
    expect(tools.isNull(null)).toBe(true);
  })

  it("isUndefined", () => {
    expect(tools.isUndefined(undefined)).toBe(true);
  })

  it("isDate", () => {
    const date = new Date();
    expect(tools.isDate(date)).toBe(true);
  })

  it("isMath", () => {
    expect(tools.isMath(Math)).toBe(true);
  })

})
