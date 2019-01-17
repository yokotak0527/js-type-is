let typeIs = require('../dist/index.js').default

describe('primitives', () => {
  it('is String', () => {
    expect(typeIs('hello')).toBe('String')
    expect(typeIs(new String('hello'))).toBe('String')
    expect(typeIs(String)).toBe('String')
  })
  it('is Number', () => {
    expect(typeIs(1)).toBe('Number')
    expect(typeIs(new Number(1))).toBe('Number')
    expect(typeIs(Number)).toBe('Number')
  })
  it('is Boolean', () => {
    expect(typeIs(true)).toBe('Boolean')
    expect(typeIs(new Boolean())).toBe('Boolean')
    expect(typeIs(Boolean)).toBe('Boolean')
  })
  it('is Undefined', () => {
    expect(typeIs(undefined)).toBe('Undefined')
  })
  it('is Symbol', () => {
    expect(typeIs(Symbol())).toBe('Symbol')
    expect(typeIs(Symbol)).toBe('Symbol')
  })
})

describe('build-ins', () => {
  it('is NaN', () => {
    expect(typeIs(NaN)).toBe('NaN')
  })
  it('is Null', () => {
    expect(typeIs(null)).toBe('Null')
  })
  it('is Function', () => {
    expect(typeIs(Function)).toBe('Function')
    expect(typeIs(function(){})).toBe('Function')
    expect(typeIs(function hoge(){})).toBe('Function')
    expect(typeIs(()=>{})).toBe('Function')
  })
  it('is Object', () => {
    expect(typeIs(Object)).toBe('Object')
    expect(typeIs(Object())).toBe('Object')
    expect(typeIs({})).toBe('Object')
  })
  it('is Errors', () => {
    expect(typeIs(Error)).toBe('Error')
    expect(typeIs(Error())).toBe('Error')
    expect(typeIs(new Error())).toBe('Error')

    expect(typeIs(EvalError)).toBe('EvalError')
    expect(typeIs(EvalError())).toBe('EvalError')
    expect(typeIs(new EvalError())).toBe('EvalError')

    expect(typeIs(RangeError)).toBe('RangeError')
    expect(typeIs(RangeError())).toBe('RangeError')
    expect(typeIs(new RangeError())).toBe('RangeError')

    expect(typeIs(SyntaxError)).toBe('SyntaxError')
    expect(typeIs(SyntaxError())).toBe('SyntaxError')
    expect(typeIs(new SyntaxError())).toBe('SyntaxError')

    expect(typeIs(TypeError)).toBe('TypeError')
    expect(typeIs(TypeError())).toBe('TypeError')
    expect(typeIs(new TypeError())).toBe('TypeError')

    expect(typeIs(URIError)).toBe('URIError')
    expect(typeIs(URIError())).toBe('URIError')
    expect(typeIs(new URIError())).toBe('URIError')
  })
  it('is Math', () => {
    expect(typeIs(Math)).toBe('Math')
  })
  it('is Date', () => {
    expect(typeIs(Date)).toBe('Date')
    expect(typeIs(new Date())).toBe('Date')
    // Date() is String
  })
  it('is Arrays', () => {
    expect(typeIs(Array)).toBe('Array')
    expect(typeIs(new Array())).toBe('Array')
    expect(typeIs([])).toBe('Array')
  
    expect(typeIs(Int8Array)).toBe('Int8Array')
    expect(typeIs(new Int8Array())).toBe('Int8Array')
  
    expect(typeIs(Uint8Array)).toBe('Uint8Array')
    expect(typeIs(new Uint8Array())).toBe('Uint8Array')
  
    expect(typeIs(Uint8ClampedArray)).toBe('Uint8ClampedArray')
    expect(typeIs(new Uint8ClampedArray())).toBe('Uint8ClampedArray')
  
    expect(typeIs(Int16Array)).toBe('Int16Array')
    expect(typeIs(new Int16Array())).toBe('Int16Array')
  
    expect(typeIs(Uint16Array)).toBe('Uint16Array')
    expect(typeIs(new Uint16Array())).toBe('Uint16Array')
  
    expect(typeIs(Int32Array)).toBe('Int32Array')
    expect(typeIs(new Int32Array())).toBe('Int32Array')
  
    expect(typeIs(Uint32Array)).toBe('Uint32Array')
    expect(typeIs(new Uint32Array())).toBe('Uint32Array')
  
    expect(typeIs(Float32Array)).toBe('Float32Array')
    expect(typeIs(new Float32Array())).toBe('Float32Array')
  
    expect(typeIs(Float64Array)).toBe('Float64Array')
    expect(typeIs(new Float64Array())).toBe('Float64Array')
  })
  it('is Map', () => {
    expect(typeIs(Map)).toBe('Map')
    expect(typeIs(new Map())).toBe('Map')
  })
  it('is WeakMap', () => {
    expect(typeIs(WeakMap)).toBe('WeakMap')
    expect(typeIs(new WeakMap())).toBe('WeakMap')
  })
  it('is Set', () => {
    expect(typeIs(Set)).toBe('Set')
    expect(typeIs(new Set())).toBe('Set')
  })
  it('is WeakSet', () => {
    expect(typeIs(WeakSet)).toBe('WeakSet')
    expect(typeIs(new WeakSet())).toBe('WeakSet')
  })
  it('is ArrayBuffer', () => {
    expect(typeIs(ArrayBuffer)).toBe('ArrayBuffer')
    expect(typeIs(new ArrayBuffer())).toBe('ArrayBuffer')
  })
  it('is DataView', () => {
    const arrayBuffer = new ArrayBuffer()
    expect(typeIs(DataView)).toBe('DataView')
    expect(typeIs(new DataView(arrayBuffer))).toBe('DataView')
  })
  it('is Promise', () => {
    const promiseFunction = (resolve, reject) => {}
    expect(typeIs(Promise)).toBe('Promise')
    expect(typeIs(new Promise(promiseFunction))).toBe('Promise')
  })
})
describe('user defined class', () => {
  class Sample {}
  it('is user defined Class', () => {
    expect(typeIs(Sample)).toBe('Sample')
  })
  it('is user defined Class', () => {
    expect(typeIs(new Sample())).toBe('Sample')
  })
})
