import ListMenuItem from '../../list/ListMenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import GameInputElementMenuItem from './GameInputElementMenuItem.js'

export default class GameInputListMenuItem extends ListMenuItem {

    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            zone: Layout.zone.RIGHT
        })
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return GameInputElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getPreference().getGameInput().getInputs()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}