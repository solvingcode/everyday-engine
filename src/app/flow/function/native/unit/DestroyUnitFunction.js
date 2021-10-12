import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class DestroyUnitFunction extends AFunction{

    constructor() {
        super('DestroyUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const target = this.getInputValue('target')
        world.getPhysicsManager().deleteUnit(target)
        world.getUnitManager().deleteUnit(target)
    }
}