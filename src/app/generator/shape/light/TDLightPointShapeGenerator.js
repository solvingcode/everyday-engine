import LightPointComponent from '../../../component/internal/LightPointComponent.js'
import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'
import UnitHelper from '../../../utils/UnitHelper.js'

export default class TDLightPointShapeGenerator extends ContextTypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const lightComponent = unit.getComponent(LightPointComponent)
        const {center, context, scaleSize, camera} = dataContext
        UnitHelper.drawLight(context, lightComponent, center, scaleSize, camera)
    }

}