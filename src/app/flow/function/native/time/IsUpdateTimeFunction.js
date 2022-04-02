import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class IsUpdateTimeFunction extends ANativeFunction{

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