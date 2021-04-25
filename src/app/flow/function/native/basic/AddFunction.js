import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class AddFunction extends AFunction{

    constructor() {
        super('Add')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.NUMBER, 0)
        this.addInput('value2', TYPES.NUMBER, 0)
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute() {
        const value1 = this.getInputValue('value1')
        const value2 = this.getInputValue('value2')
        let result
        if(value1 instanceof Vector && value2 instanceof Vector){
            result = Vector.add(value1, value2)
        }else{
            result = parseFloat(value1) + parseFloat(value2)
        }
        this.setOutputValue(result)
    }
}