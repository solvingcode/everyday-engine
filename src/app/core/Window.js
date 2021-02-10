import Keyboard from './Keyboard.js'
import Mouse from './Mouse.js'
import {SCENE_HEIGHT, SCENE_WIDTH} from './Constant.js'
import Size from '../pobject/Size.js'
import {objectContext} from './Context.js'

/**
 * Handle the window event listeners (keyboard, mouse, ...)
 * @property {Keyboard} keyboard
 * @property {Mouse} mouse
 */
class Window {

    /**
     * @type {Window}
     */
    static instance = null

    constructor() {
        this.keyboard = new Keyboard()
        this.mouse = new Mouse()
        this.size = new Size({width: SCENE_WIDTH, height: SCENE_HEIGHT})
    }

    init() {
        this.initEvents()
        this.initCanvas()
    }

    initCanvas() {
        objectContext.canvas.width = this.size.width
        objectContext.canvas.height = this.size.height
    }

    initEvents() {
        document.addEventListener('keydown', (event) => {
            const key = event.keyCode
            this.keyboard.setKeyPressed(key)
        })
        document.addEventListener('keyup', (event) => {
            const key = event.keyCode
            this.keyboard.setKeyReleased(key)
        })
        document.addEventListener('click', (event) => {
            const key = event.button
            this.mouse.setButtonClicked(key)
        })
        document.addEventListener('dblclick', (event) => {
            const key = event.button
            this.mouse.setButtonDoubleClicked(key)
        })
        document.addEventListener('mousedown', (event) => {
            const key = event.button
            this.mouse.setButtonPressed(key)
        })
        document.addEventListener('mouseup', (event) => {
            const key = event.button
            this.mouse.setButtonReleased(key)
        })
        document.addEventListener('mousemove', () => {
            this.mouse.setMouseMove()
        })
        document.addEventListener('wheel', (event) => {
            this.mouse.setMouseWheel(event.deltaY)
        })
    }

    /**
     * @param {Size} size
     */
    setSize(size){
        this.size = size
        this.initCanvas()
    }

    clear() {
        this.mouse.clear()
    }

    /**
     * @return {Window}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}

export default Window