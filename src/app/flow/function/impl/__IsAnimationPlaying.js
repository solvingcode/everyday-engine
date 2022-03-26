import AnimationComponent from '../../../component/internal/AnimationComponent.js'

export default function (unit, animation) {
    return unit.getComponent(AnimationComponent).getAnimation() === animation.getId()
}