export interface Normalizable<T extends object> {
    normalize(): T;
}
export declare class Normalizer {
    normalize(obj: Normalizable<object>): object;
    isNormalizable(obj: any): obj is Normalizable<object>;
}
