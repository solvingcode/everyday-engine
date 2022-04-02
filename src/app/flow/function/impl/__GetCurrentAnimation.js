import AnimationComponent from '../../../component/internal/AnimationComponent.js'

export default function (unit) {
    return unit.getComponent(AnimationComponent).getAnimation()
}