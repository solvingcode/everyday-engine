import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class SinFunction extends ANativeFunction{

    constructor() {
        super('Sin')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('number', TYPES.NUMBER, 0)
        this.addOutput(TYPES.NUMBER)
    }
}