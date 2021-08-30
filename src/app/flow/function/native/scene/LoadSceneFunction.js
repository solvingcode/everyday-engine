import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class LoadSceneFunction extends AFunction {

    constructor() {
        super('LoadScene')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.SCENE)
        this.addInput('additiveMode', TYPES.BOOLEAN, false)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const scene = this.getInputValue('target')
        scene.setIncluded(true)
    }
}