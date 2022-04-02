import ANativeFunction from '../ANativeFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class EnableUnitFunction extends ANativeFunction{

    constructor() {
        super('EnableUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
    }
}