import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'
import {objectContext} from '../../../core/Context.js'

export default class WGRectFillShapeGenerator extends ContextTypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const {context, buffers} = dataContext
        const positions = [
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            1.0, 1.0
        ]
        context.bindBuffer(objectContext.ARRAY_BUFFER, buffers.position)
        context.bufferData(context.ARRAY_BUFFER, new Float32Array(positions), context.STATIC_DRAW)
    }

}