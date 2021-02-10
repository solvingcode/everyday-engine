import Renderer from './Renderer.js'
import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import {objectContext} from '../core/Context.js'
import Window from '../core/Window.js'

/**
 * ObjectRenderer class
 * Manager the renderer for entities
 * @extends {Renderer}
 */
class ObjectRenderer extends Renderer {

    constructor() {
        super()
        this.meshes = []
        this.initCanvas()
    }

    initCanvas(){
        const {size} = Window.get()
        this.canvas = new OffscreenCanvas(size.width, size.height)
        this.context = this.canvas.getContext(CANVAS_CONTEXT_TYPE)
    }

    /**
     * @override
     */
    draw(object) {
        this.add(object.mesh)
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
     * Render the meshes to the screen
     * @param {Camera} camera
     * @todo Optimize this to not delete all meshes (rerender just entities updated)
     */
    render(camera) {
        this.clear()
        for (let iMesh in this.meshes) {
            if (this.meshes.hasOwnProperty(iMesh)) {
                const mesh = this.meshes[iMesh]
                const {x, y} = camera.toCameraScale(camera.toCanvasCoord(mesh.position))
                objectContext.drawImage(mesh.context.canvas, x, y)
            }
        }
        this.meshes = []
    }

    /**
     * Add a mesh
     * @param {Mesh} mesh
     */
    add(mesh) {
        this.meshes.push(mesh)
    }
}

export default ObjectRenderer