import TransformComponent from '../../../component/internal/TransformComponent.js'

export default function (target) {
    return target.getComponent(TransformComponent).getPosition()
}