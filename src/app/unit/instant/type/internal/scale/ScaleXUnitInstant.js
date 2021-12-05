import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformXUnitInstant from '../transform/TransformXUnitInstant.js'
import GUIScaleXComponent from '../../../../../component/internal/gui/scale/GUIScaleXComponent.js'

export default class ScaleXUnitInstant extends TransformXUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const childScale = new Vector({x: 10, y: 3})
        const style = new Style()
        style.setColor('#FF0000')
        style.setBorderSize(4)
        const shape = PrimitiveShape.ARROW_RECT_RIGHT
        super.instantiate(GUIScaleXComponent, childScale, parentScale, style, shape, position)
    }

}