import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class WGCircleShapeGenerator extends ContextTypeShapeGenerator {

    draw(unit, dataContext) {
        const {buffers} = dataContext
        const positions = []
        for (let iCircle = 0; iCircle < 360; iCircle+=2) {
            positions.push((Math.sin(iCircle * Math.PI / 180) + 1) / 2)
            positions.push((Math.cos(iCircle * Math.PI / 180) + 1) / 2)
        }
        buffers.position.vertices = positions
    }

}