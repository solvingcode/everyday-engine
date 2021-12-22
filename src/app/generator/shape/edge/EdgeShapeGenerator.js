/**
 * @abstract
 */
import CurveShapeGenerator from '../curve/CurveShapeGenerator.js'

export default class EdgeShapeGenerator extends CurveShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext){
        const {context} = dataContext
        if(unit.isSelected()){
            context.shadowColor = '#d1ff00'
            context.shadowBlur = 6
        }
        super.draw(unit, dataContext)
    }

}