import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'

export default class UnLoadSceneAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_UNLOAD_SCENE'

    /**
     * @override
     */
    static run() {
        const {scene} = StateManager.get().getNextProgressData(this.STATE)
        scene.setIncluded(false)
        return true
    }

}