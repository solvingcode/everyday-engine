import ANativeFunction from '../ANativeFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class DestroyUnitFunction extends ANativeFunction{

    constructor() {
        super('DestroyUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
    }
}