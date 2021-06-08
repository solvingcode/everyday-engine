import Runner from '../Runner.js'
import World from '../../world/World.js'

export default class AnimationEditorRunner extends Runner {

    /**
     * @type {AnimationEditorRunner}
     */
    static instance = null

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute(mouse) {
        const world = World.get()
        const tabManager = world.getTabManager()
        const animation = world.getAnimationManager().getSelected(tabManager)
        if(animation && animation.isPlaying()){
            animation.setTime((animation.getTime() + 1) % animation.getSamples())
        }
    }
}
