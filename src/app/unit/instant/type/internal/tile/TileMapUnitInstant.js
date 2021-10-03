import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TileMapComponent from '../../../../../component/internal/tile/TileMapComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'

export default class TileMapUnitInstant extends MeshUnitInstant {

    /**
     * @override
     */
    instantiate() {
        this.setName('Tile Map')
        this.createComponent(TileMapComponent)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
        this.getComponent(MeshComponent).setHidden(true)
        this.getComponent(TransformComponent).setHidden(true)
        this.getComponent(StyleComponent).setHidden(true)
    }

}