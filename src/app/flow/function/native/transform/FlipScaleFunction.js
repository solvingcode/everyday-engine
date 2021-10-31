import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../component/internal/MeshComponent.js'
import ObjectHelper from '../../../../utils/ObjectHelper.js'
import RigidBodyComponent from '../../../../component/internal/RigidBodyComponent.js'
import Vector from '../../../../utils/Vector.js'
import TransformHelper from '../../../../utils/TransformHelper.js'

export default class FlipScaleFunction extends AFunction {

    constructor() {
        super('FlipScale')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('scaleFactor', TYPES.VECTOR, 0)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const target = this.getInputValue('target')
        const scaleFactor = this.getInputValue('scaleFactor')
        if (Math.abs(scaleFactor.getX()) > 0 && Math.abs(scaleFactor.getY()) > 0) {
            const transformComponent = target.getComponent(TransformComponent)
            const actualLocalScale = transformComponent.getLocalScale()
            const flipLocalScale = Vector.linearMultiply(Vector.abs(actualLocalScale), Vector.sign(scaleFactor))
            TransformHelper.scaleTo(world, unit, flipLocalScale)
            if (!ObjectHelper.isEqual(actualLocalScale, flipLocalScale)) {
                target.getComponent(MeshComponent).setGenerated(false)
                const rigidBodyComponent = unit.getComponent(RigidBodyComponent)
                if (rigidBodyComponent) {
                    rigidBodyComponent.setCreated(false)
                }
            }
        }
    }
}