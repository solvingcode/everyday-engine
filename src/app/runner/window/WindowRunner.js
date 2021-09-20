import Runner from '../Runner.js'
import Menu from '../../layout/Menu.js'
import ContentMenuItem from '../../layout/items/content/ContentMenuItem.js'

class WindowRunner extends Runner {

    /**
     * @override
     */
    isHandle(window) {
        return window.mouse.isMouseMove()
    }

    /**
     * @override
     */
    execute() {
        this.cursor()
    }

    /**
     * Change cursor mouse
     */
    cursor() {
        let cursor = 'default'
        const menu = Menu.get()
        if (menu.items.find(item => item.element instanceof ContentMenuItem && item.element.isEndDragging())) {
            cursor = 'end-drag'
        } else if (!!menu.getDraggingItems().length) {
            cursor = 'drag'
        }
        document.body.className = `cursor-${cursor}`
    }

    static get() {
        if (!WindowRunner.instance) {
            WindowRunner.instance = new WindowRunner()
        }
        return WindowRunner.instance
    }
}

WindowRunner.instance = null

export default WindowRunner