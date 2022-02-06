/**
 * @class {MeshManager}
 */
export default class MeshManager {

    /**
     * @type {Mesh[]}
     */
    meshes

    constructor() {
        this.meshes = []
    }

    /**
     * @return {Mesh[]}
     */
    getMeshes(){
        return this.meshes
    }

    /**
     * @param {number} index
     * @return {Mesh}
     */
    get(index){
        return this.meshes[index]
    }

    /**
     * @param {number} index
     * @param {Mesh|{program: *, buffer: WebGLBuffer}} mesh
     */
    set(index, mesh){
        this.meshes[index] = mesh
    }

    /**
     * @param {number} index
     */
    clear(index){
        const mesh = this.get(index)
        if(mesh){
            mesh.clear()
        }
    }

}