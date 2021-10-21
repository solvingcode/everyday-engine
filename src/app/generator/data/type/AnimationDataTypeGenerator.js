import World from '../../../world/World.js'

export default class AnimationDataTypeGenerator {

    /**
     * @param {Animation} animation
     */
    static generate(animation){
        World.get().getAnimationManager().add(animation)
    }

}