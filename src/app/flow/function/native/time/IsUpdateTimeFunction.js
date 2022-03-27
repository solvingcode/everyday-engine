import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class IsUpdateTimeFunction extends AFunction{

    constructor() {
        super('IsUpdateTime')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('nextTimeVariable', TYPES.STRING)
        this.addInput('updateRate', TYPES.NUMBER, 0)
        this.addOutput(TYPES.BOOLEAN)
    }
}