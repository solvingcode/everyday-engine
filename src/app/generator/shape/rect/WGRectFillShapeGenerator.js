import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class WGRectFillShapeGenerator extends ContextTypeShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext){
        const {context} = dataContext
        const positions = [
            1.0, 1.0,
            -1.0, 1.0,
            1.0, -1.0,
            -1.0, -1.0
        ]
        context.bufferData(context.ARRAY_BUFFER, new Float32Array(positions), context.STATIC_DRAW)
    }

}