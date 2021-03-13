import Data from './Data.js'

/**
 * @abstract
 * @extends {Data}
 */
class AssetData extends Data {

    id
    name
    mesh
    folderId

    /**
     * @param {number} id
     */
    setId(id) {
        this.id = id
    }

    /**
     * @return {number}
     */
    getId() {
        return this.id
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @param {Mesh} mesh
     */
    setMesh(mesh) {
        this.mesh = mesh
    }

    /**
     * @return {Mesh}
     */
    getMesh() {
        return this.mesh
    }

    /**
     * @param {number} folderId
     */
    setFolderId(folderId){
        this.folderId = folderId
    }

    /**
     * @return {number}
     */
    getFolderId(){
        return this.folderId
    }

}

export default AssetData