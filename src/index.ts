const h = Object.prototype.toString;

export function getTypeString(o: any) {
  return h.call(o);
}

export function isObject(o: any) {
  return h.call(o) === "[object Object]";
}

export function isString(o: any) {
  return h.call(o) === "[object String]";
}

export function isNumber(o: any) {
  return h.call(o) === "[object Number]";
}

export function isSymbol(o: any) {
  return h.call(o) === "[object Symbol]";
}

export function isBoolean(o: any) {
  return h.call(o) === "[object Boolean]";
}

export function isNull(o: any) {
  return o === null;
  // return h.call(o) === "[object Null]";
}

export function isUndefined(o: any) {
  return o === undefined;
  // return h.call(o) === "[object Undefined]";
}

export function isFunction(o: any) {
  return h.call(o) === "[object Function]";
}

export function isArray(o: any) {
  return h.call(o) === "[object Array]";
}

export function isError(o: any) {
  return h.call(o) === "[object Error]";
}

export function isDate(o: any) {
  return h.call(o) === "[object Date]";
}

export function isMath(o: any) {
  return h.call(o) === "[object Math]";
}
