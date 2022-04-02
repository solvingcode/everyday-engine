import ANativeFunction from '../ANativeFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class SetParentUnitFunction extends ANativeFunction{

    constructor() {
        super('SetParentUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('parent', TYPES.UNIT, 0)
    }
}