import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class AddVectorFunction extends AFunction{

    constructor() {
        super('Vector + Vector')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.VECTOR, 0)
        this.addInput('value2', TYPES.VECTOR, 0)
        this.addOutput(TYPES.VECTOR)
    }

    /**
     * @override
     */
    execute() {
        const value1 = this.getInputValue('value1')
        const value2 = this.getInputValue('value2')
        this.setOutputValue(Vector.add(value1, value2))
    }
}