import SceneElementMenuItem from './SceneElementMenuItem.js'
import ListMenuItem from '../list/ListMenuItem.js'
import World from '../../../world/World.js'
import OptionActionsButtonMenuItem from '../option/OptionActionsButtonMenuItem.js'
import SceneActionsMenuItem from './SceneActionsMenuItem.js'

export default class SceneListMenuItem extends ListMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Object} props
     */
    constructor(parent, props = {}) {
        super({
            name: '',
            zone: parent.zone,
            ...props
        })
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return SceneElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getSceneManager().getScenes()
    }

    /**
     * @override
     * @param {Scene} bindObject
     */
    getActions(bindObject){
        return [
            new OptionActionsButtonMenuItem(SceneActionsMenuItem, bindObject)
        ]
    }

}