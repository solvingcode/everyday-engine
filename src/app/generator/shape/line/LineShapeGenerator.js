/**
 * @abstract
 */
import TypeShapeGenerator from '../TypeShapeGenerator.js'

export default class LineShapeGenerator extends TypeShapeGenerator{

    /**
     * @override
     */
    draw(meshComponent, transformComponent, dataContext){
        const {context, camera} = dataContext
        const vertices = meshComponent.getShapeVertices()
        const {x: x0, y: y0} = camera.toCameraScale(vertices[0])
        const {x: x1, y: y1} = camera.toCameraScale(vertices[1])
        context.beginPath()
        context.moveTo(x0, y0)
        context.lineTo(x1, y1)
    }

}