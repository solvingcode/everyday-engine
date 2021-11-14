import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * AppMenuItem Menu Item
 * Menu responsible for managing application information, props, ...
 */
class AppMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Information',
            stateCode: '',
            type: Layout.type.TEXT,
            zone: Layout.zone.FOOTER
        })
        this.startTimeFPS = Date.now()
        this.nbFrame = 0
        this.fps = 0
    }

    /**
     * @override
     */
    doUpdate() {
        this.text = [
            `FPS : ${this.fps}`,
        ]
        return this.updateFPS()
    }

    /**
     * Update the FPS and show it in the title
     * @return {boolean}
     */
    updateFPS() {
        const deltaTime = (Date.now() - this.startTimeFPS) / 1000
        if (deltaTime > 1) {
            this.fps = Math.floor(this.nbFrame / deltaTime)
            this.nbFrame = 0
            this.startTimeFPS = Date.now()
            return true
        } else {
            this.nbFrame++
        }
        return false
    }

    /**
     * @override
     */
    isValid() {
        return true
    }

    doSetData(data) {
    }
}

export default AppMenuItem