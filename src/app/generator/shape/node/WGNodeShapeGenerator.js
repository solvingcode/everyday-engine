import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class WGNodeShapeGenerator extends ContextTypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const {buffers} = dataContext
        buffers.position.vertices = [
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            1.0, 1.0
        ]
    }

}