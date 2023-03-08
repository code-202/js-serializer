export interface Encoder {
    encode(data: object, format: string): string;
    supportsEncoding(format: string): boolean;
}
export declare class ChainEncoder implements Encoder {
    private encoders;
    add(encoder: Encoder): this;
    encode(data: object, format: string): string;
    supportsEncoding(format: string): boolean;
}
export declare class JsonEncoder implements Encoder {
    encode(data: object, format: string): string;
    supportsEncoding(format: string): boolean;
}
