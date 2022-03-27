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
}