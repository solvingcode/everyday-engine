import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class MoveXYAxisFunction extends ANativeFunction {

    constructor() {
        super('MoveXYAxis')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('moveVector', TYPES.VECTOR, new Vector())
    }
}