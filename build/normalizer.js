"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Normalizer = void 0;
class Normalizer {
    normalize(obj) {
        return obj.normalize();
    }
    isNormalizable(obj) {
        return 'normalize' in obj && typeof obj.normalize === 'function';
    }
}
exports.Normalizer = Normalizer;
