import Renderer from './Renderer.js'
import {SCENE_WIDTH, SCENE_HEIGHT, CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import {objectContext} from '../core/Context.js'

/**
 * ObjectRenderer class
 * Manager the renderer for entities
 * @extends {Renderer}
 */
class ObjectRenderer extends Renderer {

    constructor() {
        super()
        this.meshes = []
        this.canvas = new OffscreenCanvas(SCENE_WIDTH, SCENE_HEIGHT)
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
        objectContext.canvas.width = SCENE_WIDTH
        this.context.canvas.width = SCENE_WIDTH
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
                const {x, y} = camera.toCanvasCoord(mesh.position)
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