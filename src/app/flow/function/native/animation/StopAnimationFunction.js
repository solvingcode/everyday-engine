import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class StopAnimationFunction extends AFunction{

    constructor() {
        super('EndAnimation')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT, 0)
    }
}