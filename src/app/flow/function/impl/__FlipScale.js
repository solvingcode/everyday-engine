import TransformComponent from '../../../component/internal/TransformComponent.js'
import Vector from '../../../utils/Vector.js'
import ObjectHelper from '../../../utils/ObjectHelper.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import RigidBodyComponent from '../../../component/internal/RigidBodyComponent.js'

export default function (target, scaleFactor) {
    if (Math.abs(scaleFactor.getX()) > 0 && Math.abs(scaleFactor.getY()) > 0) {
        const transformComponent = target.getComponent(TransformComponent)
        const actualAxis = transformComponent.getAxis()
        const flipAxis = Vector.linearMultiply(Vector.abs(actualAxis), Vector.sign(scaleFactor))
        transformComponent.setAxis(flipAxis)
        if (!ObjectHelper.isEqual(actualAxis, flipAxis)) {
            target.getComponent(MeshComponent).setGenerated(false)
            const rigidBodyComponent = target.getComponent(RigidBodyComponent)
            if (rigidBodyComponent) {
                rigidBodyComponent.setCreated(false)
            }
        }
    }
}