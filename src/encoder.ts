export interface Encoder {
    encode (data: object, format: string): string

    supportsEncoding (format: string): boolean
}

export class ChainEncoder implements Encoder {
    private encoders: Encoder[] = []

    public add (encoder: Encoder): this {
        this.encoders.push(encoder)

        return this
    }

    public encode (data: object, format: string): string {
        for (const encoder of this.encoders) {
            if (encoder.supportsEncoding(format)) {
                return encoder.encode(data, format)
            }
        }

        throw new Error('bad format : ' + format)
    }

    public supportsEncoding (format: string): boolean {
        for (const encoder of this.encoders) {
            if (encoder.supportsEncoding(format)) {
                return true
            }
        }

        return false
    }
}

export class JsonEncoder implements Encoder {
    public encode (data: object, format: string): string {
        if (!this.supportsEncoding(format)) {
            throw new Error('bad format : ' + format)
        }

        return JSON.stringify(data)
    }

    public supportsEncoding (format: string): boolean {
        return 'json' == format
    }
}
