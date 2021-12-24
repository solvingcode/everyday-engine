import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../component/internal/MeshComponent.js'
import ObjectHelper from '../../../../utils/ObjectHelper.js'
import RigidBodyComponent from '../../../../component/internal/RigidBodyComponent.js'
import Vector from '../../../../utils/Vector.js'

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
            const actualAxis = transformComponent.getAxis()
            const flipAxis = Vector.linearMultiply(Vector.abs(actualAxis), Vector.sign(scaleFactor))
            transformComponent.setAxis(flipAxis)
            if (!ObjectHelper.isEqual(actualAxis, flipAxis)) {
                target.getComponent(MeshComponent).setGenerated(false)
                const rigidBodyComponent = unit.getComponent(RigidBodyComponent)
                if (rigidBodyComponent) {
                    rigidBodyComponent.setCreated(false)
                }
            }
        }
    }
}