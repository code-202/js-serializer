import { Denormalizable, Normalizable } from "../src";

export class Foo implements Normalizable<FooNormalized>, Denormalizable<FooNormalized> {

    public bar: string = ''

    normalize(): FooNormalized {
        return {
            bar: this.bar
        }
    }

    denormalize(data: FooNormalized) {
        this.bar = data.bar
    }
}

interface FooNormalized {
    bar: string
}

export class BadFoo {
    public bar: string = ''
}
