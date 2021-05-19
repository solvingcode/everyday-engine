import Renderer from './Renderer.js'
import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import {objectContext} from '../core/Context.js'
import Window from '../core/Window.js'

/**
 * ObjectRenderer class
 * Manager the renderer for entities
 * @extends {Renderer}
 */
class MeshRenderer extends Renderer {

    constructor() {
        super()
        /**
         * @type {{mesh: Mesh, position: Vector}[]}
         */
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
    draw(mesh, position, camera) {
        this.add(mesh, position, camera)
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
     * @todo Optimize this to not delete all meshes (rerender just entities updated)
     */
    render() {
        this.clear()
        for (let iMesh in this.meshes) {
            if (this.meshes.hasOwnProperty(iMesh)) {
                const {mesh, position, camera} = this.meshes[iMesh]
                const {x, y} = camera.toCameraScale(camera.toCanvasCoord(position))
                objectContext.drawImage(mesh.context.canvas, x, y)
            }
        }
        this.meshes = []
    }

    /**
     * @param {Mesh} mesh
     * @param {Vector} position
     * @param {Camera} camera
     */
    add(mesh, position, camera) {
        this.meshes.push({mesh, position, camera})
    }

    /**
     * @return {MeshRenderer}
     */
    static get(){
        return super.get()
    }
}

export default MeshRenderer