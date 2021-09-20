import Runner from '../Runner.js'
import Menu from '../../layout/Menu.js'

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
        if (!!Menu.get().getDraggingItems().length) {
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