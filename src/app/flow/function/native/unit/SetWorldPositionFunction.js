import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import Vector from '../../../../utils/Vector.js'

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
        const unit = World.get().findUnitById(parseInt(this.getInputValue('target')))
        unit.getComponent(TransformComponent).setPosition(this.getInputValue('vector'))
    }
}