import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'
import ClientError from '../../../../exception/type/ClientError.js'

export default class MoveXAxisFunction extends AFunction{

    constructor() {
        super('MoveXAxis')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.NUMBER, 0)
        this.addInput('speed', TYPES.NUMBER, 0)
    }

    /**
     * @override
     */
    execute(functionRegistry) {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        const target = this.getInputValue('target')
        const speed = parseFloat(this.getInputValue('speed'))
        const unit = world.findUnitById(parseInt(target))
        if(!unit){
            throw new ClientError(`SetWorldPosition: ${target} not found`)
        }
        physicsManager.moveXAxis(unit, speed)
    }
}