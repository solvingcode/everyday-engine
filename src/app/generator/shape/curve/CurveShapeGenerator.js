/**
 * @abstract
 */
import TypeShapeGenerator from '../TypeShapeGenerator.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'

export default class CurveShapeGenerator extends TypeShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext){
        const meshComponent = unit.getComponent(MeshComponent)
        const {context, camera} = dataContext
        const vertices = meshComponent.getShapeVertices()
        const connectWidth = camera.toScaleNumber(80)
        const {x: x0, y: y0} = camera.toCameraScale(vertices[0])
        const {x: x1, y: y1} = camera.toCameraScale(vertices[1])
        context.beginPath()
        context.moveTo(x0, y0)
        context.bezierCurveTo(x0 + connectWidth, y0, x1 - connectWidth, y1, x1, y1)
    }

}