import { Decoder } from './decoder'
import { Denormalizer } from './denormalizer'

export class Deserializer {
    private denormalizer: Denormalizer
    private decoder: Decoder

    constructor (denormalizer: Denormalizer, decoder: Decoder) {
        this.denormalizer = denormalizer
        this.decoder = decoder
    }

    public deserialize (obj: any, serialized: string, format: string) {
        if (!this.denormalizer.isDenormalizable(obj)) {
            throw new Error('object is not denormalizable')
        }

        this.denormalizer.denormalize(obj, this.decoder.decode(serialized, format))
    }
}
