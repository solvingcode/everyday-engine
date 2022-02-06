import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class TDCircleShapeGenerator extends ContextTypeShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext){
        const {center, context, scaleSize} = dataContext
        const sw = scaleSize.width
        const radiusScale = Math.abs(sw / 2 - 1)
        context.ellipse(center.x, center.y, radiusScale, radiusScale, 0, 0, 2 * Math.PI)
    }

}