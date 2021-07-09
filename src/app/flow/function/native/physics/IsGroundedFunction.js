import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class IsGroundedFunction extends AFunction{

    constructor() {
        super('IsGrounded')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('component', TYPES.COMPONENT, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const physicsManager = world.getPhysicsManager()
        const target = this.getInputValue('target')
        const colliderComponent = unit.getComponent(this.getInputValue('component'))
        this.setOutputValue(physicsManager.isGrounded(target, colliderComponent))
    }
}