import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import ClientError from '../../../../exception/type/ClientError.js'

export default class GetWorldPositionFunction extends AFunction{

    constructor() {
        super('GetWorldPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.NUMBER, 0)
        this.addOutput(TYPES.VECTOR)
    }

    /**
     * @override
     */
    execute() {
        const target = this.getInputValue('target')
        const unit = World.get().findUnitById(parseInt(target))
        if(!unit){
            throw new ClientError(`${this.getName()}: ${target} not found`)
        }
        const position = unit.getComponent(TransformComponent).getPosition()
        this.setOutputValue(position)
    }
}