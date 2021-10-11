import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import Vector from '../../../../utils/Vector.js'
import World from '../../../../world/World.js'

export default class PhysicsTranslateFunction extends AFunction {

    constructor() {
        super('PhysicsTranslate')
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
        const transformComponent = target.getComponent(TransformComponent)
        const actualPosition = transformComponent.getPosition()
        const newPosition = Vector.add(actualPosition, moveVector)
        physicsManager.translate(unit, newPosition)
    }
}