import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class IsKeyDownFunction extends ANativeFunction{

    constructor() {
        super('IsKeyDown')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('key', TYPES.NUMBER, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

}