import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class FindUnitsByNameFunction extends ANativeFunction{

    constructor() {
        super('FindUnitsByName')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('name', TYPES.STRING, 0)
        this.addOutput(TYPES.ARRAY | TYPES.UNIT)
    }
}