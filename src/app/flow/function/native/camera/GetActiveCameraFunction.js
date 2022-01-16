import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetActiveCameraFunction extends AFunction {

    constructor() {
        super('GetActiveCamera')
    }

    /**
     * @override
     */
    initAttributes(params) {
        this.addOutput(TYPES.UNIT)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const camera = world.getCamera()
        this.setOutputValue(camera.getUnit(world.getUnitManager()))
    }
}