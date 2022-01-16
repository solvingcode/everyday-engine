/**
 * @abstract
 */
import TypeShapeGenerator from '../TypeShapeGenerator.js'

export default class RectShapeGenerator extends TypeShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext){
        const {context, scaleSize} = dataContext
        context.rect(0, 0, scaleSize.width, scaleSize.height)
    }

}