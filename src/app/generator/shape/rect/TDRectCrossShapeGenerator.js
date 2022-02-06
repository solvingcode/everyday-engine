import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class TDRectCrossShapeGenerator extends ContextTypeShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext){
        const {context, scaleSize} = dataContext
        const {width, height} = scaleSize
        context.beginPath()
        context.rect(0, 0, width, height)
        context.moveTo(0, 0)
        context.lineTo(width, height)
        context.moveTo(width, 0)
        context.lineTo(0, height)
    }

}