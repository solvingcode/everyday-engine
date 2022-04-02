import AnimationComponent from '../../../component/internal/AnimationComponent.js'

export default function (unit) {
    const animationComponent = unit.getComponent(AnimationComponent)
    return !!animationComponent && !!animationComponent.getAnimation()
}