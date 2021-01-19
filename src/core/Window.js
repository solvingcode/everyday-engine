define(function (require) {
    const Keyboard = require('./Keyboard.js')
    const Mouse = require('./Mouse.js')

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
        }

        init(){
            this.initEvents()
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

        clear(){
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

    return Window
})