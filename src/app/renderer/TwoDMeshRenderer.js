import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import {objectContext} from '../core/Context.js'
import Window from '../core/Window.js'
import MeshRenderer from './MeshRenderer.js'

export default class TwoDMeshRenderer extends MeshRenderer {

    initCanvas(){
        const {size} = Window.get()
        this.canvas = new OffscreenCanvas(size.width, size.height)
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
    drawMesh(mesh, position) {
        const {x, y} = position
        objectContext.drawImage(mesh.context.canvas, x, y)
    }
}