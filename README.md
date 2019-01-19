# js-type-is

If you want to check type of value on the browser, this library may be useful.

# Install

```
$ npm install @yokotak0527/js-type-is
```

# Usage

```js
import typeis from '@yokotak0527/js-type-is'
typeis('hello') // String
```

when using CommonJS

```js
const typeis = require('@yokotak0527/js-type-is')
typeis(1) // Number
```

# Suppoert types

 - String
 - Number
 - Undefined
 - Function
 - Object
 - Symbol
 - Boolean
 - Null
 - RegExp
 - Error
 - EvalError
 - RangeError
 - ReferenceError
 - SyntaxError
 - TypeError
 - URIError
 - Math
 - Date
 - Array
 - Int8Array
 - Uint8Array
 - Uint8ClampedArray
 - Int16Array
 - Uint16Array
 - Int32Array
 - Uint32Array
 - Float32Array
 - Float64Array
 - Map
 - Set
 - WeakMap
 - WeakSet
 - ArrayBuffer
 - DataView
 - JSON
 - Promise

And your defined types(class).
