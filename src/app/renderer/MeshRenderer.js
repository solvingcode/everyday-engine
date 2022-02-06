import Renderer from './Renderer.js'
import NotImplementedError from '../exception/type/NotImplementedError.js'

/**
 * @abstract
 */
export default class MeshRenderer extends Renderer {

    constructor() {
        super()
        this.meshes = []
        this.initCanvas()
    }

    /**
     * @abstract
     */
    initCanvas(){
        throw new NotImplementedError(this, this.initCanvas)
    }

    /**
     * @override
     */
    draw(mesh, position) {
        this.add(mesh, position)
    }

    /**
     * @abstract
     */
    clear() {
        throw new NotImplementedError(this, this.clear)
    }

    /**
     * @abstract
     */
    drawMesh(mesh, position){
        throw new NotImplementedError(this, this.drawMesh)
    }

    /**
     * Render the meshes to the screen
     * @todo Optimize this to not delete all meshes (rerender just entities updated)
     */
    render() {
        this.clear()
        for (let iMesh in this.meshes) {
            if (this.meshes.hasOwnProperty(iMesh)) {
                const {mesh, position} = this.meshes[iMesh]
                this.drawMesh(mesh, position)
            }
        }
        this.meshes = []
    }

    /**
     * @param {Mesh} mesh
     * @param {Vector} position
     */
    add(mesh, position) {
        this.meshes.push({mesh, position})
    }

    /**
     * @return {MeshRenderer}
     */
    static get(){
        return super.get()
    }
}