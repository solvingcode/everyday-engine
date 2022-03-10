import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TileMapComponent from '../../../../../component/internal/tile/TileMapComponent.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'

export default class TileMapUnitInstant extends MeshUnitInstant {

    /**
     * @override
     */
    instantiate() {
        this.setName('Tile Map')
        this.createComponent(TileMapComponent)
        const meshComponent = this.getComponent(MeshComponent)
        meshComponent.setShape(PrimitiveShape.RECT)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(TransformComponent).setHidden(true)
        this.getComponent(StyleComponent).setHidden(true)
        this.getComponent(GUIPropertyComponent).setSelectable(false)
    }

}