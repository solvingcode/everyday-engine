import UIRenderer from '../UIRenderer.js'
import ColorButtonUI from './buttons/ColorButtonUI.js'
import DefaultButtonUI from './buttons/DefaultButtonUI.js'
import LayerEntityButtonUI from './buttons/LayerEntityButtonUI.js'
import CanvasPanelUI from './CanvasPanelUI.js'
import Menu from '../../../layout/Menu.js'

/**
 * Canvas UI Renderer class
 * Define the UI renderer for canvas
 * @abstract
 */
class CanvasUIRenderer extends UIRenderer {

    /**
     * @param {CanvasRenderingContext2D} context
     */
    constructor(context) {
        super()
        this.context = context
        this.menu = Menu.get()
        this.menu.setUIRenderer(this)
    }

    /**
     * @override
     */
    getColorButtonUI() {
        export default ColorButtonUI
    }

    /**
     * @override
     */
    getLayerEntityButtonUI() {
        export default LayerEntityButtonUI
    }

    /**
     * @override
     */
    getDefaultButtonUI() {
        export default DefaultButtonUI
    }

    /**
     * @override
     */
    getPanelUI() {
        export default CanvasPanelUI
    }

    /**
     * @override
     */
    getItemAt(mouse) {
        const {x, y} = mouse.scenePosition
        return this.menu.items.find((item) => item.position &&
            x > item.position.x && x < item.position.x + item.width &&
            y > item.position.y && y < item.position.y + item.height
        )
    }

}

export default CanvasUIRenderer