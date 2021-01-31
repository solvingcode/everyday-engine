import StateManager from '../../state/StateManager.js'
import Runner from '../Runner.js'
import Mouse from '../../core/Mouse.js'
import CircleEntity from '../../entity/types/shape/CircleEntity.js'
import RectEntity from '../../entity/types/shape/RectEntity.js'
import JointEntity from '../../entity/types/constraint/JointEntity.js'
import AttachPointEntity from '../../entity/types/constraint/AttachPointEntity.js'
import SelectorEntity from '../../entity/types/edit/SelectorEntity.js'
import World from '../../world/World.js'

const {MouseButton} = Mouse
/**
 * Draw Runner class
 * Run actions for drawing
 */
class DrawerRunner extends Runner {

    constructor() {
        super()
        this.currentEntity = null
        this.isCurrentDrawValid = false
    }

    /**
     * @override
     */
    isHandle(window) {
        return window.mouse.isMouseMove()
    }

    /**
     * Execute draw action for each type of item (Circle, Rect, ...)
     * @param {Mouse} mouse
     * @param {Menu} menu
     *
     * @var {{[string]: {entity: Entity, startEvent: any, endEvent: any}}} typeEntity
     *
     * @todo Think to not use the MenuRunner to valid position
     */
    execute(mouse, menu) {
        const stateManager = StateManager.get()
        const world = World.get()
        const position = world.getWorldPosition(mouse.scenePosition)
        const defaultStartEvent = (pMouse) => pMouse.isButtonPressed(MouseButton.LEFT)
        const defaultEndEvent = (pMouse) => pMouse.isButtonClicked(MouseButton.LEFT)
        const typeEntity = {
            CIRCLE: {
                entity: CircleEntity
            },
            RECT: {
                entity: RectEntity
            },
            JOINT: {
                entity: JointEntity
            },
            ATTACH_POINT: {
                entity: AttachPointEntity
            },
            SELECT: {
                entity: SelectorEntity
            }
        }
        Object.entries(typeEntity).forEach(entry => {
            const type = `DRAW_${entry[0]}`
            const props = entry[1]
            const startEvent = props.startEvent || defaultStartEvent
            const endEvent = props.endEvent || defaultEndEvent
            if (startEvent(mouse) && stateManager.isStart(type) && this.isPositionValid(mouse, menu)) {
                this.startDraw(stateManager, type)
            }
            if (stateManager.isProgress(type)) {
                this.draw(position, props.entity)
                if (endEvent(mouse)) {
                    this.endDraw(stateManager, type)
                    stateManager.endState(type, 1)
                    stateManager.startState(type, 1)
                }
            }
            if (stateManager.isStop(type)) {
                stateManager.endState(type, 1)
            }
        })
    }

    /**
     * Check which entity to start drawing.
     * @param {StateManager} stateManager
     * @param {String} type
     */
    startDraw(stateManager, type) {
        stateManager.progressState(type, 1)
        this.currentEntity = null
    }

    /**
     * Check which entity to end drawing.
     * @param {StateManager} stateManager
     * @param {String} type
     */
    endDraw(stateManager, type) {
        if (this.currentEntity) {
            this.currentEntity.end()
            if (this.isCurrentDrawValid) {
                this.currentEntity.close()
            } else {
                World.get().deleteEntity(this.currentEntity)
            }
            this.currentEntity = null
        }
    }

    /**
     * Draw an entity.
     * @param {Vector} position
     * @param {Entity} type
     */
    draw(position, type) {
        const world = World.get()
        if (!this.currentEntity) {
            this.currentEntity = world.loadEntity(position, type)
            this.currentEntity.setLoading(true)
        }
        this.isCurrentDrawValid = world.makeEntity(this.currentEntity)
    }

    /**
     * Is position of the given mouse is valid (inside draw area)
     * @param {Mouse} mouse
     * @param {Menu} menu
     */
    isPositionValid(mouse, menu) {
        return !menu.getUIRenderer().getItemAt(mouse)
    }

    static get() {
        if (!DrawerRunner.instance) {
            DrawerRunner.instance = new DrawerRunner()
        }
        return DrawerRunner.instance
    }
}

DrawerRunner.instance = null

export default DrawerRunner