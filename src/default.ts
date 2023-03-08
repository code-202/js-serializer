import { JsonDecoder } from "./decoder"
import { Denormalizer } from "./denormalizer"
import { Deserializer } from "./deserializer"
import { JsonEncoder } from "./encoder"
import { Normalizer } from "./normalizer"
import { Serializer } from "./serializer"

export const buildDefaultSerializer = () => {
    return new Serializer(new Normalizer(), new JsonEncoder())
}

export const buildDefaultDeserializer = () => {
    return new Deserializer(new Denormalizer(), new JsonDecoder())
}
