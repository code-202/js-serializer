import { Encoder } from './encoder'
import { Normalizer } from './normalizer'

export class Serializer {
    private normalizer: Normalizer
    private encoder: Encoder

    constructor (normalizer: Normalizer, encoder: Encoder) {
        this.normalizer = normalizer
        this.encoder = encoder
    }

    public serialize (obj: object, format: string): string {
        if (!this.normalizer.isNormalizable(obj)) {
            throw new Error('object is not normalizable')
        }
        return this.encoder.encode(this.normalizer.normalize(obj), format)
    }
}
