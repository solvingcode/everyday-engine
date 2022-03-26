import AnimationComponent from '../../../component/internal/AnimationComponent.js'

export default function (unit, animation) {
    return animation && unit.getComponent(AnimationComponent).getAnimation() === animation.getId()
}