define(function (require) {

    const Runner = require('../Runner.js')
    const StateManager = require('../../state/StateManager.js')
    const EntitySelector = require('../../world/manager/EntitySelector.js')
    const {MouseButton} = require('../../core/Mouse.js')
    const MoveCameraAction = require('../action/camera/MoveCameraAction.js')
    const ZoomInOutCameraAction = require('../action/camera/ZoomInOutCameraAction.js')
    const World = require('../../world/World.js')

    class WorldRunner extends Runner {

        /**
         * @type {WorldRunner}
         */
        static instance = null

        /**
         * @override
         */
        isHandle(window){
            return true
        }

        /**
         * Execute all world actions (move camera, ...)
         * @param {Mouse} mouse
         */
        execute(mouse) {
            const stateManager = StateManager.get()
            if (!stateManager.isRunning()) {
                this.updateMouseWheel(stateManager, mouse)
                this.selectMoveEntities(stateManager, mouse)
            }
        }

        /**
         * @param {StateManager} stateManager
         * @param {Mouse} mouse
         */
        updateMouseWheel(stateManager, mouse) {
            if (mouse.isButtonPressed(MouseButton.MIDDLE)) {
                stateManager.startState(MoveCameraAction.STATE, 1)
            }
            if (mouse.getMouseWheel().y) {
                stateManager.startState(ZoomInOutCameraAction.STATE, 1,
                    {deltaY: mouse.getMouseWheel().y})
            }
        }

        /**
         * @param {StateManager} stateManager
         * @param {Mouse} mouse
         */
        selectMoveEntities(stateManager, mouse) {
            if(stateManager.isProgress('DRAW_SELECT')){
                !this.moveEntities(stateManager, mouse) && this.selectEntities(stateManager, mouse)
            }
        }

        /**
         * Move on drag/drop if the mouse click position is a selected entity
         * @param {StateManager} stateManager
         * @param {Mouse} mouse
         */
        moveEntities(stateManager, mouse) {
            if (mouse.isButtonPressed(MouseButton.LEFT)) {
                const world = World.get()
                const entitySelector = EntitySelector.get()
                const selectedEntities = entitySelector.getSelected(world)
                if (selectedEntities.length) {
                    const triggerEntity = entitySelector.get(world, world.getWorldPosition(mouse.currentPosition))
                    const isEntityMove = triggerEntity && selectedEntities.includes(triggerEntity)
                    if (isEntityMove) {
                        stateManager.startState('ACTION_MOVE', 1)
                        return true
                    } else {
                        stateManager.stopState('ACTION_MOVE', 1)
                    }
                }
            }else{
                stateManager.isProgress('ACTION_MOVE')
                && stateManager.stopState('ACTION_MOVE', 1)
            }
            return false
        }

        /**
         * Select entities on drag/drop
         * @param {StateManager} stateManager
         * @param {Mouse} mouse
         */
        selectEntities(stateManager, mouse) {
            if (mouse.isButtonPressed(MouseButton.LEFT)) {
                const world = World.get()
                const entitySelector = EntitySelector.get()
                const dragArea = mouse.getDragArea()
                entitySelector.unselectAll(world)
                entitySelector.select(world, world.getWorldPosition(dragArea.position), dragArea.size)
            }
        }

        static get() {
            if (!WorldRunner.instance) {
                WorldRunner.instance = new WorldRunner()
            }
            return WorldRunner.instance
        }
    }

    return WorldRunner
})