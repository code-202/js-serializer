import { expect, test } from '@jest/globals';
import { ChainDecoder, JsonDecoder } from '../src';
import * as Models from './models';

test('json decoder', () => {
    expect.assertions(4);

    let decoder = new JsonDecoder()

    const encoded = '{"bar":"hello"}'

    expect(decoder.supportsDecoding('json')).toBe(true)
    expect(decoder.supportsDecoding('other')).toBe(false)
    expect(decoder.decode(encoded, 'json')).toStrictEqual({bar: 'hello'})

    expect(() => decoder.decode(encoded, 'other')).toThrow('bad format : other')
})

test('chain decoder', () => {
    expect.assertions(6);

    let decoder = new ChainDecoder()

    const encoded = '{"bar":"hello"}'

    expect(decoder.supportsDecoding('json')).toBe(false)
    expect(decoder.supportsDecoding('other')).toBe(false)

    decoder.add(new JsonDecoder())
    expect(decoder.supportsDecoding('json')).toBe(true)
    expect(decoder.supportsDecoding('other')).toBe(false)

    expect(decoder.decode(encoded, 'json')).toStrictEqual({bar: 'hello'})

    expect(() => decoder.decode(encoded, 'other')).toThrow('bad format : other')
})
