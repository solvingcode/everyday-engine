import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class IsAudioPlayingFunction extends AFunction {

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

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const assetAudio = this.getInputValue('target')
        this.setOutputValue(assetAudio.isPlaying())
    }
}