export interface Decoder {
    decode(encoded: string, format: string): object;
    supportsDecoding(format: string): boolean;
}
export declare class ChainDecoder implements Decoder {
    private decoders;
    add(decoder: Decoder): this;
    decode(encoded: string, format: string): object;
    supportsDecoding(format: string): boolean;
}
export declare class JsonDecoder implements Decoder {
    decode(encoded: string, format: string): object;
    supportsDecoding(format: string): boolean;
}
