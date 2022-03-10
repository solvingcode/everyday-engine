import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import {objectContext} from '../core/Context.js'
import Window from '../core/Window.js'
import MeshRenderer from './MeshRenderer.js'
import Canvas from '../core/Canvas.js'

export default class TwoDMeshRenderer extends MeshRenderer {

    initCanvas(){
        const {size} = Window.get()
        this.canvas = new Canvas(size.width, size.height)
        this.context = this.canvas.getContext(CANVAS_CONTEXT_TYPE)
    }

    /**
     * @override
     */
    clear() {
        const {size} = Window.get()
        objectContext.canvas.width = size.width
        this.context.canvas.width = size.width
    }

    /**
     * @override
     */
    drawMesh(mesh, data) {
        const {x, y} = data.position
        objectContext.drawImage(mesh.context.canvas, x, y)
    }
}