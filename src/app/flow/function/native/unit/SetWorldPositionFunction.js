import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import Vector from '../../../../utils/Vector.js'
import ClientError from '../../../../exception/type/ClientError.js'

export default class SetWorldPositionFunction extends AFunction{

    constructor() {
        super('SetWorldPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.NUMBER, 0)
        this.addInput('vector', TYPES.VECTOR, new Vector())
    }

    /**
     * @override
     */
    execute() {
        const target = this.getInputValue('target')
        const unit = World.get().findUnitById(parseInt(target))
        if(!unit){
            throw new ClientError(`SetWorldPosition: ${target} not found`)
        }
        unit.getComponent(TransformComponent).setPosition(this.getInputValue('vector'))
    }
}