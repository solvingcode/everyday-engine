import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class IsGroundedFunction extends AFunction{

    constructor() {
        super('IsGrounded')
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
        const physicsManager = world.getPhysicsManager()
        const target = this.getInputValue('target')
        const startVector = new Vector({x: 0, y: 0})
        const endVector = new Vector({x: 0, y: 2})
        const collisions = physicsManager.rayCast(target, startVector, endVector).filter(collision => collision.collided)
        this.setOutputValue(!!collisions.length)
    }
}