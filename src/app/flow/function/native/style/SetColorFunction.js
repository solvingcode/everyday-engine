import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class SetColorFunction extends ANativeFunction {

    constructor() {
        super('SetColor')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('color', TYPES.STRING)
    }
}