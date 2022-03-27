import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class GetUnitTagNameFunction extends AFunction{

    constructor() {
        super('GetUnitTagName')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.STRING)
    }
}