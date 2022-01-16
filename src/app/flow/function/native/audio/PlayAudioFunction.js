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

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const assetAudio = this.getInputValue('target')
        const volume = this.getInputValue('volume')
        const audio = assetAudio.getData()
        audio.pause()
        audio.volume = Math.max(0, Math.min(volume, 1))
        audio.currentTime = 0
        audio.play()
    }
}