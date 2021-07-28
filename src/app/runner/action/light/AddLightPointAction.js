import Action from '../Action.js'
import World from '../../../world/World.js'
import Vector from '../../../utils/Vector.js'
import LightPointUnitInstant from '../../../unit/instant/type/internal/light/LightPointUnitInstant.js'
import Size from '../../../pobject/Size.js'
import {PrimitiveShape} from '../../../unit/Unit.js'

export default class AddLightPointAction extends Action {

    static STATE = 'ACTION_ADD_LIGHT_POINT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.getUnitManager().createUnitInstant(LightPointUnitInstant, new Vector(), new Size(200), PrimitiveShape.LIGHT_POINT)
        return true
    }

}