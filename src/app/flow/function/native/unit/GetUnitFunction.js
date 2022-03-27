import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetUnitFunction extends AFunction{

    constructor() {
        super('GetUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('name', TYPES.STRING, 0)
        this.addOutput(TYPES.NUMBER)
    }
}