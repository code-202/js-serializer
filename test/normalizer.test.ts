import { expect, test } from '@jest/globals'
import { Normalizer } from '../src'
import * as Models from './models'

let normalizer = new Normalizer()

test('normalizer', () => {
    expect.assertions(3);

    const foo = new Models.Foo()
    foo.bar = 'hello'
    const badFoo = new Models.BadFoo()
    badFoo.bar = 'bye'

    expect(normalizer.isNormalizable(foo)).toBe(true)
    expect(normalizer.isNormalizable(badFoo)).toBe(false)
    expect(normalizer.normalize(foo)).toStrictEqual({bar: 'hello'})
})
