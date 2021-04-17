import Maths from '../utils/Maths.js'
import AssetData from '../project/data/AssetData.js'

/**
 * @class {Asset}
 */
export default class Asset extends AssetData{

    /**
     * @param {Folder} folder
     * @param {Object} props
     */
    constructor(folder, props = {}) {
        super()
        this.id = Maths.generateId()
        this.name = props.name || 'Asset'
        this.selected = false
        this.folderId = folder ? folder.getId() : null
        this.type = null
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
     * @param {*} data
     * @return {boolean}
     */
    async load(data) {
        return this.type.load(data, this);
    }
}