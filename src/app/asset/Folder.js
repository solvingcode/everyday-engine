import Maths from '../utils/Maths.js'
import FolderData from '../project/data/FolderData.js'

export default class Folder extends FolderData {

    /**
     * @param {string} name
     * @param {Folder} parentFolder
     */
    constructor(name, parentFolder = null) {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.folderId = null
        if (parentFolder) {
            this.folderId = parentFolder.getId()
        }
        this.selected = false
    }

    /**
     * @return {boolean}
     */
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

}