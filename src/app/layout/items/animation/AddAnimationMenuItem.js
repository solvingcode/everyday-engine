import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import UnitSelector from '../../../selector/UnitSelector.js'

export default class AddAnimationMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Animation',
            stateCode: 'ACTION_ADD_ANIMATION',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        return super.isEnabled() && !!this.getAnimationController()
    }

    /**
     * @return {AScript}
     */
    getAnimationController(){
        const world = World.get()
        const unit = this.getUnit()
        if(unit){
            return world.getUnitManager().getUnitAnimationController(world, unit)
        }
    }

    /**
     * @return {Unit}
     */
    getUnit(){
        return UnitSelector.get().getFirstSelected(World.get())
    }
}