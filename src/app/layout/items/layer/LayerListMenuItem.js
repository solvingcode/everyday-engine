import ListMenuItem from '../list/ListMenuItem.js'
import Layout from '../../Layout.js'
import LayerElementMenuItem from './LayerElementMenuItem.js'
import World from '../../../world/World.js'
import GUIPendingComponent from '../../../component/internal/gui/GUIPendingComponent.js'
import Scene from '../../../scene/Scene.js'

export default class LayerListMenuItem extends ListMenuItem {

    /**
     * @param {MenuItem} parent
     * @param {Object} props
     * @param {Unit|Scene} parentObject
     */
    constructor(parent, props = {}, parentObject = null) {
        super({
            zone: Layout.zone.RIGHT,
            ...props
        })
        this.data = parentObject
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return LayerElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const world = World.get()
        if (!this.data) {
            return world.getSceneManager().getIncluded()
        } else {
            if (this.data instanceof Scene) {
                return world.getUnitManager().findUnitsInScene(this.data)
                    .filter(unit => !unit.getComponent(GUIPendingComponent) && !unit.getUnitParentId())
            } else {
                return world.getUnitManager().findChildUnits(this.data)
                    .filter(unit => !unit.getComponent(GUIPendingComponent))
            }
        }
    }

    /**
     * @override
     * @param {Scene|Unit} bindObject
     */
    getActions(bindObject){
        return []
    }

}