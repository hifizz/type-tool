# type-tool

[![Build Status](https://travis-ci.com/hifizz/type-tool.svg?branch=master)](https://travis-ci.com/hifizz/type-tool)
[![codecov](https://codecov.io/gh/hifizz/type-tool/branch/master/graph/badge.svg)](https://codecov.io/gh/hifizz/type-tool)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

一个安全的变量类型检查工具。

## Install

Use yarn:

```bash
yarn add type-tool
```

Use npm:

```bash
npm i type-tool
```

## Usage

```js
import { isArray } from 'type-tool'

const targetVariable = []
const isVariableArray = isArray(targetVariable)

console.log(isVariableArray) // true
```

```js
import * as type from 'type-tool'

const targetVariable = []
const isVariableArray = type.isArray(targetVariable)

console.log(isVariableArray) // true
```

## Documentation

借助 `Object.prototype.toString` 来返回真实的变量类型。

```js
// 看下面的例子

console.log(typeof []) // "object"
console.log(Object.prototype.toString.call([])) // "[Object Array]"

console.log(typeof null) // "object"
console.log(Object.prototype.toString.call(null)) // "[Object Null]"
```

### API

**getTypeString**
`getTypeString(o: any): string` Alias `Object.prototype.toString.call` Return string like "[Object Null]" "[Object Array]".

**isString** `isString(o: any): boolean`

**isNumber** `isNumber(o: any): boolean`

**isBoolean** `isBoolean(o: any): boolean`

**isSymbol** `isSymbol(o: any): boolean`

**isArray** `isArray(o: any): boolean`

**isObject** `isObject(o: any): boolean`

**isFunction** `isFunction(o: any): boolean`

**isError** `isError(o: any): boolean`

**isNull** `isNull(o: any): boolean`

**isUndefined** `isUndefined(o: any): boolean`

**isDate** `isDate(o: any): boolean`

**isMath** `isMath(o: any): boolean`
