import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class LoadSceneIndexFunction extends AFunction {

    constructor() {
        super('LoadSceneIndex')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('sceneIndex', TYPES.NUMBER)
        this.addInput('additiveMode', TYPES.BOOLEAN, false)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const sceneIndex = this.getInputValue('sceneIndex')
        const scene = world.getSceneManager().findByIndex(sceneIndex)
        scene.setIncluded(true)
    }
}