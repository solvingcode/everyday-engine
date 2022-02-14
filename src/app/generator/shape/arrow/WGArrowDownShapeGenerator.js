import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class WGArrowDownShapeGenerator extends ContextTypeShapeGenerator {

    draw(unit, dataContext) {
        const {buffers} = dataContext
        buffers.position.vertices = [
            0.5, 0.0,
            0.5, 1.0,
            0.5, 1.0,
            1.0, 0.8,
            0.5, 1.0,
            0.0, 0.8
        ]
    }

}