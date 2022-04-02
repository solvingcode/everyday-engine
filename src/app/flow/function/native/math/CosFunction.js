import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class CosFunction extends ANativeFunction{

    constructor() {
        super('Cos')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('number', TYPES.NUMBER, 0)
        this.addOutput(TYPES.NUMBER)
    }
}