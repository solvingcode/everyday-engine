import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'
import UnitHelper from '../../../../utils/UnitHelper.js'
import Window from '../../../../core/Window.js'

export default class IsUnitPressedFunction extends ANativeFunction {

    constructor() {
        super('IsUnitPressed')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const {mouse} = Window.get()
        const target = this.getInputValue('target')
        const isPressedUnit = UnitHelper.isInsideWindowPosition(world, target, mouse.position)
        this.setOutputValue(isPressedUnit)
    }
}