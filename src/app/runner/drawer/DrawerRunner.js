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
import GeometryHelper from '../../utils/GeometryHelper.js'
import Window from '../../core/Window.js'

/**
 * @abstract
 */
export default class DrawerRunner extends Runner {

    static instance = null

    /**
     * @type {{unit: Unit}}
     */
    drawState

    constructor() {
        super()
    }

    /**
     * @abstract
     * @return {Camera}
     */
    getCamera() {
        throw new SystemError(`${this.constructor.name}.getCamera must be implemented`)
    }

    /**
     * @abstract
     */
    deleteUnit() {
        throw new SystemError(`${this.constructor.name}.deleteUnit must be implemented`)
    }

    /**
     * @abstract
     * @param {Class} instance
     * @param {Vector} position
     * @param {Size} size
     * @return {Unit}
     */
    createUnit(instance, position, size) {
        throw new SystemError(`${this.constructor.name}.createUnit must be implemented`)
    }

    /**
     * @abstract
     * @return {{[string]: {instance: Class, startEvent?: Function, endEvent?: Function}}}
     */
    getDrawStateTypes() {
        throw new SystemError(`${this.constructor.name}.getDrawStateTypes must be implemented`)
    }

    /**
     * @abstract
     * @return {boolean}
     */
    hasToRestartDrawState(){
        throw new SystemError(`${this.constructor.name}.hasToRestartDrawState must be implemented`)
    }

    /**
     * @override
     */
    isHandle(window) {
        return window.mouse.isMouseMove()
    }

    /**
     * @param {Mouse} mouse
     * @param {Camera} camera
     * @return {Vector}
     */
    getPosition(mouse, camera) {
        const scenePosition = new Vector(mouse.scenePosition)
        const vector3d = camera.fromCameraScale(scenePosition)
        return this.getCamera().fromCanvasCoord(vector3d)
    }

    /**
     * @param {Mouse} mouse
     * @param {Camera} camera
     * @return {Vector}
     */
    getCurrentPosition(mouse, camera) {
        const currentScenePosition = new Vector(mouse.currentScenePosition)
        const vector3d = camera.fromCameraScale(currentScenePosition)
        return this.getCamera().fromCanvasCoord(vector3d)
    }

    /**
     * @override
     */
    execute() {
        const mouse = Window.get().mouse
        const menu = Menu.get()
        const stateManager = StateManager.get()
        const camera = this.getCamera()
        const position = this.getPosition(mouse, camera)
        const currentPosition = this.getCurrentPosition(mouse, camera)
        const defaultStartEvent = (pMouse) => pMouse.isButtonPressed(MouseButton.LEFT)
        const defaultEndEvent = (pMouse) => pMouse.isButtonClicked(MouseButton.LEFT)
        const typeEntity = this.getDrawStateTypes()
        for (const drawType in typeEntity) {
            if (typeEntity.hasOwnProperty(drawType)) {
                const type = `DRAW_${drawType}`
                const props = typeEntity[drawType]
                const startEvent = props.startEvent || defaultStartEvent
                const endEvent = props.endEvent || defaultEndEvent
                if (startEvent(mouse) && stateManager.isStart(type) && this.isPositionValid(mouse, menu)) {
                    this.startDraw(stateManager, type)
                }
                if (stateManager.isProgress(type)) {
                    if (!stateManager.isProgress(MoveAction.STATE) && startEvent(mouse)) {
                        this.draw(position, currentPosition, props.instance, mouse)
                    }
                    if (endEvent(mouse)) {
                        this.stopDraw(stateManager, type)
                        if(this.hasToRestartDrawState()){
                            stateManager.startState(type, 1, {unit: null})
                        }
                    }
                } else if (stateManager.isStop(type)) {
                    this.endDraw(stateManager, type)
                }
            }
        }
        return false
    }

    /**
     * @param {string} type
     * @return {{unit: Unit}}
     */
    getDrawState(type) {
        const stateManager = StateManager.get()
        const drawState = stateManager.getProgressData(type, 1) || stateManager.getStopData(type, 1)
        if(!drawState || !drawState.hasOwnProperty('unit')){
            throw new SystemError('Cannot start drawing (Unit not initialized)')
        }
        return drawState
    }

    /**
     * @return {Unit}
     */
    getDrawUnit(){
        return this.drawState.unit
    }

    /**
     * @param {Unit} unit
     */
    setDrawUnit(unit){
        this.drawState.unit = unit
    }

    /**
     * @param {StateManager} stateManager
     * @param {String} type
     */
    startDraw(stateManager, type) {
        stateManager.progressState(type, 1)
        this.drawState = this.getDrawState(type)
    }

    /**
     * @param {StateManager} stateManager
     * @param {String} type
     */
    stopDraw(stateManager, type) {
        stateManager.stopState(type, 1)
    }

    /**
     * @param {StateManager} stateManager
     * @param {String} type
     */
    endDraw(stateManager, type) {
        if (this.getDrawUnit()) {
            this.deleteUnit()
        }
        stateManager.endState(type, 1)
    }

    /**
     * @param {Vector} position
     * @param {Vector} currentPosition
     * @param {Class} instance
     * @param {Mouse} mouse
     */
    draw(position, currentPosition, instance, mouse) {
        const dragDistance = mouse.getDragDistanceCamera(this.getCamera())
        const newPosition = this.calculateDragPosition(position, mouse, dragDistance)
        const size = new Size({width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)})
        const {vertices: diagonalVertices} = GeometryHelper.getRectByDistance(position, currentPosition)
        if (!this.getDrawUnit()) {
            this.setDrawUnit(this.createUnit(instance, newPosition, size))
        }
        const transformComponent = this.getDrawUnit().getComponent(TransformComponent)
        const meshComponent = this.getDrawUnit().getComponent(MeshComponent)
        meshComponent.setShapeVertices(diagonalVertices)
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