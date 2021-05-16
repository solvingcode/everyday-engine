import StateManager from '../../state/StateManager.js'
import Runner from '../Runner.js'
import {MouseButton} from '../../core/Mouse.js'
import World from '../../world/World.js'
import Vector from '../../utils/Vector.js'
import {PrimitiveShape} from '../../unit/Unit.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import Size from '../../pobject/Size.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import MoveAction from '../action/edit/MoveAction.js'
import SelectionUnitInstant from '../../unit/instant/type/internal/edit/SelectionUnitInstant.js'
import Menu from '../../layout/Menu.js'

export default class DrawerRunner extends Runner {

    static instance = null

    /**
     * @type {Unit}
     */
    currentUnit

    constructor() {
        super()
        this.currentUnit = null
    }

    /**
     * @override
     */
    isHandle(window) {
        return window.mouse.isMouseMove()
    }

    /**
     * @override
     * @param {Mouse} mouse
     */
    async execute(mouse) {
        const menu = Menu.get()
        const stateManager = StateManager.get()
        const world = World.get()
        const scenePosition = new Vector(mouse.scenePosition)
        const vector3d = world.getCamera().fromCameraScale(scenePosition)
        const position = world.getWorldPosition(vector3d)
        const defaultStartEvent = (pMouse) => pMouse.isButtonPressed(MouseButton.LEFT)
        const defaultEndEvent = (pMouse) => pMouse.isButtonClicked(MouseButton.LEFT)
        /**
         * @type {{[string]: {shape: string, startEvent?: Function, endEvent?: Function}}}
         */
        const typeEntity = {
            SELECT: {
                shape: PrimitiveShape.RECT
            },
            MOVE: {
                shape: PrimitiveShape.RECT
            },
            SCALE: {
                shape: PrimitiveShape.RECT
            },
            ROTATE: {
                shape: PrimitiveShape.RECT
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
                if (!stateManager.isProgress(MoveAction.STATE)) {
                    this.draw(position, props.shape, mouse)
                }
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
        return false
    }

    /**
     * @param {StateManager} stateManager
     * @param {String} type
     */
    startDraw(stateManager, type) {
        stateManager.progressState(type, 1)
        this.currentUnit = null
    }

    /**
     * @param {StateManager} stateManager
     * @param {String} type
     */
    endDraw(stateManager, type) {
        if (this.currentUnit) {
            World.get().deleteUnit(this.currentUnit)
            this.currentUnit = null
        }
    }

    /**
     * @param {Vector} position
     * @param {string} shape
     * @param {Mouse} mouse
     */
    draw(position, shape, mouse) {
        const world = World.get()
        const dragDistance = mouse.getDragDistanceCamera(world.getCamera())
        const newPosition = this.calculateDragPosition(position, world, mouse, dragDistance)
        const size = new Size({width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)})
        if (!this.currentUnit) {
            this.currentUnit = world.getUnitManager().createUnitInstant(SelectionUnitInstant, newPosition, size)
        }
        const transformComponent = this.currentUnit.getComponent(TransformComponent)
        const meshComponent = this.currentUnit.getComponent(MeshComponent)
        transformComponent.setPosition(newPosition)
        meshComponent.setSize(size)
        meshComponent.setGenerated(false)
    }

    /**
     * @param {Vector} position
     * @param {World} world
     * @param {Mouse} mouse
     * @param {Vector} dragDistance
     */
    calculateDragPosition(position, world, mouse, dragDistance) {
        let newX = position.x
        let newY = position.y
        if (dragDistance.x <= 0) {
            newX += dragDistance.x
        }
        if (dragDistance.y <= 0) {
            newY += dragDistance.y
        }
        return new Vector({x: newX, y: newY, z: position.z})
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
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}