import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class LoadSceneIndexFunction extends ANativeFunction {

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