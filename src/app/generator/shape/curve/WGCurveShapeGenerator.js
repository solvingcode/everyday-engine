import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import Vector from '../../../utils/Vector.js'
import GeometryHelper from '../../../utils/GeometryHelper.js'

export default class WGCurveShapeGenerator extends ContextTypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const {buffers} = dataContext
        const meshComponent = unit.getComponent(MeshComponent)
        const {camera, scaleSize} = dataContext
        const scaleVector = Vector.fromSize(scaleSize)
        const vertices = meshComponent.getShapeVertices()
        const connectWidth = camera.toScaleNumber(80)
        const p1 = camera.toCameraScale(vertices[0])
        const p2 = Vector.add(p1, new Vector({x: connectWidth, y: 0}))
        const p4 = camera.toCameraScale(vertices[1])
        const p3 = Vector.add(p4, new Vector({x: -connectWidth, y: 0}))
        const curvePoints = GeometryHelper.getPointsOnBezierCurve(p1, p2, p3, p4, 20)
        buffers.position.vertices = curvePoints
            .map(curvePoint => Vector.linearDivide(curvePoint, scaleVector))
            .reduce((prevResult, curvePoint) =>
                ([
                    ...prevResult,
                    ...(prevResult.length >= 4 ? [prevResult[prevResult.length - 2], prevResult[prevResult.length - 1]] : []),
                    ...[curvePoint.getX(), curvePoint.getY()]]), [])
    }

}