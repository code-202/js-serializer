import { expect, test } from '@jest/globals'
import { Denormalizer } from '../src'
import * as Models from './models'

let denormalizer = new Denormalizer()

test('denormalizer', () => {
    expect.assertions(4);

    const foo = new Models.Foo()
    const badFoo = new Models.BadFoo()

    expect(denormalizer.isDenormalizable(foo)).toBe(true)
    expect(denormalizer.isDenormalizable(badFoo)).toBe(false)

    expect(foo.bar).toBe('')
    denormalizer.denormalize(foo, {bar: 'hello'})
    expect(foo.bar).toBe('hello')
})
