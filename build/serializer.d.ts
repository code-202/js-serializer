import { Encoder } from './encoder';
import { Normalizer } from './normalizer';
export declare class Serializer {
    private normalizer;
    private encoder;
    constructor(normalizer: Normalizer, encoder: Encoder);
    serialize(obj: object, format: string): string;
}
