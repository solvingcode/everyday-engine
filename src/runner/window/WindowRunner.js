define(function (require) {

    const EntitySelector = require('../../world/manager/EntitySelector.js')
    const Runner = require('../Runner.js')
    const AppState = require('../../core/AppState.js')
    const { CURSOR } = require('../../core/Mouse.js')

    class WindowRunner extends Runner {

        /**
         * Execute all windows actions (move mouse, ...)
         * @param {Mouse} mouse 
         */
        execute(mouse) {
            const entitySelector = EntitySelector.get()
            const appState = AppState.get()
            if (!appState.hasState('SIMULATE_PROGRESS')) {
                this.focus(entitySelector, mouse)
            }
            this.cursor(entitySelector, mouse)
        }

        /**
         * Focus entity over mouse
         * @param {EntitySelector} entitySelector 
         * @param {Mouse} mouse 
         */
        focus(entitySelector, mouse) {
            entitySelector.unfocusAll()
            entitySelector.focus(mouse.currentPosition)
        }

        /**
         * Change cursor mouse
         * @param {EntitySelector} entitySelector 
         * @param {Mouse} mouse 
         */
        cursor(entitySelector, mouse) {
            let { cursor } = AppState.get().data
            if (cursor === CURSOR.MOVE_ENTITY) {
                const entity = entitySelector.get(mouse.currentPosition)
                cursor = entity && entity.selected && CURSOR.MOVE
            }
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

    return WindowRunner
})