import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class SetColorFunction extends AFunction {

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