import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'

export default class GetVelocityYFunction extends AFunction{

    constructor() {
        super('GetVelocityY')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit) {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        const target = this.getInputValue('target')
        this.setOutputValue(physicsManager.getVelocity(target).getY())
    }
}