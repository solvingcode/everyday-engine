import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'
import ClientError from '../../../../exception/type/ClientError.js'

export default class GetVelocityYFunction extends AFunction{

    constructor() {
        super('GetVelocityY')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.NUMBER, 0)
        this.addOutput(TYPES.NUMBER)
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
        this.setOutputValue(physicsManager.getVelocity(unit).getY())
    }
}