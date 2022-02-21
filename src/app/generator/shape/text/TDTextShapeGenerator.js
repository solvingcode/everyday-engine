import TextComponent from '../../../component/internal/TextComponent.js'
import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'
import UnitHelper from '../../../utils/UnitHelper.js'

/**
 * @abstract
 */
export default class TDTextShapeGenerator extends ContextTypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const {context, scaleSize, camera, world} = dataContext
        const textComponent = unit.findComponentByClass(TextComponent)
        UnitHelper.drawText(context, textComponent, scaleSize, camera, world)
    }

}