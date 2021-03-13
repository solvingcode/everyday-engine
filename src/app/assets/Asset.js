import Maths from '../utils/Maths.js'
import Mesh from '../core/Mesh.js'
import AssetData from '../project/data/AssetData.js'

/**
 * @class {Asset}
 */
export default class Asset extends AssetData{

    constructor(props) {
        super()
        this.id = Maths.generateId()
        this.name = props.name || 'Asset'
        this.mesh = new Mesh()
        this.selected = false
        this.folderId = null
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