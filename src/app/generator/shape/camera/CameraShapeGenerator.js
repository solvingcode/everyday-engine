/**
 * @abstract
 */
import TypeShapeGenerator from '../TypeShapeGenerator.js'

export default class CameraShapeGenerator extends TypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const {context, scaleSize} = dataContext
        const {width, height} = scaleSize
        context.beginPath()
        context.rect(0, 0, width, height)
        context.moveTo(0, height / 2)
        context.lineTo(width, height / 2)
        context.moveTo(width / 2, 0)
        context.lineTo(width / 2, height)
    }

}