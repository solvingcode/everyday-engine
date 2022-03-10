import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class WGArrowRightShapeGenerator extends ContextTypeShapeGenerator {

    draw(unit, dataContext) {
        const {buffers} = dataContext
        buffers.position.vertices = [
            0.0, 0.5,
            1.0, 0.5,
            1.0, 0.5,
            0.8, 0.0,
            1.0, 0.5,
            0.8, 1.0
        ]
    }

}