import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class PlayAudioFunction extends ANativeFunction {

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