const jsTypes = [
  'String',
  'Number',
  'Undefined',
  'Function',
  'Object',
  'Symbol',
  'Boolean',
  'Null',
  'RegExp',
  'Error',
  'EvalError',
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
  'Math',
  'Date',
  'Array',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array',
  'Map',
  'Set',
  'WeakMap',
  'WeakSet',
  'ArrayBuffer',
  'DataView',
  'JSON',
  'Promise'
]

/**
 * return type of value
 * @param  {*}      value
 * @return {string}
 */
const jsTypeIs = (value) => {
  let type = Object.prototype.toString.call(value).slice(8, -1)

  if (type === 'Function') {
    // is class
    if (/^class\s/.test(value.toString())) {
      return value.name
    }

    let name = value.name

    // build-in type
    if (jsTypes.find(val => val === name)) {
      return value.name
    }

    // Function
    return type
  }

  if (type === 'Number') {
    if (isNaN(value)) type = 'NaN'
  }

  if (type === 'Error') {
    return value.name
  }

  if (type === 'Object') {
    let constructor = Object.getPrototypeOf(value).constructor
    if (constructor && !jsTypes.find(val => val === constructor.name)) {
      return constructor.name
    }
  }

  return type
}

export default jsTypeIs
