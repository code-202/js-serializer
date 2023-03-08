export interface Normalizable<T extends object> {
    normalize(): T
}

export class Normalizer {
    public normalize(obj: Normalizable<object>): object {
        return obj.normalize()
    }

    public isNormalizable(obj: any): obj is Normalizable<object> {
        return 'normalize' in obj && typeof obj.normalize === 'function'
    }
}
