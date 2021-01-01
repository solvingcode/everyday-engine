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
            const world = World.get()
            if (!stateManager.isRunning()) {
                this.focus(world, entitySelector, mouse)
            }
            this.cursor(world, entitySelector, mouse)
        }

        /**
         * Focus entity over mouse
         * @param {World} world
         * @param {EntitySelector} entitySelector 
         * @param {Mouse} mouse 
         */
        focus(world, entitySelector, mouse) {
            entitySelector.unfocusAll(world)
            entitySelector.focus(world, world.getWorldPosition(mouse.currentPosition))
        }

        /**
         * Change cursor mouse
         * @param {World} world
         * @param {EntitySelector} entitySelector 
         * @param {Mouse} mouse 
         */
        cursor(world, entitySelector, mouse) {
            let cursor = StateManager.get().getData('cursor')
            if (cursor === CURSOR.MOVE_ENTITY) {
                const entity = entitySelector.get(world, mouse.currentPosition)
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