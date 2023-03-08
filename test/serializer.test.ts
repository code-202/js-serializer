import { expect, test } from '@jest/globals';
import { buildDefaultSerializer } from '../src';
import * as Models from './models';

let serializer = buildDefaultSerializer()

test('serialize', () => {
    expect.assertions(3);

    const foo = new Models.Foo()
    foo.bar = 'hello'
    const badFoo = new Models.BadFoo()
    badFoo.bar = 'bye'


    expect(serializer.serialize(foo, 'json')).toBe('{"bar":"hello"}')
    expect(() => serializer.serialize(foo, 'other')).toThrow('bad format : other')
    expect(() => serializer.serialize(badFoo, 'json')).toThrow('object is not normalizable')
})
