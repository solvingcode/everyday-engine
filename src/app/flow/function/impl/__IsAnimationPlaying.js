import AnimationComponent from '../../../component/internal/AnimationComponent.js'

export default function (unit, target) {
    return target && unit.getComponent(AnimationComponent).getAnimation() === target.getId()
}