import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class ConcatFunction extends AFunction{

    constructor() {
        super('Concat')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('text1', TYPES.STRING, 0)
        this.addInput('text2', TYPES.STRING, 0)
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute() {
        const text1 = this.getInputValue('text1')
        const text2 = this.getInputValue('text2')
        this.setOutputValue(`${text1}${text2}`)
    }
}