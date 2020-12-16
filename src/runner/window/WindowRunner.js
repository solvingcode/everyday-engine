define(function (require) {

    const EntitySelector = require('../../world/manager/EntitySelector.js')
    const Runner = require('../Runner.js')
    const StateManager = require('../../state/StateManager.js')
    const { CURSOR } = require('../../core/Mouse.js')
    const World = require('../../world/World.js')

    class WindowRunner extends Runner {

        /**
         * Execute all windows actions (move mouse, ...)
         * @param {Mouse} mouse 
         */
        execute(mouse) {
            const entitySelector = EntitySelector.get()
            const stateManager = StateManager.get()
            if (!stateManager.isRunning()) {
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
            entitySelector.focus(World.get().getWorldPosition(mouse.currentPosition))
        }

        /**
         * Change cursor mouse
         * @param {EntitySelector} entitySelector 
         * @param {Mouse} mouse 
         */
        cursor(entitySelector, mouse) {
            let cursor = StateManager.get().getData('cursor')
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