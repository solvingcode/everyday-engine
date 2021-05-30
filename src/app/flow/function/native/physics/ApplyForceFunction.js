import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'
import ClientError from '../../../../exception/type/ClientError.js'
import Vector from '../../../../utils/Vector.js'

export default class ApplyForceFunction extends AFunction{

    constructor() {
        super('ApplyForce')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.NUMBER, 0)
        this.addInput('position', TYPES.VECTOR, new Vector())
        this.addInput('force', TYPES.VECTOR, new Vector())
    }

    /**
     * @override
     */
    execute(functionRegistry) {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        const target = this.getInputValue('target')
        const unit = world.findUnitById(parseInt(target))
        if(!unit){
            throw new ClientError(`${this.getName()}: ${target} not found`)
        }
        const position = this.getInputValue('position')
        const force = this.getInputValue('force')
        physicsManager.applyForce(unit, position, force)
    }
}