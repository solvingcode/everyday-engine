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
    draw(mesh, data) {
        this.add(mesh, data)
    }

    /**
     * @abstract
     */
    clear() {
        throw new NotImplementedError(this, this.clear)
    }

    /**
     * @abstract
     * @param {*} mesh
     * @param {{position: Vector, scale: Vector, rotation: Vector}} data
     * @return {void}
     */
    drawMesh(mesh, data){
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
                const {mesh, data} = this.meshes[iMesh]
                this.drawMesh(mesh, data)
            }
        }
        this.meshes = []
    }

    /**
     * @param {Mesh} mesh
     * @param {{position: Vector, scale: Vector, rotation: Vector}} data
     */
    add(mesh, data) {
        this.meshes.push({mesh, data})
    }

    /**
     * @return {MeshRenderer}
     */
    static get(){
        return super.get()
    }
}