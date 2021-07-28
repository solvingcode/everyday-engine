import Action from '../Action.js'
import World from '../../../world/World.js'
import LightGlobalUnitInstant from '../../../unit/instant/type/internal/light/LightGlobalUnitInstant.js'

export default class AddLightGlobalAction extends Action {

    static STATE = 'ACTION_ADD_LIGHT_GLOBAL'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.getUnitManager().createUnitInstant(LightGlobalUnitInstant)
        return true
    }

}