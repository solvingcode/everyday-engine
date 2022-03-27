import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetVelocityYFunction extends AFunction{

    constructor() {
        super('GetVelocityY')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.NUMBER)
    }
}