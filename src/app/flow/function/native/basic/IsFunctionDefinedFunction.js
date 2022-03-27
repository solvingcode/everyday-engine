import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class IsFunctionDefinedFunction extends AFunction {

    constructor() {
        super('IsFunctionDefined')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('functionName', TYPES.STRING, 0)
        this.addOutput(TYPES.BOOLEAN)
    }
}