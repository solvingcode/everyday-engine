import StateManager from '../../state/StateManager.js'
import Runner from '../Runner.js'
import {MouseButton} from '../../core/Mouse.js'
import Vector from '../../utils/Vector.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import Size from '../../pobject/Size.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import MoveAction from '../action/edit/MoveAction.js'
import Menu from '../../layout/Menu.js'
import SystemError from '../../exception/type/SystemError.js'

/**
 * @abstract
 */
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
     * @abstract
     * @return {Camera}
     */
    getCamera(){
        throw new SystemError(`${this.constructor.name}.getCamera must be implemented`)
    }

    /**
     * @abstract
     */
    deleteUnit(){
        throw new SystemError(`${this.constructor.name}.deleteUnit must be implemented`)
    }

    /**
     * @abstract
     * @param {Class} instance
     * @param {Vector} position
     * @param {Size} size
     * @return {Unit}
     */
    createUnit(instance, position, size){
        throw new SystemError(`${this.constructor.name}.createUnit must be implemented`)
    }

    /**
     * @abstract
     * @return {{[string]: {instance: Class, startEvent?: Function, endEvent?: Function}}}
     */
    getDrawStateTypes(){
        throw new SystemError(`${this.constructor.name}.getDrawStateTypes must be implemented`)
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
    execute(mouse) {
        const menu = Menu.get()
        const stateManager = StateManager.get()
        const camera = this.getCamera()
        const scenePosition = new Vector(mouse.scenePosition)
        const vector3d = camera.fromCameraScale(scenePosition)
        const position = this.getCamera().fromCanvasCoord(vector3d)
        const defaultStartEvent = (pMouse) => pMouse.isButtonPressed(MouseButton.LEFT)
        const defaultEndEvent = (pMouse) => pMouse.isButtonClicked(MouseButton.LEFT)
        const typeEntity = this.getDrawStateTypes()
        for(const drawType in typeEntity){
            if(typeEntity.hasOwnProperty(drawType)){
                const type = `DRAW_${drawType}`
                const props = typeEntity[drawType]
                const startEvent = props.startEvent || defaultStartEvent
                const endEvent = props.endEvent || defaultEndEvent
                if (startEvent(mouse) && stateManager.isStart(type) && this.isPositionValid(mouse, menu)) {
                    this.startDraw(stateManager, type)
                }
                if (stateManager.isProgress(type)) {
                    if (!stateManager.isProgress(MoveAction.STATE)) {
                        this.draw(position, props.instance, mouse)
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
            }
        }
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
            this.deleteUnit()
            this.currentUnit = null
        }
    }

    /**
     * @param {Vector} position
     * @param {Class} instance
     * @param {Mouse} mouse
     */
    draw(position, instance, mouse) {
        const dragDistance = mouse.getDragDistanceCamera(this.getCamera())
        const newPosition = this.calculateDragPosition(position, mouse, dragDistance)
        const size = new Size({width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)})
        if (!this.currentUnit) {
            this.currentUnit = this.createUnit(instance, newPosition, size)
        }
        const transformComponent = this.currentUnit.getComponent(TransformComponent)
        const meshComponent = this.currentUnit.getComponent(MeshComponent)
        transformComponent.setPosition(newPosition)
        meshComponent.setSize(size)
        meshComponent.setGenerated(false)
    }

    /**
     * @param {Vector} position
     * @param {Mouse} mouse
     * @param {Vector} dragDistance
     */
    calculateDragPosition(position, mouse, dragDistance) {
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