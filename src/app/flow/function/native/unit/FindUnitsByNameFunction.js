import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'

export default class FindUnitsByNameFunction extends AFunction{

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

    /**
     * @override
     */
    execute() {
        const name = this.getInputValue('name')
        this.setOutputValue(World.get().findUnitsByName(name))
    }
}