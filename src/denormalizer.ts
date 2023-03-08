export interface Denormalizable<T extends object> {
    denormalize(data: T): any
}

export class Denormalizer {
    public denormalize(obj: Denormalizable<object>, data: object) {
        return obj.denormalize(data)
    }

    public isDenormalizable(obj: any): obj is Denormalizable<object> {
        return 'denormalize' in obj && typeof obj.denormalize === 'function'
    }
}
