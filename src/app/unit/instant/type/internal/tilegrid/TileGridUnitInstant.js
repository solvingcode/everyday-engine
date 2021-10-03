import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import UnitBehaviorInstant from '../../../UnitBehaviorInstant.js'
import TileGridComponent from '../../../../../component/internal/TileGridComponent.js'

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
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}