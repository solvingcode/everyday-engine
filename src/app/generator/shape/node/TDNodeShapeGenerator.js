import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'
import UnitHelper from '../../../utils/UnitHelper.js'

export default class TDNodeShapeGenerator extends ContextTypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const {context, scaleSize, camera} = dataContext
        UnitHelper.drawNode(context, unit, scaleSize, camera)
    }

}