import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'

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
        let cursor = StateManager.get().getData('cursor')
        document.body.style.cursor = cursor || 'default'
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