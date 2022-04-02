import TransformHelper from '../../../utils/TransformHelper.js'
import ObjectHelper from '../../../utils/ObjectHelper.js'
import RigidBodyComponent from '../../../component/internal/RigidBodyComponent.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import World from '../../../world/World.js'

export default function (target, scale) {
    const transformComponent = target.getComponent(TransformComponent)
    const actualScale = transformComponent.getScale()
    TransformHelper.scaleTo(World.get(), target, scale)
    if (!ObjectHelper.isEqual(actualScale, scale)) {
        target.getComponent(MeshComponent).setGenerated(false)
        const rigidBodyComponent = target.getComponent(RigidBodyComponent)
        if (rigidBodyComponent) {
            rigidBodyComponent.setCreated(false)
        }
    }
}