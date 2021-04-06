import Runner from '../Runner.js'
import {MouseButton} from '../../core/Mouse.js'
import World from '../../world/World.js'
import Vector from '../../utils/Vector.js'

/**
 * Manage all the entity constraints (mouse constraint, ...)
 * @property {Entity} entity
 */
class ConstraintRunner extends Runner {

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * Execute all constraints (mouse constraint, ...)
     * @param {Mouse} mouse
     */
    execute(mouse) {
        const world = World.get()
        this.mouseConstraint(world, mouse)
    }

    /**
     * Check for mouse constraint
     * @param {World} world
     * @param {Mouse} mouse
     * @TODO: review & optimize the implementation
     */
    mouseConstraint(world, mouse) {
        const mouseConstraint = world.getMouseConstraint()
        const currentScenePosition = world.getCamera().fromCameraScale(mouse.currentScenePosition)
        const worldMousePosition = world.getWorldPosition(currentScenePosition)
        if (mouseConstraint) {
            if (mouse.isButtonPressed(MouseButton.LEFT) && !mouseConstraint.getLinkedEntityAt(1, world)) {
                const clickEntity = world.findBodyEntity(currentScenePosition)
                if (clickEntity) {
                    mouseConstraint.pointConstraint = clickEntity.toRelativeCenterPosition(worldMousePosition)
                }
                mouseConstraint.setLinkEntity(1, clickEntity)
            } else if (mouse.isButtonClicked(MouseButton.LEFT)) {
                mouseConstraint.setLinkEntity(1, null)
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
    updateConstraint(constraint, world, mouse) {
        const physics = world.getPhysics()
        const currentScenePosition = world.getCamera().fromCameraScale(mouse.currentScenePosition)
        const mousePosition = world.getWorldPosition(currentScenePosition)
        const entity = constraint.getLinkedEntityAt(1, world)
        constraint.setLinkEntities(null, entity)
        physics.updateConstraint(constraint, {
            pointA: entity ? mousePosition : new Vector(),
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

export default ConstraintRunner