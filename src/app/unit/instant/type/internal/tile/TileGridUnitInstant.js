import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import UnitBehaviorInstant from '../../../UnitBehaviorInstant.js'
import TileGridComponent from '../../../../../component/internal/tile/TileGridComponent.js'

export default class TileGridUnitInstant extends UnitBehaviorInstant {

    /**
     * @override
     */
    instantiate() {
        this.setName('Tile Grid')
        this.createComponent(TileGridComponent)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setSelectable(false)
    }

    /**
     * @override
     */
    getRank(world) {
        return 100060
    }

}