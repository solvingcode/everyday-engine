import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class IsFunctionDefinedFunction extends ANativeFunction {

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