export interface Denormalizable<T extends object> {
    denormalize(data: T): any;
}
export declare class Denormalizer {
    denormalize(obj: Denormalizable<object>, data: object): any;
    isDenormalizable(obj: any): obj is Denormalizable<object>;
}
