import TDCurveShapeGenerator from '../curve/TDCurveShapeGenerator.js'

export default class TDEdgeShapeGenerator extends TDCurveShapeGenerator{

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