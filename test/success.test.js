let typeis = require('../dist/index.min.js')

describe('primitives', () => {
  it('is String', () => {
    expect(typeis('hello')).toBe('String')
    expect(typeis(new String('hello'))).toBe('String')
    expect(typeis(String)).toBe('String')
  })
  it('is Number', () => {
    expect(typeis(1)).toBe('Number')
    expect(typeis(new Number(1))).toBe('Number')
    expect(typeis(Number)).toBe('Number')
  })
  it('is Boolean', () => {
    expect(typeis(true)).toBe('Boolean')
    expect(typeis(new Boolean())).toBe('Boolean')
    expect(typeis(Boolean)).toBe('Boolean')
  })
  it('is Undefined', () => {
    expect(typeis(undefined)).toBe('Undefined')
  })
  it('is Symbol', () => {
    expect(typeis(Symbol())).toBe('Symbol')
    expect(typeis(Symbol)).toBe('Symbol')
  })
})

describe('build-ins', () => {
  it('is NaN', () => {
    expect(typeis(NaN)).toBe('NaN')
  })
  it('is Null', () => {
    expect(typeis(null)).toBe('Null')
  })
  it('is Function', () => {
    expect(typeis(Function)).toBe('Function')
    expect(typeis(function(){})).toBe('Function')
    expect(typeis(function hoge(){})).toBe('Function')
    expect(typeis(()=>{})).toBe('Function')
  })
  it('is Object', () => {
    expect(typeis(Object)).toBe('Object')
    expect(typeis(Object())).toBe('Object')
    expect(typeis({})).toBe('Object')
  })
  it('is Errors', () => {
    expect(typeis(Error)).toBe('Error')
    expect(typeis(Error())).toBe('Error')
    expect(typeis(new Error())).toBe('Error')

    expect(typeis(EvalError)).toBe('EvalError')
    expect(typeis(EvalError())).toBe('EvalError')
    expect(typeis(new EvalError())).toBe('EvalError')

    expect(typeis(RangeError)).toBe('RangeError')
    expect(typeis(RangeError())).toBe('RangeError')
    expect(typeis(new RangeError())).toBe('RangeError')

    expect(typeis(SyntaxError)).toBe('SyntaxError')
    expect(typeis(SyntaxError())).toBe('SyntaxError')
    expect(typeis(new SyntaxError())).toBe('SyntaxError')

    expect(typeis(TypeError)).toBe('TypeError')
    expect(typeis(TypeError())).toBe('TypeError')
    expect(typeis(new TypeError())).toBe('TypeError')

    expect(typeis(URIError)).toBe('URIError')
    expect(typeis(URIError())).toBe('URIError')
    expect(typeis(new URIError())).toBe('URIError')
  })
  it('is Math', () => {
    expect(typeis(Math)).toBe('Math')
  })
  it('is Date', () => {
    expect(typeis(Date)).toBe('Date')
    expect(typeis(new Date())).toBe('Date')
    // Date() is String
  })
  it('is Arrays', () => {
    expect(typeis(Array)).toBe('Array')
    expect(typeis(new Array())).toBe('Array')
    expect(typeis([])).toBe('Array')
  
    expect(typeis(Int8Array)).toBe('Int8Array')
    expect(typeis(new Int8Array())).toBe('Int8Array')
  
    expect(typeis(Uint8Array)).toBe('Uint8Array')
    expect(typeis(new Uint8Array())).toBe('Uint8Array')
  
    expect(typeis(Uint8ClampedArray)).toBe('Uint8ClampedArray')
    expect(typeis(new Uint8ClampedArray())).toBe('Uint8ClampedArray')
  
    expect(typeis(Int16Array)).toBe('Int16Array')
    expect(typeis(new Int16Array())).toBe('Int16Array')
  
    expect(typeis(Uint16Array)).toBe('Uint16Array')
    expect(typeis(new Uint16Array())).toBe('Uint16Array')
  
    expect(typeis(Int32Array)).toBe('Int32Array')
    expect(typeis(new Int32Array())).toBe('Int32Array')
  
    expect(typeis(Uint32Array)).toBe('Uint32Array')
    expect(typeis(new Uint32Array())).toBe('Uint32Array')
  
    expect(typeis(Float32Array)).toBe('Float32Array')
    expect(typeis(new Float32Array())).toBe('Float32Array')
  
    expect(typeis(Float64Array)).toBe('Float64Array')
    expect(typeis(new Float64Array())).toBe('Float64Array')
  })
  it('is Map', () => {
    expect(typeis(Map)).toBe('Map')
    expect(typeis(new Map())).toBe('Map')
  })
  it('is WeakMap', () => {
    expect(typeis(WeakMap)).toBe('WeakMap')
    expect(typeis(new WeakMap())).toBe('WeakMap')
  })
  it('is Set', () => {
    expect(typeis(Set)).toBe('Set')
    expect(typeis(new Set())).toBe('Set')
  })
  it('is WeakSet', () => {
    expect(typeis(WeakSet)).toBe('WeakSet')
    expect(typeis(new WeakSet())).toBe('WeakSet')
  })
  it('is ArrayBuffer', () => {
    expect(typeis(ArrayBuffer)).toBe('ArrayBuffer')
    expect(typeis(new ArrayBuffer())).toBe('ArrayBuffer')
  })
  it('is DataView', () => {
    const arrayBuffer = new ArrayBuffer()
    expect(typeis(DataView)).toBe('DataView')
    expect(typeis(new DataView(arrayBuffer))).toBe('DataView')
  })
  it('is Promise', () => {
    const promiseFunction = (resolve, reject) => {}
    expect(typeis(Promise)).toBe('Promise')
    expect(typeis(new Promise(promiseFunction))).toBe('Promise')
  })
})
describe('user defined class', () => {
  class Sample {}
  it('is user defined Class', () => {
    expect(typeis(Sample)).toBe('Sample')
  })
  it('is user defined Class', () => {
    expect(typeis(new Sample())).toBe('Sample')
  })
})
