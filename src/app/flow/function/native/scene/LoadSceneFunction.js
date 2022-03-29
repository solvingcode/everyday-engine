import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class LoadSceneFunction extends ANativeFunction {

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
}