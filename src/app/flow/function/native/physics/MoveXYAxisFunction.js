import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'
import World from '../../../../world/World.js'

export default class MoveXYAxisFunction extends AFunction {

    constructor() {
        super('MoveXYAxis')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('moveVector', TYPES.VECTOR, new Vector())
    }

    /**
     * @override
     */
    execute(functionRegistry, unit) {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        const target = this.getInputValue('target')
        const moveVector = this.getInputValue('moveVector')
        physicsManager.moveXYAxis(target, moveVector)
    }
}