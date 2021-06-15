import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class NotEqualToFunction extends AFunction{

    constructor() {
        super('!=')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.NUMBER, 0)
        this.addInput('value2', TYPES.NUMBER, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute() {
        const value1 = this.getInputValue('value1')
        const value2 = this.getInputValue('value2')
        let result
        if(value1 instanceof Vector && value2 instanceof Vector){
            result = !value1.equals(value2)
        } else {
            result = parseFloat(this.getInputValue('value1')) !==  parseFloat(this.getInputValue('value2'))
        }
        this.setOutputValue(result)
    }
}