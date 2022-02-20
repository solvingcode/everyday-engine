import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import Vector from '../../../utils/Vector.js'

export default class WGCurveShapeGenerator extends ContextTypeShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext){
        const {buffers} = dataContext
        const meshComponent = unit.getComponent(MeshComponent)
        const {camera, scaleSize} = dataContext
        const scaleVector = Vector.fromSize(scaleSize)
        const vertices = meshComponent.getShapeVertices()
        const connectWidth = camera.toScaleNumber(80)
        const {x: x0, y: y0} = Vector.linearDivide(camera.toCameraScale(vertices[0]), scaleVector)
        const {x: x1, y: y1} = Vector.linearDivide(camera.toCameraScale(vertices[1]), scaleVector)
        buffers.position.vertices = [
            x0, y0,
            x1, y1
        ]
    }

}