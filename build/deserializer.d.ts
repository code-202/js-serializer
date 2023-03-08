import { Decoder } from './decoder';
import { Denormalizer } from './denormalizer';
export declare class Deserializer {
    private denormalizer;
    private decoder;
    constructor(denormalizer: Denormalizer, decoder: Decoder);
    deserialize(obj: any, serialized: string, format: string): void;
}
