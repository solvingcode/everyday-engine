import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformFreeUnitInstant from '../transform/TransformFreeUnitInstant.js'
import GUIScaleFreeComponent from '../../../../../component/internal/gui/scale/GUIScaleFreeComponent.js'

export default class ScaleFreeUnitInstant extends TransformFreeUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const childScale = new Vector({x: 10, y: 10})
        const style = new Style()
        style.setColor('#CCCCCC')
        style.setBorderSize(2)
        const shape = PrimitiveShape.CIRCLE
        super.instantiate(GUIScaleFreeComponent, childScale, parentScale, style, shape, position)
    }

}