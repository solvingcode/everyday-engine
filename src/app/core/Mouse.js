import {objectContext} from './Context.js'
import Vector from '../utils/Vector.js'
import Size from '../pobject/Size.js'

/**
 * Define the mouse inputs (pressed, clicked, mouse position, ...)
 */
class Mouse {
    constructor() {
        this.keydowns = []
        this.keyclicks = []
        this.keydbclicks = []
        this.position = new Vector()
        this.scenePosition = new Vector()
        this.target = null
        this.currentPosition = new Vector()
        this.currentScenePosition = new Vector()
        this.lastPosition = this.currentPosition
        this.mouseWheel = {y: 0}
    }

    /**
     * @param {MouseEvent} event
     * @return {Vector}
     */
    getPosition(event) {
        return new Vector({x: event.clientX, y: event.clientY})
    }

    /**
     * @param {MouseEvent} event
     * @return {EventTarget}
     */
    getTarget(event) {
        return event.target
    }

    /**
     * @param {MouseEvent} event
     * @return {EventTarget[]}
     */
    getPath(event) {
        return event.composedPath()
    }

    /**
     * @param {number} key
     */
    setButtonPressed(key) {
        if (!this.isButtonPressed(key)) {
            this.keydowns.push(key)
        }
        this.position = this.getPosition(event)
        this.target = this.getTarget(event)
        this.path = this.getPath(event)
        this.scenePosition = this.toSceneCoord(this.position)
    }

    /**
     * @param {number} key
     */
    setButtonClicked(key) {
        if (!this.isButtonClicked(key)) {
            this.keyclicks.push(key)
        }
    }

    /**
     * @param {number} key
     */
    setButtonDoubleClicked(key) {
        if (!this.isButtonDoubleClicked(key)) {
            this.keydbclicks.push(key)
        }
    }

    /**
     * @param {number} key
     */
    setButtonReleased(key) {
        if (this.isButtonPressed(key)) {
            let index = this.keydowns.indexOf(key)
            this.keydowns.splice(index, 1)
        }
    }

    /**
     * @param {number} deltaY
     */
    setMouseWheel(deltaY) {
        this.mouseWheel.y = deltaY
        this.target = this.getTarget(event)
    }

    /**
     * Return the distance between the currentPosition and the position
     * of the mouse on the click
     * @returns {Vector}
     */
    getDragDistance() {
        const x = this.currentPosition.x - this.position.x
        const y = this.currentPosition.y - this.position.y
        return new Vector({x, y, z: 0})
    }

    /**
     * @param {Camera} camera
     * @returns {Vector}
     */
    getDragDistanceCamera(camera) {
        const x = this.currentPosition.x - this.position.x
        const y = this.currentPosition.y - this.position.y
        return camera.fromCameraScale(new Vector({x, y, z: 0}))
    }

    /**
     * Calculate and return the area of drag (selection)
     * @param {Camera} camera
     * @return {{position: Vector, size: Size}}
     */
    getDragArea(camera) {
        const dragDistance = this.getDragDistanceCamera(camera)
        const scenePosition = camera.fromCameraScale(this.scenePosition)
        let newX = scenePosition.x
        let newY = scenePosition.y
        if (dragDistance.x <= 0) {
            newX += dragDistance.x
        }
        if (dragDistance.y <= 0) {
            newY += dragDistance.y
        }
        return {
            position: new Vector({x: newX, y: newY}),
            size: new Size({width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)})
        }
    }

    /**
     * Drag and drop (return the drag distance and update the initial position)
     * @param {Camera} camera
     * @return {Vector}
     */
    dragAndDrop(camera) {
        const dragDistance = this.getDragDistanceCamera(camera)
        this.position = this.currentPosition
        this.scenePosition = this.currentScenePosition
        return dragDistance
    }

    /**
     * @param {number} key
     * @return {Boolean}
     */
    isButtonPressed(key) {
        let index = this.keydowns.indexOf(key)
        return index !== -1
    }

    /**
     * @param {number} key
     * @return {Boolean}
     */
    isButtonClicked(key) {
        let index = this.keyclicks.indexOf(key)
        return index !== -1
    }

    /**
     * @param {number} key
     * @return {Boolean}
     */
    isButtonDoubleClicked(key) {
        let index = this.keydbclicks.indexOf(key)
        return index !== -1
    }

    /**
     * @return {Boolean}
     */
    isMouseMove() {
        return this.lastPosition.x !== this.currentPosition.x ||
            this.lastPosition.y !== this.currentPosition.y
    }

    /**
     * @return {{y: number}}
     */
    getMouseWheel() {
        return this.mouseWheel
    }

    /**
     * Convert position to scene coordinates
     * @param {Vector} position
     * @return {Vector}
     */
    toSceneCoord({x, y}) {
        const {left: sceneCanvasX, top: sceneCanvasY} = objectContext.canvas.getBoundingClientRect()
        return new Vector({x: x - sceneCanvasX, y: y - sceneCanvasY})
    }

    setMouseMove() {
        this.lastPosition = this.currentPosition
        this.currentPosition = this.getPosition(event)
        this.currentScenePosition = this.toSceneCoord(this.currentPosition)
    }

    clearKeyClicked() {
        this.keyclicks = []
        this.keydbclicks = []
    }

    clear() {
        this.clearKeyClicked()
        this.mouseWheel.y = 0
    }
}

export const MouseButton = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
}

export const CURSOR = {
    DEFAULT: 'default',
    CROSSHAIR: 'crosshair',
    POINTER: 'pointer',
    MOVE: 'move',
    MOVE_ENTITY: 'moveentity',
    RESIZE: 'ew-resize'
}

export default Mouse