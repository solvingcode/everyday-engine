import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class ToScreenPositionFunction extends AFunction{

    constructor() {
        super('ToScreenPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('position', TYPES.VECTOR, 0)
        this.addOutput(TYPES.VECTOR)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const position = this.getInputValue('position')
        this.setOutputValue(world.getCamera().toCanvasCoord(position))
    }
}