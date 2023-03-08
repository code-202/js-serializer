import { expect, test } from '@jest/globals';
import { ChainEncoder, JsonEncoder } from '../src';
import * as Models from './models';

test('json encoder', () => {
    expect.assertions(4);

    let encoder = new JsonEncoder()

    const foo = {bar: 'hello'}

    expect(encoder.supportsEncoding('json')).toBe(true)
    expect(encoder.supportsEncoding('other')).toBe(false)
    expect(encoder.encode(foo, 'json')).toBe('{"bar":"hello"}')

    expect(() => encoder.encode(foo, 'other')).toThrow('bad format : other')
})

test('chain encoder', () => {
    expect.assertions(6);

    let encoder = new ChainEncoder()

    const foo = {bar: 'hello'}

    expect(encoder.supportsEncoding('json')).toBe(false)
    expect(encoder.supportsEncoding('other')).toBe(false)

    encoder.add(new JsonEncoder())
    expect(encoder.supportsEncoding('json')).toBe(true)
    expect(encoder.supportsEncoding('other')).toBe(false)

    expect(encoder.encode(foo, 'json')).toBe('{"bar":"hello"}')

    expect(() => encoder.encode(foo, 'other')).toThrow('bad format : other')
})
