"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDefaultDeserializer = exports.buildDefaultSerializer = void 0;
const decoder_1 = require("./decoder");
const denormalizer_1 = require("./denormalizer");
const deserializer_1 = require("./deserializer");
const encoder_1 = require("./encoder");
const normalizer_1 = require("./normalizer");
const serializer_1 = require("./serializer");
const buildDefaultSerializer = () => {
    return new serializer_1.Serializer(new normalizer_1.Normalizer(), new encoder_1.JsonEncoder());
};
exports.buildDefaultSerializer = buildDefaultSerializer;
const buildDefaultDeserializer = () => {
    return new deserializer_1.Deserializer(new denormalizer_1.Denormalizer(), new decoder_1.JsonDecoder());
};
exports.buildDefaultDeserializer = buildDefaultDeserializer;
