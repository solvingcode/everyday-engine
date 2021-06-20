import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'

export default class AnimationMeshExecutor extends ComponentExecutor {

    constructor() {
        super([AnimationComponent, MeshComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const {deltaTime} = executionContext
        const animationComponent = unit.getComponent(AnimationComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        const animation = world.getAnimationManager().findById(animationComponent.getAnimation())
        if(animation && animation.isPlaying()){
            const frame = animation.play(deltaTime)
            if(frame){
                meshComponent.setAssetId(frame.getAssetId())
                meshComponent.setGenerated(false)
            }
        }
    }

}