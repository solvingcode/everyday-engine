import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class MoveXAxisFunction extends AFunction{

    constructor() {
        super('MoveXAxis')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('speed', TYPES.NUMBER, 0)
        this.addInput('direction', TYPES.NUMBER, 0)
    }
}