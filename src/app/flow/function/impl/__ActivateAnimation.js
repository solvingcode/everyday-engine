import AnimationComponent from '../../../component/internal/AnimationComponent.js'

export default function (unit, target) {
    if (target) {
        const animationComponent = unit.getComponent(AnimationComponent)
        animationComponent.setTime(0)
        animationComponent.setLoopTimes(0)
        animationComponent.setAnimation(target.getId())
    }
}