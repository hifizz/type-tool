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

TODO

- getTypeString
- isString
- isNumber
- isBoolean
- isSymbol
- isArray
- isObject
- isFunction
- isError
- isNull
- isUndefined
- isDate
- isMath
