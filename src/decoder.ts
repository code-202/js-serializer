export interface Decoder {
    decode (encoded: string, format: string): object

    supportsDecoding (format: string): boolean
}

export class ChainDecoder implements Decoder {
    private decoders: Decoder[] = []

    public add (decoder: Decoder): this {
        this.decoders.push(decoder)

        return this
    }

    public decode (encoded: string, format: string): object {
        for (const decoder of this.decoders) {
            if (decoder.supportsDecoding(format)) {
                return decoder.decode(encoded, format)
            }
        }

        throw new Error('bad format : ' + format)
    }

    public supportsDecoding (format: string): boolean {
        for (const decoder of this.decoders) {
            if (decoder.supportsDecoding(format)) {
                return true
            }
        }

        return false
    }
}

export class JsonDecoder implements Decoder {
    public decode (encoded: string, format: string): object {
        if (!this.supportsDecoding(format)) {
            throw new Error('bad format : ' + format)
        }

        return JSON.parse(encoded)
    }

    public supportsDecoding (format: string): boolean {
        return 'json' == format
    }
}
