import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class CosFunction extends AFunction{

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