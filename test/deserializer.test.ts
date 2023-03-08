import { expect, test } from '@jest/globals';
import { buildDefaultDeserializer } from '../src';
import * as Models from './models';

let deserializer = buildDefaultDeserializer()

test('serialize', () => {
    expect.assertions(4);

    const foo = new Models.Foo()
    foo.bar = 'hello'
    const badFoo = new Models.BadFoo()
    badFoo.bar = 'bye'

    const serialized = '{"bar":"bonjour"}'

    expect(foo.bar).toBe('hello')
    deserializer.deserialize(foo, serialized, 'json')
    expect(foo.bar).toBe('bonjour')

    expect(() => deserializer.deserialize(foo, serialized, 'other')).toThrow('bad format : other')
    expect(() => deserializer.deserialize(badFoo, serialized, 'json')).toThrow('object is not denormalizable')
})
