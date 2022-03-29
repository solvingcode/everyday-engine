import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetInputYAxisFunction extends ANativeFunction{

    constructor() {
        super('GetInputYAxis')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addOutput(TYPES.NUMBER, 0)
    }
}