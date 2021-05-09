import {HTML_ID_PREFIX} from '../../core/Constant.js'

class MenuItemUI {

    /**
     * @type {MenuItem}
     */
    element

    /**
     * @type {number}
     */
    version

    /**
     * @type {MenuItemUI}
     */
    parent

    constructor(item, index, parent) {
        this.element = item
        this.index = index
        this.parent = parent
        this.version = 0
    }

    /**
     * @param {UIRenderer} uiRenderer
     */
    draw(uiRenderer) {
        uiRenderer.getType(this).draw(this, uiRenderer)
    }

    /**
     * @return {string}
     */
    getId() {
        const zone = this.element.zone
        const parentIndex = (this.parent && this.parent.index) || 0
        return `${HTML_ID_PREFIX}${zone}-${parentIndex}-${this.index}`
    }
}

export default MenuItemUI