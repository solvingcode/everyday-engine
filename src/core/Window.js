define(function (require) {
    const Keyboard = require('./Keyboard.js')
    const Mouse = require('./Mouse.js')

    class Window {
        constructor() {
            this.keyboard = new Keyboard()
            this.mouse = new Mouse()
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
            document.addEventListener('mousedown', (event) => {
                const key = event.button
                this.mouse.setButtonPressed(key)
            })
            document.addEventListener('mouseup', (event) => {
                const key = event.button
                this.mouse.setButtonReleased(key)
            })
        }
    }

    return Window
})