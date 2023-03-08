"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Denormalizer = void 0;
class Denormalizer {
    denormalize(obj, data) {
        return obj.denormalize(data);
    }
    isDenormalizable(obj) {
        return 'denormalize' in obj && typeof obj.denormalize === 'function';
    }
}
exports.Denormalizer = Denormalizer;
