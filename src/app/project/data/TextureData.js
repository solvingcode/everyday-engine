import Data from './Data.js'

/**
 * @abstract
 * @extends {Data}
 */
class TextureData extends Data {

    id
    name
    mesh

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

}

export default TextureData