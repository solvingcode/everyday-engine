import Mesh from './Mesh.js'
import Maths from '../utils/Maths.js'
import TextureData from '../project/data/TextureData.js'

/**
 * @class {Texture}
 * @extends {TextureData}
 */
class Texture extends TextureData {

    constructor() {
        super()
        this.id = Maths.generateId()
        this.name = 'Texture'
        this.mesh = new Mesh()
        this.selected = false
    }

    isSelected() {
        return this.selected
    }

    select() {
        this.setSelected(true)
    }

    unselect() {
        this.setSelected(false)
    }

    /**
     * @param {boolean} value
     */
    setSelected(value) {
        this.selected = value
    }

    /**
     * @param {string} image
     * @return {boolean}
     */
    async load(image) {
        return this.mesh.fromImage(image);
    }
}

export default Texture