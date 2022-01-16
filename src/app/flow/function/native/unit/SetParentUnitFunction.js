import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class SetParentUnitFunction extends AFunction{

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

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const target = this.getInputValue('target')
        const parent = this.getInputValue('parent')
        target.setUnitParentId(parent.getId())
    }
}