# type-tool

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

```
const 
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