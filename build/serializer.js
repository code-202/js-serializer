"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serializer = void 0;
class Serializer {
    normalizer;
    encoder;
    constructor(normalizer, encoder) {
        this.normalizer = normalizer;
        this.encoder = encoder;
    }
    serialize(obj, format) {
        if (!this.normalizer.isNormalizable(obj)) {
            throw new Error('object is not normalizable');
        }
        return this.encoder.encode(this.normalizer.normalize(obj), format);
    }
}
exports.Serializer = Serializer;
