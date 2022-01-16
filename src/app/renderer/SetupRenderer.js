import MenuUI from './ui/MenuUI.js'
import HtmlUIRenderer from './ui/html/HtmlUIRenderer.js'
import Renderer from './Renderer.js'

/**
 * Manage the renderer for the layout (fix element, menus, buttons, ...)
 */
class SetupRenderer extends Renderer {

    constructor() {
        super()
        this.uiRenderer = new HtmlUIRenderer()
    }

    /**
     * @override
     */
    render(menu) {
        MenuUI.draw(menu, this.uiRenderer)
    }

    /**
     * @override
     */
    clear() {
        //not necessary
    }

    /**
     * @override
     */
    draw() {
        //not used
    }
}

export default SetupRenderer