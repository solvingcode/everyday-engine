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
        this.addInput('repeat', TYPES.BOOLEAN, false)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const audio = this.getInputValue('target')
        audio.getData().play()
    }
}