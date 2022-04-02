import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetTimeFunction extends ANativeFunction{

    constructor() {
        super('GetTime')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addOutput(TYPES.NUMBER)
    }
}