import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'

export default class MoveXAxisFunction extends AFunction{

    constructor() {
        super('MoveXAxis')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('speed', TYPES.NUMBER, 0)
        this.addInput('direction', TYPES.NUMBER, 0)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit) {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        const target = this.getInputValue('target')
        const speed = parseFloat(this.getInputValue('speed'))
        const direction = parseFloat(this.getInputValue('direction'))
        physicsManager.moveXAxis(target, speed * direction)
    }
}