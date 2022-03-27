import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class SetCenterWorldPositionFunction extends AFunction{

    constructor() {
        super('SetCenterWorldPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('vector', TYPES.VECTOR, new Vector())
    }
}