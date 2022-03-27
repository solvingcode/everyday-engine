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
}