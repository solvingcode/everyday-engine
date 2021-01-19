define(function (require) {

    const Runner = require('../Runner.js')
    const StateManager = require('../../state/StateManager.js')
    const {MouseButton} = require('../../core/Mouse.js')
    const World = require('../../world/World.js')

    /**
     * Manage all the entity constraints (mouse constraint, ...)
     * @property {Entity} entity
     */
    class ConstraintRunner extends Runner {

        /**
         * @override
         */
        isHandle(window){
            return true
        }

        /**
         * Execute all constraints (mouse constraint, ...)
         * @param {Mouse} mouse
         */
        execute(mouse) {
            const stateManager = StateManager.get()
            if (stateManager.isRunning()) {
                const world = World.get()
                this.mouseConstraint(world, mouse)
            }
        }

        /**
         * Check for mouse constraint
         * @param {World} world
         * @param {Mouse} mouse
         * @TODO: review & optimize the implementation
         */
        mouseConstraint(world, mouse) {
            const mouseConstraint = world.getMouseConstraint()
            const worldMousePosition = world.getWorldPosition(mouse.currentPosition)
            if (mouseConstraint) {
                if (mouse.isButtonPressed(MouseButton.LEFT) && !mouseConstraint.entities.b) {
                    const clickEntity = world.findBodyEntity(mouse.currentPosition)
                    if (clickEntity) {
                        mouseConstraint.pointConstraint = clickEntity.toRelativeCenterPosition(worldMousePosition)
                    }
                    mouseConstraint.entities.b = clickEntity
                }else if(mouse.isButtonClicked(MouseButton.LEFT) ){
                    mouseConstraint.entities.b = null
                    mouseConstraint.pointConstraint = null
                }
                this.updateConstraint(mouseConstraint, world, mouse)
            }
        }

        /**
         * Update the physics constraint from entity.
         * Must set the default position for the pointB to (1,1) and the pointA to (0,0), else the mesh of
         * the constraint wouldn't updated because the size will be 0
         * @param {Entity} constraint
         * @param {World} world
         * @param {Mouse} mouse
         */
        updateConstraint(constraint, world, mouse){
            const physics = world.getPhysics()
            const mousePosition = world.getWorldPosition(mouse.currentPosition)
            const entity = constraint.entities.b
            constraint.setEntities(null, entity)
            physics.updateConstraint(constraint, {
                pointA: entity ? mousePosition : {x: 0, y: 0},
                entityB: entity,
                pointB: entity ? constraint.pointConstraint : {x: 1, y: 1}
            })
        }

        static get() {
            if (!ConstraintRunner.instance) {
                ConstraintRunner.instance = new ConstraintRunner()
            }
            return ConstraintRunner.instance
        }
    }

    ConstraintRunner.instance = null

    return ConstraintRunner
})