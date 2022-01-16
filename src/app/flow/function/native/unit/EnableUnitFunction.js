import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class EnableUnitFunction extends AFunction{

    constructor() {
        super('EnableUnit')
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
    execute(functionRegistry, unit, scriptComponent, world) {
        const target = this.getInputValue('target')
        world.getUnitManager().setVisibilityUnit(target, true)
    }
}