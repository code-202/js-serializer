"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deserializer = void 0;
class Deserializer {
    denormalizer;
    decoder;
    constructor(denormalizer, decoder) {
        this.denormalizer = denormalizer;
        this.decoder = decoder;
    }
    deserialize(obj, serialized, format) {
        if (!this.denormalizer.isDenormalizable(obj)) {
            throw new Error('object is not denormalizable');
        }
        this.denormalizer.denormalize(obj, this.decoder.decode(serialized, format));
    }
}
exports.Deserializer = Deserializer;
