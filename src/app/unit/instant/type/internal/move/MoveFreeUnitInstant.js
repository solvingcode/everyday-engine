import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import GUIMoveFreeComponent from '../../../../../component/internal/gui/move/GUIMoveFreeComponent.js'
import TransformFreeUnitInstant from '../transform/TransformFreeUnitInstant.js'

export default class MoveFreeUnitInstant extends TransformFreeUnitInstant {

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
        super.instantiate(GUIMoveFreeComponent, childScale, parentScale, style, shape, position)
    }

}