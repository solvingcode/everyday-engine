import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class TDRectShapeGenerator extends ContextTypeShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext){
        const {context, scaleSize} = dataContext
        context.rect(0, 0, scaleSize.width, scaleSize.height)
    }

}