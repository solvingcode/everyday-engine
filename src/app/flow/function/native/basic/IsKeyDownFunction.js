import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class IsKeyDownFunction extends AFunction{

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