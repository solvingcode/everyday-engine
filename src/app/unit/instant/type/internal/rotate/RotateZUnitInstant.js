import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformFreeUnitInstant from '../transform/TransformFreeUnitInstant.js'
import GUIRotateComponent from '../../../../../component/internal/gui/rotate/GUIRotateComponent.js'

export default class RotateZUnitInstant extends TransformFreeUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const childScale = new Vector({x: 10, y: 10})
        const style = new Style()
        style.setColor('#00FF00')
        style.setBorderSize(2)
        const shape = PrimitiveShape.CIRCLE
        super.instantiate(GUIRotateComponent, childScale, parentScale, style, shape, position)
    }

}