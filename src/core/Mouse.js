define(function () {
    /**
     * Define the mouse inputs (pressed, clicked, mouse position, ...)
     */
    class Mouse {
        constructor() {
            this.keydowns = []
            this.keyclicks = []
            this.keydbclicks = []
            this.position = { x: 0, y: 0 }
            this.currentPosition = { x: 0, y: 0 }
            this.lastPosition = this.currentPosition
        }

        getPosition(event) {
            return { x: event.clientX, y: event.clientY }
        }

        setButtonPressed(key) {
            if (!this.isButtonPressed(key)) {
                this.keydowns.push(key)
            }
            this.position = this.getPosition(event)
        }

        setButtonClicked(key) {
            if (!this.isButtonClicked(key)) {
                this.keyclicks.push(key)
            }
        }

        setButtonDoubleClicked(key) {
            if (!this.isButtonDoubleClicked(key)) {
                this.keydbclicks.push(key)
            }
        }

        setButtonReleased(key) {
            if (this.isButtonPressed(key)) {
                var index = this.keydowns.indexOf(key)
                this.keydowns.splice(index, 1)
            }
        }

        getDragDistance() {
            const x = this.currentPosition.x - this.position.x
            const y = this.currentPosition.y - this.position.y
            return { x, y }
        }

        isButtonPressed(key) {
            var index = this.keydowns.indexOf(key)
            return index !== -1
        }

        isButtonClicked(key) {
            var index = this.keyclicks.indexOf(key)
            return index !== -1
        }

        isButtonDoubleClicked(key) {
            var index = this.keydbclicks.indexOf(key)
            return index !== -1
        }

        isMouseMove() {
            return this.lastPosition.x !== this.currentPosition.x ||
                this.lastPosition.y !== this.currentPosition.y
        }

        setMouseMove() {
            this.lastPosition = this.currentPosition
            this.currentPosition = this.getPosition(event)
        }

        clearKeyClicked() {
            this.keyclicks = []
            this.keydbclicks = []
        }

        clearKeyPressed() {
            this.keydowns = []
        }
    }

    Mouse.MouseButton = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    }

    Mouse.CURSOR = {
        DEFAULT: 'default',
        CROSSHAIR: 'crosshair',
        POINTER: 'pointer',
        MOVE: 'move',
        MOVE_ENTITY: 'moveentity'
    }

    return Mouse
})