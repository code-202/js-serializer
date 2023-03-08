"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDecoder = exports.ChainDecoder = void 0;
class ChainDecoder {
    decoders = [];
    add(decoder) {
        this.decoders.push(decoder);
        return this;
    }
    decode(encoded, format) {
        for (const decoder of this.decoders) {
            if (decoder.supportsDecoding(format)) {
                return decoder.decode(encoded, format);
            }
        }
        throw new Error('bad format : ' + format);
    }
    supportsDecoding(format) {
        for (const decoder of this.decoders) {
            if (decoder.supportsDecoding(format)) {
                return true;
            }
        }
        return false;
    }
}
exports.ChainDecoder = ChainDecoder;
class JsonDecoder {
    decode(encoded, format) {
        if (!this.supportsDecoding(format)) {
            throw new Error('bad format : ' + format);
        }
        return JSON.parse(encoded);
    }
    supportsDecoding(format) {
        return 'json' == format;
    }
}
exports.JsonDecoder = JsonDecoder;
