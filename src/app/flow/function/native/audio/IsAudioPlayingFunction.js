import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class IsAudioPlayingFunction extends ANativeFunction {

    constructor() {
        super('IsAudioPlaying')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.AUDIO, 0)
        this.addOutput(TYPES.BOOLEAN)
    }
}