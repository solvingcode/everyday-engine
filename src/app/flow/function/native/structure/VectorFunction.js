import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class VectorFunction extends AFunction{

    constructor() {
        super('Vector')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('x', TYPES.NUMBER, 0)
        this.addInput('y', TYPES.NUMBER, 0)
        this.addInput('z', TYPES.NUMBER, 0)
        this.addOutput(TYPES.VECTOR)
    }

    /**
     * @override
     */
    execute() {
        this.setOutputValue(
            new Vector({
                x: parseFloat(this.getInputValue('x')),
                y: parseFloat(this.getInputValue('y')),
                z: parseFloat(this.getInputValue('z'))
            })
        )
    }
}