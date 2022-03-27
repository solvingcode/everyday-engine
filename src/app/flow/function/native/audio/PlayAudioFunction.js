import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class PlayAudioFunction extends AFunction {

    constructor() {
        super('PlayAudio')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.AUDIO, 0)
        this.addInput('volume', TYPES.NUMBER, 1)
    }
}