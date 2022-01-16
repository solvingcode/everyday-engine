import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'

export default class LoadSceneAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_LOAD_SCENE'

    /**
     * @override
     */
    static run() {
        const {scene} = StateManager.get().getNextProgressData(this.STATE)
        scene.setIncluded(true)
        return true
    }

}