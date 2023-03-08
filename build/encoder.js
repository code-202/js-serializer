"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonEncoder = exports.ChainEncoder = void 0;
class ChainEncoder {
    encoders = [];
    add(encoder) {
        this.encoders.push(encoder);
        return this;
    }
    encode(data, format) {
        for (const encoder of this.encoders) {
            if (encoder.supportsEncoding(format)) {
                return encoder.encode(data, format);
            }
        }
        throw new Error('bad format : ' + format);
    }
    supportsEncoding(format) {
        for (const encoder of this.encoders) {
            if (encoder.supportsEncoding(format)) {
                return true;
            }
        }
        return false;
    }
}
exports.ChainEncoder = ChainEncoder;
class JsonEncoder {
    encode(data, format) {
        if (!this.supportsEncoding(format)) {
            throw new Error('bad format : ' + format);
        }
        return JSON.stringify(data);
    }
    supportsEncoding(format) {
        return 'json' == format;
    }
}
exports.JsonEncoder = JsonEncoder;
